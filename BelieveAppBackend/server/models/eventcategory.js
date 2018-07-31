var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var eventCategorySchema = new Schema({
      name                       : String,
},
{
  timestamps: true 
});

  var EventCategory           		    = mongoose.model('EventCategory',eventCategorySchema);
  module.exports                      = EventCategory;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewEventCategory  = function(params,callback){
            var new_event_category  = new EventCategory(params);  
            new_event_category.save(callback);
    }

    module.exports.getAllEventCategories  = function(callback){
          EventCategory.find(callback);   
    }
    
    module.exports.getIdOfCategory  = function(name,callback){
          EventCategory.findOne({name : name},callback);   
    }
    


/////////////////////////// APP END ////////////////////////////////////////


 module.exports.getCategoryId  = function(callback){
            EventCategory.findOne({name : 'Marriages'},callback);   
      }

