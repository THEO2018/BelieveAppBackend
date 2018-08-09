webpackJsonp(["requests.module"],{

/***/ "../../../../../src/app/layout/requests/requests-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requests_component__ = __webpack_require__("../../../../../src/app/layout/requests/requests.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__requests_component__["a" /* RequestsComponent */]
    }
];
var RequestsRoutingModule = (function () {
    function RequestsRoutingModule() {
    }
    RequestsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], RequestsRoutingModule);
    return RequestsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/requests/requests.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"requests\">\n\t<li class=\"alert alert-success\"  *ngFor=\"let grouplist of data\"><span *ngIf=\"grouplist.first_user_id.gender == 'Female'\"><a [routerLink]=\"['/user', grouplist.first_user_id._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\">{{grouplist.first_user_id.first_name}}</a> has requested to add <a [routerLink]=\"['/user', grouplist.second_user_id._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\">{{grouplist.second_user_id.first_name}}</a> with her as Betrothed </span>\n\t\n\t<span *ngIf=\"grouplist.first_user_id.gender == 'Male'\"><a [routerLink]=\"['/user', grouplist.first_user_id._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\">{{grouplist.first_user_id.first_name}}</a> has requested to add <a [routerLink]=\"['/user', grouplist.second_user_id._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\">{{grouplist.second_user_id.first_name}}</a> with him as Betrothed </span>\n\t\t<div class=\"success_action\">\n\t\t\t<a class=\"accept_request\" data-toggle=\"modal\" data-target=\"#request\">Accept</a>\n\t\t\t<a data-toggle=\"modal\" data-target=\"#reject\">Reject</a>\n\t\t</div>\n\n\n\t\t<div class=\"modal fade\" id=\"accept\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t  <div class=\"modal-dialog\" role=\"document\">\n\t\t    <div class=\"modal-content\">  \n\t\t     <div class=\"modal-body text-center\">\n\t\t      \t<p>Select Visibility Status for Users</p>\n\t\t      \t<a class=\"blue_btn\" (click)=\"BethrodRequest('A','Y',grouplist._id)\">On</a>\n\t\t      \t<a class=\"blue_btn\" (click)=\"BethrodRequest('A','N',grouplist._id)\">Off</a>\n\t\t      </div>\n\t\t       </div>\n\t\t  </div>\n\t\t</div>\n\n\t\t<div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t  <div class=\"modal-dialog\" role=\"document\">\n\t\t    <div class=\"modal-content\">  \n\t\t     <div class=\"modal-body text-center\">\n\t\t      \t<p>Are you sure you want to add this user?</p>\n\t\t      \t<a class=\"blue_btn\" (click)=\"bethrods()\">Yes</a>\n\t\t      \t<a class=\"blue_btn\" data-dismiss=\"modal\">No</a>\n\t\t      </div>\n\t\t       </div>\n\t\t  </div>\n\t\t</div>\n\n\t\t<div class=\"modal fade\" id=\"reject\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t  <div class=\"modal-dialog\" role=\"document\">\n\t\t    <div class=\"modal-content\">  \n\t\t     <div class=\"modal-body text-center\">\n\t\t      \t<p>Are you sure you want to remove this user?</p>\n\t\t      \t<a class=\"blue_btn\" (click)=\"BethrodRequest('R','',grouplist._id)\">OK</a>\n\t\t      \t<a class=\"blue_btn\" data-dismiss=\"modal\">Cancel</a>\n\t\t      </div>\n\t\t       </div>\n\t\t  </div>\n\t\t</div>\n\n\n\t</li>\n</ul>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/requests/requests.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.requests {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n  ul.requests li {\n    position: relative;\n    padding-right: 175px; }\n    ul.requests li .success_action {\n      position: absolute;\n      right: 8px;\n      top: 8px; }\n      ul.requests li .success_action a {\n        background: #000;\n        color: #fff !important;\n        display: inline-block;\n        border-radius: 5px;\n        padding: 3px 10px;\n        font-weight: 700;\n        font-size: 14px;\n        margin: 3px;\n        cursor: pointer; }\n      ul.requests li .success_action a.accept_request {\n        background: #155724; }\n\n.modal-body.text-center {\n  background: #F78C6A;\n  color: #fff; }\n  .modal-body.text-center a.blue_btn {\n    background: #fff;\n    color: #fff;\n    border-radius: 5px;\n    display: inline-block;\n    color: #F78C6A !important;\n    padding: 3px 15px;\n    font-weight: 700; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/requests/requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestsComponent = (function () {
    function RequestsComponent(router, fb, authService) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
    }
    RequestsComponent.prototype.ngOnInit = function () {
        this.GetwedList();
    };
    RequestsComponent.prototype.bethrods = function () {
        // console.log(val)
        jQuery("#request").modal("hide");
        jQuery("#accept").modal("show");
    };
    /********************************** Get Bethrod Request**************************************/
    RequestsComponent.prototype.BethrodRequest = function (val, value, id) {
        var _this = this;
        console.log(val, value, id);
        jQuery("#reject").modal("hide");
        jQuery("#accept").modal("hide");
        var params = {
            'betrothed_id': id,
            'accept_status': val,
            'visibility_status': value
        };
        this.authService.bethrodRequest(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.GetwedList();
                console.log(_this.data);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get wedding List**************************************/
    RequestsComponent.prototype.GetwedList = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getBethRequests().then(function (result) {
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
    RequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-requests',
            template: __webpack_require__("../../../../../src/app/layout/requests/requests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/requests/requests.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */]])
    ], RequestsComponent);
    return RequestsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/requests/requests.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsModule", function() { return RequestsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requests_routing_module__ = __webpack_require__("../../../../../src/app/layout/requests/requests-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requests_component__ = __webpack_require__("../../../../../src/app/layout/requests/requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { RequestsRoutingModule as Ng2Charts } from 'ng2-charts';





var RequestsModule = (function () {
    function RequestsModule() {
    }
    RequestsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__requests_routing_module__["a" /* RequestsRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__requests_component__["a" /* RequestsComponent */]]
        })
    ], RequestsModule);
    return RequestsModule;
}());



/***/ })

});
//# sourceMappingURL=requests.module.chunk.js.map