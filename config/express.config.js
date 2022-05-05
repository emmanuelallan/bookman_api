const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const routes = require("../routes/index.route");
const cors = require("cors");
const app = express();

// compress response bodies
app.use(compression());

// enable cors
app.use(cors());

// secure http headers
app.use(helmet());

// manage api routes
app.use("/api/v1", routes);

module.exports = app;
