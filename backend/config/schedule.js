const axios = require("axios").default;
const schedule = require("node-schedule");
const SiteController = require("../controllers/SiteController");

const configure_schedules = () => {
  schedule.scheduleJob("*/5 * * * *", async function () {
    const sites = await SiteController.find();
    sites.forEach((site) => {
      axios
        .get(site.url)
        .then(() => {
          console.info(`${site.name} pinged!`);
        })
        .catch(() => {
          console.error(`failed to ping ${site.name}`);
        });
    });
  });
};

module.exports = configure_schedules;
