webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductAd.jsx":
/*!*******************************************!*\
  !*** ./components/products/ProductAd.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/products/ProductAd.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar generateRandomImageUrl = function generateRandomImageUrl() {\n  var random = Math.floor(Math.random() * 1000);\n  var lastAdSeen = sessionStorage.getItem('lastRandom');\n  console.log('Last Ad Seen: ', lastAdSeen);\n\n  while (random === lastAdSeen) {\n    random = Math.floor(Math.random() * 1000);\n  }\n\n  sessionStorage.setItem('lastRandom', random);\n  return \"\".concat(\"http://localhost:3000\", \"/ads?r=\").concat(random);\n};\n\nvar ProductAd = function ProductAd() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      url = _useState2[0],\n      setUrl = _useState2[1];\n\n  var imageLoaded = function imageLoaded() {\n    return setLoading(false);\n  };\n\n  useEffect(function () {\n    set;\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"image-container\",\n    style: {\n      display: loading ? 'block' : 'none',\n      paddingTop: 50\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    className: \"title has-text-centered is-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }, \"Loading AD, please wait...\")), __jsx(\"div\", {\n    className: \"image-ad-container\",\n    style: {\n      display: loading ? 'none' : 'block'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: \"image-face\",\n    onLoad: imageLoaded,\n    style: {\n      display: !loading ? 'block' : 'none'\n    },\n    src: url,\n    alt: \"ad\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(ProductAd, \"mERCIxlOt4cEYAfFskhBVLF6srg=\");\n\n_c = ProductAd;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductAd);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductAd\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0QWQuanN4P2JiZDAiXSwibmFtZXMiOlsiZ2VuZXJhdGVSYW5kb21JbWFnZVVybCIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImxhc3RBZFNlZW4iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsInByb2Nlc3MiLCJQcm9kdWN0QWQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXJsIiwic2V0VXJsIiwiaW1hZ2VMb2FkZWQiLCJ1c2VFZmZlY3QiLCJzZXQiLCJkaXNwbGF5IiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQ2pDLE1BQUlDLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0QsTUFBTCxLQUFnQixJQUEzQixDQUFiO0FBRUEsTUFBSUcsVUFBVSxHQUFHQyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsWUFBdkIsQ0FBakI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJKLFVBQTlCOztBQUNBLFNBQU9ILE1BQU0sS0FBS0csVUFBbEIsRUFBOEI7QUFDMUJILFVBQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0QsTUFBTCxLQUFnQixJQUEzQixDQUFUO0FBQ0g7O0FBRURJLGdCQUFjLENBQUNJLE9BQWYsQ0FBdUIsWUFBdkIsRUFBcUNSLE1BQXJDO0FBQ0EsbUJBQVVTLHVCQUFWLG9CQUFtRFQsTUFBbkQ7QUFDSCxDQVpEOztBQWNBLElBQU1VLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxJQUFELENBRGxCO0FBQUEsTUFDYkMsT0FEYTtBQUFBLE1BQ0pDLFVBREk7O0FBQUEsbUJBRUVGLHNEQUFRLENBQUMsRUFBRCxDQUZWO0FBQUEsTUFFYkcsR0FGYTtBQUFBLE1BRVJDLE1BRlE7O0FBR3BCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTUgsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxHQUFwQjs7QUFFQUksV0FBUyxDQUFDLFlBQU07QUFDWkMsT0FBRztBQUNOLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxTQUNJLG1FQUNJO0FBQ0ksYUFBUyxFQUFDLGlCQURkO0FBRUksU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRVAsT0FBTyxHQUFHLE9BQUgsR0FBYSxNQUEvQjtBQUF1Q1EsZ0JBQVUsRUFBRTtBQUFuRCxLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSTtBQUFJLGFBQVMsRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUhKLENBREosRUFNSTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFvQyxTQUFLLEVBQUU7QUFBRUQsYUFBTyxFQUFFUCxPQUFPLEdBQUcsTUFBSCxHQUFZO0FBQTlCLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQyxZQURkO0FBRUksVUFBTSxFQUFFSSxXQUZaO0FBR0ksU0FBSyxFQUFFO0FBQUVHLGFBQU8sRUFBRSxDQUFDUCxPQUFELEdBQVcsT0FBWCxHQUFxQjtBQUFoQyxLQUhYO0FBSUksT0FBRyxFQUFFRSxHQUpUO0FBS0ksT0FBRyxFQUFDLElBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBTkosQ0FESjtBQWlCSCxDQXpCRDs7R0FBTUosUzs7S0FBQUEsUztBQTJCU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RBZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZ2VuZXJhdGVSYW5kb21JbWFnZVVybCA9ICgpID0+IHtcbiAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG5cbiAgICBsZXQgbGFzdEFkU2VlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xhc3RSYW5kb20nKTtcblxuICAgIGNvbnNvbGUubG9nKCdMYXN0IEFkIFNlZW46ICcsIGxhc3RBZFNlZW4pO1xuICAgIHdoaWxlIChyYW5kb20gPT09IGxhc3RBZFNlZW4pIHtcbiAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgfVxuXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGFzdFJhbmRvbScsIHJhbmRvbSk7XG4gICAgcmV0dXJuIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2Fkcz9yPSR7cmFuZG9tfWA7XG59O1xuXG5jb25zdCBQcm9kdWN0QWQgPSAoKSA9PiB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBpbWFnZUxvYWRlZCA9ICgpID0+IHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBsb2FkaW5nID8gJ2Jsb2NrJyA6ICdub25lJywgcGFkZGluZ1RvcDogNTAgfX0+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGhhcy10ZXh0LWNlbnRlcmVkIGlzLTNcIj5Mb2FkaW5nIEFELCBwbGVhc2Ugd2FpdC4uLjwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtYWQtY29udGFpbmVyXCIgc3R5bGU9e3sgZGlzcGxheTogbG9hZGluZyA/ICdub25lJyA6ICdibG9jaycgfX0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1mYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkPXtpbWFnZUxvYWRlZH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogIWxvYWRpbmcgPyAnYmxvY2snIDogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXJsfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhZFwiPjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0QWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/products/ProductAd.jsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false

})