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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Alert,Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Alert,Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Alert/Alert.js\");\n/* harmony import */ var _barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Alert,Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/system */ \"(app-pages-browser)/./node_modules/@mui/system/esm/styled.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst FormContainer = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\")({\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"right\",\n    justifyContent: \"center\",\n    height: \"100vh\",\n    position: \"fixed\",\n    left: \"1000px\",\n    top: \"0px\"\n});\n_c = FormContainer;\nconst StyledForm = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"form\")({\n    width: \"80%\",\n    maxWidth: \"400px\",\n    padding: \"20px\",\n    borderRadius: \"10px\",\n    border: \"2px solid #1E3A8A\",\n    boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.2)\",\n    backgroundColor: \"#ffffff\",\n    textAlign: \"center\"\n});\n_c1 = StyledForm;\nconst StyledTextField = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    marginBottom: \"16px\",\n    width: \"100%\"\n});\n_c2 = StyledTextField;\nfunction Form() {\n    _s();\n    const { register, handleSubmit, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();\n    const [formStatus, setFormStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        success: false,\n        error: \"\"\n    });\n    const onSubmit = (data)=>{\n        if (data.username === \"testuser\" && data.password === \"password123\") {\n            setFormStatus({\n                success: true,\n                error: \"\"\n            });\n        } else {\n            setFormStatus({\n                success: false,\n                error: \"Invalid username or password\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledForm, {\n                children: [\n                    formStatus.success ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        severity: \"success\",\n                        children: \"Form submitted successfully\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this) : formStatus.error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        severity: \"error\",\n                        children: formStatus.error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTextField, {\n                        label: \"Name\",\n                        type: \"text\",\n                        ...register(\"name\", {\n                            required: \"name required\",\n                            pattern: {\n                                value: /^[a-zA-Z0-9_.-]*$/,\n                                message: \"Invalid characters used\"\n                            },\n                            minLength: {\n                                value: 6,\n                                message: \"Name must be at least 6 characters\"\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this),\n                    errors.name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        severity: \"error\",\n                        children: errors.name.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 82,\n                        columnNumber: 27\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTextField, {\n                        label: \"Phone Number\",\n                        type: \"phone\",\n                        ...register(\"phone\", {\n                            required: \"Phone required\",\n                            minLength: {\n                                value: 8,\n                                message: \"Phone must be at least 10 numbers\"\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this),\n                    errors.phone && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        severity: \"error\",\n                        children: errors.phone.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 95,\n                        columnNumber: 28\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTextField, {\n                        label: \"Email\",\n                        type: \"email\",\n                        ...register(\"email\", {\n                            required: \"Email required\",\n                            minLength: {\n                                value: 8,\n                                message: \"Email must be at least 10 numbers\"\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this),\n                    errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        severity: \"error\",\n                        children: errors.email.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 108,\n                        columnNumber: 28\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        type: \"submit\",\n                        variant: \"contained\",\n                        color: \"primary\",\n                        margin: \"5px\",\n                        onClick: handleSubmit(onSubmit),\n                        children: \" Submit \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Asus\\\\Documents\\\\Frontend\\\\Website\\\\src\\\\app\\\\components\\\\homePage\\\\dataForm.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Form, \"L2KIOLxNdRjvDfT2EgyERJpvuQA=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c3 = Form;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"FormContainer\");\n$RefreshReg$(_c1, \"StyledForm\");\n$RefreshReg$(_c2, \"StyledTextField\");\n$RefreshReg$(_c3, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lUGFnZS9kYXRhRm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUN3QztBQUVFO0FBQzRCO0FBQ2pDO0FBR3JDLE1BQU1RLGdCQUFnQkQsdURBQU1BLENBQUMsT0FBTztJQUNsQ0UsU0FBUztJQUNUQyxlQUFlO0lBQ2ZDLFlBQVk7SUFDWkMsZ0JBQWdCO0lBQ2hCQyxRQUFRO0lBQ1JDLFVBQVU7SUFDVkMsTUFBTTtJQUNOQyxLQUFLO0FBSVA7S0FaTVI7QUFjTixNQUFNUyxhQUFhVix1REFBTUEsQ0FBQyxRQUFRO0lBQ2hDVyxPQUFPO0lBQ1BDLFVBQVU7SUFDVkMsU0FBUztJQUNUQyxjQUFjO0lBQ2RDLFFBQVE7SUFDUkMsV0FBVztJQUNYQyxpQkFBaUI7SUFDakJDLFdBQVc7QUFDYjtNQVRNUjtBQVdOLE1BQU1TLGtCQUFrQm5CLHVEQUFNQSxDQUFDSixrR0FBU0EsRUFBRTtJQUN4Q3dCLGNBQWM7SUFDZFQsT0FBTztBQUNUO01BSE1RO0FBTVMsU0FBU0U7O0lBQ3RCLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFLEVBQUUsR0FBRzlCLHdEQUFPQTtJQUNqRSxNQUFNLENBQUMrQixZQUFZQyxjQUFjLEdBQUdqQywrQ0FBUUEsQ0FBQztRQUFFa0MsU0FBUztRQUFPQyxPQUFPO0lBQUc7SUFJekUsTUFBTUMsV0FBVyxDQUFDQztRQUVoQixJQUFJQSxLQUFLQyxRQUFRLEtBQUssY0FBY0QsS0FBS0UsUUFBUSxLQUFLLGVBQWU7WUFDbkVOLGNBQWM7Z0JBQUVDLFNBQVM7Z0JBQU1DLE9BQU87WUFBRztRQUMzQyxPQUFPO1lBQ0xGLGNBQWM7Z0JBQUVDLFNBQVM7Z0JBQU9DLE9BQU87WUFBK0I7UUFDeEU7SUFDRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDNUI7c0JBR0MsNEVBQUNTOztvQkFDRWdCLFdBQVdFLE9BQU8saUJBQ2pCLDhEQUFDN0Isa0dBQUtBO3dCQUFDbUMsVUFBUztrQ0FBVTs7Ozs7K0JBQ3hCUixXQUFXRyxLQUFLLGlCQUNsQiw4REFBQzlCLGtHQUFLQTt3QkFBQ21DLFVBQVM7a0NBQVNSLFdBQVdHLEtBQUs7Ozs7OytCQUN2QztrQ0FFSiw4REFBQ1Y7d0JBQ0NnQixPQUFNO3dCQUNOQyxNQUFLO3dCQUNKLEdBQUdkLFNBQVMsUUFBUTs0QkFDbkJlLFVBQVU7NEJBQ1ZDLFNBQVM7Z0NBQ1BDLE9BQU87Z0NBQ1BDLFNBQVM7NEJBQ1g7NEJBQ0FDLFdBQVc7Z0NBQ1RGLE9BQU87Z0NBQ1BDLFNBQVM7NEJBQ1g7d0JBQ0YsRUFBRTs7Ozs7O29CQUVIZixPQUFPaUIsSUFBSSxrQkFBSSw4REFBQzNDLGtHQUFLQTt3QkFBQ21DLFVBQVM7a0NBQVNULE9BQU9pQixJQUFJLENBQUNGLE9BQU87Ozs7OztrQ0FFNUQsOERBQUNyQjt3QkFDQ2dCLE9BQU07d0JBQ05DLE1BQUs7d0JBQ0osR0FBR2QsU0FBUyxTQUFTOzRCQUNwQmUsVUFBVTs0QkFDVkksV0FBVztnQ0FDVEYsT0FBTztnQ0FDUEMsU0FBUzs0QkFDWDt3QkFDRixFQUFFOzs7Ozs7b0JBRUhmLE9BQU9rQixLQUFLLGtCQUFJLDhEQUFDNUMsa0dBQUtBO3dCQUFDbUMsVUFBUztrQ0FBU1QsT0FBT2tCLEtBQUssQ0FBQ0gsT0FBTzs7Ozs7O2tDQUU5RCw4REFBQ3JCO3dCQUNDZ0IsT0FBTTt3QkFDTkMsTUFBSzt3QkFDSixHQUFHZCxTQUFTLFNBQVM7NEJBQ3BCZSxVQUFVOzRCQUNWSSxXQUFXO2dDQUNURixPQUFPO2dDQUNQQyxTQUFTOzRCQUNYO3dCQUNGLEVBQUU7Ozs7OztvQkFFSGYsT0FBT21CLEtBQUssa0JBQUksOERBQUM3QyxrR0FBS0E7d0JBQUNtQyxVQUFTO2tDQUFTVCxPQUFPbUIsS0FBSyxDQUFDSixPQUFPOzs7Ozs7a0NBRTlELDhEQUFDMUMsa0dBQVNBO3dCQUNSc0MsTUFBSzt3QkFDTFMsU0FBUTt3QkFDUkMsT0FBTTt3QkFDTkMsUUFBTzt3QkFDUEMsU0FBU3pCLGFBQWFPO2tDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUM7R0FoRndCVDs7UUFDb0MxQixvREFBT0E7OztNQUQzQzBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lUGFnZS9kYXRhRm9ybS5qcz9jYzAxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiBhcyBNdWlCdXR0b24sIEFsZXJ0IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvc3lzdGVtJztcclxuXHJcblxyXG5jb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSh7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIGFsaWduSXRlbXM6ICdyaWdodCcsXHJcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gIGhlaWdodDogJzEwMHZoJyxcclxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICBsZWZ0OiAnMTAwMHB4JyxcclxuICB0b3A6ICcwcHgnXHJcblxyXG4gIC8vIEJvdHRvbTogJzExMDBweCcsXHJcbiAgLy8gcG9zaXRpb246IFxyXG59KTtcclxuXHJcbmNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQoJ2Zvcm0nKSh7XHJcbiAgd2lkdGg6ICc4MCUnLFxyXG4gIG1heFdpZHRoOiAnNDAwcHgnLFxyXG4gIHBhZGRpbmc6ICcyMHB4JyxcclxuICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICBib3JkZXI6ICcycHggc29saWQgIzFFM0E4QScsXHJcbiAgYm94U2hhZG93OiAnMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxufSk7XHJcblxyXG5jb25zdCBTdHlsZWRUZXh0RmllbGQgPSBzdHlsZWQoVGV4dEZpZWxkKSh7XHJcbiAgbWFyZ2luQm90dG9tOiAnMTZweCcsXHJcbiAgd2lkdGg6ICcxMDAlJyxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSgpO1xyXG4gIGNvbnN0IFtmb3JtU3RhdHVzLCBzZXRGb3JtU3RhdHVzXSA9IHVzZVN0YXRlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnJyB9KTtcclxuXHJcblxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcblxyXG4gICAgaWYgKGRhdGEudXNlcm5hbWUgPT09ICd0ZXN0dXNlcicgJiYgZGF0YS5wYXNzd29yZCA9PT0gJ3Bhc3N3b3JkMTIzJykge1xyXG4gICAgICBzZXRGb3JtU3RhdHVzKHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6ICcnIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Rm9ybVN0YXR1cyh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybUNvbnRhaW5lcj5cclxuXHJcblxyXG4gICAgICAgIDxTdHlsZWRGb3JtID5cclxuICAgICAgICAgIHtmb3JtU3RhdHVzLnN1Y2Nlc3MgPyAoXHJcbiAgICAgICAgICAgIDxBbGVydCBzZXZlcml0eT1cInN1Y2Nlc3NcIj5Gb3JtIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHk8L0FsZXJ0PlxyXG4gICAgICAgICAgKSA6IGZvcm1TdGF0dXMuZXJyb3IgPyAoXHJcbiAgICAgICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCI+e2Zvcm1TdGF0dXMuZXJyb3J9PC9BbGVydD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIDxTdHlsZWRUZXh0RmllbGRcclxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6ICduYW1lIHJlcXVpcmVkJyxcclxuICAgICAgICAgICAgICBwYXR0ZXJuOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogL15bYS16QS1aMC05Xy4tXSokLyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIGNoYXJhY3RlcnMgdXNlZCdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIG1pbkxlbmd0aDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDYsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycydcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIj57ZXJyb3JzLm5hbWUubWVzc2FnZX08L0FsZXJ0Pn1cclxuXHJcbiAgICAgICAgICA8U3R5bGVkVGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGhvbmUgTnVtYmVyXCJcclxuICAgICAgICAgICAgdHlwZT1cInBob25lXCJcclxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdwaG9uZScsIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogJ1Bob25lIHJlcXVpcmVkJyxcclxuICAgICAgICAgICAgICBtaW5MZW5ndGg6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiA4LFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1Bob25lIG11c3QgYmUgYXQgbGVhc3QgMTAgbnVtYmVycydcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7ZXJyb3JzLnBob25lICYmIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCI+e2Vycm9ycy5waG9uZS5tZXNzYWdlfTwvQWxlcnQ+fVxyXG5cclxuICAgICAgICAgIDxTdHlsZWRUZXh0RmllbGRcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZW1haWwnLCB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdFbWFpbCByZXF1aXJlZCcsXHJcbiAgICAgICAgICAgICAgbWluTGVuZ3RoOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogOCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbWFpbCBtdXN0IGJlIGF0IGxlYXN0IDEwIG51bWJlcnMnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiPntlcnJvcnMuZW1haWwubWVzc2FnZX08L0FsZXJ0Pn1cclxuXHJcbiAgICAgICAgICA8TXVpQnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgbWFyZ2luPVwiNXB4XCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gPiBTdWJtaXQgPC9NdWlCdXR0b24+XHJcbiAgICAgICAgPC9TdHlsZWRGb3JtPlxyXG4gICAgICA8L0Zvcm1Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwiVGV4dEZpZWxkIiwiQnV0dG9uIiwiTXVpQnV0dG9uIiwiQWxlcnQiLCJzdHlsZWQiLCJGb3JtQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJTdHlsZWRGb3JtIiwid2lkdGgiLCJtYXhXaWR0aCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0QWxpZ24iLCJTdHlsZWRUZXh0RmllbGQiLCJtYXJnaW5Cb3R0b20iLCJGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJmb3JtU3RhdHVzIiwic2V0Rm9ybVN0YXR1cyIsInN1Y2Nlc3MiLCJlcnJvciIsIm9uU3VibWl0IiwiZGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXZlcml0eSIsImxhYmVsIiwidHlwZSIsInJlcXVpcmVkIiwicGF0dGVybiIsInZhbHVlIiwibWVzc2FnZSIsIm1pbkxlbmd0aCIsIm5hbWUiLCJwaG9uZSIsImVtYWlsIiwidmFyaWFudCIsImNvbG9yIiwibWFyZ2luIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/homePage/dataForm.js\n"));

/***/ })

});