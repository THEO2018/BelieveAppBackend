webpackJsonp(["requestrecomm.module"],{

/***/ "../../../../../src/app/layout/requestrecomm/requestrecomm-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestrecommRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requestrecomm_component__ = __webpack_require__("../../../../../src/app/layout/requestrecomm/requestrecomm.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__requestrecomm_component__["a" /* RequestrecommComponent */]
    }
];
var RequestrecommRoutingModule = (function () {
    function RequestrecommRoutingModule() {
    }
    RequestrecommRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], RequestrecommRoutingModule);
    return RequestrecommRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/requestrecomm/requestrecomm.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"requests\">\n\t<li class=\"alert alert-success\"  *ngFor=\"let grouplist of data\">{{grouplist.user_id.first_name}} {{grouplist.user_id.last_name}} has requested for the Recommendation\n\t\t<div class=\"success_action\">\n\t\t\t<a class=\"accept_request\" (click)=\"accept(grouplist._id,grouplist.user_id.email)\">Accept</a>\n\t\t\t<a (click)=\"reject(grouplist._id,grouplist.user_id.email)\">Cancel</a>\n\t\t</div>\n\n\n\t<div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t\t\t\t  <div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t\t\t    <div class=\"modal-content\">  \n\t\t\t\t\t\t\t\t\t     <div class=\"modal-body text-center\">\n\t\t\t\t\t\t\t\t\t     \t<h2 class=\"title_head\">Accept Recommendation</h2>\n\t\t\t\t\t\t\t\t\t      \t<form  [formGroup]=\"myForm\" (ngSubmit)=\"AproveCancelRecomm('A',myForm.value)\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t   <!-- <label class=\"text-uppercase\">Email*</label> -->\n\t\t\t\t\t\t\t\t\t<input id=\"name\" type=\"email\" value=\"\" placeholder=\"Enter Email\" class=\"form-control\"  [attr.maxlength]=\"50\" formControlName=\"email\"/>\n\t\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t                    \t\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<aside class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t  <!--  <label class=\"text-uppercase\">Description*</label> -->\n\t\t\t\t\t\t\t\t\t<textarea id=\"des\" value=\"\" placeholder=\"Enter Description\" class=\"form-control\"  [attr.maxlength]=\"500\" formControlName=\"admin_description\"></textarea>\n\t\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"blue_btn  text-uppercase\">Submit</button>\n\t\t\t\t\t\t\t\t<button  type=\"submit\" class=\"blue_btn  text-uppercase\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t\t\t       </div>\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t<div class=\"modal fade\" id=\"reject\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t  <div class=\"modal-dialog\" role=\"document\">\n\t\t    <div class=\"modal-content\">  \n\t\t     <div class=\"modal-body text-center\">\n\t\t      \t<p>Are you sure you want to reject this Recommendation?</p>\n\t\t      \n\t\t      \t<a class=\"blue_btn\" (click)=\"AproveCancelRecomm('C')\">OK</a>\n\t\t      \t<a class=\"blue_btn\" data-dismiss=\"modal\">Cancel</a>\n\t\t      </div>\n\t\t       </div>\n\t\t  </div>\n\t\t</div>\n\n\n\t</li>\n</ul>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/requestrecomm/requestrecomm.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.requests {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n  ul.requests li {\n    position: relative;\n    padding-right: 175px; }\n    ul.requests li .success_action {\n      position: absolute;\n      right: 8px;\n      top: 8px; }\n      ul.requests li .success_action a {\n        background: #000;\n        color: #fff !important;\n        display: inline-block;\n        border-radius: 5px;\n        padding: 3px 10px;\n        font-weight: 700;\n        font-size: 14px;\n        margin: 3px;\n        cursor: pointer; }\n      ul.requests li .success_action a.accept_request {\n        background: #155724; }\n\n.modal-body.text-center {\n  background: #F78C6A;\n  color: #fff; }\n  .modal-body.text-center a.blue_btn {\n    background: #fff;\n    color: #fff;\n    border-radius: 5px;\n    display: inline-block;\n    color: #F78C6A !important;\n    padding: 3px 15px;\n    font-weight: 700; }\n  .modal-body.text-center .blue_btn {\n    background: #F78C6A;\n    border-radius: 5px;\n    color: #fff !important;\n    text-decoration: none !important;\n    font-size: 14px;\n    border: none;\n    padding: 5px 22px;\n    display: inline-block;\n    line-height: 26px;\n    margin-top: 20px;\n    font-weight: 600; }\n  .modal-body.text-center .blue_btn:hover {\n    background: #eb7650; }\n  .modal-body.text-center .blue_btn.black_btn {\n    background: #2c2c2c; }\n  .modal-body.text-center .top_form {\n    padding-bottom: 20px; }\n  .modal-body.text-center .top_form .yellow_btn {\n    height: 39px;\n    margin: 0;\n    vertical-align: middle;\n    padding: 6px 35px;\n    font-size: 18px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/requestrecomm/requestrecomm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestrecommComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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





var RequestrecommComponent = (function () {
    function RequestrecommComponent(router, fb, authService) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
    }
    RequestrecommComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            admin_description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]
        });
        this.GetRecommendationRequests();
    };
    RequestrecommComponent.prototype.ngAfterContentChecked = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#des").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#name").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    };
    RequestrecommComponent.prototype.accept = function (id, email) {
        this.id = id;
        this.email = email;
        // console.log(val)
        jQuery("#request").modal("show");
    };
    RequestrecommComponent.prototype.reject = function (id, email) {
        this.id = id;
        this.email = email;
        jQuery("#reject").modal("show");
    };
    /**********************************Approve/cancel Recommendation Requests***************************************/
    RequestrecommComponent.prototype.AproveCancelRecomm = function (val, value) {
        var _this = this;
        console.log(val, this.email, this.id);
        console.log(value);
        jQuery("#reject").modal("hide");
        jQuery("#request").modal("hide");
        if (val = 'R') {
            this.em = '';
            this.des = '';
        }
        else {
            this.em = value.email;
            this.des = value.admin_description;
        }
        var params = {
            'recommendation_id': this.id,
            'approve_status': val,
            'email': this.em,
            'des': this.des
        };
        this.authService.appCanRecommendation(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.GetRecommendationRequests();
                _this.myForm.reset({
                    'email': '',
                    'admin_description': ''
                });
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get Recommendation Requests***************************************/
    RequestrecommComponent.prototype.GetRecommendationRequests = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getRecommRequests().then(function (result) {
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
    RequestrecommComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-requestrecomm',
            template: __webpack_require__("../../../../../src/app/layout/requestrecomm/requestrecomm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/requestrecomm/requestrecomm.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */]])
    ], RequestrecommComponent);
    return RequestrecommComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/requestrecomm/requestrecomm.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommdationReqModule", function() { return RecommdationReqModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requestrecomm_routing_module__ = __webpack_require__("../../../../../src/app/layout/requestrecomm/requestrecomm-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requestrecomm_component__ = __webpack_require__("../../../../../src/app/layout/requestrecomm/requestrecomm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RecommdationReqModule = (function () {
    function RecommdationReqModule() {
    }
    RecommdationReqModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__requestrecomm_routing_module__["a" /* RequestrecommRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__requestrecomm_component__["a" /* RequestrecommComponent */]]
        })
    ], RecommdationReqModule);
    return RecommdationReqModule;
}());



/***/ })

});
//# sourceMappingURL=requestrecomm.module.chunk.js.map