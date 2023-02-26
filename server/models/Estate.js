const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        price: { type: Number },
        rating: { type: Number, default: 0 },
        images: [String],
        city: { type: String },
        title: String,
        location: String,
        brandId: {
            type: Schema.Types.ObjectId,
            ref: "Brand"
        },
        typeId: {
            type: Schema.Types.ObjectId,
            ref: "Type"
        },
        cityId: {
            type: Schema.Types.ObjectId,
            ref: "City"
        },
        description: String,
        info: {
            type: Object
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("Estate", schema);
