var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var classifiedSchema = new Schema({
  classified_title                : String,
  category                        : { type: String , ref:'BlogCategory' },
  classified                      : String,
  classified_image                : String,
  venue                           : String,
  venue_latitude                  : String,
  venue_longitude                 : String,
  status                          : String
},
{
  timestamps: true 
});

  var Classified                  = mongoose.model('Classified',classifiedSchema);
  module.exports                  = Classified;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewClassified  = function(params,callback){
            var new_classified  = new Classified(params);  
            new_classified.save(callback);
    }

    module.exports.getClassifiedsOfCategoryByAdmin  = function(params,callback){
          Classified.find({category : params.category,status : 'A'},callback);   
    }
   
     module.exports.getClassifiedDetailByAdmin  = function(params,callback){
          Classified.findById(params.classified_id, callback)      
    }
    
     module.exports.deleteClassified  = function(id,callback){
          Classified.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
     }

        module.exports.getAllClassifieds  = function(callback){
          Classified.find({status : 'A'})
          .populate('category') 
          .exec(callback)
    }


/////////////////////////// APP END /////////////////////////

    module.exports.getClassifiedsOfCategory  = function(params,callback){
          Classified.find({category : params.category,status : 'A'},callback);   
    }

     module.exports.getClassifiedDetail  = function(params,callback){
          Classified.findById(params.classified_id, callback)      
    }

     module.exports.getBirthNewsSection  = function(id,callback){
          Classified.find({category : id, status : 'A'}, callback)      
    }
