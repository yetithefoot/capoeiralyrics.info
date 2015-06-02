var express = require('express');
var router = express.Router();

var songs = require('../controllers/songs');


router.get('/', function(req, res, next) {
	songs.index(req, res, next);
});

router.get('/:id', function(req, res, next) {
	songs.show(req, res, next);
});



module.exports = router;
