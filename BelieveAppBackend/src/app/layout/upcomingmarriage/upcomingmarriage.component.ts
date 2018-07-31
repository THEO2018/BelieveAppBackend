import { Component, OnInit,ViewChild} from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router'; 
import * as $ from 'jquery';
import 'datatables.net';

declare var jQuery:any;
@Component({
  selector: 'app-upcomingmarriage',
  templateUrl: './upcomingmarriage.component.html',
  styleUrls: ['./upcomingmarriage.component.scss']
})
export class UpcomingmarriageComponent implements OnInit {
  rForm: FormGroup;
  img_valid: boolean = true;
	res:any;
	data:any;
  data1:any;
	res_user:any;
	data_user:any;
	f_user:any;
  id:any;
  s_user:any;
  publish: boolean = true;
  saved: boolean = false;
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortOrder = "asc";
  img: boolean = true;
  add_new: boolean = false;
  browse: boolean = false;
  arryData= [];
  loaded: boolean = false;
  imageSrc: string = '';
  imageLoaded: boolean = false;
  imageUrl: any
  image: boolean = false;

	imag_valid: boolean = true;
	@ViewChild('fileupload')
myInputVariable: any;

  constructor(private router: Router,
    public authService: AuthServiceService,
    private fb: FormBuilder) { 
   this.rForm = fb.group({
      'first_user_id' : [null, Validators.required],
      'second_user_id' : [null, Validators.required],
      'date_of_marriage' : [null, Validators.required],
      'marriage_cover_photo' : null
      });
  }


	  ngOnInit() {
        setTimeout(() => {
   $('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })},500);

	  	this.Getupcoming();
	  	this.users();
      this.GetDraft();
	  }

      showAdd(){
      this.add_new=true;
    }
    cancel(){
       this.add_new=false;
    }


     clearr(){
      this.rForm.reset({
        'first_user_id': '',
        'second_user_id': '',
        'date_of_marriage': ''
        });
        this.f_user='';
        this.s_user='';
        this.imageUrl='';
        this.imageSrc='';
        console.log(this.imageUrl)
        this.myInputVariable.nativeElement.value = "";
    }

	  AddUpcoming1(val,value) {
	  	console.log(value)
	  	console.log("heyyy formmmm",this.rForm.value);
	  	this.rForm.value.date_of_marriage = moment(this.rForm.value.date_of_marriage).format('DD/MM/YYYY');
	  	console.log(" formmmm",this.rForm.value.date_of_marriage);
	  }
   SavedList(){
      setTimeout(() => {
   $('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })},500);
    this.saved=true;
    this.publish=false;
    }

    PublishList(){
        setTimeout(() => {
   $('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })},500);
    this.saved=false;
    this.publish=true;
    }
     userModal() {
  jQuery('#addfirst').modal({backdrop: 'static', keyboard: false});
  jQuery("#addfirst").modal("show");
  
  } 
   adminModal() {
  jQuery('#addsecond').modal({backdrop: 'static', keyboard: false});
  jQuery("#addsecond").modal("show");
  
  } 


   RemoveClick(id){
      // alert(id)
      jQuery("#request").modal("show");
      this.id=id;

    }

/**********************************Get Draft Upcoming Marriages***************************************/

    GetDraft() {
      // alert("hiiii")
    this.authService.getDraftUpcoming().then((result) => {
    console.log("Saveddddd",result);
    this.res=result;
    if(this.res.status==true){
         this.data1=this.res.data;
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

    /**********************************Publish Drafts***************************************/

  PublishDrafts(val){
    let params={
      'type':'UM',
      'id':val
    };
     
     this.authService.publishDrafts(params).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
            this.GetDraft();
            this.Getupcoming();
          }
        else
        {
          console.log("fasleeee")
          }
           
          }, (err) => {
            console.log(err);
          });
     

  }
     /**********************************Remove Groups***************************************/
   
    RemoveComm() {
      // alert("hiiii")
      let params={
        'type':'UM',
        'type_id':this.id
      }
    this.authService.removeCommunity(params).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
      jQuery("#request").modal("hide");
      this.Getupcoming();
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

	  /**********************************Add UpCOMING MARRIAGE***************************************/
      

    AddUpcoming(val,sta) {
      console.log("ddddd",this.imageSrc);
       console.log("heyyy formmmm",this.rForm.value);
       // this.AddUserForm.value.start_time = moment(this.AddUserForm.value.start_time).format('DD/MM/YYYY');
      this.rForm.value.date_of_marriage = moment(this.rForm.value.date_of_marriage).format('DD-MM-YYYY');
     console.log("heyyy timeee",this.rForm.value.end_time);
      if(val){

       if(!this.imageUrl){
        this.imag_valid=false;
       }
       else if(!this.img){
        this.imag_valid=true;
       }
       else if(this.rForm.value.first_user_id==this.rForm.value.second_user_id){
       alert("Both Users can not be Same")
       }
       
       else
       {
        this.imag_valid=true;
        let data = new FormData();
        data.append('status',sta);
       data.append('first_user_id',this.rForm.value.first_user_id);
       data.append('second_user_id', this.rForm.value.second_user_id);
       data.append('date_of_marriage', this.rForm.value.date_of_marriage);
       data.append('marriage_cover_photo', this.imageUrl);
       console.log(data);
         this.authService.addUpcoming(data).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
          	console.log("trueee")
          	this.clearr();
          	this.Getupcoming();
            this.GetDraft();
            this.image=false;
            this.browse = false
            this.imageSrc===null;
             this.add_new=false;
          	alert(this.res.message);
          }
        else
         {
        	console.log("fasle")
          }
           
          }, (err) => {
            console.log(err);
          });
       }
       }
       else{
        alert("Fill Required Fields!!!")
        console.log("invaliddd")

       }

  }

 /**********************************get users modal***************************************/


  getuserVal(id,name,isChecked: boolean){
  	console.log(id)
  	 console.log(name)
     this.f_user=name;
    this.rForm.get('first_user_id').setValue(id);
   }

     getuserVal1(id,name,isChecked: boolean){
    console.log(id)
     console.log(name)
     this.s_user=name;
     this.rForm.get('second_user_id').setValue(id);
      
    }

 /**********************************Get Users***************************************/
    users() {
    this.authService.getUsers().then((result) => {
    console.log(result);
    this.res_user=result;
    if(this.res_user.status==true){
         this.data_user=this.res_user.data;
         console.log(this.data_user);
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

   /**********************************GET UPCOMING WEDDING***************************************/

    Getupcoming() {
      // alert("hiiii")
      console.log("ddddd",this.imageSrc);
    this.authService.getUpcomingMar().then((result) => {
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

}
