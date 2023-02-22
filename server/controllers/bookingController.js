const User = require("../models/User");
const Booking = require("../models/Booking");
const isAvaibleToBooking = require("../utils/isAvaibleToBooking");

class BookingController {
    async getAll(req, res) {
        try {
            const list = await Booking.find();
            res.status(200).send(list);
        } catch {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }

    async create(req, res) {
        try {
            const isAvaible = await isAvaibleToBooking({ ...req.body });
            if (isAvaible) {
                const newBooking = await Booking.create({
                    ...req.body,
                    userId: req.user._id
                });
                res.status(201).send(newBooking);
            } else {
                res.status(403).send({
                    error: {
                        message: "На данную дату уже есть бронь",
                        code: 403
                    }
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    }

    async delete(req, res) {
        try {
            const { bookingId } = req.params;
            const removedBooking = await Booking.findById(bookingId);
            const currentUser = await User.findById(req.user._id);

            if (currentUser.role === "ADMIN") {
                await removedBooking.remove();
                return res.send(null);
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

module.exports = new BookingController();
