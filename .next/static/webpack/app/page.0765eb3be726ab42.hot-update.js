"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/homePage/1stComponent.js":
/*!*****************************************************!*\
  !*** ./src/app/components/homePage/1stComponent.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_homePage_firstComponent_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/homePage/firstComponent.css */ \"(app-pages-browser)/./src/app/styles/homePage/firstComponent.css\");\n/* harmony import */ var _dataForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataForm */ \"(app-pages-browser)/./src/app/components/homePage/dataForm.js\");\n/* harmony import */ var _assets_cloud_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/cloud.png */ \"(app-pages-browser)/./assets/cloud.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FirstComponent(req, res) {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [email1, setEmail1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [submitted, setSubmitted1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Sending\");\n        let data = {\n            //   name,\n            //   phone,\n            email: email1\n        };\n        fetch(\"/api/contact\", {\n            method: \"POST\",\n            headers: {\n                \"Accept\": \"application/json, text/plain, */*\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        }).then((res)=>{\n            console.log(\"Response received\");\n            if (res.status === 200) {\n                console.log(\"Response succeeded!\");\n                setSubmitted1(true);\n                console.log(req.body);\n                // setName('')\n                // setPhone('')\n                setEmail1(\"\");\n                // setBody('')\n                console.log(req.body);\n            }\n            ;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wholeComponent\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"firstLine\",\n                        children: \"Don't Judge, Just Explore!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"largeTextFirst\",\n                        children: [\n                            \"A Balanced academic industry approach for uplifting students \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 55,\n                                columnNumber: 86\n                            }, this),\n                            \"by enhanced learning for skill development leading to informed career choices \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 56,\n                                columnNumber: 103\n                            }, this),\n                            \"resulting increased employability, creating innovative mindset \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 57,\n                                columnNumber: 88\n                            }, this),\n                            \"for open-source with professional evaluation for tough competition \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 58,\n                                columnNumber: 92\n                            }, this),\n                            \"in this ever evoloving world of technologies.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(FirstComponent, \"5+rtIEXgNHVuMh1FVWyZt8tQi44=\");\n_c = FirstComponent;\n/*Function to handle the data submitted in form*/ const handleSubmit = (e)=>{\n    e.preventDefault();\n    console.log(\"Sending\");\n    let data = {\n        //   name,\n        //   phone,\n        email\n    };\n    fetch(\"/api/contact\", {\n        method: \"POST\",\n        headers: {\n            \"Accept\": \"application/json, text/plain, */*\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    }).then((res)=>{\n        console.log(\"Response received\");\n        if (res.status === 200) {\n            console.log(\"Response succeeded!\");\n            setSubmitted(true);\n            // setName('')\n            // setPhone('')\n            setEmail(\"\");\n        // setBody('')\n        }\n        ;\n    });\n};\n/*Custom form builder for data submission */ /* harmony default export */ __webpack_exports__[\"default\"] = (FirstComponent);\nvar _c;\n$RefreshReg$(_c, \"FirstComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lUGFnZS8xc3RDb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDOEI7QUFDRztBQUNnQjtBQUNuQjtBQUNtQjtBQUVqRCxTQUFTSSxlQUFlQyxHQUFHLEVBQUVDLEdBQUc7O0lBQzVCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNRLFFBQU9DLFVBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNjLFdBQVdDLGNBQWEsR0FBR2YsK0NBQVFBLENBQUM7SUFFM0MsTUFBTWdCLGVBQWUsQ0FBQ0M7UUFDbEJBLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLElBQUlDLE9BQU87WUFDUCxVQUFVO1lBQ1YsV0FBVztZQUNYYixPQUFBQTtRQUVKO1FBQ0FjLE1BQU0sZ0JBQWdCO1lBQ2xCQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsVUFBVTtnQkFDVixnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDTjtRQUN6QixHQUFHTyxJQUFJLENBQUMsQ0FBQ3ZCO1lBQ0xjLFFBQVFDLEdBQUcsQ0FBQztZQUNaLElBQUlmLElBQUl3QixNQUFNLEtBQUssS0FBSztnQkFDcEJWLFFBQVFDLEdBQUcsQ0FBQztnQkFDWkwsY0FBYTtnQkFDYkksUUFBUUMsR0FBRyxDQUFDaEIsSUFBSXFCLElBQUk7Z0JBQ3BCLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZmhCLFVBQVM7Z0JBQ1QsY0FBYztnQkFDZFUsUUFBUUMsR0FBRyxDQUFDaEIsSUFBSXFCLElBQUk7WUFDeEI7O1FBQ0o7SUFDSjtJQUVBLHFCQUNJO2tCQUNJLDRFQUFDSztZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDs7a0NBQ0csOERBQUNFO3dCQUFFRCxXQUFVO2tDQUFZOzs7Ozs7a0NBR3pCLDhEQUFDRTs7Ozs7a0NBQ0QsOERBQUNEO3dCQUFFRCxXQUFVOzs0QkFBaUI7MENBQ21DLDhEQUFDRTs7Ozs7NEJBQUs7MENBQ1csOERBQUNBOzs7Ozs0QkFBSzswQ0FDckIsOERBQUNBOzs7Ozs0QkFBSzswQ0FDRiw4REFBQ0E7Ozs7OzRCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJqRztHQWhGUzlCO0tBQUFBO0FBbUZULCtDQUErQyxHQUMvQyxNQUFNYSxlQUFlLENBQUNDO0lBQ2xCQSxFQUFFQyxjQUFjO0lBQ2hCQyxRQUFRQyxHQUFHLENBQUM7SUFDWixJQUFJQyxPQUFPO1FBQ1AsVUFBVTtRQUNWLFdBQVc7UUFDWGI7SUFFSjtJQUNBYyxNQUFNLGdCQUFnQjtRQUNsQkMsUUFBUTtRQUNSQyxTQUFTO1lBQ0wsVUFBVTtZQUNWLGdCQUFnQjtRQUNwQjtRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNOO0lBQ3pCLEdBQUdPLElBQUksQ0FBQyxDQUFDdkI7UUFDTGMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osSUFBSWYsSUFBSXdCLE1BQU0sS0FBSyxLQUFLO1lBQ3BCVixRQUFRQyxHQUFHLENBQUM7WUFDWkwsYUFBYTtZQUNiLGNBQWM7WUFDZCxlQUFlO1lBQ2ZOLFNBQVM7UUFDVCxjQUFjO1FBQ2xCOztJQUNKO0FBQ0o7QUFHQSwwQ0FBMEMsR0FNMUMsK0RBQWVOLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2hvbWVQYWdlLzFzdENvbXBvbmVudC5qcz8zYjUwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2hvbWVQYWdlL2ZpcnN0Q29tcG9uZW50LmNzc1wiXHJcbmltcG9ydCBGb3JtIGZyb20gJy4vZGF0YUZvcm0nO1xyXG5pbXBvcnQgY2xvdWQgZnJvbSBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9jbG91ZC5wbmdcIjtcclxuXHJcbmZ1bmN0aW9uIEZpcnN0Q29tcG9uZW50KHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VuZGluZycpXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIC8vICAgbmFtZSxcclxuICAgICAgICAgICAgLy8gICBwaG9uZSxcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIC8vICAgbWVzc2FnZVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaCgnL2FwaS9jb250YWN0Jywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2UgcmVjZWl2ZWQnKVxyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2Ugc3VjY2VlZGVkIScpXHJcbiAgICAgICAgICAgICAgICBzZXRTdWJtaXR0ZWQodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgICAgICAgICAgICAgLy8gc2V0TmFtZSgnJylcclxuICAgICAgICAgICAgICAgIC8vIHNldFBob25lKCcnKVxyXG4gICAgICAgICAgICAgICAgc2V0RW1haWwoJycpXHJcbiAgICAgICAgICAgICAgICAvLyBzZXRCb2R5KCcnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aG9sZUNvbXBvbmVudCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmlyc3RMaW5lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRG9uJ3QgSnVkZ2UsIEp1c3QgRXhwbG9yZSFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsYXJnZVRleHRGaXJzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEEgQmFsYW5jZWQgYWNhZGVtaWMgaW5kdXN0cnkgYXBwcm9hY2ggZm9yIHVwbGlmdGluZyBzdHVkZW50cyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnkgZW5oYW5jZWQgbGVhcm5pbmcgZm9yIHNraWxsIGRldmVsb3BtZW50IGxlYWRpbmcgdG8gaW5mb3JtZWQgY2FyZWVyIGNob2ljZXMgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdGluZyBpbmNyZWFzZWQgZW1wbG95YWJpbGl0eSwgY3JlYXRpbmcgaW5ub3ZhdGl2ZSBtaW5kc2V0IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3Igb3Blbi1zb3VyY2Ugd2l0aCBwcm9mZXNzaW9uYWwgZXZhbHVhdGlvbiBmb3IgdG91Z2ggY29tcGV0aXRpb24gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluIHRoaXMgZXZlciBldm9sb3Zpbmcgd29ybGQgb2YgdGVjaG5vbG9naWVzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPEZvcm0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIC8vTWFpbEJveCAmIE1haWxDb25uZWN0b3IgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwgZm9ybSBjbGFzc05hbWU9J3dob2xlQ29tcG9uZW50JyA+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IGZvcm1Hcm91cCBjbGFzc05hbWU9J2lucHV0R3JvdXAnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGxhYmVsIGh0bWxGb3I9J25hbWUnPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaW5wdXQgdHlwZT0ndGV4dCcgb25DaGFuZ2U9eyhlKT0+e3NldE5hbWUoZS50YXJnZXQudmFsdWUpfX0gbmFtZT0nbmFtZScgY2xhc3NOYW1lPSdpbnB1dEZpZWxkJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm1Hcm91cD48IGZvcm1Hcm91cCBjbGFzc05hbWU9J2lucHV0R3JvdXAnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5QaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBpbnB1dCB0eXBlPSdlbWFpbCcgb25DaGFuZ2U9eyhlKT0+e3NldFBob25lKGUudGFyZ2V0LnZhbHVlKX19IG5hbWU9J2VtYWlsJyBjbGFzc05hbWU9J2lucHV0RmllbGQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm1Hcm91cD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwgZm9ybUdyb3VwIGNsYXNzTmFtZT0naW5wdXRHcm91cCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgbGFiZWwgaHRtbEZvcj0nZW1haWwnPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGlucHV0IHR5cGU9J2VtYWlsJyBvbkNoYW5nZT17KGUpPT57c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfX0gbmFtZT0nZW1haWwnIGNsYXNzTmFtZT0naW5wdXRGaWVsZCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybUdyb3VwPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCBmb3JtR3JvdXAgY2xhc3NOYW1lPSdpbnB1dEdyb3VwJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBsYWJlbCBodG1sRm9yPSdtZXNzYWdlJz5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXsoZSk9PntzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX19IG5hbWU9J21lc3NhZ2UnIGNsYXNzTmFtZT0naW5wdXRGaWVsZCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybUdyb3VwPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCBpbnB1dCB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eyhlKT0+e2hhbmRsZVN1Ym1pdChlKX19Lz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwvZm9ybSA+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuLypGdW5jdGlvbiB0byBoYW5kbGUgdGhlIGRhdGEgc3VibWl0dGVkIGluIGZvcm0qL1xyXG5jb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZygnU2VuZGluZycpXHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAvLyAgIG5hbWUsXHJcbiAgICAgICAgLy8gICBwaG9uZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICAvLyAgIG1lc3NhZ2VcclxuICAgIH1cclxuICAgIGZldGNoKCcvYXBpL2NvbnRhY3QnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2UgcmVjZWl2ZWQnKVxyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN1Y2NlZWRlZCEnKVxyXG4gICAgICAgICAgICBzZXRTdWJtaXR0ZWQodHJ1ZSlcclxuICAgICAgICAgICAgLy8gc2V0TmFtZSgnJylcclxuICAgICAgICAgICAgLy8gc2V0UGhvbmUoJycpXHJcbiAgICAgICAgICAgIHNldEVtYWlsKCcnKVxyXG4gICAgICAgICAgICAvLyBzZXRCb2R5KCcnKVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG4vKkN1c3RvbSBmb3JtIGJ1aWxkZXIgZm9yIGRhdGEgc3VibWlzc2lvbiAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0Q29tcG9uZW50OyJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiRm9ybSIsImNsb3VkIiwiRmlyc3RDb21wb25lbnQiLCJyZXEiLCJyZXMiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwaG9uZSIsInNldFBob25lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInN0YXR1cyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/homePage/1stComponent.js\n"));

/***/ })

});