var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var commentWallPostSchema = new Schema({
  user_id                 : { type: String , ref:'User' },
  group_post_id            : String,
  comment_msg             : String,
  group_post_comment_img   : String,
  media_status            : Boolean,
  time_zone               : String,
  status 				          : String
},
{
  timestamps: true 
});

var CommentWallPost           	  = mongoose.model('CommentWallPost',commentWallPostSchema);
module.exports               	    = CommentWallPost;

module.exports.addCommentWallPost 		= function(params,callback)  { 
   		 var add_comment_wall_post  		= new CommentWallPost(params);  
   		 add_comment_wall_post.save(callback);
}


module.exports.getCommentsWallPost  = function(id,callback){
  CommentWallPost.find({group_post_id : id, status: 'A'})
  .sort('createdAt')
  .populate('user_id','first_name last_name profile_image')
  .exec(callback);   
}





