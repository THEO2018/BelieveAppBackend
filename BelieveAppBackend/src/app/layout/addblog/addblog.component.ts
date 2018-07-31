import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { AuthServiceService } from '../../auth-service.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import * as $ from 'jquery';
//  window["$"] = $; 
//  window["jQuery"] = $;
 declare var jQuery:any;

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent implements OnInit {
  editor: any;
  res:any;
  data:any;
  _id:any;
  htmlContent:any;
  text: Event;
  addBlogPost:FormGroup;
  category: FormGroup;
  img: boolean = true;
  imag_valid: boolean = true;

  browse: boolean = false;
 public arryData:any
loaded: boolean = false;
imageSrc: string = '';
imageLoaded: boolean = false;
imageUrl: any
image: boolean = false;
img_valid: boolean = true;

  constructor(
    private router: Router,
    private authService:AuthServiceService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder) { 

    this.addBlogPost = this.formBuilder.group({
       blog_title:[null, Validators.required],
       category  : [null, Validators.required],
       blog: [null, Validators.required],
       blog_image: null
   });

     this.category = this.formBuilder.group({
            name: [null, Validators.required]
        }); 

  }

  ngOnInit() {
    $("#name").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
      e.preventDefault();
      });
    this.categories();
    this.getlibrary();
}

 clearForm() {

    this.category.reset({
          'name': ''
         });
  }

     RemoveClick(id){
      // alert(id)
      jQuery("#reject").modal("show");
      this._id=id;

    }

   /**********************************Remove Groups***************************************/
   
    RemoveComm() {
      // alert("hiiii")
     let parms={
      'id':this._id,
      'type':'BC'
     }
    this.authService.removeAbout(parms).then((result) => {
    console.log(result);
     
    this.res=result;
    if(this.res.status==true){
       jQuery("#reject").modal("hide");
      this.categories();
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

      /**********************************get image***************************************/
  
 onFileChange(event){
    console.log(event)
 if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
  if(event.target.files.length > 0)
    {
    this.image = false;
    this.img = true;
     this.img_valid=true;
      let file = event.target.files[0];
      console.log(file)
      this.imageUrl = file;
      // this.myForm.get('group_image').setValue(file);
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
  }
    else {
    this.imageUrl = '';
    this.img_valid = true;
    this.img = false;
     }
   //this.saveFiles(files);
}

handleImageLoad() {
  this.imageLoaded = true;
}

_handleReaderLoaded(e) {
  this.browse = true
  console.log('image', e);
  var reader = e.target;
  this.imageSrc = reader.result;
  this.loaded = true;
}

openModal() {


jQuery('#gallerymodal').modal({backdrop: 'static', keyboard: false});
  jQuery("#gallerymodal").modal("show");
  this.getlibrary();
}

checkings(){
  alert('hi');
}

  cancel(){
      this.router.navigateByUrl('/blog');
    }
checking(index, url) {
  this.browse = false;
  this.image = true;
  this.img = true;
  this.img_valid = true;
  $('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
  console.log('url', url);
  this.imageUrl = url;
}

// get media library/////
getlibrary() {
  console.log('manager lsit');
  this.authService.getLibrary().then((result) => {
    console.log(result);
    this.res = result;
    console.log('lasun', this.res);
    if (this.res.status == true) {
      this.arryData = this.res.data;
      console.log('arrrayy', this.arryData);
    }
    else {
      console.log("erorr")
    }

  }, (err) => {
    console.log(err);
  });
}


   /**********************************Add Blog***************************************/

   AddBlog(val,sta){
    console.log("imageeeee",val)
    if(val){
       
        if(!this.img){
        this.imag_valid=true;
       }
       else if(!this.imageUrl){
        this.imag_valid=false;
       }
       else
       {
        this.imag_valid=true;
       let data = new FormData();
        data.append('status', sta);
        data.append('blog_title', this.addBlogPost.get('blog_title').value);
        data.append('category', this.addBlogPost.get('category').value);
        data.append('blog', this.addBlogPost.get('blog').value);
        data.append('blog_image', this.imageUrl);
        console.log(data);
        this.authService.addBlog(data).then((result) => {
         console.log(result);
           this.res=result;
          if(this.res.status==true)
          {
            console.log("trueee")
            this.presentToast('Blog Added Successfully') 
            this.router.navigateByUrl('/blog');
           }
         else
          {
          console.log("fasle")
          }
           }, (err) => {
             console.log(err);
           });
       }
       }
       else{
        alert("Fill Required Fields!!")
        console.log("invaliddd")

       }

   }

  /**********************************Get CATEGORIES***************************************/
   
    categories() {
      // alert("hiiii")
    this.authService.getBlogCategories().then((result) => {
    console.log("categoriessss",result);
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


  /**********************************Add Category***************************************/

    AddCategory(val,value){
      if(val){
        let params={
            'name':value.name
        }
        console.log(params)
         this.authService.addBlogCategory(params).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
            this.categories();
               jQuery("#request").modal("hide");
               this.clearForm();
           }
        else
         {
            console.log("fasle")
          // this.toastr.error(this.res.message);
          }
           
          }, (err) => {
            console.log(err);
          });
       }
       
       else{
        console.log("invaliddd")

       }

    }
    
/************************************Toast***************************/


   presentToast(msg) {

    this.toastr.success(this.res.message, '', {
  timeOut: 3000,
  tapToDismiss:true
});
  }

}
