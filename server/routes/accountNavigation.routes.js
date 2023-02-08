const express = require("express");
const AccountNavigation = require("../models/AccountNavigation");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
    try {
        const list = await AccountNavigation.find();
        res.status(200).send(list);
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    }
});

module.exports = router;
