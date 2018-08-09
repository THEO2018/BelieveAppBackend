webpackJsonp(["editsmallgroup.module"],{

/***/ "../../../../../src/app/layout/editsmallgroup/editsmallgroup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSmallRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editsmallgroup_component__ = __webpack_require__("../../../../../src/app/layout/editsmallgroup/editsmallgroup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__editsmallgroup_component__["a" /* EditsmallgroupComponent */]
    }
];
var EditSmallRoutingModule = (function () {
    function EditSmallRoutingModule() {
    }
    EditSmallRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], EditSmallRoutingModule);
    return EditSmallRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/editsmallgroup/editsmallgroup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n\n\t<div class=\"tables_area\">\n\t\t<h2>Edit Small Group</h2>\n\t\t<div class=\"white_box\">\n\t\t\t<form [formGroup]=\"newSmallGroup\" novalidate (ngSubmit)=\"EditSmallGroup(newSmallGroup)\">\n\t\t\t\t<div class=\"add_formarea\">\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Name</label>\n\t\t\t\t\t\t\t\t<input id=\"name\" type=\"text\" value=\"\" placeholder=\"Enter Name\" class=\"form-control\" formControlName=\"small_group_name\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"newSmallGroup.get('small_group_name').hasError('required') && newSmallGroup.get('small_group_name').touched\">\n\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"newSmallGroup.get('small_group_name').hasError('required')  && newSmallGroup.get('small_group_name').touched \">\n\t\t\t\t\t\t\t\t\tName is required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\n\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Venue</label>\n\t\t\t\t\t\t\t\t<input id=\"ven\" type=\"text\" value=\"\" placeholder=\"Select Venue\" class=\"form-control\" autocorrect=\"off\" autocapitalize=\"off\"\n\t\t\t\t\t\t\t\t spellcheck=\"off\" #search formControlName=\"venue\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"newSmallGroup.get('venue').hasError('required')\n\t\t\t\t\t\t\t\t  && newSmallGroup.get('venue').touched\">\n\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"newSmallGroup.get('venue').hasError('required')  && newSmallGroup.get('venue').touched \">\n\t\t\t\t\t\t\t\t\tVenue is required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Description</label>\n\t\t\t\t\t\t\t\t<textarea id=\"des\" value=\"\" placeholder=\"Enter Description\" class=\"form-control\" formControlName=\"small_group_description\"\n\t\t\t\t\t\t\t\t [attr.maxlength]=\"500\"></textarea>\n\t\t\t\t\t\t\t\t<!-- <input id=\"des\" type=\"text\" value=\"\" placeholder=\"Enter Description\" class=\"form-control\" formControlName=\"small_group_description\"\n\t\t\t\t\t\t\t\t/> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"newSmallGroup.get('small_group_description').hasError('required') && newSmallGroup.get('small_group_description').touched\">\n\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"newSmallGroup.get('small_group_description').hasError('required')  && newSmallGroup.get('small_group_description').touched \">\n\t\t\t\t\t\t\t\t\tDescription is required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Front picture*</label>\n\t\t\t\t\t\t\t\t<p data-backdrop=\"static\" data-keyboard=\"false\" class=\"add_user\" (click)=\"openModal()\">\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"api_image && !imageSrc && !image\" src=\"{{api_image}}\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"browse\" [src]=\"imageSrc\" (load)=\"handleImageLoad()\" [class.loaded]=\"imageLoaded\" style=\"height:75px;width: 75px;border-radius: 100%;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"image\" src=\"{{this.imageUrl}}\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!img_valid\">\n\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"img_valid\">\n\t\t\t\t\t\t\t\t\tFront picture is required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!img\">\n\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"img\">\n\t\t\t\t\t\t\t\t\tOnly png/Jpeg Allowed\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"meeting_box\">\n\t\t\t\t\t\t<h4>Meeting Schedule</h4>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Select Days</label>\n\t\t\t\t\t\t\t\t\t<div class=\"custom_select\">\n\t\t\t\t\t\t\t\t\t\t<select formControlName=\"days\">\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of muloptions\" [ngValue]=\"item.value\">{{item.value}}</option>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <option value=\"C\">Closed</option> -->\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t\t<aside class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">START TIME</label>\n\t\t\t\t\t\t\t\t\t<div class=\"icon_input\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" [owlDateTimeTrigger]=\"dt4\" [owlDateTime]=\"dt4\" formControlName=\"start_time\" value=\"\" [(ngModel)]=\"timer\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time [pickerType]=\"'timer'\" #dt4></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<!-- \t<input type=\"time\" value=\"\" placeholder=\"Enter Time\" class=\"form-control timepicker\" formControlName=\"start_time\"/> -->\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t\t<aside class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">END TIME</label>\n\t\t\t\t\t\t\t\t\t<div class=\"icon_input\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" [owlDateTimeTrigger]=\"dt5\" [owlDateTime]=\"dt5\" formControlName=\"end_time\" [(ngModel)]=\"timer1\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time [pickerType]=\"'timer'\" #dt5></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<!-- <input type=\"time\"  value=\"{{timer}}\" placeholder=\"Enter Time\" class=\"form-control timepicker\" formControlName=\"end_time\" [(ngModel)]=\"timer1\"/> -->\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<aside class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Add Users</label>\n\t\t\t\t\t\t\t\t<div class=\"select_users\" *ngIf=\"initial\">\n\t\t\t\t\t\t\t\t\t<div *ngFor=\"let test of allusers\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"test.selected == true\">\n\t\t\t\t\t\t\t\t\t\t\t<label> <a [routerLink]=\"['/user', test._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\">{{test.full_name}}</a><a (click)=\"deleteUser(test,test.full_name,test.id)\"><i class=\"fa fa-close\"></i></a></label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"select_users\" *ngIf=\"!initial\">\n\t\t\t\t\t\t\t\t\t<div *ngFor=\"let test of allusers\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"test.selected == true\">\n\t\t\t\t\t\t\t\t\t\t\t<label> <a [routerLink]=\"['/user', test._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\">{{test.full_name}}</a><a (click)=\"deleteUser(test,test.full_name,test.id)\"><i class=\"fa fa-close\"></i></a></label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<p class=\"add_user\">\n\t\t\t\t\t\t\t\t\t<a data-target=\"#adduser\" data-toggle=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\" (click)=\"usermodall()\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus\"></i>Add Users</a>\n\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!users_valid\">\n\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"users_valid\">\n\t\t\t\t\t\t\t\t\t Users are required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t<!-- User Modal -->\n\t\t\t\t\t\t<div class=\"modal fade\" id=\"adduser\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"modal-title\" id=\"myModalLabel\">Select Users</h4>\n\t\t\t\t\t\t\t\t\t</div>\n  <form [formGroup]=\"searchForm\">\n  <input type=\"text\" [(ngModel)]=\"term\"  class=\"form-control\"  placeholder=\"Search\" (click)=\"teamName(term)\" formControlName=\"search\">\n   </form>\n\t\t\t\t\t\t\t\t\t<div class=\"modal-body select_users\" style=\"max-height: 500px;\n    overflow: auto;\">\n\t\t\t\t\t\t\t\t\t\t<label *ngFor=\"let test of allusers | filter:term\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"data\" [checked]=\"test.selected == true\" [disabled]=\"test.admin ==  true\" (change)=\"getuserVal(test._id,test.full_name,  $event.target.checked)\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/logo.png\" alt=\"\" style=\"height:50px;width:50px;\"><a [routerLink]=\"['/user', test._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\" data-dismiss=\"modal\">{{test.full_name}}</a></label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" [disabled]=\"!initial\" (click)=\"cancelvalue()\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"okvalue()\">OK</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<aside class=\"col-sm-4\">\n\t\t\t\t\t\t\t<label class=\"text-uppercase\">Add Admins</label>\n\t\t\t\t\t\t\t<div class=\"select_users\" *ngIf=\"adminInitial\">\n\t\t\t\t\t\t\t\t<div *ngFor=\"let test of smallGroup\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"test.adminselected == true\">\n\t\t\t\t\t\t\t\t\t\t<label><a [routerLink]=\"['/user', test._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\" data-dismiss=\"modal\">{{test.full_name}}</a><a (click)=\"deleteAdmin(test,test.full_name,test.id)\"><i class=\"fa fa-close\"></i></a></label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"select_users\" *ngIf=\"!adminInitial\">\n\t\t\t\t\t\t\t\t<div *ngFor=\"let test of smallGroup\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"test.adminselected == true\">\n\t\t\t\t\t\t\t\t\t\t<label><a [routerLink]=\"['/user', test._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\" data-dismiss=\"modal\">{{test.full_name}}</a><a (click)=\"deleteAdmin(test,test.full_name,test.id)\"><i class=\"fa fa-close\"></i></a></label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<p class=\"add_user\">\n\t\t\t\t\t\t\t\t<a data-backdrop=\"static\" data-keyboard=\"false\" (click)=\"adminmodal()\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus\"></i>Add Admins</a>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!user_valid\">\n\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"user_valid\">\n\t\t\t\t\t\t\t\t\tadmin is required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <p class=\"add_user\">\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"selectUsers()\"><i class=\"fa fa-plus\"></i>Add Admins</a>\n\t\t\t\t\t\t\t\t\t</p> -->\n\t\t\t\t\t\t</aside>\n\n\n\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<!-- Admin Modal -->\n\n\t\t\t\t\t<div class=\"modal fade\" id=\"addadmin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<h4 class=\"modal-title\" id=\"myModalLabel\">Select Admins</h4>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"modal-body select_users\" *ngIf=\"apiuser\" style=\"max-height: 500px;\n    overflow: auto;\">\n\t\t\t\t\t\t\t\t\t<label *ngFor=\"let test of smallGroup\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"data\" class=\"admin-check\" value=\"test._id\" [checked]=\"test.adminselected == true\" (change)=\"getadminVal(test._id,test.name,$event.target.checked,test)\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/logo.png\" alt=\"\" style=\"height:50px;width:50px;\">{{test.full_name}}</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"modal-body select_users\" *ngIf=\"ok\" style=\"max-height: 500px;\n    overflow: auto;\">\n\t\t\t\t\t\t\t\t\t<label *ngFor=\"let test of smallGroups\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"data\" class=\"admin-check\" value=\"test._id\" [checked]=\"test.adminselected == true\" (change)=\"getadminVal(test._id,test.name,$event.target.checked,test)\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/logo.png\" alt=\"\" style=\"height:50px;width:50px;\">{{test.full_name}}</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" [disabled]=\"!adminInitial\" (click)=\"cancelvalue1()\">Cancel</button>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"okvalue1()\">OK</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- gallery modal -->\n\n\t\t\t\t\t<div class=\"modal fade\" id=\"gallerymodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t\t<div class=\"modal-body select_users\" style=\"height: 100%;\n\t\t\t\t\t\t\t\t\t\n\t\toverflow: auto;\">\n\t\t\t\t\t\t\t\t\t<mat-tab-group color=\"primary\">\n\t\t\t\t\t\t\t\t\t\t<mat-tab label=\"Upload files\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"table_box\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table_inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Browse your file here</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" #fileupload (change)=\"onFileChange($event)\" id=\"event_cover\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"bottom_box text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t\t\t<mat-tab label=\"Media library\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"gallery_images\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let image of arryData.libraryImages; let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"uppre\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img_outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{image.image_name}}\" (click)=\"checking(i,image.image_name)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"bottom_box text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t\t</mat-tab-group>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t<button type=\"submit\" class=\"blue_btn yellow_btn  text-uppercase\">Update</button>\n\t\t\t\t\t<button type=\"submit\" class=\"blue_btn yellow_btn  text-uppercase\" (click)=\"Cancel()\">Cancel</button>\n\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n\n\n<style type=\"text/css\">\n\t.error {\n\t\tcolor: red;\n\t}\n</style>\n\n\n\n<!-- http://plnkr.co/edit/ucKcXBA2zReWfBSQ8W7D?p=preview -->"

/***/ }),

/***/ "../../../../../src/app/layout/editsmallgroup/editsmallgroup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.icon_input {\n  position: relative; }\n\n.icon_input i {\n  font-size: 20px;\n  position: absolute;\n  left: 10px;\n  top: 10px; }\n\n.icon_input .form-control {\n  padding-left: 35px !important; }\n\n.meeting_box {\n  background: #eaeaea;\n  padding: 15px 15px 0;\n  margin-bottom: 20px; }\n\n.meeting_box h4 {\n  color: #F78C6A;\n  font-size: 20px;\n  margin-bottom: 15px; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.add_formarea {\n  padding: 15px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.add_formarea label {\n  font-size: 14px;\n  color: #242424;\n  font-weight: 400;\n  letter-spacing: 1px;\n  display: block; }\n\n.add_formarea .form-control {\n  font-size: 16px;\n  color: #242424;\n  height: auto;\n  box-shadow: none;\n  padding: 8px 12px; }\n\n.login_form .form-group {\n  margin-top: 20px;\n  margin-bottom: 0; }\n\n.form-group h3 {\n  margin-top: 5px; }\n\n.top_form .form-control, .search_input .form-group .form-control {\n  height: auto;\n  padding: 8px 10px;\n  box-shadow: none; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px;\n  background: #fff; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.select_users label {\n  display: block;\n  padding: 5px; }\n\n.select_users label:nth-child(2n) {\n  background: #f5f5f5; }\n\n.select_users label img {\n  margin: 0 5px; }\n\n.modal-header .close {\n  margin: 0;\n  padding: 0; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.big_yellow1 {\n  font-size: 10px;\n  padding: 5px 20px;\n  margin-bottom: 20px; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/editsmallgroup/editsmallgroup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditsmallgroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditsmallgroupComponent = (function () {
    function EditsmallgroupComponent(mapsAPILoader, ngZone, router, authService, formBuilder, route) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.adminInitial = true;
        this.initial = true;
        this.smallGroupsId = [];
        this.Newusermodal = [];
        this.NewUserModalId = [];
        this.nameary = [];
        this.smallGroup = [];
        this.smallGroups = [];
        this.nameary1 = [];
        this.selectedUsers = [];
        this.confuse = [];
        this.nameary_admin = [];
        this.img = true;
        this.imageLoaded = false;
        this.imageSrc = '';
        this.loaded = false;
        this.imag_valid = true;
        this.users_valid = true;
        this.user_valid = true;
        this.browse = false;
        this.image = false;
        this.img_valid = true;
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.small_group_id = params;
        });
        this.searchForm = this.formBuilder.group({
            search: null
        });
        this.newSmallGroup = this.formBuilder.group({
            useremail: this.formBuilder.array([]),
            useremail1: this.formBuilder.array([]),
            admin_users: this.formBuilder.array([]),
            admin_users1: this.formBuilder.array([]),
            venue: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            small_group_name: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            small_group_description: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            start_time: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            end_time: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            days: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            small_group_image: null
        });
        this.muloptions = [{
                id: 1,
                name: 'S',
                value: 'Sunday'
            }, {
                id: 2,
                name: 'M',
                value: 'Monday'
            }, {
                id: 3,
                name: 'T',
                value: 'Tuesday'
            }, {
                id: 4,
                name: 'W',
                value: 'Wednesday'
            }, {
                id: 5,
                name: 'Th',
                value: 'Thursday'
            }, {
                id: 6,
                name: 'F',
                value: 'Friday'
            }, {
                id: 7,
                name: 'St',
                value: 'Saturday'
            }];
    }
    EditsmallgroupComponent.prototype.Cancel = function () {
        this.router.navigateByUrl('/smallgroup');
    };
    EditsmallgroupComponent.prototype.teamName = function (val) {
        console.log(val);
        console.log(this.term);
    };
    /**********************************get image***************************************/
    EditsmallgroupComponent.prototype.onFileChange = function (event) {
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
    EditsmallgroupComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
    };
    EditsmallgroupComponent.prototype._handleReaderLoaded = function (e) {
        this.browse = true;
        console.log('image', e);
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    EditsmallgroupComponent.prototype.openModal = function () {
        jQuery('#gallerymodal').modal({ backdrop: 'static', keyboard: false });
        jQuery("#gallerymodal").modal("show");
        this.getlibrary();
    };
    EditsmallgroupComponent.prototype.checking = function (index, url) {
        this.browse = false;
        this.image = true;
        this.img = true;
        this.img_valid = true;
        __WEBPACK_IMPORTED_MODULE_6_jquery__('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
        console.log('url', url);
        this.imageUrl = url;
    };
    // get media library/////
    EditsmallgroupComponent.prototype.getlibrary = function () {
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
    EditsmallgroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#name").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#des").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#ven").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        this.detail();
        this.getlibrary();
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    for (var i = 0; i < place.address_components.length; i++) {
                        for (var j = 0; j < place.address_components[i].types.length; j++) {
                            if (place.address_components[i].types[j] == "postal_code") {
                                _this.zipcode = place.address_components[i].long_name;
                                // console.log("zipcodeeee",zipcode)
                            }
                        }
                    }
                    _this.venue_address = place.formatted_address;
                    console.log(_this.venue_address);
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                });
            });
        });
    };
    EditsmallgroupComponent.prototype.okvalue = function () {
        this.smallGroup = [];
        this.smallGroupsId = [];
        for (var i in this.allusers) {
            if (this.allusers[i].selected == true) {
                this.smallGroup.push(this.allusers[i]);
                this.smallGroupsId.push(this.allusers[i]._id);
            }
        }
        console.log('adminpush array', this.smallGroup);
        console.log('user array', this.smallGroupsId);
        // console.log('smaaaalgroup', this.smallGroups);
        this.userArry = this.smallGroupsId;
    };
    EditsmallgroupComponent.prototype.cancelvalue = function () {
        this.initial = true;
    };
    EditsmallgroupComponent.prototype.okvalue1 = function () {
        this.Newusermodal = [];
        this.NewUserModalId = [];
        for (var i in this.smallGroup) {
            if (this.smallGroup[i].adminselected == true) {
                //this.Newusermodal.push(this.conf[i]);
                this.NewUserModalId.push(this.smallGroup[i]._id);
            }
        }
        console.log('admin modal ids', this.NewUserModalId);
        this.adminArry = this.NewUserModalId;
        console.log('admin array', this.adminArry);
    };
    EditsmallgroupComponent.prototype.usermodall = function () {
        // jQuery("#adduser").modal("show");
        jQuery('#adduser').modal({ backdrop: 'static', keyboard: false });
        //this.smallGroup = [];
    };
    EditsmallgroupComponent.prototype.adminmodal = function () {
        console.log('admin modal');
        var limit = 2;
        jQuery('#addadmin').modal({ backdrop: 'static', keyboard: false });
        jQuery("#addadmin").modal("show");
        console.log('admin modal');
        // this.NewUserModalId = [];
    };
    EditsmallgroupComponent.prototype.cancelvalue1 = function () {
        this.adminInitial = true;
        // this.arry_admin = '';
        // this.arry_admin1 = '';
    };
    EditsmallgroupComponent.prototype.selectUsers = function () {
        alert("Select Users First!!!");
    };
    /**********************************get admin multiple modal***************************************/
    EditsmallgroupComponent.prototype.getadminVal = function (email, name, isChecked, val) {
        this.adminInitial = false;
        this.users_valid = true;
        var adminArray = this.newSmallGroup.controls.admin_users;
        var adminArray1 = this.newSmallGroup.controls.admin_users1;
        if (adminArray.value.length > 1) {
            alert("Maximum Two Users!!!!!");
        }
        else {
            this.user_valid = true;
            if (isChecked) {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('input.admin-check').on('change', function (evt) {
                    if (__WEBPACK_IMPORTED_MODULE_6_jquery__(this).siblings(':checked').length >= 2) {
                        this.checked = false;
                    }
                });
                console.log('email', email);
                console.log("intial admin array", this.smallGroup);
                for (var i in this.smallGroup) {
                    if (this.smallGroup[i]._id === email) {
                        this.smallGroup[i].adminselected = true;
                    }
                }
                console.log('admin add', this.smallGroup);
                //  this.adminModal = this.rawdata;
                for (var i in this.allusers) {
                    for (var j in this.smallGroup) {
                        if (this.smallGroup[j].adminselected == true) {
                            if (this.smallGroup[j]._id == this.allusers[i]._id) {
                                this.allusers[i].admin = true;
                            }
                        }
                    }
                }
                console.log('all user', this.allusers);
                // console.log('dujaaaaaaaa', this.adminModal);
            }
            else {
                this.notvalid = false;
                this.conf = this.smallGroups;
                for (var i in this.smallGroup) {
                    if (this.smallGroup[i]._id === email) {
                        this.smallGroup[i].adminselected = false;
                    }
                }
                console.log('remove admin', this.smallGroup);
                for (var i in this.allusers) {
                    for (var j in this.smallGroup) {
                        if (this.smallGroup[j].adminselected == false) {
                            if (this.smallGroup[j]._id == this.allusers[i]._id) {
                                this.allusers[i].admin = false;
                            }
                        }
                    }
                }
                console.log('remove', this.allusers);
            }
        }
    };
    EditsmallgroupComponent.prototype.deleteAdmin = function (val, name, email) {
        this.Newusermodal = [];
        this.NewUserModalId = [];
        for (var i in this.smallGroup) {
            if (this.smallGroup[i]._id == val._id) {
                this.smallGroup[i].adminselected = false;
                // this.finalArry.slice(i,1);
            }
            if (this.smallGroup[i].adminselected == true) {
                //this.Newusermodal.push(this.conf[i]);
                this.NewUserModalId.push(this.smallGroup[i]._id);
            }
        }
        this.adminArry = this.NewUserModalId;
        console.log('admin array', this.adminArry);
    };
    /**********************************Delete User***************************************/
    EditsmallgroupComponent.prototype.deleteUser = function (val, name, email) {
        console.log(val, name, email);
        this.smallGroup = [];
        this.smallGroupsId = [];
        for (var i in this.allusers) {
            if (this.allusers[i]._id == val._id) {
                this.allusers[i].selected = false;
                // this.finalArry.slice(i,1);
            }
            if (this.allusers[i].selected == true) {
                this.smallGroup.push(this.allusers[i]);
                this.smallGroupsId.push(this.allusers[i]._id);
            }
        }
        this.userArry = this.smallGroupsId;
        console.log(this.allusers);
        console.log(this.userArry);
    };
    /**********************************get users modal***************************************/
    EditsmallgroupComponent.prototype.getuserVal = function (email, name, isChecked) {
        var api_users = [];
        var finalarry = [];
        this.initial = false;
        this.users_valid = true;
        if (isChecked) {
            for (var i in this.allusers) {
                if (this.allusers[i]._id === email) {
                    this.allusers[i].selected = true;
                }
            }
            console.log('checked new user', this.allusers);
        }
        else {
            for (var i in this.allusers) {
                if (this.allusers[i]._id === email) {
                    this.allusers[i].selected = false;
                }
            }
            console.log('unchecked user', this.allusers);
        }
    };
    /**********************************EDit GRoup***************************************/
    EditsmallgroupComponent.prototype.EditSmallGroup = function (val) {
        var _this = this;
        // console.log('smalllgroup image', this.imageUrl);
        // console.log("latlong", this.latitude, this.longitude)
        console.log('userarrrry', this.userArry);
        console.log('admin array', this.adminArry);
        if (this.latitude) {
            this.latitude = this.latitude;
        }
        else {
            this.latitude = this.data1.venue_latitude;
        }
        if (this.longitude) {
            this.longitude = this.longitude;
        }
        else {
            this.longitude = this.data1.venue_longitude;
        }
        if (this.venue_address) {
            this.venue_address = this.venue_address;
        }
        else {
            this.venue_address = this.data1.venue;
        }
        this.s_time = __WEBPACK_IMPORTED_MODULE_4_moment__(this.newSmallGroup.value.start_time).format('hh:mm a');
        this.e_time = __WEBPACK_IMPORTED_MODULE_4_moment__(this.newSmallGroup.value.end_time).format('hh:mm a');
        // this.stt = new Date("November 13, 2013" + this.s_time);
        // this.stt1 = this.stt.getTime();
        // console.log('starttime',this.stt1);
        // this.endtt = new Date("November 13, 2013 " + this.e_time);
        // this.end11 = this.endtt.getTime();
        // console.log('endtime',this.end11);
        this.stt1 = __WEBPACK_IMPORTED_MODULE_4_moment__(this.newSmallGroup.value.start_time).valueOf();
        console.log('start', this.stt1);
        this.end11 = __WEBPACK_IMPORTED_MODULE_4_moment__(this.newSmallGroup.value.end_time).valueOf();
        console.log('end11', this.end11);
        var data = new FormData();
        data.append('small_group_name', this.newSmallGroup.get('small_group_name').value);
        data.append('small_group_image', this.imageUrl);
        data.append('users', this.userArry);
        data.append('small_group_id', this.small_group_id.id);
        data.append('venue', this.venue_address);
        data.append('small_group_description', this.newSmallGroup.get('small_group_description').value);
        data.append('admin_users', this.adminArry);
        data.append('zip_code', this.zipcode);
        data.append('start_time', this.s_time);
        data.append('days', this.newSmallGroup.get('days').value);
        data.append('end_time', this.e_time);
        data.append('venue_latitude', this.latitude);
        data.append('venue_longitude', this.longitude);
        if (this.userArry != undefined) {
            if (this.userArry.length == 0) {
                console.log("in user length 0 unefined loop");
                // console.log("length")
                this.users_valid = false;
                // console.log("user invaid")
            }
            else if (this.adminArry != undefined) {
                if (this.adminArry.length == 0) {
                    this.user_valid = false;
                    console.log("in admin length 0 unefined loop");
                }
                else {
                    console.log("api hit in user after both correct");
                    this.authService.editSmallGroup(data).then(function (result) {
                        console.log(result);
                        _this.res = result;
                        if (_this.res.status == true) {
                            _this.router.navigateByUrl('/smallgroup');
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
                console.log("api hit in user after both correct");
                if (this.s_time == this.e_time) {
                    alert("Start time and End Time should not be equal");
                }
                else if (this.stt1 > this.end11) {
                    alert("Start time should not be greater than End Time");
                }
                else {
                    this.authService.editSmallGroup(data).then(function (result) {
                        console.log(result);
                        _this.res = result;
                        if (_this.res.status == true) {
                            _this.router.navigateByUrl('/smallgroup');
                        }
                        else {
                            alert(_this.res.message);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
        }
        else if (this.adminArry != undefined) {
            if (this.adminArry.length == 0) {
                this.user_valid = false;
                console.log("in admin length 0 unefined loop");
            }
            else if (this.userArry != undefined) {
                if (this.userArry.length == 0) {
                    console.log("in user length 0 unefined loop");
                    // console.log("length")
                    this.users_valid = false;
                    // console.log("user invaid")
                }
                else {
                    if (this.stt1 == this.end11) {
                        alert("Start time and End Time should not be equal");
                    }
                    else if (this.stt1 > this.end11) {
                        alert("Start time should not be greater than End Time");
                    }
                    else {
                        console.log("hit api afetr admin");
                        this.authService.editSmallGroup(data).then(function (result) {
                            console.log(result);
                            _this.res = result;
                            if (_this.res.status == true) {
                                _this.router.navigateByUrl('/smallgroup');
                            }
                            else {
                                alert(_this.res.message);
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }
            }
            else {
                if (this.stt1 == this.end11) {
                    alert("Start time and End Time should not be equal");
                }
                else if (this.stt1 > this.end11) {
                    alert("Start time should not be greater than End Time");
                }
                else {
                    console.log("hit api afetr admin");
                    this.authService.editSmallGroup(data).then(function (result) {
                        console.log(result);
                        _this.res = result;
                        if (_this.res.status == true) {
                            _this.router.navigateByUrl('/smallgroup');
                        }
                        else {
                            alert(_this.res.message);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
        }
        else {
            console.log("in child else 0 unefined loop");
            if (this.stt1 == this.end11) {
                alert("Start time and End Time should not be equal");
            }
            else if (this.stt1 > this.end11) {
                alert("Start time should not be greater than End Time");
            }
            else {
                // console.log(data);
                this.authService.editSmallGroup(data).then(function (result) {
                    console.log(result);
                    _this.res = result;
                    if (_this.res.status == true) {
                        _this.router.navigateByUrl('/smallgroup');
                    }
                    else {
                        alert(_this.res.message);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
        //  }
        //  else if(this.adminArry!=undefined){
        //    console.log('elsepart');
        //   if (this.adminArry.length == 0) {
        //     this.user_valid = false;
        //     console.log('admin invalid');
        // }
        //  } 
        // else {
        //   console.log("inparent else unefined loop")
        //   this.s_time = moment(this.newSmallGroup.value.start_time).format('hh:mm a');
        //   this.e_time = moment(this.newSmallGroup.value.end_time).format('hh:mm a');
        //   let data = new FormData();
        //   data.append('small_group_name', this.newSmallGroup.get('small_group_name').value);
        //   data.append('small_group_image', this.imageUrl);
        //   data.append('users', this.userArry);
        //   data.append('small_group_id', this.small_group_id.id);
        //   data.append('venue', this.venue_address);
        //   data.append('small_group_description', this.newSmallGroup.get('small_group_description').value);
        //   data.append('admin_users', this.adminArry);
        //   data.append('start_time', this.s_time);
        //   data.append('days', this.newSmallGroup.get('days').value);
        //   data.append('end_time', this.e_time);
        //   data.append('venue_latitude', this.latitude);
        //   data.append('venue_longitude', this.longitude);
        //   // console.log(data);
        //   // this.authService.editSmallGroup(data).then((result) => {
        //   //   console.log(result);
        //   //   this.res = result;
        //   //   if (this.res.status == true) {
        //   //     this.router.navigateByUrl('/smallgroup');
        //   //   }
        //   //   else {
        //   //     alert(this.res.message);
        //   //   }
        //   // }, (err) => {
        //   //   console.log(err);
        //   // });
        // }
    };
    // else{       //  console.log("invaliddd")       // }  }Sent on:12:52 pm
    /**********************************gET DETAIL***************************************/
    EditsmallgroupComponent.prototype.detail = function () {
        var _this = this;
        var params = {
            'id': this.small_group_id.id
        };
        this.authService.getSmall(params).then(function (result) {
            console.log('detail resp', result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data1 = _this.res.data;
                _this.selectedUsers = _this.data1.users;
                console.log('selected users', _this.selectedUsers);
                _this.newSmallGroup.get('small_group_name').setValue(_this.data1.small_group_name);
                _this.newSmallGroup.get('small_group_description').setValue(_this.data1.small_group_description);
                _this.newSmallGroup.get('venue').setValue(_this.data1.venue);
                _this.newSmallGroup.get('days').setValue(_this.data1.days);
                // this.newSmallGroup.get('start_time').setValue(this.data1.start_time);
                _this.timer = new Date(new Date().toDateString() + ' ' + _this.data1.start_time);
                _this.timer1 = new Date(new Date().toDateString() + ' ' + _this.data1.end_time);
                _this.newSmallGroup.get('start_time').setValue(_this.timer);
                _this.newSmallGroup.get('end_time').setValue(_this.timer1);
                // console.log(this.data1);
                _this.api_image = _this.data1.small_group_image;
                // console.log('imgageeeeeeeeeeeeeeeeeeeeeeeeee',this.api_image);
                // console.log(this.api_image);
                _this.values = _this.data1;
                // console.log('valueeeeeeeeeeeeeee', this.values);
                _this.api_users = _this.data1.users;
                _this.api_admins = _this.data1.admin_users;
                console.log('admin selected', _this.api_admins);
                //console.log('in detail', this.selectedUsers);
                _this.users();
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get Users***************************************/
    EditsmallgroupComponent.prototype.users = function () {
        var _this = this;
        this.notvalid = true;
        this.apiuser = true;
        this.authService.getUsers().then(function (result) {
            // console.log('user response', result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.allusers = _this.res.data;
                console.log(_this.allusers);
                var selectedArray = [];
                // console.log('in users', this.selectedUsers);
                for (var i in _this.allusers) {
                    for (var j in _this.selectedUsers) {
                        if (_this.selectedUsers[j]._id == _this.allusers[i]._id) {
                            //     console.log("show checked selected user", this.allusers[i]._id, this.selectedUsers[j]._id);
                            _this.allusers[i].selected = true;
                        }
                    }
                    if (_this.allusers[i].selected == true) {
                        _this.smallGroup.push(_this.allusers[i]);
                    }
                }
                // console.log('admin array', this.smallGroup);
                // console.log("after checked", this.allusers);
                // for (var i in this.rawdata) {
                //   if (this.rawdata[i].selected == true) {
                //     this.smallGroup.push(this.rawdata[i])
                //   }
                // }
                //    console.log('smaaaalgroup', this.smallGroup);
                // console.log('api_admin', this.api_admins);
                for (var i in _this.smallGroup) {
                    for (var j in _this.api_admins) {
                        if (_this.api_admins[j]._id == _this.smallGroup[i]._id) {
                            //     console.log("admin select", this.api_admins[j]._id, this.smallGroup[i]._id);
                            _this.smallGroup[i].adminselected = true;
                        }
                    }
                }
                //  console.log('admin array with admin selected',this.smallGroup);
                //  console.log('adminselected', this.smallGroup);
                for (var i in _this.allusers) {
                    for (var j in _this.smallGroup) {
                        if (_this.smallGroup[j].adminselected == true) {
                            if (_this.smallGroup[j]._id == _this.allusers[i]._id) {
                                _this.allusers[i].admin = true;
                            }
                        }
                    }
                }
                console.log('admin disabled', _this.allusers);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditsmallgroupComponent.prototype, "searchElementRef", void 0);
    EditsmallgroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editsmallgroup',
            template: __webpack_require__("../../../../../src/app/layout/editsmallgroup/editsmallgroup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/editsmallgroup/editsmallgroup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], EditsmallgroupComponent);
    return EditsmallgroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/editsmallgroup/editsmallgroup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSmallModule", function() { return EditSmallModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editsmallgroup_routing_module__ = __webpack_require__("../../../../../src/app/layout/editsmallgroup/editsmallgroup-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editsmallgroup_component__ = __webpack_require__("../../../../../src/app/layout/editsmallgroup/editsmallgroup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';













var EditSmallModule = (function () {
    function EditSmallModule() {
    }
    EditSmallModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__editsmallgroup_routing_module__["a" /* EditSmallRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_7_ng_pick_datetime__["a" /* OwlDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_pick_datetime__["b" /* OwlNativeDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_6_mydatepicker__["MyDatePickerModule"], __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["a" /* MatCardModule */],],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__editsmallgroup_component__["a" /* EditsmallgroupComponent */]]
        })
    ], EditSmallModule);
    return EditSmallModule;
}());



/***/ })

});
//# sourceMappingURL=editsmallgroup.module.chunk.js.map