const express = require("express");
const router = express.Router({ mergeParams: true });
const estateController = require("../controllers/estateController");
const auth = require("../middleware/auth.middleware");

router.get("/", estateController.getAll);
router.get("/:estateId", estateController.getOne);
router.patch("/:estateId", auth, estateController.update);
router.post("/", auth, estateController.create);

module.exports = router;
