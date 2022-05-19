var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var likeGroupPostSchema = new Schema({
  user_id                 : { type: String , ref:'User' },
  group_post_id           : String,
  like_status             : String
},
{
  timestamps: true 
});

var LikeGroupPost           	  = mongoose.model('LikeGroupPost',likeGroupPostSchema);
module.exports               	  = LikeGroupPost;



module.exports.checkLikeGroupPost  = function(params,callback){ 
    LikeGroupPost.find({user_id : params.user_id, group_post_id : params.group_post_id}, 'like_status' ,callback);
}

module.exports.addLikeGroupPost 		= function(params,callback)  { 
   		 var add_like_group_post  		= new LikeGroupPost(params);  
   		 add_like_group_post.save(callback);
}

module.exports.changeLikeStatus  = function(id,like_status,callback){
    LikeGroupPost.findByIdAndUpdate(id, { like_status  : like_status },callback);
}


module.exports.getLikesGroupPost  = function(id,callback){
  LikeGroupPost.find({group_post_id : id, like_status: 'L'},callback)
}




