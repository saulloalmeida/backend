const express = require("express");
require("dotenv").config();

const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
module.exports = app;
