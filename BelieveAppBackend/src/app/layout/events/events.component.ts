import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { Router } from '@angular/router'; 
import * as $ from 'jquery';
// var $ = require('jquery');
import 'datatables.net';

declare var jQuery:any;
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
res:any;
data:any;
id:any;
public filterQuery = "";
public rowsOnPage = 10;
public sortOrder = "asc";

  constructor(
  	private router: Router,
    public authService: AuthServiceService) { }

  ngOnInit() {
  	this.evnetss();
       setTimeout(() => {
    $('#example').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
    },500);
        
    }

    RemoveClick(id){
      // alert(id)
      jQuery("#request").modal("show");
      this.id=id;

    }

    /**********************************Remove Groups***************************************/
   
    RemoveComm() {
     
       
      let params={
        'type':'EV',
        'type_id':this.id
      };
    this.authService.removeCommunity(params).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
      jQuery("#request").modal("hide");
      this.evnetss();

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


     /**********************************Get Events***************************************/
   
    evnetss() {
      // alert("hiiii")
    this.authService.getAllEvents().then((result) => {
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
