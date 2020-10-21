webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductsGrid.jsx":
/*!*************************************!*\
  !*** ./components/ProductsGrid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/products/ProductCard */ \"./components/products/ProductCard.jsx\");\n/* harmony import */ var _components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/products/ProductSortingDropdown */ \"./components/products/ProductSortingDropdown.jsx\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/index */ \"./api/index.js\");\n/* harmony import */ var _components_products_functions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/products/functions.js */ \"./components/products/functions.js\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/ignisgravitas/workspace/products-grid/components/ProductsGrid.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\nvar ProductsGrid = function ProductsGrid() {\n  _s();\n\n  /// State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    productsList: [],\n    loading: false,\n    page: 1,\n    limit: 10,\n    isFinal: false\n  }),\n      _useState$ = _useState[0],\n      productsList = _useState$.productsList,\n      loading = _useState$.loading,\n      page = _useState$.page,\n      limit = _useState$.limit,\n      isFinal = _useState$.isFinal,\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      sort = _useState2[0],\n      setSort = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isBottom = _useState3[0],\n      setIsBottom = _useState3[1]; /// Handle scroll\n\n\n  var handleScroll = function handleScroll() {\n    var scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;\n    var scrollHeight = document.documentElement && document.documentElement.scrollHeight || document.body.scrollHeight;\n\n    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {\n      setIsBottom(true);\n    }\n  }; /// Refs\n\n\n  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(); /// Effects\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setState({\n                  productsList: productsList,\n                  page: page,\n                  limit: limit,\n                  isFinal: isFinal,\n                  loading: true\n                });\n                Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[\"getProducts\"])({\n                  page: page,\n                  limit: limit,\n                  sort: sort\n                }).then(function (data) {\n                  setState({\n                    loading: false,\n                    productsList: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data),\n                    page: 1,\n                    limit: limit,\n                    isFinal: isFinal\n                  });\n                  window.addEventListener('scroll', function () {\n                    return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_9__[\"infiniteScroll\"])(handleScroll);\n                  });\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchProducts() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n    return function () {\n      return window.removeEventListener('scroll', function () {\n        return Object(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_9__[\"infiniteScroll\"])(handleScroll);\n      });\n    };\n  }, [sort]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var appendProducts = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (productsList.length !== 0) {\n                  setState({\n                    productsList: productsList,\n                    page: page,\n                    limit: limit,\n                    isFinal: isFinal,\n                    loading: true\n                  });\n                  Object(_api_index__WEBPACK_IMPORTED_MODULE_8__[\"getProducts\"])({\n                    page: page + 1,\n                    limit: limit,\n                    sort: sort\n                  }).then(function (data) {\n                    setState(function (prevState) {\n                      return {\n                        loading: false,\n                        productsList: prevState.productsList.concat(data),\n                        page: prevState.page + 1,\n                        limit: limit,\n                        isFinal: isFinal\n                      };\n                    });\n                    setIsBottom(false);\n                  });\n                }\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function appendProducts() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    isBottom && appendProducts();\n  }, [isBottom]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(_components_products_functions_js__WEBPACK_IMPORTED_MODULE_9__[\"dropdownOpenEvent\"], []);\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"title is-1 has-text-centered is-spaced\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, \"Products Grid\"), __jsx(\"h3\", {\n    className: \"subtitle is-3 has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, \"Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.\"), __jsx(\"div\", {\n    className: \"has-text-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(_components_products_ProductSortingDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    sort: sort,\n    callback: setSort,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"columns is-multiline is-vcentered mt-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, productsList === null || productsList === void 0 ? void 0 : productsList.map(function (product, id) {\n    return __jsx(\"div\", {\n      className: \"column is-one-quarter\",\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 21\n      }\n    }, __jsx(_components_products_ProductCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, product, {\n      idx: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 25\n      }\n    })));\n  })), loading && __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    count: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 25\n    }\n  }));\n};\n\n_s(ProductsGrid, \"f6fNftI0O9IdjxhojKjAaeso2+k=\");\n\n_c = ProductsGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsGrid);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4P2I5NjEiXSwibmFtZXMiOlsiUHJvZHVjdHNHcmlkIiwidXNlU3RhdGUiLCJwcm9kdWN0c0xpc3QiLCJsb2FkaW5nIiwicGFnZSIsImxpbWl0IiwiaXNGaW5hbCIsInNldFN0YXRlIiwic29ydCIsInNldFNvcnQiLCJpc0JvdHRvbSIsInNldElzQm90dG9tIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5Iiwic2Nyb2xsSGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJtb3VudGVkIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9kdWN0cyIsImdldFByb2R1Y3RzIiwidGhlbiIsImRhdGEiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5maW5pdGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXBwZW5kUHJvZHVjdHMiLCJsZW5ndGgiLCJwcmV2U3RhdGUiLCJjb25jYXQiLCJkcm9wZG93bk9wZW5FdmVudCIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3ZCO0FBRHVCLGtCQUU2Q0Msc0RBQVEsQ0FBQztBQUN6RUMsZ0JBQVksRUFBRSxFQUQyRDtBQUV6RUMsV0FBTyxFQUFFLEtBRmdFO0FBR3pFQyxRQUFJLEVBQUUsQ0FIbUU7QUFJekVDLFNBQUssRUFBRSxFQUprRTtBQUt6RUMsV0FBTyxFQUFFO0FBTGdFLEdBQUQsQ0FGckQ7QUFBQTtBQUFBLE1BRWRKLFlBRmMsY0FFZEEsWUFGYztBQUFBLE1BRUFDLE9BRkEsY0FFQUEsT0FGQTtBQUFBLE1BRVNDLElBRlQsY0FFU0EsSUFGVDtBQUFBLE1B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bUZBQUQ7QUFBd0IsUUFBSSxFQUFFMUIsSUFBOUI7QUFBb0MsWUFBUSxFQUFFQyxPQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FUSixFQWFJO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1AsWUFETCxhQUNLQSxZQURMLHVCQUNLQSxZQUFZLENBQUVpQyxHQUFkLENBQWtCLFVBQUNDLE9BQUQsRUFBVUMsRUFBVjtBQUFBLFdBQ2Y7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBdUMsU0FBRyxFQUFFRCxPQUFPLENBQUNDLEVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdFQUFELHlGQUFpQkQsT0FBakI7QUFBMEIsU0FBRyxFQUFFQyxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREosQ0FEZTtBQUFBLEdBQWxCLENBREwsQ0FiSixFQXFCS2xDLE9BQU8sSUFBSSxNQUFDLDZEQUFEO0FBQVUsU0FBSyxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQmhCLENBREo7QUF5QkgsQ0ExRkQ7O0dBQU1ILFk7O0tBQUFBLFk7QUE0RlNBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0c0dyaWQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0Q2FyZCc7XG5pbXBvcnQgUHJvZHVjdFNvcnRpbmdEcm9wZG93biBmcm9tICdAL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdFNvcnRpbmdEcm9wZG93bic7XG5pbXBvcnQgeyBnZXRQcm9kdWN0cyB9IGZyb20gJ0AvYXBpL2luZGV4JztcbmltcG9ydCB7IGluZmluaXRlU2Nyb2xsLCBkcm9wZG93bk9wZW5FdmVudCB9IGZyb20gJ0AvY29tcG9uZW50cy9wcm9kdWN0cy9mdW5jdGlvbnMuanMnO1xuXG5jb25zdCBQcm9kdWN0c0dyaWQgPSAoKSA9PiB7XG4gICAgLy8vIFN0YXRlXG4gICAgY29uc3QgW3sgcHJvZHVjdHNMaXN0LCBsb2FkaW5nLCBwYWdlLCBsaW1pdCwgaXNGaW5hbCB9LCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHByb2R1Y3RzTGlzdDogW10sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICAgIGlzRmluYWw6IGZhbHNlXG4gICAgfSk7XG4gICAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2lzQm90dG9tLCBzZXRJc0JvdHRvbV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLy8gSGFuZGxlIHNjcm9sbFxuXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPVxuICAgICAgICAgICAgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9XG4gICAgICAgICAgICAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcbiAgICAgICAgaWYgKHNjcm9sbFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCArIDUwID49IHNjcm9sbEhlaWdodCkge1xuICAgICAgICAgICAgc2V0SXNCb3R0b20odHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8vIFJlZnNcbiAgICBjb25zdCBtb3VudGVkID0gdXNlUmVmKCk7XG5cbiAgICAvLy8gRWZmZWN0c1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7IHByb2R1Y3RzTGlzdCwgcGFnZSwgbGltaXQsIGlzRmluYWwsIGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICBnZXRQcm9kdWN0cyh7IHBhZ2UsIGxpbWl0LCBzb3J0IH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBwcm9kdWN0c0xpc3Q6IFsuLi5kYXRhXSwgcGFnZTogMSwgbGltaXQsIGlzRmluYWwgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IGluZmluaXRlU2Nyb2xsKGhhbmRsZVNjcm9sbCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hQcm9kdWN0cygpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IGluZmluaXRlU2Nyb2xsKGhhbmRsZVNjcm9sbCkpO1xuICAgIH0sIFtzb3J0XSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBhcHBlbmRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0c0xpc3QubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoeyBwcm9kdWN0c0xpc3QsIHBhZ2UsIGxpbWl0LCBpc0ZpbmFsLCBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGdldFByb2R1Y3RzKHsgcGFnZTogcGFnZSArIDEsIGxpbWl0LCBzb3J0IH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHNMaXN0OiBwcmV2U3RhdGUucHJvZHVjdHNMaXN0LmNvbmNhdChkYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IHByZXZTdGF0ZS5wYWdlICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGaW5hbFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIHNldElzQm90dG9tKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaXNCb3R0b20gJiYgYXBwZW5kUHJvZHVjdHMoKTtcbiAgICB9LCBbaXNCb3R0b21dKTtcblxuICAgIHVzZUVmZmVjdChkcm9wZG93bk9wZW5FdmVudCwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBpcy0xIGhhcy10ZXh0LWNlbnRlcmVkIGlzLXNwYWNlZFwiPlByb2R1Y3RzIEdyaWQ8L2gxPlxuXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtMyBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIEhlcmUgeW91JmFwb3M7cmUgc3VyZSB0byBmaW5kIGEgYmFyZ2FpbiBvbiBzb21lIG9mIHRoZSBmaW5lc3QgYXNjaWkgYXZhaWxhYmxlIHRvXG4gICAgICAgICAgICAgICAgcHVyY2hhc2UuIEJlIHN1cmUgdG8gcGVydXNlIG91ciBzZWxlY3Rpb24gb2YgYXNjaWkgZmFjZXMgaW4gYW4gZXhjaXRpbmcgcmFuZ2Ugb2ZcbiAgICAgICAgICAgICAgICBzaXplcyBhbmQgcHJpY2VzLlxuICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIDxQcm9kdWN0U29ydGluZ0Ryb3Bkb3duIHNvcnQ9e3NvcnR9IGNhbGxiYWNrPXtzZXRTb3J0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtdmNlbnRlcmVkIG10LTZcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdHNMaXN0Py5tYXAoKHByb2R1Y3QsIGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyXCIga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCB7Li4ucHJvZHVjdH0gaWR4PXtpZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2xvYWRpbmcgJiYgPFNrZWxldG9uIGNvdW50PXs1fSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzR3JpZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductsGrid.jsx\n");

/***/ })

})