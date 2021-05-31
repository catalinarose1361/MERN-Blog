const router = require("express").Router();
const Post = require("../models")

//FIND ALL POSTS
router.get('/posts', function(req, res) {
    Post.find().then(posts => res.json(posts));
});

// ADD POST

router.post('/newPost', function(req, res) {
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

//REMOVE POST
router.delete('/delete/:id', function(req, res) {

    // reconstruct id
    const id = req.params.id;

    //when the id of the model matches this id, delete
    Post.findByIdAndDelete({_id: id}, function(err) {
        if(!err) {
            console.log("Post Removed Sucessfully");
        } else console.log("Error post cannot be removed")
    })


})