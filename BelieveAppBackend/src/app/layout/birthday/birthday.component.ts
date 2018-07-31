import { Component, OnInit,ElementRef, ViewChild,ViewContainerRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthServiceService } from '../../auth-service.service';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
// var $ = require('jquery');
import 'datatables.net';
declare var jQuery:any;

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {
rForm: FormGroup;
res:any;
data:any;
id:any;
mytable:any;
imageUrl: any
links:any;
link_status:any;
myInputVariable: any;
imageSrc: string = '';
arryData= [];
public filterQuery = "";
public rowsOnPage = 5;
public sortOrder = "asc";
browse: boolean = false;
loaded: boolean = false;
imageLoaded: boolean = false;
image: boolean = false;
img: boolean = true;
img_valid: boolean = true;
add_new: boolean = false;
link_status_val: boolean = false;
 @ViewChild('fileupload') fileInput: ElementRef;

urlPattern = "^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/|www.){1}([0-9A-Za-z].+)";


  constructor(
    private router: Router,
    public authService: AuthServiceService,
    private toastr: ToastrService,
    public fb: FormBuilder) 
  {
   this.img_valid=true;
 }
 ngAfterContentChecked()
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

  ngOnInit() {
    this.GetAllLinks();
    
     this.rForm = this.fb.group({
      'bday_list_title' : [null, Validators.required],
      'bday_list_url_online_site' : [null, Validators.required],
      'bday_list_cover_photo' : null
      });
    this.GetBirthday();
    setTimeout(() => {
     this.mytable =$('#example').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    "columnDefs": [{
      "targets": 'no-sort',
      "orderable": false,
     }],
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
    },500);
  }

  showAdd()
  {
    this.add_new=true;
  }

    clearr(){
      this.rForm.reset({
        'bday_list_title': '',
        'bday_list_url_online_site': '',
        'bday_list_cover_photo': ''
        });
      this.imageSrc ='';
      this.imageUrl ='';
      this.browse=false;
      this.image=false;
      // this.myInputVariable.nativeElement.value = "";
    }

   openlinkModal() 
   {
    jQuery('#addfirst').modal({backdrop: 'static', keyboard: false});
    jQuery("#addfirst").modal("show");
      // this.getlibrary();
    }

     getuserVal(name,isChecked: boolean)
     {
       // this.link_status='Y';
       this.link_status_val=true;
       this.rForm.get('bday_list_url_online_site').setValue(name);
      }

    urlInputChange()
    {
      this.link_status_val=false;
    }

   /**********************************Get All Links***************************************/


    GetAllLinks() 
    {
    this.authService.getLinks().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) 
      {
         this.links = this.res.data;
        // console.log('arrrayy', this.arryData);
      }
      else 
      {
        console.log("error")
      }

    }, (err) => 
    {
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

checking(index, url) {
  this.browse = false;
  this.image = true;
  this.img = true;
  this.img_valid = true;
  $('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
  console.log('url', url);
  this.imageUrl = url;
}

 /**********************************get library***************************************/

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


RemoveClick(id){
      // alert(id)
      jQuery("#request").modal("show");
      this.id=id;

    }

 /**********************************Remove Groups***************************************/
   
    RemoveComm(id) {
      // alert("hiiii")
      let params={
        'type':'BL',
        'type_id':this.id
      }
    this.authService.removeCommunity(params).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
      jQuery("#request").modal("hide");
      this.mytable.destroy();
       setTimeout(() => {
         this.mytable =$('#example').DataTable({
        "bPaginate": true,
        "bLengthChange": true,
        "columnDefs": [ {
                "targets": 'no-sort',
                "orderable": false,
          } ],
        "bFilter": true,
        "bInfo": false,
        "bAutoWidth": true,
        //"ordering": false
        })
        },500);
      this.GetBirthday();
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


  /**********************************ADD Birthday***************************************/
    
  AddBirthday(val,value)
  {
   console.log(val)
  console.log(value)
    if(val){
      if(!this.imageUrl){
          this.img_valid=false;
         }
         else if(!this.img){
        this.img_valid=true;
       }
         else
         { 
        if(this.link_status_val){
       this.link_status='Y';
        }
        else{
          this.link_status='N';
        }
       let data = new FormData();
       data.append('bday_list_title', this.rForm.get('bday_list_title').value);
       data.append('bday_list_url_online_site', this.rForm.get('bday_list_url_online_site').value);
       data.append('bday_list_cover_photo', this.imageUrl);
       data.append('link_url',this.link_status);

       console.log(data);
         this.authService.addBirthdaylist(data).then((result) => {
          console.log(result);
          this.link_status_val=false;
          this.res=result;
          if(this.res.status==true)
          {
            this.add_new=false;
            this.clearr();
             this.mytable.destroy();
              setTimeout(() => {
             this.mytable =$('#example').DataTable({
            "bPaginate": true,
            "bLengthChange": true,
            "columnDefs": [ {
                "targets": 'no-sort',
                "orderable": false,
          } ],
            "bFilter": true,
            "bInfo": false,
            "bAutoWidth": true,
            //"ordering": false
            })
            },500);
              this.presentToast('Birthday Added Successfully') 
         //   alert("Birthday Added Successfully");
            this.GetBirthday();
            this.GetAllLinks();
           // this.router.navigateByUrl('/groups');
          }
        else
        {
          // this.toastr.error(this.res.message);
          }
           
          }, (err) => {
            console.log(err);
          });
       }
   }
   else{
   alert("Fill required fields!!!!")
   }

    }


  /**********************************GET Birthday***************************************/

    GetBirthday() {
      // alert("hiiii")
    this.authService.getAllBirthday().then((result) => {
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


/************************************Toast***************************/


   presentToast(msg) {

    this.toastr.success(this.res.message, '', {
  timeOut: 3000,
  tapToDismiss:true
});
  }

}
