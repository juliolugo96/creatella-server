webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/products/ProductSortingDropdown */ \"./components/products/ProductSortingDropdown.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n/* harmony import */ var _components_products_functions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/products/functions.js */ \"./components/products/functions.js\");\n\n\n\n\n\nvar _s = $RefreshSig$(),\n    _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\nvar dropdownOpenEvent = function dropdownOpenEvent() {\n  var dropdown = document.querySelector('.dropdown');\n  dropdown.addEventListener('click', function (event) {\n    event.stopPropagation();\n    dropdown.classList.toggle('is-active');\n  });\n  console.log('Dropdown: ', dropdown);\n};\n\nvar usePrevious = function usePrevious(value) {\n  _s();\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    ref.current = value;\n  });\n  return ref.current;\n};\n\n_s(usePrevious, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n\nvar ProductsGrid = function ProductsGrid() {\n  _s2();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    productsList: [],\n    loading: false,\n    page: 0,\n    limit: 10,\n    isFinal: false\n  }),\n      _useState$ = _useState[0],\n      productsList = _useState$.productsList,\n      loading = _useState$.loading,\n      page = _useState$.page,\n      limit = _useState$.limit,\n      isFinal = _useState$.isFinal,\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      sort = _useState2[0],\n      setSort = _useState2[1]; /// Refs\n\n\n  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n  var prevSort = usePrevious(sort); /// Effects\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setState({\n                  loading: true\n                });\n                console.log(\"\");\n                Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[\"getProducts\"])({\n                  page: page,\n                  limit: limit,\n                  sort: sort\n                }).then(function (data) {\n                  if (!mounted.current || sort !== prevSort) {\n                    setState({\n                      loading: false,\n                      productsList: data\n                    });\n                    mounted.current = true;\n                    window.addEventListener('scroll', function () {\n                      return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_9__[\"infiniteScroll\"])(page, setState);\n                    });\n                  } else if (productsList) {\n                    setState({\n                      productsList: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(productsList), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data)),\n                      loading: false,\n                      isFinal: data.length === 0 ? true : isFinal\n                    });\n                  }\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchProducts() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n  }, [sort, page, limit]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(dropdownOpenEvent, []);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title is-1 has-text-centered is-spaced\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, __jsx(_components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    sort: sort,\n    callback: setSort,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, productsList === null || productsList === void 0 ? void 0 : productsList.map(function (product, id) {\n    return __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 21\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      idx: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 25\n      }\n    })));\n  })), loading && __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 25\n    }\n  }));\n};\n\n_s2(ProductsGrid, \"E0kMVO92/eJxAJS3TMe4DmrAVRc=\", false, function () {\n  return [usePrevious];\n});\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiZHJvcGRvd25PcGVuRXZlbnQiLCJkcm9wZG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VQcmV2aW91cyIsInZhbHVlIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIlByb2R1Y3RzR3JpZCIsInVzZVN0YXRlIiwicHJvZHVjdHNMaXN0IiwibG9hZGluZyIsInBhZ2UiLCJsaW1pdCIsImlzRmluYWwiLCJzZXRTdGF0ZSIsInNvcnQiLCJzZXRTb3J0IiwibW91bnRlZCIsInByZXZTb3J0IiwiZmV0Y2hQcm9kdWN0cyIsImdldFByb2R1Y3RzIiwidGhlbiIsImRhdGEiLCJ3aW5kb3ciLCJpbmZpbml0ZVNjcm9sbCIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCLE1BQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWY7QUFDQUYsVUFBUSxDQUFDRyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ2hEQSxTQUFLLENBQUNDLGVBQU47QUFDQUwsWUFBUSxDQUFDTSxTQUFULENBQW1CQyxNQUFuQixDQUEwQixXQUExQjtBQUNILEdBSEQ7QUFJQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQlQsUUFBMUI7QUFDSCxDQVBEOztBQVNBLElBQU1VLFdBQVcsR0FBRyxTQUFkQSxX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QUE7QUFBQTtBQUFBLHFCQURKLEVBR0k7QUFBSSxhQUFTLEVBQUMsaUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzTEFISixFQVNJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1GQUFEO0FBQXdCLFFBQUksRUFBRXlCLElBQTlCO0FBQW9DLFlBQVEsRUFBRUMsT0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBVEosRUFhSTtBQUFLLGFBQVMsRUFBQyx3Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tQLFlBREwsYUFDS0EsWUFETCx1QkFDS0EsWUFBWSxDQUFFaUIsR0FBZCxDQUFrQixVQUFDQyxPQUFELEVBQVVDLEVBQVY7QUFBQSxXQUNmO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQXVDLFNBQUcsRUFBRUQsT0FBTyxDQUFDQyxFQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx3RUFBRCx5RkFBaUJELE9BQWpCO0FBQTBCLFNBQUcsRUFBRUMsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURKLENBRGU7QUFBQSxHQUFsQixDQURMLENBYkosRUFxQktsQixPQUFPLElBQUksTUFBQyw2REFBRDtBQUFVLFNBQUssRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJoQixDQURKO0FBeUJILENBbEVEOztJQUFNSCxZO1VBYWVOLFc7OztLQWJmTSxZO0FBb0VTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdHNHcmlkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdENhcmQnO1xuaW1wb3J0IFByb2R1Y3RTb3J0aW5nRHJvcGRvd24gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RTb3J0aW5nRHJvcGRvd24nO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHMgfSBmcm9tICdAL2FwaS9pbmRleCc7XG5pbXBvcnQgeyBpbmZpbml0ZVNjcm9sbCB9IGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9mdW5jdGlvbnMuanMnO1xuXG5jb25zdCBkcm9wZG93bk9wZW5FdmVudCA9ICgpID0+IHtcbiAgICB2YXIgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duOiAnLCBkcm9wZG93bik7XG59O1xuXG5jb25zdCB1c2VQcmV2aW91cyA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlZi5jdXJyZW50O1xufTtcblxuY29uc3QgUHJvZHVjdHNHcmlkID0gKCkgPT4ge1xuICAgIC8vLyBTdGF0ZVxuICAgIGNvbnN0IFt7IHByb2R1Y3RzTGlzdCwgbG9hZGluZywgcGFnZSwgbGltaXQsIGlzRmluYWwgfSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgICAgICBwcm9kdWN0c0xpc3Q6IFtdLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgcGFnZTogMCxcbiAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICBpc0ZpbmFsOiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLy8vIFJlZnNcbiAgICBjb25zdCBtb3VudGVkID0gdXNlUmVmKCk7XG4gICAgY29uc3QgcHJldlNvcnQgPSB1c2VQcmV2aW91cyhzb3J0KTtcblxuICAgIC8vLyBFZmZlY3RzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXCIpXG5cbiAgICAgICAgICAgIGdldFByb2R1Y3RzKHsgcGFnZSwgbGltaXQsIHNvcnQgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbW91bnRlZC5jdXJyZW50IHx8IHNvcnQgIT09IHByZXZTb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHByb2R1Y3RzTGlzdDogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgbW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IGluZmluaXRlU2Nyb2xsKHBhZ2UsIHNldFN0YXRlKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9kdWN0c0xpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHNMaXN0OiBbLi4ucHJvZHVjdHNMaXN0LCAuLi5kYXRhXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGaW5hbDogZGF0YS5sZW5ndGggPT09IDAgPyB0cnVlIDogaXNGaW5hbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaFByb2R1Y3RzKCk7XG4gICAgfSwgW3NvcnQsIHBhZ2UsIGxpbWl0XSk7XG5cbiAgICB1c2VFZmZlY3QoZHJvcGRvd25PcGVuRXZlbnQsIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtMSBoYXMtdGV4dC1jZW50ZXJlZCBpcy1zcGFjZWRcIj5Qcm9kdWN0cyBHcmlkPC9oMT5cblxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLTMgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICBIZXJlIHlvdSZhcG9zO3JlIHN1cmUgdG8gZmluZCBhIGJhcmdhaW4gb24gc29tZSBvZiB0aGUgZmluZXN0IGFzY2lpIGF2YWlsYWJsZSB0b1xuICAgICAgICAgICAgICAgIHB1cmNoYXNlLiBCZSBzdXJlIHRvIHBlcnVzZSBvdXIgc2VsZWN0aW9uIG9mIGFzY2lpIGZhY2VzIGluIGFuIGV4Y2l0aW5nIHJhbmdlIG9mXG4gICAgICAgICAgICAgICAgc2l6ZXMgYW5kIHByaWNlcy5cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdFNvcnRpbmdEcm9wZG93biBzb3J0PXtzb3J0fSBjYWxsYmFjaz17c2V0U29ydH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbXVsdGlsaW5lIGlzLXZjZW50ZXJlZCBtdC02XCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzTGlzdD8ubWFwKChwcm9kdWN0LCBpZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtcXVhcnRlclwiIGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgey4uLnByb2R1Y3R9IGlkeD17aWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmIDxTa2VsZXRvbiBjb3VudD17NX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c0dyaWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})