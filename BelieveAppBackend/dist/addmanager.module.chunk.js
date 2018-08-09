webpackJsonp(["addmanager.module"],{

/***/ "../../../../../src/app/layout/addmanager/addmanager-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddManagerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addmanager_component__ = __webpack_require__("../../../../../src/app/layout/addmanager/addmanager.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__addmanager_component__["a" /* AddManagerComponent */]
    }
];
var AddManagerRoutingModule = (function () {
    function AddManagerRoutingModule() {
    }
    AddManagerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AddManagerRoutingModule);
    return AddManagerRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/addmanager/addmanager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n\n    <div class=\"tables_area\">\n        <h2>Add Manager</h2>\n        <div class=\"white_box\">\n            <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"addManager(myForm.valid)\">\n                <div class=\"add_formarea\">\n\n                    <div class=\"row\">\n                        <aside class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"text-uppercase\">Email*</label>\n                                <input type=\"email\" id=\"email\" value=\"\" [pattern]=\"emailValidate\" placeholder=\"Enter Email\" class=\"form-control\" formControlName=\"emailCheck\"\n                                    [attr.maxlength]=\"50\" required/>\n                                <!-- <span ng-show=\"myForm.submitted || myForm.group_name.touched\">\n                                    <span ng-show=\"myForm.group_name.error.required\"><font class=\"error\">Current Password is required.</font></span>\n                                </span> -->\n                            </div>\n                            <div *ngIf=\"myForm.get('emailCheck').hasError('required') && myForm.get('emailCheck').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('emailCheck').hasError('required')  && myForm.get('emailCheck').touched \">\n                                    Email is required\n                                </div>\n                            </div>\n                            <div *ngIf=\"myForm.get('emailCheck').hasError('pattern') && myForm.get('emailCheck').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('emailCheck').hasError('pattern')  && myForm.get('emailCheck').touched \">\n                                    Invalid Email-Id\n                                </div>\n                            </div>\n                        </aside>\n                    </div>\n                    <div class=\"row\">\n                        <aside class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"text-uppercase\">Name*</label>\n                                <input type=\"text\" id=\"name\" value=\"\" placeholder=\"Enter Name\" class=\"form-control\" formControlName=\"adminname\" [attr.maxlength]=\"50\"\n                                    required/>\n                            </div>\n                            <div *ngIf=\"myForm.get('adminname').hasError('required') && myForm.get('adminname').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('adminname').hasError('required')  && myForm.get('adminname').touched \">\n                                    Name is required\n                                </div>\n                            </div>\n                        </aside>\n                    </div>\n                    <div class=\"row\">\n                        <aside class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"text-uppercase\">Phone*</label>\n                                <input type=\"tel\" id=\"phonee\" value=\"\" placeholder=\"Enter Phone\" class=\"form-control\" formControlName=\"adminphone\" [attr.maxlength]=\"50\"\n                                    required/>\n                            </div>\n                            <div *ngIf=\"myForm.get('adminphone').hasError('required') && myForm.get('adminphone').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('adminphone').hasError('required')  && myForm.get('adminphone').touched \">\n                                    Phone is required\n                                </div>\n                            </div>\n                        </aside>\n                    </div>\n                    <div class=\"row\">\n                        <aside class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"text-uppercase\">Password*</label>\n                                <input type=\"password\" id=\"password\" value=\"\" placeholder=\"Enter Password\" class=\"form-control\" formControlName=\"password\"\n                                    [attr.maxlength]=\"50\" required/>\n                            </div>\n                            <div *ngIf=\"myForm.get('password').hasError('required') && myForm.get('password').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('password').hasError('required')  && myForm.get('password').touched \">\n                                    Password is required\n                                </div>\n                            </div>\n                        </aside>\n                    </div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n                                    <label class=\"text-uppercase\">Add Permissions*</label>\n                                    <div class=\"select_users\">\n                                        <label *ngFor=\"let test of permissionArray1\">\n                                        {{test}} <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\"></span></button></label>\n                                      </div>\n\t\t\t\t\t\t\t\t\t<p class=\"add_user\">\n\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#addadmin\"><i class=\"fa fa-plus\"></i>Add Permissions</a>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- <div class=\"error\" *ngIf=\"!user_valid\" >\n\t\t\t\t\t\t\t\t <div class=\"error\" [hidden]=\"user_valid\"> \n\t\t\t\t\t\t       Add Users is required \n\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t  </div> -->\n\t\t\t\t\t\t  \n\t\t\t\t\t\t\t</aside>\t\t\n                        </div>\n                        <div class=\"modal fade\" id=\"addadmin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n                            <div class=\"modal-dialog\" role=\"document\">\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                                  <h4 class=\"modal-title\" id=\"myModalLabel\">Select</h4>\n                                </div>\n                           \n                                <div class=\"modal-body select_users\" style=\"max-height: 500px;\n                              overflow: auto;\">\n                                  <label *ngFor=\"let test of this.res\"><input type=\"checkbox\"\n                                            name=\"data\" value=\"test\" (change)=\"getuserVal(test._id,test.name,  $event.target.checked)\"> {{test.name}}</label>\n                                </div>\n                          \n                                 <div class=\"modal-footer\">\n                                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button>\n                                </div>\n                          \n                               \n                              </div>\n                            </div>\n                          </div>\n                    <div class=\"row\">\n                        <aside class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"text-uppercase\">Select Status*</label>\n                                <div class=\"custom_select\">\n                                    <select formControlName=\"status\">\n                                        <option value=\"\" [disabled]=\"true\" [selected]=\"true\">Select</option>\n                                        <option Value=\"A\">Enable</option>\n                                        <option Value=\"D\">Disable</option>\n                                        <!-- <option value=\"C\">Closed</option> -->\n                                    </select>\n                                </div>\n                            </div>\n                        </aside>\n                    </div>\n\n\n                    <button type=\"submit\" class=\"blue_btn yellow_btn big_yellow text-uppercase\">Save</button>\n                    <button class=\"blue_btn yellow_btn big_yellow text-uppercase\" (click)=\"CAncel()\">Cancel</button>\n\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n\n<style type=\"text/css\">\n    .error {\n        color: red;\n    }\n</style>\n\n\n\n<!-- http://plnkr.co/edit/ucKcXBA2zReWfBSQ8W7D?p=preview -->"

/***/ }),

/***/ "../../../../../src/app/layout/addmanager/addmanager.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\ntextarea.form-control {\n  resize: none;\n  height: 150px; }\n\n.add_formarea {\n  padding: 15px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.add_formarea label {\n  font-size: 14px;\n  color: #242424;\n  font-weight: 400;\n  letter-spacing: 1px;\n  display: block; }\n\n.add_formarea .form-control {\n  font-size: 16px;\n  color: #242424;\n  height: auto;\n  box-shadow: none;\n  padding: 8px 12px; }\n\n.login_form .form-group {\n  margin-top: 20px;\n  margin-bottom: 0; }\n\n.form-group h3 {\n  margin-top: 5px; }\n\n.top_form .form-control, .search_input .form-group .form-control {\n  height: auto;\n  padding: 8px 10px;\n  box-shadow: none; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.select_users input {\n  width: 18px;\n  height: 18px;\n  vertical-align: middle; }\n\n.select_users label {\n  display: block;\n  padding: 5px;\n  font-size: 16px; }\n\n.select_users label:nth-child(2n) {\n  background: #f5f5f5; }\n\n.select_users label img {\n  margin: 0 5px; }\n\n.modal-header .close {\n  margin: 0;\n  padding: 0; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.big_yellow1 {\n  font-size: 10px;\n  padding: 5px 20px;\n  margin-bottom: 20px; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\ntextarea.form-control {\n  resize: none;\n  height: 150px; }\n\n.add_formarea {\n  padding: 15px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.add_formarea label {\n  font-size: 14px;\n  color: #242424;\n  font-weight: 400;\n  letter-spacing: 1px;\n  display: block; }\n\n.add_formarea .form-control {\n  font-size: 16px;\n  color: #242424;\n  height: auto;\n  box-shadow: none;\n  padding: 8px 12px; }\n\n.login_form .form-group {\n  margin-top: 20px;\n  margin-bottom: 0; }\n\n.form-group h3 {\n  margin-top: 5px; }\n\n.top_form .form-control, .search_input .form-group .form-control {\n  height: auto;\n  padding: 8px 10px;\n  box-shadow: none; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.select_users label {\n  display: block;\n  padding: 5px; }\n\n.select_users label:nth-child(2n) {\n  background: #f5f5f5; }\n\n.select_users label img {\n  margin: 0 5px; }\n\n.modal-header .close {\n  margin: 0;\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/addmanager/addmanager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddManagerComponent; });
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





var AddManagerComponent = (function () {
    function AddManagerComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.nameary = [];
        this.user_valid = true;
        this.emailValidate = "^([a-zA-Z0-9]+@[a-zA-Z0-9].+)";
    }
    AddManagerComponent.prototype.ngOnInit = function () {
        this.getPermissions();
        // console.log('userdata', JSON.parse(localStorage.getItem('isLoggedin')).data._id);
        this.myForm = this.fb.group({
            useremail: this.fb.array([]),
            useremail1: this.fb.array([]),
            emailCheck: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            adminname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            adminphone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            status: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required]
        });
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#email").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#name").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#phonee").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#password").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    };
    AddManagerComponent.prototype.getPermissions = function () {
        var _this = this;
        console.log('permission');
        this.authService.getPermission().then(function (result) {
            console.log(result);
            _this.res = JSON.parse(JSON.stringify(result)).data;
            console.log('permissions', _this.res);
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************get permissions modal***************************************/
    AddManagerComponent.prototype.getuserVal = function (email, name, isChecked) {
        var emailFormArray = this.myForm.controls.useremail;
        var emailFormArray1 = this.myForm.controls.useremail1;
        // console.log(email,isChecked);
        if (isChecked) {
            this.user_valid = true;
            console.log('id', email);
            console.log('Permission Name', name);
            emailFormArray.push(new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](email));
            emailFormArray1.push(new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](name));
            this.nameary.push(name);
            this.permissionArray = emailFormArray.value;
            this.permissionArray1 = emailFormArray1.value;
            console.log("arrayyyy", this.permissionArray);
            this.finalArry = this.permissionArray.join();
            console.log('array', this.finalArry);
        }
        else {
            var index = emailFormArray.controls.findIndex(function (x) { return x.value == email; });
            var index1 = emailFormArray1.controls.findIndex(function (x) { return x.value == name; });
            emailFormArray.removeAt(index);
            emailFormArray1.removeAt(index1);
            this.permissionArray = emailFormArray.value;
            this.permissionArray1 = emailFormArray1.value;
            console.log("remove arrayyyy", this.permissionArray);
            this.finalArry = this.permissionArray.join();
            console.log('admin', this.finalArry);
        }
    };
    AddManagerComponent.prototype.CAncel = function () {
        this.router.navigateByUrl('/managers');
    };
    AddManagerComponent.prototype.addManager = function (val) {
        var _this = this;
        console.log('Checkvalid', localStorage.getItem('isLoggedin'));
        if (val) {
            var body = {
                email: this.myForm.value.emailCheck,
                phone: this.myForm.value.adminphone,
                password: this.myForm.value.password,
                name: this.myForm.value.adminname,
                status: this.myForm.value.status,
                permission: this.finalArry,
                admin_id: JSON.parse(localStorage.getItem('isLoggedin'))._id
            };
            console.log('bodyyy', body);
            this.authService.addAdminManager(body).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status == true) {
                    _this.router.navigateByUrl('/managers');
                }
                else {
                    console.log('invalid');
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            alert("Fill Required Fields");
            console.log('valid', val);
        }
    };
    AddManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addmanager',
            template: __webpack_require__("../../../../../src/app/layout/addmanager/addmanager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/addmanager/addmanager.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AddManagerComponent);
    return AddManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/addmanager/addmanager.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddManagerModule", function() { return AddManagerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addmanager_routing_module__ = __webpack_require__("../../../../../src/app/layout/addmanager/addmanager-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addmanager_component__ = __webpack_require__("../../../../../src/app/layout/addmanager/addmanager.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AddManagerModule = (function () {
    function AddManagerModule() {
    }
    AddManagerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__addmanager_routing_module__["a" /* AddManagerRoutingModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__addmanager_component__["a" /* AddManagerComponent */]]
        })
    ], AddManagerModule);
    return AddManagerModule;
}());



/***/ })

});
//# sourceMappingURL=addmanager.module.chunk.js.map