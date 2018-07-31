import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
// var $ = require('jquery');
import 'datatables.net';
declare var jQuery: any;
declare var table: any;
@Component({
  selector: 'app-medialist',
  templateUrl: './medialist.component.html',
  styleUrls: ['./medialist.component.scss']
})
export class MedialistComponent implements OnInit {
  table: any;
  thumnail: any;
  songTitle: any;
  imageOption: boolean = false;
  videoOption: boolean = false;
  res: any;
  data: any;
  id: any;
  imageTitle: any;
  idd: any;
  myForm: FormGroup;
  file: any;
  type: any;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortOrder = "asc";
  img: boolean = true;
  song_valid: boolean = true;
  add_new: boolean = false;
  @ViewChild('fileupload')
  myInputVariable: any;

  browse: boolean = false;
  arryData = [];
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
      media_file: ['']
    });

    this.route.params.subscribe(params => {
      console.log(params);
      this.id = params;
    });
  }

  ngOnInit() {
    this.GetMedia();
    setTimeout(() => {
      this.table = $('#example').DataTable({
        "bPaginate": true,
        "bLengthChange": true,
        // "pageLength": 7,
        "bFilter": true,
        "bInfo": false,
        "bAutoWidth": true,
        //"ordering": false
      })
    }, 500);
  }

  showAdd() {
    this.add_new = true;
  }


  RemoveClick(id) {
    // alert(id)
    jQuery("#request").modal("show");
    this.idd = id;


  }
  /**********************************Remove Groups***************************************/

  RemoveComm() {
    // alert("hiiii")
    let params = {
      'type': 'ME',
      'type_id': this.idd
    }
    this.authService.removeMedia(params).then((result) => {
      console.log(result);

      this.res = result;
      if (this.res.status == true) {
        jQuery("#request").modal("hide");
        // this.users();
        this.GetMedia();
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


  reset() {
    this.imageSrc = "";
    this.imageUrl = "";
    this.thumnail = "";
    this.songTitle = "";
    this.browse = false;
    this.image = false;
    this.imageOption = false;
    this.videoOption = false;
    // console.log(this.myInputVariable.nativeElement.files);
    this.myInputVariable.nativeElement.value = "";
    // console.log(this.myInputVariable.nativeElement.files);
  }


  /**********************************get SONG***************************************/

  onFileChange(event) {
    console.log(event)
    if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg' || event.target.files[0].type === 'video/mp4') {
      if (event.target.files[0].type === 'image/jpeg' || event.target.files[0].type === 'image/png') {
        this.type = 'P';
      }
      else if (event.target.files[0].type === 'video/mp4') {
        this.type = 'V';
      }
      if (event.target.files.length > 0) {
        this.imageOption = false;
        this.videoOption = true;
        this.img = true;
        this.song_valid = true;
        this.file = event.target.files[0];
        console.log('fileeeeeeeeeeeeee', this.file)
        this.songTitle = this.file.name;
        console.log('songname', this.songTitle);
        this.imageUrl = this.file;
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(this.file);
      }
    }
    else {
      this.song_valid = true;
      this.img = false;
    }
  }

  openModal() {
    jQuery("#gallerymodal").modal("show");
    this.getlibrary();
  }

  handleImageLoad() {
    this.imageLoaded = true;
  }

  _handleReaderLoaded(e) {
    this.imageOption = false;
    this.browse = true
    console.log('image', e);
    var reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
  }


  checking(index, url, mediaType) {
    this.browse = false;
    this.videoOption = false;
    this.image = true;
    this.imageOption = false;
    this.img = true;
    this.img_valid = true;
    $('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
    console.log('url', url);
    this.type = mediaType;
    console.log('type', this.type);
    this.imageUrl = url;
  }

  VideoGallery(index, url, title, thumbnail, mediaType) {
    this.imageOption = true;
    this.browse = false;
    this.videoOption = false;
    this.image = false;
    this.img = true;
    this.img_valid = true;
    $('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
    console.log('url', url);
    this.imageUrl = url;
    this.thumnail = thumbnail
    console.log('thumnail', this.thumnail);
    this.type = mediaType;
    console.log('mdeia type', this.type);
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

  /**********************************ADD MEDIA***************************************/

  AddMedia(val) {
    console.log(val);
    console.log('media type', this.type);
    console.log('imageThumbnail', this.thumnail);
    console.log('image_name', this.imageUrl);
    if (!this.img) {
      this.img_valid = true;
    }
    else if (!this.imageUrl) {
      this.img_valid = false;
    }
    else {
      let data = new FormData();
      data.append('media_file', this.imageUrl);
      data.append('gallary_id', this.id.id);
      data.append('media_type', this.type);
      data.append('thumbnail', this.thumnail);

      this.authService.addMedia(data).then((result) => {
        console.log('medialist', result);
        this.res = result;
        this.imageUrl = ''
        if (this.res.status == true) {

          this.GetMedia();
          this.add_new = false;
          // this.clearForm();
          this.reset();
          alert("Media Uploaded Successfully")
        }
        else {
          console.log("erorrr");
        }

      }, (err) => {
        console.log(err);
      });
    }

  }

  /**********************************Get Media of Gallaries***************************************/

  GetMedia() {
    let params =
      {
        'id': this.id.id
      };
    // alert("hiiii")
    this.authService.getMediaOfGallery(params).then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {
        // this.GetMediaCategory();
        this.data = this.res.data;
        console.log(this.data);
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }


}
