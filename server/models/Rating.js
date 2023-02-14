const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        rate: Number,
        id: { type: String, unique: true },
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        productId: { type: Schema.Types.ObjectId, ref: "Estate" }
    },
    {
        timestamps: true
    }
);

module.exports = model("Rating", schema);
