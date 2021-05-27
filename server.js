const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;

require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//MongoDB Atlas Connection String
mongoose.connect(process.env.MONGODB_URI);

// mongoose 
const postSchema = {
    title: String,
    author: String,
    body: String,
    date: Date
};

const Post = mongoose.model("Post", postSchema);

//api routes

    //grabbing all posts from our mongoDB 
app.get('/posts', function(req, res) {
    Post.find().then(posts => res.json(posts));
});
// express server
app.listen(port, function() {
    console.log("express is running")
})
