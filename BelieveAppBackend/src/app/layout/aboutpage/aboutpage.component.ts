import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import 'datatables.net';
declare var jQuery: any;

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss']
})
export class AboutpageComponent implements OnInit {
  rForm: FormGroup;
  eForm: FormGroup;
  res: any;
  data: any;
  data1: any;
  id: any;
  idd: any;
  mytable: any;
  _id: any;
  dataaa: any;
  api_image: any;
  publish: boolean = true;
  saved: boolean = false;
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortOrder = "asc";
  img: boolean = true;
  img_valid: boolean = true;
  add_new: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';
  loaded: boolean = false;

  browse: boolean = false;
  arryData = [];



  imageUrl: any
  image: boolean = false;

  @ViewChild('fileupload')
  myInputVariable: any;

  constructor(
    private router: Router,
    public authService: AuthServiceService,
     private toastr: ToastrService,
    public fb: FormBuilder) {

    this.rForm = this.fb.group({
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'about_cover_image': null
    });
    this.eForm = this.fb.group({
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'about_cover_image': null
    });
  }





  ngAfterContentChecked() {
    $('#des').on('keypress', function (e) {
      if (e.which === 32 && !this.value.length)
        e.preventDefault();
    });
    $('#name').on('keypress', function (e) {
      if (e.which === 32 && !this.value.length)
        e.preventDefault();
    });
  }
  SavedList() {
    this.mytable.destroy();
    setTimeout(() => {
      this.mytable = $('table.display').DataTable({
        'bPaginate': true,
        'bLengthChange': true,
        // "pageLength": 7,
        'bFilter': true,
        'bInfo': false,
        'bAutoWidth': true,
        //"ordering": false
      })

    }, 500);
    this.saved = true;
    this.publish = false;
  }

  PublishList() {
    this.mytable.destroy();
    setTimeout(() => {
      this.mytable = $('table.display').DataTable({
        'bPaginate': true,
        'bLengthChange': true,
        // "pageLength": 7,
        'bFilter': true,
        'bInfo': false,
        'bAutoWidth': true,
        //"ordering": false
      })

    }, 500);
    this.saved = false;
    this.publish = true;
  }
  publishModal(id) {
    jQuery('#publish').modal('show');
    this.idd = id;
  }

  ngOnInit() {
    setTimeout(() => {
      this.mytable = $('table.display').DataTable({
        'bPaginate': true,
        'bLengthChange': true,
        // "pageLength": 7,
        'bFilter': true,
        'bInfo': false,
        'bAutoWidth': true,
        //"ordering": false
      })

    }, 500);
    this.GetAbout();
    this.GetDraft();
  }

  showAdd() {
    this.add_new = true;
  }
  cancel() {
    this.add_new = false;
  }
  RemoveClick(id) {
    // alert(id)
    jQuery('#request').modal('show');
    this._id = id;

  }

  /********************************** Get Draft betrotheds***************************************/

  GetDraft() {
    // alert("hiiii")
    this.authService.getDraftPages().then((result) => {
      console.log('Saveddddd', result);
      this.res = result;
      if (this.res.status == true) {
        this.dataaa = this.res.data;
      }
      else {
        console.log('erorr')
      }

    }, (err) => {
      console.log(err);
    });
  }

  /**********************************Publish Drafts***************************************/

  PublishDraftss() {
    let params = {
      'type': 'AP',
      'id': this.idd
    };

    this.authService.publishDrafts(params).then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {
        this.GetDraft();
        jQuery('#publish').modal('hide');
        this.mytable.destroy();
        setTimeout(() => {
          this.mytable = $('table.display').DataTable({
            'bPaginate': true,
            'bLengthChange': true,
            // "pageLength": 7,
            'bFilter': true,
            'bInfo': false,
            'bAutoWidth': true,
            //"ordering": false
          })

        }, 500);
      }
      else {
        console.log('fasleeee')
      }

    }, (err) => {
      console.log(err);
    });


  }

  /**********************************Remove Groups***************************************/

  RemoveComm() {
    // alert("hiiii")
    let parms = {
      'id': this._id,
      'type': 'AP'
    }
    this.authService.removeAbout(parms).then((result) => {
      console.log(result);

      this.res = result;
      if (this.res.status == true) {
        jQuery('#request').modal('hide');
        this.GetAbout();
        this.mytable.destroy();
        setTimeout(() => {
          this.mytable = $('table.display').DataTable({
            'bPaginate': true,
            'bLengthChange': true,
            // "pageLength": 7,
            'bFilter': true,
            'bInfo': false,
            'bAutoWidth': true,
            //"ordering": false
          })

        }, 500);
        // this.data=this.res.data;
        console.log(this.data);
      }
      else {
        console.log('erorr')
      }

    }, (err) => {
      console.log(err);
    });
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

    jQuery('#gallerymodal').modal({ backdrop: 'static', keyboard: false })
    jQuery('#gallerymodal').modal('show');
    this.getlibrary();
  }

  checkings() {
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
        console.log('erorr')
      }

    }, (err) => {
      console.log(err);
    });
  }

  clearr() {
    this.rForm.reset({
      'title': '',
      'description': '',
      'about_cover_image': ''
    });
    this.myInputVariable.nativeElement.value = '';
  }


  /**********************************Edit About Page***************************************/

  EditAbout(val, value) {
    console.log(val)
    console.log(this.eForm.get('about_cover_image').value)

    if (!this.img) {
      this.img_valid = true;
    }
    else {
      let data = new FormData();
      data.append('title', this.eForm.get('title').value);
      data.append('about_page_id', this.id);
      data.append('description', this.eForm.get('description').value);
      data.append('about_cover_image', this.eForm.get('about_cover_image').value);

      console.log(data);
      this.authService.editAbout(data).then((result) => {
        console.log(result);
        this.res = result;
        if (this.res.status == true) {
          jQuery('#edit').modal('hide');
          // this.clearr();
            this.presentToast(this.res.message)
         // alert(this.res.message)
          this.GetAbout();
          // this.router.navigateByUrl('/groups');
        }
        else {
          // this.toastr.error(this.res.message);
        }

      }, (err) => {
        console.log(err);
      });
    }



  }


  /**********************************Add About Page***************************************/

  AddAbout(val, value, sta) {
    console.log(sta)
    console.log(value)
    if (val) {
      if (!this.imageUrl) {
        this.img_valid = false;
      }
      else if (!this.img) {
        this.img_valid = true;
      }
      else {
        let data = new FormData();
        data.append('title', this.rForm.get('title').value);
        data.append('status', sta);
        data.append('description', this.rForm.get('description').value);
        data.append('about_cover_image', this.imageUrl);

        console.log(data);
        this.authService.addAbout(data).then((result) => {
          console.log(result);
          this.res = result;
          if (this.res.status == true) {
            this.add_new = false;
            this.clearr();
            this.GetDraft();
            alert('Page Added Successfully')
            this.mytable.destroy();
            setTimeout(() => {
              this.mytable = $('table.display').DataTable({
                'bPaginate': true,
                'bLengthChange': true,
                // "pageLength": 7,
                'bFilter': true,
                'bInfo': false,
                'bAutoWidth': true,
                //"ordering": false
              })

            }, 500);
            this.GetAbout();
            // this.router.navigateByUrl('/groups');
          }
          else {
            // this.toastr.error(this.res.message);
          }

        }, (err) => {
          console.log(err);
        });
      }
    }
    else {
      alert('Fill required fields!!!!')
    }

  }

  // edit(id){
  //     jQuery("#edit").modal("show");
  //     console.log(id)
  //     this.id=id;

  //    }
  /**********************************Get About Page Detail***************************************/

  GetAboutDetail(id) {
    jQuery('#edit').modal('show');
    console.log(id)
    this.id = id;
    // alert("hiiii")
    this.authService.getAboutDetail(this.id).then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {
        this.data1 = this.res.data;
        this.eForm.get('title').setValue(this.data1.title);
        this.eForm.get('description').setValue(this.data1.description);
        this.api_image = this.data1.about_cover_image;
        console.log(this.data1);
      }
      else {
        console.log('erorr')
      }

    }, (err) => {
      console.log(err);
    });
  }

  /**********************************Get About Pages***************************************/

  GetAbout() {
    // alert("hiiii")
    this.authService.getAbout().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {
        this.data = this.res.data;
        console.log(this.data);
      }
      else {
        console.log('erorr')
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
