const express = require("express");
const bodyParser = require("body-parser");
const { body } = require(express - validator);
const jwt = require("jsonwebtoken");
const mongoose = require("mongose");

const port = 3000;
mongoose.connect("mongodb://DBADDRESS / REST");
let User = require("./models/User");
let Post = require("./models/Post");

const app = express();

app.use(bodyParser.json());

function auth (req, res, next) {
	const authHeader = req.get("Authorization");
	console.log(authHeader);
	let token = authHeader.split("")[1];
	next();
}

app.get("/posts", (req, res) => {
	Post.find({}).then((posts) => {
		res.json(posts);
	});
});

app.get("/post/:id", (req, res) => {
	Post.findById(req.params.id).then((posts) => {
		res.json(posts);
	});
});

app.post("/post", auth, (req, res) => {
	let name = req.body.name;
	let description = req.body.description;
	new Post({ name, description }).save().then((post) => {
		res.json(posts);
	});
});

app.put("/post/:id", auth, (req, res) => {
	let name = req.body.name;
	let description = req.body.description;
	console.log(name, description);
	Post.findById(req.params.id)
		.then((post) => {
			post.name = name;
			post.description = description;
			return post.save();
		})
		.then((test) => {
			console.log(test);
			res.json(test);
		});
});

	app.delete ("/post/:id",
		(req, res) => {
			Post.findByIdAndDelete(req.params.id).then((post) => {
				res.json(post);
			});
		});
