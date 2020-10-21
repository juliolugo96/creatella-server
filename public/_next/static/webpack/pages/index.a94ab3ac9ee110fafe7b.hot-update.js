webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/functions.js":
/*!******************************************!*\
  !*** ./components/products/functions.js ***!
  \******************************************/
/*! exports provided: dropdownOpenEvent, infiniteScroll, timeSince */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropdownOpenEvent\", function() { return dropdownOpenEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infiniteScroll\", function() { return infiniteScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeSince\", function() { return timeSince; });\nvar dropdownOpenEvent = function dropdownOpenEvent() {\n  var dropdown = document.querySelector('.dropdown');\n  dropdown.addEventListener('click', function (event) {\n    event.stopPropagation();\n    dropdown.classList.toggle('is-active');\n  });\n}; // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds\n\nvar throttleFunction = function throttleFunction(func, delay) {\n  // Schedule a setTimeout after delay seconds\n  setTimeout(function () {\n    func(); // Once setTimeout function execution is finished, timerId = undefined so that in <br>\n    // the next scroll event function execution can be scheduled by the setTimeout\n    // timerId = undefined;\n  }, delay);\n};\n\nvar infiniteScroll = function infiniteScroll(callback) {\n  throttleFunction(function () {\n    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {\n      callback();\n    }\n  }, 400);\n};\nvar timeSince = function timeSince(date) {\n  var seconds = Math.floor((new Date() - date) / 1000);\n  var interval = seconds / 31536000;\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' years';\n  }\n\n  interval = seconds / 2592000;\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' months';\n  }\n\n  interval = seconds / 86400;\n\n  if (interval > 1 && Math.floor(interval) > 6) {\n    return new Date(date);\n  }\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' days';\n  }\n\n  interval = seconds / 3600;\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' hours';\n  }\n\n  interval = seconds / 60;\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' minutes';\n  }\n\n  return Math.floor(seconds) + ' seconds';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9mdW5jdGlvbnMuanM/MTAwMSJdLCJuYW1lcyI6WyJkcm9wZG93bk9wZW5FdmVudCIsImRyb3Bkb3duIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGhyb3R0bGVGdW5jdGlvbiIsImZ1bmMiLCJkZWxheSIsInNldFRpbWVvdXQiLCJpbmZpbml0ZVNjcm9sbCIsImNhbGxiYWNrIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiLCJ0aW1lU2luY2UiLCJkYXRlIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJpbnRlcnZhbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDbkMsTUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUNBRixVQUFRLENBQUNHLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVVDLEtBQVYsRUFBaUI7QUFDaERBLFNBQUssQ0FBQ0MsZUFBTjtBQUNBTCxZQUFRLENBQUNNLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLFdBQTFCO0FBQ0gsR0FIRDtBQUlILENBTk0sQyxDQVFQOztBQUNBLElBQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBVUMsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUI7QUFDMUM7QUFDQUMsWUFBVSxDQUFDLFlBQVk7QUFDbkJGLFFBQUksR0FEZSxDQUduQjtBQUNBO0FBQ0E7QUFDSCxHQU5TLEVBTVBDLEtBTk8sQ0FBVjtBQU9ILENBVEQ7O0FBV08sSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQWM7QUFDeENMLGtCQUFnQixDQUFDLFlBQU07QUFDbkIsUUFDSU0sTUFBTSxDQUFDQyxXQUFQLEdBQXFCZCxRQUFRLENBQUNlLGVBQVQsQ0FBeUJDLFNBQTlDLEtBQ0FoQixRQUFRLENBQUNlLGVBQVQsQ0FBeUJFLFlBRjdCLEVBR0U7QUFDRUwsY0FBUTtBQUNYO0FBQ0osR0FQZSxFQU9iLEdBUGEsQ0FBaEI7QUFRSCxDQVRNO0FBV0EsSUFBTU0sU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0FBQy9CLE1BQUlDLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQyxJQUFJQyxJQUFKLEtBQWFKLElBQWQsSUFBc0IsSUFBakMsQ0FBZDtBQUVBLE1BQUlLLFFBQVEsR0FBR0osT0FBTyxHQUFHLFFBQXpCOztBQUVBLE1BQUlJLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2QsV0FBT0gsSUFBSSxDQUFDQyxLQUFMLENBQVdFLFFBQVgsSUFBdUIsUUFBOUI7QUFDSDs7QUFDREEsVUFBUSxHQUFHSixPQUFPLEdBQUcsT0FBckI7O0FBQ0EsTUFBSUksUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDZCxXQUFPSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0UsUUFBWCxJQUF1QixTQUE5QjtBQUNIOztBQUNEQSxVQUFRLEdBQUdKLE9BQU8sR0FBRyxLQUFyQjs7QUFFQSxNQUFJSSxRQUFRLEdBQUcsQ0FBWCxJQUFnQkgsSUFBSSxDQUFDQyxLQUFMLENBQVdFLFFBQVgsSUFBdUIsQ0FBM0MsRUFBOEM7QUFDMUMsV0FBTyxJQUFJRCxJQUFKLENBQVNKLElBQVQsQ0FBUDtBQUNIOztBQUVELE1BQUlLLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2QsV0FBT0gsSUFBSSxDQUFDQyxLQUFMLENBQVdFLFFBQVgsSUFBdUIsT0FBOUI7QUFDSDs7QUFDREEsVUFBUSxHQUFHSixPQUFPLEdBQUcsSUFBckI7O0FBQ0EsTUFBSUksUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDZCxXQUFPSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0UsUUFBWCxJQUF1QixRQUE5QjtBQUNIOztBQUNEQSxVQUFRLEdBQUdKLE9BQU8sR0FBRyxFQUFyQjs7QUFDQSxNQUFJSSxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNkLFdBQU9ILElBQUksQ0FBQ0MsS0FBTCxDQUFXRSxRQUFYLElBQXVCLFVBQTlCO0FBQ0g7O0FBQ0QsU0FBT0gsSUFBSSxDQUFDQyxLQUFMLENBQVdGLE9BQVgsSUFBc0IsVUFBN0I7QUFDSCxDQTlCTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZHVjdHMvZnVuY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRyb3Bkb3duT3BlbkV2ZW50ID0gKCkgPT4ge1xuICAgIHZhciBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpO1xuICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcbn07XG5cbi8vIFRocm90dGxlIGZ1bmN0aW9uOiBJbnB1dCBhcyBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBiZSB0aHJvdHRsZWQgYW5kIGRlbGF5IGlzIHRoZSB0aW1lIGludGVydmFsIGluIG1pbGxpc2Vjb25kc1xudmFyIHRocm90dGxlRnVuY3Rpb24gPSBmdW5jdGlvbiAoZnVuYywgZGVsYXkpIHtcbiAgICAvLyBTY2hlZHVsZSBhIHNldFRpbWVvdXQgYWZ0ZXIgZGVsYXkgc2Vjb25kc1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jKCk7XG5cbiAgICAgICAgLy8gT25jZSBzZXRUaW1lb3V0IGZ1bmN0aW9uIGV4ZWN1dGlvbiBpcyBmaW5pc2hlZCwgdGltZXJJZCA9IHVuZGVmaW5lZCBzbyB0aGF0IGluIDxicj5cbiAgICAgICAgLy8gdGhlIG5leHQgc2Nyb2xsIGV2ZW50IGZ1bmN0aW9uIGV4ZWN1dGlvbiBjYW4gYmUgc2NoZWR1bGVkIGJ5IHRoZSBzZXRUaW1lb3V0XG4gICAgICAgIC8vIHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gICAgfSwgZGVsYXkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGluZmluaXRlU2Nyb2xsID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgdGhyb3R0bGVGdW5jdGlvbigoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPT09XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH0sIDQwMCk7XG59O1xuXG5leHBvcnQgY29uc3QgdGltZVNpbmNlID0gKGRhdGUpID0+IHtcbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBkYXRlKSAvIDEwMDApO1xuXG4gICAgdmFyIGludGVydmFsID0gc2Vjb25kcyAvIDMxNTM2MDAwO1xuXG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyAnIHllYXJzJztcbiAgICB9XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gMjU5MjAwMDtcbiAgICBpZiAoaW50ZXJ2YWwgPiAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGludGVydmFsKSArICcgbW9udGhzJztcbiAgICB9XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gODY0MDA7XG5cbiAgICBpZiAoaW50ZXJ2YWwgPiAxICYmIE1hdGguZmxvb3IoaW50ZXJ2YWwpID4gNikge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyAnIGRheXMnO1xuICAgIH1cbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyAzNjAwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgJyBob3Vycyc7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDYwO1xuICAgIGlmIChpbnRlcnZhbCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW50ZXJ2YWwpICsgJyBtaW51dGVzJztcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguZmxvb3Ioc2Vjb25kcykgKyAnIHNlY29uZHMnO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/products/functions.js\n");

/***/ })

})