var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var userSchema = new Schema({
  first_name                : {type: String, default:''},
  last_name                 : {type: String, default:''},
  email                     : {type: String, default:''},
  phone_number              : {type: String, default:''},
  password                  : {type: String, default:''},
  register_type     	      : {type: String, default:''},
  registered_by             : {type: String, default:''},
  social_media_id         	: {type: String, default:''},
  device_type 			        : {type: String, default:''},
  device_id  			          : {type: String, default:''},
  marital_status 				    : {type: String, default:''},
  gender 			              : {type: String, default:''},
  profession                : {type: String, default:''},
  profile_image 		        : {type: String, default:''},
  user_status				        : {type: String, default:''},
  campus				            : {type: String, default:''},
  dob                       : {type: Date, default:null},   
  street	                  : {type: String, default:''},
  city                      : {type: String, default:''},
  state                     : {type: String, default:''},
  country                   : {type: String, default:''},
  postal_code 	            : {type: String, default:''},
  access_token              : {type: String, default:''},
  token                     : {type: String, default:''},
  profile_status            : {type: Boolean, default:false},
  notification_sound        : {type: String, default:''},
  time_zone                 : {type: String, default:''},
  status                    : {type: String, default:''},
},
{
  timestamps: true 
});

var User           		= mongoose.model('User',userSchema);
module.exports        = User;

    module.exports.addNewUser  = function(params,callback){
            var new_user  = new User(params);  
            new_user.save(callback);
    }

    
    module.exports.checkEmailExistSignup  = function(params,callback){
           User.find({email : params.email},{},callback);
    }

    module.exports.checkPhoneExistSignup  = function(params,callback){

          User.find({phone_number : params.phone_number},{},callback);
    }


    module.exports.checkEntrySocial  = function(params,callback){
          User.find({social_media_id : params.social_media_id},{},callback);
    }


    module.exports.updateSocialSignup  = function(id,params,callback){
      console.log("params ",params)
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
            User.findByIdAndUpdate(id, update,{new : true} ,callback);
    }


    module.exports.Login = function(params,callback){
          if(params.registered_by === 'E') {
            console.log("hii Email login")
              User.find({email : params.email}, callback);
          }
          else if(params.registered_by === 'P') {
             console.log("hii Phone number login")
              User.find({phone_number : params.phone_number}, callback);
          }
    }

    module.exports.updateInfo = function(id,params,callback){
          console.log("in model updateInfo of login ",params)
             var update = {
                 // latitude       : params.latitude,
                 // longitude      : params.longitude,
                 access_token   : params.access_token,
                 time_zone      : params.time_zone, 
                 device_id      : params.device_id,
                 device_type    : params.device_type     }
                  function clean(obj) {
                  for (var propName in obj) {
                    if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined) {
                      delete obj[propName];
                    }
                  }
                  console.log(obj);
                  return obj;
                }

            var update = clean(update);
            console.log("update ",update)
             User.findByIdAndUpdate(id, update,{ new: true}, callback);
    }
  

    module.exports.createProfile  = function (id,params,callback){   
     
            function clean(obj) {
                for (var propName in obj) {
                  if (obj[propName] === null || obj[propName] === '' || obj[propName] === undefined || obj[propName] === "undefined") {
                    delete obj[propName];
                  }
                }
                console.log(obj);
                return obj;
              }

          var update = clean(params);
          User.findByIdAndUpdate(id, update,{new: true}, callback);
    }


    module.exports.getProfile = function (params, callback){ 
    console.log("hii getProfile ",params)     
           User.findOne({access_token : params.access_token},callback);
    }

    module.exports.getOtherUserProfile = function (params, callback){ 
        console.log("hii getOtherUserProfile ",params)     
           User.findById(params.user_id,callback);
    }

    module.exports.getUserInfo = function (id, callback){ 
        console.log("hii getOtherUserProfile ",id)     
           User.findById(id,callback);
    }


    module.exports.logoutUser = function (params, callback){       
       User.findByIdAndUpdate(params.user_id, {device_type : "", device_id : "", access_token : ""},callback);

    }


    module.exports.getTodayBirthday = function (user_id, callback){
     var id = mongoose.Types.ObjectId(user_id);
    
           //   User.find({ $where: "this.createdAt >= ISODate('2018-01')" }, callback);
        User.aggregate([{ "$project" : {
                "_id"        :1,
                "first_name" : 1,
                "last_name"  : 1,
                "profile_image"  : 1, 
                "dob"  : 1, 
                "createdAt": 1,
                "todayDayOfYear" : { "$dayOfYear" : new Date() },
                "dayOfYear" :   
                       { "$cond" : [{"$eq": ["$dob", null]},356, {"$dayOfYear" :"$dob"} ]}
                    // {"$dayOfYear" : {$ifNull: ['$dob', new Date('1995-3-12')]}}
                                } },
                { "$project" : { 
                  "first_name" : 1,
                  "last_name"  : 1,
                  "profile_image"  : 1, 
                  "dob"  : 1,
                  "createdAt": 1,
                  "daysTillBirthday" : { "$subtract" : [ 
                      { "$add" : [ "$dayOfYear", { "$cond" : 
                      [{"$lt":["$dayOfYear","$todayDayOfYear"]},365,0 ] } ] },
                       "$todayDayOfYear" ] } 
                                } 
                },
                { "$match" : {  $and: [ {"daysTillBirthday" : { "$eq" : 0 } }]} }], callback)

    }


    module.exports.getUpcomingBirthday = function (user_id, callback){
     var id = mongoose.Types.ObjectId(user_id);
       
           User.aggregate([{ "$project" : {
                          "_id"        :1,
                          "first_name" : 1,
                          "last_name"  : 1,
                          "profile_image"  : 1, 
                          "dob"  : 1,
                          "todayDayOfYear" : { "$dayOfYear" : new Date() },
                          "dayOfYear" :   
                                 { "$cond" : [{"$eq": ["$dob", null]},356, {"$dayOfYear" :"$dob"} ]}
                              // {"$dayOfYear" : {$ifNull: ['$dob', new Date('1995-3-12')]}}
                                          } },
                          { "$project" : { 
                            "first_name" : 1,
                            "last_name"  : 1,
                            "profile_image"  : 1,
                            "dob"  : 1, 
                            "daysTillBirthday" : { "$subtract" : [ 
                                        { "$add" : [ "$dayOfYear", { "$cond" : 
                                        [{"$lt":["$dayOfYear","$todayDayOfYear"]},365,0 ] } ] },
                                         "$todayDayOfYear" ] } 
                                          } 
                          },
                          { "$match" : {  $and: [ {"daysTillBirthday" : { "$lt" : 7 } },{"daysTillBirthday" : { "$ne" : 0 } } ]} }], callback)

        

    }


      module.exports.getAllAlumni = function (id, callback){       
             User.find({ _id: { $ne: id}, user_status : 'A' },'first_name last_name profile_image street city state country')
             .sort('-createdAt')
              .exec(callback);
        }

          module.exports.getAllNewMembers = function (id, callback){ 
              User.aggregate([{ "$project" : {
                "_id"        :1,
                "first_name" : 1,
                "last_name"  : 1,
                "profile_image"  : 1, 
                "country" : 1,
                "state" : 1,
                "city" : 1,
                "status" : 1,
                "profile_status" : 1,
                "todayDayOfYear" : { "$dayOfYear" : new Date() },
                 "dayOfYear" : { "$dayOfYear" : "$createdAt"} 
                  } },
                { "$project" : { 
                  "_id"        :1,
                  "first_name" : 1,
                  "last_name"  : 1,
                  "profile_image"  : 1, 
                  "country" : 1,
                  "state" : 1,
                  "profile_status" : 1,
                  "city" : 1,
                  "status" : 1,
                  "daysTillRegister" : 
                                        { "$subtract" : [ 
                                          "$todayDayOfYear" ,
                                          "$dayOfYear"] 
                                        } 
                                } 
                },
                { "$match" : {  $and: [ {"daysTillRegister" : { "$lt" : 7 } }, {"_id" : { "$ne" : id } },{"status" : { "$eq" : "A"}},{"profile_status" : { "$eq" : true}} ]} }], callback) 
        }


    module.exports.changeUserPassword = function (params, callback){       
       User.findByIdAndUpdate(params.user_id, {password : params.password},callback);

    }
    module.exports.getAllUsers = function (params,callback){ 
               
           User.find({ _id: { $ne: params.user_id},status : 'A'},{},callback);
    }
      module.exports.getAllOtherUsers = function (params,callback){ 
               
           User.find({ _id: { $ne: params.user_id}, _id: { $ne: params.other_user_id},status : 'A', gender : params.gender},{},callback);
    }

       module.exports.searchUsers = function (params,callback){ 
               
          User.find({'first_name' : { $regex : new RegExp(params.user_name, "i")},status : 'A',_id: { $ne: params.user_id}},callback)
    }

//    $and: [ {"daysTillRegister" : { "$lt" : 7 } }, {"_id" : { "$ne" : id } } ]
   //User.find({{$and : [{{$or : [{'first_name' : { $regex : new RegExp(params.user_name, "i")}},{'last_name' : { $regex : new RegExp(params.user_name, "i")}}]}}, {status : 'A'},{_id: { $ne: params.user_id}}]}})
    /////////////////////////// ADMIN PANEL /////////////////////////

    module.exports.getUsers = function (callback){ 
               
           User.find({status : 'A'},{},callback);
    }

      module.exports.getAllAlumniByAdmin = function (callback){       
             User.find({ user_status : 'A', status : 'A' },{}, callback);
        }

        module.exports.getAllNewMembersByAdmin = function (callback){ 
                  //   User.find({user_status : 'N', status: 'A'},{},callback);

              User.aggregate([{ "$project" : {
                "_id"        :1,
                "first_name" : 1,
                "last_name"  : 1,
                "status"    : 1,
                "profession" : 1,
                "gender" : 1,
                "phone_number" : 1,
                "profile_image"  : 1, 
                "profile_status" : 1,
                "todayDayOfYear" : { "$dayOfYear" : new Date() },
                 "dayOfYear" : { "$dayOfYear" : "$createdAt"} 
                  } },
                { "$project" : { 
                  "_id"        :1,
                  "first_name" : 1,
                  "last_name"  : 1,
                  "status"    : 1,
                  "phone_number" : 1,
                  "profession" : 1,
                  "gender" : 1,
                  "profile_image"  : 1,
                  "profile_status" : 1, 
                  "daysTillRegister" : 
                                        { "$subtract" : [ 
                                          "$todayDayOfYear" ,
                                          "$dayOfYear"] 
                                        } 
                                } 
                },
                { "$match" : {  $and: [ {"daysTillRegister" : { "$lt" : 7 } },{"status" : { "$eq" : "A"}},{"profile_status" : { "$eq" : true}}] } }], callback) 
        }

     module.exports.getAllNormalMembersByAdmin = function (callback){              
           User.find({user_status : 'N', status: 'A'},{},callback);
    }

       module.exports.changeStatusToAlumni  = function(params,callback){
          User.findByIdAndUpdate(params.user_id, {user_status : 'A'},{new:true} ,callback);
        }
 
   module.exports.getPendingUsers = function (callback){              
           User.find({status : 'P'},{},callback);
    }

   module.exports.makeUserActive  = function(params,callback){
          User.findByIdAndUpdate(params.user_id, {status : params.status},{new:true} ,callback);
        }

   module.exports.removeMyAccount  = function(params,callback){
          User.findByIdAndUpdate(params.user_id, {status : 'R', access_token : "", device_id : "",device_type : ""},{new:true} ,callback);
        }

        
   module.exports.getRemovedUsers = function (callback){              
     User.find({status : 'R'},{},callback);
    }

    
     module.exports.updateSoundStatus  = function(params,callback){
          User.findByIdAndUpdate(params.user_id, {notification_sound : params.status},{new:true} ,callback);
        }

    module.exports.setToken = function (params, callback){  
        User.findOneAndUpdate({ email: params.email }, { $set: { token: params.token }}, callback);
     }

  module.exports.getPassword = function (params, callback){        
         User.find({token: params.token},{},callback);
    }

    module.exports.resetPassword = function (params, callback){
    console.log("in model",params)        
        User.update({ token: params.token }, { password: params.hashpassword, token : "" }, callback);

    }

