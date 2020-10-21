webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductCard.jsx":
/*!*********************************************!*\
  !*** ./components/products/ProductCard.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_products_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/products/functions */ \"./components/products/functions.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/products/ProductCard.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ProductCard = function ProductCard(_ref) {\n  var size = _ref.size,\n      face = _ref.face,\n      date = _ref.date,\n      price = _ref.price;\n  return __jsx(\"div\", {\n    className: \"card scale-in-left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"image-container card-image has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    className: \"image-face\",\n    style: {\n      fontSize: size\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  }, face)), __jsx(\"div\", {\n    className: \"card-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"media has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"media-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    className: \"title is-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 25\n    }\n  }, \"John Smith\"), __jsx(\"p\", {\n    className: \"subtitle is-6 has-text-grey-light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 25\n    }\n  }, \"@johnsmith\"))), __jsx(\"h2\", {\n    className: \"title is-2 has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }, \"$\", price), __jsx(\"div\", {\n    className: \"content has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }), __jsx(\"time\", {\n    dateTime: \"2016-1-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  }, Object(_components_products_functions__WEBPACK_IMPORTED_MODULE_2__[\"timeSince\"])(new Date(date).getTime())))));\n};\n\n_c = ProductCard;\nProductCard.propTypes = {\n  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  face: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0Q2FyZC5qc3g/NDdlYSJdLCJuYW1lcyI6WyJQcm9kdWN0Q2FyZCIsInNpemUiLCJmYWNlIiwiZGF0ZSIsInByaWNlIiwiZm9udFNpemUiLCJ0aW1lU2luY2UiLCJEYXRlIiwiZ2V0VGltZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUM7QUFBQSxNQUE5QkMsSUFBOEIsUUFBOUJBLElBQThCO0FBQUEsTUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDakQsU0FDSTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsOENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBMEIsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRUo7QUFBWixLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tDLElBREwsQ0FESixDQURKLEVBTUk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJO0FBQUcsYUFBUyxFQUFDLG1DQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosQ0FESixDQURKLEVBUUk7QUFBSSxhQUFTLEVBQUMsOEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUErQ0UsS0FBL0MsQ0FSSixFQVVJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFNLFlBQVEsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkJFLGdGQUFTLENBQUMsSUFBSUMsSUFBSixDQUFTSixJQUFULEVBQWVLLE9BQWYsRUFBRCxDQUFwQyxDQUZKLENBVkosQ0FOSixDQURKO0FBd0JILENBekJEOztLQUFNUixXO0FBMkJOQSxXQUFXLENBQUNTLFNBQVosR0FBd0I7QUFDcEJSLE1BQUksRUFBRVMsaURBQVMsQ0FBQ0MsTUFESTtBQUVwQlQsTUFBSSxFQUFFUSxpREFBUyxDQUFDRSxNQUZJO0FBR3BCVCxNQUFJLEVBQUVPLGlEQUFTLENBQUNFLE1BSEk7QUFJcEJSLE9BQUssRUFBRU0saURBQVMsQ0FBQ0MsTUFKRztBQUtwQkUsSUFBRSxFQUFFSCxpREFBUyxDQUFDRTtBQUxNLENBQXhCO0FBUWVaLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0Q2FyZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdGltZVNpbmNlIH0gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IFByb2R1Y3RDYXJkID0gKHsgc2l6ZSwgZmFjZSwgZGF0ZSwgcHJpY2UgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzY2FsZS1pbi1sZWZ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lciBjYXJkLWltYWdlIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW1hZ2UtZmFjZVwiIHN0eWxlPXt7IGZvbnRTaXplOiBzaXplIH19PlxuICAgICAgICAgICAgICAgICAgICB7ZmFjZX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYSBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5Kb2huIFNtaXRoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtNiBoYXMtdGV4dC1ncmV5LWxpZ2h0XCI+QGpvaG5zbWl0aDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMiBoYXMtdGV4dC1jZW50ZXJlZFwiPiR7cHJpY2V9PC9oMj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9XCIyMDE2LTEtMVwiPnt0aW1lU2luY2UobmV3IERhdGUoZGF0ZSkuZ2V0VGltZSgpKX08L3RpbWU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cblByb2R1Y3RDYXJkLnByb3BUeXBlcyA9IHtcbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGZhY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwcmljZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/products/ProductCard.jsx\n");

/***/ })

})