const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        title: String,
        previewText: String,
        fullText: String,
        image: String,
        author: { type: String },
        brandId: { type: Schema.Types.ObjectId, ref: "Estate" }
    },
    {
        timestamps: true
    }
);

module.exports = model("Post", schema);
