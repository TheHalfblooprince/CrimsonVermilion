import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function Verify(req, res, next) {
  try {
    const authHeader = req.headers["cookie"]; // get the session cookie from request header

    if (!authHeader) return res.sendStatus(401); // if there is no cookie from request header, send an unauthorized response.
    const cookie = authHeader.split("=")[1]; // If there is, split the cookie string to get the actual jwt
    const accessToken = cookie.split(";")[0];
    const checkIfBlacklisted = await Blacklist.findOne({ token: accessToken }); // Check if that token is blacklisted
    // if true, send an unathorized message, asking for a re-authentication.
    if (checkIfBlacklisted)
      return res
        .status(401)
        .json({ message: "This session has expired. Please login" });
    // if token has not been blacklisted, verify with jwt to see if it has been tampered with or not.
    // that's like checking the integrity of the accessToken

    // Verify using jwt to see if token has been tampered with or if it has expired.
    // that's like checking the integrity of the cookie
    jwt.verify(cookie, config.SECRET_ACCESS_TOKEN, async (err, decoded) => {
      if (err) {
        // if token has been altered or has expired, return an unauthorized error
        return res
          .status(401)
          .json({ message: "This session has expired. Please login" });
      }

      const { id } = decoded; // get user id from the decoded token
      const user = await User.findById(id); // find user by that `id`
      const { password, ...data } = user._doc; // return user object without the password
      req.user = data; // put the data object into req.user
      next();
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  }
}

export function VerifyRole(req, res, next) {
  try {
    const user = req.user; // we have to access to the user object from the request.
    const { role } = user; // extract the user role
    // check if the user has no advance privileges
    // return unauthorized response.
    if (role !== "0x88") {
      return res.status(401).json({
        status: "failed",
        message: "YOu are not Authorized to View this Page",
      });
    }

    next(); // continue to the next middleware or function.
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  }
}
