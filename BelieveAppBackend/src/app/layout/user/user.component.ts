import { Component, OnInit ,NgZone,ElementRef,ViewChild} from '@angular/core';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';
import { AuthServiceService } from '../../auth-service.service';
import { MapsAPILoader } from '@agm/core';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router'; 
import * as $ from 'jquery';
declare var jQuery:any;

@Component({
  selector: 'app-newevent',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
res:any;
data:any;
user_id : any;


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
myForm: FormGroup;
category: FormGroup;
browse: boolean = false;
arryData= [];
loaded: boolean = false;
imageSrc: string = '';
imageLoaded: boolean = false;
imageUrl: any
image: boolean = false;
api_image : any;

public min =  new Date(+new Date() - 1000*60*60*24);
@ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthServiceService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) 
  {
    this.route.params.subscribe(params => {
      console.log(params);
      this.user_id = params;
    });

     this.myForm = this.formBuilder.group({
            first_name: [null, Validators.required],
            last_name: [null, Validators.required],
            phone_number: [null, Validators.required],
            gender: [null, Validators.required],
            profession: [null, Validators.required],
            status: [null, Validators.required],
            address : [null, Validators.required]
            
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
  
    this.detail();

 
    
    }


    

  /**********************************Add DETAIL***************************************/

  detail() {
    let params = {
      'user_id': this.user_id.id
    };
    this.authService.getUserDeatil(params).then((result) => {
      //console.log(result);
      this.res = result;
      if (this.res.status == true) {
        this.data = this.res.data;
        console.log('editGroupDetail', this.data);
        this.myForm.get('first_name').setValue(this.data.first_name);
        this.myForm.get('last_name').setValue(this.data.last_name);
        this.myForm.get('phone_number').setValue(this.data.phone_number);
        this.myForm.get('gender').setValue(this.data.gender);
        this.myForm.get('profession').setValue(this.data.profession);
        this.myForm.get('status').setValue(this.data.status);
         this.myForm.get('address').setValue(this.data.address);
        this.api_image = this.data.profile_image;
        
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }




}
