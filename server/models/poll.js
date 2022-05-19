var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var pollSchema = new Schema({
  poll_title                                  : String,
  question                                    : String,
  start_time                                   : {type: Date, default: new Date()},
  end_time                                    : {type: Date, default: new Date()},
  options_count                               : Number,
  poll_image                                  : String,
  setting_multiple_choice                     : Boolean,
  setting_hide_results_after_voting           : Boolean,
  setting_hide_results                        : Boolean,
  share_title                                 : Boolean,
  share_question                              : Boolean,
  share_answer                                : Boolean,
  share_results                               : Boolean,
  share_platform_facebook                     : Boolean,
  share_platform_whatsapp                     : Boolean,
  share_platform_twitter                      : Boolean,
  share_platform_text                         : Boolean,
  status                                      : String
},
{
  timestamps: true 
});

  var Poll           		    = mongoose.model('Poll',pollSchema);
  module.exports            = Poll;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewPoll  = function(params,callback){
            var new_poll  = new Poll(params);  
            new_poll.save(callback);
    }

 module.exports.getClosedPollsByAdmin  = function(callback){
          Poll.find({end_time: { "$lt": new Date()}})
          .sort('-createdAt')
          .exec(callback);     
    }


     module.exports.getDraftPolls  = function(callback){
          Poll.find({status : 'S'})
          .sort('-createdAt')
          .exec(callback);     
    }


    
    module.exports.publishPoll  = function(id,callback){
          Poll.findByIdAndUpdate(id,{status : 'A', start_time : new Date()},{new : true},callback)
        
    }


   
// /////////////////////////// APP END /////////////////////////


    module.exports.getActivePolls  = function(callback){
          Poll.find({status : 'A',end_time: { "$gte": new Date()}})
          .sort('-createdAt')
          .exec(callback);     
    }

    module.exports.getPollDetail  = function(params,callback){
          Poll.findById(params.poll_id,{},callback)
        
    }

    module.exports.changeStatusToClosed  = function(params,callback){
          Poll.findByIdAndUpdate(params.poll_id,{status : 'C'},callback)
        
    }


   module.exports.getClosedPolls  = function(no_of_posts_shown,callback){
          Poll.find({end_time: { "$lt": new Date()}, start_time: { "$ne": null}})
          .sort('-createdAt')
          .limit(no_of_posts_shown)
          .exec(callback);     
    }
