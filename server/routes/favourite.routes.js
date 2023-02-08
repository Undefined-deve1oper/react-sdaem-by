const express = require("express");
const Favourite = require("../models/Favourite");
const router = express.Router({ mergeParams: true });

router.get("/", () => {});

router.post("/", () => {});

router.delete("/:likeId", () => {});

module.exports = router;
