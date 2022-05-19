var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var prayerSchema = new Schema({
  user_id                         : { type: String , ref:'User' },
  title                           : String,
  category                        : { type: String , ref:'PrayerCategory' },
  message                         : String,
  post_as_anonymous               : Boolean,
  answered                        : Boolean,
  status                          : String
},
{
  timestamps: true 
});

  var Prayer           	         = mongoose.model('Prayer',prayerSchema);
  module.exports                 = Prayer;
 

/////////////////////////// APP END /////////////////////////


  module.exports.addNewPrayer  = function(params,callback){
              var new_prayer  = new Prayer(params);  
              new_prayer.save(callback);
   }


      module.exports.changeAnsweredStatus  = function(params,callback){
       Prayer.findByIdAndUpdate(params.prayer_id,{answered : true},callback)
    }



    module.exports.getPrayers  = function(callback){
       Prayer.find({status : 'A'})
       .populate('category')
       .exec(callback);
    }

     module.exports.getPrayerDetail  = function(params,callback){
       Prayer.findById(params.prayer_id)
       .populate('category')
       .exec(callback);
    }


  // module.exports.editAboutPage  = function(id,params,callback){
  //     function clean(obj) {
  //           for (var propName in obj) {
  //             if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
  //               delete obj[propName];
  //             }
  //           }
  //           console.log("obj is-----------",obj)
  //           return obj;
  //         }

  //     var update = clean(params);
  //     console.log("params is-----------",update)
  //     AboutPage.findByIdAndUpdate(id, update,{new:true} ,callback);
  //   }
 

    //  module.exports.getAboutpageDetail  = function(params,callback){
    //    AboutPage.findById(params.about_page_id,{},callback)
    // }






   