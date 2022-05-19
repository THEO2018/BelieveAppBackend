var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var classifiedCategorySchema = new Schema({
      name                : String,
      type                : String,
      disableStatus       : String,
      status              : String     

},
{
  timestamps: true 
});

  var ClassifiedCategory        = mongoose.model('ClassifiedCategory',classifiedCategorySchema);
  module.exports                = ClassifiedCategory;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewClassifiedCategory  = function(params,callback){
            var new_classified_category  = new ClassifiedCategory(params);  
            new_classified_category.save(callback);
    }

    module.exports.getAllClassifiedsCategories  = function(callback){
          ClassifiedCategory.find({status : 'A'},callback);   
    }
    
    module.exports.deleteClassifiedCategory  = function(id,callback){
          ClassifiedCategory.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
     }

     module.exports.editClassifiedCategory  = function(params,callback){
          ClassifiedCategory.findByIdAndUpdate(params.category_id, {name : params.category_name},{new:true} ,callback);
     }



////////////////////////////////// APP END ////////////////////


   module.exports.getClassifiedId  = function(callback){
            ClassifiedCategory.findOne({type : 'birthnewsforbirthdays'},callback);   
      }
    
