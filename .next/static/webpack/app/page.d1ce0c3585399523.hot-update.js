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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_homePage_firstComponent_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/homePage/firstComponent.css */ \"(app-pages-browser)/./src/app/styles/homePage/firstComponent.css\");\n/* harmony import */ var _dataForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataForm */ \"(app-pages-browser)/./src/app/components/homePage/dataForm.js\");\n/* harmony import */ var _assets_cloud_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/cloud.png */ \"(app-pages-browser)/./assets/cloud.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FirstComponent(req, res) {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [email1, setEmail1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [submitted, setSubmitted1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Sending\");\n        let data = {\n            //   name,\n            //   phone,\n            email: email1\n        };\n        fetch(\"/api/contact\", {\n            method: \"POST\",\n            headers: {\n                \"Accept\": \"application/json, text/plain, */*\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        }).then((res)=>{\n            console.log(\"Response received\");\n            if (res.status === 200) {\n                console.log(\"Response succeeded!\");\n                setSubmitted1(true);\n                console.log(req.body);\n                // setName('')\n                // setPhone('')\n                setEmail1(\"\");\n                // setBody('')\n                console.log(req.body);\n            }\n            ;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wholeComponent\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"firstLine\",\n                        children: \"Don't Judge, Just Explore!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"largeTextFirst\",\n                        children: [\n                            \"A Balanced academic industry approach for uplifting students \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 55,\n                                columnNumber: 86\n                            }, this),\n                            \"by enhanced learning for skill development leading to informed career \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 56,\n                                columnNumber: 95\n                            }, this),\n                            \"choices resulting increased employability, creating innovative mindset \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 58,\n                                columnNumber: 88\n                            }, this),\n                            \"for open-source with professional evaluation for tough competition \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 59,\n                                columnNumber: 92\n                            }, this),\n                            \"in this ever evoloving world of technologies.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cloud-box\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: \"cloud\",\n                            src: _assets_cloud_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            alt: \"Cloud Data\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                            lineNumber: 64,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(FirstComponent, \"5+rtIEXgNHVuMh1FVWyZt8tQi44=\");\n_c = FirstComponent;\n/*Function to handle the data submitted in form*/ const handleSubmit = (e)=>{\n    e.preventDefault();\n    console.log(\"Sending\");\n    let data = {\n        //   name,\n        //   phone,\n        email\n    };\n    fetch(\"/api/contact\", {\n        method: \"POST\",\n        headers: {\n            \"Accept\": \"application/json, text/plain, */*\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    }).then((res)=>{\n        console.log(\"Response received\");\n        if (res.status === 200) {\n            console.log(\"Response succeeded!\");\n            setSubmitted(true);\n            // setName('')\n            // setPhone('')\n            setEmail(\"\");\n        // setBody('')\n        }\n        ;\n    });\n};\n/*Custom form builder for data submission */ /* harmony default export */ __webpack_exports__[\"default\"] = (FirstComponent);\nvar _c;\n$RefreshReg$(_c, \"FirstComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lUGFnZS8xc3RDb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDOEI7QUFDRztBQUNnQjtBQUNuQjtBQUNtQjtBQUVqRCxTQUFTSSxlQUFlQyxHQUFHLEVBQUVDLEdBQUc7O0lBQzVCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNRLFFBQU9DLFVBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNjLFdBQVdDLGNBQWEsR0FBR2YsK0NBQVFBLENBQUM7SUFFM0MsTUFBTWdCLGVBQWUsQ0FBQ0M7UUFDbEJBLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLElBQUlDLE9BQU87WUFDUCxVQUFVO1lBQ1YsV0FBVztZQUNYYixPQUFBQTtRQUVKO1FBQ0FjLE1BQU0sZ0JBQWdCO1lBQ2xCQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsVUFBVTtnQkFDVixnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDTjtRQUN6QixHQUFHTyxJQUFJLENBQUMsQ0FBQ3ZCO1lBQ0xjLFFBQVFDLEdBQUcsQ0FBQztZQUNaLElBQUlmLElBQUl3QixNQUFNLEtBQUssS0FBSztnQkFDcEJWLFFBQVFDLEdBQUcsQ0FBQztnQkFDWkwsY0FBYTtnQkFDYkksUUFBUUMsR0FBRyxDQUFDaEIsSUFBSXFCLElBQUk7Z0JBQ3BCLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZmhCLFVBQVM7Z0JBQ1QsY0FBYztnQkFDZFUsUUFBUUMsR0FBRyxDQUFDaEIsSUFBSXFCLElBQUk7WUFDeEI7O1FBQ0o7SUFDSjtJQUVBLHFCQUNJO2tCQUNJLDRFQUFDSztZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDs7a0NBQ0csOERBQUNFO3dCQUFFRCxXQUFVO2tDQUFZOzs7Ozs7a0NBR3pCLDhEQUFDRTs7Ozs7a0NBQ0QsOERBQUNEO3dCQUFFRCxXQUFVOzs0QkFBaUI7MENBQ21DLDhEQUFDRTs7Ozs7NEJBQUs7MENBQ0csOERBQUNBOzs7Ozs0QkFBSzswQ0FFYiw4REFBQ0E7Ozs7OzRCQUFLOzBDQUNGLDhEQUFDQTs7Ozs7NEJBQUs7Ozs7Ozs7a0NBSTdFLDhEQUFDSDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ2hDLG1EQUFLQTs0QkFDTmdDLFdBQVU7NEJBQ1ZHLEtBQUtoQyx5REFBS0E7NEJBQ1ZpQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCNUI7R0F2RlNoQztLQUFBQTtBQTBGVCwrQ0FBK0MsR0FDL0MsTUFBTWEsZUFBZSxDQUFDQztJQUNsQkEsRUFBRUMsY0FBYztJQUNoQkMsUUFBUUMsR0FBRyxDQUFDO0lBQ1osSUFBSUMsT0FBTztRQUNQLFVBQVU7UUFDVixXQUFXO1FBQ1hiO0lBRUo7SUFDQWMsTUFBTSxnQkFBZ0I7UUFDbEJDLFFBQVE7UUFDUkMsU0FBUztZQUNMLFVBQVU7WUFDVixnQkFBZ0I7UUFDcEI7UUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDTjtJQUN6QixHQUFHTyxJQUFJLENBQUMsQ0FBQ3ZCO1FBQ0xjLFFBQVFDLEdBQUcsQ0FBQztRQUNaLElBQUlmLElBQUl3QixNQUFNLEtBQUssS0FBSztZQUNwQlYsUUFBUUMsR0FBRyxDQUFDO1lBQ1pMLGFBQWE7WUFDYixjQUFjO1lBQ2QsZUFBZTtZQUNmTixTQUFTO1FBQ1QsY0FBYztRQUNsQjs7SUFDSjtBQUNKO0FBR0EsMENBQTBDLEdBTTFDLCtEQUFlTixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lUGFnZS8xc3RDb21wb25lbnQuanM/M2I1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9ob21lUGFnZS9maXJzdENvbXBvbmVudC5jc3NcIlxyXG5pbXBvcnQgRm9ybSBmcm9tICcuL2RhdGFGb3JtJztcclxuaW1wb3J0IGNsb3VkIGZyb20gXCIuLi8uLi8uLi8uLi9hc3NldHMvY2xvdWQucG5nXCI7XHJcblxyXG5mdW5jdGlvbiBGaXJzdENvbXBvbmVudChyZXEsIHJlcykge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcnKVxyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAvLyAgIG5hbWUsXHJcbiAgICAgICAgICAgIC8vICAgcGhvbmUsXHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAvLyAgIG1lc3NhZ2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHJlY2VpdmVkJylcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN1Y2NlZWRlZCEnKVxyXG4gICAgICAgICAgICAgICAgc2V0U3VibWl0dGVkKHRydWUpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcclxuICAgICAgICAgICAgICAgIC8vIHNldE5hbWUoJycpXHJcbiAgICAgICAgICAgICAgICAvLyBzZXRQaG9uZSgnJylcclxuICAgICAgICAgICAgICAgIHNldEVtYWlsKCcnKVxyXG4gICAgICAgICAgICAgICAgLy8gc2V0Qm9keSgnJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2hvbGVDb21wb25lbnQnPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZpcnN0TGluZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERvbid0IEp1ZGdlLCBKdXN0IEV4cGxvcmUhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGFyZ2VUZXh0Rmlyc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBIEJhbGFuY2VkIGFjYWRlbWljIGluZHVzdHJ5IGFwcHJvYWNoIGZvciB1cGxpZnRpbmcgc3R1ZGVudHMgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5IGVuaGFuY2VkIGxlYXJuaW5nIGZvciBza2lsbCBkZXZlbG9wbWVudCBsZWFkaW5nIHRvIGluZm9ybWVkIGNhcmVlciA8YnIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdGluZyBpbmNyZWFzZWQgZW1wbG95YWJpbGl0eSwgY3JlYXRpbmcgaW5ub3ZhdGl2ZSBtaW5kc2V0IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3Igb3Blbi1zb3VyY2Ugd2l0aCBwcm9mZXNzaW9uYWwgZXZhbHVhdGlvbiBmb3IgdG91Z2ggY29tcGV0aXRpb24gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluIHRoaXMgZXZlciBldm9sb3Zpbmcgd29ybGQgb2YgdGVjaG5vbG9naWVzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPEZvcm0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Nsb3VkLWJveCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjbG91ZCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2xvdWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNsb3VkIERhdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAvL01haWxCb3ggJiBNYWlsQ29ubmVjdG9yICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IGZvcm0gY2xhc3NOYW1lPSd3aG9sZUNvbXBvbmVudCcgPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCBmb3JtR3JvdXAgY2xhc3NOYW1lPSdpbnB1dEdyb3VwJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBsYWJlbCBodG1sRm9yPSduYW1lJz5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXsoZSk9PntzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX19IG5hbWU9J25hbWUnIGNsYXNzTmFtZT0naW5wdXRGaWVsZCcvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtR3JvdXA+PCBmb3JtR3JvdXAgY2xhc3NOYW1lPSdpbnB1dEdyb3VwJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBsYWJlbCBodG1sRm9yPSdlbWFpbCc+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaW5wdXQgdHlwZT0nZW1haWwnIG9uQ2hhbmdlPXsoZSk9PntzZXRQaG9uZShlLnRhcmdldC52YWx1ZSl9fSBuYW1lPSdlbWFpbCcgY2xhc3NOYW1lPSdpbnB1dEZpZWxkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtR3JvdXA+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IGZvcm1Hcm91cCBjbGFzc05hbWU9J2lucHV0R3JvdXAnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBpbnB1dCB0eXBlPSdlbWFpbCcgb25DaGFuZ2U9eyhlKT0+e3NldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX19IG5hbWU9J2VtYWlsJyBjbGFzc05hbWU9J2lucHV0RmllbGQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm1Hcm91cD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwgZm9ybUdyb3VwIGNsYXNzTmFtZT0naW5wdXRHcm91cCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgbGFiZWwgaHRtbEZvcj0nbWVzc2FnZSc+TWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBpbnB1dCB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17KGUpPT57c2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9fSBuYW1lPSdtZXNzYWdlJyBjbGFzc05hbWU9J2lucHV0RmllbGQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm1Hcm91cD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwgaW5wdXQgdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoZSk9PntoYW5kbGVTdWJtaXQoZSl9fS8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8L2Zvcm0gPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbi8qRnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBkYXRhIHN1Ym1pdHRlZCBpbiBmb3JtKi9cclxuY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc29sZS5sb2coJ1NlbmRpbmcnKVxyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgLy8gICBuYW1lLFxyXG4gICAgICAgIC8vICAgcGhvbmUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgLy8gICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgICBmZXRjaCgnL2FwaS9jb250YWN0Jywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHJlY2VpdmVkJylcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSBzdWNjZWVkZWQhJylcclxuICAgICAgICAgICAgc2V0U3VibWl0dGVkKHRydWUpXHJcbiAgICAgICAgICAgIC8vIHNldE5hbWUoJycpXHJcbiAgICAgICAgICAgIC8vIHNldFBob25lKCcnKVxyXG4gICAgICAgICAgICBzZXRFbWFpbCgnJylcclxuICAgICAgICAgICAgLy8gc2V0Qm9keSgnJylcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuLypDdXN0b20gZm9ybSBidWlsZGVyIGZvciBkYXRhIHN1Ym1pc3Npb24gKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaXJzdENvbXBvbmVudDsiXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJjbG91ZCIsIkZpcnN0Q29tcG9uZW50IiwicmVxIiwicmVzIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGhvbmUiLCJzZXRQaG9uZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJzdGF0dXMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYnIiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/homePage/1stComponent.js\n"));

/***/ })

});