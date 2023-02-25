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
        info: {
            type: Object,
            _id: { type: String, unique: true },
            description: { type: String },
            ownerId: {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("Estate", schema);
