const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
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
        timestamps: true
    }
);

module.exports = model("Favourite", schema);
