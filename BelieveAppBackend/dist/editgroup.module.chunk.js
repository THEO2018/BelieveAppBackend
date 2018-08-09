webpackJsonp(["editgroup.module"],{

/***/ "../../../../../src/app/layout/editgroup/editgroup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGroupRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editgroup_component__ = __webpack_require__("../../../../../src/app/layout/editgroup/editgroup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__editgroup_component__["a" /* EditgroupComponent */]
    }
];
var EditGroupRoutingModule = (function () {
    function EditGroupRoutingModule() {
    }
    EditGroupRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], EditGroupRoutingModule);
    return EditGroupRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/editgroup/editgroup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n\n\t<div class=\"tables_area\">\n\t\t<h2>Edit Group</h2>\n\t\t<div class=\"white_box\">\n\t\t\t<form [formGroup]=\"myForm\" (ngSubmit)=\"EditGroup(myForm.valid)\">\n\t\t\t\t<div class=\"add_formarea\">\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Name</label>\n\t\t\t\t\t\t\t\t<input id=\"name\" type=\"text\" value=\"\" placeholder=\"Enter Name\" class=\"form-control\" formControlName=\"group_name\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"myForm.get('group_name').hasError('required') && myForm.get('group_name').touched\">\n\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"myForm.get('group_name').hasError('required')  \n\t\t\t                        && myForm.get('group_name').touched \">\n\t\t\t\t\t\t\t\t\tName is required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\n\t\t\t\t\t\t<!-- \t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Add admin</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" value=\"\" placeholder=\"Select Admin\" class=\"form-control\" />\n\t\t\t\t\t\t\t\t\t<p class=\"add_user text-right\">\n\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#addadmin\"><i class=\"fa fa-plus\"></i> Add Admins</a></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</aside> -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Privacy</label>\n\t\t\t\t\t\t\t\t<div class=\"custom_select\">\n\t\t\t\t\t\t\t\t\t<select formControlName=\"privacy\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"O\">Open</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"C\">Closed</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"myForm.get('privacy').hasError('required') && myForm.get('privacy').touched\">\n\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"myForm.get('privacy').hasError('required')  && myForm.get('privacy').touched \">\n\t\t\t\t\t\t\t\t\tPrivacy is required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\n\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Front picture*</label>\n\t\t\t\t\t\t\t\t<p data-backdrop=\"static\" data-keyboard=\"false\" class=\"add_user\" (click)=\"openModal()\">\n\t\t\t\t\t\t\t\t\t<!-- <img *ngIf=\"!api_image && !imageSrc && !image\" src=\"../../assets/images/user.png\"  alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"/> -->\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"api_image && !imageSrc && !image\" src=\"{{api_image}}\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"browse\" [src]=\"imageSrc\" (load)=\"handleImageLoad()\" [class.loaded]=\"imageLoaded\" style=\"height:75px;width: 75px;border-radius: 100%;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"image\" src=\"{{this.imageUrl}}\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!img_valid\">\n\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"img_valid\">\n\t\t\t\t\t\t\t\t\tFront picture is required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!img\">\n\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"img\">\n\t\t\t\t\t\t\t\t\tOnly png/Jpeg Allowed\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Description</label>\n\t\t\t\t\t\t\t\t<textarea id=\"des\" value=\"\" placeholder=\"Enter Description\" class=\"form-control\" formControlName=\"description\" [attr.maxlength]=\"500\"></textarea>\n\t\t\t\t\t\t\t\t<!-- <input id=\"des\" type=\"text\" value=\"\" placeholder=\"Enter Description\" class=\"form-control\" formControlName=\"description\"/> -->\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</aside>\n\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Add Users</label>\n\n\t\t\t\t\t\t\t\t<div class=\"select_users\" *ngIf=\"intial\">\n\t\t\t\t\t\t\t\t\t<div *ngFor=\"let test of data\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"test.selected == true\">\n\t\t\t\t\t\t\t\t\t\t\t<label> <a [routerLink]=\"['/user', test._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\">{{test.full_name}}</a><a (click)=\"deleteUser(test,test._id)\"><i class=\"fa fa-close\"></i></a></label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"select_users\" *ngIf=\"formdata\">\n\t\t\t\t\t\t\t\t\t<div *ngFor=\"let test of data\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"test.selected == true\">\n\t\t\t\t\t\t\t\t\t\t\t<label> <a [routerLink]=\"['/user', test._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\">{{test.full_name}}</a><a (click)=\"deleteUser(test,test._id)\"><i class=\"fa fa-close\"></i></a></label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<p class=\"add_user\">\n\t\t\t\t\t\t\t\t\t<a data-backdrop=\"static\" data-keyboard=\"false\" (click)=\"groupModal()\"><i class=\"fa fa-plus\"></i>Add Users</a>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!user_valid\">\n\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"user_valid\">\n\t\t\t\t\t\t\t\t\tUsers are required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<!-- gallery modal -->\n\n\t\t\t\t\t<div class=\"modal fade\" id=\"gallerymodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t\t<div class=\"modal-body select_users\" style=\"height: 100%;\n\t\t\t\t\t\t\t\t\t\n\t\toverflow: auto;\">\n\t\t\t\t\t\t\t\t\t<mat-tab-group color=\"primary\">\n\t\t\t\t\t\t\t\t\t\t<mat-tab label=\"Upload files\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"table_box\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table_inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Browse your file here</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" #fileupload (change)=\"onFileChange($event)\" id=\"event_cover\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"bottom_box text-right\"><button class=\"blue_btn\" data-dismiss=\"modal\">OK</button></div>\n\t\t\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t\t\t<mat-tab label=\"Media library\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"gallery_images\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let image of arryData.libraryImages; let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uppre\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img_outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{image.image_name}}\" (click)=\"checking(i,image.image_name)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"bottom_box text-right\"><button class=\"blue_btn\" data-dismiss=\"modal\">OK</button></div>\n\t\t\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t\t</mat-tab-group>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- Modal -->\n\t\t\t\t\t<div class=\"modal fade\" id=\"addadmin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n\t\t\t\t\t\t\t\t\t<h4 class=\"modal-title\" id=\"myModalLabel\">Select Users</h4>\n\t\t\t\t\t\t\t\t</div>\n  <form [formGroup]=\"searchForm\">\n  <input type=\"text\" [(ngModel)]=\"term\"  class=\"form-control\"  placeholder=\"Search\" (click)=\"teamName(term)\" formControlName=\"search\">\n   </form>\n\t\t\t\t\t\t\t\t<div class=\"modal-body select_users\" style=\"max-height: 500px;\n    overflow: auto;\">\n\t\t\t\t\t\t\t\t\t<label *ngFor=\"let test of data| filter:term\"><input type=\"checkbox\"\n                  name=\"data\" value=\"test\" [checked]=\"test.selected == true\" (change)=\"getuserVal(test._id,test.full_name,  $event.target.checked)\"><img src=\"../../assets/images/logo.png\" alt=\"\" style=\"height:50px;width:50px;\"><a [routerLink]=\"['/user', test._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\" data-dismiss=\"modal\">{{test.full_name}} </a></label>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"cancelvalue()\">Cancel</button>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"okvalue()\">OK</button>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button type=\"submit\" class=\"blue_btn yellow_btn  text-uppercase\">Update</button>\n\t\t\t\t\t<button type=\"submit\" class=\"blue_btn yellow_btn  text-uppercase\" (click)=\"cancel()\">Cancel</button>\n\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n\n\n<style type=\"text/css\">\n\t.error {\n\t\tcolor: red;\n\t}\n</style>\n\n\n\n<!-- http://plnkr.co/edit/ucKcXBA2zReWfBSQ8W7D?p=preview -->"

/***/ }),

/***/ "../../../../../src/app/layout/editgroup/editgroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.add_formarea {\n  padding: 15px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.add_formarea label {\n  font-size: 14px;\n  color: #242424;\n  font-weight: 400;\n  letter-spacing: 1px;\n  display: block; }\n\n.add_formarea .form-control {\n  font-size: 16px;\n  color: #242424;\n  height: auto;\n  box-shadow: none;\n  padding: 8px 12px; }\n\n.login_form .form-group {\n  margin-top: 20px;\n  margin-bottom: 0; }\n\n.form-group h3 {\n  margin-top: 5px; }\n\n.top_form .form-control, .search_input .form-group .form-control {\n  height: auto;\n  padding: 8px 10px;\n  box-shadow: none; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.select_users label {\n  display: block;\n  padding: 5px; }\n\n.select_users label:nth-child(2n) {\n  background: #f5f5f5; }\n\n.select_users label img {\n  margin: 0 5px; }\n\n.modal-header .close {\n  margin: 0;\n  padding: 0; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.big_yellow1 {\n  font-size: 10px;\n  padding: 5px 20px;\n  margin-bottom: 20px; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/editgroup/editgroup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditgroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
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






var EditgroupComponent = (function () {
    function EditgroupComponent(route, authService, toastr, fb, router) {
        var _this = this;
        this.route = route;
        this.authService = authService;
        this.toastr = toastr;
        this.fb = fb;
        this.router = router;
        this.finalArry = [];
        this.nameary = [];
        this.img = true;
        this.user_valid = true;
        this.image_valid = false;
        this.loaded = false;
        this.imageLoaded = false;
        this.imageSrc = '';
        this.browse = false;
        this.image = false;
        this.img_valid = true;
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.group_id = params;
        });
        this.searchForm = this.fb.group({
            search: null
        });
        this.myForm = this.fb.group({
            useremail: this.fb.array([]),
            useremail1: this.fb.array([]),
            group_name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            group_image: null,
            description: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            privacy: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required]
        });
    }
    EditgroupComponent.prototype.ngOnInit = function () {
        this.detail();
        // this.users();
        this.getlibrary();
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#name").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#des").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    };
    EditgroupComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/groups');
    };
    EditgroupComponent.prototype.groupModal = function () {
        jQuery('#addadmin').modal({ backdrop: 'static', keyboard: false });
        jQuery("#addadmin").modal("show");
    };
    EditgroupComponent.prototype.teamName = function (val) {
        console.log(val);
        console.log(this.term);
    };
    EditgroupComponent.prototype.deleteUser = function (val, name) {
        console.log(name);
        this.finalArry = [];
        var emailFormArray = this.myForm.controls.useremail;
        var emailFormArray1 = this.myForm.controls.useremail1;
        for (var i in this.data) {
            if (this.data[i]._id == name) {
                this.data[i].selected = false;
                // this.finalArry.slice(i,1);
            }
            if (this.data[i].selected == true) {
                // this.user_valid=true;
                this.finalArry.push(this.data[i]._id);
            }
        }
        console.log(this.finalArry);
    };
    /**********************************get image***************************************/
    EditgroupComponent.prototype.onFileChange = function (event) {
        console.log(event);
        if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
            if (event.target.files.length > 0) {
                this.image = false;
                this.img = true;
                this.img_valid = true;
                var file = event.target.files[0];
                console.log(file);
                this.imageUrl = file;
                // this.myForm.get('group_image').setValue(file);
                var reader = new FileReader();
                reader.onload = this._handleReaderLoaded.bind(this);
                reader.readAsDataURL(file);
            }
        }
        else {
            this.img_valid = true;
            this.img = false;
        }
        //this.saveFiles(files);
    };
    EditgroupComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
    };
    EditgroupComponent.prototype._handleReaderLoaded = function (e) {
        this.browse = true;
        console.log('image', e);
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    EditgroupComponent.prototype.openModal = function () {
        jQuery('#gallerymodal').modal({ backdrop: 'static', keyboard: false });
        jQuery("#gallerymodal").modal("show");
        this.getlibrary();
    };
    EditgroupComponent.prototype.checking = function (index, url) {
        this.browse = false;
        this.image = true;
        this.img = true;
        this.img_valid = true;
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
        console.log('url', url);
        this.imageUrl = url;
    };
    // get media library/////
    EditgroupComponent.prototype.getlibrary = function () {
        var _this = this;
        console.log('manager lsit');
        this.authService.getLibrary().then(function (result) {
            console.log(result);
            _this.res = result;
            console.log('lasun', _this.res);
            if (_this.res.status == true) {
                _this.arryData = _this.res.data;
                console.log('arrrayy', _this.arryData);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditgroupComponent.prototype.okvalue = function () {
        console.log('finalconsole', this.data);
        for (var i in this.data) {
            if (this.data[i].selected == true) {
                this.user_valid = true;
                this.finalArry.push(this.data[i]._id);
            }
        }
        console.log('finaaaalllll', this.finalArry);
        this.userArray = this.finalArry;
    };
    EditgroupComponent.prototype.cancelvalue = function () {
        this.arry1 = '';
        this.arry = '';
    };
    EditgroupComponent.prototype.getuserVal = function (email, name, isChecked) {
        this.intial = false;
        this.formdata = true;
        var emailFormArray = this.myForm.controls.useremail;
        var emailFormArray1 = this.myForm.controls.useremail1;
        // console.log(email,isChecked);
        if (isChecked) {
            for (var i in this.data) {
                if (this.data[i]._id == email) {
                    this.data[i].selected = true;
                }
            }
            console.log('checked', this.data);
        }
        else {
            for (var i in this.data) {
                if (this.data[i]._id == email) {
                    this.data[i].selected = false;
                    // if(this.data[i].selected=false)
                }
            }
            console.log("unchecked", this.data);
        }
    };
    /**********************************EDIT GROUP***************************************/
    EditgroupComponent.prototype.EditGroup = function (val) {
        var _this = this;
        console.log("userssssss", this.userArray);
        console.log('imageUrl', this.api_users);
        if (this.userArray != undefined) {
            console.log("ubdefineddd");
            if (this.userArray.length == 0) {
                console.log("length");
                this.user_valid = false;
                console.log("emailll");
            }
            else {
                console.log("else");
                var data = new FormData();
                data.append('group_name', this.myForm.get('group_name').value);
                data.append('group_image', this.imageUrl);
                data.append('users', this.userArray);
                data.append('group_id', this.group_id.id);
                data.append('privacy', this.myForm.get('privacy').value);
                data.append('description', this.myForm.get('description').value);
                console.log(data);
                this.authService.editGroup(data).then(function (result) {
                    console.log(result);
                    _this.res = result;
                    if (_this.res.status == true) {
                        _this.router.navigateByUrl('/groups');
                    }
                    else {
                        alert(_this.res.message);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            console.log("else");
            var data = new FormData();
            data.append('group_name', this.myForm.get('group_name').value);
            data.append('group_image', this.imageUrl);
            data.append('users', this.userArray);
            data.append('group_id', this.group_id.id);
            data.append('privacy', this.myForm.get('privacy').value);
            data.append('description', this.myForm.get('description').value);
            console.log(data);
            this.authService.editGroup(data).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status == true) {
                    _this.presentToast('Group Updated Succefully');
                    _this.router.navigateByUrl('/groups');
                }
                else {
                    alert(_this.res.message);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    /**********************************Add DETAIL***************************************/
    EditgroupComponent.prototype.detail = function () {
        var _this = this;
        var params = {
            'id': this.group_id.id
        };
        this.authService.getGroupDetail(params).then(function (result) {
            //console.log(result);
            _this.res = result;
            _this.users();
            if (_this.res.status == true) {
                _this.data1 = _this.res.data;
                console.log('editGroupDetail', _this.data1);
                _this.myForm.get('group_name').setValue(_this.data1.group_name);
                _this.myForm.get('description').setValue(_this.data1.description);
                _this.myForm.get('privacy').setValue(_this.data1.privacy);
                // this.myForm.get('useremail').setValue(this.data1.users);
                // console.log(this.data1);
                _this.api_image = _this.data1.group_image;
                _this.api_users = _this.data1.users;
                console.log("this.api_users", _this.api_users);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get Users***************************************/
    EditgroupComponent.prototype.users = function () {
        var _this = this;
        this.intial = true;
        this.authService.getUsers().then(function (result) {
            // console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data = _this.res.data;
                console.log('api users', _this.api_users);
                console.log('all users', _this.data);
                for (var i in _this.api_users) {
                    for (var j in _this.data) {
                        if (_this.data[j]._id === _this.api_users[i]._id) {
                            _this.data[j].selected = true;
                        }
                    }
                }
                // console.log('selecteduserrrr', this.data[j]._id, 'usersss', this.api_users[i]._id);
                console.log('selecteduserrrr', _this.data);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /************************************Toast***************************/
    EditgroupComponent.prototype.presentToast = function (msg) {
        this.toastr.success(this.res.message, '', {
            timeOut: 3000,
            tapToDismiss: true
        });
    };
    EditgroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editgroup',
            template: __webpack_require__("../../../../../src/app/layout/editgroup/editgroup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/editgroup/editgroup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], EditgroupComponent);
    return EditgroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/editgroup/editgroup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGroupModule", function() { return EditGroupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editgroup_routing_module__ = __webpack_require__("../../../../../src/app/layout/editgroup/editgroup-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editgroup_component__ = __webpack_require__("../../../../../src/app/layout/editgroup/editgroup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';












var EditGroupModule = (function () {
    function EditGroupModule() {
    }
    EditGroupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__editgroup_routing_module__["a" /* EditGroupRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_mydatepicker__["MyDatePickerModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__editgroup_component__["a" /* EditgroupComponent */]]
        })
    ], EditGroupModule);
    return EditGroupModule;
}());



/***/ })

});
//# sourceMappingURL=editgroup.module.chunk.js.map