const { Router } = require("express");
const sites_router = require("./sites");

const router = Router().use("/sites", sites_router);

exports.default = router;
