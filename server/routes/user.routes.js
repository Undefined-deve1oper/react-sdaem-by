const express = require("express");
const User = require("../models/User");
const router = express.Router({ mergeParams: true });

router.patch("/:userId", () => {});

router.get("/", () => {});

module.exports = router;
