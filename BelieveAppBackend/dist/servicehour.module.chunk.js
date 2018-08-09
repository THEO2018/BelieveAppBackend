webpackJsonp(["servicehour.module"],{

/***/ "../../../../../src/app/layout/servicehour/servicehour-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicehourRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicehour_component__ = __webpack_require__("../../../../../src/app/layout/servicehour/servicehour.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__servicehour_component__["a" /* ServicehourComponent */]
    }
];
var ServicehourRoutingModule = (function () {
    function ServicehourRoutingModule() {
    }
    ServicehourRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ServicehourRoutingModule);
    return ServicehourRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servicehour/servicehour.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<div class=\"content_area\">\n\t\t\t\n\t\t\t<div class=\"tables_area\">\n\t\t\t\t<h2>Service Hours</h2>\n\t\t\t\t<div class=\"white_box\">\n\t\t\t\t\t <form  [formGroup]=\"myForm\" (ngSubmit)=\"EditService(myForm.valid,myForm.value)\">\n\t\t\t\t\t<div class=\"add_formarea\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Day From</label>\n\t\t\t\t\t\t\t\t\t<div class=\"custom_select\">\n\t\t\t\t\t\t\t\t\t\t<select formControlName=\"day_from\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" [disabled]=\"true\" [selected]=\"true\">Select</option>\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of muloptions\" [ngValue]=\"item.value\">{{item.value}}</option>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <option value=\"C\">Closed</option> -->\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</aside>\n\n\t\t\t\t\t\t\t<aside class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Day To</label>\n\t\t\t\t\t\t\t\t\t<div class=\"custom_select\">\n\t\t\t\t\t\t\t\t\t\t<select formControlName=\"day_to\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" [disabled]=\"true\" [selected]=\"true\">Select</option>\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of muloptions\" [ngValue]=\"item.value\">{{item.value}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Time</label>\n\t\t\t\t\t\t\t\t\t<div class=\"icon_input\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" [owlDateTimeTrigger]=\"dt4\" [owlDateTime]=\"dt4\" formControlName=\"time\" placeholder=\"\" \n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"timer\">\n   \t\t\t\t\t\t\t\t\t\t <owl-date-time [pickerType]=\"'timer'\" #dt4></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t\t<aside class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Venue </label>\n\t\t\t\t\t\t\t\t\t<input id=\"ven\" type=\"text\" value=\"\" placeholder=\"Select Venue\" class=\"form-control\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\"  #search formControlName=\"venue\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</aside>\t\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<aside class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"text-uppercase\">Phone </label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" value=\"\" placeholder=\"\" class=\"form-control\" id=\"phn\" formControlName=\"phone\" [attr.maxlength]=\"50\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</aside>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button type=\"submit\" class=\"blue_btn yellow_btn text-uppercase\">Update</button>\n\t\t\t\t\t\t<!-- <button class=\"blue_btn yellow_btn  text-uppercase\" (click)=\"CAncel()\">Cancel</button> -->\n\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n<style type=\"text/css\">\n.error\n{\ncolor:red;\n}\n\n</style>\n\n\n\n<!-- http://plnkr.co/edit/ucKcXBA2zReWfBSQ8W7D?p=preview -->"

/***/ }),

/***/ "../../../../../src/app/layout/servicehour/servicehour.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.icon_input {\n  position: relative; }\n\n.icon_input i {\n  font-size: 20px;\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px;\n  background: #fff; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\ntextarea.form-control {\n  resize: none;\n  height: 150px; }\n\n.add_formarea {\n  padding: 15px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.add_formarea label {\n  font-size: 14px;\n  color: #242424;\n  font-weight: 400;\n  letter-spacing: 1px;\n  display: block; }\n\n.add_formarea .form-control {\n  font-size: 16px;\n  color: #242424;\n  height: auto;\n  box-shadow: none;\n  padding: 8px 12px; }\n\n.login_form .form-group {\n  margin-top: 20px;\n  margin-bottom: 0; }\n\n.form-group h3 {\n  margin-top: 5px; }\n\n.top_form .form-control, .search_input .form-group .form-control {\n  height: auto;\n  padding: 8px 10px;\n  box-shadow: none; }\n\n.custom_select select {\n  width: 100%;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  line-height: 40px; }\n\n.custom_select {\n  position: relative; }\n\n.custom_select::after {\n  position: absolute;\n  top: 1px;\n  width: 40px;\n  background: #fff;\n  bottom: 1px;\n  text-align: center;\n  content: \"\\F0DD\";\n  font-family: fontawesome;\n  right: 1px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  font-size: 20px;\n  line-height: 30px;\n  pointer-events: none; }\n\n.select_users label {\n  display: block;\n  padding: 5px; }\n\n.select_users label:nth-child(2n) {\n  background: #f5f5f5; }\n\n.select_users label img {\n  margin: 0 5px; }\n\n.modal-header .close {\n  margin: 0;\n  padding: 0; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.big_yellow {\n  font-size: 18px;\n  padding: 10px 35px;\n  margin-bottom: 20px; }\n\n.big_yellow1 {\n  font-size: 10px;\n  padding: 5px 20px;\n  margin-bottom: 20px; }\n\n.add_user a {\n  display: inline-block;\n  background: #F78C6A;\n  color: #ffffff !important;\n  border-radius: 3px;\n  padding: 3px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 8px; }\n\n.add_user a i {\n  margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/servicehour/servicehour.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicehourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ServicehourComponent = (function () {
    function ServicehourComponent(mapsAPILoader, ngZone, router, toastr, authService, formBuilder) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.toastr = toastr;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.myForm = this.formBuilder.group({
            venue: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            day_from: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            day_to: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            time: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            phone: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]
        });
        this.muloptions = [{
                id: 1,
                name: 'S',
                value: 'Sunday'
            }, {
                id: 2,
                name: 'M',
                value: 'Monday'
            }, {
                id: 3,
                name: 'T',
                value: 'Tuesday'
            }, {
                id: 4,
                name: 'W',
                value: 'Wednesday'
            }, {
                id: 5,
                name: 'Th',
                value: 'Thursday'
            }, {
                id: 6,
                name: 'F',
                value: 'Friday'
            }, {
                id: 7,
                name: 'St',
                value: 'Saturday'
            }];
    }
    /********************************************************/
    ServicehourComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Service();
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#phn").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#ven").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    _this.venue_address = place.formatted_address;
                    console.log(_this.venue_address);
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    ServicehourComponent.prototype.CAncel = function () {
        this.router.navigateByUrl('/contactsupport');
    };
    /**********************************Edit service Hours***************************************/
    ServicehourComponent.prototype.EditService = function (val, value) {
        var _this = this;
        console.log(value);
        this.s_time = __WEBPACK_IMPORTED_MODULE_4_moment__(this.myForm.value.time).format('hh:mm a');
        console.log(this.s_time);
        if (!this.venue_address) {
            this.venue_address = this.data.venue;
        }
        else {
            this.venue_address = this.venue_address;
        }
        var params = {
            'time': this.s_time,
            'day_from': value.day_from,
            'day_to': value.day_to,
            'venue': this.venue_address,
            'phone': value.phone
        };
        this.authService.editService(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.presentToast(_this.res.message);
                //	alert(this.res.message)
                _this.Service();
                _this.router.navigateByUrl('/servicehour');
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get Service Hours***************************************/
    ServicehourComponent.prototype.Service = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getService().then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data = _this.res.data;
                _this.myForm.get('day_from').setValue(_this.data.day_from);
                _this.myForm.get('day_to').setValue(_this.data.day_to);
                _this.timer = new Date(new Date().toDateString() + ' ' + _this.data.time);
                // this.myForm.get('time').setValue(this.data.time);
                _this.myForm.get('venue').setValue(_this.data.venue);
                _this.myForm.get('phone').setValue(_this.data.phone);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /************************************Toast***************************/
    ServicehourComponent.prototype.presentToast = function (msg) {
        this.toastr.success(this.res.message, '', {
            timeOut: 3000,
            tapToDismiss: true
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ServicehourComponent.prototype, "searchElementRef", void 0);
    ServicehourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-servicehour',
            template: __webpack_require__("../../../../../src/app/layout/servicehour/servicehour.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/servicehour/servicehour.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ServicehourComponent);
    return ServicehourComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/servicehour/servicehour.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicehourModule", function() { return ServicehourModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicehour_routing_module__ = __webpack_require__("../../../../../src/app/layout/servicehour/servicehour-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicehour_component__ = __webpack_require__("../../../../../src/app/layout/servicehour/servicehour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__("../../../../froala-editor/js/froala_editor.pkgd.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ServicehourModule = (function () {
    function ServicehourModule() {
    }
    ServicehourModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__servicehour_routing_module__["a" /* ServicehourRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["a" /* FroalaEditorModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["b" /* FroalaViewModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng_pick_datetime__["a" /* OwlDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng_pick_datetime__["b" /* OwlNativeDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__servicehour_component__["a" /* ServicehourComponent */]]
        })
    ], ServicehourModule);
    return ServicehourModule;
}());



/***/ })

});
//# sourceMappingURL=servicehour.module.chunk.js.map