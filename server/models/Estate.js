const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        id: { type: String, unique: true },
        name: { type: String, unique: true },
        price: { type: Number },
        rating: { type: Number, default: 0 },
        img: { type: String },
        brandId: { type: Schema.Types.ObjectId, ref: "Brand" },
        typeId: { type: Schema.Types.ObjectId, ref: "Type" },
        info: { type: Schems.Types.ObjectId, ref: "EstateInfo" }
    },
    {
        timestamps: true
    }
);

module.exports = model("Estate", schema);
