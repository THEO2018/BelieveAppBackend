webpackJsonp(["grouprequest.module"],{

/***/ "../../../../../src/app/layout/grouprequest/grouprequest-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrouprequestRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grouprequest_component__ = __webpack_require__("../../../../../src/app/layout/grouprequest/grouprequest.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__grouprequest_component__["a" /* GrouprequestComponent */]
    }
];
var GrouprequestRoutingModule = (function () {
    function GrouprequestRoutingModule() {
    }
    GrouprequestRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], GrouprequestRoutingModule);
    return GrouprequestRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/grouprequest/grouprequest.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"requests\">\n\t<li class=\"alert alert-success\"  *ngFor=\"let grouplist of data\"><a [routerLink]=\"['/user', grouplist.user_id._id]\" [routerLinkActive]=\"['router-link-active']\" style=\"color: #000000\">{{grouplist.user_id.first_name}}</a> has requested to add into this group\n\t\t <div class=\"success_action\">\n\t\t\t<a class=\"accept_request\" (click)=\"acceptModal(grouplist._id,grouplist.user_id._id)\">Accept</a>\n\t\t\t\t<a  (click)=\"rejectModal(grouplist._id,grouplist.user_id._id)\">Reject</a>\n\t\t </div>\n \n\t\t <div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t    <div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t    <div class=\"modal-content\">  \n\t\t\t\t        <div class=\"modal-body text-center\">\n\t\t\t\t           <p>Are you sure you want to accept the request?</p>\n\t\t\t\t             <a class=\"blue_btn\" (click)=\"actionRequests('Y')\">Yes</a>\n\t\t\t\t      \t     <a class=\"blue_btn\" data-dismiss=\"modal\">No</a>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t  </div>\n\n\t\t<div class=\"modal fade\" id=\"reject\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t    <div class=\"modal-content\">  \n\t\t\t\t        <div class=\"modal-body text-center\">\n\t\t\t\t      \t    <p>Are you sure you want to reject the request?</p>\n\t\t\t\t      \t      <a class=\"blue_btn\" (click)=\"actionRequests('N')\">OK</a>\n\t\t\t\t      \t      <a class=\"blue_btn\" data-dismiss=\"modal\">Cancel</a>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t    </div>\n\t\t </div>\n    </li>\n</ul>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/grouprequest/grouprequest.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.requests {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n  ul.requests li {\n    position: relative;\n    padding-right: 175px; }\n    ul.requests li .success_action {\n      position: absolute;\n      right: 8px;\n      top: 8px; }\n      ul.requests li .success_action a {\n        background: #000;\n        color: #fff !important;\n        display: inline-block;\n        border-radius: 5px;\n        padding: 3px 10px;\n        font-weight: 700;\n        font-size: 14px;\n        margin: 3px;\n        cursor: pointer; }\n      ul.requests li .success_action a.accept_request {\n        background: #155724; }\n\n.modal-body.text-center {\n  background: #F78C6A;\n  color: #fff; }\n  .modal-body.text-center a.blue_btn {\n    background: #fff;\n    color: #fff;\n    border-radius: 5px;\n    display: inline-block;\n    color: #F78C6A !important;\n    padding: 3px 15px;\n    font-weight: 700; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/grouprequest/grouprequest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrouprequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GrouprequestComponent = (function () {
    function GrouprequestComponent(route, authService, router) {
        var _this = this;
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.group_id = params.id;
            _this.type = params.id2;
            if (_this.type == 'smallgroup') {
                _this.joinSmallRequests();
            }
            else {
                _this.joinRequests();
            }
        });
    }
    GrouprequestComponent.prototype.ngOnInit = function () {
    };
    GrouprequestComponent.prototype.acceptModal = function (id, u_id) {
        this.req_id = id;
        this.u_id = u_id;
        jQuery('#request').modal({ backdrop: 'static', keyboard: false });
        jQuery("#request").modal("show");
    };
    GrouprequestComponent.prototype.rejectModal = function (id, u_id) {
        this.req_id = id;
        this.u_id = u_id;
        jQuery('#reject').modal({ backdrop: 'static', keyboard: false });
        jQuery("#reject").modal("show");
    };
    /**********************************Accept/Reject Group Join Requests**************************************/
    GrouprequestComponent.prototype.actionRequests = function (status) {
        var _this = this;
        if (this.type == 'smallgroup') {
            var params = {
                'id': this.req_id,
                'status': status,
                'g_id': this.group_id,
                'u_id': this.u_id
            };
            this.authService.acp_rej_smallgroup_req(params).then(function (result) {
                console.log(result);
                _this.res = result;
                jQuery("#reject").modal("hide");
                jQuery("#request").modal("hide");
                if (_this.res.status == true) {
                    _this.router.navigateByUrl('/smallgroup');
                    _this.joinSmallRequests();
                }
                else {
                    console.log("erorr");
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            var params = {
                'id': this.req_id,
                'status': status,
                'g_id': this.group_id,
                'u_id': this.u_id
            };
            this.authService.acp_rej_group_req(params).then(function (result) {
                console.log(result);
                _this.res = result;
                jQuery("#reject").modal("hide");
                jQuery("#request").modal("hide");
                if (_this.res.status == true) {
                    _this.router.navigateByUrl('/groups');
                    _this.joinRequests();
                }
                else {
                    console.log("erorr");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    /**********************************Get Small Group Join Requests**************************************/
    GrouprequestComponent.prototype.joinSmallRequests = function () {
        var _this = this;
        var params = {
            'id': this.group_id
        };
        this.authService.getSmallGroupRequests(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data = _this.res.data;
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get Group Join Requests**************************************/
    GrouprequestComponent.prototype.joinRequests = function () {
        var _this = this;
        var params = {
            'id': this.group_id
        };
        this.authService.getGroupRequests(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data = _this.res.data;
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    GrouprequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grouprequest',
            template: __webpack_require__("../../../../../src/app/layout/grouprequest/grouprequest.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/grouprequest/grouprequest.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], GrouprequestComponent);
    return GrouprequestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/grouprequest/grouprequest.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrouprequestModule", function() { return GrouprequestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grouprequest_routing_module__ = __webpack_require__("../../../../../src/app/layout/grouprequest/grouprequest-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grouprequest_component__ = __webpack_require__("../../../../../src/app/layout/grouprequest/grouprequest.component.ts");
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





var GrouprequestModule = (function () {
    function GrouprequestModule() {
    }
    GrouprequestModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__grouprequest_routing_module__["a" /* GrouprequestRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__grouprequest_component__["a" /* GrouprequestComponent */]]
        })
    ], GrouprequestModule);
    return GrouprequestModule;
}());



/***/ })

});
//# sourceMappingURL=grouprequest.module.chunk.js.map