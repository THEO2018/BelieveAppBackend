var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var musicArtistSchema = new Schema({
  artist_name                     : String,
  artist_image                     : String,
  status                          : String
},
{
  timestamps: true 
});

  var MusicArtist           		    = mongoose.model('MusicArtist',musicArtistSchema);
  module.exports                  = MusicArtist;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewMusicArtist  = function(params,callback){
            var new_music_artist  = new MusicArtist(params);  
            new_music_artist.save(callback);
    }

    module.exports.getMusicArtists  = function(callback){
          MusicArtist.find({status : 'A'})
          .sort('-createdAt')
          .exec(callback);     
    }
    
    
    module.exports.getAlbumDetailByAdmin  = function(params,callback){
          MusicAlbum.findById(params.album_id, callback)      
    }

     module.exports.editMusicArtist  = function(id,params,callback){
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
      MusicArtist.findByIdAndUpdate(id, update,{new:true} ,callback);
    }

    module.exports.deleteMusicArtist  = function(id,callback){
          MusicArtist.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
        }


/////////////////////////// APP END /////////////////////////


   // module.exports.getAllWallPosts  = function(params,callback){
   //        WallPost.find()
   //        .sort('-createdAt')
   //        .populate('user_id','profile_image first_name last_name')
   //        .exec(callback);     
   //  }
    

   // module.exports.getWallPostDetail  = function(params,callback){
   //          WallPost.findById(params.wall_post_id)
   //          .populate('user_id','profile_image first_name last_name')
   //          .exec(callback);     
   //    }
    



