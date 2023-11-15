var express = require("express");
var router = express.Router();

router.get('/', function(req, res) {
    res.send("Welcome To Our Beautician API")
});

require("./AuthRoutes")(router);
require("./CustomerRoutes")(router);
// require("./BeauticianRoutes")(router);
// require("./AdminRoutes")(router);

module.exports.router = router;