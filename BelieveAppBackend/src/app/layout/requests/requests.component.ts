import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
declare var jQuery:any;
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  res:any;
  data:any;
  constructor(
  	private router: Router,
    private fb: FormBuilder,
    public authService: AuthServiceService) 
  { 
  }

  ngOnInit() 
  {
  	this.GetwedList();
  }

  bethrods()
  {
    // console.log(val)
    jQuery("#request").modal("hide");
    jQuery("#accept").modal("show");
  }

   /********************************** Get Bethrod Request**************************************/


  BethrodRequest(val,value,id)
  {
    console.log(val,value,id)
    jQuery("#reject").modal("hide");
    jQuery("#accept").modal("hide");
    let params={
        'betrothed_id':id,
        'accept_status':val,
        'visibility_status':value
    };
    this.authService.bethrodRequest(params).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
      this.GetwedList();
      console.log(this.data);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });

  }

   /**********************************Get wedding List**************************************/


  GetwedList() {
      // alert("hiiii")
    this.authService.getBethRequests().then((result) => {
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
