var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var GivingSchema = new Schema({
      giving_url         : String      

},
{
  timestamps: true 
});

  var GivingUrl          = mongoose.model('GivingUrl',GivingSchema);
  module.exports         = GivingUrl;


/////////////////////////// ADMIN PANEL /////////////////////////

    
     module.exports.updateGivingUrl  = function(params,callback){
      GivingUrl.findOneAndUpdate({},{giving_url : params.giving_url},{new:true} ,callback);
    }

   module.exports.getGivingUrl  = function(callback){
      GivingUrl.findOne({},callback);
    }

  




