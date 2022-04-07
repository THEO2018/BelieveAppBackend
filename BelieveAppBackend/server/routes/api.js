const express = require('express');

const app = express();
const router = express.Router();
const path = require('path');
const download = require('image-downloader')
var passwordhash = require('password-hash');
var multer = require('multer');
var ffmpeg = require('fluent-ffmpeg');
var hat = require('hat');
var mongoose = require('mongoose');
var geodist = require('geodist');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var FCM = require('fcm-node');

var serverKey = 'AIzaSyDZJdrncaRUm32mkpg7izBK7zQlrRXgWRo';
var fcm = new FCM(serverKey);




var User = require('../models/user');
var Group = require('../models/group');
var SmallGroup = require('../models/smallgroup');
var GroupPost = require('../models/grouppost');
var CommentGroupPost = require('../models/commentgrouppost');
var LikeGroupPost = require('../models/likegrouppost');
var GroupPhoto = require('../models/groupphoto');
var WallPost = require('../models/wallpost');
var CommentWallPost = require('../models/commentwallpost');
var LikeWallPost = require('../models/likewallpost');
var Betrothed = require('../models/betrothed');
var WeddingList = require('../models/weddinglist');
var UpcomingMarriage = require('../models/upcomingwedding');
var BirthdayList = require('../models/birthdaylist');
var Event = require('../models/event');
var MusicAlbum = require('../models/musicalbum');
var SongToAlbum = require('../models/songtoalbum');
var MediaGallary = require('../models/mediagallary');
var MediaToGallary = require('../models/mediatogallary');
var Appointment = require('../models/appointment');
var Blog = require('../models/blog');
var ClassifiedCategory = require('../models/classifiedcategory');
var Classified = require('../models/classified');
var Recommendation = require('../models/recommendation');
var Poll = require('../models/poll');
var PollOption = require('../models/polloption');
var CommentPoll = require('../models/commentpoll');
var VoteToPoll = require('../models/votetopoll');
var Contact = require('../models/contact');
var ServiceHour = require('../models/servicehour');
var AboutPage = require('../models/aboutpage');
var Note = require('../models/note');
var BlogCategory = require('../models/blogcategory');
var Blog = require('../models/blog');
var ValidationConfig = require('../models/validationconfig');
var PollSetting = require('../models/pollsetting');
var Prayer = require('../models/prayer');
var PrayToPrayer = require('../models/praytoprayer');
var CommentPrayer = require('../models/commentprayer');
var PrayerCategory = require('../models/prayercategory');
var EventCategory = require('../models/eventcategory');
var GroupRequest = require('../models/grouprequest');
var GivingUrl = require('../models/givingurl');
var NewsUrl = require('../models/newsurl');
var OnlineStore = require('../models/onlinestore');
var NotificationSetting = require('../models/notificationsetting');
var Notification = require('../models/notification');
var SocialShare = require('../models/socialshare');
var MediaCategory = require('../models/mediacategory');
var MusicArtist = require('../models/musicartist');
var AppVersion = require('../models/appversion');
const Bible = require('../models/bible');


const suc = 200;
const er = 400;
const ses = 401;
const up = 402;


router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../../index.html'));
});


router.get('/forgot', (req, res) => {
	res.sendFile(path.join(__dirname, '../../forgotpassword.html'));
});



var storage_profile = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/images/profile/')
	},
	filename: function (req, file, cb) {
		var extArray = file.originalname.split(".");
		var extension = extArray[extArray.length - 1];
		pro_img = Date.now() + '.' + extension;
		cb(null, pro_img)
	}
})

var storage_group_post = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/images/group_post/')
	},
	filename: function (req, file, cb) {
		var extArray = file.originalname.split(".");
		var extension = extArray[extArray.length - 1];
		pro_img = Date.now() + '.' + extension;
		cb(null, pro_img)
	}
})

var storage_group_photo = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/images/group_photos/')
	},
	filename: function (req, file, cb) {
		var extArray = file.originalname.split(".");
		var extension = extArray[extArray.length - 1];
		pro_img = Date.now() + '.' + extension;
		cb(null, pro_img)
	}
})


var storage_wall_post = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/images/wall_post/')
	},
	filename: function (req, file, cb) {
		var extArray = file.originalname.split(".");
		var extension = extArray[extArray.length - 1];
		pro_img = Date.now() + '.' + extension;
		cb(null, pro_img)
	}
})

var storage_wall_post_comment = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/images/wall_post_comment/')
	},
	filename: function (req, file, cb) {
		var extArray = file.originalname.split(".");
		var extension = extArray[extArray.length - 1];
		pro_img = Date.now() + '.' + extension;
		cb(null, pro_img)
	}
})


var storage_group_post_comment = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/images/group_post_comment/')
	},
	filename: function (req, file, cb) {
		var extArray = file.originalname.split(".");
		var extension = extArray[extArray.length - 1];
		pro_img = Date.now() + '.' + extension;
		cb(null, pro_img)
	}
})



var upload_profile = multer({ storage: storage_profile }).single('profile_image')
var upload_group_post = multer({ storage: storage_group_post }).single('group_post_media')
var upload_group_photo = multer({ storage: storage_group_photo }).single('group_photo')
var upload_wall_post = multer({ storage: storage_wall_post }).single('wall_post_media')
var upload_wall_post_comment = multer({ storage: storage_wall_post_comment }).single('wall_post_comment_img')
var upload_group_post_comment = multer({ storage: storage_group_post_comment }).single('group_post_comment_img')




var profile_image_url = '/images/profile/';
var group_image_url = '/images/group/';
var small_group_image_url = '/images/small_group/';
var group_post_url = '/images/group_post/';
var group_photos_url = '/images/group_photos/';
var wall_post_url = '/images/wall_post/';
var wedding_cover_image_url = '/images/wedding_cover/';
var marriage_cover_image_url = '/images/marriage_cover/';
var album_image_url = '/images/music_album/';
var gallary_media_url = '/images/media_gallary/';
var bday_cover_image_url = '/images/birthday_cover/';
var event_cover_url = '/images/event_cover/';
var blog_image_url = '/images/blog_image/';
var classified_image_url = '/images/classified_image/';
var poll_image_url = '/images/poll_image/';
var about_image_url = '/images/about_cover/';
var wallpost_comment_url = '/images/wall_post_comment/';
var grouppost_comment_url = '/images/group_post_comment/';
var news_image_url = '/images/news/';
var artist_image_url = '/images/music_artist/';


var bible_url = '/bible/';

var album_song_url = '/audio/album_song/';


function getTimeAgo(createdAt, callback) {
	var postedDay = createdAt;
	var today = new Date();
	var diffMs = (today - postedDay);
	var diffMonths = Math.floor(diffMs / 2592000000);
	var diffDays = Math.floor(diffMs / 86400000);
	var diffHrs = Math.floor(diffMs / 3600000);
	var diffMins = Math.round(diffMs / 60000);
	//console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes until Christmas 2019 =)");
	var time_ago;
	if (diffMonths == 0) {
		if (diffDays == 0) {
			if (diffHrs == 0) {
				if (diffMins == 0) {
					time_ago = 'just now';
					callback(time_ago)
				}
				else {
					if (diffMins == 1)
						time_ago = diffMins + ' min ago';
					else
						time_ago = diffMins + ' mins ago';
					callback(time_ago)
				}
			}
			else {
				if (diffHrs == 1)
					time_ago = diffHrs + ' hour ago';
				else
					time_ago = diffHrs + ' hours ago';
				callback(time_ago)
			}
		}
		else {
			if (diffDays == 1)
				time_ago = diffDays + ' day ago';
			else
				time_ago = diffDays + ' days ago';
			callback(time_ago)
		}
	}
	else {
		if (diffMonths == 1)
			time_ago = diffMonths + ' month ago';
		else
			time_ago = diffMonths + ' months ago';
		callback(time_ago)
	}
}


function send_notification(authUser, notification_type, post_type, group_id, group_post_id, group_post_status) {
	Group.getOtherGroupMember(group_id, function (err, members) {
		//	console.log("hii members ",members)
		var group_users = members.users;
		for (var i in group_users) {
			if (String(group_users[i]._id) != String(authUser._id)) {
				//   console.log("hiiiiiiii id check ",group_users[i]._id , authUser._id)
				var notiParams = {
					user_id: group_users[i]._id,
					author_id: authUser._id,
					notification_type: notification_type,
					post_type: post_type,
					group_id: group_id,
					post_id: group_post_id,
					message: 'posted a ' + post_type,
					status: 'A'
				}
				Notification.addNewNotification(notiParams, function (err, notification) {
					//	console.log("notification added ",notification)
				})
				send_notification_to_user(authUser, group_users[i], notification_type, post_type, group_id, group_post_id, group_post_status, members.group_name)
			}
		}
	})
}


function send_notification_single(authUser, notification_type, group_post_id) {

	GroupPost.getPostInfo(group_post_id, function (err, groupPost) {
		NotificationSetting.getNotificationStatus(groupPost.group_id, groupPost.user_id._id, function (err, setting) {
			if (setting == null || setting.status != 'OFF') {
				if (String(authUser._id) != String(groupPost.user_id._id)) {
					// console.log("hiiiiii id check single ",authUser._id, groupPost.user_id._id)
					var messageBody = '';
					if (notification_type == 'liked') {
						messageBody = 'liked your post'
					}
					else if (notification_type == 'commented') {
						messageBody = 'commented on your post'
					}
					var notiParams = {
						user_id: groupPost.user_id._id,
						author_id: authUser._id,
						notification_type: notification_type,
						post_type: '',
						group_id: groupPost.group_id,
						post_id: group_post_id,
						message: messageBody,
						status: 'A'
					}
					Notification.addNewNotification(notiParams, function (err, notification) {
						//    console.log("notification added ",notification)
					})
					send_notification_to_user(authUser, groupPost.user_id, notification_type, '', '', group_post_id, groupPost.group_post_status, '')

				}
			}
		})

	})   ///// getPostInfo
}


function send_notification_to_user(authUser, group_user, notification_type, post_type, group_id, post_id, post_status, group_name) {
	NotificationSetting.getNotificationStatus(group_id, group_user._id, function (err, setting) {
		if (setting == null || setting.status != 'OFF') {
			var body = '';
			if (notification_type == 'posted') {
				body = authUser.first_name + ' ' + authUser.last_name + ' posted a ' + post_type + ' in ' + group_name;
			}
			else if (notification_type == 'commented') {
				body = authUser.first_name + ' ' + authUser.last_name + ' commented on your post ' + post_status;
			}
			else if (notification_type == 'liked') {
				body = authUser.first_name + ' ' + authUser.last_name + ' liked your post ' + post_status;
			}

			var message = {
				to: group_user.device_id,
				notification: {
					title: 'Believe',
					body: body
				},

				data: {
					title: 'Believe',
					body: body,
					id: post_id,
					notification_type: notification_type,
					post_type: post_type,
					user_id: authUser._id,
					first_name: authUser.first_name,
					last_name: authUser.last_name,
					group_id: group_id,
					notification_sound: group_user.notification_sound
				}
			};
			//    console.log("message is ", message)
			fcm.send(message, function (err, response) {
				if (err) {
					console.log("Something has gone wrong!---------", err);
				} else {
					console.log("Successfully sent with response: ", response);
				}
			});
		}
	})
}




function checkAppVersion(appVersion, versionCallback) {
	AppVersion.getAppversion(function (err, appversion) {
		var updateRequired;
		console.log("hiiii app vserion ", appVersion, appversion.version)
		if (appVersion == appversion.version) {
			console.log("hiiiiiii matched ")
			updateRequired = false;
			versionCallback(updateRequired)
		}
		else {
			console.log("hiiiiiii not matched ")
			updateRequired = true;
			versionCallback(updateRequired)
		}
	})
}





/*---------------------------------------
				(1) Sign Up 
----------------------------------------*/
router.post('/sign_up', function (req, res) {
	console.log("hiii sign_up")
	var params = req.body;
	var result = [];
	var baseUrl = req.protocol + '://' + req.get('host');
	console.log(req.body)
	if (params.access_token === '9a218c9b5dfdae8b5abc11a41905ed48') {

		ValidationConfig.getValidationConfig(function (err, status) {
			console.log(status)
			if (status.validation_status == true) {
				//params.status = 'P';
				params.status = 'A';
			}
			else {
				params.status = 'A';
			}

			if (params.register_type == 'O') {
				console.log("SignUp hit with other register type (email or phone)")
				if (params.registered_by == 'E') {
					console.log("SignUp hit with other register type with email ")
					User.checkEmailExistSignup(params, function (err, user) {
						if (err) {
							console.log("error---------", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {

							if (user.length === 0) {
								console.log("SignUp hit with new email", params)
								var password = req.body.password;
								var hashpassword = passwordhash.generate(password);
								params.password = hashpassword;
								params.notification_sound = 'ON';
								params.profile_image = "user.png";
								params.profile_status = false;
								//params.status 				= 'A';
								params.access_token = hat();
								console.log("params ", params)
								User.addNewUser(params, function (err, user) {
									if (err) {
										console.log(" error-- ", err);
										res.statusCode = er;
										res.json({
											status: 0,
											message: "Something went wrong",
											data: err
										})
									}
									else {


										console.log("data saves succesfullly ", user);
										res.statusCode = suc;
										res.json({
											status: 1,
											message: "Registered successfully!!!",
											data: user
										})


									}
								})
							}
							else {
								console.log("SignUp hit with existing email")
								res.statusCode = er;
								res.json({
									status: 0,
									message: "Email Already Exists",

								})
							}
						}
					})
				}

				else if (params.registered_by == 'P') {
					console.log("SignUp hit with other register type with phone ")
					User.checkPhoneExistSignup(params, function (err, user) {
						if (err) {
							console.log("error---------", err);
						}
						else {
							console.log("user ", user)
							if (user.length === 0) {
								console.log("SignUp hit with new phone", params)
								var password = req.body.password;
								var hashpassword = passwordhash.generate(password);
								params.password = hashpassword;
								params.profile_status = false;
								params.status = 'A';
								params.notification_sound = 'ON';
								params.access_token = hat();
								console.log("params ", params)
								User.addNewUser(params, function (err, user) {
									if (err) {
										console.log(" error-- ", err);
										res.statusCode = er;
										res.json({
											status: 0,
											message: "Something went wrong!",
											data: err
										})
									}
									else {

										console.log("data saves succesfullly ", user);
										res.statusCode = suc;
										res.json({
											status: 1,
											message: "Registered successfully!!!",
											data: user
										})

									}
								})
							}
							else {
								console.log("SignUp hit with existing phone", params)
								res.statusCode = er;
								res.json({
									status: 0,
									message: "Phone Number Already Exists",

								})
							}
						}
					})
				}
			}

			else {

				console.log("SignUp hit with register type facebook etc", params)
				if (params.profile_image) {

					console.log("hiii profile_image", params.profile_image)

					var social_image = Date.now() + '.jpg';
					console.log("social_image ", social_image)
					const options = {
						url: params.profile_image,
						dest: 'public/images/profile/' + social_image                  // Save to /path/to/dest/image.jpg
					}

					console.log("options ", options)
					download.image(options)
						.then(({ filename, image }) => {
							params.profile_image = social_image;
							console.log("params in ", params)
							socialLoginUpdate(params)

							console.log('File saved to', filename)
						}).catch((err) => {
							params.profile_image = "user.png";
							socialLoginUpdate(params);
							console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
							throw err
						})


				}
				else {
					params.profile_image = "user.png";
					socialLoginUpdate(params);
				}


				console.log("params after ", params)


			}  //////if / else for register type
		})/// validation config


	}
	else {
		res.statusCode = er;
		res.json({
			status: 0,
			message: "Not a Valid User",

		})
	}

	function socialLoginUpdate(params) {

		User.checkEntrySocial(params, function (err, user) {
			console.log("params after 2 ", params)
			if (err) {
				console.log("error---------", err);
				res.statusCode = er;
				res.json({
					status: 0,
					message: "Something went wrong!",
					data: err
				})
			}
			else {
				if (user.length === 0) {
					console.log("SignUp hit with register type facebook etc with new social media id")
					params.status = 'A';
					params.access_token = hat();
					params.notification_sound = 'ON';
					params.profile_status = false;
					User.addNewUser(params, function (err, user) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {
							console.log("data successfully uploaded user", user);

							// 	result.push({ _id 		: user._id,
							// user_type : user.user_type,
							// hairType  : user.hairType,
							// status 	: user.status
							// 		})
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Registered successfully!!!",
								data: user
							})
						}
					})
				}
				else {
					console.log("SignUp hit with register type facebook etc with existing social media id")
					console.log("user to find id is ", user)
					var id = user[0]._id;
					user._id = '';
					params.status = "";
					params.access_token = hat();;
					if (user[0].status == 'R') {
						res.statusCode = er;
						res.json({
							status: 0,
							message: "You have removed your account. Please contact with admin for more information."
						})
					}
					else {
						User.updateSocialSignup(id, params, function (err, updatedUser) {
							if (err) {
								console.log(" error-- ", err);
								res.statusCode = er;
								res.json({
									status: 0,
									message: "Something went wrong!",
									data: err
								})
							}
							else {
								console.log("data successfully uploaded updatedUser", updatedUser);
								if (updatedUser.profile_image) {
									updatedUser.profile_image = baseUrl + profile_image_url + updatedUser.profile_image;
								}
								res.statusCode = suc;
								res.json({
									status: 1,
									message: "Registered successfully!!!",
									data: updatedUser
								})
							}
						})
					}

				}

			}

		})
	}

});




/*---------------------------------------
			 (2)  Create Profile 
----------------------------------------*/
router.post('/create_profile', function (req, res) {
	console.log("hiii create_profile")
	upload_profile(req, res, function (err) {

		if (err) {
			console.log(err);
			res.statusCode = er;
			res.json({
				status: 0,
				message: "Something went wrong!",
				data: err
			})
		}

		else {
			console.log("files in create_profile is ", req.file)
			console.log("dataaaaaaa in create_profile is ", req.body)

			var params = req.body;
			params.profile_status = true;
			User.getProfile(params, function (err, authUser) {
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					if (req.file) {
						params.profile_image = req.file.filename;
					}
					else {
						params.profile_image = "user.png";
					}
					pro_img = "";
					var id = authUser._id;
					params.access_token = "";
					params.dob = new Date(params.dob);

					User.createProfile(id, params, function (err, user) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "successfully uploaded",
								data: user
							})
						}
					})
				}
			})

		}
	})

});




/*---------------------------------------------------
						   (3) Login 
   -------------------------------------------------------*/
router.post('/login', function (req, res) {
	console.log('hiii login', req.body);
	var params = req.body;
	var password = req.body.password;
	var update_params;
	var result = [];
	var baseUrl = req.protocol + '://' + req.get('host');
	if (params.access_token === '9a218c9b5dfdae8b5abc11a41905ed48') {
		User.Login(params, function (err, user) {
			if (err) {
				res.statusCode = er;
				res.json({
					status: 0,
					message: "Login failed.",
					data: err
				})
			}
			console.log("user ", user)
			if (user.length === 0) {
				console.log("length 0")
				res.statusCode = er;
				res.json({
					status: 0,
					message: "User not regisrered."
				})
			}
			else {
				console.log("user exists and password is ", password, user[0].password, user[0].status)
				var check = passwordhash.verify(password, user[0].password);
				console.log(check)
				if (check == true) {
					console.log("check truee ")
					if (user[0].status == 'A') {
						console.log("status A ")
						params.access_token = hat();
						User.updateInfo(user[0]._id, params, function (err, updatedUser) {
							if (err) {
								console.log(err)
							}
							else {
								console.log("data updated ", updatedUser)


								if (updatedUser.profile_image) {
									updatedUser.profile_image = baseUrl + profile_image_url + updatedUser.profile_image;
								}
								res.statusCode = suc;
								res.json({
									status: 1,
									message: "login successfully",
									data: updatedUser
								})
							}
						})
					}
					else if (user[0].status == 'P') {
						console.log("status P ")
						res.statusCode = er;
						res.json({
							status: 0,
							message: "Your registration is pending. You can login after admin approval"
						})
					}
					else if (user[0].status == 'R') {
						console.log("status R ")
						res.statusCode = er;
						res.json({
							status: 0,
							message: "You have removed your account. Please contact with admin for more information."
						})
					}
					else if (user[0].status == 'C') {
						console.log("status C ")
						res.statusCode = er;
						res.json({
							status: 0,
							message: "Your account has been rejected by Admin. Please contact with admin for more information."
						})
					}
					else {
						console.log("No status ")
						res.statusCode = er;
						res.json({
							status: 0,
							message: "Login failed."
						})
					}
				}

				else {
					console.log("check falseee ")
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Incorrect Password"
					})
				}
			}
		})
	}
	else {
		res.statusCode = er;
		res.json({
			status: 0,
			message: "Login failed."
		})
	}
});




/*---------------------------------------------------------
				(4) Get Groups
----------------------------------------------------------*/
router.post('/get_groups', function (req, res) {
	console.log("hiii get_groups")

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			console.log("params ", params)
			User.getProfile(params, function (err, authUser) {
				console.log("err, authUser", err, authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					Group.getAllGroups(params, function (err, groups) {
						console.log("err, groups", err, groups)
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("groups found ", groups)
							var result_groups = [];
							for (var i in groups) {
								result_groups[i] = groups[i].toObject();
								result_groups[i].total_members = result_groups[i].users.length;
								result_groups[i].group_image = baseUrl + group_image_url + result_groups[i].group_image;
								for (var j in result_groups[i].admin_users) {
									result_groups[i].admin_users[j].profile_image = baseUrl + profile_image_url + result_groups[i].admin_users[j].profile_image;
								}
								for (var j in result_groups[i].users) {
									result_groups[i].users[j].profile_image = baseUrl + profile_image_url + result_groups[i].users[j].profile_image;
								}


							}
							result_groups.sort(function (a, b) {
								return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
							});
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Groups found successfully",
								data: result_groups
							})



						}


					})
				}
			})
		}
	}

});



/*---------------------------------------------------------
				(5) Get Detail of particular Group
----------------------------------------------------------*/
router.post('/detail_group_with_about', function (req, res) {
	console.log("hiii detail_group_with_about", req.body)

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');


	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {

					Group.getGroupDetail(params, function (err, groupDetail) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {

							console.log("group found ", groupDetail)
							var result_group;

							result_group = groupDetail.toObject();
							result_group.total_members = result_group.users.length;
							result_group.group_image = baseUrl + group_image_url + result_group.group_image;

							if (result_group.privacy == 'O') {
								//  console.log("hiii O result_group.privacy ",result_group.privacy)
								result_group.privacy = 'Public'
							}
							else if (result_group.privacy == 'C') {
								//  console.log("hiii C result_group.privacy ",result_group.privacy)
								result_group.privacy = 'Private'
							}
							result_group.join_status = "false";

							for (var i in result_group.users) {
								result_group.users[i].profile_image = baseUrl + profile_image_url + result_group.users[i].profile_image;
								// var authId = String(authUser._id);
								// var groupUserId = result_group.users[i]._id;
								if (String(authUser._id) == result_group.users[i]._id) {
									console.log("matchesddsssssssssssssssssssssssss")
									result_group.join_status = "true";
								}

							}
							for (var j in result_group.requests) {
								if (String(authUser._id) == result_group.requests[j].user_id && result_group.requests[j].request_status == 'P') {
									result_group.join_status = "Pending";
								}
								if (String(authUser._id) == result_group.requests[j].user_id && result_group.requests[j].request_status == 'N') {
									result_group.join_status = "false";
								}
							}



							res.statusCode = suc;

							res.json({
								status: 1,
								message: "Group found successfully",
								data: result_group
							})

						}
					})
				}
			})
		}
	}

});




/*----------------------------------------------------
					 (6) Join Group
  ----------------------------------------------------*/
router.post('/join_group', function (req, res) {
	console.log("hiii join_group")
	var params = req.body;
	params.status = 'P';
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = String(authUser._id);
			Group.addJoinGroupRequest(params, function (err, request) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {
					console.log("request added ", request);
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "User Request added Successfully",
						data: request
					})
				}
			})
		}
	})
});



/*----------------------------------------------------
						(6) Add a Group Post
 ----------------------------------------------------*/
router.post('/add_group_post', function (req, res) {
	console.log("hiii add_group_post")


	upload_group_post(req, res, function (err) {
		if (err) {
			console.log(err);
		}

		else {
			console.log("file in group post is ", req.file)
			var params = req.body;
			var post_type = '';
			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {

					if (req.file) {
						params.group_post_media = req.file.filename;
						var media = req.file.filename;
						if (params.group_post_media_type == 'V') {
							var thumbnail = Date.now() + '.jpg';
							post_type = 'video';
							ffmpeg('public/images/group_post/' + media).screenshots({
								count: 1,
								folder: 'public/images/group_post/thumbnails/',
								filename: thumbnail,
								size: '320x240'
							}).on('end', function (err, data) {
								if (err) {
									console.log("erorrrrrrrrrrrrrrrrr ", err)
								}
								console.log("dataaaa savesssssssssssssssss ", data)

							})
							params.thumbnail = thumbnail;
						}
						else if (params.group_post_media_type == 'P') {
							params.thumbnail = "";
							post_type = 'picture';
						}


					}
					else {
						params.group_post_media = "";
						params.thumbnail = "";
						params.group_post_media_type = 'N';
						post_type = 'status';
					}
					params.user_id = String(authUser._id);
					console.log("params after all ", params)
					GroupPost.addNewGroupPost(params, function (err, groupPost) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = ses;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {
							console.log("group post added ", groupPost)
							notification_type = 'posted';
							send_notification(authUser, notification_type, post_type, params.group_id, groupPost._id, groupPost.group_post_status)
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Photo added successfully",
								data: groupPost
							})
						}
					})
				}
			})
		}
	})


});


/*----------------------------------------------------
					 (7) Add Comment to Group Post
  ----------------------------------------------------*/
router.post('/add_comment_group_post', function (req, res) {
	console.log("hiii add_comment_group_post")
	upload_group_post_comment(req, res, function (err) {
		if (err) {
			console.log(err);
		}

		else {
			console.log("data in add_comment_group_post ", req.body)
			console.log("file in add_comment_group_post is ", req.file)
			var params = req.body;
			params.status = 'A';
			if (req.file) {
				params.group_post_comment_img = req.file.filename;
				params.media_status = true;
				params.comment_msg = "";
			}
			else {
				params.group_post_comment_img = '';
				params.media_status = false;
			}

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {

					if (params.type == 'group') {

						params.user_id = String(authUser._id);
						CommentGroupPost.addCommentGroupPost(params, function (err, comment) {
							if (err) {
								console.log(" error-- ", err);
								res.statusCode = er;
								res.json({
									status: 0,
									message: "Something went wrong!",
									data: err
								})
							}
							else {
								console.log("Comment added ", comment);
								var notification_type = 'commented';
								send_notification_single(authUser, notification_type, params.group_post_id)
								res.statusCode = suc;
								res.json({
									status: 1,
									message: "Comment Added"
								})
							}
						})
					}///// end if

					else if (params.type == 'wall') {

						params.user_id = String(authUser._id);
						CommentWallPost.addCommentWallPost(params, function (err, comment) {
							if (err) {
								console.log(" error-- ", err);
								res.statusCode = er;
								res.json({
									status: 0,
									message: "Something went wrong!",
									data: err
								})
							}
							else {
								console.log("Comment added ", comment);
								res.statusCode = suc;
								res.json({
									status: 1,
									message: "Comment Added"
								})
							}
						})
					}



				}  //////// else auth 
			}) //// end auth

		}
	})
});



/*----------------------------------------------------
					 (8) Add Like to Group Post
  ----------------------------------------------------*/
router.post('/add_like_group_post', function (req, res) {

	console.log("hiii add_like_group_post ", req.body)
	var params = req.body;
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {

			if (params.type == 'group') {

				params.user_id = String(authUser._id);
				LikeGroupPost.checkLikeGroupPost(params, function (err, check) {
					if (err) {
						console.log(" error-- ", err);
					}
					else {
						console.log("data find succesfullly ");
						if (check.length === 0) {
							LikeGroupPost.addLikeGroupPost(params, function (err, likeGroupPost) {
								if (err) {
									console.log(" error-- ", err);
									res.statusCode = er;
									res.json({
										status: 0,
										message: "Something went wrong!",
										data: err
									})
								}
								else {
									console.log("data find succesfullly ", likeGroupPost);
									var notification_type = 'liked';
									send_notification_single(authUser, notification_type, params.group_post_id)
									res.statusCode = suc;
									res.json({
										status: 1,
										message: "Post Liked"
									})
								}
							})
						}

						else {

							LikeGroupPost.changeLikeStatus(check[0]._id, params.like_status, function (err, likeGroupPost) {
								if (err) {
									console.log(" error-- ", err);
									res.statusCode = er;
									res.json({
										status: 0,
										message: "Something went wrong!",
										data: err
									})
								}
								else {
									console.log("data updated succesfullly ");
									res.statusCode = suc;
									var msg;
									if (params.like_status == 'L') {
										msg = "Post Liked"
									}
									else {
										msg = "Post Disliked"
									}
									res.json({
										status: 1,
										message: msg
									})
								}
							})
						}
					}
				})
			} ///// END IF

			else if (params.type == 'wall') {
				console.log("wallll like")
				params.user_id = String(authUser._id);
				LikeWallPost.checkLikeWallPost(params, function (err, check) {
					if (err) {
						console.log(" error-- ", err);
						res.statusCode = er;
						res.json({
							status: 0,
							message: "Something went wrong!",
							data: err
						})
					}
					else {
						console.log("data find succesfullly ");
						if (check.length === 0) {
							LikeWallPost.addLikeWallPost(params, function (err, likeGroupPost) {
								if (err) {
									console.log(" error-- ", err);
								}
								else {
									console.log("data find succesfullly ", likeGroupPost);
									res.statusCode = suc;
									res.json({
										status: 1,
										message: "Post Liked"
									})
								}
							})
						}

						else {
							console.log("check found ", check[0])

							LikeWallPost.changeLikeStatus(check[0]._id, params.like_status, function (err, likeGroupPost) {
								if (err) {
									console.log(" error-- ", err);
									res.statusCode = er;
									res.json({
										status: 0,
										message: "Something went wrong!",
										data: err
									})
								}
								else {
									console.log("data updated succesfullly ");
									res.statusCode = suc;
									if (params.like_status == 'L') {
										msg = "Post Liked"
									}
									else {
										msg = "Post Disliked"
									}
									res.json({
										status: 1,
										message: msg
									})
								}
							})
						}
					}
				})

			}





		}
	})

});



/*---------------------------------------------------------
				(9) Detail of Group Discussion
----------------------------------------------------------*/
router.post('/detail_group_discussion', function (req, res) {
	console.log("hiii detail_group_discussion", req.body)

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = String(authUser._id);
					GroupPost.getAllGroupPosts(params, function (err, groupPosts) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {
							console.log("groupPosts ", groupPosts)
							if (groupPosts.length == 0) {
								res.statusCode = suc;
								res.json({
									status: 1,
									message: "Discussion get",
									data: {
										discussion: [], userInfo: {
											user_id: authUser._id,
											first_name: authUser.first_name,
											last_name: authUser.last_name,
											profile_image: baseUrl + profile_image_url + authUser.profile_image
										}
									}
								})
							}
							var result = [];
							var records = [];
							var checkArraylength = [];

							for (var i in groupPosts) {

								records[i] = groupPosts[i].toObject();
								var today = new Date();



								getComments(records[i]._id, i, callback)
								function callback(i, length, totalLikes, lastComment, comment_time_ago, likeStatus) {
									var thumbnail;
									var media;
									console.log("hii callback ", i, length, lastComment);
									if (lastComment) {
										lastComment.user_id.profile_image = baseUrl + profile_image_url + lastComment.user_id.profile_image;
										if (lastComment.media_status == true) {
											lastComment.group_post_comment_img = baseUrl + grouppost_comment_url + lastComment.group_post_comment_img;
										}
									}
									else {
										lastComment = {
											"comment_msg": "",
											"_id": "",
											"group_post_comment_img": "",
											"media_status": "",
											"user_id": {
												"_id": "",
												"first_name": "",
												"last_name": "",
												"profile_image": ""
											}
										}
									}
									if (records[i].group_post_media_type == 'V') {
										thumbnail = baseUrl + group_post_url + 'thumbnails/' + records[i].thumbnail;
									}
									else {
										thumbnail = "";
									}
									if (records[i].group_post_media) {
										media = baseUrl + group_post_url + records[i].group_post_media;
									}
									else {
										media = "";
									}
									getTimeAgo(records[i].createdAt, callback)
									function callback(time_ago) {

										result.push({
											_id: records[i]._id,
											user_id: { _id: records[i].user_id._id, first_name: records[i].user_id.first_name, last_name: records[i].user_id.last_name, profile_image: baseUrl + profile_image_url + records[i].user_id.profile_image },
											// created_date 				: created_date,
											// created_time 				: created_time,
											group_post_media: media,
											group_post_status: records[i].group_post_status,
											group_post_media_type: records[i].group_post_media_type,
											totalComments: length,
											lastComment: lastComment,
											comment_time_ago: comment_time_ago,
											totalLikes: totalLikes,
											likeStatus: likeStatus,
											thumbnail: thumbnail,
											time_ago: time_ago,
											createdAt: records[i].createdAt
										})
										if (result.length === groupPosts.length) {
											result.sort(function (a, b) {
												return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
											});

											// result.sort(function(a,b){
											// 	var c = new Date(a.date);
											// 	var d = new Date(b.date);
											// 	return c-d;
											// 	});
											console.log("result is ", result)

											var sendData = {
												discussion: result,
												userInfo: {
													user_id: authUser._id,
													first_name: authUser.first_name,
													last_name: authUser.last_name,
													profile_image: baseUrl + profile_image_url + authUser.profile_image
												}
											}
											res.statusCode = suc;
											res.json({
												status: 1,
												message: "Discussion get",
												data: sendData
											})
										}
									}
								}

							}

						}

						function getComments(id, i, callback) {
							var comment_time_ago;
							CommentGroupPost.getCommentsGroupPost(id, function (err, totalComments) {
								LikeGroupPost.getLikesGroupPost(id, function (err, totalLikes) {
									console.log("total likes ", totalLikes)
									var likeStatus = false;
									for (var j in totalLikes) {
										if (authUser._id == totalLikes[j].user_id) {
											likeStatus = true;
										}
									}
									console.log("likeStatus ", likeStatus)
									console.log("total comments ", totalComments)
									var length = totalComments.length;
									var last = length - 1;
									var lastComment = totalComments[last];
									getCommentTime(timeCallback)
									function getCommentTime(timeCallback) {
										if (lastComment) {
											getTimeAgo(lastComment.createdAt, callback)
											function callback(time_ago) {
												comment_time_ago = time_ago;
												timeCallback(comment_time_ago)
											}
										}
										else {
											comment_time_ago = "";
											timeCallback(comment_time_ago)
										}
									}
									function timeCallback(comment_time_ago) {
										callback(i, length, totalLikes.length, lastComment, comment_time_ago, likeStatus);
									}
								})
							})
						}
					})

				}
			})
		}
	}


});

/*----------------------------------------------------
						(10) Add a Group Photo
 ----------------------------------------------------*/
router.post('/add_photo_to_group', function (req, res) {
	console.log("hiii add_photo_to_group")

	var baseUrl = req.protocol + '://' + req.get('host');
	upload_group_photo(req, res, function (err) {
		if (err) {
			console.log(err);
		}

		else {
			console.log("file in photo_to_group is ", req.file)
			var params = req.body;
			params.group_photo = req.file.filename;

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = String(authUser._id);
					GroupPhoto.addNewGroupPhoto(params, function (err, groupPhoto) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {
							console.log("group post added ", groupPhoto)
							groupPhoto.group_photo = baseUrl + group_photos_url + groupPhoto.group_photo;
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Group Post added successfully",
								data: groupPhoto
							})
						}
					})
				}
			})

		}
	})
});


/*---------------------------------------------------------
				(11) Get Group Photos
----------------------------------------------------------*/
router.post('/get_group_photos', function (req, res) {
	console.log("hiii get_group_photos", req.body)

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					GroupPhoto.getAllGroupPhotos(params, function (err, groupPhotos) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {
							//	console.log("data ",groupPhotos)
							var finalResult = [];
							GroupPost.getGroupPostsPhotos(params, function (err, photosPost) {
								//   console.log("hiiiiiii photosPostphotosPostphotos ",photosPost)
								for (var i in photosPost) {
									finalResult.push({ group_photo: baseUrl + group_post_url + photosPost[i].group_post_media })
								}

								console.log("hiiiii finalResult 11111111111111111 ", finalResult)
								for (var i in groupPhotos) {
									finalResult.push({ group_photo: baseUrl + group_photos_url + groupPhotos[i].group_photo });

								}
								console.log("hiiiii finalResult 22222222222222222222", finalResult)
								var sendData = {
									photos: finalResult,
									userInfo: {
										user_id: authUser._id,
										first_name: authUser.first_name,
										last_name: authUser.last_name,
										profile_image: baseUrl + profile_image_url + authUser.profile_image
									}
								}
								res.statusCode = suc;
								res.json({
									status: 1,
									message: "Group Photos get Successfully",
									data: sendData
								})
							})

						}
					})
				}
			})
		}
	}

});




/*---------------------------------------------------------
				(12) Detail of Group Discussion
----------------------------------------------------------*/
router.post('/get_group_post_detail', function (req, res) {
	console.log("hiii get_group_post_detail", req.body)

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					if (params.type == 'group') {
						GroupPost.getGroupPostDetail(params, function (err, groupPostDetail) {
							if (err) {
								console.log(" error-- ", err);
								res.statusCode = er;
								res.json({
									status: 0,
									message: "Something went wrong!",
									data: err
								})
							}
							else {
								console.log("groupPostDetail ", groupPostDetail)
								var result = {};
								var record;

								record = groupPostDetail.toObject();
								getComments(record._id, callback)
								function callback(length, totalLikes, allComments, likeStatus) {
									var thumbnail;
									var media;
									var resultAllComments = [];
									for (var i in allComments) {
										resultAllComments[i] = allComments[i].toObject();
										if (resultAllComments[i].group_post_comment_img != "") {
											resultAllComments[i].group_post_comment_img = baseUrl + grouppost_comment_url + resultAllComments[i].group_post_comment_img;
										}
										console.log('allCommmentIMage', resultAllComments[i].group_post_comment_img)
										resultAllComments[i].user_id.profile_image = baseUrl + profile_image_url + resultAllComments[i].user_id.profile_image;
										getCommentTimeAgo(resultAllComments[i], commentTimeAgoCallback)
										function getCommentTimeAgo(comment, commentTimeAgoCallback) {
											console.log("getCommentTimeAgo calls ", comment)
											getTimeAgo(comment.createdAt, callback)
											function callback(time_ago) {
												commentTimeAgoCallback(time_ago)
											}
										}
										function commentTimeAgoCallback(time_ago) {
											resultAllComments[i].time_ago = time_ago;
										}
									}

									if (record.group_post_media_type == 'V') {
										console.log("group_post_media_type v, if")
										thumbnail = baseUrl + group_post_url + 'thumbnails/' + record.thumbnail;
									}
									else {

										console.log(" group_post_media_type, else ")
										thumbnail = "";
									}
									if (record.group_post_media) {
										media = baseUrl + group_post_url + record.group_post_media;
									}
									else {
										media = "";
									}
									getTimeAgo(record.createdAt, postCallback)

									function postCallback(time_ago) {
										result = {
											_id: record._id,
											user_id: { _id: record.user_id._id, first_name: record.user_id.first_name, last_name: record.user_id.last_name, profile_image: baseUrl + profile_image_url + record.user_id.profile_image },
											// created_date 				: created_date,
											// created_time 				: created_time,
											group_post_media: media,
											group_post_media_type: record.group_post_media_type,
											group_post_status: record.group_post_status,
											totalComments: length,
											allComments: resultAllComments,
											totalLikes: totalLikes,
											likeStatus: likeStatus,
											time_ago: time_ago,
											thumbnail: thumbnail
										}

										res.statusCode = suc;
										res.json({
											status: 1,
											message: "Discussion get",
											data: result
										})
									}

								}



							}

							function getComments(id, callback) {
								CommentGroupPost.getCommentsGroupPost(id, function (err, totalComments) {
									LikeGroupPost.getLikesGroupPost(id, function (err, totalLikes) {
										console.log("total likes ", totalLikes)
										var likeStatus = false;
										for (var j in totalLikes) {
											if (authUser._id == totalLikes[j].user_id) {
												likeStatus = true;
											}
										}
										console.log("likeStatus ", likeStatus)
										console.log("total comments ", totalComments)
										var length = totalComments.length;

										callback(length, totalLikes.length, totalComments, likeStatus);
									})
								})
							}




						})

					}  /////END IF

					else if (params.type = 'wall') {

						WallPost.getWallPostDetail(params, function (err, wallPostDetail) {
							if (err) {
								console.log(" error-- ", err);
								res.statusCode = er;
								res.json({
									status: 0,
									message: "Something went wrong!",
									data: err
								})
							}
							else {
								console.log("wallPostDetail ", wallPostDetail)
								var result = {};
								var record;

								record = wallPostDetail.toObject();
								getComments(record._id, callback)
								function callback(length, totalLikes, allComments, likeStatus) {
									var thumbnail;
									var media;
									var resultAllComments = [];
									for (var i in allComments) {
										resultAllComments[i] = allComments[i].toObject();
										if (resultAllComments[i].wall_post_comment_img != "") {
											resultAllComments[i].wall_post_comment_img = baseUrl + grouppost_comment_url + resultAllComments[i].group_post_comment_img;
										}
										console.log('allCommmentIMage', resultAllComments[i].group_post_comment_img)
										resultAllComments[i].user_id.profile_image = baseUrl + profile_image_url + resultAllComments[i].user_id.profile_image;
										getCommentTimeAgo(resultAllComments[i], commentTimeAgoCallback)
										function getCommentTimeAgo(comment, commentTimeAgoCallback) {
											console.log("getCommentTimeAgo calls ", comment)
											getTimeAgo(comment.createdAt, callback)
											function callback(time_ago) {
												commentTimeAgoCallback(time_ago)
											}
										}
										function commentTimeAgoCallback(time_ago) {
											resultAllComments[i].time_ago = time_ago;
										}
									}

									if (record.wall_post_media_type == 'V') {
										console.log("wall_post_media_type v, if")
										thumbnail = baseUrl + wall_post_url + 'thumbnails/' + record.thumbnail;
									}
									else {

										console.log(" wall_post_media_type, else ")
										thumbnail = "";
									}
									if (record.wall_post_media) {
										media = baseUrl + wall_post_url + record.wall_post_media;
									}
									else {
										media = "";
									}
									getTimeAgo(record.createdAt, postCallback)

									function postCallback(time_ago) {

										result = {
											_id: record._id,
											user_id: { _id: record.user_id._id, first_name: record.user_id.first_name, last_name: record.user_id.last_name, profile_image: baseUrl + profile_image_url + record.user_id.profile_image },
											// created_date 				: created_date,
											// created_time 				: created_time,
											group_post_media: media,
											group_post_media_type: record.wall_post_media_type,
											group_post_status: record.wall_post_status,
											totalComments: length,
											allComments: resultAllComments,
											time_ago: time_ago,
											likeStatus: likeStatus,
											totalLikes: totalLikes,
											thumbnail: thumbnail
										}
										res.statusCode = suc;
										res.json({
											status: 1,
											message: "Discussion get",
											data: result
										})
									}

								}



							}

							function getComments(id, callback) {
								CommentWallPost.getCommentsWallPost(id, function (err, totalComments) {
									LikeWallPost.getLikesWallPost(id, function (err, totalLikes) {
										console.log("total likes ", totalLikes)
										var likeStatus = false;
										for (var j in totalLikes) {
											if (authUser._id == totalLikes[j].user_id) {
												likeStatus = true;
											}
										}
										console.log("total comments ", totalComments)
										var length = totalComments.length;

										callback(length, totalLikes.length, totalComments, likeStatus);
									})
								})
							}




						})

					}


				}

			})
		}
	}


});



/*---------------------------------------------------------
				(13) Get Small Groups
----------------------------------------------------------*/
router.post('/get_small_groups', function (req, res) {
	console.log("hiii get_small_groups")

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');


	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			console.log("params ", params)
			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = String(authUser._id);
					SmallGroup.getAllSmallGroups(params, function (err, smallGroups) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							// console.log("smallGroups found ",smallGroups )
							var result_groups = [];
							for (var i in smallGroups) {
								result_groups[i] = smallGroups[i].toObject();
								result_groups[i].total_members = result_groups[i].users.length;
								result_groups[i].small_group_image = baseUrl + small_group_image_url + result_groups[i].small_group_image;
								// for(var j in result_groups[i].admin_users) {
								//   	result_groups[i].admin_users[j].profile_image = baseUrl + profile_image_url + result_groups[i].admin_users[j].profile_image; 
								//  }
								result_groups[i].join_status = 'false';
								for (var j in result_groups[i].users) {
									result_groups[i].users[j].profile_image = baseUrl + profile_image_url + result_groups[i].users[j].profile_image;
									console.log("iddd is ", result_groups[i].users[j]._id)
									if (String(authUser._id) == result_groups[i].users[j]._id) {
										console.log("hiii matchhhhhh ", result_groups[i].users[j]._id, params.user_id)
										result_groups[i].join_status = 'true';
									}

								}
								var dist = geodist({ lat: params.latitude, lon: params.longitude },
									{ lat: result_groups[i].venue_latitude, lon: result_groups[i].venue_longitude })

								result_groups[i].distance = dist;
								result_groups[i].miles_distance = dist + ' Km';

								for (var j in result_groups[i].requests) {
									if (String(authUser._id) == result_groups[i].requests[j].user_id && result_groups[i].requests[j].request_status == 'P') {
										result_groups[i].join_status = "Pending";
									}
									if (String(authUser._id) == result_groups[i].requests[j].user_id && result_groups[i].requests[j].request_status == 'N') {
										result_groups[i].join_status = "false";
									}
								}
							}
							result_groups.sort(function (a, b) {
								return a.distance - b.distance;
							});
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Groups found successfully",
								data: result_groups
							})


						}


					})
				}
			})
		}
	}



});



/*---------------------------------------------------------
				(13) Search Small Groups
----------------------------------------------------------*/
router.post('/search_small_groups', function (req, res) {
	console.log("hiii search_small_groups")

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	console.log("params ", params)
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = String(authUser._id);
			SmallGroup.SearchSmallGroups(params, function (err, smallGroups) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}

				else {
					// console.log("smallGroups found ",smallGroups )
					var result_groups = [];
					for (var i in smallGroups) {
						result_groups[i] = smallGroups[i].toObject();
						result_groups[i].total_members = result_groups[i].users.length;
						result_groups[i].small_group_image = baseUrl + small_group_image_url + result_groups[i].small_group_image;
						// for(var j in result_groups[i].admin_users) {
						//   	result_groups[i].admin_users[j].profile_image = baseUrl + profile_image_url + result_groups[i].admin_users[j].profile_image; 
						//  }
						result_groups[i].join_status = 'false';
						for (var j in result_groups[i].users) {
							result_groups[i].users[j].profile_image = baseUrl + profile_image_url + result_groups[i].users[j].profile_image;
							console.log("iddd is ", result_groups[i].users[j]._id)
							if (String(authUser._id) == result_groups[i].users[j]._id) {
								console.log("hiii matchhhhhh ", result_groups[i].users[j]._id, params.user_id)
								result_groups[i].join_status = 'true';
							}

						}
						var dist = geodist({ lat: params.latitude, lon: params.longitude },
							{ lat: result_groups[i].venue_latitude, lon: result_groups[i].venue_longitude })

						result_groups[i].miles_distance = dist + ' m';

						for (var j in result_groups[i].requests) {
							if (String(authUser._id) == result_groups[i].requests[j].user_id && result_groups[i].requests[j].request_status == 'P') {
								result_groups[i].join_status = "Pending";
							}
							if (String(authUser._id) == result_groups[i].requests[j].user_id && result_groups[i].requests[j].request_status == 'N') {
								result_groups[i].join_status = "false";
							}
						}

					}

					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Groups found successfully",
						data: result_groups
					})


				}


			})
		}
	})

});




/*---------------------------------------------------------
				(14) Get Detail of Small Group
----------------------------------------------------------*/
router.post('/detail_small_group', function (req, res) {
	console.log("hiii detail_small_group", req.body)

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = String(authUser._id);
					SmallGroup.getSmallGroupDetail(params, function (err, smallGroupDetail) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {

							console.log("smallGroupDetail found ", smallGroupDetail)
							var result_group;

							result_group = smallGroupDetail.toObject();
							result_group.total_members = result_group.users.length;
							result_group.small_group_image = baseUrl + small_group_image_url + result_group.small_group_image;

							result_group.join_status = "false";

							for (var i in result_group.users) {
								result_group.users[i].profile_image = baseUrl + profile_image_url + result_group.users[i].profile_image;
								if (params.user_id == result_group.users[i]._id) {
									result_group.join_status = "true";
								}

							}

							for (var j in result_group.requests) {
								if (String(authUser._id) == result_group.requests[j].user_id && result_group.requests[j].request_status == 'P') {
									result_group.join_status = "Pending";
								}
								if (String(authUser._id) == result_group.requests[j].user_id && result_group.requests[j].request_status == 'N') {
									result_group.join_status = "false";
								}
							}
							var admins = [];
							for (var i in result_group.admin_users) {
								admins[i] = result_group.admin_users[i].first_name + ' ' + result_group.admin_users[i].last_name;
							}
							console.log("admins ", admins)
							result_group.admin_users = admins.toString();

							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Group found successfully",
								data: result_group
							})

						}
					})
				}
			})
		}
	}

});






/*----------------------------------------------------
						(15) Add a Group Post
 ----------------------------------------------------*/
router.post('/add_wall_post', function (req, res) {
	console.log("hiii add_wall_post")


	upload_wall_post(req, res, function (err) {
		if (err) {
			console.log(err);
		}

		else {
			console.log("file in group post is ", req.file)
			var params = req.body;
			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = String(authUser._id);
					if (req.file) {
						params.wall_post_media = req.file.filename;
						var media = req.file.filename;
						if (params.wall_post_media_type == 'V') {
							var thumbnail = Date.now() + '.jpg';

							ffmpeg('public/images/wall_post/' + media).screenshots({
								count: 1,
								folder: 'public/images/wall_post/thumbnails/',
								filename: thumbnail,
								size: '320x240'
							}).on('end', function (err, data) {
								if (err) {
									console.log("erorrrrrrrrrrrrrrrrr ", err)
								}
								console.log("dataaaa savesssssssssssssssss ", data)

							})
							params.thumbnail = thumbnail;
						}
						else if (params.wall_post_media_type == 'P') {
							params.thumbnail = "";
						}


					}
					else {
						params.wall_post_media = "";
						params.thumbnail = "";
						params.wall_post_media_type = 'N';
					}

					console.log("params after all ", params)
					WallPost.addNewWallPost(params, function (err, wallPost) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {
							console.log("group post added ", wallPost)
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Photo added successfully",
								data: wallPost
							})
						}
					})
				}
			})
		}
	})


});




/*----------------------------------------------------
					 (7) Join small Group
  ----------------------------------------------------*/
router.post('/join_small_group', function (req, res) {
	console.log("hiii join_small_group")
	var params = req.body;
	params.status = 'A';
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = String(authUser._id);
			SmallGroup.addJoinSmallGroupRequest(params, function (err, request) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {
					console.log("request added ", request);
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "User Request added Successfully",
						data: request
					})
				}
			})

		}
	})
});




/*----------------------------------------------------
					 (16) Add Comment to Wall Post
  ----------------------------------------------------*/
router.post('/add_comment_wall_post', function (req, res) {
	console.log("hiii add_comment_wall_post")
	upload_wall_post_comment(req, res, function (err) {
		if (err) {
			console.log(err);
		}

		else {
			console.log("file in add_comment_wall_post is ", req.file)
			var params = req.body;
			params.status = 'A';
			if (req.file) {
				params.wall_post_comment_img = req.file.filename;
				params.media_status = true;
			}
			else {
				params.wall_post_comment_img = '';
				params.media_status = false;
			}
			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = String(authUser._id);
					CommentWallPost.addCommentWallPost(params, function (err, comment) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {
							console.log("Comment added ", comment);
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Comment Added"
							})
						}
					})
				}
			})
		}
	})
});



//  /*----------------------------------------------------
//  		          (17) Add Like to Wall Post
//    ----------------------------------------------------*/
// 	router.post('/add_like_wall_post',function(req,res){

// 		console.log("hiii add_like_wall_post")
// 		var params		= req.body;
// 		User.getProfile(params,function(err,authUser) {
//            				console.log('auth user ',authUser)
// 		          	if(authUser === null) {
// 		          		res.statusCode = ses;
// 		          			 res.json({
// 					               status		: 2,
// 			    	               message		: "It seems like you have logged in from another device. Please Sign in again."

// 				        	})	
// 		          	}
// 		      else {
// 		      	params.user_id = String(authUser._id);
// 		LikeWallPost.checkLikeWallPost(params,function (err,check) {
// 			if(err){
// 				console.log(" error-- ",err);
// 				res.statusCode = er;
// 				 res.json({
// 									status : 0,
// 									message : "Something went wrong!",						
// 									data : err	
// 							})	
// 			}
// 			else{
// 			console.log("data find succesfullly ");
// 			if(check.length === 0) {
//                  LikeWallPost.addLikeWallPost(params,function (err,likeGroupPost) {
//                       if(err){
// 			            	console.log(" error-- ",err);
// 			          }
// 			          else {
// 			          	console.log("data find succesfullly ",likeGroupPost);
// 			          	res.statusCode = suc;
// 			          	res.json({
// 									status		: 1,
// 									message		: "Like Added"
// 								})
// 			          }
//                  })
// 			}

// 			else {

// 				LikeWallPost.changeLikeStatus(check[0]._id, params.like_status, function (err,likeGroupPost) {
// 					 if(err){
// 			            	console.log(" error-- ",err);
// 			            	res.statusCode = er;
// 			            	 res.json({
// 									status : 0,
// 									message : "Something went wrong!",						
// 									data : err	
// 							})	
// 			          }
// 			          else {
// 			          	console.log("data updated succesfullly ");
// 			             res.statusCode = suc;
// 			          	res.json({
// 									status		: 1,
// 									message		: "status Changed"
// 								})
// 			          }
// 				})
// 			}
// 		  }
// 		})
// 	}
// })

//    });




/*---------------------------------------------------------
				(18) Get Wall Posts
----------------------------------------------------------*/
router.post('/get_wall_posts', function (req, res) {
	console.log("hiii get_wall_posts", req.body)

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = String(authUser._id);
					WallPost.getAllWallPosts(params, function (err, wallPosts) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {
							console.log("data ", wallPosts)
							if (wallPosts.length == 0) {
								res.statusCode = suc;
								res.json({
									status: 1,
									message: "Discussion get",
									data: {
										discussion: [], userInfo: {
											user_id: authUser._id,
											first_name: authUser.first_name,
											last_name: authUser.last_name,
											profile_image: baseUrl + profile_image_url + authUser.profile_image
										}
									}
								})
							}
							var result = [];
							var records = [];
							var checkArraylength = [];

							for (var i in wallPosts) {

								records[i] = wallPosts[i].toObject();
								getComments(records[i]._id, i, callback)
								function callback(i, length, totalLikes, lastComment, comment_time_ago, likeStatus) {
									var thumbnail;
									var media;
									console.log("hii callback ", i, length, lastComment, comment_time_ago);
									if (lastComment) {
										lastComment.user_id.profile_image = baseUrl + profile_image_url + lastComment.user_id.profile_image;
										if (lastComment.media_status == true) {
											lastComment.group_post_comment_img = baseUrl + grouppost_comment_url + lastComment.group_post_comment_img;
										}
									}
									else {
										lastComment = {
											"comment_msg": "",
											"_id": "",
											"group_post_comment_img": "",
											"media_status": "",
											"user_id": {
												"_id": "",
												"first_name": "",
												"last_name": "",
												"profile_image": ""
											}
										}
									}
									if (records[i].wall_post_media_type == 'V') {
										thumbnail = baseUrl + wall_post_url + 'thumbnails/' + records[i].thumbnail;
									}
									else {
										thumbnail = "";
									}
									if (records[i].wall_post_media) {
										media = baseUrl + wall_post_url + records[i].wall_post_media;
									}
									else {
										media = "";
									}
									getTimeAgo(records[i].createdAt, callback)
									function callback(time_ago) {

										result.push({
											_id: records[i]._id,
											user_id: { _id: records[i].user_id._id, first_name: records[i].user_id.first_name, last_name: records[i].user_id.last_name, profile_image: baseUrl + profile_image_url + records[i].user_id.profile_image },
											// created_date 				: created_date,
											// created_time 				: created_time,
											group_post_media: media,
											group_post_status: records[i].wall_post_status,
											group_post_media_type: records[i].wall_post_media_type,
											totalComments: length,
											lastComment: lastComment,
											totalLikes: totalLikes,
											time_ago: time_ago,
											likeStatus: likeStatus,
											comment_time_ago: comment_time_ago,
											thumbnail: thumbnail,
											createdAt: records[i].createdAt
										})
										if (result.length === wallPosts.length) {
											result.sort(function (a, b) {
												return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
											});
											var sendData = {
												discussion: result,
												userInfo: {
													user_id: authUser._id,
													first_name: authUser.first_name,
													last_name: authUser.last_name,
													profile_image: baseUrl + profile_image_url + authUser.profile_image
												}
											}
											console.log("result is ", result.length, wallPosts.length)
											res.statusCode = suc;
											res.json({
												status: 1,
												message: "Discussion get",
												data: sendData
											})
										}
									}
								}

							}

						}

						function getComments(id, i, callback) {
							CommentWallPost.getCommentsWallPost(id, function (err, totalComments) {
								LikeWallPost.getLikesWallPost(id, function (err, totalLikes) {
									console.log("total likes ", totalLikes)
									var likeStatus = false;
									for (var j in totalLikes) {
										if (authUser._id == totalLikes[j].user_id) {
											likeStatus = true;
										}
									}
									console.log("total comments ", totalComments)
									var length = totalComments.length;
									var last = length - 1;
									var lastComment = totalComments[last];
									getCommentTime(timeCallback)
									function getCommentTime(timeCallback) {
										if (lastComment) {
											getTimeAgo(lastComment.createdAt, callback)
											function callback(time_ago) {
												comment_time_ago = time_ago;
												timeCallback(comment_time_ago)
											}
										}
										else {
											comment_time_ago = "";
											timeCallback(comment_time_ago)
										}
									}
									function timeCallback(comment_time_ago) {
										callback(i, length, totalLikes.length, lastComment, comment_time_ago, likeStatus);
									}
								})
							})
						}
					})

				}
			})
		}
	}

});





/*---------------------------------------------------------
				(12) Get Wall Post Detail
----------------------------------------------------------*/
router.post('/get_wall_post_detail', function (req, res) {
	console.log("hiii get_wall_post_detail", req.body)

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					WallPost.getWallPostDetail(params, function (err, wallPostDetail) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {
							console.log("wallPostDetail ", wallPostDetail)
							var result = {};
							var record;

							record = wallPostDetail.toObject();
							getComments(record._id, callback)
							function callback(length, totalLikes, allComments) {
								var thumbnail;
								var media;
								var resultAllComments = [];
								for (var i in allComments) {
									resultAllComments[i] = allComments[i].toObject();
									if (resultAllComments[i].wall_post_comment_img != "") {
										resultAllComments[i].wall_post_comment_img = baseUrl + wallpost_comment_url + resultAllComments[i].wall_post_comment_img;
									}
									resultAllComments[i].user_id.profile_image = baseUrl + profile_image_url + resultAllComments[i].user_id.profile_image;
									getCommentTimeAgo(resultAllComments[i], commentTimeAgoCallback)
									function getCommentTimeAgo(comment, commentTimeAgoCallback) {
										console.log("getCommentTimeAgo calls ", comment)
										getTimeAgo(comment.createdAt, callback)
										function callback(time_ago) {
											commentTimeAgoCallback(time_ago)
										}
									}
									function commentTimeAgoCallback(time_ago) {
										resultAllComments[i].time_ago = time_ago;
									}
								}

								if (record.wall_post_media_type == 'V') {
									console.log("wall_post_media_type v, if")
									thumbnail = baseUrl + wall_post_url + 'thumbnails/' + record.thumbnail;
								}
								else {

									console.log(" wall_post_media_type, else ")
									thumbnail = "";
								}
								if (record.wall_post_media) {
									media = baseUrl + wall_post_url + record.wall_post_media;
								}
								else {
									media = "";
								}
								getTimeAgo(record.createdAt, postCallback)

								function postCallback(time_ago) {
									result = {
										_id: record._id,
										user_id: { _id: record.user_id._id, first_name: record.user_id.first_name, last_name: record.user_id.last_name, profile_image: baseUrl + profile_image_url + record.user_id.profile_image },
										// created_date 				: created_date,
										// created_time 				: created_time,
										wall_post_media: media,
										wall_post_media_type: record.wall_post_media_type,
										wall_post_status: record.wall_post_status,
										totalComments: length,
										allComments: resultAllComments,
										time_ago: time_ago,
										totalLikes: totalLikes,
										thumbnail: thumbnail
									}
									res.statusCode = suc;
									res.json({
										status: 1,
										message: "Discussion get",
										data: result
									})
								}

							}



						}

						function getComments(id, callback) {
							CommentWallPost.getCommentsWallPost(id, function (err, totalComments) {
								LikeWallPost.getLikesWallPost(id, function (err, totalLikes) {
									console.log("total likes ", totalLikes)
									console.log("total comments ", totalComments)
									var length = totalComments.length;

									callback(length, totalLikes.length, totalComments);
								})
							})
						}




					})
				}
			})
		}
	}


});



/*----------------------------------------------------
					  (19)   Logout  
   ----------------------------------------------------*/

router.post('/logout', function (req, res) {
	console.log("hiii logout")

	var params = req.body;
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = String(authUser._id)
			User.logoutUser(params, function (err, user) {
				if (err) {
					console.log("error ", err)
					res.statusCode = er;
					res.json({
						status: 0,
						err: err
					})
				}
				res.statusCode = suc;

				res.json({
					status: 1,
					message: "Successfully logout!",
					data: user
				})

			})

		}
	})


});



/*---------------------------------------
			  (20) Get My Profile 
----------------------------------------*/
router.post('/get_my_profile', function (req, res) {
	console.log("hiii get_profile")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					console.log("Profile get succesfullly ", authUser);

					authUser.profile_image = baseUrl + profile_image_url + authUser.profile_image;


					console.log("profile after all ", authUser)
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Profile get succesfullly ",
						data: authUser
					})
				}
			})
		}
	}
});




/*---------------------------------------
			 (21)  Edit Profile 
----------------------------------------*/
router.post('/edit_profile', function (req, res) {
	console.log("hiii edit_profile")
	upload_profile(req, res, function (err) {

		if (err) {
			console.log(err);
			res.statusCode = er;
			res.json({
				status: 0,
				message: "Something went wrong!",
				data: err
			})
		}

		else {
			console.log("files in edit_profile is ", req.file)
			console.log("dataaaaaaa in edit_profile is ", req.body)

			var params = req.body;
			User.getProfile(params, function (err, authUser) {
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					if (req.file) {
						params.profile_image = req.file.filename;
					}
					else {
						params.profile_image = "";
					}
					pro_img = "";
					var id = authUser._id;
					params.access_token = "";
					if (params.dob) {
						params.dob = new Date(params.dob);
					}
					User.createProfile(id, params, function (err, user) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "successfully updated",
								data: user
							})
						}
					})
				}
			})

		}
	})

});





/*---------------------------------------------------------
		(22) Add a betrothed
----------------------------------------------------------*/
router.post('/add_betrothed', function (req, res) {
	console.log("hiii /admin/add_betrothed", req.body)

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	params.status = 'P';
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = String(authUser._id)
			Betrothed.addNewBetrothed(params, function (err, newBetrothed) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {

					console.log("newBetrothed added ", newBetrothed)
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Couple request sent to admin.",
						data: newBetrothed
					})

				}
			})
		}
	})


});





/*---------------------------------------------------------
				(23) Get Marriages Section
----------------------------------------------------------*/
router.post('/get_marriages', function (req, res) {
	console.log("hiii get_marriages")

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			console.log("params ", params)
			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {

					Betrothed.getAllBetrotheds(function (err, betrotheds) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("betrotheds found ", betrotheds)
							var resultBetrotheds = [];
							for (var i in betrotheds) {
								resultBetrotheds[i] = betrotheds[i].toObject();
								resultBetrotheds[i].first_user_id.profile_image = baseUrl + profile_image_url + resultBetrotheds[i].first_user_id.profile_image;
								resultBetrotheds[i].second_user_id.profile_image = baseUrl + profile_image_url + resultBetrotheds[i].second_user_id.profile_image;
							}

							WeddingList.getAllWeddingList(function (err, weddingLists) {
								if (err) {
									console.log(" error-- ", err);
									res.statusCode = er;
									res.json({
										status: 0,
										message: "Something went wrong!",
										data: err
									})
								}

								else {
									console.log("weddingLists found ", weddingLists)
									var resultWeddingList = [];
									for (var i in weddingLists) {
										resultWeddingList[i] = weddingLists[i].toObject();
										resultWeddingList[i].cover_photo = baseUrl + wedding_cover_image_url + resultWeddingList[i].cover_photo;
									}

									EventCategory.getCategoryId(function (err, categoryId) {
										var eid = categoryId._id;
										Event.getMarriageEvents(eid, function (err, upcomingMarriages) {
											if (err) {
												console.log(" error-- ", err);
												res.statusCode = er;
												res.json({
													status: 0,
													message: "Something went wrong!",
													data: err
												})
											}

											else {
												console.log("upcomingMarriages found ", upcomingMarriages)
												var resultUpcomingMarriages = [];
												for (var i in upcomingMarriages) {
													resultUpcomingMarriages[i] = upcomingMarriages[i].toObject();
													// resultUpcomingMarriages[i].first_user_id.profile_image      = baseUrl + profile_image_url + resultUpcomingMarriages[i].first_user_id.profile_image;
													// resultUpcomingMarriages[i].second_user_id.profile_image     = baseUrl + profile_image_url + resultUpcomingMarriages[i].second_user_id.profile_image;
													resultUpcomingMarriages[i].event_cover = baseUrl + event_cover_url + resultUpcomingMarriages[i].event_cover;
												}

												BlogCategory.getCategoryId(function (err, categoryId) {
													console.log("categoryId", categoryId)
													var id = categoryId._id;
													Blog.getAdviceSection(id, function (err, adviceOb) {
														var advice = [];
														for (var i in adviceOb) {
															advice[i] = adviceOb[i].toObject();
															advice[i].blog_image = baseUrl + blog_image_url + advice[i].blog_image;
															advice[i].category = '#' + advice[i].category.name;
															getTimeAgo(advice[i].createdAt, callback)
															function callback(time_ago) {
																advice[i].time_ago = time_ago;
															}
														}







														resultBetrotheds.sort(function (a, b) {
															return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
														});
														resultWeddingList.sort(function (a, b) {
															return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
														});
														resultUpcomingMarriages.sort(function (a, b) {
															return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
														});
														advice.sort(function (a, b) {
															return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
														});

														var sendData = {
															betrotheds: resultBetrotheds,
															weddingLists: resultWeddingList,
															upcomingMarriages: resultUpcomingMarriages,
															advice: advice
														}
														res.statusCode = suc;
														res.json({
															status: 1,
															message: "Marriages get successfully",
															data: sendData
														})
													}) //// advice
												})  // blog category

											}
										})  ////upcoming
									}) /// event category id find
								}
							})   ////wedding list
						}
					}) ///Betrotheds

				}
			})   ///access check
		}
	}

});



/*---------------------------------------
			  (24) Get Alumni
----------------------------------------*/
router.post('/get_alumni', function (req, res) {
	console.log("hiii get_alumni")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					var id = authUser._id;
					User.getAllAlumni(id, function (err, alumnis) {
						if (err) {
							console.log("error - ", err)
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						console.log(alumnis)
						for (var i in alumnis) {
							alumnis[i].profile_image = baseUrl + profile_image_url + alumnis[i].profile_image;
						}
						res.statusCode = suc;
						res.json({
							status: 1,
							message: "Alumni's get succesfullly ",
							data: alumnis
						})
					})


				}
			})
		}
	}
});



/*---------------------------------------
			  (25) Get Birthdays Section 
----------------------------------------*/
router.post('/get_birthdays', function (req, res) {
	console.log("hiii get_birthdays")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {
			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					var id = String(authUser._id)

					User.getTodayBirthday(id, function (err, todayBirthdays) {
						if (err) {
							console.log(err)
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						console.log("todayBirthdays ", todayBirthdays)
						for (var i in todayBirthdays) {
							todayBirthdays[i].profile_image = baseUrl + profile_image_url + todayBirthdays[i].profile_image;
							todayBirthdays[i].dob = todayBirthdays[i].dob;

						}
						User.getUpcomingBirthday(id, function (err, upcomingBirthdays) {
							if (err) {
								console.log(err)
								res.statusCode = er;
								res.json({
									status: 0,
									message: "Something went wrong!",
									data: err
								})
							}
							console.log("upcomingBirthdays ", upcomingBirthdays)
							for (var i in upcomingBirthdays) {
								upcomingBirthdays[i].profile_image = baseUrl + profile_image_url + upcomingBirthdays[i].profile_image;
								upcomingBirthdays[i].dob = upcomingBirthdays[i].dob;


							}
							BirthdayList.getAllBirthdayLists(function (err, birthdaylists) {
								if (err) {
									console.log(err)
									res.statusCode = er;
									res.json({
										status: 0,
										message: "Something went wrong!",
										data: err
									})
								}
								console.log("birthdaylists ", birthdaylists)
								for (var i in birthdaylists) {
									birthdaylists[i].bday_list_cover_photo = baseUrl + bday_cover_image_url + birthdaylists[i].bday_list_cover_photo;

								}
								ClassifiedCategory.getClassifiedId(function (err, classifiedId) {
									console.log('classifiedId', classifiedId)
									var id = classifiedId._id;
									Classified.getBirthNewsSection(id, function (err, birthNews) {
										console.log(birthNews)
										var birthNewsResult = [];
										for (var i in birthNews) {
											birthNewsResult[i] = birthNews[i].toObject();
											birthNewsResult[i].classified_image = baseUrl + classified_image_url + birthNewsResult[i].classified_image;
											getTimeAgo(birthNewsResult[i].createdAt, callback)
											function callback(time_ago) {
												console.log("time_ago ", time_ago)
												birthNewsResult[i].time_ago = time_ago;
											}
										}

										var sendData = {
											todayBirthdays: todayBirthdays,
											upcomingBirthdays: upcomingBirthdays,
											birthdaylists: birthdaylists,
											birthNews: birthNewsResult
										}
										res.statusCode = suc;
										res.json({
											status: 1,
											message: "Birthdays get succesfullly ",
											sendData: sendData
										})
									})
								})
							})

						})

					})

				}
			})
		}
	}
});


/*---------------------------------------
			  (26) Get New Members
----------------------------------------*/
router.post('/get_new_members', function (req, res) {
	console.log("hiii get_new_members")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					var id = authUser._id;
					User.getAllNewMembers(id, function (err, newMembers) {
						if (err) {
							console.log("error - ", err)
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						console.log("newMembers ", newMembers)
						for (var i in newMembers) {
							newMembers[i].profile_image = baseUrl + profile_image_url + newMembers[i].profile_image;

						}
						let newMembersListUnderAMonth = newMembers.filter(member => member.daysTillRegister >= -30);
						res.statusCode = suc;
						res.json({
							status: 1,
							message: "New members's get succesfullly ",
							data: newMembersListUnderAMonth
						})
					})


				}
			})
		}
	}
});



/*---------------------------------------
			  (27) Get Events
----------------------------------------*/
router.post('/get_events', function (req, res) {
	console.log("hiii get_events")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					var id = authUser._id;
					Event.getEvents(id, function (err, allGroupEvents) {
						if (err) {
							console.log("error - ", err)
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						var result_events = [];
						var groupEvents = [];
						for (var i in allGroupEvents) {
							groupEvents[i] = allGroupEvents[i].toObject();
							groupEvents[i].event_cover = baseUrl + event_cover_url + groupEvents[i].event_cover;
							var date = groupEvents[i].date;
							groupEvents[i].dateForSort = date;
							groupEvents[i].date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
						}

						for (var j in groupEvents) {
							const yesterdayTimeStamp = new Date().getTime() - 24 * 60 * 60 * 1000;
							if (groupEvents[j].dateForSort.getTime() > new Date(yesterdayTimeStamp).getTime()) {
								result_events.push(groupEvents[j])
							}
						}
						result_events.sort(function (a, b) {
							return a.dateForSort - b.dateForSort
						});
						res.statusCode = suc;
						res.json({
							status: 1,
							message: "Events get succesfullly ",
							data: result_events
						})
					})


				}
			})
		}
	}
});



/*---------------------------------------------------------
				(28) Get Detail of Small Group
----------------------------------------------------------*/
router.post('/get_event_detail', function (req, res) {
	console.log("hiii get_event_detail", req.body)

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = String(authUser._id);
					Event.getEventDetail(params, function (err, eventDetail) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {

							console.log("eventDetail found ", eventDetail)
							var eventDetailResult = eventDetail.toObject();
							eventDetailResult.event_cover = baseUrl + event_cover_url + eventDetailResult.event_cover;
							for (var i in eventDetailResult.group_id) {
								console.log("userssssss ", eventDetailResult.group_id[i].users)
								eventDetailResult.group_id[i].group_image = baseUrl + group_image_url + eventDetailResult.group_id[i].group_image;
								for (var j in eventDetailResult.group_id[i].users) {
									eventDetailResult.group_id[i].users[j].profile_image = baseUrl + profile_image_url + eventDetailResult.group_id[i].users[j].profile_image;
								}
							}
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Event Detail found successfully",
								data: eventDetailResult
							})

						}
					})
				}
			})
		}
	}

});




/*---------------------------------------
			  (29) Get Music Albums
----------------------------------------*/
router.post('/get_music_albums', function (req, res) {
	console.log("hiii get_music_albums")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					//var id = authUser._id;
					var baseUrl = req.protocol + '://' + req.get('host');

					MusicAlbum.getMusicAlbums(function (err, musicAlbums) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("musicAlbums found ", musicAlbums)

							for (var i in musicAlbums) {
								musicAlbums[i].album_image = baseUrl + album_image_url + musicAlbums[i].album_image;
							}
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Music Albums found successfully",
								data: musicAlbums
							})
						}
					})
				}

			})
		}
	}
});






/*---------------------------------------
			  (30) Get Songs Album
----------------------------------------*/
router.post('/get_songs_album', function (req, res) {
	console.log("hiii get_songs_album ", req.body)
	var params = req.body;

	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					//var id = authUser._id;
					var baseUrl = req.protocol + '://' + req.get('host');

					SongToAlbum.getSongsOfAlbumApp(params, function (err, songs) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("songs found ", songs)

							for (var i in songs) {
								songs[i].song_file = baseUrl + album_song_url + songs[i].song_file;
							}
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Music found successfully",
								data: songs
							})
						}

					})
				}

			})
		}
	}
});



/*---------------------------------------
			  (31) Get All Songs
----------------------------------------*/
router.post('/get_all_songs', function (req, res) {
	console.log("hiii get_all_songs ", req.body)
	var params = req.body;

	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					//var id = authUser._id;
					var baseUrl = req.protocol + '://' + req.get('host');

					SongToAlbum.getAllSongs(params, function (err, allSongs) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("allSongs found ", allSongs)
							var allSongsResult = [];
							for (var i in allSongs) {
								allSongsResult[i] = allSongs[i].toObject();
								allSongsResult[i].song_file = baseUrl + album_song_url + allSongsResult[i].song_file;
								allSongsResult[i].album_id.album_image = baseUrl + album_image_url + allSongsResult[i].album_id.album_image
							}
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Music found successfully",
								data: allSongsResult
							})
						}

					})
				}

			})
		}
	}
});




/*---------------------------------------
			  (32) Get All Gallaries
----------------------------------------*/
router.post('/get_all_gallaries', function (req, res) {
	console.log("hiii get_all_gallaries ", req.body)
	var params = req.body;

	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					//var id = authUser._id;
					var baseUrl = req.protocol + '://' + req.get('host');

					MediaGallary.getAllMediaGallaries(function (err, mediaGallaries) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("mediaGallaries found ", mediaGallaries)
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Media Gallaries found successfully",
								data: mediaGallaries
							})

						}

					})
				}

			})
		}
	}
});





/*---------------------------------------
			  (33) Get Media of Gallaries
----------------------------------------*/
router.post('/get_media_of_gallary', function (req, res) {
	console.log("hiii get_media_of_gallary ", req.body)
	var params = req.body;

	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			//var id = authUser._id;
			var baseUrl = req.protocol + '://' + req.get('host');
			MediaToGallary.getMediaOfGallary(params, function (err, media) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong",
						data: err
					})

				}

				else {
					console.log("media found ", media)

					for (var i in media) {
						if (media[i].media_type == 'V') {
							media[i].thumbnail = baseUrl + gallary_media_url + 'thumbnails/' + media[i].thumbnail;
						}
						media[i].media_file = baseUrl + gallary_media_url + media[i].media_file;
					}
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Media found successfully",
						data: media
					})
				}

			})

		}

	})
});



/*---------------------------------------------------------
		(34) Make Appointment Request
----------------------------------------------------------*/
router.post('/make_appointment_request', function (req, res) {
	console.log("hiii /admin/make_appointment_request", req.body)

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	params.status = 'P';
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = String(authUser._id)
			params.date_of_appointment = new Date(params.date_of_appointment);
			Appointment.addNewAppointment(params, function (err, newAppointment) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {

					console.log("newAppointment added ", newAppointment)
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Appointment added successfully",
						data: newAppointment
					})

				}
			})
		}
	})


});




/*---------------------------------------
			  (35) Get Today's Appointments 
----------------------------------------*/
router.post('/get_today_appointments', function (req, res) {
	console.log("hiii get_today_appointments")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.id = String(authUser._id)

					Appointment.getTodayAppointments(params, function (err, todayAppointments) {
						if (err) {
							console.log(err)
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						console.log("todayAppointments ", todayAppointments)
						Appointment.getUpcomingAppointments(params.id, function (err, upcomingAppointments) {
							if (err) {
								console.log(err)
								res.statusCode = er;
								res.json({
									status: 0,
									message: "Something went wrong!",
									data: err
								})
							}
							console.log("upcomingAppointments ", upcomingAppointments)
							var sendData = {
								todayAppointments: todayAppointments,
								upcomingAppointments: upcomingAppointments
							}
							res.statusCode = suc;

							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Appointments get successfully",
								data: sendData
							})

						})



					})

				}
			})
		}
	}
});


/*---------------------------------------
			  (36) Get Upcoming Appointments 
----------------------------------------*/
router.post('/get_upcoming_appointments', function (req, res) {
	console.log("hiii get_upcoming_appointments")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					var id = String(authUser._id)

					Appointment.getUpcomingAppointments(id, function (err, upcomingAppointments) {
						if (err) {
							console.log(err)
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						console.log("upcomingAppointments ", upcomingAppointments)
						res.statusCode = suc;
						res.json({
							status: 1,
							message: "Upcoming Appointment get successfully",
							data: upcomingAppointments
						})

					})

				}
			})
		}
	}
});



/*---------------------------------------
			   (37) Get All Blogs
 ----------------------------------------*/
router.post('/get_all_blogs', function (req, res) {
	console.log("hiii get_all_blogs")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {


			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {

					Blog.getAllBlogs(function (err, blogs) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})

						}
						else if (blogs.length == 0) {
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Blogs found successfully",
								data: []
							})
						}


						else {
							console.log("blogs found ", blogs)
							var resultBlogs = [];

							for (var i in blogs) {
								resultBlogs[i] = blogs[i].toObject();
								resultBlogs[i].blog_image = baseUrl + blog_image_url + resultBlogs[i].blog_image;
								resultBlogs[i].category = '#' + resultBlogs[i].category.name;

								getTimeAgo(resultBlogs[i].createdAt, callback)
								function callback(time_ago) {
									resultBlogs[i].time_ago = time_ago;

									if (resultBlogs.length == blogs.length) {
										res.statusCode = suc;
										res.json({
											status: 1,
											message: "Blogs found successfully",
											data: resultBlogs
										})
									}


									// var ast = HTML.parse(resultBlogs[i].blog); 
									// console.log(ast);
									// resultBlogs[i].blog = ast;
								}
							}



						}

					})
				}
			})
		}
	}
});



/*---------------------------------------
			   (38) Get Blog Detail
 ----------------------------------------*/
router.post('/get_blog_detail', function (req, res) {
	console.log("hiii get_blog_detail")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {

			Blog.getBlogDetail(params, function (err, blogDetail) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {
					console.log("blogDetail found ", blogDetail)
					blogDetail.blog_image = baseUrl + blog_image_url + blogDetail.blog_image;
					SocialShare.getSocialShareContent(function (err, socialContent) {
						res.statusCode = suc;
						res.json({
							status: 1,
							message: "Blog found successfully",
							data: blogDetail,
							socialContent: socialContent
						})
					})

				}
			})
		}
	})
});




/*---------------------------------------
			   (39) Get Classifieds Categories
 ----------------------------------------*/
router.post('/get_classifieds_categories', function (req, res) {
	console.log("hiii get_classifieds_categories")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {

					ClassifiedCategory.getAllClassifiedsCategories(function (err, classifiedCategories) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("classifiedCategories found ", classifiedCategories)
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Classified Categories found successfully",
								data: classifiedCategories
							})

						}

					})
				}
			})
		}
	}
});




/*---------------------------------------
			   (40) Get Classifieds Of Category
 ----------------------------------------*/
router.post('/get_classifieds_of_category', function (req, res) {
	console.log("hiii get_classifieds_of_category")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {

			Classified.getClassifiedsOfCategory(params, function (err, classifieds) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else if (classifieds.length == 0) {
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Classifieds found successfully",
						data: []
					})
				}

				else {
					console.log("classifieds found ", classifieds)
					var resultclassifieds = [];

					for (var i in classifieds) {
						resultclassifieds[i] = classifieds[i].toObject();
						resultclassifieds[i].classified_image = baseUrl + classified_image_url + resultclassifieds[i].classified_image;
						getTimeAgo(resultclassifieds[i].createdAt, callback)
						function callback(time_ago) {
							resultclassifieds[i].time_ago = time_ago;

							if (resultclassifieds.length == classifieds.length) {
								resultclassifieds.sort(function (a, b) {
									return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
								});

								res.statusCode = suc;
								res.json({
									status: 1,
									message: "Classifieds found successfully",
									data: resultclassifieds
								})
							}


							// var ast = HTML.parse(resultBlogs[i].blog); 
							// console.log(ast);
							// resultBlogs[i].blog = ast;
						}
					}

				}

			})
		}
	})
});




/*---------------------------------------
			   (41) Get Classified Detail
 ----------------------------------------*/
router.post('/get_classified_detail', function (req, res) {
	console.log("hiii get_classified_detail")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {

			Classified.getClassifiedDetail(params, function (err, classifiedDetail) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {

					console.log("classifiedDetail found ", classifiedDetail)
					classifiedDetail.classified_image = baseUrl + classified_image_url + classifiedDetail.classified_image;
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Classified Detail found successfully",
						data: classifiedDetail
					})

				}
			})
		}
	})
});


/*---------------------------------------------------------
		(42) Ask For Recommendation
----------------------------------------------------------*/
router.post('/ask_for_recommendation', function (req, res) {
	console.log("hiii /admin/ask_for_recommendation", req.body)

	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	params.status = 'P';
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = String(authUser._id);
					Recommendation.findOne({_id: params.user_id, status: {$ne: "P"}}, function(err, recommendationExist) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						} else if(!recommendationExist) {
							res.json({
								status: 0,
								message: "Recommendation Request already sent!!",
							})
						} else {
							Recommendation.addNewRecommendation(params, function (err, newRecommendation) {
								if (err) {
									res.statusCode = er;
									res.json({
										status: 0,
										message: "Something went wrong!",
										data: err
									})
								}
								else {
									res.statusCode = suc;
									res.json({
										status: 1,
										message: "Recommendation added successfully",
										data: newRecommendation
									})
		
								}
							})
						}
					})
					
				}
			})
		}
	}

});



/*----------------------------------------------------
					 (43) Add Comment to Poll
  ----------------------------------------------------*/
router.post('/add_comment_poll', function (req, res) {
	console.log("hiii add_comment_poll")
	var params = req.body;
	params.status = 'A';
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = String(authUser._id);
			CommentPoll.addNewCommentPoll(params, function (err, comment) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {
					console.log("Comment added ", comment);
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Comment Added"
					})
				}
			})
		}
	})
});




/*----------------------------------------------------
					 (44) Add Vote to Poll
  ----------------------------------------------------*/
router.post('/add_vote_poll', function (req, res) {

	console.log("hiii add_vote_poll")
	var params = req.body;
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = String(authUser._id);
			params.status = 'A';

			console.log("data find succesfullly ");

			VoteToPoll.addVoteToPoll(params, function (err, votePoll) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong",
						data: err

					})
				}
				else {
					console.log("data added succesfullly ", votePoll);
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Vote Added"
					})
				}
			})

		}
	})

});




/*---------------------------------------
			   (45) Get Active Polls
 ----------------------------------------*/
router.post('/get_active_polls', function (req, res) {
	console.log("hiii get_active_polls")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {

					Poll.getActivePolls(function (err, activePolls) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("activePolls found ", activePolls)
							var resultActivePolls = [];
							for (var i in activePolls) {
								resultActivePolls[i] = activePolls[i].toObject();
								resultActivePolls[i].poll_image = baseUrl + poll_image_url + resultActivePolls[i].poll_image;
								getPollTimeAgo(resultActivePolls[i], pollCallback)
								function pollCallback(time_ago) {
									resultActivePolls[i].time_ago = time_ago;

								}
							}

							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Active Polls found successfully",
								data: resultActivePolls
							})

						}

					})
					function getPollTimeAgo(activePoll, pollCallback) {
						getTimeAgo(activePoll.createdAt, callback)
						function callback(time_ago) {
							pollCallback(time_ago)
						}

					}
				}
			})
		}
	}
});






/*---------------------------------------
			   (46) Get Poll Detail
 ----------------------------------------*/
router.post('/get_poll_detail', function (req, res) {
	console.log("hiii get_poll_detail")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			var userId = String(authUser._id);
			Poll.getPollDetail(params, function (err, pollDetail) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {

					//  console.log("pollDetail found ",pollDetail)
					var resultPollDetail = pollDetail.toObject();
					getTimeAgo(resultPollDetail.createdAt, callback)
					function callback(time_ago) {
						resultPollDetail.poll_image = baseUrl + poll_image_url + resultPollDetail.poll_image;
						resultPollDetail.time_ago = time_ago;
						PollOption.getoptionsOfPoll(params, function (err, options) {
							//console.log(options)
							//resultPollDetail.options = options;

							var dt1 = resultPollDetail.start_time;
							var dt2 = resultPollDetail.end_time;

							console.log(dt2.getTime())
							var diff = (dt2.getTime() - dt1.getTime()) / 1000;
							diff /= (60 * 60);
							console.log(Math.round(diff))
							resultPollDetail.hoursForPoll = Math.round(diff);
							//  console.log(resultPollDetail)
							var resultOptions = [];
							var totalVotes = 0;
							for (var i in options) {
								var optionsObject = options[i].toObject();

								getVotingcount(optionsObject, i, userId, optionCallback)
								function optionCallback(votes, i, optionsingle, myVotePoll) {
									console.log("hii optionCallback")
									totalVotes = totalVotes + votes;
									optionsingle.votesCount = votes;
									optionsingle.myVotePoll = myVotePoll;
									console.log(optionsingle)
									resultOptions.push(optionsingle);
									if (resultOptions.length == options.length) {
										//console.log("iiiiiiiiiiiii ",i)
										for (var i in resultOptions) {
											console.log("hii for in resultoptions")
											console.log("resultoptionsssssssssssss ", resultOptions[i])
											var percent = (resultOptions[i].votesCount / totalVotes) * 100;
											resultOptions[i].percent = Math.round(percent);
											if (!resultOptions[i].percent) {
												console.log("hii not")
												resultOptions[i].percent = 0;
											}
										}

										var sortedData = resultOptions.sort(function (a, b) {
											// here a , b is whole object, you can access its property

											// it will return the difference to sort function and then 
											// sort compare that difference is equal to 0 or smaller than 0 or 
											// greater than 0. on the basis of that it will give sorted number list
											return a.option_no - b.option_no;
										})
										resultPollDetail.options = sortedData

										console.log(resultPollDetail)
										CommentPoll.getCommentsOnPoll(params, function (err, commentsOnPoll) {
											var commentsOnPollResult = [];
											for (var i in commentsOnPoll) {
												commentsOnPollResult[i] = commentsOnPoll[i].toObject();
												commentsOnPollResult[i].user_id.profile_image = baseUrl + profile_image_url + commentsOnPollResult[i].user_id.profile_image;
												console.log("commentsOnPollResult[i] ", commentsOnPollResult[i])
												getTimeAgo(commentsOnPollResult[i].createdAt, commentcallback)
												function commentcallback(time_ago) {
													commentsOnPollResult[i].time_ago = time_ago;
												}
											}
											resultPollDetail.comments = commentsOnPollResult;
											res.statusCode = suc;
											res.json({
												status: 1,
												message: "Poll Detail found successfully",
												data: resultPollDetail
											})

										})
									}

								}
							}
						})
					}
				}
			})
		}
	})

	function getVotingcount(option, i, userId, optionCallback) {
		VoteToPoll.getVotesOfPollOption(option._id, function (err, votes) {
			var myVotePoll = false;
			for (var i in votes) {
				if (votes[i].user_id == userId) {
					myVotePoll = true;
				}
			}
			optionCallback(votes.length, i, option, myVotePoll)
		})
	}
});



// /*---------------------------------------------------------
//         (47) Close the Poll
// ----------------------------------------------------------*/

//   router.post('/close_poll',function(req,res){
//     console.log("hiii close_poll")

//     var baseUrl   = req.protocol+ '://' + req.get('host');
//     var params = req.body;

//    Poll.changeStatusToClosed(params,function (err,closedPoll){
//                 if(err){
//                         console.log(" error-- ",err);
//                         res.json({
// 					                  status : 0,
// 					                  message : "Something went wrong!",           
// 					                  data : err  
// 					              })  
//                   }
//                   else{ 

//                        res.json({
//                                  status     : 1,
//                                  message    : "successfully changed status",
//                                  data       : closedPoll
//                               })           
//                    }
//              })

//       });





/*---------------------------------------
			   (47) Get Closed Polls
 ----------------------------------------*/
router.post('/get_closed_polls', function (req, res) {
	console.log("hiii get_closed_polls")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					PollSetting.getPollSettings(function (err, pollStatus) {
						if (pollStatus.past_polls_visibility_status == false) {
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Admin has blocked the Closed Polls"

							})
						}
						else if (pollStatus.past_polls_visibility_status == true) {
							var no_of_posts_shown = pollStatus.no_of_past_polls_visible;
							Poll.getClosedPolls(no_of_posts_shown, function (err, closedPolls) {
								if (err) {
									console.log(" error-- ", err);
									res.statusCode = er;
									res.json({
										status: 0,
										message: "Something went wrong!",
										data: err
									})
								}

								else {
									console.log("closedPolls found ", closedPolls)
									var resultClosedPolls = [];
									for (var i in closedPolls) {
										resultClosedPolls[i] = closedPolls[i].toObject();
										resultClosedPolls[i].poll_image = baseUrl + poll_image_url + resultClosedPolls[i].poll_image;
										getPollTimeAgo(resultClosedPolls[i], pollCallback)
										function pollCallback(time_ago) {
											resultClosedPolls[i].time_ago = time_ago;

										}
									}

									res.statusCode = suc;
									res.json({
										status: 1,
										message: "Closed Polls found successfully",
										data: resultClosedPolls
									})

								}


							})
						}
					})
					function getPollTimeAgo(closedPoll, pollCallback) {
						getTimeAgo(closedPoll.createdAt, callback)
						function callback(time_ago) {
							pollCallback(time_ago)
						}

					}

				}
			})
		}
	}
});



/*---------------------------------------
			   (48) Get Contact Detail
 ----------------------------------------*/
router.post('/get_contact_detail', function (req, res) {
	console.log("hiii get_contact_detail")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {

					Contact.getContactDetail(function (err, contactDetail) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {

							console.log("contactDetail found ", contactDetail)
							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Contact Detail found successfully",
								data: contactDetail
							})

						}
					})
				}
			})
		}
	}
});

/*---------------------------------------
				(49) Get Service Hours
  ----------------------------------------*/
router.post('/get_service_hours', function (req, res) {
	console.log("hiii get_service_hours")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					ServiceHour.getServiceHoursDetail(function (err, servicehours) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {

							console.log("servicehours found ", servicehours)
							Contact.getContactDetail(function (err, contactInfo) {
								var sendData = servicehours.toObject();
								sendData.facebook_link = contactInfo.facebook_link;
								sendData.twitter_link = contactInfo.twitter_link;
								sendData.instagram_link = contactInfo.instagram_link;
								res.statusCode = suc;
								res.json({
									status: 1,
									message: "Service hours found successfully",
									data: sendData
								})
							})


						}
					})
				}
				else {

					ServiceHour.getServiceHoursDetail(function (err, servicehours) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {

							console.log("servicehours found ", servicehours)
							Contact.getContactDetail(function (err, contactInfo) {
								var sendData = servicehours.toObject();
								sendData.facebook_link = contactInfo.facebook_link;
								sendData.twitter_link = contactInfo.twitter_link;
								sendData.instagram_link = contactInfo.instagram_link;
								res.statusCode = suc;
								res.json({
									status: 1,
									message: "Service hours found successfully",
									data: sendData
								})
							})


						}
					})
				}
			})
		}
	}
});





/*---------------------------------------
			   (50) Get About Pages
 ----------------------------------------*/
router.post('/get_about_pages', function (req, res) {
	console.log("hiii get_about_pages")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {

					AboutPage.getAboutPages(function (err, aboutpages) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("aboutpages found ", aboutpages)
							for (var i in aboutpages) {
								aboutpages[i].about_cover_image = baseUrl + about_image_url + aboutpages[i].about_cover_image;
							}

							res.statusCode = suc;
							res.json({
								status: 1,
								message: "About Pages found successfully",
								data: aboutpages
							})

						}

					})
				}
			})
		}
	}
});




/*---------------------------------------
			   (51) Get About Detail
 ----------------------------------------*/
router.post('/get_about_detail', function (req, res) {
	console.log("hiii get_about_detail")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {

			AboutPage.getAboutpageDetail(params, function (err, aboutPageDetail) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {
					console.log("aboutPageDetail found ", aboutPageDetail)
					aboutPageDetail.about_cover_image = baseUrl + about_image_url + aboutPageDetail.about_cover_image;

					SocialShare.getSocialShareContent(function (err, socialContent) {
						res.statusCode = suc;
						res.json({
							status: 1,
							message: "About Page Detail found successfully",
							data: aboutPageDetail,
							socialContent: socialContent
						})

					})

				}
			})
		}
	})
});




/*---------------------------------------
			   (52) Change Paswword
 ----------------------------------------*/
router.post('/change_password', function (req, res) {
	console.log("hiii change_password")
	var params = req.body;
	// var password = passwordhash.generate(params.new_password);
	// console.log("passs ",password)
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {

			var check = passwordhash.verify(params.old_password, authUser.password);
			console.log(check)
			if (check == true) {
				params.user_id = authUser._id;
				params.password = passwordhash.generate(params.new_password);
				User.changeUserPassword(params, function (err, updatedUser) {
					if (err) {
						console.log(" error-- ", err);
						res.statusCode = er;
						res.json({
							status: 0,
							message: "Something went wrong!",
							data: err
						})
					}
					else {

						console.log("updatedUser found ", updatedUser)
						//    aboutPageDetail.about_cover_image = baseUrl + about_image_url + aboutPageDetail.about_cover_image;
						res.statusCode = suc;
						res.json({
							status: 1,
							message: "Password Changed successfully",
							data: updatedUser
						})

					}
				})

			}
			else {
				res.statusCode = er;
				res.json({
					status: 0,
					message: "Password doesnot matches"

				})
			}

		}
	})
});




/*----------------------------------------------------
					 (53) Add Note
  ----------------------------------------------------*/
router.post('/add_note', function (req, res) {

	console.log("hiii add_note")
	var params = req.body;
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = String(authUser._id);
			params.status = 'A';

			console.log("data find succesfullly ");

			Note.addNewNote(params, function (err, note) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {
					console.log("data added succesfullly ", note);
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "note Added",
						data: note
					})
				}
			})

		}
	})

});


router.put('/update_note', function (req, res) {

	console.log("hiii update_note")
	var params = req.body;
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = String(authUser._id);
			params.status = 'A';

			console.log("data find succesfullly ");

			Note.updateNote(params, function (err, note) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {
					console.log("Data Updated succesfullly ", note);
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "note updated",
						data: note
					})
				}
			})

		}
	})

});



/*---------------------------------------
			   (54) Get Notes
 ----------------------------------------*/
router.post('/get_notes', function (req, res) {
	console.log("hiii get_notes")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = suc;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = authUser._id;
					Note.getNotes(params, function (err, notes) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("notes found ", notes)
							var resultNotes = [];
							if (notes.length == 0) {
								res.statusCode = suc;
								res.json({
									status: 1,
									message: "Notes found successfully",
									data: []
								})
							}
							else {

								for (var i in notes) {
									resultNotes[i] = notes[i].toObject();

									getTimeAgo(resultNotes[i].createdAt, callback)
									function callback(time_ago) {
										resultNotes[i].time_ago = time_ago;

										if (resultNotes.length == notes.length) {
											res.statusCode = suc;
											res.json({
												status: 1,
												message: "Notes found successfully",
												data: resultNotes
											})
										}

									}
								}
							}

						}

					})
				}
			})
		}
	}
});




/*----------------------------------------------------
					 (53) Add Prayer
  ----------------------------------------------------*/
router.post('/add_prayer', function (req, res) {

	console.log("hiii add_prayer")
	var params = req.body;

	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = String(authUser._id);
			params.status = 'A';
			params.answered = false;
			Prayer.addNewPrayer(params, function (err, prayer) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {
					console.log("prayer added succesfullly ", prayer);
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "prayer Added",
						data: prayer
					})
				}
			})

		}
	})

});




/*----------------------------------------------------
					 (54) Add Pray to prayer
  ----------------------------------------------------*/
router.post('/add_pray_to_prayer', function (req, res) {

	console.log("hiii add_pray_to_prayer")
	var params = req.body;
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = String(authUser._id);
			params.prayer_status = 'Y';
			// LikeWallPost.checkLikeWallPost(params,function (err,check) {
			// 	if(err){
			// 		console.log(" error-- ",err);
			// 		 res.json({
			// 							status : 0,
			// 							message : "Something went wrong!",						
			// 							data : err	
			// 					})	
			// 	}
			// 	else{
			//	console.log("data find succesfullly ");
			//	if(check.length === 0) {

			PrayToPrayer.addPrayToPrayer(params, function (err, pray) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 1,
						message: "Something went wrong",
						data: err
					})
				}
				else {
					console.log("data added succesfullly ", pray);
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Pray Added"
					})
				}
			})
			//	}

			// else {

			// 	LikeWallPost.changeLikeStatus(check[0]._id, params.like_status, function (err,likeGroupPost) {
			// 		 if(err){
			//             	console.log(" error-- ",err);
			//             	 res.json({
			// 						status : 0,
			// 						message : "Something went wrong!",						
			// 						data : err	
			// 				})	
			//           }
			//           else {
			//           	console.log("data updated succesfullly ");
			//           	res.json({
			// 						status		: 1,
			// 						message		: "status Changed"
			// 					})
			//           }
			// 	})
			// }
			// }
			//})
		}
	})

});





/*----------------------------------------------------
					 (55) Add Comment to Prayer
  ----------------------------------------------------*/
router.post('/add_comment_prayer', function (req, res) {
	console.log("hiii add_comment_prayer")
	var params = req.body;
	params.status = 'A';
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = String(authUser._id);
			CommentPrayer.addNewCommentPrayer(params, function (err, comment) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {
					console.log("Comment added ", comment);
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Comment Added"
					})
				}
			})
		}
	})
});



/*---------------------------------------------------------
		(56) Answer a prayer
----------------------------------------------------------*/

router.post('/answer_a_prayer', function (req, res) {
	console.log("hiii answer_a_prayer")

	var baseUrl = req.protocol + '://' + req.get('host');
	var params = req.body;
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			Prayer.changeAnsweredStatus(params, function (err, prayer) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				else {
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "successfully Answered",
						data: prayer
					})
				}
			})
		}
	})

});



/*---------------------------------------
			   (57) Get prayer_categories
 ----------------------------------------*/
router.post('/get_prayer_categories', function (req, res) {
	console.log("hiii get_prayer_categories")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = authUser._id;
			PrayerCategory.getAllPrayerCategories(function (err, prayerCategories) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}

				else {
					console.log("prayerCategories found ", prayerCategories)
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Prayer Categories found successfully",
						data: prayerCategories
					})



				}

			})
		}
	})
});





/*---------------------------------------
			   (58) Get Prayers
 ----------------------------------------*/
router.post('/get_prayers', function (req, res) {
	console.log("hiii get_prayers")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = authUser._id;
					Prayer.getPrayers(function (err, prayers) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("prayers found ", prayers)
							if (prayers.length == 0) {
								res.statusCode = suc;
								res.json({
									status: 1,
									message: "Prayers found successfully",
									data: []
								})
							}
							else {
								var resultPrayers = [];
								var prayerCheck = [];
								for (var i in prayers) {
									resultPrayers[i] = prayers[i].toObject();
									var dat = resultPrayers[i].createdAt;
									var month = dat.getMonth() + 1
									var created_date = month + "/" + dat.getDate() + "/" + dat.getFullYear();
									var created_time = dat.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
									resultPrayers[i].created_date = created_date;
									resultPrayers[i].created_time = created_time;
									getPrayersOnSinglePray(resultPrayers[i], i, callback)
									function callback(prays, i) {
										console.log("prayyyyyyyyyyyyys ", prays)
										resultPrayers[i].prayesCount = prays
										prayerCheck.push(resultPrayers[i])
										if (prayerCheck.length == prayers.length) {
											if (params.type == "LIVE") {
												resultPrayers.sort(function (a, b) {
													return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
												});
											}
											else if (params.type == "TREND") {
												resultPrayers.sort(function (a, b) {
													return (b.prayesCount < a.prayesCount) ? -1 : ((b.prayesCount > a.prayesCount) ? 1 : 0);
												});
											}
											res.statusCode = suc;
											res.json({
												status: 1,
												message: "Prayers found successfully",
												data: resultPrayers
											})
										}
									}
								}
							}
						}

					})
				}
			})
		}
	}

	function getPrayersOnSinglePray(resultPrayer, i, callback) {
		PrayToPrayer.getPraysOfPrayer(resultPrayer._id, function (err, prays) {
			callback(prays.length, i)
		})
	}
});




/*---------------------------------------
			   (59) Get Prayers
 ----------------------------------------*/
router.post('/get_detail_of_prayer', function (req, res) {
	console.log("hiii get_detail_of_prayer")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = authUser._id;
					Prayer.getPrayerDetail(params, function (err, prayer) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("prayer found ", prayer)

							var resultPrayer = [];
							resultPrayer = prayer.toObject();
							resultPrayer.myPrayer = false;
							if (resultPrayer.user_id == params.user_id) {
								resultPrayer.myPrayer = true;
							}

							var dat = resultPrayer.createdAt;
							var month = dat.getMonth() + 1
							var created_date = month + "/" + dat.getDate() + "/" + dat.getFullYear();
							var created_time = dat.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
							resultPrayer.created_date = created_date;
							resultPrayer.created_time = created_time;
							PrayToPrayer.getPraysOfPrayer(params.prayer_id, function (err, prays) {
								console.log("prays found ", prays.length)
								resultPrayer.isPray = false;
								for (var i in prays) {
									if (params.user_id == prays[i].user_id) {
										resultPrayer.isPray = true;
									}
								}

								resultPrayer.prayesCount = prays.length;
								CommentPrayer.getCommentsOnPrayer(params, function (err, comments) {
									console.log("hii callback ", comments)
									if (comments.length == 0) {
										resultPrayer.comments = [];
										res.statusCode = suc;
										res.json({
											status: 1,
											message: "Prayer Detail found successfully",
											data: resultPrayer
										})
									}
									var resultComments = [];
									var checkLength = [];
									for (var i in comments) {
										resultComments[i] = comments[i].toObject();
										resultComments[i].user_id.profile_image = baseUrl + profile_image_url + resultComments[i].user_id.profile_image;
										getTimeAgo(resultComments[i].createdAt, callback)
										function callback(time_ago) {
											resultComments[i].time_ago = time_ago;
											checkLength.push(resultComments[i])
											console.log("after adding time ", resultComments)
											console.log(resultComments.length, comments.length)
											if (checkLength.length == comments.length) {
												resultPrayer.comments = resultComments;
												res.statusCode = suc;
												res.json({
													status: 1,
													message: "Prayer Detail found successfully",
													data: resultPrayer
												})
											}
										}
									}

								})

							})

						}

					})
				}
			})
		}

	}


});


/*---------------------------------------
			   (60) Get Giving Section
 ----------------------------------------*/
router.post('/get_giving_section', function (req, res) {
	console.log("hiii get_giving_section")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = authUser._id;
					GivingUrl.getGivingUrl(function (err, givingurl) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("givingurl found ", givingurl)

							BlogCategory.getGivingCategoryId(function (err, categoryId) {
								var giving_id = categoryId._id;
								Blog.getGivingBlogs(giving_id, function (err, givingBlogs) {
									if (err) {
										console.log(" error-- ", err);
										res.statusCode = er;
										res.json({
											status: 0,
											message: "Something went wrong!",
											data: err
										})
									}
									else {
										console.log("givingBlogs found ", givingBlogs)
										var givingResult = [];
										for (var i in givingBlogs) {
											givingResult[i] = givingBlogs[i].toObject();
											givingResult[i].blog_image = baseUrl + blog_image_url + givingResult[i].blog_image;
											getTimeAgo(givingResult[i].createdAt, callback)
											function callback(time_ago) {
												console.log("time_ago ", time_ago)
												givingResult[i].time_ago = time_ago;
											}

										}

										var sendData = {
											giving: givingurl,
											teaching: givingResult
										}
										res.statusCode = suc;
										res.json({
											status: 1,
											message: "Giving Section get successfully",
											data: sendData
										})
									}

								})
							})

						}

					})
				}
			})
		}
	}


});



// /*---------------------------------------
// 		    (61) get_news_urls 
//  ----------------------------------------*/
// router.post('/get_news_urls',function(req,res){
// 	console.log("hiii get_news_urls")
// 	var params          = req.body;
//     var baseUrl 	= req.protocol+ '://' + req.get('host');
// 	 User.getProfile(params,function(err,authUser) {
//           				console.log('auth user ',authUser)
// 	          	if(authUser === null) {
// 	          		res.statusCode = ses;
// 	          			 res.json({
// 				               status		: 2,
// 		    	               message		: "It seems like you have logged in from another device. Please Sign in again."

// 			        	})	
// 	          	}
// 	      else {
// 	             params.user_id = authUser._id;
//                     NewsUrl.getNewsUrls(function (err,newsUrls) {
// 				      if(err)
// 				      {
// 				        console.log(" error-- ",err);
// 				        res.statusCode = er;
// 				         res.json({
// 								        status : 0,
// 								        message : "Something went wrong!",           
// 							 	        data : err  
// 						          })
// 				      }

// 				      else {
// 				         console.log("newsUrls found ",newsUrls)
//                             var resultNewsUrls =[];
// 				     for(var i in newsUrls) {
//                            resultNewsUrls[i] = newsUrls[i].toObject();
//                            resultNewsUrls[i].news_image = baseUrl + news_image_url + resultNewsUrls[i].news_image;
//                             var dat = resultNewsUrls[i].createdAt;
//                             var month = dat.getMonth() + 1;
//                             resultNewsUrls[i].date = dat.getFullYear() + '-' + month + '-' + dat.getDate();
//                             resultNewsUrls[i].time = dat.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
//                         }

// 			                  res.statusCode = suc;
// 					          res.json({
// 							               status    : 1,
// 							               message   : "News Urls found successfully",
// 							               data      : resultNewsUrls
// 							           })    


// 				      }

// 				    })
// 	      }
// 	})


// });


/*---------------------------------------
		   (61) get_news_urls 
 ----------------------------------------*/
router.post('/get_news_urls', function (req, res) {
	console.log("hiii get_news_urls")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = authUser._id;
					NewsUrl.getNewsUrls(function (err, newsUrls) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("newsUrls found ", newsUrls)


							res.statusCode = suc;
							res.json({
								status: 1,
								message: "News Urls found successfully",
								data: newsUrls
							})


						}

					})
				}
			})
		}
	}


});



/*---------------------------------------
			   (62) get_store_urls 
 ----------------------------------------*/
router.post('/get_store_urls', function (req, res) {
	console.log("hiii get_store_urls")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = authUser._id;
					OnlineStore.getStoreUrls(function (err, storeUrls) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}

						else {
							console.log("storeUrls found ", storeUrls)


							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Store Urls found successfully",
								data: storeUrls
							})


						}

					})
				}
			})
		}
	}


});

/*---------------------------------------
			   (63) get_bible 
 ----------------------------------------*/
router.post('/get_bible', function (req, res) {
	console.log("hiii get_bible")
	var baseUrl = req.protocol + '://' + req.get('host');
	var params = req.body;
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (err) {
			res.json({
				status: 0,
				message: "Something went wrong!",
				data: err
			})
		} else if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."
			})
		}
		else {
			console.log('auth', authUser)
			var bibleUrl = { bible_url: baseUrl + bible_url + '178297329837.pdf' }
			res.statusCode = suc;
			res.json({
				status: 1,
				message: "Bible found successfully",
				data: bibleUrl
			})

			// Bible.getBibleLink(params, function(err, bible) {
			// 	console.log('bible', bible)
			// 	if (err) {
			// 		console.log(" error-- ", err);
			// 		res.statusCode = er;
			// 		res.json({
			// 			status: 0,
			// 			message: "Something went wrong!",
			// 			data: err
			// 		})
			// 	} else {
			// 		res.statusCode = suc;
			// 		res.json({
			// 			status: 1,
			// 			message: "Bible found successfully",
			// 			data: bible
			// 		})
			// 	}
			// })
		}
	})
});



/*---------------------------------------
			   (64) get_other_profile 
 ----------------------------------------*/
router.post('/get_other_profile', function (req, res) {
	console.log("hiii get_other_profile")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {

			User.getOtherUserProfile(params, function (err, profile) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}

				else {
					console.log("profile found ", profile)
					profileResult = profile.toObject();
					profileResult.profile_image = baseUrl + profile_image_url + profileResult.profile_image;
					if (profileResult.dob == null) {
						profileResult.dob = "";
					}
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Other User Profile found successfully",
						data: profileResult
					})


				}

			})
		}
	})


});


/*---------------------------------------
			   (65) get Users 
 ----------------------------------------*/
router.post('/get_other_users', function (req, res) {
	console.log("hiii get_other_users")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = authUser._id;
			var sendParams = { user_id: params.other_user_id };
			User.getOtherUserProfile(sendParams, function (err, profile) {
				console.log("profile ", profile)
				if (profile.gender == "Male") {
					console.log("hii if")
					params.gender = "Female"
				}
				else {
					console.log("hii else")
					params.gender = "Male"
				}
				User.getAllOtherUsers(params, function (err, users) {
					if (err) {
						console.log(" error-- ", err);
						res.statusCode = er;
						res.json({
							status: 0,
							message: "Something went wrong!",
							data: err
						})
					}

					else {
						console.log("users found ", users)
						for (var i in users) {
							users[i].profile_image = baseUrl + profile_image_url + users[i].profile_image;

						}


						res.statusCode = suc;
						res.json({
							status: 1,
							message: "Users found successfully",
							data: users
						})


					}

				})
			})
		}
	})


});



/*---------------------------------------
			   (66) get  Users 
 ----------------------------------------*/
router.post('/get_users', function (req, res) {
	console.log("hiii get_users")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = authUser._id;

			User.getAllUsers(params, function (err, users) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}

				else {
					console.log("users found ", users)


					for (var i in users) {
						users[i].profile_image = baseUrl + profile_image_url + users[i].profile_image;

					}


					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Users found successfully",
						data: users
					})


				}

			})
		}
	})


});


/*---------------------------------------
			   (66) get  Users For Engagement
 ----------------------------------------*/
router.post('/get_users_for_engagement', function (req, res) {
	console.log("hiii get_users_for_engagement")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = authUser._id;

			User.getAllUsers(params, function (err, users) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}

				else {

					Betrothed.getAllBetrotheds(function (err, betrotheds) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						} else {
							for (var i in users) {
								users[i].profile_image = baseUrl + profile_image_url + users[i].profile_image;
							}

							
							console.log('users', users)
							console.log('betrotheds', betrotheds)
							var result = getDifference(users, betrotheds)

							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Users found successfully",
								data: result
							})

						}
					})
				}
			})
		}
	})
});




/*---------------------------------------
			   (67) Search  Users 
 ----------------------------------------*/
router.post('/search_users', function (req, res) {
	console.log("hiii search_users")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = authUser._id;

			User.searchUsers(params, function (err, users) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}

				else {
					Betrothed.getAllBetrotheds(function (err, betrotheds) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						} else {
							for (var i in users) {
								users[i].profile_image = baseUrl + profile_image_url + users[i].profile_image;
							}

							
							console.log('users', users)
							console.log('betrotheds', betrotheds)
							var result = getDifference(users, betrotheds)

							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Users found successfully",
								data: result
							})

						}
					})

				}

			})
		}
	})


});





/*-------------------------------------------------------
			   (68) Get Recently added music 
 ------------------------------------------------------*/
router.post('/recently_added_music', function (req, res) {
	console.log("hiii recently_added_music")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			// params.user_id = authUser._id;

			SongToAlbum.recentlyAdded(params, function (err, songs) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}

				else {
					console.log("songs found ", songs)

					var songsResult = [];
					for (var i in songs) {
						songsResult[i] = songs[i].toObject();
						songsResult[i].song_file = baseUrl + album_song_url + songsResult[i].song_file;
						songsResult[i].album_id.album_image = baseUrl + album_image_url + songsResult[i].album_id.album_image
					}

					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Music found successfully",
						data: songsResult
					})


				}

			})
		}
	})


});



/*-------------------------------------------------------
			   (68) remove_account 
 ------------------------------------------------------*/
router.post('/remove_account', function (req, res) {
	console.log("hiii remove_account")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = authUser._id;

			User.removeMyAccount(params, function (err, removedAccount) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}

				else {
					console.log("removedAccount found ", removedAccount)

					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Your account has been removed.",
						data: removedAccount
					})


				}

			})
		}
	})


});

/*-------------------------------------------------------
			   (68) notification_settings 
 ------------------------------------------------------*/
router.post('/notification_settings', function (req, res) {
	console.log("hiii notification_settings")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = authUser._id;

			NotificationSetting.findSettingExistAndUpdate(params, function (err, setting) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}

				else {
					if (setting == null) {
						NotificationSetting.addNewNotificationSetting(params, function (err, newSetting) {
							console.log("New Setting found ", newSetting)

							res.statusCode = suc;
							res.json({
								status: 1,
								message: "Setting Changed.",
								data: newSetting
							})

						})
					}
					else {
						res.statusCode = suc;
						res.json({
							status: 1,
							message: "Setting Changed.",
							data: setting
						})
					}


				}

			})
		}
	})


});






/*---------------------------------------
			   (70)   get_group_notification_settings 
 ----------------------------------------*/
router.post('/get_group_notification_settings', function (req, res) {
	console.log("hiii get_group_notification_settings")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
	checkAppVersion(appVersion, versionCallback)
	function versionCallback(updateRequired) {
		if (updateRequired) {
			res.statusCode = up;
			res.json({
				status: 3,
				message: "New version arrived! Please update your app."
			})
		}
		else {

			User.getProfile(params, function (err, authUser) {
				console.log('auth user ', authUser)
				if (authUser === null) {
					res.statusCode = ses;
					res.json({
						status: 2,
						message: "It seems like you have logged in from another device. Please Sign in again."

					})
				}
				else {
					params.user_id = String(authUser._id);

					Notification.getNotificationList(params, function (err, notificationsPost) {
						if (err) {
							console.log(" error-- ", err);
							res.statusCode = er;
							res.json({
								status: 0,
								message: "Something went wrong!",
								data: err
							})
						}
						else {

							Notification.getNotificationBetrothds(params, function (err, betrothedNotifications) {
								// var betrothedNotificationsFinal = [];
								// for(var i in betrothedNotifications) {
								//     betrothedNotificationsFinal[i] = betrothedNotifications[i].toObject();
								//     betrothedNotificationsFinal[i].group_id = { _id : "", group_name : ""};
								//     betrothedNotificationsFinal[i].post_id = { _id : "", group_post_status : ""};
								// }

								var notifications = notificationsPost.concat(betrothedNotifications)

								var finalNotifocations = [];

								for (var i in notifications) {
									//  console.log("hiii notifications ",notifications[i])
									finalNotifocations[i] = notifications[i].toObject();
									if (finalNotifocations[i].group_id == "") {
										finalNotifocations[i].group_id = { _id: "", group_name: "" };
									}
									if (finalNotifocations[i].post_id == "") {
										finalNotifocations[i].post_id = { _id: "", group_post_status: "" };
									}

									getTimeAgo(finalNotifocations[i].createdAt, callback)
									function callback(time_ago) {
										//	console.log("time_ago ",time_ago)
										finalNotifocations[i].time_ago = time_ago;
									}
								}
								finalNotifocations.sort(function (a, b) {
									return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
								});

								Group.getAllGroupsNotification(params, function (err, groups) {
									//   console.log("groupsssssss ",groups)
									var groupsAdded = [];
									var groupsResult = [];
									for (var i in groups) {
										groupsResult[i] = groups[i].toObject();
										//console.log("hiii groups ",groups[i].users)
										for (var j in groupsResult[i].users) {
											//	console.log("groups[i].users",groupsResult[i].users[j])
											if (groupsResult[i].users[j] == params.user_id) {
												console.log("groupsResult[i]._id matchedddddddddddddddd ", groupsResult[i]._id)
												//console.log("hiiiii")
												groupsAdded.push({ group_id: groupsResult[i]._id, group_name: groupsResult[i].group_name, group_image: baseUrl + group_image_url + groupsResult[i].group_image })
												// }
											}
										}
									}
									//  console.log("hiii groupsAdded ",groupsAdded)
									var checkGroup = [];
									if (groupsAdded.length == 0) {
										var sendData = {
											notifications: finalNotifocations,
											notification_settings: [],
											sound_status: authUser.notification_sound
										}
										res.statusCode = suc;
										res.json({
											status: 1,
											message: "Settings found",
											data: sendData
										})
									}
									else {
										for (var i in groupsAdded) {
											checkNotificationStatus(groupsAdded[i].group_id, params.user_id, i, callback)
											function callback(i, status) {
												//	console.log("hiii ")
												groupsAdded[i].status = status;
												checkGroup.push(groupsAdded[i]);
												console.log(checkGroup.length)
												if (checkGroup.length == groupsAdded.length) {
													//console.log("length completed")
													//console.log("groupsAdded ",groupsAdded)
													var sendData = {
														notifications: finalNotifocations,
														notification_settings: groupsAdded,
														sound_status: authUser.notification_sound
													}
													res.statusCode = suc;
													res.json({
														status: 1,
														message: "Settings found",
														data: sendData
													})
												}

											}
										}
									}

								})  ///////getAllGroupsNotification
							}) ///// betrothed notifications
						}

					}) ////post notifications


				}
			})
		}
	}
	function checkNotificationStatus(group_id, user_id, i, callback) {
		//	console.log("hii checkNotificationStatus ",group_id,user_id)
		NotificationSetting.getNotificationStatus(group_id, user_id, function (err, status) {
			//console.log("status ",status)
			if (status == null) {
				//	console.log("nullll")
				callback(i, 'ON')
			}
			else {
				callback(i, status.status)
			}
		})
	}

});



/*-------------------------------------------------------
				(68) change_sound_status 
  ------------------------------------------------------*/
router.post('/change_sound_status', function (req, res) {
	console.log("hiii change_sound_status")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			params.user_id = authUser._id;

			User.updateSoundStatus(params, function (err, user) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}

				else {

					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Setting Changed.",
						data: user
					})



				}

			})
		}
	})


});



/*----------------------------------------------------
				  (7)  Forgot Password  
   ----------------------------------------------------*/

router.post('/forgot_password', function (req, res) {
	console.log("hiii forgot_password")


	var baseUrl = req.protocol + '://' + req.get('host');
	var params = req.body;
	console.log(params, baseUrl)
	var email = params.email;
	var token = crypto.randomBytes(48).toString('hex');

	var paramsS = {
		token: token,
		email: email
	}

	console.log(token, paramsS)

	User.setToken(paramsS, function (err, user) {
		if (user == null) {
			console.log(user)
			console.log(err)
			res.statusCode = er;
			res.json({
				status: 0,
				message: "email not exist"
			})
		}
		else {
			console.log(user)

			var transporter = nodemailer.createTransport({
				service: 'gmail',
				port: 465,
				secure: true,
				auth: {
					user: 'developeronwork6@gmail.com',
					pass: 'nmlsfhytmftdthyh'
				}

			});
			console.log("created ", transporter)
			var mailOptions = {
				from: 'developeronwork6@gmail.com',
				to: params.email,
				subject: 'Forgot Password Link',
				text: 'This is the link from where you can update your password ' + baseUrl + '/api/forgot/?token=' + token
			};
			console.log("mailoptions created ", mailOptions)
			transporter.sendMail(mailOptions, function (error, info) {
				if (error) {
					console.log("errorrrrrrrr ", error);
				} else {

					console.log('Email sent: ' + info.response);
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Mail has been sent. Please check and update your password"
					})

				}
			});

		}


	})


});



/*----------------------------------------------------
					Reset Password  
   ----------------------------------------------------*/

router.post('/reset_password/:token', function (req, res) {
	console.log("hiii reset_password")
	var params = req.body;
	var hashpassword = passwordhash.generate(params.new_password);
	params.hashpassword = hashpassword
	var token = req.params.token.split(':')[1];
	params.token = token;
	console.log("params ", params)
	console.log("token is " + token);
	User.getPassword(params, function (err, password) {
		console.log("password is ", password)

		if (password.length == 0) {
			res.json({
				status: false,
				message: "Your Forgot password token has expired."
			})
		}
		else {
			var check = passwordhash.verify(params.new_password, password[0].password);
			if (check == true) {
				console.log("New Password should be different from previous one");
				res.json({
					status: false,
					message: "New Password should be different from previous one"
				})
			}
			else {
				User.resetPassword(params, function (err, user) {
					console.log(user)
					res.json({
						status: true,
						message: "Password Changed"
					})
				})

			}
		}
	})
});



/*---------------------------------------
		  (27) Get Events of group
----------------------------------------*/
router.post('/get_events_of_group', function (req, res) {
	console.log("hiii get_events_of_group")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			var id = authUser._id;
			Event.getGroupEvents(params, function (err, allGroupEvents) {
				if (err) {
					console.log("error - ", err)
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}
				console.log("allGroupEvents ", allGroupEvents)
				var result_events = [];
				var groupEvents = [];
				for (var i in allGroupEvents) {
					groupEvents[i] = allGroupEvents[i].toObject();
					groupEvents[i].event_cover = baseUrl + event_cover_url + groupEvents[i].event_cover;
					var date = groupEvents[i].date;
					groupEvents[i].date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
					// console.log(groupEvents[i].group_id)
					// for(var j in groupEvents[i].group_id) {
					//        for(var k in groupEvents[i].group_id[j].users) 
					//            {
					//                 if(groupEvents[i].group_id[j].users[k] === String(id)) {
					//                     console.log("hiii ifff")
					//                     result_events.push(groupEvents[i])
					//                 }
					//            }
					//   }
				}

				// var obj = {};

				// for ( var i=0, len=result_events.length; i < len; i++ )
				//     obj[result_events[i]['_id']] = result_events[i];

				// new_events = [];
				// for ( var key in obj )
				//     new_events.push(obj[key]);

				console.log("allGroupEvents afterrrrr ", groupEvents)
				groupEvents.sort(function (a, b) {
					return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
				});
				res.statusCode = suc;
				res.json({
					status: 1,
					message: "Events get succesfullly ",
					data: groupEvents
				})
			})


		}
	})
});




/*-------------------------------------------------------
			(68) get_social_content 
  ------------------------------------------------------*/
router.post('/get_social_content', function (req, res) {
	console.log("hiii get_social_content")
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			SocialShare.getSocialShareContent(function (err, socialContent) {
				res.statusCode = suc;
				res.json({
					status: 1,
					message: "Social Content found successfully",
					data: socialContent
				})
			})
		}
	})


});



// /*---------------------------------------
// 		    (51) Check
//  ----------------------------------------*/
// router.post('/check',function(req,res){
// 	console.log("hiii check")
// 	var params          = req.body;
//     // var baseUrl 	= req.protocol+ '://' + req.get('host');

// 				// var local_image = Date.now()+'.mp3';
//     //                            const options = {
//     //                                url: 'http://localhost:3000/audio/album_song/1517212845318.mp3',
//     //                                dest: 'public/images/check/'+local_image                  // Save to /path/to/dest/image.jpg
//     //                              }

//     //                            download.image(options)
//     //                              .then(({ filename, image }) => {
//     //                                params.blog_image = local_image;
//     //                                console.log('File saved to', filename)
//     //                              }).catch((err) => {
//     //                                  params.blog_image = "";
//     //                                 console.log("erorrrrrrrrrrrrrrrrrrrrrr ",err)
//     //                                throw err
//     //                              })

// 		 //    var today = new Date();
// 			// var Christmas = new Date("12-25-2019");
// 			// var diffMs = (Christmas - today); // milliseconds between now & Christmas
// 			// var diffDays = Math.floor(diffMs / 86400000); // days
// 			// var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
// 			// var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
// 			// console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes until Christmas 2019 =)");


// 		 //    var today = new Date("February 15, 2018 15:26:09");
// 			// var Christmas = new Date();
// 			// var diffMs = (Christmas - today); // milliseconds between now & Christmas
// 			// var diffDays = Math.floor(diffMs / 86400000); // days
// 			// var diffHrs = Math.floor(diffMs / 3600000); // hours
// 			// var diffMins = Math.round(diffMs  / 60000); // minutes
// 			// console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes until Christmas 2019 =)");
//        var sr = 'us';
//        var search = '/^' + sr + '/';
//       User.find({first_name : { $regex : new RegExp(sr, "i") }}, function(err,data) {
//       	console.log(data)
//       })
// });




/*---------------------------------------
		  (32) Get All Gallaries
----------------------------------------*/
router.post('/get_all_categories', function (req, res) {
	console.log("hiii get_all_categories ", req.body)
	var params = req.body;

	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			//var id = authUser._id;
			var baseUrl = req.protocol + '://' + req.get('host');

			MediaCategory.getAllMediaCategories(function (err, mediacategories) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}

				else {
					console.log("mediacategories found ", mediacategories)
					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Media Categories found successfully",
						data: mediacategories
					})

				}

			})
		}

	})
});




/*---------------------------------------
		  (33) Get Media of Category
----------------------------------------*/
router.post('/get_album_of_category', function (req, res) {
	console.log("hiii get_album_of_category ", req.body)
	var params = req.body;

	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			//var id = authUser._id;
			var baseUrl = req.protocol + '://' + req.get('host');
			MediaGallary.getGallariesOfCategory(params, function (err, gallaries) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong",
						data: err
					})

				}

				else {
					console.log("gallaries found ", gallaries)
					var resultGallaries = [];
					var checkArray = [];
					if (gallaries.length != 0) {
						for (var i in gallaries) {
							resultGallaries[i] = gallaries[i].toObject();
							var dat = resultGallaries[i].createdAt;
							var month = dat.toLocaleString("en-us", { month: "long" });

							resultGallaries[i].date = dat.getDate() + " " + month + "," + dat.getFullYear();
							getMedia(resultGallaries[i]._id, i, callback)
							function callback(media, j) {
								// console.log("mediaaaaaaaaaaaaaaaaaaaaaa ",media, i , resultGallaries[i].gallary_title)
								if (media.length == 0) {
									console.log("hiiiiiii ")
									resultGallaries[j].media = [];
								}
								else {
									resultGallaries[j].media = media;
								}
								checkArray.push(resultGallaries[i])
								if (checkArray.length == gallaries.length) {
									resultGallaries.sort(function (a, b) {
										return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
									});
									res.statusCode = suc;
									res.json({
										status: 1,
										message: "Gallaries found successfully",
										data: resultGallaries
									})
								}
							}

						}
					} else {
						res.statusCode = suc;
						res.json({
							status: 1,
							message: "Gallaries found successfully",
							data: resultGallaries
						})
					}
				}
			})
		}
	})


	function getMedia(gallary_id, j, callback) {

		console.log("hiii gallary_iddddddddddddddddddddddd ", gallary_id, j)
		MediaToGallary.getMediaOfGallaryLimit(gallary_id, function (err, media) {
			if (err) {
				console.log(" error-- ", err);
				res.statusCode = er;
				res.json({
					status: 0,
					message: "Something went wrong",
					data: err
				})

			}

			else {
				console.log("media found ", media, j)

				for (var i in media) {
					if (media[i].media_type == 'V') {
						media[i].thumbnail = baseUrl + gallary_media_url + 'thumbnails/' + media[i].thumbnail;
					}
					media[i].media_file = baseUrl + gallary_media_url + media[i].media_file;
				}
				callback(media, j)
			}
		})
	}

});




/*---------------------------------------
		  (32)get_artists
----------------------------------------*/
router.post('/get_artists', function (req, res) {
	console.log("hiii get_artists ", req.body)
	var params = req.body;

	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			//var id = authUser._id;
			var baseUrl = req.protocol + '://' + req.get('host');

			MusicArtist.getMusicArtists(function (err, musicArtists) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}

				else {
					console.log("musicArtists found ", musicArtists)
					var resultArtists = [];
					for (var i in musicArtists) {
						resultArtists[i] = musicArtists[i].toObject();
						resultArtists[i].artist_image = baseUrl + artist_image_url + resultArtists[i].artist_image;
					}

					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Music Artists found successfully",
						data: resultArtists
					})

				}

			})
		}

	})
});




/*---------------------------------------
		  (32)get_albums_of_artist
----------------------------------------*/
router.post('/get_albums_of_artist', function (req, res) {
	console.log("hiii get_albums_of_artist ", req.body)
	var params = req.body;

	var baseUrl = req.protocol + '://' + req.get('host');
	User.getProfile(params, function (err, authUser) {
		console.log('auth user ', authUser)
		if (authUser === null) {
			res.statusCode = ses;
			res.json({
				status: 2,
				message: "It seems like you have logged in from another device. Please Sign in again."

			})
		}
		else {
			//var id = authUser._id;
			var baseUrl = req.protocol + '://' + req.get('host');

			MusicAlbum.getAlbumsOfArtist(params, function (err, musicAlbums) {
				if (err) {
					console.log(" error-- ", err);
					res.statusCode = er;
					res.json({
						status: 0,
						message: "Something went wrong!",
						data: err
					})
				}

				else {
					console.log("musicAlbums found ", musicAlbums)
					var resultAlbums = [];
					for (var i in musicAlbums) {
						resultAlbums[i] = musicAlbums[i].toObject();
						resultAlbums[i].album_image = baseUrl + artist_image_url + resultAlbums[i].album_image;
					}

					res.statusCode = suc;
					res.json({
						status: 1,
						message: "Music Albums found successfully",
						data: resultAlbums
					})

				}

			})
		}

	})
});


function getDifference(array1, array2) {
	return array1.filter(object1 => {
	  return !array2.some(object2 => {
		return String(object1._id) === String(object2.first_user_id._id) || String(object1._id) === String(object2.second_user_id._id);
	  });
	});
  }

module.exports = router;