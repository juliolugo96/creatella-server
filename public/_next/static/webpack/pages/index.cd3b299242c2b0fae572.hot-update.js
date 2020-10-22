webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _components_products_ProductAd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/products/ProductAd */ \"./components/products/ProductAd.jsx\");\n/* harmony import */ var _components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/products/ProductSortingDropdown */ \"./components/products/ProductSortingDropdown.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n/* harmony import */ var _components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/products/functions.js */ \"./components/products/functions.js\");\n/* harmony import */ var _components_products_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/products/constants */ \"./components/products/constants.js\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar ProductsGrid = function ProductsGrid() {\n  _s();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    productsList: [],\n    loading: true,\n    page: 1,\n    preFetchPage: 1,\n    limit: _components_products_constants__WEBPACK_IMPORTED_MODULE_11__[\"FETCH_LIMIT\"],\n    isFinal: false\n  }),\n      _useState$ = _useState[0],\n      productsList = _useState$.productsList,\n      loading = _useState$.loading,\n      page = _useState$.page,\n      limit = _useState$.limit,\n      isFinal = _useState$.isFinal,\n      preFetchPage = _useState$.preFetchPage,\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      sort = _useState2[0],\n      setSort = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isBottom = _useState3[0],\n      setIsBottom = _useState3[1]; /// Refs\n\n\n  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(); /// Main fetching function\n\n  var fetch = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var sortOrMounted,\n          newPage,\n          data,\n          _args = arguments;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              sortOrMounted = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;\n              newPage = sortOrMounted ? 1 : page + 1;\n              setState({\n                productsList: sortOrMounted ? [] : productsList,\n                page: newPage,\n                limit: limit,\n                isFinal: sortOrMounted ? false : preFetchPage * limit > productsList.length,\n                loading: true,\n                preFetchPage: newPage\n              });\n              _context.next = 5;\n              return Object(_api_index__WEBPACK_IMPORTED_MODULE_9__[\"getProducts\"])({\n                page: newPage,\n                limit: limit,\n                sort: sort\n              });\n\n            case 5:\n              data = _context.sent;\n              setState(function (prevState) {\n                return {\n                  productsList: sortOrMounted ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data) : prevState.productsList.concat(data),\n                  page: newPage,\n                  limit: limit,\n                  isFinal: sortOrMounted ? false : preFetchPage * limit > productsList.length,\n                  loading: false,\n                  preFetchPage: newPage\n                };\n              });\n              !mounted.current && window.addEventListener('scroll', function () {\n                return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"infiniteScroll\"])(function () {\n                  return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"handleScroll\"])(setIsBottom);\n                });\n              });\n              mounted.current = true;\n              setIsBottom(sortOrMounted ? false : preFetchPage * limit > productsList.length ? true : false);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetch() {\n      return _ref.apply(this, arguments);\n    };\n  }(); /// Effects\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    fetch(true);\n  }, [sort]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    isBottom && fetch(false);\n  }, [isBottom]);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title has-text-centered is-spaced text-focus-in is-capitalized is-size-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered slide-in-fwd-center has-text-weight-light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, __jsx(_components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    sort: sort,\n    callback: setSort,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, productsList === null || productsList === void 0 ? void 0 : productsList.slice(0, limit * preFetchPage).map(function (product, id) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 25\n      }\n    }, Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"willShowAd\"])(id) ? __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      className: \"card scale-in-left\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 37\n      }\n    }, __jsx(\"div\", {\n      className: \"card-image has-text-centered\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 41\n      }\n    }, __jsx(\"figure\", {\n      className: \"image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 45\n      }\n    }, __jsx(_components_products_ProductAd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 49\n      }\n    }))))) : null, __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 29\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 33\n      }\n    }))));\n  })), loading && !isFinal && __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 37\n    }\n  }), isFinal && !loading && __jsx(\"h1\", {\n    className: \"title is-one has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 17\n    }\n  }, \"~ end of catalogue ~\"));\n};\n\n_s(ProductsGrid, \"vgLQHQohOdbhOdqtN6KxXg/2mKI=\");\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiUHJvZHVjdHNHcmlkIiwidXNlU3RhdGUiLCJwcm9kdWN0c0xpc3QiLCJsb2FkaW5nIiwicGFnZSIsInByZUZldGNoUGFnZSIsImxpbWl0IiwiRkVUQ0hfTElNSVQiLCJpc0ZpbmFsIiwic2V0U3RhdGUiLCJzb3J0Iiwic2V0U29ydCIsImlzQm90dG9tIiwic2V0SXNCb3R0b20iLCJtb3VudGVkIiwidXNlUmVmIiwiZmV0Y2giLCJzb3J0T3JNb3VudGVkIiwibmV3UGFnZSIsImxlbmd0aCIsImdldFByb2R1Y3RzIiwiZGF0YSIsInByZXZTdGF0ZSIsImNvbmNhdCIsImN1cnJlbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5maW5pdGVTY3JvbGwiLCJoYW5kbGVTY3JvbGwiLCJ1c2VFZmZlY3QiLCJzbGljZSIsIm1hcCIsInByb2R1Y3QiLCJpZCIsIndpbGxTaG93QWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN2QjtBQUR1QixrQkFFMkRDLHNEQUFRLENBQUM7QUFDdkZDLGdCQUFZLEVBQUUsRUFEeUU7QUFFdkZDLFdBQU8sRUFBRSxJQUY4RTtBQUd2RkMsUUFBSSxFQUFFLENBSGlGO0FBSXZGQyxnQkFBWSxFQUFFLENBSnlFO0FBS3ZGQyxTQUFLLEVBQUVDLDJFQUxnRjtBQU12RkMsV0FBTyxFQUFFO0FBTjhFLEdBQUQsQ0FGbkU7QUFBQTtBQUFBLE1BRWROLFlBRmMsY0FFZEEsWUFGYztBQUFBLE1BRUFDLE9BRkEsY0FFQUEsT0FGQTtBQUFBLE1BRVNDLElBRlQsY0FFU0EsSUFGVDtBQUFBLE1BRWVFLEtBRmYsY0FFZUEsS0FGZjtBQUFBLE1B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LElBWFIsRUFhSTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUF1QyxTQUFHLEVBQUVELE9BQU8sQ0FBQ0MsRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsd0VBQUQseUZBQWlCRCxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREosQ0FiSixDQURKO0FBbUJILEdBcEJBLENBREwsQ0FqQkosRUF5Q0s3QixPQUFPLElBQUksQ0FBQ0ssT0FBWixJQUF1QixNQUFDLDZEQUFEO0FBQVUsU0FBSyxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6QzVCLEVBMENLQSxPQUFPLElBQUksQ0FBQ0wsT0FBWixJQUNHO0FBQUksYUFBUyxFQUFDLGdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBM0NSLENBREo7QUFnREgsQ0F0R0Q7O0dBQU1ILFk7O0tBQUFBLFk7QUF3R1NBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdENhcmQnO1xuaW1wb3J0IFByb2R1Y3RBZCBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdEFkJztcbmltcG9ydCBQcm9kdWN0U29ydGluZ0Ryb3Bkb3duIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duJztcbmltcG9ydCB7IGdldFByb2R1Y3RzIH0gZnJvbSAnQC9hcGkvaW5kZXgnO1xuaW1wb3J0IHsgaW5maW5pdGVTY3JvbGwsIHdpbGxTaG93QWQsIGhhbmRsZVNjcm9sbCB9IGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9mdW5jdGlvbnMuanMnO1xuaW1wb3J0IHsgRkVUQ0hfTElNSVQgfSBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvY29uc3RhbnRzJztcblxuY29uc3QgUHJvZHVjdHNHcmlkID0gKCkgPT4ge1xuICAgIC8vLyBTdGF0ZVxuICAgIGNvbnN0IFt7IHByb2R1Y3RzTGlzdCwgbG9hZGluZywgcGFnZSwgbGltaXQsIGlzRmluYWwsIHByZUZldGNoUGFnZSB9LCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHByb2R1Y3RzTGlzdDogW10sXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHByZUZldGNoUGFnZTogMSxcbiAgICAgICAgbGltaXQ6IEZFVENIX0xJTUlULFxuICAgICAgICBpc0ZpbmFsOiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtpc0JvdHRvbSwgc2V0SXNCb3R0b21dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8vIFJlZnNcbiAgICBjb25zdCBtb3VudGVkID0gdXNlUmVmKCk7XG5cbiAgICAvLy8gTWFpbiBmZXRjaGluZyBmdW5jdGlvblxuICAgIGNvbnN0IGZldGNoID0gYXN5bmMgKHNvcnRPck1vdW50ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYWdlID0gc29ydE9yTW91bnRlZCA/IDEgOiBwYWdlICsgMTtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgcHJvZHVjdHNMaXN0OiBzb3J0T3JNb3VudGVkID8gW10gOiBwcm9kdWN0c0xpc3QsXG4gICAgICAgICAgICBwYWdlOiBuZXdQYWdlLFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICBpc0ZpbmFsOiBzb3J0T3JNb3VudGVkID8gZmFsc2UgOiBwcmVGZXRjaFBhZ2UgKiBsaW1pdCA+IHByb2R1Y3RzTGlzdC5sZW5ndGgsXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcHJlRmV0Y2hQYWdlOiBuZXdQYWdlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UHJvZHVjdHMoeyBwYWdlOiBuZXdQYWdlLCBsaW1pdCwgc29ydCB9KTtcbiAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIHByb2R1Y3RzTGlzdDogc29ydE9yTW91bnRlZCA/IFsuLi5kYXRhXSA6IHByZXZTdGF0ZS5wcm9kdWN0c0xpc3QuY29uY2F0KGRhdGEpLFxuICAgICAgICAgICAgcGFnZTogbmV3UGFnZSxcbiAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgaXNGaW5hbDogc29ydE9yTW91bnRlZCA/IGZhbHNlIDogcHJlRmV0Y2hQYWdlICogbGltaXQgPiBwcm9kdWN0c0xpc3QubGVuZ3RoLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBwcmVGZXRjaFBhZ2U6IG5ld1BhZ2VcbiAgICAgICAgfSkpO1xuICAgICAgICAhbW91bnRlZC5jdXJyZW50ICYmXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT5cbiAgICAgICAgICAgICAgICBpbmZpbml0ZVNjcm9sbCgoKSA9PiBoYW5kbGVTY3JvbGwoc2V0SXNCb3R0b20pKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgbW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgc2V0SXNCb3R0b20oXG4gICAgICAgICAgICBzb3J0T3JNb3VudGVkID8gZmFsc2UgOiBwcmVGZXRjaFBhZ2UgKiBsaW1pdCA+IHByb2R1Y3RzTGlzdC5sZW5ndGggPyB0cnVlIDogZmFsc2VcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIC8vLyBFZmZlY3RzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2godHJ1ZSk7XG4gICAgfSwgW3NvcnRdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlzQm90dG9tICYmIGZldGNoKGZhbHNlKTtcbiAgICB9LCBbaXNCb3R0b21dKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGhhcy10ZXh0LWNlbnRlcmVkIGlzLXNwYWNlZCB0ZXh0LWZvY3VzLWluIGlzLWNhcGl0YWxpemVkIGlzLXNpemUtMVwiPlxuICAgICAgICAgICAgICAgIFByb2R1Y3RzIEdyaWRcbiAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy0zIGhhcy10ZXh0LWNlbnRlcmVkIHNsaWRlLWluLWZ3ZC1jZW50ZXIgaGFzLXRleHQtd2VpZ2h0LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgSGVyZSB5b3UmYXBvcztyZSBzdXJlIHRvIGZpbmQgYSBiYXJnYWluIG9uIHNvbWUgb2YgdGhlIGZpbmVzdCBhc2NpaSBhdmFpbGFibGUgdG9cbiAgICAgICAgICAgICAgICBwdXJjaGFzZS4gQmUgc3VyZSB0byBwZXJ1c2Ugb3VyIHNlbGVjdGlvbiBvZiBhc2NpaSBmYWNlcyBpbiBhbiBleGNpdGluZyByYW5nZSBvZlxuICAgICAgICAgICAgICAgIHNpemVzIGFuZCBwcmljZXMuXG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RTb3J0aW5nRHJvcGRvd24gc29ydD17c29ydH0gY2FsbGJhY2s9e3NldFNvcnR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy12Y2VudGVyZWQgbXQtNlwiPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0c0xpc3Q/LnNsaWNlKDAsIGxpbWl0ICogcHJlRmV0Y2hQYWdlKS5tYXAoKHByb2R1Y3QsIGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpbGxTaG93QWQoaWQpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtcXVhcnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNjYWxlLWluLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2UgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RBZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyXCIga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHsuLi5wcm9kdWN0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7bG9hZGluZyAmJiAhaXNGaW5hbCAmJiA8U2tlbGV0b24gY291bnQ9ezV9IC8+fVxuICAgICAgICAgICAge2lzRmluYWwgJiYgIWxvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBpcy1vbmUgaGFzLXRleHQtY2VudGVyZWRcIj5+IGVuZCBvZiBjYXRhbG9ndWUgfjwvaDE+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNHcmlkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})