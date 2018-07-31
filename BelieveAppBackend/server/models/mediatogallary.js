var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var mediaToGallarySchema = new Schema({
  gallary_id                      : { type: String , ref:'MediaGallary' },
  media_type                      : String,
  media_file                      : String,
  thumbnail                       : String,
  status                          : String
},
{
  timestamps: true 
});

  var MediaToGallary         		    = mongoose.model('MediaToGallary',mediaToGallarySchema);
  module.exports                    = MediaToGallary;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewMediaToGallary  = function(params,callback){
            var new_media_to_gallary  = new MediaToGallary(params);  
            new_media_to_gallary.save(callback);
    }

     module.exports.getMediaOfGallaryByAdmin  = function(params,callback){
          MediaToGallary.find({gallary_id : params.gallary_id,status : 'A'})
          .populate({
            path: 'gallary_id',
            select : 'gallary_title category',
            populate: { path: 'category', select : 'name' }
          })
          .sort('-createdAt')
          .exec(callback);     
    }


    
    module.exports.deleteMediaToGallary  = function(id,callback){
          MediaToGallary.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
        }


/////////////////////////// APP END /////////////////////////

  module.exports.getMediaOfGallary  = function(params,callback){
          MediaToGallary.find({gallary_id : params.gallary_id,status : 'A'})
          .sort('-createdAt')
          .exec(callback);     
    }



  module.exports.getMediaOfGallaryLimit  = function(id,callback){
          MediaToGallary.find({gallary_id : id,status : 'A'})
          .sort('-createdAt')
          .limit(3)
          .exec(callback);     
    }


