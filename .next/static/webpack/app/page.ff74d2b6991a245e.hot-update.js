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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_homePage_firstComponent_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/homePage/firstComponent.css */ \"(app-pages-browser)/./src/app/styles/homePage/firstComponent.css\");\n/* harmony import */ var _dataForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataForm */ \"(app-pages-browser)/./src/app/components/homePage/dataForm.js\");\n/* harmony import */ var _assets_cloud_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/cloud.png */ \"(app-pages-browser)/./assets/cloud.png\");\n/* harmony import */ var _assets_awsLogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/awsLogo.png */ \"(app-pages-browser)/./assets/awsLogo.png\");\n/* harmony import */ var _assets_razorpay_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/razorpay.png */ \"(app-pages-browser)/./assets/razorpay.png\");\n/* harmony import */ var _assets_redhat_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/redhat.svg */ \"(app-pages-browser)/./assets/redhat.svg\");\n/* harmony import */ var _assets_tensorflow_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/tensorflow.svg */ \"(app-pages-browser)/./assets/tensorflow.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// import tensorflow from \"../../../../assets/tensorflow.png\";\n\nfunction FirstComponent(req, res) {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [email1, setEmail1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [submitted, setSubmitted1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Sending\");\n        let data = {\n            //   name,\n            //   phone,\n            email: email1\n        };\n        fetch(\"/api/contact\", {\n            method: \"POST\",\n            headers: {\n                \"Accept\": \"application/json, text/plain, */*\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        }).then((res)=>{\n            console.log(\"Response received\");\n            if (res.status === 200) {\n                console.log(\"Response succeeded!\");\n                setSubmitted1(true);\n                console.log(req.body);\n                // setName('')\n                // setPhone('')\n                setEmail1(\"\");\n                // setBody('')\n                console.log(req.body);\n            }\n            ;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wholeComponent\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"firstLine\",\n                        children: [\n                            \"Don't Judge, Just \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"firstLine-span\",\n                                children: \"Explore!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 56,\n                                columnNumber: 48\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"largeTextFirst\",\n                        children: [\n                            \"A Balanced academic industry approach for uplifting students \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 60,\n                                columnNumber: 86\n                            }, this),\n                            \"by enhanced learning for skill development leading to informed career \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 61,\n                                columnNumber: 95\n                            }, this),\n                            \"choices resulting increased employability, creating innovative mindset \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 62,\n                                columnNumber: 96\n                            }, this),\n                            \"for open-source with professional evaluation for tough competition \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 63,\n                                columnNumber: 92\n                            }, this),\n                            \"in this ever evoloving world of technologies.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cloud-box\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"cloud\",\n                                src: _assets_cloud_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                alt: \"Cloud Data\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"organization\",\n                                children: \"Trusted by World Leading Organizations\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 73,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"companyLogos\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"awsLogo\",\n                                src: _assets_awsLogo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                alt: \"AWS Logo\",\n                                width: \"200\",\n                                height: \"150\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 76,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"razorpay\",\n                                src: _assets_razorpay_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                alt: \"Razorpay Logo\",\n                                width: \"150\",\n                                height: \"150\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"tensorflow\",\n                                src: _assets_tensorflow_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                                alt: \"Tensorflow Logo\",\n                                width: \"150\",\n                                height: \"150\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                        lineNumber: 75,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shirsha\\\\D\\\\EkaShadow\\\\Projects\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\1stComponent.js\",\n            lineNumber: 53,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(FirstComponent, \"5+rtIEXgNHVuMh1FVWyZt8tQi44=\");\n_c = FirstComponent;\n/*Function to handle the data submitted in form*/ const handleSubmit = (e)=>{\n    e.preventDefault();\n    console.log(\"Sending\");\n    let data = {\n        //   name,\n        //   phone,\n        email\n    };\n    fetch(\"/api/contact\", {\n        method: \"POST\",\n        headers: {\n            \"Accept\": \"application/json, text/plain, */*\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    }).then((res)=>{\n        console.log(\"Response received\");\n        if (res.status === 200) {\n            console.log(\"Response succeeded!\");\n            setSubmitted(true);\n            // setName('')\n            // setPhone('')\n            setEmail(\"\");\n        // setBody('')\n        }\n        ;\n    });\n};\n/*Custom form builder for data submission */ /* harmony default export */ __webpack_exports__[\"default\"] = (FirstComponent);\nvar _c;\n$RefreshReg$(_c, \"FirstComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lUGFnZS8xc3RDb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ0c7QUFDZ0I7QUFDbkI7QUFDbUI7QUFDSTtBQUNFO0FBQ0o7QUFDbkQsOERBQThEO0FBQ0g7QUFFM0QsU0FBU1EsZUFBZUMsR0FBRyxFQUFFQyxHQUFHOztJQUM1QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDWSxRQUFPQyxVQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNrQixXQUFXQyxjQUFhLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNb0IsZUFBZSxDQUFDQztRQUNsQkEsRUFBRUMsY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osSUFBSUMsT0FBTztZQUNQLFVBQVU7WUFDVixXQUFXO1lBQ1hiLE9BQUFBO1FBRUo7UUFDQWMsTUFBTSxnQkFBZ0I7WUFDbEJDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxVQUFVO2dCQUNWLGdCQUFnQjtZQUNwQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNOO1FBQ3pCLEdBQUdPLElBQUksQ0FBQyxDQUFDdkI7WUFDTGMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osSUFBSWYsSUFBSXdCLE1BQU0sS0FBSyxLQUFLO2dCQUNwQlYsUUFBUUMsR0FBRyxDQUFDO2dCQUNaTCxjQUFhO2dCQUNiSSxRQUFRQyxHQUFHLENBQUNoQixJQUFJcUIsSUFBSTtnQkFDcEIsY0FBYztnQkFDZCxlQUFlO2dCQUNmaEIsVUFBUztnQkFDVCxjQUFjO2dCQUNkVSxRQUFRQyxHQUFHLENBQUNoQixJQUFJcUIsSUFBSTtZQUN4Qjs7UUFDSjtJQUNKO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNLO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEOztrQ0FDRyw4REFBQ0U7d0JBQUVELFdBQVU7OzRCQUFZOzBDQUNFLDhEQUFDRTtnQ0FBS0YsV0FBVTswQ0FBaUI7Ozs7Ozs7Ozs7OztrQ0FFNUQsOERBQUNHOzs7OztrQ0FDRCw4REFBQ0Y7d0JBQUVELFdBQVU7OzRCQUFpQjswQ0FDbUMsOERBQUNHOzs7Ozs0QkFBSzswQ0FDRyw4REFBQ0E7Ozs7OzRCQUFLOzBDQUNMLDhEQUFDQTs7Ozs7NEJBQUs7MENBQ1YsOERBQUNBOzs7Ozs0QkFBSzs7Ozs7OztrQ0FJN0UsOERBQUNKO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ3BDLG1EQUFLQTtnQ0FDRm9DLFdBQVU7Z0NBQ1ZJLEtBQUtyQyx5REFBS0E7Z0NBQ1ZzQyxLQUFJOzs7Ozs7MENBRVIsOERBQUNKO2dDQUFFRCxXQUFVOzBDQUFlOzs7Ozs7Ozs7Ozs7a0NBRWhDLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNwQyxtREFBS0E7Z0NBQUNvQyxXQUFVO2dDQUFVSSxLQUFLcEMsMkRBQU9BO2dDQUFFcUMsS0FBSTtnQ0FBV0MsT0FBTTtnQ0FBTUMsUUFBTzs7Ozs7OzBDQUMzRSw4REFBQzNDLG1EQUFLQTtnQ0FBQ29DLFdBQVU7Z0NBQVdJLEtBQUtuQyw0REFBUUE7Z0NBQUVvQyxLQUFJO2dDQUFnQkMsT0FBTTtnQ0FBTUMsUUFBTzs7Ozs7OzBDQUVsRiw4REFBQzNDLG1EQUFLQTtnQ0FBQ29DLFdBQVU7Z0NBQWFJLEtBQUtqQyw4REFBVUE7Z0NBQUVrQyxLQUFJO2dDQUFrQkMsT0FBTTtnQ0FBTUMsUUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNoSDtHQW5HU25DO0tBQUFBO0FBc0dULCtDQUErQyxHQUMvQyxNQUFNYSxlQUFlLENBQUNDO0lBQ2xCQSxFQUFFQyxjQUFjO0lBQ2hCQyxRQUFRQyxHQUFHLENBQUM7SUFDWixJQUFJQyxPQUFPO1FBQ1AsVUFBVTtRQUNWLFdBQVc7UUFDWGI7SUFFSjtJQUNBYyxNQUFNLGdCQUFnQjtRQUNsQkMsUUFBUTtRQUNSQyxTQUFTO1lBQ0wsVUFBVTtZQUNWLGdCQUFnQjtRQUNwQjtRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNOO0lBQ3pCLEdBQUdPLElBQUksQ0FBQyxDQUFDdkI7UUFDTGMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osSUFBSWYsSUFBSXdCLE1BQU0sS0FBSyxLQUFLO1lBQ3BCVixRQUFRQyxHQUFHLENBQUM7WUFDWkwsYUFBYTtZQUNiLGNBQWM7WUFDZCxlQUFlO1lBQ2ZOLFNBQVM7UUFDVCxjQUFjO1FBQ2xCOztJQUNKO0FBQ0o7QUFHQSwwQ0FBMEMsR0FNMUMsK0RBQWVOLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2hvbWVQYWdlLzFzdENvbXBvbmVudC5qcz8zYjUwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2hvbWVQYWdlL2ZpcnN0Q29tcG9uZW50LmNzc1wiXHJcbmltcG9ydCBGb3JtIGZyb20gJy4vZGF0YUZvcm0nO1xyXG5pbXBvcnQgY2xvdWQgZnJvbSBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9jbG91ZC5wbmdcIjtcclxuaW1wb3J0IGF3c0xvZ28gZnJvbSBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9hd3NMb2dvLnBuZ1wiO1xyXG5pbXBvcnQgcmF6b3JwYXkgZnJvbSBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9yYXpvcnBheS5wbmdcIjtcclxuaW1wb3J0IHJlZGhhdCBmcm9tIFwiLi4vLi4vLi4vLi4vYXNzZXRzL3JlZGhhdC5zdmdcIjtcclxuLy8gaW1wb3J0IHRlbnNvcmZsb3cgZnJvbSBcIi4uLy4uLy4uLy4uL2Fzc2V0cy90ZW5zb3JmbG93LnBuZ1wiO1xyXG5pbXBvcnQgdGVuc29yZmxvdyBmcm9tIFwiLi4vLi4vLi4vLi4vYXNzZXRzL3RlbnNvcmZsb3cuc3ZnXCI7XHJcblxyXG5mdW5jdGlvbiBGaXJzdENvbXBvbmVudChyZXEsIHJlcykge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcnKVxyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAvLyAgIG5hbWUsXHJcbiAgICAgICAgICAgIC8vICAgcGhvbmUsXHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAvLyAgIG1lc3NhZ2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHJlY2VpdmVkJylcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN1Y2NlZWRlZCEnKVxyXG4gICAgICAgICAgICAgICAgc2V0U3VibWl0dGVkKHRydWUpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcclxuICAgICAgICAgICAgICAgIC8vIHNldE5hbWUoJycpXHJcbiAgICAgICAgICAgICAgICAvLyBzZXRQaG9uZSgnJylcclxuICAgICAgICAgICAgICAgIHNldEVtYWlsKCcnKVxyXG4gICAgICAgICAgICAgICAgLy8gc2V0Qm9keSgnJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2hvbGVDb21wb25lbnQnPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZpcnN0TGluZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERvbiZhcG9zO3QgSnVkZ2UsIEp1c3QgPHNwYW4gY2xhc3NOYW1lPSdmaXJzdExpbmUtc3Bhbic+RXhwbG9yZSE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGFyZ2VUZXh0Rmlyc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBIEJhbGFuY2VkIGFjYWRlbWljIGluZHVzdHJ5IGFwcHJvYWNoIGZvciB1cGxpZnRpbmcgc3R1ZGVudHMgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5IGVuaGFuY2VkIGxlYXJuaW5nIGZvciBza2lsbCBkZXZlbG9wbWVudCBsZWFkaW5nIHRvIGluZm9ybWVkIGNhcmVlciA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlcyByZXN1bHRpbmcgaW5jcmVhc2VkIGVtcGxveWFiaWxpdHksIGNyZWF0aW5nIGlubm92YXRpdmUgbWluZHNldCA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIG9wZW4tc291cmNlIHdpdGggcHJvZmVzc2lvbmFsIGV2YWx1YXRpb24gZm9yIHRvdWdoIGNvbXBldGl0aW9uIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbiB0aGlzIGV2ZXIgZXZvbG92aW5nIHdvcmxkIG9mIHRlY2hub2xvZ2llcy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxGb3JtIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbG91ZC1ib3gnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Nsb3VkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjbG91ZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNsb3VkIERhdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcmdhbml6YXRpb25cIj5UcnVzdGVkIGJ5IFdvcmxkIExlYWRpbmcgT3JnYW5pemF0aW9uczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFueUxvZ29zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nYXdzTG9nbycgc3JjPXthd3NMb2dvfSBhbHQ9XCJBV1MgTG9nb1wiIHdpZHRoPScyMDAnIGhlaWdodD0nMTUwJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdyYXpvcnBheScgc3JjPXtyYXpvcnBheX0gYWx0PVwiUmF6b3JwYXkgTG9nb1wiIHdpZHRoPScxNTAnIGhlaWdodD0nMTUwJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPEltYWdlIGNsYXNzTmFtZT0ncmVkaGF0JyBzcmM9e3JlZGhhdH0gYWx0PVwiUmVkSGF0IExvZ29cIiB3aWR0aD0nMTUwJyBoZWlnaHQ9JzE1MCcgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J3RlbnNvcmZsb3cnIHNyYz17dGVuc29yZmxvd30gYWx0PVwiVGVuc29yZmxvdyBMb2dvXCIgd2lkdGg9JzE1MCcgaGVpZ2h0PScxNTAnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdjb21wYW55TG9nb3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdyYXpvcnBheScgc3JjPXtyYXpvcnBheX0gYWx0PVwiUmF6b3JwYXkgTG9nb1wiIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogLy9NYWlsQm94ICYgTWFpbENvbm5lY3RvciAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCBmb3JtIGNsYXNzTmFtZT0nd2hvbGVDb21wb25lbnQnID4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwgZm9ybUdyb3VwIGNsYXNzTmFtZT0naW5wdXRHcm91cCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgbGFiZWwgaHRtbEZvcj0nbmFtZSc+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBpbnB1dCB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17KGUpPT57c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9fSBuYW1lPSduYW1lJyBjbGFzc05hbWU9J2lucHV0RmllbGQnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybUdyb3VwPjwgZm9ybUdyb3VwIGNsYXNzTmFtZT0naW5wdXRHcm91cCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgbGFiZWwgaHRtbEZvcj0nZW1haWwnPlBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGlucHV0IHR5cGU9J2VtYWlsJyBvbkNoYW5nZT17KGUpPT57c2V0UGhvbmUoZS50YXJnZXQudmFsdWUpfX0gbmFtZT0nZW1haWwnIGNsYXNzTmFtZT0naW5wdXRGaWVsZCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybUdyb3VwPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCBmb3JtR3JvdXAgY2xhc3NOYW1lPSdpbnB1dEdyb3VwJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBsYWJlbCBodG1sRm9yPSdlbWFpbCc+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaW5wdXQgdHlwZT0nZW1haWwnIG9uQ2hhbmdlPXsoZSk9PntzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9fSBuYW1lPSdlbWFpbCcgY2xhc3NOYW1lPSdpbnB1dEZpZWxkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtR3JvdXA+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IGZvcm1Hcm91cCBjbGFzc05hbWU9J2lucHV0R3JvdXAnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGxhYmVsIGh0bWxGb3I9J21lc3NhZ2UnPk1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaW5wdXQgdHlwZT0ndGV4dCcgb25DaGFuZ2U9eyhlKT0+e3NldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfX0gbmFtZT0nbWVzc2FnZScgY2xhc3NOYW1lPSdpbnB1dEZpZWxkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtR3JvdXA+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IGlucHV0IHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KGUpPT57aGFuZGxlU3VibWl0KGUpfX0vPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPC9mb3JtID4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4vKkZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgZGF0YSBzdWJtaXR0ZWQgaW4gZm9ybSovXHJcbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nJylcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIC8vICAgbmFtZSxcclxuICAgICAgICAvLyAgIHBob25lLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIC8vICAgbWVzc2FnZVxyXG4gICAgfVxyXG4gICAgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSByZWNlaXZlZCcpXHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2Ugc3VjY2VlZGVkIScpXHJcbiAgICAgICAgICAgIHNldFN1Ym1pdHRlZCh0cnVlKVxyXG4gICAgICAgICAgICAvLyBzZXROYW1lKCcnKVxyXG4gICAgICAgICAgICAvLyBzZXRQaG9uZSgnJylcclxuICAgICAgICAgICAgc2V0RW1haWwoJycpXHJcbiAgICAgICAgICAgIC8vIHNldEJvZHkoJycpXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuXHJcbi8qQ3VzdG9tIGZvcm0gYnVpbGRlciBmb3IgZGF0YSBzdWJtaXNzaW9uICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RDb21wb25lbnQ7Il0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJGb3JtIiwiY2xvdWQiLCJhd3NMb2dvIiwicmF6b3JwYXkiLCJyZWRoYXQiLCJ0ZW5zb3JmbG93IiwiRmlyc3RDb21wb25lbnQiLCJyZXEiLCJyZXMiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwaG9uZSIsInNldFBob25lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInN0YXR1cyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwiYnIiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/homePage/1stComponent.js\n"));

/***/ })

});