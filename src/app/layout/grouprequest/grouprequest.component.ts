import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-grouprequest',
  templateUrl: './grouprequest.component.html',
  styleUrls: ['./grouprequest.component.scss']
})
export class GrouprequestComponent implements OnInit {
group_id:any;
res:any;
data:any;
type:any;
req_id:any;
u_id:any;

  constructor(
    private route: ActivatedRoute,
    public authService: AuthServiceService,
    public router: Router)
  { 
   this.route.params.subscribe(params => {
      console.log(params);
      this.group_id = params.id;
      this.type=params.id2;
      if(this.type=='smallgroup'){
       this.joinSmallRequests();
      }
      else{
         this.joinRequests();
      }
      });
  }

    ngOnInit() 
    {
    }
  
   acceptModal(id,u_id) 
   {
   this.req_id=id;
   this.u_id=u_id;
   jQuery('#request').modal({backdrop: 'static', keyboard: false});
   jQuery("#request").modal("show");
  }

  rejectModal(id,u_id) 
  {
  this.req_id=id;
  this.u_id=u_id;
  jQuery('#reject').modal({backdrop: 'static', keyboard: false});
  jQuery("#reject").modal("show");
    
  }
  

 /**********************************Accept/Reject Group Join Requests**************************************/
   
    actionRequests(status) {
      
     if(this.type=='smallgroup') 
     {
          let params=
      {
        'id':this.req_id,
        'status':status,
        'g_id':this.group_id,
        'u_id':this.u_id
      }
    this.authService.acp_rej_smallgroup_req(params).then((result) => {
    console.log(result);
    this.res=result;
    jQuery("#reject").modal("hide");
    jQuery("#request").modal("hide");
    if(this.res.status==true)
    {
      this.router.navigateByUrl('/smallgroup');
      this.joinSmallRequests();
    }
    else
    {
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
   
  }
  else
  {
        let params=
      {
        'id':this.req_id,
        'status':status,
        'g_id':this.group_id,
        'u_id':this.u_id
      }
    this.authService.acp_rej_group_req(params).then((result) => {
    console.log(result);
    this.res=result;
    jQuery("#reject").modal("hide");
    jQuery("#request").modal("hide");
    if(this.res.status==true)
    {
      this.router.navigateByUrl('/groups');
      this.joinRequests();
    }
    else
    {
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }
  }

       /**********************************Get Small Group Join Requests**************************************/
   
    joinSmallRequests() {
      let params=
      {
        'id':this.group_id
      }
    this.authService.getSmallGroupRequests(params).then((result) => {
    console.log(result);
     
    this.res=result;
    if(this.res.status==true){
      this.data=this.res.data;
      
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

     /**********************************Get Group Join Requests**************************************/
   
    joinRequests() {
      let params=
      {
        'id':this.group_id
      }
    this.authService.getGroupRequests(params).then((result) => {
    console.log(result);
     
    this.res=result;
    if(this.res.status==true){
      this.data=this.res.data;
      
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

}
