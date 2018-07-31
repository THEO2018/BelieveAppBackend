var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var groupSchema = new Schema({
  group_name                : String,
  description               : String,
  privacy                   : String,
  users                     : [{ type: String , ref:'User' }],
  admin_users               : [{ type: String , ref:'User' }],
  group_image               : String,
  requests                  : [{ user_id : { type: String , ref:'User' }, request_status : String }],
  status                    : String
},
{
  timestamps: true 
});

  var Group           		= mongoose.model('Group',groupSchema);
  module.exports          = Group;

/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewGroup  = function(params,callback){
             params.status = 'A';
            var new_group  = new Group(params);  
            new_group.save(callback);
    }

    module.exports.getAllGroupsAdmin  = function(callback){
          Group.find({status : 'A'})
          .sort('-createdAt')
          // .populate('admin_users','profile_image')
         // .populate('users','profile_image')
          .exec(callback);   

    }
     module.exports.getGroupDetailByAdmin  = function(params,callback){
          Group.findById(params.group_id)
          .populate('users','profile_image first_name last_name')
          .exec(callback);   
    }


  module.exports.editGroup  = function(id,params,callback){
      function clean(obj) {
            for (var propName in obj) {
              if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
                delete obj[propName];
              }
            }
            console.log("obj is-----------",obj)
            return obj;
          }

      var update = clean(params);
      console.log("params is-----------",update)
      Group.findByIdAndUpdate(id, update,{new:true} ,callback);
    }


 module.exports.addUserToGroup  = function(params,callback){
  console.log("hi addUserToGroup ",params)
      Group.findByIdAndUpdate(params.group_id, {        
          $push:{
                 "users" : params.user_id
                }
          },{new:true} ,callback);
    }
    


 module.exports.addJoinGroupRequest  = function(params,callback){
  console.log("hi addJoinGroupRequest ",params)
      Group.findByIdAndUpdate(params.group_id, {        
          $push:{
                 "requests" : {user_id : params.user_id, request_status : 'P'}
                }
          },{new:true} ,callback);
    }

    module.exports.getGroupRequests  = function(params,callback){
      
             Group.find({"_id" : params.group_id, "requests.request_status" : 'P' })
               .populate('requests.user_id', 'first_name last_name profile_image')
               .exec(callback);

    }

 module.exports.updateAcceptStatus  = function(params,callback){
      Group.findOneAndUpdate({"_id" : params.group_id, "requests._id" : params.request_id },
       {$set : {"requests.$.request_status" : params.accept_status}} ,{new:true} ,callback);
    }

   module.exports.deleteGroup  = function(id,callback){
      Group.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
    }




/////////////////////////// APP APIs /////////////////////////

    module.exports.getAllGroups  = function(params,callback){
          Group.find({ status : 'A' }, 'group_name users admin_users group_image status')
          // .populate('admin_users','profile_image')
          .populate('users','profile_image')
          .exec(callback);   
    }

    module.exports.getGroupDetail  = function(params,callback){
          Group.findById(params.group_id)
          .populate('users','profile_image')
          .exec(callback);   
    }

      module.exports.getAllGroupsNotification  = function(params,callback){
          Group.find({ status : 'A' },callback)
          
    }

   module.exports.getOtherGroupMember  = function(group_id,callback){
    console.log("getOtherGroupMember ",group_id)
          Group.findById(group_id, 'group_name users')
          .populate('users')
          .exec(callback);   
    }

    



    
  


