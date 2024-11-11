import Auth from "./auth.js";
import express from "express";
import { Verify, VerifyRole } from "../middleware/verify.js";
import { Logout } from "../controllers/auth.js";
// const app = express();

// const Router = (server) => {
//   // home route with a get method and a handler.

//   app.use("/v1/auth", Auth);

//   server.get("/v1", (req, res) => {
//     try {
//       res.status(200).json({
//         status: "success",
//         data: [],
//         message: "Welcome to Our API Homepage",
//       });
//     } catch (err) {
//       res.status(500).json({
//         status: "error",
//         message: "Internal server error",
//       });
//     }
//   });
// };

// export default Router;

const Router = (app) => {
  // Auth route
  app.use("/v1/auth", Auth);

  // Home route with a get method and a handler
  app.get("/v1", (req, res) => {
    try {
      res.status(200).json({
        status: "success",
        data: [],
        message: "Welcome to Our API Homepage",
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  });

  app.get("/v1/user", Verify, (req, res) => {
    res.status(200).json({
      status: "success",
      message: "Welcome to the your Dashboard!",
    });
  });

  app.get("/v1/admin", VerifyRole, (req, res) => {
    res.status(200).json({
      status: "success",
      message: "Welcome to the Admin Portal!",
    });
  });

  app.get("/logout", Logout);
};

export default Router;
