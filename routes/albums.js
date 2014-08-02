var express = require('express');
var router = express.Router();

var albums = require('../controllers/albums.js');


router.get('/', function(req, res, next) {
	albums.index(req, res, next);
});

router.get('/:id', function(req, res, next) {
	albums.show(req, res, next);
});


module.exports = router;
