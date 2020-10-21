webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductSortingDropdown.jsx":
/*!********************************************************!*\
  !*** ./components/products/ProductSortingDropdown.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_products_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/products/constants */ \"./components/products/constants.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/products/ProductSortingDropdown.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ProductSortingDropdown = function ProductSortingDropdown(_ref) {\n  var sort = _ref.sort,\n      callback = _ref.callback;\n  return __jsx(\"div\", {\n    className: \"dropdown\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"dropdown-trigger\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    className: \"button is-light\",\n    \"aria-haspopup\": \"true\",\n    \"aria-controls\": \"dropdown-menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 21\n    }\n  }, \"Sort by: \", sort || 'Choose a sort', \" \"))), __jsx(\"div\", {\n    className: \"dropdown-menu\",\n    id: \"dropdown-menu\",\n    role: \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"dropdown-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  }, _components_products_constants__WEBPACK_IMPORTED_MODULE_1__[\"DROPDOWN_ITEMS\"].map(function (name, id) {\n    return __jsx(\"button\", {\n      key: id,\n      className: \"button \".concat(sort === name ? 'is-link' : 'is-text', \" dropdown-item\"),\n      onMouseDown: function onMouseDown() {\n        console.log('HI.');\n        return callback(name);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 25\n      }\n    }, name);\n  }), __jsx(\"hr\", {\n    className: \"dropdown-divider\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }), __jsx(\"button\", {\n    className: \"button is-text dropdown-item\",\n    onMouseDown: function onMouseDown() {\n      return callback(null);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, \"No sort\"))));\n};\n\n_c = ProductSortingDropdown;\nProductSortingDropdown.propTypes = {\n  sort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  callback: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductSortingDropdown);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductSortingDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duLmpzeD84NTkyIl0sIm5hbWVzIjpbIlByb2R1Y3RTb3J0aW5nRHJvcGRvd24iLCJzb3J0IiwiY2FsbGJhY2siLCJEUk9QRE9XTl9JVEVNUyIsIm1hcCIsIm5hbWUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixPQUF3QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbkQsU0FDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxhQUFTLEVBQUMsaUJBRGQ7QUFFSSxxQkFBYyxNQUZsQjtBQUdJLHFCQUFjLGVBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFnQkQsSUFBSSxJQUFJLGVBQXhCLE1BSkosQ0FESixDQURKLEVBU0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUErQixNQUFFLEVBQUMsZUFBbEM7QUFBa0QsUUFBSSxFQUFDLE1BQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tFLDZFQUFjLENBQUNDLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxFQUFQO0FBQUEsV0FDaEI7QUFDSSxTQUFHLEVBQUVBLEVBRFQ7QUFFSSxlQUFTLG1CQUNMTCxJQUFJLEtBQUtJLElBQVQsR0FBZ0IsU0FBaEIsR0FBNEIsU0FEdkIsbUJBRmI7QUFLSSxpQkFBVyxFQUFFLHVCQUFNO0FBQ2ZFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDQSxlQUFPTixRQUFRLENBQUNHLElBQUQsQ0FBZjtBQUNILE9BUkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVNLQSxJQVRMLENBRGdCO0FBQUEsR0FBbkIsQ0FETCxFQWVJO0FBQUksYUFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmSixFQWdCSTtBQUNJLGFBQVMsRUFBQyw4QkFEZDtBQUVJLGVBQVcsRUFBRTtBQUFBLGFBQU1ILFFBQVEsQ0FBQyxJQUFELENBQWQ7QUFBQSxLQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJKLENBREosQ0FUSixDQURKO0FBb0NILENBckNEOztLQUFNRixzQjtBQXVDTkEsc0JBQXNCLENBQUNTLFNBQXZCLEdBQW1DO0FBQy9CUixNQUFJLEVBQUVTLGlEQUFTLENBQUNDLE1BRGU7QUFFL0JULFVBQVEsRUFBRVEsaURBQVMsQ0FBQ0U7QUFGVyxDQUFuQztBQUtlWixxRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdFNvcnRpbmdEcm9wZG93bi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEUk9QRE9XTl9JVEVNUyB9IGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9jb25zdGFudHMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUHJvZHVjdFNvcnRpbmdEcm9wZG93biA9ICh7IHNvcnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+U29ydCBieToge3NvcnQgfHwgJ0Nob29zZSBhIHNvcnQnfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGlkPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHtEUk9QRE9XTl9JVEVNUy5tYXAoKG5hbWUsIGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydCA9PT0gbmFtZSA/ICdpcy1saW5rJyA6ICdpcy10ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZHJvcGRvd24taXRlbWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hJLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtdGV4dCBkcm9wZG93bi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiBjYWxsYmFjayhudWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBObyBzb3J0XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5Qcm9kdWN0U29ydGluZ0Ryb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgICBzb3J0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNhbGxiYWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFNvcnRpbmdEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/products/ProductSortingDropdown.jsx\n");

/***/ })

})