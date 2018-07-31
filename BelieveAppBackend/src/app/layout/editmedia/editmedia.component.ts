import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editmedia',
  templateUrl: './editmedia.component.html',
  styleUrls: ['./editmedia.component.scss']
})
export class EditmediaComponent implements OnInit {
res:any;
data:any;
id:any;
categoryData: any;
myForm: FormGroup;

  constructor( 
  	private router: Router,
  	private fb: FormBuilder,
    public authService: AuthServiceService,
    private route: ActivatedRoute) {
  	this.myForm = this.fb.group({
         gallary_title: ['', Validators.required],
         select_category: ['', Validators.required]
      });

  	this.route.params.subscribe(params => {
          console.log(params);
          this.id=params;
        });
       }

  ngOnInit() {
  	this.GetMediaDetail();
    this.GetMediaCategory();
  }

  cancel(){
  this.router.navigateByUrl('/media');
  }

 /**********************************Get Media Category***************************************/

  GetMediaCategory() {
    console.log('get media category');
    this.authService.getMediaCategory().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {
        this.categoryData = this.res.data;
        console.log('mediaa categoryyyyyyyyyyy', this.categoryData);
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }


  /**********************************Get Media Detail***************************************/

  GetMediaDetail() {
      // alert("hiiii")
      let params={
         'id':this.id.id
      }
    this.authService.getMediaDetail(params).then((result) => {
    console.log("album detaillll",result);
    this.res=result;
    if(this.res.status==true){
         this.data=this.res.data;
        this.myForm.get('gallary_title').setValue(this.data.gallary_title);
         this.myForm.get('select_category').setValue(this.data.category);
      
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

  /**********************************EDIT GAllery***************************************/

    EditGallery(val){
      if(val){

  		let params={
       		'id':this.id.id,
       		'title':this.myForm.get('gallary_title').value,
          'media_category': this.myForm.value.select_category
       	}
       
        this.authService.editMedia(params).then((result) => {
        console.log(result);
        this.res=result;
        if(this.res.status==true){
        	this.router.navigateByUrl('/media');
        }
        else{
           console.log("erorrr");
        }
           
          }, (err) => {
            console.log(err);
          });
      }
      else{
        alert("Fill required Fields")
      }
       

  }

}
