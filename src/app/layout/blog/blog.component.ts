import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { AuthServiceService } from '../../auth-service.service';
import * as $ from 'jquery';
import 'datatables.net';

declare var jQuery:any;


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  editor: any;
  text: Event;
  res:any;
  data:any;
  mytable:any;

  _id:any;
   idd:any;
  addBlogPost:FormGroup;
  data1:any;
  publish: boolean = true;
  saved: boolean = false;
  muloptions = [];
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortOrder = "asc";
  
  constructor(
    private authService:AuthServiceService,
    private formBuilder: FormBuilder) 
  {
    this.addBlogPost = this.formBuilder.group({
       blog_title:[null, Validators.required],
       category  : [null, Validators.required],
       blog: [null, Validators.required]
   });
    }

  ngOnInit() {
   
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
    this.getblogs();
    this.DraftBlogs();
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
    this.saved=false;
    this.publish=true;
    }

   RemoveClick(id){
      // alert(id)
      jQuery("#request").modal("show");
      this._id=id;

    }
     publishModal(id){
      jQuery("#publish").modal("show");
      this.idd=id;
    }


  /**********************************Get Draft Blogs***************************************/

    DraftBlogs() {
    //   let params = {
    //   'id': this.album_id.id
    // }
      // alert("hiiii")
    this.authService.getDraftBlogs().then((result) => {
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

   /**********************************Publish Drafts***************************************/

  PublishDrafts(){
    let params={
      'type':'BL',
      'id':this.idd
    };
     
     this.authService.publishDrafts(params).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
            jQuery("#publish").modal("hide");
            this.DraftBlogs();
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
            this.getblogs();
          }
        else
        {
          console.log("fasleeee")
          }
           
          }, (err) => {
            console.log(err);
          });
  }


   /**********************************Remove Groups***************************************/
   
    RemoveComm() {
      // alert("hiiii")
     let parms={
      'id':this._id,
      'type':'BL'
     }
    this.authService.removeAbout(parms).then((result) => {
    console.log(result);
     
    this.res=result;
    if(this.res.status==true){
       jQuery("#request").modal("hide");
      this.getblogs();
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

     /**********************************Get Blogs***************************************/


 getblogs() {
      // alert("hiiii")
    this.authService.getBlogs().then((result) => {
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

//   getblog(){
//     console.log('data');
//    let body ={
//        blog_id:'5a6efc1ff0d8bf2ba3511a28'
//    }
//     this.authServiceService.get_blog(body).then(data=>{
//         console.log('response',data);
//     },err=>{
//         console.log('Error',err);
//     })
// }

}
