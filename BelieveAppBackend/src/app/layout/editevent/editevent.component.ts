import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { AuthServiceService } from '../../auth-service.service';
import { MapsAPILoader } from '@agm/core';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.scss']
})
export class EditeventComponent implements OnInit {
  priceVal: string;
  
  finalGroupData: any;
  simtrue: boolean;
  validData: any;
  valids: boolean;
  intial:boolean = true;
  allGroups: any;
  stt: any;
  cur_date:any;
  pre_date:any;
  stt1: any;
  _var:any;
  endtt: any;
  end11: any;
  selectedGroups: any;
  res: any;
  cat:any;
  data: any;
  s_time: any;
  e_time: any;
  price_val: any;
  pricee: boolean = false;
  cat_data: any;
  timer: any;
  timer1: any;
  arry1: any;
  arry: any;
    latitude: any;
  longitude: any;
  data1: any;
  dater: any;
  addres: any;
  api_image: any;
  grp_data: any;
  event_id: any;
  groupData  = [];
  img: boolean = true;
  imageLoaded: boolean = false;
  imageSrc: string = '';
  loaded: boolean = false;
  newEvent: FormGroup;
  grp_valid: boolean = true;
  browse: boolean = false;
   public arryData:any
  imageUrl: any
  image: boolean = false;
  img_valid: boolean = true;
  checkdate = new Date();
  
  public min = new Date(+new Date() - 1000*60*60*24);
  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthServiceService,
    private mapsAPILoader: MapsAPILoader,
     private toastr: ToastrService,
    private ngZone: NgZone,
    private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      console.log(params);
      this.event_id = params;
    });

    this.newEvent = this.formBuilder.group({
      title: [null, Validators.required],
      useremail: this.formBuilder.array([]),
      useremail1: this.formBuilder.array([]),
      event_category: [null, Validators.required],
      description: [null, Validators.required],
      venue: [null, Validators.required],
      mydate: [null, Validators.required],
      start_time: [null, Validators.required],
      end_time: [null, Validators.required],
      price: null,
      event_cover: null
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
    this.categories();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.addres = place.formatted_address;
          // console.log(this.venue_address);
          console.log(place);
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
  }
     cancel1()
   {
    // this.router.navigateByUrl('/events');
   this.intial = true;
 }

   cancel()
   {
    this.router.navigateByUrl('/events');
   // this.intial = true;
 }
  userModal() {
  jQuery('#addadmin').modal({backdrop: 'static', keyboard: false});
  jQuery("#addadmin").modal("show");
  
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

  /*******************************************/

  priceState(val, value) {
    console.log(val, value)
    if (val == 'Y') {
      this.pricee = true;
      // this.price_val = 'Y';
         this.priceVal = 'Y'
    }
    else {
      this.pricee = false;
      // this.price_val = 'N';
      this.priceVal = 'N'
    }

  }

  /**********************************Get CATEGORIES***************************************/

  categories() {
    // alert("hiiii")
    this.authService.getCategories().then((result) => {
      console.log("categoriessss", result);
      this.res = result;
      if (this.res.status == true) {
        this.cat_data = this.res.data;
        console.log('getcategory', this.cat_data);
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }

  /**********************************get groups modal***************************************/


getuserVal(email: string, name: string, isChecked: boolean)
 {
  this.intial = false;
  if (isChecked) {
 console.log('_id', email)
 for (var i in this.grp_data)
  {
    if (this.grp_data[i]._id == email) 
    {
      this.grp_data[i].selected = true
    }
  }
  console.log('allllllllll', this.grp_data);
} 
else 
  {
    console.log('uncheck');
    for (var i in this.grp_data) {
      if (this.grp_data[i]._id == email)
       {
        this.grp_data[i].selected = false
       }
      }
      console.log('allllllllll', this.grp_data);
    }
  }
okvalue(){
  this.groupData = [];

// console.log('groupdata',this,this.grp_data)
for(var i in this.grp_data){
  if(this.grp_data[i].selected == true)
    {
      this.groupData.push(this.grp_data[i]._id);
    }
  }
    console.log('final data',this.groupData);
    this.finalGroupData = this.groupData;
  }

  /**********************************Get Groups***************************************/

users() {   
 this.authService.getGroups().then((result) =>
  {   
   //  console.log(result); 

      this.res = result;
    if (this.res.status == true) {
     this.grp_data = this.res.data; 
   console.log('groupsss', this.grp_data);  
    console.log('selected', this.selectedGroups); 
           for (var i in this.grp_data) { 
          for (var j in this.selectedGroups) {    
           if (this.selectedGroups[j]._id === this.grp_data[i]._id) {     
                    this.grp_data[i].selected = true  
                              }   
                                     } 
                                            }   
                console.log('full array', this.grp_data);   
                   }    
                     else {  
                           console.log("erorr")   

                              } }, (err) =>
                       {   
                       console.log(err);
                  });  }


  /**********************************gET DETAIL***************************************/

  detail() {
    let params = {
      'id': this.event_id.id
    };
    this.authService.getEventDetail(params).then((result) => {
      console.log(result);
      this.res = result;
      this.users();
      if (this.res.status == true) {
        this.data1 = this.res.data;
        this.price_val=this.data1.price_status;
        console.log('price vallll ',this.data1.price_status)
        console.log('categoryyyy  name ',this.data1.event_category.name)
        this.selectedGroups = this.data1.group_id;
        console.log('responseeeeeeeee', this.data1)
        this.cat=this.data1.event_category.name;
        this.newEvent.get('title').setValue(this.data1.title);
        this.newEvent.get('event_category').setValue(this.data1.event_category._id);
        this.newEvent.get('venue').setValue(this.data1.venue);
        this.newEvent.get('description').setValue(this.data1.description);
        // alert(this.data1.date);
        this.newEvent.get('mydate').setValue(this.data1.date)
        // this._var=this.newEvent.get('mydate').setValue(moment(this.data1.date).format('YYYY-MM-DD'));
        // alert(this._var);
        this.newEvent.get('price').setValue(this.data1.price);
        if(this.data1.price_status=='Y'){
          this.pricee = true;
        }
        this.api_image = this.data1.event_cover;
        // this.dater = this.data1.date;
        this.timer = new Date(new Date().toDateString() + ' ' + this.data1.start_time);
        this.timer1 = new Date(new Date().toDateString() + ' ' + this.data1.end_time);
        //  this.newEvent.get('date').setValue(this.dater);
        // this.newEvent.get('group_id').setValue(this.data1.group_id._id);

      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }

  /**********************************EDit Event***************************************/

  EditEvent(val) {
   console.log('current date moment',moment(this.checkdate).valueOf());
   console.log('date moment',moment(this.newEvent.value.mydate).valueOf());
   this.cur_date=moment(this.checkdate).valueOf();
   this.pre_date=moment(this.newEvent.value.mydate).valueOf();
    this.s_time = moment(this.newEvent.value.start_time).format('hh:mm a');
    this.e_time = moment(this.newEvent.value.end_time).format('hh:mm a');
    this.newEvent.value.date = moment(this.newEvent.value.date).format('YYYY-MM-DD');
  
    this.stt1 = moment(this.newEvent.value.start_time).valueOf();
    // console.log('start',this.stt1);
    this.end11 = moment(this.newEvent.value.end_time).valueOf();
    // console.log('end11',this.end11);
       if(this.cur_date>this.pre_date)
       {
        alert("Past Event Can't be updated with previous date")

       }
    
    else{
    
    if (val) {
      if(this.finalGroupData!=undefined)
      {
      if(this.finalGroupData.length==0){
        this.grp_valid=false;
      }
        else{
        
      let data = new FormData();
        if(this.addres==undefined)
      {
        console.log("puranaaa adresss")
        data.append('venue', this.data1.venue);

      }
      else{
         console.log("new adresss")
         data.append('venue', this.addres);
      }
      if(this.priceVal==undefined){
        console.log("puranaa price")
        data.append('price_status', this.price_val);
      }
      else{
        console.log("new price")
        data.append('price_status', this.priceVal);
      }

        if(this.s_time==this.e_time){
        alert("Start time and End Time should not be equal")
      }
      else if(this.stt1>this.end11){
        alert("Start time should not be greater than End Time")
      }
      else{
      data.append('event_id', this.event_id.id);
      data.append('title', this.newEvent.get('title').value);
      data.append('event_category', this.newEvent.get('event_category').value);
      data.append('group_id', this.finalGroupData);
      data.append('description', this.newEvent.get('description').value);
      data.append('event_cover', this.imageUrl);
      data.append('date', this.newEvent.value.mydate);
      data.append('start_time', this.s_time);
      data.append('venue_latitude', this.latitude);
      data.append('venue_longitude', this.longitude);
      data.append('end_time', this.e_time);
      data.append('price', this.newEvent.get('price').value);
      this.authService.editEvent(data).then((result) => {
        console.log(result);
        this.res = result;
        if (this.res.status == true) {
          console.log("trueee")
          // this.showSuccess();
          this.presentToast('Event Updated Succefully')
          this.router.navigateByUrl('/events');
        }
        else {
          console.log("false")
          // this.toastr.error(this.res.message);
        }

      }, (err) => {
        console.log(err);
      });
    }
}
    }
      else{

      let data = new FormData();
        if(this.addres==undefined)
      {
        console.log("puranaaa adresss")
        data.append('venue', this.data1.venue);

      }
      else{
         console.log("new adresss")
         data.append('venue', this.addres);
      }
      if(this.priceVal==undefined){
        console.log("puranaa price")
        data.append('price_status', this.price_val);
      }
      else{
        console.log("new price")
        data.append('price_status', this.priceVal);
      }


        if(this.s_time==this.e_time){
        alert("Start time and End Time should not be equal")
      }
      else if(this.stt1>this.end11){
        alert("Start time should not be greater than End Time")
      }
      else{
      data.append('event_id', this.event_id.id);
      data.append('title', this.newEvent.get('title').value);
      data.append('event_category', this.newEvent.get('event_category').value);
      data.append('group_id', this.finalGroupData);
      data.append('description', this.newEvent.get('description').value);
     
     
      data.append('event_cover', this.imageUrl);
      data.append('date', this.newEvent.value.mydate);
      data.append('start_time', this.s_time);
      data.append('end_time', this.e_time);
      
      data.append('price', this.newEvent.get('price').value);
      this.authService.editEvent(data).then((result) => {
        console.log(result);
        this.res = result;
        if (this.res.status == true) {
          console.log("trueee")
          // this.showSuccess();
          this.router.navigateByUrl('/events');
        }
        else {
          console.log("false")
          // this.toastr.error(this.res.message);
        }

      }, (err) => {
        console.log(err);
      });
    }
}
    }

    else {
      console.log("invaliddd")

    }
  }

  }


  /************************************Toast***************************/


   presentToast(msg) {

    this.toastr.success(this.res.message, '', {
  timeOut: 3000,
  tapToDismiss:true
});
  }



}
