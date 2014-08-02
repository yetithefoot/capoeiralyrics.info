var express = require('express');
var router = express.Router();

var artists = require('../controllers/artists.js');


router.get('/', function(req, res, next) {
	artists.index(req, res, next);
});

router.get('/:id', function(req, res, next) {
	artists.show(req, res, next);
});


module.exports = router;
