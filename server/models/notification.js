var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var notificationSchema = new Schema({
  user_id                        : { type: String , ref:'User' },
  author_id                      : { type: String , ref:'User' },
  notification_type              : String,
  post_type                      : String,
  group_id                       : { type: String , ref:'Group' },
  post_id                        : { type: String , ref:'GroupPost' },
  message                        : String,
  status                         : String
},
{
  timestamps: true 
});

  var Notification           		  = mongoose.model('Notification',notificationSchema);
  module.exports                  = Notification;


/////////////////////////// APP END /////////////////////////

    module.exports.addNewNotification  = function(params,callback){
            var new_notification  = new Notification(params);  
            new_notification.save(callback);
    }
  
     module.exports.getNotificationList  = function(params,callback){
          Notification.find({user_id : params.user_id, status : 'A', notification_type : {$ne : 'betrothed'} })
          .populate('author_id','first_name last_name')
          .populate('post_id', 'group_post_status') 
          .populate('group_id', 'group_name')
          .sort('-createdAt')    
          .exec(callback)
    }

       module.exports.getNotificationBetrothds  = function(params,callback){
          Notification.find({user_id : params.user_id, status : 'A', notification_type : {$eq : 'betrothed'} })
          .populate('author_id','first_name last_name')
          .sort('-createdAt')    
          .exec(callback)
    }


   //  module.exports.getAllBlogs  = function(callback){
   //        Blog.find({status : 'A'})
   //        .populate('category','name')
   //        .sort('-createdAt')
   //        .exec(callback);   
   //  }

   //   module.exports.getBlogDetail  = function(params,callback){
   //        Blog.findById(params.blog_id, callback)      
   //  }

   //   module.exports.getAdviceSection  = function(id,callback){
   //        Blog.find({category : id, status : 'A'}, callback)      
   //  }

   // module.exports.getGivingBlogs  = function(giving_id,callback){
   //        Blog.find({category : giving_id, status : 'A'}, callback)      
   //  }

