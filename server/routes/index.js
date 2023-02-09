const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/comment", require("./comment.routes"));
router.use("/news", require("./news.routes"));
router.use("/favourite", require("./favourite.routes"));
router.use("/category", require("./category.routes"));
router.use("/user", require("./user.routes"));

module.exports = router;
