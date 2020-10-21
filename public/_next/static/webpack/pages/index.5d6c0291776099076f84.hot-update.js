webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductSortingDropdown.jsx":
/*!********************************************************!*\
  !*** ./components/products/ProductSortingDropdown.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_products_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/products/constants */ \"./components/products/constants.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/products/ProductSortingDropdown.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar ProductSortingDropdown = function ProductSortingDropdown(_ref) {\n  var sort = _ref.sort,\n      callback = _ref.callback;\n  return __jsx(\"div\", {\n    className: \"dropdown\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"dropdown-trigger\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    className: \"button is-light\",\n    \"aria-haspopup\": \"true\",\n    \"aria-controls\": \"dropdown-menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 17\n    }\n  }, \"Sort by: \", sort, \" \"))), __jsx(\"div\", {\n    className: \"dropdown-menu\",\n    id: \"dropdown-menu\",\n    role: \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"dropdown-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, _components_products_constants__WEBPACK_IMPORTED_MODULE_1__[\"DROPDOWN_ITEMS\"].map(function (name, id) {\n    return __jsx(\"p\", {\n      className: \"dropdown-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 21\n      }\n    }, \"Dropdown item\");\n  }), __jsx(\"a\", {\n    className: \"dropdown-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, \"Other dropdown item\"), __jsx(\"a\", {\n    href: \"#\",\n    className: \"dropdown-item is-active\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, \"Active dropdown item\"), __jsx(\"a\", {\n    href: \"#\",\n    className: \"dropdown-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, \"Other dropdown item\"), __jsx(\"hr\", {\n    className: \"dropdown-divider\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: \"#\",\n    className: \"dropdown-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, \"With a divider\"))));\n};\n\n_c = ProductSortingDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductSortingDropdown);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductSortingDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duLmpzeD84NTkyIl0sIm5hbWVzIjpbIlByb2R1Y3RTb3J0aW5nRHJvcGRvd24iLCJzb3J0IiwiY2FsbGJhY2siLCJEUk9QRE9XTl9JVEVNUyIsIm1hcCIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLFFBQVQsUUFBU0EsUUFBVDtBQUFBLFNBQzNCO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBb0MscUJBQWMsTUFBbEQ7QUFBeUQscUJBQWMsZUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWdCRCxJQUFoQixNQURKLENBREosQ0FESixFQU1JO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBK0IsTUFBRSxFQUFDLGVBQWxDO0FBQWtELFFBQUksRUFBQyxNQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRSw2RUFBYyxDQUFDQyxHQUFmLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsRUFBUDtBQUFBLFdBQ2hCO0FBQUcsZUFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEZ0I7QUFBQSxHQUFuQixDQURMLEVBT0k7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBKLEVBUUk7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQyx5QkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFSSixFQVdJO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUMsZUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFYSixFQWNJO0FBQUksYUFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixFQWVJO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUMsZUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFmSixDQURKLENBTkosQ0FEMkI7QUFBQSxDQUEvQjs7S0FBTU4sc0I7QUErQlNBLHFGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERST1BET1dOX0lURU1TIH0gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL2NvbnN0YW50cyc7XG5cbmNvbnN0IFByb2R1Y3RTb3J0aW5nRHJvcGRvd24gPSAoeyBzb3J0LCBjYWxsYmFjayB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0XCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlNvcnQgYnk6IHtzb3J0fSA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGlkPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7RFJPUERPV05fSVRFTVMubWFwKChuYW1lLCBpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93biBpdGVtXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5PdGhlciBkcm9wZG93biBpdGVtPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBpcy1hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgQWN0aXZlIGRyb3Bkb3duIGl0ZW1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIE90aGVyIGRyb3Bkb3duIGl0ZW1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICBXaXRoIGEgZGl2aWRlclxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTb3J0aW5nRHJvcGRvd247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/products/ProductSortingDropdown.jsx\n");

/***/ })

})