webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/products/ProductSortingDropdown */ \"./components/products/ProductSortingDropdown.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\nvar dropdownOpenEvent = function dropdownOpenEvent() {\n  var dropdown = document.querySelector('.dropdown');\n  dropdown.addEventListener('click', function (event) {\n    event.stopPropagation();\n    dropdown.classList.toggle('is-active');\n  });\n  console.log('Dropdown: ', dropdown);\n};\n\nvar ProductsGrid = function ProductsGrid() {\n  _s();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    productsList: [],\n    loading: false\n  }),\n      _useState$ = _useState[0],\n      productsList = _useState$.productsList,\n      loading = _useState$.loading,\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState2[0],\n      setPage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(10),\n      limit = _useState3[0],\n      setLimit = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      sort = _useState4[0],\n      setSort = _useState4[1]; /// Effects\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setState({\n                  loading: true\n                });\n                Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[\"getProducts\"])({\n                  page: page,\n                  limit: limit,\n                  sort: sort\n                }).then(function (data) {\n                  setState({\n                    loading: false,\n                    productsList: data\n                  });\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchProducts() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                setState({\n                  loading: true\n                });\n                Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[\"getProducts\"])({\n                  page: page,\n                  limit: limit,\n                  sort: sort\n                }).then(function (data) {\n                  setLoading(false);\n                  setProductsList([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productsList), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)));\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function fetchProducts() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n  }, [page, limit, sort]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(dropdownOpenEvent, []);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title is-1 has-text-centered is-spaced\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(_components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    sort: sort,\n    callback: setSort,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, productsList.map(function (product, id) {\n    return __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 21\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      idx: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 25\n      }\n    })));\n  })), loading && __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 25\n    }\n  }));\n};\n\n_s(ProductsGrid, \"3JRr//kPBJhH9/5/YvFuizqvm3w=\");\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiZHJvcGRvd25PcGVuRXZlbnQiLCJkcm9wZG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9kdWN0c0dyaWQiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzTGlzdCIsImxvYWRpbmciLCJzZXRTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwibGltaXQiLCJzZXRMaW1pdCIsInNvcnQiLCJzZXRTb3J0IiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9kdWN0cyIsImdldFByb2R1Y3RzIiwidGhlbiIsImRhdGEiLCJzZXRMb2FkaW5nIiwic2V0UHJvZHVjdHNMaXN0IiwibWFwIiwicHJvZHVjdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM1QixNQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFmO0FBQ0FGLFVBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVUMsS0FBVixFQUFpQjtBQUNoREEsU0FBSyxDQUFDQyxlQUFOO0FBQ0FMLFlBQVEsQ0FBQ00sU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDSCxHQUhEO0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJULFFBQTFCO0FBQ0gsQ0FQRDs7QUFTQSxJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3ZCO0FBRHVCLGtCQUV1QkMsc0RBQVEsQ0FBQztBQUNuREMsZ0JBQVksRUFBRSxFQURx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ZDtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUF1QyxTQUFHLEVBQUVELE9BQU8sQ0FBQ0MsRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsd0VBQUQseUZBQWlCRCxPQUFqQjtBQUEwQixTQUFHLEVBQUVDLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FESixDQURjO0FBQUEsR0FBakIsQ0FETCxDQWJKLEVBcUJLakIsT0FBTyxJQUFJLE1BQUMsNkRBQUQ7QUFBVSxTQUFLLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCaEIsQ0FESjtBQXlCSCxDQS9ERDs7R0FBTUgsWTs7S0FBQUEsWTtBQWlFU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzR3JpZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0Q2FyZCc7XG5pbXBvcnQgUHJvZHVjdFNvcnRpbmdEcm9wZG93biBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdFNvcnRpbmdEcm9wZG93bic7XG5pbXBvcnQgeyBnZXRQcm9kdWN0cyB9IGZyb20gJ0AvYXBpL2luZGV4JztcblxuY29uc3QgZHJvcGRvd25PcGVuRXZlbnQgPSAoKSA9PiB7XG4gICAgdmFyIGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG4gICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bjogJywgZHJvcGRvd24pO1xufTtcblxuY29uc3QgUHJvZHVjdHNHcmlkID0gKCkgPT4ge1xuICAgIC8vLyBTdGF0ZVxuICAgIGNvbnN0IFt7IHByb2R1Y3RzTGlzdCwgbG9hZGluZyB9LCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHByb2R1Y3RzTGlzdDogW10sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSk7XG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZSgxMCk7XG4gICAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvLy8gRWZmZWN0c1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG5cbiAgICAgICAgICAgIGdldFByb2R1Y3RzKHsgcGFnZSwgbGltaXQsIHNvcnQgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHByb2R1Y3RzTGlzdDogZGF0YSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICBnZXRQcm9kdWN0cyh7IHBhZ2UsIGxpbWl0LCBzb3J0IH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRQcm9kdWN0c0xpc3QoWy4uLnByb2R1Y3RzTGlzdCwgLi4uZGF0YV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hQcm9kdWN0cygpO1xuICAgIH0sIFtwYWdlLCBsaW1pdCwgc29ydF0pO1xuXG4gICAgdXNlRWZmZWN0KGRyb3Bkb3duT3BlbkV2ZW50LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTEgaGFzLXRleHQtY2VudGVyZWQgaXMtc3BhY2VkXCI+UHJvZHVjdHMgR3JpZDwvaDE+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy0zIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgSGVyZSB5b3UmYXBvcztyZSBzdXJlIHRvIGZpbmQgYSBiYXJnYWluIG9uIHNvbWUgb2YgdGhlIGZpbmVzdCBhc2NpaSBhdmFpbGFibGUgdG9cbiAgICAgICAgICAgICAgICBwdXJjaGFzZS4gQmUgc3VyZSB0byBwZXJ1c2Ugb3VyIHNlbGVjdGlvbiBvZiBhc2NpaSBmYWNlcyBpbiBhbiBleGNpdGluZyByYW5nZSBvZlxuICAgICAgICAgICAgICAgIHNpemVzIGFuZCBwcmljZXMuXG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RTb3J0aW5nRHJvcGRvd24gc29ydD17c29ydH0gY2FsbGJhY2s9e3NldFNvcnR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy12Y2VudGVyZWQgbXQtNlwiPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0c0xpc3QubWFwKChwcm9kdWN0LCBpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtcXVhcnRlclwiIGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgey4uLnByb2R1Y3R9IGlkeD17aWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmIDxTa2VsZXRvbiBjb3VudD17NX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c0dyaWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})