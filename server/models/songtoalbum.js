var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var songToAlbumSchema = new Schema({
  song_title                      : String,
  album_id                        : { type: String , ref:'MusicAlbum' },
  song_file                       : String,
  duration                        : String,
  status                          : String
},
{
  timestamps: true 
});

  var SongToAlbum           		    = mongoose.model('SongToAlbum',songToAlbumSchema);
  module.exports                    = SongToAlbum;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewSongToAlbum  = function(params,callback){
            var new_song_to_album  = new SongToAlbum(params);  
            new_song_to_album.save(callback);
    }

   module.exports.getDraftSongsOfAlbum  = function(params,callback){
      console.log("get songs model ", params)
          SongToAlbum.find({album_id : params.album_id,status : 'S'})
          .sort('-createdAt')
          .exec(callback);     
    }

    module.exports.getSongsOfAlbum  = function(params,callback){
      console.log("get songs model ", params)
          SongToAlbum.find({album_id : params.album_id,status : 'A'})
           .populate({
            path: 'album_id',
            select : 'album_title artist',
            populate: { path: 'artist', select : 'artist_name' }
          })
          .sort('-createdAt')
          .exec(callback);     
    }

    
    module.exports.deleteSongToAlbum  = function(id,callback){
          SongToAlbum.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
        }

 module.exports.publishSongToAlbum  = function(id,callback){
          SongToAlbum.findByIdAndUpdate(id, {status : 'A'},{new:true} ,callback);
        }


/////////////////////////// APP END /////////////////////////

 
    module.exports.getAllSongs  = function(params,callback){
      console.log("get songs model ", params)
          SongToAlbum.find({status : 'A'})
           .populate({
            path: 'album_id',
            select : 'album_title artist',
            populate: { path: 'artist', select : 'artist_name' }
          })
          .sort('-createdAt')
          .exec(callback);     
    }

     module.exports.recentlyAdded  = function(params,callback){
      console.log("get songs model ", params)
          SongToAlbum.find({status : 'A'})
          .populate({
            path: 'album_id',
            select : 'album_title artist',
            populate: { path: 'artist', select : 'artist_name' }
          })
          .sort('-createdAt')
          .limit(10)
          .exec(callback);     
    }

  
     module.exports.getSongsOfAlbumApp  = function(params,callback){
      console.log("get songs model ", params)

          SongToAlbum.find({album_id : params.album_id,status : 'A'})
             .populate({
            path: 'album_id',
            select : 'album_title artist',
            populate: { path: 'artist', select : 'artist_name' }
          })
          .sort('-createdAt')
          .exec(callback);     
    }


