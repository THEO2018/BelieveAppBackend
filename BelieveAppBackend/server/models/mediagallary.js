var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var mediaGallarySchema = new Schema({
  gallary_title                   : String,
  category                        : {type: String , ref:'MediaCategory'},
  status                          : String
},
{
  timestamps: true 
});

  var MediaGallary           		    = mongoose.model('MediaGallary',mediaGallarySchema);
  module.exports                    = MediaGallary;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewMediaGallary  = function(params,callback){
            var new_media_gallary  = new MediaGallary(params);  
            new_media_gallary.save(callback);
    }

    module.exports.getAllMediaGallariesByAdmin  = function(callback){
          MediaGallary.find({status : 'A'})
          .sort('-createdAt')
          .exec(callback);     
    }
    
     module.exports.editMediaGallary  = function(id,params,callback){
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
      MediaGallary.findByIdAndUpdate(id, update,{new:true} ,callback);
    }
 
      module.exports.getMediaGallaryDetail  = function(params,callback){
          MediaGallary.findById(params.gallary_id)
          .sort('-createdAt')
          .exec(callback);     
    }
      


    module.exports.deleteMediaGallary  = function(id,callback){
          MediaGallary.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
        }


    


/////////////////////////// APP END /////////////////////////


   
    module.exports.getAllMediaGallaries  = function(callback){
          MediaGallary.find({status : 'A'})
          .sort('-createdAt')
          .exec(callback);     
    }

     module.exports.getGallariesOfCategory  = function(params,callback){
          MediaGallary.find({status : 'A', category : params.category })
          .sort('-createdAt')
          .exec(callback);     
    }

   // module.exports.getWallPostDetail  = function(params,callback){
   //          WallPost.findById(params.wall_post_id)
   //          .populate('user_id','profile_image first_name last_name')
   //          .exec(callback);     
   //    }
    



