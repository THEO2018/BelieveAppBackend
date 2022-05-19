import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthServiceService } from '../../../auth-service.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    res:any;
    id:any;
    role:any;
    data:any;
    isActive: boolean = false;
    show: boolean = false;
    cont: boolean = false;
    reco: boolean = false;
    poll: boolean = false;
    appo: boolean = false;
    set: boolean = false;
    sup: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';

    constructor(private translate: TranslateService, public router: Router,public authService: AuthServiceService) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

   ngOnInit() 
    {
      // alert(this.showMenu)
     let check=localStorage.getItem('isLoggedin');
    console.log("checkkkkkkk" ,check)
     console.log("checkkkkkkk" ,JSON.parse(check))
     let data=JSON.parse(check);
     console.log("dataaaa",data._id)
     this.id=data._id;
     this.role=data.role;
     if(this.role==2)
     {
        alert("role 2")
      this.Permissions();  
     }
     else{
        this.cont=true;
        this.reco=true;
        this.poll=true;
        this.appo=true;
        this.set=true;
        this.sup=true;
     }
     
}
 /**********************************Get Permissions***************************************/
   
    Permissions() {

      // alert("hiiii")
    this.authService.getPermissions(this.id).then((result) => {
    console.log(result);
    this.res=result;
    if(this.res.status==true){
         this.data=this.res.data.permissions;
         if(this.role==2){
            // alert("in if")
            for(var i in this.data){
                // alert("in for")
                if(this.data[i].type=="CONT"){
                      // alert("in cont")
                    this.cont=true;
                }
                else if(this.data[i].type=="RECO"){
                  this.reco=true;
                }
                else if(this.data[i].type=="POLL"){
                  this.poll=true;  
                }
                else if(this.data[i].type=="APPO"){
                  this.appo=true;  
                }
                else if(this.data[i].type=="SETT"){
                  this.set=true;  
                }
                else if(this.data[i].type=="SUPP"){
                  this.sup=true;  
                }
            }
         }
         else{
            // this.tabs=true;
         }
         console.log(this.data);
    }
    else{
        console.log("erorr")
    }
     
    }, (err) => {
      console.log(err);
    });
  }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
