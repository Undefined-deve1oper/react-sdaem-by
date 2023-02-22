const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        departure: {
            type: Date
        },
        entry: {
            type: Date
        },
        fullPrice: {
            type: Number
        },
        estateId: {
            type: Schema.Types.ObjectId,
            ref: "Estate"
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: {
            createdAt: "created_at"
        }
    }
);

module.exports = model("Booking", schema);
