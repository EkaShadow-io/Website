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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_homePage_firstComponent_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/homePage/firstComponent.css */ \"(app-pages-browser)/./src/app/styles/homePage/firstComponent.css\");\n/* harmony import */ var _dataForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataForm */ \"(app-pages-browser)/./src/app/components/homePage/dataForm.js\");\n/* harmony import */ var _assets_cloud_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/cloud.svg */ \"(app-pages-browser)/./assets/cloud.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FirstComponent(req, res) {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [email1, setEmail1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [submitted, setSubmitted1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Sending\");\n        let data = {\n            //   name,\n            //   phone,\n            email: email1\n        };\n        fetch(\"/api/contact\", {\n            method: \"POST\",\n            headers: {\n                \"Accept\": \"application/json, text/plain, */*\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        }).then((res)=>{\n            console.log(\"Response received\");\n            if (res.status === 200) {\n                console.log(\"Response succeeded!\");\n                setSubmitted1(true);\n                console.log(req.body);\n                // setName('')\n                // setPhone('')\n                setEmail1(\"\");\n                // setBody('')\n                console.log(req.body);\n            }\n            ;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wholeComponent\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"firstLine\",\n                        children: \"Don't Judge, Just Explore!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"largeTextFirst\",\n                        children: [\n                            \"A Balanced academic industry approach for uplifting students \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 55,\n                                columnNumber: 86\n                            }, this),\n                            \"by enhanced learning for skill development leading to informed career choices \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 56,\n                                columnNumber: 103\n                            }, this),\n                            \"resulting increased employability, creating innovative mindset \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 57,\n                                columnNumber: 88\n                            }, this),\n                            \"for open-source with professional evaluation for tough competition \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 58,\n                                columnNumber: 92\n                            }, this),\n                            \"in this ever evoloving world of technologies.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dataForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cloud\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                            lineNumber: 63,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\ekashadowfrontend\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(FirstComponent, \"5+rtIEXgNHVuMh1FVWyZt8tQi44=\");\n_c = FirstComponent;\n/*Function to handle the data submitted in form*/ const handleSubmit = (e)=>{\n    e.preventDefault();\n    console.log(\"Sending\");\n    let data = {\n        //   name,\n        //   phone,\n        email\n    };\n    fetch(\"/api/contact\", {\n        method: \"POST\",\n        headers: {\n            \"Accept\": \"application/json, text/plain, */*\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    }).then((res)=>{\n        console.log(\"Response received\");\n        if (res.status === 200) {\n            console.log(\"Response succeeded!\");\n            setSubmitted(true);\n            // setName('')\n            // setPhone('')\n            setEmail(\"\");\n        // setBody('')\n        }\n        ;\n    });\n};\n/*Custom form builder for data submission */ /* harmony default export */ __webpack_exports__[\"default\"] = (FirstComponent);\nvar _c;\n$RefreshReg$(_c, \"FirstComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lUGFnZS8xc3RDb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDOEI7QUFDRztBQUNnQjtBQUNuQjtBQUNrQjtBQUVoRCxTQUFTSSxlQUFlQyxHQUFHLEVBQUVDLEdBQUc7O0lBQzVCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNRLFFBQU9DLFVBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNjLFdBQVdDLGNBQWEsR0FBR2YsK0NBQVFBLENBQUM7SUFFM0MsTUFBTWdCLGVBQWUsQ0FBQ0M7UUFDbEJBLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLElBQUlsQixPQUFPO1lBQ1AsVUFBVTtZQUNWLFdBQVc7WUFDWE0sT0FBQUE7UUFFSjtRQUNBYSxNQUFNLGdCQUFnQjtZQUNsQkMsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLFVBQVU7Z0JBQ1YsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ3hCO1FBQ3pCLEdBQUd5QixJQUFJLENBQUMsQ0FBQ3RCO1lBQ0xjLFFBQVFDLEdBQUcsQ0FBQztZQUNaLElBQUlmLElBQUl1QixNQUFNLEtBQUssS0FBSztnQkFDcEJULFFBQVFDLEdBQUcsQ0FBQztnQkFDWkwsY0FBYTtnQkFDYkksUUFBUUMsR0FBRyxDQUFDaEIsSUFBSW9CLElBQUk7Z0JBQ3BCLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZmYsVUFBUztnQkFDVCxjQUFjO2dCQUNkVSxRQUFRQyxHQUFHLENBQUNoQixJQUFJb0IsSUFBSTtZQUN4Qjs7UUFDSjtJQUNKO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNLO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEOztrQ0FDRyw4REFBQ0U7d0JBQUVELFdBQVU7a0NBQVk7Ozs7OztrQ0FHekIsOERBQUNFOzs7OztrQ0FDRCw4REFBQ0Q7d0JBQUVELFdBQVU7OzRCQUFpQjswQ0FDbUMsOERBQUNFOzs7Ozs0QkFBSzswQ0FDVyw4REFBQ0E7Ozs7OzRCQUFLOzBDQUNyQiw4REFBQ0E7Ozs7OzRCQUFLOzBDQUNGLDhEQUFDQTs7Ozs7NEJBQUs7Ozs7Ozs7a0NBRzdFLDhEQUFDL0IsaURBQUlBOzs7OztrQ0FDTCw4REFBQzRCO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDL0IsbURBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEI5QjtHQW5GU0k7S0FBQUE7QUFzRlQsK0NBQStDLEdBQy9DLE1BQU1hLGVBQWUsQ0FBQ0M7SUFDbEJBLEVBQUVDLGNBQWM7SUFDaEJDLFFBQVFDLEdBQUcsQ0FBQztJQUNaLElBQUlsQixPQUFPO1FBQ1AsVUFBVTtRQUNWLFdBQVc7UUFDWE07SUFFSjtJQUNBYSxNQUFNLGdCQUFnQjtRQUNsQkMsUUFBUTtRQUNSQyxTQUFTO1lBQ0wsVUFBVTtZQUNWLGdCQUFnQjtRQUNwQjtRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUN4QjtJQUN6QixHQUFHeUIsSUFBSSxDQUFDLENBQUN0QjtRQUNMYyxRQUFRQyxHQUFHLENBQUM7UUFDWixJQUFJZixJQUFJdUIsTUFBTSxLQUFLLEtBQUs7WUFDcEJULFFBQVFDLEdBQUcsQ0FBQztZQUNaTCxhQUFhO1lBQ2IsY0FBYztZQUNkLGVBQWU7WUFDZk4sU0FBUztRQUNULGNBQWM7UUFDbEI7O0lBQ0o7QUFDSjtBQUdBLDBDQUEwQyxHQU0xQywrREFBZU4sY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZVBhZ2UvMXN0Q29tcG9uZW50LmpzPzNiNTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvaG9tZVBhZ2UvZmlyc3RDb21wb25lbnQuY3NzXCJcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9kYXRhRm9ybSc7XHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi8uLi8uLi9hc3NldHMvY2xvdWQuc3ZnXCI7XHJcblxyXG5mdW5jdGlvbiBGaXJzdENvbXBvbmVudChyZXEsIHJlcykge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcnKVxyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAvLyAgIG5hbWUsXHJcbiAgICAgICAgICAgIC8vICAgcGhvbmUsXHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAvLyAgIG1lc3NhZ2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHJlY2VpdmVkJylcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN1Y2NlZWRlZCEnKVxyXG4gICAgICAgICAgICAgICAgc2V0U3VibWl0dGVkKHRydWUpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcclxuICAgICAgICAgICAgICAgIC8vIHNldE5hbWUoJycpXHJcbiAgICAgICAgICAgICAgICAvLyBzZXRQaG9uZSgnJylcclxuICAgICAgICAgICAgICAgIHNldEVtYWlsKCcnKVxyXG4gICAgICAgICAgICAgICAgLy8gc2V0Qm9keSgnJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2hvbGVDb21wb25lbnQnPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZpcnN0TGluZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERvbid0IEp1ZGdlLCBKdXN0IEV4cGxvcmUhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGFyZ2VUZXh0Rmlyc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBIEJhbGFuY2VkIGFjYWRlbWljIGluZHVzdHJ5IGFwcHJvYWNoIGZvciB1cGxpZnRpbmcgc3R1ZGVudHMgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5IGVuaGFuY2VkIGxlYXJuaW5nIGZvciBza2lsbCBkZXZlbG9wbWVudCBsZWFkaW5nIHRvIGluZm9ybWVkIGNhcmVlciBjaG9pY2VzIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRpbmcgaW5jcmVhc2VkIGVtcGxveWFiaWxpdHksIGNyZWF0aW5nIGlubm92YXRpdmUgbWluZHNldCA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIG9wZW4tc291cmNlIHdpdGggcHJvZmVzc2lvbmFsIGV2YWx1YXRpb24gZm9yIHRvdWdoIGNvbXBldGl0aW9uIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbiB0aGlzIGV2ZXIgZXZvbG92aW5nIHdvcmxkIG9mIHRlY2hub2xvZ2llcy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xvdWQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIC8vTWFpbEJveCAmIE1haWxDb25uZWN0b3IgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwgZm9ybSBjbGFzc05hbWU9J3dob2xlQ29tcG9uZW50JyA+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IGZvcm1Hcm91cCBjbGFzc05hbWU9J2lucHV0R3JvdXAnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGxhYmVsIGh0bWxGb3I9J25hbWUnPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaW5wdXQgdHlwZT0ndGV4dCcgb25DaGFuZ2U9eyhlKT0+e3NldE5hbWUoZS50YXJnZXQudmFsdWUpfX0gbmFtZT0nbmFtZScgY2xhc3NOYW1lPSdpbnB1dEZpZWxkJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm1Hcm91cD48IGZvcm1Hcm91cCBjbGFzc05hbWU9J2lucHV0R3JvdXAnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5QaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBpbnB1dCB0eXBlPSdlbWFpbCcgb25DaGFuZ2U9eyhlKT0+e3NldFBob25lKGUudGFyZ2V0LnZhbHVlKX19IG5hbWU9J2VtYWlsJyBjbGFzc05hbWU9J2lucHV0RmllbGQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm1Hcm91cD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwgZm9ybUdyb3VwIGNsYXNzTmFtZT0naW5wdXRHcm91cCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgbGFiZWwgaHRtbEZvcj0nZW1haWwnPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGlucHV0IHR5cGU9J2VtYWlsJyBvbkNoYW5nZT17KGUpPT57c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfX0gbmFtZT0nZW1haWwnIGNsYXNzTmFtZT0naW5wdXRGaWVsZCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybUdyb3VwPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCBmb3JtR3JvdXAgY2xhc3NOYW1lPSdpbnB1dEdyb3VwJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBsYWJlbCBodG1sRm9yPSdtZXNzYWdlJz5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXsoZSk9PntzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX19IG5hbWU9J21lc3NhZ2UnIGNsYXNzTmFtZT0naW5wdXRGaWVsZCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybUdyb3VwPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCBpbnB1dCB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eyhlKT0+e2hhbmRsZVN1Ym1pdChlKX19Lz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwvZm9ybSA+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuLypGdW5jdGlvbiB0byBoYW5kbGUgdGhlIGRhdGEgc3VibWl0dGVkIGluIGZvcm0qL1xyXG5jb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZygnU2VuZGluZycpXHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAvLyAgIG5hbWUsXHJcbiAgICAgICAgLy8gICBwaG9uZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICAvLyAgIG1lc3NhZ2VcclxuICAgIH1cclxuICAgIGZldGNoKCcvYXBpL2NvbnRhY3QnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2UgcmVjZWl2ZWQnKVxyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN1Y2NlZWRlZCEnKVxyXG4gICAgICAgICAgICBzZXRTdWJtaXR0ZWQodHJ1ZSlcclxuICAgICAgICAgICAgLy8gc2V0TmFtZSgnJylcclxuICAgICAgICAgICAgLy8gc2V0UGhvbmUoJycpXHJcbiAgICAgICAgICAgIHNldEVtYWlsKCcnKVxyXG4gICAgICAgICAgICAvLyBzZXRCb2R5KCcnKVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG4vKkN1c3RvbSBmb3JtIGJ1aWxkZXIgZm9yIGRhdGEgc3VibWlzc2lvbiAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0Q29tcG9uZW50OyJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiRm9ybSIsImRhdGEiLCJGaXJzdENvbXBvbmVudCIsInJlcSIsInJlcyIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBob25lIiwic2V0UGhvbmUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJzdGF0dXMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/homePage/1stComponent.js\n"));

/***/ })

});