webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/functions.js":
/*!******************************************!*\
  !*** ./components/products/functions.js ***!
  \******************************************/
/*! exports provided: dropdownOpenEvent, infiniteScroll, timeSince */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropdownOpenEvent\", function() { return dropdownOpenEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infiniteScroll\", function() { return infiniteScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeSince\", function() { return timeSince; });\n/* harmony import */ var _components_products_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/products/constants */ \"./components/products/constants.js\");\n\nvar dropdownOpenEvent = function dropdownOpenEvent() {\n  var dropdown = document.querySelector('.dropdown');\n  dropdown.addEventListener('click', function (event) {\n    event.stopPropagation();\n    dropdown.classList.toggle('is-active');\n  });\n}; // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds\n\nvar throttleFunction = function throttleFunction(func, delay) {\n  // Schedule a setTimeout after delay seconds\n  setTimeout(function () {\n    func(); // Once setTimeout function execution is finished, timerId = undefined so that in <br>\n    // the next scroll event function execution can be scheduled by the setTimeout\n    // timerId = undefined;\n  }, delay);\n};\n\nvar infiniteScroll = function infiniteScroll(callback) {\n  throttleFunction(function () {\n    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {\n      callback();\n    }\n  }, 400);\n};\n\nvar formatDate = function formatDate(date) {\n  return;\n};\n\nvar timeSince = function timeSince(date) {\n  var seconds = Math.floor((new Date() - date) / 1000);\n  var interval = seconds / 31536000;\n  interval = seconds / 2592000;\n  interval = seconds / 86400;\n\n  if (interval > 1 && Math.floor(interval) > 6) {\n    return formatDate(new Date(date));\n  }\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' days';\n  }\n\n  interval = seconds / 3600;\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' hours';\n  }\n\n  interval = seconds / 60;\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' minutes';\n  }\n\n  return Math.floor(seconds) + ' seconds';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9mdW5jdGlvbnMuanM/MTAwMSJdLCJuYW1lcyI6WyJkcm9wZG93bk9wZW5FdmVudCIsImRyb3Bkb3duIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGhyb3R0bGVGdW5jdGlvbiIsImZ1bmMiLCJkZWxheSIsInNldFRpbWVvdXQiLCJpbmZpbml0ZVNjcm9sbCIsImNhbGxiYWNrIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiLCJmb3JtYXREYXRlIiwiZGF0ZSIsInRpbWVTaW5jZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwiaW50ZXJ2YWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNuQyxNQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFmO0FBQ0FGLFVBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVUMsS0FBVixFQUFpQjtBQUNoREEsU0FBSyxDQUFDQyxlQUFOO0FBQ0FMLFlBQVEsQ0FBQ00sU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDSCxHQUhEO0FBSUgsQ0FOTSxDLENBUVA7O0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFVQyxJQUFWLEVBQWdCQyxLQUFoQixFQUF1QjtBQUMxQztBQUNBQyxZQUFVLENBQUMsWUFBWTtBQUNuQkYsUUFBSSxHQURlLENBR25CO0FBQ0E7QUFDQTtBQUNILEdBTlMsRUFNUEMsS0FOTyxDQUFWO0FBT0gsQ0FURDs7QUFXTyxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBYztBQUN4Q0wsa0JBQWdCLENBQUMsWUFBTTtBQUNuQixRQUNJTSxNQUFNLENBQUNDLFdBQVAsR0FBcUJkLFFBQVEsQ0FBQ2UsZUFBVCxDQUF5QkMsU0FBOUMsS0FDQWhCLFFBQVEsQ0FBQ2UsZUFBVCxDQUF5QkUsWUFGN0IsRUFHRTtBQUNFTCxjQUFRO0FBQ1g7QUFDSixHQVBlLEVBT2IsR0FQYSxDQUFoQjtBQVFILENBVE07O0FBV1AsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBRXpCO0FBQ0gsQ0FIRDs7QUFLTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDRCxJQUFELEVBQVU7QUFDL0IsTUFBSUUsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDLElBQUlDLElBQUosS0FBYUwsSUFBZCxJQUFzQixJQUFqQyxDQUFkO0FBRUEsTUFBSU0sUUFBUSxHQUFHSixPQUFPLEdBQUcsUUFBekI7QUFDQUksVUFBUSxHQUFHSixPQUFPLEdBQUcsT0FBckI7QUFDQUksVUFBUSxHQUFHSixPQUFPLEdBQUcsS0FBckI7O0FBRUEsTUFBSUksUUFBUSxHQUFHLENBQVgsSUFBZ0JILElBQUksQ0FBQ0MsS0FBTCxDQUFXRSxRQUFYLElBQXVCLENBQTNDLEVBQThDO0FBQzFDLFdBQU9QLFVBQVUsQ0FBQyxJQUFJTSxJQUFKLENBQVNMLElBQVQsQ0FBRCxDQUFqQjtBQUNIOztBQUVELE1BQUlNLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2QsV0FBT0gsSUFBSSxDQUFDQyxLQUFMLENBQVdFLFFBQVgsSUFBdUIsT0FBOUI7QUFDSDs7QUFDREEsVUFBUSxHQUFHSixPQUFPLEdBQUcsSUFBckI7O0FBQ0EsTUFBSUksUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDZCxXQUFPSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0UsUUFBWCxJQUF1QixRQUE5QjtBQUNIOztBQUNEQSxVQUFRLEdBQUdKLE9BQU8sR0FBRyxFQUFyQjs7QUFDQSxNQUFJSSxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNkLFdBQU9ILElBQUksQ0FBQ0MsS0FBTCxDQUFXRSxRQUFYLElBQXVCLFVBQTlCO0FBQ0g7O0FBQ0QsU0FBT0gsSUFBSSxDQUFDQyxLQUFMLENBQVdGLE9BQVgsSUFBc0IsVUFBN0I7QUFDSCxDQXZCTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZHVjdHMvZnVuY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTU9OVEhTIH0gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bk9wZW5FdmVudCA9ICgpID0+IHtcbiAgICB2YXIgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG59O1xuXG4vLyBUaHJvdHRsZSBmdW5jdGlvbjogSW5wdXQgYXMgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gYmUgdGhyb3R0bGVkIGFuZCBkZWxheSBpcyB0aGUgdGltZSBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbnZhciB0aHJvdHRsZUZ1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmMsIGRlbGF5KSB7XG4gICAgLy8gU2NoZWR1bGUgYSBzZXRUaW1lb3V0IGFmdGVyIGRlbGF5IHNlY29uZHNcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuYygpO1xuXG4gICAgICAgIC8vIE9uY2Ugc2V0VGltZW91dCBmdW5jdGlvbiBleGVjdXRpb24gaXMgZmluaXNoZWQsIHRpbWVySWQgPSB1bmRlZmluZWQgc28gdGhhdCBpbiA8YnI+XG4gICAgICAgIC8vIHRoZSBuZXh0IHNjcm9sbCBldmVudCBmdW5jdGlvbiBleGVjdXRpb24gY2FuIGJlIHNjaGVkdWxlZCBieSB0aGUgc2V0VGltZW91dFxuICAgICAgICAvLyB0aW1lcklkID0gdW5kZWZpbmVkO1xuICAgIH0sIGRlbGF5KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbmZpbml0ZVNjcm9sbCA9IChjYWxsYmFjaykgPT4ge1xuICAgIHRocm90dGxlRnVuY3Rpb24oKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID09PVxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9LCA0MDApO1xufTtcblxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XG5cbiAgICByZXR1cm4gXG59O1xuXG5leHBvcnQgY29uc3QgdGltZVNpbmNlID0gKGRhdGUpID0+IHtcbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBkYXRlKSAvIDEwMDApO1xuXG4gICAgdmFyIGludGVydmFsID0gc2Vjb25kcyAvIDMxNTM2MDAwO1xuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDI1OTIwMDA7XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gODY0MDA7XG5cbiAgICBpZiAoaW50ZXJ2YWwgPiAxICYmIE1hdGguZmxvb3IoaW50ZXJ2YWwpID4gNikge1xuICAgICAgICByZXR1cm4gZm9ybWF0RGF0ZShuZXcgRGF0ZShkYXRlKSk7XG4gICAgfVxuXG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyAnIGRheXMnO1xuICAgIH1cbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyAzNjAwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgJyBob3Vycyc7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDYwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgJyBtaW51dGVzJztcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguZmxvb3Ioc2Vjb25kcykgKyAnIHNlY29uZHMnO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/products/functions.js\n");

/***/ })

})