webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/products/ProductSortingDropdown */ \"./components/products/ProductSortingDropdown.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\nvar dropdownOpenEvent = function dropdownOpenEvent() {\n  var dropdown = document.querySelector('.dropdown');\n  dropdown.addEventListener('click', function (event) {\n    event.stopPropagation();\n    dropdown.classList.toggle('is-active');\n  });\n  console.log('Dropdown: ', dropdown);\n};\n\nvar ProductsGrid = function ProductsGrid() {\n  _s();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    productsList: [],\n    loading: false\n  }),\n      _useState$ = _useState[0],\n      productsList = _useState$.productsList,\n      loading = _useState$.loading,\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState2[0],\n      setPage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(10),\n      limit = _useState3[0],\n      setLimit = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      sort = _useState4[0],\n      setSort = _useState4[1];\n\n  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(); /// Effects\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (!mounted.current) {}\n\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setState({\n                  loading: true\n                });\n                Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[\"getProducts\"])({\n                  page: page,\n                  limit: limit,\n                  sort: sort\n                }).then(function (data) {\n                  setState({\n                    loading: false,\n                    productsList: data\n                  });\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchProducts() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n  }, [sort]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                setState({\n                  loading: true\n                });\n                Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[\"getProducts\"])({\n                  page: page,\n                  limit: limit,\n                  sort: sort\n                }).then(function (data) {\n                  setState({\n                    productsList: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productsList), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)),\n                    loading: false\n                  });\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function fetchProducts() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n  }, [page, limit]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(dropdownOpenEvent, []);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title is-1 has-text-centered is-spaced\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, __jsx(_components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    sort: sort,\n    callback: setSort,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, productsList.map(function (product, id) {\n    return __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 21\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      idx: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 25\n      }\n    })));\n  })), loading && __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 25\n    }\n  }));\n};\n\n_s(ProductsGrid, \"G1G9yCZJWu7erjEEqsOQ/DuqpZ4=\");\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiZHJvcGRvd25PcGVuRXZlbnQiLCJkcm9wZG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9kdWN0c0dyaWQiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzTGlzdCIsImxvYWRpbmciLCJzZXRTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwibGltaXQiLCJzZXRMaW1pdCIsInNvcnQiLCJzZXRTb3J0IiwibW91bnRlZCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJmZXRjaFByb2R1Y3RzIiwiZ2V0UHJvZHVjdHMiLCJ0aGVuIiwiZGF0YSIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUIsTUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUNBRixVQUFRLENBQUNHLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVVDLEtBQVYsRUFBaUI7QUFDaERBLFNBQUssQ0FBQ0MsZUFBTjtBQUNBTCxZQUFRLENBQUNNLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLFdBQTFCO0FBQ0gsR0FIRDtBQUlBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCVCxRQUExQjtBQUNILENBUEQ7O0FBU0EsSUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN2QjtBQUR1QixrQkFFdUJDLHNEQUFRLENBQUM7QUFDbkRDLGdCQUFZLEVBQUUsRUFEcUM7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QUFLLGFBQVMsRUFBQyx3Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tSLFlBQVksQ0FBQ2lCLEdBQWIsQ0FBaUIsVUFBQ0MsT0FBRCxFQUFVQyxFQUFWO0FBQUEsV0FDZDtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUF1QyxTQUFHLEVBQUVELE9BQU8sQ0FBQ0MsRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsd0VBQUQseUZBQWlCRCxPQUFqQjtBQUEwQixTQUFHLEVBQUVDLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FESixDQURjO0FBQUEsR0FBakIsQ0FETCxDQWJKLEVBcUJLbEIsT0FBTyxJQUFJLE1BQUMsNkRBQUQ7QUFBVSxTQUFLLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCaEIsQ0FESjtBQXlCSCxDQXJFRDs7R0FBTUgsWTs7S0FBQUEsWTtBQXVFU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzR3JpZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RDYXJkJztcbmltcG9ydCBQcm9kdWN0U29ydGluZ0Ryb3Bkb3duIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duJztcbmltcG9ydCB7IGdldFByb2R1Y3RzIH0gZnJvbSAnQC9hcGkvaW5kZXgnO1xuXG5jb25zdCBkcm9wZG93bk9wZW5FdmVudCA9ICgpID0+IHtcbiAgICB2YXIgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duOiAnLCBkcm9wZG93bik7XG59O1xuXG5jb25zdCBQcm9kdWN0c0dyaWQgPSAoKSA9PiB7XG4gICAgLy8vIFN0YXRlXG4gICAgY29uc3QgW3sgcHJvZHVjdHNMaXN0LCBsb2FkaW5nIH0sIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgcHJvZHVjdHNMaXN0OiBbXSxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9KTtcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKDEwKTtcbiAgICBjb25zdCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBtb3VudGVkID0gdXNlUmVmKCk7XG5cbiAgICAvLy8gRWZmZWN0c1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBcbiAgICAgIFxuICAgICAgaWYgKCFtb3VudGVkLmN1cnJlbnQpIHsgXG5cbiAgICAgIH1cblxuICAgICAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICBnZXRQcm9kdWN0cyh7IHBhZ2UsIGxpbWl0LCBzb3J0IH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBwcm9kdWN0c0xpc3Q6IGRhdGEgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaFByb2R1Y3RzKCk7XG4gICAgfSwgW3NvcnRdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG5cbiAgICAgICAgICAgIGdldFByb2R1Y3RzKHsgcGFnZSwgbGltaXQsIHNvcnQgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgcHJvZHVjdHNMaXN0OiBbLi4ucHJvZHVjdHNMaXN0LCAuLi5kYXRhXSwgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaFByb2R1Y3RzKCk7XG4gICAgfSwgW3BhZ2UsIGxpbWl0XSk7XG5cbiAgICB1c2VFZmZlY3QoZHJvcGRvd25PcGVuRXZlbnQsIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtMSBoYXMtdGV4dC1jZW50ZXJlZCBpcy1zcGFjZWRcIj5Qcm9kdWN0cyBHcmlkPC9oMT5cblxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLTMgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICBIZXJlIHlvdSZhcG9zO3JlIHN1cmUgdG8gZmluZCBhIGJhcmdhaW4gb24gc29tZSBvZiB0aGUgZmluZXN0IGFzY2lpIGF2YWlsYWJsZSB0b1xuICAgICAgICAgICAgICAgIHB1cmNoYXNlLiBCZSBzdXJlIHRvIHBlcnVzZSBvdXIgc2VsZWN0aW9uIG9mIGFzY2lpIGZhY2VzIGluIGFuIGV4Y2l0aW5nIHJhbmdlIG9mXG4gICAgICAgICAgICAgICAgc2l6ZXMgYW5kIHByaWNlcy5cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdFNvcnRpbmdEcm9wZG93biBzb3J0PXtzb3J0fSBjYWxsYmFjaz17c2V0U29ydH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbXVsdGlsaW5lIGlzLXZjZW50ZXJlZCBtdC02XCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzTGlzdC5tYXAoKHByb2R1Y3QsIGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyXCIga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCB7Li4ucHJvZHVjdH0gaWR4PXtpZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2xvYWRpbmcgJiYgPFNrZWxldG9uIGNvdW50PXs1fSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzR3JpZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})