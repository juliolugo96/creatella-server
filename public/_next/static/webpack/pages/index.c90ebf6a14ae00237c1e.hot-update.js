webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _components_products_ProductAd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/products/ProductAd */ \"./components/products/ProductAd.jsx\");\n/* harmony import */ var _components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/products/ProductSortingDropdown */ \"./components/products/ProductSortingDropdown.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n/* harmony import */ var _components_products_functions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/products/functions.js */ \"./components/products/functions.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ProductsGrid = function ProductsGrid() {\n  _s();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    productsList: [],\n    loading: false,\n    page: 1,\n    limit: 10,\n    isFinal: false\n  }),\n      _useState$ = _useState[0],\n      productsList = _useState$.productsList,\n      loading = _useState$.loading,\n      page = _useState$.page,\n      limit = _useState$.limit,\n      isFinal = _useState$.isFinal,\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      sort = _useState2[0],\n      setSort = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isBottom = _useState3[0],\n      setIsBottom = _useState3[1]; /// Handle scroll\n\n\n  var handleScroll = function handleScroll() {\n    var scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;\n    var scrollHeight = document.documentElement && document.documentElement.scrollHeight || document.body.scrollHeight;\n\n    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {\n      setIsBottom(true);\n    }\n  }; /// Refs\n\n\n  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var fetch = function fetch() {\n    var sortOrMounted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    setState({\n      productsList: sortOrMounted ? [] : productsList,\n      page: page,\n      limit: limit,\n      isFinal: isFinal,\n      loading: true\n    });\n    var newPage = sortOrMounted ? 1 : page + 1;\n    Object(_api_index__WEBPACK_IMPORTED_MODULE_7__[\"getProducts\"])({\n      page: newPage,\n      limit: limit,\n      sort: sort\n    }).then(function (data) {\n      setState(function (prevState) {\n        return {\n          loading: false,\n          productsList: sortOrMounted ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data) : prevState.productsList.concat(data),\n          page: newPage,\n          limit: limit,\n          isFinal: data.length < limit\n        };\n      });\n      !mounted.current && window.addEventListener('scroll', function () {\n        return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_8__[\"infiniteScroll\"])(handleScroll);\n      });\n      mounted.current = true;\n      setIsBottom(data.length < limit ? true : false);\n    });\n  }; /// Effects\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    fetch(true);\n    return function () {\n      return window.removeEventListener('scroll', function () {\n        return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_8__[\"infiniteScroll\"])(handleScroll);\n      });\n    };\n  }, [sort]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    isBottom && fetch(false);\n  }, [isBottom]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_8__[\"dropdownOpenEvent\"], []);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title has-text-centered is-spaced text-focus-in is-capitalized is-size-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered slide-in-fwd-center has-text-weight-light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, __jsx(_components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    sort: sort,\n    callback: setSort,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }, productsList === null || productsList === void 0 ? void 0 : productsList.slice(0, page * limit).map(function (product, id) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 25\n      }\n    }, willShowAd ? __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      className: \"card scale-in-left\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 37\n      }\n    }, __jsx(\"div\", {\n      className: \"card-image has-text-centered\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 41\n      }\n    }, __jsx(\"figure\", {\n      className: \"image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 45\n      }\n    }, __jsx(_components_products_ProductAd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 49\n      }\n    }))))) : null, __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 29\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 33\n      }\n    }))));\n  })), loading && !isFinal && __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 37\n    }\n  }), isFinal && !loading && __jsx(\"h1\", {\n    className: \"title is-one has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 17\n    }\n  }, \"End of the catalogue!\"));\n};\n\n_s(ProductsGrid, \"f6fNftI0O9IdjxhojKjAaeso2+k=\");\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiUHJvZHVjdHNHcmlkIiwidXNlU3RhdGUiLCJwcm9kdWN0c0xpc3QiLCJsb2FkaW5nIiwicGFnZSIsImxpbWl0IiwiaXNGaW5hbCIsInNldFN0YXRlIiwic29ydCIsInNldFNvcnQiLCJpc0JvdHRvbSIsInNldElzQm90dG9tIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5Iiwic2Nyb2xsSGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJtb3VudGVkIiwidXNlUmVmIiwiZmV0Y2giLCJzb3J0T3JNb3VudGVkIiwibmV3UGFnZSIsImdldFByb2R1Y3RzIiwidGhlbiIsImRhdGEiLCJwcmV2U3RhdGUiLCJjb25jYXQiLCJsZW5ndGgiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluZmluaXRlU2Nyb2xsIiwidXNlRWZmZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyb3Bkb3duT3BlbkV2ZW50Iiwic2xpY2UiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJ3aWxsU2hvd0FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3ZCO0FBRHVCLGtCQUU2Q0Msc0RBQVEsQ0FBQztBQUN6RUMsZ0JBQVksRUFBRSxFQUQyRDtBQUV6RUMsV0FBTyxFQUFFLEtBRmdFO0FBR3pFQyxRQUFJLEVBQUUsQ0FIbUU7QUFJekVDLFNBQUssRUFBRSxFQUprRTtBQUt6RUMsV0FBTyxFQUFFO0FBTGdFLEdBQUQsQ0FGckQ7QUFBQTtBQUFBLE1BRWRKLFlBRmMsY0FFZEEsWUFGYztBQUFBLE1BRUFDLE9BRkEsY0FFQUEsT0FGQTtB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QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFRLGVBQVMsRUFBQyxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQURKLENBREosQ0FETyxHQVVQLElBWFIsRUFhSTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUF1QyxTQUFHLEVBQUVGLE9BQU8sQ0FBQ0MsRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsd0VBQUQseUZBQWlCRCxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREosQ0FiSixDQURKO0FBbUJILEdBcEJBLENBREwsQ0FmSixFQXVDS3BDLE9BQU8sSUFBSSxDQUFDRyxPQUFaLElBQXVCLE1BQUMsNkRBQUQ7QUFBVSxTQUFLLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZDNUIsRUF3Q0tBLE9BQU8sSUFBSSxDQUFDSCxPQUFaLElBQ0c7QUFBSSxhQUFTLEVBQUMsZ0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkF6Q1IsQ0FESjtBQThDSCxDQWhIRDs7R0FBTUgsWTs7S0FBQUEsWTtBQWtIU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzR3JpZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0Q2FyZCc7XG5pbXBvcnQgUHJvZHVjdEFkIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0QWQnO1xuaW1wb3J0IFByb2R1Y3RTb3J0aW5nRHJvcGRvd24gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RTb3J0aW5nRHJvcGRvd24nO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHMgfSBmcm9tICdAL2FwaS9pbmRleCc7XG5pbXBvcnQgeyBpbmZpbml0ZVNjcm9sbCwgZHJvcGRvd25PcGVuRXZlbnQgfSBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvZnVuY3Rpb25zLmpzJztcblxuY29uc3QgUHJvZHVjdHNHcmlkID0gKCkgPT4ge1xuICAgIC8vLyBTdGF0ZVxuICAgIGNvbnN0IFt7IHByb2R1Y3RzTGlzdCwgbG9hZGluZywgcGFnZSwgbGltaXQsIGlzRmluYWwgfSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgICAgICBwcm9kdWN0c0xpc3Q6IFtdLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICBpc0ZpbmFsOiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtpc0JvdHRvbSwgc2V0SXNCb3R0b21dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8vIEhhbmRsZSBzY3JvbGxcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID1cbiAgICAgICAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgfHxcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPVxuICAgICAgICAgICAgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIGlmIChzY3JvbGxUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKyA1MCA+PSBzY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICAgIHNldElzQm90dG9tKHRydWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vLyBSZWZzXG4gICAgY29uc3QgbW91bnRlZCA9IHVzZVJlZigpO1xuXG4gICAgY29uc3QgZmV0Y2ggPSAoc29ydE9yTW91bnRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIHByb2R1Y3RzTGlzdDogc29ydE9yTW91bnRlZCA/IFtdIDogcHJvZHVjdHNMaXN0LFxuICAgICAgICAgICAgcGFnZSxcbiAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgaXNGaW5hbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5ld1BhZ2UgPSBzb3J0T3JNb3VudGVkID8gMSA6IHBhZ2UgKyAxO1xuXG4gICAgICAgIGdldFByb2R1Y3RzKHsgcGFnZTogbmV3UGFnZSwgbGltaXQsIHNvcnQgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0c0xpc3Q6IHNvcnRPck1vdW50ZWQgPyBbLi4uZGF0YV0gOiBwcmV2U3RhdGUucHJvZHVjdHNMaXN0LmNvbmNhdChkYXRhKSxcbiAgICAgICAgICAgICAgICBwYWdlOiBuZXdQYWdlLFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICAgIGlzRmluYWw6IGRhdGEubGVuZ3RoIDwgbGltaXRcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICFtb3VudGVkLmN1cnJlbnQgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4gaW5maW5pdGVTY3JvbGwoaGFuZGxlU2Nyb2xsKSk7XG4gICAgICAgICAgICBtb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgc2V0SXNCb3R0b20oZGF0YS5sZW5ndGggPCBsaW1pdCA/IHRydWUgOiBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLy8gRWZmZWN0c1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKHRydWUpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IGluZmluaXRlU2Nyb2xsKGhhbmRsZVNjcm9sbCkpO1xuICAgIH0sIFtzb3J0XSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpc0JvdHRvbSAmJiBmZXRjaChmYWxzZSk7XG4gICAgfSwgW2lzQm90dG9tXSk7XG5cbiAgICB1c2VFZmZlY3QoZHJvcGRvd25PcGVuRXZlbnQsIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaGFzLXRleHQtY2VudGVyZWQgaXMtc3BhY2VkIHRleHQtZm9jdXMtaW4gaXMtY2FwaXRhbGl6ZWQgaXMtc2l6ZS0xXCI+XG4gICAgICAgICAgICAgICAgUHJvZHVjdHMgR3JpZFxuICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLTMgaGFzLXRleHQtY2VudGVyZWQgc2xpZGUtaW4tZndkLWNlbnRlciBoYXMtdGV4dC13ZWlnaHQtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICBIZXJlIHlvdSZhcG9zO3JlIHN1cmUgdG8gZmluZCBhIGJhcmdhaW4gb24gc29tZSBvZiB0aGUgZmluZXN0IGFzY2lpIGF2YWlsYWJsZSB0b1xuICAgICAgICAgICAgICAgIHB1cmNoYXNlLiBCZSBzdXJlIHRvIHBlcnVzZSBvdXIgc2VsZWN0aW9uIG9mIGFzY2lpIGZhY2VzIGluIGFuIGV4Y2l0aW5nIHJhbmdlIG9mXG4gICAgICAgICAgICAgICAgc2l6ZXMgYW5kIHByaWNlcy5cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdFNvcnRpbmdEcm9wZG93biBzb3J0PXtzb3J0fSBjYWxsYmFjaz17c2V0U29ydH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbXVsdGlsaW5lIGlzLXZjZW50ZXJlZCBtdC02XCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzTGlzdD8uc2xpY2UoMCwgcGFnZSAqIGxpbWl0KS5tYXAoKHByb2R1Y3QsIGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpbGxTaG93QWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2NhbGUtaW4tbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZSBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEFkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXJcIiBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgey4uLnByb2R1Y3R9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmICFpc0ZpbmFsICYmIDxTa2VsZXRvbiBjb3VudD17NX0gLz59XG4gICAgICAgICAgICB7aXNGaW5hbCAmJiAhbG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLW9uZSBoYXMtdGV4dC1jZW50ZXJlZFwiPkVuZCBvZiB0aGUgY2F0YWxvZ3VlITwvaDE+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNHcmlkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})