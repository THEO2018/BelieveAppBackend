webpackJsonp(["layout.module"],{

/***/ "../../../../../src/app/layout/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">BelieveApp</a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\">\n     <!--    <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"{{ 'Search' | translate }}\" >\n        </form> -->\n        <ul class=\"navbar-nav ml-auto\">\n            <!-- <li class=\"nav-item d-none d-xl-block\">\n                <a\n                    href=\"https://github.com/start-angular/SB-Admin-BS4-Angular-2/archive/master.zip\"\n                    class=\"nav-link btn mt-1\" role=\"button\"\n                    style=\"padding: .375rem 1rem !important;border-color: #999;\"\n                >\n                    {{ 'Download Now' | translate }}\n                </a>\n            </li> &nbsp;\n            <li class=\"nav-item\">\n                <a href=\"javascript:void(0)\" class=\"nav-link mt-1\"\n                    style=\"padding: 0.375rem 1rem !important; border-color: #999;\"\n                    (click)=\"rltAndLtr()\"\n                >\n                    RTL/LTR\n                </a>\n            </li> &nbsp; -->\n        <!--     <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>\n                    <li class=\"media\">\n                        <img class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\"\n                        >\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                            alt=\"Generic placeholder image\"\n                        >\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                            alt=\"Generic placeholder image\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                </ul>\n            </li> -->\n           <!--  <li class=\"nav-item dropdown\" ngbDropdown>\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                    <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'Pending Task' | translate }} <span class=\"badge badge-info\">6</span>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'In queue' | translate }} <span class=\"badge badge-info\"> 13</span>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'Mail' | translate }} <span class=\"badge badge-info\"> 45</span>\n                    </a>\n                    <li class=\"dropdown-divider\"></li>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'View All' | translate }}\n                    </a>\n                </div>\n            </li> -->\n            \n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                    <i class=\"fa fa-user\"></i> Admin <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\n                    </a> -->\n                    <a *ngIf=\"data==1\" class=\"dropdown-item\" href=\"javascript:void(0)\" routerLink=\"/changepassword\" [routerLinkActive]=\"['router-link-active']\">\n                        <i class=\"fa fa-fw fa-gear\"></i> {{ 'Change Password' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/layout/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .navbar {\n  background-color: #F78C6A; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #fff; }\n    :host .navbar .nav-item > a:hover {\n      color: #999; }\n  :host .navbar .dropdown-menu-right {\n    left: inherit !important; }\n\n:host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n    :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.pushRightClass = 'push-right';
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var check = localStorage.getItem('isLoggedin');
        console.log("checkkkkkkk", check);
        console.log("checkkkkkkk", JSON.parse(check));
        var data = JSON.parse(check);
        this.data = data.role;
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\n    <div class=\"list-group\">\n        <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Dashboard' | translate }}\n        </a>\n       <div class=\"nested-menu\" *ngIf=\"cont\">\n            <a  class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\n                <span><i class=\"fa fa-plus\"></i>{{ 'Content Management' | translate }}</span>\n            </a>\n            <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\n                <ul class=\"submenu\">\n                    <li>\n                        <a  routerLink=\"/groups\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-users\"></i>&nbsp; {{ 'Groups' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/smallgroup\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-user-plus\"></i>&nbsp; {{ 'Small Groups' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/events\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-calendar\"></i>&nbsp; {{ 'Events' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/music\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-music\"></i>&nbsp; {{ 'Music' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/marriage\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-venus-mars\" ></i>&nbsp; {{ 'Marriage' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/birthday\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-birthday-cake\" ></i>&nbsp; {{ 'Birthday' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/media\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-picture-o\" ></i>&nbsp; {{ 'Media' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/blog\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-th-large\" ></i>&nbsp; {{ 'Blogs' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/classifiedlist\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-newspaper-o\" ></i>&nbsp; {{ 'Classifieds' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/onlinestore\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-link\" ></i>&nbsp; {{ 'Online Store' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/news\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-newspaper-o\" ></i>&nbsp; {{ 'News' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/contact\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-address-book\" ></i>&nbsp; {{ 'Contact Us' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/aboutpage\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-info-circle\" ></i>&nbsp; {{ 'About Us' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/servicehour\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-map-marker\" ></i>&nbsp; {{ 'Service Hours' | translate }}</span></a>\n                    </li>\n                      <!--  <li>\n                        <a routerLink=\"/socialshare\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-share-square-o\" ></i>&nbsp; {{ 'Share Content' | translate }}</span></a>\n                    </li> -->\n                </ul>\n            </li>\n        </div>\n        <a routerLink=\"/library\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"><span><i class=\"fa fa-picture-o\" ></i>&nbsp; {{ 'Library' | translate }}</span></a>\n        <a *ngIf=\"poll\" [routerLink]=\"['/polls']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-table\"></i>&nbsp;Polls\n        </a>\n        <a class=\"list-group-item\" routerLink=\"/giving\" [routerLinkActive]=\"['router-link-active']\">\n            <i class=\"fa fa-fw fa-edit\"></i>&nbsp;Giving\n        </a>\n        <a *ngIf=\"reco\" [routerLink]=\"['/recommdations']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-comments\"></i>&nbsp;{{ 'Recommendations' | translate }}\n        </a>\n        <a *ngIf=\"set\" [routerLink]=\"['/setting']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;{{ 'Settings' | translate }}\n        </a>\n        <a *ngIf=\"appo\" [routerLink]=\"['/appointment']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-file-o\"></i>&nbsp;{{ 'Appointments' | translate }}\n        </a>\n        <a  *ngIf=\"sup\" [routerLink]=\"['/contactsupport']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item more-themes\">\n            <i class=\"fa fa-address-card\"></i>&nbsp;{{ 'Contact Support' | translate }}\n        </a>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/layout/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none;\n    padding: 0.75rem 1.25rem 0.75em 32px; }\n    .sidebar .list-group a.list-group-item .fa {\n      position: absolute;\n      left: 10px;\n      top: 15px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n    .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n    .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n      .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n    .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n\n.nested-menu .list-group-item {\n  cursor: pointer; }\n\n.nested-menu .nested {\n  list-style-type: none; }\n\n.nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px 10px 10px 30px;\n    display: block; }\n\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n\n@media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n\n::-webkit-scrollbar {\n  width: 8px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_service__ = __webpack_require__("../../../../../src/app/auth-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(translate, router, authService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.authService = authService;
        this.isActive = false;
        this.show = false;
        this.cont = false;
        this.reco = false;
        this.poll = false;
        this.appo = false;
        this.set = false;
        this.sup = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        // alert(this.showMenu)
        var check = localStorage.getItem('isLoggedin');
        console.log("checkkkkkkk", check);
        console.log("checkkkkkkk", JSON.parse(check));
        var data = JSON.parse(check);
        console.log("dataaaa", data._id);
        this.id = data._id;
        this.role = data.role;
        if (this.role == 2) {
            alert("role 2");
            this.Permissions();
        }
        else {
            this.cont = true;
            this.reco = true;
            this.poll = true;
            this.appo = true;
            this.set = true;
            this.sup = true;
        }
    };
    /**********************************Get Permissions***************************************/
    SidebarComponent.prototype.Permissions = function () {
        var _this = this;
        // alert("hiiii")
        this.authService.getPermissions(this.id).then(function (result) {
            console.log(result);
            _this.res = result;
            if (_this.res.status == true) {
                _this.data = _this.res.data.permissions;
                if (_this.role == 2) {
                    // alert("in if")
                    for (var i in _this.data) {
                        // alert("in for")
                        if (_this.data[i].type == "CONT") {
                            // alert("in cont")
                            _this.cont = true;
                        }
                        else if (_this.data[i].type == "RECO") {
                            _this.reco = true;
                        }
                        else if (_this.data[i].type == "POLL") {
                            _this.poll = true;
                        }
                        else if (_this.data[i].type == "APPO") {
                            _this.appo = true;
                        }
                        else if (_this.data[i].type == "SETT") {
                            _this.set = true;
                        }
                        else if (_this.data[i].type == "SUPP") {
                            _this.sup = true;
                        }
                    }
                }
                else {
                    // this.tabs=true;
                }
                console.log(_this.data);
            }
            else {
                console.log("erorr");
            }
        }, function (err) {
            console.log(err);
        });
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__auth_service_service__["a" /* AuthServiceService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */],
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', runGuardsAndResolvers: 'always' },
            { path: 'newmedia', loadChildren: './charts/charts.module#ChartsModule', runGuardsAndResolvers: 'always' },
            { path: 'newlink', loadChildren: './newlink/newlink.module#NewlinkModule', runGuardsAndResolvers: 'always' },
            { path: 'giving', loadChildren: './giving/giving.module#GivingModule', runGuardsAndResolvers: 'always' },
            { path: 'grouprequest/:id/:id2', loadChildren: './grouprequest/grouprequest.module#GrouprequestModule', runGuardsAndResolvers: 'always' },
            { path: 'savedpolls', loadChildren: './savedpolls/savedpolls.module#SavedpollsModule', runGuardsAndResolvers: 'always' },
            { path: 'servicehour', loadChildren: './servicehour/servicehour.module#ServicehourModule', runGuardsAndResolvers: 'always' },
            { path: 'managers', loadChildren: './managers/managers.module#ManagersModule', runGuardsAndResolvers: 'always' },
            { path: 'addmanager', loadChildren: './addmanager/addmanager.module#AddManagerModule', runGuardsAndResolvers: 'always' },
            { path: 'adminedit/:id', loadChildren: './adminedit/adminedit.module#AdminEditModule', runGuardsAndResolvers: 'always' },
            { path: 'changepassword', loadChildren: './changepassword/changepassword.module#ChangePasswordModule', runGuardsAndResolvers: 'always' },
            { path: 'aboutpage', loadChildren: './aboutpage/aboutpage.module#AboutpageModule', runGuardsAndResolvers: 'always' },
            { path: 'contactsupport', loadChildren: './contactsupport/contactsupport.module#ContactsupportModule', runGuardsAndResolvers: 'always' },
            { path: 'setting', loadChildren: './notes/notes.module#NotesModule', runGuardsAndResolvers: 'always' },
            { path: 'polls', loadChildren: './polls/polls.module#PollsModule', runGuardsAndResolvers: 'always' },
            { path: 'poll-detail/:id', loadChildren: './poll-detail/poll-detail.module#PollDetailModule', runGuardsAndResolvers: 'always' },
            { path: 'add-poll', loadChildren: './add-poll/add-poll.module#AddPollModule', runGuardsAndResolvers: 'always' },
            { path: 'news', loadChildren: './news/news.module#NewsModule', runGuardsAndResolvers: 'always' },
            { path: 'onlinestore', loadChildren: './onlinestore/onlinestore.module#OnlinestoreModule', runGuardsAndResolvers: 'always' },
            { path: 'requestrecomm', loadChildren: './requestrecomm/requestrecomm.module#RecommdationReqModule', runGuardsAndResolvers: 'always' },
            { path: 'content', loadChildren: './content-management/content-management.module#ContentModule', runGuardsAndResolvers: 'always' },
            { path: 'classifiedlist/:id', loadChildren: './classifiedlist/classifiedlist.module#ClassifiedlistModule', runGuardsAndResolvers: 'always' },
            { path: 'classifiedlist', loadChildren: './classifiedlist/classifiedlist.module#ClassifiedlistModule', runGuardsAndResolvers: 'always' },
            { path: 'recommdations', loadChildren: './recommdations/recommdations.module#RecommdationModule', runGuardsAndResolvers: 'always' },
            { path: 'classifieds', loadChildren: './classifieds/classifieds.module#ClassifiedModule', runGuardsAndResolvers: 'always' },
            { path: 'contact', loadChildren: './contact/contact.module#ContactModule', runGuardsAndResolvers: 'always' },
            { path: 'blog', loadChildren: './blog/blog.module#BlogModule', runGuardsAndResolvers: 'always' },
            { path: 'editblog/:id', loadChildren: './editblog/editblog.module#EditBlogModule', runGuardsAndResolvers: 'always' },
            { path: 'addblog', loadChildren: './addblog/addblog.module#AddBlogModule', runGuardsAndResolvers: 'always' },
            { path: 'groups', loadChildren: './groups/groups.module#GroupssModule', runGuardsAndResolvers: 'always' },
            { path: 'users', loadChildren: './users/users.module#UsersModule', runGuardsAndResolvers: 'always' },
            { path: 'newmember', loadChildren: './newmember/newmember.module#NewmemberModule', runGuardsAndResolvers: 'always' },
            { path: 'alumni', loadChildren: './alumni/alumni.module#AlumniModule', runGuardsAndResolvers: 'always' },
            { path: 'fiances', loadChildren: './fiances/fiances.module#FiancesModule', runGuardsAndResolvers: 'always' },
            { path: 'appointment', loadChildren: './appointment/appointment.module#AppointmentModule', runGuardsAndResolvers: 'always' },
            { path: 'appointrequest', loadChildren: './appointrequest/appointrequest.module#AppointrequestModule', runGuardsAndResolvers: 'always' },
            { path: 'pastevent', loadChildren: './pastevent/pastevent.module#PastEventsModule', runGuardsAndResolvers: 'always' },
            { path: 'editmedia/:id', loadChildren: './editmedia/editmedia.module#EditmediaModule', runGuardsAndResolvers: 'always' },
            { path: 'weddinglist', loadChildren: './weddinglist/weddinglist.module#WeddingModule', runGuardsAndResolvers: 'always' },
            { path: 'birthday', loadChildren: './birthday/birthday.module#BirthdayModule', runGuardsAndResolvers: 'always' },
            { path: 'upcomingmarriage', loadChildren: './upcomingmarriage/upcomingmarriage.module#UpcomingModule', runGuardsAndResolvers: 'always' },
            { path: 'newgroup', loadChildren: './newgroup/newgroup.module#NewGroupssModule', runGuardsAndResolvers: 'always' },
            { path: 'socialshare', loadChildren: './socialshare/socialshare.module#SocialshareModule' },
            { path: 'popup', loadChildren: './popup/popup.module#PopupModule', runGuardsAndResolvers: 'always' },
            { path: 'requests', loadChildren: './requests/requests.module#RequestsModule', runGuardsAndResolvers: 'always' },
            { path: 'newsmallgroup', loadChildren: './newsmallgroup/newsmallgroup.module#NewSmallGroupsModule', runGuardsAndResolvers: 'always' },
            { path: 'editsmallgroup/:id', loadChildren: './editsmallgroup/editsmallgroup.module#EditSmallModule', runGuardsAndResolvers: 'always' },
            { path: 'events', loadChildren: './events/events.module#EventssModule', runGuardsAndResolvers: 'always' },
            { path: 'editalbum/:id', loadChildren: './editalbum/editalbum.module#EditalbumModule', runGuardsAndResolvers: 'always' },
            { path: 'editevent/:id', loadChildren: './editevent/editevent.module#EditeventModule', runGuardsAndResolvers: 'always' },
            { path: 'upcomingevent', loadChildren: './upcomingevent/upcomingevent.module#UpcomingEventModule', runGuardsAndResolvers: 'always' },
            { path: 'newevent', loadChildren: './newevent/newevent.module#NewEventsModule', runGuardsAndResolvers: 'always' },
            { path: 'music', loadChildren: './music/music.module#MusicsModule', runGuardsAndResolvers: 'always' },
            { path: 'media', loadChildren: './media/media.module#MediaModule', runGuardsAndResolvers: 'always' },
            { path: 'medialist/:id', loadChildren: './medialist/medialist.module#MedialistModule', runGuardsAndResolvers: 'always' },
            { path: 'songlist/:id', loadChildren: './songlist/songlist.module#SonglistModule', runGuardsAndResolvers: 'always' },
            { path: 'marriage', loadChildren: './marriage/marriage.module#MarriageGroupModule', runGuardsAndResolvers: 'always' },
            { path: 'smallgroup', loadChildren: './smallgroup/smallgroup.module#SmallGroupsModule', runGuardsAndResolvers: 'always' },
            { path: 'editgroup/:id', loadChildren: './editgroup/editgroup.module#EditGroupModule', runGuardsAndResolvers: 'always' },
            { path: 'user/:id', loadChildren: './user/user.module#UserModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule', runGuardsAndResolvers: 'always' },
            { path: 'forms', loadChildren: './form/form.module#FormModule', runGuardsAndResolvers: 'always' },
            { path: 'library', loadChildren: './library/library.module#LibraryModule', runGuardsAndResolvers: 'always' },
            { path: 'church', loadChildren: './bs-element/bs-element.module#BsElementModule', runGuardsAndResolvers: 'always' },
            { path: 'members', loadChildren: './grid/grid.module#GridModule', runGuardsAndResolvers: 'always' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule', runGuardsAndResolvers: 'always' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule', runGuardsAndResolvers: 'always' }
        ]
    }
];
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-sidebar></app-sidebar>\n<section class=\"main-container\">\n    <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.blue_btn {\n  background: #F78C6A;\n  border-radius: 5px;\n  color: #fff;\n  font-size: 14px;\n  border: none;\n  padding: 5px 12px;\n  display: inline-block;\n  line-height: 23px;\n  margin-top: 20px;\n  font-weight: 700; }\n\n.blue_btn:hover {\n  background: #eb7650; }\n\n.blue_btn + .blue_btn {\n  margin-right: 5px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_routing_module__ = __webpack_require__("../../../../../src/app/layout/layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("../../../../../src/app/layout/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__layout_routing_module__["a" /* LayoutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyBOdFw0bwD2ITHQwIoyY7vkk-68slaH-rI",
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbDropdownModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_6__components_sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

});
//# sourceMappingURL=layout.module.chunk.js.map