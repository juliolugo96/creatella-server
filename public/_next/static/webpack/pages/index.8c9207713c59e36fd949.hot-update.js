webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _components_products_ProductAd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/products/ProductAd */ \"./components/products/ProductAd.jsx\");\n/* harmony import */ var _components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/products/ProductSortingDropdown */ \"./components/products/ProductSortingDropdown.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n/* harmony import */ var _components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/products/functions.js */ \"./components/products/functions.js\");\n/* harmony import */ var _components_products_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/products/constants */ \"./components/products/constants.js\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar ProductsGrid = function ProductsGrid() {\n  _s();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    productsList: [],\n    loading: true,\n    page: 1,\n    preFetchPage: 1,\n    limit: _components_products_constants__WEBPACK_IMPORTED_MODULE_11__[\"FETCH_LIMIT\"],\n    isFinal: false\n  }),\n      _useState$ = _useState[0],\n      productsList = _useState$.productsList,\n      loading = _useState$.loading,\n      page = _useState$.page,\n      limit = _useState$.limit,\n      isFinal = _useState$.isFinal,\n      preFetchPage = _useState$.preFetchPage,\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      sort = _useState2[0],\n      setSort = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isBottom = _useState3[0],\n      setIsBottom = _useState3[1]; /// Refs\n\n\n  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(); /// Main fetching function\n\n  var fetch = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var sortOrMounted,\n          newPage,\n          data,\n          _args = arguments;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              sortOrMounted = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;\n              newPage = sortOrMounted ? 1 : page + 1;\n              setState({\n                productsList: sortOrMounted ? [] : productsList,\n                page: newPage,\n                limit: limit,\n                isFinal: sortOrMounted ? false : preFetchPage * limit > productsList.length,\n                loading: true,\n                preFetchPage: newPage\n              });\n              _context.next = 5;\n              return Object(_api_index__WEBPACK_IMPORTED_MODULE_9__[\"getProducts\"])({\n                page: newPage,\n                limit: limit,\n                sort: sort\n              });\n\n            case 5:\n              data = _context.sent;\n              setState(function (prevState) {\n                return {\n                  productsList: sortOrMounted ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data) : prevState.productsList.concat(data),\n                  page: newPage,\n                  limit: limit,\n                  isFinal: sortOrMounted ? false : preFetchPage * limit > productsList.length,\n                  loading: false,\n                  preFetchPage: newPage\n                };\n              });\n              !mounted.current && window.addEventListener('scroll', function () {\n                return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"infiniteScroll\"])(function () {\n                  return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"handleScroll\"])(setIsBottom);\n                });\n              });\n              mounted.current = true;\n              setIsBottom(sortOrMounted ? false : preFetchPage * limit > productsList.length ? true : false);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetch() {\n      return _ref.apply(this, arguments);\n    };\n  }(); /// Effects\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    fetch(true);\n  }, [sort]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    isBottom && fetch(false);\n  }, [isBottom]);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(\"figure\", {\n    className: \"image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"\",\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  })), __jsx(\"h1\", {\n    className: \"title has-text-centered is-spaced text-focus-in is-size-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered slide-in-fwd-center has-text-weight-light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, __jsx(_components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    sort: sort,\n    callback: setSort,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, productsList === null || productsList === void 0 ? void 0 : productsList.slice(0, limit * preFetchPage).map(function (product, id) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 25\n      }\n    }, Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"willShowAd\"])(id) ? __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      className: \"card scale-in-left\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 37\n      }\n    }, __jsx(\"div\", {\n      className: \"card-image has-text-centered\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 41\n      }\n    }, __jsx(\"figure\", {\n      className: \"image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 45\n      }\n    }, __jsx(_components_products_ProductAd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 49\n      }\n    }))))) : null, __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 29\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 33\n      }\n    }))));\n  })), loading && !isFinal && __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 37\n    }\n  }), isFinal && !loading && __jsx(\"h1\", {\n    className: \"title is-one has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 17\n    }\n  }, \"~ end of catalogue ~\"));\n};\n\n_s(ProductsGrid, \"vgLQHQohOdbhOdqtN6KxXg/2mKI=\");\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiUHJvZHVjdHNHcmlkIiwidXNlU3RhdGUiLCJwcm9kdWN0c0xpc3QiLCJsb2FkaW5nIiwicGFnZSIsInByZUZldGNoUGFnZSIsImxpbWl0IiwiRkVUQ0hfTElNSVQiLCJpc0ZpbmFsIiwic2V0U3RhdGUiLCJzb3J0Iiwic2V0U29ydCIsImlzQm90dG9tIiwic2V0SXNCb3R0b20iLCJtb3VudGVkIiwidXNlUmVmIiwiZmV0Y2giLCJzb3J0T3JNb3VudGVkIiwibmV3UGFnZSIsImxlbmd0aCIsImdldFByb2R1Y3RzIiwiZGF0YSIsInByZXZTdGF0ZSIsImNvbmNhdCIsImN1cnJlbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5maW5pdGVTY3JvbGwiLCJoYW5kbGVTY3JvbGwiLCJ1c2VFZmZlY3QiLCJzbGljZSIsIm1hcCIsInByb2R1Y3QiLCJpZCIsIndpbGxTaG93QWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN2QjtBQUR1QixrQkFFMkRDLHNEQUFRLENBQUM7QUFDdkZDLGdCQUFZLEVBQUUsRUFEeUU7QUFFdkZDLFdBQU8sRUFBRSxJQUY4RTtBQUd2RkMsUUFBSSxFQUFFLENBSGlGO0FBSXZGQyxnQkFBWSxFQUFFLENBSnlFO0FBS3ZGQyxTQUFLLEVBQUVDLDJFQUxnRjtBQU12RkMsV0FBTyxFQUFFO0FBTjhFLEdBQUQsQ0FGbkU7QUFBQTtBQUFBLE1BRWROLFlBRmMsY0FFZEEsWUFGYztBQUFBLE1BRUFDLE9BRkEsY0FFQUEsT0FGQTtBQUFBLE1BRVNDLElBRlQsY0FFU0EsSUFGVDtBQUFBLE1BRWVFLEtBRmYsY0FFZUEsS0FGZjtBQUFBLE1B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O0FBQUE7QUFBQSxPQUNJO0FBQVEsZUFBUyxFQUFDLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLENBREosQ0FESixDQURILEdBVUcsSUFYUixFQWFJO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQXVDLFNBQUcsRUFBRUQsT0FBTyxDQUFDQyxFQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx3RUFBRCx5RkFBaUJELE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FESixDQWJKLENBREo7QUFtQkgsR0FwQkEsQ0FETCxDQW5CSixFQTJDSzdCLE9BQU8sSUFBSSxDQUFDSyxPQUFaLElBQXVCLE1BQUMsNkRBQUQ7QUFBVSxTQUFLLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNDNUIsRUE0Q0tBLE9BQU8sSUFBSSxDQUFDTCxPQUFaLElBQ0c7QUFBSSxhQUFTLEVBQUMsZ0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkE3Q1IsQ0FESjtBQWtESCxDQXhHRDs7R0FBTUgsWTs7S0FBQUEsWTtBQTBHU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzR3JpZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0Q2FyZCc7XG5pbXBvcnQgUHJvZHVjdEFkIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0QWQnO1xuaW1wb3J0IFByb2R1Y3RTb3J0aW5nRHJvcGRvd24gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RTb3J0aW5nRHJvcGRvd24nO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHMgfSBmcm9tICdAL2FwaS9pbmRleCc7XG5pbXBvcnQgeyBpbmZpbml0ZVNjcm9sbCwgd2lsbFNob3dBZCwgaGFuZGxlU2Nyb2xsIH0gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL2Z1bmN0aW9ucy5qcyc7XG5pbXBvcnQgeyBGRVRDSF9MSU1JVCB9IGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9jb25zdGFudHMnO1xuXG5jb25zdCBQcm9kdWN0c0dyaWQgPSAoKSA9PiB7XG4gICAgLy8vIFN0YXRlXG4gICAgY29uc3QgW3sgcHJvZHVjdHNMaXN0LCBsb2FkaW5nLCBwYWdlLCBsaW1pdCwgaXNGaW5hbCwgcHJlRmV0Y2hQYWdlIH0sIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgcHJvZHVjdHNMaXN0OiBbXSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgcHJlRmV0Y2hQYWdlOiAxLFxuICAgICAgICBsaW1pdDogRkVUQ0hfTElNSVQsXG4gICAgICAgIGlzRmluYWw6IGZhbHNlXG4gICAgfSk7XG4gICAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2lzQm90dG9tLCBzZXRJc0JvdHRvbV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLy8gUmVmc1xuICAgIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYoKTtcblxuICAgIC8vLyBNYWluIGZldGNoaW5nIGZ1bmN0aW9uXG4gICAgY29uc3QgZmV0Y2ggPSBhc3luYyAoc29ydE9yTW91bnRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhZ2UgPSBzb3J0T3JNb3VudGVkID8gMSA6IHBhZ2UgKyAxO1xuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBwcm9kdWN0c0xpc3Q6IHNvcnRPck1vdW50ZWQgPyBbXSA6IHByb2R1Y3RzTGlzdCxcbiAgICAgICAgICAgIHBhZ2U6IG5ld1BhZ2UsXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIGlzRmluYWw6IHNvcnRPck1vdW50ZWQgPyBmYWxzZSA6IHByZUZldGNoUGFnZSAqIGxpbWl0ID4gcHJvZHVjdHNMaXN0Lmxlbmd0aCxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBwcmVGZXRjaFBhZ2U6IG5ld1BhZ2VcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQcm9kdWN0cyh7IHBhZ2U6IG5ld1BhZ2UsIGxpbWl0LCBzb3J0IH0pO1xuICAgICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgcHJvZHVjdHNMaXN0OiBzb3J0T3JNb3VudGVkID8gWy4uLmRhdGFdIDogcHJldlN0YXRlLnByb2R1Y3RzTGlzdC5jb25jYXQoZGF0YSksXG4gICAgICAgICAgICBwYWdlOiBuZXdQYWdlLFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICBpc0ZpbmFsOiBzb3J0T3JNb3VudGVkID8gZmFsc2UgOiBwcmVGZXRjaFBhZ2UgKiBsaW1pdCA+IHByb2R1Y3RzTGlzdC5sZW5ndGgsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHByZUZldGNoUGFnZTogbmV3UGFnZVxuICAgICAgICB9KSk7XG4gICAgICAgICFtb3VudGVkLmN1cnJlbnQgJiZcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PlxuICAgICAgICAgICAgICAgIGluZmluaXRlU2Nyb2xsKCgpID0+IGhhbmRsZVNjcm9sbChzZXRJc0JvdHRvbSkpXG4gICAgICAgICAgICApO1xuICAgICAgICBtb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBzZXRJc0JvdHRvbShcbiAgICAgICAgICAgIHNvcnRPck1vdW50ZWQgPyBmYWxzZSA6IHByZUZldGNoUGFnZSAqIGxpbWl0ID4gcHJvZHVjdHNMaXN0Lmxlbmd0aCA/IHRydWUgOiBmYWxzZVxuICAgICAgICApO1xuICAgIH07XG4gICAgLy8vIEVmZmVjdHNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaCh0cnVlKTtcbiAgICB9LCBbc29ydF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaXNCb3R0b20gJiYgZmV0Y2goZmFsc2UpO1xuICAgIH0sIFtpc0JvdHRvbV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaGFzLXRleHQtY2VudGVyZWQgaXMtc3BhY2VkIHRleHQtZm9jdXMtaW4gaXMtc2l6ZS0xXCI+XG4gICAgICAgICAgICAgICAgUHJvZHVjdHMgR3JpZFxuICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLTMgaGFzLXRleHQtY2VudGVyZWQgc2xpZGUtaW4tZndkLWNlbnRlciBoYXMtdGV4dC13ZWlnaHQtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICBIZXJlIHlvdSZhcG9zO3JlIHN1cmUgdG8gZmluZCBhIGJhcmdhaW4gb24gc29tZSBvZiB0aGUgZmluZXN0IGFzY2lpIGF2YWlsYWJsZSB0b1xuICAgICAgICAgICAgICAgIHB1cmNoYXNlLiBCZSBzdXJlIHRvIHBlcnVzZSBvdXIgc2VsZWN0aW9uIG9mIGFzY2lpIGZhY2VzIGluIGFuIGV4Y2l0aW5nIHJhbmdlIG9mXG4gICAgICAgICAgICAgICAgc2l6ZXMgYW5kIHByaWNlcy5cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdFNvcnRpbmdEcm9wZG93biBzb3J0PXtzb3J0fSBjYWxsYmFjaz17c2V0U29ydH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbXVsdGlsaW5lIGlzLXZjZW50ZXJlZCBtdC02XCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzTGlzdD8uc2xpY2UoMCwgbGltaXQgKiBwcmVGZXRjaFBhZ2UpLm1hcCgocHJvZHVjdCwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lsbFNob3dBZChpZCkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2NhbGUtaW4tbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZSBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEFkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXJcIiBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgey4uLnByb2R1Y3R9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmICFpc0ZpbmFsICYmIDxTa2VsZXRvbiBjb3VudD17NX0gLz59XG4gICAgICAgICAgICB7aXNGaW5hbCAmJiAhbG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLW9uZSBoYXMtdGV4dC1jZW50ZXJlZFwiPn4gZW5kIG9mIGNhdGFsb2d1ZSB+PC9oMT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c0dyaWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})