const express = require("express");
const Category = require("../models/Category");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
    try {
        const { orderBy, equalTo } = req.query;
        const category = await Category.find({ [orderBy]: equalTo });
        res.status(200).send(category);
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    }
});

module.exports = router;
