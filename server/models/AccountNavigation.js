const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        id: Number,
        item: String,
        path: String,
        icon: String
    },
    {
        timestamps: { createdAt: "created_at" }
    }
);

module.exports = model("AccountNavigation", schema);
