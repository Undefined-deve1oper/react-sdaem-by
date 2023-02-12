const { Schema, model } = require("mongoose");

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
    _id: String,
    price: Number,
    images: [String],
    buns: [String],
    type: { type: String, enum: ["Стандарт", "Полулюкс", "Люкс"] },
    conveniences: conveniences,
    countReviews: Number,
    rate: Number
});

module.exports = model("Flat", schema);
