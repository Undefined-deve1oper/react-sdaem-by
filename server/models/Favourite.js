const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        id: { type: String, unique: true },
        estateId: {
            type: Schema.Types.ObjectId,
            ref: "Estate"
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: { createdAt: "created_at" }
    }
);

module.exports = model("Favourite", schema);
