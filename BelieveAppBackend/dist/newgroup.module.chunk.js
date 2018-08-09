webpackJsonp(["newgroup.module"],{

/***/ "../../../../../src/app/layout/newgroup/newgroup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewGroupsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newgroup_component__ = __webpack_require__("../../../../../src/app/layout/newgroup/newgroup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__newgroup_component__["a" /* NewgroupComponent */]
    }
];
var NewGroupsModule = (function () {
    function NewGroupsModule() {
    }
    NewGroupsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], NewGroupsModule);
    return NewGroupsModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/newgroup/newgroup.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<div class=\"content_area\">\n\t\t\t\n\t\t\t<div class=\"tables_area\">\n\t\t\t\t<h2>New Group</h2>\n\t\t\t\t<div class=\"white_box\">\n\t\t\t\t\t <form  [formGroup]=\"myForm\" (ngSubmit)=\"AddGroup(myForm.valid)\">\n\t\t\t\t\t<div class=\"add_formarea\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Name*</label>\n\t\t\t\t\t\t\t\t\t<input id=\"name\" type=\"text\" value=\"\" placeholder=\"Enter Name\" class=\"form-control\" formControlName=\"group_name\" [attr.maxlength]=\"50\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t <div *ngIf=\"myForm.get('group_name').hasError('required') && myForm.get('group_name').touched\">\n\t\t\t                        <div class=\"error\" *ngIf=\"myForm.get('group_name').hasError('required')  && myForm.get('group_name').touched \">\n\t\t\t                        Name is required\n\t\t\t                        </div> \n\t\t\t                           </div> \n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Privacy*</label>\n\t\t\t\t\t\t\t\t\t<div class=\"custom_select\">\n\t\t\t\t\t\t\t\t\t\t<select formControlName=\"privacy\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" [disabled]=\"true\" [selected]=\"true\">Select</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"O\">Open</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"C\">Closed</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"myForm.get('privacy').hasError('required') && myForm.get('privacy').touched\">\n\t\t\t                        <div class=\"error\" *ngIf=\"myForm.get('privacy').hasError('required')  && myForm.get('privacy').touched \">\n\t\t\t                        Privacy is required\n\t\t\t                        </div> \n                    \t\t\t</div>\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Front picture*</label>\n\t\t\t\t\t\t\t\t\t<p class=\"add_user\">\n\t\t\t\t\t\t\t\t\t\t<a data-backdrop=\"static\" data-keyboard=\"false\" (click) = \"openModal()\">Browse</a>&nbsp;\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"browse\" [src]=\"imageSrc\" (load)=\"handleImageLoad()\" [class.loaded]=\"imageLoaded\" style=\"height:75px;width: 75px;border-radius: 100%;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"image\" src=\"{{this.imageUrl}}\"  style=\"height:75px;width: 75px;border-radius: 100%;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!img_valid\">\n\t\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"img_valid\">\n\t\t\t\t\t\t\t\t\t\tFront picture is required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!img\">\n\t\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"img\">\n\t\t\t\t\t\t\t\t\t\tOnly png/Jpeg Allowed\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</aside>\n\t                        \n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Description*</label>\n\t\t\t\t\t\t\t\t\t<textarea id=\"des\" value=\"\" placeholder=\"Enter Description\" class=\"form-control\" formControlName=\"description\" [attr.maxlength]=\"500\"></textarea>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div *ngIf=\"myForm.get('description').hasError('required') && myForm.get('description').touched\">\n\t                        <div class=\"error\" *ngIf=\"myForm.get('description').hasError('required')  \n\t                        && myForm.get('description').touched \">\n\t                        Description is required\n\t                        </div> \n                    \t</div>\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\n\t\t           <div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Add Users*</label>\n\t\t\t\t\t\t\t\t\t<div class=\"select_users\">\n\t\t\t\t\t\t        <label *ngFor=\"let test of arry1\">\n\t\t\t\t\t\t        <!-- \t<img src=\"../../assets/images/logo.png\" alt=\"\" style=\"height:50px;width:50px;\"> -->\n\t\t\t\t\t\t         <a [routerLink]=\"['/user', test.email]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\">{{test.name}}</a> <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\"></span></button><a (click)=\"deleteUser(test,test.name,test.email)\"><i class=\"fa fa-close\"></i></a></label>\n\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t\t\t<p class=\"add_user\">\n\t\t\t\t\t\t\t\t\t\t<a data-backdrop=\"static\" data-keyboard=\"false\" (click) = \"groupModal()\"><i class=\"fa fa-plus\"></i>Add Users</a>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!user_valid\" >\n\t\t\t\t\t\t\t\t <div class=\"error\" [hidden]=\"user_valid\"> \n\t\t\t\t\t\t        Users are required \n\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t\t</aside>\t\t\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<!-- gallery modal -->\n\t\t\t\t\t<div class=\"modal fade\" id=\"gallerymodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t\t<div class=\"modal-body select_users\" style=\"height: 100%;overflow: auto;\">\n\t\t\t\t\t\t\t\t\t<mat-tab-group color=\"primary\">\n\t\t\t\t\t\t\t\t\t\t<mat-tab  label=\"Upload files\"  >\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"table_box\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table_inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Browse your file here</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" #fileupload (change)=\"onFileChange($event)\" id=\"event_cover\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"bottom_box text-right\"><button class=\"blue_btn\" data-dismiss=\"modal\"\n\t\t\t\t>OK</button></div>\n\t\t\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t\t\t<mat-tab label=\"Media library\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"gallery_images\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li  *ngFor=\"let image of arryData.libraryImages; let i=index\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uppre\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img_outer\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{image.image_name}}\" (click)=\"checking(i,image.image_name)\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"bottom_box text-right\"><button class=\"blue_btn\" data-dismiss=\"modal\">OK</button></div>\n\t\t\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t\t</mat-tab-group>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!-- Modal -->\n<div class=\"modal fade\" id=\"addadmin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Select Users</h4>\n      </div>\n  <form [formGroup]=\"searchForm\">\n  <input type=\"text\" [(ngModel)]=\"term\"  class=\"form-control search_box\"  placeholder=\"Search\" (click)=\"teamName(term)\" formControlName=\"search\">\n   </form>\n      <div class=\"modal-body select_users\" style=\"max-height: 500px;\n    overflow: auto;\">\n        <label *ngFor=\"let test of data| filter:term\"><input type=\"checkbox\"\n                  name=\"data\" value=\"test\" (change)=\"getuserVal(test._id,test.full_name,  $event.target.checked)\"><img src=\"../../assets/images/logo.png\" alt=\"\" style=\"height:50px;width:50px;\"> <a [routerLink]=\"['/user', test._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\" data-dismiss=\"modal\">{{test.full_name}}</a></label>\n      </div>\n\n       <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button>\n      </div>\n\n     \n    </div>\n  </div>\n</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\">Save</button>\n\t\t\t\t\t\t<button class=\"blue_btn yellow_btn text-uppercase\" (click)=\"CAncel()\">Cancel</button>\n\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n<style type=\"text/css\">\n.error\n{\ncolor:red;\n}\n\n.mat-tab-body-wrapper {\n    height: 100%;\n}\n</style>\n\n\n\n<!-- http://plnkr.co/edit/ucKcXBA2zReWfBSQ8W7D?p=preview -->\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/newgroup/newgroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-tab-group, app-tabs, #gallerymodal .modal-dialog .modal-content, #gallerymodal .mat-tab-body-wrapper {\n  height: 100%; }\n\n.main-container {\n  height: 100%;\n  margin-top: 0 !important;\n  padding-top: 60px !important; }\n\n.mat-tab-body-wrapper {\n  border: 1px solid #ccc;\n  padding: 10px;\n  height: 100%; }\n\n.mat-tab-body-content {\n  position: relative;\n  /* padding-bottom: 50px; */ }\n\n.bottom_box {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  /* background: #ccc; */\n  padding: 10px 25px; }\n\n.bottom_box .blue_btn {\n  margin: 0; }\n\n.table_box {\n  display: table;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n.table_inner {\n  display: table-cell;\n  vertical-align: middle; }\n\n.gallery_images {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  height: 100%;\n  overflow: auto; }\n\n.gallery_images li {\n  width: 20%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  padding: 5px;\n  min-height: 137px; }\n\n.img_outer {\n  position: relative;\n  transform: translate(50%, 50%); }\n\n.img_outer img {\n  height: 137px;\n  transform: translate(-50%, -50%); }\n\n.uppre {\n  position: absolute;\n  left: 5px;\n  top: 5px;\n  right: 5px;\n  bottom: 5px;\n  overflow: hidden;\n  border: 2px solid transparent; }\n\n.gallery_images li.selected .uppre {\n  border-color: #F78C6A; }\n\n.gallery_images li.selected::after {\n  font-family: fontawesome;\n  position: absolute;\n  content: \"\\F00C\";\n  background: #F78C6A;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  color: #fff;\n  font-size: 14px;\n  line-height: 24px;\n  right: 0;\n  top: 0px; }\n\n#gallerymodal .modal-dialog {\n  max-width: 860px;\n  margin: 0 auto;\n  height: 100%;\n  padding: 55px 0; }\n\n.add_formarea .form-control.search_box {\n  border: none;\n  box-shadow: none;\n  background: #e9ecef;\n  border-radius: 0; }\n\n/* @media screen and (min-width:1500px)\n{\n    .gallery_images li {\n        width: 10%;\n    }\n}\n@media screen and (max-width:1200px)\n{\n    .gallery_images li {\n        width: 20%;\n    }\n} */\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\ntextarea.form-control {\n  resize: none;\n  height: 150px; }\n\n.add_formarea {\n  padding: 15px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.add_formarea label {\n  font-size: 14px;\n  color: #242424;\n  font-weight: 400;\n  letter-spacing: 1px;\n  display: block; }\n\n.add_formarea .form-control {\n  font-size: 16px;\n  color: #242424;\n  height: auto;\n  box-shadow: none;\n  padding: 8px 12px; }\n\n.login_form .form-group {\n  margin-top: 20px;\n  margin-bottom: 0; }\n\n.form-group h3 {\n  margin-top: 5px; }\n\n.top_form .form-control, .search_input .form-group .form-control {\n  height: auto;\n  padding: 8px 10px;\n  box-shadow: none; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.select_users label {\n  display: block;\n  padding: 5px; }\n\n.select_users label:nth-child(2n) {\n  background: #f5f5f5; }\n\n.select_users label img {\n  margin: 0 5px; }\n\n.modal-header .close {\n  margin: 0;\n  padding: 0; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.big_yellow1 {\n  font-size: 10px;\n  padding: 5px 20px;\n  margin-bottom: 20px; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/newgroup/newgroup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewgroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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






var NewgroupComponent = (function () {
    function NewgroupComponent(authService, fb, toastr, router, vcr) {
        this.authService = authService;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.vcr = vcr;
        this.browse = false;
        this.flightids = [];
        this.loaded = false;
        this.imageSrc = '';
        this.imageLoaded = false;
        this.nameary = [];
        this.image = false;
        this.img = true;
        this.img_valid = true;
        this.user_valid = true;
        // this.toastr.setRootViewContainerRef(vcr);
        this.img_valid = true;
        this.user_valid = true;
        this.searchForm = this.fb.group({
            search: null
        });
    }
    NewgroupComponent.prototype.teamName = function (val) {
        console.log(val);
        console.log(this.term);
    };
    /**********************************Firstly called ***************************************/
    NewgroupComponent.prototype.ngOnInit = function () {
        this.users();
        this.getlibrary();
        this.myForm = this.fb.group({
            useremail: this.fb.array([]),
            useremail1: this.fb.array([]),
            group_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            group_image: null,
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            privacy: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]
        });
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#name').on('keypress', function (e) {
            if (e.which === 32 && !this.value.length) {
                e.preventDefault();
            }
        });
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#des').on('keypress', function (e) {
            if (e.which === 32 && !this.value.length) {
                e.preventDefault();
            }
        });
    };
    NewgroupComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    NewgroupComponent.prototype.showSuccess = function () {
        // this.toastr.success('Group Created Successfully');
    };
    /**********************************get image***************************************/
    NewgroupComponent.prototype.onFileChange = function (event) {
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
        // this.saveFiles(files);
    };
    NewgroupComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
    };
    NewgroupComponent.prototype._handleReaderLoaded = function (e) {
        this.browse = true;
        console.log('image', e);
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    NewgroupComponent.prototype.groupModal = function () {
        jQuery('#addadmin').modal({ backdrop: 'static', keyboard: false });
        jQuery('#addadmin').modal('show');
    };
    NewgroupComponent.prototype.openModal = function () {
        jQuery('#gallerymodal').modal({ backdrop: 'static', keyboard: false });
        jQuery('#gallerymodal').modal('show');
        this.getlibrary();
    };
    NewgroupComponent.prototype.checking = function (index, url) {
        this.browse = false;
        this.image = true;
        this.img = true;
        this.img_valid = true;
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
        console.log('url', url);
        this.imageUrl = url;
    };
    // get media library/////
    NewgroupComponent.prototype.getlibrary = function () {
        var _this = this;
        console.log('manager lsit');
        this.authService.getLibrary().then(function (result) {
            console.log(result);
            _this.res = result;
            console.log('lasun', _this.res);
            if (_this.res.status === true) {
                _this.arryData = _this.res.data;
                console.log('arrrayy', _this.arryData);
            }
            else {
                console.log('erorr');
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Delete User***************************************/
    NewgroupComponent.prototype.deleteUser = function (val, name, email) {
        var emailFormArray = this.myForm.controls.useremail;
        var emailFormArray1 = this.myForm.controls.useremail1;
        console.log(val);
        var index = emailFormArray.controls.findIndex(function (x) { return x.value === email; });
        var index1 = emailFormArray1.controls.findIndex(function (x) { return x.value === name; });
        // alert(index)
        emailFormArray.removeAt(index);
        emailFormArray1.removeAt(index1);
        this.arry = emailFormArray.value;
        this.arry1 = emailFormArray1.value;
        console.log(this.arry, this.arry1);
    };
    /**********************************get users modal***************************************/
    NewgroupComponent.prototype.getuserVal = function (email, name, isChecked) {
        var emailFormArray = this.myForm.controls.useremail;
        var emailFormArray1 = this.myForm.controls.useremail1;
        // console.log(email,isChecked);
        if (isChecked) {
            this.user_valid = true;
            console.log(name);
            emailFormArray.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](email));
            emailFormArray1.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ 'name': name, 'email': email }));
            this.nameary.push(name);
            this.arry = emailFormArray.value;
            this.arry1 = emailFormArray1.value;
            console.log('api arrayyyy', this.arry);
            console.log('for view arrayyyy', this.arry1);
        }
        else {
            var index = emailFormArray.controls.findIndex(function (x) { return x.value === email; });
            var index1 = emailFormArray1.controls.findIndex(function (x) { return x.value.name === name; });
            emailFormArray.removeAt(index);
            emailFormArray1.removeAt(index1);
            this.arry = emailFormArray.value;
            this.arry1 = emailFormArray1.value;
            console.log('after remove api arrayyyy', this.arry);
            console.log('after remove for view arrayyyy', this.arry1);
        }
    };
    NewgroupComponent.prototype.getval = function (value) {
        console.log(value);
    };
    NewgroupComponent.prototype.CAncel = function () {
        this.router.navigateByUrl('/groups');
    };
    /**********************************Add GROUP***************************************/
    NewgroupComponent.prototype.AddGroup = function (val) {
        var _this = this;
        console.log(val);
        console.log('heyyy formmmm', this.myForm.value.useremail);
        if (val) {
            if (this.myForm.value.useremail.length === 0) {
                console.log('emailll');
                this.user_valid = false;
            }
            else if (!this.img) {
                this.img_valid = true;
            }
            else if (!this.imageUrl) {
                this.img_valid = false;
            }
            else {
                // this.img_valid=true;
                // this.user_valid=true;
                var data = new FormData();
                // console.log("arrraayyyyy",this.arry)
                // console.log("heyyy formmmm",this.myForm.value.group_image);
                // console.log("heyyy valueeee",this.myForm.get('group_image').value);
                data.append('group_name', this.myForm.get('group_name').value);
                data.append('group_image', this.imageUrl);
                data.append('users', this.arry);
                data.append('privacy', this.myForm.get('privacy').value);
                data.append('description', this.myForm.get('description').value);
                // data.append('admin_users', '');
                console.log(data);
                this.authService.addGroup(data).then(function (result) {
                    console.log(result);
                    _this.res = result;
                    if (_this.res.status === true) {
                        _this.presentToast('Group Created Successfully');
                        // this.toastr.success('Group Created Successfully');
                        // this.showSuccess();
                        _this.router.navigateByUrl('/groups');
                    }
                    else {
                        // this.toastr.error(this.res.message);
                        _this.presentToast(_this.res.message);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            this.validateAllFormFields(this.myForm);
            console.log('invaliddd');
        }
    };
    NewgroupComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    /**********************************Get Users***************************************/
    NewgroupComponent.prototype.users = function () {
        var _this = this;
        this.authService.getUsers().then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status === true) {
                _this.data = _this.res.data;
                console.log(_this.data);
            }
            else {
                console.log('erorr');
            }
        }, function (err) {
            console.log(err);
        });
    };
    /************************************Toast***************************/
    NewgroupComponent.prototype.presentToast = function (msg) {
        this.toastr.success(this.res.message, '', {
            timeOut: 3000,
            tapToDismiss: true
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileupload'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], NewgroupComponent.prototype, "fileInput", void 0);
    NewgroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newgroup',
            template: __webpack_require__("../../../../../src/app/layout/newgroup/newgroup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/newgroup/newgroup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], NewgroupComponent);
    return NewgroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/newgroup/newgroup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGroupssModule", function() { return NewGroupssModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newgroup_routing_module__ = __webpack_require__("../../../../../src/app/layout/newgroup/newgroup-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newgroup_component__ = __webpack_require__("../../../../../src/app/layout/newgroup/newgroup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
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











// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var NewGroupssModule = (function () {
    function NewGroupssModule() {
    }
    NewGroupssModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_13_ng2_search_filter__["a" /* Ng2SearchPipeModule */], __WEBPACK_IMPORTED_MODULE_3__newgroup_routing_module__["a" /* NewGroupsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__newgroup_component__["a" /* NewgroupComponent */]]
        })
    ], NewGroupssModule);
    return NewGroupssModule;
}());



/***/ })

});
//# sourceMappingURL=newgroup.module.chunk.js.map