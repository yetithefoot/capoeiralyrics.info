exports.index = function(req, res, next) {
	var albums = [];
	for (var i = 0; i < 1000; i++) {
		albums.push(
			{
				id:i, 
				title:('Album title'+i)
			});
	};

	res.render('albums/index', { activealbums:true, albums:albums });
}

exports.show = function(req, res, next) {

	res.render('albums/show', { activealbums:true, album: {id:req.params.id}});
}
