import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})

export class MusicComponent implements OnInit {
  artist_id: any;
  artistData: any;
  res: any;
  data: any;
  id: any;
  idd: any;
  api_image: any;
  myForm: FormGroup;
  artistForm: FormGroup;
  file: any;
  img: boolean = true;
  add_new: boolean = false;
  add_new_artist: boolean = false;
  @ViewChild('fileupload')
  myInputVariable: any;

  browse: boolean = false;
  arryData: any = [];
  loaded: boolean = false;
  imageSrc: string = '';
  imageLoaded: boolean = false;
  imageUrl: any
  image: boolean = false;
  img_valid: boolean = true;


  constructor(
    private fb: FormBuilder,
    public authService: AuthServiceService, ) {
    this.myForm = this.fb.group({
      album_title: ['', Validators.required],
      artist: ['', Validators.required],
      album_image: null
    });
    this.artistForm = this.fb.group({
      artist_name: ['', Validators.required],
      artist_image: null
    });
  }
  // ngAfterContentInit(){
  //  $("#titlemusic").on("keypress", function (e) {
  //      if (e.which === 32 && !this.value.length)
  //      e.preventDefault();
  //      });
  // }
  ngAfterContentChecked() {
    $("#titlemusic").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
        e.preventDefault();
    });
  }
  // ngAfterViewInit(){
  //  $("#titlemusic").on("keypress", function (e) {
  //      if (e.which === 32 && !this.value.length)
  //      e.preventDefault();
  //      });
  // }

  ngOnInit() {
    this.GetMusicAlbums();
    this.getArtist();
    // this.getlibrary();
  }

  showAdd() {
    this.add_new = true;
    this.add_new_artist = false;
  }

  cancel() {
    this.add_new = false;
  }

  addArtist() {
    this.add_new_artist = true;
    this.add_new = false;
  }

  cancelArtist() {
    this.add_new_artist = false;
  }

  RemoveClick(id) {
    // alert(id)
    jQuery("#request").modal("show");
    this.idd = id;

  }



  /**********************************Remove Albums***************************************/

  RemoveComm() {
    // alert("hiiii")
    let params = {
      'type': 'MA',
      'type_id': this.idd
    }
    this.authService.removeAlbum(params).then((result) => {
      console.log(result);

      this.res = result;
      if (this.res.status == true) {
        jQuery("#request").modal("hide");
        this.GetMusicAlbums();
        // this.data=this.res.data;
        console.log(this.data);
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }

  /**********************************CLEAR FORM***************************************/

  clearForm() {

    this.myForm.reset({
      'album_title': '',
      'album_image': ''
    });
    this.imageUrl = '';
    this.imageSrc = '';
    this.image = false;
    this.browse = false;
  }

  reset() {
    // console.log(this.myInputVariable.nativeElement.files);
    this.myInputVariable.nativeElement.value = "";
    // console.log(this.myInputVariable.nativeElement.files);
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


  /**********************************ADD Albums***************************************/

  AddAlbum(val) {
    console.log(val)

    if (val) {

      if (!this.img) {
        alert("image requires")
        this.img_valid = true;
      }
      else if (!this.imageUrl) {
        this.img_valid = false;
      }
      else {

        console.log('artisttttttt', this.myForm.get('artist').value);
        console.log('albummmmmmmm', this.myForm.get('album_title').value)
        let data = new FormData();

        data.append('album_title', this.myForm.get('album_title').value);
        data.append('artist', this.myForm.get('artist').value);
        data.append('album_image', this.imageUrl);

        this.authService.addAlbum(data).then((result) => {
          console.log(result);
          this.res = result;
          if (this.res.status == true) {
            this.GetMusicAlbums();
            this.add_new = false;

            // console.log(this.myForm.value);
            this.clearForm();
            this.reset();
            alert("Album Added Successfully")
          }
          else {
            console.log("erorrr");
          }

        }, (err) => {
          console.log(err);
        });
      }
    }
    else {
      alert("Fill Required Fields!!")
    }

  }




  // EditAlbum(val){
  //     console.log(val)
  // }


  /**********************************Get Music Albums***************************************/

  GetMusicAlbums() {
    // alert("hiiii")
    this.authService.getMusicAlbums().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {
        this.data = this.res.data;
        console.log(this.data);
        this.getArtist();
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }


  /**********************************ADD Artist***************************************/

  AddArtist(val) {
    console.log(val)

    if (val) {

      if (!this.img) {
        // alert("image requires")
        this.img_valid = true;
      }
      else if (!this.imageUrl) {
        this.img_valid = false;
      }
      else {
        console.log('artist_nameeeeeeeeeeee', this.artistForm.get('artist_name').value)
        console.log('artist_imageeeeeeeeeeeee', this.imageUrl);
        let data = new FormData();

        data.append('artist_name', this.artistForm.get('artist_name').value);
        data.append('artist_image', this.imageUrl);

        this.authService.addArtist(data).then((result) => {
          console.log(result);
          this.res = result;
          if (this.res.status == true) {
            this.GetMusicAlbums();
            this.add_new_artist = false;
            // console.log(this.myForm.value);
            this.clearForm();
            this.reset();
            // alert("Album Added Successfully")
          }
          else {
            console.log("error");
          }

        }, (err) => {
          console.log(err);
        });
      }
    }
    else {
      this.validateAllFormFields(this.artistForm);
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

  removeArtist(id) {
    this.artist_id = id;
    let params = {
      'artist_id': this.artist_id
    }
    this.authService.removeMusicArtist(params).then((result) => {
      console.log(result);

      this.res = result;
      if (this.res.status == true) {
        this.getArtist();
        alert("Media Category deleted Successfully")
        console.log(this.data);
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }

  /*********************************Validation Error***************************************/

  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }





}
