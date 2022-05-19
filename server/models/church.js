var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var churchSchema = new Schema({
  church_name                 : String,
  church_address              : String,
  church_timing_from          : String,
  church_timing_to            : String,
  website                     : String,
  phone                       : String,
  logo                        : String,
  status                      : String
},
{
  timestamps: true 
});

  var Church           	    = mongoose.model('Church',churchSchema);
  module.exports            = Church;


/////////////////////////// ADMIN PANEL /////////////////////////

    // module.exports.addNewBlog  = function(params,callback){
    //         var new_blog  = new Blog(params);  
    //         new_blog.save(callback);
    // }

    module.exports.getChurchDetail  = function(callback){
          Church.findOne(callback) ;   
    }
   
    module.exports.editChurchDetail  = function(id,params,callback){
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
      Church.findByIdAndUpdate(id, update,{new:true} ,callback);
    }