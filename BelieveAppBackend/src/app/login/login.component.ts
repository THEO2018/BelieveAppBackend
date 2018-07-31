import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthServiceService } from '../auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

      rForm: FormGroup;
      email:any;                     // A property for our submitted form
      password:any;
      res:any;
      alreadyemail: boolean = true;
      alreadypass: boolean = true;
      isValid: boolean = true;

 constructor(
        public router: Router,
    	  public authService: AuthServiceService,
        private fb: FormBuilder)
      {
       this.rForm = fb.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.compose([Validators.required])]
      });
    }

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    login(val,valid: boolean) {
        console.log("validdd",valid);
        console.log(val);
        this.isValid=valid;
        if(valid){
          this.authService.Login(val).then((result) => {
        console.log(result);
        this.res=result;
        if(this.res.status==true){
             this.router.navigateByUrl('/dashboard');
              // localStorage.setItem('isLoggedin', this.res.data);
            localStorage.setItem('isLoggedin', JSON.stringify(this.res.data));
        }
        else{
       console.log("falseeeee")
        if (this.res.type == 'Email')
          {
            console.log("emaillllllllllll");
            this.alreadyemail=false;
            alert("Incorrect Email");
          }
             else if (this.res.type == 'Password')
              {
                console.log("passwordddd");
            this.alreadypass =false;
            alert("Incorrect Password");
              }
          else{
            console.log("otherrrrrrrrrrrrrrrrrrrrrrr");
            // this.presentToast(this.data1.message);
              }
        }
         
        }, (err) => {
          console.log(err);
        });
        }
        // alert("hiiii")
        else
        {
          alert("Fill Required Fields")
       
    }
  }
}
