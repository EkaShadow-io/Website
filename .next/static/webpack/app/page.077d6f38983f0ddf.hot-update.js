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

/***/ "(app-pages-browser)/./src/app/components/homePage/dataForm.js":
/*!*************************************************!*\
  !*** ./src/app/components/homePage/dataForm.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Alert,Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Alert,Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Alert,Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Alert/Alert.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/system */ \"(app-pages-browser)/./node_modules/@mui/system/esm/styled.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst FormContainer = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\")({\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"right\",\n    justifyContent: \"center\",\n    height: \"100vh\",\n    position: \"fixed\",\n    left: \"1050px\",\n    top: \"15px\"\n});\n_c = FormContainer;\nconst StyledForm = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"form\")({\n    width: \"80%\",\n    maxWidth: \"400px\",\n    padding: \"20px\",\n    borderRadius: \"10px\",\n    border: \"2px solid #1E3A8A\",\n    boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.2)\",\n    backgroundColor: \"#fff\",\n    textAlign: \"center\"\n});\n_c1 = StyledForm;\nconst StyledTextField = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    marginBottom: \"16px\",\n    width: \"100%\"\n});\n_c2 = StyledTextField;\nconst StyledMuiButton = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n    color: \"black\"\n});\n_c3 = StyledMuiButton;\nfunction Form() {\n    _s();\n    const { register, handleSubmit, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const [formStatus, setFormStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        success: false,\n        error: \"\"\n    });\n    const onSubmit = (data)=>{\n        if (data.username === \"testuser\" && data.password === \"password123\") {\n            setFormStatus({\n                success: true,\n                error: \"\"\n            });\n        } else {\n            setFormStatus({\n                success: false,\n                error: \"Invalid username or password\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledForm, {\n                children: [\n                    formStatus.success ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        severity: \"success\",\n                        children: \"Form submitted successfully\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this) : formStatus.error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        severity: \"error\",\n                        children: formStatus.error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTextField, {\n                        label: \"Name\",\n                        type: \"text\",\n                        ...register(\"name\", {\n                            required: \"name required\",\n                            pattern: {\n                                value: /^[a-zA-Z0-9_.-]*$/,\n                                message: \"Invalid characters used\"\n                            },\n                            minLength: {\n                                value: 6,\n                                message: \"Name must be at least 6 characters\"\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this),\n                    errors.name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        severity: \"error\",\n                        children: errors.name.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 85,\n                        columnNumber: 27\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTextField, {\n                        label: \"Phone Number\",\n                        type: \"phone\",\n                        ...register(\"phone\", {\n                            required: \"Phone required\",\n                            minLength: {\n                                value: 8,\n                                message: \"Phone must be at least 10 numbers\"\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this),\n                    errors.phone && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        severity: \"error\",\n                        children: errors.phone.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 98,\n                        columnNumber: 28\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTextField, {\n                        label: \"Email\",\n                        type: \"email\",\n                        ...register(\"email\", {\n                            required: \"Email required\",\n                            minLength: {\n                                value: 8,\n                                message: \"Email must be at least 10 numbers\"\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this),\n                    errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        severity: \"error\",\n                        children: errors.email.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 111,\n                        columnNumber: 28\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledMuiButton, {\n                        type: \"submit\",\n                        variant: \"contained\",\n                        color: \"primary\",\n                        margin: \"5px\",\n                        onClick: handleSubmit(onSubmit),\n                        children: \" Submit \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Form, \"L2KIOLxNdRjvDfT2EgyERJpvuQA=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c4 = Form;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"FormContainer\");\n$RefreshReg$(_c1, \"StyledForm\");\n$RefreshReg$(_c2, \"StyledTextField\");\n$RefreshReg$(_c3, \"StyledMuiButton\");\n$RefreshReg$(_c4, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lUGFnZS9kYXRhRm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUN3QztBQUVFO0FBQzRCO0FBQ2pDO0FBR3JDLE1BQU1RLGdCQUFnQkQsdURBQU1BLENBQUMsT0FBTztJQUNsQ0UsU0FBUztJQUNUQyxlQUFlO0lBQ2ZDLFlBQVk7SUFDWkMsZ0JBQWdCO0lBQ2hCQyxRQUFRO0lBQ1JDLFVBQVU7SUFDVkMsTUFBTTtJQUNOQyxLQUFLO0FBSVA7S0FaTVI7QUFjTixNQUFNUyxhQUFhVix1REFBTUEsQ0FBQyxRQUFRO0lBQ2hDVyxPQUFPO0lBQ1BDLFVBQVU7SUFDVkMsU0FBUztJQUNUQyxjQUFjO0lBQ2RDLFFBQVE7SUFDUkMsV0FBVztJQUNYQyxpQkFBaUI7SUFDakJDLFdBQVc7QUFDYjtNQVRNUjtBQVdOLE1BQU1TLGtCQUFrQm5CLHVEQUFNQSxDQUFDSixrR0FBU0EsRUFBRTtJQUN4Q3dCLGNBQWM7SUFDZFQsT0FBTztBQUNUO01BSE1RO0FBS04sTUFBTUUsa0JBQWtCckIsdURBQU1BLENBQUNGLGtHQUFTQSxFQUFFO0lBQ3ZDd0IsT0FBTztBQUNWO01BRk1EO0FBSVMsU0FBU0U7O0lBQ3RCLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFLEVBQUUsR0FBR2hDLHdEQUFPQTtJQUNqRSxNQUFNLENBQUNpQyxZQUFZQyxjQUFjLEdBQUduQywrQ0FBUUEsQ0FBQztRQUFFb0MsU0FBUztRQUFPQyxPQUFPO0lBQUc7SUFJekUsTUFBTUMsV0FBVyxDQUFDQztRQUVoQixJQUFJQSxLQUFLQyxRQUFRLEtBQUssY0FBY0QsS0FBS0UsUUFBUSxLQUFLLGVBQWU7WUFDbkVOLGNBQWM7Z0JBQUVDLFNBQVM7Z0JBQU1DLE9BQU87WUFBRztRQUMzQyxPQUFPO1lBQ0xGLGNBQWM7Z0JBQUVDLFNBQVM7Z0JBQU9DLE9BQU87WUFBK0I7UUFDeEU7SUFDRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDOUI7c0JBR0MsNEVBQUNTOztvQkFDRWtCLFdBQVdFLE9BQU8saUJBQ2pCLDhEQUFDL0Isa0dBQUtBO3dCQUFDcUMsVUFBUztrQ0FBVTs7Ozs7K0JBQ3hCUixXQUFXRyxLQUFLLGlCQUNsQiw4REFBQ2hDLGtHQUFLQTt3QkFBQ3FDLFVBQVM7a0NBQVNSLFdBQVdHLEtBQUs7Ozs7OytCQUN2QztrQ0FFSiw4REFBQ1o7d0JBQ0NrQixPQUFNO3dCQUNOQyxNQUFLO3dCQUNKLEdBQUdkLFNBQVMsUUFBUTs0QkFDbkJlLFVBQVU7NEJBQ1ZDLFNBQVM7Z0NBQ1BDLE9BQU87Z0NBQ1BDLFNBQVM7NEJBQ1g7NEJBQ0FDLFdBQVc7Z0NBQ1RGLE9BQU87Z0NBQ1BDLFNBQVM7NEJBQ1g7d0JBQ0YsRUFBRTs7Ozs7O29CQUVIZixPQUFPaUIsSUFBSSxrQkFBSSw4REFBQzdDLGtHQUFLQTt3QkFBQ3FDLFVBQVM7a0NBQVNULE9BQU9pQixJQUFJLENBQUNGLE9BQU87Ozs7OztrQ0FFNUQsOERBQUN2Qjt3QkFDQ2tCLE9BQU07d0JBQ05DLE1BQUs7d0JBQ0osR0FBR2QsU0FBUyxTQUFTOzRCQUNwQmUsVUFBVTs0QkFDVkksV0FBVztnQ0FDVEYsT0FBTztnQ0FDUEMsU0FBUzs0QkFDWDt3QkFDRixFQUFFOzs7Ozs7b0JBRUhmLE9BQU9rQixLQUFLLGtCQUFJLDhEQUFDOUMsa0dBQUtBO3dCQUFDcUMsVUFBUztrQ0FBU1QsT0FBT2tCLEtBQUssQ0FBQ0gsT0FBTzs7Ozs7O2tDQUU5RCw4REFBQ3ZCO3dCQUNDa0IsT0FBTTt3QkFDTkMsTUFBSzt3QkFDSixHQUFHZCxTQUFTLFNBQVM7NEJBQ3BCZSxVQUFVOzRCQUNWSSxXQUFXO2dDQUNURixPQUFPO2dDQUNQQyxTQUFTOzRCQUNYO3dCQUNGLEVBQUU7Ozs7OztvQkFFSGYsT0FBT21CLEtBQUssa0JBQUksOERBQUMvQyxrR0FBS0E7d0JBQUNxQyxVQUFTO2tDQUFTVCxPQUFPbUIsS0FBSyxDQUFDSixPQUFPOzs7Ozs7a0NBRTlELDhEQUFDckI7d0JBQ0NpQixNQUFLO3dCQUNMUyxTQUFRO3dCQUNSekIsT0FBTTt3QkFDTjBCLFFBQU87d0JBQ1BDLFNBQVN4QixhQUFhTztrQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlDO0dBaEZ3QlQ7O1FBQ29DNUIsb0RBQU9BOzs7TUFEM0M0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZVBhZ2UvZGF0YUZvcm0uanM/Y2MwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24gYXMgTXVpQnV0dG9uLCBBbGVydCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL3N5c3RlbSc7XHJcblxyXG5cclxuY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZCgnZGl2Jykoe1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICBhbGlnbkl0ZW1zOiAncmlnaHQnLFxyXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgbGVmdDogJzEwNTBweCcsXHJcbiAgdG9wOiAnMTVweCcsXHJcblxyXG4gIC8vIEJvdHRvbTogJzExMDBweCcsXHJcbiAgLy8gcG9zaXRpb246IFxyXG59KTtcclxuXHJcbmNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQoJ2Zvcm0nKSh7XHJcbiAgd2lkdGg6ICc4MCUnLFxyXG4gIG1heFdpZHRoOiAnNDAwcHgnLFxyXG4gIHBhZGRpbmc6ICcyMHB4JyxcclxuICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICBib3JkZXI6ICcycHggc29saWQgIzFFM0E4QScsXHJcbiAgYm94U2hhZG93OiAnMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxufSk7XHJcblxyXG5jb25zdCBTdHlsZWRUZXh0RmllbGQgPSBzdHlsZWQoVGV4dEZpZWxkKSh7XHJcbiAgbWFyZ2luQm90dG9tOiAnMTZweCcsXHJcbiAgd2lkdGg6ICcxMDAlJyxcclxufSk7XHJcblxyXG5jb25zdCBTdHlsZWRNdWlCdXR0b24gPSBzdHlsZWQoTXVpQnV0dG9uKSh7XHJcbiAgIGNvbG9yOiAnYmxhY2snLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oKSB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oKTtcclxuICBjb25zdCBbZm9ybVN0YXR1cywgc2V0Rm9ybVN0YXR1c10gPSB1c2VTdGF0ZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJycgfSk7XHJcblxyXG5cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG5cclxuICAgIGlmIChkYXRhLnVzZXJuYW1lID09PSAndGVzdHVzZXInICYmIGRhdGEucGFzc3dvcmQgPT09ICdwYXNzd29yZDEyMycpIHtcclxuICAgICAgc2V0Rm9ybVN0YXR1cyh7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiAnJyB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEZvcm1TdGF0dXMoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJyB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1Db250YWluZXI+XHJcblxyXG5cclxuICAgICAgICA8U3R5bGVkRm9ybSA+XHJcbiAgICAgICAgICB7Zm9ybVN0YXR1cy5zdWNjZXNzID8gKFxyXG4gICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJzdWNjZXNzXCI+Rm9ybSBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5PC9BbGVydD5cclxuICAgICAgICAgICkgOiBmb3JtU3RhdHVzLmVycm9yID8gKFxyXG4gICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiPntmb3JtU3RhdHVzLmVycm9yfTwvQWxlcnQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICA8U3R5bGVkVGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywge1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiAnbmFtZSByZXF1aXJlZCcsXHJcbiAgICAgICAgICAgICAgcGF0dGVybjoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IC9eW2EtekEtWjAtOV8uLV0qJC8sXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCBjaGFyYWN0ZXJzIHVzZWQnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBtaW5MZW5ndGg6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiA2LFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ05hbWUgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2Vycm9ycy5uYW1lICYmIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCI+e2Vycm9ycy5uYW1lLm1lc3NhZ2V9PC9BbGVydD59XHJcblxyXG4gICAgICAgICAgPFN0eWxlZFRleHRGaWVsZFxyXG4gICAgICAgICAgICBsYWJlbD1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcigncGhvbmUnLCB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdQaG9uZSByZXF1aXJlZCcsXHJcbiAgICAgICAgICAgICAgbWluTGVuZ3RoOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogOCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQaG9uZSBtdXN0IGJlIGF0IGxlYXN0IDEwIG51bWJlcnMnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2Vycm9ycy5waG9uZSAmJiA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiPntlcnJvcnMucGhvbmUubWVzc2FnZX08L0FsZXJ0Pn1cclxuXHJcbiAgICAgICAgICA8U3R5bGVkVGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2VtYWlsJywge1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiAnRW1haWwgcmVxdWlyZWQnLFxyXG4gICAgICAgICAgICAgIG1pbkxlbmd0aDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDgsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRW1haWwgbXVzdCBiZSBhdCBsZWFzdCAxMCBudW1iZXJzJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIj57ZXJyb3JzLmVtYWlsLm1lc3NhZ2V9PC9BbGVydD59XHJcblxyXG4gICAgICAgICAgPFN0eWxlZE11aUJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIjVweFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9ID4gU3VibWl0IDwvU3R5bGVkTXVpQnV0dG9uPlxyXG4gICAgICAgIDwvU3R5bGVkRm9ybT5cclxuICAgICAgPC9Gb3JtQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIk11aUJ1dHRvbiIsIkFsZXJ0Iiwic3R5bGVkIiwiRm9ybUNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiU3R5bGVkRm9ybSIsIndpZHRoIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwiU3R5bGVkVGV4dEZpZWxkIiwibWFyZ2luQm90dG9tIiwiU3R5bGVkTXVpQnV0dG9uIiwiY29sb3IiLCJGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJmb3JtU3RhdHVzIiwic2V0Rm9ybVN0YXR1cyIsInN1Y2Nlc3MiLCJlcnJvciIsIm9uU3VibWl0IiwiZGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXZlcml0eSIsImxhYmVsIiwidHlwZSIsInJlcXVpcmVkIiwicGF0dGVybiIsInZhbHVlIiwibWVzc2FnZSIsIm1pbkxlbmd0aCIsIm5hbWUiLCJwaG9uZSIsImVtYWlsIiwidmFyaWFudCIsIm1hcmdpbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/homePage/dataForm.js\n"));

/***/ })

});