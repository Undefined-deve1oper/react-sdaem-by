const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        name: String,
        subscribe: Boolean,
        birthYear: Number,
        image: String,
        password: String,
        email: { type: String, required: true, unique: true },
        gender: { type: String, enum: ["male", "female"] }
    },
    {
        timestamps: true
    }
);

module.exports = model("User", schema);
