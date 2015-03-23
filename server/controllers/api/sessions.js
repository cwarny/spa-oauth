var router = require("express").Router(),
	User = require("../../models/user"),
	bcrypt = require("bcrypt"),
	jwt = require("jwt-simple"),
	config = require("../../config");

router.post("/", function(req, res, next) {
	User.findOne({username:req.body.username})
	.select("password username")
	.exec(function(err, user) {
		if (err) { return next(err); }
		if (!user) { return res.status(401).send(); }
		bcrypt.compare(req.body.password, user.password, function(err, valid) {
			if (err) { return next(err); }
			if (!valid) { return res.status(401).send(); }
			var token = jwt.encode({username: user.username}, config.secret);
			res.json({token:token});
		});
	});
});

module.exports = router;