const User = require("../models/User");

class UserController {
    async getUser(req, res) {
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
}

module.exports = new UserController();
