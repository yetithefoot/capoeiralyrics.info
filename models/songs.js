var request = require('request');
var mongoose = require('mongoose');
var slug = require('slug');

var songSchema = new mongoose.Schema({
  name: String,
  text: String,
  enText: String,
  ruText: String,
  videos: [String],
  audios: [String],
  artist: String,
  slug: String,
  tags: [String],
  published: Boolean,
  verified: Boolean,
  originalId: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: {}
});

// do slug by name
songSchema.pre('save', function (next) {
  this.slug = slug(this.name.toLowerCase());
  next();
});

/**
 * Migrates from json to schema from old capoeiralyrics database
 * @return {[type]}      [description]
 */
songSchema.statics.migrate = function (done) {
  var SONGS_URL = 'http://capoeiralyrics.info/JSONAPI/AllSongsFull?token=CC03921EB31B11E18EC38C3C6188709B';

  console.log('Download songs');
  request.get({url:SONGS_URL, json:true}, function (err, response, json) {
    console.log('Downloaded');

    if(json){
      console.log('Clear song');
      Song.remove({}, function(){
        console.log('Fill songs');
        json.forEach(function(s){
          var song = new Song({
            name: s.Name,
            text: s['Text'],
            tags: [],
            published: s.IsPublished,
            verified: s.IsVerified,
            originalId: s.ID,
          });

          if(s.VideoUrl) song.videos = [s.VideoUrl];
          if(s.AudioUrl) song.audios = [s.AudioUrl];
          if(s.EngText) song.enText = [s.EngText];
          if(s.RusText) song.ruText = [s.RusText];

          song.artist = s.Artist;
          song.save();

        })

        done && done();
      })
    }
  })
}

exports.Song = mongoose.model('Song', songSchema);