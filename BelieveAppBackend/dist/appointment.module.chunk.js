webpackJsonp(["appointment.module"],{

/***/ "../../../../../src/app/layout/appointment/appointment-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment_component__ = __webpack_require__("../../../../../src/app/layout/appointment/appointment.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__appointment_component__["a" /* AppointmentComponent */]
    }
];
var AppointmentRoutingModule = (function () {
    function AppointmentRoutingModule() {
    }
    AppointmentRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppointmentRoutingModule);
    return AppointmentRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/appointment/appointment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n\t\t\t\n\t\t\t<div class=\"tables_area\">\n\t\t\t\t<h2 class=\"pull-left\" *ngIf=\"_today\">Today's Appointments</h2>\n\t\t\t\t<h2 class=\"pull-left\" *ngIf=\"_up\">Upcoming Appointments</h2>\n\t\t\t\t<a  class=\"blue_btn relative_btn yellow_btn pull-right text-uppercase\"  *ngIf=\"_today\" (click)=\"today()\">Upcoming</a>\n\t\t\t\t<a  class=\"blue_btn relative_btn yellow_btn pull-right text-uppercase\" *ngIf=\"_up\" (click)=\"upcoming()\">Today</a>\n\t\t\t\t<a  class=\"blue_btn relative_btn yellow_btn pull-right text-uppercase\"  routerLink=\"/appointrequest\" [routerLinkActive]=\"['router-link-active']\">View Requests<span class=\"counter_circle\">{{count}}</span></a>\n\t\t\t\t<div class=\"clear\"></div>\n\n\t<div class=\"white_box\" *ngIf=\"_today\">\n\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" id=\"\" class=\"display\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">Title</th>\n\t\t\t\t\t\t\t\t\t<th width=\"10%\">Day/Date </th>\n\t\t\t\t\t\t\t\t\t<th width=\"35%\">Time</th>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">Added By</th>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">Profile</th>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">ACTION</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr  *ngFor=\"let grouplist of data\">\n\t\t\t\t\t\t\t\t\t<td>{{grouplist.title}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{grouplist.day_of_appointment}}/{{grouplist.date_of_appointment}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{grouplist.time_from}}-{{grouplist.time_to}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{grouplist.user_id.first_name}} {{grouplist.user_id.last_name}}</td>\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"grouplist.user_id.profile_image\"><img src=\"{{grouplist.user_id.profile_image}}\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"/></td>\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"!grouplist.user_id.profile_image\"><img src=\"../../assets/images/logo.png\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"/></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<a  class=\"action_btn\"><i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"RemoveClick(grouplist._id)\"></i></a>\n\t\t\t\t\t\t\t\t\t</td>\n\n\n\t\t\t\t\t\t\t\t\t<div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t\t\t\t  <div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t\t\t    <div class=\"modal-content\">  \n\t\t\t\t\t\t\t\t\t     <div class=\"modal-body text-center\">\n\t\t\t\t\t\t\t\t\t      \t<p>Are you sure you want to Delete?</p>\n\t\t\t\t\t\t\t\t\t      \t<a class=\"blue_btn\" (click)=\"RemoveComm()\">Yes</a>\n\t\t\t\t\t\t\t\t\t      \t<a data-dismiss=\"modal\" class=\"blue_btn\">No</a>\n\t\t\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t\t\t       </div>\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n\t<div class=\"white_box\" *ngIf=\"_up\">\n\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" id=\"\" class=\"display\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">Title</th>\n\t\t\t\t\t\t\t\t\t<th width=\"35%\">Day/Date </th>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">Time</th>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">Added By</th>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">Profile</th>\n\t\t\t\t\t\t\t\t\t<th width=\"10%\">ACTION</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr  *ngFor=\"let grouplist of _data\">\n\t\t\t\t\t\t\t\t\t<td>{{grouplist.title}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{grouplist.day_of_appointment}}/{{grouplist.date_of_appointment}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{grouplist.time_from}}-{{grouplist.time_to}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{grouplist.user_id.first_name}} {{grouplist.user_id.last_name}}</td>\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"grouplist.user_id.profile_image\"><img src=\"{{grouplist.user_id.profile_image}}\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"/></td>\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"!grouplist.user_id.profile_image\"><img src=\"../../assets/images/logo.png\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"/></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<a  class=\"action_btn\"><i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"RemoveClick(grouplist._id)\"></i></a>\n\t\t\t\t\t\t\t\t\t</td>\n\n\n\t\t\t\t\t\t\t\t\t<div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t\t\t\t  <div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t\t\t    <div class=\"modal-content\">  \n\t\t\t\t\t\t\t\t\t     <div class=\"modal-body text-center\">\n\t\t\t\t\t\t\t\t\t      \t<p>Are you sure you want to Delete?</p>\n\t\t\t\t\t\t\t\t\t      \t<a class=\"blue_btn\" (click)=\"RemoveComm()\">Yes</a>\n\t\t\t\t\t\t\t\t\t      \t<a data-dismiss=\"modal\" class=\"blue_btn\">No</a>\n\t\t\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t\t\t       </div>\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n  </div>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/appointment/appointment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\nspan.counter_circle {\n  position: absolute;\n  width: 30px;\n  background: #F78C6A;\n  border-radius: 100%;\n  top: -17px;\n  right: -10px;\n  height: 30px;\n  color: #fff;\n  text-align: center;\n  font-size: 12px;\n  line-height: 30px; }\n\n.relative_btn {\n  position: relative; }\n\n.clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n\n.blue_btn + .blue_btn {\n  margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/appointment/appointment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net__ = __webpack_require__("../../../../datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppointmentComponent = (function () {
    function AppointmentComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this._up = false;
        this._today = true;
    }
    AppointmentComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('table.display').DataTable({
                "bPaginate": true,
                "bLengthChange": true,
                // "pageLength": 7,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
            });
        }, 500);
        this.Apoinments();
    };
    AppointmentComponent.prototype.upcoming = function () {
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('table.display').DataTable({
                "bPaginate": true,
                "bLengthChange": true,
                // "pageLength": 7,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
            });
        }, 500);
        this._today = true;
        this._up = false;
    };
    AppointmentComponent.prototype.today = function () {
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('table.display').DataTable({
                "bPaginate": true,
                "bLengthChange": true,
                // "pageLength": 7,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
            });
        }, 500);
        this._up = true;
        this._today = false;
    };
    /**********************************Accept/Reject Apoinments***************************************/
    AppointmentComponent.prototype.ApoinmentsAR = function (status, id) {
        var _this = this;
        var params = {
            'id': id,
            'status': status
        };
        // alert("hiiii")
        this.authService.appointmentStatus(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                jQuery("#request").modal("hide");
                jQuery("#reject").modal("hide");
                _this.Apoinments();
                // this.data=this.res.data;
                console.log(_this.data);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get Apoinments***************************************/
    AppointmentComponent.prototype.Apoinments = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getUpTOApoinments().then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.count = _this.res.data.appointmentRequestsCount;
                _this.data = _this.res.data.todaysAppointments;
                _this._data = _this.res.data.upcomingAppointments;
                console.log(_this.data);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    AppointmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appointment',
            template: __webpack_require__("../../../../../src/app/layout/appointment/appointment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/appointment/appointment.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */]])
    ], AppointmentComponent);
    return AppointmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/appointment/appointment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentModule", function() { return AppointmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appointment_routing_module__ = __webpack_require__("../../../../../src/app/layout/appointment/appointment-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointment_component__ = __webpack_require__("../../../../../src/app/layout/appointment/appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppointmentModule = (function () {
    function AppointmentModule() {
    }
    AppointmentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__appointment_routing_module__["a" /* AppointmentRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__appointment_component__["a" /* AppointmentComponent */]]
        })
    ], AppointmentModule);
    return AppointmentModule;
}());



/***/ })

});
//# sourceMappingURL=appointment.module.chunk.js.map