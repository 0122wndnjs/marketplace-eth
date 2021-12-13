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

/***/ "./components/providers/web3/index.js":
/*!********************************************!*\
  !*** ./components/providers/web3/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Web3Provider; },\n/* harmony export */   \"useWeb3\": function() { return /* binding */ useWeb3; }\n/* harmony export */ });\n/* harmony import */ var _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metamask/detect-provider */ \"./node_modules/@metamask/detect-provider/dist/index.js\");\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s2 = $RefreshSig$(), _s1 = $RefreshSig$();\nvar ref1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\"), createContext = ref1.createContext, useContext = ref1.useContext, useState = ref1.useState;\nvar Web3Context = createContext(null);\nfunction Web3Provider(param) {\n    var children = param.children;\n    _s2();\n    var ref = _slicedToArray(useState({\n        provider: null,\n        web3: null,\n        contract: null,\n        isInitialized: false\n    }), 2), web3Api = ref[0], setWeb3Api = ref[1];\n    useEffect(function() {\n        var loadProvider = _asyncToGenerator(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, web3;\n            return _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default()();\n                    case 2:\n                        provider = _ctx.sent;\n                        if (provider) {\n                            web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(provider);\n                            setWeb3Api({\n                                provider: provider,\n                                web3: web3,\n                                contract: null,\n                                isInitialized: true\n                            });\n                        } else {\n                            setWeb3Api(function(api) {\n                                return _objectSpread({\n                                }, api, {\n                                    isInitialized: true\n                                });\n                            });\n                            console.error(\"Please, inatall Metamask.\");\n                        }\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        loadProvider();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Web3Context.Provider, {\n        value: web3Api,\n        __source: {\n            fileName: \"/Users/jk/Documents/GitHub/marketplace-eth/components/providers/web3/index.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n};\n_s2(Web3Provider, \"GGSIl+JegyIg+qMoaDMBb8mg/I4=\");\n_c = Web3Provider;\nfunction useWeb3() {\n    _s1();\n    return useContext(Web3Context);\n}\n_s1(useWeb3, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"Web3Provider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDOEQ7QUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGdkIsR0FBSyxDQUEyQ0UsSUFBZ0IsR0FBaEJBLG1CQUFPLENBQUMsNENBQU8sR0FBdkRDLGFBQWEsR0FBMkJELElBQWdCLENBQXhEQyxhQUFhLEVBQUVDLFVBQVUsR0FBZUYsSUFBZ0IsQ0FBekNFLFVBQVUsRUFBRUMsUUFBUSxHQUFLSCxJQUFnQixDQUE3QkcsUUFBUTtBQUkzQyxHQUFLLENBQUNDLFdBQVcsR0FBR0gsYUFBYSxDQUFDLElBQUk7QUFFdkIsUUFBUSxDQUFDSSxZQUFZLENBQUMsS0FBVSxFQUFFLENBQUM7UUFBWkMsUUFBUSxHQUFULEtBQVUsQ0FBVEEsUUFBUTs7SUFDMUMsR0FBSyxDQUF5QkgsR0FLNUIsa0JBTDRCQSxRQUFRLENBQUMsQ0FBQztRQUNwQ0ksUUFBUSxFQUFFLElBQUk7UUFDZEMsSUFBSSxFQUFFLElBQUk7UUFDVkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsYUFBYSxFQUFFLEtBQUs7SUFDeEIsQ0FBQyxPQUxNQyxPQUFPLEdBQWdCUixHQUs1QixLQUxjUyxVQUFVLEdBQUlULEdBSzVCO0lBRUZVLFNBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYixHQUFLLENBQUNDLFlBQVksd0pBQUcsUUFBUSxXQUFJLENBQUM7Z0JBRXhCUCxRQUFRLEVBRUpDLElBQUk7Ozs7OytCQUZTVixnRUFBc0I7O3dCQUF2Q1MsUUFBUTt3QkFDZCxFQUFFLEVBQUVBLFFBQVEsRUFBRSxDQUFDOzRCQUNMQyxJQUFJLEdBQUcsR0FBRyxDQUFDVCw2Q0FBSSxDQUFDUSxRQUFROzRCQUM5QkssVUFBVSxDQUFDLENBQUM7Z0NBQ1JMLFFBQVEsRUFBUkEsUUFBUTtnQ0FDUkMsSUFBSSxFQUFKQSxJQUFJO2dDQUNKQyxRQUFRLEVBQUUsSUFBSTtnQ0FDZEMsYUFBYSxFQUFFLElBQUk7NEJBQ3ZCLENBQUM7d0JBQ0wsQ0FBQyxNQUFNLENBQUM7NEJBQ0pFLFVBQVUsQ0FBQ0csUUFBUSxDQUFSQSxHQUFHO2dDQUFJLE1BQU07bUNBQURBLEdBQUc7b0NBQUVMLGFBQWEsRUFBRSxJQUFJOzs7NEJBQy9DTSxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUEyQjt3QkFDN0MsQ0FBQzs7Ozs7O1FBQ0wsQ0FBQztRQUVESCxZQUFZO0lBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLHNFQUNEVixXQUFXLENBQUNjLFFBQVE7UUFBQ0MsS0FBSyxFQUFFUixPQUFPOzs7Ozs7O2tCQUMvQkwsUUFBUTs7QUFHckIsQ0FBQztJQWxDdUJELFlBQVk7S0FBWkEsWUFBWTtBQW9DN0IsU0FBU2UsT0FBTyxHQUFHLENBQUM7O0lBQ3ZCLE1BQU0sQ0FBQ2xCLFVBQVUsQ0FBQ0UsV0FBVztBQUNqQyxDQUFDO0lBRmVnQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvdmlkZXJzL3dlYjMvaW5kZXguanM/M2FhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gPSByZXF1aXJlKFwicmVhY3RcIik7XG5pbXBvcnQgZGV0ZWN0RXRoZXJldW1Qcm92aWRlciBmcm9tIFwiQG1ldGFtYXNrL2RldGVjdC1wcm92aWRlclwiO1xuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcblxuY29uc3QgV2ViM0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlYjNQcm92aWRlcih7Y2hpbGRyZW59KSB7XG4gICAgY29uc3QgW3dlYjNBcGksIHNldFdlYjNBcGldID0gdXNlU3RhdGUoe1xuICAgICAgICBwcm92aWRlcjogbnVsbCxcbiAgICAgICAgd2ViMzogbnVsbCxcbiAgICAgICAgY29udHJhY3Q6IG51bGwsXG4gICAgICAgIGlzSW5pdGlhbGl6ZWQ6IGZhbHNlXG4gICAgfSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWRQcm92aWRlciA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyKClcbiAgICAgICAgICAgIGlmIChwcm92aWRlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcilcbiAgICAgICAgICAgICAgICBzZXRXZWIzQXBpKHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgIHdlYjMsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYWN0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBpc0luaXRpYWxpemVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0V2ViM0FwaShhcGkgPT4gKHsuLi5hcGksIGlzSW5pdGlhbGl6ZWQ6IHRydWV9KSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUGxlYXNlLCBpbmF0YWxsIE1ldGFtYXNrLlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZFByb3ZpZGVyKClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxXZWIzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17d2ViM0FwaX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvV2ViM0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlV2ViMygpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChXZWIzQ29udGV4dClcbn0iXSwibmFtZXMiOlsiZGV0ZWN0RXRoZXJldW1Qcm92aWRlciIsIldlYjMiLCJyZXF1aXJlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIldlYjNDb250ZXh0IiwiV2ViM1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJwcm92aWRlciIsIndlYjMiLCJjb250cmFjdCIsImlzSW5pdGlhbGl6ZWQiLCJ3ZWIzQXBpIiwic2V0V2ViM0FwaSIsInVzZUVmZmVjdCIsImxvYWRQcm92aWRlciIsImFwaSIsImNvbnNvbGUiLCJlcnJvciIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VXZWIzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/providers/web3/index.js\n");

/***/ })

});