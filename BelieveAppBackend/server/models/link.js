var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var linksSchema = new Schema({
  title                       : String,
  url                         : String,
  status                      : String
},
{
  timestamps: true 
});

  var Link                  = mongoose.model('Link',linksSchema);
  module.exports            = Link;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewLink  = function(params,callback){
            var new_link  = new Link(params);  
            new_link.save(callback);
    }

    module.exports.getLinks  = function(callback){
          Link.find({status : 'A'},callback);   
    }
    //  module.exports.getLibraryVideos  = function(callback){
    //       Library.find({media_type : 'V'},callback);   
    // }
    //  module.exports.getLibraryAudio  = function(callback){
    //       Library.find({media_type : 'A'},callback);   
    // }
   
