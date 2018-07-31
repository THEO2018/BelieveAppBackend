var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var librarySchema = new Schema({
  image_name                  : String,
  media_type                  : String,
  section                     : String,
  path                        : String,
  thumbnail                   : String,
  title                       : String,
  status                      : String
},
{
  timestamps: true 
});

  var Library                  = mongoose.model('Library',librarySchema);
  module.exports               = Library;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewLibrary  = function(params,callback){
            var new_library  = new Library(params);  
            new_library.save(callback);
    }

    module.exports.getLibraryImages  = function(callback){
          Library.find({media_type : 'I'},callback);   
    }
     module.exports.getLibraryVideos  = function(callback){
          Library.find({media_type : 'V'},callback);   
    }
     module.exports.getLibraryAudio  = function(callback){
          Library.find({media_type : 'A'},callback);   
    }
   
//      module.exports.getClassifiedDetailByAdmin  = function(params,callback){
//           Classified.findById(params.classified_id, callback)      
//     }
    
//      module.exports.deleteClassified  = function(id,callback){
//           Classified.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
//      }


// /////////////////////////// APP END /////////////////////////

//     module.exports.getClassifiedsOfCategory  = function(params,callback){
//           Classified.find({category : params.category,status : 'A'},callback);   
//     }

//      module.exports.getClassifiedDetail  = function(params,callback){
//           Classified.findById(params.classified_id, callback)      
//     }
