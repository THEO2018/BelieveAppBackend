var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var voteToPollSchema = new Schema({
  user_id                 : { type: String , ref:'User' },
  poll_id                 : String,
  poll_option_id          : String,
  status 				  : String
},
{
  timestamps: true 
});

var VoteToPoll           	  	  = mongoose.model('VoteToPoll',voteToPollSchema);
module.exports               	  = VoteToPoll;


	module.exports.addVoteToPoll 		= function(params,callback)  { 
	   		 var add_vote_to_poll 	= new VoteToPoll(params);  
	   		 add_vote_to_poll.save(callback);
	}

	
	 module.exports.getVotesOfPollOption  = function(id,callback){
          VoteToPoll.find({poll_option_id : id},{},callback)
     
    }

