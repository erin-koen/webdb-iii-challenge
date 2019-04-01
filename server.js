const express = require("express");
const helmet = require("helmet");

//bring in routers
const CohortRouter = require("./Data/Routers/CohortRouter.js");
const StudentRouter = require("./Data/Routers/StudentRouter.js");

//Declare server
const server = express();
//Middleware
server.use(helmet());
server.use(express.json());
// assign routing
server.use("/api/cohorts", CohortRouter);
server.use("/api/students", StudentRouter);

//throw up something for the root route
server.get("/", (req, res) => {
  res.send(`<h1>TGIWendesday<h1>`);
});

module.exports = server;
