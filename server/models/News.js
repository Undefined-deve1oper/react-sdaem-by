const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        _id: String,
        title: String,
        previewText: String,
        fullText: String,
        image: String
    },
    {
        timestamps: {
            createdAt: "created_at"
        }
    }
);

module.exports = model("News", schema);
