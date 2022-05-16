var express = require('express');
const app = express();
var router = express.Router();
const path = require('path');
const download = require('image-downloader')
var passwordhash = require('password-hash');
var multer = require('multer');
var ffmpeg = require('fluent-ffmpeg');
var pluralize = require('pluralize');
var HTML = require('html-parse-stringify')
var FCM = require('fcm-node');
var nodemailer = require('nodemailer');


var serverKey = 'AIzaSyDZJdrncaRUm32mkpg7izBK7zQlrRXgWRo';
var fcm = new FCM(serverKey);

// var DOMParser              = require('xmldom').DOMParser;
// const xml                  = require("xml-parse");


var AdminProfile = require('../models/adminprofile');
var User = require('../models/user');
var Group = require('../models/group');
var SmallGroup = require('../models/smallgroup');
var Betrothed = require('../models/betrothed');
var WeddingList = require('../models/weddinglist');
var UpcomingMarriage = require('../models/upcomingwedding');
var BirthdayList = require('../models/birthdaylist');
var Event = require('../models/event');
var MusicAlbum = require('../models/musicalbum');
var SongToAlbum = require('../models/songtoalbum');
var MediaGallary = require('../models/mediagallary');
var MediaToGallary = require('../models/mediatogallary');
var EventCategory = require('../models/eventcategory');
var Appointment = require('../models/appointment');
var BlogCategory = require('../models/blogcategory');
var Blog = require('../models/blog');
var ClassifiedCategory = require('../models/classifiedcategory');
var Classified = require('../models/classified');
var Contact = require('../models/contact');
var Poll = require('../models/poll');
var PollOption = require('../models/polloption');
var CommentPoll = require('../models/commentpoll');
var VoteToPoll = require('../models/votetopoll');
var Recommendation = require('../models/recommendation');
var OnlineStore = require('../models/onlinestore');
var ServiceHour = require('../models/servicehour');
var NewsUrl = require('../models/newsurl');
var AboutPage = require('../models/aboutpage');
var Permission = require('../models/permission');
var Library = require('../models/library');
var Link = require('../models/link');
var ValidationConfig = require('../models/validationconfig');
var Church = require('../models/church');
var PollSetting = require('../models/pollsetting');
var GroupRequest = require('../models/grouprequest');
var GivingUrl = require('../models/givingurl');
var Notification = require('../models/notification');
var SocialShare = require('../models/socialshare');
var MediaCategory = require('../models/mediacategory');
var MusicArtist = require('../models/musicartist');
var IssueCategory = require('../models/issuecategory');
const Bible = require('../models/bible');



var grp_img, small_grp_img, cover, mrg_cover, al_img, al_sng, poll_img, abt_img, bl_img, md_img, ev_img, lg_img;;


var storage_group = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/group/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    grp_img = Date.now() + '.' + extension;
    cb(null, grp_img)
  }
})

var recommeded_pdf_letter = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    grp_img = Date.now() + '.' + extension;
    cb(null, grp_img)
  }
})

var storage_small_group = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/small_group/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    small_grp_img = Date.now() + '.' + extension;
    cb(null, small_grp_img)
  }
})

var storage_wedding_cover = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/wedding_cover/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    cover = Date.now() + '.' + extension;
    cb(null, cover)
  }
})



var storage_upcoming_wedding_cover = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/marriage_cover/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    mrg_cover = Date.now() + '.' + extension;
    cb(null, mrg_cover)
  }
})

var storage_birthday_cover = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/birthday_cover/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    mrg_cover = Date.now() + '.' + extension;
    cb(null, mrg_cover)
  }
})

var storage_music_album = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/music_album/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    al_img = Date.now() + '.' + extension;
    cb(null, al_img)
  }
})

var storage_song_to_album = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/audio/album_song/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    al_sng = Date.now() + '.' + extension;
    cb(null, al_sng)
  }
})


var storage_media_to_gallary = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/media_gallary/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    md_img = Date.now() + '.' + extension;
    cb(null, md_img)
  }
})


var storage_event_cover = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/event_cover/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    ev_img = Date.now() + '.' + extension;
    cb(null, ev_img)
  }
})

var storage_blog_image = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/blog_image/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    bl_img = Date.now() + '.' + extension;
    cb(null, bl_img)
  }
})

var storage_classified_image = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/classified_image/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    al_sng = Date.now() + '.' + extension;
    cb(null, al_sng)
  }
})

var storage_poll_image = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/poll_image/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    poll_img = Date.now() + '.' + extension;
    cb(null, poll_img)
  }
})


var storage_about_image = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/about_cover/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    abt_img = Date.now() + '.' + extension;
    cb(null, abt_img)
  }
})


var storage_library = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/library/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    abt_img = Date.now() + '.' + extension;
    cb(null, abt_img)
  }
})


var storage_church = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/logo/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    lg_img = Date.now() + '.' + extension;
    cb(null, lg_img)
  }
})


var storage_news = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/news/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    nw_img = Date.now() + '.' + extension;
    cb(null, nw_img)
  }
})



var storage_music_artist = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/music_artist/')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    al_img = Date.now() + '.' + extension;
    cb(null, al_img)
  }
})


var upload_group = multer({ storage: storage_group }).single('group_image')
var recommeded_pdf_letter = multer({ storage: recommeded_pdf_letter }).single('pdf_letter')
var upload_small_group = multer({ storage: storage_small_group }).single('small_group_image')
var upload_wedding_cover = multer({ storage: storage_wedding_cover }).single('cover_photo')
var upload_upcoming_wedding_cover = multer({ storage: storage_upcoming_wedding_cover }).single('marriage_cover_photo')
var upload_birthday_cover = multer({ storage: storage_birthday_cover }).single('bday_list_cover_photo')
var upload_music_album = multer({ storage: storage_music_album }).single('album_image')
var upload_song_to_album = multer({ storage: storage_song_to_album }).single('song_file')
var upload_media_to_gallary = multer({ storage: storage_media_to_gallary }).single('media_file')
var upload_event_cover = multer({ storage: storage_event_cover }).single('event_cover')
var upload_blog = multer({ storage: storage_blog_image }).single('blog_image')
var upload_classified = multer({ storage: storage_classified_image }).single('classified_image')
var upload_poll = multer({ storage: storage_poll_image }).single('poll_image')
var upload_about_page = multer({ storage: storage_about_image }).single('about_cover_image')
var upload_library = multer({ storage: storage_library }).single('image_name')
var upload_church_info = multer({ storage: storage_church }).single('logo')
var upload_news = multer({ storage: storage_news }).single('news_image')
var upload_music_artist = multer({ storage: storage_music_artist }).single('artist_image')




var group_image_url = '/images/group/';
var small_group_image_url = '/images/small_group/';
var adminprofile_image_url = '/images/admin/profile/';
var profile_image_url = '/images/profile/';
var wedding_cover_image_url = '/images/wedding_cover/';
var marriage_cover_image_url = '/images/marriage_cover/';
var bday_cover_image_url = '/images/birthday_cover/';
var album_image_url = '/images/music_album/';
var gallary_media_url = '/images/media_gallary/';
var event_cover_url = '/images/event_cover/';
var blog_image_url = '/images/blog_image/';
var classified_image_url = '/images/classified_image/';
var poll_image_url = '/images/poll_image/';
var about_image_url = '/images/about_cover/';
var logo_image_url = '/images/logo/';
var news_image_url = '/images/news/';
var artist_image_url = '/images/music_artist/';
var album_song_url = '/audio/album_song/';

router.get('/', (req, res) => {
  res.sendFile(patph.join(__dirname, '../../admin_api.html'));
});

router.get('/forgot', (req, res) => {
  res.sendFile(path.join(__dirname, '../../forgotpassword.html'));
});



function send_notification_betrothed(first_user, second_user) {
  console.log("hiii send_notification_betrothed ", first_user, second_user)
  var notiParams = {
    user_id: first_user,
    author_id: second_user,
    notification_type: 'betrothed',
    post_type: '',
    group_id: '',
    post_id: '',
    message: ' and You has added as betrothed ',
    status: 'A'
  }
  console.log("hiii notiParams ", notiParams)
  Notification.addNewNotification(notiParams, function (err, notification) {
    console.log("notification added ", notification)
    send_notification_betrothed_to_user(first_user, second_user)
    var notiParams = {
      user_id: second_user,
      author_id: first_user,
      notification_type: 'betrothed',
      post_type: '',
      group_id: '',
      post_id: '',
      message: ' and You has added as betrothed ',
      status: 'A'
    }
    Notification.addNewNotification(notiParams, function (err, notification) {
      console.log("notification added ", notification)
      send_notification_betrothed_to_user(second_user, first_user)
    })
  })
  // send_notification_betrothed_to_user(authUser,group_users[i],notification_type,post_type,group_id,group_post_id,group_post_status,members.group_name)
  //  }
  // }
  // })
}


function send_notification_betrothed_to_user(user1, user2) {
  User.getUserInfo(user1, function (err, user1Info) {
    User.getUserInfo(user2, function (err, user2Info) {
      var message = {
        to: user1Info.device_id,
        notification: {
          title: 'Believe',
          body: 'You and ' + user2Info.first_name + ' ' + user2Info.last_name + ' has added as betrothed.'
        },

        data: {
          title: 'Believe',
          body: user2Info.first_name + ' ' + user2Info.last_name + ' and You has added as betrothed.',
          id: '',
          notification_type: 'betrothed',
          post_type: '',
          user_id: user2Info._id,
          first_name: user2Info.first_name,
          last_name: user2Info.last_name,
          group_id: '',
          notification_sound: user1Info.notification_sound
        }
      };
      console.log("message is ", message)
      fcm.send(message, function (err, response) {
        if (err) {
          console.log("Something has gone wrong!---------", err);
        } else {
          console.log("Successfully sent with response: ", response);
        }
      });

    })
  })

}


// app.use(express.static(path.join(__dirname, 'public')));



/*---------------------------------------
     (1)  Login 
----------------------------------------*/

router.post('/login', function (req, res) {
  console.log("/admin/login hit ", req.body);
  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');

  AdminProfile.adminLogin(params, function (err, admin) {
    if (err) {
      res.json({
        status: false,
        message: "Login failed.",
        data: err
      })
    }
    else if (!admin) {
      res.json({
        status: false,
        message: "Login failed email mismatch",
        type: "Email"
      })
    }
    else {
      var check = passwordhash.verify(params.password, admin[0].password);
      if (check == true) {

        admin[0].profile_image = baseUrl + adminprofile_image_url + admin[0].profile_image;

        res.json({
          status: true,
          message: "login successfully",
          data: admin[0]
        })
      }
      else {
        // res.statusCode = 404;
        res.json({
          status: false,
          message: "Login failed password mismatch.",
          type: "Password"
        })
      }
    }

  })

});




/*---------------------------------------
     (2)  Create Group
----------------------------------------*/

router.post('/create_group', function (req, res) {
  console.log("paramsssss", req.body)
  console.log("hiii /admin/create_group")
  upload_group(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in create_group is ", req.file)
      console.log("dataaaaaaa in create_group is ", req.body)

      var params = req.body;



      /////// CAll function //////////// 
      createGroup(callback);

      ////// Callback function to get value ///////////  
      function callback(group_image) {
        console.log("hii callback")
        params.group_image = group_image;
        params.users = params.users.split(',');
        grp_img = "";

        Group.addNewGroup(params, function (err, group) {
          if (err) {
            console.log(" error-- ", err);
          }
          else {
            console.log(" group-- ", group);

            res.json({
              status: true,
              message: "successfully created group",
              data: group
            })

          }
        })
      }





    }
    function createGroup(callback) {
      var group_image;
      if (req.file) {
        console.log("hii if")
        group_image = req.file.filename;
        var libParams = {
          image_name: req.file.filename,
          media_type: 'I',
          section: 'Group',
          path: group_image_url,
          thumbnail: '',
          title: params.group_name
        }
        Library.addNewLibrary(libParams, function (err, library) {
          console.log(library);

        })
        callback(group_image)

      }
      else if (!req.file) {
        console.log("hiiiii else ")
        var local_image = Date.now() + '.jpg';
        const options = {
          url: params.group_image,
          dest: 'public/images/group/' + local_image                  // Save to /path/to/dest/image.jpg
        }

        download.image(options)
          .then(({ filename, image }) => {
            group_image = local_image;
            callback(group_image)
            console.log("params ss ", params.group_image)
            console.log('File saved to', filename)
          }).catch((err) => {
            group_image = "";
            callback(group_image)
            console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
            throw err
          })

      }
    }

  })


});



/*---------------------------------------
     (3) Get All users  
----------------------------------------*/

router.get('/get_users', function (req, res) {
  console.log("/admin/get_users hit");
  var baseUrl = req.protocol + '://' + req.get('host');
  User.getUsers(function (err, users) {
    if (err) {
      console.log(err)
      res.json({
        status: false,
        message: err
      })
    }
    var result = [];
    for (var i in users) {
      result[i] = users[i].toObject();
      result[i].full_name = result[i].first_name + ' ' + result[i].last_name;
      result[i].profile_image = baseUrl + profile_image_url + result[i].profile_image;

    }
    result.sort(function (a, b) {
      return (a.first_name < b.first_name) ? -1 : ((a.first_name > b.first_name) ? 1 : 0);
    });

    res.json({
      status: true,
      message: "data get",
      data: result
    })

  })

});




/*---------------------------------------------------------
        (4) Get Groups
----------------------------------------------------------*/
router.get('/get_groups', function (req, res) {
  console.log("hiii get_groups")

  var baseUrl = req.protocol + '://' + req.get('host');

  Group.getAllGroupsAdmin(function (err, groups) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      //  console.log("groups found ",groups )
      var result_groups = [];

      for (var i in groups) {
        var requests = [];
        result_groups[i] = groups[i].toObject();
        result_groups[i].serial_no = parseInt(i) + 1;
        result_groups[i].total_members = result_groups[i].users.length;
        result_groups[i].group_image = baseUrl + group_image_url + result_groups[i].group_image;
        for (var j in result_groups[i].admin_users) {
          result_groups[i].admin_users[j].profile_image = baseUrl + profile_image_url + result_groups[i].admin_users[j].profile_image;
        }
        for (var j in result_groups[i].users) {
          result_groups[i].users[j].profile_image = baseUrl + profile_image_url + result_groups[i].users[j].profile_image;
        }
        for (var j in result_groups[i].requests) {
          if (result_groups[i].requests[j].request_status == 'P') {
            requests.push(result_groups[i].requests[j]);
          }
        }
        result_groups[i].no_of_requests = requests.length;
        console.log("result_groups[i] ", result_groups[i])

      }
      result_groups.sort(function (a, b) {
        return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
      });
      res.json({
        status: true,
        message: "Groups found successfully",
        data: result_groups
      })

    }


  })

});





/*---------------------------------------------------------
        (4) Get Group Join Requests
----------------------------------------------------------*/
router.post('/get_group_join_requests', function (req, res) {
  console.log("hiii get_group_join_requests")
  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');

  Group.getGroupRequests(params, function (err, group) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("requests found ", group)
      if (group.length == 0) {

        res.json({
          status: true,
          message: "Group Requests found successfully",
          data: []
        })
      }
      else {
        var requests = group[0].requests;
        // requests.group_id = group._id;
        console.log("requests ", requests)
        var result_requests = [];
        var count = 0;
        for (var i in requests) {
          //console.log("")
          if (requests[i].request_status == 'P') {

            result_requests[count] = requests[i];
            console.log(result_requests[count], count)
            //console.log("profile_image ",result_requests[count].user_id.profile_image)
            result_requests[count].user_id.profile_image = baseUrl + profile_image_url + result_requests[count].user_id.profile_image;
            count = count + 1;
          }
        }

        res.json({
          status: true,
          message: "Group Requests found successfully",
          data: result_requests
        })
      }

    }


  })

});



/*---------------------------------------------------------
        (4) accept_reject_group_request
----------------------------------------------------------*/
router.post('/accept_reject_group_request', function (req, res) {
  console.log("hiii accept_reject_group_request")
  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');

  Group.updateAcceptStatus(params, function (err, request) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("hiiii status changed ", request)
      if (params.accept_status == 'Y') {
        var groupRequestParams = {
          group_id: params.group_id,
          user_id: params.user_id
        }

        Group.addUserToGroup(groupRequestParams, function (err, group) {
          res.json({
            status: true,
            message: "Status Changed successfully"
          })
        })
      }
      else {
        res.json({
          status: true,
          message: "Status Changed successfully"
        })
      }



    }


  })

});



/*---------------------------------------
     (5)  Create Small Group
----------------------------------------*/

router.post('/create_small_group', function (req, res) {
  console.log("hiii /admin/create_small_group")
  upload_small_group(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("file in create_small_group is ", req.file)
      console.log("dataaaaaaa in create_small_group is ", req.body)

      var params = req.body;
      getSmallGroupImage(callback)

      function callback(small_group_image) {
        params.small_group_image = small_group_image;

        params.users = params.users.split(',');
        params.admin_users = params.admin_users.split(',');
        small_grp_img = "";

        SmallGroup.addNewSmallGroup(params, function (err, smallgroup) {
          if (err) {
            console.log(" error-- ", err);
          }
          else {
            res.json({
              status: true,
              message: "successfully created group",
              data: smallgroup
            })

          }
        })
      }
      function getSmallGroupImage(callback) {
        var small_group_image;
        if (req.file) {
          small_group_image = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Small Group',
            path: small_group_image_url,
            thumbnail: '',
            title: params.small_group_name
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(small_group_image)
        }
        else {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.small_group_image,
            dest: 'public/images/small_group/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              small_group_image = local_image;
              callback(small_group_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              small_group_image = "";
              callback(small_group_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }
      }
    }
  })

});




/*---------------------------------------------------------
        (6) Get Groups
----------------------------------------------------------*/
router.get('/get_small_groups', function (req, res) {
  console.log("hiii get_small_groups,", req.body)

  var baseUrl = req.protocol + '://' + req.get('host');

  SmallGroup.getAllSmallGroupsAdmin(function (err, smallGroups) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("smallGroups found ", smallGroups)
      var result_groups = [];
      for (var i in smallGroups) {
        var requests = [];
        result_groups[i] = smallGroups[i].toObject();
        result_groups[i].serial_no = parseInt(i) + 1;
        result_groups[i].total_members = result_groups[i].users.length;
        result_groups[i].small_group_image = baseUrl + small_group_image_url + result_groups[i].small_group_image;
        var adminUserNames = [];
        for (var j in result_groups[i].admin_users) {
          console.log("user j ", result_groups[i].admin_users[j])
          adminUserNames.push(result_groups[i].admin_users[j].first_name + ' ' + result_groups[i].admin_users[j].last_name)
        }
        console.log(adminUserNames)
        result_groups[i].admin_users = adminUserNames.toString();
        //  for(var j in result_groups[i].users) {
        //      result_groups[i].users[j].profile_image = baseUrl + profile_image_url + result_groups[i].users[j].profile_image; 
        //  }

        for (var j in result_groups[i].requests) {
          if (result_groups[i].requests[j].request_status == 'P') {
            requests.push(result_groups[i].requests[j]);
          }
        }
        result_groups[i].no_of_requests = requests.length;
        console.log("result_groups[i] ", result_groups[i])

      }
      result_groups.sort(function (a, b) {
        return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
      });

      res.json({
        status: true,
        message: "Groups found successfully",
        data: result_groups
      })
    }
  })

});




/*---------------------------------------------------------
        (4) Get Small Group Join Requests
----------------------------------------------------------*/
router.post('/get_small_group_join_requests', function (req, res) {
  console.log("hiii get_small_group_join_requests")
  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');

  SmallGroup.getSmallGroupRequests(params, function (err, group) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("requests found ", group)
      if (group.length == 0) {

        res.json({
          status: true,
          message: "Group Requests found successfully",
          data: []
        })
      }
      else {
        var requests = group[0].requests;
        // requests.group_id = group._id;
        console.log("requests ", requests)
        var result_requests = [];
        var count = 0;
        for (var i in requests) {
          //console.log("")
          if (requests[i].request_status == 'P') {

            result_requests[count] = requests[i];
            console.log(result_requests[count], count)
            //console.log("profile_image ",result_requests[count].user_id.profile_image)
            result_requests[count].user_id.profile_image = baseUrl + profile_image_url + result_requests[count].user_id.profile_image;
            count = count + 1;
          }
        }

        res.json({
          status: true,
          message: "Small Group Requests found successfully",
          data: result_requests
        })
      }

    }


  })

});




/*---------------------------------------------------------
        (4) accept_reject_small_group_request
----------------------------------------------------------*/
router.post('/accept_reject_small_group_request', function (req, res) {
  console.log("hiii accept_reject_small_group_request")
  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');

  SmallGroup.updateAcceptStatus(params, function (err, request) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("hiiii status changed ", request)
      if (params.accept_status == 'Y') {
        var groupRequestParams = {
          small_group_id: params.small_group_id,
          user_id: params.user_id
        }

        SmallGroup.addUserToSmallGroup(groupRequestParams, function (err, group) {
          res.json({
            status: true,
            message: "Status Changed successfully"
          })
        })
      }
      else {
        res.json({
          status: true,
          message: "Status Changed successfully"
        })
      }



    }


  })

});


/*---------------------------------------------------------
        (7) Get Detail of Group
----------------------------------------------------------*/
router.post('/get_group_detail', function (req, res) {
  console.log("hiii get_group_detail", req.body)

  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');


  Group.getGroupDetailByAdmin(params, function (err, groupDetail) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("groupDetail found ", groupDetail)
      var result_group;

      result_group = groupDetail.toObject();
      // result_group.total_members         = result_group.users.length;
      result_group.group_image = baseUrl + group_image_url + result_group.group_image;

      for (var i in result_group.users) {
        console.log(result_group.users[i])
        result_group.users[i].profile_image = baseUrl + profile_image_url + result_group.users[i].profile_image;
        result_group.users[i].full_name = result_group.users[i].first_name + ' ' + result_group.users[i].last_name;

      }




      res.json({
        status: true,
        message: "Group found successfully",
        data: result_group
      })

    }
  })


});





/*------------------------------------------------------
     (8)  Edit Group
--------------------------------------------------------*/

router.post('/edit_group', function (req, res) {
  console.log("paramsssss", req.body)
  console.log("hiii /admin/edit_group")
  upload_group(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in edit_group is ", req.file)
      console.log("dataaaaaaa in edit_group is ", req.body)

      var params = req.body;
      getEditGroupImage(callback)

      function callback(group_image) {
        console.log("callback calls")
        params.group_image = group_image;
        if (params.users === 'undefined') {
          params.users = "";
        }
        else {
          params.users = params.users.split(',');
        }

        var id = params.group_id;
        grp_img = "";

        Group.editGroup(id, params, function (err, group) {
          if (err) {
            console.log(" error-- ", err);
          }
          else {

            res.json({
              status: true,
              message: "successfully updated group",
              data: group
            })
          }
        })
      }

      function getEditGroupImage(callback) {
        console.log("getEditGroupImage calls")
        var group_image;
        if (req.file) {
          console.log("file exists, if calls")
          group_image = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Group',
            path: group_image_url,
            thumbnail: '',
            title: params.group_name
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(group_image)
        }
        else if (params.group_image != 'null') {
          console.log("else if(params.group_image != 'null') calls")
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.group_image,
            dest: 'public/images/group/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              group_image = local_image;
              callback(group_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              group_image = "";
              callback(group_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }

        else {
          console.log("else  calls")
          group_image = '';
          callback(group_image)
        }
      }
    }
  })

});




/*---------------------------------------------------------
        (9) Add a betrothed
----------------------------------------------------------*/
router.post('/add_betrothed', function (req, res) {
  console.log("hiii /admin/add_betrothed", req.body)

  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');

  //params.status = 'A';

  Betrothed.addNewBetrothedByAdmin(params, function (err, newBetrothed) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("newBetrothed added ", newBetrothed)
      if (params.status == 'A') {
        send_notification_betrothed(params.first_user_id, params.second_user_id)
      }

      res.json({
        status: true,
        message: "Betrothed added successfully",
        data: newBetrothed
      })

    }
  })


});





/*---------------------------------------------------------
        (10) Add Wedding List
----------------------------------------------------------*/
router.post('/add_wedding_list', function (req, res) {
  //  console.log("hiii /admin/add_wedding_list", req.body)

  upload_wedding_cover(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_wedding_list is ", req.file)
      console.log("dataaaaaaa in add_wedding_list is ", req.body)

      var params = req.body;
      var baseUrl = req.protocol + '://' + req.get('host');
      params.status = 'A';
      getWeddingImage(callback)

      function callback(cover_photo) {
        params.cover_photo = cover_photo;
        WeddingList.addNewWeddingList(params, function (err, newWeddingList) {

          if (err) {
            console.log(" error-- ", err);
            res.json({
              status: false,
              message: "Something went wrong!",
              data: err
            })
          }
          else {

            console.log("newWeddingList added ", newWeddingList)
            if (params.link_url == 'N') {
              var linkParams = {
                title: params.title,
                url: params.url_online_site,
                status: 'A'
              }
              Link.addNewLink(linkParams, function (err, link) {
                console.log("link addeddddd ", link)
                res.json({
                  status: true,
                  message: "Wedding List added successfully",
                  data: newWeddingList
                })
              })
            }
            else if (params.link_url == 'Y') {

              res.json({
                status: true,
                message: "Wedding List added successfully",
                data: newWeddingList
              })

            }


          }
        })
      }
      function getWeddingImage(callback) {
        var cover_photo;
        if (req.file) {
          cover_photo = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Wedding List',
            path: wedding_cover_image_url,
            thumbnail: '',
            title: params.title
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(cover_photo)

        }
        else {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.cover_photo,
            dest: 'public/images/wedding_cover/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              cover_photo = local_image;
              callback(cover_photo)
              console.log('File saved to', filename)
            }).catch((err) => {
              cover_photo = "";
              callback(cover_photo)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }
      }
    }
  })

});



/*---------------------------------------------------------
        (11) Add Upcoming Marriages 
----------------------------------------------------------*/
router.post('/add_upcoming_marriages', function (req, res) {
  //  console.log("hiii /admin/add_upcoming_marriages", req.body)

  upload_upcoming_wedding_cover(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_upcoming_marriages is ", req.file)
      console.log("dataaaaaaa in add_upcoming_marriages is ", req.body)

      var params = req.body;
      var baseUrl = req.protocol + '://' + req.get('host');
      //  params.status = 'A';
      getMarriageImage(callback)

      function callback(marriage_cover_photo) {
        params.marriage_cover_photo = marriage_cover_photo;
        UpcomingMarriage.addNewUpcomingMarriage(params, function (err, newUpcomingMarriage) {
          if (err) {
            console.log(" error-- ", err);
            res.json({
              status: false,
              message: "Something went wrong!",
              data: err
            })
          }
          else {

            console.log("newUpcomingMarriage added ", newUpcomingMarriage)

            res.json({
              status: true,
              message: "Betrothed added successfully",
              data: newUpcomingMarriage
            })


          }
        })
      }
      function getMarriageImage(callback) {
        var marriage_cover_photo;
        if (req.file) {
          marriage_cover_photo = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Marriage',
            path: marriage_cover_photo,
            thumbnail: '',
            title: ''
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(marriage_cover_photo)
        }
        else {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.marriage_cover_photo,
            dest: 'public/images/marriage_cover/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              marriage_cover_photo = local_image;
              callback(marriage_cover_photo)
              console.log('File saved to', filename)
            }).catch((err) => {
              marriage_cover_photo = "";
              callback(marriage_cover_photo)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }
      }
    }
  })

});



/*---------------------------------------------------------
        (12) Get Betrotheds
----------------------------------------------------------*/
router.get('/get_betrotheds', function (req, res) {
  console.log("hiii get_betrotheds")

  var baseUrl = req.protocol + '://' + req.get('host');

  Betrothed.getAllBetrothedsByAdmin(function (err, betrotheds) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("betrotheds found ", betrotheds)
      Betrothed.getAllPendingBetrotheds(function (err, pendingBetrotheds) {
        if (err) {
          console.log(" error-- ", err);
        }

        else {
          console.log("pendingBetrotheds found ", pendingBetrotheds)
          var resultBetrotheds = [];
          for (var i in betrotheds) {
            resultBetrotheds[i] = betrotheds[i].toObject();
            resultBetrotheds[i].serial_no = parseInt(i) + 1;
            resultBetrotheds[i].first_user_id.profile_image = baseUrl + profile_image_url + resultBetrotheds[i].first_user_id.profile_image;
            resultBetrotheds[i].second_user_id.profile_image = baseUrl + profile_image_url + resultBetrotheds[i].second_user_id.profile_image;
          }

          res.json({
            status: true,
            message: "Betrotheds found successfully",
            data: resultBetrotheds,
            requestsCount: pendingBetrotheds.length
          })
        }
      })

    }


  })

});



/*---------------------------------------------------------
        (12) Get Draft Betrotheds
----------------------------------------------------------*/
router.get('/get_draft_betrotheds', function (req, res) {
  console.log("hiii get_draft_betrotheds")

  var baseUrl = req.protocol + '://' + req.get('host');

  Betrothed.getDraftBetrotheds(function (err, draftBetrotheds) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("Draft Betrotheds found ", draftBetrotheds)

      var resultDraftBetrotheds = [];
      for (var i in draftBetrotheds) {
        resultDraftBetrotheds[i] = draftBetrotheds[i].toObject();
        resultDraftBetrotheds[i].serial_no = parseInt(i) + 1;
        resultDraftBetrotheds[i].first_user_id.profile_image = baseUrl + profile_image_url + resultDraftBetrotheds[i].first_user_id.profile_image;
        resultDraftBetrotheds[i].second_user_id.profile_image = baseUrl + profile_image_url + resultDraftBetrotheds[i].second_user_id.profile_image;
      }

      res.json({
        status: true,
        message: "Draft Betrotheds found successfully",
        data: resultDraftBetrotheds
      })

    }


  })

});


/*---------------------------------------------------------
        (13) Get All Pending requests of betrotheds
----------------------------------------------------------*/
router.get('/get_requests_betrotheds', function (req, res) {
  console.log("hiii get_requests_betrotheds")

  var baseUrl = req.protocol + '://' + req.get('host');

  Betrothed.getAllPendingBetrotheds(function (err, pendingBetrotheds) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("pendingBetrotheds found ", pendingBetrotheds)

      for (var i in pendingBetrotheds) {
        pendingBetrotheds[i].user_id.profile_image = baseUrl + profile_image_url + pendingBetrotheds[i].user_id.profile_image;
        pendingBetrotheds[i].first_user_id.profile_image = baseUrl + profile_image_url + pendingBetrotheds[i].first_user_id.profile_image;
        pendingBetrotheds[i].second_user_id.profile_image = baseUrl + profile_image_url + pendingBetrotheds[i].second_user_id.profile_image;
      }

      res.json({
        status: true,
        message: "Pending Betrotheds found successfully",
        data: pendingBetrotheds
      })



    }


  })

});



/*---------------------------------------------------------
        (14) Get Wedding Lists
----------------------------------------------------------*/
router.get('/get_wedding_lists', function (req, res) {
  console.log("hiii get_wedding_lists")

  var baseUrl = req.protocol + '://' + req.get('host');

  WeddingList.getAllWeddingList(function (err, weddingLists) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("weddingLists found ", weddingLists)
      var weddingListResult = [];
      for (var i in weddingLists) {
        weddingListResult[i] = weddingLists[i].toObject();
        weddingListResult[i].cover_photo = baseUrl + wedding_cover_image_url + weddingListResult[i].cover_photo;
        console.log("weddingListResult ", weddingListResult[i].cover_photo)
      }

      res.json({
        status: true,
        message: "Wedding Lists found successfully",
        data: weddingListResult
      })



    }


  })

});




/*---------------------------------------------------------
        (15) Get get_draft_upcoming_marriages
----------------------------------------------------------*/
router.get('/get_draft_upcoming_marriages', function (req, res) {
  console.log("hiii get_draft_upcoming_marriages")

  var baseUrl = req.protocol + '://' + req.get('host');

  UpcomingMarriage.getDraftUpcomingMarriages(function (err, upcomingMarriages) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("upcomingMarriages found ", upcomingMarriages)
      var upcomingMarriagesResult = [];
      for (var i in upcomingMarriages) {
        upcomingMarriagesResult[i] = upcomingMarriages[i].toObject();
        upcomingMarriagesResult[i].first_user_id.profile_image = baseUrl + profile_image_url + upcomingMarriagesResult[i].first_user_id.profile_image;
        upcomingMarriagesResult[i].second_user_id.profile_image = baseUrl + profile_image_url + upcomingMarriagesResult[i].second_user_id.profile_image;
        upcomingMarriagesResult[i].marriage_cover_photo = baseUrl + marriage_cover_image_url + upcomingMarriagesResult[i].marriage_cover_photo;
      }

      res.json({
        status: true,
        message: "upcomingMarriages found successfully",
        data: upcomingMarriagesResult
      })



    }


  })

});


/*---------------------------------------------------------
        (15) Get get_upcoming_marriages
----------------------------------------------------------*/
router.get('/get_upcoming_marriages', function (req, res) {
  console.log("hiii get_upcoming_marriages")

  var baseUrl = req.protocol + '://' + req.get('host');

  UpcomingMarriage.getAllUpcomingMarriages(function (err, upcomingMarriages) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("upcomingMarriages found ", upcomingMarriages)
      var upcomingMarriagesResult = [];
      for (var i in upcomingMarriages) {
        upcomingMarriagesResult[i] = upcomingMarriages[i].toObject();
        upcomingMarriagesResult[i].first_user_id.profile_image = baseUrl + profile_image_url + upcomingMarriagesResult[i].first_user_id.profile_image;
        upcomingMarriagesResult[i].second_user_id.profile_image = baseUrl + profile_image_url + upcomingMarriagesResult[i].second_user_id.profile_image;
        upcomingMarriagesResult[i].marriage_cover_photo = baseUrl + marriage_cover_image_url + upcomingMarriagesResult[i].marriage_cover_photo;
      }

      res.json({
        status: true,
        message: "upcomingMarriages found successfully",
        data: upcomingMarriagesResult
      })



    }


  })

});




/*---------------------------------------------------------
        (16) Add Wedding List
----------------------------------------------------------*/
router.post('/add_birthday_list', function (req, res) {

  upload_birthday_cover(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_birthday_list is ", req.file)
      console.log("dataaaaaaa in add_birthday_list is ", req.body)

      var params = req.body;
      var baseUrl = req.protocol + '://' + req.get('host');
      getBdayImage(callback)


      function callback(bday_list_cover_photo) {
        params.bday_list_cover_photo = bday_list_cover_photo;
        params.status = 'A';
        BirthdayList.addNewBirthdayList(params, function (err, newBirthdayList) {
          if (err) {
            console.log(" error-- ", err);
            res.json({
              status: false,
              message: "Something went wrong!",
              data: err
            })
          }
          else {

            console.log("newBirthdayList added ", newBirthdayList)
            if (params.link_url == 'N') {
              console.log("hiiii link_url N")
              var linkParams = {
                title: params.bday_list_title,
                url: params.bday_list_url_online_site,
                status: 'A'
              }
              Link.addNewLink(linkParams, function (err, link) {
                console.log("link addeddddd ", link)
                res.json({
                  status: true,
                  message: "Birthday List added successfully",
                  data: newBirthdayList
                })
              })
            }
            else if (params.link_url == 'Y') {

              res.json({
                status: true,
                message: "Birthday List added successfully",
                data: newBirthdayList
              })

            }

          }
        })
      }
      function getBdayImage(callback) {
        var bday_list_cover_photo;
        if (req.file) {
          bday_list_cover_photo = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Birthday',
            path: bday_cover_image_url,
            thumbnail: '',
            title: params.bday_list_title
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(bday_list_cover_photo);
        }
        else {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.bday_list_cover_photo,
            dest: 'public/images/birthday_cover/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              bday_list_cover_photo = local_image;
              callback(bday_list_cover_photo)
              console.log('File saved to', filename)
            }).catch((err) => {
              params.bday_list_cover_photo = "";
              callback(bday_list_cover_photo)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }
      }
    }
  })

});



/*---------------------------------------------------------
        (17) Add an Event Category
----------------------------------------------------------*/
router.post('/add_event_category', function (req, res) {
  console.log("hiii /admin/add_event_category", req.body)

  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');

  EventCategory.addNewEventCategory(params, function (err, newEventCategory) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("newEventCategory added ", newEventCategory)

      res.json({
        status: true,
        message: "Event Category added successfully",
        data: newEventCategory
      })

    }
  })


});



/*---------------------------------------------------------
        (18) get_event_categories
----------------------------------------------------------*/
router.get('/get_event_categories', function (req, res) {
  console.log("hiii get_event_categories")

  var baseUrl = req.protocol + '://' + req.get('host');

  EventCategory.getAllEventCategories(function (err, eventCategories) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("eventCategories found ", eventCategories)

      res.json({
        status: true,
        message: "Event Categories found successfully",
        data: eventCategories
      })

    }

  })

});


/*---------------------------------------------------------
        (19) Add an Event
----------------------------------------------------------*/
router.post('/add_event', function (req, res) {
  console.log("hiii /admin/add_event", req.body)
  upload_event_cover(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_event is ", req.file)
      console.log("dataaaaaaa in add_event is ", req.body)

      var params = req.body;
      var baseUrl = req.protocol + '://' + req.get('host');
      getEventImage(callback);

      function callback(event_cover) {
        console.log('event_cover', event_cover)
        params.event_cover = event_cover;
        params.status = 'A';
        params.date = new Date(params.date);
        params.group_id = params.group_id.split(',')
        if (params.price_status == 'N') {
          params.price = '';
        }
        console.log("params in add event ", params)
        Event.addNewEvent(params, function (err, newEvent) {
          if (err) {
            console.log(" error-- ", err);
            res.json({
              status: false,
              message: "Something went wrong!",
              data: err
            })
          }
          else {

            console.log("newEvent added ", newEvent)

            res.json({
              status: true,
              message: "Event added successfully",
              data: newEvent
            })


          }
        })
      }
      function getEventImage(callback) {
        var event_cover;
        if (req.file) {
          console.log('file Receievd', req.file)
          event_cover = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Event',
            path: event_cover_url,
            thumbnail: '',
            title: params.title
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(event_cover)

        }
        else {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.event_cover,
            dest: 'public/images/event_cover/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              event_cover = local_image;
              callback(event_cover)
              console.log('File saved to', filename)
            }).catch((err) => {
              event_cover = "";
              callback(event_cover)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }
      }
    }
  })

});




/*---------------------------------------------------------
        (20) Get All Events
----------------------------------------------------------*/
router.get('/get_all_events', function (req, res) {
  console.log("hiii get_all_events")
  var baseUrl = req.protocol + '://' + req.get('host');

  Event.getAllEvents(function (err, allEvents) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      // console.log("allEvents found ",allEvents )

      var allEventsResult = [];
      for (var i in allEvents) {
        allEventsResult[i] = allEvents[i].toObject();
        allEventsResult[i].serial_no = parseInt(i) + 1;
        var groupsNames = [];
        for (var j in allEventsResult[i].group_id) {
          console.log("user j ", allEventsResult[i].group_id[j])
          groupsNames.push(allEventsResult[i].group_id[j].group_name);
        }
        console.log(groupsNames)
        allEventsResult[i].group_id = groupsNames.toString();

        allEventsResult[i].event_cover = baseUrl + event_cover_url + allEventsResult[i].event_cover;
        var date = allEventsResult[i].date;
        allEventsResult[i].date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
      }
      allEventsResult.sort(function (a, b) {
        return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
      });

      res.json({
        status: true,
        message: "All Events found successfully",
        data: allEventsResult
      })

    }


  })

});



/*---------------------------------------------------------
        (21) Get All birthdaylist
----------------------------------------------------------*/
router.get('/get_all_birthday_lists', function (req, res) {
  console.log("hiii get_all_birthday_lists")

  var baseUrl = req.protocol + '://' + req.get('host');

  BirthdayList.getAllBirthdayLists(function (err, birthdaylist) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("birthdaylist found ", birthdaylist)
      for (var i in birthdaylist) {
        birthdaylist[i].bday_list_cover_photo = baseUrl + bday_cover_image_url + birthdaylist[i].bday_list_cover_photo;
      }

      res.json({
        status: true,
        message: "Birthday list found successfully",
        data: birthdaylist
      })

    }


  })

});



/*---------------------------------------------------------
        (22) Get Small Detail of Group
----------------------------------------------------------*/
router.post('/get_small_group_detail', function (req, res) {
  console.log("hiii get_small_group_detail", req.body)

  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');


  SmallGroup.getSmallGroupDetailByAdmin(params, function (err, smallgroupDetail) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("smallgroupDetail found ", smallgroupDetail)
      var result_group;

      result_group = smallgroupDetail.toObject();
      // result_group.total_members         = result_group.users.length;
      result_group.small_group_image = baseUrl + small_group_image_url + result_group.small_group_image;


      var startTime = result_group.start_time;
      console.log("startTime", startTime)
      // var time = $("#starttime").val();
      var hours = Number(startTime.match(/^(\d+)/)[1]);
      var minutes = Number(startTime.match(/:(\d+)/)[1]);
      //console.log("hrs mins ", hours, minutes)
      var AMPM = startTime.match(/\s(.*)$/)[1];
      if (AMPM == "pm" && hours < 12) hours = hours + 12;
      if (AMPM == "am" && hours == 12) hours = hours - 12;
      var sHours = hours.toString();
      var sMinutes = minutes.toString();
      if (hours < 10) sHours = "0" + sHours;
      if (minutes < 10) sMinutes = "0" + sMinutes;
      console.log(sHours + ":" + sMinutes);
      result_group.start_time = sHours + ":" + sMinutes;


      var endTime = result_group.end_time;

      var hours = Number(endTime.match(/^(\d+)/)[1]);
      var minutes = Number(endTime.match(/:(\d+)/)[1]);
      //console.log("hrs mins ", hours, minutes)
      var AMPM = endTime.match(/\s(.*)$/)[1];
      if (AMPM == "pm" && hours < 12) hours = hours + 12;
      if (AMPM == "am" && hours == 12) hours = hours - 12;
      var sHours = hours.toString();
      var sMinutes = minutes.toString();
      if (hours < 10) sHours = "0" + sHours;
      if (minutes < 10) sMinutes = "0" + sMinutes;
      console.log(sHours + ":" + sMinutes);
      result_group.end_time = sHours + ":" + sMinutes;



      for (var i in result_group.users) {
        console.log(result_group.users[i])
        result_group.users[i].profile_image = baseUrl + profile_image_url + result_group.users[i].profile_image;
        result_group.users[i].full_name = result_group.users[i].first_name + ' ' + result_group.users[i].last_name;

      }
      for (var i in result_group.admin_users) {
        console.log(result_group.admin_users[i])
        result_group.admin_users[i].profile_image = baseUrl + profile_image_url + result_group.admin_users[i].profile_image;
        result_group.admin_users[i].full_name = result_group.users[i].first_name + ' ' + result_group.admin_users[i].last_name;

      }




      res.json({
        status: true,
        message: "Group found successfully",
        data: result_group
      })

    }
  })


});





/*------------------------------------------------------
     (23)  Edit small Group
--------------------------------------------------------*/

router.post('/edit_small_group', function (req, res) {
  console.log("paramsssss", req.body)
  console.log("hiii /admin/edit_small_group")
  upload_small_group(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in edit_small_group is ", req.file)
      console.log("dataaaaaaa in edit_small_group is ", req.body)

      var params = req.body;
      getSmallGroupImage(callback)




      function callback(small_group_image) {
        console.log("callback calls")
        if (params.users === 'undefined') {
          params.users = "";
        }
        else {
          params.users = params.users.split(',');
        }
        if (params.admin_users === 'undefined') {
          params.admin_users = "";
        }
        else {
          params.admin_users = params.admin_users.split(',');
        }
        var id = params.small_group_id;
        params.small_group_id = "";
        small_grp_img = "";
        params.small_group_image = small_group_image;
        SmallGroup.editSmallGroup(id, params, function (err, smallGroup) {
          if (err) {
            console.log(" error-- ", err);
          }
          else {
            console.log("smallGroup found ", smallGroup)
            res.json({
              status: true,
              message: "successfully updated small group",
              data: smallGroup
            })
          }
        })
      }

      function getSmallGroupImage(callback) {
        var small_group_image;
        if (req.file) {
          console.log("hiii file exists")
          small_group_image = req.file.filename;

          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Small Group',
            path: small_group_image_url,
            thumbnail: '',
            title: params.small_group_name
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(small_group_image)

        }
        else if (params.small_group_image != 'null') {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.small_group_image,
            dest: 'public/images/small_group/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              small_group_image = local_image;
              callback(small_group_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              small_group_image = "";
              callback(small_group_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }

        else {
          small_group_image = '';
          callback(small_group_image)
        }
      }

    }
  })

});







/*---------------------------------------------------------
        (24) Get Upcoming past Events
----------------------------------------------------------*/
router.get('/get_upcoming_past_events', function (req, res) {
  console.log("hiii get_upcoming_past_events")
  var baseUrl = req.protocol + '://' + req.get('host');
  Event.getUpcomingEvents(function (err, upcomingEvents) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("upcomingEvents found ", upcomingEvents)
      var upcomingEventsResult = [];
      for (var i in upcomingEvents) {
        upcomingEventsResult[i] = upcomingEvents[i].toObject();
        var groupsNames = [];
        for (var j in upcomingEventsResult[i].group_id) {
          console.log("user j ", upcomingEventsResult[i].group_id[j])
          groupsNames.push(upcomingEventsResult[i].group_id[j].group_name);
        }
        console.log(groupsNames)
        upcomingEventsResult[i].group_id = groupsNames.toString();

        upcomingEventsResult[i].event_cover = baseUrl + event_cover_url + upcomingEventsResult[i].event_cover;
        var date = upcomingEventsResult[i].date;
        upcomingEventsResult[i].date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
      }

      Event.getPastEvents(function (err, pastEvents) {
        if (err) {
          console.log(" error-- ", err);
        }

        else {
          console.log("pastEvents found ", pastEvents)
          var pastEventsResult = [];
          for (var i in pastEvents) {
            pastEventsResult[i] = pastEvents[i].toObject();
            var groupsNames = [];
            for (var j in pastEventsResult[i].group_id) {
              console.log("user j ", pastEventsResult[i].group_id[j])
              groupsNames.push(pastEventsResult[i].group_id[j].group_name);
            }
            console.log(groupsNames)
            pastEventsResult[i].group_id = groupsNames.toString();

            pastEventsResult[i].event_cover = baseUrl + event_cover_url + pastEventsResult[i].event_cover;
            var date = pastEventsResult[i].date;
            pastEventsResult[i].date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
          }

          var sendData = {
            upcomingEvents: upcomingEventsResult,
            pastEvents: pastEventsResult
          }
          res.json({
            status: true,
            message: "All Events found successfully",
            data: sendData
          })
        }
      })
    }


  })

});



/*---------------------------------------------------------
        (25) Get Event Detail
----------------------------------------------------------*/
router.post('/get_event_detail', function (req, res) {
  console.log("hiii get_event_detail", req.body)

  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');


  Event.getEventDetailByAdmin(params, function (err, eventDetail) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("eventDetail found ", eventDetail)

      var eventDetailResult = eventDetail.toObject();
      eventDetailResult.event_cover = baseUrl + event_cover_url + eventDetailResult.event_cover;
      var date = eventDetailResult.date;
      //  eventDetailResult.date = date.getDate()+'/' + (date.getMonth()+1) + '/'+date.getFullYear();


      res.json({
        status: true,
        message: "Event found successfully",
        data: eventDetailResult
      })

    }
  })


});





/*------------------------------------------------------
     (26)  Edit Event
--------------------------------------------------------*/

router.post('/edit_event', function (req, res) {
  console.log("hiii /admin/edit_event")

  upload_event_cover(req, res, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("files in edit_event is ", req.file)
      console.log("dataaaaaaa in edit_event is ", req.body)

      var params = req.body;
      //  console.log(/^[a-zA-Z]+$/.test('marriages'))
      getEditEventImage(callback)

    
      function callback(event_cover) {
        params.event_cover = event_cover;

        console.log('params.date', params.date)
        var newDate = params.date.split('T')

        console.log('params.newDate', newDate[0])
        params.date = new Date(newDate[0]);

        if (params.group_id === 'undefined') {
          params.group_id = "";
        }
        else {
          params.group_id = params.group_id.split(',');
        }

        var id = params.event_id;
        grp_img = "";
        Event.editEvent(id, params, function (err, event) {
          if (err) {
            console.log(" error-- ", err);
          }
          else {

            res.json({
              status: true,
              message: "successfully updated small group",
              data: event
            })
          }
        })
        // }
      }

      function getEditEventImage(callback) {
        var event_cover;
        if (req.file) {
          event_cover = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Event',
            path: event_cover_url,
            thumbnail: '',
            title: params.title
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(event_cover)
        }
        else if (params.event_cover != 'null') {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.event_cover,
            dest: 'public/images/event_cover/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              event_cover = local_image;
              callback(event_cover)
              console.log('File saved to', filename)
            }).catch((err) => {
              event_cover = "";
              callback(event_cover)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }

        else {
          event_cover = '';
          callback(event_cover)
        }
      }


    }
  })

});


/*------------------------------------------------------
     (27)  Remove Community Module
--------------------------------------------------------*/

router.post('/remove_community_module', function (req, res) {
  console.log("hiii /admin/remove_community_module")

  console.log("dataaaaaaa in remove_community_module is ", req.body)
  var params = req.body;

  if (params.type === 'GR') {
    Group.deleteGroup(params.type_id, function (err, deletedGroup) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deletedGroup group",
          data: deletedGroup
        })
      }
    })
  }

  else if (params.type === 'SG') {
    SmallGroup.deleteSmallGroup(params.type_id, function (err, deletedSmallGroup) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Small group",
          data: deletedSmallGroup
        })
      }
    })
  }

  else if (params.type === 'EV') {
    Event.deleteEvent(params.type_id, function (err, deletedEvent) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Event",
          data: deletedEvent
        })
      }
    })
  }

  else if (params.type === 'BR') {
    Betrothed.deleteBetrothed(params.type_id, function (err, deletedBetrothed) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Betrothed",
          data: deletedBetrothed
        })
      }
    })
  }

  else if (params.type === 'UM') {
    UpcomingMarriage.deleteUpcomingMarriage(params.type_id, function (err, deletedUpcomingMarriage) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Upcoming Marriage",
          data: deletedUpcomingMarriage
        })
      }
    })
  }

  else if (params.type === 'WL') {
    WeddingList.deleteWeddingList(params.type_id, function (err, deletedWeddingList) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Wedding List",
          data: deletedWeddingList
        })
      }
    })
  }

  else if (params.type === 'BL') {
    BirthdayList.deleteBirthdayList(params.type_id, function (err, deletedBirthdayList) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Birthday List",
          data: deletedBirthdayList
        })
      }
    })
  }



});



/*------------------------------------------------------
     (28)  Add Music Album
--------------------------------------------------------*/

router.post('/add_music_album', function (req, res) {
  console.log("paramsssss", req.body)
  console.log("hiii /admin/add_music_album")
  upload_music_album(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_music_album is ", req.file)
      console.log("dataaaaaaa in add_music_album is ", req.body)

      var params = req.body;
      params.status = 'A';
      getAlbumImage(callback)

      function callback(album_image) {
        params.album_image = album_image;
        MusicAlbum.addNewMusicAlbum(params, function (err, musicAlbum) {
          if (err) {
            console.log(" error-- ", err);
          }
          else {

            res.json({
              status: true,
              message: "successfully uploaded Music Album",
              data: musicAlbum
            })

          }
        })
      }
      function getAlbumImage(callback) {
        var album_image;
        if (req.file) {
          album_image = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Album',
            path: album_image_url,
            thumbnail: '',
            title: params.album_title
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(album_image)

        }
        else {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.album_image,
            dest: 'public/images/music_album/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              album_image = local_image;
              callback(album_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              album_image = "";
              callback(album_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }

      }
    }
  })

});





/*---------------------------------------------------------
        (29) Get Music Albums
----------------------------------------------------------*/
router.get('/get_music_albums', function (req, res) {
  console.log("hiii get_music_albums")

  var baseUrl = req.protocol + '://' + req.get('host');

  MusicAlbum.getMusicAlbums(function (err, musicAlbums) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      // console.log("musicAlbums found ",musicAlbums )

      for (var i in musicAlbums) {
        musicAlbums[i].album_image = baseUrl + album_image_url + musicAlbums[i].album_image;
      }

      res.json({
        status: true,
        message: "Music Albums found successfully",
        data: musicAlbums
      })
    }

  })

});



/*------------------------------------------------------
     (30)  Add Song To Album
--------------------------------------------------------*/

router.post('/add_song_to_album', function (req, res) {
  console.log("paramsssss", req.body)
  console.log("hiii /admin/add_song_to_album")
  upload_song_to_album(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_song_to_album is ", req.file)
      console.log("dataaaaaaa in add_song_to_album is ", req.body)

      var params = req.body;
      // params.status            = 'A';
      getAlbumSong(callback)

      function callback(song_file) {
        params.song_file = song_file;
        SongToAlbum.addNewSongToAlbum(params, function (err, song) {
          if (err) {
            console.log(" error-- ", err);
          }
          else {

            res.json({
              status: true,
              message: "successfully uploaded Music",
              data: song
            })


          }
        })
      }
      function getAlbumSong(callback) {
        var song_file;
        if (req.file) {
          song_file = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'A',
            section: 'Music',
            path: album_song_url,
            thumbnail: '',
            title: params.song_title
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(song_file)

        }
        else {
          var local_image = Date.now() + '.mp3';
          const options = {
            url: params.song_file,
            dest: 'public/audio/album_song/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              song_file = local_image;
              callback(song_file)
              console.log('File saved to', filename)
            }).catch((err) => {
              song_file = "";
              callback(song_file)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }
      }/// end function

    }
  })

});



/*---------------------------------------------------------
        (31) Get Draft Songs of Album
----------------------------------------------------------*/
router.post('/get_draft_songs_of_album', function (req, res) {
  console.log("hiii get_draft_songs_of_album")

  var baseUrl = req.protocol + '://' + req.get('host');
  var params = req.body;

  SongToAlbum.getDraftSongsOfAlbum(params, function (err, songs) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("songs found ", songs)

      for (var i in songs) {
        songs[i].song_file = baseUrl + album_song_url + songs[i].song_file;
      }

      res.json({
        status: true,
        message: "Music found successfully",
        data: songs
      })
    }

  })

});


/*---------------------------------------------------------
        (31) Get Songs of Album
----------------------------------------------------------*/
router.post('/get_songs_of_album', function (req, res) {
  console.log("hiii get_songs_of_album")

  var baseUrl = req.protocol + '://' + req.get('host');
  var params = req.body;

  SongToAlbum.getSongsOfAlbum(params, function (err, songs) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("songs found ", songs)
      var songsResult = [];
      for (var i in songs) {
        songsResult[i] = songs[i].toObject();
        songsResult[i].serial_no = parseInt(i) + 1;
        songsResult[i].song_file = baseUrl + album_song_url + songsResult[i].song_file;
      }

      songsResult.sort(function (a, b) {
        return (b.createdAt < a.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
      });

      res.json({
        status: true,
        message: "Music found successfully",
        data: songsResult
      })
    }

  })

});



/*---------------------------------------------------------
        (32) Accept/Reject request of betrotheds
----------------------------------------------------------*/

router.post('/accept_reject_betrothed', function (req, res) {
  console.log("hiii accept_reject_betrothed ", req.body)

  var baseUrl = req.protocol + '://' + req.get('host');
  var params = req.body;

  Betrothed.changeStatus(params, function (err, betrothed) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {
      if (params.accept_status == 'A') {
        send_notification_betrothed(betrothed.first_user_id, betrothed.second_user_id)
      }
      res.json({
        status: true,
        message: "successfully changed status",
        data: betrothed
      })
    }
  })

});




/*------------------------------------------------------
     (33)  Add Media Gallary
--------------------------------------------------------*/

router.post('/add_media_gallary', function (req, res) {
  console.log("hiii /admin/add_media_gallary")
  console.log("dataaaaaaa in add_media_gallary is ", req.body)

  var params = req.body;
  params.status = 'A';

  MediaGallary.addNewMediaGallary(params, function (err, mediaGallary) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully uploaded Media Gallary",
        data: mediaGallary
      })
    }
  })

});



/*------------------------------------------------------
     (34)  Add Media To Gallary
--------------------------------------------------------*/

router.post('/add_media_to_gallary', function (req, res) {
  console.log("paramsssss", req.body)
  console.log("hiii /admin/add_media_to_gallary")
  upload_media_to_gallary(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_media_to_gallary is ", req.file)
      console.log("dataaaaaaa in add_media_to_gallary is ", req.body)

      var params = req.body;
      params.status = 'A';
      getMedia(callback)

      function callback(media_file, thumbnail, media_type) {
        params.media_file = media_file;
        params.thumbnail = thumbnail;
        params.media_type = media_type;
        MediaToGallary.addNewMediaToGallary(params, function (err, media) {
          if (err) {
            console.log(" error-- ", err);
          }
          else {

            res.json({
              status: true,
              message: "successfully uploaded Media",
              data: media
            })
          }
        })
      }

      function getMedia(callback) {
        var media_file;
        var thumbnail;
        var media_type;

        if (req.file) {
          console.log("media exists")
          media_file = req.file.filename;
          var media = req.file.filename;


          if (params.media_type == 'V') {
            console.log("media exists video")
            media_type = params.media_type;
            thumbnail = Date.now() + '.jpg';
            ffmpeg('public/images/media_gallary/' + media).screenshots({
              count: 1,
              folder: 'public/images/media_gallary/thumbnails/',
              filename: thumbnail,
              size: '320x240'
            }).on('end', function (err, data) {
              if (err) {
                console.log("erorrrrrrrrrrrrrrrrr ", err)
              }
              console.log("dataaaa savesssssssssssssssss ", data)
            })


            var libParams = {
              image_name: req.file.filename,
              media_type: 'V',
              section: 'Gallary',
              path: gallary_media_url,
              thumbnail: thumbnail,
              title: ''
            }
            Library.addNewLibrary(libParams, function (err, library) {
              console.log(library);

            })

            callback(media_file, thumbnail, media_type)

          }
          else if (params.media_type == 'P') {
            console.log("media exists Photo")
            media_type = params.media_type;
            thumbnail = "";

            var libParams = {
              image_name: req.file.filename,
              section: 'Gallary',
              path: gallary_media_url,
              thumbnail: '',
              title: ''
            }
            Library.addNewLibrary(libParams, function (err, library) {
              console.log(library);

            })
            callback(media_file, thumbnail, media_type)

          }
        }
        else {
          console.log("media not exists")
          if (params.media_type == 'V') {
            console.log("media not exists video")
            media_type = params.media_type;
            var local_image = Date.now() + '.mp4';
            const options = {
              url: params.media_file,
              dest: 'public/images/media_gallary/' + local_image                  // Save to /path/to/dest/image.jpg
            }
            var thumbnail = Date.now() + '.jpg';
            const thumboptions = {
              url: params.thumbnail,
              dest: 'public/images/media_gallary/thumbnails' + thumbnail                  // Save to /path/to/dest/image.jpg
            }

            download.image(options)
              .then(({ filename, image }) => {
                media_file = local_image;
                console.log('File saved to', filename)
                download.image(thumboptions)
                  .then(({ filename, image }) => {
                    thumbnail = thumbnail;
                    console.log('File saved to', filename)
                    callback(media_file, thumbnail, media_type)
                  }).catch((err) => {
                    thumbnail = "";
                    callback(media_file, thumbnail, media_type)
                    console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
                    throw err
                  })
              }).catch((err) => {
                media_file = "";
                thumbnail = "";
                callback(media_file, thumbnail, media_type)
                console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
                throw err
              })


          }
          else if (params.media_type == 'I') {
            console.log("media not exists Photo")
            media_type = 'P';
            thumbnail = "";
            var local_image = Date.now() + '.jpg';
            const options = {
              url: params.media_file,
              dest: 'public/images/media_gallary/' + local_image                  // Save to /path/to/dest/image.jpg
            }

            download.image(options)
              .then(({ filename, image }) => {
                media_file = local_image;
                callback(media_file, thumbnail, media_type)
                console.log('File saved to', filename)
              }).catch((err) => {
                media_file = "";
                callback(media_file, thumbnail, media_type)
                console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
                throw err
              })


          }
        }
      }///end function
    }
  })

});



/*---------------------------------------------------------
        (35) Get Media Gallaries
----------------------------------------------------------*/
router.get('/get_media_gallaries', function (req, res) {
  console.log("hiii get_media_gallaries")

  MediaGallary.getAllMediaGallariesByAdmin(function (err, mediaGallaries) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("mediaGallaries found ", mediaGallaries)

      res.json({
        status: true,
        message: "Media Gallaries found successfully",
        data: mediaGallaries
      })

    }

  })

});



/*---------------------------------------------------------
        (36) Get Media of Gallary
----------------------------------------------------------*/
router.post('/get_media_of_gallaries', function (req, res) {
  console.log("hiii get_media_of_gallaries")

  var baseUrl = req.protocol + '://' + req.get('host');
  var params = req.body;

  MediaToGallary.getMediaOfGallaryByAdmin(params, function (err, media) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("media found ", media)

      for (var i in media) {
        if (media[i].media_type == 'V') {
          media[i].thumbnail = baseUrl + gallary_media_url + 'thumbnails/' + media[i].thumbnail;
        }
        media[i].media_file = baseUrl + gallary_media_url + media[i].media_file;
      }

      res.json({
        status: true,
        message: "Media found successfully",
        data: media
      })
    }

  })

});




/*---------------------------------------------------------
        (37) Get Album Detail
----------------------------------------------------------*/
router.post('/get_album_detail', function (req, res) {
  console.log("hiii get_album_detail", req.body)

  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');


  MusicAlbum.getAlbumDetailByAdmin(params, function (err, albumDetail) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("albumDetail found ", albumDetail)
      albumDetail.album_image = baseUrl + album_image_url + albumDetail.album_image;

      res.json({
        status: true,
        message: "Album found successfully",
        data: albumDetail
      })

    }
  })


});




/*------------------------------------------------------
     (38)  Edit Music Album
--------------------------------------------------------*/

router.post('/edit_music_album', function (req, res) {
  console.log("hiii /admin/edit_music_album")
  upload_music_album(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in edit_music_album is ", req.file)
      console.log("dataaaaaaa in edit_music_album is ", req.body)

      var params = req.body;

      getEditAlbumImage(callback)


      function callback(album_image) {
        params.album_image = album_image;
        var id = params.album_id;
        al_img = "";

        MusicAlbum.editMusicAlbum(id, params, function (err, musicAlbum) {
          if (err) {
            console.log(" error-- ", err);
          }
          else {

            res.json({
              status: true,
              message: "successfully updated Music Album",
              data: musicAlbum
            })
          }
        })
      }

      function getEditAlbumImage(callback) {
        var album_image;
        if (req.file) {
          album_image = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            path: 'Album',
            thumbnail: '',
            title: params.album_title
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(album_image)
        }
        else if (params.album_image != 'null') {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.album_image,
            dest: 'public/images/music_album/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              album_image = local_image;
              callback(album_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              album_image = "";
              callback(album_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }

        else {
          params.album_image = '';
          callback(album_image)
        }

      }
    }
  })

});



/*------------------------------------------------------
     (39)  Remove Music
--------------------------------------------------------*/

router.post('/remove_music', function (req, res) {
  console.log("hiii /admin/remove_music")

  console.log("dataaaaaaa in remove_music is ", req.body)
  var params = req.body;

  if (params.type === 'MA') {
    MusicAlbum.deleteMusicAlbum(params.type_id, function (err, deletedMusicAlbum) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Music Album",
          data: deletedMusicAlbum
        })
      }
    })
  }

  else if (params.type === 'MS') {
    SongToAlbum.deleteSongToAlbum(params.type_id, function (err, deletedSongToAlbum) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Song Of Album",
          data: deletedSongToAlbum
        })
      }
    })
  }


});




/*---------------------------------------------------------
        (40) Get Appoinments
----------------------------------------------------------*/
router.get('/get_appointment_requests', function (req, res) {
  console.log("hiii get_appointment_requests")
  var baseUrl = req.protocol + '://' + req.get('host');

  Appointment.getAppointmentRequests(function (err, appointmentRequests) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("appointmentRequests found ", appointmentRequests)
      for (var i in appointmentRequests) {
        appointmentRequests[i].user_id.profile_image = baseUrl + profile_image_url + appointmentRequests[i].user_id.profile_image;
      }


      res.json({
        status: true,
        message: "Appointment Requests found successfully",
        data: appointmentRequests
      })

    }

  })

});



/*---------------------------------------------------------
        (41) Accept/Reject request of Appointment
----------------------------------------------------------*/

router.post('/accept_reject_appointment', function (req, res) {
  console.log("hiii accept_reject_appointment")

  var baseUrl = req.protocol + '://' + req.get('host');
  var params = req.body;

  Appointment.changeStatusAppointment(params, function (err, appointment) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully changed status",
        data: appointment
      })
    }
  })

});



/*---------------------------------------------------------
        (42) Add a Blog Category
----------------------------------------------------------*/
router.post('/add_blog_category', function (req, res) {
  console.log("hiii /admin/add_blog_category", req.body)

  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');
  // console.log(pluralize('advices',1));
  var typeValue = params.name.split(' ')[0];
  var typeLower = typeValue.toLowerCase();
  var typePlural = pluralize(typeLower, 5);

  params.type = typePlural;
  params.status = 'A';
  console.log(typePlural);

  BlogCategory.addNewBlogCategory(params, function (err, newBlogCategory) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("newBlogCategory added ", newBlogCategory)

      res.json({
        status: true,
        message: "Blog Category added successfully",
        data: newBlogCategory
      })

    }
  })


});



/*---------------------------------------------------------
        (43) get_blog_categories
----------------------------------------------------------*/
router.get('/get_blog_categories', function (req, res) {
  console.log("hiii get_blog_categories")

  var baseUrl = req.protocol + '://' + req.get('host');

  BlogCategory.getAllBlogCategories(function (err, blogCategories) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("blogCategories found ", blogCategories)

      res.json({
        status: true,
        message: "Blog Categories found successfully",
        data: blogCategories
      })

    }

  })

});


/*---------------------------------------------------------
        (44) Add a Blog 
----------------------------------------------------------*/
router.post('/add_blog', function (req, res) {
  console.log("hiii /admin/add_blog", req.body)

  upload_blog(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_blog is ", req.file)
      console.log("dataaaaaaa in add_blog is ", req.body)

      var params = req.body;
      // params.status       = 'A';                         
      var baseUrl = req.protocol + '://' + req.get('host');
      getBlogImage(callback)

      function callback(blog_image) {
        params.blog_image = blog_image;
        // console.log("params after all ",params)
        Blog.addNewBlog(params, function (err, blog) {
          if (err) {
            console.log(" error-- ", err);
            res.json({
              status: false,
              message: "Something went wrong!",
              data: err
            })
          }
          else {

            console.log("blog added ", blog)

            res.json({
              status: true,
              message: "Blog added successfully",
              data: blog
            })

          }
        })
      }
      function getBlogImage(callback) {
        var blog_image;
        if (req.file) {
          blog_image = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Blog',
            path: blog_image_url,
            thumbnail: '',
            title: params.blog_title
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(blog_image)
        }
        else {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.blog_image,
            dest: 'public/images/blog_image/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              blog_image = local_image;
              callback(blog_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              blog_image = "";
              callback(blog_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }
      }
    }
  })

});

/*---------------------------------------------------------
        (44) Update Blog 
----------------------------------------------------------*/

router.put('/update_blog', function(req, res) {
  upload_blog(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_blog is ", req.file)
      console.log("dataaaaaaa in add_blog is ", req.body)

      var params = req.body;
      // params.status       = 'A';                         
      var baseUrl = req.protocol + '://' + req.get('host');
      getBlogImage(callback)

      function callback(blog_image) {
        params.blog_image = blog_image;
        // console.log("params after all ",params)
        Blog.updateBlog(params, function (err, blog) {
          if (err) {
            console.log(" error-- ", err);
            res.json({
              status: false,
              message: "Something went wrong!",
              data: err
            })
          }
          else {

            console.log("blog added ", blog)

            res.json({
              status: true,
              message: "Blog Updated successfully",
              data: blog
            })

          }
        })
      }
      function getBlogImage(callback) {
        var blog_image;
        if (req.file) {
          blog_image = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Blog',
            path: blog_image_url,
            thumbnail: '',
            title: params.blog_title
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(blog_image)
        }
        else {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.blog_image,
            dest: 'public/images/blog_image/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              blog_image = local_image;
              callback(blog_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              blog_image = "";
              callback(blog_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }
      }
    }
  })

})


/*---------------------------------------------------------
        (45) Get Draft Blogs
----------------------------------------------------------*/
router.get('/get_draft_blogs', function (req, res) {
  console.log("hiii get_draft_blogs")

  var baseUrl = req.protocol + '://' + req.get('host');

  Blog.getDraftBlogsByAdmin(function (err, blogs) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("blogs found ", blogs)
      var resultBlogs = [];

      for (var i in blogs) {
        resultBlogs[i] = blogs[i].toObject();
        resultBlogs[i].blog_image = baseUrl + blog_image_url + resultBlogs[i].blog_image;
        // var ast = HTML.parse(resultBlogs[i].blog); 
        // console.log(ast);
        // resultBlogs[i].blog = ast;
      }

      res.json({
        status: true,
        message: "Blogs found successfully",
        data: resultBlogs
      })

    }

  })

});


/*---------------------------------------------------------
        (45) Get Blogs
----------------------------------------------------------*/
router.get('/get_blogs', function (req, res) {
  console.log("hiii get_blogs")

  var baseUrl = req.protocol + '://' + req.get('host');

  Blog.getAllBlogsByAdmin(function (err, blogs) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("blogs found ", blogs)
      var resultBlogs = [];

      for (var i in blogs) {
        resultBlogs[i] = blogs[i].toObject();
        resultBlogs[i].blog_image = baseUrl + blog_image_url + resultBlogs[i].blog_image;
        // var ast = HTML.parse(resultBlogs[i].blog); 
        // console.log(ast);
        // resultBlogs[i].blog = ast;
      }

      res.json({
        status: true,
        message: "Blogs found successfully",
        data: resultBlogs
      })

    }

  })

});



/*---------------------------------------------------------
        (46) Get Blog Detail
----------------------------------------------------------*/
router.post('/get_blog_detail', function (req, res) {
  console.log("hiii get_blog_detail", req.body)

  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');


  Blog.getBlogDetailByAdmin(params, function (err, blogDetail) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("blogDetail found ", blogDetail)
      blogDetail.blog_image = baseUrl + blog_image_url + blogDetail.blog_image;

      res.json({
        status: true,
        message: "Blog found successfully",
        data: blogDetail
      })

    }
  })


});



/*---------------------------------------------------------
        (47) Get Alumni New Normal Users
----------------------------------------------------------*/
router.get('/get_alumni_new_normal_users', function (req, res) {
  console.log("hiii get_alumni_new_normal_users")

  var baseUrl = req.protocol + '://' + req.get('host');

  User.getAllAlumniByAdmin(function (err, alumnis) {
    if (err) {
      console.log("error - ", err)
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    // console.log(alumnis)
    for (var i in alumnis) {
      alumnis[i].profile_image = baseUrl + profile_image_url + alumnis[i].profile_image;
    }

    User.getAllNewMembersByAdmin(function (err, newMembers) {
      if (err) {
        console.log("error - ", err)
        res.json({
          status: false,
          message: "Something went wrong!",
          data: err
        })
      }
      console.log("newMembers ", newMembers)
      for (var i in newMembers) {
        newMembers[i].profile_image = baseUrl + profile_image_url + newMembers[i].profile_image;
      }

      User.getAllNormalMembersByAdmin(function (err, normalMembers) {
        if (err) {
          console.log("error - ", err)
          res.json({
            status: false,
            message: "Something went wrong!",
            data: err
          })
        }
        console.log("normalMembers ", normalMembers)
        for (var i in normalMembers) {
          normalMembers[i].profile_image = baseUrl + profile_image_url + normalMembers[i].profile_image;
        }
        var sendData = {
          alumnis: alumnis,
          newMembers: newMembers,
          normalMembers: normalMembers
        }
        res.json({
          status: true,
          message: "Users get succesfullly ",
          data: sendData
        })
      })
    })


  })

});




/*---------------------------------------------------------
        (48) Change Normal user to Alumni
----------------------------------------------------------*/

router.post('/change_to_alumni', function (req, res) {
  console.log("hiii change_to_alumni")

  var baseUrl = req.protocol + '://' + req.get('host');
  var params = req.body;

  User.changeStatusToAlumni(params, function (err, alumni) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully changed status",
        data: alumni
      })
    }
  })

});



/*---------------------------------------------------------
        (49) Add a Classified Category
----------------------------------------------------------*/
router.post('/add_classified_category', function (req, res) {
  console.log("hiii /admin/add_classified_category", req.body)

  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');
  // console.log(pluralize('advices',1));

  var typeValue = params.name.split(' ')[0];
  var typeLower = typeValue.toLowerCase();
  var typePlural = pluralize(typeLower, 5);

  params.type   = typePlural;
  console.log(typePlural);
  params.status = 'A';
  ClassifiedCategory.addNewClassifiedCategory(params, function (err, newClassifiedCategory) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("newClassifiedCategory added ", newClassifiedCategory)

      res.json({
        status: true,
        message: "New ClassifiedCategory added successfully",
        data: newClassifiedCategory
      })

    }
  })

});



/*---------------------------------------------------------
        (50) get_classifieds_categories
----------------------------------------------------------*/
router.get('/get_classifieds_categories', function (req, res) {
  console.log("hiii get_classifieds_categories")

  var baseUrl = req.protocol + '://' + req.get('host');

  ClassifiedCategory.getAllClassifiedsCategories(function (err, classifiedCategories) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("classifiedCategories found ", classifiedCategories)

      res.json({
        status: true,
        message: "Classified Categories found successfully",
        data: classifiedCategories
      })

    }

  })

});





/*---------------------------------------------------------
        (51) Add a Classified
----------------------------------------------------------*/
router.post('/add_classified', function (req, res) {
  console.log("hiii /admin/add_classified", req.body)

  upload_classified(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_classified is ", req.file)
      console.log("dataaaaaaa in add_classified is ", req.body)

      var params = req.body;
      params.status = 'A';
      var baseUrl = req.protocol + '://' + req.get('host');
      getClassifiedImage(callback);

      function callback(classified_image) {
        params.classified_image = classified_image;
        Classified.addNewClassified(params, function (err, classified) {
          if (err) {
            console.log(" error-- ", err);
            res.json({
              status: false,
              message: "Something went wrong!",
              data: err
            })
          }
          else {

            console.log("classified added ", classified)

            res.json({
              status: true,
              message: "Classified added successfully",
              data: classified
            })


          }
        })
      }
      function getClassifiedImage(callback) {
        var classified_image;
        if (req.file) {
          classified_image = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Classified',
            path: classified_image_url,
            thumbnail: '',
            title: params.classified_title
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(classified_image)

        }
        else {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.classified_image,
            dest: 'public/images/classified_image/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              classified_image = local_image;
              callback(classified_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              classified_image = "";
              callback(classified_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }
      }
    }
  })

});



/*---------------------------------------------------------
        (52) Get Classifieds of category
----------------------------------------------------------*/
router.post('/get_classifieds_of_category', function (req, res) {
  console.log("hiii get_classifieds_of_category")

  var baseUrl = req.protocol + '://' + req.get('host');
  var params = req.body;

  Classified.getClassifiedsOfCategoryByAdmin(params, function (err, classifieds) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("classifieds found ", classifieds)
      var resultclassifieds = [];

      for (var i in classifieds) {
        resultclassifieds[i] = classifieds[i].toObject();
        resultclassifieds[i].classified_image = baseUrl + classified_image_url + resultclassifieds[i].classified_image;
        // var ast = HTML.parse(resultclassifieds[i].blog); 
        // console.log(ast);
        // resultclassifieds[i].blog = ast;
      }

      res.json({
        status: true,
        message: "Classifieds found successfully",
        data: resultclassifieds
      })

    }

  })

});


/*---------------------------------------------------------
        (50) get_classifieds
----------------------------------------------------------*/
router.get('/get_classifieds', function (req, res) {
  console.log("hiii get_classifieds")

  var baseUrl = req.protocol + '://' + req.get('host');

  Classified.getAllClassifieds(function (err, classifieds) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("classifieds found ", classifieds)
      var resultclassifieds = [];

      for (var i in classifieds) {
        resultclassifieds[i] = classifieds[i].toObject();
        resultclassifieds[i].classified_image = baseUrl + classified_image_url + resultclassifieds[i].classified_image;
        // var ast = HTML.parse(resultclassifieds[i].blog); 
        // console.log(ast);
        // resultclassifieds[i].blog = ast;
      }
      res.json({
        status: true,
        message: "Classifieds found successfully",
        data: resultclassifieds
      })

    }

  })

});



/*---------------------------------------------------------
        (53) Get Classified Detail
----------------------------------------------------------*/
router.post('/get_classified_detail', function (req, res) {
  console.log("hiii get_classified_detail", req.body)

  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');


  Classified.getClassifiedDetailByAdmin(params, function (err, classifiedDetail) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("classifiedDetail found ", classifiedDetail)
      classifiedDetail.classified_image = baseUrl + classified_image_url + classifiedDetail.classified_image;

      res.json({
        status: true,
        message: "Classified Detail found successfully",
        data: classifiedDetail
      })

    }
  })


});



/*---------------------------------------------------------
        (54) Get Recommendation Requests
----------------------------------------------------------*/
router.get('/get_recommendation_requests', function (req, res) {
  console.log("hiii get_recommendation_requests")

  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');


  Recommendation.getRecommendationRequests(function (err, recommendations) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("recommendations found ", recommendations)
      for (var i in recommendations) {
        recommendations[i].user_id.profile_image = baseUrl + profile_image_url + recommendations[i].user_id.profile_image;
      }

      res.json({
        status: true,
        message: "Recommendations found successfully",
        data: recommendations
      })

    }
  })
});

/*---------------------------------------------------------
        (54) Get Recommendation Requests
----------------------------------------------------------*/
router.put('/update_recommendation', recommeded_pdf_letter, function (req, res) {
  console.log("hiii update_recommendation")

  var params = req.body;
  params.status = "A"
  params.pdf_letter = `/${req.file.filename}`
  var baseUrl = req.protocol + '://' + req.get('host');


  Recommendation.updateRecommendation(params, function (err, recommendations) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {
      res.json({
        status: true,
        message: "Recommendations updated Successfully",
        data: recommendations
      })

    }
  })
});





/*---------------------------------------------------------
        (55) Approve/Cancel request of recommendation
----------------------------------------------------------*/

router.post('/approve_cancel_recommendation_request', function (req, res) {
  console.log("hiii approve_cancel_recommendation_request")

  var baseUrl = req.protocol + '://' + req.get('host');
  var params = req.body;

  Recommendation.changeStatusRecommendation(params, function (err, recommendation) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully changed status",
        data: recommendation
      })
    }
  })

});



/*---------------------------------------------------------
        (56) Get Appoved Canceled Recommendations
----------------------------------------------------------*/
router.get('/get_appoved_canceled_recommendations', function (req, res) {
  console.log("hiii get_appoved_canceled_recommendations")

  var baseUrl = req.protocol + '://' + req.get('host');

  Recommendation.getApprovedCanceledRecommendations(function (err, approvedRecommendations) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("approvedRecommendations found ", approvedRecommendations)
      resultRecommendations = [];
      for (var i in approvedRecommendations) {
        resultRecommendations[i] = approvedRecommendations[i].toObject();
        resultRecommendations[i].user_id.profile_image = baseUrl + profile_image_url + resultRecommendations[i].user_id.profile_image;
      }

      // Recommendation.getcanceledRecommendations(function (err,canceledRecommendations) {
      //     if(err)
      //     {
      //       console.log(" error-- ",err);
      //     }

      //     else {
      //        console.log("canceledRecommendations found ",canceledRecommendations )
      //           for(var i in canceledRecommendations) {
      //             canceledRecommendations[i].user_id.profile_image = baseUrl + profile_image_url + canceledRecommendations[i].user_id.profile_image;
      //           }

      //           var sendData = {
      //             approvedRecommendations : approvedRecommendations,
      //             canceledRecommendations : canceledRecommendations
      //           }

      res.json({
        status: true,
        message: "Recommendations found successfully",
        data: resultRecommendations
      })
    }
    // })


    // }

  })

});


/*------------------------------------------------------
     (57)  Edit Media Gallary
--------------------------------------------------------*/

router.post('/edit_media_gallary', function (req, res) {
  console.log("hiii /admin/edit_media_gallary")

  console.log("dataaaaaaa in edit_media_gallary is ", req.body)

  var params = req.body;
  var id = params.gallary_id;

  MediaGallary.editMediaGallary(id, params, function (err, mediaGallary) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully updated Media Gallary",
        data: mediaGallary
      })
    }
  })

});



/*------------------------------------------------------
     (58)  Remove Media
--------------------------------------------------------*/

router.post('/remove_media', function (req, res) {
  console.log("hiii /admin/remove_media")

  console.log("dataaaaaaa in remove_media is ", req.body)
  var params = req.body;

  if (params.type === 'GA') {
    MediaGallary.deleteMediaGallary(params.type_id, function (err, deletedMediaGallary) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Media Gallary",
          data: deletedMediaGallary
        })
      }
    })
  }

  else if (params.type === 'ME') {
    MediaToGallary.deleteMediaToGallary(params.type_id, function (err, deletedMediaToGallary) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Media of Gallary",
          data: deletedMediaToGallary
        })
      }
    })
  }


});



/*---------------------------------------------------------
        (59) Get Gallary Detail
----------------------------------------------------------*/
router.post('/get_gallary_detail', function (req, res) {
  console.log("hiii get_gallary_detail", req.body)

  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');


  MediaGallary.getMediaGallaryDetail(params, function (err, mediaDetail) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("mediaDetail found ", mediaDetail)

      res.json({
        status: true,
        message: "Media Detail found successfully",
        data: mediaDetail
      })

    }
  })

});




/*---------------------------------------------------------
        (60) Get Today/Upcoming Appointments
----------------------------------------------------------*/
router.get('/get_today_upcoming_appointments', function (req, res) {
  console.log("hiii get_today_upcoming_appointments")

  var baseUrl = req.protocol + '://' + req.get('host');

  Appointment.getTodaysAppointmentsByAdmin(function (err, todaysAppointments) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("todaysAppointments found ", todaysAppointments)
      var todaysAppointmentsResult = [];
      for (var i in todaysAppointments) {
        todaysAppointmentsResult[i] = todaysAppointments[i].toObject();
        todaysAppointmentsResult[i].user_id.profile_image = baseUrl + profile_image_url + todaysAppointmentsResult[i].user_id.profile_image;
        var dat = todaysAppointmentsResult[i].date_of_appointment;
        todaysAppointmentsResult[i].date_of_appointment = dat.getDate() + "/" + parseInt(dat.getMonth()+ 1) + "/" + dat.getFullYear();
      }
      Appointment.getUpcomingAppointmentsByAdmin(function (err, upcomingAppointments) {
        if (err) {
          console.log(" error-- ", err);
        }

        else {
          console.log("upcomingAppointments found ", upcomingAppointments)
          upcomingAppointmentsResult = [];
          for (var i in upcomingAppointments) {
            upcomingAppointmentsResult[i] = upcomingAppointments[i].toObject();
            upcomingAppointmentsResult[i].user_id.profile_image = baseUrl + profile_image_url + upcomingAppointmentsResult[i].user_id.profile_image;
            var dat = upcomingAppointmentsResult[i].date_of_appointment;
            upcomingAppointmentsResult[i].date_of_appointment = dat.getDate() + "/" + parseInt(dat.getMonth()+ 1)  + "/" + dat.getFullYear();
          }

          Appointment.getAppointmentRequests(function (err, appointmentRequests) {

            var sendData = {
              todaysAppointments: todaysAppointmentsResult,
              upcomingAppointments: upcomingAppointmentsResult,
              appointmentRequestsCount: appointmentRequests.length
            }

            res.json({
              status: true,
              message: "Appointments found successfully",
              data: sendData
            })
          })
        }
      })

    }

  })

});



/*------------------------------------------------------
     (61)  Edit Contact Detail
--------------------------------------------------------*/

router.post('/edit_contact_detail', function (req, res) {
  console.log("hiii /admin/edit_contact_detail")

  console.log("dataaaaaaa in edit_contact_detail is ", req.body)

  var params = req.body;

  Contact.editContactDetail(params, function (err, contactDetail) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {
      res.json({
        status: true,
        message: "successfully updated Contact Detail",
        data: contactDetail
      })
    }
  })
});


/*---------------------------------------------------------
        (62) Get Contact Detail
----------------------------------------------------------*/
router.get('/get_contact_detail', function (req, res) {
  console.log("hiii get_contact_detail")

  var baseUrl = req.protocol + '://' + req.get('host');

  Contact.getContactDetail(function (err, contactDetail) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("contactDetail found ", contactDetail)

      res.json({
        status: true,
        message: "Contact Detail found successfully",
        data: contactDetail
      })

    }

  })

});




/*---------------------------------------------------------
        (63) Add a Poll
----------------------------------------------------------*/
router.post('/add_poll', function (req, res) {
  console.log("hiii /admin/add_poll", req.body)

  upload_poll(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_poll is ", req.file)
      console.log("dataaaaaaa in add_poll is ", req.body)

      var params = req.body;
      getPollImage(callback)

      function callback(poll_image) {
        params.poll_image = poll_image;
        //  params.status            = 'A';
        var optionsList = params.options.split('^');
        if (params.status == 'A') {
          params.start_time = new Date();
        }
        else if (params.status == 'S') {
          params.start_time = "";
        }
        params.end_time = new Date(params.end_time);
        params.options_count = optionsList.length;
        var baseUrl = req.protocol + '://' + req.get('host');

        Poll.addNewPoll(params, function (err, poll) {
          if (err) {
            console.log(" error-- ", err);
            res.json({
              status: false,
              message: "Something went wrong!",
              data: err
            })
          }
          else {

            console.log("poll added ", poll)
            for (var i in optionsList) {
              var pollOptionParams = {
                poll_id: poll._id,
                option_no: parseInt(i) + 1,
                option: optionsList[i],
                status: 'A'
              }
              addOptionstoQuestion(pollOptionParams);
            }
            res.json({
              status: true,
              message: "poll added successfully",
              data: poll
            })

          }
        })
      }

      function getPollImage(callback) {
        var poll_image;
        if (req.file) {
          poll_image = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Poll',
            path: poll_image_url,
            thumbnail: '',
            title: params.poll_title
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(poll_image)
        }
        else {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.poll_image,
            dest: 'public/images/poll_image/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              poll_image = local_image;
              callback(poll_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              poll_image = "";
              callback(poll_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }


      }
    }
  })

  function addOptionstoQuestion(pollOptionParams) {
    PollOption.addNewPollOption(pollOptionParams, function (err, pollOptions) {
      console.log(pollOptions)
    })
  }

});



/*---------------------------------------------------------
        (64) Get Closed Polls
----------------------------------------------------------*/
router.get('/get_closed_polls', function (req, res) {
  console.log("hiii get_closed_polls")

  var baseUrl = req.protocol + '://' + req.get('host');

  Poll.getClosedPollsByAdmin(function (err, closedPolls) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("closedPolls found ", closedPolls)
      for (var i in closedPolls) {
        if (closedPolls[i].poll_image != '') {
          closedPolls[i].poll_image = baseUrl + poll_image_url + closedPolls[i].poll_image;
        } else {
          closedPolls[i].poll_image = ""
        }
      }
      res.json({
        status: true,
        message: "Closed Polls found successfully",
        data: closedPolls
      })

    }

  })

});




/*---------------------------------------------------------
        (65) Get Active Polls
----------------------------------------------------------*/
router.get('/get_active_polls', function (req, res) {
  console.log("hiii get_active_polls")

  var baseUrl = req.protocol + '://' + req.get('host');

  Poll.getActivePolls(function (err, activePolls) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("activePolls found ", activePolls)
      var resultActivePolls = [];
      for (var i in activePolls) {
        resultActivePolls[i] = activePolls[i].toObject();
        if (resultActivePolls[i].poll_image != '') {
          resultActivePolls[i].poll_image = baseUrl + poll_image_url + resultActivePolls[i].poll_image;
        } else {
          resultActivePolls[i].poll_image = ""
        }
      }


      res.json({
        status: true,
        message: "Active Polls found successfully",
        data: resultActivePolls
      })

    }

  })

});





/*---------------------------------------------------------
        (65) Get Draft Polls
----------------------------------------------------------*/
router.get('/get_draft_polls', function (req, res) {
  console.log("hiii get_draft_polls")

  var baseUrl = req.protocol + '://' + req.get('host');

  Poll.getDraftPolls(function (err, draftPolls) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("draftPolls found ", draftPolls)
      var resultDraftPolls = [];
      for (var i in draftPolls) {
        resultDraftPolls[i] = draftPolls[i].toObject();
        if (resultDraftPolls[i].poll_image != '') {
          resultDraftPolls[i].poll_image = baseUrl + poll_image_url + resultDraftPolls[i].poll_image;
        } else {
          resultDraftPolls[i].poll_image = ""
        }
      }
      res.json({
        status: true,
        message: "Draft Polls found successfully",
        data: resultDraftPolls
      })

    }

  })

});


/*---------------------------------------------------------
        (65) Get Past Polls Settings
----------------------------------------------------------*/
router.get('/get_past_polls_seetings', function (req, res) {
  console.log("hiii get_past_polls_seetings")

  PollSetting.getPollSettings(function (err, pollSettings) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("pollSettings found ", pollSettings)

      res.json({
        status: true,
        message: "Past Polls Settings found successfully",
        data: pollSettings
      })

    }

  })

});



/*------------------------------------------------------
       (66)  Edit Past Poll Settings
  --------------------------------------------------------*/

router.post('/edit_past_poll_settings', function (req, res) {
  console.log("hiii /admin/edit_past_poll_settings")

  console.log("dataaaaaaa in edit_past_poll_settings is ", req.body)

  var params = req.body;

  PollSetting.editPollSetting(params, function (err, pollSetting) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully updated Past polls visibility settings",
        data: pollSetting
      })
    }
  })

});



/*---------------------------------------------------------
        (66) Get Poll Detail
----------------------------------------------------------*/
router.post('/get_poll_detail', function (req, res) {
  console.log("hiii get_poll_detail ", req.body)

  var baseUrl = req.protocol + '://' + req.get('host');
  var params = req.body;
  Poll.getPollDetail(params, function (err, pollDetail) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      //  console.log("pollDetail found ",pollDetail)
      var resultPollDetail = pollDetail.toObject();
      resultPollDetail.poll_image = baseUrl + poll_image_url + resultPollDetail.poll_image;

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
          getVotingcount(optionsObject, i, callback)
          function callback(votes, i, optionsingle) {
            totalVotes = totalVotes + votes;
            optionsingle.votesCount = votes;
            console.log(optionsingle)
            resultOptions.push(optionsingle);
            if (resultOptions.length == options.length) {
              console.log("iiiiiiiiiiiii ", i)
              for (var i in resultOptions) {
                var percent = (resultOptions[i].votesCount / totalVotes) * 100;
                resultOptions[i].precentCount = Math.round(percent);
              }
              resultPollDetail.options = resultOptions;
              console.log(resultPollDetail)
              CommentPoll.getCommentsOnPoll(params, function (err, commentsOnPoll) {
                resultPollDetail.comments = commentsOnPoll;
                res.json({
                  status: true,
                  message: "Poll Detail found successfully",
                  data: resultPollDetail
                })

              })
            }

          }
        }
      })

    }
  })

  function getVotingcount(option, i, callback) {
    VoteToPoll.getVotesOfPollOption(option._id, function (err, votes) {
      callback(votes.length, i, option)
    })
  }

});




/*------------------------------------------------------
     (67)  Remove Classified
--------------------------------------------------------*/

router.post('/remove_classified', function (req, res) {
  console.log("hiii /admin/remove_classified")

  console.log("dataaaaaaa in remove_classified is ", req.body)
  var params = req.body;

  if (params.type === 'CL') {
    Classified.deleteClassified(params.type_id, function (err, deletedClassified) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted deletedClassified",
          data: deletedClassified
        })
      }
    })
  }

  else if (params.type === 'CA') {
    ClassifiedCategory.deleteClassifiedCategory(params.type_id, function (err, deletedClassifiedCategory) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Classified Category",
          data: ClassifiedCategory
        })
      }
    })
  }


});



/*---------------------------------------------------------
        (68) Add online Store Link
----------------------------------------------------------*/
router.post('/add_online_store_link', function (req, res) {
  console.log("hiii /admin/add_online_store_link", req.body)

  var params = req.body;
  //params.status = 'A';

  OnlineStore.addNewOnlineStore(params, function (err, newOnlineStore) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("newOnlineStore added ", newOnlineStore)

      if (params.link_url == 'N') {
        var linkParams = {
          title: params.name,
          url: params.online_store_url,
          status: 'A'
        }
        Link.addNewLink(linkParams, function (err, link) {
          console.log("link addeddddd ", link)
          res.json({
            status: true,
            message: "New Online Store added successfully",
            data: newOnlineStore
          })
        })
      }
      else if (params.link_url == 'Y') {

        res.json({
          status: true,
          message: "New Online Store added successfully",
          data: newOnlineStore
        })

      }

    }
  })

});


/*------------------------------------------------------
       (69)  Edit Online Store Link
  --------------------------------------------------------*/

router.post('/edit_online_store_link', function (req, res) {
  console.log("hiii /admin/edit_online_store_link")

  console.log("dataaaaaaa in edit_online_store_link is ", req.body)

  var params = req.body;

  OnlineStore.editOnlineStore(params, function (err, onlineStore) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully updated Online Store",
        data: onlineStore
      })
    }
  })

});



/*---------------------------------------------------------
        (70) Get Online Stores
----------------------------------------------------------*/
router.get('/get_online_stores', function (req, res) {
  console.log("hiii get_online_stores")

  var baseUrl = req.protocol + '://' + req.get('host');

  OnlineStore.getOnlineStores(function (err, onlineStores) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("onlineStores found ", onlineStores)


      res.json({
        status: true,
        message: "onlineStores found successfully",
        data: onlineStores
      })

    }

  })

});


/*---------------------------------------------------------
        (70) Get Drafted Online Stores
----------------------------------------------------------*/
router.get('/get_draft_online_stores', function (req, res) {
  console.log("hiii get_draft_online_stores")

  var baseUrl = req.protocol + '://' + req.get('host');

  OnlineStore.getDraftOnlineStores(function (err, onlineStores) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("onlineStores found ", onlineStores)


      res.json({
        status: true,
        message: "onlineStores found successfully",
        data: onlineStores
      })

    }

  })

});




/*------------------------------------------------------
     (71)  Edit Service Hours
--------------------------------------------------------*/

router.post('/edit_service_hours', function (req, res) {
  console.log("hiii /admin/edit_service_hours")

  console.log("dataaaaaaa in edit_service_hours is ", req.body)

  var params = req.body;

  ServiceHour.editServiceHours(params, function (err, serviceHours) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully updated Service Hours",
        data: serviceHours
      })
    }
  })

});




/*---------------------------------------------------------
        (72) Get Service Hours Detail
----------------------------------------------------------*/
router.get('/get_service_hours_detail', function (req, res) {
  console.log("hiii get_service_hours_detail")

  var baseUrl = req.protocol + '://' + req.get('host');

  ServiceHour.getServiceHoursDetail(function (err, sericeHoursDetail) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("sericeHoursDetail found ", sericeHoursDetail)

      res.json({
        status: true,
        message: "Service Hours Detail found successfully",
        data: sericeHoursDetail
      })

    }

  })

});




/*---------------------------------------------------------
        (73) Add News Link
----------------------------------------------------------*/
router.post('/add_news_link', function (req, res) {
  console.log("hiii /admin/add_news_link")
  upload_news(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in create_group is ", req.file)
      console.log("dataaaaaaa in create_group is ", req.body)

      var params = req.body;

      /////// CAll function //////////// 
      addNewsLink(callback);

      function callback(news_image) {

        params.status = 'A';
        params.news_image = news_image;

        NewsUrl.addNewNewsUrl(params, function (err, newNewsUrl) {
          if (err) {
            console.log(" error-- ", err);
            res.json({
              status: false,
              message: "Something went wrong!",
              data: err
            })
          }
          else {

            console.log("newNewsUrl added ", newNewsUrl)
            if (params.link_url == 'N') {
              var linkParams = {
                title: params.name,
                url: params.news_url,
                status: 'A'
              }
              Link.addNewLink(linkParams, function (err, link) {
                console.log("link addeddddd ", link)
                res.json({
                  status: true,
                  message: "New News Url added successfully",
                  data: newNewsUrl
                })
              })
            }
            else if (params.link_url == 'Y') {

              res.json({
                status: true,
                message: "New News Url added successfully",
                data: newNewsUrl
              })

            }


          }
        })
      }

      function addNewsLink(callback) {
        var news_image;
        if (req.file) {
          console.log("hii if")
          news_image = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'News',
            path: news_image_url,
            thumbnail: '',
            title: params.news_image
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(news_image)

        }
        else if (!req.file) {
          console.log("hiiiii else ")
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.news_image,
            dest: 'public/images/news/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              news_image = local_image;
              callback(news_image)
              console.log("params ss ", params.news_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              news_image = "";
              callback(news_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }
      }
    }
  })

});




/*---------------------------------------
			   (63) add_bible 
 ----------------------------------------*/
 router.post('/add_bible_link', function (req, res) {
	var params = req.body;
	var baseUrl = req.protocol + '://' + req.get('host');

	var appVersion = req.get('app_version');
	console.log("hiiio appversion ", appVersion)
  Bible.addBibleLink(params, function(err, bible) {
    if (err) {
      console.log(" error-- ", err);
      res.statusCode = er;
      res.json({
        status: 0,
        message: "Something went wrong!",
        data: err
      })
    } else {
      res.statusCode = 200;
      res.json({
        status: 1,
        message: "Bible added successfully",
        data: bible
      })
    }
  })
});

/*------------------------------------------------------
     (74)  Edit New Bible Link
--------------------------------------------------------*/

router.put('/edit_bible_link', function (req, res) {
  console.log("hiii /admin/edit_bible_link")

  console.log("dataaaaaaa in edit_bible_link is ", req.body)

  var params = req.body;

  params.bible_id = req.query.bible_id
  Bible.editBibleLink(params, function (err, bibleUrl) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {
      res.json({
        status: true,
        message: "successfully updated Bible Url",
        data: bibleUrl
      })
    }
  })

});

/*------------------------------------------------------
     (74) Delete Bible Link
--------------------------------------------------------*/

router.delete('/delete_bible_link', function (req, res) {
  console.log("hiii /admin/delete_bible_link")

  console.log("dataaaaaaa in edit_bible_link is ", req.body)

  var params = req.body;

  Bible.deleteBibleUrl(req.query.bible_id, function (err, bibleUrl) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {
      res.json({
        status: true,
        message: "successfully deleted Bible Url",
        data: bibleUrl
      })
    }
  })

});


/*---------------------------------------
			   (63) get_bible 
 ----------------------------------------*/
 router.post('/get_bible', function (req, res) {
	console.log("hiii get_bible")
	var params = req.body;
  Bible.getBibleLink(params, function(err, bible) {
    if (err) {
      console.log(" error-- ", err);
      res.statusCode = er;
      res.json({
        status: 0,
        message: "Something went wrong!",
        data: err
      })
    } else {
      res.statusCode = 200;
      res.json({
        status: 1,
        message: "Bible found successfully",
        data: bible
      })
    }
  })
});

/*------------------------------------------------------
     (74)  Edit New Link
--------------------------------------------------------*/

router.post('/edit_news_link', function (req, res) {
  console.log("hiii /admin/edit_news_link")

  console.log("dataaaaaaa in edit_news_link is ", req.body)

  var params = req.body;

  NewsUrl.editNewsUrl(params, function (err, newsUrl) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      res.json({
        status: true,
        message: "successfully updated News Url",
        data: newsUrl
      })
    }
  })

});



/*---------------------------------------------------------
        (75) Get News Urls
----------------------------------------------------------*/
router.get('/get_news_urls', function (req, res) {
  console.log("hiii get_news_urls")

  var baseUrl = req.protocol + '://' + req.get('host');

  NewsUrl.getNewsUrls(function (err, newsUrls) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("newsUrls found ", newsUrls)


      res.json({
        status: true,
        message: "News Urls found successfully",
        data: newsUrls
      })

    }

  })

});



/*---------------------------------------------------------
        (76) Add a About Us Page
----------------------------------------------------------*/
router.post('/add_about_page', function (req, res) {
  console.log("hiii /admin/add_about_page", req.body)

  upload_about_page(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_about_page is ", req.file)
      console.log("dataaaaaaa in add_about_page is ", req.body)

      var params = req.body;
      getAboutImage(callback)

      //  params.status          = 'A';

      var baseUrl = req.protocol + '://' + req.get('host');
      function callback(about_cover_image) {
        params.about_cover_image = about_cover_image;
        AboutPage.addNewAboutPage(params, function (err, aboutPage) {
          if (err) {
            console.log(" error-- ", err);
            res.json({
              status: false,
              message: "Something went wrong!",
              data: err
            })
          }
          else {

            console.log("aboutPage added ", aboutPage)
            res.json({
              status: true,
              message: "About Page added successfully",
              data: aboutPage
            })


          }
        })
      }
      function getAboutImage(callback) {
        var about_cover_image;
        if (req.file) {
          about_cover_image = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'About',
            path: about_image_url,
            thumbnail: '',
            title: params.title
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(about_cover_image)
        }
        else {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.about_cover_image,
            dest: 'public/images/about_cover/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              about_cover_image = local_image;
              callback(about_cover_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              about_cover_image = "";
              callback(about_cover_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }
      }
    }
  })

});






/*---------------------------------------------------------
        (77) Get Draft About Us Pages
----------------------------------------------------------*/
router.get('/get_draft_about_pages', function (req, res) {
  console.log("hiii get_draft_about_pages")

  var baseUrl = req.protocol + '://' + req.get('host');

  AboutPage.getDraftAboutPages(function (err, aboutPages) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("aboutPages found ", aboutPages)
      for (var i in aboutPages) {
        aboutPages[i].about_cover_image = baseUrl + about_image_url + aboutPages[i].about_cover_image;
      }


      res.json({
        status: true,
        message: "About Pages found successfully",
        data: aboutPages
      })

    }

  })

});


/*---------------------------------------------------------
        (77) Get About Us Pages
----------------------------------------------------------*/
router.get('/get_about_pages', function (req, res) {
  console.log("hiii get_about_pages")

  var baseUrl = req.protocol + '://' + req.get('host');

  AboutPage.getAboutPages(function (err, aboutPages) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("aboutPages found ", aboutPages)
      for (var i in aboutPages) {
        aboutPages[i].about_cover_image = baseUrl + about_image_url + aboutPages[i].about_cover_image;
      }


      res.json({
        status: true,
        message: "About Pages found successfully",
        data: aboutPages
      })

    }

  })

});



/*---------------------------------------------------------
        (78) Get About Detail
----------------------------------------------------------*/
router.post('/get_about_page_detail', function (req, res) {
  console.log("hiii get_about_page_detail", req.body)

  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');


  AboutPage.getAboutpageDetail(params, function (err, aboutPageDetail) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("aboutPageDetail found ", aboutPageDetail)
      aboutPageDetail.about_cover_image = baseUrl + about_image_url + aboutPageDetail.about_cover_image;

      res.json({
        status: true,
        message: "About Page Detail found successfully",
        data: aboutPageDetail
      })

    }
  })

});




/*------------------------------------------------------
     (79)  Edit About Detail
--------------------------------------------------------*/

router.post('/edit_about_page_detail', function (req, res) {
  console.log("hiii /admin/edit_about_page_detail")
  upload_about_page(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in edit_about_page_detail is ", req.file)
      console.log("dataaaaaaa in edit_about_page_detail is ", req.body)

      var params = req.body;
      getEditAboutImage(callback)

      function callback(about_cover_image) {
        params.about_cover_image = about_cover_image;
        var id = params.about_page_id;
        abt_img = "";
        AboutPage.editAboutPage(id, params, function (err, aboutPage) {
          if (err) {
            console.log(" error-- ", err);
          }
          else {

            res.json({
              status: true,
              message: "successfully updated About Page",
              data: aboutPage
            })
          }
        })
      }
      function getEditAboutImage(callback) {
        var about_cover_image;
        if (req.file) {
          about_cover_image = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'About',
            path: about_image_url,
            thumbnail: '',
            title: params.title
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);
          })
          callback(about_cover_image)
        }
        else if (params.logo != 'null') {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.about_cover_image,
            dest: 'public/images/about_cover/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              about_cover_image = local_image;
              callback(about_cover_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              about_cover_image = "";
              callback(about_cover_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }
        else {
          params.about_cover_image = '';
          callback(about_cover_image)
        }

      }
    }
  })

});



/*------------------------------------------------------
     (80)  Delete About Page/Blog
--------------------------------------------------------*/

router.post('/delete_about_page_blog', function (req, res) {
  console.log("hiii /admin/delete_about_page_blog")

  console.log("dataaaaaaa in delete_about_page_blog is ", req.body)
  var params = req.body;
  if (params.type === 'AP') {
    AboutPage.deleteAboutPage(params.type_id, function (err, deletedAboutPage) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted About Page",
          data: deletedAboutPage
        })
      }
    })
  }

  else if (params.type === 'BL') {
    Blog.deleteBlog(params.type_id, function (err, deletedBlog) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Blog",
          data: deletedBlog
        })
      }
    })
  }

  else if (params.type === 'BC') {
    BlogCategory.deleteBlogCategory(params.type_id, function (err, deletedBlogCategory) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Blog Category",
          data: deletedBlogCategory
        })
      }
    })
  }



});




/*------------------------------------------------------
     (81)  Remove News and Online store
--------------------------------------------------------*/

router.post('/delete_store_news', function (req, res) {
  console.log("hiii /admin/delete_store_news")

  console.log("dataaaaaaa in delete_store_news is ", req.body)
  var params = req.body;

  if (params.type === 'OS') {
    OnlineStore.deleteOnlineStore(params.type_id, function (err, deletedOnlineStore) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted Online Store",
          data: deletedOnlineStore
        })
      }
    })
  }

  else if (params.type === 'NE') {
    NewsUrl.deleteNewsUrl(params.type_id, function (err, deletedNewsUrl) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully deleted News Url",
          data: deletedNewsUrl
        })
      }
    })
  }


});




/*---------------------------------------------------------
        (82) Get Library
----------------------------------------------------------*/
router.get('/get_library', function (req, res) {
  console.log("hiii get_library")

  var baseUrl = req.protocol + '://' + req.get('host');

  Library.getLibraryImages(function (err, libraryImages) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("libraryImages found ", libraryImages)
      for (var i in libraryImages) {
        libraryImages[i].image_name = baseUrl + libraryImages[i].path + libraryImages[i].image_name;
      }

      Library.getLibraryVideos(function (err, libraryVideos) {
        if (err) {
          console.log(" error-- ", err);
          res.json({
            status: false,
            message: "Something went wrong!",
            data: err
          })
        }

        else {
          console.log("libraryVideos found ", libraryVideos)
          for (var i in libraryVideos) {
            libraryVideos[i].thumbnail = baseUrl + libraryVideos[i].path + 'thumbnails/' + libraryVideos[i].thumbnail;
            libraryVideos[i].image_name = baseUrl + libraryVideos[i].path + libraryVideos[i].image_name;
          }


          Library.getLibraryAudio(function (err, libraryAudio) {
            if (err) {
              console.log(" error-- ", err);
              res.json({
                status: false,
                message: "Something went wrong!",
                data: err
              })
            }

            else {
              console.log("libraryAudio found ", libraryAudio)
              for (var i in libraryAudio) {
                libraryAudio[i].image_name = baseUrl + libraryAudio[i].path + libraryAudio[i].image_name;
              }
              var sendData =
              {
                libraryImages: libraryImages,
                libraryVideos: libraryVideos,
                libraryAudio: libraryAudio
              }

              res.json({
                status: true,
                message: "Library found successfully",
                data: sendData
              })
            }
          })
        }
      })

    }

  })

});


/*---------------------------------------------------------
        (83) Add Media to library
----------------------------------------------------------*/
router.post('/add_media_to_library', function (req, res) {
  console.log("hiii /admin/add_media_to_library", req.body)

  upload_library(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_media_to_library is ", req.file)
      console.log("dataaaaaaa in add_media_to_library is ", req.body)

      var params = req.body;
      params.image_name = req.file.filename;
      var media = req.file.filename;
      var thumbnail;
      if (params.media_type == 'V') {

        thumbnail = Date.now() + '.jpg';
        ffmpeg('public/images/library/' + media).screenshots({
          count: 1,
          folder: 'public/images/library/thumbnails/',
          filename: thumbnail,
          size: '320x240'
        }).on('end', function (err, data) {
          if (err) {
            console.log("erorrrrrrrrrrrrrrrrr ", err)
          }
          console.log("dataaaa savesssssssssssssssss ", data)
        })

      }
      else if (params.media_type == 'P') {
        thumbnail = "";
      }

      params.path = '/images/library/';
      params.thumbnail = thumbnail;
      params.title = 'Library Media';
      params.status = 'A';

      var baseUrl = req.protocol + '://' + req.get('host');

      Library.addNewLibrary(params, function (err, newLibrary) {
        if (err) {
          console.log(" error-- ", err);
          res.json({
            status: false,
            message: "Something went wrong!",
            data: err
          })
        }
        else {

          console.log("newLibrary added ", newLibrary)
          res.json({
            status: true,
            message: "Library media added successfully",
            data: newLibrary
          })

        }
      })
    }
  })

});





/*------------------------------------------------------
     (83) Publish Drafts
--------------------------------------------------------*/

router.post('/publish_drafts', function (req, res) {
  console.log("hiii /admin/publish_drafts")

  console.log("dataaaaaaa in publish_drafts is ", req.body)
  var params = req.body;

  if (params.type === 'BE') {
    Betrothed.publishBetrothed(params.type_id, function (err, publishedBetrothed) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {
        send_notification_betrothed(publishedBetrothed.first_user_id, publishedBetrothed.second_user_id)
        res.json({
          status: true,
          message: "successfully published Betrothed",
          data: publishedBetrothed
        })
      }
    })
  }

  else if (params.type === 'UM') {
    UpcomingMarriage.publishUpcomingMarriage(params.type_id, function (err, publishedUpcomingMarriage) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully Publish Upcoming Marriage",
          data: publishedUpcomingMarriage
        })
      }
    })
  }
  else if (params.type === 'SN') {
    SongToAlbum.publishSongToAlbum(params.type_id, function (err, publishedSongToAlbum) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully Publish Song of Album",
          data: publishedSongToAlbum
        })
      }
    })
  }
  else if (params.type === 'BL') {
    Blog.publishBlog(params.type_id, function (err, publishedBlog) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully Publish Blog",
          data: publishedBlog
        })
      }
    })
  }
  else if (params.type === 'OS') {
    OnlineStore.publishOnlineStore(params.type_id, function (err, publishedOnlineStore) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully Publish Online Store",
          data: publishedOnlineStore
        })
      }
    })
  }
  else if (params.type === 'AP') {
    AboutPage.publishAboutPage(params.type_id, function (err, publishedAboutPage) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully Publish About page",
          data: publishedAboutPage
        })
      }
    })
  }
  else if (params.type === 'PL') {
    Poll.publishPoll(params.type_id, function (err, publishedPoll) {
      if (err) {
        console.log(" error-- ", err);
      }
      else {

        res.json({
          status: true,
          message: "successfully Publish Poll",
          data: publishedPoll
        })
      }
    })
  }


});




/*------------------------------------------------------
     (84) edit_classified_category
--------------------------------------------------------*/

router.post('/edit_classified_category', function (req, res) {
  console.log("hiii /admin/edit_classified_category")

  console.log("dataaaaaaa in edit_classified_category is ", req.body)
  var params = req.body;

  ClassifiedCategory.editClassifiedCategory(params, function (err, updateCategory) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully Updated category",
        data: updateCategory
      })
    }
  })


});



/*---------------------------------------------------------
        (85) Get Links
----------------------------------------------------------*/
router.get('/get_links', function (req, res) {
  console.log("hiii get_links")

  var baseUrl = req.protocol + '://' + req.get('host');

  Link.getLinks(function (err, links) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("links found ", links)

      res.json({
        status: true,
        message: "Links found successfully",
        data: links
      })

    }

  })

});



/*------------------------------------------------------
     (84) Add New Link
--------------------------------------------------------*/

router.post('/add_new_link', function (req, res) {
  console.log("hiii /admin/add_new_link")

  console.log("dataaaaaaa in add_new_link is ", req.body)
  var params = req.body;
  params.status = 'A';

  Link.addNewLink(params, function (err, link) {
    if (err) {
      console.log("err--", err)
    }
    else {
      console.log("link addeddddd ", link)
      res.json({
        status: true,
        message: "Link added successfully",
        data: link
      })

    }
  })


});


/*------------------------------------------------------
     (85)  DELETE MEDIA FROM LIBRARY
--------------------------------------------------------*/
router.delete('/delete_media', function(req, res) {
  Library.deleteLibrary(req.query.media_id, function(err, media) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {
      res.json({
        status: true,
        message: "Successfully deleted media.",
        data: media
      })
    }
  })
})

/*------------------------------------------------------
     (85)  DELETE LINK FROM LIBRARY
--------------------------------------------------------*/
router.delete('/delete_link', function(req, res) {
  Link.deleteLink(req.query.link_id, function(err, link) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {
      res.json({
        status: true,
        message: "Successfully deleted lnik.",
        data: link
      })
    }
  })
})


/*------------------------------------------------------
     (85)  Update Giving Link
--------------------------------------------------------*/

router.post('/update_giving_link', function (req, res) {
  console.log("hiii /admin/update_giving_link")

  console.log("dataaaaaaa in update_giving_link is ", req.body)

  var params = req.body;

  GivingUrl.updateGivingUrl(params, function (err, givingUrl) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully updated Giving Url",
        data: givingUrl
      })
    }
  })

});




/*---------------------------------------------------------
        (82) Get Giving Url
----------------------------------------------------------*/
router.get('/get_giving_url', function (req, res) {
  console.log("hiii get_giving_url")

  GivingUrl.getGivingUrl(function (err, givingurl) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("givingurl found ", givingurl)
      res.json({
        status: true,
        message: "Successfully find Giving Url",
        data: givingurl
      })
    }
  })


});




/*------------------------------------------------------
     (85)  update_social_share_content
--------------------------------------------------------*/

router.post('/update_social_share_content', function (req, res) {
  console.log("hiii /admin/update_social_share_content")

  console.log("dataaaaaaa in update_social_share_content is ", req.body)

  var params = req.body;

  SocialShare.updateSocialShare(params, function (err, socialshareContent) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully updated Social Share Content",
        data: socialshareContent
      })
    }
  })

});




/*---------------------------------------------------------
        (82) get_social_share_content
----------------------------------------------------------*/
router.get('/get_social_share_content', function (req, res) {
  console.log("hiii get_social_share_content")

  SocialShare.getSocialShareContent(function (err, socialshareContent) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("socialshareContent found ", socialshareContent)

      res.json({
        status: true,
        message: "Successfully found SocialShare",
        data: socialshareContent
      })
    }
  })


});




/*---------------------------------------
       (64) get_user_profile 
 ----------------------------------------*/
router.post('/get_user_profile', function (req, res) {
  console.log("hiii get_user_profile")
  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');


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
      profileResult.address = profileResult.city + ', ' + profileResult.state + ', ' + profileResult.country;

      res.json({
        status: true,
        message: "Other User Profile found successfully",
        data: profileResult
      })


    }

  })


});





///////////////////////////////////////////////////////////////////////



/*---------------------------------------
       (84) Change Paswword
 ----------------------------------------*/
router.post('/change_admin_password', function (req, res) {
  console.log("hiii change_admin_password")
  var params = req.body;
  var baseUrl = req.protocol + '://' + req.get('host');
  AdminProfile.getAdminPassword(params, function (err, admin) {
    if (err) {
      res.json({
        status: false,
        message: "Error Occurs",
        data: err

      })
    }
    else if (admin == null) {
      res.json({
        status: false,
        message: "Email doesnot matches"

      })
    }
    else {

      var check = passwordhash.verify(params.current_password, admin.password);
      console.log(check)
      if (check == true) {
        params.id = admin._id;
        params.password = passwordhash.generate(params.new_password);
        AdminProfile.changeAdminPassword(params, function (err, updatedAdmin) {
          if (err) {
            console.log(" error-- ", err);
            res.json({
              status: false,
              message: "Something went wrong!",
              data: err
            })
          }
          else {

            console.log("updatedAdmin found ", updatedAdmin)
            //    aboutPageDetail.about_cover_image = baseUrl + about_image_url + aboutPageDetail.about_cover_image;

            res.json({
              status: true,
              message: "Password Changed successfully",
              data: updatedAdmin
            })

          }
        })

      }
      else {
        res.json({
          status: false,
          message: "Password doesnot matches"

        })
      }

    }
  })
});



/*---------------------------------------------------------
        (85) Add Manager Admin
----------------------------------------------------------*/
router.post('/add_manager_admin', function (req, res) {
  console.log("hiii /admin/add_manager_admin", req.body)

  var params = req.body;
  params.role = 2;
  params.email = params.email.toLowerCase()
  params.permissions = params.permissions.split(',');
  params.password = passwordhash.generate(params.password);

  AdminProfile.checkIfEmailExist(params, function(err, profileExist) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    } else if (!profileExist) {
      AdminProfile.addNewAdmin(params, function (err, newAdminManager) {
        if (err) {
          console.log(" error-- ", err);
          res.json({
            status: false,
            message: "Something went wrong!",
            data: err
          })
        }
        else {
          console.log("newAdminManager added ", newAdminManager)
          res.json({
            status: true,
            message: "New Admin Manager added successfully",
            data: newAdminManager
          })
        }
      })
    } else {
      res.json({
        status: false,
        message: "Email already exist!!",
      })
    }
  })
});



/*---------------------------------------------------------
        (86) Edit Manager Account
----------------------------------------------------------*/
router.post('/edit_admin_account', function (req, res) {
  console.log("hiii /admin/edit_admin_account", req.body)

  var params = req.body;
  if (params.permissions === 'undefined') {
    params.permissions = '';
  }
  else {
    params.permissions = params.permissions.split(',');
  }

  AdminProfile.editAdmin(params, function (err, updatedAdminManager) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }
    else {

      console.log("updatedAdminManager updated ", updatedAdminManager)

      res.json({
        status: true,
        message: "Admin Manager updated successfully",
        data: updatedAdminManager
      })

    }
  })

});




/*---------------------------------------------------------
        (87) Get Permissions
----------------------------------------------------------*/
router.get('/get_permissions', function (req, res) {
  console.log("hiii get_permissions")

  var baseUrl = req.protocol + '://' + req.get('host');

  Permission.getPermissions(function (err, permissions) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("permissions found ", permissions)



      res.json({
        status: true,
        message: "Permissions found successfully",
        data: permissions
      })

    }

  })

});



/*---------------------------------------------------------
        (88) Get Admin Permissions
----------------------------------------------------------*/
router.post('/get_admin_permissions', function (req, res) {
  console.log("hiii get_admin_permissions")

  var baseUrl = req.protocol + '://' + req.get('host');
  var params = req.body;

  AdminProfile.getAdminPermissions(params, function (err, adminPermissions) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("adminPermissions found ", adminPermissions)


      res.json({
        status: true,
        message: "Admin Permissions found successfully",
        data: adminPermissions
      })

    }

  })

});



/*---------------------------------------------------------
        (89) Get All Managers
----------------------------------------------------------*/
router.get('/get_all_managers', function (req, res) {
  console.log("hiii get_all_managers")

  var baseUrl = req.protocol + '://' + req.get('host');

  AdminProfile.getManagers(function (err, managers) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("managers found ", managers)



      res.json({
        status: true,
        message: "Managers found successfully",
        data: managers
      })

    }

  })

});



/*---------------------------------------------------------
        (90) Get Manager Detail
----------------------------------------------------------*/
router.post('/get_manager_detail', function (req, res) {
  console.log("hiii get_manager_detail")

  var baseUrl = req.protocol + '://' + req.get('host');
  var params = req.body;

  AdminProfile.getManagerDetail(params, function (err, managerDetail) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("managerDetail found ", managerDetail)


      res.json({
        status: true,
        message: "Manager Detail found successfully",
        data: managerDetail
      })

    }

  })

});




/*---------------------------------------------------------
        (91) Get Validation status
----------------------------------------------------------*/
router.get('/get_validation_status', function (req, res) {
  console.log("hiii get_all_managers")

  var baseUrl = req.protocol + '://' + req.get('host');

  ValidationConfig.getStatus(function (err, staus) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("staus found ", staus)



      res.json({
        status: true,
        message: "Staus found successfully",
        data: staus
      })

    }

  })

});



/*---------------------------------------------------------
        (92) Get Validation status
----------------------------------------------------------*/

router.post('/change_validation_status', function (req, res) {
  console.log("hiii change_validation_status ", req.body)
  var params = req.body;

  var baseUrl = req.protocol + '://' + req.get('host');

  ValidationConfig.changeAlbumStatus(params, function (err, validationconfig) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully Status Changed",
        data: validationconfig
      })
    }
  })
})


/*---------------------------------------------------------
        (93) Get Pending Users
----------------------------------------------------------*/
router.get('/get_pending_users', function (req, res) {
  console.log("hiii get_pending_users")

  var baseUrl = req.protocol + '://' + req.get('host');

  User.getPendingUsers(function (err, users) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("users found ", users)

      for (var i in users) {
        users[i].profile_image = baseUrl + profile_image_url + users[i].profile_image;
      }

      res.json({
        status: true,
        message: "users found successfully",
        data: users
      })

    }

  })

});




/*---------------------------------------------------------
        (94) Accept/ Reject User
----------------------------------------------------------*/

router.post('/accept_reject_user', function (req, res) {
  console.log("hiii accept_reject_user ", req.body)

  var baseUrl = req.protocol + '://' + req.get('host');
  var params = req.body;

  User.makeUserActive(params, function (err, user) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully changed status",
        data: user
      })
    }
  })

});




/*---------------------------------------------------------
        (93) Get Removed Users
----------------------------------------------------------*/
router.get('/get_removed_users', function (req, res) {
  console.log("hiii get_removed_users")

  var baseUrl = req.protocol + '://' + req.get('host');

  User.getRemovedUsers(function (err, users) {
    if (err) {
      console.log(" error-- ", err);
      res.json({
        status: false,
        message: "Something went wrong!",
        data: err
      })
    }

    else {
      console.log("users found ", users)

      for (var i in users) {
        users[i].profile_image = baseUrl + profile_image_url + users[i].profile_image;
      }

      res.json({
        status: true,
        message: "users found successfully",
        data: users
      })

    }

  })

});


/*------------------------------------------------------
     (95)  Edit Church Info
--------------------------------------------------------*/

router.post('/edit_church_info', function (req, res) {
  console.log("hiii /admin/edit_church_info")
  upload_church_info(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in edit_church_info is ", req.file)
      console.log("dataaaaaaa in edit_church_info is ", req.body)

      var params = req.body;

      getEditChurchLogoImage(callback)

      function callback(logo) {
        params.logo = logo;

        var id = params.church_id;
        params.church_id = "";

        Church.editChurchDetail(id, params, function (err, updatedChurch) {
          if (err) {
            console.log(" error-- ", err);
          }
          else {

            res.json({
              status: true,
              message: "successfully updated Church detail",
              data: updatedChurch
            })
          }
        })
      }

      function getEditChurchLogoImage(callback) {
        var logo;
        if (req.file) {
          logo = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            path: 'Church Logo',
            thumbnail: '',
            title: params.logo
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(logo)
        }
        else if (params.logo != 'null') {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.logo,
            dest: 'public/images/logo/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              logo = local_image;
              callback(logo)
              console.log('File saved to', filename)
            }).catch((err) => {
              logo = "";
              callback(logo)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }

        else {
          params.logo = '';
          callback(logo)
        }

      }
    }

  });
})




/*------------------------------------------------------
     (95)  Get Church Info
--------------------------------------------------------*/


router.get('/get_church_detail', function (req, res) {
  console.log("hiii /admin/get_church_detail")
  var baseUrl = req.protocol + '://' + req.get('host');
  console.log("dataaaaaaa in get_church_detail is ", req.body)

  Church.getChurchDetail(function (err, churchDetail) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {
      churchDetail.logo = baseUrl + logo_image_url + churchDetail.logo;
      console.log('chruch', churchDetail)
      res.json({
        status: true,
        message: "successfully get Church detail",
        data: churchDetail
      })
    }
  })

});








/*------------------------------------------------------
      (33)  Add Media Category
 --------------------------------------------------------*/

router.post('/add_media_category', function (req, res) {
  console.log("hiii /admin/add_media_category")
  console.log("dataaaaaaa in add_media_category is ", req.body)

  var params = req.body;
  params.status = 'A';

  MediaCategory.addNewMediaCategory(params, function (err, mediaCategory) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully uploaded Media Category",
        data: mediaCategory
      })
    }
  })

});




/*---------------------------------------------------------
        (18) get_media_categories
----------------------------------------------------------*/
router.get('/get_media_categories', function (req, res) {
  console.log("hiii get_media_categories")

  var baseUrl = req.protocol + '://' + req.get('host');

  MediaCategory.getAllMediaCategories(function (err, mediaCategories) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("mediaCategories found ", mediaCategories)

      res.json({
        status: true,
        message: "Media Categories found successfully",
        data: mediaCategories
      })

    }

  })

});




/*------------------------------------------------------
      (33)  Add Media Category
 --------------------------------------------------------*/

router.post('/delete_media_category', function (req, res) {
  console.log("hiii /admin/delete_media_category")
  console.log("dataaaaaaa in delete_media_category is ", req.body)

  var params = req.body;
  params.status = 'A';

  MediaCategory.deleteMediaCategory(params.category_id, function (err, mediaCategory) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {

      res.json({
        status: true,
        message: "successfully deleted Media Category",
        data: mediaCategory
      })
    }
  })

});





/*------------------------------------------------------
     (28)  Add Music Album
--------------------------------------------------------*/

router.post('/add_music_artist', function (req, res) {
  console.log("paramsssss", req.body)
  console.log("hiii /admin/add_music_artist")
  upload_music_artist(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in add_music_artist is ", req.file)
      console.log("dataaaaaaa in add_music_artist is ", req.body)

      var params = req.body;
      params.status = 'A';
      getArtistImage(callback)

      function callback(artist_image) {
        params.artist_image = artist_image;
        MusicArtist.addNewMusicArtist(params, function (err, musicArtist) {
          if (err) {
            console.log(" error-- ", err);
          }
          else {

            res.json({
              status: true,
              message: "successfully uploaded Music Artist",
              data: musicArtist
            })

          }
        })
      }
      function getArtistImage(callback) {
        var artist_image;
        if (req.file) {
          artist_image = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            section: 'Artist',
            path: artist_image_url,
            thumbnail: '',
            title: params.artist_name
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(artist_image)

        }
        else {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.artist_image,
            dest: 'public/images/music_artist/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              album_image = local_image;
              callback(artist_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              artist_image = "";
              callback(artist_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }

      }
    }
  })

});



/*------------------------------------------------------
     (38)  Edit Music Artist
--------------------------------------------------------*/

router.post('/edit_music_artist', function (req, res) {
  console.log("hiii /admin/edit_music_artist")
  upload_music_artist(req, res, function (err) {
    if (err) {
      console.log(err);
    }

    else {
      console.log("files in edit_music_artist is ", req.file)
      console.log("dataaaaaaa in edit_music_artist is ", req.body)

      var params = req.body;

      getEditArtistImage(callback)


      function callback(artist_image) {
        params.artist_image = artist_image;
        var id = params.album_id;
        al_img = "";

        MusicArtist.editMusicArtist(id, params, function (err, musicArtist) {
          if (err) {
            console.log(" error-- ", err);
          }
          else {

            res.json({
              status: true,
              message: "successfully updated Music Artist",
              data: musicArtist
            })
          }
        })
      }

      function getEditArtistImage(callback) {
        var artist_image;
        if (req.file) {
          artist_image = req.file.filename;
          var libParams = {
            image_name: req.file.filename,
            media_type: 'I',
            path: 'Artist',
            thumbnail: '',
            title: params.artist_name
          }
          Library.addNewLibrary(libParams, function (err, library) {
            console.log(library);

          })
          callback(artist_image)
        }
        else if (params.artist_image != 'null') {
          var local_image = Date.now() + '.jpg';
          const options = {
            url: params.artist_image,
            dest: 'public/images/music_album/' + local_image                  // Save to /path/to/dest/image.jpg
          }

          download.image(options)
            .then(({ filename, image }) => {
              artist_image = local_image;
              callback(artist_image)
              console.log('File saved to', filename)
            }).catch((err) => {
              artist_image = "";
              callback(artist_image)
              console.log("erorrrrrrrrrrrrrrrrrrrrrr ", err)
              throw err
            })

        }

        else {
          params.artist_image = '';
          callback(artist_image)
        }

      }
    }
  })

});







/*------------------------------------------------------
      (33)  delete_music_artist
 --------------------------------------------------------*/

router.post('/delete_music_artist', function (req, res) {
  console.log("hiii /admin/delete_music_artist")
  console.log("dataaaaaaa in delete_music_artist is ", req.body)

  var params = req.body;

  MusicArtist.deleteMusicArtist(params.artist_id, function (err, artist) {
    if (err) {
      console.log(" error-- ", err);
    }
    else {
      console.log("hiiii artist ", artist)
      MusicAlbum.deleteAlbumsOfArtist(artist._id, function (err, albums) {
        console.log("hiiii albums ", albums)
        res.json({
          status: true,
          message: "successfully deleted Music Artist",
          data: artist
        })
      })

    }
  })

});





/*---------------------------------------
          (32)get_artists
----------------------------------------*/
router.get('/get_artists', function (req, res) {
  console.log("hiii get_artists ")
  var params = req.body;

  var baseUrl = req.protocol + '://' + req.get('host');


  MusicArtist.getMusicArtists(function (err, musicArtists) {
    if (err) {
      console.log(" error-- ", err);

      res.json({
        status: false,
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


      res.json({
        status: true,
        message: "Music Artists found successfully",
        data: resultArtists
      })

    }

  })

});




/*---------------------------------------------------------
        (18) get_issue_categories
----------------------------------------------------------*/
router.get('/get_issue_categories', function (req, res) {
  console.log("hiii get_issue_categories")

  var baseUrl = req.protocol + '://' + req.get('host');

  IssueCategory.getAllIssueCategories(function (err, issueCategories) {
    if (err) {
      console.log(" error-- ", err);
    }

    else {
      console.log("issueCategories found ", issueCategories)

      res.json({
        status: true,
        message: "Issue Categories found successfully",
        data: issueCategories
      })

    }

  })

});


/*---------------------------------------------------------
        (18) send_contact_request
----------------------------------------------------------*/
router.post('/send_contact_request', function (req, res) {
  console.log("hiii send_contact_request")

  var baseUrl = req.protocol + '://' + req.get('host');
  var params = req.body;

  console.log(":hiiiiiii params ", params)
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: 'vasu.netset@gmail.com',
      pass: 'netset@123'
    }

  });
  ///   console.log("created ",transporter)
  var mailOptions = {
    from: 'vasu.netset@gmail.com',
    to: 'believetechservices@gmail.com',
    subject: 'Contact Support Request',
    html: 'Contact Support Request Category : ' + params.category + ' <br> Title : ' + params.title + '<br> Description : ' + params.description
  };
  //console.log("mailoptions created ",mailOptions)
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("errorrrrrrrr ", error);
    } else {

      console.log('Email sent: ' + info.response);

      res.json({
        status: true,
        message: "Thanks to contact us."
      })

    }
  });

});



module.exports = router;
