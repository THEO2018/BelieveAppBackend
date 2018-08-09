webpackJsonp(["editblog.module"],{

/***/ "../../../../../src/app/layout/editblog/editblog-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditblogRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editblog_component__ = __webpack_require__("../../../../../src/app/layout/editblog/editblog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__editblog_component__["a" /* EditblogComponent */]
    }
];
var EditblogRoutingModule = (function () {
    function EditblogRoutingModule() {
    }
    EditblogRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], EditblogRoutingModule);
    return EditblogRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/editblog/editblog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n  <div class=\"tables_area\">\n        <h2>Blog Detail</h2>\n  <div class=\"clear\"></div>     \n<div class=\"white_box\">\n  <form [formGroup]=\"addBlogPost\" novalidate>\n    <div class=\"add_formarea\">\n\n      <div class=\"row\">\n        <aside class=\"col-sm-5\">\n          <div class=\"form-group\">\n            <label class=\"text-uppercase\">Blog Title</label>\n            <input readonly type=\"text\" value=\"\" placeholder=\"\" class=\"form-control\" formControlName=\"blog_title\" />\n          </div>\n\n        </aside>\n      </div>\n\n      <div class=\"row\">\n              <aside class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label class=\"text-uppercase\">Category*</label>\n                  <div class=\"custom_select\">\n                  \t<!-- <input readonly type=\"text\" value=\"\" placeholder=\"Blog Title\" class=\"form-control\" formControlName=\"category\" /> -->\n                    <select formControlName=\"category\">\n                      <option *ngFor=\"let item of data1\" [ngValue]=\"item._id\">{{item.name}}</option>\n                    </select>\n                  </div>\n                </div>\n              </aside>\n\n              <aside class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label class=\"text-uppercase\">Blog Image*</label>\n                <img src=\"{{api_image}}\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"/>\n                  <!--  <input type=\"file\" \n                   #fileupload \n                   (change)=\"onFileChange($event)\"\n                   id=\"blog_image\" \n                   /> -->\n                </div>\n\n              </aside>\n                          \n            </div>\n\n      <div class=\"blog_editor\">\n          <div class=\"form-group\">\n              <label class=\"text-uppercase\">Blog*</label>\n              <textarea [froalaEditor] type=\"text\" value=\"\" placeholder=\"Enter Name\" class=\"form-control\" formControlName=\"blog\" readonly></textarea>\n          </div>\n      </div>\n      <div>\n  <!--       <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\">Save</button>\n        <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\">Cancel</button> -->\n      </div>\n      </div>\n  </form>\n  </div>\n   </div>\n    </div>\n\n\n<style type=\"text/css\">\n.error\n{\ncolor:red;\n}\n\n</style>"

/***/ }),

/***/ "../../../../../src/app/layout/editblog/editblog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.blog_editor .fr-box.fr-basic .fr-element {\n  min-height: 200px;\n  overflow: auto;\n  max-height: 600px; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\ntextarea.form-control {\n  resize: none;\n  height: 150px; }\n\n.add_formarea {\n  padding: 15px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.add_formarea label {\n  font-size: 14px;\n  color: #242424;\n  font-weight: 400;\n  letter-spacing: 1px;\n  display: block; }\n\n.add_formarea .form-control {\n  font-size: 16px;\n  color: #242424;\n  height: auto;\n  box-shadow: none;\n  padding: 8px 12px; }\n\n.login_form .form-group {\n  margin-top: 20px;\n  margin-bottom: 0; }\n\n.form-group h3 {\n  margin-top: 5px; }\n\n.top_form .form-control, .search_input .form-group .form-control {\n  height: auto;\n  padding: 8px 10px;\n  box-shadow: none; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.select_users label {\n  display: block;\n  padding: 5px; }\n\n.select_users label:nth-child(2n) {\n  background: #f5f5f5; }\n\n.select_users label img {\n  margin: 0 5px; }\n\n.modal-header .close {\n  margin: 0;\n  padding: 0; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.big_yellow1 {\n  font-size: 10px;\n  padding: 5px 20px;\n  margin-bottom: 20px; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/editblog/editblog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditblogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
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




var EditblogComponent = (function () {
    function EditblogComponent(router, authService, formBuilder, route) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.img = true;
        this.imag_valid = true;
        this.addBlogPost = this.formBuilder.group({
            blog_title: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            category: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            blog: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            blog_image: null
        });
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.id = params;
        });
    }
    EditblogComponent.prototype.ngOnInit = function () {
        this.categories();
        this.GetAlbumDetail();
    };
    /**********************************get image***************************************/
    EditblogComponent.prototype.onFileChange = function (event) {
        console.log(event);
        if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
            if (event.target.files.length > 0) {
                this.img = true;
                this.imag_valid = true;
                var file = event.target.files[0];
                console.log(file);
                this.addBlogPost.get('blog_image').setValue(file);
            }
        }
        else {
            this.imag_valid = true;
            this.img = false;
        }
        //this.saveFiles(files);
    };
    /**********************************Get CATEGORIES***************************************/
    EditblogComponent.prototype.categories = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getBlogCategories().then(function (result) {
            console.log("categoriessss", result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data1 = _this.res.data;
                console.log(_this.data1);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get Blog Detail***************************************/
    EditblogComponent.prototype.GetAlbumDetail = function () {
        var _this = this;
        // alert("hiiii")
        var params = {
            'id': this.id.id
        };
        this.authService.getBlogDetail(params).then(function (result) {
            console.log("album detaillll", result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data = _this.res.data;
                _this.addBlogPost.get('blog_title').setValue(_this.data.blog_title);
                _this.addBlogPost.get('category').setValue(_this.data.category._id);
                _this.addBlogPost.get('blog').setValue(_this.data.blog);
                _this.api_image = _this.data.blog_image;
                // console.log(this.api_image);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditblogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editblog',
            template: __webpack_require__("../../../../../src/app/layout/editblog/editblog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/editblog/editblog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], EditblogComponent);
    return EditblogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/editblog/editblog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogModule", function() { return EditBlogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editblog_routing_module__ = __webpack_require__("../../../../../src/app/layout/editblog/editblog-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editblog_component__ = __webpack_require__("../../../../../src/app/layout/editblog/editblog.component.ts");
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








var EditBlogModule = (function () {
    function EditBlogModule() {
    }
    EditBlogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__editblog_routing_module__["a" /* EditblogRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__editblog_component__["a" /* EditblogComponent */]]
        })
    ], EditBlogModule);
    return EditBlogModule;
}());



/***/ })

});
//# sourceMappingURL=editblog.module.chunk.js.map