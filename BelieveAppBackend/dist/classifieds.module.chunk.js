webpackJsonp(["classifieds.module"],{

/***/ "../../../../../src/app/layout/classifieds/classifieds-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classifieds_component__ = __webpack_require__("../../../../../src/app/layout/classifieds/classifieds.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__classifieds_component__["a" /* ClassifiedsComponent */]
    }
];
var ClassifiedsRoutingModule = (function () {
    function ClassifiedsRoutingModule() {
    }
    ClassifiedsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ClassifiedsRoutingModule);
    return ClassifiedsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/classifieds/classifieds.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n  \n  <div class=\"tables_area\">\n    <a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"showAdd()\">Add New</a>\n        <div class=\"clear\"></div>\n    <div class=\"bg_area\" *ngIf=\"add_new\">\n    <h2>New Category</h2>\n    <div>\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"AddCategories(myForm.valid)\">\n         <div class=\"row\">\n           <aside class=\"col-sm-4\">\n             <div class=\"form-group\">\n                 <input id=\"name\" type=\"text\"  class=\"form-control\"  value=\"\" placeholder=\"Category Name\" formControlName=\"name\"/>\n                 \n             </div>\n\n                <div *ngIf=\"myForm.get('name').hasError('required') && myForm.get('name').touched\">\n\t\t\t                        <div class=\"error\" *ngIf=\"myForm.get('name').hasError('required')  && myForm.get('name').touched \">\n\t\t\t                        Title is required\n\t\t\t                        </div> \n\t\t                    \t</div>\n           </aside>\n         </div>\n         <div class=\"row\">\n           <aside class=\"col-sm-4\">\n              <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\"   style=\"margin-top:0px; color:#fff;\">Save</button>\n               <button (click)=\"cancel()\" class=\"blue_btn yellow_btn text-uppercase\"   style=\"margin-top:0px; color:#fff;\">Cancel</button>\n           </aside>\n         </div>\n       </form>\n       </div>\n       </div>\n   \n       <h2 style=\"margin-top:10px;\">Category List</h2>\n    <div class=\"clear\"></div>\n    <div class=\"white_box\">\n      <div class=\"content_area\" style=\"background: #eaeaea;\">\n        <div class=\"top3_area\">\n        \t<div class=\"gallery_whitebox\" *ngFor =\"let albums of data\">\n\t            <div class=\"white_three\">\n\t              <img src = \"../../assets/images/news.png\">\n\t              <p  class=\"text-uppercase\">{{albums.name}}</p>\n\t              <a  class=\"action_btn\"><i class=\"fa fa-eye\" aria-hidden=\"true\" [routerLink]=\"['/classifiedlist', albums._id]\" [routerLinkActive]=\"['router-link-active']\"></i></a>\n\t              <a *ngIf=\"!albums.disableStatus\" class=\"action_btn\"><i class=\"fa fa-edit\" aria-hidden=\"true\" (click)=\"editModal(albums.name,albums._id)\"></i></a>\n\t\t\t\t         <a *ngIf=\"!albums.disableStatus\" class=\"action_btn\" (click)=\"RemoveClick(albums._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n\t            </div>\n\n              <div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n                    <div class=\"modal-dialog\" role=\"document\">\n                      <div class=\"modal-content\">  \n                       <div class=\"modal-body text-center\">\n                          <p>Are you sure you want to Delete?</p>\n                          <a class=\"blue_btn\" (click)=\"RemoveComm()\">Yes</a>\n                          <a data-dismiss=\"modal\" class=\"blue_btn\">No</a>\n                        </div>\n                         </div>\n                    </div>\n                  </div>\n                  \n\t        </div>\n            <div class=\"clear\"></div>\n          </div>\n        </div>\n    </div>\n  </div>\n\n</div>\n\n  <div class=\"modal fade\" id=\"edit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n                    <div class=\"modal-dialog\" role=\"document\">\n                      <div class=\"modal-content\">  \n                       <div class=\"modal-body\">\n                        <h2 class=\"title_head\">Edit Category</h2>\n                           <form  [formGroup]=\"eForm\" (ngSubmit)=\"EditCategory(eForm.valid,eForm.value)\">\n         <div class=\"row\">\n           <aside class=\"col-sm-8\">\n             <div class=\"form-group\">\n              <label class=\"text-uppercase\">Title*</label>\n                 <input id=\"name\" type=\"text\"  class=\"form-control\"  value=\"\" placeholder=\"Category Name\" formControlName=\"name\"/>\n                 \n             </div>\n\n                <div *ngIf=\"eForm.get('name').hasError('required') && eForm.get('name').touched\">\n                              <div class=\"error\" *ngIf=\"eForm.get('name').hasError('required')  && eForm.get('name').touched \">\n                              Title is required\n                              </div> \n                          </div>\n           </aside>\n         </div>\n\n            <div class=\"row\">\n              <aside class=\"col-sm-12\">\n                <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\">Update</button>\n                <button  type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\" data-dismiss=\"modal\">Cancel</button>\n              </aside>\n            </div>\n          </form>\n                        </div>\n                         </div>\n                    </div>\n                  </div>\n\n<style type=\"text/css\">\n.error\n{\ncolor:red;\n}\n\n</style>\n"

/***/ }),

/***/ "../../../../../src/app/layout/classifieds/classifieds.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.blue_btn + .blue_btn {\n  margin-right: 5px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600;\n  cursor: pointer; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 12px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.top3_area {\n  padding: 10px 0 45px; }\n\n.white_three {\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.12);\n  min-height: 100px; }\n\n.white_three img {\n  height: 100px;\n  width: 100px; }\n\n.gallery_whitebox {\n  float: left;\n  padding: 4px;\n  width: 16.666%; }\n\n.white_three p {\n  color: #F78C6A;\n  margin-top: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 600; }\n\n.white_three span {\n  position: absolute;\n  left: -29px;\n  width: 58px;\n  height: 58px;\n  font-size: 30px;\n  color: #fff;\n  line-height: 55px;\n  border-radius: 2px;\n  top: 15px; }\n\n.white_three h3 {\n  margin-top: 0; }\n\n.white_three .detail_btn {\n  top: 183px;\n  left: 65px; }\n\n.white_three .edit_btn {\n  top: 183px;\n  left: 165px; }\n\n.bg_area {\n  background: #eaeaea;\n  padding: 15px;\n  margin-bottom: 30px;\n  margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/classifieds/classifieds.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
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





var ClassifiedsComponent = (function () {
    function ClassifiedsComponent(fb, authService, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.toastr = toastr;
        this.add_new = false;
        this.myForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]
        });
        this.eForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]
        });
    }
    ClassifiedsComponent.prototype.ngAfterContentChecked = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#name").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    };
    ClassifiedsComponent.prototype.ngOnInit = function () {
        this.GetCategories();
    };
    ClassifiedsComponent.prototype.showAdd = function () {
        this.add_new = true;
    };
    ClassifiedsComponent.prototype.cancel = function () {
        this.add_new = false;
    };
    ClassifiedsComponent.prototype.clearForm = function () {
        this.myForm.reset({
            'name': ''
        });
    };
    ClassifiedsComponent.prototype.RemoveClick = function (id) {
        // alert(id)
        jQuery("#request").modal("show");
        this.idd = id;
    };
    ClassifiedsComponent.prototype.editModal = function (name, id) {
        console.log(name, id);
        this.eForm.get('name').setValue(name);
        this._id = id;
        jQuery("#edit").modal("show");
    };
    /**********************************Edit Classified Category***************************************/
    ClassifiedsComponent.prototype.EditCategory = function (val, value) {
        var _this = this;
        console.log(value);
        // alert("hiiii")
        if (val) {
            var params = {
                'name': value.name,
                'id': this._id
            };
            this.authService.editClassifiedCat(params).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status == true) {
                    alert("Category Updated Successfully");
                    jQuery("#edit").modal("hide");
                    _this.GetCategories();
                    // this.clearr1();
                    // this.add_new=false;
                }
                else {
                    console.log("erorr");
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            alert("Fill Required Fields");
        }
    };
    /**********************************Remove Groups***************************************/
    ClassifiedsComponent.prototype.RemoveComm = function () {
        var _this = this;
        // alert("hiiii")
        var params = {
            'type': 'CA',
            'type_id': this.idd
        };
        this.authService.removeClassified(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                alert("Category Deleted Successfully");
                jQuery("#request").modal("hide");
                // this.users();
                _this.GetCategories();
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************ADD Categories***************************************/
    ClassifiedsComponent.prototype.AddCategories = function (val) {
        var _this = this;
        console.log(val);
        if (val) {
            var params = {
                'title': this.myForm.get('name').value
            };
            this.authService.addClassCategory(params).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status == true) {
                    _this.presentToast('Category Added Successfully');
                    // alert("Category Added Successfully")
                    _this.GetCategories();
                    _this.add_new = false;
                    // // console.log(this.myForm.value);
                    _this.clearForm();
                    // this.reset();
                    // alert(this.res.message)
                }
                else {
                    console.log("erorrr");
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            alert("Fill Required Fields");
        }
    };
    /**********************************Get Categories***************************************/
    ClassifiedsComponent.prototype.GetCategories = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getClassCategories().then(function (result) {
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
    /************************************Toast***************************/
    ClassifiedsComponent.prototype.presentToast = function (msg) {
        this.toastr.success(this.res.message, '', {
            timeOut: 3000,
            tapToDismiss: true
        });
    };
    ClassifiedsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-classifieds',
            template: __webpack_require__("../../../../../src/app/layout/classifieds/classifieds.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/classifieds/classifieds.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], ClassifiedsComponent);
    return ClassifiedsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/classifieds/classifieds.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifiedModule", function() { return ClassifiedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classifieds_routing_module__ = __webpack_require__("../../../../../src/app/layout/classifieds/classifieds-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classifieds_component__ = __webpack_require__("../../../../../src/app/layout/classifieds/classifieds.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ClassifiedModule = (function () {
    function ClassifiedModule() {
    }
    ClassifiedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__classifieds_routing_module__["a" /* ClassifiedsRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__classifieds_component__["a" /* ClassifiedsComponent */]]
        })
    ], ClassifiedModule);
    return ClassifiedModule;
}());



/***/ })

});
//# sourceMappingURL=classifieds.module.chunk.js.map