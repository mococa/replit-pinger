require("dotenv").config();
const express = require("express");
const connection = require("./config/db-config");
const configure_express = require("./config/express");
const configure_schedules = require("./config/schedule");

const PORT = process.env.PORT || 3000;
const app = express();

configure_schedules();
configure_express(app);

app.get("/", (req, res) => {
  res.send("route /");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} 🚀`);
  connection();
});
