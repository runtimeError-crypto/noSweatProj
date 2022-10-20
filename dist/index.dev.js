"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var _require = require(express - validator),
    body = _require.body;

var jwt = require("jsonwebtoken");

var mongoose = require("mongose");

var port = 3000;
mongoose.connect("mongodb://DBADDRESS / REST");

var User = require("./models/User");

var Post = require("./models/Post");

var app = express();
app.use(bodyParser.json());

function auth(req, res, next) {
  var authHeader = req.get("Authorization");
  console.log(authHeader);
  var token = authHeader.split("")[1];
  next();
}

app.get("/posts", function (req, res) {
  Post.find({}).then(function (posts) {
    res.json(posts);
  });
});
app.get("/post/:id", function (req, res) {
  Post.findById(req.params.id).then(function (posts) {
    res.json(posts);
  });
});
app.post("/post", auth, function (req, res) {
  var name = req.body.name;
  var description = req.body.description;
  new Post({
    name: name,
    description: description
  }).save().then(function (post) {
    res.json(posts);
  });
});
app.put("/post/:id", auth, function (req, res) {
  var name = req.body.name;
  var description = req.body.description;
  console.log(name, description);
  Post.findById(req.params.id).then(function (post) {
    post.name = name;
    post.description = description;
    return post.save();
  }).then(function (test) {
    console.log(test);
    res.json(test);
  });
});
app["delete"]("/post/:id", function (req, res) {
  Post.findByIdAndDelete(req.params.id).then(function (post) {
    res.json(post);
  });
});