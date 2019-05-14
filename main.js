(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account/account.module": [
		"./src/app/dashboard/account/account.module.ts",
		"account-account-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	],
	"./logout/logout.module": [
		"./src/app/logout/logout.module.ts",
		"logout-logout-module"
	],
	"./register/register.module": [
		"./src/app/register/register.module.ts",
		"register-register-module"
	],
	"./scheduling/scheduling.module": [
		"./src/app/dashboard/scheduling/scheduling.module.ts",
		"scheduling-scheduling-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.minimized = false;
        this.showDashboardElements = false;
        this.showModal = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        // Forces the window to scroll to top upon the NavigationEnd router event
        this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                window.scrollTo(0, 0);
            }
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["Auth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/jwt.service */ "./src/app/services/jwt.service.ts");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");












var routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
    },
    {
        path: 'logout',
        loadChildren: './logout/logout.module#LogoutModule'
    },
    {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    { path: '**', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            providers: [{ provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HAMMER_GESTURE_CONFIG"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_6__["GestureConfig"] }, _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["Auth"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _services_rest_service__WEBPACK_IMPORTED_MODULE_8__["RestService"], _services_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JWTService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard, AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/services/jwt.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, jwt) {
        this.router = router;
        this.jwt = jwt;
    }
    /**
     * Determines what features a given user can interact with
     * @return {boolean}
     */
    AuthGuard.prototype.canActivate = function () {
        if (this.jwt.checkToken()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JWTService"]])
    ], AuthGuard);
    return AuthGuard;
}());

var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    /**
     * Determines what features a given user can interact with; for admins
     * @return {boolean}
     */
    AdminAuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn() && this.auth.role >= 2) {
            return true;
        }
        else {
            if (!this.auth.loggedIn()) {
                this.router.navigate(['/login']);
                return false;
            }
            this.router.navigate(['/']);
            return false;
        }
    };
    AdminAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["Auth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var Auth = /** @class */ (function () {
    function Auth(router) {
        this.router = router;
        this.token = '';
        this.expires = -1;
        this.role = -1;
        this.user = null;
        this.tokenIdentifier = 'vw_jwt_19';
        this.expiresIdentifier = 'vw_exp_19';
        this.roleIdentifier = 'vw_role_19';
        this.userIdentifier = 'vw_user_19';
    }
    Auth.prototype.loggedIn = function () {
        if (this.getToken() !== '') {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Sets JWT token in token behavior subject
     * @param {string} token
     */
    Auth.prototype.setToken = function (token) {
        localStorage.setItem(this.tokenIdentifier, token);
        this.token = token;
    };
    /**
     * Returns JWT token string from token behavior subject
     * @returns {string}
     */
    Auth.prototype.getToken = function () {
        if (localStorage.getItem(this.tokenIdentifier) && localStorage.getItem(this.tokenIdentifier) !== '') {
            var expires = Number(localStorage.getItem(this.expiresIdentifier));
            var seconds = Math.floor(new Date().getTime() / 1000);
            if (seconds >= expires) {
                this.logout();
            }
            else {
                this.setToken(localStorage.getItem(this.tokenIdentifier));
            }
        }
        else {
            return '';
        }
        return this.token;
    };
    Auth.prototype.setExpires = function (expires) {
        localStorage.setItem(this.expiresIdentifier, String(expires));
        this.expires = expires;
    };
    Auth.prototype.getExpires = function () {
        if (localStorage.getItem(this.expiresIdentifier) && localStorage.getItem(this.expiresIdentifier) !== '') {
            this.setExpires(Number(localStorage.getItem(this.expiresIdentifier)));
        }
        return this.expires;
    };
    Auth.prototype.setRole = function (role) {
        localStorage.setItem(this.roleIdentifier, String(role));
        this.role = role;
    };
    Auth.prototype.getRole = function () {
        if (localStorage.getItem(this.roleIdentifier) && localStorage.getItem(this.roleIdentifier) !== '') {
            this.setRole(Number(localStorage.getItem(this.roleIdentifier)));
        }
        return this.role;
    };
    /**
     * Destroys the local session
     */
    Auth.prototype.logout = function () {
        this.setToken(null);
        this.setExpires(null);
        localStorage.removeItem(this.tokenIdentifier);
        localStorage.removeItem(this.expiresIdentifier);
    };
    Auth.prototype.setUser = function (user) {
        localStorage.setItem(this.userIdentifier, JSON.stringify(user));
        this.user = user;
    };
    Auth.prototype.getUser = function () {
        if (localStorage.getItem(this.userIdentifier)) {
            this.user = JSON.parse(localStorage.getItem(this.userIdentifier));
        }
        return this.user;
    };
    Auth = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Auth);
    return Auth;
}());



/***/ }),

/***/ "./src/app/services/jwt.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/jwt.service.ts ***!
  \*****************************************/
/*! exports provided: JWTService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWTService", function() { return JWTService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



var JWTService = /** @class */ (function () {
    function JWTService(auth) {
        this.auth = auth;
    }
    /**
     * Checks to see if they have a valid auth token
     * @returns {boolean}
     */
    JWTService.prototype.checkToken = function () {
        if (this.auth.getToken()) {
            return this.auth.getToken();
        }
        else {
            return '';
        }
    };
    /**
     * Checks to see if the user meets the minimum role requirement
     * @param  {number}  minRole
     * @return {boolean}
     */
    JWTService.prototype.checkRole = function (minRole) {
        if (this.auth.getRole() >= minRole) {
            return true;
        }
        else {
            return false;
        }
    };
    JWTService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["Auth"]])
    ], JWTService);
    return JWTService;
}());



/***/ }),

/***/ "./src/app/services/rest.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.service */ "./src/app/services/jwt.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var RestService = /** @class */ (function () {
    function RestService(http, jwt) {
        this.http = http;
        this.jwt = jwt;
    }
    /**
     * @description Generates a console log
     * @param {string} type
     * @param {string} url
     * @param {*} [dataSent]
     * @param {*} [dataReturned]
     */
    RestService.prototype.generateLogs = function (type, url, dataSent, dataReturned) {
        console.log("%c " + type.toUpperCase() + " API CALL TO", 'background-color: #333; color: #98bccd;');
        console.log(url);
        console.log("%c DATA SENT", 'background-color: #333; color: #fac5c5;');
        console.table(dataSent);
        console.log("%c DATA RETURNED", 'background-color: #333; color: #f5f5f5;');
        console.table(dataReturned);
    };
    /**
     * @description Abstracts generating an HTTP promise
     * @param {string} httpMethod
     * @param {string} url
     * @param {*} [body=null]
     * @returns {Promise<any>}
     */
    RestService.prototype.generateHttpPromise = function (httpMethod, url, body) {
        var _this = this;
        if (body === void 0) { body = null; }
        var promise = null;
        if (body) {
            promise = this.http[httpMethod](url, body, {
                headers: this.buildOptions()
            })
                .toPromise()
                .catch(function (err) { return _this.handleError(err); });
        }
        else {
            promise = this.http[httpMethod](url, {
                headers: this.buildOptions()
            })
                .toPromise()
                .catch(function (err) { return _this.handleError(err); });
        }
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
            promise.then(function (res) {
                _this.generateLogs(httpMethod, url, body, res);
            });
        }
        return promise;
    };
    /**
     * Abstracts HTTP POST
     * @param  {string}       url
     * @param  {any}          body
     * @return {Promise<any>}
     */
    RestService.prototype.post = function (url, body) {
        return this.generateHttpPromise('post', url, body);
    };
    /**
     * Abstracts HTTP GET
     * @param  {string}       url
     * @return {Promise<any>}
     */
    RestService.prototype.get = function (url) {
        return this.generateHttpPromise('get', url);
    };
    /**
     * Abstracts HTTP DELETE
     * @param  {string}       url
     * @return {Promise<any>}
     */
    RestService.prototype.delete = function (url) {
        return this.generateHttpPromise('delete', url);
    };
    /**
     * Abstracts HTTP PUT
     * @param  {string}       url
     * @param  {any}          body
     * @return {Promise<any>}
     */
    RestService.prototype.put = function (url, body) {
        return this.generateHttpPromise('put', url, body);
    };
    /**
     * Lets use set build options with auth token header on abstracted HTTP calls
     * @return {HttpHeaders}
     */
    RestService.prototype.buildOptions = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Accept: 'application/json',
            Authorization: 'Bearer ' + this.jwt.checkToken()
        });
    };
    /**
     * Error handling for all abstracted calls, doesn't reject a Promise
     * @param  {any}          serverError
     */
    RestService.prototype.handleError = function (serverError) {
        try {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                console.log('Caught try', serverError);
            }
        }
        catch (e) {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                console.log('Caught catch', e);
            }
        }
    };
    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _jwt_service__WEBPACK_IMPORTED_MODULE_3__["JWTService"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/environments/base.ts":
/*!**********************************!*\
  !*** ./src/environments/base.ts ***!
  \**********************************/
/*! exports provided: BaseEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseEnvironment", function() { return BaseEnvironment; });
var BaseEnvironment = {
    MAT_FORM_FIELD_APPEARANCE: 'standard',
    titleSuffix: 'ValleyWorx Scheduling'
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/environments/base.ts");


var environment = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _base__WEBPACK_IMPORTED_MODULE_1__["BaseEnvironment"], { apiUrl: 'https://m8ltecii73.execute-api.us-east-2.amazonaws.com/dev', production: false });


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/darin/Projects/Meetup-Angular/in-out-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map