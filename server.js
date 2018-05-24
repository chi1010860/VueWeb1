const fs = require('fs');
const express = require('express');

const app = express(); // 產生Express Application 物件
var port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

app.use('/images', express.static(__dirname + '/images'));

app.use('/sounds', express.static(__dirname + '/sounds'));

app.get("/", function (req, res) {
    res.send("<h1>Node.js Server Test</h1>");
});

app.get("/about", function (req, res) {
    res.send("<h1>About page</h1>")
});

app.get("/about/about-me", function (req, res) {
    res.send("<h1>About me page</h1>")
});

app.get("/blog", function (req, res) {
    res.json({
        text: 'wtf'
    })
});

app.get("/post/:id", function (req, res) {
    res.send(req.params.id)
})

app.get("/string/:name/:nickname", function (req, res) {
    res.send(req.params.name + " is so " + req.params.nickname)
})

app.get("/api/users/:id", function (req, res) {
    if (req.params.id == 1) {
        res.json({
            id: req.params.id,
            name: "Joe",
            age: 18
        })
    }
    else if (req.params.id == 2) {
        res.json({
            id: req.params.id,
            name: "John",
            age: 22
        })
    }
    else {
        res.send("NOT FOUND")
    }
})

app.get("/egg", function (req, res) {
    res.send(req.query)
})

app.get("/fox", function (req, res) {
    res.json(req.query)
})

app.get("/gogo/:go", function (req, res) {
    res.send(req.params.go + JSON.stringify(req.query))
})

app.get("/api/query", function (req, res) {
    var obj = req.query;
    res.json(obj);
})

app.listen(port, function () {
    console.log("Server has been built on http://localhost:80/");
});