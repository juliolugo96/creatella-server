webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _components_products_ProductAd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/products/ProductAd */ \"./components/products/ProductAd.jsx\");\n/* harmony import */ var _components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/products/ProductSortingDropdown */ \"./components/products/ProductSortingDropdown.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n/* harmony import */ var _components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/products/functions.js */ \"./components/products/functions.js\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ProductsGrid = function ProductsGrid() {\n  _s();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    productsList: [],\n    loading: false,\n    page: 1,\n    limit: 10,\n    isFinal: false\n  }),\n      _useState$ = _useState[0],\n      productsList = _useState$.productsList,\n      loading = _useState$.loading,\n      page = _useState$.page,\n      limit = _useState$.limit,\n      isFinal = _useState$.isFinal,\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      sort = _useState2[0],\n      setSort = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isBottom = _useState3[0],\n      setIsBottom = _useState3[1]; /// Handle scroll\n\n\n  var handleScroll = function handleScroll() {\n    var scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;\n    var scrollHeight = document.documentElement && document.documentElement.scrollHeight || document.body.scrollHeight;\n\n    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {\n      setIsBottom(true);\n    }\n  }; /// Refs\n\n\n  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(); /// Effects\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setState({\n                  productsList: productsList,\n                  page: page,\n                  limit: limit,\n                  isFinal: isFinal,\n                  loading: true\n                });\n                Object(_api_index__WEBPACK_IMPORTED_MODULE_9__[\"getProducts\"])({\n                  page: page,\n                  limit: limit,\n                  sort: sort\n                }).then(function (data) {\n                  setState({\n                    loading: false,\n                    productsList: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data),\n                    page: 1,\n                    limit: limit,\n                    isFinal: isFinal\n                  });\n                  !mounted.current && window.addEventListener('scroll', function () {\n                    return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"infiniteScroll\"])(handleScroll);\n                  });\n                  mounted.current = true;\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchProducts() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n    return function () {\n      return window.removeEventListener('scroll', function () {\n        return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"infiniteScroll\"])(handleScroll);\n      });\n    };\n  }, [sort]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var appendProducts = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (productsList.length !== 0) {\n                  setState({\n                    productsList: productsList,\n                    page: page,\n                    limit: limit,\n                    isFinal: isFinal,\n                    loading: true\n                  });\n                  Object(_api_index__WEBPACK_IMPORTED_MODULE_9__[\"getProducts\"])({\n                    page: page + 1,\n                    limit: limit,\n                    sort: sort\n                  }).then(function (data) {\n                    setState(function (prevState) {\n                      return {\n                        loading: false,\n                        productsList: prevState.productsList.concat(data),\n                        page: page + 1,\n                        limit: limit,\n                        isFinal: data.length === 0\n                      };\n                    });\n                    setIsBottom(false);\n                  });\n                }\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function appendProducts() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    isBottom && appendProducts();\n  }, [isBottom]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_10__[\"dropdownOpenEvent\"], []);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title is-1 has-text-centered is-spaced slide-in-fwd-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered slide-in-fwd-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  }, __jsx(_components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    sort: sort,\n    callback: setSort,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, productsList === null || productsList === void 0 ? void 0 : productsList.map(function (product, id) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 25\n      }\n    }, id % 20 === 0 ? __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      className: \"card scale-in-left\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 37\n      }\n    }, __jsx(\"div\", {\n      className: \"card-image has-text-centered\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 41\n      }\n    }, __jsx(\"figure\", {\n      className: \"image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 45\n      }\n    }, __jsx(_components_products_ProductAd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 49\n      }\n    }))))) : null, __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 29\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 33\n      }\n    }))));\n  })), loading && !isFinal && __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 37\n    }\n  }), isFinal && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, \" \"));\n};\n\n_s(ProductsGrid, \"f6fNftI0O9IdjxhojKjAaeso2+k=\");\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiUHJvZHVjdHNHcmlkIiwidXNlU3RhdGUiLCJwcm9kdWN0c0xpc3QiLCJsb2FkaW5nIiwicGFnZSIsImxpbWl0IiwiaXNGaW5hbCIsInNldFN0YXRlIiwic29ydCIsInNldFNvcnQiLCJpc0JvdHRvbSIsInNldElzQm90dG9tIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5Iiwic2Nyb2xsSGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJtb3VudGVkIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9kdWN0cyIsImdldFByb2R1Y3RzIiwidGhlbiIsImRhdGEiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluZmluaXRlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFwcGVuZFByb2R1Y3RzIiwibGVuZ3RoIiwicHJldlN0YXRlIiwiY29uY2F0IiwiZHJvcGRvd25PcGVuRXZlbnQiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN2QjtBQUR1QixrQkFFNkNDLHNEQUFRLENBQUM7QUFDekVDLGdCQUFZLEVBQUUsRUFEMkQ7QUFFekVDLFdBQU8sRUFBRSxLQUZnRTtBQUd6RUMsUUFBSSxFQUFFLENBSG1FO0FBSXpFQyxTQUFLLEVBQUUsRUFKa0U7QUFLekVDLFdBQU8sRUFBRTtBQUxnRSxHQUFELENBRnJEO0FBQUE7QUFBQSxNQUVkSixZQUZjLGNBRWRBLFlBRmM7QUFBQSxNQUVBQyxPQUZBLGNBRUFBLE9BRkE7QUFBQSxNQUVTQyxJQUZULGNB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURKLENBYkosQ0FESjtBQW1CSCxHQXBCQSxDQURMLENBZkosRUF1Q0tsQyxPQUFPLElBQUksQ0FBQ0csT0FBWixJQUF1QixNQUFDLDZEQUFEO0FBQVUsU0FBSyxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QzVCLEVBd0NLQSxPQUFPLElBQUksdUVBeENoQixDQURKO0FBNENILENBbkhEOztHQUFNTixZOztLQUFBQSxZO0FBcUhTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdHNHcmlkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RDYXJkJztcbmltcG9ydCBQcm9kdWN0QWQgZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RBZCc7XG5pbXBvcnQgUHJvZHVjdFNvcnRpbmdEcm9wZG93biBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdFNvcnRpbmdEcm9wZG93bic7XG5pbXBvcnQgeyBnZXRQcm9kdWN0cyB9IGZyb20gJ0AvYXBpL2luZGV4JztcbmltcG9ydCB7IGluZmluaXRlU2Nyb2xsLCBkcm9wZG93bk9wZW5FdmVudCB9IGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9mdW5jdGlvbnMuanMnO1xuXG5jb25zdCBQcm9kdWN0c0dyaWQgPSAoKSA9PiB7XG4gICAgLy8vIFN0YXRlXG4gICAgY29uc3QgW3sgcHJvZHVjdHNMaXN0LCBsb2FkaW5nLCBwYWdlLCBsaW1pdCwgaXNGaW5hbCB9LCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHByb2R1Y3RzTGlzdDogW10sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICAgIGlzRmluYWw6IGZhbHNlXG4gICAgfSk7XG4gICAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2lzQm90dG9tLCBzZXRJc0JvdHRvbV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLy8gSGFuZGxlIHNjcm9sbFxuXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPVxuICAgICAgICAgICAgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9XG4gICAgICAgICAgICAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcbiAgICAgICAgaWYgKHNjcm9sbFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCArIDUwID49IHNjcm9sbEhlaWdodCkge1xuICAgICAgICAgICAgc2V0SXNCb3R0b20odHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8vIFJlZnNcbiAgICBjb25zdCBtb3VudGVkID0gdXNlUmVmKCk7XG5cbiAgICAvLy8gRWZmZWN0c1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7IHByb2R1Y3RzTGlzdCwgcGFnZSwgbGltaXQsIGlzRmluYWwsIGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICBnZXRQcm9kdWN0cyh7IHBhZ2UsIGxpbWl0LCBzb3J0IH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c0xpc3Q6IFsuLi5kYXRhXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgICAgIGlzRmluYWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAhbW91bnRlZC5jdXJyZW50ICYmXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiBpbmZpbml0ZVNjcm9sbChoYW5kbGVTY3JvbGwpKTtcbiAgICAgICAgICAgICAgICBtb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiBpbmZpbml0ZVNjcm9sbChoYW5kbGVTY3JvbGwpKTtcbiAgICB9LCBbc29ydF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYXBwZW5kUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdHNMaXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgcHJvZHVjdHNMaXN0LCBwYWdlLCBsaW1pdCwgaXNGaW5hbCwgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICBnZXRQcm9kdWN0cyh7IHBhZ2U6IHBhZ2UgKyAxLCBsaW1pdCwgc29ydCB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzTGlzdDogcHJldlN0YXRlLnByb2R1Y3RzTGlzdC5jb25jYXQoZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYWdlICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGaW5hbDogZGF0YS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRJc0JvdHRvbShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlzQm90dG9tICYmIGFwcGVuZFByb2R1Y3RzKCk7XG4gICAgfSwgW2lzQm90dG9tXSk7XG5cbiAgICB1c2VFZmZlY3QoZHJvcGRvd25PcGVuRXZlbnQsIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtMSBoYXMtdGV4dC1jZW50ZXJlZCBpcy1zcGFjZWQgc2xpZGUtaW4tZndkLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIFByb2R1Y3RzIEdyaWRcbiAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy0zIGhhcy10ZXh0LWNlbnRlcmVkIHNsaWRlLWluLWZ3ZC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBIZXJlIHlvdSZhcG9zO3JlIHN1cmUgdG8gZmluZCBhIGJhcmdhaW4gb24gc29tZSBvZiB0aGUgZmluZXN0IGFzY2lpIGF2YWlsYWJsZSB0b1xuICAgICAgICAgICAgICAgIHB1cmNoYXNlLiBCZSBzdXJlIHRvIHBlcnVzZSBvdXIgc2VsZWN0aW9uIG9mIGFzY2lpIGZhY2VzIGluIGFuIGV4Y2l0aW5nIHJhbmdlIG9mXG4gICAgICAgICAgICAgICAgc2l6ZXMgYW5kIHByaWNlcy5cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdFNvcnRpbmdEcm9wZG93biBzb3J0PXtzb3J0fSBjYWxsYmFjaz17c2V0U29ydH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbXVsdGlsaW5lIGlzLXZjZW50ZXJlZCBtdC02XCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzTGlzdD8ubWFwKChwcm9kdWN0LCBpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZCAlIDIwID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtcXVhcnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNjYWxlLWluLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2UgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RBZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyXCIga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHsuLi5wcm9kdWN0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7bG9hZGluZyAmJiAhaXNGaW5hbCAmJiA8U2tlbGV0b24gY291bnQ9ezV9IC8+fVxuICAgICAgICAgICAge2lzRmluYWwgJiYgPD4gPC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNHcmlkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})