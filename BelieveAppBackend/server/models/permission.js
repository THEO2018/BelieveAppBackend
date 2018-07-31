var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var permissionSchema = new Schema({
      type               : String,
      name               : String

},
{
  timestamps: true 
});

var Permission          	  = mongoose.model('Permission',permissionSchema);
module.exports              = Permission;



 // module.exports.addNewPermission  = function(params,callback){
 //            var new_admin  = new AdminProfile(params);  
 //            new_admin.save(callback);
 //    }


  module.exports.getPermissions = function (callback){        
     Permission.find({},{}, callback);
  }


 // module.exports.editAdmin  = function(params,callback){
 //      function clean(obj) {
 //            for (var propName in obj) {
 //              if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
 //                delete obj[propName];
 //              }
 //            }
 //            console.log("obj is-----------",obj)
 //            return obj;
 //          }

 //      var update = clean(params);
 //      AdminProfile.findByIdAndUpdate(params.admin_id, update,{new:true} ,callback);
 //    }

 