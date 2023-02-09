const { Schema, model } = require("mongoose");

const schema = new Schema({
    сategory: { type: Schema.Types.ObjectId }
});

module.exports = model("Category", schema);
