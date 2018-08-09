webpackJsonp(["classifiedlist.module"],{

/***/ "../../../../../src/app/layout/classifiedlist/classifiedlist-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedlistRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classifiedlist_component__ = __webpack_require__("../../../../../src/app/layout/classifiedlist/classifiedlist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__classifiedlist_component__["a" /* ClassifiedlistComponent */]
    }
];
var ClassifiedlistRoutingModule = (function () {
    function ClassifiedlistRoutingModule() {
    }
    ClassifiedlistRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ClassifiedlistRoutingModule);
    return ClassifiedlistRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/classifiedlist/classifiedlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n  \n  <div class=\"tables_area\">\n      <a  class=\"blue_btn yellow_btn pull-right text-uppercase\" data-toggle=\"modal\" data-target=\"#addcat\">Add Category</a>\n  <a  class=\"blue_btn yellow_btn pull-right text-uppercase\" data-toggle=\"modal\" data-target=\"#categry\">Show Category</a>\n  <div class=\"tables_area\">\n      <a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"showAdd()\">Add New</a>\n        <div class=\"clear\"></div>\n    <div class=\"bg_area\" *ngIf=\"add_new\">\n    <h2>Classified</h2>\n    <div>\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"AddClassifieds(myForm.valid)\">\n         <div class=\"row\">\n          <aside class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label class=\"text-uppercase\">Title*</label>\n                    <input type=\"text\"  class=\"form-control\"  value=\"\" placeholder=\"Enter Title\" formControlName=\"classified_title\" id=\"web\"/>\n                    \n                </div>\n                <div *ngIf=\"myForm.get('classified_title').hasError('required') && myForm.get('classified_title').touched\">\n                              <div class=\"error\" *ngIf=\"myForm.get('classified_title').hasError('required')  && myForm.get('classified_title').touched \">\n                              Title is required\n                              </div> \n                          </div>\n              </aside>\n           <aside class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <label class=\"text-uppercase\">Classified Image*</label>\n                      <p class=\"add_user\">\n                        <a data-backdrop=\"static\" data-keyboard=\"false\" (click)=\"openModal()\">Browse</a>&nbsp;\n                        <img *ngIf=\"browse\" [src]=\"imageSrc\" (load)=\"handleImageLoad()\" [class.loaded]=\"imageLoaded\" style=\"height:75px;width: 75px;border-radius: 100%;\"\n                        />\n                        <img *ngIf=\"image\" src=\"{{imageUrl}}\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n                      </p>\n                    </div>\n                    <div class=\"error\" *ngIf=\"!img_valid\">\n                      <div class=\"error\" [hidden]=\"img_valid\">\n                        picture is required\n                      </div>\n                    </div>\n      \n                    <div class=\"error\" *ngIf=\"!img\">\n                      <div class=\"error\" [hidden]=\"img\">\n                        Only png/Jpeg Allowed\n                      </div>\n                    </div>\n                  </aside>\n\n<aside class=\"col-sm-4\">\n                   <div class=\"form-group\">\n                  <label class=\"text-uppercase\">Category*</label>\n                  <div class=\"custom_select\">\n                    <select formControlName=\"category\">\n                     <option value=null disabled selected hidden >Select Category</option>\n                      <option *ngFor=\"let item of cat_dataa\" [ngValue]=\"item._id\">{{item.name}}</option>\n                    </select>\n                  </div>\n                </div>\n                  <div *ngIf=\"myForm.get('category').hasError('required') && myForm.get('category').touched\">\n                              <div class=\"error\" *ngIf=\"myForm.get('category').hasError('required')  && myForm.get('category').touched \">\n                              Category is required\n                              </div> \n                          </div>\n                   </aside>\n          \n          \n         </div>\n\n          <!-- gallery modal -->\n          <div class=\"modal fade\" id=\"gallerymodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-body select_users\" style=\"height: 100%;\n                  \n    overflow: auto;\">\n                    <mat-tab-group>\n                      <mat-tab label=\"Upload files\">\n                        <div class=\"table_box\">\n                          <div class=\"table_inner\">\n                            <p>Browse your file here</p>\n                          \n                          <input type=\"file\" #fileupload (change)=\"onFileChange($event)\" id=\"classified_image\" />\n                          </div>\n                          <div class=\"error\" *ngIf=\"!img\">\n                            <div class=\"error\" [hidden]=\"img\">\n                              Only png/Jpeg Allowed\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"bottom_box text-right\">\n                          <button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n                        </div>\n                      </mat-tab>\n                      <mat-tab label=\"Media library\">\n                        <ul class=\"gallery_images\">\n                          <li *ngFor=\"let image of arryData.libraryImages; let i=index\">\n                            <div class=\"uppre\">\n                              <div class=\"img_outer\">\n                                <img src=\"{{image.image_name}}\" (click)=\"checking(i,image.image_name)\">\n                              </div>\n                            </div>\n                          </li>\n                        </ul>\n                        <div class=\"bottom_box text-right\">\n                          <button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n                        </div>\n                      </mat-tab>\n                    </mat-tab-group>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          <div class=\"row\">\n           <aside class=\"col-sm-12\">\n        <div class=\"form-group\">\n          <label class=\"text-uppercase\">Classified*</label>\n            <textarea id=\"des\" value=\"\" placeholder=\"Enter Description\" class=\"form-control\" formControlName=\"classified\" [attr.maxlength]=\"500\"></textarea>\n            </div>\n              <div *ngIf=\"myForm.get('classified').hasError('required') && myForm.get('classified').touched\">\n                              <div class=\"error\" *ngIf=\"myForm.get('classified').hasError('required')  && myForm.get('classified').touched \">\n                              Classified is required\n                              </div> \n                          </div>\n              </aside>\n         </div>\n\n         <div class=\"row\">\n           <aside class=\"col-sm-4\">\n              <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\"   style=\"margin-top:0px; color:#fff;\">Save</button>\n              <button (click)=\"Cancel()\" class=\"blue_btn yellow_btn text-uppercase\"   style=\"margin-top:0px; color:#fff;\">Cancel</button>\n           </aside>\n         </div>\n       </form>\n        </div>\n       </div>\n   \n       <h2 style=\"margin-top:10px;\">Classified List</h2>\n    <div class=\"clear\"></div>\n    <div class=\"white_box\">\n      <div class=\"table-responsive\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" id=\"example\">\n          <thead>\n            <tr>\n              <th width=\"25%\">Title</th>\n              <th width=\"45%\">Classified</th>\n              <!-- <th width=\"15%\">Category</th> -->\n              <th width=\"20%\">Blog Image</th>\n              <th width=\"10%\">ACTION</th>\n            </tr>\n          </thead>\n          <tbody> \n            <tr *ngFor =\"let albums of data\">\n              <td>{{albums.classified_title}}</td>\n              <td>{{albums.classified}}</td>\n               <!-- <td>{{albums.category}}</td> -->\n               <td><img src=\"{{albums.classified_image}}\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"/></td>\n               \n              <td>\n                <a  class=\"action_btn\"  (click)=\"RemoveClick(albums._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\" ></i></a>\n              </td>\n\n              <div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n                    <div class=\"modal-dialog\" role=\"document\">\n                      <div class=\"modal-content\">  \n                       <div class=\"modal-body text-center\">\n                          <p>Are you sure you want to Delete?</p>\n                          <a class=\"blue_btn\" (click)=\"RemoveComm()\">Yes</a>\n                          <a data-dismiss=\"modal\" class=\"blue_btn\">No</a>\n                        </div>\n                         </div>\n                    </div>\n                  </div>\n            </tr>\n          \n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<!-- <Category show> -->\n\n\n    <div class=\"modal fade\" id=\"categry\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n       \n        <h4 class=\"modal-title\" id=\"myModalLabel\">All Categories</h4> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      </div>\n \n      <div class=\"modal-body select_users\" style=\"max-height: 500px;\n    overflow: auto;\">\n        <div class=\"table-responsive\">\n            <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" >\n              <thead>\n                <tr>\n                  <th>Title</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                 <tr *ngFor=\"let test of cat_dataa\">\n                  <td><label>{{test.name}}</label></td>\n                <td><a  class=\"action_btn\" *ngIf=\"!test.disableStatus\">\n                  <i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"RemoveClick(test._id)\"></i>\n                </a></td>\n              </tr>\n              </tbody>\n            </table>\n             </div>\n       \n      </div>\n\n       <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button>\n      </div>\n\n     \n    </div>\n  </div>\n</div>\n\n<!-- ----------------------Category Modal------------------ -->\n\n<div class=\"modal fade\" id=\"addcat\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add Category</h4>\n      </div>\n \n      <div class=\"modal-body select_users\">\n\n         <form  class=\"top_form\" [formGroup]=\"eForm\" (ngSubmit)=\"AddCategories(eForm.valid)\">\n         <div class=\"row\">\n           <aside class=\"col-sm-12\">\n             <div class=\"form-group\">\n                 <input type=\"text\"  class=\"form-control\"  value=\"\" placeholder=\"Album Name\" formControlName=\"name\"/>\n              </div>\n           </aside>\n         </div>\n         <div class=\"row\">\n           <aside class=\"col-sm-12\">\n              <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\" style=\"margin-top:0px; color:#fff;\">Save</button>\n               <button type=\"button\" class=\"blue_btn yellow_btn text-uppercase black_btn\"   style=\"margin-top:0px; color:#fff;\" data-dismiss=\"modal\" >Cancel</button>\n           </aside>\n         </div>\n       </form>\n      </div>\n\n     \n    </div>\n  </div>\n</div>\n<style type=\"text/css\">\n.error\n{\ncolor:red;\n}\n\n</style>"

/***/ }),

/***/ "../../../../../src/app/layout/classifiedlist/classifiedlist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n\n.blue_btn + .blue_btn {\n  margin-right: 5px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600;\n  cursor: pointer; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 12px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.top3_area {\n  padding: 10px 0 45px; }\n\n.white_three {\n  background: transparent;\n  margin: 20px 0 0 29px;\n  text-align: center;\n  padding: 25px;\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.12);\n  min-height: 100px;\n  margin-left: 20px;\n  margin-right: 20px; }\n\n.white_three img {\n  height: 150px;\n  width: 150px; }\n\n.white_three p {\n  color: #000;\n  margin-top: 5px; }\n\n.white_three span {\n  position: absolute;\n  left: -29px;\n  width: 58px;\n  height: 58px;\n  font-size: 30px;\n  color: #fff;\n  line-height: 55px;\n  border-radius: 2px;\n  top: 15px; }\n\n.white_three h3 {\n  margin-top: 0; }\n\n.white_three .detail_btn {\n  top: 183px;\n  left: 65px; }\n\n.white_three .edit_btn {\n  top: 183px;\n  left: 165px; }\n\ntextarea.form-control {\n  height: 150px;\n  resize: none; }\n\n.bg_area {\n  background: #eaeaea;\n  padding: 15px;\n  margin-bottom: 30px;\n  margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/classifiedlist/classifiedlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net__ = __webpack_require__("../../../../datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_datatables_net__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClassifiedlistComponent = (function () {
    function ClassifiedlistComponent(fb, route, authService) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.authService = authService;
        this.img = true;
        this.add_new = false;
        this.song_valid = true;
        this.browse = false;
        this.arryData = [];
        this.loaded = false;
        this.imageSrc = '';
        this.imageLoaded = false;
        this.image = false;
        this.img_valid = true;
        this.myForm = this.fb.group({
            classified_title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            category: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            classified: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            classified_image: null
        });
        this.eForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]
        });
        this.route.params.subscribe(function (params) {
            console.log("last page params", params);
            _this.id = params;
        });
    }
    ClassifiedlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GetCategories();
        setTimeout(function () {
            _this.mytable = __WEBPACK_IMPORTED_MODULE_4_jquery__('#example').DataTable({
                "bPaginate": true,
                "bLengthChange": true,
                // "pageLength": 7,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
            });
        }, 500);
        this.GetClassifieds();
    };
    ClassifiedlistComponent.prototype.RemoveClick1 = function (id) {
        // alert(id)
        jQuery("#request").modal("show");
        this.idd = id;
    };
    ClassifiedlistComponent.prototype.ngAfterContentChecked = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#web").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#des").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    };
    ClassifiedlistComponent.prototype.showAdd = function () {
        this.add_new = true;
    };
    ClassifiedlistComponent.prototype.Cancel = function () {
        this.add_new = false;
    };
    ClassifiedlistComponent.prototype.clearForm = function () {
        this.myInputVariable.nativeElement.value = "";
        this.myForm.reset({
            'classified': '',
            'classified_title': ''
        });
        this.browse = false;
        this.image = false;
        this.imageSrc = '';
        this.imageUrl = '';
    };
    ClassifiedlistComponent.prototype.clear = function () {
        this.eForm.reset({
            'name': ''
        });
    };
    /**********************************Remove Groups***************************************/
    ClassifiedlistComponent.prototype.RemoveClick = function (id) {
        var _this = this;
        // alert("hiiii")
        var params = {
            'type': 'CA',
            'type_id': id
        };
        this.authService.removeClassified(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                alert("Category Deleted Successfully");
                // jQuery("#request").modal("hide");
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
    ClassifiedlistComponent.prototype.AddCategories = function (val) {
        var _this = this;
        console.log(val);
        if (val) {
            var params = {
                'title': this.eForm.get('name').value
            };
            this.authService.addClassCategory(params).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status == true) {
                    alert("Category Added Successfully");
                    jQuery("#addcat").modal("hide");
                    _this.GetCategories();
                    // // console.log(this.myForm.value);
                    _this.clear();
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
    ClassifiedlistComponent.prototype.GetCategories = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getClassCategories().then(function (result) {
            console.log("categoriessss", result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.cat_dataa = _this.res.data;
                console.log(_this.data);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Remove Groups***************************************/
    ClassifiedlistComponent.prototype.RemoveComm = function () {
        var _this = this;
        // alert("hiiii")
        var params = {
            'type': 'CL',
            'type_id': this.idd
        };
        this.authService.removeClassified(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                jQuery("#request").modal("hide");
                _this.mytable.destroy();
                setTimeout(function () {
                    _this.mytable = __WEBPACK_IMPORTED_MODULE_4_jquery__('#example').DataTable({
                        "bPaginate": true,
                        "bLengthChange": true,
                        // "pageLength": 7,
                        "bFilter": true,
                        "bInfo": false,
                        "bAutoWidth": true,
                    });
                }, 500);
                alert("Classified Deleted Succefully");
                // this.users();
                _this.GetClassifieds();
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
    /**********************************get IMAGE***************************************/
    ClassifiedlistComponent.prototype.onFileChange = function (event) {
        console.log(event);
        if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
            if (event.target.files.length > 0) {
                this.image = false;
                this.img = true;
                this.img_valid = true;
                var file = event.target.files[0];
                console.log(file);
                this.imageUrl = file;
                // this.myForm.get('group_image').setValue(file);
                var reader = new FileReader();
                reader.onload = this._handleReaderLoaded.bind(this);
                reader.readAsDataURL(file);
            }
        }
        else {
            this.imageUrl = '';
            this.img_valid = true;
            this.img = false;
        }
        //this.saveFiles(files);
    };
    ClassifiedlistComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
    };
    ClassifiedlistComponent.prototype._handleReaderLoaded = function (e) {
        this.browse = true;
        console.log('image', e);
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    ClassifiedlistComponent.prototype.openModal = function () {
        jQuery('#gallerymodal').modal({ backdrop: 'static', keyboard: false });
        jQuery("#gallerymodal").modal("show");
        this.getlibrary();
    };
    ClassifiedlistComponent.prototype.checkings = function () {
        alert('hi');
    };
    ClassifiedlistComponent.prototype.checking = function (index, url) {
        this.browse = false;
        this.image = true;
        this.img = true;
        this.img_valid = true;
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
        console.log('url', url);
        this.imageUrl = url;
    };
    // get media library/////
    ClassifiedlistComponent.prototype.getlibrary = function () {
        var _this = this;
        console.log('manager lsit');
        this.authService.getLibrary().then(function (result) {
            console.log(result);
            _this.res = result;
            console.log('lasun', _this.res);
            if (_this.res.status == true) {
                _this.arryData = _this.res.data;
                console.log('arrrayy', _this.arryData);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get Classifieds Of Category***************************************/
    ClassifiedlistComponent.prototype.GetClassifieds = function () {
        var _this = this;
        var params = {
            'id': this.id.id
        };
        // alert("hiiii")
        this.authService.getClassifiedsOfCategory().then(function (result) {
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
    /**********************************ADD CLASSIFIEDS***************************************/
    ClassifiedlistComponent.prototype.AddClassifieds = function (val) {
        var _this = this;
        console.log('imageUrl', this.imageUrl);
        console.log(val);
        if (!this.img) {
            this.song_valid = true;
        }
        else if (!this.imageUrl) {
            this.img_valid = false;
        }
        else if (val) {
            var data = new FormData();
            data.append('classified_title', this.myForm.get('classified_title').value);
            data.append('category', this.myForm.get('category').value);
            data.append('classified', this.myForm.get('classified').value);
            data.append('classified_image', this.imageUrl);
            this.authService.addClassified(data).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status == true) {
                    _this.GetClassifieds();
                    _this.add_new = false;
                    _this.clearForm();
                    _this.mytable.destroy();
                    setTimeout(function () {
                        _this.mytable = __WEBPACK_IMPORTED_MODULE_4_jquery__('#example').DataTable({
                            "bPaginate": true,
                            "bLengthChange": true,
                            // "pageLength": 7,
                            "bFilter": true,
                            "bInfo": false,
                            "bAutoWidth": true,
                        });
                    }, 500);
                    // this.reset();
                    alert("Classified Added Successfully");
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileupload'),
        __metadata("design:type", Object)
    ], ClassifiedlistComponent.prototype, "myInputVariable", void 0);
    ClassifiedlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-classifiedlist',
            template: __webpack_require__("../../../../../src/app/layout/classifiedlist/classifiedlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/classifiedlist/classifiedlist.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */]])
    ], ClassifiedlistComponent);
    return ClassifiedlistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/classifiedlist/classifiedlist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifiedlistModule", function() { return ClassifiedlistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__classifiedlist_routing_module__ = __webpack_require__("../../../../../src/app/layout/classifiedlist/classifiedlist-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__classifiedlist_component__ = __webpack_require__("../../../../../src/app/layout/classifiedlist/classifiedlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ClassifiedlistModule = (function () {
    function ClassifiedlistModule() {
    }
    ClassifiedlistModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_9__classifiedlist_routing_module__["a" /* ClassifiedlistRoutingModule */], __WEBPACK_IMPORTED_MODULE_11__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_10__classifiedlist_component__["a" /* ClassifiedlistComponent */]]
        })
    ], ClassifiedlistModule);
    return ClassifiedlistModule;
}());



/***/ })

});
//# sourceMappingURL=classifiedlist.module.chunk.js.map