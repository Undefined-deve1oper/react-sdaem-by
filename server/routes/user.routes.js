const express = require("express");
const router = express.Router({ mergeParams: true });
const userController = require("../controllers/userController");
const auth = require("../middleware/auth.middleware");

router.get("/", userController.getUsers);
router.post("/:userId/upload_avatar", auth, userController.savePhoto);
router.patch("/:userId", auth, userController.changeUser);
router.delete("/:userId", auth, userController.deleteUser);

module.exports = router;
