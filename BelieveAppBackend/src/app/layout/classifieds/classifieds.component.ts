import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';

declare var jQuery:any;

@Component({
  selector: 'app-classifieds',
  templateUrl: './classifieds.component.html',
  styleUrls: ['./classifieds.component.scss']
})
export class ClassifiedsComponent implements OnInit {
res:any;
data:any;
id:any;
_id:any;
idd:any;
add_new: boolean = false;
myForm: FormGroup;
eForm: FormGroup;

  constructor(
  	private fb: FormBuilder,
    public authService: AuthServiceService,
    private toastr: ToastrService) {
    this.myForm = this.fb.group({
         name: ['', Validators.required]
      });
    this.eForm = this.fb.group({
         name: ['', Validators.required]
      });
       
       }

       ngAfterContentChecked(){
    $("#name").on("keypress", function (e) {
      if (e.which === 32 && !this.value.length)
      e.preventDefault();
      });
 }

  ngOnInit() {

  	this.GetCategories();
  }
  showAdd(){
    this.add_new=true;
  }
  cancel(){
  	this.add_new=false;
  }

  clearForm() {

		this.myForm.reset({
		      'name': ''
		     });
		}
       RemoveClick(id){
      // alert(id)
      jQuery("#request").modal("show");
      this.idd=id;
  }

    editModal(name,id){
      console.log(name,id)
       this.eForm.get('name').setValue(name);
       this._id=id;
       jQuery("#edit").modal("show");
    }

/**********************************Edit Classified Category***************************************/
   
    EditCategory(val,value) {
      console.log(value)
      // alert("hiiii")
     if(val){
      let params=
      {
        'name':value.name,
        'id':this._id
      };
    this.authService.editClassifiedCat(params).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
      alert("Category Updated Successfully")
      jQuery("#edit").modal("hide");
      this.GetCategories();
      // this.clearr1();
      // this.add_new=false;
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
    }
    else{
      alert("Fill Required Fields")
    }
  }
  /**********************************Remove Groups***************************************/
   
    RemoveComm() {
      // alert("hiiii")
      let params={
        'type':'CA',
        'type_id':this.idd
      }
    this.authService.removeClassified(params).then((result) => {
    console.log(result);
     
    this.res=result;
    if(this.res.status==true){
       alert("Category Deleted Successfully")
   jQuery("#request").modal("hide");
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
       		'title':this.myForm.get('name').value
       	}
       
        this.authService.addClassCategory(params).then((result) => {
        console.log(result);
        this.res=result;
        if(this.res.status==true){
          this.presentToast('Category Added Successfully') 
         // alert("Category Added Successfully")
        	this.GetCategories();
          this.add_new=false;
          // // console.log(this.myForm.value);
          this.clearForm();
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
