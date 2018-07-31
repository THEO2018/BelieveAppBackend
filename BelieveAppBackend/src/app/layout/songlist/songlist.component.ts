import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import 'datatables.net';
import * as moment from 'moment';

declare var jQuery: any;



@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.scss']
})
export class SonglistComponent implements OnInit {
  objectUrl:any;
  imageTitle: any;

  album_id: any;
  res: any;
  data: any;
  dura:any;
  id: any;
  idd:any;
  data1:any;
  mytable:any;
  publish: boolean = true;
  saved: boolean = false;
  myForm: FormGroup;
  file: any;
  img: boolean = true;
  song_valid: boolean = true;
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
  add_new: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    public authService: AuthServiceService,
    private toastr: ToastrService) {

    this.route.params.subscribe(params => {
      console.log(params);
      this.album_id = params;
    });

    this.myForm = this.fb.group({
      song_title: ['', Validators.required],
      song_file: null
    });
  }

  ngOnInit() {
    $("#title").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
        e.preventDefault();
    });
  
    
  setTimeout(() => {
    this.mytable =$('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
    this.GetSongs();
    this.DraftSongs();
  }

    publishModal(id){
      jQuery("#publish").modal("show");
      this.idd=id;
    }

  RemoveClick(id) {
    // alert(id)
    jQuery("#reject").modal("show");
    this.id = id;

  }

   SavedList(){
   this.mytable.destroy();
             setTimeout(() => {
             this.mytable =$('table.display').DataTable({
              "bPaginate": true,
              "bLengthChange": true,
              // "pageLength": 7,
              "bFilter": true,
              "bInfo": false,
              "bAutoWidth": true,
              //"ordering": false
              })
             
              },500);
    this.saved=true;
    this.publish=false;
    }

    PublishList(){
    this.mytable.destroy();
             setTimeout(() => {
             this.mytable =$('table.display').DataTable({
              "bPaginate": true,
              "bLengthChange": true,
              // "pageLength": 7,
              "bFilter": true,
              "bInfo": false,
              "bAutoWidth": true,
              //"ordering": false
              })
             
              },500);
    this.saved=false;
    this.publish=true;
    }

     showAdd(){
      this.add_new=true;
    }
    cancel(){
       this.add_new=false;
    }

 /********************************** Get Draft Songs of album***************************************/

    DraftSongs() {
      let params = {
      'id': this.album_id.id
    }
      // alert("hiiii")
    this.authService.getDraftSongs(params).then((result) => {
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

  PublishDrafts(){
    let params={
      'type':'SN',
      'id':this.idd
    };
     
     this.authService.publishDrafts(params).then((result) => {
          console.log(result);
          this.res=result;
          if(this.res.status==true)
          {
            jQuery("#publish").modal("hide");
            this.mytable.destroy();
             setTimeout(() => {
             this.mytable =$('table.display').DataTable({
              "bPaginate": true,
              "bLengthChange": true,
              // "pageLength": 7,
              "bFilter": true,
              "bInfo": false,
              "bAutoWidth": true,
              //"ordering": false
              })
             
              },500);
            this.DraftSongs();
            this.GetSongs();
          }
        else
        {
          console.log("fasleeee")
          }
           
          }, (err) => {
            console.log(err);
          });
  }


  /**********************************Remove Albums***************************************/

  RemoveComm() {
    // alert("hiiii")
    let params = {
      'type': 'MS',
      'type_id': this.id
    }
    this.authService.removeAlbum(params).then((result) => {
      console.log(result);

      this.res = result;
      if (this.res.status == true) {
        jQuery("#reject").modal("hide");
        this.mytable.destroy();
             setTimeout(() => {
             this.mytable =$('table.display').DataTable({
              "bPaginate": true,
              "bLengthChange": true,
              // "pageLength": 7,
              "bFilter": true,
              "bInfo": false,
              "bAutoWidth": true,
              //"ordering": false
              })
             
              },500);
        
        this.GetSongs();
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
      'song_title': '',
      'song_file': ''
    });
    this.imageSrc='';
    this.imageTitle='';

  }

  reset() {
    // console.log(this.myInputVariable.nativeElement.files);
    this.myInputVariable.nativeElement.value = "";
    // console.log(this.myInputVariable.nativeElement.files);
  }

   /**********************************get SONG***************************************/

  onFileChange(event) {

      $("#audio").on("canplaythrough", function(e){
    var seconds = e.currentTarget.duration;
    var duration = moment.duration(seconds, "seconds");
    
    var time = "";
    var hours = duration.hours();
    if (hours > 0) { time = hours + ":" ; }
    
    time = time + duration.minutes() + ":" + duration.seconds();
    console.log(time)
    this.dura=time;
    // alert(this.dura)
    console.log($("#duration").text(time))
    $("#duration").text(time);
    
    URL.revokeObjectURL(this.objectUrl);
});


    console.log("eventttttt",event)
    if (event.target.files[0].type === 'audio/mp3' || event.target.files[0].type === 'audio/mpeg') {
      if (event.target.files.length > 0) {
        this.browse = true;
        this.image = false;
        this.img = true;
        this.img_valid = true;
        let file = event.target.files[0];
         this.objectUrl = URL.createObjectURL(file);
        $("#audio").prop("src",  this.objectUrl);
        console.log('media', file);
        this.imageSrc = file.name;
        console.log('songname', this.imageSrc);
        this.imageUrl = file;
  
      }
    }
    else {
      this.imageUrl = '';
      this.img_valid = true;
      this.img = false;
    }
  }

  /**********************************ADD SONG***************************************/

  AddSong(val,sta) {
   if(document.getElementById("duration")) {
    this.dura=document.getElementById("duration").innerHTML 
    console.log('songurl', document.getElementById("duration").innerHTML )
    console.log(sta)
   }
   else {
    this.dura = "";
     // alert(this.dura)
   }
    if (!this.img) {
      this.song_valid = true;
    }
    else if (!this.imageUrl) {
      this.song_valid = false;
    }
    else if (val) {
      let data = new FormData();

      data.append('song_title', this.myForm.get('song_title').value);
      data.append('song_file', this.imageUrl);
      data.append('album_id', this.album_id.id);
      data.append('status', sta);
      data.append('duration', this.dura);

      this.authService.addSong(data).then((result) => {
        console.log(result);
        this.res = result;
        if (this.res.status == true) {
          this.mytable.destroy();
             setTimeout(() => {
             this.mytable =$('table.display').DataTable({
              "bPaginate": true,
              "bLengthChange": true,
              // "pageLength": 7,
              "bFilter": true,
              "bInfo": false,
              "bAutoWidth": true,
              //"ordering": false
              })
             
              },500);
          this.GetSongs();
          // console.log(this.myForm.value);
          this.clearForm();
          this.reset();
          this.browse=false;
          this.image=false;
          this.add_new=false;
            this.DraftSongs();
            this.presentToast('Song Added Successfully') 
         // alert("Song Added Successfully")
        }
        else {
          console.log("erorrr");
        }

      }, (err) => {
        console.log(err);
      });
    }

  }





  // handleImageLoad() {
  // this.imageLoaded = true;
  // }

  // _handleReaderLoaded(e) {
  // this.browse = true
  // console.log('image', e);
  // var reader = e.target;
  // this.imageSrc = reader.result;
  // console.log('result',this.imageSrc);
  // this.loaded = true;
  // }

  openModal() {
  jQuery('#gallerymodal').modal({backdrop: 'static', keyboard: false});
    jQuery("#gallerymodal").modal("show");
    this.getlibrary();
  }


  checking(index, url, title) {
    this.browse = false;
    this.image = true;
    this.img = true;
    this.img_valid = true;
    $('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
    console.log('url', url);
    this.imageUrl = url;
    this.imageTitle = title
    console.log('title', this.imageTitle);
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

  /**********************************Get Songs***************************************/

  GetSongs() {
    let params = {
      'id': this.album_id.id
    }
    // alert("hiiii")
    this.authService.getSongs(params).then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {
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

/************************************Toast***************************/


   presentToast(msg) {

    this.toastr.success(this.res.message, '', {
  timeOut: 3000,
  tapToDismiss:true
});
  }


}
