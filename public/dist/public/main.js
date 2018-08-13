(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p, h1, h3, a, li{\n    color: rgba(37, 83, 122);\n}\n.body{\n    height: 67vh;\n}\np{\n    font-size: 18px;\n}\nli{\n    list-style-type: none;\n    text-align: left;\n    font-size: 18px;\n}\n.goals{\n    padding-left: 25%;\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='body'>\n  <h3>About Noah McDonough</h3>\n  <p>\n    I'm a full stack web developer. I recently graduated from Coding Dojo Academy with triple MVC certifications, otherwise known as \"Black Belts\". In a nutshell, it means I graduated at the highest level of my cohort. Each of the projects I submitted for these certifications can be seen under the \"projects\" tab in their original form.\n  </p><br>\n  <p>\n    My coding first began in High School with my first Computer Science course where we explored everything from number systems to a basic AI that had to find its way out of any maze. Then I took two years of university courses which included Data Structures, Software Engineering and of course the basics of Java programming. the skills I learned there paved the way for my current career pursuits, and the experience of working in a group to design software has been invaluable for the coordinated projects I worked on while at the Dojo.\n  </p><br>\n  <p>\n    My goals for the next 5 years, in order of importance:\n  </p>\n  <div class=\"goals\">\n    <ul>\n        <li>Get married and start a family</li>\n        <li>Square away my finances for myself and my future children</li>\n        <li>Cultivate an expert level knowledge of, and capability in, web development</li>\n        <li>Write awesome code for awesome projects</li>\n      </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _funstuff_funstuff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funstuff/funstuff.component */ "./src/app/funstuff/funstuff.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _other_other_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./other/other.component */ "./src/app/other/other.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'funstuff', component: _funstuff_funstuff_component__WEBPACK_IMPORTED_MODULE_4__["FunstuffComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
    { path: 'other', component: _other_other_component__WEBPACK_IMPORTED_MODULE_7__["OtherComponent"] },
    { path: "**", component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    padding: 25px 100px;\n}\n.wrapper{\n    display: flex;\n    flex-direction: column;\n}\nsvg{\n    height: 25px;\n    width: 25px;\n    padding: 0;\n    margin: 0;\n    margin-right: 10px;\n    margin-top: -5px;\n    display: flex;\n    float: left;\n}\n.navbar-brand{\n    margin: 0px;\n    text-align: center;\n    margin-top: 5px;\n}\n.footer, .container{\n    text-align: center;\n    margin-top: 50px;\n}\n.wrapper, .container, .footer{\n    background-color: #90D7FF;\n}\np, h1, h3, a{\n    color: rgba(37, 83, 122);\n}\n.project{\n    border: 2px solid black;\n}\n.wrapper{\n    /* height: 100vh; */\n}\n.navbar-default{\n    height: 60px;\n    width: 550px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-self: center;\n}\n.navbar-default{\n    color: rgba(37, 83, 122);\n}\nul{\n    margin-top: 4px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"Https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<script src=\"Https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"Https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div class='wrapper' >\n    <nav class=\"navbar navbar-right\" *ngIf=\"!pageFound\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"https://www.linkedin.com/in/nmcdonough1\"><svg aria-hidden=\"true\" data-prefix=\"fab\" data-icon=\"linkedin\" class=\"svg-inline--fa fa-linkedin fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z\"></path></svg>\n          Noah McDonough</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a [routerLink]=\"['/home']\">Home</a></li>\n        <li><a [routerLink]=\"['/projects']\">Projects</a></li>\n        <li><a [routerLink]=\"['/other']\">Other</a></li>\n        <li><a [routerLink]=\"['/about']\">About</a></li>\n        <li><a [routerLink]=\"['/funstuff']\">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n  <div class='container'>\n    <router-outlet></router-outlet>\n    <div class='footer'>\n        <p>Icons graciously provided by <a href=\"https://www.glyphicons.com\">Glyphicons.com</a></p>\n      </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.pageFound = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.pageFound = false;
            this.redirect();
        }
        else
            this.pageFound = true;
    };
    AppComponent.prototype.redirect = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['home']);
        }, 5000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _funstuff_funstuff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./funstuff/funstuff.component */ "./src/app/funstuff/funstuff.component.ts");
/* harmony import */ var _other_other_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./other/other.component */ "./src/app/other/other.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_6__["NotfoundComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                _funstuff_funstuff_component__WEBPACK_IMPORTED_MODULE_8__["FunstuffComponent"],
                _other_other_component__WEBPACK_IMPORTED_MODULE_9__["OtherComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/funstuff/funstuff.component.css":
/*!*************************************************!*\
  !*** ./src/app/funstuff/funstuff.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact{\n    display: flex;\n    float: left;\n}\nimg{\n    margin-right: 15px;\n    margin-top: 20px;\n    float: left;\n}\n#phone{\n    width: 25px;\n    height: 35px;\n}\n#email{\n    height: 25px;\n}\n#linkedin{\n    height: 30px;\n    width: 30px;\n}\n.body{\n    display: flex;\n    flex-direction: column;\n    width: 30vw;\n    margin-left: 20vw;\n}\np{\n    margin-top: 25px;\n    margin-left: 5px;\n}\na, h3, h1, p, img{\n    color: rgba(37, 83, 122);\n}\n.body{\n    height: 70vh;\n}"

/***/ }),

/***/ "./src/app/funstuff/funstuff.component.html":
/*!**************************************************!*\
  !*** ./src/app/funstuff/funstuff.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='body'>\n  <h1>Contact information</h1>\n  <div class='contact'>\n    <img id=\"phone\" src=\"../../assets/glyphs/glyphicons_free/glyphicons/png/glyphicons-164-iphone.png\">\n    <h3>571-356-6631</h3>\n  </div>\n  <div class=\"contact\">\n    <img id=\"email\" src=\"../../assets/glyphs/glyphicons_free/glyphicons/png/glyphicons-11-envelope.png\" alt=\"\">\n    <h3><a href=\"mailto:noah@nmcdonough.com\">noah@nmcdonough.com</a></h3>\n    <p>(preferred)</p>\n  </div>\n  <div class='contact'>\n      <img id=\"linkedin\" src=\"../../assets/glyphs/glyphicons_free/glyphicons-social/png/glyphicons-social-18-linked-in.png\" alt=\"\">\n      <a href=\"http://www.linkedin.com/in/nmcdonough1\"><h3>LinkedIn</h3></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/funstuff/funstuff.component.ts":
/*!************************************************!*\
  !*** ./src/app/funstuff/funstuff.component.ts ***!
  \************************************************/
/*! exports provided: FunstuffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunstuffComponent", function() { return FunstuffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FunstuffComponent = /** @class */ (function () {
    function FunstuffComponent() {
    }
    FunstuffComponent.prototype.ngOnInit = function () {
    };
    FunstuffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-funstuff',
            template: __webpack_require__(/*! ./funstuff.component.html */ "./src/app/funstuff/funstuff.component.html"),
            styles: [__webpack_require__(/*! ./funstuff.component.css */ "./src/app/funstuff/funstuff.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FunstuffComponent);
    return FunstuffComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#noah{\n    width: 300px;\n    height: 250px;\n    /* transform: rotate(90deg); */\n    border-radius: 350px;\n}\n\n.jumbotron{\n    /* padding: 15px; */\n    background-color: #2E5EAA;\n    /* display: flex; */\n    flex-direction: column;\n    align-items: center;\n}\n\n.jumbotron p, h3{\n    color: #5DFDCB;\n}\n\n.icons{\n    background-color: #90D7FF;\n    padding: 10px;\n    width: 115%;\n    margin-left: -60px;\n}\n\n.sicon{\n    height: 150px;\n    width: 150px;\n}\n\n#express{\n    width: 160px;\n    height: 40px;\n    margin-top: 30px;\n}\n\n#webfun{\n    width: 350px;\n    height: 200px;\n}\n\n.tech{\n    /* border: 1px solid black; */\n    border-radius: 20px;\n    background-color: #2E5EAA;\n    padding: 25px;\n    margin: 15px;\n}\n\nh2{\n    color: #5DFDCB;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"media jumbotron\">\n    <img id=noah src=\"../../assets/Noah.jpeg\" alt=\"Noah\">\n    <div class=\"media-body\">\n      <h2 class=\"mt-0\">Noah Scott McDonough</h2>\n        <div>\n            <p>Coding Resident at the Coding Dojo in McLean, Virginia. Triple-MVC certified full-stack developer. Team player with an eye for business.</p>\n        </div>  \n    </div>\n</div>\n<div class=\"tech jumbotron\">\n    <h2>I build and have built applications using:</h2><br>\n    <div class='icons'>\n        <a data-toggle=\"tooltip\" title=\"Python\"><img src=\"../../assets/icons/opengraph-icon-200x200.png\" alt=\"Python logo\" class='sicon'></a>\n      <a data-toggle=\"tooltip\" title=\"MySQL\"><img src=\"../../assets/icons/MySQL.png\" alt=\"mysql logo\" class='sicon'></a>\n      <a data-toggle=\"tooltip\" title=\"Django\"><img src=\"../../assets/icons/django.svg\" alt=\"django\" class='sicon'></a>\n      <a data-toggle=\"tooltip\" title=\"NGINX\"><img src=\"../../assets/icons/nginx.png\" alt=\"nginx\" class='sicon'></a>\n      <a data-toggle=\"tooltip\" title=\"SQLite\"><img src=\"../../assets/icons/sqlitelogo-200x200sm.png\" alt=\"sqlite\" class='sicon'></a>\n        <a data-toggle=\"tooltip\" title=\"MongoDB\"><img src=\"../../assets/icons/mongodb.png\" alt=\"mongoDB\" class='sicon'></a>\n        <a data-toggle=\"tooltip\" title=\"Express\"><img src=\"../../assets/icons/express_js.png\" alt=\"express\" class='sicon' id=\"express\"></a>\n        <a data-toggle=\"tooltip\" title=\"Angular 6\"><img src=\"../../assets/icons/tsconfig.png\" alt=\"Angular\" class='sicon'></a>\n        <a data-toggle=\"tooltip\" title=\"Nodejs\"><img src=\"../../assets/icons/nodejs-601628d09d.png\" alt=\"node\" class='sicon'></a>\n        <a data-toggle=\"tooltip\" title=\"Java 8\"><img src=\"../../assets/icons/java.png\" alt=\"java\" class='sicon'></a>\n        <a data-toggle=\"tooltip\" title=\"Springboot\"><img src=\"../../assets/icons/spring-boot-logo.png\" alt=\"Springboot\" class='sicon'></a>\n        <a data-toggle=\"tooltip\" title=\"Hibernate\"><img src=\"../../assets/icons/Hibernate.png\" alt=\"hibernate\" class='sicon'></a>\n        <a data-toggle=\"tooltip\" title=\"Web Fundamentals\"><img id=\"webfun\" src=\"../../assets/icons/1_l4xICbIIYlz1OTymWCoUTw.png\" alt=\"web fundamentals\" class='sicon'></a>\n    </div><br>\n    <h2>...and many more.</h2>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Page not found! Redirecting in 5 seconds...</h1>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/other/other.component.css":
/*!*******************************************!*\
  !*** ./src/app/other/other.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea{\n    margin-bottom: -20px;\n}\n.container{\n    margin-left: -5vw;\n    height: 66vh;\n}\ninput{\n    width: 205px;\n    display: inline-block;\n}\ntextarea{\n    width: 300px;\n    display: inline-block;\n}\n.btn{\n    margin: 0 0 3px 20px;\n}"

/***/ }),

/***/ "./src/app/other/other.component.html":
/*!********************************************!*\
  !*** ./src/app/other/other.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>This section will contain small algorithms, methods and cool stuff I thought would be fun to do. It's always a work in progress :)</h2><br>\n  <div class=\"noteName jumbotron\">\n    <p>This little method turns a regular String input into musical notes. If you're musically inclined, it might make a neat romantic surprise if you used his/her name or a special message as a melody for a song!</p>\n    <input pattern=\"A-Za-z\" type=\"text\" [(ngModel)]=\"name\" class=\"form-control\">\n    <button (click)=\"toNotes(name)\" class=\"btn\">Convert</button><br>\n    <textarea [(ngModel)]=\"melody\" readonly rows=2 class=\"form-control\"></textarea>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/other/other.component.ts":
/*!******************************************!*\
  !*** ./src/app/other/other.component.ts ***!
  \******************************************/
/*! exports provided: OtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherComponent", function() { return OtherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtherComponent = /** @class */ (function () {
    function OtherComponent() {
    }
    OtherComponent.prototype.ngOnInit = function () {
        this.letters = "abcdefghijklmnopqrstuvwxyz";
        this.notes = "ABCDEFG";
        this.melody = "Output";
        this.name = "Input";
        this.regex = "/^[^a-zA-Z]*$/";
    };
    OtherComponent.prototype.toNotes = function (str) {
        var newStr = '';
        if (!/^[a-zA-Z\s]*$/.test(str)) {
            this.melody = "Invalid characters. Letters and spaces only. Thank you.";
        }
        else {
            for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                var x = str_1[_i];
                if (x != ' ')
                    newStr += this.notes[this.letters.indexOf(x.toLowerCase()) % this.notes.length] + " ";
            }
            this.melody = newStr;
        }
    };
    OtherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-other',
            template: __webpack_require__(/*! ./other.component.html */ "./src/app/other/other.component.html"),
            styles: [__webpack_require__(/*! ./other.component.css */ "./src/app/other/other.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherComponent);
    return OtherComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sicon{\n    height: 150px;\n    width: 150px;\n}\n.bigLink{\n    font-size: 40px;\n    color: #5DFDCB;\n}\n.body{\n    background-color: #90D7FF;\n}\np, h1, h3, a{\n    color: rgba(37, 83, 122);\n}\n#express{\n    width: 160px;\n    height: 40px;\n    margin-top: 30px;\n}\n.project{\n    /* border: 1px solid black; */\n    border-radius: 20px;\n    background-color: #2E5EAA;\n    padding: 25px;\n    margin: 15px;\n}\n.project p, h3, a{\n    color: #5DFDCB;\n}\nimg{\n    margin-right: 10px;\n}\n.icons{\n    background-color: #90D7FF;\n    padding: 10px;\n    width: 115%;\n    margin-left: -60px;\n}\np:first-of-type{\n    font-size: 18px;\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='body'>\n  <h1>Projects</h1>\n\n  <p>To preserve integrity, these projects have not been edited from their original submission. These projects were built from scratch, or from custom made templates of my own design. They can perform validations, some have login-registration functionality, can perform CRUD operations to a database, and render relevant information according to a wireframe. All in 5 hours or less. Each of these projects was earned a Black Belt MVC certification in their respective stacks.</p><br><br>\n\n  <div class=\"jumbotron project\">\n      <h3>This site</h3>\n      <p>This site was created to be my landing page. I created it from scratch and designed it myself. I could've used a template that would look 10x more beautiful using tech that I have never used before, using code that I didn't write (like other graduates do to impress hiring managers), but that's not me. This is me.</p>\n      <h4>Featured tech:</h4>\n      <div class=\"icons\">\n          <a data-toggle=\"tooltip\" title=\"Angular 6\"><img src=\"../../assets/icons/tsconfig.png\" alt=\"Angular\" class='sicon'></a>\n          <a data-toggle=\"tooltip\" title=\"NGINX\"><img src=\"../../assets/icons/nginx.png\" alt=\"nginx\" class='sicon'></a>\n      </div><br>\n      <a href=\"https://github.com/nmcdonough/noah\"><img id=\"github\" src=\"../assets/glyphs/glyphicons_free/glyphicons-social/png/glyphicons-social-22-github.png\" alt=\"\">See this project on Github</a>\n  </div>\n\n  <div class=\"jumbotron project\">\n    <h3>Python</h3>\n    <p>My first black belt project. This is a Quotes application, where anyone can create an account, upload quotes and add uploaded quotes to a favorites list.</p><br>\n    <h4>Featured tech:</h4>\n    <div class='icons'>\n      <a data-toggle=\"tooltip\" title=\"Python\"><img src=\"../../assets/icons/opengraph-icon-200x200.png\" alt=\"Python logo\" class='sicon'></a>\n      <a data-toggle=\"tooltip\" title=\"SQLite\"><img src=\"../../assets/icons/sqlitelogo-200x200sm.png\" alt=\"sqlite logo\" class='sicon'></a>\n      <a data-toggle=\"tooltip\" title=\"Django\"><img src=\"../../assets/icons/django.svg\" alt=\"django\" class='sicon'></a>\n    </div><br>\n    <a href=\"http://13.59.169.49\" class='bigLink'>Take me to the project</a><br><br>\n    <a href=\"https://github.com/NMcDonough/Django\"><img id=\"github\" src=\"../assets/glyphs/glyphicons_free/glyphicons-social/png/glyphicons-social-22-github.png\" alt=\"\">See this project on Github</a>\n  </div>\n\n  <div class=\"project jumbotron\">\n    <h3>MEAN</h3>\n    <p>This stack was by far the hardest, and by far my favorite. To this day, if I have a say in it, the project will be a singe-page application. This application is a product manager. You can add, edit and remove items and prices. The ID's generated for the products are random and you can only remove an item from the online store if there are no more of that item in the 'warehouse'.</p><br>\n    <h4>Featured tech:</h4>\n    <div class='icons'>\n      <a data-toggle=\"tooltip\" title=\"MongoDB\"><img src=\"../../assets/icons/mongodb.png\" alt=\"mongoDB\" class='sicon'></a>\n      <a data-toggle=\"tooltip\" title=\"Express\"><img src=\"../../assets/icons/express_js.png\" alt=\"express\" class='sicon' id=\"express\"></a>\n      <a data-toggle=\"tooltip\" title=\"Angular 6\"><img src=\"../../assets/icons/tsconfig.png\" alt=\"Angular\" class='sicon'></a>\n      <a data-toggle=\"tooltip\" title=\"Nodejs\"><img src=\"../../assets/icons/nodejs-601628d09d.png\" alt=\"node\" class='sicon'></a>\n    </div><br>\n    <a href=\"http://13.59.22.232\" class='bigLink'>Take me to the project</a><br><br>\n    <a href=\"https://github.com/NMcDonough/mean\"><img id=\"github\" src=\"../assets/glyphs/glyphicons_free/glyphicons-social/png/glyphicons-social-22-github.png\" alt=\"\">See this project on Github</a>\n  </div>\n\n  <div class=\"project jumbotron\">\n    <h3>Java</h3>\n    <p>Java and I go back. Way back. This program is a task manager. Register and log in, then you can create a task. You can assign a person to complete the task, and the tasks priority. If the assignee views the tasks page, they alone have the option to complete the task, at which point it disappears from the board, but not the database. Full CRUD.</p><br>\n    <h4>Featured tech:</h4>\n    <div class='icons'>\n        <a data-toggle=\"tooltip\" title=\"Java 8\"><img src=\"../../assets/icons/java.png\" alt=\"java\" class='sicon'></a>\n        <a data-toggle=\"tooltip\" title=\"Springboot\"><img src=\"../../assets/icons/spring-boot-logo.png\" alt=\"Springboot\" class='sicon'></a>\n        <a data-toggle=\"tooltip\" title=\"Hibernate\"><img src=\"../../assets/icons/Hibernate.png\" alt=\"hibernate\" class='sicon'></a>\n    </div><br>\n    <a href=\"http://18.188.198.130\" class='bigLink'>Take me to the project</a><br><br>\n    <a href=\"https://github.com/NMcDonough/Spring/tree/master/Tasks\"><img id=\"github\" src=\"../assets/glyphs/glyphicons_free/glyphicons-social/png/glyphicons-social-22-github.png\" alt=\"\">See this project on Github</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/noah/Documents/Other Projects/Noah/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map