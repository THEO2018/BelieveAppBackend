var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var birthdayListSchema = new Schema({
  bday_list_title                    : String,
  bday_list_cover_photo              : String,
  bday_list_url_online_site          : String,
  status                             : String
},
{
  timestamps: true 
});

  var BirthdayList           		    = mongoose.model('BirthdayList',birthdayListSchema);
  module.exports                    = BirthdayList;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewBirthdayList  = function(params,callback){
            var new_wedding_list  = new BirthdayList(params);  
            new_wedding_list.save(callback);
    }

   module.exports.getAllBirthdayLists  = function(callback){
          BirthdayList.find({status : 'A'})
          .sort('-createdAt')
          .exec(callback);     
    }

    module.exports.deleteBirthdayList  = function(id,callback){
          BirthdayList.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
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
    



