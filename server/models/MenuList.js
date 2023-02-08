const { Schema, model } = require("mongoose");

const schema = new Schema({
    id: String,
    title: String,
    isIcon: Boolean,
    list: Array
});

module.exports = model("MenuList", schema);
