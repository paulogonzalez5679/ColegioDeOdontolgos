(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-carrusel-admin-carrusel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-carrusel/admin-carrusel/admin-carrusel.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-carrusel/admin-carrusel/admin-carrusel.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <i class=\"pe-7s-plus\" onclick=\"document.getElementById('addFile').click()\" style=\"font-size: 40px;\"></i> \n    <input id=\"addFile\" style=\"visibility:hidden;\" type=\"file\"  multiple accept=\".jpg,.jpeg,.png,.svg\" (change)=\"setFiles($event)\">\n</div>\n\n<div class=\"container\">\n    <div class=\"col-lg-10\">\n        <div class=\"row\" style=\"margin-left: 5%;\">\n            <!-- <a><img class=\"card-img-top\" src=\"./assets/img/angular.jpg\" alt=\"Card image cap\"></a> -->\n            <div *ngFor=\"let imagenCarrusel of imagenesCarrusel | async\" class=\"col-sm-12 col-md-12 col-lg-4\">\n                <mat-card class=\"example-card\" style=\"margin-top: 15px;\">\n                    <img [src]=\"imagenCarrusel.url\">\n                    <mat-card-actions>\n                        <div>\n                            <input #editar style=\"visibility:hidden;\" type=\"file\" accept=\".jpg,.jpeg,.png,.svg\" (change)=\"editImage(imagenCarrusel, $event)\">\n                            <button mat-button (click)=\"editar.click()\">Editar</button>\n                            <button mat-button (click)=\"deleteImage(imagenCarrusel)\">Eliminar</button>\n                        </div>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/admin-carrusel/admin-carrusel.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin-carrusel/admin-carrusel.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdminCarruselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCarruselModule", function() { return AdminCarruselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _admin_carrusel_admin_carrusel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-carrusel/admin-carrusel.component */ "./src/app/modules/admin-carrusel/admin-carrusel/admin-carrusel.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


//import { MessageComponent } from './message/message.component';







var routes = [{ path: "", component: _admin_carrusel_admin_carrusel_component__WEBPACK_IMPORTED_MODULE_4__["AdminCarruselComponent"] }];
var AdminCarruselModule = /** @class */ (function () {
    function AdminCarruselModule() {
    }
    AdminCarruselModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_admin_carrusel_admin_carrusel_component__WEBPACK_IMPORTED_MODULE_4__["AdminCarruselComponent"]],
            imports: [
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ]
        })
    ], AdminCarruselModule);
    return AdminCarruselModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-carrusel/admin-carrusel/admin-carrusel.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin-carrusel/admin-carrusel/admin-carrusel.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card img{\r\n    -o-object-fit: cover;\r\n       object-fit: cover; \r\n    width: 100%;\r\n    max-height: 150px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1jYXJydXNlbC9hZG1pbi1jYXJydXNlbC9hZG1pbi1jYXJydXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi1jYXJydXNlbC9hZG1pbi1jYXJydXNlbC9hZG1pbi1jYXJydXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQgaW1ne1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/admin-carrusel/admin-carrusel/admin-carrusel.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin-carrusel/admin-carrusel/admin-carrusel.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminCarruselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCarruselComponent", function() { return AdminCarruselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_services_carrusel_carrusel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/carrusel/carrusel.service */ "./src/app/services/carrusel/carrusel.service.ts");
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




var AdminCarruselComponent = /** @class */ (function () {
    function AdminCarruselComponent(dialog, carruselService) {
        this.dialog = dialog;
        this.carruselService = carruselService;
    }
    AdminCarruselComponent.prototype.ngOnInit = function () {
        this.imagenesCarrusel = this.carruselService.getImgCarrusel();
    };
    AdminCarruselComponent.prototype.setFiles = function (event) {
        var _this = this;
        var id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        this.carruselService.uploadCarruselImages(event.target.files).then(function (urls) {
            _this.urlsFirebase = urls;
            _this.urlsFirebase.forEach(function (img) {
                _this.carruselService.createImagesCarrusel({ id: id, idImagen: img.id, url: img.url });
            });
        }).catch(function (e) { return alert(e.message); });
    };
    AdminCarruselComponent.prototype.deleteImage = function (imagenes) {
        // console.log(imagenes.idImagen);
        this.carruselService.deleteImageStorageCarruselById(imagenes.idImagen);
        this.carruselService.deleteImagesCarrusel(imagenes.id);
    };
    ;
    AdminCarruselComponent.prototype.editImage = function (imagenCarrusel, event) {
        var _this = this;
        // console.log(imagenCarrusel);
        this.carruselService.uploadCarruselImages(event.target.files).then(function (urls) {
            _this.urlsFirebase = urls;
            _this.urlsFirebase.forEach(function (img) {
                _this.carruselService.deleteImageStorageCarruselById(imagenCarrusel.idImagen);
                // console.log(this.urlsFirebase);
                _this.carruselService.updateImagenCarrucel(imagenCarrusel.id, { id: imagenCarrusel.id, idImagen: img.id, url: img.url });
            });
        }).catch(function (e) { return alert(e.message); });
    };
    AdminCarruselComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
        { type: app_services_carrusel_carrusel_service__WEBPACK_IMPORTED_MODULE_3__["CarruselService"] }
    ]; };
    AdminCarruselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-carrusel',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin-carrusel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-carrusel/admin-carrusel/admin-carrusel.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./admin-carrusel.component.css */ "./src/app/modules/admin-carrusel/admin-carrusel/admin-carrusel.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], app_services_carrusel_carrusel_service__WEBPACK_IMPORTED_MODULE_3__["CarruselService"]])
    ], AdminCarruselComponent);
    return AdminCarruselComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-carrusel-admin-carrusel-module.js.map