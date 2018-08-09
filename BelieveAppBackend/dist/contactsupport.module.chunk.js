webpackJsonp(["contactsupport.module"],{

/***/ "../../../../../src/app/layout/contactsupport/contactsupport-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsupportRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactsupport_component__ = __webpack_require__("../../../../../src/app/layout/contactsupport/contactsupport.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__contactsupport_component__["a" /* ContactsupportComponent */]
    }
];
var ContactsupportRoutingModule = (function () {
    function ContactsupportRoutingModule() {
    }
    ContactsupportRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ContactsupportRoutingModule);
    return ContactsupportRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/contactsupport/contactsupport.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<div class=\"content_area\">\n\t\t\t\n\t\t\t<div class=\"tables_area\">\n\t\t\t\t<h2>Contact support</h2>\n\t\t\t\t\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t<div class=\"white_box\">\n\t\t\t\t\t<form [formGroup]=\"newEvent\" novalidate (ngSubmit)=\"SendContactRequest(newEvent.valid)\">\n\t\t\t\t\t<div class=\"add_formarea\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Title*</label>\n\t\t\t\t\t\t\t\t\t<input id=\"name\" type=\"text\" value=\"\" placeholder=\"Enter Title Here\" class=\"form-control\" formControlName=\"title\" [attr.maxlength]=\"50\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"newEvent.get('title').hasError('required') && newEvent.get('title').touched\">\n\t\t\t                        <div class=\"error\" *ngIf=\"newEvent.get('title').hasError('required')  && newEvent.get('title').touched \">\n\t\t\t                        Title is required\n\t\t\t                        </div> \n\t\t                    \t</div>\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Select Category of the issue*</label>\n\t\t\t\t\t\t\t\t\t<div class=\"custom_select\">\n\t\t\t\t\t\t\t\t\t<select formControlName=\"issue_category\">\n\t\t\t\t\t\t\t\t\t\t<option value=null disabled selected hidden >Select Category</option>\n\t\t\t\t\t\t\t\t\t\t<!-- <option value=\"\" [disabled]=\"true\" [selected]=\"true\">Select</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"{{grouplist.name}}\" \n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let grouplist of cat_data\">{{grouplist.name}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"newEvent.get('issue_category').hasError('required') && newEvent.get('issue_category').touched\">\n\t\t\t                        <div class=\"error\" *ngIf=\"newEvent.get('issue_category').hasError('required')  && newEvent.get('issue_category').touched \">\n\t\t\t                        Category is required\n\t\t\t                        </div> \n\t\t                    \t</div>\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Description*</label>\n\t\t\t\t\t\t\t\t\t<textarea id=\"des\" value=\"\" placeholder=\"Enter Description\" class=\"form-control\" formControlName=\"description\" [attr.maxlength]=\"500\"></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"newEvent.get('description').hasError('required') && newEvent.get('description').touched\">\n\t\t\t                        <div class=\"error\" *ngIf=\"newEvent.get('description').hasError('required')  && newEvent.get('description').touched \">\n\t\t\t                        Description is required\n\t\t\t                        </div> \n\t\t                    \t</div>\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t\n\t\t\t\t<button type=\"submit\" class=\"blue_btn yellow_btn big_yellow text-uppercase\" >Submit</button>\n\t\t\t\n\t\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n<style type=\"text/css\">\n.error\n{\ncolor:red;\n}\n\n</style>\n\n\n<!-- http://plnkr.co/edit/ucKcXBA2zReWfBSQ8W7D?p=preview -->"

/***/ }),

/***/ "../../../../../src/app/layout/contactsupport/contactsupport.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.add_formarea {\n  padding: 15px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.add_formarea label {\n  font-size: 14px;\n  color: #242424;\n  font-weight: 400;\n  letter-spacing: 1px; }\n\n.add_formarea .form-control {\n  font-size: 16px;\n  color: #242424;\n  height: auto;\n  box-shadow: none;\n  padding: 8px 12px; }\n\n.login_form .form-group {\n  margin-top: 20px;\n  margin-bottom: 0; }\n\n.form-group h3 {\n  margin-top: 5px; }\n\n.top_form .form-control, .search_input .form-group .form-control {\n  height: auto;\n  padding: 8px 10px;\n  box-shadow: none; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 11px;\n  line-height: 40px;\n  background: #fff; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.select_users label {\n  display: block;\n  padding: 5px; }\n\n.select_users label:nth-child(2n) {\n  background: #f5f5f5; }\n\n.select_users label img {\n  margin: 0 5px; }\n\n.modal-header .close {\n  margin: 0;\n  padding: 0; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n/*.yellow_btn \n{\n\tfont-size: 16px;\n\tfont-weight: 700;\n\tbackground: #e96268;\n\tpadding: 6px 20px;\n}\n.yellow_btn:hover \n{\n\tbackground: #f269c9 ;\n}\n.big_yellow\n{\n\tfont-size: 18px;\n\tpadding: 10px 35px;\n\tmargin-bottom: 20px;\n}\n.big_yellow1\n{\n\tfont-size: 10px;\n\tpadding: 5px 20px;\n\tmargin-bottom: 20px;\n}*/\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n\n.icon_input {\n  position: relative; }\n\n.icon_input i {\n  font-size: 20px;\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n\n.ui-datepicker.ui-widget {\n  background: #fff;\n  border: 1px solid #ddd;\n  min-width: 311px; }\n\n.ui-datepicker.ui-widget .ui-datepicker-header {\n  background: none;\n  border: none; }\n\n.ui-datepicker.ui-widget .ui-datepicker-prev .ui-icon, .ui-datepicker.ui-widget .ui-datepicker-next .ui-icon {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/left_arrow.png")) + ") no-repeat scroll center center;\n  cursor: pointer;\n  height: 35px;\n  left: 0;\n  margin: 0;\n  top: 0;\n  width: 35px; }\n\n.ui-datepicker.ui-widget .ui-datepicker-next .ui-icon {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/right_arrow.png")) + ") no-repeat scroll center center; }\n\n.ui-datepicker-title {\n  color: #000; }\n\n.ui-datepicker.ui-widget a.ui-state-active {\n  background: #15a5fb;\n  color: #fff; }\n\n.ui-datepicker.ui-widget .ui-state-default, .ui-datepicker.ui-widget .ui-widget-content .ui-state-default, .ui-datepicker.ui-widget .ui-widget-header .ui-state-default {\n  color: #000;\n  padding: 0 10px;\n  text-align: center;\n  text-shadow: none; }\n\n.ui-datepicker .ui-datepicker-prev {\n  left: 2px !important;\n  top: 2px !important; }\n\n.ui-datepicker .ui-datepicker-next {\n  right: 2px !important;\n  top: 2px !important; }\n\n.bootstrap-timepicker-widget.dropdown-menu.open {\n  display: block;\n  padding: 5px; }\n\n.bootstrap-timepicker-widget {\n  text-align: center; }\n\n.bootstrap-timepicker-widget input {\n  border: 1px solid #ccc;\n  padding: 5px;\n  text-align: center;\n  border-radius: 5px;\n  width: 75px; }\n\n.bootstrap-timepicker-widget table td {\n  padding: 5px 10px; }\n\nlabel.radio_btn {\n  margin-right: 10px; }\n\nlabel.radio_btn input {\n  transform: scale(1.2);\n  -moz-transform: scale(1.2);\n  -webkit-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n  -o-transform: scale(1.2);\n  margin-right: 5px;\n  vertical-align: middle;\n  margin-top: -2px; }\n\n.owl-dt-calendar-table {\n  line-height: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/contactsupport/contactsupport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsupportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactsupportComponent = (function () {
    function ContactsupportComponent(formBuilder, router, authService, mapsAPILoader, ngZone) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.nameary = [];
        this.img = true;
        this.pricee = false;
        this.img_valid = true;
        this.price_status = true;
        this.grp_valid = true;
        this.browse = false;
        this.arryData = [];
        this.loaded = false;
        this.imageSrc = '';
        this.imageLoaded = false;
        this.image = false;
        this.Pricevalidate = "([0-9]{1})|([0-9]{2})";
        this.min = new Date(+new Date() - 1000 * 60 * 60 * 24);
        this.newEvent = this.formBuilder.group({
            title: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            issue_category: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            description: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
        });
    }
    ContactsupportComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#name").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#des").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#ven").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#cat").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        // this.users();
        this.categories();
    };
    /**********************************Get CATEGORIES***************************************/
    ContactsupportComponent.prototype.categories = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getIssueCategories().then(function (result) {
            console.log("categoriessss", result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.cat_data = _this.res.data;
                console.log(_this.cat_data);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    ContactsupportComponent.prototype.clearForm = function () {
        this.newEvent.reset({
            'title': '',
            'category': '',
            'description': ''
        });
    };
    /**********************************Add Category***************************************/
    ContactsupportComponent.prototype.SendContactRequest = function (val) {
        var _this = this;
        if (val) {
            var params = {
                'title': this.newEvent.get('title').value,
                'category': this.newEvent.get('issue_category').value,
                'Description': this.newEvent.get('description').value
            };
            console.log(params);
            this.authService.sendContactRequest(params).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status == true) {
                    alert("Mail has been sent to admin. Thanks to contact.");
                    _this.categories();
                    _this.clearForm();
                }
                else {
                    console.log("fasle");
                    // this.toastr.error(this.res.message);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            alert("please fill all required fields");
            console.log("invaliddd");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ContactsupportComponent.prototype, "searchElementRef", void 0);
    ContactsupportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contactsupport',
            template: __webpack_require__("../../../../../src/app/layout/contactsupport/contactsupport.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/contactsupport/contactsupport.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ContactsupportComponent);
    return ContactsupportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/contactsupport/contactsupport.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsupportModule", function() { return ContactsupportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contactsupport_routing_module__ = __webpack_require__("../../../../../src/app/layout/contactsupport/contactsupport-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactsupport_component__ = __webpack_require__("../../../../../src/app/layout/contactsupport/contactsupport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__("../../../../froala-editor/js/froala_editor.pkgd.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ContactsupportModule = (function () {
    function ContactsupportModule() {
    }
    ContactsupportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__contactsupport_routing_module__["a" /* ContactsupportRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["a" /* FroalaEditorModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["b" /* FroalaViewModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__contactsupport_component__["a" /* ContactsupportComponent */]]
        })
    ], ContactsupportModule);
    return ContactsupportModule;
}());



/***/ })

});
//# sourceMappingURL=contactsupport.module.chunk.js.map