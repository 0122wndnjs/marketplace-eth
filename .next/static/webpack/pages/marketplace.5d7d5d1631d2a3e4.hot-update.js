"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/marketplace",{

/***/ "./pages/marketplace/index.js":
/*!************************************!*\
  !*** ./pages/marketplace/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Mareketplace; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ui/common */ \"./components/ui/common/index.js\");\n/* harmony import */ var _components_ui_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/ui/web3 */ \"./components/ui/web3/index.js\");\n/* harmony import */ var _components_ui_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ui/course */ \"./components/ui/course/index.js\");\n/* harmony import */ var _components_ui_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/ui/order */ \"./components/ui/order/index.js\");\n/* harmony import */ var _components_ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/ui/layout */ \"./components/ui/layout/index.js\");\n/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/providers */ \"./components/providers/index.js\");\n/* harmony import */ var _components_hooks_web3_useAccount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/hooks/web3/useAccount */ \"./components/hooks/web3/useAccount.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Mareketplace(param) {\n    var courses = param.courses;\n    _s();\n    var account = (0,_components_hooks_web3_useAccount__WEBPACK_IMPORTED_MODULE_7__.useAccount)().account;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"py-4\",\n                __source: {\n                    fileName: \"/Users/jk/Documents/GitHub/marketplace-eth/pages/marketplace/index.js\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_web3__WEBPACK_IMPORTED_MODULE_2__.WalletBar, {\n                    address: account.data,\n                    __source: {\n                        fileName: \"/Users/jk/Documents/GitHub/marketplace-eth/pages/marketplace/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_course__WEBPACK_IMPORTED_MODULE_3__.CourseList, {\n                courses: courses,\n                __source: {\n                    fileName: \"/Users/jk/Documents/GitHub/marketplace-eth/pages/marketplace/index.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n_s(Mareketplace, \"BuDsUPJgKd74VP0GN/MTY/3iLf0=\", false, function() {\n    return [\n        _components_hooks_web3_useAccount__WEBPACK_IMPORTED_MODULE_7__.useAccount\n    ];\n});\n_c = Mareketplace;\nMareketplace.Layout = _components_ui_layout__WEBPACK_IMPORTED_MODULE_5__.BaseLayout;\nvar _c;\n$RefreshReg$(_c, \"Mareketplace\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYXJrZXRwbGFjZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lEO0FBQ0E7QUFDUDtBQUNGO0FBQ0U7QUFFSDtBQUNlOzs7QUFFL0MsUUFBUSxDQUFDUyxZQUFZLENBQUMsS0FBUyxFQUFFLENBQUM7UUFBWEMsT0FBTyxHQUFSLEtBQVMsQ0FBUkEsT0FBTzs7SUFDekMsR0FBSyxDQUFHQyxPQUFPLEdBQUtILDZFQUFVLEdBQXRCRyxPQUFPO0lBQ2YsTUFBTTs7aUZBRUdDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFNOzs7Ozs7OytGQUNoQlYsMERBQVM7b0JBQUNXLE9BQU8sRUFBRUgsT0FBTyxDQUFDSSxJQUFJOzs7Ozs7Ozs7aUZBRW5DWCw2REFBVTtnQkFDUE0sT0FBTyxFQUFFQSxPQUFPOzs7Ozs7Ozs7O0FBSWhDLENBQUM7R0FadUJELFlBQVk7O1FBQ1pELHlFQUFVOzs7S0FEVkMsWUFBWTtBQXVCcENBLFlBQVksQ0FBQ08sTUFBTSxHQUFHViw2REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tYXJrZXRwbGFjZS9pbmRleC5qcz9jZWU5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSGVybywgQnJlYWRDcnVtYnMgfSBmcm9tIFwiQGNvbXBvbmVudHMvdWkvY29tbW9uXCJcbmltcG9ydCB7IEV0aFJhdGVzLCBXYWxsZXRCYXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvdWkvd2ViM1wiO1xuaW1wb3J0IHsgQ291cnNlTGlzdCB9IGZyb20gXCJAY29tcG9uZW50cy91aS9jb3Vyc2VcIjtcbmltcG9ydCB7IE9yZGVyQ2FyZCB9IGZyb20gXCJAY29tcG9uZW50cy91aS9vcmRlclwiO1xuaW1wb3J0IHsgQmFzZUxheW91dCB9IGZyb20gXCJAY29tcG9uZW50cy91aS9sYXlvdXRcIjtcbmltcG9ydCB7IGdldEFsbENvdXJzZXMgfSBmcm9tIFwiQGNvbnRlbnQvY291cnNlcy9mZXRjaGVyXCI7XG5pbXBvcnQgeyB1c2VXZWIzIH0gZnJvbSBcIkBjb21wb25lbnRzL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgdXNlQWNjb3VudCB9IGZyb20gXCJAY29tcG9uZW50cy9ob29rcy93ZWIzL3VzZUFjY291bnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFyZWtldHBsYWNlKHtjb3Vyc2VzfSkge1xuICAgIGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlQWNjb3VudCgpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiPlxuICAgICAgICAgICAgICAgIDxXYWxsZXRCYXIgYWRkcmVzcz17YWNjb3VudC5kYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q291cnNlTGlzdFxuICAgICAgICAgICAgICAgIGNvdXJzZXM9e2NvdXJzZXN9IFxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gZ2V0QWxsQ291cnNlcygpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNvdXJzZXM6IGRhdGFcbiAgICB9IFxuICB9XG59XG5cbk1hcmVrZXRwbGFjZS5MYXlvdXQgPSBCYXNlTGF5b3V0Il0sIm5hbWVzIjpbIkhlcm8iLCJCcmVhZENydW1icyIsIkV0aFJhdGVzIiwiV2FsbGV0QmFyIiwiQ291cnNlTGlzdCIsIk9yZGVyQ2FyZCIsIkJhc2VMYXlvdXQiLCJ1c2VXZWIzIiwidXNlQWNjb3VudCIsIk1hcmVrZXRwbGFjZSIsImNvdXJzZXMiLCJhY2NvdW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiYWRkcmVzcyIsImRhdGEiLCJMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/marketplace/index.js\n");

/***/ })

});