var express = require("express");
var router = express.Router();
var utils = require("../modules/utils");

/* GET home page. */
router.get("/", function (req, res, next) {
  let greeting = utils.sayHello(new Date(Date.now()).getHours());
  res.render("index", { title: "Simple Application", greeting: "test" });
});

module.exports = router;
