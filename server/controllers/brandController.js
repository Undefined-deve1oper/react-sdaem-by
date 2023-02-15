const Brand = require("../models/Brand");

class BrandController {
    async create(req, res) {
        const { name } = req.body;
        const brand = await Brand.create({ name });
        return res.json(brand);
    }

    async getAll(req, res) {
        const brands = await Brand.find();
        return res.json(brands);
    }

    async getOne(req, res) {
        const { id } = req.params;
        const brand = await Brand.find({ id });
        return res.json(brand);
    }
}

module.exports = new BrandController();
