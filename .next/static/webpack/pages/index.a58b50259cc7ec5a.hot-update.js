"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/providers/web3/hooks/useAccount.js":
/*!*******************************************************!*\
  !*** ./components/providers/web3/hooks/useAccount.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar handler = function(web3) {\n    return _s(function() {\n        _s();\n        var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), account = ref1[0], setAccount = ref1[1];\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n            var getAccount = _asyncToGenerator(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var accounts;\n                return _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return web3.eth.getAccounts();\n                        case 2:\n                            accounts = _ctx.sent;\n                            setAccount(accounts[0]);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            web3 && getAccount();\n        }, [\n            web3\n        ]);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n            var ref;\n            window.ethereum && window.ethereum.on(\"accountsChanged\", function(accounts) {\n                return setAccount((ref = accounts[0]) !== null && ref !== void 0 ? ref : null);\n            });\n        }, []);\n        return {\n            account: account\n        };\n    }, \"J2ZUa9KThBV6uW+KTtJO6m6y82E=\");\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2hvb2tzL3VzZUFjY291bnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxHQUFLLENBQUNFLE9BQU8sR0FBR0MsUUFBUSxDQUFSQSxJQUFJO2NBQUksUUFDL0IsR0FEcUMsQ0FBQzs7UUFDbEMsR0FBSyxDQUF5QkYsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBcENHLE9BQU8sR0FBZ0JILElBQWMsS0FBNUJJLFVBQVUsR0FBSUosSUFBYztRQUU1Q0QsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7WUFDYixHQUFLLENBQUNNLFVBQVUsd0pBQUcsUUFBUSxXQUFJLENBQUM7b0JBQ3RCQyxRQUFROzs7OzttQ0FBU0osSUFBSSxDQUFDSyxHQUFHLENBQUNDLFdBQVc7OzRCQUFyQ0YsUUFBUTs0QkFDZEYsVUFBVSxDQUFDRSxRQUFRLENBQUMsQ0FBQzs7Ozs7O1lBQ3pCLENBQUM7WUFDREosSUFBSSxJQUFJRyxVQUFVO1FBQ3RCLENBQUMsRUFBRSxDQUFDSDtZQUFBQSxJQUFJO1FBQUEsQ0FBQztRQUVUSCxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztnQkFHZ0JPLEdBQVc7WUFGeENHLE1BQU0sQ0FBQ0MsUUFBUSxJQUNmRCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsRUFBRSxDQUFDLENBQWlCLGtCQUNoQyxRQUFRLENBQVBMLFFBQVE7Z0JBQUtGLE1BQU0sQ0FBTkEsVUFBVSxFQUFDRSxHQUFXLEdBQVhBLFFBQVEsQ0FBQyxDQUFDLGVBQVZBLEdBQVcsY0FBWEEsR0FBVyxHQUFJLElBQUk7O1FBRXBELENBQUMsRUFBQyxDQUFDLENBQUM7UUFFSixNQUFNLENBQUMsQ0FBQztZQUFDSCxPQUFPLEVBQVBBLE9BQU87UUFBQyxDQUFDO0lBQ3RCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm92aWRlcnMvd2ViMy9ob29rcy91c2VBY2NvdW50LmpzPzA0YzkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSB3ZWIzID0+ICgpID0+IHtcbiAgICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0QWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxuICAgICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSlcbiAgICAgICAgfVxuICAgICAgICB3ZWIzICYmIGdldEFjY291bnQoKVxuICAgIH0sIFt3ZWIzXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5ldGhlcmV1bSAmJlxuICAgICAgICB3aW5kb3cuZXRoZXJldW0ub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgXG4gICAgICAgICAgICAoYWNjb3VudHMpID0+IHNldEFjY291bnQoYWNjb3VudHNbMF0gPz8gbnVsbClcbiAgICAgICAgKVxuICAgIH0sW10pXG5cbiAgICByZXR1cm4geyBhY2NvdW50IH1cbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJoYW5kbGVyIiwid2ViMyIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiZ2V0QWNjb3VudCIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIm9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/providers/web3/hooks/useAccount.js\n");

/***/ })

});