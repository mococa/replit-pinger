const { model, Schema } = require('mongoose');

const Site = new Schema({
    name: {
        type: String,
        required: [true, "É necessário um nome para o site"]
    },
    url: {
        type: String,
        required: [true, 'É necessário uma URL para o site'],
        unique: true,
        sparse: true
    },
    owner: {
        type: String,
        default: "Anônimo"
    },
})
Site.index({ "url": 1 }, { unique: true });
const SiteModel = model("site", Site, "sites");
module.exports = SiteModel