import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-editgroup',
  templateUrl: './editgroup.component.html',
  styleUrls: ['./editgroup.component.scss']
})
export class EditgroupComponent implements OnInit {
  formdata: boolean;
  intial: boolean;
  myForm: FormGroup;
  userArray: any;
  group_id: any;
    term:any;
  res: any;
  data: any;
  data1: any;
  arry: any;
  arry1: any;
  finalArry = [];
  nameary = [];
  searchForm: FormGroup;
  img: boolean = true;
  user_valid: boolean = true;
  image_valid: boolean = false;
  loaded: boolean = false;
  api_image: any;
  api_users: any;
  imageLoaded: boolean = false;
  imageSrc: string = '';

  browse: boolean = false;
   public arryData:any
  imageUrl: any
  image: boolean = false;
  img_valid: boolean = true;



  constructor(private route: ActivatedRoute,
    public authService: AuthServiceService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    public router: Router, ) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.group_id = params;
    });

 this.searchForm = this.fb.group({
      search:null
    });
    this.myForm = this.fb.group({
      useremail: this.fb.array([]),
      useremail1: this.fb.array([]),
      group_name: ['', Validators.required],
      group_image: null,
      description: ['', Validators.required],
      privacy: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.detail();
    // this.users();
     this.getlibrary();
    $("#name").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
        e.preventDefault();
    });
    $("#des").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
        e.preventDefault();
    });

  }

  cancel() {
    this.router.navigateByUrl('/groups');
  }
  groupModal() {
jQuery('#addadmin').modal({backdrop: 'static', keyboard: false});
  jQuery("#addadmin").modal("show");
  
}
teamName(val){
console.log(val)
console.log(this.term)
}


deleteUser(val,name: string){
  console.log(name)
  this.finalArry=[];
  const emailFormArray = <FormArray>this.myForm.controls.useremail;
  const emailFormArray1 = <FormArray>this.myForm.controls.useremail1;
   for (var i in this.data) {
    
 if (this.data[i]._id == name) {
          this.data[i].selected = false;

          // this.finalArry.slice(i,1);
        }
  if (this.data[i].selected == true) {
        // this.user_valid=true;
        this.finalArry.push(this.data[i]._id);
      }
    

   }
   console.log(this.finalArry)
}

  /**********************************get image***************************************/

  onFileChange(event) {
    console.log(event)
    if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
      if (event.target.files.length > 0) {
        this.image = false;
        this.img = true;
        this.img_valid = true;
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



  okvalue() {
    console.log('finalconsole', this.data);
    for (var i in this.data) {
      if (this.data[i].selected == true) {
        this.user_valid=true;
        this.finalArry.push(this.data[i]._id);
      }
    }
    console.log('finaaaalllll', this.finalArry);

    this.userArray = this.finalArry;
  }

  cancelvalue() {
    this.arry1 = '';
    this.arry = '';
  }

  getuserVal(email: string, name: string, isChecked: boolean) {
    this.intial = false;
    this.formdata = true;
    const emailFormArray = <FormArray>this.myForm.controls.useremail;
    const emailFormArray1 = <FormArray>this.myForm.controls.useremail1;
    // console.log(email,isChecked);
    if (isChecked) {
      for (var i in this.data) {
        if (this.data[i]._id == email) {
          this.data[i].selected = true;
        }
      }
      console.log('checked', this.data);
    } else {
      for (var i in this.data) {
        if (this.data[i]._id == email) {
          this.data[i].selected = false;
           // if(this.data[i].selected=false)
        }
      }
      console.log("unchecked", this.data);


    }

  }

  /**********************************EDIT GROUP***************************************/


  EditGroup(val) {
    console.log("userssssss",this.userArray);
    console.log('imageUrl',this.api_users);
    if(this.userArray!=undefined)
    {
      console.log("ubdefineddd")
      if(this.userArray.length==0)
      {
         console.log("length")
         this.user_valid=false;
         console.log("emailll")
      }
    else
    {
       console.log("else")
    let data = new FormData();
    data.append('group_name', this.myForm.get('group_name').value);
    data.append('group_image', this.imageUrl);
    data.append('users', this.userArray);
    data.append('group_id', this.group_id.id);
    data.append('privacy', this.myForm.get('privacy').value);
    data.append('description', this.myForm.get('description').value);

    console.log(data);
    this.authService.editGroup(data).then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {

        this.router.navigateByUrl('/groups');
      }
      else {
        alert(this.res.message);
      }

    }, (err) => {
      console.log(err);
    });
}
    }
    else 
    {
       
       console.log("else")
    let data = new FormData();
    data.append('group_name', this.myForm.get('group_name').value);
    data.append('group_image', this.imageUrl);
    data.append('users', this.userArray);
    data.append('group_id', this.group_id.id);
    data.append('privacy', this.myForm.get('privacy').value);
    data.append('description', this.myForm.get('description').value);

    console.log(data);
    this.authService.editGroup(data).then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {
        this.presentToast('Group Updated Succefully')
        this.router.navigateByUrl('/groups');
      }
      else {
        alert(this.res.message);
      }

    }, (err) => {
      console.log(err);
    });

    }
 

  }

  /**********************************Add DETAIL***************************************/

  detail() {
    let params = {
      'id': this.group_id.id
    };
    this.authService.getGroupDetail(params).then((result) => {
      //console.log(result);
      this.res = result;
      this.users();
      if (this.res.status == true) {
        this.data1 = this.res.data;
        console.log('editGroupDetail', this.data1);
        this.myForm.get('group_name').setValue(this.data1.group_name);
        this.myForm.get('description').setValue(this.data1.description);
        this.myForm.get('privacy').setValue(this.data1.privacy);
        // this.myForm.get('useremail').setValue(this.data1.users);
        // console.log(this.data1);
        this.api_image = this.data1.group_image;
        this.api_users = this.data1.users;
        console.log("this.api_users",this.api_users);
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }


  /**********************************Get Users***************************************/
  users() {
    this.intial = true;
    this.authService.getUsers().then((result) => {
      // console.log(result);
      this.res = result;
      if (this.res.status == true) {
        this.data = this.res.data;
        console.log('api users', this.api_users);
        console.log('all users', this.data);
        for (var i in this.api_users) {
          for (var j in this.data) {
            if (this.data[j]._id === this.api_users[i]._id) {
              this.data[j].selected = true;
            }
          }
        }
        // console.log('selecteduserrrr', this.data[j]._id, 'usersss', this.api_users[i]._id);
        console.log('selecteduserrrr', this.data);
      }
      else {
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
