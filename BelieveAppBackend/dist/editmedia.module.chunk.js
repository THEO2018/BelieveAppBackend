webpackJsonp(["editmedia.module"],{

/***/ "../../../../../src/app/layout/editmedia/editmedia-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditmediaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editmedia_component__ = __webpack_require__("../../../../../src/app/layout/editmedia/editmedia.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__editmedia_component__["a" /* EditmediaComponent */]
    }
];
var EditmediaRoutingModule = (function () {
    function EditmediaRoutingModule() {
    }
    EditmediaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], EditmediaRoutingModule);
    return EditmediaRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/editmedia/editmedia.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"content_area\">\n  \n  <div class=\"tables_area\">\n        <div class=\"clear\"></div>\n    <div class=\"bg_area\">\n    <h2>Edit Gallery</h2>\n    <div>\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"EditGallery(myForm.valid)\">\n         <div class=\"row\">\n           <aside class=\"col-sm-4\">\n             <div class=\"form-group\">\n             <label class=\"text-uppercase\">Gallary Title*</label>\n                 <input type=\"text\"  class=\"form-control\"  value=\"\" placeholder=\"Media Name\" formControlName=\"gallary_title\"/>\n                 \n             </div>\n\n                <div *ngIf=\"myForm.get('gallary_title').hasError('required') && myForm.get('gallary_title').touched\">\n\t\t\t                        <div class=\"error\" *ngIf=\"myForm.get('gallary_title').hasError('required')  && myForm.get('gallary_title').touched \">\n\t\t\t                        Title is required\n\t\t\t                        </div> \n\t\t                    \t</div>\n           </aside>\n             <aside class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"text-uppercase\">Category*</label>\n                <div class=\"custom_select\">\n                  <select formControlName=\"select_category\">\n                   <option value =null disabled selected hidden >Select Category</option>\n                    <option *ngFor=\"let item of categoryData\" [ngValue]=\"item._id\">{{item.name}}</option>\n                  </select>\n                </div>\n              </div>\n\n               <div *ngIf=\"myForm.get('select_category').hasError('required')\n                && myForm.get('select_category').touched\">\n                            <div class=\"error\" *ngIf=\"myForm.get('select_category').hasError('required')  && myForm.get('select_category').touched \">\n                            Category is required\n                            </div> \n            </div>\n            </aside>\n         </div>\n         <div class=\"row\">\n           <aside class=\"col-sm-4\">\n              <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\"   style=\"margin-top:0px; color:#fff;\">Save</button>\n              <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\"   style=\"margin-top:0px; color:#fff;\" (click)=\"cancel()\">Cancel</button>\n           </aside>\n            </div>\n            </form>\n               </div>\n         </div>\n      </div>\n   </div>"

/***/ }),

/***/ "../../../../../src/app/layout/editmedia/editmedia.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.blue_btn + .blue_btn {\n  margin-right: 5px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 12px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.top3_area {\n  padding: 10px 0 45px; }\n\n.white_three {\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.12);\n  min-height: 100px; }\n\n.white_three img {\n  height: 100px;\n  width: 100px; }\n\n.gallery_whitebox {\n  float: left;\n  padding: 4px;\n  width: 16.666%; }\n\n.white_three p {\n  color: #F78C6A;\n  margin-top: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 600; }\n\n.white_three span {\n  position: absolute;\n  left: -29px;\n  width: 58px;\n  height: 58px;\n  font-size: 30px;\n  color: #fff;\n  line-height: 55px;\n  border-radius: 2px;\n  top: 15px; }\n\n.white_three h3 {\n  margin-top: 0; }\n\n.white_three .detail_btn {\n  top: 183px;\n  left: 65px; }\n\n.white_three .edit_btn {\n  top: 183px;\n  left: 165px; }\n\n.bg_area {\n  background: #eaeaea;\n  padding: 15px;\n  margin-bottom: 30px;\n  margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/editmedia/editmedia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditmediaComponent; });
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




var EditmediaComponent = (function () {
    function EditmediaComponent(router, fb, authService, route) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.route = route;
        this.myForm = this.fb.group({
            gallary_title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            select_category: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]
        });
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.id = params;
        });
    }
    EditmediaComponent.prototype.ngOnInit = function () {
        this.GetMediaDetail();
        this.GetMediaCategory();
    };
    EditmediaComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/media');
    };
    /**********************************Get Media Category***************************************/
    EditmediaComponent.prototype.GetMediaCategory = function () {
        var _this = this;
        console.log('get media category');
        this.authService.getMediaCategory().then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.categoryData = _this.res.data;
                console.log('mediaa categoryyyyyyyyyyy', _this.categoryData);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get Media Detail***************************************/
    EditmediaComponent.prototype.GetMediaDetail = function () {
        var _this = this;
        // alert("hiiii")
        var params = {
            'id': this.id.id
        };
        this.authService.getMediaDetail(params).then(function (result) {
            console.log("album detaillll", result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data = _this.res.data;
                _this.myForm.get('gallary_title').setValue(_this.data.gallary_title);
                _this.myForm.get('select_category').setValue(_this.data.category);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************EDIT GAllery***************************************/
    EditmediaComponent.prototype.EditGallery = function (val) {
        var _this = this;
        if (val) {
            var params = {
                'id': this.id.id,
                'title': this.myForm.get('gallary_title').value,
                'media_category': this.myForm.value.select_category
            };
            this.authService.editMedia(params).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status == true) {
                    _this.router.navigateByUrl('/media');
                }
                else {
                    console.log("erorrr");
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            alert("Fill required Fields");
        }
    };
    EditmediaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editmedia',
            template: __webpack_require__("../../../../../src/app/layout/editmedia/editmedia.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/editmedia/editmedia.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], EditmediaComponent);
    return EditmediaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/editmedia/editmedia.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmediaModule", function() { return EditmediaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editmedia_routing_module__ = __webpack_require__("../../../../../src/app/layout/editmedia/editmedia-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editmedia_component__ = __webpack_require__("../../../../../src/app/layout/editmedia/editmedia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';





// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
var EditmediaModule = (function () {
    function EditmediaModule() {
    }
    EditmediaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__editmedia_routing_module__["a" /* EditmediaRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__editmedia_component__["a" /* EditmediaComponent */]]
        })
    ], EditmediaModule);
    return EditmediaModule;
}());



/***/ })

});
//# sourceMappingURL=editmedia.module.chunk.js.map