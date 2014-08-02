var express = require('express');
var router = express.Router();


var songs = require('../controllers/songs.js');

// default route
// TODO: make main page
router.get('/', function(req, res, next) {
	songs.index(req, res, next);
});


module.exports = router;
