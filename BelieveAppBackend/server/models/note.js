var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var noteSchema = new Schema({
  user_id                         : String,
  title                           : String,
  description                     : String,
  status                          : String
},
{
  timestamps: true 
});

  var Note           	           = mongoose.model('Note',noteSchema);
  module.exports                 = Note;
 

/////////////////////////// APP END /////////////////////////


  module.exports.addNewNote  = function(params,callback){
              var new_note  = new Note(params);  
              new_note.save(callback);
   }

    module.exports.getNotes  = function(params,callback){
       Note.find({user_id : params.user_id,status : 'A'},callback)
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

    //   module.exports.deleteAboutPage  = function(id,callback){
    //    AboutPage.findByIdAndUpdate(id,{status : 'D'},callback)
    // }







   