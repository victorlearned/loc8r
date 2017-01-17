var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations.js'); //require controller files
var ctrlOthers = require('../controllers/others.js');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
