import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';

import { Router } from '@angular/router';
declare var jQuery: any;
@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent implements OnInit {
  loadData(): any {
    throw new Error("Method not implemented.");
  }
  activePage: any;
  // public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortOrder = "asc";
  res: any;
  id: any;
  data:any;

  constructor(
    private router: Router,
    public authService: AuthServiceService) { }

  ngOnInit() {
    this.managers();
  }

  // search(){
  //   console.log('data');
    
  // }

  // onPageChange(event) {
  //   console.log('eventvalue', event);
  //   this.rowsOnPage = event.rowsOnPage;
  //   this.activePage = event.activePage;
  //   this.loadData();
  // }

  // RemoveClick(id) {
  //   // alert(id)
  //   jQuery("#request").modal("show");
  //   this.id = id;

  // }
  /**********************************Remove Groups***************************************/

  // RemoveComm() {
  //   // alert("hiiii")
  //   let params = {
  //     'type': 'GR',
  //     'type_id': this.id
  //   }
  //   this.authService.removeCommunity(params).then((result) => {
  //     console.log(result);

  //     this.res = result;
  //     if (this.res.status == true) {
  //       jQuery("#request").modal("hide");
  //       this.users();
  //       // this.data=this.res.data;
  //       console.log(this.data);
  //     }
  //     else {
  //       console.log("erorr")
  //     }

  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  /**********************************Get Managers***************************************/

  managers() {
    console.log('manager lsit');
    this.authService.getManagers().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {
        this.data = this.res.data;
        console.log(this.data);
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }


}
