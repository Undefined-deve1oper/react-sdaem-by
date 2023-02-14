const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        id: { type: String, unique: true },
        name: { type: String, unique: true },
        brandId: { type: Schema.Types.ObjectId, ref: "Estate" }
    },
    {
        timestamps: true
    }
);

module.exports = model("Brand", schema);
