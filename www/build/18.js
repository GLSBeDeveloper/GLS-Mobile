webpackJsonp([18],{

/***/ 1093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsHandledPageModule", function() { return ItemsHandledPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items_handled__ = __webpack_require__(1131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(1112);
/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemsHandledPageModule = /** @class */ (function () {
    function ItemsHandledPageModule() {
    }
    ItemsHandledPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__items_handled__["a" /* ItemsHandledPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__items_handled__["a" /* ItemsHandledPage */]),
            ],
        })
    ], ItemsHandledPageModule);
    return ItemsHandledPageModule;
}());

//# sourceMappingURL=items-handled.module.js.map

/***/ }),

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vrp_btn_clear_vrp_btn_clear__ = __webpack_require__(1115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vrp_header_vrp_header__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vrp_job_details_vrp_job_details__ = __webpack_require__(1117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vrp_job_summary_vrp_job_summary__ = __webpack_require__(1118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vrp_jobnote_label_vrp_jobnote_label__ = __webpack_require__(1119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vrp_jobtype_label_vrp_jobtype_label__ = __webpack_require__(1120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vrp_photos_vrp_photos__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vrp_progress_bar_vrp_progress_bar__ = __webpack_require__(1122);
/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__vrp_btn_clear_vrp_btn_clear__["a" /* VrpBtnClearComponent */],
                __WEBPACK_IMPORTED_MODULE_5__vrp_header_vrp_header__["a" /* VrpHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__vrp_job_details_vrp_job_details__["a" /* VrpJobDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__vrp_job_summary_vrp_job_summary__["a" /* VrpJobSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__vrp_jobnote_label_vrp_jobnote_label__["a" /* VrpJobnoteLabelComponent */],
                __WEBPACK_IMPORTED_MODULE_9__vrp_jobtype_label_vrp_jobtype_label__["a" /* VrpJobtypeLabelComponent */],
                __WEBPACK_IMPORTED_MODULE_10__vrp_photos_vrp_photos__["a" /* VrpPhotosComponent */],
                __WEBPACK_IMPORTED_MODULE_11__vrp_progress_bar_vrp_progress_bar__["a" /* VrpProgressBarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4__vrp_btn_clear_vrp_btn_clear__["a" /* VrpBtnClearComponent */],
                __WEBPACK_IMPORTED_MODULE_5__vrp_header_vrp_header__["a" /* VrpHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__vrp_job_details_vrp_job_details__["a" /* VrpJobDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__vrp_job_summary_vrp_job_summary__["a" /* VrpJobSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__vrp_jobnote_label_vrp_jobnote_label__["a" /* VrpJobnoteLabelComponent */],
                __WEBPACK_IMPORTED_MODULE_9__vrp_jobtype_label_vrp_jobtype_label__["a" /* VrpJobtypeLabelComponent */],
                __WEBPACK_IMPORTED_MODULE_10__vrp_photos_vrp_photos__["a" /* VrpPhotosComponent */],
                __WEBPACK_IMPORTED_MODULE_11__vrp_progress_bar_vrp_progress_bar__["a" /* VrpProgressBarComponent */],
            ],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__safe_safe__ = __webpack_require__(1114);
/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__safe_safe__["a" /* SafePipe */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__safe_safe__["a" /* SafePipe */],
            ],
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(91);
/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Santizes urls to solve unsafe value exceptions
 *
 * @class SafePipe
 * @implements {PipeTransform}
 */
var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safe',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=safe.js.map

/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VrpBtnClearComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_notification_notification__ = __webpack_require__(111);
/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Clear button in pages with form
 *
 * @class VrpBtnClearComponent
 */
var VrpBtnClearComponent = /** @class */ (function () {
    function VrpBtnClearComponent(notify) {
        this.notify = notify;
        /**
         * Callback button when button is pressed
         *
         * @type {EventEmitter<void>}
         */
        this.pressed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    VrpBtnClearComponent.prototype.btnClear = function () {
        this.pressed.emit();
    };
    VrpBtnClearComponent.prototype.showToast = function () {
        this.notify.info('Press and hold to clear all input');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VrpBtnClearComponent.prototype, "pressed", void 0);
    VrpBtnClearComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vrp-btn-clear',template:/*ion-inline-start:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-btn-clear\vrp-btn-clear.html"*/'<button ion-button full large color="primary" no-margin (tap)="showToast()" (press)="btnClear()">\n\n    <div>\n\n        <ion-icon name="trash"></ion-icon>\n\n        {{\'BUTTON.Clear\' | translate}}\n\n    </div>\n\n</button>\n\n'/*ion-inline-end:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-btn-clear\vrp-btn-clear.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_notification_notification__["a" /* NotificationProvider */]])
    ], VrpBtnClearComponent);
    return VrpBtnClearComponent;
}());

//# sourceMappingURL=vrp-btn-clear.js.map

/***/ }),

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VrpHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_navigation__ = __webpack_require__(542);
/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Header of all pages
 *
 * @class VrpHeaderComponent
 * @extends {NavigationProvider}
 */
var VrpHeaderComponent = /** @class */ (function (_super) {
    __extends(VrpHeaderComponent, _super);
    function VrpHeaderComponent(alertCtrl, navCtrl) {
        var _this = _super.call(this, { navCtrl: navCtrl }) || this;
        _this.alertCtrl = alertCtrl;
        _this.navCtrl = navCtrl;
        /**
         * Flag to indicate whether to direct user to login page instead of home page
         *
         * @type {boolean}
         */
        _this.toLoginPage = false;
        /**
         * Flag to indicate whether a confirmation dialog should be shown before redirecting
         *
         * @type {boolean}
         */
        _this.showDialog = false;
        return _this;
    }
    VrpHeaderComponent.prototype.goMainPage = function () {
        var _this = this;
        if (this.showDialog === false) {
            this.go();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Confirm',
                subTitle: 'Are you sure you want to go main page?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    }, {
                        text: 'Yes',
                        handler: function () {
                            _this.go();
                        },
                    },
                ],
            });
            alert_1.present();
        }
    };
    VrpHeaderComponent.prototype.go = function () {
        if (this.toLoginPage === false) {
            this.goHomePage();
        }
        else {
            this.goLoginPage();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VrpHeaderComponent.prototype, "toLoginPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VrpHeaderComponent.prototype, "showDialog", void 0);
    VrpHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vrp-header',template:/*ion-inline-start:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-header\vrp-header.html"*/'<ion-title tappable (tap)="goMainPage()" text-uppercase>\n\n    <ng-content></ng-content>\n\n</ion-title>\n\n'/*ion-inline-end:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-header\vrp-header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], VrpHeaderComponent);
    return VrpHeaderComponent;
}(__WEBPACK_IMPORTED_MODULE_2__providers_navigation_navigation__["a" /* NavigationProvider */]));

//# sourceMappingURL=vrp-header.js.map

/***/ }),

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VrpJobDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_classes_job__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(543);
/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Displays all necessary information of a job.
 * See `VrpJobSummaryComponent` to show short summary of a job instead
 *
 * @class VrpJobDetailsComponent
 * @implements {OnInit}
 */
var VrpJobDetailsComponent = /** @class */ (function () {
    function VrpJobDetailsComponent(loading, modalCtrl) {
        this.loading = loading;
        this.modalCtrl = modalCtrl;
        /**
         * Flag to indicate whether to show items section
         *
         * @type {boolean}
         */
        this.showItems = false;
    }
    VrpJobDetailsComponent.prototype.ngOnInit = function () {
        if (this.job === undefined || !(this.job instanceof __WEBPACK_IMPORTED_MODULE_2__providers_classes_job__["b" /* Job */])) {
            throw new Error('Attribute `job` must be an instance of Job.');
        }
    };
    VrpJobDetailsComponent.prototype.btnViewItem = function (item) {
        var loader = this.loading.show('Getting item information');
        var modal = this.modalCtrl.create('ItemDetailsPage', { deliveryItem: item });
        modal.present().then(function () { return loader.dismiss(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VrpJobDetailsComponent.prototype, "showItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__providers_classes_job__["b" /* Job */])
    ], VrpJobDetailsComponent.prototype, "job", void 0);
    VrpJobDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vrp-job-details',template:/*ion-inline-start:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-job-details\vrp-job-details.html"*/'<ion-list>\n\n    <ion-list-header color="dark">\n\n        #{{job.DeliveryMasterId}}\n\n        <vrp-jobtype-label [jobtype]="job.JobType" item-end></vrp-jobtype-label>\n\n    </ion-list-header>\n\n\n\n    <ion-item-group>\n\n        <ion-list-header color="light">\n\n            <ion-icon name="home" item-start></ion-icon>\n\n            {{\'JOB.Address\' | translate}}\n\n        </ion-list-header>\n\n        <ion-item text-wrap>\n\n            {{job.Address}}\n\n            <br> Singapore {{job.Postal}}\n\n        </ion-item>\n\n    </ion-item-group>\n\n\n\n    <ion-item-group>\n\n        <ion-list-header color="light">\n\n            <ion-icon name="clock" item-start></ion-icon>\n\n            {{\'JOB.TimeWindow\' | translate}}\n\n        </ion-list-header>\n\n        <ion-item text-wrap>\n\n            {{job.StartTimeWindow | date:\'shortTime\'}} to {{job.EndTimeWindow | date:\'shortTime\'}}\n\n        </ion-item>\n\n    </ion-item-group>\n\n\n\n    <ion-item-group>\n\n        <ion-list-header color="light">\n\n            <ion-icon name="person" item-start></ion-icon>\n\n            {{\'JOB.ContactName\' | translate}}\n\n        </ion-list-header>\n\n        <ion-item text-wrap>\n\n            {{job.ContactName}}\n\n        </ion-item>\n\n    </ion-item-group>\n\n\n\n    <ion-item-group>\n\n        <ion-list-header color="light">\n\n            <ion-icon name="bookmark" item-start></ion-icon>\n\n            {{\'JOB.Remarks\' | translate}}\n\n        </ion-list-header>\n\n        <ion-item text-wrap>\n\n            <vrp-jobnote-label [notes]="job.NoteFromPlanner"></vrp-jobnote-label>\n\n        </ion-item>\n\n    </ion-item-group>\n\n\n\n    <ion-item-group *ngIf="showItems">\n\n        <ion-list-header color="dark">\n\n            <ion-icon name="apps" item-start></ion-icon>\n\n            {{\'JOB.DeliveryItems\' | translate}}\n\n        </ion-list-header>\n\n\n\n        <ion-item-group *ngFor="let item of job.DeliveryItems; let i = index" tappable (tap)="btnViewItem(item)">\n\n            <ion-item-divider text-wrap color="light">\n\n                <ion-badge item-start>#{{i+1}}</ion-badge>\n\n                <strong>\n\n                    {{item.ItemId}}\n\n                </strong>\n\n                <ion-icon small name="open" item-end></ion-icon>\n\n            </ion-item-divider>\n\n\n\n            <ion-item text-wrap>\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col col-7 col-md-8>\n\n                            {{\'JOB.DeliveryItemsExpected\' | translate}}:\n\n                        </ion-col>\n\n                        <ion-col col-5 col-md-4>\n\n                            {{item.ItemQty}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row *ngIf="item.ActualItemQty >= 0">\n\n                        <ion-col col-7 col-md-8>\n\n                            {{\'JOB.DeliveryItemsActual\' | translate}}:\n\n                        </ion-col>\n\n                        <ion-col col-5 col-md-4>\n\n                            {{item.ActualItemQty}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-item-group>\n\n    </ion-item-group>\n\n</ion-list>\n\n'/*ion-inline-end:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-job-details\vrp-job-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], VrpJobDetailsComponent);
    return VrpJobDetailsComponent;
}());

//# sourceMappingURL=vrp-job-details.js.map

/***/ }),

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VrpJobSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_classes_job__ = __webpack_require__(136);
/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Short summary of a job
 * See `VrpJobDetailsComponent` to show detailed information of a job
 *
 * @class VrpJobSummaryComponent
 * @implements {OnInit}
 */
var VrpJobSummaryComponent = /** @class */ (function () {
    function VrpJobSummaryComponent() {
    }
    VrpJobSummaryComponent.prototype.ngOnInit = function () {
        if (this.job === undefined || !(this.job instanceof __WEBPACK_IMPORTED_MODULE_1__providers_classes_job__["b" /* Job */])) {
            throw new Error('Attribute `job` must be an instance of Job.');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__providers_classes_job__["b" /* Job */])
    ], VrpJobSummaryComponent.prototype, "job", void 0);
    VrpJobSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vrp-job-summary',template:/*ion-inline-start:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-job-summary\vrp-job-summary.html"*/'<ion-badge color="dark">{{job.EngineRouteSeqNum}}</ion-badge>&nbsp;\n\n<vrp-jobtype-label [jobtype]="job.JobType"></vrp-jobtype-label> {{job.DeliveryMasterId}}\n\n<br> {{job.Address}}\n\n<br> Singapore {{job.Postal}}\n\n<br>\n\n<span *ngIf="!job.ActualDeliveryTime">\n\n    <ion-icon name="ios-clock-outline"></ion-icon>\n\n    <strong>{{job.StartTimeWindow | date:\'shortTime\'}} &mdash; {{job.EndTimeWindow | date:\'shortTime\'}}</strong>\n\n</span>\n\n<span *ngIf="job.ActualDeliveryTime">\n\n    <ion-icon name="checkmark"></ion-icon>\n\n    <strong>{{job.ActualDeliveryTime | date:\'shortTime\'}}</strong>\n\n</span>\n\n'/*ion-inline-end:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-job-summary\vrp-job-summary.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], VrpJobSummaryComponent);
    return VrpJobSummaryComponent;
}());

//# sourceMappingURL=vrp-job-summary.js.map

/***/ }),

/***/ 1119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VrpJobnoteLabelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Standardised way to display Note columns
 *
 * @class VrpJobnoteLabelComponent
 */
var VrpJobnoteLabelComponent = /** @class */ (function () {
    function VrpJobnoteLabelComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], VrpJobnoteLabelComponent.prototype, "notes", void 0);
    VrpJobnoteLabelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vrp-jobnote-label',template:/*ion-inline-start:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-jobnote-label\vrp-jobnote-label.html"*/'<ion-item *ngFor="let note of notes" no-padding no-margin>\n\n    {{note}}\n\n</ion-item>\n\n'/*ion-inline-end:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-jobnote-label\vrp-jobnote-label.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], VrpJobnoteLabelComponent);
    return VrpJobnoteLabelComponent;
}());

//# sourceMappingURL=vrp-jobnote-label.js.map

/***/ }),

/***/ 1120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VrpJobtypeLabelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_classes_job__ = __webpack_require__(136);
/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Standardised way to display JobType column
 *
 * @class VrpJobtypeLabelComponent
 * @implements {OnChanges}
 */
var VrpJobtypeLabelComponent = /** @class */ (function () {
    function VrpJobtypeLabelComponent() {
    }
    VrpJobtypeLabelComponent.prototype.ngOnChanges = function () {
        if (this.jobtype === undefined) {
            throw new Error('Attribute `jobtype` is required.');
        }
        var jobTypeDictionary = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */].jobTypePair[this.jobtype];
        this.text = jobTypeDictionary.title;
        this.color = jobTypeDictionary.color;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VrpJobtypeLabelComponent.prototype, "jobtype", void 0);
    VrpJobtypeLabelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vrp-jobtype-label',template:/*ion-inline-start:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-jobtype-label\vrp-jobtype-label.html"*/'<ion-badge [color]="color" [innerText]="text"></ion-badge>'/*ion-inline-end:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-jobtype-label\vrp-jobtype-label.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], VrpJobtypeLabelComponent);
    return VrpJobtypeLabelComponent;
}());

//# sourceMappingURL=vrp-jobtype-label.js.map

/***/ }),

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VrpPhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_photo_viewer__ = __webpack_require__(853);
/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Standardised way to any photos
 *
 * @class VrpPhotosComponent
 * @implements {OnInit}
 */
var VrpPhotosComponent = /** @class */ (function () {
    function VrpPhotosComponent(photoViewer) {
        this.photoViewer = photoViewer;
        /**
         * Photos to display, can be in base64 or storage path.
         * Will be shown as 2 images per row
         *
         * @type {string[]}
         */
        this.photos = [];
        /**
         * Flag to indicate whether to show remove button
         *
         * @type {boolean}
         */
        this.allowRemove = false;
    }
    VrpPhotosComponent.prototype.ngOnInit = function () {
        if (this.photos === undefined && this.photo === undefined) {
            throw new Error('Either `photos` or `photo` must be provided.');
        }
        else if (this.photos !== undefined && !Array.isArray(this.photos)) {
            throw new Error('Attribute `photos` must be an array.');
        }
        else if (this.photo !== undefined && typeof this.photo !== 'string') {
            throw new Error('Attribute `photo` must be a string.');
        }
    };
    /**
     * Open photoviewer view that allows zooming, panning and sharing
     *
     * @param {string} photo
     */
    VrpPhotosComponent.prototype.btnViewPhoto = function (photo) {
        this.photoViewer.show(photo);
    };
    VrpPhotosComponent.prototype.btnRemovePhoto = function (photo) {
        var index = this.photos.indexOf(photo, 0);
        if (index > -1) {
            this.photos.splice(index, 1);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], VrpPhotosComponent.prototype, "photos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VrpPhotosComponent.prototype, "photo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VrpPhotosComponent.prototype, "allowRemove", void 0);
    VrpPhotosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vrp-photos',template:/*ion-inline-start:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-photos\vrp-photos.html"*/'<ion-grid no-padding *ngIf="photos.length">\n\n    <ion-row>\n\n        <ion-col col-6 no-padding *ngFor="let photo of photos">\n\n            <ion-card *ngIf="photo">\n\n                <ion-card-content>\n\n                    <img [src]="photo | safe" tappable (tap)="btnViewPhoto(photo)">\n\n\n\n                    <button ion-button small block round color="danger" *ngIf="allowRemove" (tap)="btnRemovePhoto(photo)">\n\n                        {{\'BUTTON.Remove\' | translate}}\n\n                    </button>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-grid>\n\n\n\n<img *ngIf="photo" [src]="photo | safe" tappable (tap)="btnViewPhoto(photo)">\n\n'/*ion-inline-end:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-photos\vrp-photos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], VrpPhotosComponent);
    return VrpPhotosComponent;
}());

//# sourceMappingURL=vrp-photos.js.map

/***/ }),

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VrpProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_classes_job__ = __webpack_require__(136);
/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Progress bar based on job list input
 *
 * @class VrpProgressBarComponent
 * @implements {OnChanges}
 */
var VrpProgressBarComponent = /** @class */ (function () {
    function VrpProgressBarComponent() {
        this.showProgress = false; // to toggle detail view
        this.summary = [];
        this.remainingPercent = 100; // used to keep track the calculated percentage to prevent overflow
    }
    VrpProgressBarComponent.prototype.ngOnChanges = function () {
        if (this.jobs !== undefined && this.jobs.length) {
            if (!(this.jobs[0] instanceof __WEBPACK_IMPORTED_MODULE_2__providers_classes_job__["b" /* Job */])) { // assumes that the entire array consist of same object types
                throw new Error('Attribute `jobs` must be an array of Job instances.');
            }
            this.reset();
            var jobsByCategory = this.groupBy(this.jobs, 'Status');
            for (var status_1 in jobsByCategory) {
                var jobs = jobsByCategory[status_1];
                var statusDictionary = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */].jobStatusPair[status_1];
                this.summary.push({
                    title: statusDictionary.title,
                    color: statusDictionary.color,
                    count: jobs.length,
                    percent: this.calPercent(jobs.length),
                });
            }
        }
    };
    VrpProgressBarComponent.prototype.toggleLegend = function () {
        this.showProgress = !(this.showProgress);
    };
    VrpProgressBarComponent.prototype.reset = function () {
        this.showProgress = false;
        this.summary = [];
        this.remainingPercent = 100;
    };
    VrpProgressBarComponent.prototype.groupBy = function (arr, key) {
        // codes from https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_groupby
        return arr.reduce(function (r, v, _i, _a, k) {
            if (k === void 0) { k = v[key]; }
            return ((r[k] || (r[k] = [])).push(v), r);
        }, {});
    };
    VrpProgressBarComponent.prototype.calPercent = function (count) {
        var percent = Math.ceil(count / this.jobs.length * 100);
        if (percent < this.remainingPercent) {
            this.remainingPercent = this.remainingPercent - percent;
            return percent;
        }
        else {
            return this.remainingPercent;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], VrpProgressBarComponent.prototype, "jobs", void 0);
    VrpProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vrp-progress-bar',template:/*ion-inline-start:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-progress-bar\vrp-progress-bar.html"*/'<div class="progress-bar" text-center tappable (tap)="toggleLegend()">\n\n    <span *ngFor="let progress of summary" class="progress-bar-fill" [ngClass]="progress.color" [ngStyle]="{ width: progress.percent + \'%\'}">{{progress.count}}</span>\n\n    <div class="progress-legend" *ngIf="showProgress">\n\n        <ol>\n\n            <li *ngFor="let progress of summary">\n\n                <span class="bullet" [ngClass]="progress.color"></span> {{progress.title}}\n\n                <span class="percent">{{progress.count}}</span>\n\n            </li>\n\n        </ol>\n\n    </div>\n\n</div>\n\n'/*ion-inline-end:"G:\GLS\TMS SC\driver-3ebd130\src\components\vrp-progress-bar\vrp-progress-bar.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], VrpProgressBarComponent);
    return VrpProgressBarComponent;
}());

//# sourceMappingURL=vrp-progress-bar.js.map

/***/ }),

/***/ 1131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsHandledPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_current_job_current_job__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_classes_job__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_navigation_navigation__ = __webpack_require__(542);
/**
 * @license
 * Copyright Singapore Institute of Manufacturing Technology (SIMTech). All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemsHandledPage = /** @class */ (function (_super) {
    __extends(ItemsHandledPage, _super);
    function ItemsHandledPage(alertCtrl, camera, currentJob, navCtrl, notify, platform) {
        var _this = _super.call(this, { navCtrl: navCtrl, platform: platform }) || this;
        _this.alertCtrl = alertCtrl;
        _this.camera = camera;
        _this.currentJob = currentJob;
        _this.navCtrl = navCtrl;
        _this.notify = notify;
        _this.platform = platform;
        _this.inputType = __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */].setting.item.defaultInput;
        _this.allowSwitchInput = __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */].setting.item.allowSwitchInput;
        _this.inputByKeyboard = (_this.inputType === __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* ItemInputMethod */].Keyboard);
        return _this;
    }
    ItemsHandledPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.job = this.currentJob.getDetails();
        if (!(this.job instanceof __WEBPACK_IMPORTED_MODULE_5__providers_classes_job__["b" /* Job */])) {
            setTimeout(function () { return _this.goHomePage(); });
            return false;
        }
        // items need to init manually to prevent overwriting of original values
        // it's also to ensure that the items data is up-to-date
        this.currentJob.initItems();
    };
    ItemsHandledPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.btnBackEvent = this.overwriteBackBtnEvent(function () {
            var alert = _this.alertCtrl.create({
                title: 'Confirm',
                subTitle: 'Are you sure you want to go back to previous page?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    }, {
                        text: 'Yes',
                        handler: function () {
                            _this.goPreviousPage();
                        },
                    },
                ],
            });
            alert.present();
        });
    };
    ItemsHandledPage.prototype.ionViewDidLeave = function () {
        this.btnBackEvent();
    };
    ItemsHandledPage.prototype.switchInput = function () {
        if (this.allowSwitchInput === true) {
            // toggle input type
            this.inputType = (this.inputType === __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* ItemInputMethod */].Keyboard) ? __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* ItemInputMethod */].Barcode : __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* ItemInputMethod */].Keyboard;
            this.inputByKeyboard = (this.inputType === __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* ItemInputMethod */].Keyboard);
            // clear all input
            this.btnClear();
            // indicate input is by barcode or not
            this.currentJob.inputByBarcode = (this.inputType === __WEBPACK_IMPORTED_MODULE_2__globals__["b" /* ItemInputMethod */].Barcode);
        }
        else {
            this.notify.error('You are not allowed to change input method.');
        }
    };
    ItemsHandledPage.prototype.notifySwitch = function () {
        this.notify.info('Existing input will be cleared. Press and hold button to confirm switch.');
    };
    ItemsHandledPage.prototype.btnConfirm = function () {
        // TODO: check if can use FormBuilder to handle this
        var hasValidItems = this.currentJob.items.find(function (item) { return item.actual > 0; });
        if (hasValidItems) {
            this.goPage('AddNotePage');
        }
        else {
            this.notify.error('At least 1 item must have quantity more than 0.');
        }
    };
    ItemsHandledPage.prototype.btnScan = function (item) {
        var _this = this;
        this.camera.scanBarcode().then(function (scanned) {
            var code = scanned.text;
            if (item.scanned.indexOf(code) > -1) {
                _this.notify.info('Barcode has been scanned before');
            }
            else {
                item.scanned.push(scanned.text);
                item.actual = (item.actual || 0) + 1;
            }
        }).catch(function () { });
    };
    ItemsHandledPage.prototype.btnClear = function () {
        this.currentJob.initItems(true);
    };
    ItemsHandledPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-items-handled',template:/*ion-inline-start:"G:\GLS\TMS SC\driver-3ebd130\src\pages\current-job\items-handled\items-handled.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <vrp-header showDialog="true">{{\'PAGE.ITEMS_HANDLED.Header\' | translate}}</vrp-header>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-list-header color="dark">\n\n            #{{job.DeliveryMasterId}}\n\n            <vrp-jobtype-label [jobtype]="job.JobType" item-end></vrp-jobtype-label>\n\n        </ion-list-header>\n\n\n\n        <ion-item-group *ngIf="currentJob.items.length === 0">\n\n            <ion-card full>\n\n                <ion-card-header text-wrap color="danger">\n\n                    <ion-icon item-start name="warning"></ion-icon> {{\'Error\' | translate}}\n\n                </ion-card-header>\n\n\n\n                <ion-card-content>\n\n                    There are no items to pick-up or deliver.\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-item-group>\n\n\n\n        <ion-item-group *ngIf="allowSwitchInput && currentJob.items.length > 0">\n\n            <ion-item>\n\n                <button ion-button block icon-left padding color="primary" *ngIf="!inputByKeyboard" (tap)="notifySwitch()" (press)="switchInput()">\n\n                    <ion-icon name="keypad"></ion-icon>\n\n                    {{\'PAGE.ITEMS_HANDLED.BtnChangeInput\' | translate}} &nbsp;&nbsp;\n\n                    <strong>{{\'PAGE.ITEMS_HANDLED.Keyboard\' | translate}}</strong>\n\n                </button>\n\n                <button ion-button block icon-left padding color="secondary" *ngIf="inputByKeyboard" (tap)="notifySwitch()" (press)="switchInput()">\n\n                    <ion-icon name="qr-scanner"></ion-icon>\n\n                    {{\'PAGE.ITEMS_HANDLED.BtnChangeInput\' | translate}} &nbsp;&nbsp;\n\n                    <strong>{{\'PAGE.ITEMS_HANDLED.Barcode\' | translate}}</strong>\n\n                </button>\n\n            </ion-item>\n\n        </ion-item-group>\n\n\n\n        <ion-item-group *ngFor="let item of currentJob.items; let i = index">\n\n            <ion-item-divider text-wrap color="light">\n\n                <ion-badge item-start>#{{i+1}}</ion-badge>\n\n                <strong>\n\n                    {{item.name}}\n\n                </strong>\n\n            </ion-item-divider>\n\n\n\n            <ion-item>\n\n                <ion-label stacked>{{\'JOB.DeliveryItemsExpected\' | translate}}</ion-label>\n\n                <ion-input type="text" [value]="item.expected" disabled></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked>{{\'JOB.DeliveryItemsActual\' | translate}}</ion-label>\n\n                <ion-input type="number" [(ngModel)]="item.actual" placeholder="{{(inputByKeyboard ? \'PAGE.ITEMS_HANDLED.KeyboardPlaceholder\' : \'PAGE.ITEMS_HANDLED.ScanBarcodePlaceholder\') | translate}}"\n\n                    [disabled]="!inputByKeyboard" min="0" clearInput></ion-input>\n\n\n\n                <button ion-button icon-only item-end clear color="primary" *ngIf="!inputByKeyboard" (tap)="btnScan(item)">\n\n                    <ion-icon name="barcode"></ion-icon>\n\n                </button>\n\n            </ion-item>\n\n        </ion-item-group>\n\n    </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="hide-on-keyboard-open">\n\n    <ion-grid no-padding>\n\n        <ion-row>\n\n            <ion-col col-6 no-padding>\n\n                <vrp-btn-clear (pressed)="btnClear()"></vrp-btn-clear>\n\n            </ion-col>\n\n\n\n            <ion-col col-6 no-padding>\n\n                <button ion-button full large color="secondary" no-margin (tap)="btnConfirm()">\n\n                    <div>\n\n                        <ion-icon name="return-right"></ion-icon>\n\n                        Proceed\n\n                    </div>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"G:\GLS\TMS SC\driver-3ebd130\src\pages\current-job\items-handled\items-handled.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_current_job_current_job__["a" /* CurrentJobProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__["a" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], ItemsHandledPage);
    return ItemsHandledPage;
}(__WEBPACK_IMPORTED_MODULE_7__providers_navigation_navigation__["a" /* NavigationProvider */]));

//# sourceMappingURL=items-handled.js.map

/***/ })

});
//# sourceMappingURL=18.js.map