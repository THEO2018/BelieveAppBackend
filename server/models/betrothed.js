var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var betrothedSchema = new Schema({
  user_id                         : { type: String , ref:'User' },
  first_user_id                   : { type: String , ref:'User' },
  second_user_id                  : { type: String , ref:'User' },
  visibility_status               : String,
  status                          : String
},
{
  timestamps: true 
});

  var Betrothed           		    = mongoose.model('Betrothed',betrothedSchema);
  module.exports                  = Betrothed;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewBetrothedByAdmin  = function(params,callback){
            var new_betrothed  = new Betrothed(params);  
            new_betrothed.save(callback);
    }

    module.exports.getAllBetrothedsByAdmin  = function(callback){
          Betrothed.find({status : 'A'})
          .sort('-createdAt')
          .populate('first_user_id','profile_image first_name last_name')
          .populate('second_user_id','profile_image first_name last_name')
          .exec(callback);     
    }

      module.exports.getDraftBetrotheds  = function(callback){
          Betrothed.find({status : 'S'})
          .sort('-createdAt')
          .populate('first_user_id','profile_image first_name last_name')
          .populate('second_user_id','profile_image first_name last_name')
          .exec(callback);     
    }

     module.exports.getAllPendingBetrotheds  = function(callback){
          Betrothed.find({status : 'P'})
          .sort('-createdAt')
          //.populate('user_id','profile_image first_name last_name')
          .populate('first_user_id','profile_image first_name last_name gender')
          .populate('second_user_id','profile_image first_name last_name gender')
          .exec(callback);     
    }
    
      module.exports.deleteBetrothed  = function(id,callback){
         Betrothed.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
       }

        module.exports.changeStatus  = function(params,callback){
          Betrothed.findByIdAndUpdate(params.betrothed_id, {status : params.accept_status, visibility_status : params.visibility_status},{new:true} ,callback);
        }

       module.exports.publishBetrothed  = function(id,callback){
         Betrothed.findByIdAndUpdate(id, {status : 'A'},{new:true} ,callback);
       }

       module.exports.checkIfAlreadyBetrothed  = function(params,callback){
        Betrothed.findOne({$or:[{first_user_id: params.user_id},{second_user_id: params.user_id}], status: "A"} ,callback);
       }

       module.exports.checkIfFirstUserIsEngagedBetrothed  = function(params,callback){
        Betrothed.findOne({$or:[{first_user_id: params.first_user_id},{second_user_id: params.first_user_id}], status: "A"})
        .populate('first_user_id')
        .populate('second_user_id')
        .exec(callback)
       }

       module.exports.checkIfSecondUserIsEngagedBetrothed  = function(params,callback){
        Betrothed.findOne({$or:[{first_user_id: params.second_user_id},{second_user_id: params.second_user_id}], status: "A"})
        .populate('first_user_id')
        .populate('second_user_id')
        .exec(callback)
       }




/////////////////////////// APP END /////////////////////////

  module.exports.addNewBetrothed  = function(params,callback){
            var new_betrothed  = new Betrothed(params);  
            new_betrothed.save(callback);
    }

  module.exports.getAllBetrotheds  = function(callback){
          Betrothed.find({status : 'A', visibility_status : 'Y'})
          .sort('-createdAt')
          .populate('first_user_id','profile_image first_name last_name')
          .populate('second_user_id','profile_image first_name last_name')
          .exec(callback);     
    }

  