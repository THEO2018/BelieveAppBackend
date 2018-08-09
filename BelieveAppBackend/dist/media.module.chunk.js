webpackJsonp(["media.module"],{

/***/ "../../../../../src/app/layout/media/media-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_component__ = __webpack_require__("../../../../../src/app/layout/media/media.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__media_component__["a" /* MediaComponent */]
    }
];
var MediaRoutingModule = (function () {
    function MediaRoutingModule() {
    }
    MediaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], MediaRoutingModule);
    return MediaRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/media/media.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n  \n  <div class=\"tables_area\">\n      \n    <a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"showAdd()\">Add New</a>\n    <a class=\"blue_btn yellow_btn pull-right text-uppercase\" data-toggle=\"modal\" data-target=\"#category_modal\">Add category</a>\n    <a class=\"blue_btn yellow_btn pull-right text-uppercase\"  (click) = \"showCategory()\">Show category</a>\n        <div class=\"clear\"></div>\n    <div class=\"bg_area\" *ngIf=\"add_new\">\n    <h2>New Gallery</h2>\n    <div>\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"AddGallery(myForm.valid)\">\n         <div class=\"row\">\n           <aside class=\"col-sm-4\">\n             <div class=\"form-group\">\n                 <input id=\"name\" type=\"text\"  class=\"form-control\"  value=\"\" placeholder=\"Media Name\" formControlName=\"gallary_title\"/>\n                 \n             </div>\n\n                <div *ngIf=\"myForm.get('gallary_title').hasError('required') && myForm.get('gallary_title').touched\">\n\t\t\t                        <div class=\"error\" *ngIf=\"myForm.get('gallary_title').hasError('required')  && myForm.get('gallary_title').touched \">\n\t\t\t                        Title is required\n\t\t\t                        </div> \n\t\t                    \t</div>\n           </aside>\n           <aside class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"text-uppercase\">Category*</label>\n                <div class=\"custom_select\">\n                  <select formControlName=\"select_category\">\n                   <option value =null disabled selected hidden >Select Category</option>\n                    <option *ngFor=\"let item of categoryData\" [ngValue]=\"item._id\">{{item.name}}</option>\n                  </select>\n                </div>\n              </div>\n\n               <div *ngIf=\"myForm.get('select_category').hasError('required')\n                && myForm.get('select_category').touched\">\n                            <div class=\"error\" *ngIf=\"myForm.get('select_category').hasError('required')  && myForm.get('select_category').touched \">\n                            Category is required\n                            </div> \n            </div>\n            </aside>\n         </div>\n         <div class=\"row\">\n           <aside class=\"col-sm-4\">\n              <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\"   style=\"margin-top:0px; color:#fff;\">Save</button>\n           </aside>\n         </div>\n       </form>\n       </div>\n       </div>\n   \n       <h2 style=\"margin-top:10px;\">Gallery List</h2>\n    <div class=\"clear\"></div>\n    <div class=\"white_box\">\n      <div class=\"content_area\" style=\"background: #eaeaea;\">\n        <div class=\"top3_area\">\n        \t<div class=\"gallery_whitebox\" *ngFor =\"let albums of data\">\n\t            <div class=\"white_three\">\n\t              <img src = \"../../assets/images/gallery.png\">\n\t              <p  class=\"text-uppercase\">{{albums.gallary_title}}</p>\n\t              <a  class=\"action_btn\"><i class=\"fa fa-eye\" aria-hidden=\"true\" [routerLink]=\"['/medialist', albums._id]\" [routerLinkActive]=\"['router-link-active']\"></i></a>\n\t              <a  class=\"action_btn\"><i class=\"fa fa-edit\" aria-hidden=\"true\" [routerLink]=\"['/editmedia', albums._id]\" [routerLinkActive]=\"['router-link-active']\"></i></a>\n\t\t\t\t  <a  class=\"action_btn\" (click)=\"RemoveClick(albums._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n\t            </div>\n\n              <div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n                    <div class=\"modal-dialog\" role=\"document\">\n                      <div class=\"modal-content\">  \n                       <div class=\"modal-body text-center\">\n                          <p>Are you sure you want to Delete?</p>\n                          <a class=\"blue_btn\" (click)=\"RemoveComm()\">Yes</a>\n                          <a data-dismiss=\"modal\" class=\"blue_btn\">No</a>\n                        </div>\n                         </div>\n                    </div>\n                  </div>\n                  <div class=\"modal fade\" id=\"category_remove\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n                      <div class=\"modal-dialog\" role=\"document\">\n                        <div class=\"modal-content\">  \n                         <div class=\"modal-body text-center\">\n                            <p>Are you sure you want to Delete?</p>\n                            <a class=\"blue_btn\" (click)=\"DeleteCategory()\">Yes</a>\n                            <a data-dismiss=\"modal\" class=\"blue_btn\">No</a>\n                          </div>\n                           </div>\n                      </div>\n                    </div>\n                  \n\t        </div>\n            <div class=\"clear\"></div>\n          </div>\n        </div>\n    </div>\n  </div>\n\n</div>\n\n <!-- ---------------------- Add Category Modal------------------ -->\n\n <div class=\"modal fade\" id=\"category_modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add Category</h4>\n      </div>\n \n      <div class=\"modal-body select_users\">\n\n         <form  class=\"top_form\" [formGroup]=\"category\" (ngSubmit)=\"AddCategory(category.valid,category.value)\">\n         <div class=\"row\">\n           <aside class=\"col-sm-12\">\n             <div class=\"form-group\">\n                 <input type=\"text\"  class=\"form-control\"  value=\"\" placeholder=\"Category Name\" formControlName=\"category_name\"/>\n              </div>\n              <div *ngIf=\"category.get('category_name').hasError('required') && category.get('category_name').touched\">\n                  <div class=\"error\" *ngIf=\"category.get('category_name').hasError('required')  \n                  && category.get('category_name').touched \">\n                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>Field is required\n                  </div>\n              </div>\n           </aside>\n         </div>\n         <div class=\"row\">\n           <aside class=\"col-sm-12\">\n              <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\" style=\"margin-top:0px; color:#fff;\">Save</button>\n               <button type=\"button\" class=\"blue_btn yellow_btn text-uppercase black_btn\"   style=\"margin-top:0px; color:#fff;\" (click) = \"closes()\" >Cancel</button>\n           </aside>\n         </div>\n       </form>\n      </div>\n\n     \n    </div>\n  </div>\n</div>\n\n\n\n\n\n<!-- -------------------------------Category show---------------------------- -->\n\n<div class=\"modal fade\" id=\"show_categry\" data-toggle=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n         \n          <h4 class=\"modal-title\" id=\"myModalLabel\">All Categories</h4> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        </div>\n   \n        <div class=\"modal-body select_users\" style=\"max-height: 500px;\n      overflow: auto;\">\n          <div class=\"table-responsive\">\n              <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" >\n                <thead>\n                  <tr>\n                    <th>Title</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                   <tr *ngFor=\"let test of categoryData\">\n                    <td><label>{{test.name}}</label></td>\n                  <td><a *ngIf=\"!test.disableStatus\" class=\"action_btn\">\n                    <i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"removeCategory(test._id)\"></i>\n                  </a></td>\n                </tr>\n                </tbody>\n              </table>\n               </div>\n         \n        </div>\n  \n         <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button>\n        </div>\n  \n       \n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade\" id=\"my-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\">Hello World!</h4>\n        </div>\n        <div class=\"modal-body\">\n          Demo Modal\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal --> \n\n<style type=\"text/css\">\n.error\n{\ncolor:red;\n}\n\n</style>\n"

/***/ }),

/***/ "../../../../../src/app/layout/media/media.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.blue_btn + .blue_btn {\n  margin-right: 5px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 12px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.top3_area {\n  padding: 10px 0 45px; }\n\n.white_three {\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.12);\n  min-height: 100px; }\n\n.white_three img {\n  height: 100px;\n  width: 100px; }\n\n.gallery_whitebox {\n  float: left;\n  padding: 4px;\n  width: 16.666%; }\n\n.white_three p {\n  color: #F78C6A;\n  margin-top: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 600; }\n\n.white_three span {\n  position: absolute;\n  left: -29px;\n  width: 58px;\n  height: 58px;\n  font-size: 30px;\n  color: #fff;\n  line-height: 55px;\n  border-radius: 2px;\n  top: 15px; }\n\n.white_three h3 {\n  margin-top: 0; }\n\n.white_three .detail_btn {\n  top: 183px;\n  left: 65px; }\n\n.white_three .edit_btn {\n  top: 183px;\n  left: 165px; }\n\n.bg_area {\n  background: #eaeaea;\n  padding: 15px;\n  margin-bottom: 30px;\n  margin-top: 15px; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.col-sm-6 {\n  position: absolute;\n  top: 113px;\n  right: 14px; }\n\n.error.ng-star-inserted {\n  color: red;\n  margin: 10px;\n  margin-top: -10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/media/media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MediaComponent = (function () {
    function MediaComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.img_valid = true;
        this.add_new = false;
        this.myForm = this.fb.group({
            gallary_title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            select_category: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]
        });
        this.category = this.fb.group({
            category_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]
        });
    }
    MediaComponent.prototype.ngAfterContentChecked = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__("#name").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    };
    MediaComponent.prototype.ngOnInit = function () {
        this.GetGalleries();
        this.GetMediaCategory();
    };
    MediaComponent.prototype.showAdd = function () {
        console.log('show modal');
        this.add_new = true;
        //     alert('hit');category_modal
        //jQuery("#category_modal").modal("show");
        // $('#my-modal').on('hidden.bs.modal', function () {
        //   alert('hit');
        // });
    };
    MediaComponent.prototype.closes = function () {
        console.log('modal close');
        jQuery("#category_modal").modal("hide");
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#category_modal').on('hidden', function () {
            alert('hit');
        });
    };
    MediaComponent.prototype.clearForm = function () {
        this.myForm.reset({
            'gallary_title': ''
        });
    };
    MediaComponent.prototype.RemoveClick = function (id) {
        // alert(id)
        jQuery("#request").modal("show");
        this.id = id;
    };
    MediaComponent.prototype.showCategory = function () {
        jQuery("#show_categry").modal("show");
        // this.GetMediaCategory();
    };
    /**********************************Remove Groups***************************************/
    MediaComponent.prototype.RemoveComm = function () {
        var _this = this;
        // alert("hiiii")
        var params = {
            'type': 'GA',
            'type_id': this.id
        };
        this.authService.removeMedia(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                jQuery("#request").modal("hide");
                // this.users();
                _this.GetGalleries();
                alert("Media Gallery deleted Successfully");
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
    /**********************************ADD GAllery***************************************/
    MediaComponent.prototype.AddGallery = function (val) {
        var _this = this;
        console.log(val);
        if (val) {
            var params = {
                'title': this.myForm.get('gallary_title').value,
                'media_category': this.myForm.value.select_category
            };
            console.log('valueeeeeeeeeeeeeeeee', params);
            this.authService.addGallery(params).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status == true) {
                    _this.GetGalleries();
                    _this.add_new = false;
                    // // console.log(this.myForm.value);
                    _this.clearForm();
                    // this.reset();
                    alert("Media Gallery Created Successfully");
                }
                else {
                    console.log("erorrr");
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.validateAllFormFields(this.myForm);
        }
    };
    /**********************************Get Music Albums***************************************/
    MediaComponent.prototype.GetGalleries = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getGalleries().then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data = _this.res.data;
                // this.GetMediaCategory();        
                console.log(_this.data);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    // /**********************************Get CATEGORIES***************************************/
    // categories() {
    //   // alert("hiiii")
    //   this.authService.getBlogCategories().then((result) => {
    //     console.log("categoriessss", result);
    //     this.res = result;
    //     if (this.res.status == true) {
    //       this.data = this.res.data;
    //       console.log(this.data);
    //     }
    //     else {
    //       console.log("erorr")
    //     }
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }
    /************************arvinder*********************** */
    /**********************************Add Category***************************************/
    MediaComponent.prototype.AddCategory = function (val, value) {
        var _this = this;
        if (val) {
            var params = {
                'category_name': value.category_name
            };
            // console.log(params)
            this.authService.addMediaCategory(params).then(function (result) {
                console.log(result);
                _this.res = result;
                // console.log('resssssssssss',this.res);
                if (_this.res.status == true) {
                    _this.GetGalleries();
                    _this.GetMediaCategory();
                    jQuery("#category_modal").modal("hide");
                    //  this.clearForm();
                }
                else {
                    console.log("false");
                    _this.validateAllFormFields(_this.category);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            console.log("invaliddd");
        }
    };
    /*********************************Validation Error***************************************/
    MediaComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    /**********************************Get Media Category***************************************/
    MediaComponent.prototype.GetMediaCategory = function () {
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
    /*****************************category delete******************** */
    MediaComponent.prototype.removeCategory = function (id) {
        var _this = this;
        // jQuery("#category_remove").modal("show");
        this.categoryId = id;
        var params = {
            'category_id': this.categoryId
        };
        this.authService.removeMediaCategory(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.GetMediaCategory();
                alert("Media Category deleted Successfully");
                console.log(_this.data);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileupload'),
        __metadata("design:type", Object)
    ], MediaComponent.prototype, "myInputVariable", void 0);
    MediaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-media',
            template: __webpack_require__("../../../../../src/app/layout/media/media.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/media/media.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */]])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/media/media.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaModule", function() { return MediaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_routing_module__ = __webpack_require__("../../../../../src/app/layout/media/media-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media_component__ = __webpack_require__("../../../../../src/app/layout/media/media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { MediaRoutingModule as Ng2Charts } from 'ng2-charts';




var MediaModule = (function () {
    function MediaModule() {
    }
    MediaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__media_routing_module__["a" /* MediaRoutingModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__media_component__["a" /* MediaComponent */]]
        })
    ], MediaModule);
    return MediaModule;
}());



/***/ })

});
//# sourceMappingURL=media.module.chunk.js.map