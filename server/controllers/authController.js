const bycrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { generateUserData } = require("../utils/helpers");
const User = require("../models/User");
const tokenService = require("../services/token.service");

function isTokenInvalid(data, dbToken) {
    return !data || !dbToken || data._id !== dbToken?.user?.toString();
}

class AuthController {
    async signUp(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: "INVALID_DATA",
                    code: 400
                });
            }
            const { email, password } = req.body;
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({
                    error: {
                        message: "EMAIL_EXISTS",
                        code: 400
                    }
                });
            }
            const hashedPassword = await bycrypt.hash(password, 12);
            const newUser = await User.create({
                ...generateUserData(),
                ...req.body,
                password: hashedPassword
            });

            const tokens = tokenService.generate({ _id: newUser._id });
            await tokenService.save(newUser._id, tokens.refreshToken);
            res.status(201).send({ ...tokens, userId: newUser._id });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }

    async signIn(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: "INVALID_DATA",
                    code: 400
                });
            }
            const { email, password } = req.body;
            const existingUser = await User.findOne({ email });
            if (!existingUser) {
                return res.status(400).send({
                    error: {
                        message: "EMAIL_NOT_FOUND",
                        code: 400
                    }
                });
            }
            const isPasswordEqual = await bycrypt.compare(
                password,
                existingUser.password
            );
            if (!isPasswordEqual) {
                return res.status(400).send({
                    error: {
                        message: "INVALID_PASSWORD",
                        code: 400
                    }
                });
            }
            const tokens = tokenService.generate({ _id: existingUser._id });
            await tokenService.save(existingUser._id, tokens.refreshToken);
            res.status(201).send({ ...tokens, userId: existingUser._id });
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }

    async token(req, res) {
        try {
            const { refresh_token: refreshToken } = req.body;
            const data = tokenService.validateRefresh(refreshToken);
            const dbToken = await tokenService.findToken(refreshToken);
            if (isTokenInvalid(data, dbToken)) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            const tokens = tokenService.generate({ _id: data._id });
            await tokenService.save(data._id, tokens.refreshToken);
            res.status(200).send({ ...tokens, userId: data._id });
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }
}

module.exports = new AuthController();
