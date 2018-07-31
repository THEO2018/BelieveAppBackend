var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var mediaCategorySchema = new Schema({
      name                : String,
      // type                : String,
      // disableStatus       : String,
      status              : String     

},
{
  timestamps: true 
});

  var MediaCategory        = mongoose.model('MediaCategory',mediaCategorySchema);
  module.exports                = MediaCategory;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewMediaCategory  = function(params,callback){
            var new_media_category  = new MediaCategory(params);  
            new_media_category.save(callback);
    }

    module.exports.getAllMediaCategories  = function(callback){
          MediaCategory.find({status : 'A'},callback);   
    }
    
    module.exports.deleteMediaCategory  = function(id,callback){
          MediaCategory.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
     }

     module.exports.editClassifiedCategory  = function(params,callback){
          ClassifiedCategory.findByIdAndUpdate(params.category_id, {name : params.category_name},{new:true} ,callback);
     }



////////////////////////////////// APP END ////////////////////


   module.exports.getClassifiedId  = function(callback){
            ClassifiedCategory.findOne({type : 'birthnewsforbirthdays'},callback);   
      }
    
