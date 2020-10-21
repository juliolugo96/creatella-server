webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductAd.jsx":
/*!*******************************************!*\
  !*** ./components/products/ProductAd.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/products/ProductAd.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar handleLoad = function handleLoad() {\n  console.log('Loaded');\n};\n\nvar ProductAd = function ProductAd() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var counter = useRef(0);\n  var random = Math.floor(Math.random() * 1000);\n  var url = \"\".concat(\"http://localhost:3000\", \"/ads?r=\").concat(random);\n\n  var imageLoaded = function imageLoaded() {\n    counter.current += 1;\n    counter === 1 && setLoading(false);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    style: {\n      display: loading ? 'none' : 'block'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    style: {\n      display: loading ? 'block' : 'none'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    onLoad: imageLoaded,\n    style: {\n      display: !loading ? 'block' : 'none'\n    },\n    src: url,\n    alt: \"ad\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(ProductAd, \"8c1qQZx4lZVySChRZtzRhueF1Qo=\");\n\n_c = ProductAd;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductAd);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductAd\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0QWQuanN4P2JiZDAiXSwibmFtZXMiOlsiaGFuZGxlTG9hZCIsImNvbnNvbGUiLCJsb2ciLCJQcm9kdWN0QWQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY291bnRlciIsInVzZVJlZiIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInVybCIsInByb2Nlc3MiLCJpbWFnZUxvYWRlZCIsImN1cnJlbnQiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNILENBRkQ7O0FBSUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEtBQUQsQ0FEbEI7QUFBQSxNQUNiQyxPQURhO0FBQUEsTUFDSkMsVUFESTs7QUFFcEIsTUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUMsQ0FBRCxDQUF0QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0QsTUFBTCxLQUFnQixJQUEzQixDQUFmO0FBQ0EsTUFBTUcsR0FBRyxhQUFNQyx1QkFBTixvQkFBK0NKLE1BQS9DLENBQVQ7O0FBRUEsTUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QlAsV0FBTyxDQUFDUSxPQUFSLElBQW1CLENBQW5CO0FBRUFSLFdBQU8sS0FBSyxDQUFaLElBQWlCRCxVQUFVLENBQUMsS0FBRCxDQUEzQjtBQUNILEdBSkQ7O0FBTUEsU0FDSSxtRUFDSTtBQUFLLFNBQUssRUFBRTtBQUFFVSxhQUFPLEVBQUVYLE9BQU8sR0FBRyxNQUFILEdBQVk7QUFBOUIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLFNBQUssRUFBRTtBQUFFVyxhQUFPLEVBQUVYLE9BQU8sR0FBRyxPQUFILEdBQWE7QUFBL0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxVQUFNLEVBQUVTLFdBRFo7QUFFSSxTQUFLLEVBQUU7QUFBRUUsYUFBTyxFQUFFLENBQUNYLE9BQUQsR0FBVyxPQUFYLEdBQXFCO0FBQWhDLEtBRlg7QUFHSSxPQUFHLEVBQUVPLEdBSFQ7QUFJSSxPQUFHLEVBQUMsSUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FGSixDQURKO0FBWUgsQ0F4QkQ7O0dBQU1ULFM7O0tBQUFBLFM7QUEwQlNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0QWQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XG5cbmNvbnN0IGhhbmRsZUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0xvYWRlZCcpO1xufTtcblxuY29uc3QgUHJvZHVjdEFkID0gKCkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBjb3VudGVyID0gdXNlUmVmKDApO1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2Fkcz9yPSR7cmFuZG9tfWA7XG5cbiAgICBjb25zdCBpbWFnZUxvYWRlZCA9ICgpID0+IHtcbiAgICAgICAgY291bnRlci5jdXJyZW50ICs9IDE7XG5cbiAgICAgICAgY291bnRlciA9PT0gMSAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogbG9hZGluZyA/ICdub25lJyA6ICdibG9jaycgfX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IGxvYWRpbmcgPyAnYmxvY2snIDogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkPXtpbWFnZUxvYWRlZH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogIWxvYWRpbmcgPyAnYmxvY2snIDogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXJsfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhZFwiPjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0QWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/products/ProductAd.jsx\n");

/***/ })

})