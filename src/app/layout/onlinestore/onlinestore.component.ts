import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthServiceService } from '../../auth-service.service';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import 'datatables.net';
declare var jQuery:any;

@Component({
  selector: 'app-onlinestore',
  templateUrl: './onlinestore.component.html',
  styleUrls: ['./onlinestore.component.scss']
})
export class OnlinestoreComponent implements OnInit {
rForm: FormGroup;
eForm: FormGroup;
res:any;
data:any;
id:any;
links:any;
link_status:any;
mytable:any;
idd:any;
_id:any;
data1:any;
publish: boolean = true;
saved: boolean = false;
img: boolean = true;
img_valid: boolean = true;
add_new: boolean = false;
link_status_val: boolean = false;
urlPattern = "^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/|www.){1}([0-9A-Za-z].+)";

  constructor(
    private router: Router,
    public authService: AuthServiceService,
     private toastr: ToastrService,
    public fb: FormBuilder) { 

    this.rForm = this.fb.group({
        'online_store_url' : [null, Validators.required],
        'name':[null, Validators.required]
        });
    this.eForm = this.fb.group({
        'online_store_url' : [null, Validators.required],
        'name':[null, Validators.required]
        });
  }
  ngAfterContentChecked()
  {
      $("#web").on("keypress", function (e) 
      {
          if (e.which === 32 && !this.value.length)
          e.preventDefault();
       });

      $("#name").on("keypress", function (e) 
      {
          if (e.which === 32 && !this.value.length)
          e.preventDefault();
      });
  }

    ngOnInit() 
    {
      this.GetAllLinks();
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
      this.GetStores();
      this.GetDraft();
    }

  SavedList(){
    this.mytable.destroy();
    setTimeout(() => {
    this.mytable=$('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
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
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    })
    },500);
    this.saved=false;
    this.publish=true;
    }

     showAdd(){
      this.add_new=true;
    }
    cancel(){
       this.add_new=false;
    }
     clearr(){
          this.rForm.reset({
            'online_store_url': '',
            'name':''
           });
       }
       clearr1(){
          this.eForm.reset({
            'online_store_url': ''
           });
       }
        publishModal(id){
      jQuery("#publish").modal("show");
      this.idd=id;
    }
       
    editModal(val,name,id){
      console.log("edit modalll",val)
       this.eForm.get('online_store_url').setValue(val);
       this.eForm.get('name').setValue(name);
       this.id=id;
       jQuery("#edit").modal("show");
    }

  RemoveClick(id){
      // alert(id)
      jQuery("#request").modal("show");
      this._id=id;

    }

     openlinkModal() {
     jQuery('#addfirst').modal({backdrop: 'static', keyboard: false});
      jQuery("#addfirst").modal("show");
      // this.getlibrary();
    }

    getuserVal(name,isChecked: boolean)
    {
      this.link_status_val=true;
      this.rForm.get('online_store_url').setValue(name);
    }
    
    urlInputChange()
    {
      this.link_status_val=false;
    }

/**********************************Get All Links***************************************/


    GetAllLinks() 
    {
    this.authService.getLinks().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) 
      {
         this.links = this.res.data;
        // console.log('arrrayy', this.arryData);
      }
      else 
      {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }

 /********************************** Get Draft betrotheds***************************************/

    GetDraft() {
      // alert("hiiii")
    this.authService.getOnline().then((result) => {
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

    /**********************************Remove Groups***************************************/
   
    RemoveComm(id) {
      // alert("hiiii")
      let params={
        'type':'OS',
        'type_id':this._id
      }
    this.authService.removeNewsStore(params).then((result) => {
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
      this.GetStores();
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

    // EditStore(val,value){
    // console.log(val,value)
    // }

  // publishModal(id){
  //     jQuery("#publish").modal("show");
  //     this.idd=id;
  //   }

 /**********************************Publish Drafts***************************************/

  PublishDrafts(){
    let params={
      'type':'OS',
      'id':this.idd
    };
     
     this.authService.publishDrafts(params).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
            jQuery("#publish").modal("hide");
            this.GetDraft();
            this.GetStores();
            this.presentToast('Online Store Published Successfully') 
          //  alert("Online Store Published Successfully")
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
          }
        else
        {
          alert("Unable to Publish")
          }
           
          }, (err) => {
            console.log(err);
          });
     

  }


  /**********************************Edit Online Store Link***************************************/
   
    EditStore(val,value) {
      console.log(value)
      // alert("hiiii")
     if(val){
      let params=
      {
        'url': value.online_store_url,
        'name':value.name,
        'id':this.id
      };
    this.authService.editOnlineStore(params).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
      this.presentToast('Online Store Updated Successfully')
     // alert("Online Store Updated Successfully")
      jQuery("#edit").modal("hide");
      this.GetStores();
      this.clearr1();
      // this.add_new=false;
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
    }
    else{
      console.log("invalid")
    }
  }


/**********************************Add Online Store Link***************************************/
   
    AddStore(val,value,sta) {
      console.log(sta)
      // alert("hiiii")data.append('link_url',  'N');
     if(val){
      if(this.link_status_val){
       this.link_status='Y';
        }
        else{
          this.link_status='N';
        }
      let params={
        'url': value.online_store_url,
        'name':value.name,
        'status':sta,
        'link_url':this.link_status
      }
    this.authService.addOnlineStore(params).then((result) => {
    console.log(result);
    this.res=result;
    this.link_status_val=false;
    if(this.res.status==true){
      this.presentToast('Online Store Added Successfully')
      //alert("Online Store Added Successfully")
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
      this.GetStores();
      this.GetDraft();
      this.clearr();
      this.add_new=false;
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
    }
    else{
      alert("Fill Required Fields")
    }
  }


 /**********************************Get Online Stores***************************************/

    GetStores() {
      // alert("hiiii")
    this.authService.getOnlineStores().then((result) => {
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
  /************************************Toast***************************/


   presentToast(msg) {

    this.toastr.success(this.res.message, '', {
  timeOut: 3000,
  tapToDismiss:true
});
  }

}
