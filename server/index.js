var express = require("express"),
	app = express(),
	router = express.Router();

router.use(require("body-parser").json());
router.use(require("./auth"));
router.use("/sessions", require("./controllers/api/sessions"));
router.use("/users", require("./controllers/api/users"));

app.use("/api", router);

app.listen(3000);