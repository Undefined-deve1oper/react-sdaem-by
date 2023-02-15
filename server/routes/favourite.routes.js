const express = require("express");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth.middleware");
const favouriteController = require("../controllers/favouriteController");

router
    .route("/")
    .get(auth, favouriteController.getOne)
    .post(auth, favouriteController.create);

router.delete("/:favouriteId", auth, favouriteController.delete);

module.exports = router;
