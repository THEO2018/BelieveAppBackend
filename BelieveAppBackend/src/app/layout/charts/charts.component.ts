import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
   myForm: FormGroup;
   img: boolean = true;
   img_valid: boolean = true;
   add_new: boolean = false;
   type: any;
   res:any;

    constructor(
    public authService: AuthServiceService,
     private toastr: ToastrService,
    private fb: FormBuilder,
    public router: Router)
     {
        this.myForm = this.fb.group({
         image_name: null
      });
    }

    ngOnInit() 
    {

    }
    cancel()
    {
      this.router.navigateByUrl('/library');
    }
    showAdd()
    {
      this.add_new=true;
    }
    cancell()
    {
       this.add_new=false;
    }

/**********************************get image***************************************/
  
    onFileChange(event) 
    {
      console.log(event)
      if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg' || event.target.files[0].type === 'audio/mp3'|| event.target.files[0].type === 'audio/mpeg' || event.target.files[0].type === 'video/mp4') 
      {
        if (event.target.files.length > 0) 
        {
          this.img = true;
          this.img_valid = true;
          let file = event.target.files[0];
          console.log(file)
          this.myForm.get('image_name').setValue(file);
          if(file.type=='video/mp4'){
             this.type='V';
          }
          else if(file.type=='image/png' || file.type=='image/jpeg'){
            this.type='I';
          }
          else if(file.type=='audio/mpeg' || file.type=='audio/mp3'){
            this.type='A';
          }
          else{
            console.log("No type")
          }
        }
      }
      else {
        this.img_valid = true;
        this.img = false;
      }
    }

  /**********************************ADD Albums***************************************/

  AddMedia(val)
  {
    console.log(this.myForm.get('image_name').value)
      if(!this.myForm.get('image_name').value)
      {
        this.img_valid=false;
       }
     else if(!this.img){
        this.img_valid=true;
       }
       else{
        let data = new FormData();
       
       data.append('image_name', this.myForm.get('image_name').value);
       data.append('media_type', this.type);
       
        this.authService.addLibrary(data).then((result) => {
        console.log(result);
        this.res=result;
        if(this.res.status==true){
            this.presentToast('Media Added Successfully')
         // alert("Media Added Successfully")
          this.router.navigateByUrl('/library');
        }
        else{
           console.log("erorrr");
        }
           
          }, (err) => {
            console.log(err);
          });
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
