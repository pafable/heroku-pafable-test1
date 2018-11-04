var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.send("Hello World");
});

app.listen(80, process.env.IP, function(req,res){
    console.log("Server Started");
});