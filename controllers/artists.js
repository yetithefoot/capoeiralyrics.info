exports.index = function(req, res, next){
	var artists = [];
	for (var i = 0; i < 1000; i++) {
		artists.push(
			{
				id:i, 
				title:('Artist'+i)
			});
	};

	res.render('artists/index', { activeartists:true, artists:artists });
}

exports.show = function(req, res, next){

	res.render('artists/show', { activeartists:true, artist: {id:req.params.id}});
}