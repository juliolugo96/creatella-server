webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductSortingDropdown.jsx":
/*!********************************************************!*\
  !*** ./components/products/ProductSortingDropdown.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_products_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/products/constants */ \"./components/products/constants.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/products/ProductSortingDropdown.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ProductSortingDropdown = function ProductSortingDropdown(_ref) {\n  var sort = _ref.sort,\n      callback = _ref.callback;\n  return __jsx(\"div\", {\n    className: \"dropdown\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"dropdown-trigger\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    className: \"button is-light\",\n    \"aria-haspopup\": \"true\",\n    \"aria-controls\": \"dropdown-menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 21\n    }\n  }, \"Sort by: \", sort || 'Choose a sorting criteria', \" \"))), __jsx(\"div\", {\n    className: \"dropdown-menu\",\n    id: \"dropdown-menu\",\n    role: \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"dropdown-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  }, _components_products_constants__WEBPACK_IMPORTED_MODULE_1__[\"DROPDOWN_ITEMS\"].map(function (name, id) {\n    return __jsx(\"button\", {\n      key: id,\n      className: \"button \".concat(sort === name ? 'is-link' : 'is-text', \" dropdown-item\"),\n      onMouseDown: function onMouseDown() {\n        console.log('HI.');\n        return callback(name);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 25\n      }\n    }, name);\n  }), __jsx(\"hr\", {\n    className: \"dropdown-divider\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }), __jsx(\"button\", {\n    className: \"button is-text dropdown-item\",\n    onMouseDown: function onMouseDown() {\n      return callback(null);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, \"No sort\"))));\n};\n\n_c = ProductSortingDropdown;\nProductSortingDropdown.propTypes = {\n  sort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  callback: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductSortingDropdown);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductSortingDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duLmpzeD84NTkyIl0sIm5hbWVzIjpbIlByb2R1Y3RTb3J0aW5nRHJvcGRvd24iLCJzb3J0IiwiY2FsbGJhY2siLCJEUk9QRE9XTl9JVEVNUyIsIm1hcCIsIm5hbWUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixPQUF3QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbkQsU0FDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxhQUFTLEVBQUMsaUJBRGQ7QUFFSSxxQkFBYyxNQUZsQjtBQUdJLHFCQUFjLGVBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFnQkQsSUFBSSxJQUFJLDJCQUF4QixNQUpKLENBREosQ0FESixFQVNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBK0IsTUFBRSxFQUFDLGVBQWxDO0FBQWtELFFBQUksRUFBQyxNQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRSw2RUFBYyxDQUFDQyxHQUFmLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsRUFBUDtBQUFBLFdBQ2hCO0FBQ0ksU0FBRyxFQUFFQSxFQURUO0FBRUksZUFBUyxtQkFDTEwsSUFBSSxLQUFLSSxJQUFULEdBQWdCLFNBQWhCLEdBQTRCLFNBRHZCLG1CQUZiO0FBS0ksaUJBQVcsRUFBRSx1QkFBTTtBQUNmRSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsZUFBT04sUUFBUSxDQUFDRyxJQUFELENBQWY7QUFDSCxPQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTS0EsSUFUTCxDQURnQjtBQUFBLEdBQW5CLENBREwsRUFlSTtBQUFJLGFBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkosRUFnQkk7QUFDSSxhQUFTLEVBQUMsOEJBRGQ7QUFFSSxlQUFXLEVBQUU7QUFBQSxhQUFNSCxRQUFRLENBQUMsSUFBRCxDQUFkO0FBQUEsS0FGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCSixDQURKLENBVEosQ0FESjtBQW9DSCxDQXJDRDs7S0FBTUYsc0I7QUF1Q05BLHNCQUFzQixDQUFDUyxTQUF2QixHQUFtQztBQUMvQlIsTUFBSSxFQUFFUyxpREFBUyxDQUFDQyxNQURlO0FBRS9CVCxVQUFRLEVBQUVRLGlEQUFTLENBQUNFO0FBRlcsQ0FBbkM7QUFLZVoscUZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RTb3J0aW5nRHJvcGRvd24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRFJPUERPV05fSVRFTVMgfSBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvY29uc3RhbnRzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFByb2R1Y3RTb3J0aW5nRHJvcGRvd24gPSAoeyBzb3J0LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlNvcnQgYnk6IHtzb3J0IHx8ICdDaG9vc2UgYSBzb3J0aW5nIGNyaXRlcmlhJ30gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBpZD1cImRyb3Bkb3duLW1lbnVcIiByb2xlPVwibWVudVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICB7RFJPUERPV05fSVRFTVMubWFwKChuYW1lLCBpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQgPT09IG5hbWUgPyAnaXMtbGluaycgOiAnaXMtdGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGRyb3Bkb3duLWl0ZW1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdISS4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXRleHQgZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gY2FsbGJhY2sobnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gc29ydFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuUHJvZHVjdFNvcnRpbmdEcm9wZG93bi5wcm9wVHlwZXMgPSB7XG4gICAgc29ydDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjYWxsYmFjazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTb3J0aW5nRHJvcGRvd247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/products/ProductSortingDropdown.jsx\n");

/***/ })

})