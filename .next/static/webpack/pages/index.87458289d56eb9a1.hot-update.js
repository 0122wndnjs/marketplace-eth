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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Web3Provider; },\n/* harmony export */   \"useWeb3\": function() { return /* binding */ useWeb3; }\n/* harmony export */ });\n/* harmony import */ var _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metamask/detect-provider */ \"./node_modules/@metamask/detect-provider/dist/index.js\");\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s2 = $RefreshSig$(), _s1 = $RefreshSig$();\nvar ref1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\"), createContext = ref1.createContext, useContext = ref1.useContext, useState = ref1.useState, useEffect = ref1.useEffect, useMemo = ref1.useMemo;\nvar Web3Context = createContext(null);\nfunction Web3Provider(param) {\n    var children = param.children;\n    _s2();\n    var ref = _slicedToArray(useState({\n        provider: null,\n        web3: null,\n        contract: null,\n        isLoading: true\n    }), 2), web3Api = ref[0], setWeb3Api = ref[1];\n    useEffect(function() {\n        var loadProvider = _asyncToGenerator(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, web3;\n            return _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default()();\n                    case 2:\n                        provider = _ctx.sent;\n                        if (provider) {\n                            web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(provider);\n                            setWeb3Api({\n                                provider: provider,\n                                web3: web3,\n                                contract: null,\n                                isLoading: false\n                            });\n                        } else {\n                            setWeb3Api(function(api) {\n                                return _objectSpread({\n                                }, api, {\n                                    isLoading: false\n                                });\n                            });\n                            console.error(\"Please, inatall Metamask.\");\n                        }\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        loadProvider();\n    }, []);\n    var _web3Api = useMemo(function() {\n        return _objectSpread({\n        }, web3Api, {\n            connect: web3Api.provider ? _asyncToGenerator(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return web3Api.provider.request({\n                                method: \"eth_requestAccounts\"\n                            });\n                        case 3:\n                            _ctx.next = 9;\n                            break;\n                        case 5:\n                            _ctx.prev = 5;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.error(\"Cannot retreive account!\");\n                            location.reload();\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        5\n                    ]\n                ]);\n            })) : function() {\n                return console.log(\"Cannot connect to Metamks, try to reload your browser please\");\n            }\n        });\n    }, [\n        web3Api\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Web3Context.Provider, {\n        value: _web3Api,\n        __source: {\n            fileName: \"/Users/jk/Documents/GitHub/marketplace-eth/components/providers/web3/index.js\",\n            lineNumber: 53,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n};\n_s2(Web3Provider, \"RX7utuyUipZQ9juS8mSHqVEQfEk=\");\n_c = Web3Provider;\nfunction useWeb3() {\n    _s1();\n    return useContext(Web3Context);\n}\n_s1(useWeb3, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"Web3Provider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDOEQ7QUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGdkIsR0FBSyxDQUErREUsSUFBZ0IsR0FBaEJBLG1CQUFPLENBQUMsNENBQU8sR0FBM0VDLGFBQWEsR0FBK0NELElBQWdCLENBQTVFQyxhQUFhLEVBQUVDLFVBQVUsR0FBbUNGLElBQWdCLENBQTdERSxVQUFVLEVBQUVDLFFBQVEsR0FBeUJILElBQWdCLENBQWpERyxRQUFRLEVBQUVDLFNBQVMsR0FBY0osSUFBZ0IsQ0FBdkNJLFNBQVMsRUFBRUMsT0FBTyxHQUFLTCxJQUFnQixDQUE1QkssT0FBTztBQUkvRCxHQUFLLENBQUNDLFdBQVcsR0FBR0wsYUFBYSxDQUFDLElBQUk7QUFFdkIsUUFBUSxDQUFDTSxZQUFZLENBQUMsS0FBVSxFQUFFLENBQUM7UUFBWkMsUUFBUSxHQUFULEtBQVUsQ0FBVEEsUUFBUTs7SUFDMUMsR0FBSyxDQUF5QkwsR0FLNUIsa0JBTDRCQSxRQUFRLENBQUMsQ0FBQztRQUNwQ00sUUFBUSxFQUFFLElBQUk7UUFDZEMsSUFBSSxFQUFFLElBQUk7UUFDVkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsU0FBUyxFQUFFLElBQUk7SUFDbkIsQ0FBQyxPQUxNQyxPQUFPLEdBQWdCVixHQUs1QixLQUxjVyxVQUFVLEdBQUlYLEdBSzVCO0lBRUZDLFNBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYixHQUFLLENBQUNXLFlBQVksd0pBQUcsUUFBUSxXQUFJLENBQUM7Z0JBRXhCTixRQUFRLEVBRUpDLElBQUk7Ozs7OytCQUZTWixnRUFBc0I7O3dCQUF2Q1csUUFBUTt3QkFDZCxFQUFFLEVBQUVBLFFBQVEsRUFBRSxDQUFDOzRCQUNMQyxJQUFJLEdBQUcsR0FBRyxDQUFDWCw2Q0FBSSxDQUFDVSxRQUFROzRCQUM5QkssVUFBVSxDQUFDLENBQUM7Z0NBQ1JMLFFBQVEsRUFBUkEsUUFBUTtnQ0FDUkMsSUFBSSxFQUFKQSxJQUFJO2dDQUNKQyxRQUFRLEVBQUUsSUFBSTtnQ0FDZEMsU0FBUyxFQUFFLEtBQUs7NEJBQ3BCLENBQUM7d0JBQ0wsQ0FBQyxNQUFNLENBQUM7NEJBQ0pFLFVBQVUsQ0FBQ0UsUUFBUSxDQUFSQSxHQUFHO2dDQUFJLE1BQU07bUNBQURBLEdBQUc7b0NBQUVKLFNBQVMsRUFBRSxLQUFLOzs7NEJBQzVDSyxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUEyQjt3QkFDN0MsQ0FBQzs7Ozs7O1FBQ0wsQ0FBQztRQUVESCxZQUFZO0lBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNJLFFBQVEsR0FBR2QsT0FBTyxDQUFDLFFBQzdCLEdBRG1DLENBQUM7UUFDNUIsTUFBTTtXQUNDUSxPQUFPO1lBQ1ZPLE9BQU8sRUFBRVAsT0FBTyxDQUFDSixRQUFRLHdKQUNyQixRQUFRLFdBQUksQ0FBQzs7Ozs7O21DQUVDSSxPQUFPLENBQUNKLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDLENBQUNDO2dDQUFBQSxNQUFNLEVBQUUsQ0FBcUI7NEJBQUEsQ0FBQzs7Ozs7Ozs0QkFFOURMLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQTBCOzRCQUN4Q0ssUUFBUSxDQUFDQyxNQUFNOzs7Ozs7Ozs7OztZQUV2QixDQUFDLEtBQ0QsUUFBUTtnQkFBRlAsTUFBTSxDQUFOQSxPQUFPLENBQUNRLEdBQUcsQ0FBQyxDQUE4RDs7O0lBRTVGLENBQUMsRUFBRSxDQUFDWjtRQUFBQSxPQUFPO0lBQUEsQ0FBQztJQUVaLE1BQU0sc0VBQ0RQLFdBQVcsQ0FBQ29CLFFBQVE7UUFBQ0MsS0FBSyxFQUFFUixRQUFROzs7Ozs7O2tCQUNoQ1gsUUFBUTs7QUFHckIsQ0FBQztJQWxEdUJELFlBQVk7S0FBWkEsWUFBWTtBQW9EN0IsU0FBU3FCLE9BQU8sR0FBRyxDQUFDOztJQUN2QixNQUFNLENBQUMxQixVQUFVLENBQUNJLFdBQVc7QUFDakMsQ0FBQztJQUZlc0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LmpzPzNhYTEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gPSByZXF1aXJlKFwicmVhY3RcIik7XG5pbXBvcnQgZGV0ZWN0RXRoZXJldW1Qcm92aWRlciBmcm9tIFwiQG1ldGFtYXNrL2RldGVjdC1wcm92aWRlclwiO1xuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcblxuY29uc3QgV2ViM0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlYjNQcm92aWRlcih7Y2hpbGRyZW59KSB7XG4gICAgY29uc3QgW3dlYjNBcGksIHNldFdlYjNBcGldID0gdXNlU3RhdGUoe1xuICAgICAgICBwcm92aWRlcjogbnVsbCxcbiAgICAgICAgd2ViMzogbnVsbCxcbiAgICAgICAgY29udHJhY3Q6IG51bGwsXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgIH0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkUHJvdmlkZXIgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgZGV0ZWN0RXRoZXJldW1Qcm92aWRlcigpXG4gICAgICAgICAgICBpZiAocHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpXG4gICAgICAgICAgICAgICAgc2V0V2ViM0FwaSh7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICB3ZWIzLFxuICAgICAgICAgICAgICAgICAgICBjb250cmFjdDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFdlYjNBcGkoYXBpID0+ICh7Li4uYXBpLCBpc0xvYWRpbmc6IGZhbHNlfSkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlBsZWFzZSwgaW5hdGFsbCBNZXRhbWFzay5cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRQcm92aWRlcigpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBfd2ViM0FwaSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ud2ViM0FwaSxcbiAgICAgICAgICAgIGNvbm5lY3Q6IHdlYjNBcGkucHJvdmlkZXIgP1xuICAgICAgICAgICAgICAgIGFzeW5jICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB3ZWIzQXBpLnByb3ZpZGVyLnJlcXVlc3Qoe21ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCJ9KVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgcmV0cmVpdmUgYWNjb3VudCFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IDpcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkNhbm5vdCBjb25uZWN0IHRvIE1ldGFta3MsIHRyeSB0byByZWxvYWQgeW91ciBicm93c2VyIHBsZWFzZVwiKVxuICAgICAgICB9XG4gICAgfSwgW3dlYjNBcGldKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFdlYjNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtfd2ViM0FwaX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvV2ViM0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlV2ViMygpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChXZWIzQ29udGV4dClcbn0iXSwibmFtZXMiOlsiZGV0ZWN0RXRoZXJldW1Qcm92aWRlciIsIldlYjMiLCJyZXF1aXJlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJXZWIzQ29udGV4dCIsIldlYjNQcm92aWRlciIsImNoaWxkcmVuIiwicHJvdmlkZXIiLCJ3ZWIzIiwiY29udHJhY3QiLCJpc0xvYWRpbmciLCJ3ZWIzQXBpIiwic2V0V2ViM0FwaSIsImxvYWRQcm92aWRlciIsImFwaSIsImNvbnNvbGUiLCJlcnJvciIsIl93ZWIzQXBpIiwiY29ubmVjdCIsInJlcXVlc3QiLCJtZXRob2QiLCJsb2NhdGlvbiIsInJlbG9hZCIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VXZWIzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/providers/web3/index.js\n");

/***/ })

});