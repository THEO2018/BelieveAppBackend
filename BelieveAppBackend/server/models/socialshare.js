var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var socialShareSchema = new Schema({
  content         : String,
  status          : String
},
{
  timestamps: true 
});

  var SocialShare           		    = mongoose.model('SocialShare',socialShareSchema);
  module.exports                  = SocialShare;


/////////////////////////// ADMIN PANEL /////////////////////////

   
    
      module.exports.updateSocialShare  = function(params,callback){
         SocialShare.findOneAndUpdate({}, {content : params.content},{new:true} ,callback);
       }

    module.exports.getSocialShareContent  = function(callback){
          SocialShare.findOne({},callback);     
    }

   

  

  