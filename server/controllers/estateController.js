const Estate = require("../models/Estate");

class EstateController {
    async create(req, res) {
        try {
            let { label, price, brandId, typeId, info, img } = req.body;

            const estate = await Estate.create({
                label,
                price,
                brandId,
                typeId,
                img,
                info
            });

            return res.json(estate);
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }

    async getAll(req, res) {
        let { brandId, typeId, cityId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        let estates;
        if (!brandId && !typeId && !cityId) {
            const content = await Estate.find().skip(offset).limit(limit);

            estates = content;
        }
        if (brandId && !typeId && !cityId) {
            const content = await Estate.find({ brandId })
                .skip(offset)
                .limit(limit);

            estates = content;
        }
        if (!brandId && typeId && !cityId) {
            const content = await Estate.find({ typeId })
                .skip(offset)
                .limit(limit);

            estates = content;
        }
        if (!brandId && !typeId && cityId) {
            const content = await Estate.find({ cityId })
                .skip(offset)
                .limit(limit);

            estates = content;
        }
        if (brandId && typeId && !cityId) {
            const content = await Estate.find({ typeId, brandId })
                .skip(offset)
                .limit(limit);

            estates = content;
        }
        if (!brandId && typeId && cityId) {
            const content = await Estate.find({ typeId, cityId })
                .skip(offset)
                .limit(limit);

            estates = content;
        }
        if (brandId && !typeId && cityId) {
            const content = await Estate.find({ brandId, cityId })
                .skip(offset)
                .limit(limit);

            estates = content;
        }
        if (brandId && typeId && cityId) {
            const content = await Estate.find({ brandId, typeId, cityId })
                .skip(offset)
                .limit(limit);

            estates = content;
        }
        return res.json(estates);
    }

    async getOne(req, res) {
        const { estateId } = req.params;
        const device = await Estate.findById({ estateId });
        return res.json(device);
    }

    async update(req, res) {
        try {
            const { estateId } = req.params;
            const updatedEstate = await Estate.findByIdAndUpdate(
                estateId,
                req.body,
                {
                    new: true
                }
            );
            res.send(updatedEstate);
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }
}

module.exports = new EstateController();
