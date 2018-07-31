var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var prayToPrayerSchema = new Schema({
  user_id                 : { type: String , ref:'User' },
  prayer_id                 : String,
  prayer_status             : String
},
{
  timestamps: true 
});

var PrayToPrayer           	  	  = mongoose.model('PrayToPrayer',prayToPrayerSchema);
module.exports               	  = PrayToPrayer;



// module.exports.checkLikeWallPost  = function(params,callback){ 
//     LikeWallPost.find({user_id : params.user_id, group_post_id : params.group_post_id}, 'like_status' ,callback);
// }

module.exports.addPrayToPrayer 		= function(params,callback)  { 
   		 var add_pray_to_prayer  		= new PrayToPrayer(params);  
   		 add_pray_to_prayer.save(callback);
}

// module.exports.changeLikeStatus  = function(id,like_status,callback){
//     LikeWallPost.findByIdAndUpdate(id, { like_status  : like_status },callback);
// }


module.exports.getPraysOfPrayer  = function(id,callback){
	 console.log("hii model ",id)
  PrayToPrayer.find({prayer_id : id, prayer_status: 'Y'},callback)
}




