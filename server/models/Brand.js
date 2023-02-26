const { Schema, model } = require("mongoose");

const schema = new Schema({
    name: { type: String, unique: true }
    // brandId: { type: Schema.Types.ObjectId, ref: "Estate" }
    // typeId: { type: Schema.Types.ObjectId, ref: "Type" }
});

module.exports = model("Brand", schema);
