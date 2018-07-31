import { Component, OnInit ,NgZone,ElementRef,ViewChild} from '@angular/core';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';
import { AuthServiceService } from '../../auth-service.service';
import { MapsAPILoader } from '@agm/core';
import * as moment from 'moment';
import { Router } from '@angular/router'; 
import * as $ from 'jquery';
declare var jQuery:any;

@Component({
  selector: 'app-contactsupport',
  templateUrl: './contactsupport.component.html',
  styleUrls: ['./contactsupport.component.scss']
})
export class ContactsupportComponent implements OnInit {
res:any;
data:any;
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
arryData= [];
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
    private ngZone: NgZone) 
  {

     this.newEvent = this.formBuilder.group({
            title: [null, Validators.required],
            issue_category: [null, Validators.required],
            description: [null, Validators.required],
         
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
        $("#cat").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
      e.preventDefault();
      });

    // this.users();
    this.categories();
    
 
    }


  

    /**********************************Get CATEGORIES***************************************/
   
    categories() {
      // alert("hiiii")
    this.authService.getIssueCategories().then((result) => {
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

    this.newEvent.reset({
          'title': '',
          'category' : '',
          'description' : ''
         });
  }
    

  /**********************************Add Category***************************************/

    SendContactRequest(val){
      if(val){
        let params={
            'title': this.newEvent.get('title').value,
            'category' : this.newEvent.get('issue_category').value,
            'Description' : this.newEvent.get('description').value
        }
        console.log(params)
         this.authService.sendContactRequest(params).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
          	alert("Mail has been sent to admin. Thanks to contact.")
            this.categories();
             
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
       	alert("please fill all required fields")
        console.log("invaliddd")

       }

    }



}
