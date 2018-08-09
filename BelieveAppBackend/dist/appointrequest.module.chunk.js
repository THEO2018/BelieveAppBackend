webpackJsonp(["appointrequest.module"],{

/***/ "../../../../../src/app/layout/appointrequest/appointrequest-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointrequestRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointrequest_component__ = __webpack_require__("../../../../../src/app/layout/appointrequest/appointrequest.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__appointrequest_component__["a" /* AppointrequestComponent */]
    }
];
var AppointrequestRoutingModule = (function () {
    function AppointrequestRoutingModule() {
    }
    AppointrequestRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppointrequestRoutingModule);
    return AppointrequestRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/appointrequest/appointrequest.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n\t\t\t\n\t\t\t<div class=\"tables_area\">\n\t\t\t\t<h2 class=\"pull-left\">Appointment Requests</h2>\n\t\t\t\t<div class=\"clear\"></div>\n\n<ul class=\"requests\">\n\t<li class=\"alert alert-success\" *ngFor=\"let grouplist of data\">{{grouplist.user_id.first_name}} has requested  for the '{{grouplist.title}}' Appointment on  {{grouplist.day_of_appointment}} {{grouplist.date_of_appointment}}\n\t\t<div class=\"success_action\">\n\t\t\t<a class=\"accept_request\" (click)=\"accept(grouplist._id)\">Accept</a>\n\t\t\t<a (click)=\"reject(grouplist._id)\">Reject</a>\n\t\t</div>\n\n\n\t\t\n\n\t\t<div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t  <div class=\"modal-dialog\" role=\"document\">\n\t\t    <div class=\"modal-content\">  \n\t\t     <div class=\"modal-body text-center\">\n\t\t      \t<p>Are you sure you want to accept the Appointment?</p>\n\t\t      \t<a class=\"blue_btn\" (click)=\"ApoinmentsAR('A')\">Yes</a>\n\t\t      \t<a class=\"blue_btn\" data-dismiss=\"modal\">No</a>\n\t\t      </div>\n\t\t       </div>\n\t\t  </div>\n\t\t</div>\n\n\t\t<div class=\"modal fade\" id=\"reject\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t  <div class=\"modal-dialog\" role=\"document\">\n\t\t    <div class=\"modal-content\">  \n\t\t     <div class=\"modal-body text-center\">\n\t\t      \t<p>Are you sure you want to reject the Appointment?</p>\n\t\t      \t<a class=\"blue_btn\" (click)=\"ApoinmentsAR('R')\">OK</a>\n\t\t      \t<a class=\"blue_btn\" data-dismiss=\"modal\">Cancel</a>\n\t\t      </div>\n\t\t       </div>\n\t\t  </div>\n\t\t</div>\n\n\n\t</li>\n</ul>\n\n  </div>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/appointrequest/appointrequest.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\nul.requests {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n  ul.requests li {\n    position: relative;\n    padding-right: 175px; }\n    ul.requests li .success_action {\n      position: absolute;\n      right: 8px;\n      top: 8px; }\n      ul.requests li .success_action a {\n        background: #000;\n        color: #fff !important;\n        display: inline-block;\n        border-radius: 5px;\n        padding: 3px 10px;\n        font-weight: 700;\n        font-size: 14px;\n        margin: 3px;\n        cursor: pointer; }\n      ul.requests li .success_action a.accept_request {\n        background: #155724; }\n\n.modal-body.text-center {\n  background: #F78C6A;\n  color: #fff; }\n  .modal-body.text-center a.blue_btn {\n    background: #fff;\n    color: #fff;\n    border-radius: 5px;\n    display: inline-block;\n    color: #F78C6A !important;\n    padding: 3px 15px;\n    font-weight: 700; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/appointrequest/appointrequest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointrequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppointrequestComponent = (function () {
    function AppointrequestComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AppointrequestComponent.prototype.ngOnInit = function () {
        this.Apoinments();
    };
    AppointrequestComponent.prototype.accept = function (id) {
        console.log("accceeeptttt id", id);
        jQuery("#request").modal("show");
        this.id = id;
    };
    AppointrequestComponent.prototype.reject = function (id) {
        console.log("rejecttttt id", id);
        jQuery("#reject").modal("show");
        this._id = id;
    };
    /**********************************Accept/Reject Apoinments***************************************/
    AppointrequestComponent.prototype.ApoinmentsAR = function (status) {
        var _this = this;
        if (status == 'A') {
            this.f_id = this.id;
        }
        else {
            this.f_id = this._id;
        }
        console.log("final id", this.f_id);
        var params = {
            'id': this.f_id,
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
    AppointrequestComponent.prototype.Apoinments = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getApoinments().then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data = _this.res.data;
                console.log(_this.data);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    AppointrequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appointrequest',
            template: __webpack_require__("../../../../../src/app/layout/appointrequest/appointrequest.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/appointrequest/appointrequest.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */]])
    ], AppointrequestComponent);
    return AppointrequestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/appointrequest/appointrequest.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointrequestModule", function() { return AppointrequestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appointrequest_routing_module__ = __webpack_require__("../../../../../src/app/layout/appointrequest/appointrequest-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointrequest_component__ = __webpack_require__("../../../../../src/app/layout/appointrequest/appointrequest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppointrequestModule = (function () {
    function AppointrequestModule() {
    }
    AppointrequestModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__appointrequest_routing_module__["a" /* AppointrequestRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__appointrequest_component__["a" /* AppointrequestComponent */]]
        })
    ], AppointrequestModule);
    return AppointrequestModule;
}());



/***/ })

});
//# sourceMappingURL=appointrequest.module.chunk.js.map