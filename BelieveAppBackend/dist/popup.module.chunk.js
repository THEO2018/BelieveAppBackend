webpackJsonp(["popup.module"],{

/***/ "../../../../../src/app/layout/popup/popup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popup_component__ = __webpack_require__("../../../../../src/app/layout/popup/popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__popup_component__["a" /* PopupComponent */]
    }
];
var PopupRoutingModule = (function () {
    function PopupRoutingModule() {
    }
    PopupRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PopupRoutingModule);
    return PopupRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "  \n     \n      <div class=\"text-center\">\n        <span *ngFor=\"let placement of placements\">\n          <button\n            class=\"btn btn-default\"\n            mwlConfirmationPopover\n            [popoverTitle]=\"popoverTitle\"\n            [popoverMessage]=\"popoverMessage\"\n            [confirmText]=\"confirmText\"\n            [cancelText]=\"cancelText\"\n            [placement]=\"placement\"\n            (confirm)=\"confirmClicked = true\"\n            (cancel)=\"cancelClicked = true\"\n            confirmButtonType=\"danger\"\n            cancelButtonType=\"default\"\n            (click)=\"confirmClicked = false; cancelClicked = false\"\n            [appendToBody]=\"true\">\n            Show on {{ placement }}\n          </button>\n        </span>\n      </div>\n  "

/***/ }),

/***/ "../../../../../src/app/layout/popup/popup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
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

var PopupComponent = (function () {
    function PopupComponent() {
        this.placements = ['top', 'left', 'right', 'bottom'];
        this.popoverTitle = 'Are you sure?';
        this.popoverMessage = 'Are you really <b>sure</b> you want to do this?';
        this.confirmText = 'Yes <i class="glyphicon glyphicon-ok"></i>';
        this.cancelText = 'No <i class="glyphicon glyphicon-remove"></i>';
        this.confirmClicked = false;
        this.cancelClicked = false;
    }
    PopupComponent.prototype.ngOnInit = function () {
    };
    PopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__("../../../../../src/app/layout/popup/popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/popup/popup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/popup/popup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupModule", function() { return PopupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popup_routing_module__ = __webpack_require__("../../../../../src/app/layout/popup/popup-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popup_component__ = __webpack_require__("../../../../../src/app/layout/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_confirmation_popover__ = __webpack_require__("../../../../angular-confirmation-popover/esm5/angular-confirmation-popover.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';






var PopupModule = (function () {
    function PopupModule() {
    }
    PopupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__popup_routing_module__["a" /* PopupRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot({
                    confirmButtonType: 'danger' // set defaults here
                })],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__popup_component__["a" /* PopupComponent */]]
        })
    ], PopupModule);
    return PopupModule;
}());



/***/ }),

/***/ "../../../../angular-confirmation-popover/esm5/angular-confirmation-popover.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPopoverModule; });
/* unused harmony export ɵd */
/* unused harmony export ɵf */
/* unused harmony export ɵe */
/* unused harmony export ɵc */
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* unused harmony export ɵg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_positioning__ = __webpack_require__("../../../../positioning/dist/positioning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var ConfirmationPopoverOptions = /** @class */ (function () {
    function ConfirmationPopoverOptions() {
        this.confirmText = 'Confirm';
        this.cancelText = 'Cancel';
        this.confirmButtonType = 'success';
        this.cancelButtonType = 'default';
        this.placement = 'top';
        this.hideConfirmButton = false;
        this.hideCancelButton = false;
        this.popoverClass = '';
        this.appendToBody = false;
        this.reverseButtonOrder = false;
    }
    return ConfirmationPopoverOptions;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@internal
 */
var ConfirmationPopoverWindowOptions = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ConfirmationPopoverWindowOptions, _super);
    function ConfirmationPopoverWindowOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConfirmationPopoverWindowOptions;
}(ConfirmationPopoverOptions));
ConfirmationPopoverWindowOptions.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
ConfirmationPopoverWindowOptions.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@internal
 */
var ConfirmationPopoverWindowComponent = /** @class */ (function () {
    /**
     * @param {?} options
     */
    function ConfirmationPopoverWindowComponent(options) {
        this.options = options;
    }
    /**
     * @return {?}
     */
    ConfirmationPopoverWindowComponent.prototype.ngAfterViewInit = function () {
        this.options.onAfterViewInit();
    };
    return ConfirmationPopoverWindowComponent;
}());
ConfirmationPopoverWindowComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                selector: 'mwl-confirmation-popover-window',
                styles: [
                    "\n    .popover {\n      display: block;\n    }\n    .bs-popover-top .arrow, .bs-popover-bottom .arrow {\n      left: 50%;\n    }\n    .bs-popover-left .arrow, .bs-popover-right .arrow {\n      top: 50%;\n    }\n    .btn {\n      transition: none;\n    }\n    .confirm-btns {\n      display: flex;\n      justify-content: space-around;\n    }\n    .confirm-btn-container {\n      flex-basis: 50%;\n    }\n    .confirm-btn-container:not(:first-child) {\n      margin-left: 4px;\n    }\n    .confirm-btn-container:not(:last-child) {\n      margin-right: 4px;\n    }\n    .confirm-btns-reversed {\n      flex-direction: row-reverse;\n    }\n    .confirm-btns-reversed .confirm-btn-container:not(:first-child) {\n      margin-right: 4px;\n      margin-left: 0;\n    }\n    .confirm-btns-reversed .confirm-btn-container:not(:last-child) {\n      margin-right: 0;\n      margin-left: 4px;\n    }\n  "
                ],
                template: "\n    <ng-template #defaultTemplate let-options=\"options\">\n      <div [ngClass]=\"[\n        'popover',\n        options.placement,\n        'popover-' + options.placement,\n        'bs-popover-' + options.placement,\n        options.popoverClass\n      ]\">\n        <div class=\"popover-arrow arrow\"></div>\n        <h3 class=\"popover-title popover-header\" [innerHTML]=\"options.popoverTitle\"></h3>\n        <div class=\"popover-content popover-body\">\n          <p [innerHTML]=\"options.popoverMessage\"></p>\n          <div class=\"confirm-btns\" [class.confirm-btns-reversed]=\"options.reverseButtonOrder\">\n            <div\n              class=\"confirm-btn-container\"\n              *ngIf=\"!options.hideCancelButton\">\n              <button\n                type=\"button\"\n                [mwlFocus]=\"options.focusButton === 'cancel'\"\n                [class]=\"'btn btn-block btn-' + options.cancelButtonType\"\n                (click)=\"options.onCancel({clickEvent: $event})\"\n                [innerHtml]=\"options.cancelText\">\n              </button>\n            </div>\n            <div\n              class=\"confirm-btn-container\"\n              *ngIf=\"!options.hideConfirmButton\">\n              <button\n                type=\"button\"\n                [mwlFocus]=\"options.focusButton === 'confirm'\"\n                [class]=\"'btn btn-block btn-' + options.confirmButtonType\"\n                (click)=\"options.onConfirm({clickEvent: $event})\"\n                [innerHtml]=\"options.confirmText\">\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"options.customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{options: options}\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
ConfirmationPopoverWindowComponent.ctorParameters = function () { return [
    { type: ConfirmationPopoverWindowOptions, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@internal
 * @record
 */
/**
 * All properties can be set on the directive as attributes like so (use `ConfirmationPopoverModule.forRoot()` to configure them globally):
 * ```html
 * <button
 *  class="btn btn-default"
 *  mwlConfirmationPopover
 *  [popoverTitle]="popoverTitle"
 *  [popoverMessage]="popoverMessage"
 *  placement="left"
 *  (confirm)="confirmClicked = true"
 *  (cancel)="cancelClicked = true"
 *  [(isOpen)]="isOpen">
 *   Show confirm popover!
 * </button>
 * ```
 */
var ConfirmationPopoverDirective = /** @class */ (function () {
    /**
     * \@internal
     * @param {?} viewContainerRef
     * @param {?} elm
     * @param {?} defaultOptions
     * @param {?} cfr
     * @param {?} position
     * @param {?} renderer
     */
    function ConfirmationPopoverDirective(viewContainerRef, elm, defaultOptions, cfr, position, renderer) {
        this.viewContainerRef = viewContainerRef;
        this.elm = elm;
        this.defaultOptions = defaultOptions;
        this.cfr = cfr;
        this.position = position;
        this.renderer = renderer;
        /**
         * Whether to disable showing the popover. Default `false`.
         */
        this.isDisabled = false;
        /**
         * Will open or show the popover when changed.
         * Can be sugared with `isOpenChange` to emulate 2-way binding like so `[(isOpen)]="isOpen"`
         */
        this.isOpen = false;
        /**
         * Will emit when the popover is opened or closed
         */
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"](true);
        /**
         * An expression that is called when the confirm button is clicked.
         */
        this.confirm = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        /**
         * An expression that is called when the cancel button is clicked.
         */
        this.cancel = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.eventListeners = [];
    }
    /**
     * \@internal
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.ngOnInit = function () {
        this.isOpenChange.emit(false);
    };
    /**
     * \@internal
     * @param {?} changes
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.ngOnChanges = function (changes) {
        if (changes["isOpen"]) {
            if (changes["isOpen"].currentValue === true) {
                this.showPopover();
            }
            else {
                this.hidePopover();
            }
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.ngOnDestroy = function () {
        this.hidePopover();
    };
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.onConfirm = function (event) {
        this.confirm.emit(event);
        this.hidePopover();
    };
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.onCancel = function (event) {
        this.cancel.emit(event);
        this.hidePopover();
    };
    /**
     * \@internal
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.togglePopover = function () {
        if (!this.popover) {
            this.showPopover();
        }
        else {
            this.hidePopover();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.onDocumentClick = function (event) {
        if (this.popover &&
            !this.elm.nativeElement.contains(event.target) &&
            !this.popover.location.nativeElement.contains(event.target)) {
            this.hidePopover();
        }
    };
    /**
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.showPopover = function () {
        var _this = this;
        if (!this.popover && !this.isDisabled) {
            // work around for https://github.com/mattlewis92/angular-confirmation-popover/issues/65
            // otherwise the document click event gets fired after the click event
            // that triggered the popover to open (no idea why this is so)
            setTimeout(function () {
                _this.eventListeners = [
                    _this.renderer.listen('document', 'click', function (event) { return _this.onDocumentClick(event); }),
                    _this.renderer.listen('document', 'touchend', function (event) { return _this.onDocumentClick(event); }),
                    _this.renderer.listen('window', 'resize', function () { return _this.positionPopover(); })
                ];
            });
            var /** @type {?} */ options_1 = new ConfirmationPopoverWindowOptions();
            Object.assign(options_1, this.defaultOptions, {
                popoverTitle: this.popoverTitle,
                popoverMessage: this.popoverMessage,
                onConfirm: function (event) {
                    _this.onConfirm(event);
                },
                onCancel: function (event) {
                    _this.onCancel(event);
                },
                onAfterViewInit: function () {
                    _this.positionPopover();
                }
            });
            var /** @type {?} */ optionalParams = [
                'confirmText',
                'cancelText',
                'placement',
                'confirmButtonType',
                'cancelButtonType',
                'focusButton',
                'hideConfirmButton',
                'hideCancelButton',
                'popoverClass',
                'appendToBody',
                'customTemplate',
                'reverseButtonOrder'
            ];
            optionalParams.forEach(function (param) {
                if (typeof _this[param] !== 'undefined') {
                    ((options_1))[param] = _this[param];
                }
            });
            var /** @type {?} */ componentFactory = this.cfr.resolveComponentFactory(ConfirmationPopoverWindowComponent);
            var /** @type {?} */ childInjector = __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"].create([
                {
                    provide: ConfirmationPopoverWindowOptions,
                    useValue: options_1
                }
            ], this.viewContainerRef.parentInjector);
            this.popover = this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length, childInjector);
            if (options_1.appendToBody) {
                document.body.appendChild(this.popover.location.nativeElement);
            }
            this.isOpenChange.emit(true);
        }
    };
    /**
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.positionPopover = function () {
        if (this.popover) {
            var /** @type {?} */ popoverElement = this.popover.location.nativeElement.children[0];
            var /** @type {?} */ popoverPosition = this.position.positionElements(this.elm.nativeElement, popoverElement, this.placement || this.defaultOptions.placement, this.appendToBody || this.defaultOptions.appendToBody);
            this.renderer.setStyle(popoverElement, 'top', popoverPosition.top + "px");
            this.renderer.setStyle(popoverElement, 'left', popoverPosition.left + "px");
        }
    };
    /**
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.hidePopover = function () {
        if (this.popover) {
            this.popover.destroy();
            delete this.popover;
            this.isOpenChange.emit(false);
            this.eventListeners.forEach(function (fn) { return fn(); });
            this.eventListeners = [];
        }
    };
    return ConfirmationPopoverDirective;
}());
ConfirmationPopoverDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: '[mwlConfirmationPopover]'
            },] },
];
/** @nocollapse */
ConfirmationPopoverDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
    { type: ConfirmationPopoverOptions, },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_2_positioning__["a" /* Positioning */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], },
]; };
ConfirmationPopoverDirective.propDecorators = {
    "popoverTitle": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "popoverMessage": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "confirmText": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "cancelText": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "placement": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "confirmButtonType": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "cancelButtonType": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "focusButton": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "hideConfirmButton": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "hideCancelButton": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "isDisabled": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "isOpen": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "customTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "isOpenChange": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
    "confirm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
    "cancel": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
    "popoverClass": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "appendToBody": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "reverseButtonOrder": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    "togglePopover": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"], args: ['click',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A helper directive to focus buttons. You will only need this if using a custom template
 */
var FocusDirective = /** @class */ (function () {
    /**
     * @param {?} elm
     */
    function FocusDirective(elm) {
        this.elm = elm;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FocusDirective.prototype.ngOnChanges = function (changes) {
        if (changes["mwlFocus"] && this.mwlFocus === true) {
            this.elm.nativeElement.focus();
        }
    };
    return FocusDirective;
}());
FocusDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: '[mwlFocus]'
            },] },
];
/** @nocollapse */
FocusDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
]; };
FocusDirective.propDecorators = {
    "mwlFocus": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var USER_OPTIONS = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('confirmation popover user options');
/**
 * @param {?} userOptions
 * @return {?}
 */
function optionsFactory(userOptions) {
    var /** @type {?} */ options = new ConfirmationPopoverOptions();
    Object.assign(options, userOptions);
    return options;
}
var ConfirmationPopoverModule = /** @class */ (function () {
    function ConfirmationPopoverModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    ConfirmationPopoverModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: ConfirmationPopoverModule,
            providers: [
                {
                    provide: USER_OPTIONS,
                    useValue: options
                },
                {
                    provide: ConfirmationPopoverOptions,
                    useFactory: optionsFactory,
                    deps: [USER_OPTIONS]
                },
                __WEBPACK_IMPORTED_MODULE_2_positioning__["a" /* Positioning */]
            ]
        };
    };
    return ConfirmationPopoverModule;
}());
ConfirmationPopoverModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                declarations: [
                    ConfirmationPopoverDirective,
                    ConfirmationPopoverWindowComponent,
                    FocusDirective
                ],
                imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"]],
                exports: [ConfirmationPopoverDirective, FocusDirective],
                entryComponents: [ConfirmationPopoverWindowComponent]
            },] },
];
/** @nocollapse */
ConfirmationPopoverModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=angular-confirmation-popover.js.map


/***/ }),

/***/ "../../../../positioning/dist/positioning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Positioning; });
/* unused harmony export positionElements */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left =
                    hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }
        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                }
                else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    return Positioning;
}());

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=positioning.js.map

/***/ })

});
//# sourceMappingURL=popup.module.chunk.js.map