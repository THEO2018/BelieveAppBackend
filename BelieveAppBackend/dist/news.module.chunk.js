webpackJsonp(["news.module"],{

/***/ "../../../../../src/app/layout/news/news-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_component__ = __webpack_require__("../../../../../src/app/layout/news/news.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__news_component__["a" /* NewsComponent */]
    }
];
var NewsRoutingModule = (function () {
    function NewsRoutingModule() {
    }
    NewsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], NewsRoutingModule);
    return NewsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<div class=\"content_area\">\n\t\t\t\n\t\t\t<div class=\"tables_area\">\n\t\t\t\t<h2>News</h2>\n\t\t\t\t<div class=\"white_box\">\n\t\t\t\t\t <form  [formGroup]=\"myForm\" (ngSubmit)=\"Editnews(myForm.valid,myForm.value)\">\n\t\t\t\t\t<div class=\"add_formarea\">\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">News Url</label><input type=\"text\" value=\"\" placeholder=\"\" class=\"form-control\" formControlName=\"news_url\" [attr.maxlength]=\"50\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</aside>\n\t                        \n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\">Update</button>\n\t\t\t\t\t\t<!-- <button class=\"blue_btn yellow_btn  text-uppercase\" (click)=\"CAncel()\">Cancel</button> -->\n\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n<style type=\"text/css\">\n.error\n{\ncolor:red;\n}\n\n</style>\n\n\n\n<!-- http://plnkr.co/edit/ucKcXBA2zReWfBSQ8W7D?p=preview -->"

/***/ }),

/***/ "../../../../../src/app/layout/news/news.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\ntextarea.form-control {\n  resize: none;\n  height: 150px; }\n\n.add_formarea {\n  padding: 15px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.add_formarea label {\n  font-size: 14px;\n  color: #242424;\n  font-weight: 400;\n  letter-spacing: 1px;\n  display: block; }\n\n.add_formarea .form-control {\n  font-size: 16px;\n  color: #242424;\n  height: auto;\n  box-shadow: none;\n  padding: 8px 12px; }\n\n.login_form .form-group {\n  margin-top: 20px;\n  margin-bottom: 0; }\n\n.form-group h3 {\n  margin-top: 5px; }\n\n.top_form .form-control, .search_input .form-group .form-control {\n  height: auto;\n  padding: 8px 10px;\n  box-shadow: none; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.select_users label {\n  display: block;\n  padding: 5px; }\n\n.select_users label:nth-child(2n) {\n  background: #f5f5f5; }\n\n.select_users label img {\n  margin: 0 5px; }\n\n.modal-header .close {\n  margin: 0;\n  padding: 0; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.big_yellow1 {\n  font-size: 10px;\n  padding: 5px 20px;\n  margin-bottom: 20px; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
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




var NewsComponent = (function () {
    function NewsComponent(authService, fb, router) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.myForm = this.fb.group({
            news_url: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]
        });
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.news();
    };
    NewsComponent.prototype.CAncel = function () {
        this.router.navigateByUrl('/contactsupport');
    };
    /**********************************Edit Contact***************************************/
    NewsComponent.prototype.Editnews = function (val, value) {
        var _this = this;
        console.log(value);
        // alert("hiiii")
        this.authService.editNews(value).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                alert(_this.res.message);
                _this.news();
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get Contact***************************************/
    NewsComponent.prototype.news = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getNews().then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data = _this.res.data;
                _this.myForm.get('news_url').setValue(_this.data.news_url);
                console.log(_this.data);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/layout/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/news/news.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_routing_module__ = __webpack_require__("../../../../../src/app/layout/news/news-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_component__ = __webpack_require__("../../../../../src/app/layout/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NewsModule = (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__news_routing_module__["a" /* NewsRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__news_component__["a" /* NewsComponent */]]
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ })

});
//# sourceMappingURL=news.module.chunk.js.map