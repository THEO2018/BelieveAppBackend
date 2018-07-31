import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';


@Component({
  selector: 'app-newmember',
  templateUrl: './newmember.component.html',
  styleUrls: ['./newmember.component.scss']
})
export class NewmemberComponent implements OnInit {
res:any;
data:any;

  constructor(
  	public authService: AuthServiceService) { }

  ngOnInit() {
  	this.Alumni();
  }
  /**********************************Get Alumni***************************************/
   
    Alumni() {
      // alert("hiiii")
    this.authService.getAlumni().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
         this.data=this.res.data.newMembers;
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
