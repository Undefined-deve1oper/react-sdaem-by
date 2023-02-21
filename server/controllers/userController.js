const User = require("../models/User");
const path = require("path");
const crypto = require("crypto");
const fs = require("fs");

class UserController {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).send(users);
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }

    async changeUser(req, res) {
        try {
            const { userId } = req.params;

            if (userId === req.user._id) {
                const updatedUser = await User.findByIdAndUpdate(
                    userId,
                    req.body,
                    {
                        new: true
                    }
                );
                res.send(updatedUser);
            } else {
                res.status(401).json({
                    message: "Unauthorized"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }

    async savePhoto(req, res) {
        try {
            const { userId } = req.params;

            if (userId !== req.user._id) {
                res.status(401).json({
                    message: "Unauthorized"
                });
            }

            const fileName = crypto.randomBytes(5).toString("hex");
            const stream = fs.createWriteStream(
                path.join(__dirname, "..", "public", "images", fileName, ".jpg")
            );

            stream.on("finish", function () {
                console.log("file has been written");
                res.end("file has been written");
            });

            stream.write(Buffer.from(req.body), "utf-8");
            stream.end();
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }
}

module.exports = new UserController();
