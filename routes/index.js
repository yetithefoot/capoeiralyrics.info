var express = require('express');
var router = express.Router();


var songs = require('../controllers/songs.js');

router.get('/', function(req, res, next) {
	songs.index(req, res, next);
});



router.get('/artists', function(req, res) {
  res.render('artists/index', { title: 'capoeiralyrics.info', activeartists:true});
});

router.get('/albums', function(req, res) {
  res.render('albums/index', { title: 'capoeiralyrics.info', activealbums:true});
});



module.exports = router;
