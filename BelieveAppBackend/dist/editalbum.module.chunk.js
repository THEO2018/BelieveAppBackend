webpackJsonp(["editalbum.module"],{

/***/ "../../../../../src/app/layout/editalbum/editalbum-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditalbumRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editalbum_component__ = __webpack_require__("../../../../../src/app/layout/editalbum/editalbum.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__editalbum_component__["a" /* EditalbumComponent */]
    }
];
var EditalbumRoutingModule = (function () {
    function EditalbumRoutingModule() {
    }
    EditalbumRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], EditalbumRoutingModule);
    return EditalbumRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/editalbum/editalbum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_area\">\n    <h2>Edit Album</h2>\n    <div>\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"EditAlbum(myForm.valid)\" class=\"top_form\">\n         <div class=\"row\">\n           <aside class=\"col-sm-4\">\n             <div class=\"form-group\">\n               <label class=\"text-uppercase\">Album Name*</label>\n                 <input id=\"album\" type=\"text\"  class=\"form-control\"  value=\"\" placeholder=\"Album Name\" formControlName=\"album_title\"/>\n                 \n             </div>\n                  <div *ngIf=\"myForm.get('album_title').hasError('required') && myForm.get('album_title').touched\">\n\t\t\t                        <div class=\"error\" *ngIf=\"myForm.get('album_title').hasError('required')  && myForm.get('album_title').touched \">\n\t\t\t                        Title is required\n\t\t\t                        </div> \n\t\t                    \t</div>\n           </aside>\n           <aside class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label class=\"text-uppercase\">Artist*</label>\n                    <div class=\"custom_select\">\n                      <select formControlName=\"artist\">\n                       <option value =null disabled selected hidden >Select Artist</option>\n                        <option *ngFor=\"let item of artistData\" [ngValue]=\"item._id\">{{item.artist_name}}</option>\n                      </select>\n                    </div>\n                  </div>\n    \n                   <div *ngIf=\"myForm.get('artist').hasError('required')\n                    && myForm.get('artist').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('artist').hasError('required')  && myForm.get('artist').touched \">\n                                Artist is required\n                                </div> \n                </div>\n                </aside>\n         </div>\n         <div class=\"row\">\n            <aside class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Front picture*</label>\n\t\t\t\t\t\t\t\t\t<p data-backdrop=\"static\" data-keyboard=\"false\" class=\"add_user\" (click) = \"openModal()\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!api_image && !imageSrc && !image\" src=\"../../assets/images/user.png\"  alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"/>\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"api_image && !imageSrc && !image\" src=\"{{api_image}}\"  alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\"/>\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"browse\" [src]=\"imageSrc\" (load)=\"handleImageLoad()\" [class.loaded]=\"imageLoaded\" style=\"height:75px;width: 75px;border-radius: 100%;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"image\" src=\"{{this.imageUrl}}\"  style=\"height:75px;width: 75px;border-radius: 100%;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!img_valid\">\n\t\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"img_valid\">\n\t\t\t\t\t\t\t\t\t\tFront picture is required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"!img\">\n\t\t\t\t\t\t\t\t\t<div class=\"error\" [hidden]=\"img\">\n\t\t\t\t\t\t\t\t\t\tOnly png/Jpeg Allowed\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</aside>\n         </div>\n\n         <!-- gallery modal -->\n\n<div class=\"modal fade\" id=\"gallerymodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-body select_users\" style=\"height: 100%;\n\t\t\t\t\t\noverflow: auto;\">\n\t\t\t\t\t<mat-tab-group color=\"primary\">\n\t\t\t\t\t\t<mat-tab label=\"Upload files\">\n\t\t\t\t\t\t\t<div class=\"table_box\">\n\t\t\t\t\t\t\t\t<div class=\"table_inner\">\n\t\t\t\t\t\t\t\t\t<p>Browse your file here</p>\n\t\t\t\t\t\t\t\t\t<input type=\"file\" #fileupload (change)=\"onFileChange($event)\" id=\"event_cover\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"bottom_box text-right\">\n\t\t\t\t\t\t\t\t<button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t<mat-tab label=\"Media library\">\n\t\t\t\t\t\t\t<ul class=\"gallery_images\">\n\t\t\t\t\t\t\t\t<li *ngFor=\"let image of arryData.libraryImages; let i=index\">\n\t\t\t\t\t\t\t\t\t<div class=\"uppre\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"img_outer\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{image.image_name}}\" (click)=\"checking(i,image.image_name)\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"bottom_box text-right\">\n\t\t\t\t\t\t\t\t<button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t</mat-tab-group>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n         <div class=\"row\">\n           <aside class=\"col-sm-4\">\n              <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\"   style=\"margin-top:0px; color:#fff;\">Update</button>\n               <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\"   style=\"margin-top:0px; color:#fff;\" (click)=\"cancel()\">Cancel</button>\n           </aside>\n         </div>\n       </form>\n       </div>\n       </div>\n\n       <style type=\"text/css\">\n.error\n{\ncolor:red;\n}\n\n</style>"

/***/ }),

/***/ "../../../../../src/app/layout/editalbum/editalbum.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.blue_btn + .blue_btn {\n  margin-right: 5px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 12px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.top3_area {\n  padding: 10px 0 45px; }\n\n.white_three {\n  background: #fff;\n  margin: 20px 0 0 29px;\n  text-align: center;\n  padding: 25px;\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.12);\n  min-height: 100px;\n  margin-left: 20px;\n  margin-right: 20px; }\n\n.white_three img {\n  height: 150px;\n  width: 150px; }\n\n.white_three p {\n  color: #F78C6A;\n  margin-top: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 600; }\n\n.white_three span {\n  position: absolute;\n  left: -29px;\n  width: 58px;\n  height: 58px;\n  font-size: 30px;\n  color: #fff;\n  line-height: 55px;\n  border-radius: 2px;\n  top: 15px; }\n\n.white_three h3 {\n  margin-top: 0; }\n\n.white_three .detail_btn {\n  top: 183px;\n  left: 65px; }\n\n.white_three .edit_btn {\n  top: 183px;\n  left: 165px; }\n\n.bg_area {\n  background: #eaeaea;\n  padding: 15px;\n  margin-bottom: 30px;\n  margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/editalbum/editalbum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditalbumComponent; });
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





var EditalbumComponent = (function () {
    function EditalbumComponent(fb, router, authService, route) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.img = true;
        this.imageLoaded = false;
        this.imageSrc = '';
        this.loaded = false;
        this.browse = false;
        this.arryData = [];
        this.image = false;
        this.img_valid = true;
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.id = params;
        });
        this.myForm = this.fb.group({
            album_title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            artist: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            album_image: null
        });
    }
    EditalbumComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#album").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        this.GetAlbumDetail();
        this.getArtist();
    };
    EditalbumComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/music');
    };
    /**********************************get image***************************************/
    EditalbumComponent.prototype.onFileChange = function (event) {
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
            this.img_valid = true;
            this.img = false;
        }
        //this.saveFiles(files);
    };
    EditalbumComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
    };
    EditalbumComponent.prototype._handleReaderLoaded = function (e) {
        this.browse = true;
        console.log('image', e);
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    EditalbumComponent.prototype.openModal = function () {
        jQuery('#gallerymodal').modal({ backdrop: 'static', keyboard: false });
        jQuery("#gallerymodal").modal("show");
        this.getlibrary();
    };
    EditalbumComponent.prototype.checking = function (index, url) {
        this.browse = false;
        this.image = true;
        this.img = true;
        this.img_valid = true;
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
        console.log('url', url);
        this.imageUrl = url;
    };
    // get media library/////
    EditalbumComponent.prototype.getlibrary = function () {
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
    /**********************************EDit Albums***************************************/
    EditalbumComponent.prototype.EditAlbum = function (val) {
        var _this = this;
        console.log('imageurl', this.imageUrl);
        console.log(val);
        if (val) {
            var data = new FormData();
            data.append('album_title', this.myForm.get('album_title').value);
            data.append('artist', this.myForm.get('artist').value);
            data.append('album_image', this.imageUrl);
            data.append('album_id', this.id.id);
            this.authService.editAlbum(data).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status == true) {
                    _this.router.navigateByUrl('/music');
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
    /***********************************get Artist*********************/
    EditalbumComponent.prototype.getArtist = function () {
        var _this = this;
        this.authService.getMusicArtist().then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.artistData = _this.res.data;
                console.log(_this.data);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get Albums Detail***************************************/
    EditalbumComponent.prototype.GetAlbumDetail = function () {
        var _this = this;
        // alert("hiiii")
        var params = {
            'id': this.id.id
        };
        this.authService.getAlbumDetail(params).then(function (result) {
            console.log("album detaillll", result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data = _this.res.data;
                _this.myForm.get('album_title').setValue(_this.data.album_title);
                _this.myForm.get('artist').setValue(_this.data.artist);
                _this.api_image = _this.data.album_image;
                console.log(_this.api_image);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditalbumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editalbum',
            template: __webpack_require__("../../../../../src/app/layout/editalbum/editalbum.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/editalbum/editalbum.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], EditalbumComponent);
    return EditalbumComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/editalbum/editalbum.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditalbumModule", function() { return EditalbumModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editalbum_routing_module__ = __webpack_require__("../../../../../src/app/layout/editalbum/editalbum-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editalbum_component__ = __webpack_require__("../../../../../src/app/layout/editalbum/editalbum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { MusicModule as Ng2Charts } from 'ng2-charts';










var EditalbumModule = (function () {
    function EditalbumModule() {
    }
    EditalbumModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__editalbum_routing_module__["a" /* EditalbumRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__editalbum_component__["a" /* EditalbumComponent */]]
        })
    ], EditalbumModule);
    return EditalbumModule;
}());



/***/ })

});
//# sourceMappingURL=editalbum.module.chunk.js.map