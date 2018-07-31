var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var managerPermissionSchema = new Schema({
  admin_user_id       : String,
  permission_id       : String,
  status              : String
},
{
  timestamps: true 
});

var ManagerPermission          	  = mongoose.model('ManagerPermission',managerPermissionSchema);
module.exports                    = ManagerPermission;




//   module.exports.adminLogin = function (params,callback){         
//    AdminProfile.find({ email: params.email},{}, callback);
//    }

//   module.exports.getAdminPassword = function (params,callback){         
//      AdminProfile.findOne({ email: params.email},{}, callback);
//   }

// module.exports.changeAdminPassword = function (params,callback){         
//      AdminProfile.findByIdAndUpdate(params.id,{ password: params.password}, callback);
//   }



 