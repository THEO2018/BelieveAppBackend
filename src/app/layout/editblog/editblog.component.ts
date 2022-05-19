import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { AuthServiceService } from '../../auth-service.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.scss']
})
export class EditblogComponent implements OnInit {
editor: any;
  res:any;
  data:any;
  data1:any;
  id:any;
  api_image:any;
  text: Event;
  addBlogPost:FormGroup;
  category: FormGroup;
  img: boolean = true;
  imag_valid: boolean = true;
  constructor(
  	private router: Router,
    private authService:AuthServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    this.addBlogPost = this.formBuilder.group({
       blog_title:[null, Validators.required],
       category  : [null, Validators.required],
       blog: [null, Validators.required],
       blog_image: null
   });

   this.route.params.subscribe(params => {
          console.log(params);
          this.id=params;
        }); 
}

  ngOnInit() {
  	this.categories();
  	 this.GetAlbumDetail();
  }

/**********************************get image***************************************/
  
  onFileChange(event){
    console.log(event)
 if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
  if(event.target.files.length > 0)
    {
      this.img = true;
     this.imag_valid=true;
      let file = event.target.files[0];
      console.log(file)
      this.addBlogPost.get('blog_image').setValue(file);
    }
  }
  else{
     this.imag_valid = true;
    this.img = false;

  }
   //this.saveFiles(files);
}

  /**********************************Get CATEGORIES***************************************/
   
    categories() {
      // alert("hiiii")
    this.authService.getBlogCategories().then((result) => {
    console.log("categoriessss",result);
    this.res=result;
    if(this.res.status==true){
         this.data1=this.res.data;
         console.log(this.data1);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

/**********************************Get Blog Detail***************************************/

  GetAlbumDetail() {
      // alert("hiiii")
      let params={
         'id':this.id.id
      }
    this.authService.getBlogDetail(params).then((result) => {
    console.log("album detaillll",result);
    this.res=result;
    if(this.res.status==true){
         this.data=this.res.data;
        this.addBlogPost.get('blog_title').setValue(this.data.blog_title);
        this.addBlogPost.get('category').setValue(this.data.category._id);
        this.addBlogPost.get('blog').setValue(this.data.blog);
         this.api_image=this.data.blog_image;

         // console.log(this.api_image);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }




}
