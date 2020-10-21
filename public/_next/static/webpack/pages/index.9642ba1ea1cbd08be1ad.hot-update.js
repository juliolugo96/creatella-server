webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/functions.js":
/*!******************************************!*\
  !*** ./components/products/functions.js ***!
  \******************************************/
/*! exports provided: dropdownOpenEvent, handleScroll, infiniteScroll, timeSince */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropdownOpenEvent\", function() { return dropdownOpenEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleScroll\", function() { return handleScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infiniteScroll\", function() { return infiniteScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeSince\", function() { return timeSince; });\n/* harmony import */ var _components_products_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/products/constants */ \"./components/products/constants.js\");\n\nvar dropdownOpenEvent = function dropdownOpenEvent() {\n  var dropdown = document.querySelector('.dropdown');\n  dropdown.addEventListener('click', function (event) {\n    event.stopPropagation();\n    dropdown.classList.toggle('is-active');\n  });\n}; /// Handle scroll\n\nvar handleScroll = function handleScroll(callback) {\n  var scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;\n  var scrollHeight = document.documentElement && document.documentElement.scrollHeight || document.body.scrollHeight;\n\n  if (scrollTop + window.innerHeight + 50 >= scrollHeight) {\n    callback(true);\n  }\n}; // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds\n\nvar throttleFunction = function throttleFunction(func, delay) {\n  // Schedule a setTimeout after delay seconds\n  setTimeout(function () {\n    func(); // Once setTimeout function execution is finished, timerId = undefined so that in <br>\n    // the next scroll event function execution can be scheduled by the setTimeout\n    // timerId = undefined;\n  }, delay);\n};\n\nvar infiniteScroll = function infiniteScroll(callback) {\n  throttleFunction(function () {\n    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {\n      callback();\n    }\n  }, 400);\n};\n\nvar formatDate = function formatDate(date) {\n  return \"\".concat(_components_products_constants__WEBPACK_IMPORTED_MODULE_0__[\"MONTHS\"][date.getMonth()], \"/\").concat(date.getDate(), \"/\").concat(date.getFullYear());\n};\n\nvar timeSince = function timeSince(date) {\n  var seconds = Math.floor((new Date() - date) / 1000);\n  var interval = seconds / 31536000;\n  interval = seconds / 2592000;\n  interval = seconds / 86400;\n  if (interval > 1 && Math.floor(interval) > 6) return formatDate(new Date(date));\n\n  if (interval > 1) {\n    var days = Math.floor(interval);\n    return days + \" day\".concat(days === 1 ? '' : 's', \" ago\");\n  }\n\n  interval = seconds / 3600;\n  if (interval > 1) return Math.floor(interval) + ' hours ago';\n  interval = seconds / 60;\n  if (interval > 1) return Math.floor(interval) + ' minutes ago';\n  return Math.floor(seconds) + ' seconds ago';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9mdW5jdGlvbnMuanM/MTAwMSJdLCJuYW1lcyI6WyJkcm9wZG93bk9wZW5FdmVudCIsImRyb3Bkb3duIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiaGFuZGxlU2Nyb2xsIiwiY2FsbGJhY2siLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5Iiwic2Nyb2xsSGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ0aHJvdHRsZUZ1bmN0aW9uIiwiZnVuYyIsImRlbGF5Iiwic2V0VGltZW91dCIsImluZmluaXRlU2Nyb2xsIiwib2Zmc2V0SGVpZ2h0IiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJNT05USFMiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsInRpbWVTaW5jZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwiaW50ZXJ2YWwiLCJkYXlzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNuQyxNQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFmO0FBQ0FGLFVBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVUMsS0FBVixFQUFpQjtBQUNoREEsU0FBSyxDQUFDQyxlQUFOO0FBQ0FMLFlBQVEsQ0FBQ00sU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDSCxHQUhEO0FBSUgsQ0FOTSxDLENBUVA7O0FBRU8sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3RDLE1BQU1DLFNBQVMsR0FDVlQsUUFBUSxDQUFDVSxlQUFULElBQTRCVixRQUFRLENBQUNVLGVBQVQsQ0FBeUJELFNBQXRELElBQW9FVCxRQUFRLENBQUNXLElBQVQsQ0FBY0YsU0FEdEY7QUFFQSxNQUFNRyxZQUFZLEdBQ2JaLFFBQVEsQ0FBQ1UsZUFBVCxJQUE0QlYsUUFBUSxDQUFDVSxlQUFULENBQXlCRSxZQUF0RCxJQUNBWixRQUFRLENBQUNXLElBQVQsQ0FBY0MsWUFGbEI7O0FBR0EsTUFBSUgsU0FBUyxHQUFHSSxNQUFNLENBQUNDLFdBQW5CLEdBQWlDLEVBQWpDLElBQXVDRixZQUEzQyxFQUF5RDtBQUNyREosWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNIO0FBQ0osQ0FUTSxDLENBV1A7O0FBQ0EsSUFBSU8sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFVQyxJQUFWLEVBQWdCQyxLQUFoQixFQUF1QjtBQUMxQztBQUNBQyxZQUFVLENBQUMsWUFBWTtBQUNuQkYsUUFBSSxHQURlLENBR25CO0FBQ0E7QUFDQTtBQUNILEdBTlMsRUFNUEMsS0FOTyxDQUFWO0FBT0gsQ0FURDs7QUFXTyxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNYLFFBQUQsRUFBYztBQUN4Q08sa0JBQWdCLENBQUMsWUFBTTtBQUNuQixRQUNJRixNQUFNLENBQUNDLFdBQVAsR0FBcUJkLFFBQVEsQ0FBQ1UsZUFBVCxDQUF5QkQsU0FBOUMsS0FDQVQsUUFBUSxDQUFDVSxlQUFULENBQXlCVSxZQUY3QixFQUdFO0FBQ0VaLGNBQVE7QUFDWDtBQUNKLEdBUGUsRUFPYixHQVBhLENBQWhCO0FBUUgsQ0FUTTs7QUFXUCxJQUFNYSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVU7QUFDekIsbUJBQVVDLHFFQUFNLENBQUNELElBQUksQ0FBQ0UsUUFBTCxFQUFELENBQWhCLGNBQXFDRixJQUFJLENBQUNHLE9BQUwsRUFBckMsY0FBdURILElBQUksQ0FBQ0ksV0FBTCxFQUF2RDtBQUNILENBRkQ7O0FBSU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0wsSUFBRCxFQUFVO0FBQy9CLE1BQUlNLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQyxJQUFJQyxJQUFKLEtBQWFULElBQWQsSUFBc0IsSUFBakMsQ0FBZDtBQUVBLE1BQUlVLFFBQVEsR0FBR0osT0FBTyxHQUFHLFFBQXpCO0FBQ0FJLFVBQVEsR0FBR0osT0FBTyxHQUFHLE9BQXJCO0FBQ0FJLFVBQVEsR0FBR0osT0FBTyxHQUFHLEtBQXJCO0FBRUEsTUFBSUksUUFBUSxHQUFHLENBQVgsSUFBZ0JILElBQUksQ0FBQ0MsS0FBTCxDQUFXRSxRQUFYLElBQXVCLENBQTNDLEVBQThDLE9BQU9YLFVBQVUsQ0FBQyxJQUFJVSxJQUFKLENBQVNULElBQVQsQ0FBRCxDQUFqQjs7QUFFOUMsTUFBSVUsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDZCxRQUFNQyxJQUFJLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFXRSxRQUFYLENBQWI7QUFDQSxXQUFPQyxJQUFJLGlCQUFVQSxJQUFJLEtBQUssQ0FBVCxHQUFhLEVBQWIsR0FBa0IsR0FBNUIsU0FBWDtBQUNIOztBQUNERCxVQUFRLEdBQUdKLE9BQU8sR0FBRyxJQUFyQjtBQUNBLE1BQUlJLFFBQVEsR0FBRyxDQUFmLEVBQWtCLE9BQU9ILElBQUksQ0FBQ0MsS0FBTCxDQUFXRSxRQUFYLElBQXVCLFlBQTlCO0FBRWxCQSxVQUFRLEdBQUdKLE9BQU8sR0FBRyxFQUFyQjtBQUNBLE1BQUlJLFFBQVEsR0FBRyxDQUFmLEVBQWtCLE9BQU9ILElBQUksQ0FBQ0MsS0FBTCxDQUFXRSxRQUFYLElBQXVCLGNBQTlCO0FBRWxCLFNBQU9ILElBQUksQ0FBQ0MsS0FBTCxDQUFXRixPQUFYLElBQXNCLGNBQTdCO0FBQ0gsQ0FwQk0iLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL2Z1bmN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1PTlRIUyB9IGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25PcGVuRXZlbnQgPSAoKSA9PiB7XG4gICAgdmFyIGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG4gICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xufTtcblxuLy8vIEhhbmRsZSBzY3JvbGxcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVNjcm9sbCA9IChjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9XG4gICAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID1cbiAgICAgICAgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB8fFxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcbiAgICBpZiAoc2Nyb2xsVG9wICsgd2luZG93LmlubmVySGVpZ2h0ICsgNTAgPj0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgIH1cbn07XG5cbi8vIFRocm90dGxlIGZ1bmN0aW9uOiBJbnB1dCBhcyBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBiZSB0aHJvdHRsZWQgYW5kIGRlbGF5IGlzIHRoZSB0aW1lIGludGVydmFsIGluIG1pbGxpc2Vjb25kc1xudmFyIHRocm90dGxlRnVuY3Rpb24gPSBmdW5jdGlvbiAoZnVuYywgZGVsYXkpIHtcbiAgICAvLyBTY2hlZHVsZSBhIHNldFRpbWVvdXQgYWZ0ZXIgZGVsYXkgc2Vjb25kc1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jKCk7XG5cbiAgICAgICAgLy8gT25jZSBzZXRUaW1lb3V0IGZ1bmN0aW9uIGV4ZWN1dGlvbiBpcyBmaW5pc2hlZCwgdGltZXJJZCA9IHVuZGVmaW5lZCBzbyB0aGF0IGluIDxicj5cbiAgICAgICAgLy8gdGhlIG5leHQgc2Nyb2xsIGV2ZW50IGZ1bmN0aW9uIGV4ZWN1dGlvbiBjYW4gYmUgc2NoZWR1bGVkIGJ5IHRoZSBzZXRUaW1lb3V0XG4gICAgICAgIC8vIHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gICAgfSwgZGVsYXkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGluZmluaXRlU2Nyb2xsID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgdGhyb3R0bGVGdW5jdGlvbigoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPT09XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH0sIDQwMCk7XG59O1xuXG5jb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gYCR7TU9OVEhTW2RhdGUuZ2V0TW9udGgoKV19LyR7ZGF0ZS5nZXREYXRlKCl9LyR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG59O1xuXG5leHBvcnQgY29uc3QgdGltZVNpbmNlID0gKGRhdGUpID0+IHtcbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBkYXRlKSAvIDEwMDApO1xuXG4gICAgdmFyIGludGVydmFsID0gc2Vjb25kcyAvIDMxNTM2MDAwO1xuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDI1OTIwMDA7XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gODY0MDA7XG5cbiAgICBpZiAoaW50ZXJ2YWwgPiAxICYmIE1hdGguZmxvb3IoaW50ZXJ2YWwpID4gNikgcmV0dXJuIGZvcm1hdERhdGUobmV3IERhdGUoZGF0ZSkpO1xuXG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihpbnRlcnZhbCk7XG4gICAgICAgIHJldHVybiBkYXlzICsgYCBkYXkke2RheXMgPT09IDEgPyAnJyA6ICdzJ30gYWdvYDtcbiAgICB9XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gMzYwMDtcbiAgICBpZiAoaW50ZXJ2YWwgPiAxKSByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyAnIGhvdXJzIGFnbyc7XG5cbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyA2MDtcbiAgICBpZiAoaW50ZXJ2YWwgPiAxKSByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyAnIG1pbnV0ZXMgYWdvJztcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHNlY29uZHMpICsgJyBzZWNvbmRzIGFnbyc7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/products/functions.js\n");

/***/ })

})