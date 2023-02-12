const express = require("express");
const Favourite = require("../models/Favourite");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth.middleware");

router.get("/", async (req, res) => {
    try {
        const { orderBy, equalTo } = req.query;
        const favourites = await Favourite.find({ [orderBy]: equalTo });
        res.status(200).send(favourites);
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    }
});

router.post("/", auth, async (req, res) => {
    try {
        const newFavourite = await Favourite.create({
            ...req.body,
            userId: req.user.id
        });
        res.status(201).send(newFavourite);
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    }
});

router.delete("/:favouriteId", auth, async (req, res) => {
    try {
        const { favouriteId } = req.params;
        const removedFavourite = await Favourite.findById(favouriteId);

        if (removedFavourite.userId.toString() === req.user.id) {
            await removedFavourite.remove();
            return res.send(null);
        } else {
            res.status(401).json({
                message: "Unauthorized"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    }
});

module.exports = router;
