import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; 
import * as $ from 'jquery';

@Component({
  selector: 'app-newlink',
  templateUrl: './newlink.component.html',
  styleUrls: ['./newlink.component.scss']
})
export class NewlinkComponent implements OnInit {
rForm: FormGroup;
res:any;
urlPattern = "^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/|www.){1}([0-9A-Za-z].+)";

  constructor(
  	private router: Router,
    public authService: AuthServiceService,
    private toastr: ToastrService,
    public fb: FormBuilder) 
  { 
   this.rForm = this.fb.group({
      'title' : [null, Validators.required],
      'url' : [null, Validators.required]
      });
  }

   ngOnInit() 
	  {
	  	$("#name").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
      e.preventDefault();
      });
      $("#web").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
      e.preventDefault();
      });

	  }

	cancel()
	  {
	  	this.router.navigateByUrl('/library');
	  }

    /**********************************ADD Birthday***************************************/
    
  AddLink(val,value){
    if(val){
         this.authService.addNewLink(value).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
           this.presentToast('Link Added Successfully')
           // alert("Link Added Successfully");
           this.router.navigateByUrl('/library');
          }
        else
        {
          // this.toastr.error(this.res.message);
          }
           
          }, (err) => {
            console.log(err);
          });
       
   }
   else
   {
   alert("Fill Required Fields")
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
