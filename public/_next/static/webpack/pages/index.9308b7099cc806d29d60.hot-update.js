webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/products/ProductSortingDropdown */ \"./components/products/ProductSortingDropdown.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n/* harmony import */ var _components_products_functions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/products/functions.js */ \"./components/products/functions.js\");\n\n\n\n\nvar _s = $RefreshSig$(),\n    _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar dropdownOpenEvent = function dropdownOpenEvent() {\n  var dropdown = document.querySelector('.dropdown');\n  dropdown.addEventListener('click', function (event) {\n    event.stopPropagation();\n    dropdown.classList.toggle('is-active');\n  });\n  console.log('Dropdown: ', dropdown);\n};\n\nvar usePrevious = function usePrevious(value) {\n  _s();\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    ref.current = value;\n  });\n  return ref.current;\n};\n\n_s(usePrevious, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n\nvar ProductsGrid = function ProductsGrid() {\n  _s2();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    productsList: [],\n    loading: false,\n    page: 0,\n    limit: 10,\n    isFinal: false\n  }),\n      _useState$ = _useState[0],\n      productsList = _useState$.productsList,\n      loading = _useState$.loading,\n      page = _useState$.page,\n      limit = _useState$.limit,\n      isFinal = _useState$.isFinal,\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      sort = _useState2[0],\n      setSort = _useState2[1]; /// Refs\n\n\n  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(); /// Effects\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setState({\n                  productsList: productsList,\n                  page: page,\n                  limit: limit,\n                  isFinal: isFinal,\n                  loading: true\n                });\n                Object(_api_index__WEBPACK_IMPORTED_MODULE_7__[\"getProducts\"])({\n                  page: page,\n                  limit: limit,\n                  sort: sort\n                }).then(function (data) {\n                  setState({\n                    loading: false,\n                    productsList: data,\n                    page: page,\n                    limit: limit,\n                    isFinal: isFinal\n                  });\n                  mounted.current = true;\n                  window.addEventListener('scroll', function () {\n                    return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_8__[\"infiniteScroll\"])(function () {\n                      return setState({\n                        productsList: productsList,\n                        page: page + 1,\n                        limit: limit,\n                        isFinal: isFinal,\n                        loading: true\n                      });\n                    });\n                  });\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchProducts() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n  }, [sort]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var appendProducts = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function appendProducts() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n  }, [page]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(dropdownOpenEvent, []);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title is-1 has-text-centered is-spaced\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, __jsx(_components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    sort: sort,\n    callback: setSort,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, productsList === null || productsList === void 0 ? void 0 : productsList.map(function (product, id) {\n    return __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 21\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      idx: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 25\n      }\n    })));\n  })), loading && __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 25\n    }\n  }));\n};\n\n_s2(ProductsGrid, \"fty1myJHeO2L3GRd9ZlpeqIHtM8=\");\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiZHJvcGRvd25PcGVuRXZlbnQiLCJkcm9wZG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VQcmV2aW91cyIsInZhbHVlIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIlByb2R1Y3RzR3JpZCIsInVzZVN0YXRlIiwicHJvZHVjdHNMaXN0IiwibG9hZGluZyIsInBhZ2UiLCJsaW1pdCIsImlzRmluYWwiLCJzZXRTdGF0ZSIsInNvcnQiLCJzZXRTb3J0IiwibW91bnRlZCIsImZldGNoUHJvZHVjdHMiLCJnZXRQcm9kdWN0cyIsInRoZW4iLCJkYXRhIiwid2luZG93IiwiaW5maW5pdGVTY3JvbGwiLCJhcHBlbmRQcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM1QixNQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFmO0FBQ0FGLFVBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVUMsS0FBVixFQUFpQjtBQUNoREEsU0FBSyxDQUFDQyxlQUFOO0FBQ0FMLFlBQVEsQ0FBQ00sU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDSCxHQUhEO0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJULFFBQTFCO0FBQ0gsQ0FQRDs7QUFTQSxJQUFNVSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxD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ZW50cy9Qcm9kdWN0c0dyaWQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0Q2FyZCc7XG5pbXBvcnQgUHJvZHVjdFNvcnRpbmdEcm9wZG93biBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdFNvcnRpbmdEcm9wZG93bic7XG5pbXBvcnQgeyBnZXRQcm9kdWN0cyB9IGZyb20gJ0AvYXBpL2luZGV4JztcbmltcG9ydCB7IGluZmluaXRlU2Nyb2xsIH0gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL2Z1bmN0aW9ucy5qcyc7XG5cbmNvbnN0IGRyb3Bkb3duT3BlbkV2ZW50ID0gKCkgPT4ge1xuICAgIHZhciBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpO1xuICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnRHJvcGRvd246ICcsIGRyb3Bkb3duKTtcbn07XG5cbmNvbnN0IHVzZVByZXZpb3VzID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59O1xuXG5jb25zdCBQcm9kdWN0c0dyaWQgPSAoKSA9PiB7XG4gICAgLy8vIFN0YXRlXG4gICAgY29uc3QgW3sgcHJvZHVjdHNMaXN0LCBsb2FkaW5nLCBwYWdlLCBsaW1pdCwgaXNGaW5hbCB9LCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHByb2R1Y3RzTGlzdDogW10sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBwYWdlOiAwLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICAgIGlzRmluYWw6IGZhbHNlXG4gICAgfSk7XG4gICAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvLy8gUmVmc1xuICAgIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYoKTtcblxuICAgIC8vLyBFZmZlY3RzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlKHsgcHJvZHVjdHNMaXN0LCBwYWdlLCBsaW1pdCwgaXNGaW5hbCwgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGdldFByb2R1Y3RzKHsgcGFnZSwgbGltaXQsIHNvcnQgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHByb2R1Y3RzTGlzdDogZGF0YSwgcGFnZSwgbGltaXQsIGlzRmluYWwgfSk7XG4gICAgICAgICAgICAgICAgbW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVTY3JvbGwoKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c0xpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogcGFnZSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGaW5hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgICB9LCBbc29ydF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYXBwZW5kUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgfTtcbiAgICB9LCBbcGFnZV0pO1xuXG4gICAgdXNlRWZmZWN0KGRyb3Bkb3duT3BlbkV2ZW50LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTEgaGFzLXRleHQtY2VudGVyZWQgaXMtc3BhY2VkXCI+UHJvZHVjdHMgR3JpZDwvaDE+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy0zIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgSGVyZSB5b3UmYXBvcztyZSBzdXJlIHRvIGZpbmQgYSBiYXJnYWluIG9uIHNvbWUgb2YgdGhlIGZpbmVzdCBhc2NpaSBhdmFpbGFibGUgdG9cbiAgICAgICAgICAgICAgICBwdXJjaGFzZS4gQmUgc3VyZSB0byBwZXJ1c2Ugb3VyIHNlbGVjdGlvbiBvZiBhc2NpaSBmYWNlcyBpbiBhbiBleGNpdGluZyByYW5nZSBvZlxuICAgICAgICAgICAgICAgIHNpemVzIGFuZCBwcmljZXMuXG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RTb3J0aW5nRHJvcGRvd24gc29ydD17c29ydH0gY2FsbGJhY2s9e3NldFNvcnR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy12Y2VudGVyZWQgbXQtNlwiPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0c0xpc3Q/Lm1hcCgocHJvZHVjdCwgaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXJcIiBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHsuLi5wcm9kdWN0fSBpZHg9e2lkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8U2tlbGV0b24gY291bnQ9ezV9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNHcmlkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})