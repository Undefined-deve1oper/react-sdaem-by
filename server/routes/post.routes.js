const express = require("express");
const router = express.Router({ mergeParams: true });
const postController = require("../controllers/postController");
const auth = require("../middleware/auth.middleware");

router.get("/", postController.getAll);
router.get("/:postId", postController.getOne);
router.post("/", auth, postController.create);

module.exports = router;
