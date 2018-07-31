import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { AuthServiceService } from '../../auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import * as moment from 'moment';
import * as $ from 'jquery';

declare var jQuery:any;


@Component({
    selector: 'app-add-poll',
    templateUrl: './add-poll.html',
    styleUrls: ['./add-poll.component.scss']
})
export class AddPollComponent implements OnInit {
    finalVal: any;
    e_time: any;
    data: {};
    img_valid: boolean = true;
    img: boolean = true;
    e_time_valid: boolean = true;
    choice: boolean = false;
    wrapper: any;
    multiple:any;
    mul_choice:any;
    after_vote:any;
    hide_result:any;
    res:any;
    public min = new Date();
    browse: boolean = false;

     public arryData:any
    // arryData= [];
    loaded: boolean = false;
    imageSrc: string = '';
    imageLoaded: boolean = false;
    imageUrl: any
    image: boolean = false;


    // user = new User();
    myForm: FormGroup;
    constructor(private fb: FormBuilder,
        public authService: AuthServiceService,
             private toastr: ToastrService,
        public router: Router) {
        this.img_valid = true;
        this.img = true;
        this.e_time_valid = true;
        // this.choice = true;
        // this.multiple = 'false';

    }

    ngOnInit() {
      this.getlibrary();
        var env = this;
        var max_fields_limit = 4; //set limit for maximum input fields
        var x = 1; //initialize counter for text box
        env.wrapper = $('.input_fields_container');
        $('.add_more_button').click(function (e) {
            console.log('addmore', e); //click event on add more fields button having class add_more_button
            e.preventDefault();
            if (x < max_fields_limit) { //check conditions
                x++; //counter increment
                env.wrapper.append('<div style="position: relative;padding-right: 40px;margin: 10px 0;"><input type="text" class="form-control" name="product_name[]"/><a href="#" class="remove_field" style="margin-left:10px; position: absolute;right: 8px;top: 0px;font-size: 26px;color: red;"><i class="fa fa-close" aria-hidden="true"></i></a></div>');

                //add input field
            }
            //console.log('data',data);
        });
        env.wrapper.on("click", ".remove_field", function (e) { //user click on remove text links
            e.preventDefault(); $(this).parent('div').remove(); x--;
        });

        this.myForm = this.fb.group({
            poll_title: ['', Validators.required],
            question: ['', Validators.required],
            end_time: ['', Validators.required],
            poll_image: null,
            options: ['', Validators.required],
            question1:['', Validators.required],
            share_title:null,
            share_question:null,
            share_answer:null,
            share_results:null,
            share_platform_facebook:null,
            share_platform_whatsapp:null,
            share_platform_twitter:null,
            share_platform_text:null,

        });
    }

    cancel()
    {
      this.router.navigateByUrl('/polls');
    }
    
   /**********************************Poll Setting***************************************/


     Choice(val){
      console.log(val)
      this.mul_choice=val;
     }
      Voting(val){
      console.log(val)
      this.after_vote=val;
     }
      HideResult(val){
      console.log(val)
      this.hide_result=val;
     }

    /**********************************Poll Sharing***************************************/
      
      title(val){
      console.log(val)
      // this.mul_choice=val;
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

    addPoll(val, value,sta) {
         console.log("formmm valueee",this.myForm.get('share_title').value)
        var list = this.wrapper.find('input').map(function () {
            return $(this).val();
        }).get();
        list.splice(0,0,this.myForm.get('question1').value);
        var AnswerList = list;
        this.finalVal = AnswerList.join('^');

        if (val) {
            console.log('values');
            if (!this.imageUrl) {
                this.img_valid = false;
            } 
            else if (!this.myForm.value.end_time) {
                this.e_time_valid = false;
            }
           
            else {
                if(this.mul_choice){
                    this.mul_choice=this.mul_choice;
                   }
                   else{
                    this.mul_choice=false;
                   }

                    if(this.after_vote){
                    this.after_vote=this.after_vote;
                   }
                   else{
                    this.after_vote=false;
                   }

                  if(this.hide_result){
                    this.hide_result=this.hide_result;
                   }
                   else{
                    this.hide_result=false;
                   }

            if (this.myForm.value.share_title==null) {
                console.log('share_title');
                this.myForm.get('share_title').setValue(false);
            }
             if (this.myForm.value.share_question==null) {
                 console.log('share_question');
               this.myForm.get('share_question').setValue(false);
            }
             if (this.myForm.value.share_answer==null) {
                 this.myForm.get('share_answer').setValue(false);
            }
             if (this.myForm.value.share_results==null) {
                this.myForm.get('share_results').setValue(false);
            }
             if (this.myForm.value.share_platform_facebook==null) {
                 this.myForm.get('share_platform_facebook').setValue(false);
            }
               if (this.myForm.value.share_platform_whatsapp==null) {
                 this.myForm.get('share_platform_whatsapp').setValue(false);
            }
               if (this.myForm.value.share_platform_twitter==null) {
                this.myForm.get('share_platform_twitter').setValue(false);
            }
             if (this.myForm.value.share_platform_text==null) {
                this.myForm.get('share_platform_text').setValue(false);
            }

                this.e_time = moment(this.myForm.value.end_time).format('MMMM DD, YYYY hh:mm:ss');
             
                let data = new FormData();
                data.append('poll_title', this.myForm.get('poll_title').value);
                data.append('poll_image', this.imageUrl);
                data.append('question', this.myForm.get('question').value);
                data.append('options', this.finalVal);
                data.append('end_time', this.e_time);
                data.append('status', sta);
                data.append('setting_multiple_choice', this.mul_choice);
                data.append('setting_hide_results_after_voting', this.after_vote);
                data.append('setting_hide_results', this.hide_result);
                data.append('share_title', this.myForm.get('share_title').value);
                data.append('share_question', this.myForm.get('share_question').value);
                data.append('share_answer', this.myForm.get('share_answer').value);
                data.append('share_results', this.myForm.get('share_results').value);
                data.append('share_platform_facebook', this.myForm.get('share_platform_facebook').value);
               data.append('share_platform_whatsapp', this.myForm.get('share_platform_whatsapp').value);
               data.append('share_platform_twitter', this.myForm.get('share_platform_twitter').value);
               data.append('share_platform_text', this.myForm.get('share_platform_text').value);
                console.log('formData', data);
                this.authService.addNewPoll(data).then((result) => {

                    this.data = result;
                    console.log('addPollresponse', this.data);
                     this.presentToast('Poll Added Successfully')

                     this.router.navigateByUrl('/polls');
                }, (err) => {
                    console.log(err);
                });
            }
        }
        else {
            alert('Fill Required Fields');
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
