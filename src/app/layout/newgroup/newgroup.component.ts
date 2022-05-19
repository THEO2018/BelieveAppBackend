import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-newgroup',
  templateUrl: './newgroup.component.html',
  styleUrls: ['./newgroup.component.scss']
})
export class NewgroupComponent implements OnInit {
  res: any;
  data: any;
  term:any;
  browse: boolean = false;
  flightids = [];
   public arryData:any;
  arry: any;
  loaded: boolean = false;
  arry1: any;
  imageSrc: string = '';
  imageLoaded = false;
  imageUrl: any;
  nameary = [];
  image: boolean = false;
  pic: any;
  searchForm: FormGroup;
  myForm: FormGroup;
  img: boolean = true;
  img_valid: boolean = true;
  user_valid: boolean = true;

  @ViewChild('fileupload') fileInput: ElementRef;

  constructor(
    public authService: AuthServiceService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    public router: Router,
    private vcr: ViewContainerRef) {
    // this.toastr.setRootViewContainerRef(vcr);
    this.img_valid = true;
    this.user_valid = true;
     this.searchForm = this.fb.group
     ({
      search:null
    });
  }



 teamName(val){
console.log(val)
console.log(this.term)
}
  /**********************************Firstly called ***************************************/

  ngOnInit() {

    this.users();
     this.getlibrary();
    this.myForm = this.fb.group({
      useremail: this.fb.array([]),
      useremail1: this.fb.array([]),
      group_name: ['', Validators.required],
      group_image: null,
      description: ['', Validators.required],
      privacy: ['', Validators.required]
    });

    $('#name').on('keypress', function (e) {
      if (e.which === 32 && !this.value.length) {
        e.preventDefault();
      }
    });
    $('#des').on('keypress', function (e) {
      if (e.which === 32 && !this.value.length) {
        e.preventDefault();
      }
    });

  }


  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  showSuccess() {
    // this.toastr.success('Group Created Successfully');
  }


  /**********************************get image***************************************/

  onFileChange(event) {
    console.log(event);
    if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
      if (event.target.files.length > 0) {
        this.image = false;
        this.img = true;
        this.img_valid = true;
        const file = event.target.files[0];
        console.log(file);
        this.imageUrl = file;
        // this.myForm.get('group_image').setValue(file);
        const reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
      }
    } else {
      this.img_valid = true;
      this.img = false;
    }
    // this.saveFiles(files);
  }

  handleImageLoad() {
    this.imageLoaded = true;
  }

  _handleReaderLoaded(e) {
    this.browse = true;
    console.log('image', e);
    const reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
  }


  groupModal() {
    jQuery('#addadmin').modal({ backdrop: 'static', keyboard: false });
    jQuery('#addadmin').modal('show');

  }

  openModal() {
    jQuery('#gallerymodal').modal({ backdrop: 'static', keyboard: false });
    jQuery('#gallerymodal').modal('show');
    this.getlibrary();
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
      if (this.res.status === true) {
        this.arryData = this.res.data;
        console.log('arrrayy', this.arryData);
      } else {
        console.log('erorr');
      }

    }, (err) => {
      console.log(err);
    });
  }


  /**********************************Delete User***************************************/

  deleteUser(val,name: string, email: string){
  const emailFormArray = <FormArray>this.myForm.controls.useremail;
  const emailFormArray1 = <FormArray>this.myForm.controls.useremail1;
  console.log(val)
    const index = emailFormArray.controls.findIndex(x => x.value === email);
    const index1 = emailFormArray1.controls.findIndex(x => x.value === name);
      // alert(index)
      emailFormArray.removeAt(index);
      emailFormArray1.removeAt(index1);
      this.arry = emailFormArray.value;
      this.arry1 = emailFormArray1.value;
      console.log(this.arry,this.arry1)
}

  /**********************************get users modal***************************************/


  getuserVal(email: string, name: string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.myForm.controls.useremail;
    const emailFormArray1 = <FormArray>this.myForm.controls.useremail1;
    // console.log(email,isChecked);
    if (isChecked) {
      this.user_valid = true;
      console.log(name);
      emailFormArray.push(new FormControl(email));
     emailFormArray1.push(new FormControl({'name':name,'email':email}));
      this.nameary.push(name);
      this.arry = emailFormArray.value;
      this.arry1 = emailFormArray1.value;
      console.log('api arrayyyy', this.arry);
      console.log('for view arrayyyy', this.arry1);
    } else {
      const index = emailFormArray.controls.findIndex(x => x.value === email);
       const index1 = emailFormArray1.controls.findIndex(x =>x.value.name === name
       );
      emailFormArray.removeAt(index);
      emailFormArray1.removeAt(index1);
      this.arry = emailFormArray.value;
      this.arry1 = emailFormArray1.value;
      console.log('after remove api arrayyyy', this.arry);
      console.log('after remove for view arrayyyy', this.arry1);
    }

  }


  getval(value) {
    console.log(value);
  }


  CAncel() {
    this.router.navigateByUrl('/groups');

  }

  /**********************************Add GROUP***************************************/


  AddGroup(val) {
    console.log(val);
    console.log('heyyy formmmm', this.myForm.value.useremail);
    if (val) {
      if (this.myForm.value.useremail.length === 0) {
        console.log('emailll');
        this.user_valid = false;
      } else if (!this.img) {
        this.img_valid = true;
      } else if (!this.imageUrl) {
        this.img_valid = false;
      } else {
        // this.img_valid=true;
        // this.user_valid=true;
        const data = new FormData();
        // console.log("arrraayyyyy",this.arry)
        // console.log("heyyy formmmm",this.myForm.value.group_image);
        // console.log("heyyy valueeee",this.myForm.get('group_image').value);
        data.append('group_name', this.myForm.get('group_name').value);
        data.append('group_image', this.imageUrl);
        data.append('users', this.arry);
        data.append('privacy', this.myForm.get('privacy').value);
        data.append('description', this.myForm.get('description').value);
        // data.append('admin_users', '');
        console.log(data);
        this.authService.addGroup(data).then((result) => {
          console.log(result);
          this.res = result;
          if (this.res.status === true) {
            this.presentToast('Group Created Successfully')
          // this.toastr.success('Group Created Successfully');
            // this.showSuccess();
            this.router.navigateByUrl('/groups');
          } else {
            // this.toastr.error(this.res.message);
             this.presentToast(this.res.message)
          }

        }, (err) => {
          console.log(err);
        });
      }
    } else {
      this.validateAllFormFields(this.myForm);
      console.log('invaliddd');

    }

  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }



  /**********************************Get Users***************************************/
  users() {
    this.authService.getUsers().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status === true) {
        this.data = this.res.data;
        console.log(this.data);
      } else {
        console.log('erorr');
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
