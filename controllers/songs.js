
exports.index = function(req, res){

	Song.find().sort({slug:1}).exec(function(err, songs){
		res.render('songs/index', { activesongs:true, songs:songs });
	})
}

exports.show = function(req, res){

	Song.findOne({_id: req.params.id}, function(err, song){
		console.log(song)
		res.render('songs/show', { activesongs:true, song:song });
	})
}