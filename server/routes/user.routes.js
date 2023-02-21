const express = require("express");
const router = express.Router({ mergeParams: true });
const userController = require("../controllers/userController");
const auth = require("../middleware/auth.middleware");

router.get("/", auth, userController.getUsers);
router.post("/:userId/upload_avatar", auth, userController.savePhoto);
router.patch("/:userId", auth, userController.changeUser);

module.exports = router;
