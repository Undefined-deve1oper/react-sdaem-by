const { Schema, model } = require("mongoose");

const schema = new Schema({
    id: String,
    item: String,
    path: String
});

module.exports = model("Navigation", schema);
