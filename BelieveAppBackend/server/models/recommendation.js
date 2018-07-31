var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var recommendationSchema = new Schema({
  user_id                         : { type: String , ref:'User' },
  title                           : String,
  description                     : String,
  admin_description               : String,
  status                          : String
},
{
  timestamps: true 
});

  var Recommendation              = mongoose.model('Recommendation',recommendationSchema);
  module.exports                  = Recommendation;


/////////////////////////// ADMIN PANEL /////////////////////////

   

    module.exports.getRecommendationRequests  = function(callback){
             Recommendation.find({status : 'P'})
              .sort('-createdAt')
              .populate('user_id', 'first_name last_name profile_image email')
              .exec(callback);     
    }
   
   
      module.exports.changeStatusRecommendation  = function(params,callback){
          Recommendation.findByIdAndUpdate(params.recommendation_id, {status : params.approve_status},{new:true} ,callback);
        }

        module.exports.getApprovedCanceledRecommendations  = function(callback){
             Recommendation.find({status : { $ne : 'P'}})
              .sort('-createdAt')
              .populate('user_id', 'first_name last_name profile_image')
              .exec(callback);     
         }

         //  module.exports.getcanceledRecommendations  = function(callback){
         //     Recommendation.find({status : 'C'})
         //      .sort('-createdAt')
         //      .populate('user_id', 'first_name last_name profile_image')
         //      .exec(callback);     
         // }
   

/////////////////////////// APP END /////////////////////////

     module.exports.addNewRecommendation  = function(params,callback){
            var new_recommendation  = new Recommendation(params);  
            new_recommendation.save(callback);
    }
    

    // module.exports.getClassifiedsOfCategory  = function(params,callback){
    //       Classified.find({category : params.category,status : 'A'},callback);   
    // }

    //  module.exports.getClassifiedDetail  = function(params,callback){
    //       Classified.findById(params.classified_id, callback)      
    // }
