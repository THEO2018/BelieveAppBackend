var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var adminprofileSchema = new Schema({
  email               : String,
  phone               : String,
  name                : String,
  password            : String,
  role                : Number,
  createdBy           : String,
  permissions         : [{ type: String , ref:'Permission' }],
  status              : String
},
{
  timestamps: true 
});

var AdminProfile          	  = mongoose.model('AdminProfile',adminprofileSchema);
module.exports                = AdminProfile;



 module.exports.addNewAdmin  = function(params,callback){
            var new_admin  = new AdminProfile(params);  
            new_admin.save(callback);
    }


  module.exports.adminLogin = function (params,callback){         
   AdminProfile.find({ email: params.email.toLowerCase()},{})
   .populate('permissions')
   .exec(callback);
   }

   module.exports.checkIfEmailExist = function(params, callback) {
    AdminProfile.findOne({ email: params.email.toLowerCase()}, callback);
   }

  module.exports.getAdminPassword = function (params,callback){         
     AdminProfile.findOne({ email: params.email.toLowerCase()},{}, callback);
  }

module.exports.changeAdminPassword = function (params,callback){         
     AdminProfile.findByIdAndUpdate(params.id,{ password: params.password}, callback);
  }


 module.exports.editAdmin  = function(params,callback){
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
      AdminProfile.findByIdAndUpdate(params.admin_id, update,{new:true} ,callback);
  }


 
    module.exports.getAdminPermissions = function (params,callback){         
         AdminProfile.findById(params.admin_id,'permissions')
         .populate('permissions')
         .exec(callback);
      }

      
    module.exports.getManagers = function (callback){         
        AdminProfile.find({ role : 2},{}, callback);
     }

       module.exports.getManagerDetail = function (params,callback){         
        AdminProfile.findById(params.admin_id,{}, callback);
     }

