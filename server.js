var express = require("express");
var app = express();
var path = require("path");

app.use(express.static("dist"));

var PORT = process.env.PORT || 8080;

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/about", function(req,res) {
    res.sendFile(path.join(__dirname, "./dist/about.html"))
})

app.get("/work", function(req,res) {
    res.sendFile(path.join(__dirname, "./dist/work.html"))
})

app.get("/contact", function(req,res) {
    res.sendFile(path.join(__dirname, "./dist/contact.html"))
})

app.listen(PORT, function() {
    console.log("App is listening" + PORT)
})