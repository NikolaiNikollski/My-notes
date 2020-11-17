(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/Data/Note.ts":
    /*!******************************!*\
      !*** ./src/app/Data/Note.ts ***!
      \******************************/

    /*! exports provided: Note */

    /***/
    function srcAppDataNoteTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Note", function () {
        return Note;
      });

      var Note = function Note(text, date, id) {
        _classCallCheck(this, Note);

        this.Text = text;
        this.Date = date;
        this.Id = id;
        this.Selected = false;
        this.TempText = null;
      };
      /***/

    },

    /***/
    "./src/app/Data/http.service.ts":
    /*!**************************************!*\
      !*** ./src/app/Data/http.service.ts ***!
      \**************************************/

    /*! exports provided: HttpService */

    /***/
    function srcAppDataHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var _Note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Note */
      "./src/app/Data/Note.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
          this.urlNote = 'http://localhost/Api/Note';
          this.urlAuth = 'http://localhost/Api/Auth';
        }

        _createClass(HttpService, [{
          key: "create",
          value: function create(note) {
            var formData = new FormData();
            formData.append('text', note.Text);
            formData.append('date', note.Date);
            return this.http.post(this.urlNote + "/createNote", formData);
          }
        }, {
          key: "update",
          value: function update(note) {
            var formData = new FormData();
            formData.append('text', note.Text);
            formData.append('date', note.Date);
            formData.append('noteId', note.Id.toString());
            return this.http.post(this.urlNote + '/updateNote', formData);
          }
        }, {
          key: "loadNotes",
          value: function loadNotes() {
            return this.http.get(this.urlNote + '/getAllNotes').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              return Object.assign(Object.assign({}, data.value), {
                notes: data.value.notes.map(function (note) {
                  return new _Note__WEBPACK_IMPORTED_MODULE_0__["Note"](note.text, note.date, note.noteId);
                })
              });
            }));
          }
        }, {
          key: "delete",
          value: function _delete(note) {
            var formData = new FormData();
            formData.append('noteId', note.Id.toString());
            return this.http.post(this.urlNote + '/deleteNote', formData);
          }
        }, {
          key: "checkUsername",
          value: function checkUsername(username) {
            var formData = new FormData();
            formData.append('username', username);
            return this.http.post(this.urlAuth + '/checkUsername', formData);
          }
        }, {
          key: "login",
          value: function login(form) {
            var credentials = JSON.stringify(form.value);
            return this.http.post(this.urlAuth + '/login', credentials, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
              })
            });
          }
        }, {
          key: "register",
          value: function register(form) {
            var credentials = JSON.stringify(form.value);
            console.log(credentials);
            return this.http.post(this.urlAuth + '/register', credentials, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
              })
            });
          }
        }, {
          key: "refresh",
          value: function refresh(credentials) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var response;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.http.post(this.urlAuth + '/refresh', credentials, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                          "Content-Type": "application/json"
                        }),
                        observe: 'response'
                      }).toPromise();

                    case 2:
                      response = _context.sent;
                      return _context.abrupt("return", response);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return HttpService;
      }();

      HttpService.ɵfac = function HttpService_Factory(t) {
        return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: HttpService,
        factory: HttpService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HttpService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: tokenGetter, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
        return tokenGetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _main_app_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main/app.main */
      "./src/app/main/app.main.ts");
      /* harmony import */


      var _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notelist/app.notelist */
      "./src/app/notelist/app.notelist.ts");
      /* harmony import */


      var _authorization_app_authorization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./authorization/app.authorization */
      "./src/app/authorization/app.authorization.ts");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");

      function tokenGetter() {
        return localStorage.getItem("jwt");
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_main_app_main__WEBPACK_IMPORTED_MODULE_4__["AppMain"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
          config: {
            tokenGetter: tokenGetter,
            allowedDomains: ["localhost"],
            disallowedRoutes: []
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_main_app_main__WEBPACK_IMPORTED_MODULE_4__["AppMain"], _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_5__["AppNotelist"], _authorization_app_authorization__WEBPACK_IMPORTED_MODULE_6__["AppAuthorization"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
              config: {
                tokenGetter: tokenGetter,
                allowedDomains: ["localhost"],
                disallowedRoutes: []
              }
            })],
            declarations: [_main_app_main__WEBPACK_IMPORTED_MODULE_4__["AppMain"], _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_5__["AppNotelist"], _authorization_app_authorization__WEBPACK_IMPORTED_MODULE_6__["AppAuthorization"]],
            bootstrap: [_main_app_main__WEBPACK_IMPORTED_MODULE_4__["AppMain"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/authorization/app.authorization.ts":
    /*!****************************************************!*\
      !*** ./src/app/authorization/app.authorization.ts ***!
      \****************************************************/

    /*! exports provided: AppAuthorization */

    /***/
    function srcAppAuthorizationAppAuthorizationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppAuthorization", function () {
        return AppAuthorization;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Data_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Data/http.service */
      "./src/app/Data/http.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AppAuthorization_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppAuthorization_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.getLoginForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppAuthorization_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.getRegisterForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppAuthorization_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_7_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.error);
        }
      }

      function AppAuthorization_form_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppAuthorization_form_7_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.login(_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppAuthorization_form_7_div_12_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.error);
        }
      }

      function AppAuthorization_form_8_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_8_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_8_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_8_ul_20_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("username must contain at least ", ctx_r23._username.errors == null ? null : ctx_r23._username.errors.minlength.requiredLength, " simbols. ");
        }
      }

      function AppAuthorization_form_8_ul_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppAuthorization_form_8_ul_20_li_1_Template, 3, 1, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19._username.errors == null ? null : ctx_r19._username.errors.minlength);
        }
      }

      function AppAuthorization_form_8_ul_21_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Password must contain at least ", ctx_r24._password.errors == null ? null : ctx_r24._password.errors.minlength.requiredLength, " simbols. ");
        }
      }

      function AppAuthorization_form_8_ul_21_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must contain digit. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_8_ul_21_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must contain letter.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_8_ul_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppAuthorization_form_8_ul_21_li_1_Template, 3, 1, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppAuthorization_form_8_ul_21_li_2_Template, 3, 0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppAuthorization_form_8_ul_21_li_3_Template, 3, 0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20._password.errors == null ? null : ctx_r20._password.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20._password.errors == null ? null : ctx_r20._password.errors.pattern == null ? null : ctx_r20._password.errors.pattern.requiredPattern) == "/[0-9]/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20._password.errors == null ? null : ctx_r20._password.errors.pattern == null ? null : ctx_r20._password.errors.pattern.requiredPattern) == "/[a-zA-Z]/");
        }
      }

      function AppAuthorization_form_8_ul_22_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppAuthorization_form_8_ul_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppAuthorization_form_8_ul_22_li_1_Template, 3, 0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21._rePassword.errors == null ? null : ctx_r21._rePassword.errors.RePasswordCorrectionError);
        }
      }

      function AppAuthorization_form_8_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.error);
        }
      }

      function AppAuthorization_form_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppAuthorization_form_8_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.register(_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppAuthorization_form_8_span_8_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppAuthorization_form_8_span_12_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppAuthorization_form_8_span_16_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppAuthorization_form_8_ul_20_Template, 2, 1, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppAuthorization_form_8_ul_21_Template, 4, 3, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppAuthorization_form_8_ul_22_Template, 2, 1, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppAuthorization_form_8_div_23_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.clientForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4._username.errors == null ? null : ctx_r4._username.errors.required) && ctx_r4._username.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4._password.errors == null ? null : ctx_r4._password.errors.required) && ctx_r4._password.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4._rePassword.errors == null ? null : ctx_r4._rePassword.errors.required) && ctx_r4._rePassword.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4._username.invalid && ctx_r4._username.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4._password.invalid && ctx_r4._password.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4._rePassword.invalid && ctx_r4._rePassword.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.error);
        }
      }

      var AppAuthorization = /*#__PURE__*/function () {
        function AppAuthorization(fb, httpService) {
          _classCallCheck(this, AppAuthorization);

          this.fb = fb;
          this.httpService = httpService;
          this.onChangedAuth = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.activeLoginForm = false;
          this.activeRegisterForm = false;
          this.error = null;

          this._createForm();
        }

        _createClass(AppAuthorization, [{
          key: "_createForm",
          value: function _createForm() {
            this.clientForm = this.fb.group({
              username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[0-9]/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[a-zA-Z]/)]],
              rePassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.isRePasswordCorrect()]]
            });
          }
        }, {
          key: "isRePasswordCorrect",
          value: function isRePasswordCorrect() {
            var _this = this;

            return function (control) {
              if (_this.clientForm) {
                var condition = _this.clientForm.get('password').value === _this.clientForm.get('rePassword').value;
              }

              var valid = !control.value || condition;
              return valid ? null : {
                RePasswordCorrectionError: true
              };
            };
          }
        }, {
          key: "getFormcontroll",
          value: function getFormcontroll() {
            console.log(this.clientForm);
          }
        }, {
          key: "getLoginForm",
          value: function getLoginForm() {
            this.activeLoginForm = true;
            this.activeRegisterForm = false;
            this.error = null;
          }
        }, {
          key: "getRegisterForm",
          value: function getRegisterForm() {
            this.activeRegisterForm = true;
            this.activeLoginForm = false;
            this.error = null;
          }
        }, {
          key: "register",
          value: function register(form) {
            var _this2 = this;

            if (this.clientForm.invalid) {
              return;
            }

            this.logout();
            this.httpService.register(form).subscribe(function (response) {
              return _this2.onCopmplete(response);
            }, function (err) {
              return _this2.onError(err);
            });
          }
        }, {
          key: "login",
          value: function login(form) {
            var _this3 = this;

            this.logout();
            this.httpService.login(form).subscribe(function (response) {
              return _this3.onCopmplete(response);
            }, function (errResponse) {
              return _this3.onError(errResponse);
            });
          }
        }, {
          key: "onCopmplete",
          value: function onCopmplete(response) {
            var token = response.value.accessToken;
            var refreshToken = response.value.refreshToken;
            localStorage.setItem("jwt", token);
            localStorage.setItem("refreshToken", refreshToken);
            this.onChangedAuth.emit(true);
            this.activeLoginForm = false;
            this.activeRegisterForm = false;
            this.error = null;
          }
        }, {
          key: "onError",
          value: function onError(errResponse) {
            this.error = errResponse.error;
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem("jwt");
            localStorage.removeItem("refreshToken");
            this.onChangedAuth.emit(false);
            this.activeLoginForm = true;
            this.userName = null;
          }
        }, {
          key: "_username",
          get: function get() {
            return this.clientForm.get('username');
          }
        }, {
          key: "_password",
          get: function get() {
            return this.clientForm.get('password');
          }
        }, {
          key: "_rePassword",
          get: function get() {
            return this.clientForm.get('rePassword');
          }
        }]);

        return AppAuthorization;
      }();

      AppAuthorization.ɵfac = function AppAuthorization_Factory(t) {
        return new (t || AppAuthorization)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));
      };

      AppAuthorization.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppAuthorization,
        selectors: [["authorization"]],
        inputs: {
          userAuthenticated: "userAuthenticated",
          userName: "userName"
        },
        outputs: {
          onChangedAuth: "onChangedAuth"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])],
        decls: 11,
        vars: 6,
        consts: [[1, "nav"], [1, "authPanel"], ["class", "authPanelButton", 3, "click", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "click"], [1, "authPanelButton", 3, "click"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "container-fluid", "formContainer"], [1, "form-signin-heading"], ["type", "email", "name", "username", "ngModel", "", "placeholder", "User Name", "required", "", "autofocus", "", 1, "form-control"], ["type", "password", "name", "password", "ngModel", "", "placeholder", "Password", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "formButton"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["registerForm", "ngForm"], [1, "inputBlock"], ["type", "email", "ngModel", "", "placeholder", "User Name", "formControlName", "username", 1, "form-control"], ["class", "requiredSimbol", 4, "ngIf"], ["type", "password", "ngModel", "", "placeholder", "Password", "formControlName", "password", 1, "form-control"], ["type", "password", "ngModel", "", "placeholder", "Password Repeat", "formControlName", "rePassword", 1, "form-control"], ["class", "errorBlock", 4, "ngIf"], [1, "requiredSimbol"], [1, "errorBlock"], [4, "ngIf"]],
        template: function AppAuthorization_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppAuthorization_button_4_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppAuthorization_button_5_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppAuthorization_button_6_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppAuthorization_form_7_Template, 13, 1, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppAuthorization_form_8_Template, 24, 8, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppAuthorization_Template_button_click_9_listener() {
              return ctx.getFormcontroll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " getFormcontroll");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeLoginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeRegisterForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        styles: ["input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\r\n    border: 2px solid red;\r\n}\r\n\r\n\r\n\r\n.nav[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    background-color: #007BFF;\r\n    color: #FFFFFF;\r\n    display: flex;\r\n    position: relative;\r\n    font-size: 18px;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n\r\n\r\n.authPanel[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 50px;\r\n    right: 10px;\r\n}\r\n\r\n\r\n\r\n.authPanelButton[_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    height: 50px;\r\n    width: 100px;\r\n    background-color: #007BFF;\r\n    color: #FFFFFF;\r\n}\r\n\r\n\r\n\r\n.authPanelButton[_ngcontent-%COMP%]:hover {\r\n        border: 2px solid white;\r\n        border-top: 0;\r\n        border-bottom: 0;\r\n    }\r\n\r\n\r\n\r\nform[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.formContainer[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    position: absolute;\r\n    right: 0px;\r\n    width: 400px;\r\n    background-color: deepskyblue;\r\n    border: 8px solid #007BFF;\r\n    border-top: 0;\r\n    color: #FFFFFF;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n.inputBlock[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\n.requiredSimbol[_ngcontent-%COMP%] {\r\n    color: red;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n\r\n.errorBlock[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\n\r\n\r\n.formButton[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9hcHAuYXV0aG9yaXphdGlvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7Ozs7QUFJQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7OztBQUNJO1FBQ0ksdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7Ozs7QUFFSjtJQUNJLGtCQUFrQjtBQUN0Qjs7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7Ozs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0FBQ2I7Ozs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25COzs7O0FBR0E7SUFDSSxVQUFVO0FBQ2Q7Ozs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6YXRpb24vYXBwLmF1dGhvcml6YXRpb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuXHJcblxyXG4ubmF2IHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdCRkY7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hdXRoUGFuZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5hdXRoUGFuZWxCdXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdCRkY7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4gICAgLmF1dGhQYW5lbEJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mb3JtQ29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xyXG4gICAgYm9yZGVyOiA4cHggc29saWQgIzAwN0JGRjtcclxuICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5pbnB1dEJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5yZXF1aXJlZFNpbWJvbCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmVycm9yQmxvY2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmZvcm1CdXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppAuthorization, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'authorization',
            templateUrl: 'app.authorization.html',
            styleUrls: ['app.authorization.css'],
            providers: [_Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }];
        }, {
          userAuthenticated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          userName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onChangedAuth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/main/app.main.ts":
    /*!**********************************!*\
      !*** ./src/app/main/app.main.ts ***!
      \**********************************/

    /*! exports provided: AppMain */

    /***/
    function srcAppMainAppMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMain", function () {
        return AppMain;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
      /* harmony import */


      var _authorization_app_authorization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../authorization/app.authorization */
      "./src/app/authorization/app.authorization.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../notelist/app.notelist */
      "./src/app/notelist/app.notelist.ts");

      function AppMain_notelist_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "notelist", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangedUserName", function AppMain_notelist_2_Template_notelist_onChangedUserName_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.onChangedUserName($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AppMain = /*#__PURE__*/function () {
        function AppMain(jwtHelper) {
          _classCallCheck(this, AppMain);

          this.jwtHelper = jwtHelper;
          this.userAuthenticated = this.isUserAuthenticated();
        }

        _createClass(AppMain, [{
          key: "onChangedAuth",
          value: function onChangedAuth(increased) {
            this.userAuthenticated = increased;
          }
        }, {
          key: "onChangedUserName",
          value: function onChangedUserName(newUserName) {
            if (newUserName === null) this.userAuthenticated = false;
            this.userName = newUserName;
          }
        }, {
          key: "isUserAuthenticated",
          value: function isUserAuthenticated() {
            var token = localStorage.getItem("jwt");
            return token && !this.jwtHelper.isTokenExpired(token);
          }
        }]);

        return AppMain;
      }();

      AppMain.ɵfac = function AppMain_Factory(t) {
        return new (t || AppMain)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]));
      };

      AppMain.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppMain,
        selectors: [["my-app"]],
        decls: 3,
        vars: 3,
        consts: [[3, "userAuthenticated", "userName", "onChangedAuth"], [3, "onChangedUserName", 4, "ngIf"], [3, "onChangedUserName"]],
        template: function AppMain_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "authorization", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangedAuth", function AppMain_Template_authorization_onChangedAuth_1_listener($event) {
              return ctx.onChangedAuth($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppMain_notelist_2_Template, 1, 0, "notelist", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userAuthenticated", ctx.userAuthenticated)("userName", ctx.userName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAuthenticated);
          }
        },
        directives: [_authorization_app_authorization__WEBPACK_IMPORTED_MODULE_2__["AppAuthorization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _notelist_app_notelist__WEBPACK_IMPORTED_MODULE_4__["AppNotelist"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwLm1haW4uY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMain, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'my-app',
            templateUrl: 'app.main.html',
            styleUrls: ['app.main.css']
          }]
        }], function () {
          return [{
            type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/notelist/app.notelist.ts":
    /*!******************************************!*\
      !*** ./src/app/notelist/app.notelist.ts ***!
      \******************************************/

    /*! exports provided: AppNotelist */

    /***/
    function srcAppNotelistAppNotelistTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppNotelist", function () {
        return AppNotelist;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Data_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Data/http.service */
      "./src/app/Data/http.service.ts");
      /* harmony import */


      var _Data_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Data/Note */
      "./src/app/Data/Note.ts");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      function AppNotelist_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_4_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.selectNote(note_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppNotelist_div_4_Template_textarea_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            return note_r1.Text = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppNotelist_div_4_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            return note_r1.Date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_4_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            var index_r2 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.update(note_r1, index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_4_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            var index_r2 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.unselectNote(note_r1, index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_div_4_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var note_r1 = ctx.$implicit;
            var index_r2 = ctx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.del(note_r1, index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var note_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", note_r1.Text)("disabled", !note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", note_r1.Date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", note_r1.Selected);
        }
      }

      var AppNotelist = /*#__PURE__*/function () {
        function AppNotelist(httpService, jwtHelper, http) {
          _classCallCheck(this, AppNotelist);

          this.httpService = httpService;
          this.jwtHelper = jwtHelper;
          this.http = http;
          this.onChangedUserName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.notelist = [];
        }

        _createClass(AppNotelist, [{
          key: "createNote",
          value: function createNote() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var canActivatePromise, note;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.canActivate();

                    case 2:
                      canActivatePromise = _context2.sent;

                      if (canActivatePromise) {
                        _context2.next = 5;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 5:
                      note = new _Data_Note__WEBPACK_IMPORTED_MODULE_2__["Note"]("", this.formateDate(new Date()), null);
                      this.httpService.create(note).subscribe(function (id) {
                        note.Id = id;
                      }, function (err) {
                        _this4.onChangedUserName.emit(null);
                      });
                      this.notelist.unshift(note);
                      setTimeout(function () {
                        note.Selected = true;
                      }, 100);

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "update",
          value: function update(note) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var canActivatePromise;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.canActivate();

                    case 2:
                      canActivatePromise = _context3.sent;

                      if (canActivatePromise) {
                        _context3.next = 5;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 5:
                      this.httpService.update(note).subscribe(function () {}, function (err) {
                        _this5.onChangedUserName.emit(null);
                      });
                      note.Selected = false;
                      note.TempText = null;

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "del",
          value: function del(note, index) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var canActivatePromise;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.canActivate();

                    case 2:
                      canActivatePromise = _context4.sent;

                      if (canActivatePromise) {
                        _context4.next = 6;
                        break;
                      }

                      this.onChangedUserName.emit(null);
                      return _context4.abrupt("return");

                    case 6:
                      if (this.canActivate()) {
                        _context4.next = 8;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 8:
                      this.httpService["delete"](note).subscribe(function () {}, function (err) {
                        _this6.onChangedUserName.emit(null);
                      });
                      note.Selected = false;
                      this.notelist.splice(index, 1);

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "selectNote",
          value: function selectNote(note) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var canActivatePromise;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.canActivate();

                    case 2:
                      canActivatePromise = _context5.sent;

                      if (canActivatePromise) {
                        _context5.next = 5;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 5:
                      note.Selected = true;
                      note.TempText = note.Text;

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "unselectNote",
          value: function unselectNote(note, index) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var canActivatePromise;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.canActivate();

                    case 2:
                      canActivatePromise = _context6.sent;

                      if (canActivatePromise) {
                        _context6.next = 5;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 5:
                      note.Selected = false;
                      note.Text = note.TempText;
                      note.TempText = null;

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "loadNotes",
          value: function loadNotes() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this7 = this;

              var canActivatePromise;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.canActivate();

                    case 2:
                      canActivatePromise = _context7.sent;

                      if (canActivatePromise) {
                        _context7.next = 5;
                        break;
                      }

                      return _context7.abrupt("return");

                    case 5:
                      this.httpService.loadNotes().subscribe(function (data) {
                        _this7.notelist = data.notes;

                        _this7.onChangedUserName.emit(data.name);
                      }, function (err) {
                        _this7.onChangedUserName.emit(null);
                      });

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadNotes();
          }
        }, {
          key: "formateDate",
          value: function formateDate(inDate) {
            var options = {
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            };
            return inDate.toLocaleString('ru', options);
          }
        }, {
          key: "canActivate",
          value: function canActivate() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var token, refreshSuccessPromise;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      token = localStorage.getItem("jwt");

                      if (!(token && !this.jwtHelper.isTokenExpired(token))) {
                        _context8.next = 3;
                        break;
                      }

                      return _context8.abrupt("return", true);

                    case 3:
                      _context8.next = 5;
                      return this.tryRefreshingTokens(token);

                    case 5:
                      refreshSuccessPromise = _context8.sent;

                      if (!refreshSuccessPromise) {
                        _context8.next = 8;
                        break;
                      }

                      return _context8.abrupt("return", true);

                    case 8:
                      this.onChangedUserName.emit(null);
                      return _context8.abrupt("return", false);

                    case 10:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "tryRefreshingTokens",
          value: function tryRefreshingTokens(token) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var refreshToken, credentials, isRefreshSuccess, response, newToken, newRefreshToken;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      refreshToken = localStorage.getItem("refreshToken");
                      credentials = JSON.stringify({
                        accessToken: token,
                        refreshToken: refreshToken
                      });
                      _context9.prev = 2;
                      _context9.next = 5;
                      return this.httpService.refresh(credentials);

                    case 5:
                      response = _context9.sent;
                      newToken = response.body.accessToken;
                      newRefreshToken = response.body.refreshToken;
                      localStorage.setItem("jwt", newToken);
                      localStorage.setItem("refreshToken", newRefreshToken);
                      isRefreshSuccess = true;
                      _context9.next = 16;
                      break;

                    case 13:
                      _context9.prev = 13;
                      _context9.t0 = _context9["catch"](2);
                      isRefreshSuccess = false;

                    case 16:
                      return _context9.abrupt("return", isRefreshSuccess);

                    case 17:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[2, 13]]);
            }));
          }
        }]);

        return AppNotelist;
      }();

      AppNotelist.ɵfac = function AppNotelist_Factory(t) {
        return new (t || AppNotelist)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      AppNotelist.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppNotelist,
        selectors: [["notelist"]],
        outputs: {
          onChangedUserName: "onChangedUserName"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])],
        decls: 5,
        vars: 1,
        consts: [[1, "btn", "btn-success", "createButton", 3, "click"], [1, "notelistContainer", "col-md-6", "offset-md-3"], ["class", "noteContainer", 3, "selected", 4, "ngFor", "ngForOf"], [1, "noteContainer"], [1, "body", 3, "click"], [1, "noteText", 3, "ngModel", "disabled", "ngModelChange"], ["type", "text", "disabled", "", 1, "noteDate", 3, "ngModel", "ngModelChange"], [1, "buttonBlock"], [1, "btn", "btn-success", "saveButton", 3, "click"], [1, "btn", "btn-success", "cancelButton", 3, "click"], [1, "btn", "btn-success", "deleteButton", 3, "click"]],
        template: function AppNotelist_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotelist_Template_button_click_1_listener() {
              return ctx.createNote();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Note");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppNotelist_div_4_Template, 11, 17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notelist);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
        styles: [".btn[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100px;\n    float: left;\n    border: 0;\n    border-radius: 0px;\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n    font-family: Roboto; \n    font-size: 20px;\n}\n\n    .btn.selected[_ngcontent-%COMP%] {\n        margin: 5px;\n        border: 3px solid darkslategrey;\n    }\n\n    .btn[_ngcontent-%COMP%]:hover {\n        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.8);\n        transition: 0.3s;\n    }\n\n    .createButton[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 17px;\n    background-color: deepskyblue;\n}\n\n    .saveButton[_ngcontent-%COMP%] {\n    background-color: lawngreen;\n    display: none;\n}\n\n    .saveButton.selected[_ngcontent-%COMP%] {\n        display: inline-block;\n    }\n\n    .cancelButton[_ngcontent-%COMP%] {\n    background-color: orange;\n    display: none;\n}\n\n    .cancelButton.selected[_ngcontent-%COMP%] {\n        display: inline-block;\n    }\n\n    .deleteButton[_ngcontent-%COMP%] {\n    background-color: red;\n}\n\n    .deleteButton.selected[_ngcontent-%COMP%] {\n        background-color: red;\n    }\n\n    .notelistContainer[_ngcontent-%COMP%] {\n    margin-top: 50px;\n}\n\n    .noteContainer[_ngcontent-%COMP%] {\n    display: flex;\n    overflow: hidden;\n    padding: 0px;\n    border: 0 solid #007BFF;\n    border-width: 0 4px 4px 4px;\n    max-height: 56px;\n    transition: max-height 0.5s;\n}\n\n    .noteContainer[_ngcontent-%COMP%]:first-child {\n        border-top: 4px solid #007BFF;\n    }\n\n    .noteContainer.selected[_ngcontent-%COMP%] {\n        display: block;\n        border: 0 solid darkblue;\n        border-width: 6px 104px 6px 6px;\n        background-color: #F4F7F9;\n        max-height: 400px;\n        transition: max-height 0.5s;\n    }\n\n    .body[_ngcontent-%COMP%]:hover:not(.selected) {\n    background-color: #F4F7F9;\n    transition: 0.3s;\n    cursor: pointer;\n}\n\n    .body[_ngcontent-%COMP%] {\n    display: flex;\n    position: relative;\n    width: 100%;\n}\n\n    .body.selected[_ngcontent-%COMP%] {\n        display: block;\n    }\n\n    .noteText[_ngcontent-%COMP%] {\n    padding: 1px 0 0 10px;\n    width: 100%;\n    overflow: hidden;\n    resize: none;\n    border: 0;\n    height: 250px;\n}\n\n    .noteText.selected[_ngcontent-%COMP%] {\n        background-color: #F4F7F9;\n        padding: 10px;\n        border-bottom: 6px solid darkblue;\n    }\n\n    .noteDate[_ngcontent-%COMP%] {\n    width: 140px;\n    padding-top: 6px;\n    float: right;\n    border-width: 0;\n    cursor: default;\n}\n\n    .noteDate.selected[_ngcontent-%COMP%] {\n        margin-top: 10px;\n        background-color: #F4F7F9;\n        transition: 0.3s;\n        cursor: pointer;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZWxpc3QvYXBwLm5vdGVsaXN0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsaUVBQWlFO0lBQ2pFLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztJQUVJO1FBQ0ksV0FBVztRQUNYLCtCQUErQjtJQUNuQzs7SUFFQTtRQUNJLHdDQUF3QztRQUN4QyxnQkFBZ0I7SUFDcEI7O0lBRUo7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7SUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0FBQ2pCOztJQUVJO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVKO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0lBRUk7UUFDSSxxQkFBcUI7SUFDekI7O0lBRUo7SUFDSSxxQkFBcUI7QUFDekI7O0lBRUk7UUFDSSxxQkFBcUI7SUFDekI7O0lBRUo7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7O0lBQ0k7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLCtCQUErQjtRQUMvQix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLDJCQUEyQjtJQUMvQjs7SUFFSjtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7SUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztJQUVJO1FBQ0ksY0FBYztJQUNsQjs7SUFHSjtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7SUFFSTtRQUNJLHlCQUF5QjtRQUN6QixhQUFhO1FBQ2IsaUNBQWlDO0lBQ3JDOztJQUdKO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25CIiwiZmlsZSI6InNyYy9hcHAvbm90ZWxpc3QvYXBwLm5vdGVsaXN0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAwIGJsYWNrLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCBibGFjaztcbiAgICBmb250LWZhbWlseTogUm9ib3RvOyBcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiAgICAuYnRuLnNlbGVjdGVkIHtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGRhcmtzbGF0ZWdyZXk7XG4gICAgfVxuXG4gICAgLmJ0bjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgfVxuXG4uY3JlYXRlQnV0dG9uIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xufVxuXG4uc2F2ZUJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGF3bmdyZWVuO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiAgICAuc2F2ZUJ1dHRvbi5zZWxlY3RlZCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbi5jYW5jZWxCdXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4gICAgLmNhbmNlbEJ1dHRvbi5zZWxlY3RlZCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbi5kZWxldGVCdXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuICAgIC5kZWxldGVCdXR0b24uc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgfVxuXG4ubm90ZWxpc3RDb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5ub3RlQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJvcmRlcjogMCBzb2xpZCAjMDA3QkZGO1xuICAgIGJvcmRlci13aWR0aDogMCA0cHggNHB4IDRweDtcbiAgICBtYXgtaGVpZ2h0OiA1NnB4O1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cztcbn1cbiAgICAubm90ZUNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDA3QkZGO1xuICAgIH1cblxuICAgIC5ub3RlQ29udGFpbmVyLnNlbGVjdGVkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlcjogMCBzb2xpZCBkYXJrYmx1ZTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHggMTA0cHggNnB4IDZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjdGOTtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cztcbiAgICB9XG5cbi5ib2R5OmhvdmVyOm5vdCguc2VsZWN0ZWQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGN0Y5O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiAgICAuYm9keS5zZWxlY3RlZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuXG4ubm90ZVRleHQge1xuICAgIHBhZGRpbmc6IDFweCAwIDAgMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn1cblxuICAgIC5ub3RlVGV4dC5zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY3Rjk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCBkYXJrYmx1ZTtcbiAgICB9XG5cblxuLm5vdGVEYXRlIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuICAgIC5ub3RlRGF0ZS5zZWxlY3RlZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY3Rjk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppNotelist, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'notelist',
            templateUrl: 'app.notelist.html',
            styleUrls: ['app.notelist.css'],
            providers: [_Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]]
          }]
        }], function () {
          return [{
            type: _Data_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }, {
            type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, {
          onChangedUserName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");

      var platform = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])();
      platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Repository\My-notes\Frontend\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map