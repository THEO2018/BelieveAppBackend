import { Component, OnInit,ViewChild} from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import 'datatables.net';
import { Router } from '@angular/router'; 
declare var jQuery:any;

@Component({
  selector: 'app-weddinglist',
  templateUrl: './weddinglist.component.html',
  styleUrls: ['./weddinglist.component.scss']
})
export class WeddinglistComponent implements OnInit {
res:any;
data:any;
myForm: FormGroup;
file:any;
mytable:any;
id:any;
link_status:any;
img_valid: boolean = true;
img: boolean = true;
public filterQuery = "";
public rowsOnPage = 5;
public sortOrder = "asc";
urlPattern = "^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/|www.){1}([0-9A-Za-z].+)";

browse: boolean = false;
 public arryData:any;
loaded: boolean = false;
imageSrc: string = '';
imageLoaded: boolean = false;
imageUrl: any;
links:any;
linkUrl:any;
linkTitle:any;
image: boolean = false;
link_status_val: boolean = false;

@ViewChild('fileupload')
myInputVariable: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    public authService: AuthServiceService) {
     this.myForm = this.fb.group({
         title: ['', Validators.required],
         cover_photo: null,
         url_online_site: ['', Validators.required]
      }); 
     this.img_valid=true;
   }

  ngOnInit() {
    this.GetAllLinks();
      setTimeout(() => {
   this.mytable =$('#example').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })},500);

     $("#title").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
      e.preventDefault();
      });
      $("#web").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
      e.preventDefault();
      });
    this.GetwedList();
    this.getlibrary();
  }

   RemoveClick(id){
      // alert(id)
      jQuery("#request").modal("show");
      this.id=id;

    }


  /**********************************Remove Groups***************************************/
   
    RemoveComm() {
      let params={
        'type':'WL',
        'type_id':this.id
      }
    this.authService.removeCommunity(params).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true)
    {
   jQuery("#request").modal("hide");
      this.mytable.destroy();
      setTimeout(() => {
   this.mytable =$('#example').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })},500);
      this.GetwedList();
      //alert("Wedding List Deleted Successfully")
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
    else 
    {
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

    openlinkModal() {
    jQuery('#addfirst').modal({backdrop: 'static', keyboard: false});
      jQuery("#addfirst").modal("show");
      // this.getlibrary();
    }

    openModal() {
    jQuery('#gallerymodal').modal({backdrop: 'static', keyboard: false});
      jQuery("#gallerymodal").modal("show");
      this.getlibrary();
    }

    checking(index, url) 
    {
      console.log(index)
      this.browse = false;
      this.image = true;
      this.img = true;
      this.img_valid = true;
      $('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
      console.log('url', url);
      this.imageUrl = url;
    }

    checkingLink(index, url,title)
     {
      console.log(index)
     $('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
      console.log('url', url);
      this.linkUrl = url;
      this.linkTitle=title
    }

    getuserVal(name,isChecked: boolean){
       // this.link_status='Y';
       this.link_status_val=true;
 
     this.myForm.get('url_online_site').setValue(name);
      
    }
    
    urlInputChange(){
      this.link_status_val=false;
    }
   /**********************************Get Library***************************************/

    getlibrary() 
    {
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

   /**********************************Get All Links***************************************/


    GetAllLinks() 
    {
    this.authService.getLinks().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) 
      {
         this.links = this.res.data;
      }
      else 
      {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }

/**********************************CLEAR FORM***************************************/
    clearForm() 
    {
        this.myForm.reset({
          'title': '',
          'cover_photo': '',
          'url_online_site': ''
         });
         this.myForm.get('cover_photo').setValue('');
         this.file='';
         this.imageSrc ='';
         this.imageUrl ='';
         this.browse=false;
         this.image=false;
         this.linkUrl = '';
         this.linkTitle='';
    }

    reset() 
    {
        this.myInputVariable.nativeElement.value = "";
    }


 /**********************************Add GROUP***************************************/
      

    AddWedding(val) {
      this.linkUrl = '';
         this.linkTitle='';
      if(val){

       if(!this.imageUrl)
       {
        this.img_valid=false;
       }
       else if(!this.img)
       {
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
        console.log("link_status",this.link_status)
        let data = new FormData();
       
       data.append('title', this.myForm.get('title').value);
       data.append('cover_photo',  this.imageUrl);
       data.append('link_url',this.link_status);
       data.append('url_online_site',this.myForm.get('url_online_site').value);
       // console.log(data);
        this.authService.addWedding(data).then((result) => {
        // console.log(result);
        this.res=result;
        if(this.res.status==true)
        {
        this.link_status_val=false;
        this.mytable.destroy();
          setTimeout(() => {
            this.mytable =$('#example').DataTable({
              "bPaginate": true,
              "bLengthChange": true,
              // "pageLength": 7,
              "bFilter": true,
              "bInfo": false,
              "bAutoWidth": true,
              //"ordering": false
              })},500);
          this.presentToast('Wedding List Added Successfully') 
         // alert("Wedding List Added Successfully")
          this.GetwedList();
          this.GetAllLinks();
          // console.log(this.myForm.value);
          this.clearForm();
          this.reset();
          // alert(this.file)
        }
        else{
          this.link_status_val=false;
           console.log("erorrr");
        }
           
          }, (err) => {
            console.log(err);
          });
       }
       }
       else{
        console.log("invaliddd")

       }

  }

/**********************************GET WEDDING LIST***************************************/

    GetwedList() {
        // alert("hiiii")
      this.authService.getWedList().then((result) => {
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
