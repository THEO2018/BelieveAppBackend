var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var issueCategorySchema = new Schema({
      name                : String,
      status              : String     

},
{
  timestamps: true 
});

  var IssueCategory        = mongoose.model('IssueCategory',issueCategorySchema);
  module.exports           = IssueCategory;


/////////////////////////// ADMIN PANEL /////////////////////////

 
    module.exports.getAllIssueCategories  = function(callback){
          IssueCategory.find({status : 'A'},callback);   
    }
    