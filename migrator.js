var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/capoeiralyrics');

global.Artist = require('./models/artists').Artist;
global.Song = require('./models/songs').Song;


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log('Connected');
	
	Artist.migrate(function(){
		console.log('Artists Migration done');
			Song.migrate(function(){
				console.log('Songs Migration done');
			});
	});


});