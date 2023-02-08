const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        id: String,
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
