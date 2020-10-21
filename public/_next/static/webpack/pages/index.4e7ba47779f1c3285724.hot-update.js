webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/functions.js":
/*!******************************************!*\
  !*** ./components/products/functions.js ***!
  \******************************************/
/*! exports provided: dropdownOpenEvent, infiniteScroll, timeSince */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropdownOpenEvent\", function() { return dropdownOpenEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infiniteScroll\", function() { return infiniteScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeSince\", function() { return timeSince; });\n/* harmony import */ var _components_products_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/products/constants */ \"./components/products/constants.js\");\n\nvar dropdownOpenEvent = function dropdownOpenEvent() {\n  var dropdown = document.querySelector('.dropdown');\n  dropdown.addEventListener('click', function (event) {\n    event.stopPropagation();\n    dropdown.classList.toggle('is-active');\n  });\n}; // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds\n\nvar throttleFunction = function throttleFunction(func, delay) {\n  // Schedule a setTimeout after delay seconds\n  setTimeout(function () {\n    func(); // Once setTimeout function execution is finished, timerId = undefined so that in <br>\n    // the next scroll event function execution can be scheduled by the setTimeout\n    // timerId = undefined;\n  }, delay);\n};\n\nvar infiniteScroll = function infiniteScroll(callback) {\n  throttleFunction(function () {\n    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {\n      callback();\n    }\n  }, 400);\n};\n\nvar formatDate = function formatDate(date) {};\n\nvar timeSince = function timeSince(date) {\n  var seconds = Math.floor((new Date() - date) / 1000);\n  var interval = seconds / 31536000;\n  interval = seconds / 2592000;\n  interval = seconds / 86400;\n\n  if (interval > 1 && Math.floor(interval) > 6) {\n    return formatDate(new Date(date));\n  }\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' days';\n  }\n\n  interval = seconds / 3600;\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' hours';\n  }\n\n  interval = seconds / 60;\n\n  if (interval > 1) {\n    return Math.floor(interval) + ' minutes';\n  }\n\n  return Math.floor(seconds) + ' seconds';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9mdW5jdGlvbnMuanM/MTAwMSJdLCJuYW1lcyI6WyJkcm9wZG93bk9wZW5FdmVudCIsImRyb3Bkb3duIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGhyb3R0bGVGdW5jdGlvbiIsImZ1bmMiLCJkZWxheSIsInNldFRpbWVvdXQiLCJpbmZpbml0ZVNjcm9sbCIsImNhbGxiYWNrIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiLCJmb3JtYXREYXRlIiwiZGF0ZSIsInRpbWVTaW5jZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwiaW50ZXJ2YWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNuQyxNQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFmO0FBQ0FGLFVBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVUMsS0FBVixFQUFpQjtBQUNoREEsU0FBSyxDQUFDQyxlQUFOO0FBQ0FMLFlBQVEsQ0FBQ00sU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDSCxHQUhEO0FBSUgsQ0FOTSxDLENBUVA7O0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFVQyxJQUFWLEVBQWdCQyxLQUFoQixFQUF1QjtBQUMxQztBQUNBQyxZQUFVLENBQUMsWUFBWTtBQUNuQkYsUUFBSSxHQURlLENBR25CO0FBQ0E7QUFDQTtBQUNILEdBTlMsRUFNUEMsS0FOTyxDQUFWO0FBT0gsQ0FURDs7QUFXTyxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBYztBQUN4Q0wsa0JBQWdCLENBQUMsWUFBTTtBQUNuQixRQUNJTSxNQUFNLENBQUNDLFdBQVAsR0FBcUJkLFFBQVEsQ0FBQ2UsZUFBVCxDQUF5QkMsU0FBOUMsS0FDQWhCLFFBQVEsQ0FBQ2UsZUFBVCxDQUF5QkUsWUFGN0IsRUFHRTtBQUNFTCxjQUFRO0FBQ1g7QUFDSixHQVBlLEVBT2IsR0FQYSxDQUFoQjtBQVFILENBVE07O0FBV1AsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVLENBQUUsQ0FBL0I7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0QsSUFBRCxFQUFVO0FBQy9CLE1BQUlFLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQyxJQUFJQyxJQUFKLEtBQWFMLElBQWQsSUFBc0IsSUFBakMsQ0FBZDtBQUVBLE1BQUlNLFFBQVEsR0FBR0osT0FBTyxHQUFHLFFBQXpCO0FBQ0FJLFVBQVEsR0FBR0osT0FBTyxHQUFHLE9BQXJCO0FBQ0FJLFVBQVEsR0FBR0osT0FBTyxHQUFHLEtBQXJCOztBQUVBLE1BQUlJLFFBQVEsR0FBRyxDQUFYLElBQWdCSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0UsUUFBWCxJQUF1QixDQUEzQyxFQUE4QztBQUMxQyxXQUFPUCxVQUFVLENBQUMsSUFBSU0sSUFBSixDQUFTTCxJQUFULENBQUQsQ0FBakI7QUFDSDs7QUFFRCxNQUFJTSxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNkLFdBQU9ILElBQUksQ0FBQ0MsS0FBTCxDQUFXRSxRQUFYLElBQXVCLE9BQTlCO0FBQ0g7O0FBQ0RBLFVBQVEsR0FBR0osT0FBTyxHQUFHLElBQXJCOztBQUNBLE1BQUlJLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2QsV0FBT0gsSUFBSSxDQUFDQyxLQUFMLENBQVdFLFFBQVgsSUFBdUIsUUFBOUI7QUFDSDs7QUFDREEsVUFBUSxHQUFHSixPQUFPLEdBQUcsRUFBckI7O0FBQ0EsTUFBSUksUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDZCxXQUFPSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0UsUUFBWCxJQUF1QixVQUE5QjtBQUNIOztBQUNELFNBQU9ILElBQUksQ0FBQ0MsS0FBTCxDQUFXRixPQUFYLElBQXNCLFVBQTdCO0FBQ0gsQ0F2Qk0iLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL2Z1bmN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1PTlRIUyB9IGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25PcGVuRXZlbnQgPSAoKSA9PiB7XG4gICAgdmFyIGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG4gICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xufTtcblxuLy8gVGhyb3R0bGUgZnVuY3Rpb246IElucHV0IGFzIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGJlIHRocm90dGxlZCBhbmQgZGVsYXkgaXMgdGhlIHRpbWUgaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzXG52YXIgdGhyb3R0bGVGdW5jdGlvbiA9IGZ1bmN0aW9uIChmdW5jLCBkZWxheSkge1xuICAgIC8vIFNjaGVkdWxlIGEgc2V0VGltZW91dCBhZnRlciBkZWxheSBzZWNvbmRzXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmMoKTtcblxuICAgICAgICAvLyBPbmNlIHNldFRpbWVvdXQgZnVuY3Rpb24gZXhlY3V0aW9uIGlzIGZpbmlzaGVkLCB0aW1lcklkID0gdW5kZWZpbmVkIHNvIHRoYXQgaW4gPGJyPlxuICAgICAgICAvLyB0aGUgbmV4dCBzY3JvbGwgZXZlbnQgZnVuY3Rpb24gZXhlY3V0aW9uIGNhbiBiZSBzY2hlZHVsZWQgYnkgdGhlIHNldFRpbWVvdXRcbiAgICAgICAgLy8gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgICB9LCBkZWxheSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5maW5pdGVTY3JvbGwgPSAoY2FsbGJhY2spID0+IHtcbiAgICB0aHJvdHRsZUZ1bmN0aW9uKCgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9PT1cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfSwgNDAwKTtcbn07XG5cbmNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge307XG5cbmV4cG9ydCBjb25zdCB0aW1lU2luY2UgPSAoZGF0ZSkgPT4ge1xuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigobmV3IERhdGUoKSAtIGRhdGUpIC8gMTAwMCk7XG5cbiAgICB2YXIgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gMzE1MzYwMDA7XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gMjU5MjAwMDtcbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyA4NjQwMDtcblxuICAgIGlmIChpbnRlcnZhbCA+IDEgJiYgTWF0aC5mbG9vcihpbnRlcnZhbCkgPiA2KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXREYXRlKG5ldyBEYXRlKGRhdGUpKTtcbiAgICB9XG5cbiAgICBpZiAoaW50ZXJ2YWwgPiAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGludGVydmFsKSArICcgZGF5cyc7XG4gICAgfVxuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDM2MDA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyAnIGhvdXJzJztcbiAgICB9XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gNjA7XG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyAnIG1pbnV0ZXMnO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5mbG9vcihzZWNvbmRzKSArICcgc2Vjb25kcyc7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/products/functions.js\n");

/***/ })

})