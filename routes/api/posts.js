const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router
    .route("/")
    .get(postsController.findAll)
    
// Matches with "/api/posts"/newPost
router
    .route("/newPost")
    .post(postsController.create)

// Matches with "/api/posts/:id"
router
    .route("/delete/:id")
    .delete(postsController.remove)

module.exports = router