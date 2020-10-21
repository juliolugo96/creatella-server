webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/products/ProductSortingDropdown */ \"./components/products/ProductSortingDropdown.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n/* harmony import */ var _components_products_functions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/products/functions.js */ \"./components/products/functions.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar ProductsGrid = function ProductsGrid() {\n  _s();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    productsList: [],\n    loading: false,\n    page: 1,\n    limit: 10,\n    isFinal: false\n  }),\n      _useState$ = _useState[0],\n      productsList = _useState$.productsList,\n      loading = _useState$.loading,\n      page = _useState$.page,\n      limit = _useState$.limit,\n      isFinal = _useState$.isFinal,\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      sort = _useState2[0],\n      setSort = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isBottom = _useState3[0],\n      setIsBottom = _useState3[1]; /// Handle scroll\n\n\n  var handleScroll = function handleScroll() {\n    var scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;\n    var scrollHeight = document.documentElement && document.documentElement.scrollHeight || document.body.scrollHeight;\n\n    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {\n      setIsBottom(true);\n    }\n  }; /// Refs\n\n\n  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(); /// Effects\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setState({\n                  productsList: productsList,\n                  page: page,\n                  limit: limit,\n                  isFinal: isFinal,\n                  loading: true\n                });\n                Object(_api_index__WEBPACK_IMPORTED_MODULE_7__[\"getProducts\"])({\n                  page: page,\n                  limit: limit,\n                  sort: sort\n                }).then(function (data) {\n                  setState({\n                    loading: false,\n                    productsList: data,\n                    page: page,\n                    limit: limit,\n                    isFinal: isFinal\n                  });\n                  mounted.current = true;\n                  window.addEventListener('scroll', function () {\n                    return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_8__[\"infiniteScroll\"])(handleScroll);\n                  });\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchProducts() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n    return function () {\n      return window.removeEventListener('scroll', handleScroll);\n    };\n  }, [sort]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var appendProducts = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (productsList.length !== 0) {\n                  setState({\n                    productsList: productsList,\n                    page: page,\n                    limit: limit,\n                    isFinal: isFinal,\n                    loading: true\n                  });\n                  Object(_api_index__WEBPACK_IMPORTED_MODULE_7__[\"getProducts\"])({\n                    page: page + 1,\n                    limit: limit,\n                    sort: sort\n                  }).then(function (data) {\n                    setState(function (prevState) {\n                      return {\n                        loading: false,\n                        productsList: prevState.productsList.concat(data),\n                        page: prevState.page + 1,\n                        limit: limit,\n                        isFinal: isFinal\n                      };\n                    });\n                    setIsBottom(false);\n                  });\n                }\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function appendProducts() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    isBottom && appendProducts();\n  }, [isBottom]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(dropdownOpenEvent, []);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title is-1 has-text-centered is-spaced\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, __jsx(_components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    sort: sort,\n    callback: setSort,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, productsList === null || productsList === void 0 ? void 0 : productsList.map(function (product, id) {\n    return __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 21\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      idx: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 25\n      }\n    })));\n  })), loading && __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 25\n    }\n  }));\n};\n\n_s(ProductsGrid, \"f6fNftI0O9IdjxhojKjAaeso2+k=\");\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiUHJvZHVjdHNHcmlkIiwidXNlU3RhdGUiLCJwcm9kdWN0c0xpc3QiLCJsb2FkaW5nIiwicGFnZSIsImxpbWl0IiwiaXNGaW5hbCIsInNldFN0YXRlIiwic29ydCIsInNldFNvcnQiLCJpc0JvdHRvbSIsInNldElzQm90dG9tIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5Iiwic2Nyb2xsSGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJtb3VudGVkIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9kdWN0cyIsImdldFByb2R1Y3RzIiwidGhlbiIsImRhdGEiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluZmluaXRlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFwcGVuZFByb2R1Y3RzIiwibGVuZ3RoIiwicHJldlN0YXRlIiwiY29uY2F0IiwiZHJvcGRvd25PcGVuRXZlbnQiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFDdkI7QUFEdUIsa0JBRTZDQyxzREFBUSxDQUFDO0FBQ3pFQyxnQkFBWSxFQUFFLEVBRDJEO0FBRXpFQyxXQUFPLEVBQUUsS0FGZ0U7QUFHekVDLFFBQUksRUFBRSxDQUhtRTtBQUl6RUMsU0FBSyxFQUFFLEVBSmtFO0FBS3pFQyxXQUFPLEVBQUU7QUFMZ0UsR0FBRCxDQUZyRDtBQUFBO0FBQUEsTUFFZEosWUFGYyxjQUVkQSxZQUZjO0FBQUEsTUFFQUMsT0FGQSxjQUVBQSxPQUZBO0FBQUEsTUFFU0MsSUFGVCxjQUVTQSxJQUZU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O0FBQXdCLFFBQUksRUFBRTNCLElBQTlCO0FBQW9DLFlBQVEsRUFBRUMsT0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBVEosRUFhSTtBQUFLLGFBQVMsRUFBQyx3Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tQLFlBREwsYUFDS0EsWUFETCx1QkFDS0EsWUFBWSxDQUFFa0MsR0FBZCxDQUFrQixVQUFDQyxPQUFELEVBQVVDLEVBQVY7QUFBQSxXQUNmO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQXVDLFNBQUcsRUFBRUQsT0FBTyxDQUFDQyxFQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx3RUFBRCx5RkFBaUJELE9BQWpCO0FBQTBCLFNBQUcsRUFBRUMsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURKLENBRGU7QUFBQSxHQUFsQixDQURMLENBYkosRUFxQktuQyxPQUFPLElBQUksTUFBQyw2REFBRDtBQUFVLFNBQUssRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJoQixDQURKO0FBeUJILENBMUZEOztHQUFNSCxZOztLQUFBQSxZO0FBNEZTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdHNHcmlkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdENhcmQnO1xuaW1wb3J0IFByb2R1Y3RTb3J0aW5nRHJvcGRvd24gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RTb3J0aW5nRHJvcGRvd24nO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHMgfSBmcm9tICdAL2FwaS9pbmRleCc7XG5pbXBvcnQgeyBpbmZpbml0ZVNjcm9sbCB9IGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9mdW5jdGlvbnMuanMnO1xuXG5cbmNvbnN0IFByb2R1Y3RzR3JpZCA9ICgpID0+IHtcbiAgICAvLy8gU3RhdGVcbiAgICBjb25zdCBbeyBwcm9kdWN0c0xpc3QsIGxvYWRpbmcsIHBhZ2UsIGxpbWl0LCBpc0ZpbmFsIH0sIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgcHJvZHVjdHNMaXN0OiBbXSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgaXNGaW5hbDogZmFsc2VcbiAgICB9KTtcbiAgICBjb25zdCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbaXNCb3R0b20sIHNldElzQm90dG9tXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vLyBIYW5kbGUgc2Nyb2xsXG5cbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9XG4gICAgICAgICAgICAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID1cbiAgICAgICAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCkgfHxcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICBpZiAoc2Nyb2xsVG9wICsgd2luZG93LmlubmVySGVpZ2h0ICsgNTAgPj0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgICAgICBzZXRJc0JvdHRvbSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLy8gUmVmc1xuICAgIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYoKTtcblxuICAgIC8vLyBFZmZlY3RzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlKHsgcHJvZHVjdHNMaXN0LCBwYWdlLCBsaW1pdCwgaXNGaW5hbCwgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGdldFByb2R1Y3RzKHsgcGFnZSwgbGltaXQsIHNvcnQgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHByb2R1Y3RzTGlzdDogZGF0YSwgcGFnZSwgbGltaXQsIGlzRmluYWwgfSk7XG4gICAgICAgICAgICAgICAgbW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4gaW5maW5pdGVTY3JvbGwoaGFuZGxlU2Nyb2xsKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaFByb2R1Y3RzKCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9LCBbc29ydF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYXBwZW5kUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdHNMaXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgcHJvZHVjdHNMaXN0LCBwYWdlLCBsaW1pdCwgaXNGaW5hbCwgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICBnZXRQcm9kdWN0cyh7IHBhZ2U6IHBhZ2UgKyAxLCBsaW1pdCwgc29ydCB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzTGlzdDogcHJldlN0YXRlLnByb2R1Y3RzTGlzdC5jb25jYXQoZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiBwcmV2U3RhdGUucGFnZSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRmluYWxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRJc0JvdHRvbShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlzQm90dG9tICYmIGFwcGVuZFByb2R1Y3RzKCk7XG4gICAgfSwgW2lzQm90dG9tXSk7XG5cbiAgICB1c2VFZmZlY3QoZHJvcGRvd25PcGVuRXZlbnQsIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtMSBoYXMtdGV4dC1jZW50ZXJlZCBpcy1zcGFjZWRcIj5Qcm9kdWN0cyBHcmlkPC9oMT5cblxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLTMgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICBIZXJlIHlvdSZhcG9zO3JlIHN1cmUgdG8gZmluZCBhIGJhcmdhaW4gb24gc29tZSBvZiB0aGUgZmluZXN0IGFzY2lpIGF2YWlsYWJsZSB0b1xuICAgICAgICAgICAgICAgIHB1cmNoYXNlLiBCZSBzdXJlIHRvIHBlcnVzZSBvdXIgc2VsZWN0aW9uIG9mIGFzY2lpIGZhY2VzIGluIGFuIGV4Y2l0aW5nIHJhbmdlIG9mXG4gICAgICAgICAgICAgICAgc2l6ZXMgYW5kIHByaWNlcy5cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdFNvcnRpbmdEcm9wZG93biBzb3J0PXtzb3J0fSBjYWxsYmFjaz17c2V0U29ydH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbXVsdGlsaW5lIGlzLXZjZW50ZXJlZCBtdC02XCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzTGlzdD8ubWFwKChwcm9kdWN0LCBpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtcXVhcnRlclwiIGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgey4uLnByb2R1Y3R9IGlkeD17aWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmIDxTa2VsZXRvbiBjb3VudD17NX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c0dyaWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})