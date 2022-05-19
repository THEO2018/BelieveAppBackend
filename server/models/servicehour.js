var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var serviceHourSchema = new Schema({
  day_from                        : String,
  day_to                          : String,
  time                            : String,
  venue                           : String,
  phone                           : String
},
{
  timestamps: true 
});

  var ServiceHour           	   = mongoose.model('ServiceHour',serviceHourSchema);
  module.exports                 = ServiceHour;
 

/////////////////////////// ADMIN PANEL /////////////////////////


  module.exports.editServiceHours  = function(params,callback){
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
      ServiceHour.findOneAndUpdate({}, update,{new:true} ,callback);
    }
 

    module.exports.getServiceHoursDetail  = function(callback){
       ServiceHour.findOne({},callback)
    }




/////////////////////////// APP END /////////////////////////


   