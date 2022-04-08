var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recommendationSchema = new Schema({
  user_id: { type: String, ref: 'User' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  admin_description: { type: String, default: '' },
  pdf_letter: { type: String, default: '' },
  status: String
},
  {
    timestamps: true
  });

var Recommendation = mongoose.model('Recommendation', recommendationSchema);
module.exports = Recommendation;


/////////////////////////// ADMIN PANEL /////////////////////////



module.exports.getRecommendationRequests = function (callback) {
  Recommendation.find({ status: 'P' })
    .sort('-createdAt')
    .populate('user_id', 'first_name last_name profile_image email')
    .exec(callback);
}

module.exports.getApprovedRecommendations = function (callback) {
  Recommendation.find({ status: 'A' })
    .sort('-createdAt')
    .populate('user_id', 'first_name last_name profile_image email')
    .exec(callback);
}


module.exports.changeStatusRecommendation = function (params, callback) {
  Recommendation.findByIdAndUpdate(params.recommendation_id, { status: params.approve_status }, { new: true }, callback);
}

module.exports.updateRecommendation = function (params, callback) {
  var update = clean(params)
  Recommendation.findByIdAndUpdate(params.recommendation_id, update, { new: true })
    .exec(callback)
}

module.exports.getApprovedCanceledRecommendations = function (callback) {
  Recommendation.find({ status: { $ne: 'P' } })
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

module.exports.addNewRecommendation = function (params, callback) {
  var new_recommendation = new Recommendation(params);
  new_recommendation.save(callback);
}


// module.exports.getClassifiedsOfCategory  = function(params,callback){
//       Classified.find({category : params.category,status : 'A'},callback);   
// }

//  module.exports.getClassifiedDetail  = function(params,callback){
//       Classified.findById(params.classified_id, callback)      
// }


function clean(obj) {
  for (var data in obj) {
    if (obj[data] === null || obj[data] === '' || obj[data] === undefined) {
      delete obj[data];
    }
  }
  return obj;
}


