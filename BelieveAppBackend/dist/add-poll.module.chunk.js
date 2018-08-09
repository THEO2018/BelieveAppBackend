webpackJsonp(["add-poll.module"],{

/***/ "../../../../../src/app/layout/add-poll/add-poll-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPollRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_poll_component__ = __webpack_require__("../../../../../src/app/layout/add-poll/add-poll.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__add_poll_component__["a" /* AddPollComponent */]
    }
];
var AddPollRoutingModule = (function () {
    function AddPollRoutingModule() {
    }
    AddPollRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AddPollRoutingModule);
    return AddPollRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/add-poll/add-poll.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\nlabel.radio_btn {\n  margin-right: 10px; }\n\nlabel.radio_btn input {\n  transform: scale(1.2);\n  -moz-transform: scale(1.2);\n  -webkit-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n  -o-transform: scale(1.2);\n  margin-right: 5px;\n  vertical-align: middle;\n  margin-top: -2px; }\n\n.meeting_box {\n  background: #eaeaea;\n  padding: 15px 15px 0;\n  margin-bottom: 20px; }\n\n.meeting_box h4 {\n  color: #F78C6A;\n  font-size: 20px;\n  margin-bottom: 15px; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.icon_input {\n  position: relative; }\n\n.icon_input i {\n  font-size: 20px;\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n\n.blue_btn.small_btn {\n  font-size: 12px;\n  padding: 2px 10px; }\n\n.add_ans {\n  position: relative;\n  padding-right: 40px;\n  margin: 10px 0; }\n\n.add_ans a {\n  position: absolute;\n  right: 8px;\n  top: 0px;\n  font-size: 26px;\n  color: red; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\ntextarea.form-control {\n  resize: none;\n  height: 150px; }\n\n.add_formarea {\n  padding: 15px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.add_formarea label {\n  font-size: 14px;\n  color: #242424;\n  font-weight: 400;\n  letter-spacing: 1px;\n  /*display: block;*/ }\n\n.add_formarea .form-control {\n  font-size: 16px;\n  color: #242424;\n  height: auto;\n  box-shadow: none;\n  padding: 8px 12px; }\n\n.login_form .form-group {\n  margin-top: 20px;\n  margin-bottom: 0; }\n\n.form-group h3 {\n  margin-top: 5px; }\n\n.top_form .form-control, .search_input .form-group .form-control {\n  height: auto;\n  padding: 8px 10px;\n  box-shadow: none; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.select_users label {\n  display: block;\n  padding: 5px; }\n\n.select_users label:nth-child(2n) {\n  background: #f5f5f5; }\n\n.select_users label img {\n  margin: 0 5px; }\n\n.modal-header .close {\n  margin: 0;\n  padding: 0; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.big_yellow1 {\n  font-size: 10px;\n  padding: 5px 20px;\n  margin-bottom: 20px; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n\nbody {\n  font-family: Gill Sans MT;\n  padding: 10px; }\n\nfieldset {\n  border: solid 1px #000;\n  padding: 10px;\n  display: block;\n  clear: both;\n  margin: 5px 0px; }\n\nlegend {\n  padding: 0px 10px;\n  background: black;\n  color: #FFF; }\n\ninput.add {\n  float: right; }\n\ninput.fieldname {\n  float: left;\n  clear: left;\n  display: block;\n  margin: 5px; }\n\nselect.fieldtype {\n  float: left;\n  display: block;\n  margin: 5px; }\n\ninput.remove {\n  float: left;\n  display: block;\n  margin: 5px; }\n\n#yourform label {\n  float: left;\n  clear: left;\n  display: block;\n  margin: 5px; }\n\n#yourform input, #yourform textarea {\n  float: left;\n  display: block;\n  margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/add-poll/add-poll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPollComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddPollComponent = (function () {
    function AddPollComponent(fb, authService, toastr, router) {
        this.fb = fb;
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.img_valid = true;
        this.img = true;
        this.e_time_valid = true;
        this.choice = false;
        this.min = new Date();
        this.browse = false;
        // arryData= [];
        this.loaded = false;
        this.imageSrc = '';
        this.imageLoaded = false;
        this.image = false;
        this.img_valid = true;
        this.img = true;
        this.e_time_valid = true;
        // this.choice = true;
        // this.multiple = 'false';
    }
    AddPollComponent.prototype.ngOnInit = function () {
        this.getlibrary();
        var env = this;
        var max_fields_limit = 4; //set limit for maximum input fields
        var x = 1; //initialize counter for text box
        env.wrapper = __WEBPACK_IMPORTED_MODULE_6_jquery__('.input_fields_container');
        __WEBPACK_IMPORTED_MODULE_6_jquery__('.add_more_button').click(function (e) {
            console.log('addmore', e); //click event on add more fields button having class add_more_button
            e.preventDefault();
            if (x < max_fields_limit) {
                x++; //counter increment
                env.wrapper.append('<div style="position: relative;padding-right: 40px;margin: 10px 0;"><input type="text" class="form-control" name="product_name[]"/><a href="#" class="remove_field" style="margin-left:10px; position: absolute;right: 8px;top: 0px;font-size: 26px;color: red;"><i class="fa fa-close" aria-hidden="true"></i></a></div>');
                //add input field
            }
            //console.log('data',data);
        });
        env.wrapper.on("click", ".remove_field", function (e) {
            e.preventDefault();
            __WEBPACK_IMPORTED_MODULE_6_jquery__(this).parent('div').remove();
            x--;
        });
        this.myForm = this.fb.group({
            poll_title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            question: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            end_time: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            poll_image: null,
            options: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            question1: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            share_title: null,
            share_question: null,
            share_answer: null,
            share_results: null,
            share_platform_facebook: null,
            share_platform_whatsapp: null,
            share_platform_twitter: null,
            share_platform_text: null,
        });
    };
    AddPollComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/polls');
    };
    /**********************************Poll Setting***************************************/
    AddPollComponent.prototype.Choice = function (val) {
        console.log(val);
        this.mul_choice = val;
    };
    AddPollComponent.prototype.Voting = function (val) {
        console.log(val);
        this.after_vote = val;
    };
    AddPollComponent.prototype.HideResult = function (val) {
        console.log(val);
        this.hide_result = val;
    };
    /**********************************Poll Sharing***************************************/
    AddPollComponent.prototype.title = function (val) {
        console.log(val);
        // this.mul_choice=val;
    };
    /**********************************get image***************************************/
    AddPollComponent.prototype.onFileChange = function (event) {
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
    AddPollComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
    };
    AddPollComponent.prototype._handleReaderLoaded = function (e) {
        this.browse = true;
        console.log('image', e);
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    AddPollComponent.prototype.openModal = function () {
        jQuery('#gallerymodal').modal({ backdrop: 'static', keyboard: false });
        jQuery("#gallerymodal").modal("show");
        this.getlibrary();
    };
    AddPollComponent.prototype.checkings = function () {
        alert('hi');
    };
    AddPollComponent.prototype.checking = function (index, url) {
        this.browse = false;
        this.image = true;
        this.img = true;
        this.img_valid = true;
        __WEBPACK_IMPORTED_MODULE_6_jquery__('.gallery_images li').eq(index).addClass('selected').siblings().removeClass('selected');
        console.log('url', url);
        this.imageUrl = url;
    };
    // get media library/////
    AddPollComponent.prototype.getlibrary = function () {
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
    AddPollComponent.prototype.addPoll = function (val, value, sta) {
        var _this = this;
        console.log("formmm valueee", this.myForm.get('share_title').value);
        var list = this.wrapper.find('input').map(function () {
            return __WEBPACK_IMPORTED_MODULE_6_jquery__(this).val();
        }).get();
        list.splice(0, 0, this.myForm.get('question1').value);
        var AnswerList = list;
        this.finalVal = AnswerList.join('^');
        if (val) {
            console.log('values');
            if (!this.imageUrl) {
                this.img_valid = false;
            }
            else if (!this.myForm.value.end_time) {
                this.e_time_valid = false;
            }
            else {
                if (this.mul_choice) {
                    this.mul_choice = this.mul_choice;
                }
                else {
                    this.mul_choice = false;
                }
                if (this.after_vote) {
                    this.after_vote = this.after_vote;
                }
                else {
                    this.after_vote = false;
                }
                if (this.hide_result) {
                    this.hide_result = this.hide_result;
                }
                else {
                    this.hide_result = false;
                }
                if (this.myForm.value.share_title == null) {
                    console.log('share_title');
                    this.myForm.get('share_title').setValue(false);
                }
                if (this.myForm.value.share_question == null) {
                    console.log('share_question');
                    this.myForm.get('share_question').setValue(false);
                }
                if (this.myForm.value.share_answer == null) {
                    this.myForm.get('share_answer').setValue(false);
                }
                if (this.myForm.value.share_results == null) {
                    this.myForm.get('share_results').setValue(false);
                }
                if (this.myForm.value.share_platform_facebook == null) {
                    this.myForm.get('share_platform_facebook').setValue(false);
                }
                if (this.myForm.value.share_platform_whatsapp == null) {
                    this.myForm.get('share_platform_whatsapp').setValue(false);
                }
                if (this.myForm.value.share_platform_twitter == null) {
                    this.myForm.get('share_platform_twitter').setValue(false);
                }
                if (this.myForm.value.share_platform_text == null) {
                    this.myForm.get('share_platform_text').setValue(false);
                }
                this.e_time = __WEBPACK_IMPORTED_MODULE_5_moment__(this.myForm.value.end_time).format('MMMM DD, YYYY hh:mm:ss');
                var data = new FormData();
                data.append('poll_title', this.myForm.get('poll_title').value);
                data.append('poll_image', this.imageUrl);
                data.append('question', this.myForm.get('question').value);
                data.append('options', this.finalVal);
                data.append('end_time', this.e_time);
                data.append('status', sta);
                data.append('setting_multiple_choice', this.mul_choice);
                data.append('setting_hide_results_after_voting', this.after_vote);
                data.append('setting_hide_results', this.hide_result);
                data.append('share_title', this.myForm.get('share_title').value);
                data.append('share_question', this.myForm.get('share_question').value);
                data.append('share_answer', this.myForm.get('share_answer').value);
                data.append('share_results', this.myForm.get('share_results').value);
                data.append('share_platform_facebook', this.myForm.get('share_platform_facebook').value);
                data.append('share_platform_whatsapp', this.myForm.get('share_platform_whatsapp').value);
                data.append('share_platform_twitter', this.myForm.get('share_platform_twitter').value);
                data.append('share_platform_text', this.myForm.get('share_platform_text').value);
                console.log('formData', data);
                this.authService.addNewPoll(data).then(function (result) {
                    _this.data = result;
                    console.log('addPollresponse', _this.data);
                    _this.presentToast('Poll Added Successfully');
                    _this.router.navigateByUrl('/polls');
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            alert('Fill Required Fields');
        }
    };
    /************************************Toast***************************/
    AddPollComponent.prototype.presentToast = function (msg) {
        this.toastr.success(this.res.message, '', {
            timeOut: 3000,
            tapToDismiss: true
        });
    };
    AddPollComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-poll',
            template: __webpack_require__("../../../../../src/app/layout/add-poll/add-poll.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/add-poll/add-poll.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], AddPollComponent);
    return AddPollComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/add-poll/add-poll.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n\n    <div class=\"tables_area\">\n        <a class=\"blue_btn yellow_btn pull-right text-uppercase\" routerLink=\"/savedpolls\" [routerLinkActive]=\"['router-link-active']\">Saved</a>\n        <div class=\"clear\"></div>\n        <h2>Add New Poll</h2>\n        <div class=\"white_box\">\n            <form [formGroup]=\"myForm\" >\n                <div class=\"add_formarea\">\n                    <div class=\"row\">\n                        <aside class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label class=\"text-uppercase\">Poll Title*</label>\n                                <input type=\"text\" id=\"PollTitle\" value=\"\" placeholder=\"Enter Title\" class=\"form-control\" formControlName=\"poll_title\" [attr.maxlength]=\"50\"\n                                    required/>\n                            </div>\n                            <div *ngIf=\"myForm.get('poll_title').hasError('required') && myForm.get('poll_title').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('poll_title').hasError('required')  && myForm.get('poll_title').touched \">\n                                    Title is required\n                                </div>\n                            </div>\n                        </aside>\n                         <aside class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label class=\"text-uppercase\">END TIME*</label>\n                                <div class=\"icon_input\">\n                                    <input [min]=\"min\" class=\"form-control\" [owlDateTimeTrigger]=\"dt5\" [owlDateTime]=\"dt5\" formControlName=\"end_time\" placeholder=\"Select\">\n                                        <owl-date-time [pickerMode] = \"'popup'\" [pickerType]=\"'both'\" #dt5></owl-date-time>\n                                    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                                </div>\n                            </div>\n                            <div class=\"error\" *ngIf=\"!e_time_valid\" >\n                             <div class=\"error\" [hidden]=\"e_time_valid\"> \n                           END TIME is required \n                          </div>\n                      </div>\n                        </aside>\n                    </div>\n                    <div class=\"row\">\n                        <aside class=\"col-sm-8\">\n                            <div class=\"form-group\">\n                                <label class=\"text-uppercase\">Question*</label>\n                                <input type=\"text\" id=\"pollQuestion\" value=\"\" placeholder=\"Enter Question\" class=\"form-control\" formControlName=\"question\" [attr.maxlength]=\"50\"\n                                required/>\n                            </div>\n                            <div *ngIf=\"myForm.get('question').hasError('required') && myForm.get('question').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('question').hasError('required')  && myForm.get('question').touched \">\n                                    Question is required\n                                </div>\n                            </div>\n                        </aside>\n                      \n                    </div>\n                    <div class=\"row\">\n                        <aside class=\"col-sm-8\">\n                            <div class=\"form-group\">\n                                <label class=\"text-uppercase\">Options*</label>\n                                <input type=\"text\"  value=\"\" placeholder=\"Enter Option\" class=\"form-control\" formControlName=\"question1\" [attr.maxlength]=\"500\"\n                                required/>\n                                </div>\n                                <div *ngIf=\"myForm.get('question1').hasError('required') && myForm.get('question1').touched\">\n                                    <div class=\"error\" *ngIf=\"myForm.get('question1').hasError('required')  && myForm.get('question1').touched \">\n                                        Option  is required\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                <div class=\"input_fields_container\">\n                                    <div><input type=\"text\" name=\"product_name[]\" placeholder=\"Enter Option\" class=\"form-control\" formControlName=\"options\" required>\n                                         \n                                    </div>\n                                  </div>\n                                  <button class=\"btn btn-sm btn-primary add_more_button blue_btn pull-right small_btn\">Add More..</button>\n                            </div>\n                            <div *ngIf=\"myForm.get('options').hasError('required') && myForm.get('options').touched\">\n                                <div class=\"error\" *ngIf=\"myForm.get('options').hasError('required')  && myForm.get('options').touched \">\n                                    Second Option is required\n                                </div>\n                            </div>\n                        </aside>\n\n                     </div>\n                    <div class=\"row\">\n                        <aside class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                      <label class=\"text-uppercase\">Poll Image*</label>\n                      <p class=\"add_user\">\n                        <a data-backdrop=\"static\" data-keyboard=\"false\" (click)=\"openModal()\">Browse</a>&nbsp;\n                        <img *ngIf=\"browse\" [src]=\"imageSrc\" (load)=\"handleImageLoad()\" [class.loaded]=\"imageLoaded\" style=\"height:75px;width: 75px;border-radius: 100%;\"\n                        />\n                        <img *ngIf=\"image\" src=\"{{imageUrl}}\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n                      </p>\n                    </div>\n                    <div class=\"error\" *ngIf=\"!img_valid\">\n                      <div class=\"error\" [hidden]=\"img_valid\">\n                        picture is required\n                      </div>\n                    </div>\n      \n                    <div class=\"error\" *ngIf=\"!img\">\n                      <div class=\"error\" [hidden]=\"img\">\n                        Only png/Jpeg Allowed\n                      </div>\n                    </div>\n                  </aside>\n                    </div>\n                     <!-- gallery modal -->\n          <div class=\"modal fade\" id=\"gallerymodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-body select_users\" style=\"height: 100%;\n                  \n    overflow: auto;\">\n                    <mat-tab-group>\n                      <mat-tab label=\"Upload files\">\n                        <div class=\"table_box\">\n                          <div class=\"table_inner\">\n                            <p>Browse your file here</p>\n                          \n                          <input type=\"file\" #fileupload (change)=\"onFileChange($event)\" id=\"poll_image\" />\n                          </div>\n                          <div class=\"error\" *ngIf=\"!img\">\n                            <div class=\"error\" [hidden]=\"img\">\n                              Only png/Jpeg Allowed\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"bottom_box text-right\">\n                          <button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n                        </div>\n                      </mat-tab>\n                      <mat-tab label=\"Media library\">\n                        <ul class=\"gallery_images\">\n                          <li *ngFor=\"let image of arryData.libraryImages; let i=index\">\n                            <div class=\"uppre\">\n                              <div class=\"img_outer\">\n                                <img src=\"{{image.image_name}}\" (click)=\"checking(i,image.image_name)\">\n                              </div>\n                            </div>\n                          </li>\n                        </ul>\n                        <div class=\"bottom_box text-right\">\n                          <button class=\"blue_btn\" data-dismiss=\"modal\">OK</button>\n                        </div>\n                      </mat-tab>\n                    </mat-tab-group>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n<!--  /**************************POLL SETTINGS********************/   -->  \n\n<div class=\"meeting_box\">\n                    <h4>Poll Setting</h4>\n                    <div class=\"row\">\n                        <aside class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-uppercase\">Multiple Choice</label>\n                                    <div class=\"icon_input\">\n                                        <label class=\"radio_btn\">\n                                            <input type=\"radio\" value=\"true\" name=\"multiple\"  (change)=\"Choice('true')\">Yes\n                                        </label>\n                                        <label class=\"radio_btn\">\n                                            <input type=\"radio\" value=\"false\" name=\"multiple\" [checked]=\"choice == false\" (change)=\"Choice('false')\">No\n                                        </label>\n                                    </div>\n                                </div>\n                            </aside>\n                            \n                            <aside class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-uppercase\">Hide Results After Voting</label>\n                                       <div class=\"icon_input\">\n                                        <label class=\"radio_btn\">\n                                            <input type=\"radio\" name=\"vote\" value=\"true\"  (change)=\"Voting('true')\">Yes\n                                        </label>\n                                        <label class=\"radio_btn\">\n                                            <input type=\"radio\" name=\"vote\" [checked]=\"choice == false\" value=\"false\" (change)=\"Voting('false')\" >No\n                                        </label>\n                                    </div>\n                                </div>\n                                \n                            </aside>\n                            <aside class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-uppercase\">Hide Results</label>\n                                       <div class=\"icon_input\">\n                                        <label class=\"radio_btn\">\n                                            <input type=\"radio\" name=\"data\" value=\"true\" (change)=\"HideResult('true')\">Yes\n                                        </label>\n                                        <label class=\"radio_btn\">\n                                             <input type=\"radio\" name=\"data\" [checked]=\"choice == false\" value=\"false\" (change)=\"HideResult('false')\" >No\n                                        </label>\n                                    </div>\n                                </div>\n                                \n                            </aside>\n                            </div>\n                        </div>\n                    \n\n\n\n<!-- \n/**************************EnDPOLLSETTINGS********************/  -->   \n\n\n  <!--  /**************************AfterVoting********************/   -->  \n\n<div class=\"meeting_box\">\n                    <h4>Poll Sharing</h4>\n                    <div class=\"row\">\n                        <aside class=\"col-sm-8\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-uppercase\">Share Details</label>\n                                    <div class=\"icon_input\">\n                                        <label class=\"radio_btn\">\n                                            <input type=\"checkbox\" value=\"true\" formControlName=\"share_title\">Title\n                                        </label>\n                                        <label class=\"radio_btn\">\n                                            <input type=\"checkbox\" value=\"true\" formControlName=\"share_question\">Question\n                                        </label>\n                                        <label class=\"radio_btn\">\n                                            <input type=\"checkbox\" value=\"true\" formControlName=\"share_answer\">Answers\n                                        </label>\n                                        <label class=\"radio_btn\">\n                                            <input type=\"checkbox\" value=\"true\" formControlName=\"share_results\">Results\n                                        </label>\n                                       \n                                    </div>\n                                </div>\n                            </aside>\n                            </div>\n                             <div class=\"row\">\n                            <aside class=\"col-sm-8\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-uppercase\">Platforms</label>\n                                       <div class=\"icon_input\">\n                                        <label class=\"radio_btn\">\n                                            <input type=\"checkbox\" name=\"data\"formControlName=\"share_platform_facebook\">Facebook\n                                        </label>\n                                        <label class=\"radio_btn\">\n                                            <input type=\"checkbox\" name=\"data\" formControlName=\"share_platform_whatsapp\">WhatsApp\n                                        </label>\n                                        <label class=\"radio_btn\">\n                                            <input type=\"checkbox\" name=\"data\"  formControlName=\"share_platform_twitter\">Twitter\n                                        </label>\n                                        <label class=\"radio_btn\">\n                                            <input type=\"checkbox\" name=\"data\" formControlName=\"share_platform_text\">Text Messaage\n                                        </label>\n                                    </div>\n                                </div>\n                                \n                            </aside>\n                            </div>\n                        </div>\n                    \n\n\n\n<!-- \n               /**************************EnD POLL SETTINGS********************/  -->  \n\n                    \n                    </div>\n                    <button (click)=\"addPoll(myForm.valid,myForm.value,'S')\" class=\"blue_btn yellow_btn text-uppercase\">Save</button>\n                    <button (click)=\"addPoll(myForm.valid,myForm.value,'A')\" class=\"blue_btn yellow_btn text-uppercase\">Publish</button>\n                    <button class=\"blue_btn yellow_btn  text-uppercase\" (click)=\"cancel()\">Cancel</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n\n<style type=\"text/css\">\n    .error {\n        color: red;\n    }\n</style>\n\n\n\n<!-- http://plnkr.co/edit/ucKcXBA2zReWfBSQ8W7D?p=preview -->"

/***/ }),

/***/ "../../../../../src/app/layout/add-poll/add-poll.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPollModule", function() { return AddPollModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_poll_routing_module__ = __webpack_require__("../../../../../src/app/layout/add-poll/add-poll-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_poll_component__ = __webpack_require__("../../../../../src/app/layout/add-poll/add-poll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AddPollModule = (function () {
    function AddPollModule() {
    }
    AddPollModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime__["a" /* OwlDateTimeModule */], __WEBPACK_IMPORTED_MODULE_11_ng_pick_datetime__["b" /* OwlNativeDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_2__add_poll_routing_module__["a" /* AddPollRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__add_poll_component__["a" /* AddPollComponent */]]
        })
    ], AddPollModule);
    return AddPollModule;
}());



/***/ })

});
//# sourceMappingURL=add-poll.module.chunk.js.map