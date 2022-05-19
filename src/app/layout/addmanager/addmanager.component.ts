import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import * as $ from 'jquery';
@Component({
    selector: 'app-addmanager',
    templateUrl: './addmanager.component.html',
    styleUrls: ['./addmanager.component.scss']
})
export class AddManagerComponent implements OnInit {
    finalArry: any;
    nameary = [];
    permissionArray: any;
    permissionArray1: any;
    res: any;
    myForm: FormGroup;
    user_valid: boolean = true;
    constructor(private fb: FormBuilder,
        private authService: AuthServiceService,
        private router: Router) {
    }

    emailValidate = "^([a-zA-Z0-9]+@[a-zA-Z0-9].+)"

    ngOnInit() {
        this.getPermissions();
        // console.log('userdata', JSON.parse(localStorage.getItem('isLoggedin')).data._id);

        this.myForm = this.fb.group({
            useremail: this.fb.array([]),
            useremail1: this.fb.array([]),
            emailCheck: ['', Validators.required],
            adminname: ['', Validators.required],
            adminphone: ['', Validators.required],
            password: ['', Validators.required],
            status: ['', Validators.required]
        });

        $("#email").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("#name").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        $("#phonee").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        $("#password").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

    }
    getPermissions() {
        console.log('permission');
        this.authService.getPermission().then((result) => {
            console.log(result);
            this.res = JSON.parse(JSON.stringify(result)).data;
            console.log('permissions', this.res);
        }, (err) => {
            console.log(err);
        });
    }

    /**********************************get permissions modal***************************************/


    getuserVal(email: string, name: string, isChecked: boolean) {
        const emailFormArray = <FormArray>this.myForm.controls.useremail;
        const emailFormArray1 = <FormArray>this.myForm.controls.useremail1;
        // console.log(email,isChecked);
        if (isChecked) {
            this.user_valid = true;
            console.log('id', email);
            console.log('Permission Name', name)
            emailFormArray.push(new FormControl(email));
            emailFormArray1.push(new FormControl(name));
            this.nameary.push(name);
            this.permissionArray = emailFormArray.value;
            this.permissionArray1 = emailFormArray1.value;
            console.log("arrayyyy", this.permissionArray);
            this.finalArry= this.permissionArray.join();
            console.log('array',this.finalArry);
        } else {
            let index = emailFormArray.controls.findIndex(x => x.value == email)
            let index1 = emailFormArray1.controls.findIndex(x => x.value == name)
            
            emailFormArray.removeAt(index);
            emailFormArray1.removeAt(index1);
            this.permissionArray = emailFormArray.value;
            this.permissionArray1 = emailFormArray1.value;
            console.log("remove arrayyyy", this.permissionArray);
            this.finalArry= this.permissionArray.join();
            console.log('admin',this.finalArry);
        }

    }
    CAncel(){
      this.router.navigateByUrl('/managers');  
    }

    addManager(val) {
        console.log('Checkvalid', localStorage.getItem('isLoggedin'));
        if (val) {
            let body = {
                email:this.myForm.value.emailCheck,
                phone:this.myForm.value.adminphone,
                password:this.myForm.value.password,
                name:this.myForm.value.adminname,
                status:this.myForm.value.status,
                permission:this.finalArry,
                admin_id:JSON.parse(localStorage.getItem('isLoggedin'))._id
            }
           console.log('bodyyy',body);
            this.authService.addAdminManager(body).then((result) => {
              console.log(result);
              this.res = result;
              if (this.res.status == true) {
                this.router.navigateByUrl('/managers');
              }
              else {
               console.log('invalid');
              }

            }, (err) => {
              console.log(err);
            });
        } else {
            alert("Fill Required Fields")
            console.log('valid', val);
        }
    }
}

