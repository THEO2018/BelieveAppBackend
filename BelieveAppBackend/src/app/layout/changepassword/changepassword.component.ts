import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import * as $ from 'jquery';
@Component({
    selector: 'app-changepassword',
    templateUrl: './changepassword.component.html',
    styleUrls: ['./changepassword.component.scss']
})
export class changePasswordComponent implements OnInit {
    res: any;
    myForm: FormGroup;
    constructor(private fb: FormBuilder,
        private authService: AuthServiceService,
        private router: Router) { }
    emailValidate = "^([a-zA-Z0-9]+@[a-zA-Z0-9].+)"
    ngOnInit() {
        this.myForm = this.fb.group({
            emailCheck: ['', Validators.required],
            currentpassword: ['', Validators.required],
             password: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)])]
        });


        $("#email").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

        $("#current-password").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        $("#password").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });

    }

    cancel(){
    this.router.navigateByUrl('/dashboard');
    }

    changePassword(val) {
        console.log('Checkvalid', val);
        if (val) {
            console.log('form data', this.myForm.value);
            if(this.myForm.value.currentpassword==this.myForm.value.password){
                alert("Current Password and New Password should not be same")
            }
            else{
            this.authService.doChangePassword(this.myForm.value).then((result) => {
              console.log(result);
              this.res = result;
              if (this.res.status == true) {
                this.router.navigateByUrl('/dashboard');
                alert("Your password has been changed successfully");
              }
              else {
                alert(this.res.message)
               console.log('invalid');
              }

            }, (err) => {
              console.log(err);
            });
}
        } else {
            alert("Fill Required Fields")
        }

    }


}
