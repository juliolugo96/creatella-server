webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bloomer */ \"./node_modules/bloomer/bundles/bloomer.min.js\");\n/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\nvar ProductsGrid = function ProductsGrid() {\n  _s();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      productsList = _useState[0],\n      setProductsList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(1),\n      page = _useState3[0],\n      setPage = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(10),\n      limit = _useState4[0],\n      setLimit = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      sort = _useState5[0],\n      setSort = _useState5[1]; /// Effects\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setLoading(true);\n                _context.next = 3;\n                return Object(_api_index__WEBPACK_IMPORTED_MODULE_6__[\"getProducts\"])({\n                  page: page,\n                  limit: limit,\n                  sort: sort\n                });\n\n              case 3:\n                data = _context.sent;\n                setLoading(false);\n                setProductsList(data);\n\n              case 6:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchProducts() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n  }, [page, limit]);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title is-1 has-text-centered is-spaced\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_4__[\"Dropdown\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(DropdownTrigger, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(Button, {\n    isOutlined: true,\n    \"aria-haspopup\": \"true\",\n    \"aria-controls\": \"dropdown-menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 25\n    }\n  }, \"Dropdown button\"), __jsx(Icon, {\n    icon: \"angle-down\",\n    isSize: \"small\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 25\n    }\n  }))), __jsx(DropdownMenu, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_4__[\"DropdownContent\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 21\n    }\n  }, __jsx(DropdownItem, {\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 25\n    }\n  }, \"First item\"), __jsx(DropdownItem, {\n    href: \"#\",\n    isActive: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 25\n    }\n  }, \"Second item\"), __jsx(DropdownItem, {\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 25\n    }\n  }, \"Third item\"), __jsx(DropdownDivider, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 25\n    }\n  }), __jsx(DropdownItem, {\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 25\n    }\n  }, \"Item between dividers\"), __jsx(DropdownDivider, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 25\n    }\n  }), __jsx(DropdownItem, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 25\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 29\n    }\n  }, \"You can insert \", __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 48\n    }\n  }, \"any type of content\"), \" within the dropdown menu.\"))))), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, productsList.map(function (product, id) {\n    return __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 21\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      idx: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 25\n      }\n    })));\n  })));\n};\n\n_s(ProductsGrid, \"ay1yvN5S9SVDl7Ah2MBdcOOw9j0=\");\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiUHJvZHVjdHNHcmlkIiwidXNlU3RhdGUiLCJwcm9kdWN0c0xpc3QiLCJzZXRQcm9kdWN0c0xpc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBhZ2UiLCJzZXRQYWdlIiwibGltaXQiLCJzZXRMaW1pdCIsInNvcnQiLCJzZXRTb3J0IiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9kdWN0cyIsImdldFByb2R1Y3RzIiwiZGF0YSIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3ZCO0FBRHVCLGtCQUdpQkMsc0RBQVEsQ0FBQyxFQUFELENBSHpCO0FBQUEsTUFHaEJDLFlBSGdCO0FBQUEsTUFHRkMsZUFIRTs7QUFBQSxtQkFJT0Ysc0RBQVEsQ0FBQyxLQUFELENBSmY7QUFBQSxNQUloQkcsT0FKZ0I7QUFBQSxNQUlQQyxVQUpPOztBQUFBLG1CQUtDSixzREFBUSxDQUFDLENBQUQsQ0FMVDtBQUFBLE1BS2hCSyxJQUxnQjtBQUFBLE1BS1ZDLE9BTFU7O0FBQUEsbUJBTUdOLHNEQUFRLENBQUMsRUFBRCxDQU5YO0FBQUEsTUFNaEJPLEtBTmdCO0FBQUEsTUFNVEMsUUFOUzs7QUFBQSxtQkFPQ1Isc0RBQVEsQ0FBQyxJQUFELENBUFQ7QUFBQSxNQU9oQlMsSUFQZ0I7QUFBQSxNQU9WQyxPQVBVLGtCQVN2Qjs7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLGFBQWE7QUFBQSxrTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJSLDBCQUFVLENBQUMsSUFBRCxDQUFWO0FBRGtCO0FBQUEsdUJBRUNTLDhEQUFXLENBQUM7QUFBRVIsc0JBQUksRUFBSkEsSUFBRjtB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREosQ0FEYztBQUFBLEdBQWpCLENBREwsQ0FwQ0osQ0FESjtBQThDSCxDQXBFRDs7R0FBTWxCLFk7O0tBQUFBLFk7QUFzRVNBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bkNvbnRlbnQsIERyb30gZnJvbSAnYmxvb21lcidcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdENhcmQnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHMgfSBmcm9tICdAL2FwaS9pbmRleCc7XG5cbmNvbnN0IFByb2R1Y3RzR3JpZCA9ICgpID0+IHtcbiAgICAvLy8gU3RhdGVcblxuICAgIGNvbnN0IFtwcm9kdWN0c0xpc3QsIHNldFByb2R1Y3RzTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGUoMTApO1xuICAgIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLy8vIEVmZmVjdHNcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFByb2R1Y3RzKHsgcGFnZSwgbGltaXQsIHNvcnQgfSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFByb2R1Y3RzTGlzdChkYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaFByb2R1Y3RzKCk7XG4gICAgfSwgW3BhZ2UsIGxpbWl0XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTEgaGFzLXRleHQtY2VudGVyZWQgaXMtc3BhY2VkXCI+UHJvZHVjdHMgR3JpZDwvaDE+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy0zIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgSGVyZSB5b3UmYXBvcztyZSBzdXJlIHRvIGZpbmQgYSBiYXJnYWluIG9uIHNvbWUgb2YgdGhlIGZpbmVzdCBhc2NpaSBhdmFpbGFibGUgdG9cbiAgICAgICAgICAgICAgICBwdXJjaGFzZS4gQmUgc3VyZSB0byBwZXJ1c2Ugb3VyIHNlbGVjdGlvbiBvZiBhc2NpaSBmYWNlcyBpbiBhbiBleGNpdGluZyByYW5nZSBvZlxuICAgICAgICAgICAgICAgIHNpemVzIGFuZCBwcmljZXMuXG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8RHJvcGRvd24+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpc091dGxpbmVkIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRyb3Bkb3duIGJ1dHRvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJhbmdsZS1kb3duXCIgaXNTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiI1wiPkZpcnN0IGl0ZW08L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaHJlZj1cIiNcIiBpc0FjdGl2ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWNvbmQgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhyZWY9XCIjXCI+VGhpcmQgaXRlbTwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duRGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiI1wiPkl0ZW0gYmV0d2VlbiBkaXZpZGVyczwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duRGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBpbnNlcnQgPHN0cm9uZz5hbnkgdHlwZSBvZiBjb250ZW50PC9zdHJvbmc+IHdpdGhpbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd24gbWVudS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbXVsdGlsaW5lIGlzLXZjZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0c0xpc3QubWFwKChwcm9kdWN0LCBpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtcXVhcnRlclwiIGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgey4uLnByb2R1Y3R9IGlkeD17aWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c0dyaWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})