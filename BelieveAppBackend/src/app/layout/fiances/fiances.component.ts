import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import 'datatables.net';

import { Router } from '@angular/router'; 

declare var jQuery:any;
@Component({
  selector: 'app-fiances',
  templateUrl: './fiances.component.html',
  styleUrls: ['./fiances.component.scss']
})
export class FiancesComponent implements OnInit {
res:any;
data:any;
 id:any;
 idd:any;
 data1:any;
 
res_user:any;
data_user:any;
rForm: FormGroup;
f_user:any;
mytable:any;
res1:any;
s_user:any;
publish: boolean = true;
saved: boolean = false;
image_valid: boolean = false;
public filterQuery = "";
public rowsOnPage = 10;
public sortOrder = "asc";

  constructor(
    private router: Router,
    public authService: AuthServiceService,
    private fb: FormBuilder,
    private toastr: ToastrService) { 
   this.rForm = fb.group({
      'first_user_id' : [null, Validators.required],
      'second_user_id' : [null, Validators.required],
      'visibility_status' : [null, Validators.required]
      });}

  ngOnInit() 
  {
  setTimeout(() => {
   this.mytable=$('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
    this.Getfiances();
    this.users();
    this.GetDraft();

  }
  userModal() {
  jQuery('#addfirst').modal({backdrop: 'static', keyboard: false});
  jQuery("#addfirst").modal("show");
  
  } 
   adminModal() {
  jQuery('#addsecond').modal({backdrop: 'static', keyboard: false});
  jQuery("#addsecond").modal("show");
  
  } 
  publishModal(id){
      jQuery("#publish").modal("show");
      this.idd=id;
    }


    clearr(){
          this.rForm.reset({
            'first_user_id': '',
            'second_user_id': '',
            'visibility_status': ''
           });
          this.f_user='';
          this.s_user='';
    }

     RemoveClick(id){
      // alert(id)
      jQuery("#request").modal("show");
      this.id=id;

    }

    SavedList(){
      this.mytable.destroy();
       setTimeout(() => {
   this.mytable=$('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
    this.saved=true;
    this.publish=false;
    }
    PublishList(){
      this.mytable.destroy();
       setTimeout(() => {
   this.mytable=$('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
    this.saved=false;
    this.publish=true;
    }

  /**********************************Remove Groups***************************************/
   
    RemoveComm() {
      // alert("hiiii")
      let params={
        'type':'BR',
        'type_id':this.id
      }
    this.authService.removeCommunity(params).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
      jQuery("#request").modal("hide");
      this.mytable.destroy();
             setTimeout(() => {
             this.mytable=$('table.display').DataTable({
              "bPaginate": true,
              "bLengthChange": true,
              // "pageLength": 7,
              "bFilter": true,
              "bInfo": false,
              "bAutoWidth": true,
              //"ordering": false
              })
             
              },500);
      alert("Betrothed Deleted Successfully");
      
      this.Getfiances();
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


 /**********************************Publish Drafts***************************************/

  PublishDrafts(){
    let params={
      'type':'BE',
      'id':this.idd
    };
     
     this.authService.publishDrafts(params).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
             jQuery("#publish").modal("hide");
            this.mytable.destroy();
             setTimeout(() => {
            this.mytable= $('table.display').DataTable({
              "bPaginate": true,
              "bLengthChange": true,
              // "pageLength": 7,
              "bFilter": true,
              "bInfo": false,
              "bAutoWidth": true,
              //"ordering": false
              })
             
              },500);
            alert("Betrothed Published Successfully");
            this.GetDraft();
            this.Getfiances();
          }
        else
        {
          console.log("fasleeee")
          }
           
          }, (err) => {
            console.log(err);
          });
     

  }

  /**********************************Add Betrothed***************************************/

  AddBetrothed(val,value,status){
    console.log(val)
     console.log("valueeeee",value)
     console.log(status);
     if(val){
      if(value.first_user_id==value.second_user_id){
        alert("Both Users can not be same")
      }
      else{
     this.authService.addBetrothed(value,status).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
            this.mytable.destroy();
             setTimeout(() => {
             this.mytable=$('table.display').DataTable({
              "bPaginate": true,
              "bLengthChange": true,
              // "pageLength": 7,
              "bFilter": true,
              "bInfo": false,
              "bAutoWidth": true,
              //"ordering": false
              })
             
              },500);
             this.presentToast('Betrothed Added Successfully') 
           // alert("Betrothed Added Successfully");
          this.Getfiances();
            console.log("trueee")
            this.clearr();
            // alert(this.res.message);
            this.GetDraft();
          }
        else
        {
          console.log("fasleeee")
          }
           
          }, (err) => {
            console.log(err);
          });
      }
     }
     else{
      alert("Fill Required Fields!!!!")

     }

  }

  /**********************************get users modal***************************************/


  getuserVal(id,name,isChecked: boolean){
    console.log(id)
     console.log(name)
     this.f_user=name;
    this.rForm.get('first_user_id').setValue(id);
  
      
    }

     getuserVal1(id,name,isChecked: boolean){
    console.log(id)
     console.log(name)
     this.s_user=name;
     this.rForm.get('second_user_id').setValue(id);
      
    }

      /********************************** Get Draft betrotheds***************************************/

    GetDraft() {
      // alert("hiiii")
    this.authService.getDraftbetrotheds().then((result) => {
    console.log("Saveddddd",result);
    this.res=result;
    if(this.res.status==true){
         this.data1=this.res.data;
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

  /**********************************GET FIANCES***************************************/

    Getfiances() {
      // alert("hiiii")
    this.authService.getFiances().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
         this.data=this.res.data;
         this.res1=this.res.requestsCount;
         console.log(this.data);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

  /**********************************Get Users***************************************/
    users() {
    this.authService.getUsers().then((result) => {
    console.log(result);
    this.res_user=result;
    if(this.res_user.status==true){
         this.data_user=this.res_user.data;
         console.log(this.data_user);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

/************************************Toast***************************/


   presentToast(msg) {

    this.toastr.success(this.res.message, '', {
  timeOut: 3000,
  tapToDismiss:true
});
  }


}
