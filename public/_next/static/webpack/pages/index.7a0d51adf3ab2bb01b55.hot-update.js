webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductAd.jsx":
/*!*******************************************!*\
  !*** ./components/products/ProductAd.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/products/ProductAd.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ProductAd = function ProductAd() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var random = Math.floor(Math.random() * 1000);\n  var url = \"\".concat(\"http://localhost:3000\", \"/ads?r=\").concat(random);\n\n  var imageLoaded = function imageLoaded() {\n    console.log('Called');\n    setLoading(false);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    style: {\n      display: loading ? 'block' : 'none'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"pre\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, \"\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800 \\u2800\\u2800\\u2800\\u28FF\\u28FF\\u2846\\u2800\\u2800\\u28B8\\u28F7\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u2800\\u28B8\\u28FF\\u2847\\u2800\\u2800\\u28FE\\u28FF\\u2846\\u2800 \\u2800\\u2800\\u2800\\u28FF\\u28FF\\u2847\\u2800\\u2800\\u28B8\\u28FF\\u28B0\\u28FF\\u2846\\u2800\\u28FE\\u28FF\\u2846\\u2800\\u28FE\\u28F7 \\u28FF\\u28FF\\u2847\\u2800\\u2800\\u28FF\\u28FF\\u2847\\u2800 \\u2800\\u2800\\u2800\\u28FF\\u28FF\\u2847\\u2800\\u2800\\u28B8\\u28FF\\u2818\\u28FF\\u28FF\\u28E4\\u28FF\\u28FF\\u28FF\\u28E4\\u28FF\\u2847\\u28BB\\u28FF\\u2847\\u2800\\u2800\\u28FF\\u28FF\\u2847\\u2800 \\u2800\\u2800\\u2800\\u28FF\\u28FF\\u2847\\u2800\\u2800\\u28B8\\u287F\\u2800\\u28B9\\u28FF\\u28FF\\u28FF\\u28FF\\u28FF\\u28FF\\u28FF\\u2801\\u28B8\\u28FF\\u28C7\\u2800\\u2880\\u28FF\\u28FF\\u2807\\u2800 \\u2800\\u2800\\u2800\\u2819\\u28BF\\u28F7\\u28F6\\u28F6\\u287F\\u2801\\u2800\\u2808\\u28FF\\u28FF\\u281F\\u2800\\u28FF\\u28FF\\u2807\\u2800\\u2808\\u283B\\u28FF\\u28F6\\u28FE\\u287F\\u280B\\u2800\\u2800\")), __jsx(\"div\", {\n    style: {\n      display: loading ? 'none' : 'block'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    onLoad: imageLoaded,\n    style: {\n      display: !loading ? 'block' : 'none'\n    },\n    src: url,\n    alt: \"ad\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(ProductAd, \"awoWwSKBZAy48DVUNX9vIFbdsbI=\");\n\n_c = ProductAd;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductAd);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductAd\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0QWQuanN4P2JiZDAiXSwibmFtZXMiOlsiUHJvZHVjdEFkIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInVybCIsInByb2Nlc3MiLCJpbWFnZUxvYWRlZCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLElBQUQsQ0FEbEI7QUFBQSxNQUNiQyxPQURhO0FBQUEsTUFDSkMsVUFESTs7QUFFcEIsTUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRCxNQUFMLEtBQWdCLElBQTNCLENBQWY7QUFDQSxNQUFNRyxHQUFHLGFBQU1DLHVCQUFOLG9CQUErQ0osTUFBL0MsQ0FBVDs7QUFFQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBRUFSLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxHQUpEOztBQU1BLFNBQ0ksbUVBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRVMsYUFBTyxFQUFFVixPQUFPLEdBQUcsT0FBSCxHQUFhO0FBQS9CLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOGlDQURBLENBREosRUFXSTtBQUFLLFNBQUssRUFBRTtBQUFFVSxhQUFPLEVBQUVWLE9BQU8sR0FBRyxNQUFILEdBQVk7QUFBOUIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxVQUFNLEVBQUVPLFdBRFo7QUFFSSxTQUFLLEVBQUU7QUFBRUcsYUFBTyxFQUFFLENBQUNWLE9BQUQsR0FBVyxPQUFYLEdBQXFCO0FBQWhDLEtBRlg7QUFHSSxPQUFHLEVBQUVLLEdBSFQ7QUFJSSxPQUFHLEVBQUMsSUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FYSixDQURKO0FBcUJILENBaENEOztHQUFNUCxTOztLQUFBQSxTO0FBa0NTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdEFkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XG5cbmNvbnN0IFByb2R1Y3RBZCA9ICgpID0+IHtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hZHM/cj0ke3JhbmRvbX1gO1xuXG4gICAgY29uc3QgaW1hZ2VMb2FkZWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDYWxsZWQnKTtcblxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogbG9hZGluZyA/ICdibG9jaycgOiAnbm9uZScgfX0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAg4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCA4qCAXG7ioIDioIDioIDio7/io7/ioYbioIDioIDiorjio7fioIDioIDioIDioIDioIDioIDioIDioIDioIDioIDioIDiorjio7/ioYfioIDioIDio77io7/ioYbioIBcbuKggOKggOKggOKjv+Kjv+Khh+KggOKggOKiuOKjv+KisOKjv+KhhuKggOKjvuKjv+KhhuKggOKjvuKjtyDio7/io7/ioYfioIDioIDio7/io7/ioYfioIBcbuKggOKggOKggOKjv+Kjv+Khh+KggOKggOKiuOKjv+KgmOKjv+Kjv+KjpOKjv+Kjv+Kjv+KjpOKjv+Khh+Kiu+Kjv+Khh+KggOKggOKjv+Kjv+Khh+KggFxu4qCA4qCA4qCA4qO/4qO/4qGH4qCA4qCA4qK44qG/4qCA4qK54qO/4qO/4qO/4qO/4qO/4qO/4qO/4qCB4qK44qO/4qOH4qCA4qKA4qO/4qO/4qCH4qCAXG7ioIDioIDioIDioJnior/io7fio7bio7biob/ioIHioIDioIjio7/io7/ioJ/ioIDio7/io7/ioIfioIDioIjioLvio7/io7bio77iob/ioIvioIDioIBcbiAgICAgICAgICAgIDwvcHJlPiAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogbG9hZGluZyA/ICdub25lJyA6ICdibG9jaycgfX0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBvbkxvYWQ9e2ltYWdlTG9hZGVkfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAhbG9hZGluZyA/ICdibG9jaycgOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImFkXCI+PC9pbWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RBZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/products/ProductAd.jsx\n");

/***/ })

})