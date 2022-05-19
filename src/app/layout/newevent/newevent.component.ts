import { Component, OnInit ,NgZone,ElementRef,ViewChild} from '@angular/core';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';
import { AuthServiceService } from '../../auth-service.service';
import { MapsAPILoader } from '@agm/core';
import * as moment from 'moment';
import { Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
declare var jQuery:any;

@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.component.html',
  styleUrls: ['./newevent.component.scss']
})
export class NeweventComponent implements OnInit {
res:any;
data:any;
  latitude: any;
  longitude: any;
cat_data:any;
price_val:any;
grp_data:any;
   stt: any;
  stt1: any;
  endtt: any;
  end11: any;
addres:any;
arry: any;
s_time:any;
e_time:any;
arry1: any;
nameary=[];
img: boolean = true;
pricee: boolean = false;
img_valid: boolean = true;
price_status: boolean = true;
grp_valid: boolean = true;
newEvent: FormGroup;
category: FormGroup;
browse: boolean = false;
 public arryData:any
loaded: boolean = false;
imageSrc: string = '';
imageLoaded: boolean = false;
imageUrl: any
image: boolean = false;
Pricevalidate = "([0-9]{1})|([0-9]{2})";
public min =  new Date(+new Date() - 1000*60*60*24);
@ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthServiceService,
    private mapsAPILoader: MapsAPILoader,
    private toastr: ToastrService,
    private ngZone: NgZone) 
  {

     this.newEvent = this.formBuilder.group({
            title: [null, Validators.required],
            useremail: this.formBuilder.array([]),
            useremail1: this.formBuilder.array([]),
            event_category: [null, Validators.required],
            description: [null, Validators.required],
            venue: [null, Validators.required],
            date : [null, Validators.required],
            start_time : [null, Validators.required],
            end_time : [null, Validators.required],
            price:null,
            event_cover:null
        }); 

     this.category = this.formBuilder.group({
            category_name: [null, Validators.required]
        });   
  }
  cancel(){
      this.router.navigateByUrl('/events');
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
        $("#cat").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
      e.preventDefault();
      });

    // this.users();
    this.categories();
    this.getlibrary();
    this.Groups();

   this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
           
           this.addres=place.formatted_address;
           // console.log(this.venue_address);
           console.log(place);
            this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
    
    }


    priceState(val,value){
      console.log(val,value)
      if(val=='Y'){
        this.pricee=true;
        this.price_val='Y';
      }
      else{
        this.pricee=false;
        this.price_val='N';
      }

    }
    userModal() {
  jQuery('#addadmin').modal({backdrop: 'static', keyboard: false});
  jQuery("#addadmin").modal("show");
  
  } 

     /**********************************get groups modal***************************************/


  getuserVal(email:string,name:string, isChecked: boolean){
      const emailFormArray = <FormArray>this.newEvent.controls.useremail;
   const emailFormArray1 = <FormArray>this.newEvent.controls.useremail1;
        if(isChecked) {
          this.grp_valid=true;
          console.log(name)
        emailFormArray.push(new FormControl(email));
        emailFormArray1.push(new FormControl(name));

        // this.nameary.push(name);
        this.arry=emailFormArray.value;
        this.arry1=emailFormArray1.value;
        console.log("arrayyyy", this.nameary);
      } else {
        let index = emailFormArray.controls.findIndex(x => x.value == email)
         let index1 = emailFormArray1.controls.findIndex(x => x.value == name)
        emailFormArray.removeAt(index);
        emailFormArray1.removeAt(index);
        this.arry=emailFormArray.value;
        this.arry1=emailFormArray1.value;
        console.log("remove arrayyyy",this.arry);
      }
      
    }

/**********************************get image***************************************/
  
onFileChange(event){
  console.log(event)
if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
if(event.target.files.length > 0)
  {
  this.image = false;
  this.img = true;
   this.img_valid=true;
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

checkings(){
// alert('hi');
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
 /**********************************Get Groups***************************************/
   
    Groups() {
      // alert("hiiii")
    this.authService.getGroups().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
         this.grp_data=this.res.data;
         console.log(this.data);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }
    /**********************************Get CATEGORIES***************************************/
   
    categories() {
      // alert("hiiii")
    this.authService.getCategories().then((result) => {
    console.log("categoriessss",result);
    this.res=result;
    if(this.res.status==true){
         this.cat_data=this.res.data;
         console.log(this.cat_data);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }



    clearForm() {

    this.category.reset({
          'category_name': ''
         });
  }
    

  /**********************************Add Category***************************************/

    AddCategory(val,value){
      if(val){
        let params={
            'name':value.category_name
        }
        console.log(params)
         this.authService.addCategory(params).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
            this.categories();
               jQuery("#request").modal("hide");
               this.clearForm();


          }
        else
         {
            console.log("fasle")
          // this.toastr.error(this.res.message);
          }
           
          }, (err) => {
            console.log(err);
          });
       }
       
       else{
        console.log("invaliddd")

       }

    }

/**********************************Add Event***************************************/

    AddEvent(val){
      console.log('imageconsole',this.imageUrl);
    console.log("event formmm",this.newEvent.get('event_category').value)
    this.newEvent.value.date = moment(this.newEvent.value.date).format('YYYY-MM-DD');
    this.s_time = moment(this.newEvent.value.start_time).format('hh:mm a');
    this.e_time = moment(this.newEvent.value.end_time).format('hh:mm a');
     console.log(this.newEvent.value.date)
    //   this.stt = new Date("November 13, 2013" + this.s_time);
    // this.stt1 = this.stt.getTime();
    // console.log('starttime',this.stt1);
    // this.endtt = new Date("November 13, 2013 " + this.e_time);
    // this.end11 = this.endtt.getTime();
    // console.log('endtime',this.end11);
      // if(this.newEvent.value.useremail.length==0){
      //   console.log("emailll")
      //   this.grp_valid=false;
      //  }
      //  else if(!this.newEvent.value.group_image){
      //   this.img_valid=false;
      //  }
      this.stt1 = moment(this.newEvent.value.start_time).valueOf();
    console.log('start',this.stt1);
    this.end11 = moment(this.newEvent.value.end_time).valueOf();
    console.log('end11',this.end11);
       if(val){
        // alert("valuiesss")
         if(this.newEvent.value.useremail.length==0){
          // alert("groupsss")
        console.log("emailll")
        this.grp_valid=false;
       }
      else if(!this.img){
        this.img_valid=true;
       }
       else if (!this.imageUrl) {
        this.img_valid = false;
      }
     else if(this.s_time==this.e_time){
        alert("Start time and End Time should not be equal")
      }
      else if(this.stt1>this.end11){
        alert("Start time should not be greater than End Time")
      }
       else{

        let data = new FormData();
       
       data.append('title', this.newEvent.get('title').value);
       data.append('event_category', this.newEvent.get('event_category').value);
       data.append('group_id', this.arry);
       data.append('description', this.newEvent.get('description').value);
       data.append('venue', this.addres);
       data.append('event_cover', this.imageUrl);
        data.append('venue_latitude', this.latitude);
        data.append('venue_longitude', this.longitude);
       data.append('date', this.newEvent.value.date);
       data.append('start_time', this.s_time);
       data.append('end_time', this.e_time);
       data.append('price_status', this.price_val);
       data.append('price', this.newEvent.get('price').value);
         this.authService.addEvent(data).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
            console.log("trueee")
            this.presentToast('Event Created Succefully')
             // alert("Event Created Succefully")
           this.router.navigateByUrl('/events');

          }
        else
         {
            console.log("fasle")
          }
           
          }, (err) => {
            console.log(err);
          });
       }
       }
       
       else{
        alert("Fill Required Fields!!")
        console.log("invaliddd")

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
