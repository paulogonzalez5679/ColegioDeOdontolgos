(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-team-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/team/add-team/add-team.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/team/add-team/add-team.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Agregar un ingregrante al equipo</h1>\n<div mat-dialog-content>\n  \n    <div>\n        <img [src]=\"previsualizacion\" class=\"iconoEquipo\">\n    </div>\n    <br>\n    <input style=\"margin-top: 10px; margin-bottom: 15px;\" accept=\".jpg,.jpeg,.png,.svg\" type=\"file\" (change)=\"capturarFile($event)\"/>\n    <br>\n    <mat-form-field style=\"width: 100%;\">\n      <p>Nombres <input  matInput [(ngModel)]=\"integrante.team_name\" style=\"margin-top: 10px; margin-bottom: 15px;\"></p>\n    </mat-form-field>\n    <br>\n    <mat-form-field style=\"width: 100%;\">\n      <p>Telefonos<input  matInput [(ngModel)]=\"integrante.team_contact\" style=\"margin-top: 10px; margin-bottom: 15px;\"></p>\n    </mat-form-field>\n    <br>\n    <mat-form-field style=\"width: 100%;\">\n      <p>Correo<input  matInput [(ngModel)]=\"integrante.team_email\" style=\"margin-top: 10px; margin-bottom: 15px;\"></p>\n    </mat-form-field>\n    <br>\n    <mat-form-field style=\"width: 100%;\">\n      <p>Cargo<input  matInput [(ngModel)]=\"integrante.team_position\" style=\"margin-top: 10px; margin-bottom: 15px;\"></p>\n    </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"cancelar()\">Cancelar</button>\n  <button mat-button (click)=\"submit()\">Cargar</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/team/edit-team/edit-team.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/team/edit-team/edit-team.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Editar</h1>\n<div mat-dialog-content>\n    <img [src]=\"previsualizacion\" class=\"iconoEquipo\">\n    <input style=\"margin-top: 10px; margin-bottom: 15px;\" accept=\".jpg,.jpeg,.png,.svg\" type=\"file\" (change)=\"capturarFile($event)\"/>\n    <br>\n    <mat-form-field style=\"width: 100%;\">\n      <p>Nombres <input  matInput [(ngModel)]=\"member.team_name\" style=\"margin-top: 10px; margin-bottom: 15px;\"></p>\n    </mat-form-field>\n    <br>\n    <mat-form-field style=\"width: 100%;\">\n      <p>Telefonos<input  matInput [(ngModel)]=\"member.team_contact\" style=\"margin-top: 10px; margin-bottom: 15px;\"></p>\n    </mat-form-field>\n    <br>\n    <mat-form-field style=\"width: 100%;\">\n      <p>Correo<input  matInput [(ngModel)]=\"member.team_email\" style=\"margin-top: 10px; margin-bottom: 15px;\"></p>\n    </mat-form-field>\n    <br>\n    <mat-form-field style=\"width: 100%;\">\n      <p>Cargo<input  matInput [(ngModel)]=\"member.team_position\" style=\"margin-top: 10px; margin-bottom: 15px;\"></p>\n    </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancelar</button>\n  <button mat-button (click)=\"editMember()\">Cargar</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/team/team/team.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/team/team/team.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    <i class=\"pe-7s-plus\" (click)=\"addMember()\" style=\"font-size: 40px;\"></i>\n</p>\n\n<div class=\"container\">\n    <div class=\"col-lg-10\">\n        <div class=\"row\" style=\"margin-left: 5%;\">\n            <!-- <a><img class=\"card-img-top\" src=\"./assets/img/angular.jpg\" alt=\"Card image cap\"></a> -->\n            <div *ngFor=\"let member of team | async\" class=\"col-sm-12 col-md-12 col-lg-4\">\n                <mat-card class=\"example-card\" style=\"margin-top: 15px;\">\n                    <mat-card-title class=\"titulos\">{{member.team_name}}</mat-card-title>\n                    <mat-card-content *ngFor=\"let image of member.imagen\">\n                        <img [src]=\"image.url\" style=\"margin-top: 2%; margin-bottom: 3%;\">\n                        <p>Cargo: {{member.team_position}}</p>\n                        <p>Contactos: {{member.team_contact}}</p>\n                        <p>Correo: {{member.team_email}}</p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                        <button mat-button (click)=\"editMember(member)\">Editar</button>\n                        <button mat-button (click)=\"deleteMember(member)\">Eliminar</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/team/add-team/add-team.component.css":
/*!**************************************************************!*\
  !*** ./src/app/modules/team/add-team/add-team.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconoEquipo {\r\n    width: 100%;\r\n    height: 250px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90ZWFtL2FkZC10ZWFtL2FkZC10ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RlYW0vYWRkLXRlYW0vYWRkLXRlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ub0VxdWlwbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/team/add-team/add-team.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/team/add-team/add-team.component.ts ***!
  \*************************************************************/
/*! exports provided: AddTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeamComponent", function() { return AddTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var app_services_team_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/team/team.service */ "./src/app/services/team/team.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
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





var AddTeamComponent = /** @class */ (function () {
    function AddTeamComponent(dialogRef, teamService, sanitizer) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.teamService = teamService;
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
    AddTeamComponent.prototype.ngOnInit = function () {
        this.integrante = {
            team_id: '',
            team_name: '',
            team_contact: '',
            team_email: '',
            team_position: ''
        };
    };
    AddTeamComponent.prototype.capturarFile = function ($event) {
        var _this = this;
        this.foto = $event.target.files;
        var archivoCapturado = $event.target.files[0];
        this.extraerBase64(archivoCapturado).then(function (imagen) {
            _this.previsualizacion = imagen.base;
        });
    };
    AddTeamComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddTeamComponent.prototype.submit = function () {
        var _this = this;
        this.teamService.uploadImages(this.foto).then(function (urls) {
            var id = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
            _this.integrante.team_id = id;
            _this.integrante.imagen = urls;
            _this.teamService.createMember(_this.integrante);
        });
        this.dialogRef.close();
    };
    AddTeamComponent.prototype.cancelar = function () {
    };
    AddTeamComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: app_services_team_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    AddTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-team',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/team/add-team/add-team.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-team.component.css */ "./src/app/modules/team/add-team/add-team.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], app_services_team_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], AddTeamComponent);
    return AddTeamComponent;
}());



/***/ }),

/***/ "./src/app/modules/team/edit-team/edit-team.component.css":
/*!****************************************************************!*\
  !*** ./src/app/modules/team/edit-team/edit-team.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconoEquipo {\r\n    width: 50%;\r\n    height: 250px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90ZWFtL2VkaXQtdGVhbS9lZGl0LXRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0JBQWlCO09BQWpCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVhbS9lZGl0LXRlYW0vZWRpdC10ZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbm9FcXVpcG8ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/team/edit-team/edit-team.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/team/edit-team/edit-team.component.ts ***!
  \***************************************************************/
/*! exports provided: EditTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamComponent", function() { return EditTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var app_services_team_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/team/team.service */ "./src/app/services/team/team.service.ts");
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




var EditTeamComponent = /** @class */ (function () {
    function EditTeamComponent(dialogRef, member, sanitizer, teamService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.member = member;
        this.sanitizer = sanitizer;
        this.teamService = teamService;
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
    EditTeamComponent.prototype.ngOnInit = function () {
        this.previsualizacion = this.member.imagen[0].url;
    };
    EditTeamComponent.prototype.capturarFile = function ($event) {
        var _this = this;
        this.foto = $event.target.files;
        var archivoCapturado = $event.target.files[0];
        this.extraerBase64(archivoCapturado).then(function (imagen) {
            _this.previsualizacion = imagen.base;
        });
    };
    EditTeamComponent.prototype.editMember = function () {
        var _this = this;
        if (this.foto != undefined) {
            this.teamService.uploadImages(this.foto).then(function (urls) {
                _this.teamService.deleteImageMember(_this.member.imagen[0].id);
                _this.member.imagen = urls;
                _this.teamService.updateMember(_this.member);
            });
        }
        else {
            this.teamService.updateMember(this.member);
        }
        this.foto = undefined;
        this.dialogRef.close();
    };
    ;
    EditTeamComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditTeamComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: app_services_team_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"] }
    ]; };
    EditTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-team',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/team/edit-team/edit-team.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-team.component.css */ "./src/app/modules/team/edit-team/edit-team.component.css")).default]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            app_services_team_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"]])
    ], EditTeamComponent);
    return EditTeamComponent;
}());



/***/ }),

/***/ "./src/app/modules/team/team.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/team/team.module.ts ***!
  \*********************************************/
/*! exports provided: TeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamModule", function() { return TeamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team/team.component */ "./src/app/modules/team/team/team.component.ts");
/* harmony import */ var _add_team_add_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-team/add-team.component */ "./src/app/modules/team/add-team/add-team.component.ts");
/* harmony import */ var _edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-team/edit-team.component */ "./src/app/modules/team/edit-team/edit-team.component.ts");
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











var routes = [{ path: "", component: _team_team_component__WEBPACK_IMPORTED_MODULE_2__["TeamComponent"] }];
var TeamModule = /** @class */ (function () {
    function TeamModule() {
    }
    TeamModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_team_team_component__WEBPACK_IMPORTED_MODULE_2__["TeamComponent"], _add_team_add_team_component__WEBPACK_IMPORTED_MODULE_3__["AddTeamComponent"], _edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_4__["EditTeamComponent"]],
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
    ], TeamModule);
    return TeamModule;
}());



/***/ }),

/***/ "./src/app/modules/team/team/team.component.css":
/*!******************************************************!*\
  !*** ./src/app/modules/team/team/team.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n    width: 100% !important;\r\n    height: 250px !important;\r\n    -o-object-fit: cover !important;\r\n       object-fit: cover !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90ZWFtL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QiwrQkFBNEI7T0FBNUIsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy90ZWFtL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/modules/team/team/team.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/team/team/team.component.ts ***!
  \*****************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var app_services_team_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/team/team.service */ "./src/app/services/team/team.service.ts");
/* harmony import */ var _add_team_add_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-team/add-team.component */ "./src/app/modules/team/add-team/add-team.component.ts");
/* harmony import */ var _edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-team/edit-team.component */ "./src/app/modules/team/edit-team/edit-team.component.ts");
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





var TeamComponent = /** @class */ (function () {
    function TeamComponent(dialog, teamService) {
        this.dialog = dialog;
        this.teamService = teamService;
        this.team = [];
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.team = this.teamService.getTeam();
    };
    TeamComponent.prototype.addMember = function () {
        var dialogRef = this.dialog.open(_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_3__["AddTeamComponent"], {
            width: '550px',
            height: '500px'
        });
    };
    TeamComponent.prototype.editMember = function (member) {
        var dialogRef = this.dialog.open(_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_4__["EditTeamComponent"], {
            width: '550px',
            height: '500px',
            data: member,
        });
    };
    TeamComponent.prototype.deleteMember = function (member) {
        var _this = this;
        this.teamService.deleteImageMember(member.imagen[0].id).then(function () {
            _this.teamService.deleteMember(member.team_id);
        });
    };
    TeamComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
        { type: app_services_team_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"] }
    ]; };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __importDefault(__webpack_require__(/*! raw-loader!./team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/team/team/team.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./team.component.css */ "./src/app/modules/team/team/team.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], app_services_team_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-team-team-module.js.map