webpackJsonp(["giving.module"],{

/***/ "../../../../../src/app/layout/giving/giving-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GivingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__giving_component__ = __webpack_require__("../../../../../src/app/layout/giving/giving.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__giving_component__["a" /* GivingComponent */]
    }
];
var GivingRoutingModule = (function () {
    function GivingRoutingModule() {
    }
    GivingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], GivingRoutingModule);
    return GivingRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/giving/giving.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_area\">\n  <h2 class=\"title_head\">Update Giving Link</h2>\n  <div>\n    <form [formGroup]=\"rForm\" (ngSubmit)=\"AddLinksDetail(rForm.valid,rForm.value)\">\n      <div class=\"row\">\n        <aside class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" value=\"\" placeholder=\"Enter Url*\" formControlName=\"giving_url\" [attr.maxlength]=\"500\"\n              id=\"name\" [pattern] =\"urlPattern\"/>\n          </div>\n          <div *ngIf=\"rForm.get('giving_url').hasError('required') && rForm.get('giving_url').touched\">\n            <div class=\"error\" *ngIf=\"rForm.get('giving_url').hasError('required')  && rForm.get('giving_url').touched\">\n              Url is required\n            </div>\n          </div>\n          <div *ngIf=\"rForm.get('giving_url').hasError('pattern') && rForm.get('giving_url').touched\">\n            <div class=\"error\" *ngIf=\"rForm.get('giving_url').hasError('pattern')  && rForm.get('giving_url').touched \">\n              Invalid Url\n            </div>\n          </div>\n        </aside>\n      </div>\n\n      <div class=\"row\">\n        <aside class=\"col-sm-12\">\n          <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\">Update</button>\n        </aside>\n      </div>\n    </form>\n  </div>\n</div>\n\n<style type=\"text/css\">\n\t.error {\n\t\tcolor: red;\n\t}\n</style>"

/***/ }),

/***/ "../../../../../src/app/layout/giving/giving.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px;\n  background: #fff; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n\n.select_users label {\n  display: block;\n  padding: 5px; }\n\n.select_users label:nth-child(2n) {\n  background: #f5f5f5; }\n\n.select_users label img {\n  margin: 0 5px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600;\n  cursor: pointer; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\nh2.title_head .blue_btn {\n  color: #fff;\n  float: right;\n  margin: 0;\n  cursor: pointer; }\n\n.bg_area {\n  background: #eaeaea;\n  padding: 15px;\n  margin-bottom: 30px;\n  margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/giving/giving.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GivingComponent; });
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





var GivingComponent = (function () {
    function GivingComponent(router, authService, fb) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.urlPattern = '^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/|www.){1}([0-9A-Za-z].+)';
        this.rForm = this.fb.group({
            'giving_url': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]
        });
    }
    GivingComponent.prototype.ngOnInit = function () {
        this.GetLinksDetail();
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#name').on('keypress', function (e) {
            if (e.which === 32 && !this.value.length) {
                e.preventDefault();
            }
        });
    };
    /**********************************Add Link Detail***************************************/
    GivingComponent.prototype.AddLinksDetail = function (val, value) {
        var _this = this;
        console.log(value);
        if (val) {
            this.authService.addLinkDetail(value).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status === true) {
                    alert('Link Updated Successfully');
                    _this.GetLinksDetail();
                }
                else {
                    console.log('error');
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            alert('Fill required Fields*');
        }
    };
    /**********************************Get Link Detail***************************************/
    GivingComponent.prototype.GetLinksDetail = function () {
        var _this = this;
        this.authService.getLinkDetail().then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status === true) {
                _this.links = _this.res.data;
                _this.rForm.get('giving_url').setValue(_this.links.giving_url);
                // console.log('arrrayy', this.arryData);
            }
            else {
                console.log('error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    GivingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-giving',
            template: __webpack_require__("../../../../../src/app/layout/giving/giving.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/giving/giving.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], GivingComponent);
    return GivingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/giving/giving.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GivingModule", function() { return GivingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__giving_routing_module__ = __webpack_require__("../../../../../src/app/layout/giving/giving-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__giving_component__ = __webpack_require__("../../../../../src/app/layout/giving/giving.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GivingModule = (function () {
    function GivingModule() {
    }
    GivingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__giving_routing_module__["a" /* GivingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__giving_component__["a" /* GivingComponent */]]
        })
    ], GivingModule);
    return GivingModule;
}());



/***/ })

});
//# sourceMappingURL=giving.module.chunk.js.map