import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
declare var jQuery:any;

@Component({
  selector: 'app-classifiedlist',
  templateUrl: './classifiedlist.component.html',
  styleUrls: ['./classifiedlist.component.scss']
})
export class ClassifiedlistComponent implements OnInit {
res:any;
data:any;
id:any;
cat_dataa:any;
idd:any;
mytable:any;
myForm: FormGroup;
eForm: FormGroup;
file:any;
type:any;
img: boolean = true;
add_new: boolean = false;
song_valid: boolean = true;
@ViewChild('fileupload')
myInputVariable: any;

  browse: boolean = false;
arryData= [];
loaded: boolean = false;
imageSrc: string = '';
imageLoaded: boolean = false;
imageUrl: any
image: boolean = false;
img_valid: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public authService: AuthServiceService) {
    this.myForm = this.fb.group({
           classified_title: ['', Validators.required],
            category: ['', Validators.required],
             classified: ['', Validators.required],
              classified_image: null
        });
 this.eForm = this.fb.group({
         name: ['', Validators.required]
      });
       this.route.params.subscribe(params => {
            console.log("last page params",params);
            this.id=params;
          });
      }

  ngOnInit()

  {
    this.GetCategories();
       setTimeout(() => {
   this.mytable=$('#example').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
    this.GetClassifieds();
  }
   RemoveClick1(id){
      // alert(id)
      jQuery("#request").modal("show");
      this.idd=id;
  }


    ngAfterContentChecked(){
    $("#web").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
        e.preventDefault();
        });
    $("#des").on("keypress", function (e) {
        if (e.which === 32 && !this.value.length)
        e.preventDefault();
        });
   }

   showAdd(){
      this.add_new=true;
    }

  Cancel(){
      this.add_new=false;
    }

    clearForm() {
        this.myInputVariable.nativeElement.value = "";
      this.myForm.reset({
          'classified': '',
           'classified_title': ''
             });
      this.browse=false;
      this.image=false;
      this.imageSrc='';
      this.imageUrl='';
   }

clear(){
    this.eForm.reset({
          'name': ''
             });
}

  /**********************************Remove Groups***************************************/
   
    RemoveClick(id) {
      // alert("hiiii")
      let params={
        'type':'CA',
        'type_id':id
      }
    this.authService.removeClassified(params).then((result) => {
    console.log(result);
     
    this.res=result;
    if(this.res.status==true){
       alert("Category Deleted Successfully")
   // jQuery("#request").modal("hide");
      // this.users();
      this.GetCategories();
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }
     /**********************************ADD Categories***************************************/

  AddCategories(val){
    console.log(val) 
    if(val){
        let params={
          'title':this.eForm.get('name').value
        }
       
        this.authService.addClassCategory(params).then((result) => {
        console.log(result);
        this.res=result;
        if(this.res.status==true){
          alert("Category Added Successfully")
          jQuery("#addcat").modal("hide");
          this.GetCategories();
          // // console.log(this.myForm.value);
          this.clear();
          // this.reset();
          // alert(this.res.message)
        }
        else{
           console.log("erorrr");
        }
           
          }, (err) => {
            console.log(err);
          });
       }
       else{
        alert("Fill Required Fields")
       }

  }

         /**********************************Get Categories***************************************/

  GetCategories() {
      // alert("hiiii")
    this.authService.getClassCategories().then((result) => {
    console.log("categoriessss",result);
    this.res=result;
    if(this.res.status==true){
         this.cat_dataa=this.res.data;
         console.log(this.data);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

/**********************************Remove Groups***************************************/
   
    RemoveComm() {
      // alert("hiiii")
      let params={
        'type':'CL',
        'type_id':this.idd
      }
    this.authService.removeClassified(params).then((result) => {
    console.log(result);
     
    this.res=result;
    if(this.res.status==true){
   jQuery("#request").modal("hide");
    this.mytable.destroy();
        setTimeout(() => {
   this.mytable=$('#example').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
   alert("Classified Deleted Succefully");
      // this.users();
      this.GetClassifieds();
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


/**********************************get IMAGE***************************************/
  
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

/**********************************Get Classifieds Of Category***************************************/

  GetClassifieds() {
    let params=
    {
      'id':this.id.id
    };
      // alert("hiiii")
    this.authService.getClassifiedsOfCategory().then((result) => {
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

    /**********************************ADD CLASSIFIEDS***************************************/

  AddClassifieds(val){
    console.log('imageUrl',this.imageUrl);
    console.log(val)
      
      if(!this.img){
        this.song_valid=true;
       }
       else if(!this.imageUrl)
      {
          this.img_valid=false;
       }

      else if(val)
      {
        let data = new FormData();
       
       data.append('classified_title', this.myForm.get('classified_title').value);
       data.append('category',this.myForm.get('category').value);
       data.append('classified', this.myForm.get('classified').value);
       data.append('classified_image', this.imageUrl);
       
        this.authService.addClassified(data).then((result) => {
        console.log(result);
        this.res=result;
        if(this.res.status==true){
          this.GetClassifieds();
          this.add_new=false;
          this.clearForm();
           this.mytable.destroy();
              setTimeout(() => {
         this.mytable=$('#example').DataTable({
          "bPaginate": true,
          "bLengthChange": true,
          // "pageLength": 7,
          "bFilter": true,
          "bInfo": false,
          "bAutoWidth": true,
          //"ordering": false
          })
         
          },500);
          // this.reset();
          alert("Classified Added Successfully")
        }
        else{
           console.log("erorrr");
        }
           
          }, (err) => {
            console.log(err);
          });
       }

       else{
        alert("Fill Required Fields")
       }

  }

}
