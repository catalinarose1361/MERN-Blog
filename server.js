const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
// const routes = require("./routes/api.js")
const port = process.env.PORT || 5000;
// const Post = require("./models")


require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//MongoDB Atlas Connection String
mongoose.connect(process.env.MONGODB_URI);
app.use(require("./routes/api.js"));
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


