const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        id: { type: String, unique: true },
        name: { type: String, unique: true },
        typeId: { type: Schema.Types.ObjectId, ref: "Estate" }
    },
    {
        timestamps: true
    }
);

module.exports = model("Rating", schema);
