var slug = require('slug');

exports.index = function(req, res){

	Artist.find({}, function(err, artists){
		artists = artists.sort();
		res.render('artists/index', { activeartists:true, artists:artists });
	})
}

exports.show = function(req, res){

	Artist.findOne({slug:req.params.slug}, function(err, artist){
		res.render('artists/show', { activeartists:true, artist:artist });
	})


}