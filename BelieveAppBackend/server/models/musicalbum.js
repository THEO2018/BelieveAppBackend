var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var musicAlbumSchema = new Schema({
  album_title                     : String,
  artist                          : { type: String , ref:'MusicArtist' },
  album_image                     : String,
  status                          : String
},
{
  timestamps: true 
});

  var MusicAlbum           		    = mongoose.model('MusicAlbum',musicAlbumSchema);
  module.exports                  = MusicAlbum;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewMusicAlbum  = function(params,callback){
            var new_music_album  = new MusicAlbum(params);  
            new_music_album.save(callback);
    }

    module.exports.getMusicAlbums  = function(callback){
          MusicAlbum.find({status : 'A'})
          .sort('-createdAt')
          .exec(callback);     
    }
    
    
    module.exports.getAlbumDetailByAdmin  = function(params,callback){
          MusicAlbum.findById(params.album_id, callback)      
    }

     module.exports.editMusicAlbum  = function(id,params,callback){
      function clean(obj) {
            for (var propName in obj) {
              if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
                delete obj[propName];
              }
            }
            console.log("obj is-----------",obj)
            return obj;
          }

      var update = clean(params);
      MusicAlbum.findByIdAndUpdate(id, update,{new:true} ,callback);
    }

    module.exports.deleteMusicAlbum  = function(id,callback){
          MusicAlbum.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
        }



 module.exports.deleteAlbumsOfArtist  = function(id,callback){
  var artist_id = String(id);
       MusicAlbum.updateMany({artist : artist_id},{$set : {status : 'D'}},callback) 
    }



/////////////////////////// APP END /////////////////////////


   module.exports.getAlbumsOfArtist  = function(params,callback){
          MusicAlbum.find({artist : params.artist_id, status : 'A'})
          .sort('-createdAt')
          .exec(callback);     
    }
    

   // module.exports.getWallPostDetail  = function(params,callback){
   //          WallPost.findById(params.wall_post_id)
   //          .populate('user_id','profile_image first_name last_name')
   //          .exec(callback);     
   //    }
    



