var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var commentPollSchema = new Schema({
  user_id                 : { type: String , ref:'User' },
  poll_id                 : String,
  comment_msg             : String,
  time_zone               : String,
  status 		          : String
},
{
  timestamps: true 
});

var CommentPoll           	  = mongoose.model('CommentPoll',commentPollSchema);
module.exports                = CommentPoll;

module.exports.addNewCommentPoll 		= function(params,callback)  { 
   		 var add_comment_poll 		= new CommentPoll(params);  
   		 add_comment_poll.save(callback);
}


module.exports.getCommentsOnPoll  = function(params,callback){
  CommentPoll.find({poll_id : params.poll_id, status: 'A'})
  .sort('createdAt')
  .populate('user_id','first_name last_name profile_image')
  .exec(callback);   
}






