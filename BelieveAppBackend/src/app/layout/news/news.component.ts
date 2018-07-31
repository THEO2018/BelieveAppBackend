import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
 res:any;
 data:any;
 id:any;
 myForm: FormGroup;

  constructor(
  	public authService: AuthServiceService,
    private fb: FormBuilder,
    public router: Router) { 
    this.myForm = this.fb.group({
        news_url:['', Validators.required]
       
      });
  }

  ngOnInit() {
  	this.news();
  }
  CAncel(){
  this.router.navigateByUrl('/contactsupport');
  }

   /**********************************Edit Contact***************************************/
   
    Editnews(val,value) {
    	console.log(value)

      // alert("hiiii")
    this.authService.editNews(value).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
    	alert(this.res.message)
    	this.news();
       

    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

    /**********************************Get Contact***************************************/
   
    news() {
      // alert("hiiii")
    this.authService.getNews().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
    this.data=this.res.data;

    this.myForm.get('news_url').setValue(this.data.news_url);
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
