import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import * as $ from 'jquery';

declare var jQuery: any;

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  categoryId: any;
  categoryData: any;
  res: any;
  data: any;
  id: any;
  myForm: FormGroup;
  file: any;
  img_valid: boolean = true;
  add_new: boolean = false;
  category: FormGroup;
  @ViewChild('fileupload')
  myInputVariable: any;

  constructor(
    private fb: FormBuilder,
    public authService: AuthServiceService) {
    this.myForm = this.fb.group({
      gallary_title: ['', Validators.required],
      select_category: ['', Validators.required]
    });
    this.category = this.fb.group({
      category_name: ['', Validators.required]
    });
  }
  ngAfterContentChecked() {
    $("#name").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
        e.preventDefault();
    });
  }

  ngOnInit() {
    this.GetGalleries();
    this.GetMediaCategory();
  }

  showAdd() {
    console.log('show modal');
     this.add_new = true;
    //     alert('hit');category_modal
    //jQuery("#category_modal").modal("show");
    
    // $('#my-modal').on('hidden.bs.modal', function () {
    //   alert('hit');
    // });
  }
  closes() {
    console.log('modal close');
    jQuery("#category_modal").modal("hide");
    $('#category_modal').on('hidden', function () {
      alert('hit');
    });
  }
  clearForm() {

    this.myForm.reset({
      'gallary_title': ''
    });
  }

  RemoveClick(id) {
    // alert(id)
    jQuery("#request").modal("show");
    this.id = id;
  }


  showCategory() {
    jQuery("#show_categry").modal("show");
    // this.GetMediaCategory();
  }
  /**********************************Remove Groups***************************************/

  RemoveComm() {
    // alert("hiiii")
    let params = {
      'type': 'GA',
      'type_id': this.id
    }
    this.authService.removeMedia(params).then((result) => {
      console.log(result);

      this.res = result;
      if (this.res.status == true) {
        jQuery("#request").modal("hide");
        // this.users();
        this.GetGalleries();
        alert("Media Gallery deleted Successfully")
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



  /**********************************ADD GAllery***************************************/

  AddGallery(val) {
    console.log(val)
    if (val) {
      let params = {
        'title': this.myForm.get('gallary_title').value,
        'media_category': this.myForm.value.select_category
      }
      console.log('valueeeeeeeeeeeeeeeee', params);

      this.authService.addGallery(params).then((result) => {
        console.log(result);
        this.res = result;
        if (this.res.status == true) {
          this.GetGalleries();
          this.add_new = false;
          // // console.log(this.myForm.value);
          this.clearForm();
          // this.reset();
          alert("Media Gallery Created Successfully")
        }
        else {
          console.log("erorrr");
        }

      }, (err) => {
        console.log(err);
      });
    } else {
      this.validateAllFormFields(this.myForm);
    }

  }

  /**********************************Get Music Albums***************************************/

  GetGalleries() {
    // alert("hiiii")
    this.authService.getGalleries().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {
        this.data = this.res.data;
        // this.GetMediaCategory();        
        console.log(this.data);
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }




  // /**********************************Get CATEGORIES***************************************/

  // categories() {
  //   // alert("hiiii")
  //   this.authService.getBlogCategories().then((result) => {
  //     console.log("categoriessss", result);
  //     this.res = result;
  //     if (this.res.status == true) {
  //       this.data = this.res.data;
  //       console.log(this.data);
  //     }
  //     else {
  //       console.log("erorr")
  //     }

  //   }, (err) => {
  //     console.log(err);
  //   });
  // }










  /************************arvinder*********************** */


  /**********************************Add Category***************************************/

  AddCategory(val, value) {
    if (val) {
      let params = {
        'category_name': value.category_name
      }
      // console.log(params)
      this.authService.addMediaCategory(params).then((result) => {
        console.log(result);
        this.res = result;
        // console.log('resssssssssss',this.res);
        if (this.res.status == true) {
          this.GetGalleries();
           this.GetMediaCategory();
          jQuery("#category_modal").modal("hide");
          //  this.clearForm();
        }
        else {
          console.log("false");
          this.validateAllFormFields(this.category);
        }

      }, (err) => {
        console.log(err);
      });
    }
    else {
      console.log("invaliddd");

    }
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

  /**********************************Get Media Category***************************************/

  GetMediaCategory() {
    console.log('get media category');
    this.authService.getMediaCategory().then((result) => {
      console.log(result);
      this.res = result;
      if (this.res.status == true) {
        this.categoryData = this.res.data;
        console.log('mediaa categoryyyyyyyyyyy', this.categoryData);
      }
      else {
        console.log("erorr")
      }

    }, (err) => {
      console.log(err);
    });
  }

  /*****************************category delete******************** */

  removeCategory(id) {
    // jQuery("#category_remove").modal("show");
    this.categoryId = id;
    let params = {
      'category_id': this.categoryId
    }
    this.authService.removeMediaCategory(params).then((result) => {
      console.log(result);

      this.res = result;
      if (this.res.status == true) {
        this.GetMediaCategory();
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


  //     /**********************************Delete Category***************************************/

  // DeleteCategory() {
  //   // alert("hiiii")
  //   let params = {
  //     'category_id': this.categoryId
  //   }
  //   this.authService.removeMediaCategory(params).then((result) => {
  //     console.log(result);

  //     this.res = result;
  //     if (this.res.status == true) {
  //       this.GetMediaCategory();
  //       // jQuery("#request").modal("hide");
  //       // this.users();
  //       // this.GetGalleries();
  //       alert("Media Category deleted Successfully")
  //       // this.data=this.res.data;
  //       console.log(this.data);
  //     }
  //     else {
  //       console.log("erorr")
  //     }

  //   }, (err) => {
  //     console.log(err);
  //   });
  // }



}
