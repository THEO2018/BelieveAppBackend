import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { AuthServiceService } from '../../auth-service.service';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
declare var jQuery: any;
@Component({
  selector: 'app-editsmallgroup',
  templateUrl: './editsmallgroup.component.html',
  styleUrls: ['./editsmallgroup.component.scss']
})
export class EditsmallgroupComponent implements OnInit {

  adminInitial: boolean = true;
  initial: boolean = true;
  allusers: any;
  term:any;
  userArry: any;
  stt: any;
  stt1: any;
  endtt: any;
  end11: any;
  smallGroupsId = [];
  adminArry: any;
  adminModal: any;
  userModal: any;
  values: any;
  dataaa: boolean;
  notvalid: boolean;
  valid: boolean;
  conf: any[];
  Newusermodal = [];
  NewUserModalId = [];
  jj: any[];
  e_time: string;
  s_time: string;
  finalarry: any;
  arry3: any;
  ok: boolean;
  apiuser: boolean;
  @ViewChild("search")
  public searchElementRef: ElementRef;
  newSmallGroup: FormGroup;
  venue_address: any;
  res: any;
  data: any;
  rawdata: any;
  small_group_id: any;
  t_data: any;
  muloptions: any;
  data1: any;
  api_image: any;
  api_users: any;
  timer: any;
  timer1: any;
  arry_small: any;
  arry: any;
  arry1: any;
  nameary = [];
  smallGroup = [];
  smallGroups = [];
  nameary1 = [];
  selectedUsers = [];
  confuse = [];
  zipcode:any;
  arry_admin: any;
  arry_admin1: any;
  api_admins: any;
  latitude: any;
  longitude: any;
  nameary_admin = [];
  img: boolean = true;
  imageLoaded: boolean = false;
  imageSrc: string = '';
  loaded: boolean = false;
  imag_valid: boolean = true;
  users_valid: boolean = true;
  user_valid :boolean = true;
  searchForm: FormGroup;
  browse: boolean = false;
  public arryData:any;
  imageUrl: any
  image: boolean = false;
  img_valid: boolean = true;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router,
    public authService: AuthServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, ) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.small_group_id = params;
    });

      this.searchForm = this.formBuilder.group({
      search:null
    });


    this.newSmallGroup = this.formBuilder.group({
      useremail: this.formBuilder.array([]),
      useremail1: this.formBuilder.array([]),
      admin_users: this.formBuilder.array([]),
      admin_users1: this.formBuilder.array([]),
      venue: [null, Validators.required],
      small_group_name: [null, Validators.required],
      small_group_description: [null, Validators.required],
      start_time: [null, Validators.required],
      end_time: [null, Validators.required],
      days: [null, Validators.required],
      small_group_image: null
    });
    this.muloptions = [{
      id: 1,
      name: 'S',
      value: 'Sunday'
    }, {
      id: 2,
      name: 'M',
      value: 'Monday'
    }, {
      id: 3,
      name: 'T',
      value: 'Tuesday'
    }, {
      id: 4,
      name: 'W',
      value: 'Wednesday'
    }, {
      id: 5,
      name: 'Th',
      value: 'Thursday'
    }, {
      id: 6,
      name: 'F',
      value: 'Friday'
    }, {
      id: 7,
      name: 'St',
      value: 'Saturday'
    }];
  }

  Cancel() {

    this.router.navigateByUrl('/smallgroup');
  }

  teamName(val){
console.log(val)
console.log(this.term)
}


  /**********************************get image***************************************/

  onFileChange(event) {
    console.log(event)
    if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
      if (event.target.files.length > 0) {
        this.image = false;
        this.img = true;
        this.img_valid = true;
        let file = event.target.files[0];
        console.log(file)
        this.imageUrl = file;
        // this.myForm.get('group_image').setValue(file);
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
      }
    }
    else {
      this.img_valid = true;
      this.img = false;
    }
    //this.saveFiles(files);
  }


  handleImageLoad() {
    this.imageLoaded = true;
  }

  _handleReaderLoaded(e) {
    this.browse = true
    console.log('image', e);
    var reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
  }

  openModal() {
  jQuery('#gallerymodal').modal({backdrop: 'static', keyboard: false});
    jQuery("#gallerymodal").modal("show");
    this.getlibrary();
  }

  checking(index, url) {
    this.browse = false;
    this.image = true;
    this.img = true;
    this.img_valid = true;
    $('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
    console.log('url', url);
    this.imageUrl = url;
  }

  // get media library/////
  getlibrary() {
    console.log('manager lsit');
    this.authService.getLibrary().then((result) => {
      console.log(result);
      this.res = result;
      console.log('lasun', this.res);
      if (this.res.status == true) {
        this.arryData = this.res.data;
        console.log('arrrayy', this.arryData);
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }


  ngOnInit() {
    $("#name").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
        e.preventDefault();
    });
    $("#des").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
        e.preventDefault();
    });
    $("#ven").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
        e.preventDefault();
    });
    this.detail();
       this.getlibrary();
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
         for (var i = 0; i < place.address_components.length; i++) 
            {
              for (var j = 0; j < place.address_components[i].types.length; j++)
               {
                if (place.address_components[i].types[j] == "postal_code")
                 {
                  this.zipcode= place.address_components[i].long_name;
                  // console.log("zipcodeeee",zipcode)
                }
              }
            }
          this.venue_address = place.formatted_address;
          console.log(this.venue_address);
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
        });
      });
    });
  }


  okvalue() {
    this.smallGroup = [];
    this.smallGroupsId = [];
    for (var i in this.allusers) {
      if (this.allusers[i].selected == true) {
        this.smallGroup.push(this.allusers[i])
        this.smallGroupsId.push(this.allusers[i]._id);
      }
    }
    console.log('adminpush array', this.smallGroup);
    console.log('user array', this.smallGroupsId);
    // console.log('smaaaalgroup', this.smallGroups);
    this.userArry = this.smallGroupsId;


  }
  cancelvalue() {
    this.initial = true;
  }
  okvalue1() {
    this.Newusermodal = [];
    this.NewUserModalId = [];
    for (var i in this.smallGroup) {
      if (this.smallGroup[i].adminselected == true) {
        //this.Newusermodal.push(this.conf[i]);
        this.NewUserModalId.push(this.smallGroup[i]._id);
      }
    }
    console.log('admin modal ids', this.NewUserModalId);

    this.adminArry = this.NewUserModalId;
    console.log('admin array',this.adminArry)

  }


  usermodall() {
    // jQuery("#adduser").modal("show");
    jQuery('#adduser').modal({ backdrop: 'static', keyboard: false });
    //this.smallGroup = [];
  }
  adminmodal() {
    console.log('admin modal')
    var limit = 2;
    jQuery('#addadmin').modal({ backdrop: 'static', keyboard: false });
    jQuery("#addadmin").modal("show");
    console.log('admin modal')

    // this.NewUserModalId = [];
  }
  cancelvalue1() {
    this.adminInitial = true;
    // this.arry_admin = '';
    // this.arry_admin1 = '';
  }

  selectUsers() {
    alert("Select Users First!!!")
  }
  /**********************************get admin multiple modal***************************************/


  getadminVal(email: string, name: string, isChecked: boolean, val) {


    this.adminInitial = false;
    this.users_valid = true;
    const adminArray = <FormArray>this.newSmallGroup.controls.admin_users;
    const adminArray1 = <FormArray>this.newSmallGroup.controls.admin_users1;
    if (adminArray.value.length > 1) {
      alert("Maximum Two Users!!!!!")
    }
    else {
      this.user_valid = true
      if (isChecked) {
        $('input.admin-check').on('change', function (evt) {
          if ($(this).siblings(':checked').length >= 2) {
            this.checked = false;
          }
        })

        console.log('email', email);
        console.log("intial admin array", this.smallGroup)

       
        for (var i in this.smallGroup) {

          if (this.smallGroup[i]._id === email) {
            this.smallGroup[i].adminselected = true;
          }
        }
        console.log('admin add', this.smallGroup);


        //  this.adminModal = this.rawdata;
        for (var i in this.allusers) {
          for (var j in this.smallGroup) {
            if (this.smallGroup[j].adminselected == true) {
              if (this.smallGroup[j]._id == this.allusers[i]._id) {
                this.allusers[i].admin = true;
              }
            }
          }
        }
        console.log('all user', this.allusers)
        // console.log('dujaaaaaaaa', this.adminModal);
      } else {
        this.notvalid = false;
        this.conf = this.smallGroups;
        for (var i in this.smallGroup) {
          if (this.smallGroup[i]._id === email) {
            this.smallGroup[i].adminselected = false;
          }
        }
        console.log('remove admin', this.smallGroup);

        for (var i in this.allusers) {
          for (var j in this.smallGroup) {
            if (this.smallGroup[j].adminselected == false) {
              if (this.smallGroup[j]._id == this.allusers[i]._id) {
                this.allusers[i].admin = false;
              }
            }
          }
        }
        console.log('remove', this.allusers)

       
      }
    }

  }

  deleteAdmin(val,name: string, email: string){

    this.Newusermodal = [];
    this.NewUserModalId = [];
    for (var i in this.smallGroup) {
     
      if (this.smallGroup[i]._id == val._id) {
          this.smallGroup[i].adminselected = false;

          // this.finalArry.slice(i,1);
        }
       if (this.smallGroup[i].adminselected == true) {
        //this.Newusermodal.push(this.conf[i]);
        this.NewUserModalId.push(this.smallGroup[i]._id);
      }
    }
     this.adminArry = this.NewUserModalId;
    console.log('admin array',this.adminArry)
   
}
    /**********************************Delete User***************************************/


   deleteUser(val,name: string, email: string){
  console.log(val,name,email)
   this.smallGroup = [];
    this.smallGroupsId = [];
   for (var i in this.allusers) {

     if (this.allusers[i]._id == val._id) {
          this.allusers[i].selected = false;

          // this.finalArry.slice(i,1);
        }
      if (this.allusers[i].selected == true) {
        this.smallGroup.push(this.allusers[i])
        this.smallGroupsId.push(this.allusers[i]._id);
      }
    }
    this.userArry = this.smallGroupsId;
    console.log( this.allusers)
    console.log( this.userArry)
  
}
  /**********************************get users modal***************************************/
  getuserVal(email: string, name: string, isChecked: boolean) {
    let api_users = [];
    let finalarry = [];
    this.initial = false;
    this.users_valid = true;
    if (isChecked) {

      for (var i in this.allusers) {
        if (this.allusers[i]._id === email) {
          this.allusers[i].selected = true;
        }
      }
      console.log('checked new user', this.allusers);

    } else {

      for (var i in this.allusers) {
        if (this.allusers[i]._id === email) {
          this.allusers[i].selected = false
        }
      }
      console.log('unchecked user', this.allusers);

    }

  }


  /**********************************EDit GRoup***************************************/
  EditSmallGroup(val) {
    // console.log('smalllgroup image', this.imageUrl);
    // console.log("latlong", this.latitude, this.longitude)
    console.log('userarrrry', this.userArry);
    console.log('admin array', this.adminArry);

    if (this.latitude) {
      this.latitude = this.latitude;
    }
    else {
      this.latitude = this.data1.venue_latitude;
    }
    if (this.longitude) {
      this.longitude = this.longitude;
    }
    else {
      this.longitude = this.data1.venue_longitude;
    }
    if (this.venue_address) {
      this.venue_address = this.venue_address;
    }
    else {
      this.venue_address = this.data1.venue;
    }

    this.s_time = moment(this.newSmallGroup.value.start_time).format('hh:mm a');
    this.e_time = moment(this.newSmallGroup.value.end_time).format('hh:mm a');
    // this.stt = new Date("November 13, 2013" + this.s_time);
    // this.stt1 = this.stt.getTime();
    // console.log('starttime',this.stt1);
    // this.endtt = new Date("November 13, 2013 " + this.e_time);
    // this.end11 = this.endtt.getTime();
    // console.log('endtime',this.end11);
    this.stt1 = moment(this.newSmallGroup.value.start_time).valueOf();
    console.log('start',this.stt1);
    this.end11 = moment(this.newSmallGroup.value.end_time).valueOf();
    console.log('end11',this.end11);
    let data = new FormData();
    data.append('small_group_name', this.newSmallGroup.get('small_group_name').value);
    data.append('small_group_image', this.imageUrl);
    data.append('users', this.userArry);
    data.append('small_group_id', this.small_group_id.id);
    data.append('venue', this.venue_address);
    data.append('small_group_description', this.newSmallGroup.get('small_group_description').value);
    data.append('admin_users', this.adminArry);
     data.append('zip_code',this.zipcode);
    data.append('start_time', this.s_time);
    data.append('days', this.newSmallGroup.get('days').value);
    data.append('end_time', this.e_time);
    data.append('venue_latitude', this.latitude);
    data.append('venue_longitude', this.longitude);
   
      if(this.userArry!=undefined){
        if (this.userArry.length == 0) {
          console.log("in user length 0 unefined loop")
          // console.log("length")
          this.users_valid = false;
          // console.log("user invaid")
        }
        else if(this.adminArry!=undefined){
          if(this.adminArry.length == 0) {
           this.user_valid = false;
           console.log("in admin length 0 unefined loop")
       
        }
        else{
          console.log("api hit in user after both correct")
            this.authService.editSmallGroup(data).then((result) => {
        console.log(result);
        this.res = result;
        if (this.res.status == true) {

          this.router.navigateByUrl('/smallgroup');
        }
        else {
          alert(this.res.message);
        }
      }, (err) => {
        console.log(err);
      });
        }
      }
      else{
        console.log("api hit in user after both correct")
          if(this.s_time==this.e_time){
          alert("Start time and End Time should not be equal")
        }
        else if(this.stt1>this.end11){
          alert("Start time should not be greater than End Time")
        }
        else{
          this.authService.editSmallGroup(data).then((result) => {
        console.log(result);
        this.res = result;
        if (this.res.status == true) {

          this.router.navigateByUrl('/smallgroup');
        }
        else {
          alert(this.res.message);
        }
      }, (err) => {
        console.log(err);
      });
        }
      }
     
      }
      
     
       else if(this.adminArry!=undefined){
        if(this.adminArry.length == 0) {
         this.user_valid = false;
         console.log("in admin length 0 unefined loop")
     
      }
      else if (this.userArry!=undefined){
        if (this.userArry.length == 0) {
          console.log("in user length 0 unefined loop")
          // console.log("length")
          this.users_valid = false;
          // console.log("user invaid")
        }
        else{
            if(this.stt1==this.end11){
        alert("Start time and End Time should not be equal")
      }
      else if(this.stt1>this.end11){
        alert("Start time should not be greater than End Time")
      }
      else{
          console.log("hit api afetr admin")
            this.authService.editSmallGroup(data).then((result) => {
        console.log(result);
        this.res = result;
        if (this.res.status == true) {

          this.router.navigateByUrl('/smallgroup');
        }
        else {
          alert(this.res.message);
        }
      }, (err) => {
        console.log(err);
      });
          }
        }
      }
      else{
          if(this.stt1==this.end11){
        alert("Start time and End Time should not be equal")
      }
      else if(this.stt1>this.end11){
        alert("Start time should not be greater than End Time")
      }
      else{
         console.log("hit api afetr admin");
           this.authService.editSmallGroup(data).then((result) => {
        console.log(result);
        this.res = result;
        if (this.res.status == true) {

          this.router.navigateByUrl('/smallgroup');
        }
        else {
          alert(this.res.message);
        }
      }, (err) => {
        console.log(err);
      });
         }
      }
    }
      else{
        console.log("in child else 0 unefined loop")
      if(this.stt1==this.end11){
        alert("Start time and End Time should not be equal")
      }
      else if(this.stt1>this.end11){
        alert("Start time should not be greater than End Time")
      }
      else{
      // console.log(data);
      this.authService.editSmallGroup(data).then((result) => {
        console.log(result);
        this.res = result;
        if (this.res.status == true) {

          this.router.navigateByUrl('/smallgroup');
        }
        else {
          alert(this.res.message);
        }
      }, (err) => {
        console.log(err);
      });
    }

      }
    //  }
      
    //  else if(this.adminArry!=undefined){
    //    console.log('elsepart');
    //   if (this.adminArry.length == 0) {
    //     this.user_valid = false;
    //     console.log('admin invalid');
    // }
    //  } 
    // else {
    //   console.log("inparent else unefined loop")
    //   this.s_time = moment(this.newSmallGroup.value.start_time).format('hh:mm a');
    //   this.e_time = moment(this.newSmallGroup.value.end_time).format('hh:mm a');
    //   let data = new FormData();
    //   data.append('small_group_name', this.newSmallGroup.get('small_group_name').value);
    //   data.append('small_group_image', this.imageUrl);
    //   data.append('users', this.userArry);
    //   data.append('small_group_id', this.small_group_id.id);
    //   data.append('venue', this.venue_address);
    //   data.append('small_group_description', this.newSmallGroup.get('small_group_description').value);
    //   data.append('admin_users', this.adminArry);
    //   data.append('start_time', this.s_time);
    //   data.append('days', this.newSmallGroup.get('days').value);
    //   data.append('end_time', this.e_time);
    //   data.append('venue_latitude', this.latitude);
    //   data.append('venue_longitude', this.longitude);
    //   // console.log(data);
    //   // this.authService.editSmallGroup(data).then((result) => {
    //   //   console.log(result);
    //   //   this.res = result;
    //   //   if (this.res.status == true) {

    //   //     this.router.navigateByUrl('/smallgroup');
    //   //   }
    //   //   else {
    //   //     alert(this.res.message);
    //   //   }
    //   // }, (err) => {
    //   //   console.log(err);
    //   // });

    // }


  }
  // else{       //  console.log("invaliddd")       // }  }Sent on:12:52 pm

  /**********************************gET DETAIL***************************************/

  detail() {
    let params = {
      'id': this.small_group_id.id
    };
    this.authService.getSmall(params).then((result) => {
      console.log('detail resp', result);
      this.res = result;
      if (this.res.status == true) {
        this.data1 = this.res.data;
        this.selectedUsers = this.data1.users;
        console.log('selected users', this.selectedUsers);
        this.newSmallGroup.get('small_group_name').setValue(this.data1.small_group_name);
        this.newSmallGroup.get('small_group_description').setValue(this.data1.small_group_description);
        this.newSmallGroup.get('venue').setValue(this.data1.venue);
        this.newSmallGroup.get('days').setValue(this.data1.days);
        // this.newSmallGroup.get('start_time').setValue(this.data1.start_time);
        this.timer = new Date(new Date().toDateString() + ' ' + this.data1.start_time);
        this.timer1 = new Date(new Date().toDateString() + ' ' + this.data1.end_time);
        this.newSmallGroup.get('start_time').setValue(this.timer);
        this.newSmallGroup.get('end_time').setValue(this.timer1);
        // console.log(this.data1);
        this.api_image = this.data1.small_group_image;
        // console.log('imgageeeeeeeeeeeeeeeeeeeeeeeeee',this.api_image);
        // console.log(this.api_image);
        this.values = this.data1;
        // console.log('valueeeeeeeeeeeeeee', this.values);
        this.api_users = this.data1.users;
        this.api_admins = this.data1.admin_users;
        console.log('admin selected', this.api_admins);

        //console.log('in detail', this.selectedUsers);
        this.users();
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }



  /**********************************Get Users***************************************/

  users() {
    this.notvalid = true
    this.apiuser = true;
    this.authService.getUsers().then((result) => {
      // console.log('user response', result);
      this.res = result;
      if (this.res.status == true) {
        this.allusers = this.res.data;
        console.log(this.allusers);
        var selectedArray = [];
        // console.log('in users', this.selectedUsers);
        for (var i in this.allusers) {
          for (var j in this.selectedUsers) {
            if (this.selectedUsers[j]._id == this.allusers[i]._id) {
              //     console.log("show checked selected user", this.allusers[i]._id, this.selectedUsers[j]._id);
              this.allusers[i].selected = true;
            }
          }
          if (this.allusers[i].selected == true) {
            this.smallGroup.push(this.allusers[i])
          }
        }

        // console.log('admin array', this.smallGroup);
        // console.log("after checked", this.allusers);

        // for (var i in this.rawdata) {
        //   if (this.rawdata[i].selected == true) {
        //     this.smallGroup.push(this.rawdata[i])
        //   }
        // }
        //    console.log('smaaaalgroup', this.smallGroup);
        // console.log('api_admin', this.api_admins);
        for (var i in this.smallGroup) {
          for (var j in this.api_admins) {
            if (this.api_admins[j]._id == this.smallGroup[i]._id) {
              //     console.log("admin select", this.api_admins[j]._id, this.smallGroup[i]._id);
              this.smallGroup[i].adminselected = true;
            }
          }
        }
        //  console.log('admin array with admin selected',this.smallGroup);
        //  console.log('adminselected', this.smallGroup);
        for (var i in this.allusers) {
          for (var j in this.smallGroup) {
            if (this.smallGroup[j].adminselected == true) {
              if (this.smallGroup[j]._id == this.allusers[i]._id) {
                this.allusers[i].admin = true
              }
            }
          }
        }
        console.log('admin disabled', this.allusers);

      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }



}
