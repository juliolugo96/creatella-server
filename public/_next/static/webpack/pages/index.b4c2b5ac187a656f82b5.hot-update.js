webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/functions.js":
/*!******************************************!*\
  !*** ./components/products/functions.js ***!
  \******************************************/
/*! exports provided: infiniteScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infiniteScroll\", function() { return infiniteScroll; });\n// Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds\nvar throttleFunction = function throttleFunction(func, delay) {\n  // If setTimeout is already scheduled, no need to do anything\n  if (timerId) {\n    return;\n  } // Schedule a setTimeout after delay seconds\n\n\n  timerId = setTimeout(function () {\n    func(); // Once setTimeout function execution is finished, timerId = undefined so that in <br>\n    // the next scroll event function execution can be scheduled by the setTimeout\n\n    timerId = undefined;\n  }, delay);\n};\n\nvar infiniteScroll = function infiniteScroll(page, callback) {\n  throttleFunctions(function () {\n    console.log('chavez', [page, callback]);\n\n    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {\n      callback({\n        page: page\n      });\n    }\n  }, 200);\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9mdW5jdGlvbnMuanM/MTAwMSJdLCJuYW1lcyI6WyJ0aHJvdHRsZUZ1bmN0aW9uIiwiZnVuYyIsImRlbGF5IiwidGltZXJJZCIsInNldFRpbWVvdXQiLCJ1bmRlZmluZWQiLCJpbmZpbml0ZVNjcm9sbCIsInBhZ2UiLCJjYWxsYmFjayIsInRocm90dGxlRnVuY3Rpb25zIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBLElBQUlBLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBVUMsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUI7QUFDMUM7QUFDQSxNQUFJQyxPQUFKLEVBQWE7QUFDVDtBQUNILEdBSnlDLENBTTFDOzs7QUFDQUEsU0FBTyxHQUFHQyxVQUFVLENBQUMsWUFBWTtBQUM3QkgsUUFBSSxHQUR5QixDQUc3QjtBQUNBOztBQUNBRSxXQUFPLEdBQUdFLFNBQVY7QUFDSCxHQU5tQixFQU1qQkgsS0FOaUIsQ0FBcEI7QUFPSCxDQWREOztBQWdCTyxJQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUM5Q0MsbUJBQWlCLENBQUMsWUFBTTtBQUNwQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQixDQUFDSixJQUFELEVBQU9DLFFBQVAsQ0FBdEI7O0FBQ0EsUUFDSUksTUFBTSxDQUFDQyxXQUFQLEdBQXFCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQTlDLEtBQ0FGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFGN0IsRUFHRTtBQUNFVCxjQUFRLENBQUM7QUFBRUQsWUFBSSxFQUFFQTtBQUFSLE9BQUQsQ0FBUjtBQUNIO0FBQ0osR0FSZ0IsRUFRZCxHQVJjLENBQWpCO0FBU0gsQ0FWTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZHVjdHMvZnVuY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhyb3R0bGUgZnVuY3Rpb246IElucHV0IGFzIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGJlIHRocm90dGxlZCBhbmQgZGVsYXkgaXMgdGhlIHRpbWUgaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzXG52YXIgdGhyb3R0bGVGdW5jdGlvbiA9IGZ1bmN0aW9uIChmdW5jLCBkZWxheSkge1xuICAgIC8vIElmIHNldFRpbWVvdXQgaXMgYWxyZWFkeSBzY2hlZHVsZWQsIG5vIG5lZWQgdG8gZG8gYW55dGhpbmdcbiAgICBpZiAodGltZXJJZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2NoZWR1bGUgYSBzZXRUaW1lb3V0IGFmdGVyIGRlbGF5IHNlY29uZHNcbiAgICB0aW1lcklkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmMoKTtcblxuICAgICAgICAvLyBPbmNlIHNldFRpbWVvdXQgZnVuY3Rpb24gZXhlY3V0aW9uIGlzIGZpbmlzaGVkLCB0aW1lcklkID0gdW5kZWZpbmVkIHNvIHRoYXQgaW4gPGJyPlxuICAgICAgICAvLyB0aGUgbmV4dCBzY3JvbGwgZXZlbnQgZnVuY3Rpb24gZXhlY3V0aW9uIGNhbiBiZSBzY2hlZHVsZWQgYnkgdGhlIHNldFRpbWVvdXRcbiAgICAgICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgICB9LCBkZWxheSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5maW5pdGVTY3JvbGwgPSAocGFnZSwgY2FsbGJhY2spID0+IHtcbiAgICB0aHJvdHRsZUZ1bmN0aW9ucygoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGF2ZXonLCBbcGFnZSwgY2FsbGJhY2tdKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9PT1cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjYWxsYmFjayh7IHBhZ2U6IHBhZ2UgfSk7XG4gICAgICAgIH1cbiAgICB9LCAyMDApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/products/functions.js\n");

/***/ })

})