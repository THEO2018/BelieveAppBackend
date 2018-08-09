webpackJsonp(["form.module"],{

/***/ "../../../../../src/app/layout/form/form-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_component__ = __webpack_require__("../../../../../src/app/layout/form/form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__form_component__["a" /* FormComponent */]
    }
];
var FormRoutingModule = (function () {
    function FormRoutingModule() {
    }
    FormRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], FormRoutingModule);
    return FormRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Users</h2>\n\n    <div class=\"content_area\" style=\"background: #eaeaea;\">\n    <div class=\"top3_area\">\n                <div class=\"row\">\n                    <aside class=\"col-lg-4\">\n                        <div class=\"white_three\" routerLink=\"/users\" [routerLinkActive]=\"['router-link-active']\">\n                            <span style=\"background:#0cc2aa;\"><i class=\"fa fa-venus-mars\" aria-hidden=\"true\"></i></span>\n                            <p  class=\"text-uppercase\">Users</p>\n                        </div>\n                    </aside>\n                    <aside class=\"col-lg-4\">\n                        <div class=\"white_three\" routerLink=\"/alumni\" [routerLinkActive]=\"['router-link-active']\">\n                            <span style=\"background:#2e4485;\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                            <p class=\"text-uppercase\">Alumni’s</p>\n                        </div>\n                    </aside>\n                    <aside class=\"col-lg-4\">\n                        <div class=\"white_three\" routerLink=\"/newmember\" [routerLinkActive]=\"['router-link-active']\">\n                            <span style=\"background:#f1a732;\"><i class=\"fa fa-list\" aria-hidden=\"true\"></i></span>\n                            <p class=\"text-uppercase\">New Members</p>\n                        </div>\n                    </aside>\n                </div>\n            </div>\n        </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.top3_area {\n  padding: 10px 0 45px; }\n\n.white_three {\n  background: #222;\n  margin: 20px 0 0 29px;\n  text-align: center;\n  padding: 25px;\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.12);\n  min-height: 100px; }\n\n.white_three p {\n  color: #fff;\n  margin: 0;\n  font-size: 24px; }\n\n.white_three span {\n  position: absolute;\n  left: -29px;\n  width: 58px;\n  height: 58px;\n  font-size: 30px;\n  color: #fff;\n  line-height: 55px;\n  border-radius: 2px;\n  top: 15px; }\n\n.white_three h3 {\n  margin-top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form',
            template: __webpack_require__("../../../../../src/app/layout/form/form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/form/form.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/form/form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_routing_module__ = __webpack_require__("../../../../../src/app/layout/form/form-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_component__ = __webpack_require__("../../../../../src/app/layout/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormModule = (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__form_routing_module__["a" /* FormRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__form_component__["a" /* FormComponent */]]
        })
    ], FormModule);
    return FormModule;
}());



/***/ })

});
//# sourceMappingURL=form.module.chunk.js.map