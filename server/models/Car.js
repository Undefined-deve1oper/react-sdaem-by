const { Schema, model } = require("mongoose");

const carTypes = [
    "Седан",
    "Внедорожник",
    "Купе",
    "Универсал",
    "Хэтчбек",
    "Лифтбек",
    "Лимузин",
    "Кроссовер",
    "Кабриолет",
    "Родстер",
    "Тарга",
    "Пикап",
    "Фургон",
    "Минивэн"
];

const schema = new Schema({
    id: { type: Schema.Types.ObjectId, ref: "Category" },
    price: Number,
    images: [String],
    type: {
        type: String,
        enum: carTypes
    },
    countReviews: Number,
    rate: Number,
    canDrift: Boolean
});

module.exports = model("Car", schema);
