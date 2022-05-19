var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var blogCategorySchema = new Schema({
      name                : String,
      type                : String,
      disableStatus       : String,
      status              : String      

},
{
  timestamps: true 
});

  var BlogCategory              = mongoose.model('BlogCategory',blogCategorySchema);
  module.exports                = BlogCategory;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewBlogCategory  = function(params,callback){
            var new_blog_category  = new BlogCategory(params);  
            new_blog_category.save(callback);
    }

    module.exports.getAllBlogCategories  = function(callback){
          BlogCategory.find({status : 'A'},callback);   
    }
    
     module.exports.deleteBlogCategory  = function(id,callback){
          BlogCategory.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
     }



////////////////////// APP END ////////////////////////////////////


 module.exports.getCategoryId  = function(callback){
          BlogCategory.findOne({type : 'advicemarriage'},callback);   
 }


  module.exports.getGivingCategoryId  = function(callback){
          BlogCategory.findOne({type : 'givings'},callback);   
  }

    