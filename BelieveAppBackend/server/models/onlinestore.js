var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var OnlineStoreSchema = new Schema({
      name                     : String,
      online_store_url         : String,
      status                   : String    

},
{
  timestamps: true 
});

  var OnlineStore        = mongoose.model('OnlineStore',OnlineStoreSchema);
  module.exports         = OnlineStore;


/////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.addNewOnlineStore  = function(params,callback){
            var new_online_store  = new OnlineStore(params);  
            new_online_store.save(callback);
    }

  module.exports.getDraftOnlineStores  = function(callback){
          OnlineStore.find({status : 'S'})
          .sort('-createdAt')
          .exec(callback);   
    }

    module.exports.getOnlineStores  = function(callback){
          OnlineStore.find({status : 'A'})
          .sort('-createdAt')
          .exec(callback);   
    }
    
     module.exports.editOnlineStore  = function(params,callback){
        function clean(obj) {
            for (var propName in obj) {
              if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
                delete obj[propName];
              }
            }
            return obj;
          }

      var update = clean(params);
      OnlineStore.findByIdAndUpdate(params.online_store_id, update,{new:true} ,callback);
    }

    module.exports.deleteOnlineStore  = function(id,callback){
          OnlineStore.findByIdAndUpdate(id, {status : 'D'},{new:true} ,callback);
     }
   
    module.exports.publishOnlineStore  = function(id,callback){
          OnlineStore.findByIdAndUpdate(id, {status : 'A'},{new:true} ,callback);
     }




/////////////////////////// APP END /////////////////////////

  module.exports.getStoreUrls  = function(callback){
          OnlineStore.find({status : 'A'})
          .sort('-createdAt')
          .exec(callback);   
    }
    