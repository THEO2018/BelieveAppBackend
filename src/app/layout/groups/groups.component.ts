import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import * as $ from 'jquery';
// var $ = require('jquery');
import 'datatables.net';
import { Router } from '@angular/router'; 
declare var jQuery:any;
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  res:any;
  id:any;
  mytable:any;
  activePage: any;
  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortOrder = "asc";

  constructor(
    private router: Router,
    public authService: AuthServiceService) { }

  ngOnInit() 
  {
    this.users() ;
    setTimeout(() => {
   this.mytable= $('#example').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    })
    },500);
  

  }

    RemoveClick(id){
      jQuery("#request").modal("show");
      this.id=id;

    }
   /**********************************Remove Groups***************************************/
   
    RemoveComm() {
      let params=
      {
        'type':'GR',
        'type_id':this.id
      }
    this.authService.removeCommunity(params).then((result) => {
    console.log(result);
     
    this.res=result;
    if(this.res.status==true){
    jQuery("#request").modal("hide");
      this.users();
      // alert("Group has been deleted successfully")
      this.mytable.destroy();
       setTimeout(() => {
   this.mytable= $('#example').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    })
    },500);
         console.log(this.data);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

  /**********************************Get Groups***************************************/
   
    users() {
    this.authService.getGroups().then((result) => 
    {
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
