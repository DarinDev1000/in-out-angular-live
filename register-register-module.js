(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"vh-95 row\">\n    <div class=\"col d-flex align-items-center justify-content-center\">\n      <section>\n        <mat-card>\n          <h1 class=\"singleton-card-header\">Register</h1>\n\n          <form [formGroup]=\"registerForm\" (submit)=\"register()\">\n            <mat-form-field [appearance]=\"environment.MAT_FORM_FIELD_APPEARANCE\">\n              <input \n                matInput\n                formControlName=\"fname\" \n                type=\"text\"\n                placeholder=\"First name\">\n            </mat-form-field>\n\n            <mat-form-field [appearance]=\"environment.MAT_FORM_FIELD_APPEARANCE\">\n              <input \n                matInput\n                formControlName=\"lname\" \n                type=\"text\"\n                placeholder=\"Last name\">\n            </mat-form-field>\n\n            <mat-form-field [appearance]=\"environment.MAT_FORM_FIELD_APPEARANCE\">\n              <input \n                matInput\n                formControlName=\"email\" \n                type=\"email\"\n                placeholder=\"Email\">\n            </mat-form-field>\n\n            <mat-form-field [appearance]=\"environment.MAT_FORM_FIELD_APPEARANCE\">\n              <input \n                matInput\n                formControlName=\"password\" \n                type=\"password\"\n                placeholder=\"Password\">\n            </mat-form-field>\n  \n            <mat-form-field [appearance]=\"environment.MAT_FORM_FIELD_APPEARANCE\">\n              <input \n                matInput\n                formControlName=\"retypePassword\" \n                type=\"password\"\n                placeholder=\"Retype your password\">\n            </mat-form-field>\n\n            <div class=\"row\">\n              <div class=\"col d-flex justify-content-center\">\n                <mat-spinner \n                  *ngIf=\"registering\"\n                  mode=\"indeterminate\"\n                  [diameter]=\"40\"></mat-spinner>\n              </div>\n            </div>\n\n            <ng-container *ngIf=\"!registering\">\n              <button \n                (click)=\"register()\"\n                mat-raised-button\n                [disabled]=\"!registerForm.valid && !passwordsMatch()\"\n                color=\"primary\">Register</button>\n  \n              <button\n                mat-stroked-button\n                color=\"accent\"\n                routerLink=\"/login\"\n                type=\"button\">Log in</button>\n            </ng-container>\n          </form>\n        </mat-card>\n      </section>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  width: 420px; }\n\nmat-form-field {\n  display: block;\n  width: 100%; }\n\nbutton {\n  width: 100%; }\n\nbutton:not(:last-child) {\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJpbi9Qcm9qZWN0cy9NZWV0dXAtQW5ndWxhci9pbi1vdXQtYW5ndWxhci9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgd2lkdGg6IDQyMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(rest, auth, fb, router) {
        this.rest = rest;
        this.auth = auth;
        this.fb = fb;
        this.router = router;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"];
        this.registering = false;
        this.registerForm = this.fb.group({
            fname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            retypePassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.auth.logout();
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.registering = true;
        this.rest
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/user/register", this.registerForm.value)
            .then(function (res) {
            _this.auth.setToken(res.data.jwt);
            _this.auth.setExpires(res.data.expires);
            _this.router.navigate(['/dashboard']);
        })
            .catch(function () {
            _this.registering = false;
        });
    };
    RegisterComponent.prototype.passwordsMatch = function () {
        var form = this.registerForm.value;
        if (form.password === form.retypePassword) {
            return true;
        }
        else {
            return false;
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["Auth"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");







var routes = [
    {
        path: '',
        component: _register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    }
];
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"]
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map