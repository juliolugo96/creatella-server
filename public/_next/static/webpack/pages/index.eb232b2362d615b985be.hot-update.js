webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductAd.jsx":
/*!*******************************************!*\
  !*** ./components/products/ProductAd.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/products/ProductAd.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ProductAd = function ProductAd() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var random = Math.floor(Math.random() * 1000);\n  var url = \"\".concat(\"http://localhost:3000\", \"/ads?r=\").concat(random);\n\n  var imageLoaded = function imageLoaded() {\n    console.log('Called');\n    setLoading(false);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    style: {\n      display: loading ? 'none' : 'block'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, \"Loading images\"), __jsx(\"div\", {\n    style: {\n      display: loading ? 'block' : 'none'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    onLoad: imageLoaded,\n    style: {\n      display: !loading ? 'block' : 'none'\n    },\n    src: url,\n    alt: \"ad\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(ProductAd, \"/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=\");\n\n_c = ProductAd;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductAd);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductAd\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0QWQuanN4P2JiZDAiXSwibmFtZXMiOlsiUHJvZHVjdEFkIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInVybCIsInByb2Nlc3MiLCJpbWFnZUxvYWRlZCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEtBQUQsQ0FEbEI7QUFBQSxNQUNiQyxPQURhO0FBQUEsTUFDSkMsVUFESTs7QUFFcEIsTUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRCxNQUFMLEtBQWdCLElBQTNCLENBQWY7QUFDQSxNQUFNRyxHQUFHLGFBQU1DLHVCQUFOLG9CQUErQ0osTUFBL0MsQ0FBVDs7QUFFQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBRUFSLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxHQUpEOztBQU1BLFNBQ0ksbUVBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRVMsYUFBTyxFQUFFVixPQUFPLEdBQUcsTUFBSCxHQUFZO0FBQTlCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixFQUVJO0FBQUssU0FBSyxFQUFFO0FBQUVVLGFBQU8sRUFBRVYsT0FBTyxHQUFHLE9BQUgsR0FBYTtBQUEvQixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLFVBQU0sRUFBRU8sV0FEWjtBQUVJLFNBQUssRUFBRTtBQUFFRyxhQUFPLEVBQUUsQ0FBQ1YsT0FBRCxHQUFXLE9BQVgsR0FBcUI7QUFBaEMsS0FGWDtBQUdJLE9BQUcsRUFBRUssR0FIVDtBQUlJLE9BQUcsRUFBQyxJQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUZKLENBREo7QUFZSCxDQXZCRDs7R0FBTVAsUzs7S0FBQUEsUztBQXlCU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RBZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuXG5jb25zdCBQcm9kdWN0QWQgPSAoKSA9PiB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2Fkcz9yPSR7cmFuZG9tfWA7XG5cbiAgICBjb25zdCBpbWFnZUxvYWRlZCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhbGxlZCcpO1xuXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBsb2FkaW5nID8gJ25vbmUnIDogJ2Jsb2NrJyB9fT5Mb2FkaW5nIGltYWdlczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBsb2FkaW5nID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZD17aW1hZ2VMb2FkZWR9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICFsb2FkaW5nID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICBzcmM9e3VybH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiYWRcIj48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEFkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/products/ProductAd.jsx\n");

/***/ })

})