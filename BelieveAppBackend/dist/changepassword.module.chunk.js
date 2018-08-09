webpackJsonp(["changepassword.module"],{

/***/ "../../../../../src/app/layout/changepassword/changepassword-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword_component__ = __webpack_require__("../../../../../src/app/layout/changepassword/changepassword.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__changepassword_component__["a" /* changePasswordComponent */]
    }
];
var ChangePasswordRoutingModule = (function () {
    function ChangePasswordRoutingModule() {
    }
    ChangePasswordRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ChangePasswordRoutingModule);
    return ChangePasswordRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/changepassword/changepassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n\n    <div class=\"tables_area\">\n        <h2>Change Password</h2>\n        <div class=\"white_box\">\n            <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"changePassword(myForm.valid)\">\n                <div class=\"add_formarea\">\n\n                    <div class=\"row\">\n                        <aside class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"text-uppercase\">Email*</label>\n                                <input type=\"text\" id=\"email\" value=\"\" [pattern]=\"emailValidate\" placeholder=\"Enter Email\" class=\"form-control\" formControlName=\"emailCheck\" [attr.maxlength]=\"50\"\n                                    required/>\n                                <!-- <span ng-show=\"myForm.submitted || myForm.group_name.touched\">\n                                <span ng-show=\"myForm.group_name.error.required\"><font class=\"error\">Current Password is required.</font></span>\n                            </span> -->\n                            </div>\n                            <div *ngIf=\"myForm.get('emailCheck').hasError('required') && myForm.get('emailCheck').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('emailCheck').hasError('required')  && myForm.get('emailCheck').touched \">\n                                    Email is required\n                                </div>\n                            </div>\n                            <div *ngIf=\"myForm.get('emailCheck').hasError('pattern') && myForm.get('emailCheck').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('emailCheck').hasError('pattern')  && myForm.get('emailCheck').touched \">\n                                    Invalid Email-Id\n                                </div>\n                            </div>\n                        </aside>\n\n                        <!-- <aside class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label class=\"text-uppercase\">Add admin</label>\n                            <input type=\"text\" value=\"\" placeholder=\"Select Admin\" class=\"form-control\" />\n                            <p class=\"add_user text-right\">\n                                <a data-toggle=\"modal\" data-target=\"#addadmin\"><i class=\"fa fa-plus\"></i> Add Admins</a></p>\n                        </div>\n                    </aside> -->\n                    </div>\n                    <div class=\"row\">\n                        <aside class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"text-uppercase\">Current Password*</label>\n                                <input type=\"password\" id=\"current-password\" value=\"\" placeholder=\"Current Password\" class=\"form-control\" formControlName=\"currentpassword\" [attr.maxlength]=\"50\"\n                                required/>\n                            </div>\n                            <div *ngIf=\"myForm.get('currentpassword').hasError('required') && myForm.get('currentpassword').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('currentpassword').hasError('required')  && myForm.get('currentpassword').touched \">\n                                    Password is required\n                                </div>\n                            </div>\n                        </aside>\n                        </div>\n                        <div class=\"row\">\n                        <aside class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"text-uppercase\">New Password*</label>\n                                <input type=\"password\" id=\"password\" value=\"\" placeholder=\"New Password\" class=\"form-control\" formControlName=\"password\" [attr.maxlength]=\"50\" \n                                required/>\n                            </div>\n                            <div *ngIf=\"myForm.get('password').hasError('required') && myForm.get('password').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('password').hasError('required')  && myForm.get('password').touched \">\n                                    Password is required\n                                </div>\n                                \n                            </div>\n                            <div class=\"error\" *ngIf=\"myForm.get('password').hasError('minlength') && myForm.get('password').touched\">\n                               Password must be at least 6 characters long.\n                              </div> \n                        </aside>\n                    </div>\n\n                    <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\">Update</button>\n                    <button class=\"blue_btn yellow_btn text-uppercase\" (click)=\"cancel()\">Cancel</button>\n\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n\n<style type=\"text/css\">\n    .error {\n        color: red;\n    }\n</style>\n\n\n\n<!-- http://plnkr.co/edit/ucKcXBA2zReWfBSQ8W7D?p=preview -->"

/***/ }),

/***/ "../../../../../src/app/layout/changepassword/changepassword.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\ntextarea.form-control {\n  resize: none;\n  height: 150px; }\n\n.add_formarea {\n  padding: 15px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.add_formarea label {\n  font-size: 14px;\n  color: #242424;\n  font-weight: 400;\n  letter-spacing: 1px;\n  display: block; }\n\n.add_formarea .form-control {\n  font-size: 16px;\n  color: #242424;\n  height: auto;\n  box-shadow: none;\n  padding: 8px 12px; }\n\n.login_form .form-group {\n  margin-top: 20px;\n  margin-bottom: 0; }\n\n.form-group h3 {\n  margin-top: 5px; }\n\n.top_form .form-control, .search_input .form-group .form-control {\n  height: auto;\n  padding: 8px 10px;\n  box-shadow: none; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.select_users label {\n  display: block;\n  padding: 5px; }\n\n.select_users label:nth-child(2n) {\n  background: #f5f5f5; }\n\n.select_users label img {\n  margin: 0 5px; }\n\n.modal-header .close {\n  margin: 0;\n  padding: 0; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.big_yellow1 {\n  font-size: 10px;\n  padding: 5px 20px;\n  margin-bottom: 20px; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/changepassword/changepassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var changePasswordComponent = (function () {
    function changePasswordComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.emailValidate = "^([a-zA-Z0-9]+@[a-zA-Z0-9].+)";
    }
    changePasswordComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            emailCheck: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            currentpassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            password: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].maxLength(50)])]
        });
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#email").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#current-password").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#password").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    };
    changePasswordComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/dashboard');
    };
    changePasswordComponent.prototype.changePassword = function (val) {
        var _this = this;
        console.log('Checkvalid', val);
        if (val) {
            console.log('form data', this.myForm.value);
            if (this.myForm.value.currentpassword == this.myForm.value.password) {
                alert("Current Password and New Password should not be same");
            }
            else {
                this.authService.doChangePassword(this.myForm.value).then(function (result) {
                    console.log(result);
                    _this.res = result;
                    if (_this.res.status == true) {
                        _this.router.navigateByUrl('/dashboard');
                        alert("Your password has been changed successfully");
                    }
                    else {
                        alert(_this.res.message);
                        console.log('invalid');
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            alert("Fill Required Fields");
        }
    };
    changePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__("../../../../../src/app/layout/changepassword/changepassword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/changepassword/changepassword.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], changePasswordComponent);
    return changePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/changepassword/changepassword.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function() { return ChangePasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword_routing_module__ = __webpack_require__("../../../../../src/app/layout/changepassword/changepassword-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__changepassword_component__ = __webpack_require__("../../../../../src/app/layout/changepassword/changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChangePasswordModule = (function () {
    function ChangePasswordModule() {
    }
    ChangePasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_2__changepassword_routing_module__["a" /* ChangePasswordRoutingModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__changepassword_component__["a" /* changePasswordComponent */]]
        })
    ], ChangePasswordModule);
    return ChangePasswordModule;
}());



/***/ })

});
//# sourceMappingURL=changepassword.module.chunk.js.map