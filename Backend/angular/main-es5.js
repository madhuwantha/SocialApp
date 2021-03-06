function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./auth/auth.module": "./src/app/auth/auth.module.ts"
    };

    function webpackAsyncContext(req) {
      return Promise.resolve().then(function () {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        var id = map[req];
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<app-heder></app-heder>\n<main>\n  <router-outlet></router-outlet>\n  <!--Read the postCreated event which is emitted in postCreateComponent -->\n  <!--  <app-post-create (postCreated)=\"onPostAdded($event)\"></app-post-create>-->\n  <!--  <app-post-list [post]=\"posts\"></app-post-list>-->\n\n  <!--use the dependancy injection with postService-->\n  <!--  <app-post-create></app-post-create>-->\n  <!--  <app-post-list></app-post-list>-->\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form *ngIf=\"!isLoading\" (ngSubmit)=\"onLogin(form)\" #form=\"ngForm\">\n    <mat-form-field>\n      <input\n        name=\"email\"\n        ngModel\n        matInput\n        type=\"email\"\n        placeholder=\"Email\"\n        #emailInput=\"ngModel\"\n        required\n        email\n      >\n      <mat-error *ngIf=\"emailInput.invalid\" >Please enter a valid Email</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input\n        name=\"password\"\n        ngModel\n        matInput\n        type=\"password\"\n        placeholder=\"password\"\n        #passwordInput=\"ngModel\"\n        required\n      >\n      <mat-error *ngIf=\"passwordInput.invalid\" >Please enter a valid password</mat-error>\n    </mat-form-field>\n    <button *ngIf=\"!isLoading\" color=\"accent\" type=\"submit\" mat-raised-button>Login</button>\n  </form>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form *ngIf=\"!isLoading\" (ngSubmit)=\"onSignUp(form)\" #form=\"ngForm\">\n    <mat-form-field>\n      <input\n        name=\"email\"\n        ngModel\n        matInput\n        type=\"email\"\n        placeholder=\"Email\"\n        #emailInput=\"ngModel\"\n        required\n        email\n      >\n      <mat-error *ngIf=\"emailInput.invalid\" >Please enter a valid Email</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input\n        name=\"password\"\n        ngModel\n        matInput\n        type=\"password\"\n        placeholder=\"password\"\n        #passwordInput=\"ngModel\"\n        required\n      >\n      <mat-error *ngIf=\"passwordInput.invalid\" >Please enter a valid password</mat-error>\n    </mat-form-field>\n    <button *ngIf=\"!isLoading\" color=\"accent\" type=\"submit\" mat-raised-button>Sign Up</button>\n  </form>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>An Error Occurred!</h1>\n<div mat-dialog-content>\n  <p class=\"mat-body-1\" mat-dialog-content>{{data.message}}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close=\"\">Okay</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/herder/heder.component.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/herder/heder.component.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHerderHederComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n\n    <span><a routerLink=\"/\">Posts</a></span>\n  <span class=\"spacer\"></span>\n    <ul>\n      <li *ngIf=\"userIsAuthenticated\">\n        <a\n          routerLinkActive=\"mat-accent\"\n          mat-button\n          routerLink=\"/create\"\n        >New Post\n        </a>\n      </li>\n      <li *ngIf=\"!userIsAuthenticated\">\n        <a\n          routerLinkActive=\"mat-accent\"\n          mat-button\n          routerLink=\"auth/login\"\n        >Login\n        </a>\n      </li>\n      <li *ngIf=\"!userIsAuthenticated\">\n        <a\n          routerLinkActive=\"mat-accent\"\n          mat-button\n          routerLink=\"auth/sign-up\"\n        >Sign Up\n        </a>\n      </li>\n      <li *ngIf=\"userIsAuthenticated\">\n        <button (click)=\"logOut()\" mat-button>Logout</button>\n      </li>\n    </ul>\n\n</mat-toolbar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-create/post-create.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-create/post-create.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostPostCreatePostCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form [formGroup]=\"form\" (submit)=\"SavePost()\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        placeholder=\"post Tittle\"\n        formControlName=\"title\"\n      >\n      <mat-error *ngIf=\"form.get('title').invalid\">Please enter the title of post</mat-error>\n    </mat-form-field>\n    <div>\n      <button type=\"button\"\n              mat-stroked-button (click)=\"postImage.click()\"\n      >Pick Image</button>\n      <input type=\"file\" (change)=\"onFilePicked($event)\" #postImage>\n    </div>\n    <div class=\"img-preview\" *ngIf=\"isURLok && form.get('image').valid\">\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\n    </div>\n\n    <mat-form-field>\n        <textarea\n          placeholder=\"Post Content\"\n          matInput\n          rows=\"4\"\n          formControlName=\"content\"\n        ></textarea>\n      <mat-error *ngIf=\"form.get('content').invalid\">Please enter the content of post</mat-error>\n    </mat-form-field>\n    <button type=\"submit\" mat-raised-button>Save Post</button>\n  </form>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-list/post-list.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-list/post-list.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostPostListPostListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n<mat-accordion multi=\"true\" *ngIf=\"post.length > 0 && !isLoading\">\n  <mat-expansion-panel *ngFor=\"let p of post\">\n    <mat-expansion-panel-header>\n      {{p.title}}\n    </mat-expansion-panel-header>\n    <div class=\"post-img\">\n      <img [src]=\"p.imagePath\" [alt]=\"p.title\">\n    </div>\n    <p>{{p.content}}</p>\n    <mat-action-row *ngIf=\"userIsAuthenticated && userId == p.creator\">\n      <a [routerLink]=\"['edit',p.id]\" mat-raised-button color=\"primary\">EDIT</a>\n      <button mat-raised-button color=\"warn\" (click)=\"onDelete(p.id)\">DELETE</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n</mat-accordion>\n<mat-paginator [length]=\"totalPosts\"\n               [pageSize]=\"postsPerPage\"\n               [pageSizeOptions]=\"pageSizeOptions\"\n               (page)=\"onChangePage($event)\"\n               *ngIf=\"post.length > 0\"\n  ></mat-paginator>\n<p class=\"mat-body-1 no-post\" *ngIf=\"post.length <= 0 && !isLoading\">No post yet!</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/angular-material.module.ts":
  /*!********************************************!*\
    !*** ./src/app/angular-material.module.ts ***!
    \********************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AngularMaterialModule = function AngularMaterialModule() {
      _classCallCheck(this, AngularMaterialModule);
    };

    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]]
    })], AngularMaterialModule);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./post/post-list/post-list.component */
    "./src/app/post/post-list/post-list.component.ts");
    /* harmony import */


    var _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./post/post-create/post-create.component */
    "./src/app/post/post-create/post-create.component.ts");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/auth.guard */
    "./src/app/services/auth.guard.ts");

    var routes = [{
      path: '',
      component: _post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__["PostListComponent"]
    }, {
      path: 'create',
      component: _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'edit/:postId',
      component: _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "main{\n  width: 60%;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IGF1dG87XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = 'SosialApp';
        this.posts = [];
      }

      _createClass(AppComponent, [{
        key: "onPostAdded",
        value: function onPostAdded(post) {
          this.posts.push(post);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.autoAuthUser();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _herder_heder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./herder/heder.component */
    "./src/app/herder/heder.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _services_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/auth/auth-interceptor */
    "./src/app/services/auth/auth-interceptor.ts");
    /* harmony import */


    var _error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./error-interceptor */
    "./src/app/error-interceptor.ts");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _post_post_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./post/post.module */
    "./src/app/post/post.module.ts");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts"); // components
    // form angular


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _herder_heder_component__WEBPACK_IMPORTED_MODULE_7__["HederComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_11__["AngularMaterialModule"], _post_post_module__WEBPACK_IMPORTED_MODULE_12__["PostModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_13__["AuthModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _services_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'sign-up',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/auth/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card{\n  margin-top: 1rem;\n}\nmat-form-field, textarea{\n  width: 100%;\n}\nmat-spinner{\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxubWF0LWZvcm0tZmllbGQsIHRleHRhcmVhe1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LXNwaW5uZXJ7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authSevice) {
        _classCallCheck(this, LoginComponent);

        this.authSevice = authSevice;
        this.isLoading = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authStatusSub = this.authSevice.getAuthStatusListener().subscribe(function (authStatus) {
            _this.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authStatusSub.unsubscribe();
        }
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          this.isLoading = true;
          this.authSevice.login(form.value.email, form.value.password);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/auth/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/auth/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card{\n  margin-top: 1rem;\n}\nmat-form-field, textarea{\n  width: 100%;\n}\nmat-spinner{\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbm1hdC1mb3JtLWZpZWxkLCB0ZXh0YXJlYXtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1zcGlubmVye1xuICBtYXJnaW46IGF1dG87XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(authSevice) {
        _classCallCheck(this, SignupComponent);

        this.authSevice = authSevice;
        this.isLoading = false;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.authStatusSub = this.authSevice.getAuthStatusListener().subscribe(function (authStatus) {
            _this2.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authStatusSub.unsubscribe();
        }
      }, {
        key: "onSignUp",
        value: function onSignUp(form) {
          this.isLoading = true;

          if (form.invalid) {
            return;
          }

          this.authSevice.createUser(form.value.email, form.value.password);
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/auth/signup/signup.component.css")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/error-interceptor.ts":
  /*!**************************************!*\
    !*** ./src/app/error-interceptor.ts ***!
    \**************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(dialog) {
        _classCallCheck(this, ErrorInterceptor);

        this.dialog = dialog;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this3 = this;

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            var errorMassage = 'An unknown error occurred!';

            if (error.error.message) {
              errorMassage = error.error.message;
            }

            _this3.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], {
              data: {
                message: errorMassage
              }
            });

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/error/error.component.css":
  /*!*******************************************!*\
    !*** ./src/app/error/error.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorErrorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent(data) {
        _classCallCheck(this, ErrorComponent);

        this.data = data;
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.css */
      "./src/app/error/error.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/herder/heder.component.css":
  /*!********************************************!*\
    !*** ./src/app/herder/heder.component.css ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHerderHederComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: white;\n}\n.spacer{\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\nul{\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\nul li{\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyZGVyL2hlZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBYztVQUFkLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9oZXJkZXIvaGVkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zcGFjZXJ7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG51bHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG51bCBsaXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/herder/heder.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/herder/heder.component.ts ***!
    \*******************************************/

  /*! exports provided: HederComponent */

  /***/
  function srcAppHerderHederComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HederComponent", function () {
      return HederComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var HederComponent =
    /*#__PURE__*/
    function () {
      function HederComponent(authService) {
        _classCallCheck(this, HederComponent);

        this.authService = authService;
        this.userIsAuthenticated = false;
      }

      _createClass(HederComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.userIsAuthenticated = this.authService.getIsAuth();
          this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
            _this4.userIsAuthenticated = isAuthenticated;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authListenerSubs.unsubscribe();
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.authService.logUot();
        }
      }]);

      return HederComponent;
    }();

    HederComponent.ctorParameters = function () {
      return [{
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HederComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-heder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./heder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/herder/heder.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./heder.component.css */
      "./src/app/herder/heder.component.css")).default]
    })], HederComponent);
    /***/
  },

  /***/
  "./src/app/post/post-create/mime-tyoe.validator.ts":
  /*!*********************************************************!*\
    !*** ./src/app/post/post-create/mime-tyoe.validator.ts ***!
    \*********************************************************/

  /*! exports provided: mimeType */

  /***/
  function srcAppPostPostCreateMimeTyoeValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mimeType", function () {
      return mimeType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var mimeType = function mimeType(control) {
      if (typeof control.value === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
      }

      var file = control.value;
      var fileReader = new FileReader();
      var frObs = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
        fileReader.addEventListener('loadend', function () {
          var arr = new Uint8Array(fileReader.result).subarray(0, 4);
          var header = '';
          var isValid = false; // tslint:disable-next-line:prefer-for-of

          for (var i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
          }

          switch (header) {
            case '89504e47':
              isValid = true;
              break;

            case 'ffd8ffe0':
            case 'ffd8ffe1':
            case 'ffd8ffe2':
            case 'ffd8ffe3':
            case 'ffd8ffe8':
              isValid = true;
              break;

            default:
              isValid = false; // Or you can use the blob.type as fallback

              break;
          }

          if (isValid) {
            observer.next(null);
          } else {
            observer.next({
              invalidMimeType: true
            });
          }

          observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
      });
      return frObs;
    };
    /***/

  },

  /***/
  "./src/app/post/post-create/post-create.component.css":
  /*!************************************************************!*\
    !*** ./src/app/post/post-create/post-create.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostPostCreatePostCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card{\n  margin-top: 1rem;\n}\n\nmat-form-field, textarea{\n  width: 100%;\n}\n\nmat-spinner{\n  margin: auto;\n}\n\ninput[type=\"file\"]{\n  visibility: hidden;\n}\n\n.img-preview{\n  height: 5rem;\n  margin: 1rem 0;\n}\n\n.img-preview img{\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxubWF0LWZvcm0tZmllbGQsIHRleHRhcmVhe1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LXNwaW5uZXJ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW5wdXRbdHlwZT1cImZpbGVcIl17XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmltZy1wcmV2aWV3e1xuICBoZWlnaHQ6IDVyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uaW1nLXByZXZpZXcgaW1ne1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/post/post-create/post-create.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/post/post-create/post-create.component.ts ***!
    \***********************************************************/

  /*! exports provided: PostCreateComponent */

  /***/
  function srcAppPostPostCreatePostCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function () {
      return PostCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_post_post_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/post/post-service.service */
    "./src/app/services/post/post-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _mime_tyoe_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mime-tyoe.validator */
    "./src/app/post/post-create/mime-tyoe.validator.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var PostCreateComponent =
    /*#__PURE__*/
    function () {
      function PostCreateComponent(postService, router, authService) {
        _classCallCheck(this, PostCreateComponent);

        this.postService = postService;
        this.router = router;
        this.authService = authService;
        this.mode = 'create';
        this.postId = '';
        this.isLoading = false;
        this.imagePreview = String;
        this.isURLok = false;
      }

      _createClass(PostCreateComponent, [{
        key: "SavePost",
        value: function SavePost() {
          if (!this.form.valid) {
            return;
          }

          this.isLoading = true; // using postServices ( dependency injecting)

          if (this.mode === 'create') {
            this.postService.addPost(this.form.value.title, this.form.value.content, this.form.value.image);
          } else {
            this.postService.updatePost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image);
          }

          this.form.reset();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.authStateSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this5.isLoading = false;
          });
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              asyncValidators: [_mime_tyoe_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]]
            })
          });
          this.router.paramMap.subscribe(function (paraMap) {
            if (paraMap.has('postId')) {
              _this5.mode = 'edit';
              _this5.postId = paraMap.get('postId');
              _this5.isLoading = true;

              _this5.postService.getOnePost(_this5.postId).subscribe(function (postData) {
                _this5.post = {
                  id: postData._id,
                  title: postData.title,
                  content: postData.content,
                  imagePath: postData.imagePath,
                  creator: postData.creator
                };

                _this5.form.setValue({
                  title: _this5.post.title,
                  content: _this5.post.content,
                  image: _this5.post.imagePath
                });
              });

              _this5.isLoading = false;
            } else {
              _this5.mode = 'create';
              _this5.postId = null;
            }
          });
        }
      }, {
        key: "onFilePicked",
        value: function onFilePicked(event) {
          var _this6 = this;

          this.isURLok = false;
          var file = event.target.files[0];
          this.form.patchValue({
            image: file
          });
          this.form.get('image').updateValueAndValidity();
          var reader = new FileReader();

          reader.onload = function () {
            _this6.imagePreview = reader.result;
          };

          reader.readAsDataURL(file);
          this.isURLok = true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authStateSub.unsubscribe();
        }
      }]);

      return PostCreateComponent;
    }();

    PostCreateComponent.ctorParameters = function () {
      return [{
        type: _services_post_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-create/post-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-create.component.css */
      "./src/app/post/post-create/post-create.component.css")).default]
    })], PostCreateComponent);
    /***/
  },

  /***/
  "./src/app/post/post-list/post-list.component.css":
  /*!********************************************************!*\
    !*** ./src/app/post/post-list/post-list.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostPostListPostListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host{\n  display: block;\n  margin-top: 1rem;\n}\n\nmat-expansion-panel{\n  margin-top: 3px;\n}\n\n.no-post{\n  text-align: center;\n}\n\nmat-spinner{\n  margin: auto;\n}\n\n.post-img{\n  width: 100%;\n}\n\n.post-img img{\n  width: 100%;\n  box-shadow: 1px 1px 5px rgba(0,0,0,0.5) ;\n}\n\nmat-paginator{\n  margin-top:1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWx7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLm5vLXBvc3R7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5tYXQtc3Bpbm5lcntcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucG9zdC1pbWd7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBvc3QtaW1nIGltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwwLDAsMC41KSA7XG59XG5cbm1hdC1wYWdpbmF0b3J7XG4gIG1hcmdpbi10b3A6MXJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/post/post-list/post-list.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/post/post-list/post-list.component.ts ***!
    \*******************************************************/

  /*! exports provided: PostListComponent */

  /***/
  function srcAppPostPostListPostListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostListComponent", function () {
      return PostListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_post_post_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/post/post-service.service */
    "./src/app/services/post/post-service.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var PostListComponent =
    /*#__PURE__*/
    function () {
      function PostListComponent(postService, authService) {
        _classCallCheck(this, PostListComponent);

        this.postService = postService;
        this.authService = authService; // property and event binding
        // @Input() post: Post[] = [];
        // using dependancy injection

        this.post = [];
        this.isLoading = false;
        this.totalPosts = 0;
        this.currentPage = 1;
        this.postsPerPage = 2;
        this.pageSizeOptions = [1, 2, 5, 10];
        this.userIsAuthenticated = false;
      }

      _createClass(PostListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.isLoading = true;
          this.postService.getPosts(this.postsPerPage, this.currentPage);
          this.userId = this.authService.getUserId();
          this.postService.getPostUpdateListener().subscribe(function (postData) {
            _this7.post = postData.post;
            _this7.totalPosts = postData.postCounter;
            _this7.isLoading = false;
          });
          this.userIsAuthenticated = this.authService.getIsAuth();
          this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
            _this7.userIsAuthenticated = isAuthenticated;
            _this7.userId = _this7.authService.getUserId();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.postSub != null) {
            this.postSub.unsubscribe();
          }

          this.authListenerSubs.unsubscribe();
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this8 = this;

          this.isLoading = true;
          this.postService.deletePost(id).subscribe(function () {
            _this8.postService.getPosts(_this8.postsPerPage, _this8.currentPage);
          }, function () {
            _this8.isLoading = false;
          });
        }
      }, {
        key: "onChangePage",
        value: function onChangePage(pageData) {
          this.isLoading = true;
          this.postsPerPage = pageData.pageSize;
          this.currentPage = pageData.pageIndex + 1;
          this.postService.getPosts(this.postsPerPage, this.currentPage);
        }
      }]);

      return PostListComponent;
    }();

    PostListComponent.ctorParameters = function () {
      return [{
        type: _services_post_post_service_service__WEBPACK_IMPORTED_MODULE_2__["PostServiceService"]
      }, {
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-list/post-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-list.component.css */
      "./src/app/post/post-list/post-list.component.css")).default]
    })], PostListComponent);
    /***/
  },

  /***/
  "./src/app/post/post.module.ts":
  /*!*************************************!*\
    !*** ./src/app/post/post.module.ts ***!
    \*************************************/

  /*! exports provided: PostModule */

  /***/
  function srcAppPostPostModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostModule", function () {
      return PostModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./post-create/post-create.component */
    "./src/app/post/post-create/post-create.component.ts");
    /* harmony import */


    var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./post-list/post-list.component */
    "./src/app/post/post-list/post-list.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PostModule = function PostModule() {
      _classCallCheck(this, PostModule);
    };

    PostModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__["PostCreateComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_4__["PostListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })], PostModule);
    /***/
  },

  /***/
  "./src/app/services/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/services/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var isAuth = this.authService.getIsAuth();

          if (!isAuth) {
            this.router.navigate(['/auth/login']);
          }

          return isAuth;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/auth/auth-interceptor.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/auth/auth-interceptor.ts ***!
    \***************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppServicesAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth/auth.service.ts");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authToken = this.authService.getToken();
          var authrequest = req.clone({
            headers: req.headers.set('authorization', 'Bearer ' + authToken)
          });
          return next.handle(authrequest);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/services/auth/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/auth/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/';

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(AuthService, [{
        key: "autoAuthUser",
        value: function autoAuthUser() {
          var authInformation = this.getAuthDate();

          if (authInformation == null) {
            return;
          }

          var now = new Date();
          var expiresIn = authInformation.expirationDate.getTime() - now.getTime();

          if (expiresIn > 0) {
            this.authtoken = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
          }
        } // tslint:disable-next-line:variable-name

      }, {
        key: "createUser",
        value: function createUser(emial, password_) {
          var _this9 = this;

          // tslint:disable-next-line:no-shadowed-variable
          var authData = {
            email: emial,
            password: password_
          };
          this.http.post(backendUrl + 'signup', authData).subscribe(function (res) {
            _this9.router.navigate(['/']);
          }, function (error) {
            _this9.authStatusListener.next(false);
          });
        } // tslint:disable-next-line:variable-name

      }, {
        key: "login",
        value: function login(emial, password_) {
          var _this10 = this;

          var authData = {
            email: emial,
            password: password_
          };
          this.http.post(backendUrl + '/login', authData).subscribe(function (res) {
            // console.log(res);
            if (res.token != null) {
              var expiresInDuration = res.expiresIn;

              _this10.setAuthTimer(expiresInDuration);

              _this10.authtoken = res.token;
              _this10.userId = res.userId;
              _this10.isAuthenticated = true;

              _this10.authStatusListener.next(true);

              var now = new Date();
              var expirationDate = new Date(now.getTime() + res.expiresIn * 1000); // console.log(expirationDate);

              _this10.saveAuthData(res.token, expirationDate, _this10.userId);

              _this10.router.navigate(['/']);
            }
          }, function (error) {
            _this10.authStatusListener.next(false);
          });
        }
      }, {
        key: "logUot",
        value: function logUot() {
          this.authtoken = null;
          this.userId = null;
          this.isAuthenticated = false;
          this.authStatusListener.next(false);
          clearTimeout(this.tokenTimer);
          this.clearAuthData();
          this.router.navigate(['/']);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.authtoken;
        }
      }, {
        key: "getAuthStatusListener",
        value: function getAuthStatusListener() {
          return this.authStatusListener.asObservable();
        }
      }, {
        key: "getIsAuth",
        value: function getIsAuth() {
          return this.isAuthenticated;
        }
      }, {
        key: "saveAuthData",
        value: function saveAuthData(token, expirationDate, userId) {
          localStorage.setItem('token', token);
          localStorage.setItem('expiration', expirationDate.toISOString());
          localStorage.setItem('userId', userId);
        }
      }, {
        key: "clearAuthData",
        value: function clearAuthData() {
          localStorage.removeItem('token');
          localStorage.removeItem('expiration');
          localStorage.removeItem('userId');
        }
      }, {
        key: "getAuthDate",
        value: function getAuthDate() {
          var tokenn = localStorage.getItem('token');
          var expirationDate = localStorage.getItem('expiration'); // tslint:disable-next-line:variable-name

          var userId_ = localStorage.getItem('userId');

          if (!tokenn || !expirationDate) {
            return;
          }

          return {
            token: tokenn,
            expirationDate: new Date(expirationDate),
            userId: userId_
          };
        }
      }, {
        key: "setAuthTimer",
        value: function setAuthTimer(duration) {
          var _this11 = this;

          this.tokenTimer = setTimeout(function () {
            _this11.logUot();
          }, duration * 1000);
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          return this.userId;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/post/post-service.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/post/post-service.service.ts ***!
    \*******************************************************/

  /*! exports provided: PostServiceService */

  /***/
  function srcAppServicesPostPostServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostServiceService", function () {
      return PostServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + 'post/';

    var PostServiceService =
    /*#__PURE__*/
    function () {
      function PostServiceService(http, router) {
        _classCallCheck(this, PostServiceService);

        this.http = http;
        this.router = router;
        this.posts = [];
        this.postUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(PostServiceService, [{
        key: "getOnePost",
        value: function getOnePost(id) {
          return this.http.get(backendUrl + id);
        }
      }, {
        key: "getPosts",
        value: function getPosts(postPerPage, currentPage) {
          var _this12 = this;

          var queryParams = "?pagesize=".concat(postPerPage, "&page=").concat(currentPage);
          this.http.get(backendUrl + queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return {
              post: postData.posts.map(function (post) {
                return {
                  title: post.title,
                  content: post.content,
                  id: post._id,
                  imagePath: post.imagePath,
                  creator: post.creator
                };
              }),
              maxPost: postData.maxPost
            };
          })).subscribe(function (transformedPosts) {
            _this12.posts = transformedPosts.post;

            _this12.postUpdated.next({
              post: _toConsumableArray(_this12.posts),
              postCounter: transformedPosts.maxPost
            });
          });
        }
      }, {
        key: "getPostUpdateListener",
        value: function getPostUpdateListener() {
          return this.postUpdated.asObservable();
        } // tslint:disable-next-line:variable-name

      }, {
        key: "addPost",
        value: function addPost(tittle, content_, image) {
          var _this13 = this;

          var postData = new FormData();
          postData.append('title', tittle);
          postData.append('content', content_);
          postData.append('image', image, tittle);
          this.http.post(backendUrl, postData).subscribe(function (res) {
            _this13.router.navigate(['/']);
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(id) {
          return this.http.delete(backendUrl + id);
        } // tslint:disable-next-line:variable-name

      }, {
        key: "updatePost",
        value: function updatePost(id, tittle, content_, image) {
          var _this14 = this;

          var postData;

          if (typeof image === 'object') {
            postData = new FormData();
            postData.append('id', id);
            postData.append('title', tittle);
            postData.append('content', content_);
            postData.append('image', image, tittle);
          } else {
            postData = {
              id: id,
              title: tittle,
              content: content_,
              imagePath: image,
              creator: null
            };
          }

          this.http.put(backendUrl + id, postData).subscribe(function (responce) {
            _this14.router.navigate(['/']);
          });
        }
      }]);

      return PostServiceService;
    }();

    PostServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    PostServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PostServiceService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:3000/api/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
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
    /*! /Project/mean/udemy/SosialApp/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map