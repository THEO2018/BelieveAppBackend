import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';

import { Router } from '@angular/router';

declare var jQuery:any;
@Component({
  selector: 'app-appointrequest',
  templateUrl: './appointrequest.component.html',
  styleUrls: ['./appointrequest.component.scss']
})
export class AppointrequestComponent implements OnInit {
 res:any;
 data:any;
 id:any;
 _id:any;
 f_id:any;

  constructor(
  	private router: Router,
    public authService: AuthServiceService) { }

   ngOnInit() {
  	this.Apoinments();
  }

  accept(id){
    console.log("accceeeptttt id",id)
   jQuery("#request").modal("show");
   this.id=id;
  }

  reject(id){
console.log("rejecttttt id",id)
     jQuery("#reject").modal("show");
     this._id=id;

  }

  /**********************************Accept/Reject Apoinments***************************************/
   
    ApoinmentsAR(status) {
      if(status=='A'){
           this.f_id=this.id
      }
      else{
          this.f_id=this._id
      }
      console.log("final id",this.f_id)
    	let params={
    		'id':this.f_id,
    		'status':status
    	}
      // alert("hiiii")
    this.authService.appointmentStatus(params).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
    	 jQuery("#request").modal("hide");
    	  jQuery("#reject").modal("hide");
    	  this.Apoinments();
         // this.data=this.res.data;
         console.log(this.data);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

    /**********************************Get Apoinments***************************************/
   
    Apoinments() {
      // alert("hiiii")
    this.authService.getApoinments().then((result) => {
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
