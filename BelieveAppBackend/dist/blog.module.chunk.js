webpackJsonp(["blog.module"],{

/***/ "../../../../../src/app/layout/blog/blog-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_component__ = __webpack_require__("../../../../../src/app/layout/blog/blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__blog_component__["a" /* BlogComponent */]
    }
];
var BlogRoutingModule = (function () {
    function BlogRoutingModule() {
    }
    BlogRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], BlogRoutingModule);
    return BlogRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "\t<div class=\"content_area\">\n\t\t\t\n\t\t\t<div class=\"tables_area\">\n\t\t\t\t\n\t\t\t\t<a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"PublishList()\" *ngIf=\"saved\">Published</a>\n        \t\t<a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"SavedList()\" *ngIf=\"publish\">Saved</a>\n\t\t\t\t<a class=\"blue_btn yellow_btn pull-right text-uppercase\"  routerLink=\"/addblog\" [routerLinkActive]=\"['router-link-active']\">New Blog</a>\n\t\t\t\t <h2 *ngIf=\"saved\">Saved Blogs</h2>\n                 <h2 *ngIf=\"publish\">Published Blogs</h2>\n\t\t\t\t<!-- <h2 class=\"pull-left\">Blogs</h2> -->\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t<div class=\"white_box\" *ngIf=\"publish\">\n\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" id=\"\" class=\"display\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">Blog Title</th>\n\t\t\t\t\t\t\t\t\t<th width=\"10%\">Category </th>\n\t\t\t\t\t\t\t\t\t<!-- <th width=\"35%\">Blog</th> -->\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">Blog Image</th>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">ACTION</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr  *ngFor=\"let grouplist of data\">\n\t\t\t\t\t\t\t\t\t<td>{{grouplist.blog_title}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{grouplist.category.name}}</td>\n\t\t\t\t\t\t\t\t\t<!-- <td><div style=\"max-height: 100px;overflow: auto;\">{{grouplist.blog}}</div></td> -->\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"grouplist.blog_image\"><img src=\"{{grouplist.blog_image}}\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"/></td>\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"!grouplist.blog_image\"><img src=\"../../assets/images/logo.png\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"/></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<a  class=\"action_btn\"><i class=\"fa fa-eye\" aria-hidden=\"true\" [routerLink]=\"['/editblog', grouplist._id]\" [routerLinkActive]=\"['router-link-active']\"></i></a>\n\t\t\t\t\t\t\t\t\t\t<a  class=\"action_btn\"><i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"RemoveClick(grouplist._id)\"></i></a>\n\t\t\t\t\t\t\t\t\t</td>\n\n\n\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<!-- <tr>\n\t\t\t\t\t\t\t\t\t<td colspan=\"6\">\n\t\t\t\t\t\t\t\t\t\t<mfBootstrapPaginator></mfBootstrapPaginator>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n<!-- /********************************************************/\t\t\t\t -->\n<div class=\"white_box\" *ngIf=\"saved\">\n\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" id=\"\" class=\"display\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">Blog Title</th>\n\t\t\t\t\t\t\t\t\t<th width=\"10%\">Category </th>\n\t\t\t\t\t\t\t\t\t<!-- <th width=\"35%\">Blog</th> -->\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">Blog Image</th>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\">ACTION</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr  *ngFor=\"let grouplist of data1\">\n\t\t\t\t\t\t\t\t\t<td>{{grouplist.blog_title}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{grouplist.category.name}}</td>\n\t\t\t\t\t\t\t\t\t<!-- <td><div style=\"max-height: 100px;overflow: auto;\">{{grouplist.blog}}</div></td> -->\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"grouplist.blog_image\"><img src=\"{{grouplist.blog_image}}\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"/></td>\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"!grouplist.blog_image\"><img src=\"../../assets/images/logo.png\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"/></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t <a  class=\"blue_btn yellow_btn text-uppercase\" (click)=\"publishModal(grouplist._id)\">Publish</a>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n<div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t\t\t\t  <div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t\t\t    <div class=\"modal-content\">  \n\t\t\t\t\t\t\t\t\t     <div class=\"modal-body text-center\">\n\t\t\t\t\t\t\t\t\t      \t<p>Are you sure you want to Delete?</p>\n\t\t\t\t\t\t\t\t\t      \t<a class=\"blue_btn\" (click)=\"RemoveComm()\">Yes</a>\n\t\t\t\t\t\t\t\t\t      \t<a data-dismiss=\"modal\" class=\"blue_btn\">No</a>\n\t\t\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t\t\t       </div>\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t  <div class=\"modal fade\" id=\"publish\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n                  <div class=\"modal-dialog\" role=\"document\">\n                    <div class=\"modal-content\">  \n                     <div class=\"modal-body text-center\">\n                      <p>Are you sure you want to Publish this Song?</p>\n                      <a class=\"blue_btn\" (click)=\"PublishDrafts()\">OK</a>\n                      <a class=\"blue_btn\" data-dismiss=\"modal\" >Cancel</a>\n                    </div>\n                     </div>\n                  </div>\n                  </div>"

/***/ }),

/***/ "../../../../../src/app/layout/blog/blog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.blue_btn + .blue_btn {\n  margin-right: 5px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600;\n  cursor: pointer; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive {\n  overflow: auto; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_datatables_net__ = __webpack_require__("../../../../datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_datatables_net__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogComponent = (function () {
    function BlogComponent(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.publish = true;
        this.saved = false;
        this.muloptions = [];
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortOrder = "asc";
        this.addBlogPost = this.formBuilder.group({
            blog_title: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            category: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            blog: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]
        });
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.mytable = __WEBPACK_IMPORTED_MODULE_3_jquery__('table.display').DataTable({
                "bPaginate": true,
                "bLengthChange": true,
                // "pageLength": 7,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
            });
        }, 500);
        this.getblogs();
        this.DraftBlogs();
    };
    BlogComponent.prototype.SavedList = function () {
        var _this = this;
        this.mytable.destroy();
        setTimeout(function () {
            _this.mytable = __WEBPACK_IMPORTED_MODULE_3_jquery__('table.display').DataTable({
                "bPaginate": true,
                "bLengthChange": true,
                // "pageLength": 7,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
            });
        }, 500);
        this.saved = true;
        this.publish = false;
    };
    BlogComponent.prototype.PublishList = function () {
        var _this = this;
        this.mytable.destroy();
        setTimeout(function () {
            _this.mytable = __WEBPACK_IMPORTED_MODULE_3_jquery__('table.display').DataTable({
                "bPaginate": true,
                "bLengthChange": true,
                // "pageLength": 7,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
            });
        }, 500);
        this.saved = false;
        this.publish = true;
    };
    BlogComponent.prototype.RemoveClick = function (id) {
        // alert(id)
        jQuery("#request").modal("show");
        this._id = id;
    };
    BlogComponent.prototype.publishModal = function (id) {
        jQuery("#publish").modal("show");
        this.idd = id;
    };
    /**********************************Get Draft Blogs***************************************/
    BlogComponent.prototype.DraftBlogs = function () {
        var _this = this;
        //   let params = {
        //   'id': this.album_id.id
        // }
        // alert("hiiii")
        this.authService.getDraftBlogs().then(function (result) {
            console.log("Saveddddd", result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data1 = _this.res.data;
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Publish Drafts***************************************/
    BlogComponent.prototype.PublishDrafts = function () {
        var _this = this;
        var params = {
            'type': 'BL',
            'id': this.idd
        };
        this.authService.publishDrafts(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                jQuery("#publish").modal("hide");
                _this.DraftBlogs();
                _this.mytable.destroy();
                setTimeout(function () {
                    _this.mytable = __WEBPACK_IMPORTED_MODULE_3_jquery__('table.display').DataTable({
                        "bPaginate": true,
                        "bLengthChange": true,
                        // "pageLength": 7,
                        "bFilter": true,
                        "bInfo": false,
                        "bAutoWidth": true,
                    });
                }, 500);
                _this.getblogs();
            }
            else {
                console.log("fasleeee");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Remove Groups***************************************/
    BlogComponent.prototype.RemoveComm = function () {
        var _this = this;
        // alert("hiiii")
        var parms = {
            'id': this._id,
            'type': 'BL'
        };
        this.authService.removeAbout(parms).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                jQuery("#request").modal("hide");
                _this.getblogs();
                _this.mytable.destroy();
                setTimeout(function () {
                    _this.mytable = __WEBPACK_IMPORTED_MODULE_3_jquery__('table.display').DataTable({
                        "bPaginate": true,
                        "bLengthChange": true,
                        // "pageLength": 7,
                        "bFilter": true,
                        "bInfo": false,
                        "bAutoWidth": true,
                    });
                }, 500);
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
    /**********************************Get Blogs***************************************/
    BlogComponent.prototype.getblogs = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getBlogs().then(function (result) {
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
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__("../../../../../src/app/layout/blog/blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/blog/blog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_routing_module__ = __webpack_require__("../../../../../src/app/layout/blog/blog-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_component__ = __webpack_require__("../../../../../src/app/layout/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__("../../../../froala-editor/js/froala_editor.pkgd.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var BlogModule = (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__blog_routing_module__["a" /* BlogRoutingModule */], __WEBPACK_IMPORTED_MODULE_8_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__blog_component__["a" /* BlogComponent */]]
        })
    ], BlogModule);
    return BlogModule;
}());



/***/ })

});
//# sourceMappingURL=blog.module.chunk.js.map