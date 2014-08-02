exports.index = function(req, res){
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

exports.show = function(req, res){

	res.render('songs/show', { activesongs:true, song: {id:req.params.id}});
}