const express = require("express");
const router = express.Router({ mergeParams: true });
const commentController = require("../controllers/commentController");
const auth = require("../middleware/auth.middleware");

router
    .route("/")
    .get(auth, commentController.getOne)
    .post(auth, commentController.create);
router.delete("/:commentId", auth, commentController.delete);

module.exports = router;
