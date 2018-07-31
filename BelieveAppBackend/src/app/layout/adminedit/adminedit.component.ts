import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import * as $ from 'jquery';
@Component({
    selector: 'app-adminedit',
    templateUrl: './adminedit.component.html',
    styleUrls: ['./adminedit.component.scss']
})
export class AdminEditComponent implements OnInit {
    admin_id: any;

    formdata: boolean;
    intial: boolean;
    newdata: any;
    selectedpermission: any;
    managerlist: any;
    manager_id: any;
    myForm: FormGroup;
    finalArry = [];
    nameary = [];
    permissionArray: any;
    permissionArray1: any;
    res: any;
emailValidate = "^([a-zA-Z0-9]+@[a-zA-Z0-9].+)";
    user_valid: boolean = true;
    constructor(private fb: FormBuilder,
        private authService: AuthServiceService,
        private router: Router,
        private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.manager_id = params.id;
            console.log('managerid', this.manager_id);
        });

    }

    ngOnInit() {
        this.detail();
        this.myForm = this.fb.group({
            useremail: this.fb.array([]),
            useremail1: this.fb.array([]),
            emailCheck: ['', Validators.required],
            adminname: ['', Validators.required],
            adminphone: ['', Validators.required],
            status: ['', Validators.required]
        });
       
        $("#name").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        $("#phone").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        // this.admin_id = JSON.parse(localStorage.getItem('isLoggedin')).data._id;
        // console.log('adminid',this.admin_id);

    }
            CAncel(){
               this.router.navigateByUrl('/managers'); 
            }
     

    /**********************************Add DETAIL***************************************/

    detail() {
        let params = {
            admin_id: this.manager_id
        };
        console.log('id', params);

        this.authService.getManagerDetail(params).then((result) => {
            this.getPermissions();
            //console.log(result);
            this.res = result;
            console.log('detail', this.res);
            this.managerlist = this.res.data;
            console.log('managerlist', this.managerlist);
            this.selectedpermission = this.managerlist.permissions;
            console.log('selectedPermission', this.selectedpermission);
            if (this.res.status == true) {
                this.managerlist = this.res.data;
                console.log('managerlist', this.managerlist);
                // console.log('selectedPermission',this.managerlist.permissions);
                this.myForm.get('emailCheck').setValue(this.managerlist.email);
                this.myForm.get('adminname').setValue(this.managerlist.name);
                this.myForm.get('adminphone').setValue(this.managerlist.phone);
                this.myForm.get('status').setValue(this.managerlist.status);
                // this.myForm.get('adminphone').setValue(this.managerlist.password);
            }
            else {
                console.log("erorr")
            }

        }, (err) => {
            console.log(err);
        });
    }

    ////////////// get permission////////////
    getPermissions() {
        console.log('permission');
        this.authService.getPermission().then((result) => {
            console.log(result);
            this.res = JSON.parse(JSON.stringify(result)).data;
            this.newdata = this.res;
            console.log('fullpermsiion', this.newdata);
            console.log('selectedPermission', this.selectedpermission);
            for (var i in this.selectedpermission) {
                for (var j in this.newdata) {
                    if (this.newdata[j]._id === this.selectedpermission[i]) {
                        this.newdata[j].select = true;
                    }
                }
            }
            console.log('true status', this.newdata);
        }, (err) => {
            console.log(err);
        });
    }

    okValue(){
        for(var i in this.newdata){
            if(this.newdata[i].select == true){
                this.finalArry.push(this.newdata[i]._id)
            }
        }
        console.log('full data',this.finalArry);
    }
    
    getuserVal(email: string, name: string, isChecked: boolean) {
        const emailFormArray = <FormArray>this.myForm.controls.useremail;
        const emailFormArray1 = <FormArray>this.myForm.controls.useremail1;
        this.formdata = true;
        // console.log(email,isChecked);
        console.log('email', email);
        if (isChecked) {
            for (var i in this.newdata) {
                if (this.newdata[i]._id == email) {
                    this.newdata[i].select = true;
                }
            }
            console.log('checked', this.newdata);
            
        } else {
            for (var i in this.newdata) {
                if (this.newdata[i]._id == email) {
                    this.newdata[i].select = false;
                }
            }
            console.log("unchecked", this.newdata);
        }

    }

    EditManager(val) {
        if (val) {
            let body = {
                admin_id:this.manager_id,
                name: this.myForm.value.adminname,
                phone: this.myForm.value.adminphone,
                permissions: this.finalArry,
                status: this.myForm.value.status
            }
            console.log('bodyyy',body);
            this.authService.editManager(body).then((result) => {
                console.log(result);
                this.res = result;
                if (this.res.status == true) {
                    this.router.navigateByUrl('/managers');
                }
                else {
                    alert(this.res.message);
                    // this.toastr.error(this.res.message);
                }

            }, (err) => {
                console.log(err);
            });
        }
        else {
            console.log('invalid data');
        }



    }
}
