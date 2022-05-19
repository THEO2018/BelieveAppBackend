
import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { AuthServiceService } from '../../auth-service.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
declare var jQuery: any;


@Component({
  selector: 'app-newsmallgroup',
  templateUrl: './newsmallgroup.component.html',
  styleUrls: ['./newsmallgroup.component.scss']
})
export class NewsmallgroupComponent implements OnInit {

  // public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;
  newSmallGroup: FormGroup;
  searchForm: FormGroup;
  venue_address: any;
  res: any;
  term:any;
  data: any;
  stt: any;
  stt1: any;
  endtt: any;
  end11: any;
  nameary = [];
  nameary1 = [];
  nameary_admin = [];
  idary_admin = [];
  options = [];
  arry_small: any;
  zipcode:any;
  arry_small1: any;
  arry_admin: any;
  arry_admin1: any;
  adminarry: any;
  muloptions: any;
  s_time: any;
  e_time: any;
  latitude: any;
  longitude: any;
  img: boolean = true;
  s_time_valid: boolean = true;
  e_time_valid: boolean = true;
  imag_valid: boolean = true;
  users_valid: boolean = true;
  admin_valid: boolean = true;
  browse: boolean = false;
   public arryData:any;
  loaded: boolean = false;
  imageSrc: string = '';
  imageLoaded: boolean = false;
  imageUrl: any
  image: boolean = false;
  img_valid: boolean = true;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router,
    private toastr: ToastrService,
    public authService: AuthServiceService,
    private formBuilder: FormBuilder) {
    this.imag_valid = true;
    this.users_valid = true;
    this.s_time_valid = true;
    this.e_time_valid = true;


this.searchForm = this.formBuilder.group({
      search:null
    });

    this.newSmallGroup = this.formBuilder.group({
      userss: this.formBuilder.array([]),
      userss1: this.formBuilder.array([]),
      userss2: this.formBuilder.array([]),
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
 cancel(){
      this.router.navigateByUrl('/smallgroup');
    }

teamName(val){
console.log(val)
console.log(this.term)
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
    // alert(this.nameary1);
    console.log("valueeeeeee", this.nameary1)
    this.users();
     this.getlibrary();
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log("placeeee",place);
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
          console.log("lat long", this.latitude, this.longitude)
        });
      });
    });
  }

  userModal() {
  jQuery('#adduser').modal({backdrop: 'static', keyboard: false});
  jQuery("#adduser").modal("show");
  
  } 
   adminModal() {
  jQuery('#addadmin').modal({backdrop: 'static', keyboard: false});
  jQuery("#addadmin").modal("show");
  
  } 

    /**********************************Delete Admin***************************************/

  deleteAdmin(val,name: string, email: string){
    const adminArray = <FormArray>this.newSmallGroup.controls.admin_users;
    const adminArray1 = <FormArray>this.newSmallGroup.controls.admin_users1;
  console.log(val)
  let index = adminArray.controls.findIndex(x =>
    x.value == email
    )

      let index1 = adminArray1.controls.findIndex(x => 
        x.value.name == name
        )
      
      adminArray.removeAt(index);
      adminArray1.removeAt(index1);
      this.arry_admin1 = adminArray1.value;
      this.arry_admin = adminArray.value;
      console.log("remove arrayyyy", this.arry_admin1);
}
  /**********************************Delete User***************************************/


   deleteUser(val,name: string, email: string){
   const emailFormArray = <FormArray>this.newSmallGroup.controls.userss;
   const emailFormArray1 = <FormArray>this.newSmallGroup.controls.userss1;
  const emailFormArray2 = <FormArray>this.newSmallGroup.controls.userss2;
  
  console.log(val)
   let index = emailFormArray.controls.findIndex(x =>
    x.value == email
    )
   let index1 = emailFormArray1.controls.findIndex(x =>
    x.value == email
    )
    let index2 = emailFormArray2.controls.findIndex(x => 
      x.value.name == name
      )
      // alert(index)
      emailFormArray.removeAt(index);
      emailFormArray1.removeAt(index1);
      emailFormArray2.removeAt(index2);
      this.arry_small = emailFormArray.value;
      this.arry_small1 = emailFormArray1.value;
      this.adminarry = emailFormArray2.value;
      console.log(this.arry_small,this.adminarry)
}


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
      this.imageUrl = '';
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

  checkings() {
    alert('hi');
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
  /**********************************Multiple Options***************************************/

  // setSelected(selectElement) {
  //  console.log(selectElement);
  //   const adminArray = <FormArray>this.newSmallGroup.controls.admin_users;
  //      for (var i = 0; i < selectElement.options.length; i++) {
  //          var optionElement = selectElement.options[i];
  //           // console.log("optionElement",optionElement);
  //          var optionModel = this.muloptions[i];
  //          // console.log("optionModel",optionModel);

  //          if (optionElement.selected == true) 
  //            { 
  //               adminArray.push(new FormControl(optionModel.value));
  //              // this.options.push(optionModel.value)
  //              // optionModel.selected = true;
  //              console.log(adminArray)
  //              // console.log(optionModel.selected)
  //               }
  //          else { 
  //            optionModel.selected = false; 
  //             let index = adminArray.controls.findIndex(x => x.value == optionModel.value)
  //            adminArray.removeAt(index);
  //            console.log(adminArray)

  //          }
  //      }
  //  }

  selectUsers() {
    alert("Select Users First!!!")
  }

  /**********************************get admin multiple modal***************************************/


  getadminVal(email: string, name: string, isChecked: boolean, val) {
    const adminArray = <FormArray>this.newSmallGroup.controls.admin_users;
    const adminArray1 = <FormArray>this.newSmallGroup.controls.admin_users1;

    if (isChecked) {

      this.admin_valid = true;
      console.log("arayyyyyyyyy", adminArray.value.length)
      this.imag_valid = true;
      // alert("Users!!!!!")
      adminArray.push(new FormControl(email));
       // emailFormArray1.push(new FormControl({ 'id': email, 'name': name }));
      adminArray1.push(new FormControl({ 'id': email, 'name': name }));
      this.nameary_admin.push(name);
      this.arry_admin = adminArray.value;
      this.arry_admin1 = adminArray1.value;
      console.log("arrayyyy", this.arry_admin1);

    } else {
      let index = adminArray.controls.findIndex(x => x.value == email)
      let index1 = adminArray1.controls.findIndex(x => x.value.name == name)

      adminArray.removeAt(index);
      adminArray1.removeAt(index1);
      this.arry_admin1 = adminArray1.value;
      this.arry_admin = adminArray.value;
      console.log("remove arrayyyy", this.arry_admin1);
    }
    // }
  }
  /**********************************get users modal***************************************/


  getuserVal(email: string, name: string, isChecked: boolean) {

    const emailFormArray1 = <FormArray>this.newSmallGroup.controls.userss1;
    const emailFormArray = <FormArray>this.newSmallGroup.controls.userss;
    const emailFormArray2 = <FormArray>this.newSmallGroup.controls.userss2;

    // console.log(email,isChecked);
    if (isChecked) {
      this.imag_valid = true;
      this.users_valid = true;
      console.log(email, name)
      emailFormArray.push(new FormControl(email));
      emailFormArray1.push(new FormControl({ 'id': email, 'name': name }));
      emailFormArray2.push(new FormControl({ 'id': email, 'name': name }));
      this.nameary.push(name);
      // this.nameary1.push({'id':email,'name':name});
      this.arry_small = emailFormArray.value;
      this.adminarry = emailFormArray2.value;
      console.log(this.arry_small)
      this.arry_small1 = emailFormArray1.value;
      console.log("arrayyyy", this.arry_small1);
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == email)
      let index1 = emailFormArray1.controls.findIndex(x => x.value == name)
      let index2 = emailFormArray2.controls.findIndex(x => x.value.name == name)

      emailFormArray.removeAt(index);
      emailFormArray1.removeAt(index1);
      emailFormArray2.removeAt(index2);
      this.arry_small = emailFormArray.value;
      console.log(this.arry_small)
      this.arry_small1 = emailFormArray1.value;
      this.adminarry = emailFormArray2.value;
      console.log("after remove arrayyyy", this.arry_small1);
      // this.adminarry=emailFormArray1.value;
      // console.log("remove arrayyyy",this.adminarry);
    }

  }



  /**********************************Add SmallGROUP***************************************/


  AddSmallGroup(val) {
    console.log(val);
  
    this.s_time = moment(this.newSmallGroup.value.start_time).format('hh:mm a');
    this.e_time = moment(this.newSmallGroup.value.end_time).format('hh:mm a');
    console.log(this.s_time,this.e_time)
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
    if (val) {
      if (this.newSmallGroup.value.userss.length == 0) {
        console.log("emailll")
        this.users_valid = false;
      }
      else if (!this.img) {
        this.imag_valid = true;
      }
      else if (!this.imageUrl) {
        this.img_valid = false;
      }
      else if (this.newSmallGroup.value.admin_users.length == 0) {
        this.admin_valid = false;
      }
      else if (!this.newSmallGroup.value.start_time) {
        this.s_time_valid = false;

      }
      else if (!this.newSmallGroup.value.end_time) {
        this.e_time_valid = false;
      }
      else if(this.s_time==this.e_time){
        alert("Start time and End Time should not be equal")
      }
      else if(this.stt1>this.end11){
        alert("Start time should not be greater than End Time")
      }
      // else if(this.s_time==this.e_time){
      //   alert("Start time and End Time should not be equal")
      // }
      else {
        this.imag_valid = true;
        this.users_valid = true;
        let data = new FormData();
       
        data.append('small_group_name', this.newSmallGroup.get('small_group_name').value);
        data.append('small_group_image', this.imageUrl);
        data.append('users', this.arry_small);
        data.append('days', this.newSmallGroup.get('days').value);
        data.append('venue', this.venue_address);
        data.append('small_group_description', this.newSmallGroup.get('small_group_description').value);
        data.append('admin_users', this.arry_admin);
        data.append('zip_code',this.zipcode);
        data.append('start_time', this.s_time);
        data.append('end_time', this.e_time);
        data.append('venue_latitude', this.latitude);
        data.append('venue_longitude', this.longitude);
        console.log(data);
        this.authService.addSmallGroup(data).then((result) => {
          console.log(result);
          this.res = result;
          if (this.res.status == true) {
            console.log("trueee")
            this.presentToast('Small Group Created Succefully')
             // alert("Small Group Created Succefully")
            //    // this.showSuccess();
            this.router.navigateByUrl('/smallgroup');
          }
          else {
            console.log("fasle")
            //    // this.toastr.error(this.res.message);
          }
        }, (err) => {
          console.log(err);
        });
      }
    }
    else {
      alert("Fill Required Fields!!")
      console.log("invaliddd")

    }

  }



  /**********************************Get Users***************************************/

  users() {
    this.authService.getUsers().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {
        this.data = this.res.data;
        console.log(this.data);
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }

    /************************************Toast***************************/


   presentToast(msg) {

    this.toastr.success(this.res.message, '', {
  timeOut: 3000,
  tapToDismiss:true
});
  }


}
