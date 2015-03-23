var router = require("express").Router(),
	User = require("../../models/user"),
	bcrypt = require("bcrypt"),
	jwt = require("jwt-simple"),
	config = require("../../config");

router.get("/", function(req, res) {
	User.findOne({username:req.auth.username}, function(err, user) {
		res.json(user);
	});
});

router.post("/", function(req, res, next) {
	var user = new User({username:req.body.username});
	bcrypt.hash(req.body.password, 10, function(err, hash) {
		user.password = hash;
		user.save(function(err, user) {
			if (err) { throw next(err); }
			res.status(201).send();
		});
	});
});

module.exports = router;