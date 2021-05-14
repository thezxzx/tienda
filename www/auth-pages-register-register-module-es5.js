(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-pages-register-register-module"], {
    /***/
    "/R7S":
    /*!********************************************************!*\
      !*** ./src/app/auth/pages/register/register.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function R7S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nform {\n  width: 50%;\n  margin: 0 auto;\n}\n\n.no-border {\n  --border-style: none;\n  --color: #3880ff;\n}\n\n.no-border a {\n  text-decoration: none;\n}\n\n.error {\n  --border-style: none;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxxQkFBQTtBQUNSOztBQUdBO0VBQ0ksb0JBQUE7RUFDQSxVQUFBO0FBQUoiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5uby1ib3JkZXIge1xuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIC0tY29sb3I6ICMzODgwZmY7XG5cbiAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbn1cblxuLmVycm9yIHtcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */";
      /***/
    },

    /***/
    "HQC2":
    /*!******************************************************!*\
      !*** ./src/app/auth/pages/register/register.page.ts ***!
      \******************************************************/

    /*! exports provided: RegisterPage */

    /***/
    function HQC2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.page.html */
      "Knpb");
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.page.scss */
      "/R7S");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/auth.service */
      "N/25");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_validator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/validator.service */
      "PZxA");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(formBuilder, menu, alertCtrl, router, authService, validatorService) {
          _classCallCheck(this, RegisterPage);

          this.formBuilder = formBuilder;
          this.menu = menu;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.authService = authService;
          this.validatorService = validatorService; // Patrones

          this.namePattern = '[a-zA-Z ]{3,50}';
          this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
          this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.namePattern)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.namePattern)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)]],
            password2: ['']
          }, {
            validators: [this.validatorService.camposIguales('password', 'password2')]
          });
          this.menu.enable(false, 'first');
        } // Mensajes de error del nombre.


        _createClass(RegisterPage, [{
          key: "nameErrorMsg",
          get: function get() {
            var _a;

            var errors = (_a = this.form.get('name')) === null || _a === void 0 ? void 0 : _a.errors;

            if (errors === null || errors === void 0 ? void 0 : errors.required) {
              return 'El nombre es obligatorio.';
            } else if (errors === null || errors === void 0 ? void 0 : errors.minlength) {
              return 'El nombre debe contener mínimo 3 caracteres.';
            } else if (errors === null || errors === void 0 ? void 0 : errors.pattern) {
              return 'El nombre no es válido.';
            }

            return '';
          } // Mensajes de error del apellido.

        }, {
          key: "lastNameErrorMsg",
          get: function get() {
            var _a;

            var errors = (_a = this.form.get('lastName')) === null || _a === void 0 ? void 0 : _a.errors;

            if (errors === null || errors === void 0 ? void 0 : errors.required) {
              return 'El apellido es obligatorio.';
            } else if (errors === null || errors === void 0 ? void 0 : errors.minlength) {
              return 'El apellido debe contener mínimo 3 caracteres.';
            } else if (errors === null || errors === void 0 ? void 0 : errors.pattern) {
              return 'El apellido no es válido';
            }

            return '';
          } // Mensajes de error del correo

        }, {
          key: "emailErrorMsg",
          get: function get() {
            var _a;

            var errors = (_a = this.form.get('email')) === null || _a === void 0 ? void 0 : _a.errors;

            if (errors === null || errors === void 0 ? void 0 : errors.required) {
              return 'El correo es obligatorio.';
            } else if (errors === null || errors === void 0 ? void 0 : errors.pattern) {
              return 'El formato del correo no es válido.';
            }

            return '';
          } // Mensajes de error del teléfono

        }, {
          key: "phoneErrorMsg",
          get: function get() {
            var _a;

            var errors = (_a = this.form.get('phone')) === null || _a === void 0 ? void 0 : _a.errors;

            if (errors === null || errors === void 0 ? void 0 : errors.required) {
              return 'El teléfono es obligatorio';
            } else if (errors === null || errors === void 0 ? void 0 : errors.minlength) {
              return 'El teléfono debe contener mínimio 8 caracteres.';
            } // TODO: Patrón.


            return '';
          } // Mensajes de error de la contraseña

        }, {
          key: "passwordErrorMsg",
          get: function get() {
            var _a;

            var errors = (_a = this.form.get('password')) === null || _a === void 0 ? void 0 : _a.errors;

            if (errors === null || errors === void 0 ? void 0 : errors.required) {
              return 'La contraseña es obligatoria.';
            } else if (errors === null || errors === void 0 ? void 0 : errors.minlength) {
              return 'La contraseña debe contener mínimo 6 caracteres.';
            } else if (errors === null || errors === void 0 ? void 0 : errors.maxlength) {
              return 'La contraseña debe contener máximo 20 caracteres.';
            }

            return '';
          } // Mensaje de error para confirmar la contraseña

        }, {
          key: "confirmPasswordErrorMsg",
          get: function get() {
            var _a;

            var errors = (_a = this.form.get('password2')) === null || _a === void 0 ? void 0 : _a.errors;

            if ((errors === null || errors === void 0 ? void 0 : errors.noIguales) !== false) {
              return 'Las contraseñas no son iguales.';
            }

            console.log(errors);
            return '';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {} // Registrar usuario.

        }, {
          key: "onRegister",
          value: function onRegister() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this$form$value, email, password, userForm, user, userData;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _this$form$value = this.form.value, email = _this$form$value.email, password = _this$form$value.password;
                      userForm = this.form.value;
                      delete userForm.password;
                      delete userForm.password2;
                      _context.prev = 4;

                      if (this.form.valid) {
                        _context.next = 8;
                        break;
                      }

                      this.form.markAllAsTouched();
                      return _context.abrupt("return");

                    case 8:
                      _context.next = 10;
                      return this.authService.registerWithEmailPassword(email, password, userForm);

                    case 10:
                      user = _context.sent;

                      if (user) {
                        // Alerta para verificar correo
                        userData = {
                          name: this.form.get('name').value,
                          lastName: this.form.get('lastName').value,
                          email: this.form.get('email').value,
                          emailVerified: user.emailVerified,
                          phone: this.form.get('phone').value,
                          role: 'Empleado',
                          uid: user.uid
                        };
                        this.authService.addUser(userData);
                      }

                      _context.next = 17;
                      break;

                    case 14:
                      _context.prev = 14;
                      _context.t0 = _context["catch"](4);
                      console.log("🚀 ~ file: register.page.ts ~ line 40 ~ RegisterPage ~ onRegister ~ err", _context.t0);

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[4, 14]]);
            }));
          } // Mensajes de errores

        }, {
          key: "campoNoValido",
          value: function campoNoValido(campo) {
            var _a, _b;

            return ((_a = this.form.get(campo)) === null || _a === void 0 ? void 0 : _a.invalid) && ((_b = this.form.get(campo)) === null || _b === void 0 ? void 0 : _b.touched);
          } // Alerta de verificar correo.

        }, {
          key: "verifyEmailAlert",
          value: function verifyEmailAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: 'Registrado correctamente',
                        message: 'Verifique su correo',
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {
                            _this.router.navigate(['/login']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _services_validator_service__WEBPACK_IMPORTED_MODULE_8__["ValidatorService"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterPage);
      /***/
    },

    /***/
    "Knpb":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/register/register.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Knpb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Registrar usuario</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main\">\n    <form (ngSubmit)=\"onRegister()\" [formGroup]=\"form\">\n\n      <!-- Campo nombre -->\n      <ion-item>\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n      </ion-item>\n\n      <!-- Mensaje de error nombre -->\n      <ion-item class=\"error\" *ngIf=\" campoNoValido( 'name' ) \">\n        <ion-label>{{ nameErrorMsg }}</ion-label>\n      </ion-item>\n\n      <!-- Campo apellido -->\n      <ion-item>\n        <ion-label position=\"floating\">Apellido(s)</ion-label>\n        <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\n      </ion-item>\n\n      <!-- Mensaje de error apellido -->\n      <ion-item class=\"error\" *ngIf=\" campoNoValido( 'lastName' ) \">\n        <ion-label>{{ lastNameErrorMsg }}</ion-label>\n      </ion-item>\n      \n      <!-- Campo correo -->\n      <ion-item>\n        <ion-label position=\"floating\">Correo electrónico</ion-label>\n        <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n      </ion-item>\n\n      <!-- Mensaje de error correo -->\n      <ion-item class=\"error\" *ngIf=\" campoNoValido( 'email' ) \">\n        <ion-label>{{ emailErrorMsg }}</ion-label>\n      </ion-item>\n\n      <!-- Campo teléfono -->\n      <ion-item>\n        <ion-label position=\"floating\">Teléfono</ion-label>\n        <ion-input type=\"tel\" formControlName=\"phone\"></ion-input>\n      </ion-item>\n\n      <!-- Mensaje de error correo -->\n      <ion-item class=\"error\" *ngIf=\" campoNoValido( 'phone' ) \">\n        <ion-label>{{ phoneErrorMsg }}</ion-label>\n      </ion-item>\n\n      <!-- Campo contraseña -->\n      <ion-item>\n        <ion-label position=\"floating\">Contraseña</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n\n      <!-- Mensaje de error password -->\n      <ion-item class=\"error\" *ngIf=\" campoNoValido( 'password' ) \">\n        <ion-label>{{ passwordErrorMsg }}</ion-label>\n      </ion-item>\n\n      <!-- Campo confirmar contraseña -->\n      <ion-item>\n        <ion-label position=\"floating\">Confirmar contraseña</ion-label>\n        <ion-input type=\"password\" formControlName=\"password2\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"error\" *ngIf=\" campoNoValido( 'password2' ) \">\n        <ion-label>{{ confirmPasswordErrorMsg }}</ion-label>\n      </ion-item>\n      \n      \n      <div>\n        <ion-item class=\"no-border\">\n          <a routerLink=\"/login\">¿Ya tienes una cuenta, haz clic aqui?</a>\n        </ion-item>\n      </div>\n\n\n      <div class=\"form-button ion-margin-top\">\n        <ion-button expand=\"block\" type=\"submit\">\n          Registrarse\n        </ion-button>\n      </div>\n\n    </form>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "P0Ex":
    /*!****************************************************************!*\
      !*** ./src/app/auth/pages/register/register-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function P0Ex(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "HQC2");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "PZxA":
    /*!****************************************************!*\
      !*** ./src/app/auth/services/validator.service.ts ***!
      \****************************************************/

    /*! exports provided: ValidatorService */

    /***/
    function PZxA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidatorService", function () {
        return ValidatorService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ValidatorService = /*#__PURE__*/function () {
        function ValidatorService() {
          _classCallCheck(this, ValidatorService);
        }

        _createClass(ValidatorService, [{
          key: "camposIguales",
          value: function camposIguales(campo1, campo2) {
            return function (formGroup) {
              var _a, _b, _c, _d;

              var pass1 = (_a = formGroup.get(campo1)) === null || _a === void 0 ? void 0 : _a.value;
              var pass2 = (_b = formGroup.get(campo2)) === null || _b === void 0 ? void 0 : _b.value;

              if (pass1 !== pass2) {
                (_c = formGroup.get(campo2)) === null || _c === void 0 ? void 0 : _c.setErrors({
                  noIguales: true
                });
                return {
                  noIguales: true
                };
              }

              (_d = formGroup.get(campo2)) === null || _d === void 0 ? void 0 : _d.setErrors(null);
              return null;
            };
          }
        }]);

        return ValidatorService;
      }();

      ValidatorService.ctorParameters = function () {
        return [];
      };

      ValidatorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ValidatorService);
      /***/
    },

    /***/
    "jaOa":
    /*!********************************************************!*\
      !*** ./src/app/auth/pages/register/register.module.ts ***!
      \********************************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function jaOa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-routing.module */
      "P0Ex");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "HQC2");

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-pages-register-register-module-es5.js.map