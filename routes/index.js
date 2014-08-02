var express = require('express');
var router = express.Router();


var songs = require('../controllers/songs.js');

// default route
// TODO: make main page
router.get('/', function(req, res, next) {
	songs.index(req, res, next);
});



router.get('/albums', function(req, res) {
  res.render('albums/index', { title: 'capoeiralyrics.info', activealbums:true});
});



module.exports = router;
