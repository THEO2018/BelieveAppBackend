webpackJsonp(["groups.module"],{

/***/ "../../../../../src/app/layout/groups/groups-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups_component__ = __webpack_require__("../../../../../src/app/layout/groups/groups.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__groups_component__["a" /* GroupsComponent */]
    }
];
var GroupsModule = (function () {
    function GroupsModule() {
    }
    GroupsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], GroupsModule);
    return GroupsModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/groups/groups.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n\n\t<div class=\"tables_area\">\n\t\t<h2 class=\"pull-left\">Groups</h2>\n\t\t<a class=\"blue_btn yellow_btn pull-right text-uppercase\" routerLink=\"/newgroup\" [routerLinkActive]=\"['router-link-active']\">Add New</a>\n\t\t<div class=\"clear\"></div>\n\t\n\t\t<div class=\"white_box\">\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table id=\"example\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th width=\"5%\">#</th>\n\t\t\t\t\t\t\t<th width=\"15%\">Name of Group</th>\n\t\t\t\t\t\t\t<th width=\"10%\">Number of members</th>\n\t\t\t\t\t\t\t<th width=\"30%\">Description</th>\n\t\t\t\t\t\t\t<th width=\"10%\">Front Picture</th>\n\t\t\t\t\t\t\t<th width=\"10%\">Privacy</th>\n\t\t\t\t\t\t\t<th width=\"10%\">Requests</th>\n\t\t\t\t\t\t\t<th width=\"10%\">Action</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let grouplist of data\">\n\t\t\t\t\t\t\t<td>{{grouplist.serial_no}}</td>\n\t\t\t\t\t\t\t<td>{{grouplist.group_name}}</td>\n\t\t\t\t\t\t\t<td>{{grouplist.total_members}}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div style=\"max-height: 100px;overflow: auto;\">{{grouplist.description}}</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td *ngIf=\"grouplist.group_image\">\n\t\t\t\t\t\t\t\t<img src=\"{{grouplist.group_image}}\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td *ngIf=\"!grouplist.group_image\">\n\t\t\t\t\t\t\t\t<img src=\"../../assets/images/logo.png\" alt=\"\" style=\"height:75px;width: 75px;border-radius: 100%;\" />\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td *ngIf=\"grouplist.privacy=='O'\">OPEN</td>\n\t\t\t\t\t\t\t<td *ngIf=\"grouplist.privacy=='C'\">CLOSED</td>\n\t\t\t\t\t\t\t<td style=\"text-align:center;\">\n\t\t\t\t\t\t\t\t<a  class=\"blue_btn1 round_btn\" [routerLink]=\"['/grouprequest', grouplist._id,'groups']\" [routerLinkActive]=\"['router-link-active']\">{{grouplist.no_of_requests}}</a>\n\t\t\t\t\t\t\t\t<!-- <a  class=\"blue_btn1 relative_btn yellow_btn pull-right text-uppercase\"  routerLink=\"/requests\" [routerLinkActive]=\"['router-link-active']\">Requests<span class=\"counter_circle\">0</span></a> -->\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<a class=\"action_btn\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-edit\" aria-hidden=\"true\" [routerLink]=\"['/editgroup', grouplist._id]\" [routerLinkActive]=\"['router-link-active']\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a class=\"action_btn\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"RemoveClick(grouplist._id)\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</td>\n\n\n\t\t\t\t\t\t\t<div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<p>Are you sure you want to Delete?</p>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"blue_btn\" (click)=\"RemoveComm()\">Yes</a>\n\t\t\t\t\t\t\t\t\t\t\t<a data-dismiss=\"modal\" class=\"blue_btn\">No</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/groups/groups.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.relative_btn {\n  position: relative; }\n\nspan.counter_circle {\n  position: absolute;\n  width: 30px;\n  background: #999;\n  border-radius: 100%;\n  top: -17px;\n  right: -10px;\n  height: 30px;\n  color: #fff;\n  text-align: center;\n  font-size: 12px;\n  line-height: 30px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #999; }\n\n.blue_btn1 {\n  background: #999;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn1:hover {\n  background: #eb7650; }\n\n.round_btn {\n  border-radius: 100%;\n  height: 40px;\n  width: 40px;\n  padding: 2px;\n  margin: 0px;\n  line-height: 40px; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/groups/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net__ = __webpack_require__("../../../../datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_datatables_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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


var GroupsComponent = (function () {
    function GroupsComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortOrder = "asc";
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users();
        setTimeout(function () {
            _this.mytable = __WEBPACK_IMPORTED_MODULE_2_jquery__('#example').DataTable({
                "bPaginate": true,
                "bLengthChange": true,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
            });
        }, 500);
    };
    GroupsComponent.prototype.RemoveClick = function (id) {
        jQuery("#request").modal("show");
        this.id = id;
    };
    /**********************************Remove Groups***************************************/
    GroupsComponent.prototype.RemoveComm = function () {
        var _this = this;
        var params = {
            'type': 'GR',
            'type_id': this.id
        };
        this.authService.removeCommunity(params).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                jQuery("#request").modal("hide");
                _this.users();
                // alert("Group has been deleted successfully")
                _this.mytable.destroy();
                setTimeout(function () {
                    _this.mytable = __WEBPACK_IMPORTED_MODULE_2_jquery__('#example').DataTable({
                        "bPaginate": true,
                        "bLengthChange": true,
                        "bFilter": true,
                        "bInfo": false,
                        "bAutoWidth": true,
                    });
                }, 500);
                console.log(_this.data);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**********************************Get Groups***************************************/
    GroupsComponent.prototype.users = function () {
        var _this = this;
        this.authService.getGroups().then(function (result) {
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
    GroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__("../../../../../src/app/layout/groups/groups.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/groups/groups.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/groups/groups.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupssModule", function() { return GroupssModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups_routing_module__ = __webpack_require__("../../../../../src/app/layout/groups/groups-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__groups_component__ = __webpack_require__("../../../../../src/app/layout/groups/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { GroupsModule as Ng2Charts } from 'ng2-charts';






var GroupssModule = (function () {
    function GroupssModule() {
    }
    GroupssModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_3__groups_routing_module__["a" /* GroupsModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__groups_component__["a" /* GroupsComponent */]]
        })
    ], GroupssModule);
    return GroupssModule;
}());



/***/ })

});
//# sourceMappingURL=groups.module.chunk.js.map