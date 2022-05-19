var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var pollOptionSchema = new Schema({
  poll_id                         : String,
  option_no                       : String,
  option                          : String,
  status                          : String
},
{
  timestamps: true 
});

  var PollOption            = mongoose.model('PollOption',pollOptionSchema);
  module.exports            = PollOption;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewPollOption  = function(params,callback){
            var new_poll_option  = new PollOption(params);  
            new_poll_option.save(callback);
    }


 /////////////////////////// APP END /////////////////////////


    module.exports.getoptionsOfPoll  = function(params,callback){
          PollOption.find({poll_id : params.poll_id},{},callback)
     
    }


