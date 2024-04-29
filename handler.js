const http = require("http");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

var NODE_ENV = process.env.NODE_ENV || "development";

app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 100000,
  })
);

app.use(
  express.json({
    type: "application/json",
    limit: "50mb",
  })
);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to practice session!!!");
});

app.set("port", process.env.PORT || 3001);

let server = http.createServer(app);

server.listen(app.get("port"), "0.0.0.0", () => {
  console.log(
    `Express server listening on http://localhost:${app.get("port")}`
  );
});
