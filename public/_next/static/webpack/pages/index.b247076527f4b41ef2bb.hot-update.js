webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductSortingDropdown.jsx":
/*!********************************************************!*\
  !*** ./components/products/ProductSortingDropdown.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_products_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/products/constants */ \"./components/products/constants.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/products/ProductSortingDropdown.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ProductSortingDropdown = function ProductSortingDropdown(_ref) {\n  var sort = _ref.sort,\n      callback = _ref.callback;\n  return __jsx(\"div\", {\n    className: \"dropdown\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"dropdown-trigger\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    className: \"button is-light\",\n    \"aria-haspopup\": \"true\",\n    \"aria-controls\": \"dropdown-menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  }, \"Sort by: \", sort, \" \"))), __jsx(\"div\", {\n    className: \"dropdown-menu\",\n    id: \"dropdown-menu\",\n    role: \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"dropdown-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, _components_products_constants__WEBPACK_IMPORTED_MODULE_1__[\"DROPDOWN_ITEMS\"].map(function (name, id) {\n    return __jsx(\"button\", {\n      key: id,\n      className: \"button \".concat(sort === name ? 'is-link' : 'is-text', \" dropdown-item\"),\n      onClick: function onClick() {\n        return callback(name);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 21\n      }\n    }, name);\n  }), __jsx(\"hr\", {\n    className: \"dropdown-divider\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }), __jsx(\"button\", {\n    className: \"button is-text dropdown-item\",\n    onClick: function onClick() {\n      return callback(null);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, \"No sort\"))));\n};\n\n_c = ProductSortingDropdown;\nProductSortingDropdown.propTypes = {\n  sort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  callback: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductSortingDropdown);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductSortingDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duLmpzeD84NTkyIl0sIm5hbWVzIjpbIlByb2R1Y3RTb3J0aW5nRHJvcGRvd24iLCJzb3J0IiwiY2FsbGJhY2siLCJEUk9QRE9XTl9JVEVNUyIsIm1hcCIsIm5hbWUiLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUI7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxRQUFULFFBQVNBLFFBQVQ7QUFBQSxTQUMzQjtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQW9DLHFCQUFjLE1BQWxEO0FBQXlELHFCQUFjLGVBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFnQkQsSUFBaEIsTUFESixDQURKLENBREosRUFNSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQStCLE1BQUUsRUFBQyxlQUFsQztBQUFrRCxRQUFJLEVBQUMsTUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0UsNkVBQWMsQ0FBQ0MsR0FBZixDQUFtQixVQUFDQyxJQUFELEVBQU9DLEVBQVA7QUFBQSxXQUNoQjtBQUNJLFNBQUcsRUFBRUEsRUFEVDtBQUVJLGVBQVMsbUJBQVlMLElBQUksS0FBS0ksSUFBVCxHQUFnQixTQUFoQixHQUE0QixTQUF4QyxtQkFGYjtBQUdJLGFBQU8sRUFBRTtBQUFBLGVBQU1ILFFBQVEsQ0FBQ0csSUFBRCxDQUFkO0FBQUEsT0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUtBLElBSkwsQ0FEZ0I7QUFBQSxHQUFuQixDQURMLEVBVUk7QUFBSSxhQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBV0k7QUFBUSxhQUFTLEVBQUMsOEJBQWxCO0FBQWlELFdBQU8sRUFBRTtBQUFBLGFBQU1ILFFBQVEsQ0FBQyxJQUFELENBQWQ7QUFBQSxLQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEosQ0FESixDQU5KLENBRDJCO0FBQUEsQ0FBL0I7O0tBQU1GLHNCO0FBMkJOQSxzQkFBc0IsQ0FBQ08sU0FBdkIsR0FBbUM7QUFDL0JOLE1BQUksRUFBRU8saURBQVMsQ0FBQ0MsTUFEZTtBQUUvQlAsVUFBUSxFQUFFTSxpREFBUyxDQUFDRTtBQUZXLENBQW5DO0FBTWVWLHFGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERST1BET1dOX0lURU1TIH0gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL2NvbnN0YW50cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBQcm9kdWN0U29ydGluZ0Ryb3Bkb3duID0gKHsgc29ydCwgY2FsbGJhY2sgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodFwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Tb3J0IGJ5OiB7c29ydH0gPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBpZD1cImRyb3Bkb3duLW1lbnVcIiByb2xlPVwibWVudVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge0RST1BET1dOX0lURU1TLm1hcCgobmFtZSwgaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiAke3NvcnQgPT09IG5hbWUgPyAnaXMtbGluaycgOiAnaXMtdGV4dCd9IGRyb3Bkb3duLWl0ZW1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2FsbGJhY2sobmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXRleHQgZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IGNhbGxiYWNrKG51bGwpfT5cbiAgICAgICAgICAgICAgICAgICAgTm8gc29ydFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuUHJvZHVjdFNvcnRpbmdEcm9wZG93bi5wcm9wVHlwZXMgPSB7XG4gICAgc29ydDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjYWxsYmFjazogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U29ydGluZ0Ryb3Bkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/products/ProductSortingDropdown.jsx\n");

/***/ })

})