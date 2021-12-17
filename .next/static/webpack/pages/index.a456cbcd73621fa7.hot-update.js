/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/providers/web3/hooks/setupHooks.js":
/*!*******************************************************!*\
  !*** ./components/providers/web3/hooks/setupHooks.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupHooks\": function() { return /* binding */ setupHooks; }\n/* harmony export */ });\n/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAccount */ \"./components/providers/web3/hooks/useAccount.js\");\n/* harmony import */ var _useNetwork__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useNetwork */ \"./components/providers/web3/hooks/useNetwork.js\");\n/* harmony import */ var _useNetwork__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_useNetwork__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\n// const DEFAULT_HOOKS = {\n//     useAccount: () => ({account: null})\n// }\nvar setupHooks = function() {\n    for(var _len = arguments.length, deps = new Array(_len), _key = 0; _key < _len; _key++){\n        deps[_key] = arguments[_key];\n    }\n    // if (!web3) { return DEFAULT_HOOKS }\n    return _defineProperty({\n        useAccount: _useAccount__WEBPACK_IMPORTED_MODULE_0__.handler.apply(void 0, _toConsumableArray(deps))\n    }, \"useAccount\", _useNetwork__WEBPACK_IMPORTED_MODULE_1__.handler.apply(void 0, _toConsumableArray(deps)));\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2hvb2tzL3NldHVwSG9va3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMkQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxFQUEwQjtBQUMxQixFQUEwQztBQUMxQyxFQUFJO0FBRUcsR0FBSyxDQUFDRyxVQUFVLEdBQUcsUUFBUSxHQUFLLENBQUM7cUNBQVZDLElBQUk7UUFBSkEsSUFBSTs7SUFFOUIsRUFBc0M7SUFFdEMsTUFBTTtRQUNGQyxVQUFVLEVBQUVKLHNEQUEwQixDQUExQkEsSUFBSSxDQUFKQSxDQUFpQixxQkFBSUcsSUFBSTtPQUNyQ0MsQ0FBVSxhQUFFSCxzREFBMEIsQ0FBMUJBLElBQUksQ0FBSkEsQ0FBaUIscUJBQUlFLElBQUk7QUFFN0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2hvb2tzL3NldHVwSG9va3MuanM/NDdkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgaGFuZGxlciBhcyBjcmVhdGVBY2NvdW50SG9vayB9IGZyb20gXCIuL3VzZUFjY291bnRcIjtcbmltcG9ydCB7IGhhbmRsZXIgYXMgY3JlYXRlTmV0d29ya0hvb2sgfSBmcm9tIFwiLi91c2VOZXR3b3JrXCI7XG5cbi8vIGNvbnN0IERFRkFVTFRfSE9PS1MgPSB7XG4vLyAgICAgdXNlQWNjb3VudDogKCkgPT4gKHthY2NvdW50OiBudWxsfSlcbi8vIH1cblxuZXhwb3J0IGNvbnN0IHNldHVwSG9va3MgPSAoLi4uZGVwcykgPT4ge1xuXG4gICAgLy8gaWYgKCF3ZWIzKSB7IHJldHVybiBERUZBVUxUX0hPT0tTIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUFjY291bnQ6IGNyZWF0ZUFjY291bnRIb29rKC4uLmRlcHMpLFxuICAgICAgICB1c2VBY2NvdW50OiBjcmVhdGVOZXR3b3JrSG9vayguLi5kZXBzKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsImNyZWF0ZUFjY291bnRIb29rIiwiY3JlYXRlTmV0d29ya0hvb2siLCJzZXR1cEhvb2tzIiwiZGVwcyIsInVzZUFjY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/providers/web3/hooks/setupHooks.js\n");

/***/ }),

/***/ "./components/providers/web3/hooks/useNetwork.js":
/*!*******************************************************!*\
  !*** ./components/providers/web3/hooks/useNetwork.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});