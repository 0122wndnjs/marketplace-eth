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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {\n    };\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {\n    };\n    var target = {\n    };\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nvar adminAddresses = {\n    // \"0xA1cFce04e9522E963E8448c53Dc5742283a6d59a\": true\n    \"e890b70edafebd880ce55b69b0a419413eb5e3d50545eec5f1140330774c63a5\": true // hash address\n};\nvar handler = function(web3, provider) {\n    return _s(function() {\n        _s();\n        // const [account, setAccount] = useState(null)\n        var _ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n            return web3 ? \"web3/accounts\" : null;\n        }, _asyncToGenerator(_Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts;\n            return _Users_jk_Documents_GitHub_marketplace_eth_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return web3.eth.getAccounts();\n                    case 2:\n                        accounts = _ctx.sent;\n                        return _ctx.abrupt(\"return\", accounts[0]);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))), data = _ref.data, mutate = _ref.mutate, rest = _objectWithoutProperties(_ref, [\n            \"data\",\n            \"mutate\"\n        ]);\n        // useEffect(() => {\n        //     const getAccount = async () => {\n        //         const accounts = await web3.eth.getAccounts()\n        //         setAccount(accounts[0])\n        //     }\n        //     web3 && getAccount()\n        // }, [web3])\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n            var ref;\n            provider && provider.on(\"accountsChanged\", function(accounts) {\n                return mutate((ref = accounts[0]) !== null && ref !== void 0 ? ref : null);\n            });\n        }, [\n            provider\n        ]);\n        var ref1;\n        return {\n            account: _objectSpread({\n                data: data,\n                isAdmin: (ref1 = data && adminAddresses[web3.utils.keccak256(data)]) !== null && ref1 !== void 0 ? ref1 : false,\n                mutate: mutate\n            }, rest)\n        };\n    }, \"jc6yuDD1B2yfzTDMBHrzsZxGupE=\", false, function() {\n        return [\n            swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n        ];\n    });\n};\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2hvb2tzL3VzZUFjY291bnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDMkM7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixHQUFLLENBQUNHLGNBQWMsR0FBRyxDQUFDO0lBQ3BCLEVBQXFEO0lBQ3JELENBQWtFLG1FQUFFLElBQUksQ0FBZ0I7QUFDNUYsQ0FBQztJQUVZQyxPQUFPLEdBQUcsUUFBUSxDQUFQQyxJQUFJLEVBQUVDLFFBQVE7Y0FBSyxRQUMzQyxHQURpRCxDQUFDOztRQUM5QyxFQUErQztRQUMvQyxHQUFLLENBQTZCSixJQU1qQyxHQU5pQ0EsK0NBQU0sQ0FBQyxRQUMzQztZQUFNRyxNQUFNLENBQU5BLElBQUksR0FBRyxDQUFlLGlCQUFHLElBQUk7Z0tBQzdCLFFBQVEsV0FBSSxDQUFDO2dCQUNIRSxRQUFROzs7OzsrQkFBU0YsSUFBSSxDQUFDRyxHQUFHLENBQUNDLFdBQVc7O3dCQUFyQ0YsUUFBUTtxREFDUEEsUUFBUSxDQUFDLENBQUM7Ozs7OztRQUNyQixDQUFDLEtBTEdHLElBQUksR0FBc0JSLElBTWpDLENBTk9RLElBQUksRUFBRUMsTUFBTSxHQUFjVCxJQU1qQyxDQU5hUyxNQUFNLEVBQUtDLElBQUksNEJBQUtWLElBTWpDO1lBTk9RLENBQUk7WUFBRUMsQ0FBTTs7UUFRcEIsRUFBb0I7UUFDcEIsRUFBdUM7UUFDdkMsRUFBd0Q7UUFDeEQsRUFBa0M7UUFDbEMsRUFBUTtRQUNSLEVBQTJCO1FBQzNCLEVBQWE7UUFFYlgsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7Z0JBR1VPLEdBQVc7WUFGbENELFFBQVEsSUFDUkEsUUFBUSxDQUFDTyxFQUFFLENBQUMsQ0FBaUIsa0JBQ3pCTixRQUFRLENBQVJBLFFBQVE7Z0JBQUlJLE1BQU0sQ0FBTkEsTUFBTSxFQUFDSixHQUFXLEdBQVhBLFFBQVEsQ0FBQyxDQUFDLGVBQVZBLEdBQVcsY0FBWEEsR0FBVyxHQUFJLElBQUk7O1FBRTlDLENBQUMsRUFBQyxDQUFDRDtZQUFBQSxRQUFRO1FBQUEsQ0FBQztZQUtLLElBQW9EO1FBSHJFLE1BQU0sQ0FBQyxDQUFDO1lBQ0pRLE9BQU87Z0JBQ0hKLElBQUksRUFBSkEsSUFBSTtnQkFDSkssT0FBTyxHQUFFLElBQW9ELEdBQW5ETCxJQUFJLElBQUlQLGNBQWMsQ0FBQ0UsSUFBSSxDQUFDVyxLQUFLLENBQUNDLFNBQVMsQ0FBQ1AsSUFBSSxnQkFBakQsSUFBb0QsY0FBcEQsSUFBb0QsR0FBSSxLQUFLO2dCQUN0RUMsTUFBTSxFQUFOQSxNQUFNO2VBQ0hDLElBQUk7UUFFZixDQUFDO0lBQ0wsQ0FBQzs7WUEvQnFDViwyQ0FBTTs7OztBQUZ0QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2hvb2tzL3VzZUFjY291bnQuanM/MDRjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCJcblxuY29uc3QgYWRtaW5BZGRyZXNzZXMgPSB7XG4gICAgLy8gXCIweEExY0ZjZTA0ZTk1MjJFOTYzRTg0NDhjNTNEYzU3NDIyODNhNmQ1OWFcIjogdHJ1ZVxuICAgIFwiZTg5MGI3MGVkYWZlYmQ4ODBjZTU1YjY5YjBhNDE5NDEzZWI1ZTNkNTA1NDVlZWM1ZjExNDAzMzA3NzRjNjNhNVwiOiB0cnVlIC8vIGhhc2ggYWRkcmVzc1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9ICh3ZWIzLCBwcm92aWRlcikgPT4gKCkgPT4ge1xuICAgIC8vIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgeyBkYXRhLCBtdXRhdGUsIC4uLnJlc3QgfSA9IHVzZVNXUigoKSA9PlxuICAgICAgICB3ZWIzID8gXCJ3ZWIzL2FjY291bnRzXCIgOiBudWxsLFxuICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcbiAgICAgICAgICAgIHJldHVybiBhY2NvdW50c1swXVxuICAgICAgICB9XG4gICAgKVxuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgZ2V0QWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxuICAgIC8vICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSlcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB3ZWIzICYmIGdldEFjY291bnQoKVxuICAgIC8vIH0sIFt3ZWIzXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHByb3ZpZGVyICYmXG4gICAgICAgIHByb3ZpZGVyLm9uKFwiYWNjb3VudHNDaGFuZ2VkXCIsIFxuICAgICAgICAgICAgYWNjb3VudHMgPT4gbXV0YXRlKGFjY291bnRzWzBdID8/IG51bGwpXG4gICAgICAgIClcbiAgICB9LFtwcm92aWRlcl0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhY2NvdW50OiB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgaXNBZG1pbjogKGRhdGEgJiYgYWRtaW5BZGRyZXNzZXNbd2ViMy51dGlscy5rZWNjYWsyNTYoZGF0YSldKSA/PyBmYWxzZSxcbiAgICAgICAgICAgIG11dGF0ZSxcbiAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTV1IiLCJhZG1pbkFkZHJlc3NlcyIsImhhbmRsZXIiLCJ3ZWIzIiwicHJvdmlkZXIiLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwiZGF0YSIsIm11dGF0ZSIsInJlc3QiLCJvbiIsImFjY291bnQiLCJpc0FkbWluIiwidXRpbHMiLCJrZWNjYWsyNTYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/providers/web3/hooks/useAccount.js\n");

/***/ })

});