const express = require("express");
const Category = require("../models/Category");
const router = express.Router({ mergeParams: true });

router.get("/cars", () => {});
router.get("/flats", () => {});
router.get("/bathhouses", () => {});
router.get("/cottages", () => {});

module.exports = router;
