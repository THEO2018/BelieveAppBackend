import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import * as $ from 'jquery';
// var $ = require('jquery');
import 'datatables.net';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {
res:any;
data:any;

  constructor(public authService: AuthServiceService) { }

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
  	this.Alumni();
  }

    /**********************************Get Alumni***************************************/
   
    Alumni() {
      // alert("hiiii")
    this.authService.getAlumni().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
         this.data=this.res.data.alumnis;
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
