var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main.js");

// var homepageController = function(req, res) {
//   res.render('index', { title: 'Express'} );
// };

/* GET home page. */
router.get('/', ctrlMain.index); //Reference index method of controllers in route definition

module.exports = router;
