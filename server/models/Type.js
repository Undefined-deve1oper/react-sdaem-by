const { Schema, model } = require("mongoose");

const schema = new Schema({
    name: { type: String, unique: true }
    // typeId: { type: Schema.Types.ObjectId, ref: "Estate" }
});

module.exports = model("Type", schema);
