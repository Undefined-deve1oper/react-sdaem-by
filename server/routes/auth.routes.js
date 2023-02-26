const express = require("express");
const { check } = require("express-validator");
const router = express.Router({ mergeParams: true });
const authController = require("../controllers/authController");

router.post("/signUp", [
    check("email", "Некоректный email").isEmail(),
    check("password", "Минимальная длина пароля 6 символов").isLength({
        min: 6
    }),
    authController.signUp
]);

router.post("/signIn", [
    check("email", "Некоректный email").normalizeEmail().isEmail(),
    check("password", "Минимальная длина пароля 6 символов").exists(),
    authController.signIn
]);

router.post("/token", authController.token);

module.exports = router;
