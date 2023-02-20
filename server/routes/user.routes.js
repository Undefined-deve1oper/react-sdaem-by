const express = require("express");
const router = express.Router({ mergeParams: true });
const userController = require("../controllers/userController");
const auth = require("../middleware/auth.middleware");

router.get("/", auth, userController.getUsers);
router.patch("/:userId", auth, userController.changeUser);

module.exports = router;
