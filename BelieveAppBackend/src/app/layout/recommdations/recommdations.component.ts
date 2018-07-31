import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import * as $ from 'jquery';

import { Router } from '@angular/router';
import 'datatables.net';

@Component({
  selector: 'app-recommdations',
  templateUrl: './recommdations.component.html',
  styleUrls: ['./recommdations.component.scss']
})
export class RecommdationsComponent implements OnInit {
 res:any;
 data:any;
 id:any;

  constructor(
  	private router: Router,
    public authService: AuthServiceService) { }

  ngOnInit() {
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
  	this.Recommendations();
  }

    /**********************************Get Recommendation***************************************/
   
    Recommendations() {
      // alert("hiiii")
    this.authService.getRecommendations().then((result) => {
    console.log("Recommmadations",result);
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
