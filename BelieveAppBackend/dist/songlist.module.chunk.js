webpackJsonp(["songlist.module"],{

/***/ "../../../../../src/app/layout/songlist/songlist-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SonglistRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__songlist_component__ = __webpack_require__("../../../../../src/app/layout/songlist/songlist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__songlist_component__["a" /* SonglistComponent */]
    }
];
var SonglistRoutingModule = (function () {
    function SonglistRoutingModule() {
    }
    SonglistRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], SonglistRoutingModule);
    return SonglistRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/songlist/songlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n  <div class=\"tables_area\">\n    <a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"PublishList()\" *ngIf=\"saved\">Published</a>\n       <a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"SavedList()\" *ngIf=\"publish\">Saved</a>\n        <a class=\"blue_btn yellow_btn pull-right text-uppercase\" (click)=\"showAdd()\">Add New</a>\n        <div class=\"clear\"></div>\n      <div *ngIf=\"add_new\" style=\"background:#eaeaea;padding:15px;\n    margin: 15px 0;\">\n    <h2>Add New Song</h2>\n  \n        <form [formGroup]=\"myForm\" >\n         <div class=\"row\">\n           <aside class=\"col-sm-4\">\n             <div class=\"form-group\">\n                 <input type=\"text\"  class=\"form-control\"  value=\"\" placeholder=\"Song Title\" formControlName=\"song_title\" id=\"title\"/>\n             </div>\n            <div *ngIf=\"myForm.get('song_title').hasError('required') && myForm.get('song_title').touched\">\n                <div class=\"error\" *ngIf=\"myForm.get('song_title').hasError('required')  && myForm.get('song_title').touched \">\n               Title is required\n           </div> \n           </div>\n\n           </aside>\n         </div>\n         <div class=\"row\">\n          <aside class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label class=\"text-uppercase\">Song</label>\n              <p class=\"add_user\">\n                <a data-backdrop=\"static\" data-keyboard=\"false\" (click)=\"openModal()\">Browse</a>&nbsp;\n                <p *ngIf=\"browse\">{{imageSrc}}\n                <p *ngIf=\"image\">{{imageTitle}}</p>\n            </div>\n            <div class=\"error\" *ngIf=\"!img_valid\">\n              <div class=\"error\" [hidden]=\"img_valid\">\n                Song is required\n              </div>\n            </div>\n\n            <div class=\"error\" *ngIf=\"!img\">\n              <div class=\"error\" [hidden]=\"img\">\n                Only mp3 are allowed\n              </div>\n            </div>\n          </aside>\n         </div>\n         <!-- gallery modal -->\n<div class=\"modal fade\" id=\"gallerymodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body select_users\" style=\"height: 100%;overflow: auto;\">\n        <mat-tab-group>\n          <mat-tab label=\"Upload files\">\n            <div class=\"table_box\">\n              <div class=\"table_inner\">\n                <p>Browse your file here</p>\n                   <input type=\"file\" #fileupload (change)=\"onFileChange($event)\" id=\"event_cover\" />\n                   <audio id=\"audio\" hidden></audio>\n                   <p hidden>\n                  <label>Song Duration:</label>\n                  <span id=\"duration\"></span>\n                </p>\n               </div>\n              <div class=\"error\" *ngIf=\"!img\">\n            <div class=\"error\" [hidden]=\"img\">\n                  Only Media Are Allowed\n            </div>\n            </div>\n            </div>\n            <div class=\"bottom_box text-right\">\n              <button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n            </div>\n          </mat-tab>\n          <mat-tab label=\"Media library\">\n            <ul class=\"gallery_images\">\n              <li *ngFor=\"let songs of arryData.libraryAudio; let i=index\">\n                <div class=\"uppre\">\n                  <div class=\"img_outer\">\n                    <img src = \"../../assets/images/music.png\" (click)=\"checking(i,songs.image_name,songs.title)\">\n                  </div>\n                </div>\n                <p>{{songs.title}}</p>\n              </li>\n            </ul>\n            <div class=\"bottom_box text-right\">\n              <button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n            </div>\n          </mat-tab>\n        </mat-tab-group>\n      </div>\n    </div>\n  </div>\n</div>\n         <div class=\"row\">\n           <aside class=\"col-sm-12\">\n              <button (click)=\"AddSong(myForm.valid,'S')\" class=\"blue_btn text-uppercase\">Save</button>\n                <button (click)=\"AddSong(myForm.valid,'A')\" class=\"blue_btn  text-uppercase\">Publish</button>\n                  <button (click)=\"cancel()\" class=\"blue_btn  text-uppercase\">Cancel</button>\n           </aside>\n         </div>\n       </form>\n       </div>\n   <h2 *ngIf=\"saved\">Saved Song List</h2>\n  <h2 *ngIf=\"publish\">Published Song List</h2>\n  <!-- <h2 style=\"margin-top:10px;\">Song List</h2> -->\n    <div class=\"clear\"></div>\n\n    <div class=\"white_box\" *ngIf=\"publish\">\n      <div class=\"table-responsive\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" id=\"\"\n         class=\"display\">\n          <thead>\n            <tr>\n              <th width=\"10%\">#</th>\n              <th width=\"15%\">Title</th>\n              <th width=\"50%\">Song</th>\n              <th width=\"15%\">Artist</th>\n              <th width=\"10%\">ACTION</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor =\"let albums of data\">\n              <td>{{albums.serial_no}}</td>\n              <td>{{albums.song_title}}</td>\n               <td style=\"max-height: 150px;overflow: auto;\"><a target=\"_blank\" href=\"{{albums.song_file}}\">{{albums.song_file}}</a></td>\n               <td>{{albums.album_id.artist.artist_name}}</td>\n              <td>\n                <a  class=\"action_btn\" (click)=\"RemoveClick(albums._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\" ></i></a>\n              </td>\n              <div class=\"modal fade\" id=\"reject\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n                  <div class=\"modal-dialog\" role=\"document\">\n                    <div class=\"modal-content\">  \n                     <div class=\"modal-body text-center\">\n                      <p>Are you sure you want to remove this Song?</p>\n                      <a class=\"blue_btn\" (click)=\"RemoveComm()\">OK</a>\n                      <a class=\"blue_btn\" data-dismiss=\"modal\" >Cancel</a>\n                    </div>\n                     </div>\n                  </div>\n                  </div>\n            </tr>\n          \n          </tbody>\n        </table>\n      </div>\n    </div>\n\n<!-- /********************************************************/     -->\n\n    <div class=\"white_box\" *ngIf=\"saved\">\n      <div class=\"table-responsive\">\n        <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" id=\"\" class=\"display\">\n          <thead>\n            <tr>\n              <th width=\"25%\">Title</th>\n              <th width=\"65%\">Song</th>\n              <th width=\"10%\">ACTION</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor =\"let albums of data1\">\n              <td>{{albums.song_title}}</td>\n               <td style=\"max-height: 150px;overflow: auto;\"><a target=\"_blank\" href=\"{{albums.song_file}}\">{{albums.song_file}}</a></td>\n              <td>\n                <a  class=\"blue_btn yellow_btn text-uppercase\" (click)=\"publishModal(albums._id)\">Publish</a>\n              </td>\n            </tr>\n          \n          </tbody>\n        </table>\n      </div>\n    </div>\n\n\n  </div>\n\n</div>\n\n  <div class=\"modal fade\" id=\"publish\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n                  <div class=\"modal-dialog\" role=\"document\">\n                    <div class=\"modal-content\">  \n                     <div class=\"modal-body text-center\">\n                      <p>Are you sure you want to Publish this Song?</p>\n                      <a class=\"blue_btn\" (click)=\"PublishDrafts()\">OK</a>\n                      <a class=\"blue_btn\" data-dismiss=\"modal\" >Cancel</a>\n                    </div>\n                     </div>\n                  </div>\n                  </div>\n<style type=\"text/css\">\n.error\n{\ncolor:red;\n}\n\n</style>"

/***/ }),

/***/ "../../../../../src/app/layout/songlist/songlist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.blue_btn + .blue_btn {\n  margin-right: 5px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600;\n  cursor: pointer; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.blue_btn.green_btn {\n  background: #155724; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.top3_area {\n  padding: 10px 0 45px; }\n\n.white_three {\n  background: transparent;\n  margin: 20px 0 0 29px;\n  text-align: center;\n  padding: 25px;\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.12);\n  min-height: 100px;\n  margin-left: 20px;\n  margin-right: 20px; }\n\n.white_three img {\n  height: 150px;\n  width: 150px; }\n\n.white_three p {\n  color: #000;\n  margin-top: 5px; }\n\n.white_three span {\n  position: absolute;\n  left: -29px;\n  width: 58px;\n  height: 58px;\n  font-size: 30px;\n  color: #fff;\n  line-height: 55px;\n  border-radius: 2px;\n  top: 15px; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n\n.white_three h3 {\n  margin-top: 0; }\n\n.white_three .detail_btn {\n  top: 183px;\n  left: 65px; }\n\n.white_three .edit_btn {\n  top: 183px;\n  left: 165px; }\n\n.gallery_images li p {\n  margin: 137px 0 0 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/songlist/songlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SonglistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net__ = __webpack_require__("../../../../datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SonglistComponent = (function () {
    function SonglistComponent(route, fb, router, authService, toastr) {
        var _this = this;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.publish = true;
        this.saved = false;
        this.img = true;
        this.song_valid = true;
        this.browse = false;
        this.arryData = [];
        this.loaded = false;
        this.imageSrc = '';
        this.imageLoaded = false;
        this.image = false;
        this.img_valid = true;
        this.add_new = false;
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.album_id = params;
        });
        this.myForm = this.fb.group({
            song_title: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            song_file: null
        });
    }
    SonglistComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#title").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        setTimeout(function () {
            _this.mytable = __WEBPACK_IMPORTED_MODULE_5_jquery__('table.display').DataTable({
                "bPaginate": true,
                "bLengthChange": true,
                // "pageLength": 7,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
            });
        }, 500);
        this.GetSongs();
        this.DraftSongs();
    };
    SonglistComponent.prototype.publishModal = function (id) {
        jQuery("#publish").modal("show");
        this.idd = id;
    };
    SonglistComponent.prototype.RemoveClick = function (id) {
        // alert(id)
        jQuery("#reject").modal("show");
        this.id = id;
    };
    SonglistComponent.prototype.SavedList = function () {
        var _this = this;
        this.mytable.destroy();
        setTimeout(function () {
            _this.mytable = __WEBPACK_IMPORTED_MODULE_5_jquery__('table.display').DataTable({
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
    SonglistComponent.prototype.PublishList = function () {
        var _this = this;
        this.mytable.destroy();
        setTimeout(function () {
            _this.mytable = __WEBPACK_IMPORTED_MODULE_5_jquery__('table.display').DataTable({
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
    SonglistComponent.prototype.showAdd = function () {
        this.add_new = true;
    };
    SonglistComponent.prototype.cancel = function () {
        this.add_new = false;
    };
    /********************************** Get Draft Songs of album***************************************/
    SonglistComponent.prototype.DraftSongs = function () {
        var _this = this;
        var params = {
            'id': this.album_id.id
        };
        // alert("hiiii")
        this.authService.getDraftSongs(params).then(function (result) {
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
    SonglistComponent.prototype.PublishDrafts = function () {
        var _this = this;
        var params = {
            'type': 'SN',
            'id': this.idd
        };
        this.authService.publishDrafts(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                jQuery("#publish").modal("hide");
                _this.mytable.destroy();
                setTimeout(function () {
                    _this.mytable = __WEBPACK_IMPORTED_MODULE_5_jquery__('table.display').DataTable({
                        "bPaginate": true,
                        "bLengthChange": true,
                        // "pageLength": 7,
                        "bFilter": true,
                        "bInfo": false,
                        "bAutoWidth": true,
                    });
                }, 500);
                _this.DraftSongs();
                _this.GetSongs();
            }
            else {
                console.log("fasleeee");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Remove Albums***************************************/
    SonglistComponent.prototype.RemoveComm = function () {
        var _this = this;
        // alert("hiiii")
        var params = {
            'type': 'MS',
            'type_id': this.id
        };
        this.authService.removeAlbum(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                jQuery("#reject").modal("hide");
                _this.mytable.destroy();
                setTimeout(function () {
                    _this.mytable = __WEBPACK_IMPORTED_MODULE_5_jquery__('table.display').DataTable({
                        "bPaginate": true,
                        "bLengthChange": true,
                        // "pageLength": 7,
                        "bFilter": true,
                        "bInfo": false,
                        "bAutoWidth": true,
                    });
                }, 500);
                _this.GetSongs();
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
    SonglistComponent.prototype.clearForm = function () {
        this.myForm.reset({
            'song_title': '',
            'song_file': ''
        });
        this.imageSrc = '';
        this.imageTitle = '';
    };
    SonglistComponent.prototype.reset = function () {
        // console.log(this.myInputVariable.nativeElement.files);
        this.myInputVariable.nativeElement.value = "";
        // console.log(this.myInputVariable.nativeElement.files);
    };
    /**********************************get SONG***************************************/
    SonglistComponent.prototype.onFileChange = function (event) {
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#audio").on("canplaythrough", function (e) {
            var seconds = e.currentTarget.duration;
            var duration = __WEBPACK_IMPORTED_MODULE_7_moment__["duration"](seconds, "seconds");
            var time = "";
            var hours = duration.hours();
            if (hours > 0) {
                time = hours + ":";
            }
            time = time + duration.minutes() + ":" + duration.seconds();
            console.log(time);
            this.dura = time;
            // alert(this.dura)
            console.log(__WEBPACK_IMPORTED_MODULE_5_jquery__("#duration").text(time));
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#duration").text(time);
            URL.revokeObjectURL(this.objectUrl);
        });
        console.log("eventttttt", event);
        if (event.target.files[0].type === 'audio/mp3' || event.target.files[0].type === 'audio/mpeg') {
            if (event.target.files.length > 0) {
                this.browse = true;
                this.image = false;
                this.img = true;
                this.img_valid = true;
                var file = event.target.files[0];
                this.objectUrl = URL.createObjectURL(file);
                __WEBPACK_IMPORTED_MODULE_5_jquery__("#audio").prop("src", this.objectUrl);
                console.log('media', file);
                this.imageSrc = file.name;
                console.log('songname', this.imageSrc);
                this.imageUrl = file;
            }
        }
        else {
            this.imageUrl = '';
            this.img_valid = true;
            this.img = false;
        }
    };
    /**********************************ADD SONG***************************************/
    SonglistComponent.prototype.AddSong = function (val, sta) {
        var _this = this;
        if (document.getElementById("duration")) {
            this.dura = document.getElementById("duration").innerHTML;
            console.log('songurl', document.getElementById("duration").innerHTML);
            console.log(sta);
        }
        else {
            this.dura = "";
            // alert(this.dura)
        }
        if (!this.img) {
            this.song_valid = true;
        }
        else if (!this.imageUrl) {
            this.song_valid = false;
        }
        else if (val) {
            var data = new FormData();
            data.append('song_title', this.myForm.get('song_title').value);
            data.append('song_file', this.imageUrl);
            data.append('album_id', this.album_id.id);
            data.append('status', sta);
            data.append('duration', this.dura);
            this.authService.addSong(data).then(function (result) {
                console.log(result);
                _this.res = result;
                if (_this.res.status == true) {
                    _this.mytable.destroy();
                    setTimeout(function () {
                        _this.mytable = __WEBPACK_IMPORTED_MODULE_5_jquery__('table.display').DataTable({
                            "bPaginate": true,
                            "bLengthChange": true,
                            // "pageLength": 7,
                            "bFilter": true,
                            "bInfo": false,
                            "bAutoWidth": true,
                        });
                    }, 500);
                    _this.GetSongs();
                    // console.log(this.myForm.value);
                    _this.clearForm();
                    _this.reset();
                    _this.browse = false;
                    _this.image = false;
                    _this.add_new = false;
                    _this.DraftSongs();
                    _this.presentToast('Song Added Successfully');
                    // alert("Song Added Successfully")
                }
                else {
                    console.log("erorrr");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    // handleImageLoad() {
    // this.imageLoaded = true;
    // }
    // _handleReaderLoaded(e) {
    // this.browse = true
    // console.log('image', e);
    // var reader = e.target;
    // this.imageSrc = reader.result;
    // console.log('result',this.imageSrc);
    // this.loaded = true;
    // }
    SonglistComponent.prototype.openModal = function () {
        jQuery('#gallerymodal').modal({ backdrop: 'static', keyboard: false });
        jQuery("#gallerymodal").modal("show");
        this.getlibrary();
    };
    SonglistComponent.prototype.checking = function (index, url, title) {
        this.browse = false;
        this.image = true;
        this.img = true;
        this.img_valid = true;
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
        console.log('url', url);
        this.imageUrl = url;
        this.imageTitle = title;
        console.log('title', this.imageTitle);
    };
    // get media library/////
    SonglistComponent.prototype.getlibrary = function () {
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
    /**********************************Get Songs***************************************/
    SonglistComponent.prototype.GetSongs = function () {
        var _this = this;
        var params = {
            'id': this.album_id.id
        };
        // alert("hiiii")
        this.authService.getSongs(params).then(function (result) {
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
    SonglistComponent.prototype.presentToast = function (msg) {
        this.toastr.success(this.res.message, '', {
            timeOut: 3000,
            tapToDismiss: true
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileupload'),
        __metadata("design:type", Object)
    ], SonglistComponent.prototype, "myInputVariable", void 0);
    SonglistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-songlist',
            template: __webpack_require__("../../../../../src/app/layout/songlist/songlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/songlist/songlist.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], SonglistComponent);
    return SonglistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/songlist/songlist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SonglistModule", function() { return SonglistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__songlist_routing_module__ = __webpack_require__("../../../../../src/app/layout/songlist/songlist-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__songlist_component__ = __webpack_require__("../../../../../src/app/layout/songlist/songlist.component.ts");
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


// import { SonglistRoutingModule as Ng2Charts } from 'ng2-charts';










var SonglistModule = (function () {
    function SonglistModule() {
    }
    SonglistModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__songlist_routing_module__["a" /* SonglistRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__songlist_component__["a" /* SonglistComponent */]]
        })
    ], SonglistModule);
    return SonglistModule;
}());



/***/ })

});
//# sourceMappingURL=songlist.module.chunk.js.map