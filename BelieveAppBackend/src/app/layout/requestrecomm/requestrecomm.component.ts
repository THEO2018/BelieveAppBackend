import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import * as $ from 'jquery';
declare var jQuery:any;

@Component({
  selector: 'app-requestrecomm',
  templateUrl: './requestrecomm.component.html',
  styleUrls: ['./requestrecomm.component.scss']
})
export class RequestrecommComponent implements OnInit {
res:any;
data:any;
id:any;
email:any;
em:any;
des:any;
myForm: FormGroup;
  constructor(
  	private router: Router,
    private fb: FormBuilder,
    public authService: AuthServiceService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
         email: ['', Validators.required],
         admin_description: ['', Validators.required]
      });
  	this.GetRecommendationRequests();
  }
  ngAfterContentChecked(){
          $("#des").on("keypress", function (e) {
          if (e.which === 32 && !this.value.length)
          e.preventDefault();
          });

          $("#name").on("keypress", function (e) {
          if (e.which === 32 && !this.value.length)
          e.preventDefault();
          });
     }
   accept(id,email){
   	this.id=id;
   	this.email=email;
    // console.log(val)
    jQuery("#request").modal("show");

  }
  reject(id,email){
  	this.id=id;
   	this.email=email;
    jQuery("#reject").modal("show");

  }

  /**********************************Approve/cancel Recommendation Requests***************************************/

  AproveCancelRecomm(val,value){
    console.log(val,this.email,this.id)
    console.log(value)
    jQuery("#reject").modal("hide");
    jQuery("#request").modal("hide");
    if(val='R'){
     this.em='';
     this.des='';
    }
    else{
      this.em=value.email;
     this.des=value.admin_description;
    }
     let params={
        'recommendation_id':this.id,
        'approve_status':val,
        'email':this.em,
        'des':this.des
    };
    
    this.authService.appCanRecommendation(params).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
      this.GetRecommendationRequests();
      this.myForm.reset({
            'email': '',
            'admin_description': ''
           });
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });

  }

   /**********************************Get Recommendation Requests***************************************/

    GetRecommendationRequests() {
      // alert("hiiii")
    this.authService.getRecommRequests().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
         this.data=this.res.data;
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
