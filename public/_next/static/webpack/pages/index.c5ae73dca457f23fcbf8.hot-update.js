webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _components_products_ProductAd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/products/ProductAd */ \"./components/products/ProductAd.jsx\");\n/* harmony import */ var _components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/products/ProductSortingDropdown */ \"./components/products/ProductSortingDropdown.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n/* harmony import */ var _components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/products/functions.js */ \"./components/products/functions.js\");\n/* harmony import */ var _components_products_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/products/constants */ \"./components/products/constants.js\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar ProductsGrid = function ProductsGrid() {\n  _s();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    productsList: [],\n    loading: false,\n    page: 1,\n    prefetchPage: 2,\n    limit: _components_products_constants__WEBPACK_IMPORTED_MODULE_11__[\"FETCH_LIMIT\"],\n    isFinal: false\n  }),\n      _useState$ = _useState[0],\n      productsList = _useState$.productsList,\n      loading = _useState$.loading,\n      page = _useState$.page,\n      limit = _useState$.limit,\n      isFinal = _useState$.isFinal,\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      sort = _useState2[0],\n      setSort = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isBottom = _useState3[0],\n      setIsBottom = _useState3[1]; /// Refs\n\n\n  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(); /// Main fetching function\n\n  var fetch = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var sortOrMounted,\n          newPage,\n          data,\n          _args = arguments;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              sortOrMounted = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;\n              setState({\n                productsList: sortOrMounted ? [] : productsList,\n                page: page,\n                limit: limit,\n                isFinal: isFinal,\n                loading: true\n              });\n              newPage = sortOrMounted ? 1 : page + 1;\n              _context.next = 5;\n              return Object(_api_index__WEBPACK_IMPORTED_MODULE_9__[\"getProducts\"])({\n                page: newPage,\n                limit: limit,\n                sort: sort\n              });\n\n            case 5:\n              data = _context.sent;\n              setState(function (prevState) {\n                return {\n                  loading: false,\n                  productsList: sortOrMounted ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data) : prevState.productsList.concat(data),\n                  page: newPage,\n                  limit: limit,\n                  isFinal: data.length < limit\n                };\n              });\n              !mounted.current && window.addEventListener('scroll', function () {\n                return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"infiniteScroll\"])(function () {\n                  return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"handleScroll\"])(setIsBottom);\n                });\n              });\n              mounted.current = true;\n              setIsBottom(data.length < limit ? true : false);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetch() {\n      return _ref.apply(this, arguments);\n    };\n  }(); /// Effects\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    fetch(true);\n    return function () {\n      return window.removeEventListener('scroll', function () {\n        return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"infiniteScroll\"])(function () {\n          return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"handleScroll\"])(setIsBottom);\n        });\n      });\n    };\n  }, [sort]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    isBottom && fetch(false);\n  }, [isBottom]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"dropdownOpenEvent\"], []);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title has-text-centered is-spaced text-focus-in is-capitalized is-size-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered slide-in-fwd-center has-text-weight-light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(_components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    sort: sort,\n    callback: setSort,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, productsList === null || productsList === void 0 ? void 0 : productsList.slice(0, prefetchPage * limit).map(function (product, id) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 25\n      }\n    }, Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"willShowAd\"])(id) ? __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      className: \"card scale-in-left\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 37\n      }\n    }, __jsx(\"div\", {\n      className: \"card-image has-text-centered\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 41\n      }\n    }, __jsx(\"figure\", {\n      className: \"image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 45\n      }\n    }, __jsx(_components_products_ProductAd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 49\n      }\n    }))))) : null, __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 29\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 33\n      }\n    }))));\n  })), loading && !isFinal && __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 37\n    }\n  }), isFinal && !loading && __jsx(\"h1\", {\n    className: \"title is-one has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 17\n    }\n  }, \"End of the catalogue!\"));\n};\n\n_s(ProductsGrid, \"1SJH1Z+UvuDDt37sNMpGP44PvLc=\");\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiUHJvZHVjdHNHcmlkIiwidXNlU3RhdGUiLCJwcm9kdWN0c0xpc3QiLCJsb2FkaW5nIiwicGFnZSIsInByZWZldGNoUGFnZSIsImxpbWl0IiwiRkVUQ0hfTElNSVQiLCJpc0ZpbmFsIiwic2V0U3RhdGUiLCJzb3J0Iiwic2V0U29ydCIsImlzQm90dG9tIiwic2V0SXNCb3R0b20iLCJtb3VudGVkIiwidXNlUmVmIiwiZmV0Y2giLCJzb3J0T3JNb3VudGVkIiwibmV3UGFnZSIsImdldFByb2R1Y3RzIiwiZGF0YSIsInByZXZTdGF0ZSIsImNvbmNhdCIsImxlbmd0aCIsImN1cnJlbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5maW5pdGVTY3JvbGwiLCJoYW5kbGVTY3JvbGwiLCJ1c2VFZmZlY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZHJvcGRvd25PcGVuRXZlbnQiLCJzbGljZSIsIm1hcCIsInByb2R1Y3QiLCJpZCIsIndpbGxTaG93QWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN2QjtBQUR1QixrQkFFNkNDLHNEQUFRLENBQUM7QUFDekVDLGdCQUFZLEVBQUUsRUFEMkQ7QUFFekVDLFdBQU8sRUFBRSxLQUZnRTtBQUd6RUMsUUFBSSxFQUFFLENBSG1FO0FBSXpFQyxnQkFBWSxFQUFFLENBSjJEO0FBS3pFQyxTQUFLLEVBQUVDLDJFQUxrRTtBQU16RUMsV0FBTyxFQUFFO0FBTmdFLEdBQUQsQ0FGckQ7QUFBQTtBQUFBLE1BRWROLFlBRmMsY0FFZEEsWUFGYztBQUFBLE1BRUFDLE9BRkEsY0FFQUEsT0FGQTtBQUFBLE1BRVNDLElBRlQsY0FF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QUFBQSxNQURKLENBREosQ0FESixDQURKLENBREgsR0FVRyxJQVhSLEVBYUk7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBdUMsU0FBRyxFQUFFRCxPQUFPLENBQUNDLEVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdFQUFELHlGQUFpQkQsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURKLENBYkosQ0FESjtBQW1CSCxHQXBCQSxDQURMLENBZkosRUF1Q0svQixPQUFPLElBQUksQ0FBQ0ssT0FBWixJQUF1QixNQUFDLDZEQUFEO0FBQVUsU0FBSyxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QzVCLEVBd0NLQSxPQUFPLElBQUksQ0FBQ0wsT0FBWixJQUNHO0FBQUksYUFBUyxFQUFDLGdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBekNSLENBREo7QUE4Q0gsQ0F0R0Q7O0dBQU1ILFk7O0tBQUFBLFk7QUF3R1NBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdENhcmQnO1xuaW1wb3J0IFByb2R1Y3RBZCBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdEFkJztcbmltcG9ydCBQcm9kdWN0U29ydGluZ0Ryb3Bkb3duIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duJztcbmltcG9ydCB7IGdldFByb2R1Y3RzIH0gZnJvbSAnQC9hcGkvaW5kZXgnO1xuaW1wb3J0IHtcbiAgICBpbmZpbml0ZVNjcm9sbCxcbiAgICBkcm9wZG93bk9wZW5FdmVudCxcbiAgICB3aWxsU2hvd0FkLFxuICAgIGhhbmRsZVNjcm9sbFxufSBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvZnVuY3Rpb25zLmpzJztcbmltcG9ydCB7IEZFVENIX0xJTUlUIH0gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL2NvbnN0YW50cyc7XG5cbmNvbnN0IFByb2R1Y3RzR3JpZCA9ICgpID0+IHtcbiAgICAvLy8gU3RhdGVcbiAgICBjb25zdCBbeyBwcm9kdWN0c0xpc3QsIGxvYWRpbmcsIHBhZ2UsIGxpbWl0LCBpc0ZpbmFsIH0sIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgcHJvZHVjdHNMaXN0OiBbXSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHByZWZldGNoUGFnZTogMixcbiAgICAgICAgbGltaXQ6IEZFVENIX0xJTUlULFxuICAgICAgICBpc0ZpbmFsOiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtpc0JvdHRvbSwgc2V0SXNCb3R0b21dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8vIFJlZnNcbiAgICBjb25zdCBtb3VudGVkID0gdXNlUmVmKCk7XG5cbiAgICAvLy8gTWFpbiBmZXRjaGluZyBmdW5jdGlvblxuICAgIGNvbnN0IGZldGNoID0gYXN5bmMgKHNvcnRPck1vdW50ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBwcm9kdWN0c0xpc3Q6IHNvcnRPck1vdW50ZWQgPyBbXSA6IHByb2R1Y3RzTGlzdCxcbiAgICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIGlzRmluYWwsXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXdQYWdlID0gc29ydE9yTW91bnRlZCA/IDEgOiBwYWdlICsgMTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UHJvZHVjdHMoeyBwYWdlOiBuZXdQYWdlLCBsaW1pdCwgc29ydCB9KTtcbiAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcHJvZHVjdHNMaXN0OiBzb3J0T3JNb3VudGVkID8gWy4uLmRhdGFdIDogcHJldlN0YXRlLnByb2R1Y3RzTGlzdC5jb25jYXQoZGF0YSksXG4gICAgICAgICAgICBwYWdlOiBuZXdQYWdlLFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICBpc0ZpbmFsOiBkYXRhLmxlbmd0aCA8IGxpbWl0XG4gICAgICAgIH0pKTtcbiAgICAgICAgIW1vdW50ZWQuY3VycmVudCAmJlxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+XG4gICAgICAgICAgICAgICAgaW5maW5pdGVTY3JvbGwoKCkgPT4gaGFuZGxlU2Nyb2xsKHNldElzQm90dG9tKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIG1vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHNldElzQm90dG9tKGRhdGEubGVuZ3RoIDwgbGltaXQgPyB0cnVlIDogZmFsc2UpO1xuICAgIH07XG4gICAgLy8vIEVmZmVjdHNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaCh0cnVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT5cbiAgICAgICAgICAgICAgICBpbmZpbml0ZVNjcm9sbCgoKSA9PiBoYW5kbGVTY3JvbGwoc2V0SXNCb3R0b20pKVxuICAgICAgICAgICAgKTtcbiAgICB9LCBbc29ydF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaXNCb3R0b20gJiYgZmV0Y2goZmFsc2UpO1xuICAgIH0sIFtpc0JvdHRvbV0pO1xuXG4gICAgdXNlRWZmZWN0KGRyb3Bkb3duT3BlbkV2ZW50LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBoYXMtdGV4dC1jZW50ZXJlZCBpcy1zcGFjZWQgdGV4dC1mb2N1cy1pbiBpcy1jYXBpdGFsaXplZCBpcy1zaXplLTFcIj5cbiAgICAgICAgICAgICAgICBQcm9kdWN0cyBHcmlkXG4gICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtMyBoYXMtdGV4dC1jZW50ZXJlZCBzbGlkZS1pbi1md2QtY2VudGVyIGhhcy10ZXh0LXdlaWdodC1saWdodFwiPlxuICAgICAgICAgICAgICAgIEhlcmUgeW91JmFwb3M7cmUgc3VyZSB0byBmaW5kIGEgYmFyZ2FpbiBvbiBzb21lIG9mIHRoZSBmaW5lc3QgYXNjaWkgYXZhaWxhYmxlIHRvXG4gICAgICAgICAgICAgICAgcHVyY2hhc2UuIEJlIHN1cmUgdG8gcGVydXNlIG91ciBzZWxlY3Rpb24gb2YgYXNjaWkgZmFjZXMgaW4gYW4gZXhjaXRpbmcgcmFuZ2Ugb2ZcbiAgICAgICAgICAgICAgICBzaXplcyBhbmQgcHJpY2VzLlxuICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIDxQcm9kdWN0U29ydGluZ0Ryb3Bkb3duIHNvcnQ9e3NvcnR9IGNhbGxiYWNrPXtzZXRTb3J0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtdmNlbnRlcmVkIG10LTZcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdHNMaXN0Py5zbGljZSgwLCBwcmVmZXRjaFBhZ2UgKiBsaW1pdCkubWFwKChwcm9kdWN0LCBpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWxsU2hvd0FkKGlkKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzY2FsZS1pbi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0QWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtcXVhcnRlclwiIGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCB7Li4ucHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2xvYWRpbmcgJiYgIWlzRmluYWwgJiYgPFNrZWxldG9uIGNvdW50PXs1fSAvPn1cbiAgICAgICAgICAgIHtpc0ZpbmFsICYmICFsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtb25lIGhhcy10ZXh0LWNlbnRlcmVkXCI+RW5kIG9mIHRoZSBjYXRhbG9ndWUhPC9oMT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c0dyaWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})