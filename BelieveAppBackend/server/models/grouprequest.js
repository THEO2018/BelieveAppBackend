var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var groupRequestSchema = new Schema({
  user_id                : {type: String , ref:'User'},
  group_id               : {type: String , ref:'Group'},
  status                 : String
},
{
  timestamps: true 
});

  var GroupRequest       	= mongoose.model('GroupRequest',groupRequestSchema);
  module.exports          = GroupRequest;

/////////////////////////// ADMIN PANEL /////////////////////////


    module.exports.getGroupRequests  = function(params,callback){
          GroupRequest.find({group_id  : params.group_id ,status : 'P'})
          .sort('-createdAt')
          .populate('user_id','first_name last_name profile_image')
          .exec(callback);   

     }
  //    module.exports.getGroupDetailByAdmin  = function(params,callback){
  //         Group.findById(params.group_id)
  //         .populate('users','profile_image first_name last_name')
  //         .exec(callback);   
  //   }


  // module.exports.editGroup  = function(id,params,callback){
  //     function clean(obj) {
  //           for (var propName in obj) {
  //             if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
  //               delete obj[propName];
  //             }
  //           }
  //           console.log("obj is-----------",obj)
  //           return obj;
  //         }

  //     var update = clean(params);
  //     console.log("params is-----------",update)
  //     Group.findByIdAndUpdate(id, update,{new:true} ,callback);
  //   }

   module.exports.updateAcceptStatus  = function(params,callback){
    console.log("hii updateAcceptStatus")
      GroupRequest.findByIdAndUpdate(params.request_id, {status : params.accept_status},{new:true} ,callback);
    }




/////////////////////////// APP APIs /////////////////////////

   
    module.exports.addJoinGroupRequest  = function(params,callback){
            var new_group_request  = new GroupRequest(params);  
            new_group_request.save(callback);
    }

