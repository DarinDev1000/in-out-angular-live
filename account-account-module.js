(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/dashboard/account/account.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/account/account.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <mat-card style=\"margin-top: 100px;\">\n        <h1>Reset Password</h1>\n\n        <form [formGroup]=\"passwordForm\">\n          <mat-form-field>\n            <mat-label>Password</mat-label>\n            <input \n              matInput\n              formControlName=\"password\"\n              type=\"text\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input \n              matInput\n              formControlName=\"retypePassword\"\n              type=\"text\"\n              placeholder=\"Re-type your password\">\n          </mat-form-field>\n        \n          <button \n            *ngIf=\"!resetting\"\n            mat-raised-button \n            (click)=\"resetPassword()\"\n            color=\"primary\"\n            class=\"w-100\"\n            type=\"button\">Submit</button>\n\n          <div *ngIf=\"resetting\" class=\"row\">\n            <div class=\"col d-flex justify-content-center\">\n              <mat-spinner \n                mode=\"indeterminate\"\n                [diameter]=\"40\"></mat-spinner>\n            </div>\n          </div>\n        </form>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/account/account.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/account/account.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJpbi9Qcm9qZWN0cy9NZWV0dXAtQW5ndWxhci9pbi1vdXQtYW5ndWxhci9zcmMvYXBwL2Rhc2hib2FyZC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/account/account.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/account/account.component.ts ***!
  \********************************************************/
/*! exports provided: AccountComponent, SuccessDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessDialog", function() { return SuccessDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var AccountComponent = /** @class */ (function () {
    function AccountComponent(fb, rest, dialog) {
        this.fb = fb;
        this.rest = rest;
        this.dialog = dialog;
        this.resetting = false;
        this.passwordForm = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(48)]],
            retypePassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(48)]]
        });
    }
    AccountComponent.prototype.ngOnInit = function () { };
    AccountComponent.prototype.resetPassword = function () {
        var _this = this;
        this.resetting = true;
        this.rest.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/user/password", this.passwordForm.value).then(function () {
            _this.dialog.open(SuccessDialog, {
                data: "Yo, I'm Data from Battlestar Galaga"
            });
        });
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/dashboard/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/dashboard/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AccountComponent);
    return AccountComponent;
}());

var SuccessDialog = /** @class */ (function () {
    function SuccessDialog(data, dialogRef, router) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.router = router;
    }
    SuccessDialog.prototype.goAway = function () {
        this.router.navigate(['/scheduling']);
        this.dialogRef.close();
    };
    SuccessDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./success.dialog.html */ "./src/app/dashboard/account/success.dialog.html"),
            styles: [__webpack_require__(/*! ./success.dialog.scss */ "./src/app/dashboard/account/success.dialog.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SuccessDialog);
    return SuccessDialog;
}());



/***/ }),

/***/ "./src/app/dashboard/account/account.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/account/account.module.ts ***!
  \*****************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.component */ "./src/app/dashboard/account/account.component.ts");







var routes = [
    {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"]
    }
];
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"], _account_component__WEBPACK_IMPORTED_MODULE_6__["SuccessDialog"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]
            ],
            entryComponents: [_account_component__WEBPACK_IMPORTED_MODULE_6__["SuccessDialog"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/dashboard/account/success.dialog.html":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/account/success.dialog.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Good job, bud</p>\n<button (click)=\"goAway()\" mat-button>Go away</button>\n"

/***/ }),

/***/ "./src/app/dashboard/account/success.dialog.scss":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/account/success.dialog.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hY2NvdW50L3N1Y2Nlc3MuZGlhbG9nLnNjc3MifQ== */"

/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map