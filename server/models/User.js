const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        name: String,
        subscribe: Boolean,
        birthYear: Date,
        avatarImage: String,
        password: String,
        email: { type: String, required: true, unique: true },
        gender: { type: String, enum: ["male", "female"] },
        role: { type: String, enum: ["USER", "ADMIN"] }
    },
    {
        timestamps: true
    }
);

module.exports = model("User", schema);
