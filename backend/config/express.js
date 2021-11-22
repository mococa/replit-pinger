const connection = require("./db-config");
const PORT = process.env.PORT || 3000;
const configure_express = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello world");
  });
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} 🚀`);
    connection();
  });
};
module.exports = configure_express;
