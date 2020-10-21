webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/products/ProductSortingDropdown */ \"./components/products/ProductSortingDropdown.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n\n\n\n\n\nvar _this = undefined,\n    _s = $RefreshSig$(),\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\nvar infiniteScroll = function infiniteScroll() {\n  if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {\n    var newPage = _this.state.page;\n    newPage++;\n\n    _this.setState({\n      page: newPage\n    });\n\n    _this.fetchData(newPage);\n  }\n};\n\nvar dropdownOpenEvent = function dropdownOpenEvent() {\n  var dropdown = document.querySelector('.dropdown');\n  dropdown.addEventListener('click', function (event) {\n    event.stopPropagation();\n    dropdown.classList.toggle('is-active');\n  });\n  console.log('Dropdown: ', dropdown);\n};\n\nvar usePrevious = function usePrevious(value) {\n  _s();\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    ref.current = value;\n  });\n  return ref.current;\n};\n\n_s(usePrevious, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n\nvar ProductsGrid = function ProductsGrid() {\n  _s2();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    productsList: [],\n    loading: false\n  }),\n      _useState$ = _useState[0],\n      productsList = _useState$.productsList,\n      loading = _useState$.loading,\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      page = _useState2[0],\n      setPage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(10),\n      limit = _useState3[0],\n      setLimit = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      sort = _useState4[0],\n      setSort = _useState4[1]; /// Refs\n\n\n  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n  var prevSort = usePrevious(sort); /// Effects\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setState({\n                  loading: true\n                });\n                Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[\"getProducts\"])({\n                  page: page,\n                  limit: limit,\n                  sort: sort\n                }).then(function (data) {\n                  if (!mounted.current || sort !== prevSort) {\n                    setState({\n                      loading: false,\n                      productsList: data\n                    });\n                    mounted.current = true;\n                  } else setState({\n                    productsList: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(productsList), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data)),\n                    loading: false\n                  });\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchProducts() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n  }, [sort, page, limit]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(dropdownOpenEvent, []);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title is-1 has-text-centered is-spaced\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, __jsx(_components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    sort: sort,\n    callback: setSort,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, productsList === null || productsList === void 0 ? void 0 : productsList.map(function (product, id) {\n    return __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 21\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      idx: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 25\n      }\n    })));\n  })), loading && __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 25\n    }\n  }));\n};\n\n_s2(ProductsGrid, \"pW5fMLcounh0ujZ9iKL/BURBQmM=\", false, function () {\n  return [usePrevious];\n});\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiaW5maW5pdGVTY3JvbGwiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwib2Zmc2V0SGVpZ2h0IiwibmV3UGFnZSIsInN0YXRlIiwicGFnZSIsInNldFN0YXRlIiwiZmV0Y2hEYXRhIiwiZHJvcGRvd25PcGVuRXZlbnQiLCJkcm9wZG93biIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb25zb2xlIiwibG9nIiwidXNlUHJldmlvdXMiLCJ2YWx1ZSIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJQcm9kdWN0c0dyaWQiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzTGlzdCIsImxvYWRpbmciLCJzZXRQYWdlIiwibGltaXQiLCJzZXRMaW1pdCIsInNvcnQiLCJzZXRTb3J0IiwibW91bnRlZCIsInByZXZTb3J0IiwiZmV0Y2hQcm9kdWN0cyIsImdldFByb2R1Y3RzIiwidGhlbiIsImRhdGEiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixNQUNJQyxNQUFNLENBQUNDLFdBQVAsR0FBcUJDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBOUMsS0FDQUYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUY3QixFQUdFO0FBQ0UsUUFBSUMsT0FBTyxHQUFHLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxJQUF6QjtBQUNBRixXQUFPOztBQUNQLFNBQUksQ0FBQ0csUUFBTCxDQUFjO0FBQ1ZE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IiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0Q2FyZCc7XG5pbXBvcnQgUHJvZHVjdFNvcnRpbmdEcm9wZG93biBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdFNvcnRpbmdEcm9wZG93bic7XG5pbXBvcnQgeyBnZXRQcm9kdWN0cyB9IGZyb20gJ0AvYXBpL2luZGV4JztcblxuY29uc3QgaW5maW5pdGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID09PVxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgKSB7XG4gICAgICAgIGxldCBuZXdQYWdlID0gdGhpcy5zdGF0ZS5wYWdlO1xuICAgICAgICBuZXdQYWdlKys7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGFnZTogbmV3UGFnZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mZXRjaERhdGEobmV3UGFnZSk7XG4gICAgfVxufTtcblxuY29uc3QgZHJvcGRvd25PcGVuRXZlbnQgPSAoKSA9PiB7XG4gICAgdmFyIGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG4gICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bjogJywgZHJvcGRvd24pO1xufTtcblxuY29uc3QgdXNlUHJldmlvdXMgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiByZWYuY3VycmVudDtcbn07XG5cbmNvbnN0IFByb2R1Y3RzR3JpZCA9ICgpID0+IHtcbiAgICAvLy8gU3RhdGVcbiAgICBjb25zdCBbeyBwcm9kdWN0c0xpc3QsIGxvYWRpbmcgfSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgICAgICBwcm9kdWN0c0xpc3Q6IFtdLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGUoMTApO1xuICAgIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLy8vIFJlZnNcbiAgICBjb25zdCBtb3VudGVkID0gdXNlUmVmKCk7XG4gICAgY29uc3QgcHJldlNvcnQgPSB1c2VQcmV2aW91cyhzb3J0KTtcblxuICAgIC8vLyBFZmZlY3RzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgZ2V0UHJvZHVjdHMoeyBwYWdlLCBsaW1pdCwgc29ydCB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3VudGVkLmN1cnJlbnQgfHwgc29ydCAhPT0gcHJldlNvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgcHJvZHVjdHNMaXN0OiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgICAgICBtb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBzZXRTdGF0ZSh7IHByb2R1Y3RzTGlzdDogWy4uLnByb2R1Y3RzTGlzdCwgLi4uZGF0YV0sIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hQcm9kdWN0cygpO1xuICAgIH0sIFtzb3J0LCBwYWdlLCBsaW1pdF0pO1xuXG4gICAgdXNlRWZmZWN0KGRyb3Bkb3duT3BlbkV2ZW50LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTEgaGFzLXRleHQtY2VudGVyZWQgaXMtc3BhY2VkXCI+UHJvZHVjdHMgR3JpZDwvaDE+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy0zIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgSGVyZSB5b3UmYXBvcztyZSBzdXJlIHRvIGZpbmQgYSBiYXJnYWluIG9uIHNvbWUgb2YgdGhlIGZpbmVzdCBhc2NpaSBhdmFpbGFibGUgdG9cbiAgICAgICAgICAgICAgICBwdXJjaGFzZS4gQmUgc3VyZSB0byBwZXJ1c2Ugb3VyIHNlbGVjdGlvbiBvZiBhc2NpaSBmYWNlcyBpbiBhbiBleGNpdGluZyByYW5nZSBvZlxuICAgICAgICAgICAgICAgIHNpemVzIGFuZCBwcmljZXMuXG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RTb3J0aW5nRHJvcGRvd24gc29ydD17c29ydH0gY2FsbGJhY2s9e3NldFNvcnR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy12Y2VudGVyZWQgbXQtNlwiPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0c0xpc3Q/Lm1hcCgocHJvZHVjdCwgaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXJcIiBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHsuLi5wcm9kdWN0fSBpZHg9e2lkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8U2tlbGV0b24gY291bnQ9ezV9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNHcmlkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})