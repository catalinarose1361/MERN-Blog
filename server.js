const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
// const routes = require("./routes");
const port = process.env.PORT || 5000;
// const Post = require("./models")


require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//MongoDB Atlas Connection String
mongoose.connect(process.env.MONGODB_URI);

// app.use(routes);

//when in production connect the back end to the static build files
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// express server
app.listen(port, function() {
    console.log("express is running")
})


// mongoose 
const postSchema = {
    title: String,
    author: String,
    body: String,
    date: Date
};

const Post = mongoose.model("Post", postSchema);

// api routes

//     grabbing all posts from our mongoDB and 
//     sending that data to the front end in json format
//     whenever the route is called
    
app.get('/posts', function(req, res) {
    Post.find().then(posts => res.json(posts));
});


// add post

app.post('/newPost', function(req, res) {
   //deconstructing the object sent fron the front end
   const title = req.body.title;
   const author = req.body.author;
   const body = req.body.body;
   const date = req.body.date;
   //creating new movie in DB using our model Movie
   const newPost = new Post({
       title,
       author,
       body,
       date
   })
    //saving our new post
    newPost.save()
})

// remove post
app.delete('/delete/:id', function(req, res) {

    // reconstruct id
    const id = req.params.id;

    //when the id of the model matches this id, delete
    Post.findByIdAndDelete({_id: id}, function(err) {
        if(!err) {
            console.log("Post Removed Sucessfully");
        } else console.log("Error post cannot be removed")
    })


})

