var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var WallPostSchema = new Schema({
  user_id                         : { type: String , ref:'User' },
  wall_post_status                : String,
  wall_post_media                 : String,
  wall_post_media_type            : String,
  thumbnail                       : String,
  status                          : String
},
{
  timestamps: true 
});

  var WallPost           		    = mongoose.model('WallPost',WallPostSchema);
  module.exports                = WallPost;



    module.exports.addNewWallPost  = function(params,callback){
            var new_post  = new WallPost(params);  
            new_post.save(callback);
    }

   module.exports.getAllWallPosts  = function(params,callback){
          WallPost.find()
          .sort('-createdAt')
          .populate('user_id','profile_image first_name last_name')
          .exec(callback);     
    }
    

   module.exports.getWallPostDetail  = function(params,callback){
            WallPost.findById(params.post_id)
            .populate('user_id','profile_image first_name last_name')
            .exec(callback);     
      }
    


   // module.exports.getWallPostDetail  = function(params,callback){
   //          WallPost.findById(params.wall_post_id)
   //          .populate('user_id','profile_image first_name last_name')
   //          .exec(callback);     
   //    }
    

