const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        price: { type: Number },
        rating: { type: Number, default: 0 },
        img: { type: String },
        label: String,
        brandId: {
            type: Schema.Types.ObjectId,
            ref: "Brand"
        },
        typeId: {
            type: Schema.Types.ObjectId,
            ref: "Type"
        },
        info: {
            type: Object,
            _id: { type: String, unique: true },
            description: { type: String }
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("Estate", schema);
