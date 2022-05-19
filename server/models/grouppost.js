var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var GroupPostSchema = new Schema({
  user_id                         : { type: String , ref:'User' },
  group_id                        : String,
  group_post_status               : String,
  group_post_media                : String,
  group_post_media_type           : String,
  thumbnail                       : String,
  status                          : String
},
{
  timestamps: true 
});

  var GroupPost           		  = mongoose.model('GroupPost',GroupPostSchema);
  module.exports                = GroupPost;



    module.exports.addNewGroupPost  = function(params,callback){
            var new_post  = new GroupPost(params);  
            new_post.save(callback);
    }

   module.exports.getAllGroupPosts  = function(params,callback){
          GroupPost.find({group_id : params.group_id})
          .sort('-createdAt')
          .populate('user_id','profile_image first_name last_name')
          .exec(callback);     
    }
    

   module.exports.getGroupPostDetail  = function(params,callback){
            GroupPost.findById(params.post_id)
            .populate('user_id','profile_image first_name last_name')
            .exec(callback);     
      }

        module.exports.getPostInfo  = function(group_post_id,callback){
          console.log("hiii getPostInfo ",group_post_id)
            GroupPost.findById(group_post_id)
            .populate('user_id')
            .exec(callback);     
      }
    



   module.exports.getGroupPostsPhotos  = function(params,callback){
          GroupPost.find({group_id : params.group_id,group_post_media_type : 'P' })
          .sort('-createdAt')
          .exec(callback);     
    }
    

