var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.send("Hello World");
});

app.get("/bye", function(req,res){
    res.send("Bye World");
});

app.listen(80, process.env.IP, function(req,res){
    console.log("Server Started");
});