const express = require("express");
const router = express.Router({ mergeParams: true });
const postController = require("../controllers/postController");

router.get("/", postController.getAll);

router.get("/:postId", postController.getOne);

module.exports = router;
