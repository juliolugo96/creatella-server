webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\nvar dropdownOpenEvent = function dropdownOpenEvent() {\n  var dropdown = document.querySelector('.dropdown');\n  dropdown.addEventListener('click', function (event) {\n    event.stopPropagation();\n    dropdown.classList.toggle('is-active');\n  });\n  console.log('Dropdown: ', dropdown);\n};\n\nvar ProductsGrid = function ProductsGrid() {\n  _s();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      productsList = _useState[0],\n      setProductsList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(1),\n      page = _useState3[0],\n      setPage = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(10),\n      limit = _useState4[0],\n      setLimit = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      sort = _useState5[0],\n      setSort = _useState5[1]; /// Effects\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setLoading(true);\n                _context.next = 3;\n                return Object(_api_index__WEBPACK_IMPORTED_MODULE_5__[\"getProducts\"])({\n                  page: page,\n                  limit: limit,\n                  sort: sort\n                });\n\n              case 3:\n                data = _context.sent;\n                setLoading(false);\n                setProductsList(data);\n\n              case 6:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchProducts() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n  }, [page, limit]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(dropdownOpenEvent, []);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title is-1 has-text-centered is-spaced\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, productsList.map(function (product, id) {\n    return __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 21\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      idx: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 25\n      }\n    })));\n  })));\n};\n\n_s(ProductsGrid, \"KTdgWsn7qyQ1cBsd2MiplsymS18=\");\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiZHJvcGRvd25PcGVuRXZlbnQiLCJkcm9wZG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9kdWN0c0dyaWQiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzTGlzdCIsInNldFByb2R1Y3RzTGlzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicGFnZSIsInNldFBhZ2UiLCJsaW1pdCIsInNldExpbWl0Iiwic29ydCIsInNldFNvcnQiLCJ1c2VFZmZlY3QiLCJmZXRjaFByb2R1Y3RzIiwiZ2V0UHJvZHVjdHMiLCJkYXRhIiwibWFwIiwicHJvZHVjdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM1QixNQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFmO0FBQ0FGLFVBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVUMsS0FBVixFQUFpQjtBQUNoREEsU0FBSyxDQUFDQyxlQUFOO0FBQ0FMLFlBQVEsQ0FBQ00sU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDSCxHQUhEO0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJULFFBQTFCO0FBQ0gsQ0FQRDs7QUFTQSxJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3ZCO0FBRHVCLGtCQUVpQkMsc0RBQVEsQ0FBQyxFQUFELENBRnpCO0FBQUEsTUFFaEJDLFlBRmdCO0FBQUEsTUFFRkMsZUFGRTs7QUFBQSxtQkFHT0Ysc0RBQVEsQ0FBQyxLQUFELENBSGY7QUFBQSxNQUdoQkcsT0FIZ0I7QUFBQSxNQUdQQyxVQUhPOztBQUFBLG1CQUlDSixzREFBUSxDQUFDLENBQUQsQ0FKVDtBQUFBLE1BSWhCSyxJQUpnQjtBQUFBLE1BSVZDLE9BSlU7O0FBQUEsbUJBS0dOLHNEQUFRLENBQUMsRUFBRCxDQUxYO0FBQUEsTUFLaEJPLEtBTGdCO0FBQUEsTUFLVEMsUUFMUzs7QUFBQSxtQkFNQ1Isc0RBQVEsQ0FBQyxJQUFELENBTlQ7QUFBQSxNQU1oQlMsSUFOZ0I7QUFBQSxNQU1WQyxPQU5VLGtCQVF2Qjs7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLGFBQWE7QUFBQSxrTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJSLDBCQUFVLENBQUMsSUFBRCxDQUFWO0FBRGtCO0FBQUEsdUJBRUNTLDhEQUFXLENBQUM7QUFBRVIsc0JBQUksRUFBSkEsSUFBRjtBQUFRRSx1QkFBSyxFQUFMQSxLQUFSO0FBQWVFLHNCQUFJLEVBQUpBO0FBQWYsaUJBQUQsQ0FGWjs7QUFBQTtBQUVaSyxvQkFGWTtBQUdsQlYsMEJBQVUsQ0FBQyxLQUFELENBQVY7QUFDQUYsK0JBQWUsQ0FBQ1ksSUFBRCxDQUFmOztBQUprQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFiRixhQUFhO0FBQUE7QUFBQTtBQUFBLE9BQW5COztBQU9BQSxpQkFBYTtBQUNoQixHQVRRLEVBU04sQ0FBQ1AsSUFBRCxFQUFPRSxLQUFQLENBVE0sQ0FBVDtBQVVBSSx5REFBUyxDQUFDdkIsaUJBQUQsRUFBb0IsRUFBcEIsQ0FBVDtBQUVBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsd0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUdJO0FBQUksYUFBUyxFQUFDLGlDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0xBSEosRUFXSTtBQUFLLGFBQVMsRUFBQyxtQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0thLFlBQVksQ0FBQ2MsR0FBYixDQUFpQixVQUFDQyxPQUFELEVBQVVDLEVBQVY7QUFBQSxXQUNkO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQXVDLFNBQUcsRUFBRUQsT0FBTyxDQUFDQyxFQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx3RUFBRCx5RkFBaUJELE9BQWpCO0FBQTBCLFNBQUcsRUFBRUMsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURKLENBRGM7QUFBQSxHQUFqQixDQURMLENBWEosQ0FESjtBQXFCSCxDQTNDRDs7R0FBTWxCLFk7O0tBQUFBLFk7QUE2Q1NBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdENhcmQnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHMgfSBmcm9tICdAL2FwaS9pbmRleCc7XG5cbmNvbnN0IGRyb3Bkb3duT3BlbkV2ZW50ID0gKCkgPT4ge1xuICAgIHZhciBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpO1xuICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnRHJvcGRvd246ICcsIGRyb3Bkb3duKTtcbn07XG5cbmNvbnN0IFByb2R1Y3RzR3JpZCA9ICgpID0+IHtcbiAgICAvLy8gU3RhdGVcbiAgICBjb25zdCBbcHJvZHVjdHNMaXN0LCBzZXRQcm9kdWN0c0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKDEwKTtcbiAgICBjb25zdCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8vLyBFZmZlY3RzXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQcm9kdWN0cyh7IHBhZ2UsIGxpbWl0LCBzb3J0IH0pO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRQcm9kdWN0c0xpc3QoZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hQcm9kdWN0cygpO1xuICAgIH0sIFtwYWdlLCBsaW1pdF0pO1xuICAgIHVzZUVmZmVjdChkcm9wZG93bk9wZW5FdmVudCwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBpcy0xIGhhcy10ZXh0LWNlbnRlcmVkIGlzLXNwYWNlZFwiPlByb2R1Y3RzIEdyaWQ8L2gxPlxuXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtMyBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIEhlcmUgeW91JmFwb3M7cmUgc3VyZSB0byBmaW5kIGEgYmFyZ2FpbiBvbiBzb21lIG9mIHRoZSBmaW5lc3QgYXNjaWkgYXZhaWxhYmxlIHRvXG4gICAgICAgICAgICAgICAgcHVyY2hhc2UuIEJlIHN1cmUgdG8gcGVydXNlIG91ciBzZWxlY3Rpb24gb2YgYXNjaWkgZmFjZXMgaW4gYW4gZXhjaXRpbmcgcmFuZ2Ugb2ZcbiAgICAgICAgICAgICAgICBzaXplcyBhbmQgcHJpY2VzLlxuICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtdmNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzTGlzdC5tYXAoKHByb2R1Y3QsIGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyXCIga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCB7Li4ucHJvZHVjdH0gaWR4PXtpZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzR3JpZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})