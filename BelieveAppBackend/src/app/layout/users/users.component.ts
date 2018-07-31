import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import * as $ from 'jquery';
import 'datatables.net';
declare var jQuery:any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
res:any;
data:any;
mytable:any;

  constructor(
    public authService: AuthServiceService) { }

  ngOnInit() {
      setTimeout(() => {
   this.mytable=$('#example').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
    this.Users();
  }

      /**********************************Add Alumni***************************************/
   
    AddAllumni(id) {
      let params={
        'id':id
      }
      // alert("hiiii")
    this.authService.addAlumni(params).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
      this.Users();
      jQuery("#request").modal("hide");
        this.mytable.destroy();
          setTimeout(() => {
   this.mytable=$('#example').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
         // this.data=this.res.data.normalMembers;
         // console.log(this.data);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

      /**********************************Get Alumni***************************************/
   
    Users() {
      // alert("hiiii")
    this.authService.getAlumni().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
         this.data=this.res.data.normalMembers;
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
