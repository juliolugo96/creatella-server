webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/functions.js":
/*!******************************************!*\
  !*** ./components/products/functions.js ***!
  \******************************************/
/*! exports provided: willShowAd, generateRandomImageUrl, handleScroll, infiniteScroll, timeSince, dropdownOpenEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"willShowAd\", function() { return willShowAd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateRandomImageUrl\", function() { return generateRandomImageUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleScroll\", function() { return handleScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infiniteScroll\", function() { return infiniteScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeSince\", function() { return timeSince; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropdownOpenEvent\", function() { return dropdownOpenEvent; });\n/* harmony import */ var _components_products_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/products/constants */ \"./components/products/constants.js\");\n\n/**\n    Ads related functions\n */\n\nvar willShowAd = function willShowAd(id) {\n  return id % _components_products_constants__WEBPACK_IMPORTED_MODULE_0__[\"AD_FREQUENCY\"] === 0;\n};\nvar generateRandomImageUrl = function generateRandomImageUrl() {\n  var random = Math.floor(Math.random() * 1000);\n  var lastAdSeen = sessionStorage.getItem('lastRandom');\n\n  while (random == lastAdSeen) {\n    random = Math.floor(Math.random() * 1000);\n  }\n\n  sessionStorage.setItem('lastRandom', random);\n  return \"\".concat(\"http://localhost:3000\", \"/ads?r=\").concat(random);\n};\n/**\n    Scrolling functions\n */\n\nvar handleScroll = function handleScroll(callback) {\n  var scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;\n  var scrollHeight = document.documentElement && document.documentElement.scrollHeight || document.body.scrollHeight;\n\n  if (scrollTop + window.innerHeight + 50 >= scrollHeight) {\n    callback(true);\n  }\n}; // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds\n\nvar throttleFunction = function throttleFunction(func, delay) {\n  // Schedule a setTimeout after delay seconds\n  setTimeout(function () {\n    func(); // Once setTimeout function execution is finished, timerId = undefined so that in <br>\n    // the next scroll event function execution can be scheduled by the setTimeout\n    // timerId = undefined;\n  }, delay);\n};\n\nvar infiniteScroll = function infiniteScroll(callback) {\n  throttleFunction(function () {\n    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {\n      callback();\n    }\n  }, 400);\n};\n\nvar formatDate = function formatDate(date) {\n  return \"\".concat(_components_products_constants__WEBPACK_IMPORTED_MODULE_0__[\"MONTHS\"][date.getMonth()], \"/\").concat(date.getDate(), \"/\").concat(date.getFullYear());\n};\n\nvar timeSince = function timeSince(date) {\n  var seconds = Math.floor((new Date() - date) / 1000);\n  var interval = seconds / 31536000;\n  interval = seconds / 2592000;\n  interval = seconds / 86400;\n  if (interval > 1 && Math.floor(interval) > 6) return formatDate(new Date(date));\n\n  if (interval > 1) {\n    var days = Math.floor(interval);\n    return days + \" day\".concat(days === 1 ? '' : 's', \" ago\");\n  }\n\n  interval = seconds / 3600;\n  if (interval > 1) return Math.floor(interval) + ' hours ago';\n  interval = seconds / 60;\n  if (interval > 1) return Math.floor(interval) + ' minutes ago';\n  return Math.floor(seconds) + ' seconds ago';\n}; /// Utility function\n\nvar dropdownOpenEvent = function dropdownOpenEvent() {\n  var dropdown = document.querySelector('.dropdown');\n  dropdown.addEventListener('click', function (event) {\n    event.stopPropagation();\n    dropdown.classList.toggle('is-active');\n  });\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9mdW5jdGlvbnMuanM/MTAwMSJdLCJuYW1lcyI6WyJ3aWxsU2hvd0FkIiwiaWQiLCJBRF9GUkVRVUVOQ1kiLCJnZW5lcmF0ZVJhbmRvbUltYWdlVXJsIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwibGFzdEFkU2VlbiIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJwcm9jZXNzIiwiaGFuZGxlU2Nyb2xsIiwiY2FsbGJhY2siLCJzY3JvbGxUb3AiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInRocm90dGxlRnVuY3Rpb24iLCJmdW5jIiwiZGVsYXkiLCJzZXRUaW1lb3V0IiwiaW5maW5pdGVTY3JvbGwiLCJvZmZzZXRIZWlnaHQiLCJmb3JtYXREYXRlIiwiZGF0ZSIsIk1PTlRIUyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwidGltZVNpbmNlIiwic2Vjb25kcyIsIkRhdGUiLCJpbnRlcnZhbCIsImRheXMiLCJkcm9wZG93bk9wZW5FdmVudCIsImRyb3Bkb3duIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEVBQUQ7QUFBQSxTQUFRQSxFQUFFLEdBQUdDLDJFQUFMLEtBQXNCLENBQTlCO0FBQUEsQ0FBbkI7QUFFQSxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQU07QUFDeEMsTUFBSUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FB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LFVBQVEsR0FBR0YsT0FBTyxHQUFHLElBQXJCO0FBQ0EsTUFBSUUsUUFBUSxHQUFHLENBQWYsRUFBa0IsT0FBTy9CLElBQUksQ0FBQ0MsS0FBTCxDQUFXOEIsUUFBWCxJQUF1QixZQUE5QjtBQUVsQkEsVUFBUSxHQUFHRixPQUFPLEdBQUcsRUFBckI7QUFDQSxNQUFJRSxRQUFRLEdBQUcsQ0FBZixFQUFrQixPQUFPL0IsSUFBSSxDQUFDQyxLQUFMLENBQVc4QixRQUFYLElBQXVCLGNBQTlCO0FBRWxCLFNBQU8vQixJQUFJLENBQUNDLEtBQUwsQ0FBVzRCLE9BQVgsSUFBc0IsY0FBN0I7QUFDSCxDQXBCTSxDLENBd0JQOztBQUNPLElBQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNuQyxNQUFJQyxRQUFRLEdBQUd4QixRQUFRLENBQUN5QixhQUFULENBQXVCLFdBQXZCLENBQWY7QUFDQUQsVUFBUSxDQUFDRSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ2hEQSxTQUFLLENBQUNDLGVBQU47QUFDQUosWUFBUSxDQUFDSyxTQUFULENBQW1CQyxNQUFuQixDQUEwQixXQUExQjtBQUNILEdBSEQ7QUFJSCxDQU5NIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9kdWN0cy9mdW5jdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNT05USFMsIEFEX0ZSRVFVRU5DWSB9IGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9jb25zdGFudHMnO1xuXG4vKipcbiAgICBBZHMgcmVsYXRlZCBmdW5jdGlvbnNcbiAqL1xuXG5leHBvcnQgY29uc3Qgd2lsbFNob3dBZCA9IChpZCkgPT4gaWQgJSBBRF9GUkVRVUVOQ1kgPT09IDA7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVJhbmRvbUltYWdlVXJsID0gKCkgPT4ge1xuICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICBsZXQgbGFzdEFkU2VlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xhc3RSYW5kb20nKTtcbiAgICB3aGlsZSAocmFuZG9tID09IGxhc3RBZFNlZW4pIHtcbiAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgfVxuXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGFzdFJhbmRvbScsIHJhbmRvbSk7XG4gICAgcmV0dXJuIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2Fkcz9yPSR7cmFuZG9tfWA7XG59O1xuXG4vKipcbiAgICBTY3JvbGxpbmcgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBjb25zdCBoYW5kbGVTY3JvbGwgPSAoY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPVxuICAgICAgICAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9XG4gICAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCkgfHxcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ7XG4gICAgaWYgKHNjcm9sbFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCArIDUwID49IHNjcm9sbEhlaWdodCkge1xuICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9XG59O1xuXG4vLyBUaHJvdHRsZSBmdW5jdGlvbjogSW5wdXQgYXMgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gYmUgdGhyb3R0bGVkIGFuZCBkZWxheSBpcyB0aGUgdGltZSBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbnZhciB0aHJvdHRsZUZ1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmMsIGRlbGF5KSB7XG4gICAgLy8gU2NoZWR1bGUgYSBzZXRUaW1lb3V0IGFmdGVyIGRlbGF5IHNlY29uZHNcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuYygpO1xuXG4gICAgICAgIC8vIE9uY2Ugc2V0VGltZW91dCBmdW5jdGlvbiBleGVjdXRpb24gaXMgZmluaXNoZWQsIHRpbWVySWQgPSB1bmRlZmluZWQgc28gdGhhdCBpbiA8YnI+XG4gICAgICAgIC8vIHRoZSBuZXh0IHNjcm9sbCBldmVudCBmdW5jdGlvbiBleGVjdXRpb24gY2FuIGJlIHNjaGVkdWxlZCBieSB0aGUgc2V0VGltZW91dFxuICAgICAgICAvLyB0aW1lcklkID0gdW5kZWZpbmVkO1xuICAgIH0sIGRlbGF5KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbmZpbml0ZVNjcm9sbCA9IChjYWxsYmFjaykgPT4ge1xuICAgIHRocm90dGxlRnVuY3Rpb24oKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID09PVxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9LCA0MDApO1xufTtcblxuXG5jb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gYCR7TU9OVEhTW2RhdGUuZ2V0TW9udGgoKV19LyR7ZGF0ZS5nZXREYXRlKCl9LyR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG59O1xuXG5leHBvcnQgY29uc3QgdGltZVNpbmNlID0gKGRhdGUpID0+IHtcbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBkYXRlKSAvIDEwMDApO1xuXG4gICAgdmFyIGludGVydmFsID0gc2Vjb25kcyAvIDMxNTM2MDAwO1xuICAgIGludGVydmFsID0gc2Vjb25kcyAvIDI1OTIwMDA7XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gODY0MDA7XG5cbiAgICBpZiAoaW50ZXJ2YWwgPiAxICYmIE1hdGguZmxvb3IoaW50ZXJ2YWwpID4gNikgcmV0dXJuIGZvcm1hdERhdGUobmV3IERhdGUoZGF0ZSkpO1xuXG4gICAgaWYgKGludGVydmFsID4gMSkge1xuICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihpbnRlcnZhbCk7XG4gICAgICAgIHJldHVybiBkYXlzICsgYCBkYXkke2RheXMgPT09IDEgPyAnJyA6ICdzJ30gYWdvYDtcbiAgICB9XG4gICAgaW50ZXJ2YWwgPSBzZWNvbmRzIC8gMzYwMDtcbiAgICBpZiAoaW50ZXJ2YWwgPiAxKSByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyAnIGhvdXJzIGFnbyc7XG5cbiAgICBpbnRlcnZhbCA9IHNlY29uZHMgLyA2MDtcbiAgICBpZiAoaW50ZXJ2YWwgPiAxKSByZXR1cm4gTWF0aC5mbG9vcihpbnRlcnZhbCkgKyAnIG1pbnV0ZXMgYWdvJztcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHNlY29uZHMpICsgJyBzZWNvbmRzIGFnbyc7XG59O1xuXG5cblxuLy8vIFV0aWxpdHkgZnVuY3Rpb25cbmV4cG9ydCBjb25zdCBkcm9wZG93bk9wZW5FdmVudCA9ICgpID0+IHtcbiAgICB2YXIgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/products/functions.js\n");

/***/ })

})