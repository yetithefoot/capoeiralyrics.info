var request = require('request');
var mongoose = require('mongoose');
var slug = require('slug');

var artistSchema = new mongoose.Schema({
	name: String,
	slug: String,
	group: mongoose.Schema.Types.ObjectId,
	published: Boolean,
	originalId: Number
});


// do slug by name
artistSchema.pre('save', function (next) {
  this.slug = slug(this.name.toLowerCase());
  next();
});


/**
 * Migrates from json to schema from old capoeiralyrics database
 * @return {[type]}      [description]
 */
artistSchema.statics.migrate = function (done) {
	var ARTISTS_URL = 'http://capoeiralyrics.info/JSONAPI/AllArtists?token=CC03921EB31B11E18EC38C3C6188709B';

	console.log('Download artists');
	request.get({url:ARTISTS_URL, json:true}, function (err, response, json) {
		console.log('Downloaded');

		if(json){
			console.log('Clear artists');
			Artist.remove({}, function(){
				console.log('Fill artists');
				json.forEach(function(a){
					var artist = new Artist({
						name: a.Name,
						originalId: a.ID
					});
					artist.save();
				})

				done && done();
			})
		}
	})
}



exports.Artist = mongoose.model('Artist', artistSchema);




