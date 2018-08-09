webpackJsonp(["notes.module"],{

/***/ "../../../../../src/app/layout/notes/notes-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_component__ = __webpack_require__("../../../../../src/app/layout/notes/notes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__notes_component__["a" /* NotesComponent */]
    }
];
var NotesRoutingModule = (function () {
    function NotesRoutingModule() {
    }
    NotesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], NotesRoutingModule);
    return NotesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/notes/notes.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Settings</h2>\n\n    <div class=\"content_area\" style=\"background: #eaeaea;\">\n    <div class=\"top3_area\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<aside class=\"col-lg-3\">\n\t\t\t\t\t\t<div class=\"white_three\" routerLink=\"/managers\" [routerLinkActive]=\"['router-link-active']\">\n\t\t\t\t\t\t\t<span style=\"background:#0cc2aa;\"><i class=\"fa fa-address-book\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t<p  class=\"text-uppercase\">Managers</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</aside>\n\t\t\t\t\t<aside class=\"col-lg-3\">\n\t\t\t\t\t\t<div class=\"white_three\" routerLink=\"/members\" [routerLinkActive]=\"['router-link-active']\">\n\t\t\t\t\t\t\t<span style=\"background:#2e4485;\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t<p class=\"text-uppercase\">Member Management</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</aside>\n\t\t\t\t\t<aside class=\"col-lg-3\">\n\t\t\t\t\t\t<div class=\"white_three\" routerLink=\"/church\" [routerLinkActive]=\"['router-link-active']\">\n\t\t\t\t\t\t\t<span style=\"background:#721c24;\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t<p class=\"text-uppercase\">Logo/ Church/ Welcome page</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</aside>\n\t\t\t\t\t<aside class=\"col-lg-3\">\n\t\t\t\t\t\t<div class=\"white_three\" routerLink=\"/socialshare\" [routerLinkActive]=\"['router-link-active']\">\n\t\t\t\t\t\t\t<span style=\"background:#FF6347;\"><i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t<p class=\"text-uppercase\">Social Introductory Content</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</aside>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/notes/notes.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.top3_area {\n  padding: 10px 0 45px; }\n\n.white_three {\n  background: #222;\n  margin: 20px 0 0 29px;\n  text-align: center;\n  padding: 25px;\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.12);\n  min-height: 100px; }\n\n.white_three p {\n  color: #fff;\n  margin: 0; }\n\n.white_three span {\n  position: absolute;\n  left: -29px;\n  width: 58px;\n  height: 58px;\n  font-size: 30px;\n  color: #fff;\n  line-height: 55px;\n  border-radius: 2px;\n  top: 15px; }\n\n.white_three h3 {\n  margin-top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/notes/notes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotesComponent = (function () {
    function NotesComponent() {
    }
    NotesComponent.prototype.ngOnInit = function () {
    };
    NotesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__("../../../../../src/app/layout/notes/notes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/notes/notes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/notes/notes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesModule", function() { return NotesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_routing_module__ = __webpack_require__("../../../../../src/app/layout/notes/notes-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notes_component__ = __webpack_require__("../../../../../src/app/layout/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__("../../../../froala-editor/js/froala_editor.pkgd.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NotesModule = (function () {
    function NotesModule() {
    }
    NotesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__notes_routing_module__["a" /* NotesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["a" /* FroalaEditorModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["b" /* FroalaViewModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__notes_component__["a" /* NotesComponent */]]
        })
    ], NotesModule);
    return NotesModule;
}());



/***/ })

});
//# sourceMappingURL=notes.module.chunk.js.map