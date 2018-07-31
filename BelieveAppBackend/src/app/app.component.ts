import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor( public router: Router,) {
    }

    ngOnInit() {
    // alert("fisrst pagee")
    console.log("hhhsdsdjusdjsd")
    // let check=localStorage.getItem('isLoggedin');
    // console.log(check);
    // if(check){
    // this.router.navigateByUrl('/dashboard');
    // }
    // else{
    //   this.router.navigateByUrl('/login');
    // }
    }
}
