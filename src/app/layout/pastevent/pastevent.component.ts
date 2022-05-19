import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { Router } from '@angular/router'; 
declare var jQuery:any;
@Component({
  selector: 'app-pastevent',
  templateUrl: './pastevent.component.html',
  styleUrls: ['./pastevent.component.scss']
})
export class PasteventComponent implements OnInit {

res:any;
data:any;

  constructor( private router: Router,
    public authService: AuthServiceService) { }
 

  ngOnInit() {
  	this.evnetss();
  }

  /**********************************Remove Groups***************************************/
   
    RemoveComm(id) {
      // alert("hiiii")
      let params={
        'type':'EV',
        'type_id':id
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
    this.authService.getUpPastEvents().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
         this.data=this.res.data.pastEvents;
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
