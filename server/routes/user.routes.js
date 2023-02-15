const express = require("express");
const User = require("../models/User");
const router = express.Router({ mergeParams: true });
// const auth = require("../middleware/auth.middleware");
const userController = require("../controllers/userController");

router.get("/", userController.getUser);

router.patch("/:userId", userController.changeUser);

module.exports = router;
