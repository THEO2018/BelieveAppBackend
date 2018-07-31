var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var pollSettingSchema = new Schema({
  past_polls_visibility_status       : Boolean,
  no_of_past_polls_visible           : Number,
},
{
  timestamps: true 
});

var PollSetting          	  = mongoose.model('PollSetting',pollSettingSchema);
module.exports              = PollSetting;




  module.exports.getPollSettings = function (callback){         
     PollSetting.findOne(callback);
  }


 module.exports.editPollSetting  = function(params,callback){
      function clean(obj) {
            for (var propName in obj) {
              if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
                delete obj[propName];
              }
            }
            console.log("obj is-----------",obj)
            return obj;
          }

      var update = clean(params);
      PollSetting.findOneAndUpdate({}, update,{new:true} ,callback);
  }


 
