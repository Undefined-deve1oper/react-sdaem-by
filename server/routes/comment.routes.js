const express = require("express");
const router = express.Router({ mergeParams: true });
const commentController = require("../controllers/commentController");

router.route("/").get(commentController.getOne).post(commentController.create);
router.delete("/:commentId", commentController.delete);

module.exports = router;
