const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// mongoose
//api routes

app.get('/', function(req, res) {
    res.send("express is working");
});

app.listen(port, function() {
    console.log("express is running")
})
