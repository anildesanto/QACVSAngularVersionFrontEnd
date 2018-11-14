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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/create-user/create-user.component.ts");
/* harmony import */ var _login_check_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-check.guard */ "./src/app/login-check.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_login_check_guard__WEBPACK_IMPORTED_MODULE_5__["LoginCheckGuard"]]
    },
    { path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_login_check_guard__WEBPACK_IMPORTED_MODULE_5__["LoginCheckGuard"]]
    },
    { path: "create",
        canActivate: [_login_check_guard__WEBPACK_IMPORTED_MODULE_5__["LoginCheckGuard"]],
        component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__["CreateUserComponent"] },
    //  {path : "update", component: DashboardComponent},
    //  {path : "create", component: DashboardComponent},
    { path: "", redirectTo: "login", canActivate: [_login_check_guard__WEBPACK_IMPORTED_MODULE_5__["LoginCheckGuard"]], pathMatch: "full" },
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <!-- <app-dashboard class = \"container-fluid col\"></app-dashboard> -->\n    <h1 style = \"text-align: center\">{{title}}</h1>\n    <div class = \"row\"> \n      <app-side-bar *ngIf = \"userService.loggedInUser\" id=\"sdivde-out\" class=\"side-nav fixed\" [profilePicUrl] = \"userService.generateImgUrl(userService.loggedInUser.userId)\"></app-side-bar>\n      <div class = \"col\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n"

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
/* harmony import */ var _shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/user-table/users.service */ "./src/app/shared/user-table/users.service.ts");
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
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'Qacvs Angular Version';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_cv_table_cv_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/cv-table/cv-table.component */ "./src/app/shared/cv-table/cv-table.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/user-table/user-table.component */ "./src/app/shared/user-table/user-table.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/side-bar/side-bar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/create-user/create-user.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_cv_table_cv_table_component__WEBPACK_IMPORTED_MODULE_5__["CvTableComponent"],
                _shared_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_7__["UserTableComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_9__["SideBarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__["CreateUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-user/create-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-user/create-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/create-user/create-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-user/create-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"card card-register mx-auto mt-5\">\n      <div class=\"card-header\">Create User</div>\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <div class=\"form-row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-label-group\">\n                  <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"First name\" required=\"required\" autofocus=\"autofocus\">\n                  <label for=\"firstName\">First name</label>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-label-group\">\n                  <input type=\"text\" id=\"lastName\" class=\"form-control\" placeholder=\"Last name\" required=\"required\">\n                  <label for=\"lastName\">Last name</label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-label-group\">\n              <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"required\">\n              <label for=\"inputEmail\">Email address</label>\n            </div>\n          </div>\n          <a class=\"btn btn-primary btn-block\" href=\"login.html\">Register</a>\n        </form>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/create-user/create-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-user/create-user.component.ts ***!
  \******************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
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

var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent() {
    }
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/create-user/create-user.component.html"),
            styles: [__webpack_require__(/*! ./create-user.component.css */ "./src/app/create-user/create-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"cards mx-auto mt-5\">\n    <div class=\"card-header\"> <h2>{{pageTitle}}</h2></div>\n    <div class=\"card-body\">\n      <h5>Logged in as {{loggedInUser.firstName}}</h5>\n        <app-user-table *ngIf = \"this.loggedInUser.department.departmentId !== 1 && this.loggedInUser.department.departmentId !== 1\" (load) = \"updateCvTable($event)\" [loggedInUserDepartment] = \"loggedInUser.department.departmentId\"></app-user-table>\n        <app-cv-table [userId] = \"userToSearch\" [userName] = \"userName\"></app-cv-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user-table/users.service */ "./src/app/shared/user-table/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
        this.pageTitle = "Dashboard";
    }
    // get userToSearch() : number
    // {
    //   return this.toSearch;
    // }
    // set userToSearch(value: number)
    // {
    //   this.toSearch = value;
    // }
    DashboardComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.userService.getLoggedInUser();
        console.log("loggedin user:" + this.loggedInUser);
        if (this.loggedInUser.department.departmentId !== 1 && this.loggedInUser.department.departmentId !== 1) {
            this.userName = "User";
        }
        else {
            this.userName = this.loggedInUser.firstName;
            this.userToSearch = this.loggedInUser.userId;
        }
    };
    DashboardComponent.prototype.ngOnChanges = function () {
        //this.userToSearch++;
        //this.userName = info[0];
    };
    DashboardComponent.prototype.updateCvTable = function (info) {
        console.log("received: " + info);
        var lol = info[0];
        this.userToSearch = Number(lol);
        this.userName = info[1];
        console.log("nr: " + this.userToSearch);
        //console.log("nr: "+this.toSearch);
        console.log("name: " + this.userName);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login-check.guard.ts":
/*!**************************************!*\
  !*** ./src/app/login-check.guard.ts ***!
  \**************************************/
/*! exports provided: LoginCheckGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCheckGuard", function() { return LoginCheckGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user-table/users.service */ "./src/app/shared/user-table/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginCheckGuard = /** @class */ (function () {
    function LoginCheckGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginCheckGuard.prototype.canActivate = function (next, state) {
        if (!this.userService.loggedInUser && state.url !== "/login") {
            this.router.navigate(["/login"]);
            return false;
        }
        else if (this.userService.loggedInUser && state.url === "/login") {
            this.router.navigate(["/dashboard"]);
            return false;
        }
        console.log("path: " + state.url);
        //this.router.navigate([state.url]);
        return true;
    };
    LoginCheckGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginCheckGuard);
    return LoginCheckGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card card-login mx-auto mt-5\">\n      <div class=\"card-header\">Login</div>\n      <div class=\"card-body\">\n        <form >\n          <div class=\"form-group\">\n            <div class=\"form-label-group\">\n              <input [(ngModel)] = \"email\" name = \"email\"  type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"required\" autofocus=\"autofocus\">\n              <label for=\"inputEmail\">Email address</label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-label-group\">\n              <input [(ngModel)] = \"password\" name = \"password\"  type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"required\">\n              <label for=\"inputPassword\">Password</label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\" value=\"remember-me\">\n                Remember Password\n              </label>\n            </div>\n          </div>\n          <a class=\"btn btn-primary btn-block\" (click) = \" tryLogIn()\">Login</a>\n        </form>\n        <div class=\"text-center\">\n          <a class=\"d-block small\" href=\"forgot-password.html\">Forgot Password?</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"container\">\n      <div class=\"card card-login mx-auto mt-5\">\n        <div class=\"card-header\">Reset Password</div>\n        <div class=\"card-body\">\n          <div class=\"text-center mb-4\">\n            <h4>Forgot your password?</h4>\n            <p>Enter your email address and we will send you instructions on how to reset your password.</p>\n          </div>\n          <form>\n            <div class=\"form-group\">\n              <div class=\"form-label-group\">\n                <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Enter email address\" required=\"required\" autofocus=\"autofocus\">\n                <label for=\"inputEmail\">Enter email address</label>\n              </div>\n            </div>\n            <a class=\"btn btn-primary btn-block\" href=\"login.html\">Reset Password</a>\n          </form>\n          <div class=\"text-center\">\n            <a class=\"d-block small mt-3\" href=\"register.html\">Register an Account</a>\n            <a class=\"d-block small\" href=\"login.html\">Login Page</a>\n          </div>\n        </div>\n      </div>\n    </div> -->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user-table/users.service */ "./src/app/shared/user-table/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.tryLogIn = function () {
        var hashedPass = Object(crypto_js__WEBPACK_IMPORTED_MODULE_1__["MD5"])(this.password);
        this.userService.tryLoggIn(this.email, hashedPass.toString());
        console.log("email: ", this.email);
        console.log("password: " + hashedPass);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/cv-table/cv-table.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/cv-table/cv-table.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jdi10YWJsZS9jdi10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/cv-table/cv-table.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/cv-table/cv-table.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"cards mx-auto mt-5\">\n    <div class=\"card-header\">{{tableTitle}}</div>\n    <div class=\"card-body\">\n    <!-- <input [(ngModel)] = \"status\" type = \"search\" /> -->\n    <select  [(ngModel)] = \"status\" class=\"form-control\">\n        <option value = \"\" selected>All</option>\n        <option value = \"Gray\">Gray</option>\n        <option value = \"Green\">Green</option>\n        <option value = \"Red\">Red</option>\n    </select>\n    <p>Filtering by color: {{status}}</p>\n    <table  class = \"table table-hover table-bordered \" cellspacing=\"0\" width=\"100%\">\n      <thead>\n        <tr>\n          <th>Cv Name</th>\n          <th>Status</th>\n          <th>Creation Date</th>\n          <th>User Name</th>\n          <th>Download</th>\n          <th>Delete</th>\n        </tr>\n      </thead>\n      <tbody *ngIf = \"cvsList && cvsList.length\">\n        <tr *ngFor = \"let cv of filteredCvsList\">\n          <td>{{cv.fileName}}</td>\n          <td>{{cv.status}}</td>\n          <td>{{cv.creationDate |date : \"medium\" }}</td>\n          <td>{{cv.user.firstName}} {{cv.user.lastName}}</td>\n          <td><a href = \"{{cvsService.cvsUrl}}/{{cv.cvId}}/download\" ><img src = \"https://image.flaticon.com/icons/svg/138/138601.svg\"  style = \"width : 25px\" /></a></td>\n          <td><a  (click) = \"cvsService.deleteCv(cv.cvId)\" ><img src = \"https://image.flaticon.com/icons/png/128/138/138767.png\"  style = \"width : 25px\" /></a></td>\n        </tr >\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/cv-table/cv-table.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/cv-table/cv-table.component.ts ***!
  \*******************************************************/
/*! exports provided: CvTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvTableComponent", function() { return CvTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cvs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cvs.service */ "./src/app/shared/cv-table/cvs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


"";
var CvTableComponent = /** @class */ (function () {
    function CvTableComponent(cvsService) {
        this.cvsService = cvsService;
    }
    CvTableComponent.prototype.ngOnChanges = function () {
        this.load();
    };
    CvTableComponent.prototype.ngOnInit = function () {
        this.load();
    };
    CvTableComponent.prototype.load = function () {
        var _this = this;
        this.tableTitle = this.userName + "'s Cvs Table";
        this.currentStatus = "All";
        this.cvsService.getAllCvs().subscribe(function (list) {
            _this.cvsList = list.filter(function (cv) {
                return cv.user.userId === _this.userId;
            }); //show particular user cv
            _this.filteredCvsList = _this.cvsList;
        });
    };
    Object.defineProperty(CvTableComponent.prototype, "userID", {
        get: function () {
            return this.userId;
        },
        set: function (value) {
            this.userId = value;
            console.log("userId: " + this.userId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CvTableComponent.prototype, "status", {
        get: function () {
            return this.currentStatus;
        },
        set: function (value) {
            this.currentStatus = value;
            this.filteredCvsList = this.filterByStatus(value);
        },
        enumerable: true,
        configurable: true
    });
    CvTableComponent.prototype.filterByStatus = function (status) {
        console.log(status);
        return this.cvsList.filter(function (cv) { return cv.status.toLowerCase().startsWith(status.toLowerCase()); });
    };
    CvTableComponent.prototype.ngDoCheck = function () {
        if (this.cvsService.reload === true) {
            this.load();
            //this.changeDetector.detectChanges();
            console.log("Reloaded: " + this.cvsService.reload);
            this.cvsService.reload = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CvTableComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CvTableComponent.prototype, "toLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CvTableComponent.prototype, "userName", void 0);
    CvTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cv-table',
            template: __webpack_require__(/*! ./cv-table.component.html */ "./src/app/shared/cv-table/cv-table.component.html"),
            styles: [__webpack_require__(/*! ./cv-table.component.css */ "./src/app/shared/cv-table/cv-table.component.css")]
        }),
        __metadata("design:paramtypes", [_cvs_service__WEBPACK_IMPORTED_MODULE_1__["CvsService"]])
    ], CvTableComponent);
    return CvTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/cv-table/cvs.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/cv-table/cvs.service.ts ***!
  \************************************************/
/*! exports provided: CvsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvsService", function() { return CvsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CvsService = /** @class */ (function () {
    function CvsService(httpClient) {
        this.httpClient = httpClient;
        this.cvsUrl = "https://qacvmanager.azurewebsites.net/api/cv";
        this.reload = false;
    }
    CvsService.prototype.getAllCvs = function () {
        return this.httpClient.get(this.cvsUrl);
    };
    CvsService.prototype.deleteCv = function (cvId) {
        var _this = this;
        console.log("deleting");
        this.httpClient.get(this.cvsUrl + "/" + cvId + "/delete").toPromise()
            .then(function () { console.log("deleted!"); _this.reload = true; });
    };
    CvsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CvsService);
    return CvsService;
}());



/***/ }),

/***/ "./src/app/shared/user-table/user-table.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/user-table/user-table.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91c2VyLXRhYmxlL3VzZXItdGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/user-table/user-table.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/user-table/user-table.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- *ngIf = \"userList && filteredList.length\" -->\n    <div class=\"card mx-auto mt-5\">\n      <div class=\"card-header\">{{tableTitle}}</div>\n      <div class=\"card-body\">\n    <input [(ngModel)] = \"filterString\" type = \"search\" placeholder=\"Search by name, email or role\" class=\"form-control\"/>\n    <p>Filtering by: {{filterString}}</p>\n      <table  class = \"table table-hover table-bordered \"cellspacing=\"0\" width=\"100%\">\n        <thead>\n          <tr>\n            <th class=\"th-sm\">Picture\n                <i class=\"fa fa-sort float-right\" ></i>\n            </th>\n            <th class=\"th-sm\">Name\n                <i class=\"fa fa-sort float-right\" ></i>\n            </th>\n            <th class=\"th-sm\">Email\n                <i class=\"fa fa-sort float-right\" ></i>\n            </th>\n            <th class=\"th-sm\">Role\n                <i class=\"fa fa-sort float-right\" ></i>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor = \"let user of filteredList\" (click) = \"loadCvs(user.userId, user.firstName)\">\n            <td><img [id] = \"user.userId\" [src] = \"userService.generateImgUrl(user.userId)\" style = \"width : 60px\" (error) = userService.defaultImage(user.userId)/></td>\n            <td>{{user.firstName}} {{user.lastName}}</td>\n            <td>{{user.email}}</td>\n            <td>{{user.department.role}}</td>\n          </tr >\n        </tbody>\n      </table>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/shared/user-table/user-table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/user-table/user-table.component.ts ***!
  \***********************************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ "./src/app/shared/user-table/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserTableComponent = /** @class */ (function () {
    function UserTableComponent(userService) {
        this.userService = userService;
        this.tableTitle = "User's Table";
        this.info = [];
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(UserTableComponent.prototype, "filterString", {
        get: function () {
            return this.filter;
        },
        set: function (value) {
            var _this = this;
            var newValue = value.trim().split(" ");
            var first = newValue.shift();
            var second = newValue.join("");
            this.filter = value.trim();
            if (value.trim() === "")
                this.filteredList = this.userList;
            else
                this.userService.findUsers(first, second).subscribe(function (list) { return _this.filteredList = list; });
        },
        enumerable: true,
        configurable: true
    });
    UserTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        //if(this.loggedInUserDepartment !== 1 && this.loggedInUserDepartment !== 6)
        this.userService.findUsers("", "").subscribe(function (list) {
            _this.userList = list;
            _this.filteredList = _this.userList;
        });
    };
    UserTableComponent.prototype.loadCvs = function (userId, userName) {
        this.info.push(userId, userName);
        console.log("emmiting..." + this.info);
        this.load.emit(this.info);
        this.info.length = 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UserTableComponent.prototype, "loggedInUserDepartment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UserTableComponent.prototype, "load", void 0);
    UserTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-table',
            template: __webpack_require__(/*! ./user-table.component.html */ "./src/app/shared/user-table/user-table.component.html"),
            styles: [__webpack_require__(/*! ./user-table.component.css */ "./src/app/shared/user-table/user-table.component.css")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserTableComponent);
    return UserTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/user-table/users.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/user-table/users.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(userRequest, router) {
        this.userRequest = userRequest;
        this.router = router;
        this.baseUrl = "https://qacvmanager.azurewebsites.net/api/";
    }
    UserService.prototype.getLoggedInUser = function () {
        return this.loggedInUser;
    };
    UserService.prototype.generateImgUrl = function (userId) {
        return (this.baseUrl + "user/" + userId + "/picture/download");
    };
    UserService.prototype.findUsers = function (value, lastName) {
        return this.userRequest.get(this.baseUrl + "findbyname/" + value + "&" + lastName);
    };
    UserService.prototype.defaultImage = function (imgId) {
        document.getElementById(imgId).setAttribute("src", "https://image.flaticon.com/icons/svg/149/149071.svg");
    };
    UserService.prototype.tryLoggIn = function (email, password) {
        var _this = this;
        this.userRequest.get(this.baseUrl + "login/" + email + "&" + password)
            .subscribe(function (user) {
            if (user) {
                _this.loggedInUser = user[0];
                console.log("user loggedin: " + user[0].firstName);
                console.log("try: " + _this.loggedInUser.firstName);
                _this.router.navigate(["/dashboard"]);
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/side-bar/side-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n     <!-- Sidebar -->\n     <ul class=\"sidebar navbar-nav fixed \">\n        <li class=\"logo-wrapper waves-divght\">\n            <a  class = \"navbar-brand\" [routerLink] = \"['/dashboard']\"><img [src] =\"userService.generateImgUrl(userService.loggedInUser.userId)\" (error) = userService.defaultImage(userService.loggedInUser.userId) class=\"img-fluid flex-center\" style = \"width: 100px\"></a>\n          </li>\n        <li class=\"nav-item active\">\n          <a class = \"btn btn-block\" [routerLink] = \"['/dashboard']\">\n            <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n            <span>Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"btn btn-block\" [routerLink] = \"['/update']\">\n            <i class=\"fas fa-fw fa-chart-area\"></i>\n            <span>Update Profile</span></a>\n        </li>\n        <li class=\"nav-item\" *ngIf = \"this.userService.loggedInUser.department.departmentId !== 1 && this.userService.loggedInUser.department.departmentId !== 1\">\n          <a class=\"btn btn-block\" [routerLink] = \"['/create']\">\n            <i class=\"fas fa-fw fa-table\"></i>\n            <span>Create User</span></a>\n        </li>\n        <li class=\"nav-item\" >\n            <a class=\"btn btn-block\" href = \"/\">\n              <i class=\"fas fa-fw fa-table\"></i>\n              <span>Log Out</span></a>\n          </li>\n      </ul>"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user-table/users.service */ "./src/app/shared/user-table/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(userService) {
        this.userService = userService;
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SideBarComponent.prototype, "profilePicUrl", void 0);
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SideBarComponent);
    return SideBarComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\anild\Desktop\Angular\QacvsAngularVersion\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map