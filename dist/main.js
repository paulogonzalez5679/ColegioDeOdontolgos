(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--SECCION INICIO-->\r\n\r\n<!-- *** Navbar *** -->\r\n<section>\r\n  <div class=\"row row-w-100\">\r\n    <div class=\"col-sm-12\" style=\"padding: 0px !important; margin: 0px !important;\">\r\n      <nav #pagesnavbar class=\"navbar navbar-primary navDimensiones\">\r\n        <div class=\"container\">\r\n          <div class=\"navbar-header\" style=\"min-width: 100%;\">\r\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\r\n              <span class=\"sr-only\">Toggle navigation</span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n            </button>\r\n          </div>\r\n          <div class=\"collapse navbar-collapse\" style=\"margin-top: 0px !important;\">\r\n            <ul class=\"nav navbar-nav  text-center\">\r\n              <li data-toggle=\"modal\" data-target=\"#modalLogin\">\r\n                <img class=\"imgNav menu\" src=\"../../assets/img/logo.png\" alt=\"logo\">\r\n              </li>\r\n              <li class=\"li-menu\">\r\n                <a (click)=\"viewRouter('#inicio', 500)\" class=\"menu opcMenu\">INICIO</a>\r\n              </li>\r\n              <li class=\"li-menu\">\r\n                <a (click)=\"viewRouter('#quienes', 700)\" class=\"menu opcMenu\">¿QUIÉNES SOMOS?</a>\r\n              </li>\r\n              <li class=\"li-menu\">\r\n                <a (click)=\"viewRouter('#productos', 900)\" class=\"menu opcMenu\">EVENTOS</a>\r\n              </li>\r\n              <li class=\"li-menu\">\r\n                <a (click)=\"viewRouter('#convenios', 900)\" class=\"menu opcMenu\">CONVENIOS</a>\r\n              </li>\r\n              <li class=\"li-menu\">\r\n                <a (click)=\"viewRouter('#equipo', 1100)\" class=\"menu opcMenu\">DIRECTORIO</a>\r\n              </li>\r\n              <li class=\"li-menu\">\r\n                <a (click)=\"viewRouter('#contactos', 1100)\" class=\"menu opcMenu\">CONTACTOS</a>\r\n              </li>\r\n              <li class=\"li-menu\">\r\n                <a (click)=\"redirectRegistration()\" class=\"menu opcMenu\">REGISTRATE</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- *** /Navbar *** -->\r\n\r\n<section id=\"registro\">\r\n  <div *ngIf=\"registrationFlag==true\">\r\n    <app-user-registration></app-user-registration>\r\n  </div>\r\n</section>\r\n\r\n<div *ngIf=\"registrationFlag==false\">\r\n  \r\n  <!-- *** Home *** -->\r\n  <section id=\"inicio\" class=\"section-init\">\r\n    <div class=\"row row-init row-w-100\">\r\n      <div class=\"col-sm-12 col-md-10 col-lg-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 col-init\">\r\n            <!-- <img class=\"imgLogo\" data-aos=\"zoom-in\" data-aos-duration=\"1500\" src=\"../../assets/img/logo.png\"\r\n              alt=\"logo\"> -->\r\n              <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                <!-- Wrapper for slides -->\r\n                <div class=\"carousel-inner\">\r\n                  <div class=\"item\" *ngFor=\"let previa of imagenesCarrusel | async; let i = index\"\r\n                    [ngClass]=\"{'active': i == 0 }\" >\r\n                      <img  class=\"redux-img\" [src]=\"previa.url\">\r\n                  </div>\r\n                </div>\r\n              \r\n                <!-- Left and right controls -->\r\n                <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n                  <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n                  <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n                <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n                  <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n                  <span class=\"sr-only\">Next</span>\r\n                </a>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-4 col-lg-4\">\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- *** /Home *** -->\r\n\r\n  <!-- *** Quienes somos? *** -->\r\n  <section id=\"quienes\">\r\n    <div class=\"row row-w-100\">\r\n      <div class=\"col-sm-5\" style=\"padding: 0px;\">\r\n        <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"rectangulo2 text-center\" style=\"max-width: 100%;\">\r\n          <h1 class=\"h4QuienesSomos\">\r\n            ¿Quiénes Somos?\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"row row-w-100 quienesSomos\" style=\"min-height: 60vh;\">\r\n    <div class=\"col-sm-12 row-w-100\">\r\n      <div class=\"row row-w-90\">\r\n        <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-12 col-md-5 col-lg-5 diseñoQuienes\">\r\n          <p class=\"tituloQuienesSomos\">\r\n            REPRESENTACIÓNES\r\n            PEDRO ARANEDA FERRER E HIJOS CÍA.\r\n            LTDA.\r\n          </p>\r\n          <div class=\"text-center\">\r\n            <img class=\"logoQuienesSomos\" src=\"../../assets/img/Elementos-04.svg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-7 col-lg-7\">\r\n          <div data-aos=\"zoom-in\" data-aos-duration=\"1500\" class=\"row\" class=\"quienesSomosDerecha\">\r\n            <img class=\"esquinaSUPERIORQUIENES\" src=\"../../assets/img/Elementos-06.svg\" alt=\"\">\r\n            <p class=\"textoQuienesSomos text-center\">El COLEGIO DE ODONTÓLOGOS DEL AZUAY, se constituye como una organización de derecho privado, con personería jurídica \r\n              propia, con patrimonio y administración autónoma, sin fines de lucro y con finalidad social y no podrá participar en actividades de carácter político, \r\n              partidista o religioso. Podrá ejercer derechos y contraer obligaciones, teniendo como marco legal el ordenamiento jurídico vigente y este estatuto.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <img class=\"esquinaINFERIORQUIENES\" src=\"../../assets/img/Elementos-07.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  </section>\r\n  <!-- *** Quienes somos? *** -->\r\n\r\n  <!-- *** Mision valor valores *** -->\r\n  <section class=\"quienesSomos2\">\r\n    <div class=\"row row-w-90\">\r\n\r\n      <div data-aos=\"zoom-in\" data-aos-duration=\"1500\" class=\"col-sm-12 col-md-6 col-lg-6 text-center\">\r\n        <div class=\"fondoAzul\">\r\n          <div class=\"fondoBlanco\">\r\n            <img class=\"circulo\" src=\"../../assets/img/Elementos-10.svg\" alt=\"\">\r\n            <p class=\"p-title-mision\">MISIÓN</p>\r\n            <br><br>\r\n            <p class=\"text-center p-mision\" *ngFor=\"let mission of mision | async trackBy: trackByFn\">\r\n              {{mission.mision}}\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div data-aos=\"zoom-in\" data-aos-duration=\"1500\" class=\"col-sm-12 col-md-6 col-lg-6 text-center\">\r\n        <div class=\"fondoAzul\">\r\n          <div class=\"fondoBlanco\">\r\n            <img class=\"circulo\" src=\"../../assets/img/Elementos-11.svg\" alt=\"\">\r\n            <p class=\"p-title-mision\">VISIÓN</p>\r\n            <br><br>\r\n            <p class=\"text-center p-mision\" *ngFor=\"let vision of vision | async trackBy: trackByFn\">\r\n              {{vision.vision}}\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- *** Mision valor valores *** -->\r\n\r\n  <!-- *** Titulo Eventos *** -->\r\n  <section id=\"productos\">\r\n    <div style=\"height: 75px;\"></div>\r\n    <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"row row-w-100\">\r\n      <div class=\"col-sm-5\" style=\"padding: 0px;\">\r\n        <div class=\"rectangulo2 text-center\" style=\"max-width: 100%;\">\r\n          <h1 class=\"h4QuienesSomos\">\r\n            EVENTOS\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- *** Titulo Eventos *** -->\r\n\r\n\r\n  <!-- *** Eventos *** -->\r\n  <section>\r\n    <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"row row-w-100\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <br><br>\r\n        <div class=\"row row-w-100\">\r\n          <app-list-events></app-list-events>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- *** /Eventos *** -->\r\n\r\n   <!-- *** Titulo Convenios *** -->\r\n   <section id=\"convenios\">\r\n    <div style=\"height: 75px;\"></div>\r\n    <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"row row-w-100\">\r\n      <div class=\"col-sm-5\" style=\"padding: 0px;\">\r\n        <div class=\"rectangulo2 text-center\" style=\"max-width: 100%;\">\r\n          <h1 class=\"h4QuienesSomos\">\r\n            CONVENIOS\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- *** Titulo Convenios *** -->\r\n\r\n  <!-- *** convenios *** -->\r\n  <section>\r\n    <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"row row-w-100\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <br><br>\r\n        <div class=\"row row-w-100\">\r\n          <app-list-conventions></app-list-conventions>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- *** /Convenios *** -->\r\n\r\n  <!-- *** Sponsors *** -->\r\n  <section style=\"margin-top: 160px;\">\r\n    <div class=\"row row-w-100\" style=\"background-color: #000000;\">\r\n      <div *ngFor=\"let sponsor of sponsors | async\" class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\">\r\n        <div *ngFor=\"let imagen of sponsor.imagen\" class=\"row div-company\">\r\n          <a [href]=\"sponsor.sponsor_url\" target=\"_blank\"><img class=\"img-company\" [src]=\"imagen.url\"></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- *** /Sponsors *** -->\r\n\r\n  <!-- *** Servicios *** -->\r\n  <!-- <section class=\"fondoservicio\" id=\"servicios\" style=\"padding-top: 160px;\">\r\n    <div class=\"row row-w-100\">\r\n      <div class=\"col-sm-5\" style=\"padding: 0px;\">\r\n        <div data-aos=\"zoom-in\" data-aos-duration=\"1500\" class=\"rectangulo2 text-center\" style=\"max-width: 100%;\">\r\n          <h1 class=\"h4QuienesSomos\">\r\n            Servicios\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row row-w-100\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"row row-w-90\">\r\n          <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-12 col-md-6 col-lg-6 serviciosRow-1\">\r\n            <h2 class=\"titutuloServicio\">ARANEDA</h2>\r\n            <h2 class=\"subtitutuloServicio\"> sigue trabajando</h2>\r\n            <p class=\"textServicio\">\r\n              Para ofrecer servicios de valor añadido que vayan\r\n              más allá de la venta y el suministro de equipos,\r\n              reactivos e insumos médicos para laboratorio clínico.\r\n            </p>\r\n            <button (click)=\"viewRouter('#contactos', 600)\" class=\"btn botonServicio\">CONTACTOS</button>\r\n          </div>\r\n          <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-12 col-md-6 col-lg-6\">\r\n            <img class=\"logoServicios\" src=\"../../assets/img/ImagenServicios.png\" alt=\"logo\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-w-90\">\r\n          <div class=\"col-sm-12\">\r\n            <img class=\"esquina\" src=\"../../assets/img/Elementos-26.svg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row row-w-100 row-service\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"row row-w-90\">\r\n          <div data-aos=\"zoom-in\" data-aos-duration=\"1500\" class=\"col-sm-12 col-md-6 col-lg-6\">\r\n            <img class=\"logoServicios\" src=\"../../assets/img/Servicio de Ingenieria.png\" alt=\"logo\">\r\n          </div>\r\n          <div data-aos=\"zoom-in\" data-aos-duration=\"1500\" class=\"col-sm-12 col-md-6 col-lg-6 serviciosRow-2\">\r\n            <h2 class=\"titutuloServicio\">Servicio de</h2>\r\n            <h2 class=\"titutuloServicio\">Ingeniería</h2>\r\n            <ul class=\"text-left textServicio\" style=\"list-style: none;\">\r\n              <li style=\"margin-top: 13px;\">– Asesoría técnica pre venta</li>\r\n              <li style=\"margin-top: 13px;\">– Instalaciones, mantenimientos preventivos,correctivos, emergentes y\r\n                predictivos\r\n              </li>\r\n              <li style=\"margin-top: 13px;\">– Servicio post venta personalizado</li>\r\n              <li style=\"margin-top: 13px;\">– Descontaminación de equipos</li>\r\n              <li style=\"margin-top: 13px;\">– Actualizaciones continuas de software</li>\r\n              <li style=\"margin-top: 13px;\">– Servicio de soporte remoto</li>\r\n              <li style=\"margin-top: 13px;\">– Servicio de soporte primer nivel 24 horas 1800110110</li>\r\n              <li style=\"margin-top: 13px;\">– Servicio de soporte de segundo y tercer nivel.</li>\r\n            </ul>\r\n            <button (click)=\"viewRouter('#contactos', 600)\" class=\"btn botonServicio\">CONTACTOS</button>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-w-90\">\r\n          <div class=\"col-sm-12\">\r\n            <img class=\"esquina-2\" src=\"../../assets/img/Elementos-27.svg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row row-w-100\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"row row-w-90\">\r\n          <div data-aos=\"zoom-in\" data-aos-duration=\"1500\" class=\"col-sm-12 col-md-6 col-lg-6 serviciosRow-3\">\r\n            <h2 class=\"titutuloServicio\">Servicio de</h2>\r\n            <h2 class=\"titutuloServicio\">de aplicaciones</h2>\r\n            <ul class=\"textServicio\">\r\n              <li class=\"li-services\">– Asesoría integra pre venta y post venta</li>\r\n              <li class=\"li-services\">– Servicio de calibraciones</li>\r\n              <li class=\"li-services\">– Servicio de control de calidad</li>\r\n              <li class=\"li-services\">– Capacitaciones en el manejo correcto de <br>instrumentos de laboratorio</li>\r\n              <li class=\"li-services\">– Guiarles en el buen funcionamiento <br>de sus laboratorios</li>\r\n            </ul>\r\n            <button (click)=\"viewRouter('#contactos', 600)\" class=\"btn botonServicio\">CONTACTOS</button>\r\n\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-6 col-lg-6\">\r\n            <img data-aos=\"zoom-in\" data-aos-duration=\"1500\" class=\"logoServicios\"\r\n              src=\"../../assets/img/Servicio de Aplicaciones.png\" alt=\"logo\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-w-90\">\r\n          <div class=\"col-sm-12\">\r\n            <img class=\"esquina\" src=\"../../assets/img/Elementos-26.svg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <br><br> -->\r\n  <!-- *** /Servicios *** -->\r\n\r\n  <!-- *** Equipo *** -->\r\n  <section class=\"equipo\" id=\"equipo\">\r\n    <div class=\"row row-w-100\">\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-5\" style=\"padding: 0px;\">\r\n        <div class=\"rectangulo2 text-center\" style=\"max-width: 100%;\">\r\n          <h1 class=\"h4QuienesSomos\">\r\n            Nuestro equipo\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <app-list-team></app-list-team>\r\n    </div>\r\n    <!-- <div class=\"row row-w-90 row-equipo\">\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-4 col-md-1 text-center\">\r\n        <img class=\"iconoEquipo\" src=\"../../assets/img/Elementos-36.svg\" alt=\"Icono equipo\">\r\n      </div>\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-8 col-md-5\">\r\n        <ul class=\"ul-equipo\">\r\n          <li class=\"nombreEquipo\">TEC. SIST. XIMENA PAUCAR</li>\r\n          <li class=\"numeroContacto\">072814911 / 0999099339</li>\r\n          <li class=\"emailContacto\">ximena.paucar@araneda.com.ec</li>\r\n          <li> <span class=\"tituloContacto\">COMPRAS PÚBLICAS</span></li>\r\n        </ul>\r\n      </div>\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-4 col-md-1 text-center\">\r\n        <img class=\"iconoEquipo\" src=\"../../assets/img/Elementos-36.svg\" alt=\"Icono equipo\">\r\n      </div>\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-8 col-md-5\">\r\n        <ul class=\"ul-equipo\">\r\n          <li class=\"nombreEquipo\">DRA. MARÍA JOSÉ CAMPOVERDE</li>\r\n          <li class=\"numeroContacto\">072814911 / 0968158603</li>\r\n          <li class=\"emailContacto\" style=\"font-size: 15px;\">mariajose.campoverde@araneda.com.ec</li>\r\n          <li><span class=\"tituloContacto\">COORDINADOR DE LA CALIDADL</span></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"row row-w-90 row-equipo\">\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-4 col-md-1 text-center\">\r\n        <img class=\"iconoEquipo\" src=\"../../assets/img/Elementos-36.svg\" alt=\"Icono equipo\">\r\n      </div>\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-8 col-md-5\">\r\n        <ul class=\"ul-equipo\">\r\n          <li class=\"nombreEquipo\">ING. CPA. EULALIA CUZCO</li>\r\n          <li class=\"numeroContacto\">072814911 / 0968817095</li>\r\n          <li class=\"emailContacto\">eulalia.cuzco@araneda.com.ec</li>\r\n          <li><span class=\"tituloContacto\">CONTADOR</span></li>\r\n        </ul>\r\n      </div>\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-4 col-md-1 text-center\">\r\n        <img class=\"iconoEquipo\" src=\"../../assets/img/Elementos-36.svg\" alt=\"Icono equipo\">\r\n      </div>\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-8 col-md-5\">\r\n        <ul class=\"ul-equipo\">\r\n          <li class=\"nombreEquipo\">ELIZABETH NAULA</li>\r\n          <li class=\"numeroContacto\">072814911 / 0984736699</li>\r\n          <li class=\"emailContacto\">eliza.naula@araneda.com.ec</li>\r\n          <li> <span class=\"tituloContacto\">AUXILIAR CONTABLE</span></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"row row-w-90 row-equipo\">\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-4 col-md-1 text-center\">\r\n        <img class=\"iconoEquipo\" src=\"../../assets/img/Elementos-35.svg\" alt=\"Icono equipo\">\r\n      </div>\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-8 col-md-5\">\r\n        <ul class=\"ul-equipo\">\r\n          <li class=\"nombreEquipo\">ING. DIEGO NARVÁEZ</li>\r\n          <li class=\"numeroContacto\">072814911 / 0979785752</li>\r\n          <li class=\"emailContacto\">pedro.araneda@pedroaraneda.net</li>\r\n          <li><span class=\"tituloContacto\">INGENIERÍA - AZUAY</span></li>\r\n        </ul>\r\n      </div>\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-4 col-md-1 text-center\">\r\n        <img class=\"iconoEquipo\" src=\"../../assets/img/Elementos-35.svg\" alt=\"Icono equipo\">\r\n      </div>\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-8 col-md-5\">\r\n        <ul class=\"ul-equipo\">\r\n          <li class=\"nombreEquipo\">ING. MARLON FEIJOO</li>\r\n          <li class=\"numeroContacto\">072814911 / 0991705364</li>\r\n          <li class=\"emailContacto\">marlon.feijoo@araneda.com.ec</li>\r\n          <li> <span class=\"tituloContacto\">INGENIERÍA - ORO</span></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"row row-w-90 row-equipo\">\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-4 col-md-1 text-center\">\r\n        <img class=\"iconoEquipo\" src=\"../../assets/img/Elementos-35.svg\" alt=\"Icono equipo\">\r\n      </div>\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-8 col-md-5\">\r\n        <ul class=\"ul-equipo\">\r\n          <li class=\"nombreEquipo\">JUAN PABLO ERAZO</li>\r\n          <li class=\"numeroContacto\">072814911</li>\r\n          <li class=\"emailContacto\">juan.erazo@pedroaraneda.net</li>\r\n          <li><span class=\"tituloContacto\">INGENIERÍA - LOJA</span></li>\r\n        </ul>\r\n      </div>\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-4 col-md-1 text-center\">\r\n        <img class=\"iconoEquipo\" src=\"../../assets/img/Elementos-35.svg\" alt=\"Icono equipo\">\r\n      </div>\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-8 col-md-5\">\r\n        <ul class=\"ul-equipo\">\r\n          <li class=\"nombreEquipo\">LIC.DAVID SÁNCHEZ</li>\r\n          <li class=\"numeroContacto\">072814911 / 0991705364</li>\r\n          <li class=\"emailContacto\">marlon.feijoo@araneda.com.ec</li>\r\n          <li> <span class=\"tituloContacto\">INGENIERÍA - AZUAY/ORO</span></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"row row-w-90 row-equipo\">\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-4 col-md-1 text-center\">\r\n        <img class=\"iconoEquipo\" src=\"../../assets/img/Elementos-35.svg\" alt=\"Icono equipo\">\r\n      </div>\r\n      <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"col-sm-8 col-md-5\">\r\n        <ul class=\"ul-equipo\">\r\n          <li class=\"nombreEquipo\">LIC. ERIC CAPRILES</li>\r\n          <li class=\"numeroContacto\">072814911</li>\r\n          <li class=\"emailContacto\">juan.erazo@pedroaraneda.net</li>\r\n          <li><span class=\"tituloContacto\">INGENIERÍA - LOJA</span></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-sm-4 col-md-1 text-center\">\r\n        <img class=\"iconoEquipo\" src=\"../../assets/img/Elementos-35.svg\" alt=\"Icono equipo\">\r\n      </div>\r\n      <div class=\"col-sm-8 col-md-5\">\r\n\r\n      </div> -->\r\n    <!-- </div> -->\r\n  </section>\r\n  <!-- *** /Equipo *** -->\r\n\r\n  <!-- *** Contactos *** -->\r\n\r\n  <br>\r\n  <section id=\"contactos\">\r\n    <div class=\"row row-w-100\">\r\n      <div data-aos=\"zoom-in\" data-aos-duration=\"1500\" class=\"col-sm-5\" style=\"padding: 0px;\">\r\n        <div class=\"rectangulo2 text-center\" style=\"max-width: 100%;\">\r\n          <h1 class=\"h4QuienesSomos\">\r\n            Contactos\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div data-aos=\"fade-up\" data-aos-duration=\"1500\" class=\"row row-w-80 section-contac\">\r\n      <div class=\"col-sm-12 col-md-5 col-lg-5\">\r\n        <div class=\"row row-contact\">\r\n          <div class=\"col-sm-3 col-md-3 text-center\">\r\n            <img class=\"logoContactanos\" src=\"../../assets/img/Elementos-28.svg\" alt=\"logo\">\r\n          </div>\r\n          <div class=\"col-sm-9 col-md-9\">\r\n            <p class=\"textoContactanos\">\r\n              Cornelio Merchán 7-95 y Jesús Dávila esq.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-contact\">\r\n          <div class=\"col-sm-3 col-md-3 text-center\">\r\n            <img class=\"logoContactanos\" src=\"../../assets/img/Elementos-29.svg\" alt=\"logo\">\r\n          </div>\r\n          <div class=\"col-sm-9 col-md-9\">\r\n            <p class=\"textoContactanos\">\r\n              +593 (07) 2810 937\r\n              <br>\r\n              +593 99 555 2293\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-contact\">\r\n          <div class=\"col-sm-3 col-md-3 text-center\">\r\n            <img class=\"logoContactanos\" src=\"../../assets/img/Elementos-30.svg\" alt=\"logo\">\r\n          </div>\r\n          <div class=\"col-sm-9 col-md-9\">\r\n            <p class=\"textoContactanos\">\r\n              Lunes - Viernes\r\n              <br>\r\n              08h00 – 18h00 \r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-contact\">\r\n          <div class=\"col-sm-3 col-md-3 text-center\">\r\n            <img class=\"logoContactanos\" src=\"../../assets/img/Elementos-31.svg\" alt=\"logo\">\r\n          </div>\r\n          <div class=\"col-sm-9 col-md-9\">\r\n            <br>\r\n            <p class=\"textoContactanos\">\r\n              \r\n              coaodont@hotmail.com\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-contact\">\r\n          <div class=\"col-xs-4 col-sm-4 text-center\">\r\n            <a href=\"https://www.facebook.com/coa.azuay\" target=\"_blank\"><img class=\"redesRectanguloFacebook \" src=\"../../assets/img/Elementos-32.svg\" alt=\"logo\"></a>\r\n          </div>\r\n          <div class=\"col-xs-4 col-sm-4 text-center\">\r\n            <a href=\"https://twitter.com/COA_azuay?t=OHV1YWgCT4ART9vdAq7R4g&s=09\" target=\"_blank\"><img class=\"redesRectanguloTwtitter\" src=\"../../assets/img/Elementos-33.svg\" alt=\"logo\"></a>\r\n          </div>\r\n          <div class=\"col-xs-4 col-sm-4 text-center\">\r\n            <a href=\"https://www.instagram.com/coa.azuay/\" target=\"_blank\"><img class=\"redesRectanguloInstagram\" src=\"../../assets/img/Elementos-34.svg\" alt=\"logo\"></a>\r\n          </div>\r\n        </div><br>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-7 col-lg-7\">\r\n        <form #messajeForm=\"ngForm\" novalidate (ngSubmit)=\"onSaveMessage(messajeForm.value, messajeForm.valid)\">\r\n          <div class=\"row formularioGeneral\">\r\n            <div class=\"col-sm-12\">\r\n              <span class=\"text-left text-contactanos\">ESCRÍBENOS</span>\r\n            </div>\r\n            <div class=\"col-sm-12 text-left col-contact\" style=\"margin-top: 2rem;\">\r\n              <div class=\"content content-form\">\r\n                <div class=\"form-group\" style=\"margin-bottom: 15px;\">\r\n                  <input type=\"text\" name=\"message_name\" required placeholder=\"Nombres\"\r\n                    class=\"form-control formulario input-contact\" [(ngModel)]=\"message.message_name\" required\r\n                    #message_name=\"ngModel\">\r\n                  <small [hidden]=\"message_name.valid || (message_name.pristine && !messajeForm.submitted)\"\r\n                    class=\"text-danger\">\r\n                    Ingrese el nombre\r\n                  </small>\r\n                </div>\r\n                <div class=\"form-group\" style=\"margin-bottom: 15px;\">\r\n                  <input type=\"text\" name=\"message_email\" required placeholder=\"Email\"\r\n                    class=\"formulario form-control input-contact\" [(ngModel)]=\"message.message_email\" required\r\n                    #message_email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\r\n                  <small [hidden]=\"message_email.valid || (message_email.pristine && !messajeForm.submitted)\"\r\n                    class=\"text-danger\">\r\n                    Ingrese Email\r\n                  </small>\r\n                </div>\r\n                <div class=\"form-group\" style=\"margin-bottom: 15px;\">\r\n                  <input type=\"text\" name=\"message_phone\" placeholder=\"Teléfono\" class=\"formulario form-control input-contact\"\r\n                    [(ngModel)]=\"message.message_phone\" required #message_phone=\"ngModel\" pattern=\"\">\r\n                  <small [hidden]=\"message_phone.valid || (message_phone.pristine && !messajeForm.submitted)\"\r\n                    class=\"text-danger\">\r\n                    Ingrese el teléfono\r\n                  </small>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <textarea name=\"message_description\" rows=\"5\" cols=\"50\" placeholder=\"Mensaje\"\r\n                    class=\"formularioMensaje form-control input-contact\" [(ngModel)]=\"message.message_description\"\r\n                    required #message_description=\"ngModel\"></textarea>\r\n                  <small [hidden]=\"message_description.valid || (message_description.pristine && !messajeForm.submitted)\"\r\n                    class=\"text-danger\">\r\n                    Ingrese el mensaje\r\n                  </small>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 text-center\">\r\n                    <button type=\"submit\" class=\"botonContactos\">Enviar</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n        </form>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- *** /Contactos *** -->\r\n\r\n<!-- *** Ubicacion *** -->\r\n<section style=\"margin-top: 5%;\">\r\n  <div class=\"row row-w-90\">\r\n    <div class=\"col-md-7\">\r\n      <div class=\"mapa\">\r\n        <div class=\"circulo2 text-center\">\r\n          <img class=\"iconoMapa\" src=\"../../assets/img/Elementos-40.svg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n      <img class=\"esquinasuperiorMapa\" src=\"../../assets/img/Elementos-06.svg\" alt=\"\">\r\n      <div class=\"div-content-map\">\r\n        <div class=\"rectangulomapa text-center\">\r\n          <p class=\"textoMapa\">\r\n            Estamos ubicados\r\n            en la ciudad de Cuenca, contactanos y entérate de todo los beneficios\r\n            con los que podrás contar con nosotros.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <img class=\"esquinaINFERIORMapa\" src=\"../../assets/img/Elementos-07.svg\" alt=\"\">\r\n    </div>\r\n    <br><br><br>\r\n\r\n  </div>\r\n\r\n</section>\r\n<!-- *** /Ubicacion *** -->\r\n\r\n\r\n<footer class=\"fondofooter\">\r\n  <div class=\"row row-w-80 text-center\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <h1 class=\"tituloFooter text-center\">NOSOTROS</h1>\r\n        </div>\r\n        <div class=\"col-sm-6 text-center\">\r\n          <div class=\"linea\"></div>\r\n        </div>\r\n        <div class=\"row row-w-90\">\r\n          <div class=\"col-sm-12\">\r\n            <p class=\"text-left textoFooter\">\r\n              Estamos ubicados\r\n            en la ciudad de Cuenca, contactanos y entérate de todo los beneficios\r\n            con los que podrás contar con nosotros.\r\n              <br>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <h1 class=\"tituloFooter text-center\">CONTACTO</h1>\r\n        </div>\r\n        <div class=\"col-sm-6 text-center\">\r\n          <div class=\"linea\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-w-90\">\r\n        <div class=\"col-sm-6 col-md-4 col-lg-4 text-left footerSubtitulos\">\r\n          Dirección:\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-8 col-lg-8 text-left footerSubtitulos2\">\r\n          Cornelio Merchán 7-95 y Jesús Dávila esq.\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row row-w-90\">\r\n        <div class=\"col-sm-6 col-md-4 col-lg-4 text-left footerSubtitulos\">\r\n          Teléfono:\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-8 col-lg-8 text-left footerSubtitulos2\">\r\n          +593 (07) 2810 937\r\n          <br>\r\n          +593 99 555 2293\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row row-w-90\">\r\n        <div class=\"col-sm-6 col-md-4 col-lg-4 text-left footerSubtitulos\">\r\n          Email:\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-8 col-lg-8 text-left footerSubtitulos2\">\r\n          coaodont@hotmail.com\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n          <h1 class=\"tituloFooter text-center\">REDES SOCIALES</h1>\r\n        </div>\r\n        <div class=\"col-sm-4 text-center\">\r\n          <div class=\"linea\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-w-90\">\r\n        <div class=\"col-sm-12\">\r\n          <p class=\"text-justify textoFooter\">\r\n            Síguenos en nuestras redes sociales\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-w-90\">\r\n        <div class=\"col-xs-2\">\r\n          <a href=\"https://www.facebook.com/coa.azuay\" target=\"_blank\"><img class=\"iconoFooter\" src=\"../../assets/img/Elementos-37.svg\" alt=\"\"></a>\r\n        </div>\r\n        <div class=\"col-xs-2\">\r\n          <a href=\"https://twitter.com/COA_azuay?t=OHV1YWgCT4ART9vdAq7R4g&s=09\" target=\"_blank\"><img class=\"iconoFooter\" src=\"../../assets/img/Elementos-38.svg\" alt=\"\"></a>\r\n        </div>\r\n        <div class=\"col-xs-2\">\r\n          <a href=\"https://www.instagram.com/coa.azuay/\" target=\"_blank\"><img class=\"iconoFooter\" src=\"../../assets/img/Elementos-39.svg\" alt=\"\"></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n \r\n</footer>\r\n\r\n  <!--MODAL PRODCUTOS-->\r\n  <div class=\"modal fade\" #modalProduct id=\"modalProduct\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"modalSubCategoryLabel\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n              aria-hidden=\"true\">&times;</span></button>\r\n          <h2 class=\"modal-title\" id=\"modalSubCategoryLabel\">{{product.pro_nombre}}</h2>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"card mb-3 modalProd\">\r\n            <div class=\"row no-gutters\">\r\n              <div class=\"col-md-6 text-center\">\r\n                <img class=\"imgProd\" src=\"{{product.pro_url}}\" alt=\"{{product.pro_nombre}}\">\r\n              </div>\r\n              <div style=\"margin-left: 2rem;\" class=\"col-md-11 text-center\">\r\n                <div class=\"card-body\">\r\n                  <p *ngIf=\"!isLink(product.pro_description)\" class=\"card-text text-justify\">\r\n                    <span [innerHTML]='product.pro_description'></span>\r\n                    <!-- {{product.pro_description}} -->\r\n                  </p>\r\n                  <p *ngIf=\"isLink(product.pro_description)\" class=\"card-text text-justify\">\r\n                    <a href=\"{{product.pro_description}}\" target=\"_blanck\">\r\n                      Ver la descripción\r\n                    </a>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default btn-simple\" data-dismiss=\"modal\">Cerrar</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <app-modal-login></app-modal-login>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/modal-login/modal-login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/modal-login/modal-login.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" #modalLogin id=\"modalLogin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalCategoryLabel\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div *ngIf='!islogging' class=\"modal-content col-info\">\r\n            <div class=\"modal-body\">\r\n                <!--   if you want to have the card without animation please remove the \".card-hidden\" class   -->\r\n                <div class=\"\" style=\"padding: 50px;\">\r\n                    <div class=\"header text-center\">\r\n                        <div class=\"text-center\">\r\n                            <img class=\"logo\" src=\"../../../assets/img/logo.png\" alt=\"logo\">\r\n                        </div>\r\n                        <br>\r\n                    </div>\r\n                    <hr>\r\n                    <form #loginForm=\"ngForm\" novalidate (ngSubmit)=\"onLogin(loginForm.value, loginForm.valid)\">\r\n                        <div class=\"content\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                        <a class=\"fa fas fa-envelope\"> </a>\r\n                                    </span>\r\n                                    <input type=\"email\" placeholder=\"EMAIL\" class=\"form-control\" name=\"email\"\r\n                                        [(ngModel)]=\"userLogin.email\" required #email=\"ngModel\"\r\n                                        pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\r\n\r\n                                </div>\r\n                                <small [hidden]=\"email.valid || (email.pristine && !loginForm.submitted)\"\r\n                                    class=\"text-danger\">\r\n                                    Email inválido.\r\n                                </small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                        <a class=\"fa fas fa-lock\"></a>\r\n                                    </span>\r\n                                    <input type=\"password\" placeholder=\"CONTRASEÑA\" class=\"form-control\" name=\"password\"\r\n                                        [(ngModel)]=\"userLogin.password\" required minlength=\"6\" #password=\"ngModel\">\r\n                                </div>\r\n                                <small [hidden]=\"password.valid || (password.pristine && !loginForm.submitted)\"\r\n                                    class=\"text-danger\">\r\n                                    ingrese contraseña.\r\n                                </small>\r\n                            </div>\r\n                            <hr>\r\n                            <br>\r\n                        </div>\r\n                        <div class=\"row text-center\">\r\n                            <div class=\"col-sm-2\"></div>\r\n                            <div class=\"col-sm-8\">\r\n                                <button type=\"submit\" class=\"btn btn-fill btn-ingresar btn-block btn-wd btn-login\">\r\n                                    INGRESAR\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"col-sm-2\"></div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"black\" data-image=\"\">\r\n        <sidebar-cmp></sidebar-cmp>\r\n        <div class=\"sidebar-background\" style=\"\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <navbar-cmp></navbar-cmp>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"!isMap()\">\r\n          <footer-cmp></footer-cmp>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <fixedplugin-cmp></fixedplugin-cmp> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <!-- <pagesnavbar-cmp></pagesnavbar-cmp> -->\r\n  <router-outlet></router-outlet>\r\n  <!-- <fixedplugin-cmp></fixedplugin-cmp> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/detail-conventions/detail-conventions/detail-conventions.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/detail-conventions/detail-conventions/detail-conventions.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"justify-content: center; align-items: center; align-content: center; justify-items: center;\">\n    <mat-card class=\"example-card\" style=\"margin-top: 15px;\">\n        <mat-card-header>\n            <mat-card-title class=\"titulo\">{{convention.title}}</mat-card-title>\n        </mat-card-header>\n        <!-- <div [id]=\"convention.id+'detail'\" class=\"carousel slide\" data-ride=\"carousel\" *ngIf=\"convention.images.length>0\"> -->\n          <div [id]=\"convention.id+'detail'\" class=\"carousel slide\" data-ride=\"carousel\" >\n          \n            <div class=\"carousel-inner\" style=\"max-height: 500px;\">\n                <div class=\"item\" *ngFor=\"let previa of convention.image; let i = index\"\n                [ngClass]=\"{'active': i == 0 }\" >\n                  <img [src]=\"previa.url\" style=\"width: 100%;\">\n                </div>\n            </div>\n        </div>\n        \n        <mat-card-content>\n            <p style=\"margin-top: 3%; text-align: justify\">\n                {{convention.description}}\n            </p>\n        </mat-card-content>\n        <a [href]=\"convention.url\" target=\"_blank\"><button mat-button>Ir a la pagina</button></a>\n        <!-- <mat-card-actions>\n            <a [href]=\"convention.url\" target=\"_blank\"><button mat-button>Volver</button><img class=\"img-company\" [src]=\"imagen.url\"></a>\n        </mat-card-actions> -->\n    </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/detail-event/detail-event/detail-event.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/detail-event/detail-event/detail-event.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"justify-content: center; align-items: center; align-content: center; justify-items: center;\">\r\n  <mat-card class=\"example-card\" style=\"margin-top: 15px;\">\r\n      <mat-card-header>\r\n          <mat-card-title class=\"titulo\">{{event.title}}</mat-card-title>\r\n      </mat-card-header>\r\n      <!-- <div [id]=\"event.id+'detail'\" class=\"carousel slide\" data-ride=\"carousel\" *ngIf=\"event.images.length>0\"> -->\r\n        <div [id]=\"event.id+'detail'\" class=\"carousel slide\" data-ride=\"carousel\" >\r\n        \r\n          <div class=\"carousel-inner\" style=\"max-height: 500px;\">\r\n              <div class=\"item\" *ngFor=\"let previa of event.images; let i = index\"\r\n              [ngClass]=\"{'active': i == 0 }\" >\r\n                <img [src]=\"previa.url\" style=\"width: 100%;\">\r\n              </div>\r\n          </div>\r\n          <div  *ngIf=\"event.images.length>1\">\r\n            <a class=\"left carousel-control\" [href]=\"'#'+event.id+'detail'\" data-slide=\"prev\">\r\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n              <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"right carousel-control\" [href]=\"'#'+event.id+'detail'\" data-slide=\"next\">\r\n              <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n              <span class=\"sr-only\">Next</span>\r\n            </a>\r\n          </div>\r\n      </div>\r\n      \r\n      <mat-card-content>\r\n          <p style=\"margin-top: 3%; text-align: justify\">\r\n              {{event.description}}\r\n          </p>\r\n      </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/init-promo/init-promo/init-promo.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/init-promo/init-promo/init-promo.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div (click)=\"redirigir()\"></div> -->\n<div>\n    <a (click)=\"redirigir()\"><img id=\"imgPromo\" src=\"assets/img/bienvenida.png\"></a>\n</div>\n<div class=\"col-sm-12 text-center\" style=\"margin-top: 2%;\">\n    <button  mat-button (click)=\"redirigir()\" class=\"botonRegistrar\">Registrarse</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/list-conventions/list-conventions/list-conventions.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/list-conventions/list-conventions/list-conventions.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"justify-content: center; align-items: center; align-content: center; justify-items: center;\">\n    <div class=\"container\">\n      <div class=\"col-lg-12\">\n          <div class=\"row\" >\n              <!-- <a><img class=\"card-img-top\" src=\"./assets/img/angular.jpg\" alt=\"Card image cap\"></a> -->\n              <div *ngFor=\"let convention of conventions | async\" class=\"col-sm-12 col-md-8 col-lg-4\">\n                  <mat-card class=\"example-card dorado\" style=\"margin-top: 15px;\">\n                    \n                      <mat-card-header>\n                          <!-- <mat-card-title>{{presentation.title}}</mat-card-title> -->\n                          <div class=\"module line-clamp\">\n                            <mat-card-title class=\"titulos\">{{convention.title}}</mat-card-title>\n                          </div>\n                      </mat-card-header>\n\n                      <div [id]=\"convention.id\" class=\"carousel slide\" data-ride=\"carousel\" >\n                          <div class=\"carousel-inner\" style=\"max-height: 150px;\" >\n                              <div class=\"item\" *ngFor=\"let previa of convention.image; let i = index\"\n                              [ngClass]=\"{'active': i == 0 }\">\n                                <div>\n                                  <img [src]=\"previa.url\" style=\"width: 100%; height: 125px; object-fit: cover;\" (click)=\"viewConvention(convention)\">\n                                </div>                                \n                              </div>\n                          </div>\n                      </div>\n  \n                      <!-- <mat-card-content>\n                          <p>\n                              {{presentation.description}}\n                          </p>\n                      </mat-card-content> -->\n                  </mat-card>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/list-events/list-events/list-events.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/list-events/list-events/list-events.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"justify-content: center; align-items: center; align-content: center; justify-items: center;\">\r\n    <div class=\"container\">\r\n      <div class=\"col-lg-12\">\r\n          <div class=\"row\" >\r\n              <!-- <a><img class=\"card-img-top\" src=\"./assets/img/angular.jpg\" alt=\"Card image cap\"></a> -->\r\n              <div *ngFor=\"let presentation of nuevo_vector\" class=\"col-sm-12 col-md-8 col-lg-4\">\r\n                  <mat-card class=\"example-card dorado\" style=\"margin-top: 15px;\">\r\n                      <mat-card-header>\r\n                          <!-- <mat-card-title>{{presentation.title}}</mat-card-title> -->\r\n                          <div class=\"module line-clamp\">\r\n                            <mat-card-title class=\"titulos\">{{presentation.title}}</mat-card-title>\r\n                          </div>\r\n                      </mat-card-header>\r\n                      <div [id]=\"presentation.id\" class=\"carousel slide\" data-ride=\"carousel\" >\r\n                          <div class=\"carousel-inner\" style=\"max-height: 150px;\" >\r\n                              <div class=\"item\" *ngFor=\"let previa of presentation.images; let i = index\"\r\n                              [ngClass]=\"{'active': i == 0 }\">\r\n                                <div *ngIf=\"previa.idEvent==presentation.id\">\r\n                                  <img [src]=\"previa.url\" style=\"width: 100%;\" (click)=\"viewEvent(presentation)\">\r\n                                </div>                                \r\n                              </div>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"presentation.images.length>1\">\r\n                            <a class=\"left carousel-control\" [href]=\"'#'+presentation.id\" data-slide=\"prev\">\r\n                              <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n                              <span class=\"sr-only\">Previous</span>\r\n                            </a>\r\n                            <a class=\"right carousel-control\" [href]=\"'#'+presentation.id\" data-slide=\"next\">\r\n                              <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n                              <span class=\"sr-only\">Next</span>\r\n                            </a>\r\n                          </div>\r\n                          \r\n                      </div>\r\n  \r\n                      <!-- <mat-card-content>\r\n                          <p>\r\n                              {{presentation.description}}\r\n                          </p>\r\n                      </mat-card-content> -->\r\n                  </mat-card>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/list-team/list-team/list-team.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/list-team/list-team/list-team.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row row-w-90 row-equipo container\">\n    <div *ngFor=\"let member of team | async\" style=\"margin: 2%;\" data-aos=\"fade-up\" data-aos-duration=\"1500\">\n        <div *ngFor=\"let image of member.imagen\"  data-aos=\"zoom-in\" class=\"imagen\">\n            <img class=\"iconoEquipo\" [src]=\"image.url\" alt=\"Icono equipo\">\n        </div>\n        <div class=\"datos col-sm-8 col-md-5\">\n            <ul class=\"ul-equipo\">\n                <li class=\"nombreEquipo\">{{member.team_name}}</li>\n                <li class=\"numeroContacto\">{{member.team_contact}}</li>\n                <li class=\"emailContacto\">{{member.team_email}}</li>\n                <li><span class=\"tituloContacto\">{{member.team_position}}</span></li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-registration/user-registration/user-registration.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-registration/user-registration/user-registration.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div style=\"margin: 2%;\">\r\n    <img src=\"../../assets/img/pagina1Pdf.png\">\r\n  </div>\r\n  <div style=\"margin: 2%;\">\r\n    <img src=\"../../assets/img/pagina2PDF.png\">\r\n  </div>\r\n</div>\r\n<div _ngcontent-npf-c107=\"\" class=\"formulario\">\r\n  <div class=\"pos-form\">\r\n    <form #messajeForm=\"ngForm\" novalidate (ngSubmit)=\"onSaveUser(messajeForm.value, messajeForm.valid)\">\r\n      <div class=\"col-sm-12 text-registro\">\r\n        <span class=\"text-left text-registro\">Registro</span>\r\n      </div>\r\n\r\n      <div class=\"col-sm-12 text-textocertificado\">\r\n        <span class=\"text-left text-registro\">Recuerde que los datos ingresados se usaran para su respectivo\r\n          certificado</span>\r\n      </div>\r\n\r\n      <div class=\"row formularioGeneral\">\r\n        <div style=\"margin-top: 5rem;\">\r\n          <div class=\"izqForm\">\r\n            <div class=\"content content-form\">\r\n\r\n\r\n              <div class=\"form-group bordeado\" style=\"margin-bottom: 15px;\">\r\n                <div class=\"form-group\" style=\"padding: 2%;\">\r\n                  <label class=\"text-left text-rol\">Profesión</label>\r\n                  <select class=\"btn-group bootstrap-select dropup\" name=\"prof\" [(ngModel)]=\"profesion\" #prof=\"ngModel\"\r\n                    style=\"margin-left: 2%; width: 55%; height: 100%;\" (change)=\"validarSeleccionProf()\">\r\n                    <option value=\"Dr.\">Doctor</option>\r\n                    <option value=\"Est.\">Odontólogo</option>\r\n                    <option value=\"Est.\">Estudiante</option>\r\n                  </select>\r\n                  <br>\r\n                  <small [hidden]=\"(prof.valid || (prof.pristine && !messajeForm.submitted) ) && profSeleccionado\"\r\n                    class=\"text-danger\">\r\n                    Seleccione una profesión\r\n                  </small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group bordeado\" style=\"margin-bottom: 15px;\">\r\n                <div class=\"form-group\" style=\"padding: 2%;\">\r\n                  <input type=\"text\" name=\"user_name\" required placeholder=\"Nombres\" class=\"form-control formulario \"\r\n                    [(ngModel)]=\"user.user_name\" required #user_name=\"ngModel\">\r\n                  <small [hidden]=\"user_name.valid || (user_name.pristine && !messajeForm.submitted)\"\r\n                    class=\"text-danger\">\r\n                    Ingrese su Nombre\r\n                  </small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group bordeado\" style=\"margin-bottom: 15px;\">\r\n                <div class=\"form-group\" style=\"padding: 2%;\">\r\n                  <input type=\"text\" name=\"user_lastname\" required placeholder=\"Apellidos\"\r\n                    class=\"form-control formulario input-contact\" [(ngModel)]=\"user.user_lastname\" required\r\n                    #user_lastname=\"ngModel\">\r\n                  <small [hidden]=\"user_lastname.valid || (user_lastname.pristine && !messajeForm.submitted)\"\r\n                    class=\"text-danger\">\r\n                    Ingrese su Apellido\r\n                  </small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group bordeado\" style=\"margin-bottom: 15px;\">\r\n                <div class=\"form-group\" style=\"padding: 2%;\">\r\n                  <input placeholder=\"Cedula\" name=\"user_ci\" class=\"formulario form-control input-contact\" type=\"text\"\r\n                    [(ngModel)]=\"user.user_ci\" required #user_ci=\"ngModel\"\r\n                    onkeypress=\"return /[0-9]|\\./i.test(event.key)\" maxlength=\"10\" (change)=\"validadorDeCedula()\" />\r\n                  <small [hidden]=\"(user_ci.valid || (user_ci.pristine && !messajeForm.submitted) ) && validador\"\r\n                    class=\"text-danger\">\r\n                    Ingrese una cedula valida\r\n                  </small>\r\n                </div>\r\n                <!-- <small *ngIf=\"!validador\" class=\"text-danger\">Cedula Invalida</small> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"derForm\">\r\n\r\n            <div class=\"form-group bordeado\" style=\"margin-bottom: 15px;\">\r\n              <div class=\"form-group\" style=\"padding: 2%;\">\r\n                <input type=\"text\" name=\"user_email\" required placeholder=\"E-Mail\"\r\n                  class=\"formulario form-control input-contact\" [(ngModel)]=\"user.user_email\" required\r\n                  #user_email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\r\n                <small [hidden]=\"user_email.valid || (user_email.pristine && !messajeForm.submitted)\"\r\n                  class=\"text-danger\">\r\n                  Ingrese un Email valido\r\n                </small>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group bordeado\" style=\"margin-bottom: 15px;\">\r\n              <div class=\"form-group\" style=\"padding: 2%;\">\r\n                <input placeholder=\"Teléfono\" name=\"user_phone\" class=\"formulario form-control input-contact\"\r\n                  type=\"text\" [(ngModel)]=\"user.user_phone\" required #user_phone=\"ngModel\"\r\n                  pattern=\"^((\\\\+91-?)|0)?[0-9]{9}$\" onkeypress=\"return /[0-9]|\\./i.test(event.key)\" maxlength=\"10\" />\r\n                <small [hidden]=\"user_phone.valid || (user_phone.pristine && !messajeForm.submitted)\"\r\n                  class=\"text-danger\">\r\n                  Ingrese un número de teléfono valido\r\n                </small>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group bordeado\" style=\"margin-bottom: 15px;\">\r\n              <div class=\"form-group\" style=\"padding: 2%;\">\r\n                <input type=\"text\" name=\"user_direction\" required placeholder=\"Dirección\"\r\n                  class=\"form-control formulario input-contact\" [(ngModel)]=\"user.user_direction\" required\r\n                  #user_direction=\"ngModel\">\r\n                <small [hidden]=\"user_direction.valid || (user_direction.pristine && !messajeForm.submitted)\"\r\n                  class=\"text-danger\">\r\n                  Ingrese su Dirección\r\n                </small>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"form-group bordeado\" style=\"margin-bottom: 15px;\">\r\n              <div class=\"form-group\" style=\"padding: 2%;\">\r\n                <label class=\"text-left text-rol\">Ocupación</label>\r\n                <select class=\"btn-group bootstrap-select dropup\" name=\"ocupacion\" [(ngModel)]=\"selected\"\r\n                  #ocupacion=\"ngModel\" style=\"margin-left: 2%; width: 55%; height: 100%;\" (change)=\"validarSeleccion()\">\r\n                  <option *ngFor=\"let item of roles\" [value]=\"item.opt\">{{item.opt}}</option>\r\n                </select>\r\n                <br>\r\n                <small [hidden]=\"(ocupacion.valid || (ocupacion.pristine && !messajeForm.submitted) ) && seleccionado\"\r\n                  class=\"text-danger\">\r\n                  Seleccione una ocupación\r\n                </small>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"confirmacionRural\">\r\n              <span class=\"text-left text-validarPorCorreo\">*Recuerde enviar una copia de su carnet/certificado que\r\n                valide su modalidad de \"odontologo rural\" posterior al pago.\r\n                Enviar al correo ondontologosazuay@gmail.com*</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"confirmacionAgremiado\">\r\n              <span class=\"text-left text-validarPorCorreo\">*Recuerde enviar una copia de su carnet/certificado que\r\n                valide su modalidad de \"odontologo agremiado a la FOE\" posterior al pago.\r\n                Enviar al correo ondontologosazuay@gmail.com*</span>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            <button mat-button type=\"submit\" class=\"botonRegistrar\">Continuar</button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <!-- <div *ngIf=\"showPpButton; else elseBlock\">\r\n          <hr>\r\n          <p class=\"text-center text-info\">\r\n            Para finalizar el registro por favor realice el pago correspondiente a:\r\n            ${{rolSelected.value}}\r\n          </p>\r\n\r\n\r\n        </div>\r\n\r\n        <ng-template #elseBlock>\r\n        </ng-template> -->\r\n      </div>\r\n    </form>\r\n\r\n    <!-- *** Form Payphone *** -->\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" #modalPayment id=\"modalPayment\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"modalCategoryLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <!-- *ngIf='!islogging' -->\r\n    <div class=\"modal-content col-info\">\r\n      <div class=\"modal-body\">\r\n        <div class=\"\" style=\"padding: 50px;\">\r\n          <div class=\"header text-center\">\r\n            <div class=\"text-center\">\r\n              <img class=\"logo\" src=\"../../../assets/img/logo.png\" alt=\"logo\">\r\n            </div>\r\n            <h2>\r\n              Por favor seleccione su método de pago\r\n            </h2>\r\n            <p *ngIf=\"showPpButton\" class=\"text-center text-info\">\r\n              Para finalizar el registro por favor realice el pago correspondiente a:\r\n              ${{rolSelected.value}}\r\n            </p>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6  text-center\">\r\n              <div class=\"div-info border\">\r\n                <h3>Transferencia</h3>\r\n                <p>Por favor realice una transferencia a la siguiente cuenta:</p>\r\n                <hr>\r\n                <ul class=\"text-left\">\r\n                  <li><strong>BANCO PICHINCHA</strong></li>\r\n                  <li><strong>Tipo de Cuenta:</strong> CUENTA CORRIENTE</li>\r\n                  <li><strong>Nro de Cuenta:</strong> 3090496104</li>\r\n                  <li><strong>Titular:</strong> COLEGIO DE ODONTOLOGOS</li>\r\n                  <li><strong>RUC:</strong> 0190153916001</li>\r\n                  <li><strong>Correo:</strong> coaodont@hotmail.com</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 text-center border\">\r\n              <div class=\"div-info \">\r\n                <h3>Payphone</h3>\r\n                <hr>\r\n                <div *ngIf=\"showPpButton; else elseBlock\">\r\n                  <div class=\"card-form col-sm-12 pt-2 p-5 text-center\">\r\n                    <div id=\"pp-button\"></div>\r\n                  </div>\r\n                </div>\r\n                <ng-template #elseBlock>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed-plugin\">\r\n    <div class=\"dropdown\">\r\n        <a href=\"#\" data-toggle=\"dropdown\">\r\n        <i class=\"fa fa-cog fa-2x\"> </i>\r\n        </a>\r\n        <ul class=\"dropdown-menu\">\r\n            <li class=\"header-title\">Configuration</li>\r\n            <li class=\"adjustments-line\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                    <p *ngIf=\"isPages()\">Sidebar Image</p>\r\n                    <p *ngIf=\"!isPages()\"> Background Image</p>\r\n                    <bSwitch\r\n                      [switch-on-color]=\"'primary'\"\r\n                      [(ngModel)]=\"state\"\r\n                      [ngClass]=\"['switch','switch-sidebar-image']\"\r\n                      (changeState)=\"onChange($event)\">\r\n                    </bSwitch>\r\n                    <div class=\"clearfix\"></div>\r\n                </a>\r\n            </li>\r\n\t\t\t<li class=\"adjustments-line\" *ngIf=\"isPages()\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                    <p>Sidebar Mini</p>\r\n                    <bSwitch\r\n                      [switch-on-color]=\"'primary'\"\r\n                      [ngClass]=\"['switch','switch-sidebar-mini']\"\r\n                      (changeState)=\"onChange1($event)\">\r\n                    </bSwitch>\r\n                    <div class=\"clearfix\"></div>\r\n                </a>\r\n            </li>\r\n\t\t\t<li class=\"adjustments-line\" *ngIf=\"isPages()\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                    <p>Fixed Navbar</p>\r\n                    <bSwitch\r\n                      [switch-on-color]=\"'primary'\"\r\n                      [ngClass]=\"['switch','switch-navbar-fixed']\"\r\n                      (changeState)=\"onChange2($event)\">\r\n                    </bSwitch>\r\n                    <div class=\"clearfix\"></div>\r\n                </a>\r\n            </li>\r\n            <li class=\"adjustments-line\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                    <p>Filters</p>\r\n                    <div class=\"pull-right\">\r\n                        <span class=\"badge filter\" data-color=\"black\"></span>\r\n                        <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\r\n                        <span class=\"badge filter badge-green\" data-color=\"green\"></span>\r\n                        <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\r\n                        <span class=\"badge filter badge-red active\" data-color=\"red\"></span>\r\n                        <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </a>\r\n            </li>\r\n            <li class=\"header-title\">Sidebar Images</li>\r\n            <li>\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"../../../assets/img/full-screen-image-1.jpg\">\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"../../../assets/img/full-screen-image-2.jpg\">\r\n                </a>\r\n            </li>\r\n            <li class=\"active\">\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"../../../assets/img/full-screen-image-3.jpg\">\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"../../../assets/img/full-screen-image-4.jpg\">\r\n                </a>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n        <!-- <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Company\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Portfolio\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                       Blog\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav> -->\r\n\r\n    </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav #navbar class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-minimize\">\r\n            <button id=\"minimizeSidebar\" class=\"btn btn-dark btn-fill btn-round btn-icon\">\r\n                <i class=\"fa fa-ellipsis-v visible-on-sidebar-regular\"></i>\r\n                <i class=\"fa fa-navicon visible-on-sidebar-mini\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\">{{getTitle()}}</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <div class=\"\" *ngIf=\"isMobileMenu()\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li class=\"dropdown dropdown-with-icons\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"fa fa-user-circle\"></i>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu dropdown-with-icons\">\r\n                            <li>\r\n                                <a (click)=\"logout()\" class=\"text-danger\">\r\n                                    <i class=\"pe-7s-close-circle\"></i>\r\n                                    Cerrar sesión\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagesnavbar/pagesnavbar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagesnavbar/pagesnavbar.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav #pagesnavbar class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" routerLinkActive=\"active\">Nikola</a>\r\n        </div>\r\n        <!-- <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\r\n                        <i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>\r\n                        <p>Dashboard</p>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\">\r\n                        <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\r\n                        <p>Login</p>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\">\r\n                        <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\r\n                        <p>Register</p>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a routerLinkActive=\"active\" [routerLink]=\"['/pages/lock']\">\r\n                        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\r\n                        <p>Lock Screen</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div> -->\r\n    </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo bgLogo\">\r\n    <a href=\"#\" class=\"simple-text logo-mini\">\r\n        <div class=\"logo-img\">\r\n            <!-- <img src=\"../../assets/img/nikolasoftwhite.svg\" /> -->\r\n        </div>\r\n    </a>\r\n    <a href=\"#\" class=\"simple-text logo-normal\">\r\n        Admin\r\n    </a>\r\n</div>\r\n\r\n<div class=\"sidebar-wrapper\">\r\n    <div *ngIf=\"isNotMobileMenu()\">\r\n        <ul class=\"nav nav-mobile-menu\">\r\n            <li class=\"dropdown dropdown-with-icons\">\r\n                <a (click)=\"logout()\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-user-circle\"></i>\r\n                    <p class=\"hidden-md hidden-lg\">\r\n                        Cerrar sesión\r\n                    </p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <ul class=\"nav\">\r\n        <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\r\n            <!--If is a single link-->\r\n            <a (click)=\"redirect(menuitem.path)\" *ngIf=\"menuitem.type === 'link'\">\r\n                <i class=\"{{menuitem.icontype}}\"></i>\r\n                <p>{{menuitem.title}}</p>\r\n            </a>\r\n            <!--If it have a submenu-->\r\n            <a data-toggle=\"collapse\" href=\"#{{menuitem.title}}\" *ngIf=\"menuitem.type === 'sub'\">\r\n                <i class=\"{{menuitem.icontype}}\"></i>\r\n                <p>{{menuitem.title}}<b class=\"caret\"></b></p>\r\n            </a>\r\n\r\n            <!--Display the submenu items-->\r\n            <div id=\"{{menuitem.title}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\r\n                <ul class=\"nav\">\r\n                    <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\">\r\n                        <a [routerLink]=\"[menuitem.path, childitem.path]\">\r\n                            <span class=\"sidebar-mini\">{{childitem.ab}}</span>\r\n                            <span class=\"sidebar-normal\">{{childitem.title}}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/admin-carrusel/admin-carrusel.module": [
		"./src/app/modules/admin-carrusel/admin-carrusel.module.ts",
		"modules-admin-carrusel-admin-carrusel-module"
	],
	"./modules/categories/categories.module": [
		"./src/app/modules/categories/categories.module.ts",
		"modules-categories-categories-module"
	],
	"./modules/conventions-admin/conventions-admin.module": [
		"./src/app/modules/conventions-admin/conventions-admin.module.ts",
		"modules-conventions-admin-conventions-admin-module"
	],
	"./modules/events-admin/events-admin.module": [
		"./src/app/modules/events-admin/events-admin.module.ts",
		"modules-events-admin-events-admin-module"
	],
	"./modules/list-users/list-users.module": [
		"./src/app/modules/list-users/list-users.module.ts",
		"modules-list-users-list-users-module"
	],
	"./modules/message/message.module": [
		"./src/app/modules/message/message.module.ts",
		"modules-message-message-module"
	],
	"./modules/mision-vision/mision-vision.module": [
		"./src/app/modules/mision-vision/mision-vision.module.ts",
		"modules-mision-vision-mision-vision-module"
	],
	"./modules/sponsors/sponsors.module": [
		"./src/app/modules/sponsors/sponsors.module.ts",
		"modules-sponsors-sponsors-module"
	],
	"./modules/team/team.module": [
		"./src/app/modules/team/team.module.ts",
		"modules-team-team-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-dialog-container{\r\n    background: rgb(174,134,37) !important;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(174,134,37,1)), color-stop(33%, rgba(247,239,138,1)), color-stop(81%, rgba(210,172,71,1))) !important;\r\n    background: linear-gradient(180deg, rgba(174,134,37,1) 0%, rgba(247,239,138,1) 33%, rgba(210,172,71,1) 81%) !important;\r\n    /* Other CSS Styles */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsMktBQXNIO0lBQXRILHNIQUFzSDtJQUN0SCxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE3NCwxMzQsMzcpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE3NCwxMzQsMzcsMSkgMCUsIHJnYmEoMjQ3LDIzOSwxMzgsMSkgMzMlLCByZ2JhKDIxMCwxNzIsNzEsMSkgODElKSAhaW1wb3J0YW50O1xyXG4gICAgLyogT3RoZXIgQ1NTIFN0eWxlcyAqL1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "./src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var _shared_pagesnavbar_pagesnavbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/pagesnavbar/pagesnavbar.module */ "./src/app/shared/pagesnavbar/pagesnavbar.module.ts");
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-auth.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth/auth/auth.service */ "./src/app/services/auth/auth/auth.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-storage.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/slider.js");
/* harmony import */ var _index_modal_login_modal_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./index/modal-login/modal-login.component */ "./src/app/index/modal-login/modal-login.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _modules_detail_event_detail_event_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/detail-event/detail-event.module */ "./src/app/modules/detail-event/detail-event.module.ts");
/* harmony import */ var _modules_list_events_list_events_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modules/list-events/list-events.module */ "./src/app/modules/list-events/list-events.module.ts");
/* harmony import */ var _modules_user_registration_user_registration_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/user-registration/user-registration.module */ "./src/app/modules/user-registration/user-registration.module.ts");
/* harmony import */ var _modules_list_team_list_team_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modules/list-team/list-team.module */ "./src/app/modules/list-team/list-team.module.ts");
/* harmony import */ var _modules_list_conventions_list_conventions_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modules/list-conventions/list-conventions.module */ "./src/app/modules/list-conventions/list-conventions.module.ts");
/* harmony import */ var _modules_detail_conventions_detail_conventions_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modules/detail-conventions/detail-conventions.module */ "./src/app/modules/detail-conventions/detail-conventions.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

 // this is needed!




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _modules_detail_conventions_detail_conventions_module__WEBPACK_IMPORTED_MODULE_29__["DetailConventionsModule"],
                _modules_list_conventions_list_conventions_module__WEBPACK_IMPORTED_MODULE_28__["ListConventionsModule"],
                _modules_list_team_list_team_module__WEBPACK_IMPORTED_MODULE_27__["ListTeamModule"],
                _modules_user_registration_user_registration_module__WEBPACK_IMPORTED_MODULE_26__["UserRegistrationModule"],
                _modules_detail_event_detail_event_module__WEBPACK_IMPORTED_MODULE_24__["DetailEventModule"],
                _modules_list_events_list_events_module__WEBPACK_IMPORTED_MODULE_25__["ListEventsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_13__["AppRoutes"], {
                    useHash: true
                }),
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"],
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__["NavbarModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_7__["FixedPluginModule"],
                _shared_pagesnavbar_pagesnavbar_module__WEBPACK_IMPORTED_MODULE_10__["PagesnavbarModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
                _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__["AuthLayoutComponent"],
                _index_modal_login_modal_login_component__WEBPACK_IMPORTED_MODULE_20__["ModalLoginComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_21__["IndexComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            providers: [_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _modules_user_registration_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/user-registration/user-registration/user-registration.component */ "./src/app/modules/user-registration/user-registration/user-registration.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AppRoutes = [
    { path: "index", component: _index_index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"] },
    { path: "", component: _index_index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"] },
    { path: "registration", component: _modules_user_registration_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationComponent"] },
    {
        path: "admin",
        component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__["AdminLayoutComponent"],
        children: [
            {
                path: "categories",
                loadChildren: "./modules/categories/categories.module#CategoriesModule",
            },
            {
                path: "events",
                loadChildren: "./modules/events-admin/events-admin.module#EventsAdminModule",
            },
            {
                path: "message",
                loadChildren: "./modules/message/message.module#MessageModule",
            },
            {
                path: 'users',
                loadChildren: './modules/list-users/list-users.module#ListUsersModule',
            },
            {
                path: 'team',
                loadChildren: './modules/team/team.module#TeamModule',
            },
            {
                path: 'sponsors',
                loadChildren: './modules/sponsors/sponsors.module#SponsorsModule',
            },
            {
                path: 'carrusel',
                loadChildren: './modules/admin-carrusel/admin-carrusel.module#AdminCarruselModule',
            },
            {
                path: 'mision-vision',
                loadChildren: './modules/mision-vision/mision-vision.module#MisionVisionModule',
            },
            {
                path: 'conventions',
                loadChildren: './modules/conventions-admin/conventions-admin.module#ConventionsAdminModule',
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\r\n  font-family: \"Poppins\";\r\n  src: url('Poppins-Bold.woff2') format(\"woff2\"),\r\n    url('Poppins-Bold.woff') format(\"woff\");\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n@font-face {\r\n  font-family: \"Nobile\";\r\n  src: url('Nobile-Medium.woff2') format(\"woff2\"),\r\n    url('Nobile-Medium.woff') format(\"woff\");\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n@font-face {\r\n  font-family: \"Nobile\";\r\n  src: url('Nobile-Bold.woff2') format(\"woff2\"),\r\n    url('Nobile-Bold.woff') format(\"woff\");\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n@font-face {\r\n  font-family: \"Poppins\";\r\n  src: url('Poppins-Light.woff2') format(\"woff2\"),\r\n    url('Poppins-Light.woff') format(\"woff\");\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n@font-face {\r\n  font-family: \"PoppinsR\";\r\n  src: url('Poppins-Regular.woff2') format(\"woff2\"),\r\n    url('Poppins-Regular.woff') format(\"woff\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n.card-product {\r\n  height: 65vh;\r\n}\r\n.li-menu {\r\n  margin: 0px !important;\r\n  cursor: pointer;\r\n}\r\n.row-w-100 {\r\n  max-width: 100% !important;\r\n  margin: 0 auto;\r\n}\r\n.row-w-60 {\r\n  max-width: 60% !important;\r\n  margin: 0 auto;\r\n}\r\n.row-w-80 {\r\n  max-width: 80% !important;\r\n  margin: 0 auto;\r\n}\r\n.row-w-90 {\r\n  max-width: 90% !important;\r\n  margin: 0 auto;\r\n}\r\n.navbar .navbar-nav > li > a {\r\n  margin-top: 0px !important;\r\n  padding-top: 3rem;\r\n}\r\n.imgNav {\r\n  margin-top: 1.5rem !important;\r\n  width: 50% !important;\r\n}\r\n.textInicio {\r\n  font-family: \"Poppins\";\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  color: #7d7d82;\r\n  font-size: 18px;\r\n}\r\n.opc:hover {\r\n  color: #ffc009;\r\n}\r\n.opcMenu:hover {\r\n  background-color: rgb(28, 169, 166);\r\n  color: #ffffff;\r\n}\r\n.nav-bar {\r\n  clear: both;\r\n  clear: left;\r\n}\r\n.card-img-fondo {\r\n  padding: 0%;\r\n  background-image: url('Imagenes-06.png');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  max-width: 100%;\r\n  min-height: 120vh;\r\n}\r\n.imgLogo {\r\n  margin-top: 10rem;\r\n  width: 40%;\r\n}\r\n.section-init {\r\n  position: relative;\r\n  top: -100px;\r\n  /* min-height: 80vh; */\r\n}\r\n.col-init {\r\n  margin-left: 4rem;\r\n  margin-right: 4rem;\r\n  margin-top: 4rem;\r\n  margin: 0 auto;\r\n  padding-left: 5rem;\r\n  padding-right: 5rem;\r\n  padding-top: 5rem;\r\n}\r\n.col-init-btn {\r\n  padding-left: 5rem;\r\n  padding-right: 5rem;\r\n}\r\n.logoLateral {\r\n  margin-top: 15rem;\r\n  right: 5rem;\r\n  max-width: 145%;\r\n  position: absolute;\r\n  margin-bottom: 13%;\r\n  -webkit-filter: drop-shadow(0px 0px 10px #000000);\r\n          filter: drop-shadow(0px 0px 10px #000000);\r\n}\r\n.logoServicios {\r\n  margin-top: 0rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n.botonesInicio {\r\n  border-radius: 7px 7px 7px 7px;\r\n  -moz-border-radius: 7px 7px 7px 7px;\r\n  -webkit-border-radius: 7px 7px 7px 7px;\r\n  border: 0px solid #7d7d82;\r\n  background-color: black;\r\n  color: #ffff;\r\n  height: 4.3rem;\r\n  font-family: \"Poppins\";\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  font-size: 20px;\r\n  margin-bottom: 1.8rem;\r\n}\r\n.botonesInicio:hover {\r\n  background-color: #7d7d82;\r\n}\r\n.rectangulo {\r\n  margin-top: 4rem;\r\n  margin: 0 auto;\r\n  width: 400px;\r\n  height: 120px;\r\n  position: relative;\r\n  background: rgb(28, 169, 166);\r\n}\r\n.redesRectangulo {\r\n  margin-top: 5rem;\r\n  width: 5rem;\r\n}\r\n.redesRectanguloFacebook {\r\n  margin-top: 34px;\r\n  width: 20px;\r\n}\r\n.redesRectanguloTwtitter {\r\n  margin-top: 38px;\r\n  width: 45px;\r\n}\r\n.redesRectanguloInstagram {\r\n  margin-top: 36px;\r\n  width: 40px;\r\n}\r\n.rectangulo2 {\r\n  /* background: rgb(28, 169, 166); */\r\n  background: rgb(174,134,37);\r\n  background: -webkit-gradient(linear, left top, right top, from(rgba(174,134,37,1)), color-stop(33%, rgba(247,239,138,1)), color-stop(81%, rgba(210,172,71,1)));\r\n  background: linear-gradient(90deg, rgba(174,134,37,1) 0%, rgba(247,239,138,1) 33%, rgba(210,172,71,1) 81%);\r\n}\r\n.rectangulo3 {\r\n  width: 50rem;\r\n  height: 8rem;\r\n  position: relative;\r\n  background: rgb(28, 169, 166);\r\n}\r\n.quienesSomos {\r\n  background-image: url('Elementos-08.svg');\r\n  margin-top: 50px !important;\r\n  background-size: 35%;\r\n  background-position: top left;\r\n  background-repeat: no-repeat;\r\n}\r\n.quienesSomos2 {\r\n  background-image: url('Elementos-08.svg');\r\n  margin-top: 0rem !important;\r\n  background-size: 35%;\r\n  background-position: 90% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n.h4QuienesSomos {\r\n  -webkit-text-stroke: 0.9px black;\r\n  color: #ffffff;\r\n  font-family: \"Nobile\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-size: 35px;\r\n  padding-top: 2.5rem;\r\n  padding-bottom: 2rem;\r\n}\r\n.textoInicial {\r\n  margin-top: 3%;\r\n  margin-right: 20%;\r\n  max-width: 70%;\r\n}\r\n.rectanguloAzulfb {\r\n  margin-left: 14rem;\r\n  max-width: 100%;\r\n  margin: 0 auto;\r\n}\r\n.rowContactos {\r\n  max-width: 100%;\r\n  margin-top: 3rem !important;\r\n}\r\n.col-vision2 {\r\n  height: 50vh;\r\n  width: 50vh;\r\n}\r\n.borderPoliticas {\r\n  max-width: 100%;\r\n  margin-left: 7rem;\r\n}\r\n.borderPoliticas2 {\r\n  margin-left: 9rem;\r\n}\r\n.nosotrosFooter {\r\n  margin-left: 7rem;\r\n}\r\n.bordesNuestroEquipo {\r\n  margin-top: 8rem;\r\n}\r\n.iconoEquipo {\r\n  width: 115px;\r\n  height: 115px;\r\n  border-radius: 50%;\r\n}\r\n.ul-equipo {\r\n  list-style: none;\r\n  margin-bottom: 60px;\r\n}\r\n.datosEquipo {\r\n  padding: 0px !important;\r\n  margin-top: 4rem;\r\n}\r\n.imagenEquipo {\r\n  margin-left: 3.5rem;\r\n  margin-top: 3rem;\r\n  width: 22rem;\r\n}\r\n.contactosRedes {\r\n  max-width: 100%;\r\n  margin: 0 auto;\r\n}\r\n.direcciones2 {\r\n  padding: none;\r\n  margin-top: 0px !important;\r\n}\r\n.direcciones {\r\n  padding: none;\r\n  margin-top: 0px !important;\r\n}\r\n.subtitutuloServicio3 {\r\n  font-family: \"Nobile\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-size: 4.3rem;\r\n  color: black;\r\n  margin-right: 2rem;\r\n  margin-top: 2.5rem;\r\n}\r\n.spaceSubtituloServicioDeIngenieria {\r\n  margin-top: 5rem;\r\n}\r\n.spaceSubtituloServicioDeAplicaciones {\r\n  margin-top: 14rem;\r\n}\r\n.btnleermas {\r\n  height: 30rem;\r\n}\r\n.serviciosRow {\r\n  padding: 40px;\r\n  /* border: #000000 solid 2px; */\r\n}\r\n.serviciosRow-1 {\r\n  padding-top: 160px;\r\n  text-align: right;\r\n}\r\n.serviciosRow-2 {\r\n  padding-top: 5px;\r\n  text-align: left;\r\n}\r\n.serviciosRow-3 {\r\n  padding-top: 110px;\r\n  text-align: right;\r\n}\r\n.serviciosContenidoRow {\r\n  margin-top: 15rem !important;\r\n  max-width: 100%;\r\n}\r\n.imgProd {\r\n  margin-left: 8.5rem;\r\n  width: 400px;\r\n}\r\n.modalProd {\r\n  max-width: 540px;\r\n}\r\n.productos {\r\n  margin-top: 25rem !important;\r\n  max-width: 100%;\r\n}\r\n.spacecolbtnSearch {\r\n  margin-top: 2rem;\r\n}\r\n.spacebtnSearch {\r\n  margin-top: 3rem;\r\n  margin-bottom: 2rem;\r\n}\r\n.navProductos {\r\n  margin: 0 auto;\r\n  padding-left: 4rem;\r\n  margin-top: 70px;\r\n}\r\n.espaciosSearch {\r\n  padding: 5rem;\r\n  padding-left: 2rem !important;\r\n}\r\n.diseñoQuienes {\r\n  margin-top: 10%;\r\n  border-right: solid 2px #55a9a6;\r\n}\r\n.textRepresentaciones {\r\n  margin-top: 15rem;\r\n  margin-left: 5rem;\r\n}\r\n.col-mision {\r\n  height: 100vh;\r\n  width: 50vh;\r\n}\r\n.col-vision {\r\n  height: 80vh;\r\n  width: 50vh;\r\n}\r\n.col-valores {\r\n  height: 65vh;\r\n}\r\n.col-padding {\r\n  padding-left: 8rem;\r\n  padding-right: 8rem;\r\n}\r\n.img-mision {\r\n  width: 30%;\r\n}\r\n.container-mision {\r\n  max-width: 90%;\r\n  margin-left: 7% !important;\r\n}\r\n.p-title-mision {\r\n  color: #fff;\r\n  position: relative;\r\n  top: 70px !important;\r\n  margin-left: 5rem;\r\n  font-size: 2.6rem;\r\n  font-family: \"Nobile\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n.p-mision {\r\n  color: #fff;\r\n  margin-top: 80px;\r\n  margin-left: 2rem;\r\n  margin-right: 2rem;\r\n  font-size: 16px;\r\n  font-family: \"Poppins\";\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.hr-mision {\r\n  max-width: 15%;\r\n  border: 1px solid #c1c1c1;\r\n  background: #c1c1c1;\r\n}\r\n.search {\r\n  margin-top: 5rem;\r\n  width: 100%;\r\n  padding: 4rem;\r\n  border-radius: 113px 113px 113px 113px;\r\n  -moz-border-radius: 113px 113px 113px 113px;\r\n  -webkit-border-radius: 113px 113px 113px 113px;\r\n  background-color: rgb(28, 169, 166);\r\n  box-shadow: 0px 0px 32px -5px rgba(0, 0, 0, 0.75);\r\n}\r\n.input-search {\r\n  border-radius: 50px;\r\n}\r\n.fondoAzul {\r\n  min-height: 40vh;\r\n  /* background-color: rgb(28, 169, 166); */\r\n  background: rgb(174,134,37);\r\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(174,134,37,1)), color-stop(33%, rgba(247,239,138,1)), color-stop(81%, rgba(210,172,71,1)));\r\n  background: linear-gradient(180deg, rgba(174,134,37,1) 0%, rgba(247,239,138,1) 33%, rgba(210,172,71,1) 81%);\r\n  border-radius: 126px 0px 119px 0px;\r\n  -moz-border-radius: 126px 0px 119px 0px;\r\n  -webkit-border-radius: 126px 0px 119px 0px;\r\n  border: 0px solid black;\r\n  margin: 2rem;\r\n  padding: 0px !important;\r\n  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n}\r\n.fondoBlanco {\r\n  min-height: 40vh;\r\n  position: relative;\r\n  top: 3rem;\r\n  right: 3rem;\r\n  background-color: rgb(20, 18, 13);\r\n  border-radius: 126px 0px 91px 0px;\r\n  -moz-border-radius: 126px 0px 91px 0px;\r\n  -webkit-border-radius: 126px 0px 91px 0px;\r\n  box-shadow: -4px 14px 8px 0px rgba(0, 0, 0, 0.15);\r\n  padding-bottom: 3rem !important;\r\n  margin-bottom: 5rem !important;\r\n  margin-top: 5rem !important;\r\n}\r\n.circulo {\r\n  width: 120px !important;\r\n  z-index: 2000;\r\n  position: absolute;\r\n  top: 30px;\r\n  left: -20px;\r\n  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n  -o-box-shadow: 10px -10px rgba(0, 0, 0, 0.6);\r\n  border-radius: 100px;\r\n}\r\n.fondoAzul2 {\r\n  height: 75.5vh;\r\n  background-color: rgb(28, 169, 166);\r\n  border-radius: 126px 0px 119px 0px;\r\n  -moz-border-radius: 126px 0px 119px 0px;\r\n  -webkit-border-radius: 126px 0px 119px 0px;\r\n  border: 0px solid black;\r\n  margin-top: 5rem;\r\n  padding: 0px !important;\r\n  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n}\r\n.fondoBlanco2 {\r\n  height: 73vh;\r\n  margin-top: 3rem;\r\n  margin-right: 3rem;\r\n  background-color: rgb(255, 255, 255);\r\n  border-radius: 126px 0px 91px 0px;\r\n  -moz-border-radius: 126px 0px 91px 0px;\r\n  -webkit-border-radius: 126px 0px 91px 0px;\r\n  padding: 0px !important;\r\n  box-shadow: -4px 14px 8px 0px rgba(0, 0, 0, 0.15);\r\n}\r\n.fondoAzul3 {\r\n  height: 57vh;\r\n  background-color: rgb(28, 169, 166);\r\n  border-radius: 126px 0px 119px 0px;\r\n  -moz-border-radius: 126px 0px 119px 0px;\r\n  -webkit-border-radius: 126px 0px 119px 0px;\r\n  border: 0px solid black;\r\n  margin-top: 5rem;\r\n  padding: 0px !important;\r\n  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n}\r\n.fondoBlanco3 {\r\n  height: 55vh;\r\n  margin-top: 3rem;\r\n  margin-right: 3rem;\r\n  background-color: rgb(255, 255, 255);\r\n  border-radius: 126px 0px 91px 0px;\r\n  -moz-border-radius: 126px 0px 91px 0px;\r\n  -webkit-border-radius: 126px 0px 91px 0px;\r\n  padding: 0px !important;\r\n  box-shadow: -4px 14px 8px 0px rgba(0, 0, 0, 0.15);\r\n}\r\n.menu {\r\n  color: #7d7d82;\r\n  font-family: \"Poppins\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-size: 13px;\r\n}\r\n.input-group {\r\n  margin-bottom: 10px;\r\n}\r\n.p-0 {\r\n  padding: 0px !important;\r\n}\r\n.img-company {\r\n  width: 130px;\r\n}\r\n.div-company {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  min-height: 140px !important;\r\n  padding-top: 20px;\r\n}\r\n.div-flex {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  justify-items: center;\r\n}\r\n.menu2 {\r\n  cursor: pointer;\r\n  color: black;\r\n  font-family: \"Poppins\";\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  font-display: swap;\r\n  font-size: 14px;\r\n  border-right: solid rgb(28, 169, 166) 1px;\r\n  border-left: solid rgb(28, 169, 166) 1px;\r\n  border-top: solid rgb(28, 169, 166) 1px;\r\n  border-bottom: solid rgb(28, 169, 166) 1px;\r\n  height: 56px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  align-content: center;\r\n  justify-items: center;\r\n  vertical-align: middle;\r\n  padding: 1rem;\r\n  text-decoration: none;\r\n  /* border-top-left-radius: 15px;\r\n  border-top-right-radius: 15px; */\r\n}\r\n.menu2 a {\r\n  text-decoration: none !important;\r\n}\r\n.menu2:hover {\r\n  border-style: none;\r\n  background-color: rgb(28, 169, 166);\r\n  color: white !important;\r\n}\r\n.nav-tabs {\r\n  border-style: none;\r\n}\r\n.nav-tabs > li.active > a {\r\n  border-style: none;\r\n  background-color: rgb(28, 169, 166);\r\n  color: black;\r\n}\r\n.menu-active {\r\n  border-style: none;\r\n  background-color: rgb(28, 169, 166);\r\n  /* border-top-left-radius: 15px;\r\n  border-top-right-radius: 15px; */\r\n  font-size: 14px;\r\n  font-weight: bold !important;\r\n  color: white;\r\n  overflow-wrap: break-word;\r\n}\r\n.menu-active > a {\r\n  color: white;\r\n}\r\n.producto {\r\n  font-family: \"Nobile\";\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  font-size: 16px;\r\n  color: black;\r\n}\r\n.productoTexto {\r\n  margin: 3rem;\r\n  font-family: \"Nobile\";\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  font-size: 15px;\r\n  color: #7d7d82;\r\n}\r\n.prodcutContainer {\r\n  box-shadow: 0px 0px 32px -13px rgba(0, 0, 0, 0.75);\r\n}\r\n.btnTexto {\r\n  background-color: rgb(28, 169, 166);\r\n  color: #ffffff;\r\n}\r\n.empresas {\r\n  margin-top: 10rem;\r\n  margin-bottom: 10rem;\r\n  width: 10%;\r\n  margin-left: 3.5rem;\r\n}\r\n.row-service {\r\n  margin-top: 110px;\r\n  padding-bottom: 110px;\r\n}\r\n.titutuloServicio {\r\n  font-family: \"Nobile\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-size: 39px;\r\n  color: black;\r\n}\r\n.subtitutuloServicio {\r\n  font-family: \"Nobile\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-size: 36px;\r\n  color: black;\r\n}\r\n.textServicio {\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n  font-family: \"Poppins\";\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  color: black;\r\n  font-size: 16px;\r\n}\r\n.li-services {\r\n  margin-top: 10px;\r\n  list-style: none;\r\n}\r\n.subtitutuloServicio2 {\r\n  font-family: \"Nobile\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-size: 4.3rem;\r\n  color: black;\r\n  margin-left: 4rem;\r\n  margin-top: 2.5rem;\r\n}\r\n.botonServicio {\r\n  border-radius: 110px 110px 110px 110px;\r\n  -moz-border-radius: 110px 110px 110px 110px;\r\n  -webkit-border-radius: 110px 110px 110px 110px;\r\n  background-color: black;\r\n  color: #ffffff;\r\n  width: 158px;\r\n  height: 58px;\r\n  font-family: \"Poppins\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-size: 18px;\r\n}\r\n.botonSearch {\r\n  border-radius: 50px;\r\n  -moz-border-radius: 110px 110px 110px 110px;\r\n  -webkit-border-radius: 110px 110px 110px 110px;\r\n  background-color: black;\r\n  border: solid 1px black;\r\n  color: #ffffff;\r\n  font-family: \"Poppins\";\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n}\r\n.fa-s {\r\n  color: rgb(28, 169, 166);\r\n  font-size: 20px;\r\n}\r\n.input-group-addon {\r\n  border-top-left-radius: 50px;\r\n  border-bottom-left-radius: 50px;\r\n}\r\n.esquina {\r\n  width: 270px !important;\r\n  z-index: 2000;\r\n  position: absolute;\r\n  left: 0px;\r\n  bottom: 0px;\r\n}\r\n.esquina-2 {\r\n  width: 270px !important;\r\n  z-index: 2000;\r\n  position: absolute;\r\n  right: 0px;\r\n  bottom: 0px;\r\n}\r\n.esquina2 {\r\n  width: 40vh !important;\r\n  z-index: 2000;\r\n  position: absolute;\r\n  left: 38rem;\r\n  top: 30rem;\r\n}\r\n.logoContactanos {\r\n  width: 48px;\r\n}\r\n.textoContactanos {\r\n  font-family: \"PoppinsR\";\r\n  font-style: normal;\r\n  font-size: 18px;\r\n  color: rgb(255, 255, 255);\r\n}\r\n.section-contac {\r\n  margin-top: 60px;\r\n}\r\n.row-contact {\r\n  min-height: 73px;\r\n}\r\n.redesContactos {\r\n  margin-top: 0rem;\r\n  width: 20%;\r\n  position: center;\r\n}\r\n.formulario {\r\n  height: 5rem;\r\n  /* margin-bottom: 30px; */\r\n  border-radius: 7px;\r\n  -moz-border-radius: 7px;\r\n  -webkit-border-radius: 7px;\r\n  font-family: 'Poppins';\r\n}\r\n.formularioMensaje {\r\n  border-radius: 7px;\r\n  -moz-border-radius: 7px;\r\n  -webkit-border-radius: 7px;\r\n}\r\n.text-contactanos {\r\n  font-family: \"Poppins\";\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  font-size: 25px;\r\n  color: #ffffff;\r\n  -webkit-text-stroke: 0.7px black;\r\n}\r\n.formularioGeneral {\r\n  padding-left: 5rem;\r\n  padding-right: 5rem;\r\n  padding-top: 2rem;\r\n  padding-bottom: 2rem;\r\n  background: rgb(174,134,37);\r\n  background: -webkit-gradient(linear, left top, right top, from(rgba(174,134,37,1)), color-stop(33%, rgba(247,239,138,1)), color-stop(81%, rgba(210,172,71,1)));\r\n  background: linear-gradient(90deg, rgba(174,134,37,1) 0%, rgba(247,239,138,1) 33%, rgba(210,172,71,1) 81%);\r\n  border-radius: 8px 8px 8px 8px;\r\n  -moz-border-radius: 8px 8px 8px 8px;\r\n  -webkit-border-radius: 8px 8px 8px 8px;\r\n}\r\n.botonContactos {\r\n  border-radius: 50px;\r\n  -moz-border-radius: 50px;\r\n  -webkit-border-radius: 50px;\r\n  background-color: black;\r\n  border: solid #000000 1px;\r\n  color: #ffffff;\r\n  margin-top: 2rem;\r\n  width: 180px;\r\n  height: 50px;\r\n  font-family: \"Poppins\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-size: 20px;\r\n  margin: 0 auto;\r\n}\r\n.equipo {\r\n  background-image: url('FondoNuestroEquipo.jpg');\r\n  margin-top: 80px;\r\n  padding-top: 80px;\r\n  margin-bottom: 80px;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.nombreEquipo {\r\n  font-family: \"Poppins\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  color: #ffffff;\r\n  font-size: 22px;\r\n  margin-bottom: 12px;\r\n}\r\n.numeroContacto {\r\n  font-family: \"Poppins\";\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  color: #ffffff;\r\n  font-size: 22px;\r\n  margin-bottom: 12px;\r\n}\r\n.emailContacto {\r\n  font-family: \"Poppins\";\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  color: #ffffff;\r\n  font-size: 17px;\r\n  margin-bottom: 12px;\r\n}\r\n.correoContacto {\r\n  font-family: \"Poppins\";\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  color: #ffffff;\r\n  font-size: 22px;\r\n  margin: 0px 0px 0px !important;\r\n}\r\n.iconContacto {\r\n  margin-top: 2rem;\r\n  width: 50%;\r\n}\r\n.tituloContacto {\r\n  /* background-color: rgb(28, 169, 166); */\r\n  background: rgb(174,134,37);\r\n  background: -webkit-gradient(linear, left top, right top, from(rgba(174,134,37,1)), color-stop(33%, rgba(247,239,138,1)), color-stop(81%, rgba(210,172,71,1)));\r\n  background: linear-gradient(90deg, rgba(174,134,37,1) 0%, rgba(247,239,138,1) 33%, rgba(210,172,71,1) 81%);\r\n  font-family: \"Poppins\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  color: #ffffff;\r\n  -webkit-text-stroke: 0.9px black;\r\n  font-size: 20px;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n  border-radius: 8px;\r\n}\r\n.fondoservicio {\r\n  background-image: url('FondoServicios.jpg');\r\n  background-repeat: no-repeat;\r\n  padding-top: 80px;\r\n}\r\n.circulo2 {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  background-color: rgba(0, 0, 0, 0.538);\r\n  margin: 0 auto;\r\n}\r\n.mapa {\r\n  background-image: url('Elementos-41.svg');\r\n  background-size: 100%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  padding-top: 120px;\r\n  padding-bottom: 120px;\r\n}\r\n.iconoMapa {\r\n  width: 50%;\r\n  margin-top: 5rem;\r\n}\r\n.div-content-map {\r\n  padding-top: 70px;\r\n}\r\n.rectangulomapa {\r\n  width: 80%;\r\n  min-height: 230px;\r\n  margin: 0 auto;\r\n  /* background: rgb(28, 169, 166); */\r\n  background: rgb(174,134,37);\r\n  background: -webkit-gradient(linear, left top, right top, from(rgba(174,134,37,1)), color-stop(33%, rgba(247,239,138,1)), color-stop(81%, rgba(210,172,71,1)));\r\n  background: linear-gradient(90deg, rgba(174,134,37,1) 0%, rgba(247,239,138,1) 33%, rgba(210,172,71,1) 81%);\r\n  border-radius: 13px 13px 13px 13px;\r\n  -moz-border-radius: 13px 13px 13px 13px;\r\n  -webkit-border-radius: 13px 13px 13px 13px;\r\n}\r\n.textoMapa {\r\n  padding: 2.5rem;\r\n  font-family: \"Poppins\";\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  font-size: 25px;\r\n  color: #ffffff;\r\n}\r\n.esquinasuperiorMapa {\r\n  width: 40vh !important;\r\n  z-index: 2000;\r\n  position: absolute;\r\n  right: 30px;\r\n  top: 40px;\r\n}\r\n@media only screen and (max-width: 2000px)  and (min-width: 1080px) {\r\n  .esquinaINFERIORMapa {\r\n    width: 40vh !important;\r\n    z-index: 2000;\r\n    position: absolute;\r\n    left: 30px;\r\n    bottom: -90px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1080px){\r\n  .esquinaINFERIORMapa {\r\n    width: 40vh !important;\r\n    z-index: 2000;\r\n    position: absolute;\r\n    left: 30px;\r\n    bottom: -10px;\r\n  }\r\n}\r\n.esquinaINFERIORQUIENES {\r\n  width: 40vh !important;\r\n  z-index: 2000;\r\n  position: absolute;\r\n  left: -10px;\r\n  bottom: -25px;\r\n}\r\n.esquinaSUPERIORQUIENES {\r\n  width: 40vh !important;\r\n  z-index: 2000;\r\n  position: absolute;\r\n  right: -10px;\r\n  top: -25px;\r\n}\r\n.fondofooter {\r\n  background-color: black;\r\n  padding-top: 50px;\r\n}\r\n.tituloFooter {\r\n  font-family: \"Poppins\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  color: #ffffff;\r\n  font-size: 20px;\r\n}\r\n.linea {\r\n  background-color: #ffff;\r\n  border: solid 1px rgb(255, 255, 255);\r\n  width: 100px;\r\n  margin: 0 auto;\r\n  margin-top: 15px !important;\r\n\r\n}\r\n.textoFooter {\r\n  font-family: \"Poppins\";\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  color: #ffffff;\r\n}\r\n.fondo-nikola {\r\n  max-width: 100%;\r\n  margin: 0 auto;\r\n  background-color: rgb(28, 169, 166);\r\n}\r\n.footerSubtitulos {\r\n  font-family: \"Poppins\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  color: #ffffff;\r\n  font-size: 15px;\r\n  padding: 0.5rem;\r\n}\r\n.footerSubtitulos2 {\r\n  font-family: \"Poppins\";\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  color: #ffffff;\r\n  font-size: 15px;\r\n  padding: 0.5rem;\r\n}\r\n.iconoFooter {\r\n  margin: 0px !important;\r\n  padding: 0px !important;\r\n  width: 3rem;\r\n}\r\n.iconoFooter1 {\r\n  margin: 0px !important;\r\n  padding: 0px !important;\r\n  width: 3rem;\r\n}\r\n.tituloQuienesSomos {\r\n  font-family: \"Nobile\";\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-size: 24px;\r\n  color: black;\r\n}\r\n.logoQuienesSomos {\r\n  margin-top: 45px;\r\n  margin-bottom: 45px;\r\n  width: 70%;\r\n}\r\n.textoQuienesSomos {\r\n  font-family: \"Poppins\";\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  color: white;\r\n  font-size: 17px;\r\n}\r\n.icon-bar {\r\n  background-color: #606060;\r\n}\r\n.off-canvas-sidebar .navbar-collapse {\r\n  top: 0px !important;\r\n  margin: 0 !important;\r\n  height: 100vh !important;\r\n  display: block !important;\r\n}\r\n.navDimensiones {\r\n  z-index: 999 !important;\r\n  margin-bottom: 0%;\r\n  background-color: transparent;\r\n}\r\n.navDimensiones2 {\r\n  margin-top: 25px;\r\n  margin-bottom: 0%;\r\n}\r\n.icon-bar {\r\n  background: rgb(28, 169, 166);\r\n}\r\n.off-canvas-sidebar .navbar-collapse {\r\n  top: 0px !important;\r\n  margin: 0 !important;\r\n  height: 100vh !important;\r\n  display: block !important;\r\n}\r\n.logo-nikola {\r\n  max-width: 10rem;\r\n  color: #606060;\r\n}\r\n.bb {\r\n  border: solid #000000 1px;\r\n}\r\n.bw {\r\n  border: solid #ffffff 1px;\r\n}\r\n/* .quienesSomosDerecha {\r\n  width: 100%;\r\n  background-color: rgb(28, 169, 166);\r\n  border-radius: 25px 25px 25px 25px;\r\n  -moz-border-radius: 25px 25px 25px 25px;\r\n  -webkit-border-radius: 25px 25px 25px 25px;\r\n} */\r\n.quienesSomosDerecha {\r\n  width: 100%;\r\n  background-color: rgb(28, 169, 166);\r\n  border-radius: 25px 25px 25px 25px;\r\n  -moz-border-radius: 25px 25px 25px 25px;\r\n  -webkit-border-radius: 25px 25px 25px 25px;\r\n  padding: 2rem;\r\n}\r\n@media (max-width: 100%) {\r\n  .menu {\r\n    color: #fff;\r\n    font-family: \"Univers LT Std\";\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-size: 20px;\r\n  }\r\n}\r\n@media (max-width: 1280px) {\r\n}\r\n@media (max-width: 1200px) {\r\n}\r\n@media (max-width: 992px) {\r\n  .serviciosRow-1 {\r\n    padding-top: 80px;\r\n    padding-bottom: 80px;\r\n    text-align: center;\r\n  }\r\n  .serviciosRow-2 {\r\n    padding-top: 80px;\r\n    padding-bottom: 80px;\r\n    text-align: center;\r\n  }\r\n  .serviciosRow-3 {\r\n    padding-top: 60px;\r\n    padding-bottom: 60px;\r\n    text-align: center;\r\n  }\r\n  .logoQuienesSomos {\r\n    margin-bottom: 100px !important;\r\n  }\r\n  .tituloQuienesSomos {\r\n    font-size: 24px;\r\n    text-align: center !important;\r\n  }\r\n  .card-img-fondo {\r\n    text-align: center !important;\r\n    min-height: 100vh;\r\n  }\r\n  .col-init {\r\n    text-align: center !important;\r\n  }\r\n  .imgLogo {\r\n    width: 70%;\r\n  }\r\n  .logoLateral {\r\n    max-width: 80% !important;\r\n    margin: 0 auto;\r\n    margin-top: 40px !important;\r\n  }\r\n  .diseñoQuienes {\r\n    margin-top: 10%;\r\n    border-right: solid 2px transparent !important;\r\n  }\r\n  /* .menu2 {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-items: center;\r\n    vertical-align: middle;\r\n    padding: 1rem;\r\n    text-decoration: none;\r\n    border-top-left-radius: 15px !important;\r\n    border-top-right-radius: 0px !important;\r\n    border-bottom-right-radius: 15px !important;\r\n    border-bottom-left-radius: 0px !important;\r\n    margin: 1rem;\r\n  } */\r\n  .esquina {\r\n    bottom: -20px;\r\n  }\r\n  .serviciosRow {\r\n    text-align: center !important;\r\n  }\r\n  .logoServicios {\r\n    margin-top: 0rem;\r\n    width: 100%;\r\n    margin: 0 auto !important;\r\n  }\r\n  .textoInicial {\r\n    min-width: 100% !important;\r\n  }\r\n  .textInicio {\r\n    font-family: \"Poppins\";\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    color: #7d7d82;\r\n    font-size: 22px;\r\n  }\r\n  .logoLateral {\r\n    max-width: 100%;\r\n    position: relative;\r\n    right: 0px;\r\n    margin-bottom: 50px;\r\n  }\r\n  .borderPoliticas2 {\r\n    margin-left: 15rem !important;\r\n  }\r\n  .col-mision {\r\n    margin-left: 28rem !important;\r\n    height: 90vh !important;\r\n    width: 50vh;\r\n  }\r\n  .col-vision {\r\n    top: 5rem;\r\n    height: 50vh;\r\n    width: 50vh;\r\n    margin-left: 25rem !important;\r\n  }\r\n  .col-vision2 {\r\n    top: 15rem !important;\r\n    right: -8rem !important;\r\n    height: 50vh;\r\n    width: 50vh;\r\n    margin-bottom: 15rem;\r\n  }\r\n  .fondoBlanco2 {\r\n    width: 35vh !important;\r\n    height: 48vh !important;\r\n    margin-top: 3rem;\r\n    margin-right: 3rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 126px 0px 91px 0px;\r\n    -moz-border-radius: 126px 0px 91px 0px;\r\n    -webkit-border-radius: 126px 0px 91px 0px;\r\n    box-shadow: -4px 14px 8px 0px rgba(0, 0, 0, 0.15);\r\n    padding: 0px !important;\r\n  }\r\n  .fondoAzul2 {\r\n    width: 39vh !important;\r\n    height: 50vh !important;\r\n    background-color: rgb(28, 169, 166);\r\n    border-radius: 126px 0px 119px 0px;\r\n    -moz-border-radius: 126px 0px 119px 0px;\r\n    -webkit-border-radius: 126px 0px 119px 0px;\r\n    border: 0px solid black;\r\n    margin-top: 1rem !important;\r\n    padding: 0px !important;\r\n    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n  }\r\n  .fondoBlanco3 {\r\n    width: 35vh !important;\r\n    height: 37vh !important;\r\n    margin-top: 3rem;\r\n    margin-right: 3rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 126px 0px 91px 0px;\r\n    -moz-border-radius: 126px 0px 91px 0px;\r\n    -webkit-border-radius: 126px 0px 91px 0px;\r\n    box-shadow: -4px 14px 8px 0px rgba(0, 0, 0, 0.15);\r\n    padding: 0px !important;\r\n  }\r\n  .fondoAzul3 {\r\n    width: 39vh !important;\r\n    height: 39vh !important;\r\n    background-color: rgb(28, 169, 166);\r\n    border-radius: 126px 0px 119px 0px;\r\n    -moz-border-radius: 126px 0px 119px 0px;\r\n    -webkit-border-radius: 126px 0px 119px 0px;\r\n    border: 0px solid black;\r\n    margin-top: 1rem !important;\r\n    padding: 0px !important;\r\n    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n  }\r\n  .espaciosSearch {\r\n    padding: 2rem !important;\r\n    padding-left: 0rem !important;\r\n  }\r\n  .brand .b-search input[type=\"text\"] {\r\n    width: 110% !important;\r\n    height: 35px !important;\r\n    border-color: #ffffff;\r\n    border-radius: 113px 113px 113px 113px;\r\n    -moz-border-radius: 113px 113px 113px 113px;\r\n    -webkit-border-radius: 113px 113px 113px 113px;\r\n  }\r\n  .spacecolbtnSearch {\r\n    margin-top: 0rem !important;\r\n  }\r\n  .spacebtnSearch {\r\n    margin-top: 2rem !important;\r\n    margin-bottom: 2rem;\r\n  }\r\n  .esquina2 {\r\n    max-width: 30vh !important;\r\n    z-index: 2000;\r\n    position: absolute;\r\n    left: 18rem !important;\r\n    top: 22rem !important;\r\n  }\r\n  .datosEquipo {\r\n    padding: 0px !important;\r\n    margin-left: 15rem !important;\r\n  }\r\n  \r\n  .mostrar5 {\r\n    display: none;\r\n  }\r\n  .mostrar6 {\r\n    text-align: justify;\r\n  }\r\n  \r\n}\r\n@media (max-width: 869px) {\r\n  .card-img-fondo {\r\n    min-height: 80vh;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  .serviciosRow-1 {\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n    text-align: center;\r\n  }\r\n  .esquinaINFERIORQUIENES {\r\n    left: -10px;\r\n    bottom: -25px;\r\n  }\r\n  \r\n  .botonesInicio {\r\n    margin-top: 20px;\r\n  }\r\n  .imgLogo {\r\n    width: 90%;\r\n  }\r\n  .card-img-fondo {\r\n    min-height: 60vh;\r\n  }\r\n  .diseñoQuienes {\r\n    margin-top: 10%;\r\n    border-right: solid 2px transparent !important;\r\n  }\r\n  .logoQuienesSomos {\r\n    margin-bottom: 120px !important;\r\n    width: 100%;\r\n  }\r\n}\r\n@media (max-width: 576px) {\r\n  .card-img-fondo {\r\n    min-height: 50vh;\r\n  }\r\n}\r\n@media (min-width: 1295px) {\r\n  .nav-bar {\r\n    margin-top: 100px;\r\n  }\r\n}\r\n@media (min-width: 1295px) {\r\n  .nav-bar {\r\n    margin-top: 100px;\r\n  }\r\n}\r\n@media (max-width: 2304px) {\r\n}\r\n@media (max-width: 1280px) {\r\n  \r\n  .fondoBlanco2 {\r\n    height: 85vh !important;\r\n    margin-top: 3rem;\r\n    margin-right: 3rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 126px 0px 91px 0px;\r\n    -moz-border-radius: 126px 0px 91px 0px;\r\n    -webkit-border-radius: 126px 0px 91px 0px;\r\n    padding: 0px !important;\r\n    box-shadow: -4px 14px 8px 0px rgba(0, 0, 0, 0.15);\r\n  }\r\n  .fondoAzul2 {\r\n    height: 88vh !important;\r\n    background-color: rgb(28, 169, 166);\r\n    border-radius: 126px 0px 119px 0px;\r\n    -moz-border-radius: 126px 0px 119px 0px;\r\n    -webkit-border-radius: 126px 0px 119px 0px;\r\n    border: 0px solid black;\r\n    margin-top: 5rem;\r\n    padding: 0px !important;\r\n    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n  }\r\n  .fondoBlanco3 {\r\n    height: 60vh !important;\r\n    margin-top: 3rem;\r\n    margin-right: 3rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 126px 0px 91px 0px;\r\n    -moz-border-radius: 126px 0px 91px 0px;\r\n    -webkit-border-radius: 126px 0px 91px 0px;\r\n    padding: 0px !important;\r\n    box-shadow: -4px 14px 8px 0px rgba(0, 0, 0, 0.15);\r\n  }\r\n  .fondoAzul3 {\r\n    height: 63vh !important;\r\n    background-color: rgb(28, 169, 166);\r\n    border-radius: 126px 0px 119px 0px;\r\n    -moz-border-radius: 126px 0px 119px 0px;\r\n    -webkit-border-radius: 126px 0px 119px 0px;\r\n    border: 0px solid black;\r\n    margin-top: 5rem;\r\n    padding: 0px !important;\r\n    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n  }\r\n  .productos {\r\n    margin-top: 0rem !important;\r\n    max-width: 98% !important;\r\n    margin-left: 1rem;\r\n  }\r\n  .empresas {\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 2rem !important;\r\n    width: 10%;\r\n    margin-left: 3.5rem;\r\n  }\r\n  .mostrarServicio4 {\r\n    display: none;\r\n  }\r\n  .mostrarServicio2 {\r\n    display: none;\r\n  }\r\n  .bordesNuestroEquipo {\r\n    margin-top: 8rem !important;\r\n  }\r\n}\r\n@media (max-width: 1200px) {\r\n  .borderPoliticas2 {\r\n    margin-left: 5rem !important;\r\n  }\r\n  .fondoBlanco2 {\r\n    width: 35vh !important;\r\n    height: 48vh !important;\r\n    margin-top: 3rem;\r\n    margin-right: 3rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 126px 0px 91px 0px;\r\n    -moz-border-radius: 126px 0px 91px 0px;\r\n    -webkit-border-radius: 126px 0px 91px 0px;\r\n    box-shadow: -4px 14px 8px 0px rgba(0, 0, 0, 0.15);\r\n    padding: 0px !important;\r\n  }\r\n  .fondoAzul2 {\r\n    width: 39vh !important;\r\n    height: 50vh !important;\r\n    background-color: rgb(28, 169, 166);\r\n    border-radius: 126px 0px 119px 0px;\r\n    -moz-border-radius: 126px 0px 119px 0px;\r\n    -webkit-border-radius: 126px 0px 119px 0px;\r\n    border: 0px solid black;\r\n    margin-top: 1rem !important;\r\n    padding: 0px !important;\r\n    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n  }\r\n  .fondoBlanco3 {\r\n    width: 35vh !important;\r\n    height: 37vh !important;\r\n    margin-top: 3rem;\r\n    margin-right: 3rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 126px 0px 91px 0px;\r\n    -moz-border-radius: 126px 0px 91px 0px;\r\n    -webkit-border-radius: 126px 0px 91px 0px;\r\n    box-shadow: -4px 14px 8px 0px rgba(0, 0, 0, 0.15);\r\n    padding: 0px !important;\r\n  }\r\n  .fondoAzul3 {\r\n    width: 39vh !important;\r\n    height: 39vh !important;\r\n    background-color: rgb(28, 169, 166);\r\n    border-radius: 126px 0px 119px 0px;\r\n    -moz-border-radius: 126px 0px 119px 0px;\r\n    -webkit-border-radius: 126px 0px 119px 0px;\r\n    border: 0px solid black;\r\n    margin-top: 1rem !important;\r\n    padding: 0px !important;\r\n    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n  }\r\n  .espaciosSearch {\r\n    padding: 3rem !important;\r\n    padding-left: 0rem !important;\r\n  }\r\n  .brand .b-search input[type=\"text\"] {\r\n    width: 115% !important;\r\n    height: 45px !important;\r\n    border-color: #ffffff;\r\n    border-radius: 113px 113px 113px 113px;\r\n    -moz-border-radius: 113px 113px 113px 113px;\r\n    -webkit-border-radius: 113px 113px 113px 113px;\r\n  }\r\n  .spacecolbtnSearch {\r\n    margin-top: 0rem !important;\r\n  }\r\n  .spacebtnSearch {\r\n    margin-top: 3rem !important;\r\n    margin-bottom: 2rem;\r\n  }\r\n  .productos {\r\n    margin-top: 0rem !important;\r\n    max-width: 98% !important;\r\n    margin-left: 1.3rem;\r\n  }\r\n  .empresas {\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 2rem !important;\r\n    width: 10%;\r\n    margin-left: 3.5rem;\r\n  }\r\n  .mostrarServicio4 {\r\n    display: none;\r\n  }\r\n  .mostrarServicio2 {\r\n    display: none;\r\n  }\r\n  .esquina2 {\r\n    max-width: 30vh !important;\r\n    z-index: 2000;\r\n    position: absolute;\r\n    left: 35rem !important;\r\n    top: 22rem !important;\r\n  }\r\n  .bordesNuestroEquipo {\r\n    margin-top: 8rem !important;\r\n  }\r\n}\r\n@media (max-width: 869px) {\r\n  .textInicio {\r\n    font-family: \"Poppins\";\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    color: #7d7d82;\r\n    font-size: 22px;\r\n  }\r\n  .col-mision {\r\n    height: 90vh !important;\r\n    width: 50vh;\r\n    margin-left: 15rem !important;\r\n  }\r\n  .col-vision {\r\n    top: 2rem;\r\n    height: 50vh;\r\n    width: 50vh;\r\n    margin-left: 22rem !important;\r\n  }\r\n  .col-vision2 {\r\n    margin-left: 12rem !important;\r\n    top: 0rem !important;\r\n    right: -10rem !important;\r\n    height: 50vh;\r\n    width: 50vh;\r\n    margin-bottom: 0rem;\r\n    height: 50vh;\r\n    width: 50vh;\r\n  }\r\n  .fondoAzul2 {\r\n    height: 50vh !important;\r\n    background-color: rgb(28, 169, 166);\r\n    border-radius: 126px 0px 119px 0px;\r\n    -moz-border-radius: 126px 0px 119px 0px;\r\n    -webkit-border-radius: 126px 0px 119px 0px;\r\n    border: 0px solid black;\r\n    margin-top: 10rem !important;\r\n    padding: 0px !important;\r\n    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n  }\r\n  .fondoBlanco2 {\r\n    height: 48vh !important;\r\n    margin-top: 3rem;\r\n    margin-right: 3rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 126px 0px 91px 0px;\r\n    -moz-border-radius: 126px 0px 91px 0px;\r\n    -webkit-border-radius: 126px 0px 91px 0px;\r\n    padding: 0px !important;\r\n    box-shadow: -4px 14px 8px 0px rgba(0, 0, 0, 0.15);\r\n  }\r\n  .fondoAzul3 {\r\n    height: 38vh !important;\r\n    background-color: rgb(28, 169, 166);\r\n    border-radius: 126px 0px 119px 0px;\r\n    -moz-border-radius: 126px 0px 119px 0px;\r\n    -webkit-border-radius: 126px 0px 119px 0px;\r\n    border: 0px solid black;\r\n    margin-top: 10rem !important;\r\n    padding: 0px !important;\r\n    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n  }\r\n  .fondoBlanco3 {\r\n    height: 36vh !important;\r\n    margin-top: 3rem;\r\n    margin-right: 3rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 126px 0px 91px 0px;\r\n    -moz-border-radius: 126px 0px 91px 0px;\r\n    -webkit-border-radius: 126px 0px 91px 0px;\r\n    padding: 0px !important;\r\n    box-shadow: -4px 14px 8px 0px rgba(0, 0, 0, 0.15);\r\n  }\r\n  .espaciosSearch {\r\n    padding: 2rem !important;\r\n    padding-left: 0rem !important;\r\n  }\r\n  .brand .b-search input[type=\"text\"] {\r\n    width: 110% !important;\r\n    height: 35px !important;\r\n    border-color: #ffffff;\r\n    border-radius: 113px 113px 113px 113px;\r\n    -moz-border-radius: 113px 113px 113px 113px;\r\n    -webkit-border-radius: 113px 113px 113px 113px;\r\n  }\r\n  .spacecolbtnSearch {\r\n    margin-top: 0rem !important;\r\n  }\r\n  .spacebtnSearch {\r\n    margin-top: 2rem !important;\r\n    margin-bottom: 2rem;\r\n  }\r\n  .mostrarServicio1 {\r\n    top: -85rem !important;\r\n    width: 45% !important;\r\n    left: 10% !important;\r\n    position: relative;\r\n  }\r\n  .spaceSubtituloServicioDeIngenieria {\r\n    top: -95rem !important;\r\n    width: 85%;\r\n    left: 5%;\r\n    right: 0%;\r\n    position: relative;\r\n  }\r\n  .esquina2 {\r\n    display: none;\r\n  }\r\n  .spaceSubtituloServicioDeAplicaciones {\r\n    top: -120rem !important;\r\n  }\r\n  .mostrarServicio3 {\r\n    top: -200rem !important;\r\n    width: 35% !important;\r\n    left: 15% !important;\r\n    right: 0%;\r\n    position: relative;\r\n  }\r\n  .rowContactos {\r\n    margin-left: 20rem !important;\r\n    margin-top: 2rem !important;\r\n    max-width: 100%;\r\n  }\r\n  .contactosRedes {\r\n    max-width: 100% !important;\r\n    margin-right: 12rem !important;\r\n  }\r\n  .imagenEquipo {\r\n    margin-left: 5rem;\r\n    top: -8rem !important;\r\n    width: 15rem !important;\r\n  }\r\n  .datosEquipo {\r\n    padding: 0px !important;\r\n    top: -10rem !important;\r\n  }\r\n  .bordesNuestroEquipo {\r\n    margin-top: 2rem !important;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  .textInicio {\r\n    font-family: \"Poppins\";\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    color: #7d7d82;\r\n    font-size: 20px;\r\n  }\r\n  .textRepresentaciones {\r\n    margin-top: 0rem !important;\r\n    margin-left: 55rem;\r\n  }\r\n  .quienesSomos2 {\r\n    background-image: url('Elementos-08.svg');\r\n    margin-top: 0rem !important;\r\n    background-size: 40%;\r\n    background-position: 95% 100%;\r\n    background-repeat: no-repeat;\r\n  }\r\n  .col-mision {\r\n    height: 90vh !important;\r\n    width: 50vh;\r\n  }\r\n  .col-vision {\r\n    height: 50vh;\r\n    width: 50vh;\r\n  }\r\n  .fondoAzul2 {\r\n    height: 47vh !important;\r\n    background-color: rgb(28, 169, 166);\r\n    border-radius: 126px 0px 119px 0px;\r\n    -moz-border-radius: 126px 0px 119px 0px;\r\n    -webkit-border-radius: 126px 0px 119px 0px;\r\n    border: 0px solid black;\r\n    margin-top: 10rem !important;\r\n    padding: 0px !important;\r\n    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n  }\r\n  .fondoBlanco2 {\r\n    height: 45vh !important;\r\n    margin-top: 3rem;\r\n    margin-right: 3rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 126px 0px 91px 0px;\r\n    -moz-border-radius: 126px 0px 91px 0px;\r\n    -webkit-border-radius: 126px 0px 91px 0px;\r\n    padding: 0px !important;\r\n    box-shadow: -4px 14px 8px 0px rgba(0, 0, 0, 0.15);\r\n  }\r\n  .fondoAzul3 {\r\n    height: 37vh !important;\r\n    background-color: rgb(28, 169, 166);\r\n    border-radius: 126px 0px 119px 0px;\r\n    -moz-border-radius: 126px 0px 119px 0px;\r\n    -webkit-border-radius: 126px 0px 119px 0px;\r\n    border: 0px solid black;\r\n    margin-top: 10rem !important;\r\n    padding: 0px !important;\r\n    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);\r\n  }\r\n  .fondoBlanco3 {\r\n    height: 35vh !important;\r\n    margin-top: 3rem;\r\n    margin-right: 3rem;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 126px 0px 91px 0px;\r\n    -moz-border-radius: 126px 0px 91px 0px;\r\n    -webkit-border-radius: 126px 0px 91px 0px;\r\n    padding: 0px !important;\r\n    box-shadow: -4px 14px 8px 0px rgba(0, 0, 0, 0.15);\r\n  }\r\n  .espaciosSearch {\r\n    padding: 2rem !important;\r\n    padding-left: 0rem !important;\r\n  }\r\n  .brand .b-search input[type=\"text\"] {\r\n    width: 110% !important;\r\n    height: 35px !important;\r\n    border-color: #ffffff;\r\n    border-radius: 113px 113px 113px 113px;\r\n    -moz-border-radius: 113px 113px 113px 113px;\r\n    -webkit-border-radius: 113px 113px 113px 113px;\r\n  }\r\n  .spacecolbtnSearch {\r\n    margin-top: 0rem !important;\r\n  }\r\n  .spacebtnSearch {\r\n    margin-top: 2rem !important;\r\n    margin-bottom: 2rem;\r\n  }\r\n  .productos {\r\n    margin-top: 0rem !important;\r\n    max-width: 98% !important;\r\n    margin-left: 1rem;\r\n  }\r\n  .modal-dialog {\r\n    /* max-width: 30% !important; */\r\n  }\r\n  /* .imgProd {\r\n    margin-left: 0rem !important;\r\n    width: 500px !important;\r\n  } */\r\n  .empresas {\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 2rem !important;\r\n    width: 10%;\r\n    margin-left: 3.5rem;\r\n  }\r\n  .serviciosContenidoRow {\r\n    margin-top: 0rem !important;\r\n    max-width: 100%;\r\n  }\r\n  .subtitutuloServicio3 {\r\n    font-family: \"Nobile\";\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-size: 4.3rem;\r\n    color: black;\r\n    margin-left: 8rem !important;\r\n    text-align: center;\r\n    top: 2.5rem !important;\r\n  }\r\n  .mostrarServicio3 {\r\n    display: none;\r\n  }\r\n  .mostrarServicio4 {\r\n    top: -150rem !important;\r\n    width: 45%;\r\n    left: 33%;\r\n    right: 0%;\r\n    position: relative;\r\n  }\r\n  .spaceSubtituloServicioDeAplicaciones {\r\n    top: -50rem !important;\r\n  }\r\n  .btnleermas {\r\n    height: 15rem !important;\r\n  }\r\n  .mostrarServicio2 {\r\n    z-index: 20000 !important;\r\n    width: 45% !important;\r\n    left: 30% !important;\r\n    top: -58rem !important;\r\n    position: relative;\r\n  }\r\n  .mostrarServicio1 {\r\n    display: none;\r\n  }\r\n  .spaceSubtituloServicioDeIngenieria {\r\n    top: -50rem !important;\r\n  }\r\n  .esquina2 {\r\n    display: none;\r\n  }\r\n  .direcciones {\r\n    padding: none;\r\n    top: -8rem !important;\r\n    margin-left: 15rem;\r\n  }\r\n  .direcciones2 {\r\n    padding: none;\r\n    text-align: left;\r\n    top: -8rem !important;\r\n    margin-left: 26.5rem;\r\n  }\r\n  .contactosRedes {\r\n    max-width: 100% !important;\r\n    margin-right: 12rem !important;\r\n  }\r\n  .imagenEquipo {\r\n    margin-left: 5rem;\r\n    top: -8rem !important;\r\n    width: 15rem !important;\r\n  }\r\n  .datosEquipo {\r\n    padding: 0px !important;\r\n    top: -10rem !important;\r\n  }\r\n  .bordesNuestroEquipo {\r\n    margin-top: 2rem !important;\r\n  }\r\n  .fondo-nikola {\r\n    max-width: 100%;\r\n    margin: 0 auto;\r\n    background-color: rgb(28, 169, 166);\r\n  }\r\n  .nosotrosFooter {\r\n    margin-left: 3rem !important;\r\n  }\r\n}\r\n@media (max-width: 576px) {\r\n}\r\n@media (max-width: 500px) {\r\n}\r\n@media (max-width: 414px) {\r\n  .mostrar7 {\r\n    margin-top: 4rem;\r\n    width: 30rem !important;\r\n    height: 15rem !important;\r\n    position: relative;\r\n    background: rgb(28, 169, 166);\r\n    left: 8rem !important;\r\n  }\r\n  .rectanguloAzulfb {\r\n    margin-left: 0rem !important;\r\n    -webkit-box-align: left !important;\r\n            align-items: left !important;\r\n    text-align: left !important;\r\n  }\r\n}\r\n@media (max-width: 360px) {\r\n}\r\n@media (max-width: 300px) {\r\n}\r\n@media only screen and (max-width: 2000px)  and (min-width: 1500px) {\r\n\r\n  #myCarousel{\r\n    margin-top: 5%;\r\n    height: 900px !important;\r\n  }\r\n\r\n  .redux-img{\r\n    height: 900px !important;\r\n    width: 1800px !important;\r\n  }\r\n\r\n  .row-init {\r\n    min-height: 80vh;\r\n  }\r\n}\r\n@media only screen and (max-width: 1500px)  and (min-width: 850px) {\r\n\r\n  .item{\r\n    height: 700px !important;\r\n    width: 800px !important;\r\n  }\r\n\r\n  #myCarousel{\r\n    margin-top: 5%;\r\n    height: 700px !important;\r\n  }\r\n\r\n  .redux-img{\r\n    height: 700px !important;\r\n    width: 800px !important;\r\n  }\r\n\r\n  .row-init {\r\n    min-height: 40vh;\r\n  }\r\n}\r\n@media only screen and (max-width: 1500px)  and (min-width: 1000px) {\r\n\r\n  .item{\r\n    height: 700px !important;\r\n    width: 1300px !important;\r\n  }\r\n\r\n  #myCarousel{\r\n    margin-top: 5%;\r\n    height: 700px !important;\r\n  }\r\n\r\n  .redux-img{\r\n    height: 700px !important;\r\n    width: 1300px !important;\r\n  }\r\n\r\n  .row-init {\r\n    min-height: 80vh;\r\n  }\r\n}\r\n@media only screen and (max-width: 849px)  and (min-width: 800px) {\r\n\r\n  .item{\r\n    height: 700px !important;\r\n    width: 800px !important;\r\n  }\r\n\r\n  #myCarousel{\r\n    margin-top: 5%;\r\n    height: 700px !important;\r\n  }\r\n\r\n  .redux-img{\r\n    height: 700px !important;\r\n    width: 800px !important;\r\n  }\r\n\r\n  .row-init {\r\n    min-height: 40vh;\r\n  }\r\n}\r\n@media only screen and (max-width: 800px) { \r\n\r\n\r\n    #myCarousel{\r\n      margin-top: 10%;\r\n      margin-bottom: -15%;\r\n      height: 200px !important;\r\n    }\r\n\r\n    .redux-img{\r\n      height: 200px !important;\r\n      width: 1800px !important;\r\n    }\r\n\r\n  }\r\nbody{\r\n  background-color: #000000 !important;\r\n}\r\nmat-dialog-container{\r\n  background: rgb(174,134,37) !important;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(174,134,37,1)), color-stop(33%, rgba(247,239,138,1)), color-stop(81%, rgba(210,172,71,1))) !important;\r\n  background: linear-gradient(180deg, rgba(174,134,37,1) 0%, rgba(247,239,138,1) 33%, rgba(210,172,71,1) 81%) !important;\r\n  /* Other CSS Styles */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QjsyQ0FDNEQ7RUFDNUQsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQjs0Q0FDNkQ7RUFDN0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQjswQ0FDMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qjs0Q0FDNkQ7RUFDN0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qjs4Q0FDK0Q7RUFDL0QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7QUFJQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCx3Q0FB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RUY7QUFLRjtFQUNFLG9DQUFvQztBQUN0QztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDJLQUFzSDtFQUF0SCxzSEFBc0g7RUFDdEgscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXHJcbiAgICB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvUG9wcGlucy1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vYmlsZVwiO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL05vYmlsZS1NZWRpdW0ud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXHJcbiAgICB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvTm9iaWxlLU1lZGl1bS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vYmlsZVwiO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL05vYmlsZS1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxyXG4gICAgdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL05vYmlsZS1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zLUxpZ2h0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxyXG4gICAgdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMtTGlnaHQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zUlwiO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcclxuICAgIHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcclxufVxyXG4uY2FyZC1wcm9kdWN0IHtcclxuICBoZWlnaHQ6IDY1dmg7XHJcbn1cclxuLmxpLW1lbnUge1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5yb3ctdy0xMDAge1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5yb3ctdy02MCB7XHJcbiAgbWF4LXdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ucm93LXctODAge1xyXG4gIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnJvdy13LTkwIHtcclxuICBtYXgtd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEge1xyXG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG59XHJcbi5pbWdOYXYge1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG4udGV4dEluaWNpbyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjN2Q3ZDgyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm9wYzpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmMwMDk7XHJcbn1cclxuXHJcbi5vcGNNZW51OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDE2OSwgMTY2KTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuXHJcblxyXG4ubmF2LWJhciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgY2xlYXI6IGxlZnQ7XHJcbn1cclxuLmNhcmQtaW1nLWZvbmRvIHtcclxuICBwYWRkaW5nOiAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL0ltYWdlbmVzLTA2LnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHZoO1xyXG59XHJcbi5pbWdMb2dvIHtcclxuICBtYXJnaW4tdG9wOiAxMHJlbTtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcbi5zZWN0aW9uLWluaXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xMDBweDtcclxuICAvKiBtaW4taGVpZ2h0OiA4MHZoOyAqL1xyXG59XHJcbi5jb2wtaW5pdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xyXG4gIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbiAgcGFkZGluZy10b3A6IDVyZW07XHJcbn1cclxuLmNvbC1pbml0LWJ0biB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbn1cclxuLmxvZ29MYXRlcmFsIHtcclxuICBtYXJnaW4tdG9wOiAxNXJlbTtcclxuICByaWdodDogNXJlbTtcclxuICBtYXgtd2lkdGg6IDE0NSU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEzJTtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCAjMDAwMDAwKTtcclxufVxyXG4ubG9nb1NlcnZpY2lvcyB7XHJcbiAgbWFyZ2luLXRvcDogMHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uYm90b25lc0luaWNpbyB7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCA3cHggN3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogN3B4IDdweCA3cHggN3B4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4IDdweCA3cHggN3B4O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICM3ZDdkODI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6ICNmZmZmO1xyXG4gIGhlaWdodDogNC4zcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xyXG59XHJcbi5ib3RvbmVzSW5pY2lvOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q3ZDgyO1xyXG59XHJcbi5yZWN0YW5ndWxvIHtcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjgsIDE2OSwgMTY2KTtcclxufVxyXG4ucmVkZXNSZWN0YW5ndWxvIHtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG59XHJcbi5yZWRlc1JlY3Rhbmd1bG9GYWNlYm9vayB7XHJcbiAgbWFyZ2luLXRvcDogMzRweDtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG4ucmVkZXNSZWN0YW5ndWxvVHd0aXR0ZXIge1xyXG4gIG1hcmdpbi10b3A6IDM4cHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbn1cclxuLnJlZGVzUmVjdGFuZ3Vsb0luc3RhZ3JhbSB7XHJcbiAgbWFyZ2luLXRvcDogMzZweDtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG4ucmVjdGFuZ3VsbzIge1xyXG4gIC8qIGJhY2tncm91bmQ6IHJnYigyOCwgMTY5LCAxNjYpOyAqL1xyXG4gIGJhY2tncm91bmQ6IHJnYigxNzQsMTM0LDM3KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTc0LDEzNCwzNywxKSAwJSwgcmdiYSgyNDcsMjM5LDEzOCwxKSAzMyUsIHJnYmEoMjEwLDE3Miw3MSwxKSA4MSUpO1xyXG59XHJcbi5yZWN0YW5ndWxvMyB7XHJcbiAgd2lkdGg6IDUwcmVtO1xyXG4gIGhlaWdodDogOHJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI4LCAxNjksIDE2Nik7XHJcbn1cclxuLnF1aWVuZXNTb21vcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9FbGVtZW50b3MtMDguc3ZnXCIpO1xyXG4gIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDM1JTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5xdWllbmVzU29tb3MyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL0VsZW1lbnRvcy0wOC5zdmdcIik7XHJcbiAgbWFyZ2luLXRvcDogMHJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMzUlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDkwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLmg0UXVpZW5lc1NvbW9zIHtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjlweCBibGFjaztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LWZhbWlseTogXCJOb2JpbGVcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuLnRleHRvSW5pY2lhbCB7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbn1cclxuLnJlY3Rhbmd1bG9BenVsZmIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNHJlbTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnJvd0NvbnRhY3RvcyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcclxufVxyXG4uY29sLXZpc2lvbjIge1xyXG4gIGhlaWdodDogNTB2aDtcclxuICB3aWR0aDogNTB2aDtcclxufVxyXG4uYm9yZGVyUG9saXRpY2FzIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDdyZW07XHJcbn1cclxuLmJvcmRlclBvbGl0aWNhczIge1xyXG4gIG1hcmdpbi1sZWZ0OiA5cmVtO1xyXG59XHJcbi5ub3NvdHJvc0Zvb3RlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDdyZW07XHJcbn1cclxuLmJvcmRlc051ZXN0cm9FcXVpcG8ge1xyXG4gIG1hcmdpbi10b3A6IDhyZW07XHJcbn1cclxuLmljb25vRXF1aXBvIHtcclxuICB3aWR0aDogMTE1cHg7XHJcbiAgaGVpZ2h0OiAxMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnVsLWVxdWlwbyB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcbi5kYXRvc0VxdWlwbyB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxufVxyXG4uaW1hZ2VuRXF1aXBvIHtcclxuICBtYXJnaW4tbGVmdDogMy41cmVtO1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgd2lkdGg6IDIycmVtO1xyXG59XHJcbi5jb250YWN0b3NSZWRlcyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5kaXJlY2Npb25lczIge1xyXG4gIHBhZGRpbmc6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpcmVjY2lvbmVzIHtcclxuICBwYWRkaW5nOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdWJ0aXR1dHVsb1NlcnZpY2lvMyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTm9iaWxlXCI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogNC4zcmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG59XHJcbi5zcGFjZVN1YnRpdHVsb1NlcnZpY2lvRGVJbmdlbmllcmlhIHtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG59XHJcbi5zcGFjZVN1YnRpdHVsb1NlcnZpY2lvRGVBcGxpY2FjaW9uZXMge1xyXG4gIG1hcmdpbi10b3A6IDE0cmVtO1xyXG59XHJcbi5idG5sZWVybWFzIHtcclxuICBoZWlnaHQ6IDMwcmVtO1xyXG59XHJcbi5zZXJ2aWNpb3NSb3cge1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgLyogYm9yZGVyOiAjMDAwMDAwIHNvbGlkIDJweDsgKi9cclxufVxyXG4uc2VydmljaW9zUm93LTEge1xyXG4gIHBhZGRpbmctdG9wOiAxNjBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uc2VydmljaW9zUm93LTIge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uc2VydmljaW9zUm93LTMge1xyXG4gIHBhZGRpbmctdG9wOiAxMTBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uc2VydmljaW9zQ29udGVuaWRvUm93IHtcclxuICBtYXJnaW4tdG9wOiAxNXJlbSAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4uaW1nUHJvZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDguNXJlbTtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuLm1vZGFsUHJvZCB7XHJcbiAgbWF4LXdpZHRoOiA1NDBweDtcclxufVxyXG4ucHJvZHVjdG9zIHtcclxuICBtYXJnaW4tdG9wOiAyNXJlbSAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4uc3BhY2Vjb2xidG5TZWFyY2gge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuLnNwYWNlYnRuU2VhcmNoIHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLm5hdlByb2R1Y3RvcyB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy1sZWZ0OiA0cmVtO1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuLmVzcGFjaW9zU2VhcmNoIHtcclxuICBwYWRkaW5nOiA1cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNlw7FvUXVpZW5lcyB7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4ICM1NWE5YTY7XHJcbn1cclxuLnRleHRSZXByZXNlbnRhY2lvbmVzIHtcclxuICBtYXJnaW4tdG9wOiAxNXJlbTtcclxuICBtYXJnaW4tbGVmdDogNXJlbTtcclxufVxyXG4uY29sLW1pc2lvbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogNTB2aDtcclxufVxyXG4uY29sLXZpc2lvbiB7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHdpZHRoOiA1MHZoO1xyXG59XHJcbi5jb2wtdmFsb3JlcyB7XHJcbiAgaGVpZ2h0OiA2NXZoO1xyXG59XHJcbi5jb2wtcGFkZGluZyB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhyZW07XHJcbn1cclxuLmltZy1taXNpb24ge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuLmNvbnRhaW5lci1taXNpb24ge1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA3JSAhaW1wb3J0YW50O1xyXG59XHJcbi5wLXRpdGxlLW1pc2lvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNzBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vYmlsZVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG4ucC1taXNpb24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuLmhyLW1pc2lvbiB7XHJcbiAgbWF4LXdpZHRoOiAxNSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYzFjMTtcclxuICBiYWNrZ3JvdW5kOiAjYzFjMWMxO1xyXG59XHJcbi5zZWFyY2gge1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMTNweCAxMTNweCAxMTNweCAxMTNweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDExM3B4IDExM3B4IDExM3B4IDExM3B4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTEzcHggMTEzcHggMTEzcHggMTEzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAxNjksIDE2Nik7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDMycHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAzMnB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDMycHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcbi5pbnB1dC1zZWFyY2gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuLmZvbmRvQXp1bCB7XHJcbiAgbWluLWhlaWdodDogNDB2aDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDE2OSwgMTY2KTsgKi9cclxuICBiYWNrZ3JvdW5kOiByZ2IoMTc0LDEzNCwzNyk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNzQsMTM0LDM3LDEpIDAlLCByZ2JhKDI0NywyMzksMTM4LDEpIDMzJSwgcmdiYSgyMTAsMTcyLDcxLDEpIDgxJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCAxMTlweCAwcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuLmZvbmRvQmxhbmNvIHtcclxuICBtaW4taGVpZ2h0OiA0MHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDNyZW07XHJcbiAgcmlnaHQ6IDNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAxOCwgMTMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAtNHB4IDE0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiA1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5jaXJjdWxvIHtcclxuICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwcHg7XHJcbiAgbGVmdDogLTIwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1vLWJveC1zaGFkb3c6IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG4uZm9uZG9BenVsMiB7XHJcbiAgaGVpZ2h0OiA3NS41dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAxNjksIDE2Nik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCAxMTlweCAwcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcbi5mb25kb0JsYW5jbzIge1xyXG4gIGhlaWdodDogNzN2aDtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDkxcHggMHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDkxcHggMHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDkxcHggMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTRweCAxNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYm94LXNoYWRvdzogLTRweCAxNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG4uZm9uZG9BenVsMyB7XHJcbiAgaGVpZ2h0OiA1N3ZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMTY5LCAxNjYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCAxMTlweCAwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICBib3JkZXI6IDBweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG4uZm9uZG9CbGFuY28zIHtcclxuICBoZWlnaHQ6IDU1dmg7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAtNHB4IDE0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuLm1lbnUge1xyXG4gIGNvbG9yOiAjN2Q3ZDgyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ucC0wIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltZy1jb21wYW55IHtcclxuICB3aWR0aDogMTMwcHg7XHJcbn1cclxuXHJcbi5kaXYtY29tcGFueSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxNDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5kaXYtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1lbnUyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgcmdiKDI4LCAxNjksIDE2NikgMXB4O1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCByZ2IoMjgsIDE2OSwgMTY2KSAxcHg7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgcmdiKDI4LCAxNjksIDE2NikgMXB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHJnYigyOCwgMTY5LCAxNjYpIDFweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAvKiBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4OyAqL1xyXG59XHJcbi5tZW51MiBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ubWVudTI6aG92ZXIge1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDE2OSwgMTY2KTtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi10YWJzIHtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSB7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMTY5LCAxNjYpO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4ubWVudS1hY3RpdmUge1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDE2OSwgMTY2KTtcclxuICAvKiBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4OyAqL1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbi5tZW51LWFjdGl2ZSA+IGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucHJvZHVjdG8ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vYmlsZVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnByb2R1Y3RvVGV4dG8ge1xyXG4gIG1hcmdpbjogM3JlbTtcclxuICBmb250LWZhbWlseTogXCJOb2JpbGVcIjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICM3ZDdkODI7XHJcbn1cclxuLnByb2RjdXRDb250YWluZXIge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAzMnB4IC0xM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDMycHggLTEzcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDMycHggLTEzcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG4uYnRuVGV4dG8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMTY5LCAxNjYpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5lbXByZXNhcyB7XHJcbiAgbWFyZ2luLXRvcDogMTByZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XHJcbiAgd2lkdGg6IDEwJTtcclxuICBtYXJnaW4tbGVmdDogMy41cmVtO1xyXG59XHJcbi5yb3ctc2VydmljZSB7XHJcbiAgbWFyZ2luLXRvcDogMTEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDExMHB4O1xyXG59XHJcbi50aXR1dHVsb1NlcnZpY2lvIHtcclxuICBmb250LWZhbWlseTogXCJOb2JpbGVcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAzOXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnN1YnRpdHV0dWxvU2VydmljaW8ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vYmlsZVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi50ZXh0U2VydmljaW8ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubGktc2VydmljZXMge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uc3VidGl0dXR1bG9TZXJ2aWNpbzIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vYmlsZVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDQuM3JlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG59XHJcbi5ib3RvblNlcnZpY2lvIHtcclxuICBib3JkZXItcmFkaXVzOiAxMTBweCAxMTBweCAxMTBweCAxMTBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDExMHB4IDExMHB4IDExMHB4IDExMHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTEwcHggMTEwcHggMTEwcHggMTEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgd2lkdGg6IDE1OHB4O1xyXG4gIGhlaWdodDogNThweDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYm90b25TZWFyY2gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMTBweCAxMTBweCAxMTBweCAxMTBweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDExMHB4IDExMHB4IDExMHB4IDExMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uZmEtcyB7XHJcbiAgY29sb3I6IHJnYigyOCwgMTY5LCAxNjYpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxufVxyXG4uZXNxdWluYSB7XHJcbiAgd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMjAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG59XHJcbi5lc3F1aW5hLTIge1xyXG4gIHdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuLmVzcXVpbmEyIHtcclxuICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDM4cmVtO1xyXG4gIHRvcDogMzByZW07XHJcbn1cclxuLmxvZ29Db250YWN0YW5vcyB7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbn1cclxuLnRleHRvQ29udGFjdGFub3Mge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNSXCI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcbi5zZWN0aW9uLWNvbnRhYyB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG4ucm93LWNvbnRhY3Qge1xyXG4gIG1pbi1oZWlnaHQ6IDczcHg7XHJcbn1cclxuLnJlZGVzQ29udGFjdG9zIHtcclxuICBtYXJnaW4tdG9wOiAwcmVtO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4uZm9ybXVsYXJpbyB7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIC8qIG1hcmdpbi1ib3R0b206IDMwcHg7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbn1cclxuLmZvcm11bGFyaW9NZW5zYWplIHtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLnRleHQtY29udGFjdGFub3Mge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC43cHggYmxhY2s7XHJcbn1cclxuLmZvcm11bGFyaW9HZW5lcmFsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogNXJlbTtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTc0LDEzNCwzNyk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE3NCwxMzQsMzcsMSkgMCUsIHJnYmEoMjQ3LDIzOSwxMzgsMSkgMzMlLCByZ2JhKDIxMCwxNzIsNzEsMSkgODElKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDhweCA4cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHggOHB4IDhweCA4cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHggOHB4IDhweCA4cHg7XHJcbn1cclxuLmJvdG9uQ29udGFjdG9zIHtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiBzb2xpZCAjMDAwMDAwIDFweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmVxdWlwbyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9Gb25kb051ZXN0cm9FcXVpcG8uanBnXCIpO1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5ub21icmVFcXVpcG8ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuLm51bWVyb0NvbnRhY3RvIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuLmVtYWlsQ29udGFjdG8ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4uY29ycmVvQ29udGFjdG8ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pY29uQ29udGFjdG8ge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4udGl0dWxvQ29udGFjdG8ge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMTY5LCAxNjYpOyAqL1xyXG4gIGJhY2tncm91bmQ6IHJnYigxNzQsMTM0LDM3KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTc0LDEzNCwzNywxKSAwJSwgcmdiYSgyNDcsMjM5LDEzOCwxKSAzMyUsIHJnYmEoMjEwLDE3Miw3MSwxKSA4MSUpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC45cHggYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4uZm9uZG9zZXJ2aWNpbyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9Gb25kb1NlcnZpY2lvcy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxufVxyXG4uY2lyY3VsbzIge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTM4KTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ubWFwYSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9FbGVtZW50b3MtNDEuc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwYWRkaW5nLXRvcDogMTIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xyXG59XHJcbi5pY29ub01hcGEge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxufVxyXG4uZGl2LWNvbnRlbnQtbWFwIHtcclxuICBwYWRkaW5nLXRvcDogNzBweDtcclxufVxyXG4ucmVjdGFuZ3Vsb21hcGEge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWluLWhlaWdodDogMjMwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLyogYmFja2dyb3VuZDogcmdiKDI4LCAxNjksIDE2Nik7ICovXHJcbiAgYmFja2dyb3VuZDogcmdiKDE3NCwxMzQsMzcpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNzQsMTM0LDM3LDEpIDAlLCByZ2JhKDI0NywyMzksMTM4LDEpIDMzJSwgcmdiYSgyMTAsMTcyLDcxLDEpIDgxJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweCAxM3B4IDEzcHggMTNweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEzcHggMTNweCAxM3B4IDEzcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxM3B4IDEzcHggMTNweCAxM3B4O1xyXG59XHJcbi50ZXh0b01hcGEge1xyXG4gIHBhZGRpbmc6IDIuNXJlbTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5lc3F1aW5hc3VwZXJpb3JNYXBhIHtcclxuICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIHRvcDogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMDAwcHgpICBhbmQgKG1pbi13aWR0aDogMTA4MHB4KSB7XHJcbiAgLmVzcXVpbmFJTkZFUklPUk1hcGEge1xyXG4gICAgd2lkdGg6IDQwdmggIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgYm90dG9tOiAtOTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4MHB4KXtcclxuICAuZXNxdWluYUlORkVSSU9STWFwYSB7XHJcbiAgICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMjAwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmVzcXVpbmFJTkZFUklPUlFVSUVORVMge1xyXG4gIHdpZHRoOiA0MHZoICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMjAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEwcHg7XHJcbiAgYm90dG9tOiAtMjVweDtcclxufVxyXG4uZXNxdWluYVNVUEVSSU9SUVVJRU5FUyB7XHJcbiAgd2lkdGg6IDQwdmggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTEwcHg7XHJcbiAgdG9wOiAtMjVweDtcclxufVxyXG4uZm9uZG9mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcbi50aXR1bG9Gb290ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5saW5lYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi50ZXh0b0Zvb3RlciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5mb25kby1uaWtvbGEge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDE2OSwgMTY2KTtcclxufVxyXG4uZm9vdGVyU3VidGl0dWxvcyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcbi5mb290ZXJTdWJ0aXR1bG9zMiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuLmljb25vRm9vdGVyIHtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAzcmVtO1xyXG59XHJcbi5pY29ub0Zvb3RlcjEge1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDNyZW07XHJcbn1cclxuLnRpdHVsb1F1aWVuZXNTb21vcyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTm9iaWxlXCI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmxvZ29RdWllbmVzU29tb3Mge1xyXG4gIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbi50ZXh0b1F1aWVuZXNTb21vcyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLmljb24tYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwO1xyXG59XHJcbi5vZmYtY2FudmFzLXNpZGViYXIgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4ubmF2RGltZW5zaW9uZXMge1xyXG4gIHotaW5kZXg6IDk5OSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5uYXZEaW1lbnNpb25lczIge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbn1cclxuLmljb24tYmFyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjgsIDE2OSwgMTY2KTtcclxufVxyXG4ub2ZmLWNhbnZhcy1zaWRlYmFyIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ28tbmlrb2xhIHtcclxuICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gIGNvbG9yOiAjNjA2MDYwO1xyXG59XHJcbi5iYiB7XHJcbiAgYm9yZGVyOiBzb2xpZCAjMDAwMDAwIDFweDtcclxufVxyXG4uYncge1xyXG4gIGJvcmRlcjogc29saWQgI2ZmZmZmZiAxcHg7XHJcbn1cclxuLyogLnF1aWVuZXNTb21vc0RlcmVjaGEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMTY5LCAxNjYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAyNXB4IDI1cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMjVweCAyNXB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDI1cHggMjVweDtcclxufSAqL1xyXG4ucXVpZW5lc1NvbW9zRGVyZWNoYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAxNjksIDE2Nik7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDI1cHggMjVweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAyNXB4IDI1cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMjVweCAyNXB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMCUpIHtcclxuICAubWVudSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVuaXZlcnMgTFQgU3RkXCI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuc2VydmljaW9zUm93LTEge1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNlcnZpY2lvc1Jvdy0yIHtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zZXJ2aWNpb3NSb3ctMyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubG9nb1F1aWVuZXNTb21vcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudGl0dWxvUXVpZW5lc1NvbW9zIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY2FyZC1pbWctZm9uZG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgLmNvbC1pbml0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW1nTG9nbyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxuICAubG9nb0xhdGVyYWwge1xyXG4gICAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGlzZcOxb1F1aWVuZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogLm1lbnUyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICB9ICovXHJcbiAgLmVzcXVpbmEge1xyXG4gICAgYm90dG9tOiAtMjBweDtcclxuICB9XHJcbiAgLnNlcnZpY2lvc1JvdyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxvZ29TZXJ2aWNpb3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRleHRvSW5pY2lhbCB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRleHRJbmljaW8ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjN2Q3ZDgyO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuICAubG9nb0xhdGVyYWwge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG4gIC5ib3JkZXJQb2xpdGljYXMyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29sLW1pc2lvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjhyZW0gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDUwdmg7XHJcbiAgfVxyXG4gIC5jb2wtdmlzaW9uIHtcclxuICAgIHRvcDogNXJlbTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIHdpZHRoOiA1MHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb2wtdmlzaW9uMiB7XHJcbiAgICB0b3A6IDE1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogLThyZW0gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIHdpZHRoOiA1MHZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVyZW07XHJcbiAgfVxyXG4gIC5mb25kb0JsYW5jbzIge1xyXG4gICAgd2lkdGg6IDM1dmggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDkxcHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggOTFweCAwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAtNHB4IDE0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mb25kb0F6dWwyIHtcclxuICAgIHdpZHRoOiAzOXZoICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUwdmggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMTY5LCAxNjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIH1cclxuICAuZm9uZG9CbGFuY28zIHtcclxuICAgIHdpZHRoOiAzNXZoICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM3dmggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjZweCAwcHggOTFweCAwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDkxcHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNHB4IDE0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAtNHB4IDE0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogLTRweCAxNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZm9uZG9BenVsMyB7XHJcbiAgICB3aWR0aDogMzl2aCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzOXZoICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDE2OSwgMTY2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCAxMTlweCAwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCAxMTlweCAwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCAxMTlweCAwcHg7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICB9XHJcbiAgLmVzcGFjaW9zU2VhcmNoIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMHJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnJhbmQgLmItc2VhcmNoIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIHdpZHRoOiAxMTAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDExM3B4IDExM3B4IDExM3B4IDExM3B4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMTNweCAxMTNweCAxMTNweCAxMTNweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTEzcHggMTEzcHggMTEzcHggMTEzcHg7XHJcbiAgfVxyXG4gIC5zcGFjZWNvbGJ0blNlYXJjaCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zcGFjZWJ0blNlYXJjaCB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuICAuZXNxdWluYTIge1xyXG4gICAgbWF4LXdpZHRoOiAzMHZoICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMThyZW0gIWltcG9ydGFudDtcclxuICAgIHRvcDogMjJyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmRhdG9zRXF1aXBvIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb3N0cmFyNSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubW9zdHJhcjYge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcbiAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg2OXB4KSB7XHJcbiAgLmNhcmQtaW1nLWZvbmRvIHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5zZXJ2aWNpb3NSb3ctMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZXNxdWluYUlORkVSSU9SUVVJRU5FUyB7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIGJvdHRvbTogLTI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3RvbmVzSW5pY2lvIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5pbWdMb2dvIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIC5jYXJkLWltZy1mb25kbyB7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHZoO1xyXG4gIH1cclxuICAuZGlzZcOxb1F1aWVuZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxvZ29RdWllbmVzU29tb3Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTIwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuY2FyZC1pbWctZm9uZG8ge1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyOTVweCkge1xyXG4gIC5uYXYtYmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI5NXB4KSB7XHJcbiAgLm5hdi1iYXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAyMzA0cHgpIHtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgXHJcbiAgLmZvbmRvQmxhbmNvMiB7XHJcbiAgICBoZWlnaHQ6IDg1dmggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjZweCAwcHggOTFweCAwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDkxcHggMHB4O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAtNHB4IDE0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIH1cclxuICAuZm9uZG9BenVsMiB7XHJcbiAgICBoZWlnaHQ6IDg4dmggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMTY5LCAxNjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICB9XHJcbiAgLmZvbmRvQmxhbmNvMyB7XHJcbiAgICBoZWlnaHQ6IDYwdmggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjZweCAwcHggOTFweCAwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDkxcHggMHB4O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAtNHB4IDE0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIH1cclxuICAuZm9uZG9BenVsMyB7XHJcbiAgICBoZWlnaHQ6IDYzdmggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMTY5LCAxNjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICB9XHJcbiAgLnByb2R1Y3RvcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgfVxyXG4gIC5lbXByZXNhcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcclxuICB9XHJcbiAgLm1vc3RyYXJTZXJ2aWNpbzQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm1vc3RyYXJTZXJ2aWNpbzIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmJvcmRlc051ZXN0cm9FcXVpcG8ge1xyXG4gICAgbWFyZ2luLXRvcDogOHJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmJvcmRlclBvbGl0aWNhczIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmZvbmRvQmxhbmNvMiB7XHJcbiAgICB3aWR0aDogMzV2aCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0OHZoICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDkxcHggMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggOTFweCAwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTRweCAxNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogLTRweCAxNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmZvbmRvQXp1bDIge1xyXG4gICAgd2lkdGg6IDM5dmggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTB2aCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAxNjksIDE2Nik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgfVxyXG4gIC5mb25kb0JsYW5jbzMge1xyXG4gICAgd2lkdGg6IDM1dmggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzd2aCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDkxcHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggOTFweCAwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAtNHB4IDE0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mb25kb0F6dWwzIHtcclxuICAgIHdpZHRoOiAzOXZoICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM5dmggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMTY5LCAxNjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDExOXB4IDBweDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIH1cclxuICAuZXNwYWNpb3NTZWFyY2gge1xyXG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5icmFuZCAuYi1zZWFyY2ggaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgd2lkdGg6IDExNSUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTEzcHggMTEzcHggMTEzcHggMTEzcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDExM3B4IDExM3B4IDExM3B4IDExM3B4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMTNweCAxMTNweCAxMTNweCAxMTNweDtcclxuICB9XHJcbiAgLnNwYWNlY29sYnRuU2VhcmNoIHtcclxuICAgIG1hcmdpbi10b3A6IDByZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNwYWNlYnRuU2VhcmNoIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIC5wcm9kdWN0b3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA5OCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjNyZW07XHJcbiAgfVxyXG4gIC5lbXByZXNhcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcclxuICB9XHJcbiAgLm1vc3RyYXJTZXJ2aWNpbzQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm1vc3RyYXJTZXJ2aWNpbzIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmVzcXVpbmEyIHtcclxuICAgIG1heC13aWR0aDogMzB2aCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMjAwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDM1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDIycmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5ib3JkZXNOdWVzdHJvRXF1aXBvIHtcclxuICAgIG1hcmdpbi10b3A6IDhyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg2OXB4KSB7XHJcbiAgLnRleHRJbmljaW8ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjN2Q3ZDgyO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuICAuY29sLW1pc2lvbiB7XHJcbiAgICBoZWlnaHQ6IDkwdmggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1MHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb2wtdmlzaW9uIHtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIHdpZHRoOiA1MHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIycmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb2wtdmlzaW9uMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJyZW0gIWltcG9ydGFudDtcclxuICAgIHRvcDogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IC0xMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgd2lkdGg6IDUwdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgd2lkdGg6IDUwdmg7XHJcbiAgfVxyXG4gIC5mb25kb0F6dWwyIHtcclxuICAgIGhlaWdodDogNTB2aCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAxNjksIDE2Nik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIH1cclxuICAuZm9uZG9CbGFuY28yIHtcclxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDkxcHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggOTFweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTRweCAxNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogLTRweCAxNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4gIC5mb25kb0F6dWwzIHtcclxuICAgIGhlaWdodDogMzh2aCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAxNjksIDE2Nik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIH1cclxuICAuZm9uZG9CbGFuY28zIHtcclxuICAgIGhlaWdodDogMzZ2aCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDkxcHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggOTFweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTRweCAxNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogLTRweCAxNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4gIC5lc3BhY2lvc1NlYXJjaCB7XHJcbiAgICBwYWRkaW5nOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDByZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJyYW5kIC5iLXNlYXJjaCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICB3aWR0aDogMTEwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMTNweCAxMTNweCAxMTNweCAxMTNweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTEzcHggMTEzcHggMTEzcHggMTEzcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDExM3B4IDExM3B4IDExM3B4IDExM3B4O1xyXG4gIH1cclxuICAuc3BhY2Vjb2xidG5TZWFyY2gge1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc3BhY2VidG5TZWFyY2gge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcbiAgLm1vc3RyYXJTZXJ2aWNpbzEge1xyXG4gICAgdG9wOiAtODVyZW0gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuc3BhY2VTdWJ0aXR1bG9TZXJ2aWNpb0RlSW5nZW5pZXJpYSB7XHJcbiAgICB0b3A6IC05NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuZXNxdWluYTIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnNwYWNlU3VidGl0dWxvU2VydmljaW9EZUFwbGljYWNpb25lcyB7XHJcbiAgICB0b3A6IC0xMjByZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1vc3RyYXJTZXJ2aWNpbzMge1xyXG4gICAgdG9wOiAtMjAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAxNSUgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnJvd0NvbnRhY3RvcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjByZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW0gIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNvbnRhY3Rvc1JlZGVzIHtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW1hZ2VuRXF1aXBvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gICAgdG9wOiAtOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDE1cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kYXRvc0VxdWlwbyB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIHRvcDogLTEwcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5ib3JkZXNOdWVzdHJvRXF1aXBvIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRleHRJbmljaW8ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjN2Q3ZDgyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAudGV4dFJlcHJlc2VudGFjaW9uZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU1cmVtO1xyXG4gIH1cclxuICAucXVpZW5lc1NvbW9zMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL0VsZW1lbnRvcy0wOC5zdmdcIik7XHJcbiAgICBtYXJnaW4tdG9wOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk1JSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgLmNvbC1taXNpb24ge1xyXG4gICAgaGVpZ2h0OiA5MHZoICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNTB2aDtcclxuICB9XHJcbiAgLmNvbC12aXNpb24ge1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgd2lkdGg6IDUwdmg7XHJcbiAgfVxyXG4gIC5mb25kb0F6dWwyIHtcclxuICAgIGhlaWdodDogNDd2aCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAxNjksIDE2Nik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIH1cclxuICAuZm9uZG9CbGFuY28yIHtcclxuICAgIGhlaWdodDogNDV2aCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDkxcHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggOTFweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTRweCAxNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogLTRweCAxNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4gIC5mb25kb0F6dWwzIHtcclxuICAgIGhlaWdodDogMzd2aCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAxNjksIDE2Nik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggMTE5cHggMHB4O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIH1cclxuICAuZm9uZG9CbGFuY28zIHtcclxuICAgIGhlaWdodDogMzV2aCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyNnB4IDBweCA5MXB4IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTI2cHggMHB4IDkxcHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMjZweCAwcHggOTFweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTRweCAxNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogLTRweCAxNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IC00cHggMTRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4gIC5lc3BhY2lvc1NlYXJjaCB7XHJcbiAgICBwYWRkaW5nOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDByZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJyYW5kIC5iLXNlYXJjaCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICB3aWR0aDogMTEwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMTNweCAxMTNweCAxMTNweCAxMTNweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTEzcHggMTEzcHggMTEzcHggMTEzcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDExM3B4IDExM3B4IDExM3B4IDExM3B4O1xyXG4gIH1cclxuICAuc3BhY2Vjb2xidG5TZWFyY2gge1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc3BhY2VidG5TZWFyY2gge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcbiAgLnByb2R1Y3RvcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgfVxyXG4gIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgLyogbWF4LXdpZHRoOiAzMCUgIWltcG9ydGFudDsgKi9cclxuICB9XHJcbiAgLyogLmltZ1Byb2Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDByZW0gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuICAuZW1wcmVzYXMge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XHJcbiAgfVxyXG4gIC5zZXJ2aWNpb3NDb250ZW5pZG9Sb3cge1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc3VidGl0dXR1bG9TZXJ2aWNpbzMge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTm9iaWxlXCI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogNC4zcmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhyZW0gIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tb3N0cmFyU2VydmljaW8zIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5tb3N0cmFyU2VydmljaW80IHtcclxuICAgIHRvcDogLTE1MHJlbSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGxlZnQ6IDMzJTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnNwYWNlU3VidGl0dWxvU2VydmljaW9EZUFwbGljYWNpb25lcyB7XHJcbiAgICB0b3A6IC01MHJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRubGVlcm1hcyB7XHJcbiAgICBoZWlnaHQ6IDE1cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tb3N0cmFyU2VydmljaW8yIHtcclxuICAgIHotaW5kZXg6IDIwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAzMCUgIWltcG9ydGFudDtcclxuICAgIHRvcDogLTU4cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5tb3N0cmFyU2VydmljaW8xIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5zcGFjZVN1YnRpdHVsb1NlcnZpY2lvRGVJbmdlbmllcmlhIHtcclxuICAgIHRvcDogLTUwcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5lc3F1aW5hMiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZGlyZWNjaW9uZXMge1xyXG4gICAgcGFkZGluZzogbm9uZTtcclxuICAgIHRvcDogLThyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXJlbTtcclxuICB9XHJcbiAgLmRpcmVjY2lvbmVzMiB7XHJcbiAgICBwYWRkaW5nOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRvcDogLThyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNi41cmVtO1xyXG4gIH1cclxuICAuY29udGFjdG9zUmVkZXMge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbWFnZW5FcXVpcG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XHJcbiAgICB0b3A6IC04cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmRhdG9zRXF1aXBvIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAtMTByZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJvcmRlc051ZXN0cm9FcXVpcG8ge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZm9uZG8tbmlrb2xhIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAxNjksIDE2Nik7XHJcbiAgfVxyXG4gIC5ub3NvdHJvc0Zvb3RlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcclxuICAubW9zdHJhcjcge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIHdpZHRoOiAzMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI4LCAxNjksIDE2Nik7XHJcbiAgICBsZWZ0OiA4cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5yZWN0YW5ndWxvQXp1bGZiIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMDAwcHgpICBhbmQgKG1pbi13aWR0aDogMTUwMHB4KSB7XHJcblxyXG4gICNteUNhcm91c2Vse1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBoZWlnaHQ6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucmVkdXgtaW1ne1xyXG4gICAgaGVpZ2h0OiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDE4MDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJvdy1pbml0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkgIGFuZCAobWluLXdpZHRoOiA4NTBweCkge1xyXG5cclxuICAuaXRlbXtcclxuICAgIGhlaWdodDogNzAwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA4MDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI215Q2Fyb3VzZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGhlaWdodDogNzAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yZWR1eC1pbWd7XHJcbiAgICBoZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogODAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yb3ctaW5pdCB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHZoO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpICBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcblxyXG4gIC5pdGVte1xyXG4gICAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEzMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI215Q2Fyb3VzZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGhlaWdodDogNzAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yZWR1eC1pbWd7XHJcbiAgICBoZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucm93LWluaXQge1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQ5cHgpICBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuXHJcbiAgLml0ZW17XHJcbiAgICBoZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogODAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNteUNhcm91c2Vse1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBoZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucmVkdXgtaW1ne1xyXG4gICAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDgwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucm93LWluaXQge1xyXG4gICAgbWluLWhlaWdodDogNDB2aDtcclxuICB9XHJcbn1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgeyBcclxuXHJcblxyXG4gICAgI215Q2Fyb3VzZWx7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTE1JTtcclxuICAgICAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWR1eC1pbWd7XHJcbiAgICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDE4MDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE3NCwxMzQsMzcpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNzQsMTM0LDM3LDEpIDAlLCByZ2JhKDI0NywyMzksMTM4LDEpIDMzJSwgcmdiYSgyMTAsMTcyLDcxLDEpIDgxJSkgIWltcG9ydGFudDtcclxuICAvKiBPdGhlciBDU1MgU3R5bGVzICovXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product/product.service */ "./src/app/services/product/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/auth/auth/auth.service */ "./src/app/services/auth/auth/auth.service.ts");
/* harmony import */ var app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/categories/categories.service */ "./src/app/services/categories/categories.service.ts");
/* harmony import */ var app_services_dates_dates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/dates/dates.service */ "./src/app/services/dates/dates.service.ts");
/* harmony import */ var app_services_message_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var app_modules_events_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/modules/events/events.service */ "./src/app/modules/events/events.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var app_services_carrusel_carrusel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/carrusel/carrusel.service */ "./src/app/services/carrusel/carrusel.service.ts");
/* harmony import */ var app_modules_init_promo_init_promo_init_promo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/modules/init-promo/init-promo/init-promo.component */ "./src/app/modules/init-promo/init-promo/init-promo.component.ts");
/* harmony import */ var app_services_sponsor_sponsor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/sponsor/sponsor.service */ "./src/app/services/sponsor/sponsor.service.ts");
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














var IndexComponent = /** @class */ (function () {
    function IndexComponent(router, location, renderer, element, ProductService, categoryService, authService, datesService, messageService, dialog, eventsService, carruselService, rutaActiva, sponsorService) {
        this.router = router;
        this.renderer = renderer;
        this.element = element;
        this.ProductService = ProductService;
        this.categoryService = categoryService;
        this.authService = authService;
        this.datesService = datesService;
        this.messageService = messageService;
        this.dialog = dialog;
        this.eventsService = eventsService;
        this.carruselService = carruselService;
        this.rutaActiva = rutaActiva;
        this.sponsorService = sponsorService;
        this.islogging = true;
        this.showCart = false;
        this.showCart2 = false;
        this.showCart3 = false;
        this.showCart4 = false;
        this.show = "todos";
        this.seachText = "";
        this.list_cards = [];
        this.registrationFlag = false;
        this.sidebarVisible = false;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagenesCarrusel = this.carruselService.getImgCarrusel();
        this.imagenes = this.eventsService.getImgEvent();
        this.getProducts();
        this.getCategories();
        this.arrayProductCart = [];
        this.message = {};
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];
        this.product = {};
        //COLEGIO DE ODONTOLOGOS
        this.getMision();
        this.getVision();
        this.promo();
        this.getSponsors();
        //se obtiene el parametro de true o false para mostrar el modal de registro
        this.rutaActiva.queryParams
            .filter(function (params) { return params.registro; })
            .subscribe(function (params) {
            // console.log(params.registro); 
            if (params.registro) {
                _this.redirectRegistration();
            }
        });
    };
    IndexComponent.prototype.selectProdcut = function (product) {
        this.product = product;
    };
    IndexComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (categories) {
            _this.arrayCategories = categories;
        });
    };
    IndexComponent.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ProductService.getProducts().subscribe(function (productSnapshot) {
                            _this.arrayProduct = [];
                            _this.arrayProductAux = [];
                            productSnapshot.forEach(function (categoryData) {
                                _this.arrayProduct.push(categoryData.payload.doc.data());
                                _this.arrayProductAux.push(categoryData.payload.doc.data());
                            });
                            _this.islogging = false;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.trackByFn = function (index, obj) {
        return obj.uid;
    };
    IndexComponent.prototype.carrito = function (id) {
        this.router.navigate(["carrito"]);
    };
    IndexComponent.prototype.cambioMasvendido = function (opt) {
        this.show = opt;
        $("html, body").animate({
            scrollTop: $("#card-product").offset().top,
        }, 400, function () { });
    };
    IndexComponent.prototype.isLink = function (str) {
        if (str != undefined) {
            str = str.substr(0, 5);
            if (str == 'https') {
                return true;
            }
            else {
                return false;
            }
        }
    };
    IndexComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName("body")[0];
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        body.classList.add("nav-open");
        this.sidebarVisible = true;
    };
    IndexComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName("body")[0];
        this.toggleButton.classList.remove("toggled");
        this.sidebarVisible = false;
        body.classList.remove("nav-open");
    };
    IndexComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    IndexComponent.prototype.rutaproducts = function () {
        // tslint:disable-next-line: no-unused-expression
        this.router.navigate(["/pages/list-prod"]);
        window.scroll(0, 0);
    };
    IndexComponent.prototype.searchProduct = function () {
        var _this = this;
        this.arrayProduct = [];
        this.arrayProductAux.forEach(function (e) {
            if (e.pro_nombre.toUpperCase().includes(_this.seachText.toUpperCase())) {
                _this.arrayProduct.push(e);
            }
        });
    };
    IndexComponent.prototype.viewRouter = function (opt, time) {
        this.router.navigate([""]);
        this.registrationFlag = false;
        var body = document.getElementsByTagName("body")[0];
        this.toggleButton.classList.remove("toggled");
        this.sidebarVisible = false;
        body.classList.remove("nav-open");
        setTimeout(function () {
            $("html, body").animate({
                scrollTop: $(opt).position().top,
            }, time, function () { });
        }, 500);
    };
    /**
    * *** Funcion para almacenar los mensajes del usuario ***
    * *** Se obtine la información del formulario de contacto ***
    * @param message
    * @param valid
    */
    IndexComponent.prototype.onSaveMessage = function (message, valid) {
        var _this = this;
        message.message_date = this.datesService.getDateCurrent();
        message.message_id = new Date().getTime().toString();
        message.message_time = this.datesService.getTimeCurrent();
        message.message_state = false;
        if (valid) {
            this.messageService.createMessage(message).then(function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()("OK", "Mensaje enviado correctamente", "success");
                _this.message = {};
            });
        }
    };
    IndexComponent.prototype.alert = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: "Deleted!",
            text: "Your row has been deleted.",
            type: "success",
            timer: 3000
        });
        // function () {
        //        location.reload(true);
        //        tr.hide();
        // });
    };
    /**
     * *** Limpiamos el formulario ***
     */
    IndexComponent.prototype.onCancelMessage = function () {
        this.message = {};
    };
    //COLEGIO DE ODONTOLOGOS METODOS
    IndexComponent.prototype.getMision = function () {
        this.mision = this.ProductService.getMision();
    };
    IndexComponent.prototype.getVision = function () {
        this.vision = this.ProductService.getVision();
    };
    IndexComponent.prototype.getSponsors = function () {
        this.sponsors = this.sponsorService.getSponsor();
    };
    IndexComponent.prototype.redirectRegistration = function () {
        this.registrationFlag = true;
        // this.viewRouter('#registro', 500)
        // this.router.navigate([`/registration`]);
    };
    IndexComponent.prototype.promo = function () {
        var dialogRef = this.dialog.open(app_modules_init_promo_init_promo_init_promo_component__WEBPACK_IMPORTED_MODULE_12__["InitPromoComponent"], {
            width: '370px',
            height: '550px',
            panelClass: 'promo-dialog'
        });
    };
    IndexComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
        { type: app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"] },
        { type: app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: app_services_dates_dates_service__WEBPACK_IMPORTED_MODULE_7__["DatesService"] },
        { type: app_services_message_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_modules_events_events_service__WEBPACK_IMPORTED_MODULE_9__["EventsService"] },
        { type: app_services_carrusel_carrusel_service__WEBPACK_IMPORTED_MODULE_11__["CarruselService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: app_services_sponsor_sponsor_service__WEBPACK_IMPORTED_MODULE_13__["SponsorService"] }
    ]; };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-index",
            template: __importDefault(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"],
            app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            app_services_dates_dates_service__WEBPACK_IMPORTED_MODULE_7__["DatesService"],
            app_services_message_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
            app_modules_events_events_service__WEBPACK_IMPORTED_MODULE_9__["EventsService"],
            app_services_carrusel_carrusel_service__WEBPACK_IMPORTED_MODULE_11__["CarruselService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            app_services_sponsor_sponsor_service__WEBPACK_IMPORTED_MODULE_13__["SponsorService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/index/modal-login/modal-login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/index/modal-login/modal-login.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fas {\r\n    color: rgb(28, 169, 166);\r\n}\r\n.fa-user{\r\n    color: rgb(28, 169, 166);\r\n}\r\n.login{\r\n    color: #1D1D1B;\r\n}\r\n.login:hover{\r\n    color: rgb(28, 169, 166);\r\n}\r\n.btn-ingresar:hover{\r\n    background-color: rgb(28, 169, 166);\r\n}\r\n.logo {\r\n    width: 270px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvbW9kYWwtbG9naW4vbW9kYWwtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLG1DQUFtQztBQUN2QztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L21vZGFsLWxvZ2luL21vZGFsLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFzIHtcclxuICAgIGNvbG9yOiByZ2IoMjgsIDE2OSwgMTY2KTtcclxufVxyXG4uZmEtdXNlcntcclxuICAgIGNvbG9yOiByZ2IoMjgsIDE2OSwgMTY2KTtcclxufVxyXG4ubG9naW57XHJcbiAgICBjb2xvcjogIzFEMUQxQjtcclxufVxyXG5cclxuLmxvZ2luOmhvdmVye1xyXG4gICAgY29sb3I6IHJnYigyOCwgMTY5LCAxNjYpO1xyXG59XHJcblxyXG4uYnRuLWluZ3Jlc2FyOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAxNjksIDE2Nik7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/index/modal-login/modal-login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/index/modal-login/modal-login.component.ts ***!
  \************************************************************/
/*! exports provided: ModalLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalLoginComponent", function() { return ModalLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/auth/auth/auth.service */ "./src/app/services/auth/auth/auth.service.ts");
/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product/product.service */ "./src/app/services/product/product.service.ts");
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




var ModalLoginComponent = /** @class */ (function () {
    function ModalLoginComponent(authservice, ProductService) {
        this.authservice = authservice;
        this.ProductService = ProductService;
        this.islogging = true;
        this.array = [];
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.test = new Date();
    }
    ModalLoginComponent.prototype.ngOnInit = function () {
        this.userLogin = {};
        this.getProducts();
        this.arrayProductCart = [];
        this.product = {};
    };
    ModalLoginComponent.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ProductService.getProducts().subscribe(function (productSnapshot) {
                            _this.arrayProduct = [];
                            _this.arrayProductAux = [];
                            productSnapshot.forEach(function (categoryData) {
                                _this.arrayProduct.push(categoryData.payload.doc.data());
                                _this.arrayProductAux.push(categoryData.payload.doc.data());
                            });
                            _this.islogging = false;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalLoginComponent.prototype.trackByFn = function (index, obj) {
        return obj.uid;
    };
    /**
     * *** Manejo del modal login       ***
     * *** seteamos la variable a false ***
     * *** para ocultar el cargando     ***
     */
    ModalLoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $(this.modalLogin.nativeElement).on("hidden.bs.modal", function () {
            _this.islogging = false;
        });
    };
    /**
     * *** Funcion para loguear al usuario           ***
     * *** validamos el formulario si es valido      ***
     * *** llamamos el servicio login en authSevice  ***
     * @param userLogin
     * @param valid
     */
    ModalLoginComponent.prototype.onLogin = function (userLogin, valid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (valid) {
                    if (userLogin) {
                        this.islogging = true;
                        this.authservice.login(userLogin.email, userLogin.password);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    ModalLoginComponent.ctorParameters = function () { return [
        { type: app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("modalLogin"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModalLoginComponent.prototype, "modalLogin", void 0);
    ModalLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-modal-login",
            template: __importDefault(__webpack_require__(/*! raw-loader!./modal-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/modal-login/modal-login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./modal-login.component.css */ "./src/app/index/modal-login/modal-login.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ModalLoginComponent);
    return ModalLoginComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/auth/auth/auth.service */ "./src/app/services/auth/auth/auth.service.ts");
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






var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, location, authservice) {
        var _this = this;
        this.router = router;
        this.authservice = authservice;
        this.yScrollStack = [];
        this.location = location;
        this.authservice.getCurrentUser().subscribe(function (user) {
            if (user == null) {
                _this.redirigir();
            }
        });
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            //   this.url = event.url;
            _this.navbar.sidebarClose();
        });
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
    };
    AdminLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) == '#/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.redirigir = function () {
        this.router.navigate([""]);
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidebar'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"])
    ], AdminLayoutComponent.prototype, "navbar", void 0);
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth/auth-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _shared_pagesnavbar_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pagesnavbar/pagesnavbar.component */ "./src/app/shared/pagesnavbar/pagesnavbar.component.ts");
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





var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            //   this.url = event.url;
            _this.pagesnavbar.sidebarClose();
        });
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_pagesnavbar_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_4__["PagesnavbarComponent"]),
        __metadata("design:type", _shared_pagesnavbar_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_4__["PagesnavbarComponent"])
    ], AuthLayoutComponent.prototype, "pagesnavbar", void 0);
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/detail-conventions/detail-conventions.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/detail-conventions/detail-conventions.module.ts ***!
  \*************************************************************************/
/*! exports provided: DetailConventionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailConventionsModule", function() { return DetailConventionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _detail_conventions_detail_conventions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-conventions/detail-conventions.component */ "./src/app/modules/detail-conventions/detail-conventions/detail-conventions.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var DetailConventionsModule = /** @class */ (function () {
    function DetailConventionsModule() {
    }
    DetailConventionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_detail_conventions_detail_conventions_component__WEBPACK_IMPORTED_MODULE_2__["DetailConventionsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ]
        })
    ], DetailConventionsModule);
    return DetailConventionsModule;
}());



/***/ }),

/***/ "./src/app/modules/detail-conventions/detail-conventions/detail-conventions.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/detail-conventions/detail-conventions/detail-conventions.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulo{\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kZXRhaWwtY29udmVudGlvbnMvZGV0YWlsLWNvbnZlbnRpb25zL2RldGFpbC1jb252ZW50aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RldGFpbC1jb252ZW50aW9ucy9kZXRhaWwtY29udmVudGlvbnMvZGV0YWlsLWNvbnZlbnRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/modules/detail-conventions/detail-conventions/detail-conventions.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/detail-conventions/detail-conventions/detail-conventions.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DetailConventionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailConventionsComponent", function() { return DetailConventionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DetailConventionsComponent = /** @class */ (function () {
    function DetailConventionsComponent(dialogRef, convention) {
        this.dialogRef = dialogRef;
        this.convention = convention;
    }
    DetailConventionsComponent.prototype.ngOnInit = function () {
    };
    DetailConventionsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DetailConventionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-conventions',
            template: __importDefault(__webpack_require__(/*! raw-loader!./detail-conventions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/detail-conventions/detail-conventions/detail-conventions.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./detail-conventions.component.css */ "./src/app/modules/detail-conventions/detail-conventions/detail-conventions.component.css")).default]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DetailConventionsComponent);
    return DetailConventionsComponent;
}());



/***/ }),

/***/ "./src/app/modules/detail-event/detail-event.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/detail-event/detail-event.module.ts ***!
  \*************************************************************/
/*! exports provided: DetailEventModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailEventModule", function() { return DetailEventModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _detail_event_detail_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail-event/detail-event.component */ "./src/app/modules/detail-event/detail-event/detail-event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var DetailEventModule = /** @class */ (function () {
    function DetailEventModule() {
    }
    DetailEventModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _detail_event_detail_event_component__WEBPACK_IMPORTED_MODULE_7__["DetailEventComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ]
        })
    ], DetailEventModule);
    return DetailEventModule;
}());



/***/ }),

/***/ "./src/app/modules/detail-event/detail-event/detail-event.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/detail-event/detail-event/detail-event.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulo{\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kZXRhaWwtZXZlbnQvZGV0YWlsLWV2ZW50L2RldGFpbC1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RldGFpbC1ldmVudC9kZXRhaWwtZXZlbnQvZGV0YWlsLWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/modules/detail-event/detail-event/detail-event.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/detail-event/detail-event/detail-event.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DetailEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailEventComponent", function() { return DetailEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DetailEventComponent = /** @class */ (function () {
    function DetailEventComponent(dialogRef, event) {
        this.dialogRef = dialogRef;
        this.event = event;
    }
    DetailEventComponent.prototype.ngOnInit = function () {
    };
    DetailEventComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DetailEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-event',
            template: __importDefault(__webpack_require__(/*! raw-loader!./detail-event.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/detail-event/detail-event/detail-event.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./detail-event.component.css */ "./src/app/modules/detail-event/detail-event/detail-event.component.css")).default]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DetailEventComponent);
    return DetailEventComponent;
}());



/***/ }),

/***/ "./src/app/modules/events/events.service.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/events/events.service.ts ***!
  \**************************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-storage.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};




var EventsService = /** @class */ (function () {
    function EventsService(db, storage) {
        this.db = db;
        this.storage = storage;
    }
    EventsService.prototype.getEvents = function () {
        return this.db.collection('eventos').valueChanges();
    };
    EventsService.prototype.getEventById = function (id) {
        return this.db.collection('eventos').doc(id).valueChanges();
    };
    EventsService.prototype.getImgEventById = function (id) {
        return this.db.collection('imagenesEventos', function (ref) { return ref.where('idEvent', '==', id); }).valueChanges();
    };
    EventsService.prototype.getImgEvent = function () {
        return this.db.collection('imagenesEventos').valueChanges();
    };
    EventsService.prototype.createEvent = function (id, event) {
        return this.db.collection('eventos').doc(id).set(__assign(__assign({}, event), { id: id }));
    };
    EventsService.prototype.createImagesEvent = function (eventImage) {
        var id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
        return this.db.collection('imagenesEventos').doc(id).set(__assign(__assign({}, eventImage), { id: id }));
    };
    EventsService.prototype.updateEvent = function (id, event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.db.collection('eventos').doc(id).update(event)];
            });
        });
    };
    EventsService.prototype.deleteEvent = function (id) {
        return this.db.collection('eventos').doc(id).delete();
    };
    EventsService.prototype.deleteImagesEvent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.collection('imagenesEventos').doc(id).delete()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsService.prototype.deleteAllEvents = function () {
        var _this = this;
        return this.db.collection('eventos').get().toPromise().then(function (snapshot) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, doc, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 6, 7, 12]);
                        _a = __asyncValues(snapshot.docs);
                        _d.label = 1;
                    case 1: return [4 /*yield*/, _a.next()];
                    case 2:
                        if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 5];
                        doc = _b.value;
                        return [4 /*yield*/, doc.ref.delete()];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [3 /*break*/, 1];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _d.trys.push([7, , 10, 11]);
                        if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _c.call(_a)];
                    case 8:
                        _d.sent();
                        _d.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        }); });
    };
    EventsService.prototype.uploadImages = function (files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var urls = [];
            var _loop_1 = function (file) {
                var id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
                var filePath = "Eventos/" + id;
                var task = _this.storage.upload(filePath, file);
                task.then(function (t) {
                    t.ref.getDownloadURL().then(function (url) {
                        urls.push({ url: url, id: id });
                        if (urls.length === files.length) {
                            resolve(urls);
                        }
                    });
                }).catch(function (e) { return reject(e); });
            };
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                _loop_1(file);
            }
        });
    };
    EventsService.prototype.deleteImageById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.ref("Eventos/" + id).delete().toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }
    ]; };
    EventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/modules/init-promo/init-promo/init-promo.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/init-promo/init-promo/init-promo.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n@media only screen and (max-width: 800px){ \r\n\r\n    #imgPromo{\r\n        width: 25rem;\r\n        height: 45rem;\r\n        /* margin-left: 1%; */\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 2000px)  and (min-width: 800px) {\r\n\r\n    #imgPromo{\r\n        width: 25rem;\r\n        height: 45rem;\r\n        margin-left: 12%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 500px)  and (min-width: 376px) { \r\n\r\n    #imgPromo{\r\n        width: 25rem;\r\n        height: 45rem;\r\n        margin-left: 5%;\r\n    }\r\n}\r\n\r\n.botonRegistrar {\r\n    border-radius: 50px;\r\n    -moz-border-radius: 50px;\r\n    -webkit-border-radius: 50px;\r\n    background-color: #3792A7;\r\n    border: solid #000000 1px;\r\n    color: #ffffff;\r\n    margin-top: 2rem;\r\n    width: 180px;\r\n    height: 50px;\r\n    font-family: \"Poppins\";\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-size: 20px;\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9pbml0LXByb21vL2luaXQtcHJvbW8vaW5pdC1wcm9tby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IscUJBQXFCO0lBQ3pCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixlQUFlO0lBQ25CO0FBQ0o7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaW5pdC1wcm9tby9pbml0LXByb21vL2luaXQtcHJvbW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXsgXHJcblxyXG4gICAgI2ltZ1Byb21ve1xyXG4gICAgICAgIHdpZHRoOiAyNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDQ1cmVtO1xyXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiAxJTsgKi9cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMDAwcHgpICBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuXHJcbiAgICAjaW1nUHJvbW97XHJcbiAgICAgICAgd2lkdGg6IDI1cmVtO1xyXG4gICAgICAgIGhlaWdodDogNDVyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEyJTtcclxuICAgIH1cclxufVxyXG4gIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSAgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7IFxyXG5cclxuICAgICNpbWdQcm9tb3tcclxuICAgICAgICB3aWR0aDogMjVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiA0NXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uYm90b25SZWdpc3RyYXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzkyQTc7XHJcbiAgICBib3JkZXI6IHNvbGlkICMwMDAwMDAgMXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/modules/init-promo/init-promo/init-promo.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/init-promo/init-promo/init-promo.component.ts ***!
  \***********************************************************************/
/*! exports provided: InitPromoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitPromoComponent", function() { return InitPromoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
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



var InitPromoComponent = /** @class */ (function () {
    function InitPromoComponent(router, dialogRef) {
        this.router = router;
        this.dialogRef = dialogRef;
    }
    InitPromoComponent.prototype.ngOnInit = function () {
    };
    InitPromoComponent.prototype.redirigir = function () {
        this.router.navigate([""], { queryParams: { registro: true } });
        this.dialogRef.close();
    };
    InitPromoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }
    ]; };
    InitPromoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-init-promo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./init-promo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/init-promo/init-promo/init-promo.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./init-promo.component.css */ "./src/app/modules/init-promo/init-promo/init-promo.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], InitPromoComponent);
    return InitPromoComponent;
}());



/***/ }),

/***/ "./src/app/modules/list-conventions/list-conventions.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/list-conventions/list-conventions.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListConventionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListConventionsModule", function() { return ListConventionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _list_conventions_list_conventions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-conventions/list-conventions.component */ "./src/app/modules/list-conventions/list-conventions/list-conventions.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var ListConventionsModule = /** @class */ (function () {
    function ListConventionsModule() {
    }
    ListConventionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_list_conventions_list_conventions_component__WEBPACK_IMPORTED_MODULE_2__["ListConventionsComponent"]],
            imports: [
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            ],
            exports: [_list_conventions_list_conventions_component__WEBPACK_IMPORTED_MODULE_2__["ListConventionsComponent"]]
        })
    ], ListConventionsModule);
    return ListConventionsModule;
}());



/***/ }),

/***/ "./src/app/modules/list-conventions/list-conventions/list-conventions.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/list-conventions/list-conventions/list-conventions.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".module {\r\n    width: 250px;\r\n    margin: 0 0 1em 0;\r\n    overflow: hidden;\r\n  }\r\n  \r\n.module mat-card-title{\r\nmargin: 0;\r\n}\r\n  \r\n.line-clamp {\r\ndisplay: -webkit-box;\r\n-webkit-line-clamp: 1;\r\n-webkit-box-orient: vertical;\r\n}\r\n  \r\n.dorado{\r\nbackground: rgb(174,134,37);\r\nbackground: -webkit-gradient(linear, left top, left bottom, from(rgba(174,134,37,1)), color-stop(33%, rgba(247,239,138,1)), color-stop(81%, rgba(210,172,71,1)));\r\nbackground: linear-gradient(180deg, rgba(174,134,37,1) 0%, rgba(247,239,138,1) 33%, rgba(210,172,71,1) 81%);\r\ncursor:pointer;\r\n}\r\n  \r\n.titulos{\r\ncolor: #ffffff;\r\ntext-transform: capitalize;\r\n}\r\n  \r\n.my-class{\r\nbackground-color: rgb(173, 31, 31) ;\r\ncolor: rgba(0,0,0,0.8);\r\npadding: 20px;\r\n    \r\n    /* Add more css styles */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9saXN0LWNvbnZlbnRpb25zL2xpc3QtY29udmVudGlvbnMvbGlzdC1jb252ZW50aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0FBRUY7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQixnS0FBMkc7QUFBM0csMkdBQTJHO0FBQzNHLGNBQWM7QUFDZDs7QUFFQTtBQUNBLGNBQWM7QUFDZCwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkMsc0JBQXNCO0FBQ3RCLGFBQWE7O0lBRVQsd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9saXN0LWNvbnZlbnRpb25zL2xpc3QtY29udmVudGlvbnMvbGlzdC1jb252ZW50aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAxZW0gMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4ubW9kdWxlIG1hdC1jYXJkLXRpdGxle1xyXG5tYXJnaW46IDA7XHJcbn1cclxuXHJcbi5saW5lLWNsYW1wIHtcclxuZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbi13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLmRvcmFkb3tcclxuYmFja2dyb3VuZDogcmdiKDE3NCwxMzQsMzcpO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE3NCwxMzQsMzcsMSkgMCUsIHJnYmEoMjQ3LDIzOSwxMzgsMSkgMzMlLCByZ2JhKDIxMCwxNzIsNzEsMSkgODElKTtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG9ze1xyXG5jb2xvcjogI2ZmZmZmZjtcclxudGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5teS1jbGFzc3tcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMzEsIDMxKSA7XHJcbmNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XHJcbnBhZGRpbmc6IDIwcHg7XHJcbiAgICBcclxuICAgIC8qIEFkZCBtb3JlIGNzcyBzdHlsZXMgKi9cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/list-conventions/list-conventions/list-conventions.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/list-conventions/list-conventions/list-conventions.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListConventionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListConventionsComponent", function() { return ListConventionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var app_modules_detail_conventions_detail_conventions_detail_conventions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/detail-conventions/detail-conventions/detail-conventions.component */ "./src/app/modules/detail-conventions/detail-conventions/detail-conventions.component.ts");
/* harmony import */ var app_services_conventions_conventions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/conventions/conventions.service */ "./src/app/services/conventions/conventions.service.ts");
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




var ListConventionsComponent = /** @class */ (function () {
    function ListConventionsComponent(conventionsService, dialog) {
        this.conventionsService = conventionsService;
        this.dialog = dialog;
    }
    ListConventionsComponent.prototype.ngOnInit = function () {
        this.conventions = this.conventionsService.getConventions();
        console.log(this.conventions);
    };
    ListConventionsComponent.prototype.viewConvention = function (component) {
        this.dialog.open(app_modules_detail_conventions_detail_conventions_detail_conventions_component__WEBPACK_IMPORTED_MODULE_2__["DetailConventionsComponent"], {
            width: '700px',
            height: '700px',
            data: component,
            panelClass: 'events-class'
        });
    };
    ListConventionsComponent.ctorParameters = function () { return [
        { type: app_services_conventions_conventions_service__WEBPACK_IMPORTED_MODULE_3__["ConventionsService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
    ]; };
    ListConventionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-conventions',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list-conventions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/list-conventions/list-conventions/list-conventions.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list-conventions.component.css */ "./src/app/modules/list-conventions/list-conventions/list-conventions.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_services_conventions_conventions_service__WEBPACK_IMPORTED_MODULE_3__["ConventionsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ListConventionsComponent);
    return ListConventionsComponent;
}());



/***/ }),

/***/ "./src/app/modules/list-events/list-events.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/list-events/list-events.module.ts ***!
  \***********************************************************/
/*! exports provided: ListEventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventsModule", function() { return ListEventsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _list_events_list_events_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-events/list-events.component */ "./src/app/modules/list-events/list-events/list-events.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var ListEventsModule = /** @class */ (function () {
    function ListEventsModule() {
    }
    ListEventsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_list_events_list_events_component__WEBPACK_IMPORTED_MODULE_2__["ListEventsComponent"]],
            imports: [
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            ],
            exports: [_list_events_list_events_component__WEBPACK_IMPORTED_MODULE_2__["ListEventsComponent"]]
        })
    ], ListEventsModule);
    return ListEventsModule;
}());



/***/ }),

/***/ "./src/app/modules/list-events/list-events/list-events.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/list-events/list-events/list-events.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".module {\r\n    width: 250px;\r\n    margin: 0 0 1em 0;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .module mat-card-title{\r\n    margin: 0;\r\n  }\r\n  \r\n  .line-clamp {\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 1;\r\n    -webkit-box-orient: vertical;\r\n  }\r\n  \r\n  .dorado{\r\n    background: rgb(174,134,37);\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(174,134,37,1)), color-stop(33%, rgba(247,239,138,1)), color-stop(81%, rgba(210,172,71,1)));\r\n    background: linear-gradient(180deg, rgba(174,134,37,1) 0%, rgba(247,239,138,1) 33%, rgba(210,172,71,1) 81%);\r\n    cursor:pointer;\r\n  }\r\n  \r\n  .titulos{\r\n    color: #ffffff;\r\n    text-transform: capitalize;\r\n  }\r\n  \r\n  .my-class{\r\n    background-color: rgb(173, 31, 31) ;\r\n    color: rgba(0,0,0,0.8);\r\n    padding: 20px;\r\n      \r\n      /* Add more css styles */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9saXN0LWV2ZW50cy9saXN0LWV2ZW50cy9saXN0LWV2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixnS0FBMkc7SUFBM0csMkdBQTJHO0lBQzNHLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixhQUFhOztNQUVYLHdCQUF3QjtFQUM1QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGlzdC1ldmVudHMvbGlzdC1ldmVudHMvbGlzdC1ldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAubW9kdWxlIG1hdC1jYXJkLXRpdGxle1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAubGluZS1jbGFtcCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgfVxyXG5cclxuICAuZG9yYWRve1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE3NCwxMzQsMzcpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNzQsMTM0LDM3LDEpIDAlLCByZ2JhKDI0NywyMzksMTM4LDEpIDMzJSwgcmdiYSgyMTAsMTcyLDcxLDEpIDgxJSk7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC50aXR1bG9ze1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIC5teS1jbGFzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDMxLCAzMSkgO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIFxyXG4gICAgICAvKiBBZGQgbW9yZSBjc3Mgc3R5bGVzICovXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/list-events/list-events/list-events.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/list-events/list-events/list-events.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventsComponent", function() { return ListEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var app_modules_detail_event_detail_event_detail_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/detail-event/detail-event/detail-event.component */ "./src/app/modules/detail-event/detail-event/detail-event.component.ts");
/* harmony import */ var app_modules_events_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/events/events.service */ "./src/app/modules/events/events.service.ts");
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




var ListEventsComponent = /** @class */ (function () {
    function ListEventsComponent(eventsService, dialog) {
        this.eventsService = eventsService;
        this.dialog = dialog;
        this.nuevo_vector = [];
    }
    ListEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list_cards = this.eventsService.getEvents();
        this.imagenes = this.eventsService.getImgEvent();
        this.list_cards.subscribe(function (event) {
            event.forEach(function (element) {
                // console.log(element);
                var nuevo_objeto = { id: '', title: '', description: '', images: [] };
                nuevo_objeto.id = element.id;
                nuevo_objeto.title = element.title;
                nuevo_objeto.description = element.description;
                _this.imagenes.subscribe(function (e) {
                    e.forEach(function (image) {
                        if (element.id == image.idEvent) {
                            // console.log(element.id+' '+image.idEvent);
                            nuevo_objeto.images.push(image);
                            // console.log(this.nuevo_objeto.images);
                        }
                    });
                });
                _this.nuevo_vector.push(nuevo_objeto);
                // console.log(this.nuevo_vector);
                nuevo_objeto.images = [];
            });
        });
    };
    ListEventsComponent.prototype.viewEvent = function (event) {
        this.dialog.open(app_modules_detail_event_detail_event_detail_event_component__WEBPACK_IMPORTED_MODULE_2__["DetailEventComponent"], {
            width: '700px',
            height: '700px',
            data: event,
            panelClass: 'events-class'
        });
    };
    ListEventsComponent.ctorParameters = function () { return [
        { type: app_modules_events_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
    ]; };
    ListEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-events',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list-events.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/list-events/list-events/list-events.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list-events.component.css */ "./src/app/modules/list-events/list-events/list-events.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_modules_events_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ListEventsComponent);
    return ListEventsComponent;
}());



/***/ }),

/***/ "./src/app/modules/list-team/list-team.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/list-team/list-team.module.ts ***!
  \*******************************************************/
/*! exports provided: ListTeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTeamModule", function() { return ListTeamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _list_team_list_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-team/list-team.component */ "./src/app/modules/list-team/list-team/list-team.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var ListTeamModule = /** @class */ (function () {
    function ListTeamModule() {
    }
    ListTeamModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_list_team_list_team_component__WEBPACK_IMPORTED_MODULE_2__["ListTeamComponent"]],
            imports: [
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            ],
            exports: [_list_team_list_team_component__WEBPACK_IMPORTED_MODULE_2__["ListTeamComponent"]]
        })
    ], ListTeamModule);
    return ListTeamModule;
}());



/***/ }),

/***/ "./src/app/modules/list-team/list-team/list-team.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/list-team/list-team/list-team.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 2000px)  and (min-width: 800px) {\r\n\r\n    .container{\r\n        display: grid;\r\n        grid-template-columns: repeat(2, minmax(25rem, 1fr));\r\n        gap: 1em;\r\n        grid-template-rows: minmax(15px, auto);\r\n    }\r\n}\r\n  \r\n@media only screen and (max-width: 800px) { \r\n\r\n    .container{\r\n        display: grid;\r\n        grid-template-columns: repeat(1, minmax(25rem, 1fr));\r\n        gap: 1em;\r\n        grid-template-rows: minmax(15px, auto);\r\n    }\r\n}\r\n  \r\n.container::before{\r\n    display: none;\r\n}\r\n  \r\n.row-w-90 {\r\n    max-width: 90% !important;\r\n    margin: 0 auto;\r\n}\r\n  \r\n.iconoEquipo {\r\n    width: 115px;\r\n    height: 115px;\r\n    border-radius: 50%;\r\n}\r\n  \r\n.ul-equipo {\r\n    list-style: none;\r\n    margin-bottom: 60px;\r\n}\r\n  \r\n.nombreEquipo {\r\n    font-family: \"Poppins\";\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    color: #ffffff;\r\n    font-size: 22px;\r\n    margin-bottom: 12px;\r\n  }\r\n  \r\n.numeroContacto {\r\n    font-family: \"Poppins\";\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    color: #ffffff;\r\n    font-size: 22px;\r\n    margin-bottom: 12px;\r\n}\r\n  \r\n.emailContacto {\r\nfont-family: \"Poppins\";\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    color: #ffffff;\r\n    font-size: 17px;\r\n    margin-bottom: 12px;\r\n}\r\n  \r\n.correoContacto {\r\n    font-family: \"Poppins\";\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    color: #ffffff;\r\n    font-size: 22px;\r\n    margin: 0px 0px 0px !important;\r\n}\r\n  \r\n.iconContacto {\r\n    margin-top: 2rem;\r\n    width: 50%;\r\n}\r\n  \r\n.tituloContacto {\r\n    /* background-color: rgb(28, 169, 166); */\r\n    background: rgb(174,134,37);\r\n    background: -webkit-gradient(linear, left top, right top, from(rgba(174,134,37,1)), color-stop(33%, rgba(247,239,138,1)), color-stop(81%, rgba(210,172,71,1)));\r\n    background: linear-gradient(90deg, rgba(174,134,37,1) 0%, rgba(247,239,138,1) 33%, rgba(210,172,71,1) 81%);\r\n    font-family: \"Poppins\";\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    color: #ffffff;\r\n    -webkit-text-stroke: 0.9px black;\r\n    font-size: 20px;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    border-radius: 8px;\r\n}\r\n  \r\n.imagen{\r\n    float: left !important;\r\n}\r\n  \r\n.datos{\r\n    float: left !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9saXN0LXRlYW0vbGlzdC10ZWFtL2xpc3QtdGVhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksYUFBYTtRQUNiLG9EQUFvRDtRQUNwRCxRQUFRO1FBQ1Isc0NBQXNDO0lBQzFDO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxhQUFhO1FBQ2Isb0RBQW9EO1FBQ3BELFFBQVE7UUFDUixzQ0FBc0M7SUFDMUM7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztBQUNGO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBQ0E7QUFDQSxzQkFBc0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QywyQkFBMkI7SUFDM0IsOEpBQTBHO0lBQTFHLDBHQUEwRztJQUMxRyxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGlzdC10ZWFtL2xpc3QtdGVhbS9saXN0LXRlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwMHB4KSAgYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcblxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgyNXJlbSwgMWZyKSk7XHJcbiAgICAgICAgZ2FwOiAxZW07XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMTVweCwgYXV0byk7XHJcbiAgICB9XHJcbn1cclxuICBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgeyBcclxuXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDI1cmVtLCAxZnIpKTtcclxuICAgICAgICBnYXA6IDFlbTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgxNXB4LCBhdXRvKTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lcjo6YmVmb3Jle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnJvdy13LTkwIHtcclxuICAgIG1heC13aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uaWNvbm9FcXVpcG8ge1xyXG4gICAgd2lkdGg6IDExNXB4O1xyXG4gICAgaGVpZ2h0OiAxMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4udWwtZXF1aXBvIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4ubm9tYnJlRXF1aXBvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIH1cclxuLm51bWVyb0NvbnRhY3RvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuLmVtYWlsQ29udGFjdG8ge1xyXG5mb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi5jb3JyZW9Db250YWN0byB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmljb25Db250YWN0byB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnRpdHVsb0NvbnRhY3RvIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMTY5LCAxNjYpOyAqL1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE3NCwxMzQsMzcpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE3NCwxMzQsMzcsMSkgMCUsIHJnYmEoMjQ3LDIzOSwxMzgsMSkgMzMlLCByZ2JhKDIxMCwxNzIsNzEsMSkgODElKTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjlweCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5pbWFnZW57XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0b3N7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/list-team/list-team/list-team.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/list-team/list-team/list-team.component.ts ***!
  \********************************************************************/
/*! exports provided: ListTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTeamComponent", function() { return ListTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_services_team_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/team/team.service */ "./src/app/services/team/team.service.ts");
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


var ListTeamComponent = /** @class */ (function () {
    function ListTeamComponent(teamService) {
        this.teamService = teamService;
    }
    ListTeamComponent.prototype.ngOnInit = function () {
        this.team = this.teamService.getTeam();
    };
    ListTeamComponent.ctorParameters = function () { return [
        { type: app_services_team_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"] }
    ]; };
    ListTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-team',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/list-team/list-team/list-team.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list-team.component.css */ "./src/app/modules/list-team/list-team/list-team.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_services_team_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]])
    ], ListTeamComponent);
    return ListTeamComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-registration/user-registration.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/user-registration/user-registration.module.ts ***!
  \***********************************************************************/
/*! exports provided: UserRegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationModule", function() { return UserRegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-registration/user-registration.component */ "./src/app/modules/user-registration/user-registration/user-registration.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var UserRegistrationModule = /** @class */ (function () {
    function UserRegistrationModule() {
    }
    UserRegistrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationComponent"]],
            imports: [
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            exports: [_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationComponent"]]
        })
    ], UserRegistrationModule);
    return UserRegistrationModule;
}());



/***/ }),

/***/ "./src/app/modules/user-registration/user-registration/user-registration.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/user-registration/user-registration/user-registration.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".formularioGeneral {\r\n    padding-left: 5rem;\r\n    padding-right: 5rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    background-color: rgb(20, 18, 13);\r\n    /* background: rgb(174,134,37);\r\n    background: linear-gradient(180deg, rgba(174,134,37,1) 0%, rgba(247,239,138,1) 15%, rgba(210,172,71,1) 81%); */\r\n    border-radius: 8px 8px 8px 8px;\r\n    -moz-border-radius: 8px 8px 8px 8px;\r\n    -webkit-border-radius: 8px 8px 8px 8px;\r\n  }\r\n\r\n  .text-registro {\r\n    font-family: \"Poppins\";\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-size: 25px;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .text-validarPorCorreo {\r\n    font-family: \"Poppins\";\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-size: 15px;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .text-textocertificado {\r\n    font-family: \"Poppins\";\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-size: 10px;\r\n    color: #ffffff;\r\n    margin: 2%;\r\n  }\r\n\r\n  .text-rol {\r\n    font-family: \"Poppins\";\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-size: 15px;\r\n    color: #000000;\r\n  }\r\n\r\n  .section-init {\r\n    position: relative;\r\n    top: -100px;\r\n    /* min-height: 80vh; */\r\n  }\r\n\r\n  .row-w-100 {\r\n    max-width: 100% !important;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .row-w-60 {\r\n    max-width: 55% !important;\r\n    margin: 0 auto;\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  .section-contac {\r\n    margin-top: 55px;\r\n  }\r\n\r\n  .botonRegistrar {\r\n    border-radius: 50px;\r\n    -moz-border-radius: 50px;\r\n    -webkit-border-radius: 50px;\r\n    background-color: #3792A7;\r\n    border: solid #000000 1px;\r\n    color: #ffffff;\r\n    margin-top: 2rem;\r\n    width: 180px;\r\n    height: 50px;\r\n    font-family: \"Poppins\";\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-size: 20px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  @media only screen and (max-width: 2000px)  and (min-width: 800px) {\r\n    .formulario{\r\n      display: grid;\r\n      grid-template-columns: repeat(10, 1fr);\r\n    }\r\n\r\n    .pos-form{\r\n      grid-column-start: 2;\r\n      grid-column-end: 10;\r\n    }\r\n\r\n    .izqForm{\r\n      float: left;\r\n      width: 47%;\r\n    }\r\n  \r\n    .derForm{\r\n      float: left;\r\n      margin-left: 5%;\r\n      width: 47%;\r\n    }\r\n\r\n  }\r\n\r\n  @media only screen and (max-width: 800px) { \r\n\r\n    .izqForm{\r\n      width: 100%;\r\n    }\r\n  \r\n    .derForm{\r\n      width: 100%;\r\n    }\r\n\r\n  }\r\n\r\n  .group-name{\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    gap: 1em;\r\n  }\r\n\r\n  .input-name{\r\n    grid-column-start: 2;\r\n    grid-column-end: 10;\r\n  }\r\n\r\n  .text-registro{\r\n    margin-top: 2% !important;\r\n  }\r\n\r\n  .bordeado{\r\n    max-height: 50px;\r\n    background: rgb(174,134,37);\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(174,134,37,1)), color-stop(33%, rgba(247,239,138,1)), color-stop(81%, rgba(210,172,71,1)));\r\n    background: linear-gradient(180deg, rgba(174,134,37,1) 0%, rgba(247,239,138,1) 33%, rgba(210,172,71,1) 81%);\r\n  }\r\n\r\n  .card-form {\r\n    padding: 2rem;\r\n  }\r\n\r\n  .text-info {\r\n    font-family: \"Poppins\";\r\n    font-weight: 300;\r\n    font-size: 18px;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .container{\r\n    max-width: 1500px;\r\n  }\r\n\r\n  img{\r\n    max-width: 100%;\r\n  }\r\n\r\n  .registro{\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n  }\r\n\r\n  .logo {\r\n    width: 90px;\r\n}\r\n\r\n  .modal-dialog {\r\n  min-width: 70% !important;\r\n}\r\n\r\n  .border {\r\n  border: #e0e0e0 solid 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXJlZ2lzdHJhdGlvbi91c2VyLXJlZ2lzdHJhdGlvbi91c2VyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQztrSEFDOEc7SUFDOUcsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFHQTtJQUNFLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBO0lBQ0U7TUFDRSxhQUFhO01BQ2Isc0NBQXNDO0lBQ3hDOztJQUVBO01BQ0Usb0JBQW9CO01BQ3BCLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLFdBQVc7TUFDWCxVQUFVO0lBQ1o7O0lBRUE7TUFDRSxXQUFXO01BQ1gsZUFBZTtNQUNmLFVBQVU7SUFDWjs7RUFFRjs7RUFFQTs7SUFFRTtNQUNFLFdBQVc7SUFDYjs7SUFFQTtNQUNFLFdBQVc7SUFDYjs7RUFFRjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsUUFBUTtFQUNWOztFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjs7RUFHQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsZ0tBQTJHO0lBQTNHLDJHQUEyRztFQUM3Rzs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLFdBQVc7QUFDZjs7RUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7RUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtdWxhcmlvR2VuZXJhbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTgsIDEzKTtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigxNzQsMTM0LDM3KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTc0LDEzNCwzNywxKSAwJSwgcmdiYSgyNDcsMjM5LDEzOCwxKSAxNSUsIHJnYmEoMjEwLDE3Miw3MSwxKSA4MSUpOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCA4cHggOHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHggOHB4IDhweCA4cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweCA4cHggOHB4IDhweDtcclxuICB9XHJcblxyXG4gIC50ZXh0LXJlZ2lzdHJvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC50ZXh0LXZhbGlkYXJQb3JDb3JyZW8ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtdGV4dG9jZXJ0aWZpY2FkbyB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtcm9sIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWluaXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTAwcHg7XHJcbiAgICAvKiBtaW4taGVpZ2h0OiA4MHZoOyAqL1xyXG4gIH1cclxuXHJcbiAgLnJvdy13LTEwMCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnJvdy13LTYwIHtcclxuICAgIG1heC13aWR0aDogNTUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGFjIHtcclxuICAgIG1hcmdpbi10b3A6IDU1cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmJvdG9uUmVnaXN0cmFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc5MkE3O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjMDAwMDAwIDFweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwMDBweCkgIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmZvcm11bGFyaW97XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5wb3MtZm9ybXtcclxuICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgIGdyaWQtY29sdW1uLWVuZDogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLml6cUZvcm17XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB3aWR0aDogNDclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRlckZvcm17XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgeyBcclxuXHJcbiAgICAuaXpxRm9ybXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZGVyRm9ybXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLmdyb3VwLW5hbWV7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgICBnYXA6IDFlbTtcclxuICB9XHJcbiAgLmlucHV0LW5hbWV7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMTA7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAudGV4dC1yZWdpc3Ryb3tcclxuICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVhZG97XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE3NCwxMzQsMzcpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNzQsMTM0LDM3LDEpIDAlLCByZ2JhKDI0NywyMzksMTM4LDEpIDMzJSwgcmdiYSgyMTAsMTcyLDcxLDEpIDgxJSk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgfVxyXG5cclxuICAudGV4dC1pbmZvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogMTUwMHB4O1xyXG4gIH1cclxuXHJcbiAgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnJlZ2lzdHJve1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICBib3JkZXI6ICNlMGUwZTAgc29saWQgMXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/user-registration/user-registration/user-registration.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/user-registration/user-registration/user-registration.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../assets/js/function.js */ "./src/assets/js/function.js");
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





var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(userService) {
        this.userService = userService;
        this.validador = true;
        this.seleccionado = false;
        this.profSeleccionado = false;
        this.selected = '';
        this.profesion = '';
        this.confirmacionRural = false;
        this.confirmacionAgremiado = false;
        this.roles = [
            {
                opt: 'Estudiante',
                value: 70.00,
            },
            {
                opt: 'Auxialiar o técnicos de odontología',
                value: 70.00,
            },
            {
                opt: 'Odontólogo rural',
                value: 90.00,
            },
            {
                opt: 'Odontólogo agremiado a la FOE',
                value: 110.00,
            },
            {
                opt: 'Odontólogo no agremiado a la FOE',
                value: 140.00,
            },
            {
                opt: 'Odontólogo extranjero',
                value: 140.00,
            },
        ];
        this.showPpButton = false;
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
        this.user = {
            user_id: '',
            user_profesion: '',
            user_name: '',
            user_lastname: '',
            user_ci: '',
            user_direction: '',
            user_email: '',
            user_phone: '',
            user_rol: '',
        };
    };
    /**
    * *** Funcion para almacenar los mensajes del usuario ***
    * *** Se obtine la información del formulario de contacto ***
    * @param user
    * @param valid
    */
    UserRegistrationComponent.prototype.onSaveUser = function (user, valid) {
        var _this = this;
        if (valid && this.validador) {
            user.user_rol = this.selected;
            if (this.selected == 'Estudiante' || this.selected == 'Auxialiar o técnicos de odontología') {
                user.user_pay = 70;
            }
            else if (this.selected == 'Odontólogo rural') {
                user.user_pay = 90;
            }
            else if (this.selected == 'Odontólogo agremiado a la FOE') {
                user.user_pay = 110;
            }
            else if (this.selected == 'Odontólogo no agremiado a la FOE' || this.selected == 'Odontólogo extranjero') {
                user.user_pay = 140;
            }
            user.user_id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
            user.user_profesion = this.profesion;
            this.user = user;
            this.userService.createUser(user).then(function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()("OK", "Su registro ha sido extoso, por favor ingrese su forma de pago para finalizar", "success");
                _this.InitPaymentWhitPayphone();
            });
        }
    };
    UserRegistrationComponent.prototype.validadorDeCedula = function () {
        var _this = this;
        var cedula = this.user.user_ci;
        var cedulaCorrecta = false;
        if (cedula.length == 10) {
            var tercerDigito = parseInt(cedula.substring(2, 3));
            if (tercerDigito < 6) {
                var coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
                var verificador = parseInt(cedula.substring(9, 10));
                var suma = 0;
                var digito = 0;
                for (var i = 0; i < (cedula.length - 1); i++) {
                    digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
                    suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
                }
                suma = Math.round(suma);
                if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
                    cedulaCorrecta = true;
                }
                else if ((10 - (Math.round(suma % 10))) == verificador) {
                    cedulaCorrecta = true;
                }
                else {
                    cedulaCorrecta = false;
                }
            }
            else {
                cedulaCorrecta = false;
            }
        }
        else {
            cedulaCorrecta = false;
        }
        // console.log(cedulaCorrecta);
        if (cedulaCorrecta == true) {
            var ob_1;
            var consulta = this.userService.getUserByCI(cedula).subscribe(function (data) {
                ob_1 = data;
                if (ob_1.length > 0) {
                    _this.validador = false;
                }
                else {
                    _this.validador = true;
                }
            });
        }
        else {
            this.validador = false;
        }
        // console.log(this.validador);
    };
    UserRegistrationComponent.prototype.validarSeleccionProf = function () {
        this.profSeleccionado = true;
    };
    UserRegistrationComponent.prototype.validarSeleccion = function () {
        var _this = this;
        this.showPpButton = false;
        this.seleccionado = true;
        if (this.selected == "Odontólogo rural") {
            this.confirmacionRural = true;
            this.confirmacionAgremiado = false;
        }
        else if (this.selected == 'Odontólogo agremiado a la FOE') {
            this.confirmacionRural = false;
            this.confirmacionAgremiado = true;
        }
        else {
            this.confirmacionRural = false;
            this.confirmacionAgremiado = false;
        }
        // console.log('*** validarSeleccion ***');
        // console.log(this.selected);
        this.roles.forEach(function (rol) {
            if (rol.opt == _this.selected) {
                console.log(rol.opt);
                console.log(rol.value);
                _this.rolSelected = rol;
            }
        });
    };
    UserRegistrationComponent.prototype.InitPaymentWhitPayphone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('*** InitPaymentWhitPayphone ***');
                // if (valid) {
                this.showPpButton = false;
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        $('#modalPayment').modal('show');
                        this.showPpButton = true;
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            var idd, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        idd = new Date().getTime();
                                        console.log(this.rolSelected.value);
                                        return [4 /*yield*/, _assets_js_function_js__WEBPACK_IMPORTED_MODULE_4__["InitPaymentWhitPayphone"]((this.rolSelected.value * 100), idd, idd, this.user)];
                                    case 1:
                                        response = _a.sent();
                                        console.log('*** response ***');
                                        console.log(response);
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 300);
                        return [2 /*return*/];
                    });
                }); }, 100);
                return [2 /*return*/];
            });
        });
    };
    UserRegistrationComponent.ctorParameters = function () { return [
        { type: app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
    ]; };
    UserRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-registration',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-registration/user-registration/user-registration.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user-registration.component.css */ "./src/app/modules/user-registration/user-registration/user-registration.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());

var Rol = /** @class */ (function () {
    function Rol() {
    }
    return Rol;
}());


/***/ }),

/***/ "./src/app/services/auth/auth/auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/auth/auth/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-auth.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-firestore.js");
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






var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router, fb) {
        this.afAuth = afAuth;
        this.router = router;
        this.fb = fb;
    }
    // async getUserByEmail (email: string) {
    //   return this.fb.collection('users_collection').doc(email).valueChanges();
    // }
    AuthService.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.signInWithEmailAndPassword(email, password)];
                    case 1:
                        result = _a.sent();
                        $("#modalLogin").modal("hide");
                        this.router.navigate(['/admin']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1.code == "auth/wrong-password") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "La contraseña no es válida o el usuario no tiene una contraseña", "error");
                        }
                        if (error_1.code == "auth/user-not-found") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "No hay registro de usuario correspondiente a este email. El usuario puede haber sido eliminado", "error");
                            // this.utilitiesService.showMessage('top', 'right', 4, "No hay registro de usuario correspondiente a este email. El usuario puede haber sido eliminado");
                        }
                        if (error_1.code == "auth/invalid-email") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "El email no tiene un formato válido.", "error");
                            // this.utilitiesService.showMessage('top', 'right', 4, "Demasiados intentos de inicio de sesión fallidos.");
                        }
                        if (error_1.code == "auth/too-many-requests") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "Demasiados intentos de inicio de sesión fallidos.", "error");
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.register = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth
                                .createUserWithEmailAndPassword(email, password)
                                .then(function (ok) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("OK", "Registro Exitoso", "success");
                                _this.router.navigate(['/index']);
                                return ok.user;
                            })
                                .catch(function (error) {
                                if (error.code == "auth/user-not-found") {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "No hay registro de usuario correspondiente a este email. El usuario puede haber sido eliminado", "error");
                                }
                                if (error.code == "auth/email-already-in-use") {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "El email ingresado ya está en uso", "error");
                                }
                                if (error.code == "auth/wrong-password") {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "La contraseña no es válida o el usuario no tiene una contraseña", "error");
                                }
                                if (error.code == "auth/too-many-requests") {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "Demasiados intentos de inicio de sesión fallidos.", "error");
                                }
                                if (error.code == "auth/invalid-email") {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "El email no tiene un formato válido.", "error");
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        error_2 = _a.sent();
                        if (error_2.code == "auth/user-not-found") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "No hay registro de usuario correspondiente a este email. El usuario puede haber sido eliminado", "error");
                        }
                        if (error_2.code == "auth/email-already-in-use") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "El email ingresado ya está en uso", "error");
                        }
                        if (error_2.code == "auth/wrong-password") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "La contraseña no es válida o el usuario no tiene una contraseña", "error");
                        }
                        if (error_2.code == "auth/too-many-requests") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "Demasiados intentos de inicio de sesión fallidos.", "error");
                        }
                        if (error_2.code == "auth/invalid-email") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Atención", "El email no tiene un formato válido.", "error");
                        }
                        return [2 /*return*/, error_2];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.signOut()];
                    case 1:
                        _a.sent();
                        this.router.navigate(['']);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/carrusel/carrusel.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/carrusel/carrusel.service.ts ***!
  \*******************************************************/
/*! exports provided: CarruselService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarruselService", function() { return CarruselService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-storage.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-firestore.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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




var CarruselService = /** @class */ (function () {
    function CarruselService(db, storage) {
        this.db = db;
        this.storage = storage;
    }
    CarruselService.prototype.createImagesCarrusel = function (carruselImage) {
        var id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        return this.db.collection('imagenesCarrusel').doc(id).set(__assign(__assign({}, carruselImage), { id: id }));
    };
    CarruselService.prototype.getImgCarrusel = function () {
        return this.db.collection('imagenesCarrusel').valueChanges();
    };
    CarruselService.prototype.uploadCarruselImages = function (files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var urls = [];
            var _loop_1 = function (file) {
                var id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
                var filePath = "Carrusel/" + id;
                var task = _this.storage.upload(filePath, file);
                task.then(function (t) {
                    t.ref.getDownloadURL().then(function (url) {
                        urls.push({ url: url, id: id });
                        if (urls.length === files.length) {
                            resolve(urls);
                        }
                    });
                }).catch(function (e) { return reject(e); });
            };
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                _loop_1(file);
            }
        });
    };
    CarruselService.prototype.deleteImageStorageCarruselById = function (id) {
        return this.storage.ref("Carrusel/" + id).delete().toPromise();
    };
    CarruselService.prototype.deleteImagesCarrusel = function (id) {
        return this.db.collection('imagenesCarrusel').doc(id).delete();
    };
    CarruselService.prototype.updateImagenCarrucel = function (id, imagenCarrucel) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.db.collection('imagenesCarrusel').doc(id).update(imagenCarrucel)];
            });
        });
    };
    CarruselService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"] }
    ]; };
    CarruselService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]])
    ], CarruselService);
    return CarruselService;
}());



/***/ }),

/***/ "./src/app/services/categories/categories.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/categories/categories.service.ts ***!
  \***********************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-firestore.js");
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


var CategoriesService = /** @class */ (function () {
    function CategoriesService(db) {
        this.db = db;
    }
    CategoriesService.prototype.saveCategories = function (category) {
        return this.db.collection('category').doc("" + category.id_category).set(category);
    };
    CategoriesService.prototype.getCategories = function () {
        return this.db.collection('category').valueChanges();
    };
    CategoriesService.prototype.getCategorieId = function (category_id) {
        return this.db.collection('category').doc("" + category_id).valueChanges();
    };
    CategoriesService.prototype.updateCategory = function (category) {
        return this.db.collection('category').doc("" + category.id_category).update(category);
    };
    CategoriesService.prototype.deleteCategory = function (categoryId) {
        return this.db.collection('category').doc("" + categoryId).delete();
    };
    CategoriesService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
    ]; };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/services/conventions/conventions.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/conventions/conventions.service.ts ***!
  \*************************************************************/
/*! exports provided: ConventionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConventionsService", function() { return ConventionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-storage.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};




var ConventionsService = /** @class */ (function () {
    function ConventionsService(db, storage) {
        this.db = db;
        this.storage = storage;
    }
    ConventionsService.prototype.getConventions = function () {
        return this.db.collection('convenios').valueChanges();
    };
    ConventionsService.prototype.getConventionById = function (id) {
        return this.db.collection('convenios').doc(id).valueChanges();
    };
    ConventionsService.prototype.getImgConvention = function () {
        return this.db.collection('imagenesConvenios').valueChanges();
    };
    ConventionsService.prototype.createConvention = function (id, event) {
        return this.db.collection('convenios').doc(id).set(__assign(__assign({}, event), { id: id }));
    };
    ConventionsService.prototype.updateConvention = function (id, event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.db.collection('convenios').doc(id).update(event)];
            });
        });
    };
    ConventionsService.prototype.deleteConvention = function (id) {
        return this.db.collection('convenios').doc(id).delete();
    };
    ConventionsService.prototype.deleteImagesConvention = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.collection('imagenesConvenios').doc(id).delete()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConventionsService.prototype.deleteAllConventions = function () {
        var _this = this;
        return this.db.collection('convenios').get().toPromise().then(function (snapshot) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, doc, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 6, 7, 12]);
                        _a = __asyncValues(snapshot.docs);
                        _d.label = 1;
                    case 1: return [4 /*yield*/, _a.next()];
                    case 2:
                        if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 5];
                        doc = _b.value;
                        return [4 /*yield*/, doc.ref.delete()];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [3 /*break*/, 1];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _d.trys.push([7, , 10, 11]);
                        if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _c.call(_a)];
                    case 8:
                        _d.sent();
                        _d.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        }); });
    };
    ConventionsService.prototype.uploadImages = function (files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var urls = [];
            var _loop_1 = function (file) {
                var id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
                var filePath = "Convenios/" + id;
                var task = _this.storage.upload(filePath, file);
                task.then(function (t) {
                    t.ref.getDownloadURL().then(function (url) {
                        urls.push({ url: url, id: id });
                        if (urls.length === files.length) {
                            resolve(urls);
                        }
                    });
                }).catch(function (e) { return reject(e); });
            };
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                _loop_1(file);
            }
        });
    };
    ConventionsService.prototype.deleteImageById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.ref("Convenios/" + id).delete().toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConventionsService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }
    ]; };
    ConventionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
    ], ConventionsService);
    return ConventionsService;
}());



/***/ }),

/***/ "./src/app/services/dates/dates.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/dates/dates.service.ts ***!
  \*************************************************/
/*! exports provided: DatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatesService", function() { return DatesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
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

var DatesService = /** @class */ (function () {
    function DatesService() {
    }
    /**
     * *** devuelve la fecha actual ***
     * *** formato 2020-10-05 ***
     */
    DatesService.prototype.getDateCurrent = function () {
        var date = new Date();
        return (date.getFullYear() +
            "-" +
            this.addZero(date.getMonth() + 1) +
            "-" +
            this.addZero(date.getDate()));
    };
    /**
     * *** devuelve la hora actual ***
     */
    DatesService.prototype.getTimeCurrent = function () {
        var date = new Date();
        return (this.addZero(date.getHours()) +
            ":" +
            this.addZero(date.getMinutes()) +
            ":" +
            this.addZero(date.getSeconds()));
    };
    DatesService.prototype.addZero = function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };
    DatesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [])
    ], DatesService);
    return DatesService;
}());



/***/ }),

/***/ "./src/app/services/message/message.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/message/message.service.ts ***!
  \*****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-firestore.js");
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


var MessageService = /** @class */ (function () {
    function MessageService(firestore) {
        this.firestore = firestore;
    }
    //Crea una nueva categoria
    MessageService.prototype.createMessage = function (message) {
        return this.firestore.collection('message').doc(message.message_id).set(message);
    };
    MessageService.prototype.getMessages = function () {
        return this.firestore.collection('message', function (ref) { return ref.orderBy('message_id', 'desc'); }).valueChanges();
    };
    MessageService.prototype.getDenuncias = function () {
        return this.firestore.collection('comment_complaint').valueChanges();
    };
    MessageService.prototype.deleteCommentary = function (c) {
        this.firestore.collection('novelty').doc(c.novelty.novelty_id).collection('comments').doc(c.commentary.commentary_id).delete();
        return this.firestore.collection('comment_complaint').doc(c.commentary.commentary_id).delete();
    };
    MessageService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
    ]; };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/product/product.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/product/product.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-firestore.js");
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


var ProductService = /** @class */ (function () {
    function ProductService(product, category) {
        this.product = product;
        this.category = category;
        this.carrito = [];
    }
    //Crea una nueva categoria
    ProductService.prototype.createProduct = function (product) {
        return this.product.collection('products').doc(product.pro_id).set(product);
    };
    //Obtiene una nueva categoria
    ProductService.prototype.getProduct = function (documentId) {
        return this.product.collection('products').doc(documentId).snapshotChanges();
    };
    //Obtiene todos las categorias
    ProductService.prototype.getProducts = function () {
        return this.product.collection('products').snapshotChanges();
    };
    //Actualiza una nueva categoria
    ProductService.prototype.updateProduct = function (documentId, data) {
        return this.product.collection('products').doc(documentId).set(data);
    };
    //Actualiza una nueva categoria
    ProductService.prototype.updateProductState = function (product) {
        return this.product.collection('products').doc(product.pro_id).update(product);
    };
    //Elimina una nueva categoria
    ProductService.prototype.deleteProduct = function (documentId) {
        return this.product.collection('products').doc(documentId).delete();
    };
    //Obtiene todos las categorias
    ProductService.prototype.getCategories = function () {
        return this.category.collection('category').snapshotChanges();
    };
    // //Obtener sub categoria
    // getSubCategory(): Observable<any[]>{
    //   //se envia el codigo de la category
    //   return this.product.collection('category').doc('03u7SPV2avAP5KY9WXjJ').collection('sub_category').snapshotChanges();
    // }
    //Obtiene la mision
    ProductService.prototype.getMision = function () {
        return this.product.collection('mision').valueChanges();
    };
    //obtiene la vision
    ProductService.prototype.getVision = function () {
        return this.product.collection('vision').valueChanges();
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
    ]; };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/sponsor/sponsor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/sponsor/sponsor.service.ts ***!
  \*****************************************************/
/*! exports provided: SponsorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorService", function() { return SponsorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-storage.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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




var SponsorService = /** @class */ (function () {
    function SponsorService(db, storage) {
        this.db = db;
        this.storage = storage;
    }
    SponsorService.prototype.getSponsor = function () {
        return this.db.collection('sponsor').valueChanges();
    };
    SponsorService.prototype.uploadImages = function (files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var urls = [];
            var _loop_1 = function (file) {
                var id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
                var filePath = "ImagenSponsor/" + id;
                var task = _this.storage.upload(filePath, file);
                task.then(function (t) {
                    t.ref.getDownloadURL().then(function (url) {
                        urls.push({ url: url, id: id });
                        if (urls.length === files.length) {
                            resolve(urls);
                        }
                    });
                }).catch(function (e) { return reject(e); });
            };
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                _loop_1(file);
            }
        });
    };
    SponsorService.prototype.createSponsor = function (sponsor) {
        return this.db.collection('sponsor').doc(sponsor.sponsor_id).set(__assign({}, sponsor));
    };
    SponsorService.prototype.updateSponsor = function (sponsor) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.db.collection('sponsor').doc(sponsor.sponsor_id).update(sponsor)];
            });
        });
    };
    SponsorService.prototype.deleteImageSponsor = function (id) {
        return this.storage.ref("ImagenSponsor/" + id).delete().toPromise();
    };
    SponsorService.prototype.deleteSponsor = function (id) {
        return this.db.collection('sponsor').doc(id).delete();
    };
    SponsorService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }
    ]; };
    SponsorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
    ], SponsorService);
    return SponsorService;
}());



/***/ }),

/***/ "./src/app/services/team/team.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/team/team.service.ts ***!
  \***********************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-storage.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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




var TeamService = /** @class */ (function () {
    function TeamService(db, storage) {
        this.db = db;
        this.storage = storage;
    }
    TeamService.prototype.getTeam = function () {
        return this.db.collection('equipo').valueChanges();
    };
    TeamService.prototype.uploadImages = function (files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var urls = [];
            var _loop_1 = function (file) {
                var id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
                var filePath = "ImagenIntegrante/" + id;
                var task = _this.storage.upload(filePath, file);
                task.then(function (t) {
                    t.ref.getDownloadURL().then(function (url) {
                        urls.push({ url: url, id: id });
                        if (urls.length === files.length) {
                            resolve(urls);
                        }
                    });
                }).catch(function (e) { return reject(e); });
            };
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                _loop_1(file);
            }
        });
    };
    TeamService.prototype.createMember = function (member) {
        return this.db.collection('equipo').doc(member.team_id).set(__assign({}, member));
    };
    TeamService.prototype.updateMember = function (member) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.db.collection('equipo').doc(member.team_id).update(member)];
            });
        });
    };
    TeamService.prototype.deleteImageMember = function (id) {
        return this.storage.ref("ImagenIntegrante/" + id).delete().toPromise();
    };
    TeamService.prototype.deleteMember = function (id) {
        return this.db.collection('equipo').doc(id).delete();
    };
    TeamService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }
    ]; };
    TeamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-firestore.js");
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


var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    //Crea una nueva categoria
    UserService.prototype.createUser = function (user) {
        return this.db.collection('usuarios').doc(user.user_id).set(user);
    };
    UserService.prototype.getUsers = function () {
        return this.db.collection('usuarios').valueChanges();
    };
    UserService.prototype.getUserByCI = function (id) {
        return this.db.collection('usuarios', function (ref) { return ref.where('user_ci', '==', id); }).valueChanges();
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
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


var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0
};
var FixedPluginComponent = /** @class */ (function () {
    function FixedPluginComponent(location) {
        this.background_image = true;
        this.state = true;
        this.location = location;
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        var $full_page = $('.full-page');
        var $sidebar_responsive = $('body > .navbar-collapse');
        var window_width = $(window).width();
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .badge').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($full_page.length != 0) {
                $full_page.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
            var new_image = $(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    FixedPluginComponent.prototype.onChange = function ($event) {
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        var $full_page = $('.full-page');
        var $full_page_background = $('.full-page-background');
        var $sidebar_responsive = $('body > .navbar-collapse');
        if ($event.currentValue) {
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeIn('fast');
                $sidebar.attr('data-image', '#');
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeIn('fast');
                $full_page.attr('data-image', '#');
            }
            this.background_image = true;
        }
        else {
            if ($sidebar_img_container.length != 0) {
                $sidebar.removeAttr('data-image');
                $sidebar_img_container.fadeOut('fast');
            }
            if ($full_page_background.length != 0) {
                $full_page.removeAttr('data-image', '#');
                $full_page_background.fadeOut('fast');
            }
            this.background_image = false;
        }
    };
    FixedPluginComponent.prototype.onChange1 = function ($event) {
        var $body = $('body');
        if (misc.sidebar_mini_active == true) {
            $('body').removeClass('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            $('.sidebar .collapse').collapse('hide').on('hidden.bs.collapse', function () {
                $(this).css('height', 'auto');
            });
            setTimeout(function () {
                $('body').addClass('sidebar-mini');
                $('.sidebar .collapse').css('height', 'auto');
                misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    FixedPluginComponent.prototype.onChange2 = function ($event) {
        var $nav = $('nav.navbar').first();
        if ($nav.hasClass('navbar-fixed')) {
            $nav.removeClass('navbar-fixed').prependTo('.main-panel');
        }
        else {
            $nav.prependTo('.wrapper').addClass('navbar-fixed');
        }
    };
    FixedPluginComponent.prototype.isPages = function () {
        if (this.location.prepareExternalUrl(this.location.path()) == '/pages/login' || this.location.prepareExternalUrl(this.location.path()) == '/pages/register' ||
            this.location.prepareExternalUrl(this.location.path()) == '/pages/lock') {
            return false;
        }
        else {
            return true;
        }
    };
    FixedPluginComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    FixedPluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fixedplugin-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./fixedplugin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], FixedPluginComponent);
    return FixedPluginComponent;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedPluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function() { return FixedPluginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixedplugin.component */ "./src/app/shared/fixedplugin/fixedplugin.component.ts");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var FixedPluginModule = /** @class */ (function () {
    function FixedPluginModule() {
    }
    FixedPluginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__["JwBootstrapSwitchNg2Module"]],
            declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]],
            exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]]
        })
    ], FixedPluginModule);
    return FixedPluginModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'footer-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/auth/auth/auth.service */ "./src/app/services/auth/auth/auth.service.ts");
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





var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element, authSvc, router) {
        this.renderer = renderer;
        this.element = element;
        this.authSvc = authSvc;
        this.router = router;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];
        if ($("body").hasClass("sidebar-mini")) {
            misc.sidebar_mini_active = true;
        }
        $("#minimizeSidebar").click(function () {
            var $btn = $(this);
            if (misc.sidebar_mini_active == true) {
                $("body").removeClass("sidebar-mini");
                misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $("body").addClass("sidebar-mini");
                    misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event("resize"));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    NavbarComponent.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authSvc.logout()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NavbarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName("body")[0];
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        body.classList.add("nav-open");
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName("body")[0];
        this.toggleButton.classList.remove("toggled");
        this.sidebarVisible = false;
        body.classList.remove("nav-open");
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" &&
                this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + "/" + this.listTitles[i].children[j].path;
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return "Dashboard";
    };
    NavbarComponent.prototype.getPath = function () {
        return this.location.prepareExternalUrl(this.location.path());
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("navbar-cmp"),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "navbar-cmp",
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/shared/pagesnavbar/pagesnavbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/pagesnavbar/pagesnavbar.component.ts ***!
  \*************************************************************/
/*! exports provided: PagesnavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesnavbarComponent", function() { return PagesnavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
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


var PagesnavbarComponent = /** @class */ (function () {
    function PagesnavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    PagesnavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    PagesnavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    PagesnavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    PagesnavbarComponent.prototype.sidebarToggle = function () {
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    PagesnavbarComponent.prototype.isLogin = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '#/pages/login') {
            return true;
        }
        return false;
    };
    PagesnavbarComponent.prototype.isLock = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '#/pages/lock') {
            return true;
        }
        return false;
    };
    PagesnavbarComponent.prototype.isRegister = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '#/pages/register') {
            return true;
        }
        return false;
    };
    PagesnavbarComponent.prototype.getPath = function () {
        return this.location.prepareExternalUrl(this.location.path());
    };
    PagesnavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("pagesnavbar-cmp"),
        __metadata("design:type", Object)
    ], PagesnavbarComponent.prototype, "button", void 0);
    PagesnavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagesnavbar-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pagesnavbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagesnavbar/pagesnavbar.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PagesnavbarComponent);
    return PagesnavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/pagesnavbar/pagesnavbar.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/pagesnavbar/pagesnavbar.module.ts ***!
  \**********************************************************/
/*! exports provided: PagesnavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesnavbarModule", function() { return PagesnavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _pagesnavbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagesnavbar.component */ "./src/app/shared/pagesnavbar/pagesnavbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PagesnavbarModule = /** @class */ (function () {
    function PagesnavbarModule() {
    }
    PagesnavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_2__["PagesnavbarComponent"]],
            exports: [_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_2__["PagesnavbarComponent"]]
        })
    ], PagesnavbarModule);
    return PagesnavbarModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/auth/auth/auth.service */ "./src/app/services/auth/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
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



var ROUTES = [
    {
        path: "/events",
        title: "Eventos",
        type: "link",
        icontype: "pe-7s-culture",
    },
    {
        path: "/carrusel",
        title: "Carrusel",
        type: "link",
        icontype: "pe-7s-photo-gallery",
    },
    {
        path: "/users",
        title: "Usuarios Registrados",
        type: "link",
        icontype: "pe-7s-users",
    },
    {
        path: "/team",
        title: "Equipo",
        type: "link",
        icontype: "pe-7s-id",
    },
    {
        path: "/sponsors",
        title: "Sponsors",
        type: "link",
        icontype: "pe-7s-display1",
    },
    {
        path: "/conventions",
        title: "Conventions",
        type: "link",
        icontype: "pe-7s-note2",
    },
    {
        path: "/message",
        title: "Mensajes",
        type: "link",
        icontype: "pe-7s-mail",
    },
    {
        path: "/mision-vision",
        title: "Mision y Vision",
        type: "link",
        icontype: "pe-7s-pin",
    },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var $sidebar = $(".sidebar-wrapper");
        var $bgLogo = $(".bgLogo");
        $sidebar.css("background-color", "#000000");
        $bgLogo.css("background-color", "#000000");
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        var isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;
        isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;
        var $sidebar = $(".sidebar");
        $sidebar.css("background-color", "green");
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            $(".sidebar .sidebar-wrapper, .main-panel").perfectScrollbar();
            $("html").addClass("perfect-scrollbar-on");
        }
        else {
            $("html").addClass("perfect-scrollbar-off");
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var $sidebarParent = $(".sidebar .nav > li.active .collapse li.active > a")
            .parent()
            .parent()
            .parent();
        var collapseId = $sidebarParent.siblings("a").attr("href");
        $(collapseId).collapse("show");
    };
    SidebarComponent.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authSvc.logout()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SidebarComponent.prototype.redirect = function (route) {
        this.router.navigate(["/admin/" + route]);
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "sidebar-cmp",
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        }),
        __metadata("design:paramtypes", [app_services_auth_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/assets/js/function.js":
/*!***********************************!*\
  !*** ./src/assets/js/function.js ***!
  \***********************************/
/*! exports provided: InitPaymentWhitPayphone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitPaymentWhitPayphone", function() { return InitPaymentWhitPayphone; });
var firestore;
$(document).ready(function () {
  AOS.init({
    once: true
  });

  console.log('*** Cargando ***');
  var config = {
    apiKey: "AIzaSyBPqPck4HvVWkDcjn4aiPiEitqHVNUGNcA",
    authDomain: "paginaweb-5ab05.firebaseapp.com",
    projectId: "paginaweb-5ab05",
    storageBucket: "paginaweb-5ab05.appspot.com",
    messagingSenderId: "172608828499",
    appId: "1:172608828499:web:f179995a86cffa23df82a6"
  };

  firebase.initializeApp(config);
  firestore = firebase.firestore();
});

function InitPaymentWhitPayphone(total, id, order_transaccion_id, user) {
  console.log(id.toString());
  console.log(total);
  console.log(total.toFixed(0));
  var totalAmount = total.toFixed(0);
  console.log(parseInt(totalAmount));
  payphone.Button({
      token: 'A1aBrrNGc1THO366NBPHRbBe-EXUDun8yx10teEjue_0pXqtl_sC8IOvXTDDPAzff0zCm4is3vm3NS_ghim_unz8EOjDl87lWSBMEuj1M2HOnyZvqur7BXI-cOxDUAo_1iJhqkOtaPjVqBHevpf_64as-lkRjrEZLum3IQWf10X6fcawC4W3BMwseYooynSroCYpfWZhfi-P3gWF0a1XglTP-3vYPKqkFdfb6OTvrUBGbkT0C1lPBCBYWM-tncRZGGMKo-SIbkzQjtDAJYNulWgUMNzQO3qb04zYR7SGaoaz_lZfrlbXiGqGO4WBU9x6hJv6Yg',
      btnHorizontal: true,
      btnCard: true,
      createOrder: function (actions) {
          return actions.prepare({
              amount: parseInt(totalAmount),
              amountWithoutTax: parseInt(totalAmount),
              currency: "USD",
              clientTransactionId: id
          });
      },
      onComplete: function (model, actions) {
          //Se confirma el pago realizado
          actions.confirm({
              id: model.id,
              clientTxId: model.clientTxId
          }).then(function (value) {
              console.log('*** Respuesta de payphone despues de pagar ***');
              console.log(value);
              // ***AQUI***
              var ref = firestore.collection("usuarios").doc(user['user_id']);
              ref.update(
                {
                  data_payment: value,
                }
              ).then(function () {
                  if (value.transactionStatus == "Approved") {
                      alert('Su pago ha sido procesado correctamente!');
                      window.location.assign("http://localhost:4200/");
                      // localStorage.removeItem("order");
                  } else {
                      alert('Se ha presentado un error: ' + value.transactionStatus + ': ' + value.message);
                  }
              }).catch(function (e) {
                  console.log(e);
              });
              return value;

          }).catch(function (err) {
              console.log('*** Respuesta ERROR de payphone despues de pagar ***');
              console.log(err);
              return '*** Respuesta de payphoone ***' + err;

          });
      }
  }).render('#pp-button');
}

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    firebaseConfig: {
        // apiKey: "AIzaSyBf0omTQafoTEFF2sXb3L1OjTPXA7ooXnM",
        // authDomain: "aranedaweb-aa584.firebaseapp.com",
        // databaseURL: "https://aranedaweb-aa584.firebaseio.com",
        // projectId: "aranedaweb-aa584",
        // storageBucket: "aranedaweb-aa584.appspot.com",
        // messagingSenderId: "602629657686",
        // appId: "1:602629657686:web:0c6b1a2197a2af4bc7d7f7"
        apiKey: "AIzaSyBPqPck4HvVWkDcjn4aiPiEitqHVNUGNcA",
        authDomain: "paginaweb-5ab05.firebaseapp.com",
        projectId: "paginaweb-5ab05",
        storageBucket: "paginaweb-5ab05.appspot.com",
        messagingSenderId: "172608828499",
        appId: "1:172608828499:web:f179995a86cffa23df82a6"
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

=========================================================
* Light Bootstrap Dashboard Pro Angular - v1.4.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documentos\GitHub\ColegioDeOdontolgos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map