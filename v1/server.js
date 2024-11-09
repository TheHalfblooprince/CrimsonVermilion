import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import { URI, PORT } from "./config/index.js";
import Router from "./routes/index.js";
import { cookie } from "express-validator";

// Setp 01. create a server.

const server = express();

// configure header information.
// Allow requests from any source, In real Production, this should be limited to allowed origins only.

server.use(cors());
server.disable("x-powered-by"); // reduce fingerprinting.
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// Step 02, Connect database.
// Setup Mongoose promise to global promise,
mongoose.promise = global.Promise;
mongoose.set("strictQuery", false);

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to Database"))
  .catch((error) => {
    console.log("Error", error);
  });

// Setp 03, Configure routes,
// conenct Route Handler to Server.

Router(server);
// StartUp the server.

server.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}`);
});
