webpackJsonp(["login.module"],{

/***/ "../../../../../src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]
    }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\">\n            <img src=\"assets/images/b.png\" width=\"150px\" class=\"user-avatar\" />\n            <h1>BelieveApp</h1>\n            <div>\n\n            <form  [formGroup]=\"rForm\" (ngSubmit)=\"login(rForm.value,rForm.valid)\">\n                <div class=\"form-content\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" formControlName=\"email\" class=\"form-control input-underline input-lg\"  placeholder=\"Email\">\n                    </div>\n\n                    <div *ngIf=\"rForm.get('email').hasError('required') && rForm.get('email').touched\">\n                        <div class=\"error\" *ngIf=\"rForm.get('email').hasError('required')  && rForm.get('email').touched \">\n                        Email is required\n                        </div>\n                        \n                    </div>\n                   <!--  <div class=\"error\" *ngIf=\"!alreadyemail\">\n                    Please check your email\n                 </div> -->\n                    \n\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control input-underline input-lg\"  placeholder=\"Password\" formControlName=\"password\">\n                    </div>\n                    <div *ngIf=\"rForm.get('password').hasError('required') && rForm.get('password').touched\">\n                        <div class=\"error\" *ngIf=\"rForm.get('password').hasError('required')  && rForm.get('password').touched \">\n                        password is required\n                        </div>\n                        \n                    </div>\n                   <!--  <div class=\"error\" *ngIf=\"!alreadypass\">\n                   Please check your password\n                    </div> -->\n                    \n                </div>\n               \n                 <button type=\"submit\" class=\"btn rounded-btn\">Login</button>\n              <!-- [routerLink]=\"['/dashboard']\"   <a class=\"btn rounded-btn\" [routerLink]=\"['/signup']\">Register</a> -->\n            </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- <ng-template #forminfo>\n  <div class=\"form-container\">\n    <div class=\"row columns\">\n        <h1>{{ name }}</h1>\n\n        <p>{{ description }}</p>\n    </div>\n  </div>\n</ng-template> -->\n\n<style type=\"text/css\">\n.error\n{\ncolor:red;\n}\n\n</style>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n  .login-page .col-lg-4 {\n    padding: 0; }\n  .login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n  .login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n  .login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n  .login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n  .login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n    .login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .login-page .form-group {\n    padding: 8px 0; }\n    .login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n  .login-page .form-content {\n    padding: 40px 0; }\n  .login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, authService, fb) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.alreadyemail = true;
        this.alreadypass = true;
        this.isValid = true;
        this.rForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* Validators */].required])]
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoggedin = function () {
        localStorage.setItem('isLoggedin', 'true');
    };
    LoginComponent.prototype.login = function (val, valid) {
        var _this = this;
        console.log("validdd", valid);
        console.log(val);
        this.isValid = valid;
        if (valid) {
            this.authService.Login(val).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status == true) {
                    _this.router.navigateByUrl('/dashboard');
                    // localStorage.setItem('isLoggedin', this.res.data);
                    localStorage.setItem('isLoggedin', JSON.stringify(_this.res.data));
                }
                else {
                    console.log("falseeeee");
                    if (_this.res.type == 'Email') {
                        console.log("emaillllllllllll");
                        _this.alreadyemail = false;
                        alert("Incorrect Email");
                    }
                    else if (_this.res.type == 'Password') {
                        console.log("passwordddd");
                        _this.alreadypass = false;
                        alert("Incorrect Password");
                    }
                    else {
                        console.log("otherrrrrrrrrrrrrrrrrrrrrrr");
                        // this.presentToast(this.data1.message);
                    }
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            alert("Fill Required Fields");
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_routing_module__ = __webpack_require__("../../../../../src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__login_routing_module__["a" /* LoginRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map