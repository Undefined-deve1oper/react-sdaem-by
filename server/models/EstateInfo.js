const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        id: { type: String, unique: true },
        estateId: { type: Schema.Types.ObjectId, ref: "Estate" },
        title: { type: String },
        description: { type: String }
    },
    {
        timestamps: true
    }
);

module.exports = model("EstateInfo", schema);
