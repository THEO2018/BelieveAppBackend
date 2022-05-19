var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var contactSchema = new Schema({
  location                        : String,
  phone                           : String,
  mail                            : String,
  country                         : String,
  latitude                        : String,
  longitude                       : String,
  website_link                    : String,
  facebook_link                   : String,
  twitter_link                    : String,
  instagram_link                  : String
},
{
  timestamps: true 
});

  var Contact           		     = mongoose.model('Contact',contactSchema);
  module.exports                 = Contact;
 

/////////////////////////// ADMIN PANEL /////////////////////////


  module.exports.editContactDetail  = function(params,callback){
      function clean(obj) {
            for (var propName in obj) {
              if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined || obj[propName] === 'null') {
                delete obj[propName];
              }
            }
            console.log("obj is-----------",obj)
            return obj;
          }

      var update = clean(params);
      console.log("params is-----------",update)
      Contact.findOneAndUpdate({}, update,{new:true} ,callback);
    }
 

    module.exports.getContactDetail  = function(callback){
       Contact.findOne({},callback)
    }




/////////////////////////// APP END /////////////////////////


   