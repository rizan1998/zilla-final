const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./src/database");
const errorHandling = require("./src/middleware/errorHandling");
const dateFormat = require("./src/middleware/formatDate");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
connectDB();

/**
 * routing
 */
const routesApiV1 = require("./src/routes/v1routes");
app.use("/api/v1", routesApiV1);
app
  .route("*")
  .get((req, res) => {
    res.send("you're inside fallback route");
  })
  .post((req, res) => {
    res.send("you're inside fallback route");
  })
  .put((req, res) => {
    res.send("you're inside fallback route");
  })
  .delete((req, res) => {
    res.send("you're inside fallback route");
  });

/**
 * error handling
 */
app.use(errorHandling);

module.exports = app;
