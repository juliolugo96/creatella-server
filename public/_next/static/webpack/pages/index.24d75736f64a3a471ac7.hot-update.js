webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductAd.jsx":
/*!*******************************************!*\
  !*** ./components/products/ProductAd.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/products/ProductAd.jsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar handleLoad = function handleLoad() {\n  console.log('Loaded');\n};\n\nvar ProductAd = function ProductAd() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var random = Math.floor(Math.random() * 1000);\n  var url = \"\".concat(\"http://localhost:3000\", \"/ads?r=\").concat(random);\n\n  var elem = __jsx(\"img\", {\n    src: url,\n    alt: \"ad\",\n    onLoad: function onLoad() {\n      return console.log('Shit');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 18\n    }\n  });\n\n  return __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 12\n    }\n  });\n};\n\n_s(ProductAd, \"/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=\");\n\n_c = ProductAd;\n\nfunction ExternalImage(props) {\n  _s2();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loaded = _useState2[0],\n      setLoaded = _useState2[1];\n\n  function onLoad() {\n    console.log('loaded');\n    setLoaded(true);\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"img\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    style: {\n      display: loaded ? 'block' : 'none'\n    },\n    onLoad: onLoad,\n    src: props.src,\n    alt: props.alt\n  }, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  })), !loaded && __jsx(Spin, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 20\n    }\n  }));\n}\n\n_s2(ExternalImage, \"5HkI/FtSFoHY/ZszUPbNWJy51d0=\");\n\n_c2 = ExternalImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductAd);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProductAd\");\n$RefreshReg$(_c2, \"ExternalImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0QWQuanN4P2JiZDAiXSwibmFtZXMiOlsiaGFuZGxlTG9hZCIsImNvbnNvbGUiLCJsb2ciLCJQcm9kdWN0QWQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwidXJsIiwicHJvY2VzcyIsImVsZW0iLCJFeHRlcm5hbEltYWdlIiwicHJvcHMiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJvbkxvYWQiLCJkaXNwbGF5Iiwic3JjIiwiYWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDSCxDQUZEOztBQUlBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxLQUFELENBRGxCO0FBQUEsTUFDYkMsT0FEYTtBQUFBLE1BQ0pDLFVBREk7O0FBRXBCLE1BQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0QsTUFBTCxLQUFnQixJQUEzQixDQUFmO0FBQ0EsTUFBTUcsR0FBRyxhQUFNQyx1QkFBTixvQkFBK0NKLE1BQS9DLENBQVQ7O0FBRUEsTUFBTUssSUFBSSxHQUFHO0FBQUssT0FBRyxFQUFFRixHQUFWO0FBQWUsT0FBRyxFQUFDLElBQW5CO0FBQXdCLFVBQU0sRUFBRTtBQUFBLGFBQU1ULE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosQ0FBTjtBQUFBLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBYjs7QUFFQSxTQUFPLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0gsQ0FSRDs7R0FBTUMsUzs7S0FBQUEsUzs7QUFVTixTQUFTVSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUFBLG1CQUNBVixzREFBUSxDQUFDLEtBQUQsQ0FEUjtBQUFBLE1BQ3JCVyxNQURxQjtBQUFBLE1BQ2JDLFNBRGE7O0FBRTVCLFdBQVNDLE1BQVQsR0FBa0I7QUFDaEJoQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FjLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRDs7QUFDRCxTQUNFLG1FQUNJO0FBQ0EsU0FBSyxFQUFFO0FBQUNFLGFBQU8sRUFBRUgsTUFBTSxHQUFFLE9BQUYsR0FBVztBQUEzQixLQURQO0FBRUEsVUFBTSxFQUFFRSxNQUZSO0FBR0EsT0FBRyxFQUFFSCxLQUFLLENBQUNLLEdBSFg7QUFJQSxPQUFHLEVBQUVMLEtBQUssQ0FBQ007QUFKWCxLQUtJTixLQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESixFQVFJLENBQUNDLE1BQUQsSUFBVyxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJmLENBREY7QUFZRDs7SUFsQlFGLGE7O01BQUFBLGE7QUFvQk1WLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0QWQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XG5cbmNvbnN0IGhhbmRsZUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0xvYWRlZCcpO1xufTtcblxuY29uc3QgUHJvZHVjdEFkID0gKCkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hZHM/cj0ke3JhbmRvbX1gO1xuXG4gICAgY29uc3QgZWxlbSA9IDxpbWcgc3JjPXt1cmx9IGFsdD1cImFkXCIgb25Mb2FkPXsoKSA9PiBjb25zb2xlLmxvZygnU2hpdCcpfSAvPjtcblxuICAgIHJldHVybiA8U2tlbGV0b24gLz47XG59O1xuXG5mdW5jdGlvbiBFeHRlcm5hbEltYWdlKHByb3BzKSB7XG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnbG9hZGVkJyk7XG4gICAgc2V0TG9hZGVkKHRydWUpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPGltZyBcbiAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBsb2FkZWQ/ICdibG9jayc6ICdub25lJ319XG4gICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICBzcmM9e3Byb3BzLnNyY31cbiAgICAgICAgYWx0PXtwcm9wcy5hbHR9XG4gICAgICAgIHsuLi5wcm9wc30gXG4gICAgICAgLz4gXG4gICAgICAgeyFsb2FkZWQgJiYgPFNwaW4gLz4gfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RBZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/products/ProductAd.jsx\n");

/***/ })

})