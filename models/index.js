const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    title: {
        type: String,
        required: "Title is Required"
    },

    author: {
        type: String,
        required: "Author is Required"
    },

    body: {
        type: String,
        required: "Body is required"
    },

    date: {
        type: Date,
        default: Date.now
    }

});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post