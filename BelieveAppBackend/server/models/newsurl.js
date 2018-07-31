var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var NewsSchema = new Schema({
      name             : String,
      news_url         : String,
      description     : String,
      news_image        : String,
      status           : String       

},
{
  timestamps: true 
});

  var NewsUrl            = mongoose.model('NewsUrl',NewsSchema);
  module.exports         = NewsUrl;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewNewsUrl  = function(params,callback){
            var new_news_url  = new NewsUrl(params);  
            new_news_url.save(callback);
    }

    module.exports.getNewsUrls  = function(callback){
          NewsUrl.findOne({status : 'A'},callback);   
    }
    
     module.exports.editNewsUrl  = function(params,callback){
      //   function clean(obj) {
      //       for (var propName in obj) {
      //         if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
      //           delete obj[propName];
      //         }
      //       }
      //       return obj;
      //     }

      // var update = clean(params);
      NewsUrl.findOneAndUpdate({}, {news_url : params.news_url},{new:true} ,callback);
    }

    module.exports.deleteNewsUrl  = function(id,callback){
          NewsUrl.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
     }




/////////////////////////// APP END /////////////////////////


 module.exports.getNewsUrlsApp  = function(callback){
          NewsUrl.findOne({status : 'A'},callback);   
    }