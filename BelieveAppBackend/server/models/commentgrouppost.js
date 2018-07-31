var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var commentGroupPostSchema = new Schema({
  user_id                 : { type: String , ref:'User' },
  group_post_id           : String,
  comment_msg             : String,
  group_post_comment_img  : String,
  media_status            : Boolean,
  time_zone               : String,
  status 				  : String
},
{
  timestamps: true 
});

var CommentGroupPost           	  = mongoose.model('CommentGroupPost',commentGroupPostSchema);
module.exports               	  = CommentGroupPost;

module.exports.addCommentGroupPost 		= function(params,callback)  { 
   		 var add_comment_group_post  		= new CommentGroupPost(params);  
   		 add_comment_group_post.save(callback);
}


module.exports.getCommentsGroupPost  = function(id,callback){
  CommentGroupPost.find({group_post_id : id, status: 'A'})
  .sort('createdAt')
  .populate('user_id','first_name last_name profile_image')
  .exec(callback);   
}






