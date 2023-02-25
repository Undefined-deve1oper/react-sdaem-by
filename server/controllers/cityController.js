const City = require("../models/City");

class CityController {
    async create(req, res) {
        const { name } = req.body;
        const city = await City.create({ name });
        return res.json(city);
    }

    async getAll(req, res) {
        const cities = await City.find();
        return res.json(cities);
    }

    async getOne(req, res) {
        const { id } = req.params;
        const city = await City.find({ _id: id });
        return res.json(city);
    }
}

module.exports = new CityController();
