import { Component, OnInit,NgZone,ElementRef,ViewChild } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 res:any;
 data:any;
 id:any;
 myForm: FormGroup;
@ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    public authService: AuthServiceService,
    private fb: FormBuilder,
    public router: Router,
     private toastr: ToastrService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { 
    this.myForm = this.fb.group({
        location:['', Validators.required],
         phone: ['', Validators.required],
         mail: ['', Validators.required],
         website_link: ['', Validators.required],
         facebook_link: ['', Validators.required],
         twitter_link: ['', Validators.required],
         instagram_link: ['', Validators.required],
         latitude: null,
         longitude: null,
         country:null
      });
  }

  ngOnInit() {
    this.contact();
      this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
           this.myForm.get('location').setValue(place.formatted_address);
           // this.addres=place.formatted_address;
           // console.log(this.venue_address);
          for(var i = 0; i < place.address_components.length; i += 1) {
          var addressObj = place.address_components[i];
          for(var j = 0; j < addressObj.types.length; j += 1) {
            if (addressObj.types[j] === 'country') {
              console.log(addressObj.types[j]); // confirm that this is 'country'
              console.log(addressObj.long_name); // confirm that this is the country name
            this.myForm.get('country').setValue(addressObj.long_name);
            }
          }
}
           console.log(place);
            this.myForm.get('latitude').setValue(place.geometry.location.lat());
             this.myForm.get('longitude').setValue(place.geometry.location.lng());
          //   this.latitude = place.geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
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

   /**********************************Edit Contact***************************************/
   
    Editcontact(val,value) {
      console.log(value)

      // alert("hiiii")
    this.authService.editContact(value).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
      this.presentToast(this.res.message)
     // alert(this.res.message)
      this.contact();
        this.router.navigateByUrl('/contact');

    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

    /**********************************Get Contact***************************************/
   
    contact() {
      // alert("hiiii")
    this.authService.getContact().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
    this.data=this.res.data;

    this.myForm.get('location').setValue(this.data.location);
    this.myForm.get('phone').setValue(this.data.phone);
    this.myForm.get('mail').setValue(this.data.mail);
    this.myForm.get('website_link').setValue(this.data.website_link);
    this.myForm.get('facebook_link').setValue(this.data.facebook_link);
    this.myForm.get('twitter_link').setValue(this.data.twitter_link);
    this.myForm.get('instagram_link').setValue(this.data.instagram_link);
    console.log(this.data);
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
