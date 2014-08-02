var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('songs', { title: 'capoeiralyrics.info', activesongs:true});
});

router.get('/songs', function(req, res) {
  res.render('songs', { title: 'capoeiralyrics.info', activesongs:true});
});

router.get('/artists', function(req, res) {
  res.render('artists', { title: 'capoeiralyrics.info', activeartists:true});
});

router.get('/albums', function(req, res) {
  res.render('albums', { title: 'capoeiralyrics.info', activealbums:true});
});



module.exports = router;
