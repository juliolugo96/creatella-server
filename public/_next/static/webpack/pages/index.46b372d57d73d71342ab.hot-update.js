webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _components_products_ProductAd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/products/ProductAd */ \"./components/products/ProductAd.jsx\");\n/* harmony import */ var _components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/products/ProductSortingDropdown */ \"./components/products/ProductSortingDropdown.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n/* harmony import */ var _components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/products/functions.js */ \"./components/products/functions.js\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ProductsGrid = function ProductsGrid() {\n  _s();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    productsList: [],\n    loading: false,\n    page: 1,\n    limit: 10,\n    isFinal: false\n  }),\n      _useState$ = _useState[0],\n      productsList = _useState$.productsList,\n      loading = _useState$.loading,\n      page = _useState$.page,\n      limit = _useState$.limit,\n      isFinal = _useState$.isFinal,\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      sort = _useState2[0],\n      setSort = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isBottom = _useState3[0],\n      setIsBottom = _useState3[1]; /// Refs\n\n\n  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(); /// Effects\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setState({\n                  loading: true\n                });\n                Object(_api_index__WEBPACK_IMPORTED_MODULE_9__[\"getProducts\"])({\n                  page: 1,\n                  limit: limit,\n                  sort: sort\n                }).then(function (data) {\n                  setState({\n                    loading: false,\n                    productsList: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data),\n                    page: 1\n                  });\n                  !mounted.current && window.addEventListener('scroll', function () {\n                    return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"infiniteScroll\"])(function () {\n                      return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"handleScroll\"])(setIsBottom);\n                    });\n                  });\n                  mounted.current = true;\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchProducts() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n    return function () {\n      return window.removeEventListener('scroll', function () {\n        return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"infiniteScroll\"])(function () {\n          return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"handleScroll\"])(setIsBottom);\n        });\n      });\n    };\n  }, [sort]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var appendProducts = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (productsList.length !== 0) {\n                  setState({\n                    loading: true\n                  });\n                  Object(_api_index__WEBPACK_IMPORTED_MODULE_9__[\"getProducts\"])({\n                    page: page + 1,\n                    limit: limit,\n                    sort: sort\n                  }).then(function (data) {\n                    setState(function (prevState) {\n                      return {\n                        loading: false,\n                        productsList: prevState.productsList.concat(data),\n                        page: page + 1,\n                        isFinal: data.length < limit\n                      };\n                    });\n                    setIsBottom(data.length < limit ? true : false);\n                  });\n                }\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function appendProducts() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    isBottom && appendProducts();\n  }, [isBottom]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"dropdownOpenEvent\"], []);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title is-1 has-text-centered is-spaced slide-in-fwd-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered slide-in-fwd-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, __jsx(_components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    sort: sort,\n    callback: setSort,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, productsList === null || productsList === void 0 ? void 0 : productsList.slice(0, page * limit).map(function (product, id) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 25\n      }\n    }, id % 20 === 0 ? __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      className: \"card scale-in-left\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 37\n      }\n    }, __jsx(\"div\", {\n      className: \"card-image has-text-centered\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 41\n      }\n    }, __jsx(\"figure\", {\n      className: \"image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 45\n      }\n    }, __jsx(_components_products_ProductAd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 49\n      }\n    }))))) : null, __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 29\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 33\n      }\n    }))));\n  })), loading && !isFinal && __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 37\n    }\n  }), isFinal && !loading && __jsx(\"h1\", {\n    className: \"title is-one has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 17\n    }\n  }, \"End of the catalogue!\"));\n};\n\n_s(ProductsGrid, \"f6fNftI0O9IdjxhojKjAaeso2+k=\");\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiUHJvZHVjdHNHcmlkIiwidXNlU3RhdGUiLCJwcm9kdWN0c0xpc3QiLCJsb2FkaW5nIiwicGFnZSIsImxpbWl0IiwiaXNGaW5hbCIsInNldFN0YXRlIiwic29ydCIsInNldFNvcnQiLCJpc0JvdHRvbSIsInNldElzQm90dG9tIiwibW91bnRlZCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImZldGNoUHJvZHVjdHMiLCJnZXRQcm9kdWN0cyIsInRoZW4iLCJkYXRhIiwiY3VycmVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbmZpbml0ZVNjcm9sbCIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhcHBlbmRQcm9kdWN0cyIsImxlbmd0aCIsInByZXZTdGF0ZSIsImNvbmNhdCIsImRyb3Bkb3duT3BlbkV2ZW50Iiwic2xpY2UiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN2QjtBQUR1QixrQkFFNkNDLHNEQUFRLENBQUM7QUFDekVDLGdCQUFZLEVBQUUsRUFEMkQ7QUFFekVDLFdBQU8sRUFBRSxLQUZnRTtBQUd6RUMsUUFBSSxFQUFFLENBSG1FO0FBSXpFQyxTQUFLLEVBQUUsRUFKa0U7QUFLekVDLFdBQU8sRUFBRTtBQUxnRSxHQUFELENBRnJEO0FBQUE7QUFBQSxNQUVkSixZQUZjLGNBRWRBLFlBRmM7QUFBQSxNQUVBQyxPQUZBLGNBRUFBLE9BRkE7QUFBQSxNQUVTQyxJQUZULGNBRVNBLElBRlQ7QUFBQSxNQUVlQyxLQUZmLGNBRWVBLEtBRmY7QUFBQSxNQUVzQkMsT0FGdEIsY0FFc0JBLE9BRnRCO0FB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STtBQUFLLGVBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBUSxlQUFTLEVBQUMsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosQ0FESixDQURKLENBREgsR0FVRyxJQVhSLEVBYUk7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBdUMsU0FBRyxFQUFFRCxPQUFPLENBQUNDLEVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdFQUFELHlGQUFpQkQsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURKLENBYkosQ0FESjtBQW1CSCxHQXBCQSxDQURMLENBZkosRUF1Q0s3QixPQUFPLElBQUksQ0FBQ0csT0FBWixJQUF1QixNQUFDLDZEQUFEO0FBQVUsU0FBSyxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QzVCLEVBd0NLQSxPQUFPLElBQUksQ0FBQ0gsT0FBWixJQUNHO0FBQUksYUFBUyxFQUFDLGdDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBekNSLENBREo7QUE4Q0gsQ0F6R0Q7O0dBQU1ILFk7O0tBQUFBLFk7QUEyR1NBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdENhcmQnO1xuaW1wb3J0IFByb2R1Y3RBZCBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdEFkJztcbmltcG9ydCBQcm9kdWN0U29ydGluZ0Ryb3Bkb3duIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duJztcbmltcG9ydCB7IGdldFByb2R1Y3RzIH0gZnJvbSAnQC9hcGkvaW5kZXgnO1xuaW1wb3J0IHtcbiAgICBpbmZpbml0ZVNjcm9sbCxcbiAgICBkcm9wZG93bk9wZW5FdmVudCxcbiAgICBoYW5kbGVTY3JvbGxcbn0gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL2Z1bmN0aW9ucy5qcyc7XG5cbmNvbnN0IFByb2R1Y3RzR3JpZCA9ICgpID0+IHtcbiAgICAvLy8gU3RhdGVcbiAgICBjb25zdCBbeyBwcm9kdWN0c0xpc3QsIGxvYWRpbmcsIHBhZ2UsIGxpbWl0LCBpc0ZpbmFsIH0sIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgcHJvZHVjdHNMaXN0OiBbXSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgaXNGaW5hbDogZmFsc2VcbiAgICB9KTtcbiAgICBjb25zdCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbaXNCb3R0b20sIHNldElzQm90dG9tXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vLyBSZWZzXG4gICAgY29uc3QgbW91bnRlZCA9IHVzZVJlZigpO1xuXG4gICAgLy8vIEVmZmVjdHNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgZ2V0UHJvZHVjdHMoeyBwYWdlOiAxLCBsaW1pdCwgc29ydCB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHNMaXN0OiBbLi4uZGF0YV0sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAhbW91bnRlZC5jdXJyZW50ICYmXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVTY3JvbGwoKCkgPT4gaGFuZGxlU2Nyb2xsKHNldElzQm90dG9tKSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBtb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT5cbiAgICAgICAgICAgICAgICBpbmZpbml0ZVNjcm9sbCgoKSA9PiBoYW5kbGVTY3JvbGwoc2V0SXNCb3R0b20pKVxuICAgICAgICAgICAgKTtcbiAgICB9LCBbc29ydF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYXBwZW5kUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdHNMaXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICBnZXRQcm9kdWN0cyh7IHBhZ2U6IHBhZ2UgKyAxLCBsaW1pdCwgc29ydCB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzTGlzdDogcHJldlN0YXRlLnByb2R1Y3RzTGlzdC5jb25jYXQoZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYWdlICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRmluYWw6IGRhdGEubGVuZ3RoIDwgbGltaXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRJc0JvdHRvbShkYXRhLmxlbmd0aCA8IGxpbWl0ID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaXNCb3R0b20gJiYgYXBwZW5kUHJvZHVjdHMoKTtcbiAgICB9LCBbaXNCb3R0b21dKTtcblxuICAgIHVzZUVmZmVjdChkcm9wZG93bk9wZW5FdmVudCwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBpcy0xIGhhcy10ZXh0LWNlbnRlcmVkIGlzLXNwYWNlZCBzbGlkZS1pbi1md2QtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgUHJvZHVjdHMgR3JpZFxuICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLTMgaGFzLXRleHQtY2VudGVyZWQgc2xpZGUtaW4tZndkLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIEhlcmUgeW91JmFwb3M7cmUgc3VyZSB0byBmaW5kIGEgYmFyZ2FpbiBvbiBzb21lIG9mIHRoZSBmaW5lc3QgYXNjaWkgYXZhaWxhYmxlIHRvXG4gICAgICAgICAgICAgICAgcHVyY2hhc2UuIEJlIHN1cmUgdG8gcGVydXNlIG91ciBzZWxlY3Rpb24gb2YgYXNjaWkgZmFjZXMgaW4gYW4gZXhjaXRpbmcgcmFuZ2Ugb2ZcbiAgICAgICAgICAgICAgICBzaXplcyBhbmQgcHJpY2VzLlxuICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIDxQcm9kdWN0U29ydGluZ0Ryb3Bkb3duIHNvcnQ9e3NvcnR9IGNhbGxiYWNrPXtzZXRTb3J0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtdmNlbnRlcmVkIG10LTZcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdHNMaXN0Py5zbGljZSgwLCBwYWdlICogbGltaXQpLm1hcCgocHJvZHVjdCwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQgJSAyMCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzY2FsZS1pbi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0QWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtcXVhcnRlclwiIGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCB7Li4ucHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2xvYWRpbmcgJiYgIWlzRmluYWwgJiYgPFNrZWxldG9uIGNvdW50PXs1fSAvPn1cbiAgICAgICAgICAgIHtpc0ZpbmFsICYmICFsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtb25lIGhhcy10ZXh0LWNlbnRlcmVkXCI+RW5kIG9mIHRoZSBjYXRhbG9ndWUhPC9oMT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c0dyaWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})