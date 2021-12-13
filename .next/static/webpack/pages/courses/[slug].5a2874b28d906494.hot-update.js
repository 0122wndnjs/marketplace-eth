"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/courses/[slug]",{

/***/ "./components/providers/web3/index.js":
/*!********************************************!*\
  !*** ./components/providers/web3/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Web3Provider; },\n/* harmony export */   \"useWeb3\": function() { return /* binding */ useWeb3; }\n/* harmony export */ });\n/* harmony import */ var _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metamask/detect-provider */ \"./node_modules/@metamask/detect-provider/dist/index.js\");\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s2 = $RefreshSig$(), _s1 = $RefreshSig$();\nvar ref1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\"), createContext = ref1.createContext, useContext = ref1.useContext, useState = ref1.useState, useEffect = ref1.useEffect;\nvar Web3Context = createContext(null);\nfunction Web3Provider(param) {\n    var children = param.children;\n    _s2();\n    var ref = _slicedToArray(useState({\n        provider: null,\n        web3: null,\n        contract: null,\n        isInitialized: false\n    }), 2), web3Api = ref[0], setWeb3Api = ref[1];\n    useEffect(function() {\n        var loadProvider = _asyncToGenerator(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, web3;\n            return _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default()();\n                    case 2:\n                        provider = _ctx.sent;\n                        if (provider) {\n                            web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(provider);\n                            setWeb3Api({\n                                provider: provider,\n                                web3: web3,\n                                contract: null,\n                                isInitialized: true\n                            });\n                        } else {\n                            setWeb3Api(function(api) {\n                                return _objectSpread({\n                                }, api, {\n                                    isInitialized: true\n                                });\n                            });\n                            console.error(\"Please, inatall Metamask.\");\n                        }\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        loadProvider();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Web3Context.Provider, {\n        value: web3Api,\n        __source: {\n            fileName: \"/Users/jk/Documents/GitHub/marketplace-eth/components/providers/web3/index.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n};\n_s2(Web3Provider, \"GGSIl+JegyIg+qMoaDMBb8mg/I4=\");\n_c = Web3Provider;\nfunction useWeb3() {\n    _s1();\n    return useContext(Web3Context);\n}\n_s1(useWeb3, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"Web3Provider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDOEQ7QUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGdkIsR0FBSyxDQUFzREUsSUFBZ0IsR0FBaEJBLG1CQUFPLENBQUMsNENBQU8sR0FBbEVDLGFBQWEsR0FBc0NELElBQWdCLENBQW5FQyxhQUFhLEVBQUVDLFVBQVUsR0FBMEJGLElBQWdCLENBQXBERSxVQUFVLEVBQUVDLFFBQVEsR0FBZ0JILElBQWdCLENBQXhDRyxRQUFRLEVBQUVDLFNBQVMsR0FBS0osSUFBZ0IsQ0FBOUJJLFNBQVM7QUFJdEQsR0FBSyxDQUFDQyxXQUFXLEdBQUdKLGFBQWEsQ0FBQyxJQUFJO0FBRXZCLFFBQVEsQ0FBQ0ssWUFBWSxDQUFDLEtBQVUsRUFBRSxDQUFDO1FBQVpDLFFBQVEsR0FBVCxLQUFVLENBQVRBLFFBQVE7O0lBQzFDLEdBQUssQ0FBeUJKLEdBSzVCLGtCQUw0QkEsUUFBUSxDQUFDLENBQUM7UUFDcENLLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLGFBQWEsRUFBRSxLQUFLO0lBQ3hCLENBQUMsT0FMTUMsT0FBTyxHQUFnQlQsR0FLNUIsS0FMY1UsVUFBVSxHQUFJVixHQUs1QjtJQUVGQyxTQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2IsR0FBSyxDQUFDVSxZQUFZLHdKQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUV4Qk4sUUFBUSxFQUVKQyxJQUFJOzs7OzsrQkFGU1gsZ0VBQXNCOzt3QkFBdkNVLFFBQVE7d0JBQ2QsRUFBRSxFQUFFQSxRQUFRLEVBQUUsQ0FBQzs0QkFDTEMsSUFBSSxHQUFHLEdBQUcsQ0FBQ1YsNkNBQUksQ0FBQ1MsUUFBUTs0QkFDOUJLLFVBQVUsQ0FBQyxDQUFDO2dDQUNSTCxRQUFRLEVBQVJBLFFBQVE7Z0NBQ1JDLElBQUksRUFBSkEsSUFBSTtnQ0FDSkMsUUFBUSxFQUFFLElBQUk7Z0NBQ2RDLGFBQWEsRUFBRSxJQUFJOzRCQUN2QixDQUFDO3dCQUNMLENBQUMsTUFBTSxDQUFDOzRCQUNKRSxVQUFVLENBQUNFLFFBQVEsQ0FBUkEsR0FBRztnQ0FBSSxNQUFNO21DQUFEQSxHQUFHO29DQUFFSixhQUFhLEVBQUUsSUFBSTs7OzRCQUMvQ0ssT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBMkI7d0JBQzdDLENBQUM7Ozs7OztRQUNMLENBQUM7UUFFREgsWUFBWTtJQUNoQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSxzRUFDRFQsV0FBVyxDQUFDYSxRQUFRO1FBQUNDLEtBQUssRUFBRVAsT0FBTzs7Ozs7OztrQkFDL0JMLFFBQVE7O0FBR3JCLENBQUM7SUFsQ3VCRCxZQUFZO0tBQVpBLFlBQVk7QUFvQzdCLFNBQVNjLE9BQU8sR0FBRyxDQUFDOztJQUN2QixNQUFNLENBQUNsQixVQUFVLENBQUNHLFdBQVc7QUFDakMsQ0FBQztJQUZlZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvdmlkZXJzL3dlYjMvaW5kZXguanM/M2FhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmltcG9ydCBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyIGZyb20gXCJAbWV0YW1hc2svZGV0ZWN0LXByb3ZpZGVyXCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuXG5jb25zdCBXZWIzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2ViM1Byb3ZpZGVyKHtjaGlsZHJlbn0pIHtcbiAgICBjb25zdCBbd2ViM0FwaSwgc2V0V2ViM0FwaV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHByb3ZpZGVyOiBudWxsLFxuICAgICAgICB3ZWIzOiBudWxsLFxuICAgICAgICBjb250cmFjdDogbnVsbCxcbiAgICAgICAgaXNJbml0aWFsaXplZDogZmFsc2VcbiAgICB9KVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZFByb3ZpZGVyID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IGRldGVjdEV0aGVyZXVtUHJvdmlkZXIoKVxuICAgICAgICAgICAgaWYgKHByb3ZpZGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKVxuICAgICAgICAgICAgICAgIHNldFdlYjNBcGkoe1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgd2ViMyxcbiAgICAgICAgICAgICAgICAgICAgY29udHJhY3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGlzSW5pdGlhbGl6ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRXZWIzQXBpKGFwaSA9PiAoey4uLmFwaSwgaXNJbml0aWFsaXplZDogdHJ1ZX0pKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQbGVhc2UsIGluYXRhbGwgTWV0YW1hc2suXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkUHJvdmlkZXIoKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFdlYjNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt3ZWIzQXBpfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9XZWIzQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VXZWIzKCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFdlYjNDb250ZXh0KVxufSJdLCJuYW1lcyI6WyJkZXRlY3RFdGhlcmV1bVByb3ZpZGVyIiwiV2ViMyIsInJlcXVpcmUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV2ViM0NvbnRleHQiLCJXZWIzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInByb3ZpZGVyIiwid2ViMyIsImNvbnRyYWN0IiwiaXNJbml0aWFsaXplZCIsIndlYjNBcGkiLCJzZXRXZWIzQXBpIiwibG9hZFByb3ZpZGVyIiwiYXBpIiwiY29uc29sZSIsImVycm9yIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVdlYjMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/providers/web3/index.js\n");

/***/ })

});