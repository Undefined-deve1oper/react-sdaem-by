const express = require("express");
const router = express.Router({ mergeParams: true });
const estateController = require("../controllers/estateController");
const auth = require("../middleware/auth.middleware");

router.post("/", auth, estateController.create);
router.get("/", estateController.getAll);
router.get("/:id", estateController.getOne);

module.exports = router;
