var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var likeWallPostSchema = new Schema({
  user_id                 : { type: String , ref:'User' },
  group_post_id            : String,
  like_status             : String
},
{
  timestamps: true 
});

var LikeWallPost           	  	  = mongoose.model('LikeWallPost',likeWallPostSchema);
module.exports               	  = LikeWallPost;



module.exports.checkLikeWallPost  = function(params,callback){ 
    LikeWallPost.find({user_id : params.user_id, group_post_id : params.group_post_id}, 'like_status' ,callback);
}

module.exports.addLikeWallPost 		= function(params,callback)  { 
   		 var add_like_wall_post  		= new LikeWallPost(params);  
   		 add_like_wall_post.save(callback);
}

module.exports.changeLikeStatus  = function(id,like_status,callback){
    LikeWallPost.findByIdAndUpdate(id, { like_status  : like_status },callback);
}


module.exports.getLikesWallPost  = function(id,callback){
  LikeWallPost.find({group_post_id : id, like_status: 'L'},callback)
}




