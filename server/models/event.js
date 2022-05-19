var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var eventSchema = new Schema({
  title                           : String,
  event_category                  : {type: String , ref:'EventCategory'},
  description                     : String,
  start_time                      : String,
  end_time                        : String,
  group_id                        : [{ type: String , ref:'Group' }],
  venue                           : String,
  venue_latitude                  : String,
  venue_longitude                 : String,
  date                            : Date,
  price_status                    : String,
  price                           : String,
  event_cover                     : String,
  status                          : String
},
{
  timestamps: true 
});

  var Event           		    = mongoose.model('Event',eventSchema);
  module.exports              = Event;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewEvent  = function(params,callback){
            var new_event  = new Event(params);  
            new_event.save(callback);
    }

    module.exports.getAllEvents  = function(callback){
          Event.find({status : 'A'})
          .sort('-createdAt')
          .populate('group_id', 'group_name')
          .populate('event_category')
          .exec(callback);     
    }
    


    module.exports.getUpcomingEvents  = function(callback){
       Event.find({date: { "$gt": new Date()}, status : 'A'})
          .sort('-createdAt')
          .populate('group_id', 'group_name')
          .populate('event_category')
          .exec(callback); 
        }

     module.exports.getPastEvents  = function(callback){
           Event.find({date: { "$lt": new Date()}, status : 'A'})
              .sort('-createdAt')
              .populate('group_id', 'group_name')
              .populate('event_category')
              .exec(callback); 
        }

        
     module.exports.getEventDetailByAdmin  = function(params,callback){
              Event.findById(params.event_id)
              .sort('-createdAt')
              .populate('group_id', 'group_name')
              .populate('event_category')
              .exec(callback);     
        }
        
         module.exports.editEvent  = function(id,params,callback){
            function clean(obj) {
                  for (var propName in obj) {
                    if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
                      delete obj[propName];
                    }
                  }
                  return obj;
                }
            var update = clean(params);
    
            Event.findByIdAndUpdate(id, update,{new:true} ,callback);
          }

      module.exports.deleteEvent  = function(id,callback){
          Event.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
      }



/////////////////////////// APP END /////////////////////////


    module.exports.getEvents  = function(id,callback){
          Event.find({status : 'A'})
          .sort('-createdAt')
          .populate('group_id', 'group_name users')
          .populate('event_category')
          .exec(callback);     
    }

    
  module.exports.getGroupEvents  = function(params,callback){
          Event.find({status : 'A', group_id : params.group_id})
          .sort('-createdAt')
          .populate('group_id', 'group_name users')
          .populate('event_category')
          .exec(callback);     
    }


    module.exports.getMarriageEvents  = function(id,callback){
            Event.find({event_category : id, status : 'A'})
            .sort('-createdAt')
            .populate('group_id', 'group_name users')
            .populate('event_category')
            .exec(callback);       
    }

   module.exports.getEventDetail  = function(params,callback){
              Event.findById(params.event_id)
              .sort('-createdAt')
              .populate({
                    path: 'group_id',
                    model: "Group", 
                    populate: {
                        path: 'users',
                        select: 'first_name last_name profile_image',
                        model: 'User'
                      }
                  })
              .populate('event_category')
              .exec(callback);     
        }
        



