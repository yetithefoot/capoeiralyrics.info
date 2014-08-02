exports.index = function(req, res, next){
	var songs = [];
	for (var i = 0; i < 1000; i++) {
		songs.push(
			{
				id:i, 
				title:('Song'+i)
			});
	};

	res.render('songs/index', { activesongs:true, songs:songs });
}

exports.show = function(req, res, next){

	res.render('songs/show', { activesongs:true, song: {id:req.params.id}});
}