var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var prayerCategorySchema = new Schema({
      name                       : String,
},
{
  timestamps: true 
});

  var PrayerCategory           		    = mongoose.model('PrayerCategory',prayerCategorySchema);
  module.exports                      = PrayerCategory;


/////////////////////////// ADMIN PANEL /////////////////////////

    // module.exports.addNewPrayerCategory  = function(params,callback){
    //         var new_event_category  = new EventCategory(params);  
    //         new_event_category.save(callback);
    // }

    module.exports.getAllPrayerCategories  = function(callback){
          PrayerCategory.find(callback);   
    }
    
    // module.exports.getIdOfCategory  = function(name,callback){
    //       EventCategory.findOne({name : name},callback);   
    // }
    




