const express = require("express");
const ticketController = require("../controllers/ticketController");
const auth = require("../middleware/auth.middleware");
const router = express.Router({
    mergeParams: true
});

router.get("/", auth, ticketController.getOne);

router.post("/", ticketController.create);

router.put("/:ticketId", ticketController.update);

router.delete("/:ticketId", ticketController.delete);

module.exports = router;
