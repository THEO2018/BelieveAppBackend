var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var weddingListSchema = new Schema({
  title                         : String,
  cover_photo                   : String,
  url_online_site               : String,
  status                        : String
},
{
  timestamps: true 
});

  var WeddingList           		    = mongoose.model('WeddingList',weddingListSchema);
  module.exports                    = WeddingList;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewWeddingList  = function(params,callback){
            var new_wedding_list  = new WeddingList(params);  
            new_wedding_list.save(callback);
    }

   module.exports.getAllWeddingList  = function(callback){
          WeddingList.find({status : 'A'})
          .sort('-createdAt')
          .exec(callback);     
    }
    
   module.exports.deleteWeddingList  = function(id,callback){
          WeddingList.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
    }

/////////////////////////// APP END /////////////////////////



   // module.exports.getAllWallPosts  = function(params,callback){
   //        WallPost.find()
   //        .sort('-createdAt')
   //        .populate('user_id','profile_image first_name last_name')
   //        .exec(callback);     
   //  }
    

   // module.exports.getWallPostDetail  = function(params,callback){
   //          WallPost.findById(params.wall_post_id)
   //          .populate('user_id','profile_image first_name last_name')
   //          .exec(callback);     
   //    }
    



