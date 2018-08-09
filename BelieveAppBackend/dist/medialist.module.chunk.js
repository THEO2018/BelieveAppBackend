webpackJsonp(["medialist.module"],{

/***/ "../../../../../src/app/layout/medialist/medialist-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedialistRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medialist_component__ = __webpack_require__("../../../../../src/app/layout/medialist/medialist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__medialist_component__["a" /* MedialistComponent */]
    }
];
var MedialistRoutingModule = (function () {
    function MedialistRoutingModule() {
    }
    MedialistRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], MedialistRoutingModule);
    return MedialistRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/medialist/medialist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n  \n  <div class=\"tables_area\">\n  \t  <a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"showAdd()\">Add New</a>\n        <div class=\"clear\"></div>\n    <div class=\"bg_area\" *ngIf=\"add_new\">\n    <h2>Media</h2>\n    <div>\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"AddMedia(myForm.valid)\">\n         <div class=\"row\">\n          <aside class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label class=\"text-uppercase\">Media</label>\n              <p class=\"add_user\">\n                <a (click)=\"openModal()\">Browse</a>&nbsp;\n                <img *ngIf=\"browse\" [src]=\"imageSrc\" (load)=\"handleImageLoad()\" [class.loaded]=\"imageLoaded\" style=\"height:75px;width: 75px;border-radius: 100%;\"\n\t\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"image\" src=\"{{imageUrl}}\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n                      <img *ngIf=\"imageOption\" src=\"{{thumnail}}\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n                      <p *ngIf=\"videoOption\">{{songTitle}}\n                  \n              </p>\n            </div>\n            <div class=\"error\" *ngIf=\"!img_valid\">\n              <div class=\"error\" [hidden]=\"img_valid\">\n                Media is required\n              </div>\n            </div>\n\n            <div class=\"error\" *ngIf=\"!img\">\n              <div class=\"error\" [hidden]=\"img\">\n                Only media is allowed\n              </div>\n            </div>\n          </aside>\n         </div>\n         <div class=\"modal fade\" id=\"gallerymodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-body select_users\" style=\"height: 100%;\n              \n        overflow: auto;\">\n                <mat-tab-group>\n                  <mat-tab label=\"Upload files\">\n                    <div class=\"table_box\">\n                      <div class=\"table_inner\">\n                        <p>Browse your file here</p>\n                      \n                      <input type=\"file\"  #fileupload (change)=\"onFileChange($event)\" id=\"media_file\" />\n                      </div>\n                      <div class=\"error\" *ngIf=\"!img\">\n                        <div class=\"error\" [hidden]=\"img\">\n                          Only Media Are Allowed\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"bottom_box text-right\">\n                      <button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n                    </div>\n                  </mat-tab>\n                  <mat-tab label=\"Image library\">\n                    <ul class=\"gallery_images\">\n                      <li *ngFor=\"let image of arryData.libraryImages; let i=index\">\n                        <div class=\"uppre\">\n                          <div class=\"img_outer\">\n                            <img src = \"{{image.image_name}}\" (click)=\"checking(i,image.image_name,image.media_type)\">\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                    <div class=\"bottom_box text-right\">\n                      <button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n                    </div>\n                  </mat-tab>\n                  <mat-tab label=\"Video library\">\n                    <ul class=\"gallery_images\">\n                      <li *ngFor=\"let video of arryData.libraryVideos; let i=index\">\n                        <div class=\"uppre\">\n                          <div class=\"img_outer\">\n                            <img src = \"{{video.thumbnail}}\" (click)=\"VideoGallery(i,video.image_name,video.title,video.thumbnail,video.media_type)\">\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                    <div class=\"bottom_box text-right\">\n                      <button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n                    </div>\n                  </mat-tab>\n                </mat-tab-group>\n              </div>\n            </div>\n          </div>\n        </div>\n         <div class=\"row\">\n           <aside class=\"col-sm-4\">\n              <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\"   style=\"margin-top:0px; color:#fff;\">Save</button>\n           </aside>\n         </div>\n       </form>\n        </div>\n       </div>\n   \n       <h2 style=\"margin-top:10px;\">Media List</h2>\n    <div class=\"clear\"></div>\n    <div class=\"white_box\">\n      <div class=\"table-responsive\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" id=\"example\">\n          <thead>\n            <tr>\n              <th width=\"20%\">Media Type</th>\n              <th width=\"50%\">Media</th>\n              <th width=\"20%\">Category</th>\n              <th width=\"10%\">ACTION</th>\n            </tr>\n          </thead>\n          <tbody> \n            <tr *ngFor =\"let albums of data\">\n              <td *ngIf=\"albums.media_type=='P'\">Image</td>\n              <td *ngIf=\"albums.media_type=='V'\">Video</td>\n               <td><a target=\"_blank\" href=\"{{albums.media_file}}\">{{albums.media_file}}</a></td>\n               <td>{{albums.gallary_id.category.name}}</td>\n              <td>\n                <a  class=\"action_btn\"  (click)=\"RemoveClick(albums._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\" ></i></a>\n              </td>\n\n              <div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n                    <div class=\"modal-dialog\" role=\"document\">\n                      <div class=\"modal-content\">  \n                       <div class=\"modal-body text-center\">\n                          <p>Are you sure you want to Delete?</p>\n                          <a class=\"blue_btn\" (click)=\"RemoveComm()\">Yes</a>\n                          <a data-dismiss=\"modal\" class=\"blue_btn\">No</a>\n                        </div>\n                         </div>\n                    </div>\n                  </div>\n            </tr>\n            <!-- <tr>\n              <td colspan=\"6\">\n                <mfBootstrapPaginator></mfBootstrapPaginator>\n              </td>\n            </tr> -->\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n</div>\n<style type=\"text/css\">\n.error\n{\ncolor:red;\n}\n\n</style>"

/***/ }),

/***/ "../../../../../src/app/layout/medialist/medialist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.blue_btn + .blue_btn {\n  margin-right: 5px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.top3_area {\n  padding: 10px 0 45px; }\n\n.white_three {\n  background: transparent;\n  margin: 20px 0 0 29px;\n  text-align: center;\n  padding: 25px;\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.12);\n  min-height: 100px;\n  margin-left: 20px;\n  margin-right: 20px; }\n\n.white_three img {\n  height: 150px;\n  width: 150px; }\n\n.white_three p {\n  color: #000;\n  margin-top: 5px; }\n\n.white_three span {\n  position: absolute;\n  left: -29px;\n  width: 58px;\n  height: 58px;\n  font-size: 30px;\n  color: #fff;\n  line-height: 55px;\n  border-radius: 2px;\n  top: 15px; }\n\n.white_three h3 {\n  margin-top: 0; }\n\n.white_three .detail_btn {\n  top: 183px;\n  left: 65px; }\n\n.white_three .edit_btn {\n  top: 183px;\n  left: 165px; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n\n.gallery_images li p {\n  margin: 137px 0 0 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: center; }\n\n.bg_area {\n  background: #eaeaea;\n  padding: 15px;\n  margin-bottom: 30px;\n  margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/medialist/medialist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedialistComponent; });
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





// var $ = require('jquery');

var MedialistComponent = (function () {
    function MedialistComponent(fb, route, authService) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.authService = authService;
        this.imageOption = false;
        this.videoOption = false;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortOrder = "asc";
        this.img = true;
        this.song_valid = true;
        this.add_new = false;
        this.browse = false;
        this.arryData = [];
        this.loaded = false;
        this.imageSrc = '';
        this.imageLoaded = false;
        this.image = false;
        this.img_valid = true;
        this.myForm = this.fb.group({
            media_file: ['']
        });
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.id = params;
        });
    }
    MedialistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GetMedia();
        setTimeout(function () {
            _this.table = __WEBPACK_IMPORTED_MODULE_4_jquery__('#example').DataTable({
                "bPaginate": true,
                "bLengthChange": true,
                // "pageLength": 7,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
            });
        }, 500);
    };
    MedialistComponent.prototype.showAdd = function () {
        this.add_new = true;
    };
    MedialistComponent.prototype.RemoveClick = function (id) {
        // alert(id)
        jQuery("#request").modal("show");
        this.idd = id;
    };
    /**********************************Remove Groups***************************************/
    MedialistComponent.prototype.RemoveComm = function () {
        var _this = this;
        // alert("hiiii")
        var params = {
            'type': 'ME',
            'type_id': this.idd
        };
        this.authService.removeMedia(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                jQuery("#request").modal("hide");
                // this.users();
                _this.GetMedia();
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
    /**********************************CLEAR FORM***************************************/
    MedialistComponent.prototype.reset = function () {
        this.imageSrc = "";
        this.imageUrl = "";
        this.thumnail = "";
        this.songTitle = "";
        this.browse = false;
        this.image = false;
        this.imageOption = false;
        this.videoOption = false;
        // console.log(this.myInputVariable.nativeElement.files);
        this.myInputVariable.nativeElement.value = "";
        // console.log(this.myInputVariable.nativeElement.files);
    };
    /**********************************get SONG***************************************/
    MedialistComponent.prototype.onFileChange = function (event) {
        console.log(event);
        if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg' || event.target.files[0].type === 'video/mp4') {
            if (event.target.files[0].type === 'image/jpeg' || event.target.files[0].type === 'image/png') {
                this.type = 'P';
            }
            else if (event.target.files[0].type === 'video/mp4') {
                this.type = 'V';
            }
            if (event.target.files.length > 0) {
                this.imageOption = false;
                this.videoOption = true;
                this.img = true;
                this.song_valid = true;
                this.file = event.target.files[0];
                console.log('fileeeeeeeeeeeeee', this.file);
                this.songTitle = this.file.name;
                console.log('songname', this.songTitle);
                this.imageUrl = this.file;
                var reader = new FileReader();
                reader.onload = this._handleReaderLoaded.bind(this);
                reader.readAsDataURL(this.file);
            }
        }
        else {
            this.song_valid = true;
            this.img = false;
        }
    };
    MedialistComponent.prototype.openModal = function () {
        jQuery("#gallerymodal").modal("show");
        this.getlibrary();
    };
    MedialistComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
    };
    MedialistComponent.prototype._handleReaderLoaded = function (e) {
        this.imageOption = false;
        this.browse = true;
        console.log('image', e);
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    MedialistComponent.prototype.checking = function (index, url, mediaType) {
        this.browse = false;
        this.videoOption = false;
        this.image = true;
        this.imageOption = false;
        this.img = true;
        this.img_valid = true;
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
        console.log('url', url);
        this.type = mediaType;
        console.log('type', this.type);
        this.imageUrl = url;
    };
    MedialistComponent.prototype.VideoGallery = function (index, url, title, thumbnail, mediaType) {
        this.imageOption = true;
        this.browse = false;
        this.videoOption = false;
        this.image = false;
        this.img = true;
        this.img_valid = true;
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
        console.log('url', url);
        this.imageUrl = url;
        this.thumnail = thumbnail;
        console.log('thumnail', this.thumnail);
        this.type = mediaType;
        console.log('mdeia type', this.type);
    };
    // get media library/////
    MedialistComponent.prototype.getlibrary = function () {
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
    /**********************************ADD MEDIA***************************************/
    MedialistComponent.prototype.AddMedia = function (val) {
        var _this = this;
        console.log(val);
        console.log('media type', this.type);
        console.log('imageThumbnail', this.thumnail);
        console.log('image_name', this.imageUrl);
        if (!this.img) {
            this.img_valid = true;
        }
        else if (!this.imageUrl) {
            this.img_valid = false;
        }
        else {
            var data = new FormData();
            data.append('media_file', this.imageUrl);
            data.append('gallary_id', this.id.id);
            data.append('media_type', this.type);
            data.append('thumbnail', this.thumnail);
            this.authService.addMedia(data).then(function (result) {
                console.log('medialist', result);
                _this.res = result;
                _this.imageUrl = '';
                if (_this.res.status == true) {
                    _this.GetMedia();
                    _this.add_new = false;
                    // this.clearForm();
                    _this.reset();
                    alert("Media Uploaded Successfully");
                }
                else {
                    console.log("erorrr");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    /**********************************Get Media of Gallaries***************************************/
    MedialistComponent.prototype.GetMedia = function () {
        var _this = this;
        var params = {
            'id': this.id.id
        };
        // alert("hiiii")
        this.authService.getMediaOfGallery(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                // this.GetMediaCategory();
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileupload'),
        __metadata("design:type", Object)
    ], MedialistComponent.prototype, "myInputVariable", void 0);
    MedialistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-medialist',
            template: __webpack_require__("../../../../../src/app/layout/medialist/medialist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/medialist/medialist.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */]])
    ], MedialistComponent);
    return MedialistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/medialist/medialist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedialistModule", function() { return MedialistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__medialist_routing_module__ = __webpack_require__("../../../../../src/app/layout/medialist/medialist-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medialist_component__ = __webpack_require__("../../../../../src/app/layout/medialist/medialist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var MedialistModule = (function () {
    function MedialistModule() {
    }
    MedialistModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__medialist_routing_module__["a" /* MedialistRoutingModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__medialist_component__["a" /* MedialistComponent */]]
        })
    ], MedialistModule);
    return MedialistModule;
}());



/***/ })

});
//# sourceMappingURL=medialist.module.chunk.js.map