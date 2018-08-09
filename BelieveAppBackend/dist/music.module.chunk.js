webpackJsonp(["music.module"],{

/***/ "../../../../../src/app/layout/music/music-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_component__ = __webpack_require__("../../../../../src/app/layout/music/music.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__music_component__["a" /* MusicComponent */]
    }
];
var MusicModule = (function () {
    function MusicModule() {
    }
    MusicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], MusicModule);
    return MusicModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/music/music.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n  \n  <div class=\"tables_area\">\n      <a class=\"blue_btn yellow_btn pull-right text-uppercase\" data-toggle=\"modal\" data-target=\"#show_artist\">Get Artist</a>\n      <a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"addArtist()\">Add Artist</a>\n    <a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"showAdd()\">Add New</a>\n        <div class=\"clear\"></div>\n    <div class=\"bg_area\" *ngIf=\"add_new\">\n    <h2>Add New Album</h2>\n    <div>\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"AddAlbum(myForm.valid)\" class=\"top_form\">\n         <div class=\"row\">\n           <aside class=\"col-sm-4\">\n             <div class=\"form-group\">\n                 <input id=\"titlemusic\" type=\"text\"  class=\"form-control\"  value=\"\" placeholder=\"Album Name\" formControlName=\"album_title\" [attr.maxlength]=\"50\"/>\n                 \n             </div>\n\n              <div *ngIf=\"myForm.get('album_title').hasError('required') && myForm.get('album_title').touched\">\n\t\t\t                        <div class=\"error\" *ngIf=\"myForm.get('album_title').hasError('required')  && myForm.get('album_title').touched \">\n\t\t\t                        Title is required\n\t\t\t                        </div> \n\t\t                    \t</div>\n           </aside>\n         </div>\n         <div class=\"row\">\n            <aside class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label class=\"text-uppercase\">Album Image*</label>\n                  <p class=\"add_user\">\n                    <a (click) = \"openModal()\">Browse</a>&nbsp;\n                    <img *ngIf=\"browse\" [src]=\"imageSrc\" (load)=\"handleImageLoad()\" [class.loaded]=\"imageLoaded\" style=\"height:75px;width: 75px;border-radius: 100%;\"\n                    />\n                    <img *ngIf=\"image\" src=\"{{imageUrl}}\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n                  </p>\n                </div>\n                <div class=\"error\" *ngIf=\"!img_valid\">\n                  <div class=\"error\" [hidden]=\"img_valid\">\n                      Album Image is required\n                  </div>\n                </div>\n  \n                <div class=\"error\" *ngIf=\"!img\">\n                  <div class=\"error\" [hidden]=\"img\">\n                    Only png/Jpeg Allowed\n                  </div>\n                </div>\n              </aside>\n\n              <aside class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label class=\"text-uppercase\">Artist*</label>\n                    <div class=\"custom_select\">\n                      <select formControlName=\"artist\">\n                       <option value =null disabled selected hidden >Select Artist</option>\n                        <option *ngFor=\"let item of artistData\" [ngValue]=\"item._id\">{{item.artist_name}}</option>\n                      </select>\n                    </div>\n                  </div>\n    \n                   <div *ngIf=\"myForm.get('artist').hasError('required')\n                    && myForm.get('artist').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('artist').hasError('required')  && myForm.get('artist').touched \">\n                                Artist is required\n                                </div> \n                </div>\n                </aside>\n         </div>\n         <div class=\"row\">\n           <aside class=\"col-sm-4\">\n              <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\" style=\"margin-top:0px; color:#fff;\">Save</button>\n              <button (click)=\"cancel()\" class=\"blue_btn yellow_btn text-uppercase\" style=\"margin-top:0px; color:#fff;\">Cancel</button>\n           </aside>\n         </div>\n       </form>\n       </div>\n       </div>\n\n\n\n\n\n       <div class=\"bg_area\" *ngIf=\"add_new_artist\">\n        <h2>Add New Artist</h2>\n        <div>\n            <form [formGroup]=\"artistForm\" (ngSubmit)=\"AddArtist(artistForm.valid)\" class=\"top_form\">\n             <div class=\"row\">\n               <aside class=\"col-sm-4\">\n                 <div class=\"form-group\">\n                     <input id=\"titlemusic\" type=\"text\"  class=\"form-control\"  value=\"\" placeholder=\"Artist Name\" formControlName=\"artist_name\" [attr.maxlength]=\"50\"/>\n                     \n                 </div>\n    \n                  <div *ngIf=\"artistForm.get('artist_name').hasError('required') && artistForm.get('artist_name').touched\">\n                                  <div class=\"error\" *ngIf=\"artistForm.get('artist_name').hasError('required')  && artistForm.get('artist_name').touched \">\n                                  Artist name is required\n                                  </div> \n                              </div>\n               </aside>\n             </div>\n             <div class=\"row\">\n                <aside class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <label class=\"text-uppercase\">Artist Image*</label>\n                      <p class=\"add_user\">\n                        <a (click)=\"openModal()\">Browse</a>&nbsp;\n                        <img *ngIf=\"browse\" [src]=\"imageSrc\" (load)=\"handleImageLoad()\" [class.loaded]=\"imageLoaded\" style=\"height:75px;width: 75px;border-radius: 100%;\"\n                        />\n                        <img *ngIf=\"image\" src=\"{{imageUrl}}\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n                      </p>\n                    </div>\n                    <div class=\"error\" *ngIf=\"!img_valid\">\n                      <div class=\"error\" [hidden]=\"img_valid\">\n                          Artist Image is required\n                      </div>\n                    </div>\n      \n                    <div class=\"error\" *ngIf=\"!img\">\n                      <div class=\"error\" [hidden]=\"img\">\n                        Only png/Jpeg Allowed\n                      </div>\n                    </div>\n                  </aside>\n             </div>\n             <div class=\"row\">\n               <aside class=\"col-sm-4\">\n                  <button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\" style=\"margin-top:0px; color:#fff;\">Save</button>\n                  <button (click)=\"cancel()\" class=\"blue_btn yellow_btn text-uppercase\" style=\"margin-top:0px; color:#fff;\">Cancel</button>\n               </aside>\n             </div>\n           </form>\n           </div>\n           </div>\n   \n\n\n           \n       <h2 style=\"margin-top:10px;\">Album List</h2>\n    <div class=\"clear\"></div>\n    <div class=\"white_box\">\n      <div class=\"content_area\" style=\"background: #eaeaea;\">\n        <div class=\"top3_area\">\n            <div class=\"row\">\n              <aside class=\"col-lg-4\" *ngFor =\"let albums of data\">\n                <div class=\"white_three\">\n                  <img src = \"{{albums.album_image}}\">\n                  <p  class=\"text-uppercase\">{{albums.album_title}}</p>\n                  <a  class=\"action_btn\"><i class=\"fa fa-eye\" aria-hidden=\"true\" [routerLink]=\"['/songlist', albums._id]\" [routerLinkActive]=\"['router-link-active']\"></i></a>\n                  <a  class=\"action_btn\"><i class=\"fa fa-edit\" aria-hidden=\"true\" [routerLink]=\"['/editalbum', albums._id]\" [routerLinkActive]=\"['router-link-active']\"></i></a>\n\t\t\t\t         <a  class=\"action_btn\"><i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"RemoveClick(albums._id)\"></i></a>\n                </div>\n\n                \t\n\n\n                      <!-- DElete Modal -->\n                <div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n                    <div class=\"modal-dialog\" role=\"document\">\n                      <div class=\"modal-content\">  \n                       <div class=\"modal-body text-center\">\n                          <p>Are you sure you want to Delete?</p>\n                          <a class=\"blue_btn\" (click)=\"RemoveComm()\">Yes</a>\n                          <a data-dismiss=\"modal\" class=\"blue_btn\">No</a>\n                        </div>\n                         </div>\n                    </div>\n                  </div>\n\n           \n\n              </aside>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n\n</div>\n\n<!-- -------------------------------Category show---------------------------- -->\n\n<div class=\"modal fade\" id=\"show_artist\" data-toggle=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n         \n          <h4 class=\"modal-title\" id=\"myModalLabel\">All Artist</h4> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        </div>\n   \n        <div class=\"modal-body select_users\" style=\"max-height: 500px;\n      overflow: auto;\">\n          <div class=\"table-responsive\">\n              <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" >\n                <thead>\n                  <tr>\n                    <th>Artist Name</th>\n                    <th>Artist Picture</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                   <tr *ngFor=\"let test of artistData\">\n                    <td><label>{{test.artist_name}}</label></td>\n                    <td *ngIf=\"test.artist_image\">\n                        <img src=\"{{test.artist_image}}\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n                      </td>\n                      <td *ngIf=\"!test.artist_image\">\n                        <img src=\"../../assets/images/logo.png\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n                      </td>\n                  <td><a *ngIf=\"!test.disableStatus\" class=\"action_btn\">\n                    <i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"removeArtist(test._id)\"></i>\n                  </a></td>\n                </tr>\n                </tbody>\n              </table>\n               </div>\n         \n        </div>\n  \n         <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button>\n        </div>\n  \n       \n      </div>\n    </div>\n  </div>\n\n  \t\t\t\t\t\t\t<!-- gallery modal -->\n                <div class=\"modal fade\" id=\"gallerymodal\" data-toggle=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n                    <div class=\"modal-dialog\" role=\"document\">\n                      <div class=\"modal-content\">\n                        <div class=\"modal-body select_users\" style=\"height: 100%;\n                        \n          overflow: auto;\">\n                          <mat-tab-group>\n                            <mat-tab label=\"Upload files\">\n                              <div class=\"table_box\">\n                                <div class=\"table_inner\">\n                                  <p>Browse your file here</p>\n                                \n                                <input type=\"file\" #fileupload (change)=\"onFileChange($event)\" id=\"event_cover\" />\n                                </div>\n                                <div class=\"error\" *ngIf=\"!img\">\n                                  <div class=\"error\" [hidden]=\"img\">\n                                    Only png/Jpeg Allowed\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"bottom_box text-right\">\n                                <button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n                              </div>\n                            </mat-tab>\n                            <mat-tab label=\"Media library\">\n                              <ul class=\"gallery_images\">\n                                <li *ngFor=\"let image of arryData.libraryImages; let i=index\">\n                                  <div class=\"uppre\">\n                                    <div class=\"img_outer\">\n                                      <img src=\"{{image.image_name}}\" (click)=\"checking(i,image.image_name)\">\n                                    </div>\n                                  </div>\n                                </li>\n                              </ul>\n                              <div class=\"bottom_box text-right\">\n                                <button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n                              </div>\n                            </mat-tab>\n                          </mat-tab-group>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n<style type=\"text/css\">\n.error\n{\ncolor:red;\n}\n\n</style>\n"

/***/ }),

/***/ "../../../../../src/app/layout/music/music.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.blue_btn + .blue_btn {\n  margin-right: 5px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 12px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.top3_area {\n  padding: 10px 0 45px; }\n\n.white_three {\n  background: #fff;\n  margin: 20px 0 0 29px;\n  text-align: center;\n  padding: 25px;\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.12);\n  min-height: 100px;\n  margin-left: 20px;\n  margin-right: 20px; }\n\n.white_three img {\n  height: 150px;\n  width: 150px; }\n\n.white_three p {\n  color: #F78C6A;\n  margin-top: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 600; }\n\n.white_three span {\n  position: absolute;\n  left: -29px;\n  width: 58px;\n  height: 58px;\n  font-size: 30px;\n  color: #fff;\n  line-height: 55px;\n  border-radius: 2px;\n  top: 15px; }\n\n.white_three h3 {\n  margin-top: 0; }\n\n.white_three .detail_btn {\n  top: 183px;\n  left: 65px; }\n\n.white_three .edit_btn {\n  top: 183px;\n  left: 165px; }\n\n.bg_area {\n  background: #eaeaea;\n  padding: 15px;\n  margin-bottom: 30px;\n  margin-top: 15px; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.col-sm-6 {\n  position: absolute;\n  top: 113px;\n  right: 14px; }\n\n.error.ng-star-inserted {\n  color: red;\n  margin: 10px;\n  margin-top: -10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/music/music.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicComponent; });
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




var MusicComponent = (function () {
    function MusicComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.img = true;
        this.add_new = false;
        this.add_new_artist = false;
        this.browse = false;
        this.arryData = [];
        this.loaded = false;
        this.imageSrc = '';
        this.imageLoaded = false;
        this.image = false;
        this.img_valid = true;
        this.myForm = this.fb.group({
            album_title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            artist: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            album_image: null
        });
        this.artistForm = this.fb.group({
            artist_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            artist_image: null
        });
    }
    // ngAfterContentInit(){
    //  $("#titlemusic").on("keypress", function (e) {
    //      if (e.which === 32 && !this.value.length)
    //      e.preventDefault();
    //      });
    // }
    MusicComponent.prototype.ngAfterContentChecked = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__("#titlemusic").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    };
    // ngAfterViewInit(){
    //  $("#titlemusic").on("keypress", function (e) {
    //      if (e.which === 32 && !this.value.length)
    //      e.preventDefault();
    //      });
    // }
    MusicComponent.prototype.ngOnInit = function () {
        this.GetMusicAlbums();
        this.getArtist();
        // this.getlibrary();
    };
    MusicComponent.prototype.showAdd = function () {
        this.add_new = true;
        this.add_new_artist = false;
    };
    MusicComponent.prototype.cancel = function () {
        this.add_new = false;
    };
    MusicComponent.prototype.addArtist = function () {
        this.add_new_artist = true;
        this.add_new = false;
    };
    MusicComponent.prototype.cancelArtist = function () {
        this.add_new_artist = false;
    };
    MusicComponent.prototype.RemoveClick = function (id) {
        // alert(id)
        jQuery("#request").modal("show");
        this.idd = id;
    };
    /**********************************Remove Albums***************************************/
    MusicComponent.prototype.RemoveComm = function () {
        var _this = this;
        // alert("hiiii")
        var params = {
            'type': 'MA',
            'type_id': this.idd
        };
        this.authService.removeAlbum(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                jQuery("#request").modal("hide");
                _this.GetMusicAlbums();
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
    MusicComponent.prototype.clearForm = function () {
        this.myForm.reset({
            'album_title': '',
            'album_image': ''
        });
        this.imageUrl = '';
        this.imageSrc = '';
        this.image = false;
        this.browse = false;
    };
    MusicComponent.prototype.reset = function () {
        // console.log(this.myInputVariable.nativeElement.files);
        this.myInputVariable.nativeElement.value = "";
        // console.log(this.myInputVariable.nativeElement.files);
    };
    /**********************************get image***************************************/
    MusicComponent.prototype.onFileChange = function (event) {
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
    MusicComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
    };
    MusicComponent.prototype._handleReaderLoaded = function (e) {
        this.browse = true;
        console.log('image', e);
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    MusicComponent.prototype.openModal = function () {
        jQuery("#gallerymodal").modal("show");
        this.getlibrary();
    };
    MusicComponent.prototype.checking = function (index, url) {
        this.browse = false;
        this.image = true;
        this.img = true;
        this.img_valid = true;
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
        console.log('url', url);
        this.imageUrl = url;
    };
    // get media library/////
    MusicComponent.prototype.getlibrary = function () {
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
    /**********************************ADD Albums***************************************/
    MusicComponent.prototype.AddAlbum = function (val) {
        var _this = this;
        console.log(val);
        if (val) {
            if (!this.img) {
                alert("image requires");
                this.img_valid = true;
            }
            else if (!this.imageUrl) {
                this.img_valid = false;
            }
            else {
                console.log('artisttttttt', this.myForm.get('artist').value);
                console.log('albummmmmmmm', this.myForm.get('album_title').value);
                var data = new FormData();
                data.append('album_title', this.myForm.get('album_title').value);
                data.append('artist', this.myForm.get('artist').value);
                data.append('album_image', this.imageUrl);
                this.authService.addAlbum(data).then(function (result) {
                    console.log(result);
                    _this.res = result;
                    if (_this.res.status == true) {
                        _this.GetMusicAlbums();
                        _this.add_new = false;
                        // console.log(this.myForm.value);
                        _this.clearForm();
                        _this.reset();
                        alert("Album Added Successfully");
                    }
                    else {
                        console.log("erorrr");
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            alert("Fill Required Fields!!");
        }
    };
    // EditAlbum(val){
    //     console.log(val)
    // }
    /**********************************Get Music Albums***************************************/
    MusicComponent.prototype.GetMusicAlbums = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getMusicAlbums().then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data = _this.res.data;
                console.log(_this.data);
                _this.getArtist();
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************ADD Artist***************************************/
    MusicComponent.prototype.AddArtist = function (val) {
        var _this = this;
        console.log(val);
        if (val) {
            if (!this.img) {
                // alert("image requires")
                this.img_valid = true;
            }
            else if (!this.imageUrl) {
                this.img_valid = false;
            }
            else {
                console.log('artist_nameeeeeeeeeeee', this.artistForm.get('artist_name').value);
                console.log('artist_imageeeeeeeeeeeee', this.imageUrl);
                var data = new FormData();
                data.append('artist_name', this.artistForm.get('artist_name').value);
                data.append('artist_image', this.imageUrl);
                this.authService.addArtist(data).then(function (result) {
                    console.log(result);
                    _this.res = result;
                    if (_this.res.status == true) {
                        _this.GetMusicAlbums();
                        _this.add_new_artist = false;
                        // console.log(this.myForm.value);
                        _this.clearForm();
                        _this.reset();
                        // alert("Album Added Successfully")
                    }
                    else {
                        console.log("error");
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            this.validateAllFormFields(this.artistForm);
        }
    };
    /***********************************get Artist*********************/
    MusicComponent.prototype.getArtist = function () {
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
    MusicComponent.prototype.removeArtist = function (id) {
        var _this = this;
        this.artist_id = id;
        var params = {
            'artist_id': this.artist_id
        };
        this.authService.removeMusicArtist(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.getArtist();
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
    /*********************************Validation Error***************************************/
    MusicComponent.prototype.validateAllFormFields = function (formGroup) {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileupload'),
        __metadata("design:type", Object)
    ], MusicComponent.prototype, "myInputVariable", void 0);
    MusicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-music',
            template: __webpack_require__("../../../../../src/app/layout/music/music.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/music/music.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */]])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/music/music.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicsModule", function() { return MusicsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__music_routing_module__ = __webpack_require__("../../../../../src/app/layout/music/music-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__music_component__ = __webpack_require__("../../../../../src/app/layout/music/music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { MusicModule as Ng2Charts } from 'ng2-charts';










var MusicsModule = (function () {
    function MusicsModule() {
    }
    MusicsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_9__music_routing_module__["a" /* MusicModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_card__["a" /* MatCardModule */],],
            declarations: [__WEBPACK_IMPORTED_MODULE_10__music_component__["a" /* MusicComponent */]]
        })
    ], MusicsModule);
    return MusicsModule;
}());



/***/ })

});
//# sourceMappingURL=music.module.chunk.js.map