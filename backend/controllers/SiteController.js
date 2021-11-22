const SiteModel = require("../models/site");

class SiteController {
    static async create({ name, url, owner }) {
        if (!url || !name) {
            throw {
                message: "Por favor, preencha todos os campos necessários",
                status: 400
            }
        }
        const duplicate = await SiteModel.findOne({ url });
        if (duplicate)
            throw {
                message: "Essa URL já está cadastrada"
            }
        await SiteModel.create({ name, url, owner });
        return await this.find()
    }
    static async find(query = {}) {
        return await SiteModel.find(query).lean();
    }
    static async delete({ id }) {
        if (!id)
            throw {
                message: "ID não especificado"
            }
        await SiteModel.findByIdAndRemove(id);
        return await this.find()
    }
}
module.exports = SiteController