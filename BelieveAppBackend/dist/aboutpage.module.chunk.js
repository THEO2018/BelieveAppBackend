webpackJsonp(["aboutpage.module"],{

/***/ "../../../../../src/app/layout/aboutpage/aboutpage-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutpageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutpage_component__ = __webpack_require__("../../../../../src/app/layout/aboutpage/aboutpage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__aboutpage_component__["a" /* AboutpageComponent */]
    }
];
var AboutpageRoutingModule = (function () {
    function AboutpageRoutingModule() {
    }
    AboutpageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AboutpageRoutingModule);
    return AboutpageRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/aboutpage/aboutpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n\n\t<div class=\"tables_area\">\n\t\t<a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"PublishList()\" *ngIf=\"saved\">Published</a>\n\t\t<a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"SavedList()\" *ngIf=\"publish\">Saved</a>\n\t\t<a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"showAdd()\">Add New</a>\n\t\t<div class=\"clear\"></div>\n\t\t<div class=\"bg_area\" *ngIf=\"add_new\">\n\t\t\t<h2 class=\"title_head\"> Add About Page</h2>\n\t\t\t<div>\n\t\t\t\t<form [formGroup]=\"rForm\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"Title*\" formControlName=\"title\" [attr.maxlength]=\"50\" id=\"name\"\n\t\t\t\t\t\t\t\t/>\n                            </div>\n\t\t\t\t\t\t\t<div *ngIf=\"rForm.get('title').hasError('required') && rForm.get('title').touched\">\n\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"rForm.get('title').hasError('required')  && rForm.get('title').touched \">\n\t\t\t\t\t\t\t\t\tTitle is required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<textarea id=\"des\" value=\"\" placeholder=\"Enter Description\" class=\"form-control\" formControlName=\"description\" [attr.maxlength]=\"500\"></textarea>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"rForm.get('description').hasError('required') && rForm.get('description').touched\">\n\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"rForm.get('description').hasError('required')  && rForm.get('description').touched \">\n\t\t\t\t\t\t\t\t\tDescription is required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Cover Image*</label>\n\t\t\t\t\t\t\t\t<p class=\"add_user\">\n\t\t\t\t\t\t\t\t\t<a data-backdrop=\"static\" data-keyboard=\"false\" (click)=\"openModal()\">Browse</a>&nbsp;\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"browse\" [src]=\"imageSrc\" (load)=\"handleImageLoad()\" [class.loaded]=\"imageLoaded\" style=\"height:75px;width: 75px;border-radius: 100%;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"image\" src=\"{{imageUrl}}\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!img_valid\">\n\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"img_valid\">\n\t\t\t\t\t\t\t\t\tpicture is required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!img\">\n\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"img\">\n\t\t\t\t\t\t\t\t\tOnly png/Jpeg Allowed\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- gallery modal -->\n\t\t\t\t\t<div class=\"modal fade\" id=\"gallerymodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t\t<div class=\"modal-body select_users\" style=\"height: 100%;\n                  \n    overflow: auto;\">\n\t\t\t\t\t\t\t\t\t<mat-tab-group>\n\t\t\t\t\t\t\t\t\t\t<mat-tab label=\"Upload files\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"table_box\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table_inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Browse your file here</p>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" #fileupload (change)=\"onFileChange($event)\" id=\"about_cover_image\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tOnly png/Jpeg Allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"bottom_box text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t\t\t<mat-tab label=\"Media library\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"gallery_images\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let image of arryData.libraryImages; let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uppre\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img_outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{image.image_name}}\" (click)=\"checking(i,image.image_name)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"bottom_box text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t\t</mat-tab-group>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-12\">\n\t\t\t\t\t\t\t<button class=\"blue_btn yellow_btn text-uppercase\" (click)=\"AddAbout(rForm.valid,rForm.value,'S')\">Save</button>\n\t\t\t\t\t\t\t<button class=\"blue_btn yellow_btn text-uppercase\" (click)=\"AddAbout(rForm.valid,rForm.value,'A')\">Publish</button>\n\t\t\t\t\t\t\t<button class=\"blue_btn yellow_btn text-uppercase\" (click)=\"cancel()\">Cancel</button>\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<h2 *ngIf=\"publish\">Published About Pages</h2>\n\t\t<h2 *ngIf=\"saved\">Saved About Pages</h2>\n\t\t<div class=\"white_box\" *ngIf=\"publish\">\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" id=\"\" class=\"display\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Title</th>\n\t\t\t\t\t\t\t<!-- <th>Description</th> -->\n\t\t\t\t\t\t\t<th>Cover Image </th>\n\t\t\t\t\t\t\t<th>ACTION</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let grouplist of data\">\n\t\t\t\t\t\t\t<td>{{grouplist.title}}</td>\n\n\t\t\t\t\t\t\t<td><img src=\"{{grouplist.about_cover_image}}\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\" /></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<a class=\"action_btn\"><i class=\"fa fa-edit\" aria-hidden=\"true\" (click)=\"GetAboutDetail(grouplist._id)\"></i></a>\n\t\t\t\t\t\t\t\t<a class=\"action_btn\"><i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"RemoveClick(grouplist._id)\"></i></a>\n\t\t\t\t\t\t\t</td>\n\n\n\t\t\t\t\t\t\t<div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<p>Are you sure you want to Delete?</p>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"blue_btn\" (click)=\"RemoveComm()\">Yes</a>\n\t\t\t\t\t\t\t\t\t\t\t<a data-dismiss=\"modal\" class=\"blue_btn\">No</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<!-- <tr>\n\t\t\t\t\t\t\t\t\t<td colspan=\"3\">\n\t\t\t\t\t\t\t\t\t\t<mfBootstrapPaginator></mfBootstrapPaginator>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- /******************************************************/\t\t\t -->\n\n\t\t<div class=\"white_box\" *ngIf=\"saved\">\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" id=\"\" class=\"display\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Title</th>\n\t\t\t\t\t\t\t<!-- <th>Description</th> -->\n\t\t\t\t\t\t\t<th>Cover Image </th>\n\t\t\t\t\t\t\t<th>ACTION</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let grouplist of dataaa\">\n\t\t\t\t\t\t\t<td>{{grouplist.title}}</td>\n\n\t\t\t\t\t\t\t<td><img src=\"{{grouplist.about_cover_image}}\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\" /></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<a class=\"blue_btn yellow_btn text-uppercase\" (click)=\"publishModal(grouplist._id)\">Publish</a>\n\t\t\t\t\t\t\t</td>\n\n\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>\n\n<!-- /******************************STart Modal****************/ -->\n\n<div class=\"modal fade\" id=\"edit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body text-center\">\n\t\t\t\t<h2 class=\"title_head\">Edit About Page</h2>\n\t\t\t\t<form [formGroup]=\"eForm\" (ngSubmit)=\"EditAbout(eForm.valid,eForm.value)\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"Title*\" formControlName=\"title\" [attr.maxlength]=\"50\" id=\"name\"\n\t\t\t\t\t\t\t\t/>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<textarea id=\"des\" value=\"\" placeholder=\"Enter Description\" class=\"form-control\" formControlName=\"description\" [attr.maxlength]=\"500\"></textarea>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Cover Image*</label><br>\n\n\t\t\t\t\t\t\t\t<img *ngIf=\"api_image && !imageSrc\" src=\"{{api_image}}\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n\t\t\t\t\t\t\t\t<img *ngIf=\"imageSrc\" [src]=\"imageSrc\" (load)=\"handleImageLoad()\" [class.loaded]=\"imageLoaded\" style=\"height:75px;width: 75px;border-radius: 100%;\"\n\t\t\t\t\t\t\t\t/><br>\n\t\t\t\t\t\t\t\t<input type=\"file\" #fileupload (change)=\"onFileChange($event)\" id=\"about_cover_image\" style=\"width: 100px\" />\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!img\">\n\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"img\">\n\t\t\t\t\t\t\t\t\tOnly png/Jpeg Allowed\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-12\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\">Update</button>\n\t\t\t\t\t\t\t<button class=\"blue_btn yellow_btn text-uppercase\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!-- /******************************EndModal****************/ -->\n<style type=\"text/css\">\n\t.error {\n\t\tcolor: red;\n\t}\n</style>\n\n\n<div class=\"modal fade\" id=\"publish\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body text-center\">\n\t\t\t\t<p>Are you sure you want to Publish this Song?</p>\n\t\t\t\t<a class=\"blue_btn\" (click)=\"PublishDraftss()\">OK</a>\n\t\t\t\t<a class=\"blue_btn\" data-dismiss=\"modal\">Cancel</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/aboutpage/aboutpage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\ntextarea.form-control {\n  resize: none;\n  height: 190px; }\n\n.blue_btn + .blue_btn {\n  margin-right: 5px; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px;\n  background: #fff; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n\n.select_users label {\n  display: block;\n  padding: 5px; }\n\n.select_users label:nth-child(2n) {\n  background: #f5f5f5; }\n\n.select_users label img {\n  margin: 0 5px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\nh2.title_head .blue_btn {\n  color: #fff;\n  float: right;\n  margin: 0;\n  cursor: pointer; }\n\n.bg_area {\n  background: #eaeaea;\n  padding: 15px;\n  margin-bottom: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/aboutpage/aboutpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net__ = __webpack_require__("../../../../datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_datatables_net__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutpageComponent = (function () {
    function AboutpageComponent(router, authService, toastr, fb) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.fb = fb;
        this.publish = true;
        this.saved = false;
        this.filterQuery = "";
        this.rowsOnPage = 5;
        this.sortOrder = "asc";
        this.img = true;
        this.img_valid = true;
        this.add_new = false;
        this.imageLoaded = false;
        this.imageSrc = '';
        this.loaded = false;
        this.browse = false;
        this.arryData = [];
        this.image = false;
        this.rForm = this.fb.group({
            'title': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'description': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'about_cover_image': null
        });
        this.eForm = this.fb.group({
            'title': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'description': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'about_cover_image': null
        });
    }
    AboutpageComponent.prototype.ngAfterContentChecked = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#des').on('keypress', function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#name').on('keypress', function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    };
    AboutpageComponent.prototype.SavedList = function () {
        var _this = this;
        this.mytable.destroy();
        setTimeout(function () {
            _this.mytable = __WEBPACK_IMPORTED_MODULE_5_jquery__('table.display').DataTable({
                'bPaginate': true,
                'bLengthChange': true,
                // "pageLength": 7,
                'bFilter': true,
                'bInfo': false,
                'bAutoWidth': true,
            });
        }, 500);
        this.saved = true;
        this.publish = false;
    };
    AboutpageComponent.prototype.PublishList = function () {
        var _this = this;
        this.mytable.destroy();
        setTimeout(function () {
            _this.mytable = __WEBPACK_IMPORTED_MODULE_5_jquery__('table.display').DataTable({
                'bPaginate': true,
                'bLengthChange': true,
                // "pageLength": 7,
                'bFilter': true,
                'bInfo': false,
                'bAutoWidth': true,
            });
        }, 500);
        this.saved = false;
        this.publish = true;
    };
    AboutpageComponent.prototype.publishModal = function (id) {
        jQuery('#publish').modal('show');
        this.idd = id;
    };
    AboutpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.mytable = __WEBPACK_IMPORTED_MODULE_5_jquery__('table.display').DataTable({
                'bPaginate': true,
                'bLengthChange': true,
                // "pageLength": 7,
                'bFilter': true,
                'bInfo': false,
                'bAutoWidth': true,
            });
        }, 500);
        this.GetAbout();
        this.GetDraft();
    };
    AboutpageComponent.prototype.showAdd = function () {
        this.add_new = true;
    };
    AboutpageComponent.prototype.cancel = function () {
        this.add_new = false;
    };
    AboutpageComponent.prototype.RemoveClick = function (id) {
        // alert(id)
        jQuery('#request').modal('show');
        this._id = id;
    };
    /********************************** Get Draft betrotheds***************************************/
    AboutpageComponent.prototype.GetDraft = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getDraftPages().then(function (result) {
            console.log('Saveddddd', result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.dataaa = _this.res.data;
            }
            else {
                console.log('erorr');
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Publish Drafts***************************************/
    AboutpageComponent.prototype.PublishDraftss = function () {
        var _this = this;
        var params = {
            'type': 'AP',
            'id': this.idd
        };
        this.authService.publishDrafts(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.GetDraft();
                jQuery('#publish').modal('hide');
                _this.mytable.destroy();
                setTimeout(function () {
                    _this.mytable = __WEBPACK_IMPORTED_MODULE_5_jquery__('table.display').DataTable({
                        'bPaginate': true,
                        'bLengthChange': true,
                        // "pageLength": 7,
                        'bFilter': true,
                        'bInfo': false,
                        'bAutoWidth': true,
                    });
                }, 500);
            }
            else {
                console.log('fasleeee');
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Remove Groups***************************************/
    AboutpageComponent.prototype.RemoveComm = function () {
        var _this = this;
        // alert("hiiii")
        var parms = {
            'id': this._id,
            'type': 'AP'
        };
        this.authService.removeAbout(parms).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                jQuery('#request').modal('hide');
                _this.GetAbout();
                _this.mytable.destroy();
                setTimeout(function () {
                    _this.mytable = __WEBPACK_IMPORTED_MODULE_5_jquery__('table.display').DataTable({
                        'bPaginate': true,
                        'bLengthChange': true,
                        // "pageLength": 7,
                        'bFilter': true,
                        'bInfo': false,
                        'bAutoWidth': true,
                    });
                }, 500);
                // this.data=this.res.data;
                console.log(_this.data);
            }
            else {
                console.log('erorr');
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************get image***************************************/
    AboutpageComponent.prototype.onFileChange = function (event) {
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
            this.imageUrl = '';
            this.img_valid = true;
            this.img = false;
        }
        //this.saveFiles(files);
    };
    AboutpageComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
    };
    AboutpageComponent.prototype._handleReaderLoaded = function (e) {
        this.browse = true;
        console.log('image', e);
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    AboutpageComponent.prototype.openModal = function () {
        jQuery('#gallerymodal').modal({ backdrop: 'static', keyboard: false });
        jQuery('#gallerymodal').modal('show');
        this.getlibrary();
    };
    AboutpageComponent.prototype.checkings = function () {
        alert('hi');
    };
    AboutpageComponent.prototype.checking = function (index, url) {
        this.browse = false;
        this.image = true;
        this.img = true;
        this.img_valid = true;
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
        console.log('url', url);
        this.imageUrl = url;
    };
    // get media library/////
    AboutpageComponent.prototype.getlibrary = function () {
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
                console.log('erorr');
            }
        }, function (err) {
            console.log(err);
        });
    };
    AboutpageComponent.prototype.clearr = function () {
        this.rForm.reset({
            'title': '',
            'description': '',
            'about_cover_image': ''
        });
        this.myInputVariable.nativeElement.value = '';
    };
    /**********************************Edit About Page***************************************/
    AboutpageComponent.prototype.EditAbout = function (val, value) {
        var _this = this;
        console.log(val);
        console.log(this.eForm.get('about_cover_image').value);
        if (!this.img) {
            this.img_valid = true;
        }
        else {
            var data = new FormData();
            data.append('title', this.eForm.get('title').value);
            data.append('about_page_id', this.id);
            data.append('description', this.eForm.get('description').value);
            data.append('about_cover_image', this.eForm.get('about_cover_image').value);
            console.log(data);
            this.authService.editAbout(data).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status == true) {
                    jQuery('#edit').modal('hide');
                    // this.clearr();
                    _this.presentToast(_this.res.message);
                    // alert(this.res.message)
                    _this.GetAbout();
                    // this.router.navigateByUrl('/groups');
                }
                else {
                    // this.toastr.error(this.res.message);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    /**********************************Add About Page***************************************/
    AboutpageComponent.prototype.AddAbout = function (val, value, sta) {
        var _this = this;
        console.log(sta);
        console.log(value);
        if (val) {
            if (!this.imageUrl) {
                this.img_valid = false;
            }
            else if (!this.img) {
                this.img_valid = true;
            }
            else {
                var data = new FormData();
                data.append('title', this.rForm.get('title').value);
                data.append('status', sta);
                data.append('description', this.rForm.get('description').value);
                data.append('about_cover_image', this.imageUrl);
                console.log(data);
                this.authService.addAbout(data).then(function (result) {
                    console.log(result);
                    _this.res = result;
                    if (_this.res.status == true) {
                        _this.add_new = false;
                        _this.clearr();
                        _this.GetDraft();
                        alert('Page Added Successfully');
                        _this.mytable.destroy();
                        setTimeout(function () {
                            _this.mytable = __WEBPACK_IMPORTED_MODULE_5_jquery__('table.display').DataTable({
                                'bPaginate': true,
                                'bLengthChange': true,
                                // "pageLength": 7,
                                'bFilter': true,
                                'bInfo': false,
                                'bAutoWidth': true,
                            });
                        }, 500);
                        _this.GetAbout();
                        // this.router.navigateByUrl('/groups');
                    }
                    else {
                        // this.toastr.error(this.res.message);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            alert('Fill required fields!!!!');
        }
    };
    // edit(id){
    //     jQuery("#edit").modal("show");
    //     console.log(id)
    //     this.id=id;
    //    }
    /**********************************Get About Page Detail***************************************/
    AboutpageComponent.prototype.GetAboutDetail = function (id) {
        var _this = this;
        jQuery('#edit').modal('show');
        console.log(id);
        this.id = id;
        // alert("hiiii")
        this.authService.getAboutDetail(this.id).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data1 = _this.res.data;
                _this.eForm.get('title').setValue(_this.data1.title);
                _this.eForm.get('description').setValue(_this.data1.description);
                _this.api_image = _this.data1.about_cover_image;
                console.log(_this.data1);
            }
            else {
                console.log('erorr');
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get About Pages***************************************/
    AboutpageComponent.prototype.GetAbout = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getAbout().then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
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
    AboutpageComponent.prototype.presentToast = function (msg) {
        this.toastr.success(this.res.message, '', {
            timeOut: 3000,
            tapToDismiss: true
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileupload'),
        __metadata("design:type", Object)
    ], AboutpageComponent.prototype, "myInputVariable", void 0);
    AboutpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aboutpage',
            template: __webpack_require__("../../../../../src/app/layout/aboutpage/aboutpage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/aboutpage/aboutpage.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], AboutpageComponent);
    return AboutpageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/aboutpage/aboutpage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutpageModule", function() { return AboutpageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aboutpage_routing_module__ = __webpack_require__("../../../../../src/app/layout/aboutpage/aboutpage-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aboutpage_component__ = __webpack_require__("../../../../../src/app/layout/aboutpage/aboutpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__("../../../../froala-editor/js/froala_editor.pkgd.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AboutpageModule = (function () {
    function AboutpageModule() {
    }
    AboutpageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__aboutpage_routing_module__["a" /* AboutpageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_froala_wysiwyg__["a" /* FroalaEditorModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_froala_wysiwyg__["b" /* FroalaViewModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_14__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__aboutpage_component__["a" /* AboutpageComponent */]]
        })
    ], AboutpageModule);
    return AboutpageModule;
}());



/***/ })

});
//# sourceMappingURL=aboutpage.module.chunk.js.map