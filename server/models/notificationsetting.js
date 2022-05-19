var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var notificationSettingSchema = new Schema({
  user_id                         : String,
  group_id                        : String,
  status                          : String
},
{
  timestamps: true 
});

  var NotificationSetting         = mongoose.model('NotificationSetting',notificationSettingSchema);
  module.exports                  = NotificationSetting;


/////////////////////////// APP END /////////////////////////

    module.exports.addNewNotificationSetting  = function(params,callback){
            var new_setting  = new NotificationSetting(params);  
            new_setting.save(callback);
    }

 
        
     module.exports.findSettingExistAndUpdate  = function(params,callback){
      
        NotificationSetting.findOneAndUpdate({user_id : params.user_id, group_id : params.group_id}, {status : params.status},{new:true} ,callback);
      }


   module.exports.getNotificationStatus  = function(group_id,user_id,callback){
       console.log("hiiii getNotificationStatus in model ",group_id,user_id)
        NotificationSetting.findOne({user_id : user_id, group_id : group_id},callback);
      }

     
