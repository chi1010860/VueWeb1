var express = require('express');

var app = express(); // 產生Express Application 物件

app.get("/", function(req, res){
    res.send("<h1>Node.js Server Test</h1>");
});

app.listen(3000, function(){
    console.log("Server has been built on http://localhost:3000/");
});