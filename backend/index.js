require("dotenv").config();
const cors = require("cors");
const express = require("express");
const configure_express = require("./config/express");
const configure_schedules = require("./config/schedule");
const SiteController = require("./controllers/SiteController");
const errorHandler = require("./helpers");

const app = express();

app.use(express.json());

const corsConfig = {
  // origin: (origin, callback) => {
  //   console.log({ origin });
  //   //process.env.FRONTEND_URL,
  // },
  origin: process.env.FRONTEND_URL
};

app.use(cors(corsConfig));

configure_express(app);
configure_schedules();

app.get("/sites", async (req, res) => {
  const sites = await SiteController.find();
  return res.json(sites);
});
app.post("/", async (req, res) => {
  try {
    const sites = await SiteController.create(req.body);
    return res.json(sites);
  } catch (err) {
    return errorHandler(err, res);
  }
});
app.delete("/:id", async (req, res) => {
  try {
    const sites = await SiteController.delete(req.params);
    return res.json(sites);
  } catch (err) {
    return errorHandler(err, res);
  }
});
