var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/auth_demo", function() {
	console.log("mongodb connected");
});

module.exports = mongoose;