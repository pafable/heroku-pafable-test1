app.get("/", function(res,req){
    res.send("Hello World");
});

app.listen(80, process.env.IP, function(res,req){
    console.log("Server Started");
});