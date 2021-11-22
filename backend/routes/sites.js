const { Router } = require("express");
const SiteController = require("../controllers/SiteController");
const errorHandler = require("../helpers");
const sites_router = Router();
const router = sites_router;

router.get("/", async (req, res) => {
  const sites = await SiteController.find();
  return res.json(sites);
});
router.post("/", async (req, res) => {
  try {
    const sites = await SiteController.create(req.body);
    return res.json(sites);
  } catch (err) {
    return errorHandler(err, res);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const sites = await SiteController.delete(req.params);
    return res.json(sites);
  } catch (err) {
    return errorHandler(err, res);
  }
});

module.exports = sites_router;
