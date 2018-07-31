import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
declare var jQuery: any; 

@Component({
  selector: 'app-editalbum',
  templateUrl: './editalbum.component.html',
  styleUrls: ['./editalbum.component.scss']
})
export class EditalbumComponent implements OnInit {
myForm: FormGroup;
res:any;
data:any;
id:any;
api_image:any;
file:any;
artistData: any;
img: boolean = true;
imageLoaded: boolean = false;
imageSrc: string = '';
loaded: boolean = false;

browse: boolean = false;
 public arryData:any = [];
imageUrl: any
image: boolean = false;
img_valid: boolean = true;

  constructor(private fb: FormBuilder,
  	private router: Router,
    public authService: AuthServiceService,
    private route: ActivatedRoute) {

  		this.route.params.subscribe(params => {
          console.log(params);
          this.id=params;
        });

      this.myForm = this.fb.group({
         album_title: ['', Validators.required],
         artist: ['', Validators.required],
         album_image: null
      });
   }

  ngOnInit() {
    $("#album").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
      e.preventDefault();
      });
  	this.GetAlbumDetail();
     this.getArtist();

  }
  cancel(){
  this.router.navigateByUrl('/music');
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

  /**********************************EDit Albums***************************************/

  EditAlbum(val){
    console.log('imageurl',this.imageUrl)
  	console.log(val)
    if(val)
    {
       	let data = new FormData();
       
       data.append('album_title', this.myForm.get('album_title').value);
       data.append('artist', this.myForm.get('artist').value);
       data.append('album_image', this.imageUrl);
       data.append('album_id', this.id.id);
       
        this.authService.editAlbum(data).then((result) => {
        console.log(result);
        this.res=result;
        if(this.res.status==true){
        	this.router.navigateByUrl('/music');

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


   /***********************************get Artist*********************/
  getArtist() {

    this.authService.getMusicArtist().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {
        this.artistData = this.res.data;
        console.log(this.data);
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }

 /**********************************Get Albums Detail***************************************/

  GetAlbumDetail() {
      // alert("hiiii")
      let params={
         'id':this.id.id
      }
    this.authService.getAlbumDetail(params).then((result) => {
    console.log("album detaillll",result);
    this.res=result;
    if(this.res.status==true){
         this.data=this.res.data;
        this.myForm.get('album_title').setValue(this.data.album_title);
        this.myForm.get('artist').setValue(this.data.artist);
         this.api_image=this.data.album_image;
         console.log(this.api_image);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }


}
