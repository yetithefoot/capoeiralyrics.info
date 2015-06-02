var express = require('express');
var router = express.Router();

var artists = require('../controllers/artists');


router.get('/', function(req, res, next) {
	artists.index(req, res, next);
});

router.get('/:slug', function(req, res, next) {
	artists.show(req, res, next);
});


module.exports = router;
