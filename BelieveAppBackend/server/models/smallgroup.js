var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var smallGroupSchema = new Schema({
  small_group_name                : String,
  small_group_description         : String,
  users                           : [{ type: String , ref:'User' }],
  admin_users                     : [{ type: String , ref:'User' }],
  venue                           : String,
  venue_latitude                  : String,
  venue_longitude                 : String,
  days                            : String,
  start_time                      : String,
  end_time                        : String,
  zip_code                        : String,
  small_group_image               : String,
  requests                        : [{ user_id : { type: String , ref:'User' }, request_status : String }],
  status                          : String
},
{
  timestamps: true 
});

  var SmallGroup           		= mongoose.model('SmallGroup',smallGroupSchema);
  module.exports              = SmallGroup;

/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewSmallGroup  = function(params,callback){
      params.status = 'A';
            var new_small_group  = new SmallGroup(params);  
            new_small_group.save(callback);
    }

    module.exports.getAllSmallGroupsAdmin  = function(callback){
          SmallGroup.find({status : 'A'})
          .sort('-createdAt')
          .populate('admin_users','first_name last_name profile_image')
           .populate('users','first_name last_name profile_image')
          .exec(callback);   

    }
     module.exports.getSmallGroupDetailByAdmin  = function(params,callback){
          SmallGroup.findById(params.small_group_id)
          .populate('admin_users','first_name last_name profile_image')
           .populate('users','first_name last_name profile_image')
          .exec(callback);   

    }


      module.exports.editSmallGroup  = function(id,params,callback){
        console.log("id in model ",id)
            function clean(obj) {
                  for (var propName in obj) {
                    if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined || obj[propName] === "undefined") {
                      delete obj[propName];
                    }
                  }
                  console.log("obj is-----------",obj)
                  return obj;
                }

            var update = clean(params);
            console.log("params is-----------",update)
            SmallGroup.findByIdAndUpdate(id, update,{new:true} ,callback);
          }

          

 module.exports.addJoinSmallGroupRequest  = function(params,callback){
  console.log("hi addJoinSmallGroupRequest ",params)
      SmallGroup.findByIdAndUpdate(params.small_group_id, {        
          $push:{
                 "requests" : {user_id : params.user_id, request_status : 'P'}
                }
          },{new:true} ,callback);
    }


    
    module.exports.getSmallGroupRequests  = function(params,callback){
             SmallGroup.find({"_id" : params.small_group_id, "requests.request_status" : 'P' })
               .populate('requests.user_id', 'first_name last_name profile_image')
               .exec(callback);
    }




  module.exports.updateAcceptStatus  = function(params,callback){
      SmallGroup.findOneAndUpdate({"_id" : params.small_group_id, "requests._id" : params.request_id },
       {$set : {"requests.$.request_status" : params.accept_status}} ,{new:true} ,callback);
    }


 module.exports.addUserToSmallGroup  = function(params,callback){
  console.log("hi addUserToSmallGroup ",params)
      SmallGroup.findByIdAndUpdate(params.small_group_id, {        
          $push:{
                 "users" : params.user_id
                }
          },{new:true} ,callback);
    }

      module.exports.deleteSmallGroup  = function(id,callback){
            SmallGroup.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
        }



/////////////////////////// APP APIs /////////////////////////

    module.exports.getAllSmallGroups  = function(params,callback){
          SmallGroup.find({status : 'A'})
          // .populate('admin_users','first_name last_name')
          .populate('users','profile_image')
          .exec(callback);   
    }

  module.exports.SearchSmallGroups = function (params, callback){    
             SmallGroup.find({'small_group_name' : { $regex : new RegExp(params.small_group_name, "i")}, status : 'A'})
             .populate('users','profile_image')
             .exec(callback);
            
      }
    module.exports.getSmallGroupDetail  = function(params,callback){
          SmallGroup.findById(params.small_group_id)
          .populate('admin_users','first_name last_name')
           .populate('users','profile_image')
          .exec(callback);   
    }

    
    
 module.exports.addUserToSmallGroup  = function(params,callback){
      SmallGroup.findByIdAndUpdate(params.small_group_id, {        
          $push:{
                 "users" : params.user_id
                }
          },{new:true} ,callback);
    }
    
    

    
  


