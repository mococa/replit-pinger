const { router } = require("../routes/index");
const cors = require("cors");
const express = require("express");
const configure_express = (app) => {
  app.use(express.json());
  app.use(cors());
  app.use(router);
};
module.exports = configure_express;
