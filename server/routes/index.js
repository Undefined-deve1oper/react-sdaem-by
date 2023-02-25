const express = require("express");
const router = express.Router({ mergeParams: true });
const authRoutes = require("./auth.routes");
const postRoutes = require("./post.routes");
const estatesRoutes = require("./estates.routes");
const brandRouter = require("./brand.routes");
const typeRouter = require("./type.routes");
const favouriteRoutes = require("./favourite.routes");
const commentRoutes = require("./comment.routes");
const userRoutes = require("./user.routes");
const bookingRoutes = require("./booking.routes");
const ticketRoutes = require("./ticket.routes");
const cityRoutes = require("./city.routes");

router.use("/auth", authRoutes);
router.use("/comment", commentRoutes);
router.use("/posts", postRoutes);
router.use("/favourite", favouriteRoutes);
router.use("/estates", estatesRoutes);
router.use("/brand", brandRouter);
router.use("/type", typeRouter);
router.use("/user", userRoutes);
router.use("/booking", bookingRoutes);
router.use("/ticket", ticketRoutes);
router.use("/city", cityRoutes);

module.exports = router;
