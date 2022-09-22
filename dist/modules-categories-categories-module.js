(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-categories-categories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/categories/categories/categories.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/categories/categories/categories.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 text-right\">\r\n                <button type=\"button\" class=\"btn btn-info btn-fill\" (click)=\"newCategory()\" data-toggle=\"modal\"\r\n                  data-target=\"#modalProduct\">\r\n                  <i class=\"fa fa-plus\"></i> Nueva Categoría\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <div class=\"content\">\r\n            <div class=\"fresh-datatables table-responsive\">\r\n              <table id=\"datatablesProduct\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\"\r\n                width=\"100%\" style=\"width:100%\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>{{ dataTable.headerRow[0] }}</th>\r\n                    <th>{{ dataTable.headerRow[1] }}</th>\r\n                    <th>{{ dataTable.headerRow[2] }}</th>\r\n                    <th>{{ dataTable.headerRow[3] }}</th>\r\n                    <th>{{ dataTable.headerRow[4] }}</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let category of arrayCategories; let i = index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{category.id_category | slice:8}}</td>\r\n                    <td>{{category.nombre}}</td>\r\n                    <td>\r\n                      <button type=\"submit\" class=\"btn btn-fill btn-primary btn-sm\" (click)=\"selectCategory(category)\"\r\n                        data-toggle=\"modal\" data-target=\"#modalProduct\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                      </button>\r\n                    </td>\r\n                    <td>\r\n                      <button type=\"submit\" class=\"btn btn-fill btn-danger btn-sm\"\r\n                        (click)=\"deleteCategory(category.id_category)\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- modal product -->\r\n<div class=\"modal fade\" id=\"modalProduct\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalProductLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n            aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"modalProductLabel\">{{isEdit?'Editar Categoría':'Nueva Categoría'}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #formProduct=\"ngForm\" action=\"\" class=\"form-horizontal\"\r\n          (ngSubmit)='addCategory(formProduct.value, formProduct.valid)' novalidate action=\"/\" method=\"get\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <input type=\"text\" readonly class=\"form-control\" name=\"id_category\" id=\"id_category\" placeholder=\"ID\"\r\n                [(ngModel)]=\"category.id_category\" #id_category=\"ngModel\" required pattern=\"\">\r\n              <small [hidden]=\"id_category.valid || (id_category.pristine && !formProduct.submitted)\"\r\n                class=\"text-danger\">\r\n                Obligatorio</small>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <input type=\"text\" class=\"form-control\" name=\"nombre\" id=\"nombre\" placeholder=\"Nombre de la categoría\"\r\n                [(ngModel)]=\"category.nombre\" #nombre=\"ngModel\" required pattern=\"\">\r\n              <small [hidden]=\"nombre.valid || (nombre.pristine && !formProduct.submitted)\" class=\"text-danger\">\r\n                Obligatorio</small>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <button [disabled]='!formProduct.valid' type=\"submit\" class=\"btn btn-fill btn-success btn-wd btn-block\">\r\n                <i *ngIf=\"isEdit\" class=\"fa fa-edit\"></i>\r\n                <i *ngIf=\"!isEdit\" class=\"fa fa-save\"></i>\r\n                {{isEdit?'Editar':'Agregar'}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default btn-simple\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/modules/categories/categories.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/categories/categories.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/modules/categories/categories/categories.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var routes = [{ path: '', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"] }];
var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ }),

/***/ "./src/app/modules/categories/categories/categories.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/categories/categories/categories.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/categories/categories/categories.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/categories/categories/categories.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/categories/categories.service */ "./src/app/services/categories/categories.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
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



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoryService) {
        this.categoryService = categoryService;
        this.isEdit = false;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.category = {};
        this.dataTable = {
            headerRow: [
                "#",
                "ID",
                "Nombre",
                "Editar",
                "Eliminar",
            ],
            dataRows: [],
        };
        this.getCategories();
    };
    /**
   * Optenemos el id de la nueva categoria
   */
    CategoriesComponent.prototype.newCategory = function () {
        this.isEdit = false;
        // optenemos una marca de tiempo timeStamp
        var id = new Date().getTime();
        this.category = {
            id_category: id.toString(),
            nombre: "",
        };
        this.getCategories();
    };
    CategoriesComponent.prototype.addCategory = function (formValue, formValid) {
        var _this = this;
        if (formValid) {
            this.categoryService.saveCategories(formValue).then(function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()("OK", "Registro Exitoso", "success");
                _this.category = {};
                $("#modalProduct").modal("hide");
            });
        }
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (categories) {
            _this.arrayCategories = categories;
        });
    };
    CategoriesComponent.prototype.selectCategory = function (category) {
        this.isEdit = true;
        this.category = category;
        this.categoryService.updateCategory(category);
    };
    CategoriesComponent.prototype.deleteCategory = function (category_id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Alerta',
            text: '¿Esta seguro que desea eliminar la categoría?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-fill btn-success btn-mr-5',
            cancelButtonClass: 'btn btn-fill btn-danger',
            confirmButtonText: 'Sí, eliminar!',
            buttonsStyling: false,
        }).then(function (result) {
            if (result.value) {
                _this.categoryService.deleteCategory(category_id);
            }
        });
    };
    CategoriesComponent.ctorParameters = function () { return [
        { type: app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"] }
    ]; };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __importDefault(__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/categories/categories/categories.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./categories.component.css */ "./src/app/modules/categories/categories/categories.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-categories-categories-module.js.map