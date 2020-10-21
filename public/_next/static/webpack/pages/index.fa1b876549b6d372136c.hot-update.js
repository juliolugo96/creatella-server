webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductAd.jsx":
/*!*******************************************!*\
  !*** ./components/products/ProductAd.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/products/ProductAd.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar generateRandomImageUrl = function generateRandomImageUrl() {\n  var random = Math.floor(Math.random() * 1000);\n  var lastAdSeen = sessionStorage.getItem('lastRandom');\n\n  while (random === lastAdSeen) {\n    random = Math.floor(Math.random() * 1000);\n  }\n\n  sessionStorage.setItem('lastRandom', random);\n  return \"\".concat(\"http://localhost:3000\", \"/ads?r=\").concat(random);\n};\n\nvar ProductAd = function ProductAd() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var imageLoaded = function imageLoaded() {\n    return setLoading(false);\n  };\n\n  var url = generateRandomImageUrl();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"image-container\",\n    style: {\n      display: loading ? 'block' : 'none',\n      paddingTop: 50\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    className: \"title has-text-centered is-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, \"Loading AD, please wait...\")), __jsx(\"div\", {\n    className: \"image-ad-container\",\n    style: {\n      display: loading ? 'none' : 'block'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: \"image-face\",\n    onLoad: imageLoaded,\n    style: {\n      display: !loading ? 'block' : 'none'\n    },\n    src: url,\n    alt: \"ad\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(ProductAd, \"awoWwSKBZAy48DVUNX9vIFbdsbI=\");\n\n_c = ProductAd;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductAd);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductAd\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0QWQuanN4P2JiZDAiXSwibmFtZXMiOlsiZ2VuZXJhdGVSYW5kb21JbWFnZVVybCIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImxhc3RBZFNlZW4iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwicHJvY2VzcyIsIlByb2R1Y3RBZCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpbWFnZUxvYWRlZCIsInVybCIsImRpc3BsYXkiLCJwYWRkaW5nVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQU07QUFDakMsTUFBSUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRCxNQUFMLEtBQWdCLElBQTNCLENBQWI7QUFFQSxNQUFJRyxVQUFVLEdBQUdDLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixZQUF2QixDQUFqQjs7QUFDQSxTQUFPTCxNQUFNLEtBQUtHLFVBQWxCLEVBQThCO0FBQzFCSCxVQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNELE1BQUwsS0FBZ0IsSUFBM0IsQ0FBVDtBQUNIOztBQUVESSxnQkFBYyxDQUFDRSxPQUFmLENBQXVCLFlBQXZCLEVBQXFDTixNQUFyQztBQUNBLG1CQUFVTyx1QkFBVixvQkFBbURQLE1BQW5EO0FBQ0gsQ0FWRDs7QUFZQSxJQUFNUSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsSUFBRCxDQURsQjtBQUFBLE1BQ2JDLE9BRGE7QUFBQSxNQUNKQyxVQURJOztBQUVwQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU1ELFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsR0FBcEI7O0FBQ0EsTUFBTUUsR0FBRyxHQUFHZCxzQkFBc0IsRUFBbEM7QUFDQSxTQUNJLG1FQUNJO0FBQ0ksYUFBUyxFQUFDLGlCQURkO0FBRUksU0FBSyxFQUFFO0FBQUVlLGFBQU8sRUFBRUosT0FBTyxHQUFHLE9BQUgsR0FBYSxNQUEvQjtBQUF1Q0ssZ0JBQVUsRUFBRTtBQUFuRCxLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSTtBQUFJLGFBQVMsRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUhKLENBREosRUFNSTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFvQyxTQUFLLEVBQUU7QUFBRUQsYUFBTyxFQUFFSixPQUFPLEdBQUcsTUFBSCxHQUFZO0FBQTlCLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQyxZQURkO0FBRUksVUFBTSxFQUFFRSxXQUZaO0FBR0ksU0FBSyxFQUFFO0FBQUVFLGFBQU8sRUFBRSxDQUFDSixPQUFELEdBQVcsT0FBWCxHQUFxQjtBQUFoQyxLQUhYO0FBSUksT0FBRyxFQUFFRyxHQUpUO0FBS0ksT0FBRyxFQUFDLElBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBTkosQ0FESjtBQWlCSCxDQXJCRDs7R0FBTUwsUzs7S0FBQUEsUztBQXVCU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RBZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZ2VuZXJhdGVSYW5kb21JbWFnZVVybCA9ICgpID0+IHtcbiAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG5cbiAgICBsZXQgbGFzdEFkU2VlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xhc3RSYW5kb20nKTtcbiAgICB3aGlsZSAocmFuZG9tID09PSBsYXN0QWRTZWVuKSB7XG4gICAgICAgIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgIH1cblxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xhc3RSYW5kb20nLCByYW5kb20pO1xuICAgIHJldHVybiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hZHM/cj0ke3JhbmRvbX1gO1xufTtcblxuY29uc3QgUHJvZHVjdEFkID0gKCkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IGltYWdlTG9hZGVkID0gKCkgPT4gc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgY29uc3QgdXJsID0gZ2VuZXJhdGVSYW5kb21JbWFnZVVybCgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBsb2FkaW5nID8gJ2Jsb2NrJyA6ICdub25lJywgcGFkZGluZ1RvcDogNTAgfX0+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGhhcy10ZXh0LWNlbnRlcmVkIGlzLTNcIj5Mb2FkaW5nIEFELCBwbGVhc2Ugd2FpdC4uLjwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtYWQtY29udGFpbmVyXCIgc3R5bGU9e3sgZGlzcGxheTogbG9hZGluZyA/ICdub25lJyA6ICdibG9jaycgfX0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1mYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkPXtpbWFnZUxvYWRlZH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogIWxvYWRpbmcgPyAnYmxvY2snIDogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXJsfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhZFwiPjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0QWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/products/ProductAd.jsx\n");

/***/ })

})