(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-header/dashboard-header.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-header/dashboard-header.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul id=\"not-small\">\n    <div class=\"d-flex justify-content-between\">\n      <div>\n        <li (click)=\"navigate('/')\"><button mat-button>Home</button></li>\n        <li (click)=\"navigate('/market')\"><button mat-button>Market</button></li>\n        <li *ngIf=\"auth.loggedIn()\" (click)=\"navigate('/dash/designs')\"><button mat-button>Dashboard</button></li>\n      </div>\n      \n      <div>\n        <li *ngIf=\"auth.loggedIn()\" (click)=\"auth.logout()\"><button mat-button>Logout</button></li>\n        <li *ngIf=\"!auth.loggedIn()\" (click)=\"navigate('/login')\"><button mat-button>Login</button></li>\n        <li *ngIf=\"!auth.loggedIn()\" (click)=\"navigate('/signup')\"><button mat-button>Signup</button></li>\n      </div>\n    </div>\n  </ul>\n\n  <ul id=\"only-small\">\n    <i (click)=\"drawer.toggle()\" class=\"material-icons\" id=\"hamburger\">menu</i>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-header/dashboard-header.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-header/dashboard-header.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav #not-small {\n  background-color: #001521;\n  display: none;\n  font-family: 'Sarala';\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  nav #not-small li {\n    color: #f8f6f7;\n    cursor: pointer;\n    margin-right: 5px; }\n  @media (min-width: 800px) {\n    nav #not-small {\n      display: block; } }\n  nav #only-small {\n  display: none;\n  height: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n  @media (max-width: 799px) {\n    nav #only-small {\n      display: block; } }\n  ul,\nli {\n  display: inline; }\n  #hamburger {\n  background-color: rgba(255, 255, 255, 0.3333);\n  border-radius: 2px;\n  color: #001521;\n  cursor: pointer;\n  font-size: 38px;\n  height: 38px;\n  width: 38px;\n  line-height: 38px;\n  right: 30px;\n  position: fixed;\n  top: 30px;\n  z-index: 9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJpbi9Qcm9qZWN0cy9NZWV0dXAtQW5ndWxhci9pbi1vdXQtYW5ndWxhci9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQtaGVhZGVyL2Rhc2hib2FyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZGFyaW4vUHJvamVjdHMvTWVldHVwLUFuZ3VsYXIvaW4tb3V0LWFuZ3VsYXIvc3JjL2NvbG9ycy5zY3NzIiwiL1VzZXJzL2RhcmluL1Byb2plY3RzL01lZXR1cC1Bbmd1bGFyL2luLW91dC1hbmd1bGFyL3NyYy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVJLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7RUFWeEI7SUFhTSxjQ2hCUztJRGlCVCxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFHbkI7SUFsQko7TUFtQk0sY0FBYyxFQUFBLEVBRWpCO0VBckJIO0VBd0JJLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBRWxCO0lBN0JKO01BOEJNLGNBQWMsRUFBQSxFQUVqQjtFQUdIOztFQUVFLGVBQWUsRUFBQTtFQUdqQjtFQUNFLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUU5Q2YsZUYrQ3VCO0VFOUN2QixZRjhDdUI7RUU3Q3ZCLFdGNkN1QjtFRTVDdkIsaUJGNEN1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLWhlYWRlci9kYXNoYm9hcmQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vY29sb3JzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vbWl4aW5zLnNjc3MnO1xuXG5uYXYge1xuICAjbm90LXNtYWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNTIxO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdTYXJhbGEnO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICBsaSB7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cblxuICAjb25seS1zbWFsbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc5OXB4KSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cblxudWwsXG5saSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuI2hhbWJ1cmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMzMzKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogIzAwMTUyMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBAaW5jbHVkZSBpY29uLXNpemUoMzhweCk7XG4gIHJpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzBweDtcbiAgei1pbmRleDogOTtcbn1cbiIsIiR3aGl0ZTogI2Y4ZjZmNztcbiRsaWdodC1ncmF5OiAjYWFhO1xuJGdyYXk6ICM3Nzc7XG5cbiRzZWVhYmxlLWJsdWU6ICNkMGRiZTQ7XG4kdW5zYXQtYmx1ZTogI2EwYjZkMDtcbiRsaWdodC1ibHVlOiAjODFiN2U1O1xuJHByaW1hcnktYmx1ZTogIzI1OWZjYztcbiRiYWNrZ3JvdW5kLWJsdWU6ICMwMjc3YmQ7XG4kZ3JheS1ibHVlOiAjNGI2OTg0O1xuJHB1cnBsZS1ibHVlOiAjNDc2MWI2O1xuJGRhcmstYmx1ZTogIzI5M2Y2NTtcbiRyb3lhbC1ibHVlOiAjMDMyNTQzO1xuXG4kb3JhbmdlOiAjZWVhMjMyO1xuXG4kcmVkOiAjZDMwO1xuXG4kZGFyazogIzIxMjEyMTtcbiIsIkBtaXhpbiBpY29uLXNpemUoJHNpemU6IDI0cHgpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgaGVpZ2h0OiAkc2l6ZTtcbiAgd2lkdGg6ICRzaXplO1xuICBsaW5lLWhlaWdodDogJHNpemU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard-header/dashboard-header.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-header/dashboard-header.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHeaderComponent", function() { return DashboardHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





var DashboardHeaderComponent = /** @class */ (function () {
    function DashboardHeaderComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    DashboardHeaderComponent.prototype.navigate = function (routerLink) {
        this.router.navigate([routerLink]);
        this.drawer.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('drawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"])
    ], DashboardHeaderComponent.prototype, "drawer", void 0);
    DashboardHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard-header',
            template: __webpack_require__(/*! ./dashboard-header.component.html */ "./src/app/dashboard/dashboard-header/dashboard-header.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-header.component.scss */ "./src/app/dashboard/dashboard-header/dashboard-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["Auth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardHeaderComponent);
    return DashboardHeaderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\" [class.is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"primary\" class=\"toolbar d-flex justify-content-between\">\n    <button mat-icon-button (click)=\"sidenav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h4>{{ header }}</h4>\n    <button \n      mat-icon-button\n      (click)=\"showAccountCard()\" \n      class=\"cursor text-opacity\"><mat-icon>settings</mat-icon></button>\n  </mat-toolbar>\n    \n  <mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav \n      #sidenav \n      [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n      [fixedInViewport]=\"mobileQuery.matches\"\n      [opened]=\"true\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\"/scheduling\">Scheduling</a>\n        <a mat-list-item routerLink=\"/account\">Account</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>      \n      <div [ngClass]=\"{ 'mobile-padding': mobileQuery.matches }\" class=\"container-fluid\">\n        <router-outlet></router-outlet>\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar h4 {\n  font-size: 1.333rem;\n  font-weight: 400; }\n\nmat-sidenav {\n  border: none;\n  z-index: 99 !important; }\n\nmat-sidenav-content {\n  background: #eee;\n  height: 100%; }\n\nmat-nav-list {\n  padding-top: 0; }\n\n@media (max-width: 600px) {\n    mat-nav-list {\n      padding-top: 56px; } }\n\nmat-nav-list a {\n    width: 180px; }\n\n.mobile-padding {\n  padding-top: 60px; }\n\n.content-container {\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  position: absolute;\n  top: 0;\n  right: 0; }\n\n.is-mobile .toolbar {\n  position: fixed;\n  z-index: 2; }\n\n.sidenav-container {\n  flex: 1; }\n\n.is-mobile .sidenav-container {\n  flex: 1 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJpbi9Qcm9qZWN0cy9NZWV0dXAtQW5ndWxhci9pbi1vdXQtYW5ndWxhci9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjLEVBQUE7O0FBRWQ7SUFIRjtNQUlJLGlCQUFpQixFQUFBLEVBTXBCOztBQVZEO0lBUUksWUFBWSxFQUFBOztBQUloQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVEsRUFBQTs7QUFHVjtFQUNFLGVBQWU7RUFDZixVQUFVLEVBQUE7O0FBR1o7RUFDRSxPQUFPLEVBQUE7O0FBR1Q7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICBoNCB7XG4gICAgZm9udC1zaXplOiAxLjMzM3JlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgYm9yZGVyOiBub25lO1xuICB6LWluZGV4OiA5OSAhaW1wb3J0YW50O1xufVxuXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtbmF2LWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBwYWRkaW5nLXRvcDogNTZweDtcbiAgfVxuXG4gIGEge1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxufVxuXG4ubW9iaWxlLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5pcy1tb2JpbGUgLnRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG59XG5cbi5pcy1tb2JpbGUgLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgZmxleDogMSAwIGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent, MyAccountCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountCard", function() { return MyAccountCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(changeDetectorRef, media, dialog, auth) {
        this.changeDetectorRef = changeDetectorRef;
        this.media = media;
        this.dialog = dialog;
        this.auth = auth;
        this.header = '';
        this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
        this.mobileQuery.addListener(this.mobileQueryListener);
        this.mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
    }
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.header = 'Hello, ' + this.auth.getUser().fname;
    };
    DashboardComponent.prototype.showAccountCard = function () {
        this.dialog.open(MyAccountCard, {
            autoFocus: false,
            id: 'my-account-card-dialog-container',
            position: {
                right: '25px',
                top: '65px'
            }
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["Auth"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

var MyAccountCard = /** @class */ (function () {
    function MyAccountCard(auth, router, dialogRef, data) {
        this.auth = auth;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.firstName = '';
        this.toggleHamburger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MyAccountCard.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MyAccountCard.prototype.handleProfileCardClick = function (route) {
        this.router.navigate([route]);
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MyAccountCard.prototype, "toggleHamburger", void 0);
    MyAccountCard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./my-account-card/my-account-card.component.html */ "./src/app/dashboard/my-account-card/my-account-card.component.html"),
            styles: [__webpack_require__(/*! ./my-account-card/my-account-card.component.scss */ "./src/app/dashboard/my-account-card/my-account-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["Auth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], MyAccountCard);
    return MyAccountCard;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-header/dashboard-header.component */ "./src/app/dashboard/dashboard-header/dashboard-header.component.ts");








var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        children: [
            {
                path: '',
                redirectTo: 'scheduling',
                pathMatch: 'full'
            },
            {
                path: 'scheduling',
                loadChildren: './scheduling/scheduling.module#SchedulingModule',
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'account',
                loadChildren: './account/account.module#AccountModule',
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ]
    }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_7__["DashboardHeaderComponent"], _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["MyAccountCard"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"]
            ],
            entryComponents: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["MyAccountCard"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/my-account-card/my-account-card.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/my-account-card/my-account-card.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list id=\"card-buttons-container\">\n  <a mat-list-item (click)=\"handleProfileCardClick('/logout')\">Logout</a>\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/dashboard/my-account-card/my-account-card.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/my-account-card/my-account-card.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-card {\n  background-color: #ecf0f1;\n  min-width: 200px;\n  position: absolute;\n  z-index: 9; }\n\n#card-buttons-container {\n  padding-bottom: 7.5px;\n  padding-top: 7.5px; }\n\n#card-buttons-container a {\n    display: block; }\n\n#card-buttons-container a:hover {\n    background-color: #f5f5f5; }\n\n#card-buttons-container mat-divider,\n  #card-buttons-container a {\n    width: 180px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJpbi9Qcm9qZWN0cy9NZWV0dXAtQW5ndWxhci9pbi1vdXQtYW5ndWxhci9zcmMvYXBwL2Rhc2hib2FyZC9teS1hY2NvdW50LWNhcmQvbXktYWNjb3VudC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUZwQjtJQUtJLGNBQWMsRUFBQTs7QUFMbEI7SUFTSSx5QkFBeUIsRUFBQTs7QUFUN0I7O0lBY0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL215LWFjY291bnQtY2FyZC9teS1hY2NvdW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xufVxuXG4jY2FyZC1idXR0b25zLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiA3LjVweDtcbiAgcGFkZGluZy10b3A6IDcuNXB4O1xuXG4gIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgfVxuXG4gIG1hdC1kaXZpZGVyLFxuICBhIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map