var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var appointmentSchema = new Schema({
  user_id                         : {type: String , ref:'User'},
  title                           : String,
  date_of_appointment             : Date,
  day_of_appointment              : String,
  time_from                       : String,
  time_to                         : String,
  status                          : String
},
{
  timestamps: true 
});

  var Appointment           		    = mongoose.model('Appointment',appointmentSchema);
  module.exports                    = Appointment;


/////////////////////////// ADMIN PANEL /////////////////////////

 

    module.exports.getAppointmentRequests  = function(callback){
     
          Appointment.find({status : 'P'})
          .populate('user_id', 'first_name last_name profile_image')
          .sort('-createdAt')
          .exec(callback);     
     }

      module.exports.changeStatusAppointment  = function(params,callback){
          Appointment.findByIdAndUpdate(params.appointment_id, {status : params.accept_status},{new:true} ,callback);
        }

     module.exports.getTodaysAppointmentsByAdmin  = function(callback){
      
          var start = new Date();
          start.setHours(0,0,0,0);

          var end = new Date();
          end.setHours(23,59,59,999);

          Appointment.find({status : 'A',date_of_appointment: {$gte: start, $lt: end}})
          .populate('user_id', 'first_name last_name profile_image')
          .sort('-createdAt')
          .exec(callback);     
     }

   
   module.exports.getUpcomingAppointmentsByAdmin  = function(callback){
    console.log("hiiiii yup")
       Appointment.find({status : 'A',date_of_appointment: { "$gt": new Date()}})
         .populate('user_id', 'first_name last_name profile_image')
          .exec(callback); 
        }


/////////////////////////// APP END /////////////////////////


    module.exports.addNewAppointment  = function(params,callback){
            var new_appointment  = new Appointment(params);  
            new_appointment.save(callback);
    }
 
    module.exports.getTodayAppointments  = function(params,callback){
          var start = new Date(params.date);
          start.setHours(0,0,0,0);

          var end = new Date(params.date);
          end.setHours(23,59,59,999);

          Appointment.find({user_id : params.id,status : 'A',date_of_appointment: {$gte: start, $lt: end}})
          .sort('-createdAt')
          .exec(callback);     
    }


    module.exports.getUpcomingAppointments  = function(id,callback){
       Appointment.find({user_id : id,status : 'A',date_of_appointment: { "$gt": new Date()}, status : 'A'})
          .exec(callback); 
        }




