var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var commentPrayerSchema = new Schema({
  user_id                 : { type: String , ref:'User' },
  prayer_id               : String,
  comment_msg             : String,
  time_zone               : String,
  status 		              : String
},
{
  timestamps: true 
});

var CommentPrayer            = mongoose.model('CommentPrayer',commentPrayerSchema);
module.exports               = CommentPrayer;

module.exports.addNewCommentPrayer 		= function(params,callback)  { 
   		 var add_comment_prayer 		= new CommentPrayer(params);  
   		 add_comment_prayer.save(callback);
}


module.exports.getCommentsOnPrayer  = function(params,callback){
  console.log("hi model getCommentsOnPrayer ",params.prayer_id)
  CommentPrayer.find({prayer_id : params.prayer_id, status: 'A'})
  .sort({'createdAt': -1})
  .populate('user_id','first_name last_name profile_image')
  .exec(callback);   
}






