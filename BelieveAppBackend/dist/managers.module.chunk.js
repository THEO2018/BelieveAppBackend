webpackJsonp(["managers.module"],{

/***/ "../../../../../src/app/data-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (categories, searchText) {
        if (searchText == null)
            return categories;
        return categories.filter(function (filter) {
            return filter.group_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        });
    };
    DataFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'filter' })
    ], DataFilterPipe);
    return DataFilterPipe;
}());

// import * as _ from "lodash";
// import {Pipe, PipeTransform} from "@angular/core";
// @Pipe({
// name: "filter"
// })
// export class DataFilterPipe implements PipeTransform {
//     transform(array: any[], query: string, field:any): any {
//         if (query) {
//             console.log('query',query)
//             return _.filter(array, row=>row[field].indexOf(query) > -1);
//         }
//         return array;
//     }
// } 


/***/ }),

/***/ "../../../../../src/app/layout/managers/managers-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__managers_component__ = __webpack_require__("../../../../../src/app/layout/managers/managers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__managers_component__["a" /* ManagersComponent */]
    }
];
var ManagerRoutingModule = (function () {
    function ManagerRoutingModule() {
    }
    ManagerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ManagerRoutingModule);
    return ManagerRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/managers/managers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content_area\">\n\n\t<div class=\"tables_area\">\n\t\t<h2 class=\"pull-left\">Managers</h2>\n\t\t<a href=\"add_fleet.html\" class=\"blue_btn yellow_btn pull-right text-uppercase\" routerLink=\"/addmanager\" [routerLinkActive]=\"['router-link-active']\">Add New</a>\n\t\t<div class=\"clear\"></div>\n\t\t<!--  <div class=\"row\">\n\t\t\t<div class=\"col-md-3\"> \n\t\t\t\t\t<label class=\"label-control\">Search By Name</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"searchbar\" placeholder=\"Search\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<label class=\"label-control\">Rows on page</label>\n\t\t\t\t\t<select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\" placeholder =\"select Option\">\n\t\t\t\t\t\t\t<option [disabled]=\"true\" [selected]=\"true\">Select Option</option>\n\t\t\t\t\t\t<option ngValue=\"5\">5</option>\n\t\t\t\t\t\t<option ngValue=\"10\">10</option>\n\t\t\t\t\t\t<option ngValue=\"15\">15</option>\n\t\t\t\t\t</select>\n\t\t\t\t\n\t\t\t</div> \n\t\t <div class=\"col-md-3\">\n\t\t </div>\n\t\t\t <div class=\"col-md-3\">\n\t\t\t </div>\n\t\t</div> -->\n\t\t<div class=\"white_box\">\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" id=\"example\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th width=\"15%\">Name</th>\n\t\t\t\t\t\t\t<th width=\"10%\">Email</th>\n\t\t\t\t\t\t\t<th width=\"35%\">Phone</th>\n\t\t\t\t\t\t\t<th width=\"15%\">Status</th>\n\t\t\t\t\t\t\t<th width=\"15%\">Action</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let managerlist of data\">\n\t\t\t\t\t\t\t<td>{{managerlist.name}}</td>\n\t\t\t\t\t\t\t<td>{{managerlist.email}}</td>\n\t\t\t\t\t\t\t<td>{{managerlist.phone}}</td>\n\t\t\t\t\t\t\t<td *ngIf=\"managerlist.status=='A'\">Enabled</td>\n\t\t\t\t\t\t\t<td *ngIf=\"managerlist.status=='D'\">Disabled</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<!-- <a  class=\"action_btn\"  data-toggle=\"modal\" data-target=\"#request\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a> -->\n\t\t\t\t\t\t\t\t<a class=\"action_btn\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-edit\" aria-hidden=\"true\" [routerLink]=\"['/adminedit', managerlist._id]\" [routerLinkActive]=\"['router-link-active']\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<!-- <a class=\"action_btn\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"RemoveClick(managerlist._id)\"></i>\n\t\t\t\t\t\t\t\t</a> -->\n\t\t\t\t\t\t\t\t<!-- <a  class=\"action_btn\"><i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"RemoveComm(grouplist._id)\"></i></a> -->\n\t\t\t\t\t\t\t</td>\n\n\n\t\t\t\t\t\t\t<div class=\"modal fade\" id=\"request\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t\t\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<p>Are you sure you want to Delete?</p>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"blue_btn\" (click)=\"RemoveComm()\">Yes</a>\n\t\t\t\t\t\t\t\t\t\t\t<a data-dismiss=\"modal\" class=\"blue_btn\">No</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/managers/managers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both;\n  height: 0; }\n\n.content_area {\n  padding: 15px 15px 35px 15px;\n  min-height: 100%;\n  position: relative; }\n\n.tables_area .white_box {\n  padding: 0;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  margin-top: 15px; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff !important;\n  text-decoration: none !important;\n  font-size: 14px;\n  border: none;\n  padding: 5px 22px;\n  display: inline-block;\n  line-height: 26px;\n  margin-top: 20px;\n  font-weight: 600; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn.black_btn {\n  background: #2c2c2c; }\n\n.top_form {\n  padding-bottom: 20px; }\n\n.top_form .yellow_btn {\n  height: 39px;\n  margin: 0;\n  vertical-align: middle;\n  padding: 6px 35px;\n  font-size: 18px; }\n\n.custom_select .fstElement {\n  display: block;\n  font-size: 12px;\n  border-radius: 5px; }\n\n.custom_select .fstElement .fstControls {\n  width: 100%; }\n\n.custom_select .fstElement .fstControls .fstQueryInput {\n  color: #000;\n  padding: 5px; }\n\n.custom_select .fstChoiceItem, .custom_select .fstResultItem.fstSelected, .custom_select .fstResultItem.fstFocused {\n  background-color: #2e4485;\n  border-color: #2e4485; }\n\n.white_box {\n  background: #fff;\n  padding: 15px;\n  border-radius: 2px; }\n\n.table-responsive table thead tr th {\n  color: #2e4485;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom: 2px solid #2e4485;\n  text-transform: uppercase;\n  padding: 10px; }\n\n.table-responsive table tbody tr td {\n  color: #242424;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 12px 10px; }\n\n.table-responsive table tbody tr td:last-child {\n  border-right: none; }\n\n.table-responsive table tbody tr:nth-child(2n) td {\n  background: #eeeef3; }\n\n.action_btn {\n  color: #242424;\n  font-size: 18px;\n  display: inline-block;\n  margin: 0 5px; }\n\n.action_btn:hover {\n  color: #f1a732; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/managers/managers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagersComponent = (function () {
    function ManagersComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        // public data;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortOrder = "asc";
    }
    ManagersComponent.prototype.loadData = function () {
        throw new Error("Method not implemented.");
    };
    ManagersComponent.prototype.ngOnInit = function () {
        this.managers();
    };
    // search(){
    //   console.log('data');
    // }
    // onPageChange(event) {
    //   console.log('eventvalue', event);
    //   this.rowsOnPage = event.rowsOnPage;
    //   this.activePage = event.activePage;
    //   this.loadData();
    // }
    // RemoveClick(id) {
    //   // alert(id)
    //   jQuery("#request").modal("show");
    //   this.id = id;
    // }
    /**********************************Remove Groups***************************************/
    // RemoveComm() {
    //   // alert("hiiii")
    //   let params = {
    //     'type': 'GR',
    //     'type_id': this.id
    //   }
    //   this.authService.removeCommunity(params).then((result) => {
    //     console.log(result);
    //     this.res = result;
    //     if (this.res.status == true) {
    //       jQuery("#request").modal("hide");
    //       this.users();
    //       // this.data=this.res.data;
    //       console.log(this.data);
    //     }
    //     else {
    //       console.log("erorr")
    //     }
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }
    /**********************************Get Managers***************************************/
    ManagersComponent.prototype.managers = function () {
        var _this = this;
        console.log('manager lsit');
        this.authService.getManagers().then(function (result) {
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
    ManagersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-managers',
            template: __webpack_require__("../../../../../src/app/layout/managers/managers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/managers/managers.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthServiceService */]])
    ], ManagersComponent);
    return ManagersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/managers/managers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagersModule", function() { return ManagersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__managers_routing_module__ = __webpack_require__("../../../../../src/app/layout/managers/managers-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__managers_component__ = __webpack_require__("../../../../../src/app/layout/managers/managers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__ = __webpack_require__("../../../../../src/app/data-filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { GroupsModule as Ng2Charts } from 'ng2-charts';





// import { PipeFilterModule } from '../pipe-filter/pipe-filter.module';

var ManagersModule = (function () {
    function ManagersModule() {
    }
    ManagersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_2__managers_routing_module__["a" /* ManagerRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__managers_component__["a" /* ManagersComponent */], __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__["a" /* DataFilterPipe */]]
        })
    ], ManagersModule);
    return ManagersModule;
}());



/***/ })

});
//# sourceMappingURL=managers.module.chunk.js.map