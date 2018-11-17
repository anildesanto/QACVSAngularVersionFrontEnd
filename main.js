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
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
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
    { path: "reset",
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"],
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

module.exports = "\n    <!-- <app-dashboard class = \"container-fluid col\"></app-dashboard> -->\n     <!-- The Modal -->\n    <div><h1 style = \"text-align: center; background-color : #9fa0a1\">{{title}}</h1></div>\n    <div class = \"row\"> \n      <app-side-bar  style = \"background-color : #9fa0a1\" *ngIf = \"userService.loggedInUser\" id=\"sdivde-out\" class=\"sidebar fixed\" [profilePicUrl] = \"userService.generateImgUrl(userService.loggedInUser.userId)\"></app-side-bar>\n      <div class = \"col\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n"

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
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _shared_upload_upload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/upload/upload.component */ "./src/app/shared/upload/upload.component.ts");
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
                _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__["CreateUserComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordComponent"],
                _shared_upload_upload_component__WEBPACK_IMPORTED_MODULE_13__["UploadComponent"]
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

/***/ "./src/app/color.enum.ts":
/*!*******************************!*\
  !*** ./src/app/color.enum.ts ***!
  \*******************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
var Color;
(function (Color) {
    Color["White"] = "white";
    Color["LightPink"] = "lightpink";
    Color["LimeGreen"] = "limegreen";
    Color["Red"] = "red";
})(Color || (Color = {}));


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

module.exports = "<div>\n    <div class=\"cards mx-auto mt-5\">\n        <div class=\"card-header\"> <h2>{{pageTitle}}</h2></div>\n        <div class=\"card-body\">\n    <div class=\"card card-register mx-auto mt-5\">\n      <!-- <div class=\"card-header\">Create User</div> -->\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <div class=\"form-row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-label-group\">\n                  <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"First name\" required=\"required\" autofocus=\"autofocus\">\n                  <label for=\"firstName\">First name</label>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-label-group\">\n                  <input type=\"text\" id=\"lastName\" class=\"form-control\" placeholder=\"Last name\" required=\"required\">\n                  <label for=\"lastName\">Last name</label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-label-group\">\n              <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"required\">\n              <label for=\"inputEmail\">Email address</label>\n            </div>\n          </div>\n          <a class=\"btn btn-primary btn-block\" >Create</a>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

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
        this.pageTitle = "Create User";
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

module.exports = "<div>\n  <div class=\"cards mx-auto mt-5\">\n    <div class=\"card-header\"> <h2>{{pageTitle}}</h2>\n      <h5>Logged in as {{loggedInUser.department.role}} {{loggedInUser.firstName}}</h5>\n    </div>\n    <div class=\"card-body\">\n      <div *ngIf = \"this.loggedInUser.department.departmentId !== 1 && this.loggedInUser.department.departmentId !== 6\" > \n          <app-user-table (load) = \"updateCvTable($event)\" [loggedInUserDepartment] = \"loggedInUser.department.departmentId\"></app-user-table>\n      </div>\n      <div *ngIf = \"this.loggedInUser.department.departmentId === 1 || this.loggedInUser.department.departmentId === 6\">\n        <app-upload></app-upload>\n      </div>\n        <app-cv-table [userId] = \"userToSearch\" [userName] = \"userName\"></app-cv-table>\n    </div>\n  </div>\n</div>"

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
        if (this.loggedInUser.department.departmentId !== 1 && this.loggedInUser.department.departmentId !== 6) {
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

/***/ "./src/app/global-variables.enum.ts":
/*!******************************************!*\
  !*** ./src/app/global-variables.enum.ts ***!
  \******************************************/
/*! exports provided: GlobalVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariables", function() { return GlobalVariables; });
var GlobalVariables;
(function (GlobalVariables) {
    GlobalVariables["Api"] = "https://qacvmanager.azurewebsites.net/api";
    GlobalVariables["Confirm"] = "confirm";
    GlobalVariables["Checking"] = "checking";
    GlobalVariables["Email"] = "inputEmail";
    GlobalVariables["Password"] = "inputPassword";
    GlobalVariables["LoadingGif"] = "assets/Images/loading.gif";
})(GlobalVariables || (GlobalVariables = {}));


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
        if (!this.userService.loggedInUser && state.url !== "/login" && state.url !== "/reset") {
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

module.exports = "\n<div class=\"container\">\n    <div class=\"card card-login mx-auto mt-5\">\n      <div class=\"card-header\">Login</div>\n      <div class=\"card-body\">\n        <form >\n          <div class=\"form-group\">\n            <div class=\"form-label-group\">\n              <input [(ngModel)] = \"email\" name = \"email\"  type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Enter Email address\" required=\"required\" autofocus=\"autofocus\">\n              <label for=\"inputEmail\">Email address</label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-label-group\">\n              <input [(ngModel)] = \"password\" name = \"password\"  type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Enter Password\" required=\"required\">\n              <label for=\"inputPassword\">Password</label>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"checkbox col\">\n              <label>\n                <input type=\"checkbox\" value=\"remember-me\">\n                Remember Password\n              </label>\n            </div>\n              <img *ngIf = \"userService.checking === true\" id = \"checking\" style = \"height: 50px; width : 50px\" class=\"img-responsive\" src = \"assets/Images/loading.gif\"/>\n          </div>\n          <a class=\"btn btn-primary btn-block\" (click) = \" tryLogIn()\">Login</a>\n        </form>\n        <div class=\"text-center\">\n          <a class=\"d-block small\" [routerLink]= \"['/reset']\">Forgot Password?</a>\n        </div>\n      </div>\n    </div>\n    <!-- <button id=\"myBtn\">Open Modal</button> -->\n    <div id=\"myModal\" class=\"modal\">\n    \n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <span class=\"close\">&times;</span>\n              <h2>Unrecognised Details</h2>\n            </div>\n            <div class=\"modal-body\">\n              <p>Invalid email or password.</p>\n              <p>Please try again.</p>\n            </div>\n            <!-- <div class=\"modal-footer\">\n              <h3>Modal Footer</h3>\n            </div> -->\n          </div>\n    \n    </div>\n  </div>\n"

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
/* harmony import */ var _color_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color.enum */ "./src/app/color.enum.ts");
/* harmony import */ var _global_variables_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global-variables.enum */ "./src/app/global-variables.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {logo} from 'src/assets/Images/loading.gif';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
    }
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this.userService.updateElement(_global_variables_enum__WEBPACK_IMPORTED_MODULE_4__["GlobalVariables"].Email, _color_enum__WEBPACK_IMPORTED_MODULE_3__["Color"].White);
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this.userService.updateElement(_global_variables_enum__WEBPACK_IMPORTED_MODULE_4__["GlobalVariables"].Password, _color_enum__WEBPACK_IMPORTED_MODULE_3__["Color"].White);
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.tryLogIn = function () {
        if (!this.email) {
            this.userService.updateElement(_global_variables_enum__WEBPACK_IMPORTED_MODULE_4__["GlobalVariables"].Email, _color_enum__WEBPACK_IMPORTED_MODULE_3__["Color"].LightPink);
        }
        else if (!this.password) {
            this.userService.updateElement(_global_variables_enum__WEBPACK_IMPORTED_MODULE_4__["GlobalVariables"].Password, _color_enum__WEBPACK_IMPORTED_MODULE_3__["Color"].LightPink);
        }
        else {
            var hashedPass = Object(crypto_js__WEBPACK_IMPORTED_MODULE_1__["MD5"])(this.password);
            this.userService.tryLoggIn(this.email, hashedPass.toString());
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [_shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <div class=\"card card-login mx-auto mt-5\">\n        <div class=\"card-header\">Reset Password</div>\n        <div class=\"card-body\">\n          <div>\n            <h4>Forgot your password?</h4>\n            <p>Enter your email address and we will send you instructions on how to reset your password.</p>\n          </div>\n          <form>\n            <div class=\"form-group\">\n              <div class=\"form-label-group\">\n                <input [(ngModel)] = \"email\" name = \"email\"  type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Enter email address\" required=\"required\" autofocus=\"autofocus\">\n                <label for=\"inputEmail\">Enter email address</label>\n              </div>\n            </div>\n            <a class=\"btn btn-primary btn-block\" (click) = \" tryReset()\">Reset Password</a>\n          </form>\n          <div class=\"text-center\">\n            <a class=\"d-block small\" [routerLink] = \"['/create']\">Login Page</a>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user-table/users.service */ "./src/app/shared/user-table/users.service.ts");
/* harmony import */ var _global_variables_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-variables.enum */ "./src/app/global-variables.enum.ts");
/* harmony import */ var _color_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color.enum */ "./src/app/color.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(userService) {
        this.userService = userService;
    }
    Object.defineProperty(ResetPasswordComponent.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this.userService.updateElement(_global_variables_enum__WEBPACK_IMPORTED_MODULE_2__["GlobalVariables"].Email, _color_enum__WEBPACK_IMPORTED_MODULE_3__["Color"].White);
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.tryReset = function () {
        if (!this.email) {
            this.userService.updateElement(_global_variables_enum__WEBPACK_IMPORTED_MODULE_2__["GlobalVariables"].Email, _color_enum__WEBPACK_IMPORTED_MODULE_3__["Color"].LightPink);
        }
        else {
            console.log("email: ", this.email);
        }
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
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
/* harmony import */ var src_app_global_variables_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/global-variables.enum */ "./src/app/global-variables.enum.ts");
/* harmony import */ var _user_table_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-table/users.service */ "./src/app/shared/user-table/users.service.ts");
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
    function CvsService(httpClient, userService) {
        this.httpClient = httpClient;
        this.userService = userService;
        this.baseUrl = src_app_global_variables_enum__WEBPACK_IMPORTED_MODULE_2__["GlobalVariables"].Api;
        this.reload = false;
    }
    CvsService.prototype.getAllCvs = function () {
        return this.httpClient.get(this.baseUrl + "/cv");
    };
    CvsService.prototype.deleteCv = function (cvId) {
        var _this = this;
        console.log("deleting");
        this.httpClient.get(this.baseUrl + "/cv/" + cvId + "/delete").toPromise()
            .then(function () { console.log("deleted!"); _this.reload = true; });
    };
    CvsService.prototype.upload = function (isCv) {
        var _this = this;
        this.fileLoc = document.getElementById("file");
        var formData = new FormData();
        console.log("File : " + this.fileLoc.files[0]);
        formData.append("file", this.fileLoc.files[0]);
        //    https://cors-anywhere.herokuapp.com/
        if (isCv) {
            this.httpClient.post("https://cors-anywhere.herokuapp.com/" + this.baseUrl + "/user/" + this.userService.loggedInUser.userId + "/upload/" + this.fileLoc.files[0].name, formData)
                .subscribe(function (cv) {
                if (cv) {
                    console.log("ID: " + cv.cvId);
                    console.log("uploaded!");
                    _this.fileLoc.value = null;
                    _this.reload = true;
                }
            }, function (error) {
                console.log("Not uploaded!");
            });
        }
        // .toPromise()
        // .then(() => {console.log("deleted!"); this.reload = true;});
    };
    CvsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_table_users_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], CvsService);
    return CvsService;
}());



/***/ }),

/***/ "./src/app/shared/upload/upload.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/upload/upload.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/upload/upload.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/upload/upload.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"row\" >\n  <input class = \"col\" id = \"file\" type=\"file\" name=\"upload\"  accept={{fileTypes}}>\n  <button class=\"btn btn-primary col\"  (click) = \"cvsService.upload(true)\">Upload</button>\n</div>\n<!-- accept=\"image/*\" -->"

/***/ }),

/***/ "./src/app/shared/upload/upload.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/upload/upload.component.ts ***!
  \***************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cv_table_cvs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cv-table/cvs.service */ "./src/app/shared/cv-table/cvs.service.ts");
/* harmony import */ var _user_table_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-table/users.service */ "./src/app/shared/user-table/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadComponent = /** @class */ (function () {
    function UploadComponent(cvsService, userService) {
        this.cvsService = cvsService;
        this.userService = userService;
        this.fileTypes = "application/pdf,.doc,.docx";
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/shared/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/shared/upload/upload.component.css")]
        }),
        __metadata("design:paramtypes", [_cv_table_cvs_service__WEBPACK_IMPORTED_MODULE_1__["CvsService"], _user_table_users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UploadComponent);
    return UploadComponent;
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
/* harmony import */ var src_app_global_variables_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global-variables.enum */ "./src/app/global-variables.enum.ts");
/* harmony import */ var src_app_color_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/color.enum */ "./src/app/color.enum.ts");
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
        this.baseUrl = src_app_global_variables_enum__WEBPACK_IMPORTED_MODULE_3__["GlobalVariables"].Api;
    }
    UserService.prototype.getLoggedInUser = function () {
        return this.loggedInUser;
    };
    UserService.prototype.generateImgUrl = function (userId) {
        return (this.baseUrl + "/user/" + userId + "/picture/download");
    };
    UserService.prototype.findUsers = function (value, lastName) {
        return this.userRequest.get(this.baseUrl + "/findbyname/" + value + "&" + lastName);
    };
    UserService.prototype.defaultImage = function (imgId) {
        document.getElementById(imgId).setAttribute("src", "https://image.flaticon.com/icons/svg/149/149071.svg");
    };
    UserService.prototype.tryLoggIn = function (email, password) {
        var _this = this;
        this.checking = true;
        //this.updateElement(GlobalVariables.Confirm, Color.LimeGreen);
        this.userRequest.get(this.baseUrl + "/login/" + email + "&" + password)
            .subscribe(function (user) {
            if (user) {
                _this.loggedInUser = user[0];
                console.log("user loggedin: " + user[0].firstName);
                console.log("try: " + _this.loggedInUser.firstName);
                _this.router.navigate(["/dashboard"]);
                //this.updateElement(GlobalVariables.Confirm, Color.LimeGreen);
                _this.checking = false;
            }
        }, function (error) {
            _this.updateElement(src_app_global_variables_enum__WEBPACK_IMPORTED_MODULE_3__["GlobalVariables"].Email, src_app_color_enum__WEBPACK_IMPORTED_MODULE_4__["Color"].LightPink);
            _this.checking = false;
            document.getElementById('myModal').style.display = "block";
        });
    };
    UserService.prototype.updateElement = function (elementId, colour) {
        var element = document.getElementById(elementId);
        element.setAttribute("style", "background-color : " + colour);
        element.focus();
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

module.exports = "\n     <!-- Sidebar -->\n     <ul>\n        <div class=\"logo-wrapper waves-divght\">\n            <a  class = \"navbar-brand\" [routerLink] = \"['/dashboard']\">\n              <img [id] = \"userService.loggedInUser.userId\"  [src] = \"userService.generateImgUrl(userService.loggedInUser.userId)\" (error) = userService.defaultImage(userService.loggedInUser.userId) class=\"img-fluid flex-center\" style = \"width: 100px\">\n            </a>\n          </div>\n        <div class=\"nav-item active\">\n          <a class = \"btn btn-block\" [routerLink] = \"['/dashboard']\">\n            <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n            <span>Dashboard</span>\n          </a>\n        </div>\n        <div class=\"nav-item\">\n          <a class=\"btn btn-block\" [routerLink] = \"['/update']\">\n            <i class=\"fas fa-fw fa-chart-area\"></i>\n            <span>Update Profile</span></a>\n        </div>\n        <div class=\"nav-item\" *ngIf = \"this.userService.loggedInUser.department.departmentId !== 1 && this.userService.loggedInUser.department.departmentId !== 6\">\n          <a class=\"btn btn-block\" [routerLink] = \"['/create']\">\n            <i class=\"fas fa-fw fa-table\"></i>\n            <span>Create User</span></a>\n        </div>\n        <div class=\"nav-item\" >\n            <a class=\"btn btn-block\" (cdivck) = \"logOut()\">\n              <i class=\"fas fa-fw fa-table\"></i>\n              <span>Log Out</span></a>\n          </div>\n      </ul>"

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



var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SideBarComponent.prototype.logOut = function () {
        this.userService.loggedInUser = null;
        this.router.navigate(["/login"]);
    };
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
        __metadata("design:paramtypes", [_shared_user_table_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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