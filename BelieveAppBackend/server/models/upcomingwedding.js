var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var upcomingMarriageSchema = new Schema({
  first_user_id                 : { type: String , ref:'User' },
  second_user_id                : { type: String , ref:'User' },
  date                          : String,
  marriage_cover_photo          : String,
  status                        : String
},
{
  timestamps: true 
});

  var UpcomingMarriage           		    = mongoose.model('UpcomingMarriage',upcomingMarriageSchema);
  module.exports                        = UpcomingMarriage;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewUpcomingMarriage  = function(params,callback){
            var new_upcoming_wedding  = new UpcomingMarriage(params);  
            new_upcoming_wedding.save(callback);
    }

    module.exports.getAllUpcomingMarriages  = function(callback){
              UpcomingMarriage.find({status : 'A'})
              .sort('-createdAt')
              .populate('first_user_id','profile_image first_name last_name')
              .populate('second_user_id','profile_image first_name last_name')
              .exec(callback);     
        }
      module.exports.getDraftUpcomingMarriages  = function(callback){
              UpcomingMarriage.find({status : 'S'})
              .sort('-createdAt')
              .populate('first_user_id','profile_image first_name last_name')
              .populate('second_user_id','profile_image first_name last_name')
              .exec(callback);     
        }
    
     module.exports.deleteUpcomingMarriage  = function(id,callback){
              UpcomingMarriage.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
       }
     module.exports.deleteUpcomingMarriage  = function(id,callback){
              UpcomingMarriage.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
       }
      module.exports.deleteUpcomingMarriage  = function(id,callback){
              UpcomingMarriage.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
       }
        module.exports.publishUpcomingMarriage  = function(id,callback){
              UpcomingMarriage.findByIdAndUpdate(id, {status : 'A'},{new:true} ,callback);
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
    



