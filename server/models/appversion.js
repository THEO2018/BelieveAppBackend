var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var appVersionSchema = new Schema({
  version                      : String,
  force_update                 : String,

},
{
  timestamps: true 
});

  var AppVersion           		   = mongoose.model('AppVersion',appVersionSchema);
  module.exports                 = AppVersion;


/////////////////////////// APP END /////////////////////////
 

    module.exports.getAppversion  = function(callback){
          AppVersion.findOne({},callback)
           
    }
   
  