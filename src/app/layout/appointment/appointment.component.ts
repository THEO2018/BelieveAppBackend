import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import * as $ from 'jquery';
import 'datatables.net';
import { Router } from '@angular/router';


declare var jQuery:any;

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
 res:any;
 data:any;
 _data:any;
 count:any;
 _up: boolean = false;
 _today: boolean = true;

  constructor(
  	private router: Router,
    public authService: AuthServiceService) { }

  ngOnInit() {
      setTimeout(() => {
   $('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
  	this.Apoinments();
  }
  upcoming(){
      setTimeout(() => {
   $('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
    this._today=true;
     this._up=false;
  }
  today(){
      setTimeout(() => {
   $('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
     this._up=true;
     this._today=false;
  }


  /**********************************Accept/Reject Apoinments***************************************/
   
    ApoinmentsAR(status,id) {
    	let params={
    		'id':id,
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
    this.authService.getUpTOApoinments().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
      this.count=this.res.data.appointmentRequestsCount;
         this.data=this.res.data.todaysAppointments;
         this._data=this.res.data.upcomingAppointments;
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
