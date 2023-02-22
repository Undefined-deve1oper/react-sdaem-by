const express = require("express");
const auth = require("../middleware/auth.middleware");
const bookingController = require("../controllers/bookingController");
const router = express.Router({
    mergeParams: true
});

router.get("/", bookingController.getAll);

router.post("/", auth, bookingController.create);

router.delete("/:bookingId", auth, bookingController.delete);

module.exports = router;
