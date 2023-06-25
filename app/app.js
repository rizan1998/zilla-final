const express = require("express");
const bodyParser = require("body-parser");
const swaggerConfig = require("./swagger");
const connectDB = require("./src/database");
const cors = require("cors");
const errorHandling = require("./src/middleware/errorHandling");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
connectDB();

app.use(cors("*"));

/**
 * routing
 */
const routesApiV1 = require("./src/routes/v1routes");
swaggerConfig(app);

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
