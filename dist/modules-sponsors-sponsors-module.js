(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sponsors-sponsors-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sponsors/add-sponsor/add-sponsor.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sponsors/add-sponsor/add-sponsor.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Agregar un patrocinador</h1>\n<div mat-dialog-content>\n    <div>\n        <img [src]=\"previsualizacion\" class=\"iconoEquipo\">\n    </div>\n    <br>\n    <input style=\"margin-top: 10px; margin-bottom: 15px;\" accept=\".jpg,.jpeg,.png,.svg\" type=\"file\" (change)=\"capturarFile($event)\"/>\n    <br>\n    <mat-form-field style=\"width: 100%;\">\n      <p>Url <input  matInput [(ngModel)]=\"sponsor.sponsor_url\" style=\"margin-top: 10px; margin-bottom: 15px;\"></p>\n    </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"cancelar()\">Cancelar</button>\n  <button mat-button (click)=\"submit()\">Cargar</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sponsors/edit-sponsor/edit-sponsor.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sponsors/edit-sponsor/edit-sponsor.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"fondo\">\n  <h1 mat-dialog-title>Editar</h1>\n  <div mat-dialog-content>\n      <img [src]=\"previsualizacion\" class=\"iconoEquipo\">\n      <input style=\"margin-top: 10px; margin-bottom: 15px;\" accept=\".jpg,.jpeg,.png,.svg\" type=\"file\" (change)=\"capturarFile($event)\"/>\n      <br>\n      <mat-form-field style=\"width: 100%;\">\n        <p>Url <input  matInput [(ngModel)]=\"sponsor.sponsor_url\" style=\"margin-top: 10px; margin-bottom: 15px;\"></p>\n      </mat-form-field>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">Cancelar</button>\n    <button mat-button (click)=\"editSponsor()\">Cargar</button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sponsors/sponsors/sponsors.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sponsors/sponsors/sponsors.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<i class=\"pe-7s-plus\" (click)=\"addSponsor()\" style=\"font-size: 40px;\"></i>\n\n<div class=\"container\">\n            <!-- <a><img class=\"card-img-top\" src=\"./assets/img/angular.jpg\" alt=\"Card image cap\"></a> -->\n            <div *ngFor=\"let sponsor of sponsor | async\">\n                <mat-card>\n                    <mat-card-content *ngFor=\"let image of sponsor.imagen\">\n                        <img class=\"img-company\" [src]=\"image.url\" style=\"margin-top: 2%; margin-bottom: 3%;\">\n                        <p>URL: {{sponsor.sponsor_url}}</p>\n                    </mat-card-content>\n                </mat-card>\n                <button mat-button (click)=\"editMember(sponsor)\">Editar</button>\n                <button mat-button (click)=\"deleteMember(sponsor)\">Eliminar</button>\n            </div>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/sponsors/add-sponsor/add-sponsor.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/sponsors/add-sponsor/add-sponsor.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3BvbnNvcnMvYWRkLXNwb25zb3IvYWRkLXNwb25zb3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sponsors/add-sponsor/add-sponsor.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/sponsors/add-sponsor/add-sponsor.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddSponsorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSponsorComponent", function() { return AddSponsorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_services_sponsor_sponsor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/sponsor/sponsor.service */ "./src/app/services/sponsor/sponsor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AddSponsorComponent = /** @class */ (function () {
    function AddSponsorComponent(dialogRef, sponsorService, sanitizer) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.sponsorService = sponsorService;
        this.sanitizer = sanitizer;
        this.extraerBase64 = function ($event) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            var unsafeImg = window.URL.createObjectURL($event);
                            var image = _this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
                            var reader_1 = new FileReader();
                            reader_1.readAsDataURL($event);
                            reader_1.onload = function () {
                                resolve({
                                    base: reader_1.result
                                });
                            };
                            reader_1.onerror = function (error) {
                                resolve({
                                    base: null
                                });
                            };
                        }
                        catch (e) {
                            return null;
                        }
                    })];
            });
        }); };
    }
    AddSponsorComponent.prototype.ngOnInit = function () {
        this.sponsor = {
            sponsor_id: '',
            sponsor_url: ''
        };
    };
    AddSponsorComponent.prototype.capturarFile = function ($event) {
        var _this = this;
        this.foto = $event.target.files;
        var archivoCapturado = $event.target.files[0];
        this.extraerBase64(archivoCapturado).then(function (imagen) {
            _this.previsualizacion = imagen.base;
        });
    };
    AddSponsorComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddSponsorComponent.prototype.submit = function () {
        var _this = this;
        this.sponsorService.uploadImages(this.foto).then(function (urls) {
            var id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
            _this.sponsor.sponsor_id = id;
            _this.sponsor.imagen = urls;
            _this.sponsorService.createSponsor(_this.sponsor);
        });
        this.dialogRef.close();
    };
    AddSponsorComponent.prototype.cancelar = function () {
    };
    AddSponsorComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: app_services_sponsor_sponsor_service__WEBPACK_IMPORTED_MODULE_4__["SponsorService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    AddSponsorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-sponsor',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-sponsor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sponsors/add-sponsor/add-sponsor.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-sponsor.component.css */ "./src/app/modules/sponsors/add-sponsor/add-sponsor.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], app_services_sponsor_sponsor_service__WEBPACK_IMPORTED_MODULE_4__["SponsorService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], AddSponsorComponent);
    return AddSponsorComponent;
}());



/***/ }),

/***/ "./src/app/modules/sponsors/edit-sponsor/edit-sponsor.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/sponsors/edit-sponsor/edit-sponsor.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#fondo{\r\n    background-color: black;\r\n}\r\n\r\np{\r\n    color: white;\r\n}\r\n\r\nbutton{\r\n    color: white;\r\n}\r\n\r\nimg{\r\n    max-height: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zcG9uc29ycy9lZGl0LXNwb25zb3IvZWRpdC1zcG9uc29yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3BvbnNvcnMvZWRpdC1zcG9uc29yL2VkaXQtc3BvbnNvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZvbmRve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/sponsors/edit-sponsor/edit-sponsor.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/sponsors/edit-sponsor/edit-sponsor.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditSponsorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSponsorComponent", function() { return EditSponsorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var app_services_sponsor_sponsor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/sponsor/sponsor.service */ "./src/app/services/sponsor/sponsor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var EditSponsorComponent = /** @class */ (function () {
    function EditSponsorComponent(dialogRef, sponsor, sanitizer, sponsorService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.sponsor = sponsor;
        this.sanitizer = sanitizer;
        this.sponsorService = sponsorService;
        this.extraerBase64 = function ($event) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            var unsafeImg = window.URL.createObjectURL($event);
                            var image = _this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
                            var reader_1 = new FileReader();
                            reader_1.readAsDataURL($event);
                            reader_1.onload = function () {
                                resolve({
                                    base: reader_1.result
                                });
                            };
                            reader_1.onerror = function (error) {
                                resolve({
                                    base: null
                                });
                            };
                        }
                        catch (e) {
                            return null;
                        }
                    })];
            });
        }); };
    }
    EditSponsorComponent.prototype.ngOnInit = function () {
        this.previsualizacion = this.sponsor.imagen[0].url;
    };
    EditSponsorComponent.prototype.capturarFile = function ($event) {
        var _this = this;
        this.foto = $event.target.files;
        var archivoCapturado = $event.target.files[0];
        this.extraerBase64(archivoCapturado).then(function (imagen) {
            _this.previsualizacion = imagen.base;
        });
    };
    EditSponsorComponent.prototype.editSponsor = function () {
        var _this = this;
        if (this.foto != undefined) {
            this.sponsorService.uploadImages(this.foto).then(function (urls) {
                _this.sponsorService.deleteImageSponsor(_this.sponsor.imagen[0].id);
                _this.sponsor.imagen = urls;
                // console.log(this.sponsor);
                _this.sponsorService.updateSponsor(_this.sponsor);
            });
        }
        else {
            this.sponsorService.updateSponsor(this.sponsor);
        }
        this.foto = undefined;
        this.dialogRef.close();
    };
    ;
    EditSponsorComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditSponsorComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: app_services_sponsor_sponsor_service__WEBPACK_IMPORTED_MODULE_3__["SponsorService"] }
    ]; };
    EditSponsorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-sponsor',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-sponsor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sponsors/edit-sponsor/edit-sponsor.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-sponsor.component.css */ "./src/app/modules/sponsors/edit-sponsor/edit-sponsor.component.css")).default]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            app_services_sponsor_sponsor_service__WEBPACK_IMPORTED_MODULE_3__["SponsorService"]])
    ], EditSponsorComponent);
    return EditSponsorComponent;
}());



/***/ }),

/***/ "./src/app/modules/sponsors/sponsors.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/sponsors/sponsors.module.ts ***!
  \*****************************************************/
/*! exports provided: SponsorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsModule", function() { return SponsorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sponsors/sponsors.component */ "./src/app/modules/sponsors/sponsors/sponsors.component.ts");
/* harmony import */ var _add_sponsor_add_sponsor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-sponsor/add-sponsor.component */ "./src/app/modules/sponsors/add-sponsor/add-sponsor.component.ts");
/* harmony import */ var _edit_sponsor_edit_sponsor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-sponsor/edit-sponsor.component */ "./src/app/modules/sponsors/edit-sponsor/edit-sponsor.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var routes = [{ path: "", component: _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_2__["SponsorsComponent"] }];
var SponsorsModule = /** @class */ (function () {
    function SponsorsModule() {
    }
    SponsorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_2__["SponsorsComponent"], _add_sponsor_add_sponsor_component__WEBPACK_IMPORTED_MODULE_3__["AddSponsorComponent"], _edit_sponsor_edit_sponsor_component__WEBPACK_IMPORTED_MODULE_4__["EditSponsorComponent"]],
            imports: [
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], SponsorsModule);
    return SponsorsModule;
}());



/***/ }),

/***/ "./src/app/modules/sponsors/sponsors/sponsors.component.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/sponsors/sponsors/sponsors.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n    width: 100%;\r\n    /* height: 40px; */\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\nmat-card {\r\n    background-color: black;\r\n}\r\n\r\np{\r\n    color: white;\r\n}\r\n\r\nbutton{\r\n    color: white;\r\n}\r\n\r\n/* .img-company {\r\n    max-width: 100px;\r\n} */\r\n\r\n.container{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));\r\n    gap: 1em;\r\n    grid-template-rows: minmax(15px, auto);\r\n}\r\n\r\n.container::before{\r\n    display: none;\r\n}\r\n\r\n.container div{\r\n    background-color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zcG9uc29ycy9zcG9uc29ycy9zcG9uc29ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxhQUFhO0lBQ2IsNERBQTREO0lBQzVELFFBQVE7SUFDUixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zcG9uc29ycy9zcG9uc29ycy9zcG9uc29ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogaGVpZ2h0OiA0MHB4OyAqL1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5we1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIC5pbWctY29tcGFueSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59ICovXHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1cmVtLCAxZnIpKTtcclxuICAgIGdhcDogMWVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMTVweCwgYXV0byk7XHJcbn1cclxuXHJcbi5jb250YWluZXI6OmJlZm9yZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIgZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/modules/sponsors/sponsors/sponsors.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/sponsors/sponsors/sponsors.component.ts ***!
  \*****************************************************************/
/*! exports provided: SponsorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function() { return SponsorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var app_services_sponsor_sponsor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/sponsor/sponsor.service */ "./src/app/services/sponsor/sponsor.service.ts");
/* harmony import */ var _add_sponsor_add_sponsor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-sponsor/add-sponsor.component */ "./src/app/modules/sponsors/add-sponsor/add-sponsor.component.ts");
/* harmony import */ var _edit_sponsor_edit_sponsor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-sponsor/edit-sponsor.component */ "./src/app/modules/sponsors/edit-sponsor/edit-sponsor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var SponsorsComponent = /** @class */ (function () {
    function SponsorsComponent(dialog, sponsorService) {
        this.dialog = dialog;
        this.sponsorService = sponsorService;
        this.sponsor = [];
    }
    SponsorsComponent.prototype.ngOnInit = function () {
        this.sponsor = this.sponsorService.getSponsor();
    };
    SponsorsComponent.prototype.addSponsor = function () {
        var dialogRef = this.dialog.open(_add_sponsor_add_sponsor_component__WEBPACK_IMPORTED_MODULE_3__["AddSponsorComponent"], {
            width: '550px',
            height: '500px'
        });
    };
    SponsorsComponent.prototype.editMember = function (sponsor) {
        var dialogRef = this.dialog.open(_edit_sponsor_edit_sponsor_component__WEBPACK_IMPORTED_MODULE_4__["EditSponsorComponent"], {
            width: '550px',
            height: '500px',
            data: sponsor,
            panelClass: 'promo-dialog'
        });
    };
    SponsorsComponent.prototype.deleteMember = function (sponsor) {
        var _this = this;
        this.sponsorService.deleteImageSponsor(sponsor.imagen[0].id).then(function () {
            _this.sponsorService.deleteSponsor(sponsor.sponsor_id);
        });
    };
    SponsorsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
        { type: app_services_sponsor_sponsor_service__WEBPACK_IMPORTED_MODULE_2__["SponsorService"] }
    ]; };
    SponsorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sponsors',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sponsors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sponsors/sponsors/sponsors.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sponsors.component.css */ "./src/app/modules/sponsors/sponsors/sponsors.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], app_services_sponsor_sponsor_service__WEBPACK_IMPORTED_MODULE_2__["SponsorService"]])
    ], SponsorsComponent);
    return SponsorsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-sponsors-sponsors-module.js.map