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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Web3Provider; },\n/* harmony export */   \"useWeb3\": function() { return /* binding */ useWeb3; }\n/* harmony export */ });\n/* harmony import */ var _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metamask/detect-provider */ \"./node_modules/@metamask/detect-provider/dist/index.js\");\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_setupHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/setupHooks */ \"./components/providers/web3/hooks/setupHooks.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s2 = $RefreshSig$(), _s1 = $RefreshSig$();\nvar ref1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\"), createContext = ref1.createContext, useContext = ref1.useContext, useState = ref1.useState, useEffect = ref1.useEffect, useMemo = ref1.useMemo;\nvar Web3Context = createContext(null);\nfunction Web3Provider(param) {\n    var children = param.children;\n    _s2();\n    var ref = _slicedToArray(useState({\n        provider: null,\n        web3: null,\n        contract: null,\n        isLoading: true\n    }), 2), web3Api = ref[0], setWeb3Api = ref[1];\n    useEffect(function() {\n        var loadProvider = _asyncToGenerator(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, web3;\n            return _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default()();\n                    case 2:\n                        provider = _ctx.sent;\n                        if (provider) {\n                            web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(provider);\n                            setWeb3Api({\n                                provider: provider,\n                                web3: web3,\n                                contract: null,\n                                isLoading: false\n                            });\n                        } else {\n                            setWeb3Api(function(api) {\n                                return _objectSpread({\n                                }, api, {\n                                    isLoading: false\n                                });\n                            });\n                            console.error(\"Please, inatall Metamask.\");\n                        }\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        loadProvider();\n    }, []);\n    var _web3Api = useMemo(function() {\n        var web3 = web3Api.web3, provider = web3Api.provider;\n        return _objectSpread({\n        }, web3Api, {\n            isWeb3Loaded: web3 != null,\n            // hooks: setupHooks(web3),\n            getHooks: function() {\n                return (0,_hooks_setupHooks__WEBPACK_IMPORTED_MODULE_4__.setupHooks)(web3);\n            },\n            connect: provider ? _asyncToGenerator(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return web3Api.provider.request({\n                                method: \"eth_requestAccounts\"\n                            });\n                        case 3:\n                            _ctx.next = 8;\n                            break;\n                        case 5:\n                            _ctx.prev = 5;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            location.reload();\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        5\n                    ]\n                ]);\n            })) : function() {\n                return console.log(\"Cannot connect to Metamks, try to reload your browser please\");\n            }\n        });\n    }, [\n        web3Api\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Web3Context.Provider, {\n        value: _web3Api,\n        __source: {\n            fileName: \"/Users/jk/Documents/GitHub/marketplace-eth/components/providers/web3/index.js\",\n            lineNumber: 57,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n};\n_s2(Web3Provider, \"RX7utuyUipZQ9juS8mSHqVEQfEk=\");\n_c = Web3Provider;\nfunction useWeb3() {\n    _s1();\n    return useContext(Web3Context);\n}\n_s1(useWeb3, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"Web3Provider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzhEO0FBQ3ZDO0FBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSC9DLEdBQUssQ0FBK0RHLElBQWdCLEdBQWhCQSxtQkFBTyxDQUFDLDRDQUFPLEdBQTNFQyxhQUFhLEdBQStDRCxJQUFnQixDQUE1RUMsYUFBYSxFQUFFQyxVQUFVLEdBQW1DRixJQUFnQixDQUE3REUsVUFBVSxFQUFFQyxRQUFRLEdBQXlCSCxJQUFnQixDQUFqREcsUUFBUSxFQUFFQyxTQUFTLEdBQWNKLElBQWdCLENBQXZDSSxTQUFTLEVBQUVDLE9BQU8sR0FBS0wsSUFBZ0IsQ0FBNUJLLE9BQU87QUFLL0QsR0FBSyxDQUFDQyxXQUFXLEdBQUdMLGFBQWEsQ0FBQyxJQUFJO0FBRXZCLFFBQVEsQ0FBQ00sWUFBWSxDQUFDLEtBQVUsRUFBRSxDQUFDO1FBQVpDLFFBQVEsR0FBVCxLQUFVLENBQVRBLFFBQVE7O0lBQzFDLEdBQUssQ0FBeUJMLEdBSzVCLGtCQUw0QkEsUUFBUSxDQUFDLENBQUM7UUFDcENNLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFNBQVMsRUFBRSxJQUFJO0lBQ25CLENBQUMsT0FMTUMsT0FBTyxHQUFnQlYsR0FLNUIsS0FMY1csVUFBVSxHQUFJWCxHQUs1QjtJQUVGQyxTQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2IsR0FBSyxDQUFDVyxZQUFZLHdKQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUV4Qk4sUUFBUSxFQUVKQyxJQUFJOzs7OzsrQkFGU2IsZ0VBQXNCOzt3QkFBdkNZLFFBQVE7d0JBQ2QsRUFBRSxFQUFFQSxRQUFRLEVBQUUsQ0FBQzs0QkFDTEMsSUFBSSxHQUFHLEdBQUcsQ0FBQ1osNkNBQUksQ0FBQ1csUUFBUTs0QkFDOUJLLFVBQVUsQ0FBQyxDQUFDO2dDQUNSTCxRQUFRLEVBQVJBLFFBQVE7Z0NBQ1JDLElBQUksRUFBSkEsSUFBSTtnQ0FDSkMsUUFBUSxFQUFFLElBQUk7Z0NBQ2RDLFNBQVMsRUFBRSxLQUFLOzRCQUNwQixDQUFDO3dCQUNMLENBQUMsTUFBTSxDQUFDOzRCQUNKRSxVQUFVLENBQUNFLFFBQVEsQ0FBUkEsR0FBRztnQ0FBSSxNQUFNO21DQUFEQSxHQUFHO29DQUFFSixTQUFTLEVBQUUsS0FBSzs7OzRCQUM1Q0ssT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBMkI7d0JBQzdDLENBQUM7Ozs7OztRQUNMLENBQUM7UUFFREgsWUFBWTtJQUNoQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsR0FBSyxDQUFDSSxRQUFRLEdBQUdkLE9BQU8sQ0FBQyxRQUM3QixHQURtQyxDQUFDO1FBQzVCLEdBQUssQ0FBR0ssSUFBSSxHQUFlRyxPQUFPLENBQTFCSCxJQUFJLEVBQUVELFFBQVEsR0FBS0ksT0FBTyxDQUFwQkosUUFBUTtRQUN0QixNQUFNO1dBQ0NJLE9BQU87WUFDVk8sWUFBWSxFQUFFVixJQUFJLElBQUksSUFBSTtZQUMxQixFQUEyQjtZQUMzQlcsUUFBUSxFQUFFLFFBQVE7Z0JBQUZ0QixNQUFNLENBQU5BLDZEQUFVLENBQUNXLElBQUk7O1lBQy9CWSxPQUFPLEVBQUViLFFBQVEsd0pBQ2IsUUFBUSxXQUFJLENBQUM7Ozs7OzttQ0FFQ0ksT0FBTyxDQUFDSixRQUFRLENBQUNjLE9BQU8sQ0FBQyxDQUFDQztnQ0FBQUEsTUFBTSxFQUFFLENBQXFCOzRCQUFBLENBQUM7Ozs7Ozs7NEJBRTlEQyxRQUFRLENBQUNDLE1BQU07Ozs7Ozs7Ozs7O1lBRXZCLENBQUMsS0FDRCxRQUFRO2dCQUFGVCxNQUFNLENBQU5BLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLENBQThEOzs7SUFFNUYsQ0FBQyxFQUFFLENBQUNkO1FBQUFBLE9BQU87SUFBQSxDQUFDO0lBRVosTUFBTSxzRUFDRFAsV0FBVyxDQUFDc0IsUUFBUTtRQUFDQyxLQUFLLEVBQUVWLFFBQVE7Ozs7Ozs7a0JBQ2hDWCxRQUFROztBQUdyQixDQUFDO0lBckR1QkQsWUFBWTtLQUFaQSxZQUFZO0FBdUQ3QixTQUFTdUIsT0FBTyxHQUFHLENBQUM7O0lBQ3ZCLE1BQU0sQ0FBQzVCLFVBQVUsQ0FBQ0ksV0FBVztBQUNqQyxDQUFDO0lBRmV3QixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvdmlkZXJzL3dlYjMvaW5kZXguanM/M2FhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmltcG9ydCBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyIGZyb20gXCJAbWV0YW1hc2svZGV0ZWN0LXByb3ZpZGVyXCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuaW1wb3J0IHsgc2V0dXBIb29rcyB9IGZyb20gXCIuL2hvb2tzL3NldHVwSG9va3NcIjtcblxuY29uc3QgV2ViM0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlYjNQcm92aWRlcih7Y2hpbGRyZW59KSB7XG4gICAgY29uc3QgW3dlYjNBcGksIHNldFdlYjNBcGldID0gdXNlU3RhdGUoe1xuICAgICAgICBwcm92aWRlcjogbnVsbCxcbiAgICAgICAgd2ViMzogbnVsbCxcbiAgICAgICAgY29udHJhY3Q6IG51bGwsXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgIH0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkUHJvdmlkZXIgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgZGV0ZWN0RXRoZXJldW1Qcm92aWRlcigpXG4gICAgICAgICAgICBpZiAocHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpXG4gICAgICAgICAgICAgICAgc2V0V2ViM0FwaSh7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICB3ZWIzLFxuICAgICAgICAgICAgICAgICAgICBjb250cmFjdDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFdlYjNBcGkoYXBpID0+ICh7Li4uYXBpLCBpc0xvYWRpbmc6IGZhbHNlfSkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlBsZWFzZSwgaW5hdGFsbCBNZXRhbWFzay5cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRQcm92aWRlcigpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBfd2ViM0FwaSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHdlYjMsIHByb3ZpZGVyIH0gPSB3ZWIzQXBpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi53ZWIzQXBpLFxuICAgICAgICAgICAgaXNXZWIzTG9hZGVkOiB3ZWIzICE9IG51bGwsXG4gICAgICAgICAgICAvLyBob29rczogc2V0dXBIb29rcyh3ZWIzKSxcbiAgICAgICAgICAgIGdldEhvb2tzOiAoKSA9PiBzZXR1cEhvb2tzKHdlYjMpLFxuICAgICAgICAgICAgY29ubmVjdDogcHJvdmlkZXIgP1xuICAgICAgICAgICAgICAgIGFzeW5jICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB3ZWIzQXBpLnByb3ZpZGVyLnJlcXVlc3Qoe21ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCJ9KVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IDpcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkNhbm5vdCBjb25uZWN0IHRvIE1ldGFta3MsIHRyeSB0byByZWxvYWQgeW91ciBicm93c2VyIHBsZWFzZVwiKVxuICAgICAgICB9XG4gICAgfSwgW3dlYjNBcGldKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFdlYjNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtfd2ViM0FwaX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvV2ViM0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlV2ViMygpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChXZWIzQ29udGV4dClcbn0iXSwibmFtZXMiOlsiZGV0ZWN0RXRoZXJldW1Qcm92aWRlciIsIldlYjMiLCJzZXR1cEhvb2tzIiwicmVxdWlyZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwiV2ViM0NvbnRleHQiLCJXZWIzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInByb3ZpZGVyIiwid2ViMyIsImNvbnRyYWN0IiwiaXNMb2FkaW5nIiwid2ViM0FwaSIsInNldFdlYjNBcGkiLCJsb2FkUHJvdmlkZXIiLCJhcGkiLCJjb25zb2xlIiwiZXJyb3IiLCJfd2ViM0FwaSIsImlzV2ViM0xvYWRlZCIsImdldEhvb2tzIiwiY29ubmVjdCIsInJlcXVlc3QiLCJtZXRob2QiLCJsb2NhdGlvbiIsInJlbG9hZCIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VXZWIzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/providers/web3/index.js\n");

/***/ })

});