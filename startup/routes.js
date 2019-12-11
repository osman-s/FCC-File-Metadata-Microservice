const express = require("express");
const home = require("../routes/home");
const fileMetadata = require("../routes/fileMetadata");
const users = require("../routes/users");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.static('public'));
  app.use(express.json());
  app.use("/", home);
  app.use("/api/fileanalyse", fileMetadata);
  app.use("/api/users", users);

  app.use(error);
};
