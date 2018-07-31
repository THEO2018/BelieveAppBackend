import { Component, OnInit,ElementRef, NgZone,ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { AuthServiceService } from '../../auth-service.service';
import * as moment from 'moment';
import { Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';

@Component({
  selector: 'app-servicehour',
  templateUrl: './servicehour.component.html',
  styleUrls: ['./servicehour.component.scss']
})
export class ServicehourComponent implements OnInit {
@ViewChild("search")
  public searchElementRef: ElementRef;
  muloptions:any;
  myForm: FormGroup;
  venue_address:any;
  res:any;
  data:any;
  timer: any;
  s_time :any;

  constructor( 	
  	private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router,
    private toastr: ToastrService,
    public authService: AuthServiceService,
    private formBuilder: FormBuilder)
     {
  	  this.myForm = this.formBuilder.group({
            venue: [null, Validators.required],
            day_from: [null, Validators.required],
            day_to: [null, Validators.required],
            time : [null, Validators.required],
            phone  : [null, Validators.required]
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

  /********************************************************/

   ngOnInit() {
     this.Service();

  	   $("#phn").on("keypress", function (e) {
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
           
           this.venue_address=place.formatted_address;
           console.log(this.venue_address);
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
  }

  CAncel(){
    this.router.navigateByUrl('/contactsupport');
  }

     /**********************************Edit service Hours***************************************/
   
    EditService(val,value) {
    	console.log(value)
     this.s_time = moment(this.myForm.value.time).format('hh:mm a');
     console.log(this.s_time )
     if(!this.venue_address){
       this.venue_address=this.data.venue;
     }
     else{
      this.venue_address=this.venue_address;
     }
     let params={
     	'time':this.s_time,
     	'day_from':value.day_from,
     	'day_to':value.day_to,
     	'venue':this.venue_address,
     	'phone':value.phone
     }
    this.authService.editService(params).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
       this.presentToast(this.res.message)
    //	alert(this.res.message)
    	this.Service();
        this.router.navigateByUrl('/servicehour');

    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

 /**********************************Get Service Hours***************************************/
   
    Service() {
      // alert("hiiii")
    this.authService.getService().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
    this.data=this.res.data;

    this.myForm.get('day_from').setValue(this.data.day_from);
    this.myForm.get('day_to').setValue(this.data.day_to);
    this.timer = new Date(new Date().toDateString() + ' ' + this.data.time);
    // this.myForm.get('time').setValue(this.data.time);
    this.myForm.get('venue').setValue(this.data.venue);
    this.myForm.get('phone').setValue(this.data.phone);
    
    }
    else{
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
