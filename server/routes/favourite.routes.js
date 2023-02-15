const express = require("express");
const router = express.Router({ mergeParams: true });
// const auth = require("../middleware/auth.middleware");
const favouriteController = require("../controllers/favouriteController");

router.get("/", favouriteController.getOne);

router.post("/", favouriteController.create);

router.delete("/:favouriteId", favouriteController.delete);

module.exports = router;
