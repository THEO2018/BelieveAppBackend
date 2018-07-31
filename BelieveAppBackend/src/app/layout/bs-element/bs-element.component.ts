import { Component, OnInit,ElementRef, NgZone, ViewChild  } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import * as moment from 'moment';
import * as $ from 'jquery';

declare var jQuery: any;

@Component({
    selector: 'app-bs-element',
    templateUrl: './bs-element.component.html',
    styleUrls: ['./bs-element.component.scss'],
    animations: [routerTransition()]
})
export class BsElementComponent implements OnInit {
  @ViewChild("search")
  public searchElementRef: ElementRef;
   public arryData:any
	res:any;
	data:any;
  timer: any;
  id:any;
    stt: any;
  stt1: any;
  endtt: any;
  end11: any;
  timer1: any;
  api_image:any;
  e_time: string;
  s_time: string;
  venue_address:any;
	myForm: FormGroup;
  img: boolean = true;
  img_valid: boolean = true;
  image: boolean = false;
  imageUrl: any;
  imageSrc: string = '';
  imageLoaded: boolean = false;
  loaded: boolean = false;
  browse: boolean = false;

    constructor(
       private mapsAPILoader: MapsAPILoader,
       private ngZone: NgZone,
    	 public authService: AuthServiceService,
       private fb: FormBuilder,
       public router: Router) {

    	this.myForm = this.fb.group({
          church_name:['', Validators.required],
          church_address: ['', Validators.required],
          church_timing_from: ['', Validators.required],
          church_timing_to: ['', Validators.required],
          website: ['', Validators.required],
          phone: ['', Validators.required],
          logo: null
      });
    }

    ngOnInit() {
    	this.Church();
      this.getlibrary();
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
     this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          this.venue_address = place.formatted_address;
          console.log(this.venue_address);
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // this.latitude = place.geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
          // console.log("lat long", this.latitude, this.longitude)
        });
      });
    });
    }

    CAncel(){
   this.router.navigateByUrl('/setting');

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
    this.img_valid = true;
    this.img = false;
     }
   //this.saveFiles(files);
    }

    handleImageLoad() {
      this.imageLoaded = true;
    }

    _handleReaderLoaded(e) 
    {
      this.browse = true
      console.log('image', e);
      var reader = e.target;
      this.imageSrc = reader.result;
      this.loaded = true;
    }

    checking(index, url) 
    {
      this.browse = false;
      this.image = true;
      this.img = true;
      this.img_valid = true;
      $('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
      console.log('url', url);
      this.imageUrl = url;
    }

    openModal()
     {
     jQuery('#gallerymodal').modal({backdrop: 'static', keyboard: false});
      jQuery("#gallerymodal").modal("show");
      this.getlibrary();
    }

   
    getlibrary() 
    {
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

 /**********************************Edit Church Info ***************************************/
      

    EditChurch(val) {
      console.log(val);
       console.log("heyyy formmmm",this.myForm.value);
       if(this.venue_address){
        this.venue_address=this.venue_address;
       }
       else{
         this.venue_address=this.data.church_address;
       }
       console.log(this.venue_address);
       this.s_time = moment(this.myForm.value.church_timing_from).format('hh:mm a');
      this.e_time = moment(this.myForm.value.church_timing_to).format('hh:mm a');
      
        // this.stt = new Date("November 13, 2013" + this.s_time);
        // this.stt1 = this.stt.getTime();
        // console.log('starttime',this.stt1);
        // this.endtt = new Date("November 13, 2013 " + this.e_time);
        // this.end11 = this.endtt.getTime();
        // console.log('endtime',this.end11);
        this.stt1 = moment(this.myForm.value.church_timing_from).valueOf();
    console.log('start',this.stt1);
    this.end11 = moment(this.myForm.value.church_timing_to).valueOf();
    console.log('end11',this.end11);
      if(val){
         if(this.s_time==this.e_time){
        alert("Start time and End Time should not be equal")
      }
      else if(this.stt1>this.end11){
        alert("Start time should not be greater than End Time")
      }
      else{
      
        let data = new FormData(); 
       data.append('church_name', this.myForm.get('church_name').value);
       data.append('church_address', this.venue_address);
       data.append('church_id', this.id);
       data.append('website', this.myForm.get('website').value);
       data.append('church_timing_from', this.s_time);
        data.append('church_timing_to', this.e_time);
       data.append('phone', this.myForm.get('phone').value);
        data.append('logo', this.imageUrl);
       
       console.log(data);
         this.authService.editChurch(data).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
          this.Church();
           this.router.navigateByUrl('/setting');
          }
        else
        {
          // this.toastr.error(this.res.message);
          }
           
          }, (err) => {
            console.log(err);
          });
       }
       
       }
       else{
        alert("Fill Required Fields!!!");
        console.log("invaliddd")

       }

  }



  /**********************************Get Church Detail***************************************/
   
    Church() {
      // alert("hiiii")
    this.authService.getChurch().then((result) => {
    console.log("church data",result);
    this.res=result;
    if(this.res.status==true){
    this.data=this.res.data;

    this.myForm.get('church_address').setValue(this.data.church_address);
    this.myForm.get('church_name').setValue(this.data.church_name);
    this.timer = new Date(new Date().toDateString() + ' ' + this.data.church_timing_from);
    this.timer1 = new Date(new Date().toDateString() + ' ' + this.data.church_timing_to);
    // this.myForm.get('church_timing_from').setValue(this.data.church_timing_from);
    // this.myForm.get('church_timing_to').setValue(this.data.church_timing_to);
     this.api_image = this.data.logo;
     this.id=this.data._id;
    this.myForm.get('phone').setValue(this.data.phone);
    this.myForm.get('website').setValue(this.data.website);
    console.log(this.data);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }
}
