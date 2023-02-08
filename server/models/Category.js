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
const conveniences = {
    canSmoke: Boolean,
    canPets: Boolean,
    hasWifi: Boolean,
    hasConditioner: Boolean,
    hasWorkSpace: Boolean,
    canInvite: Boolean,
    hasWideCorridor: Boolean,
    hasDisabledAssistant: Boolean
};

const schema = new Schema({
    car: {
        id: String,
        price: Number,
        images: [String],
        type: {
            type: String,
            enum: carTypes
        },
        countReviews: Number,
        rate: Number,
        canDrift: Boolean
    },
    flat: {
        id: String,
        price: Number,
        images: [String],
        buns: [String],
        type: { type: String, enum: ["Стандарт", "Полулюкс", "Люкс"] },
        conveniences: conveniences,
        countReviews: Number,
        rate: Number
    },
    cottage: {
        id: String,
        price: Number,
        images: [String],
        buns: [String],
        type: { type: String, enum: ["Стандарт", "Полулюкс", "Люкс"] },
        conveniences: conveniences,
        countReviews: Number,
        rate: Number
    },
    bathouse: {
        id: String,
        price: Number,
        images: [String],
        buns: [String],
        type: { type: String, enum: ["Стандарт", "Полулюкс", "Люкс"] },
        conveniences: conveniences,
        countReviews: Number,
        rate: Number
    }
});

module.exports = model("Category", schema);
