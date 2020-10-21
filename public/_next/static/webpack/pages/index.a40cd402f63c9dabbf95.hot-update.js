webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/functions.js":
/*!******************************************!*\
  !*** ./components/products/functions.js ***!
  \******************************************/
/*! exports provided: dropdownOpenEvent, infiniteScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropdownOpenEvent\", function() { return dropdownOpenEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infiniteScroll\", function() { return infiniteScroll; });\nvar dropdownOpenEvent = function dropdownOpenEvent() {\n  var dropdown = document.querySelector('.dropdown');\n  dropdown.addEventListener('click', function (event) {\n    event.stopPropagation();\n    dropdown.classList.toggle('is-active');\n  });\n}; // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds\n\nvar throttleFunction = function throttleFunction(func, delay) {\n  // Schedule a setTimeout after delay seconds\n  setTimeout(function () {\n    func(); // Once setTimeout function execution is finished, timerId = undefined so that in <br>\n    // the next scroll event function execution can be scheduled by the setTimeout\n    // timerId = undefined;\n  }, delay);\n};\n\nvar infiniteScroll = function infiniteScroll(callback) {\n  throttleFunction(function () {\n    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {\n      callback();\n    }\n  }, 400);\n};\n\nvar timeSince = function timeSince(date) {\n  var seconds = Math.floor((new Date() - date) / 1000);\n  var interval = seconds / 31536000;\n  interval = seconds / 86400;\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' days ago';\n  }\n\n  interval = seconds / 3600;\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' hours ago';\n  }\n\n  interval = seconds / 60;\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' minutes ago';\n  }\n\n  return Math.floor(seconds) + ' seconds';\n};\n\nvar aDay = 24 * 60 * 60 * 1000;\nconsole.log(timeSince(new Date(Date.now() - aDay)));\nconsole.log(timeSince(new Date(Date.now() - aDay * 2)));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9mdW5jdGlvbnMuanM/MTAwMSJdLCJuYW1lcyI6WyJkcm9wZG93bk9wZW5FdmVudCIsImRyb3Bkb3duIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGhyb3R0bGVGdW5jdGlvbiIsImZ1bmMiLCJkZWxheSIsInNldFRpbWVvdXQiLCJpbmZpbml0ZVNjcm9sbCIsImNhbGxiYWNrIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiLCJ0aW1lU2luY2UiLCJkYXRlIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJpbnRlcnZhbCIsImFEYXkiLCJjb25zb2xlIiwibG9nIiwibm93Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDbkMsTUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUNBRixVQUFRLENBQUNHLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVVDLEtBQVYsRUFBaUI7QUFDaERBLFNBQUssQ0FBQ0MsZUFBTjtBQUNBTCxZQUFRLENBQUNNLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLFdBQTFCO0FBQ0gsR0FIRDtBQUlILENBTk0sQyxDQVFQOztBQUNBLElBQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBVUMsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUI7QUFDMUM7QUFDQUMsWUFBVSxDQUFDLFlBQVk7QUFDbkJGLFFBQUksR0FEZSxDQUduQjtBQUNBO0FBQ0E7QUFDSCxHQU5TLEVBTVBDLEtBTk8sQ0FBVjtBQU9ILENBVEQ7O0FBV08sSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQWM7QUFDeENMLGtCQUFnQixDQUFDLFlBQU07QUFDbkIsUUFDSU0sTUFBTSxDQUFDQyxXQUFQLEdBQXFCZCxRQUFRLENBQUNlLGVBQVQsQ0FBeUJDLFNBQTlDLEtBQ0FoQixRQUFRLENBQUNlLGVBQVQsQ0FBeUJFLFlBRjdCLEVBR0U7QUFDRUwsY0FBUTtBQUNYO0FBQ0osR0FQZSxFQU9iLEdBUGEsQ0FBaEI7QUFRSCxDQVRNOztBQVdQLElBQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUN4QixNQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUMsSUFBSUMsSUFBSixLQUFhSixJQUFkLElBQXNCLElBQWpDLENBQWQ7QUFFQSxNQUFJSyxRQUFRLEdBQUdKLE9BQU8sR0FBRyxRQUF6QjtBQUNBSSxVQUFRLEdBQUdKLE9BQU8sR0FBRyxLQUFyQjs7QUFDQSxNQUFJSSxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNkLFdBQU9ILElBQUksQ0FBQ0MsS0FBTCxDQUFXRSxRQUFYLElBQXVCLFdBQTlCO0FBQ0g7O0FBQ0RBLFVBQVEsR0FBR0osT0FBTyxHQUFHLElBQXJCOztBQUNBLE1BQUlJLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2QsV0FBT0gsSUFBSSxDQUFDQyxLQUFMLENBQVdFLFFBQVgsSUFBdUIsWUFBOUI7QUFDSDs7QUFDREEsVUFBUSxHQUFHSixPQUFPLEdBQUcsRUFBckI7O0FBQ0EsTUFBSUksUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDZCxXQUFPSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0UsUUFBWCxJQUF1QixjQUE5QjtBQUNIOztBQUNELFNBQU9ILElBQUksQ0FBQ0MsS0FBTCxDQUFXRixPQUFYLElBQXNCLFVBQTdCO0FBQ0gsQ0FqQkQ7O0FBa0JBLElBQUlLLElBQUksR0FBRyxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsSUFBMUI7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlULFNBQVMsQ0FBQyxJQUFJSyxJQUFKLENBQVNBLElBQUksQ0FBQ0ssR0FBTCxLQUFhSCxJQUF0QixDQUFELENBQXJCO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxTQUFTLENBQUMsSUFBSUssSUFBSixDQUFTQSxJQUFJLENBQUNLLEdBQUwsS0FBYUgsSUFBSSxHQUFHLENBQTdCLENBQUQsQ0FBckIiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL2Z1bmN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkcm9wZG93bk9wZW5FdmVudCA9ICgpID0+IHtcbiAgICB2YXIgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG59O1xuXG4vLyBUaHJvdHRsZSBmdW5jdGlvbjogSW5wdXQgYXMgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gYmUgdGhyb3R0bGVkIGFuZCBkZWxheSBpcyB0aGUgdGltZSBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbnZhciB0aHJvdHRsZUZ1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmMsIGRlbGF5KSB7XG4gICAgLy8gU2NoZWR1bGUgYSBzZXRUaW1lb3V0IGFmdGVyIGRlbGF5IHNlY29uZHNcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuYygpO1xuXG4gICAgICAgIC8vIE9uY2Ugc2V0VGltZW91dCBmdW5jdGlvbiBleGVjdXRpb24gaXMgZmluaXNoZWQsIHRpbWVySWQgPSB1bmRlZmluZWQgc28gdGhhdCBpbiA8YnI+XG4gICAgICAgIC8vIHRoZSBuZXh0IHNjcm9sbCBldmVudCBmdW5jdGlvbiBleGVjdXRpb24gY2FuIGJlIHNjaGVkdWxlZCBieSB0aGUgc2V0VGltZW91dFxuICAgICAgICAvLyB0aW1lcklkID0gdW5kZWZpbmVkO1xuICAgIH0sIGRlbGF5KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbmZpbml0ZVNjcm9sbCA9IChjYWxsYmFjaykgPT4ge1xuICAgIHRocm90dGxlRnVuY3Rpb24oKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID09PVxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9LCA0MDApO1xufTtcblxuY29uc3QgdGltZVNpbmNlID0gKGRhdGUpID0+IHtcbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBkYXRlKSAvIDEwMDApO1xuXG4gICAgdmFyIGludGVydmFsID0gc2Vjb25kcyAvIDMxNTM2MDAwO1xuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDg2NDAwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgJyBkYXlzIGFnbyc7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDM2MDA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyAnIGhvdXJzIGFnbyc7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDYwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgJyBtaW51dGVzIGFnbyc7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLmZsb29yKHNlY29uZHMpICsgJyBzZWNvbmRzJztcbn07XG52YXIgYURheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5jb25zb2xlLmxvZyh0aW1lU2luY2UobmV3IERhdGUoRGF0ZS5ub3coKSAtIGFEYXkpKSk7XG5jb25zb2xlLmxvZyh0aW1lU2luY2UobmV3IERhdGUoRGF0ZS5ub3coKSAtIGFEYXkgKiAyKSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/products/functions.js\n");

/***/ })

})