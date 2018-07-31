import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AuthServiceService } from '../../auth-service.service';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
declare var jQuery:any;

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()]
})
export class GridComponent implements OnInit {
    mytable:any;
    res:any;
    data:any;
    id:any;
    _id:any;
    validate:any;
    pen_data:any;
    user_id:any;
    // user_data:any;
     activePage: any;
  public user_data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortOrder = "asc";
    pending: boolean = true;
    report: boolean = false;
    users: boolean = false;
    myForm: FormGroup;
    constructor(
        public authService: AuthServiceService,
        private fb: FormBuilder) {}

    ngOnInit() {
  setTimeout(() => {
   this.mytable = $('table.display').DataTable({
    "bPaginate": true,
    "bLengthChange": true,
    // "pageLength": 7,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": true,
    //"ordering": false
    })
   
    },500);
        this.Status();
        this.PendingUsers();
        this.AllUsers();
        this.myForm = this.fb.group({
             status: null,
        });
    }
        Pending(){
       this.mytable.destroy();
      setTimeout(() => {
        this.mytable = $('table.display').DataTable({
        "bPaginate": true,
        "bLengthChange": true,
        // "pageLength": 7,
        "bFilter": true,
        "bInfo": false,
        "bAutoWidth": true,
        //"ordering": false
        })
       
        },500);
            this.pending=true;
            this.report=false;
            this.users=false;
        }

        Report(){
        this.mytable.destroy();
              setTimeout(() => {
                    this.mytable = $('table.display').DataTable({
                    "bPaginate": true,
                    "bLengthChange": true,
                    // "pageLength": 7,
                    "bFilter": true,
                    "bInfo": false,
                    "bAutoWidth": true,
                    //"ordering": false
                    })
   
       },500);
            this.pending=false;
            this.report=true;
            this.users=false;
        }
        Users(){
             this.mytable.destroy();
              setTimeout(() => {
                 this.mytable = $('table.display').DataTable({
                "bPaginate": true,
                "bLengthChange": true,
                // "pageLength": 7,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
                //"ordering": false
                })
               
                },500);
            this.pending=false;
            this.report=false;
            this.users=true;
        }

        RemoveClick(id){
            this.id=id;
            jQuery("#request").modal("show");
        }

        accept(id){
             jQuery("#accept").modal("show");
             this._id=id;
        }
        cancel(id){
             jQuery("#reject").modal("show");
             this._id=id;
        }

/**********************************Get Users***************************************/
   
    AllUsers() {
      // alert("hiiii")
    this.authService.getAlumni().then((result) => {
    console.log("users",result);
    this.res=result;
    if(this.res.status==true){
         this.user_data=this.res.data.alumnis;
          console.log('users data',this.data);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

/**********************************Accept/ Reject User***************************************/

        AcceptReject(val,value){
            console.log(val)
            console.log(value)
            if(val=='U'){
                this.user_id= this.id
            }
            else{
                this.user_id=this._id;
            }

          this.authService.acceptReject(val,this.user_id).then((result) => {
            console.log(result);
            this.res=result;
            if(this.res.status==true){
                this.PendingUsers();
                this.AllUsers();
                jQuery("#request").modal("hide");
                 jQuery("#accept").modal("hide");
                  jQuery("#reject").modal("hide");
            }
            else{
                console.log("erorr")
            }
             
            }, (err) => {
              console.log(err);
            });
        }


/**********************************Change Status***************************************/

        modo(val){
            console.log(val)
          this.authService.changeValidation(val).then((result) => {
            console.log(result);
            this.res=result;
            if(this.res.status==true){
                this.Status();
            }
            else{
                console.log("erorr")
            }
             
            }, (err) => {
              console.log(err);
            });
        }


/**********************************Get Pending Users***************************************/
    
    PendingUsers() 
    {
    this.authService.getPending().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
         this.pen_data=this.res.data;
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }


/**********************************Get Status***************************************/
    
    Status() 
    {
    this.authService.getValidation().then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
         this.data=this.res.data;
          this.validate=this.data.validation_status;
         console.log(this.validate);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

}
