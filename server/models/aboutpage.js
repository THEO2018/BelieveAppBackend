var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var aboutPageSchema = new Schema({
  title                           : String,
  description                     : String,
  about_cover_image               : String,
  status                          : String
},
{
  timestamps: true 
});

  var AboutPage           	     = mongoose.model('AboutPage',aboutPageSchema);
  module.exports                 = AboutPage;
 

/////////////////////////// ADMIN PANEL /////////////////////////


  module.exports.addNewAboutPage  = function(params,callback){
              var new_about_page  = new AboutPage(params);  
              new_about_page.save(callback);
      }

  module.exports.editAboutPage  = function(id,params,callback){
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
      console.log("params is-----------",update)
      AboutPage.findByIdAndUpdate(id, update,{new:true} ,callback);
    }
 

  module.exports.getDraftAboutPages  = function(callback){
       AboutPage.find({status : 'S'},callback)
    }

    module.exports.getAboutPages  = function(callback){
       AboutPage.find({status : 'A'},callback)
    }

     module.exports.getAboutpageDetail  = function(params,callback){
       AboutPage.findById(params.about_page_id,{},callback)
    }

      module.exports.deleteAboutPage  = function(id,callback){
       AboutPage.findByIdAndUpdate(id,{status : 'D'},callback)
    }

   module.exports.publishAboutPage  = function(id,callback){
       AboutPage.findByIdAndUpdate(id,{status : 'A'},callback)
    }




/////////////////////////// APP END /////////////////////////


   