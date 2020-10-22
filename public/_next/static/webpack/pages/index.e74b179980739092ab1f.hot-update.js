webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductSortingDropdown.jsx":
/*!********************************************************!*\
  !*** ./components/products/ProductSortingDropdown.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_products_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/products/constants */ \"./components/products/constants.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/products/ProductSortingDropdown.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ProductSortingDropdown = function ProductSortingDropdown(_ref) {\n  var sort = _ref.sort,\n      callback = _ref.callback;\n  return __jsx(\"div\", {\n    className: \"dropdown\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"dropdown-trigger\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    className: \"button is-light\",\n    \"aria-haspopup\": \"true\",\n    \"aria-controls\": \"dropdown-menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 17\n    }\n  }, 'Sort by: ', \"\\xA0\", __jsx(\"span\", {\n    className: \"has-text-weight-bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 21\n    }\n  }, sort || ' Choose a sorting criteria'), __jsx(\"i\", {\n    className: \"mdi mdi-chevron-down\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    className: \"dropdown-menu\",\n    id: \"dropdown-menu\",\n    role: \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"dropdown-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, _components_products_constants__WEBPACK_IMPORTED_MODULE_1__[\"DROPDOWN_ITEMS\"].map(function (name, id) {\n    return __jsx(\"button\", {\n      key: id,\n      className: \"button \".concat(sort === name ? 'is-link' : 'is-text', \" dropdown-item\"),\n      onMouseDown: function onMouseDown() {\n        return callback(name);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 25\n      }\n    }, __jsx(\"span\", {\n      className: \"has-text-weight-bold\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 29\n      }\n    }, name, \" \"));\n  }), __jsx(\"hr\", {\n    className: \"dropdown-divider\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 21\n    }\n  }), __jsx(\"button\", {\n    className: \"button is-text dropdown-item\",\n    onMouseDown: function onMouseDown() {\n      return callback(null);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 21\n    }\n  }, \"No sort\"))));\n};\n\n_c = ProductSortingDropdown;\nProductSortingDropdown.propTypes = {\n  sort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  callback: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductSortingDropdown);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductSortingDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duLmpzeD84NTkyIl0sIm5hbWVzIjpbIlByb2R1Y3RTb3J0aW5nRHJvcGRvd24iLCJzb3J0IiwiY2FsbGJhY2siLCJEUk9QRE9XTl9JVEVNUyIsIm1hcCIsIm5hbWUiLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLE9BQXdCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNuRCxTQUNJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQyxpQkFEZDtBQUVJLHFCQUFjLE1BRmxCO0FBR0kscUJBQWMsZUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlLLFdBSkwsVUFLSTtBQUFNLGFBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRCxJQUFJLElBQUksNEJBRGIsQ0FMSixFQVFJO0FBQUcsYUFBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQURKLENBREosRUFhSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQStCLE1BQUUsRUFBQyxlQUFsQztBQUFrRCxRQUFJLEVBQUMsTUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0UsNkVBQWMsQ0FBQ0MsR0FBZixDQUFtQixVQUFDQyxJQUFELEVBQU9DLEVBQVA7QUFBQSxXQUNoQjtBQUNJLFNBQUcsRUFBRUEsRUFEVDtBQUVJLGVBQVMsbUJBQ0xMLElBQUksS0FBS0ksSUFBVCxHQUFnQixTQUFoQixHQUE0QixTQUR2QixtQkFGYjtBQUtJLGlCQUFXLEVBQUU7QUFBQSxlQUFNSCxRQUFRLENBQUNHLElBQUQsQ0FBZDtBQUFBLE9BTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNSTtBQUFNLGVBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF3Q0EsSUFBeEMsTUFOSixDQURnQjtBQUFBLEdBQW5CLENBREwsRUFZSTtBQUFJLGFBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosRUFhSTtBQUNJLGFBQVMsRUFBQyw4QkFEZDtBQUVJLGVBQVcsRUFBRTtBQUFBLGFBQU1ILFFBQVEsQ0FBQyxJQUFELENBQWQ7QUFBQSxLQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkosQ0FESixDQWJKLENBREo7QUFxQ0gsQ0F0Q0Q7O0tBQU1GLHNCO0FBd0NOQSxzQkFBc0IsQ0FBQ08sU0FBdkIsR0FBbUM7QUFDL0JOLE1BQUksRUFBRU8saURBQVMsQ0FBQ0MsTUFEZTtBQUUvQlAsVUFBUSxFQUFFTSxpREFBUyxDQUFDRTtBQUZXLENBQW5DO0FBS2VWLHFGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERST1BET1dOX0lURU1TIH0gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL2NvbnN0YW50cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5cbmNvbnN0IFByb2R1Y3RTb3J0aW5nRHJvcGRvd24gPSAoeyBzb3J0LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIHsnU29ydCBieTogJ30mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzb3J0IHx8ICcgQ2hvb3NlIGEgc29ydGluZyBjcml0ZXJpYSd9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWRpIG1kaS1jaGV2cm9uLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGlkPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHtEUk9QRE9XTl9JVEVNUy5tYXAoKG5hbWUsIGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydCA9PT0gbmFtZSA/ICdpcy1saW5rJyA6ICdpcy10ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZHJvcGRvd24taXRlbWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IGNhbGxiYWNrKG5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPntuYW1lfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtdGV4dCBkcm9wZG93bi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiBjYWxsYmFjayhudWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBObyBzb3J0XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgICBzb3J0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNhbGxiYWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFNvcnRpbmdEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/products/ProductSortingDropdown.jsx\n");

/***/ })

})