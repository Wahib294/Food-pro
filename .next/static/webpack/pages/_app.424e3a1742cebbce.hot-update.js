"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/main-nav.tsx":
/*!*********************************!*\
  !*** ./components/main-nav.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainNav\": function() { return /* binding */ MainNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/icons */ \"./components/icons.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ \"./components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"./lib/utils.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction MainNav(param) {\n    let { items  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(items);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const updatedNav = nav.map((item)=>({\n                ...item,\n                active: item.href === router.pathname\n            }));\n        setNav(updatedNav);\n    }, [\n        router.pathname\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-6 md:gap-10\",\n        children: [\n            (nav === null || nav === void 0 ? void 0 : nav.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"hidden gap-10 md:flex\",\n                children: nav === null || nav === void 0 ? void 0 : nav.map((item, index)=>item.href && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"flex items-center\", item.active && \"bg-gradient-to-r from-red-400 to-red-800 bg-clip-text text-transparent\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: item.href,\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"sm:text-lg hover:text-red-700 transition-colors duration-700\", item.active && \"font-exxtrabold\", !item.active && \"font-extrabold\", item.disabled && \"cursor-not-allowed opacity-80\"),\n                            children: item.title\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 10\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuTrigger, {\n                        asChild: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            variant: \"ghost\",\n                            className: \"-ml-4 text-base hover:bg-transparent focus:ring-0 md:hidden\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./logo.png\",\n                                    width: 30,\n                                    height: 10,\n                                    alt: \"\",\n                                    className: \"-ml-4 mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold text-slate-800\",\n                                    children: \" Menu\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuContent, {\n                        align: \"start\",\n                        sideOffset: 24,\n                        className: \"w-[300px] overflow-scroll\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuLabel, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/\",\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"./logo.png\",\n                                            width: 30,\n                                            height: 10,\n                                            alt: \"\",\n                                            className: \"mr-2 h-4 w-4\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.logo, {\n                                            className: \"mr-2 h-4 w-4\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 8\n                                        }, this),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-red-700\",\n                                                    children: \" TURKISH  \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 52\n                                                }, this),\n                                                \" KEBABS\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 48\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuSeparator, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 6\n                            }, this),\n                            nav === null || nav === void 0 ? void 0 : nav.map((item, index)=>item.href && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {\n                                    asChild: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        href: item.href,\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(item.active && \"text-red-700 font-extrabold\"),\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 10\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 9\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Wahib\\\\Desktop\\\\food\\\\components\\\\main-nav.tsx\",\n        lineNumber: 34,\n        columnNumber: 3\n    }, this);\n}\n_s(MainNav, \"F0XprL1Tz4aa7sy4hob5myY02AI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = MainNav;\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHMvbWFpbi1uYXYudHN4PzllOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbnMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2ljb25zXCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxyXG5pbXBvcnQge1xyXG5cdERyb3Bkb3duTWVudSxcclxuXHREcm9wZG93bk1lbnVDb250ZW50LFxyXG5cdERyb3Bkb3duTWVudUl0ZW0sXHJcblx0RHJvcGRvd25NZW51TGFiZWwsXHJcblx0RHJvcGRvd25NZW51U2VwYXJhdG9yLFxyXG5cdERyb3Bkb3duTWVudVRyaWdnZXIsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51XCJcclxuaW1wb3J0IHsgc2l0ZUNvbmZpZyB9IGZyb20gXCJAL2NvbmZpZy9zaXRlXCJcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxyXG5pbXBvcnQgeyBOYXZJdGVtIH0gZnJvbSBcIkAvdHlwZXMvbmF2XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmludGVyZmFjZSBNYWluTmF2UHJvcHMge1xyXG5cdGl0ZW1zPzogTmF2SXRlbVtdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYWluTmF2KHsgaXRlbXMgfTogTWFpbk5hdlByb3BzKSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgW25hdiwgc2V0TmF2XSA9IHVzZVN0YXRlKGl0ZW1zKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZE5hdiA9IG5hdi5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgIC4uLml0ZW0sXHJcbiAgICAgIGFjdGl2ZTogaXRlbS5ocmVmID09PSByb3V0ZXIucGF0aG5hbWVcclxuICAgIH0pKTtcclxuICAgIHNldE5hdih1cGRhdGVkTmF2KTtcclxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBtZDpnYXAtMTBcIj5cclxuXHRcdFx0e25hdj8ubGVuZ3RoID8gKFxyXG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIGdhcC0xMCAgbWQ6ZmxleFwiPlxyXG5cdFx0XHRcdFx0e25hdj8ubWFwKFxyXG5cdFx0XHRcdFx0XHQoaXRlbSwgaW5kZXgpID0+XHJcblx0XHRcdFx0XHRcdFx0aXRlbS5ocmVmICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSB7Y24oXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmbGV4IGl0ZW1zLWNlbnRlclwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uYWN0aXZlICYmIFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXJlZC00MDAgdG8tcmVkLTgwMCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudFwiKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17aXRlbS5ocmVmfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9IHtjbihcInNtOnRleHQtbGcgaG92ZXI6dGV4dC1yZWQtNzAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTcwMFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmFjdGl2ZSAmJiBcImZvbnQtZXh4dHJhYm9sZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQhaXRlbS5hY3RpdmUgJiYgXCJmb250LWV4dHJhYm9sZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmRpc2FibGVkICYmIFwiY3Vyc29yLW5vdC1hbGxvd2VkIG9wYWNpdHktODBcIixcclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0PERyb3Bkb3duTWVudT5cclxuXHRcdFx0XHQ8RHJvcGRvd25NZW51VHJpZ2dlciBhc0NoaWxkPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiZ2hvc3RcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCItbWwtNCB0ZXh0LWJhc2UgaG92ZXI6YmctdHJhbnNwYXJlbnQgZm9jdXM6cmluZy0wIG1kOmhpZGRlblwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiLi9sb2dvLnBuZ1wiIHdpZHRoPXszMH0gaGVpZ2h0PXsxMH0gYWx0PVwiXCJjbGFzc05hbWU9XCItbWwtNCBtci0yXCIgLz5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc2xhdGUtODAwXCI+IE1lbnU8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0Ryb3Bkb3duTWVudVRyaWdnZXI+XHJcblx0XHRcdFx0PERyb3Bkb3duTWVudUNvbnRlbnRcclxuXHRcdFx0XHRcdGFsaWduPVwic3RhcnRcIlxyXG5cdFx0XHRcdFx0c2lkZU9mZnNldD17MjR9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LVszMDBweF0gb3ZlcmZsb3ctc2Nyb2xsXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8RHJvcGRvd25NZW51TGFiZWw+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4vbG9nby5wbmdcIiB3aWR0aD17MzB9IGhlaWdodD17MTB9IGFsdD1cIlwiY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8SWNvbnMubG9nbyBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIiAvPiA8cD4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNzAwXCI+IFRVUktJU0ggIDwvc3Bhbj4gS0VCQUJTPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8L0Ryb3Bkb3duTWVudUxhYmVsPlxyXG5cdFx0XHRcdFx0PERyb3Bkb3duTWVudVNlcGFyYXRvciAvPlxyXG5cdFx0XHRcdFx0e25hdj8ubWFwKFxyXG5cdFx0XHRcdFx0XHQoaXRlbSwgaW5kZXgpID0+XHJcblx0XHRcdFx0XHRcdFx0aXRlbS5ocmVmICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bk1lbnVJdGVtIGtleT17aW5kZXh9IGFzQ2hpbGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSAge2NuKGl0ZW0uYWN0aXZlICYmIFwidGV4dC1yZWQtNzAwIGZvbnQtZXh0cmFib2xkXCIsXHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PntpdGVtLnRpdGxlfTwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvRHJvcGRvd25NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L0Ryb3Bkb3duTWVudUNvbnRlbnQ+XHJcblx0XHRcdDwvRHJvcGRvd25NZW51PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJY29ucyIsIkJ1dHRvbiIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duTWVudUNvbnRlbnQiLCJEcm9wZG93bk1lbnVJdGVtIiwiRHJvcGRvd25NZW51TGFiZWwiLCJEcm9wZG93bk1lbnVTZXBhcmF0b3IiLCJEcm9wZG93bk1lbnVUcmlnZ2VyIiwiY24iLCJMaW5rIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIk1haW5OYXYiLCJpdGVtcyIsInJvdXRlciIsIm5hdiIsInNldE5hdiIsInVwZGF0ZWROYXYiLCJtYXAiLCJpdGVtIiwiYWN0aXZlIiwiaHJlZiIsInBhdGhuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwiaW5kZXgiLCJzcGFuIiwiZGlzYWJsZWQiLCJ0aXRsZSIsImFzQ2hpbGQiLCJ2YXJpYW50IiwiaW1nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJhbGlnbiIsInNpZGVPZmZzZXQiLCJsb2dvIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/main-nav.tsx\n"));

/***/ })

});