var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var GroupPhotoSchema = new Schema({
  user_id                         : { type: String , ref:'User' },
  group_id                        : String,
  group_photo                     : String,
  status                          : String
},
{
  timestamps: true 
});

  var GroupPhoto           		  = mongoose.model('GroupPhoto',GroupPhotoSchema);
  module.exports                = GroupPhoto;



    module.exports.addNewGroupPhoto  = function(params,callback){
            var new_photo  = new GroupPhoto(params);  
            new_photo.save(callback);
    }

   module.exports.getAllGroupPhotos  = function(params,callback){
          GroupPhoto.find({group_id : params.group_id}, callback)

    }
    

    
  


