const { Schema, model } = require("mongoose");

const schema = new Schema({
    id: String,
    title: String,
    list: Array
});

module.exports = model("Sidebar", schema);
