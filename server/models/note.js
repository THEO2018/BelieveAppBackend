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

  module.exports.updateNote = function(params, callback) {
    var update = clean(params)
    Note.findByIdAndUpdate({_id : params.note_id}, update, {new: true}, callback)
  }

    function clean(obj) {
      for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
          delete obj[propName];
        }
      }
      console.log("obj is-----------",obj)
      return obj;
    }