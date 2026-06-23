/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../node_modules/css-loader/dist/cjs.js!./style.css"
/*!**********************************************************************!*\
  !*** ../../../../../node_modules/css-loader/dist/cjs.js!./style.css ***!
  \**********************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    margin:0;\r\n    padding:0;\r\n    box-sizing:border-box;\r\n}\r\n\r\nbody{\r\n    font-family:Arial, sans-serif;\r\n    background:#f4f4f4;\r\n    min-height:100vh;\r\n    color:#222;\r\n}\r\n\r\n/* =========================\r\n   MAIN LAYOUT\r\n========================= */\r\n\r\n.container{\r\n    display:flex;\r\n    min-height:100vh;\r\n    margin-top:70px;\r\n}\r\n\r\n/* =========================\r\n   HEADER\r\n========================= */\r\n\r\nheader{\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:75px;\r\n\r\n    background:#1e1e1e;\r\n    color:white;\r\n\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n\r\n    z-index:100;\r\n\r\n    box-shadow:0 2px 6px rgba(0,0,0,0.1);\r\n}\r\n/* =========================\r\n   SIDEBAR\r\n========================= */\r\n\r\n#tabs{\r\n    width:280px;\r\n    background:#ffffff;\r\n    padding:25px;\r\n    border-right:1px solid #ddd;\r\n\r\n    display:flex;\r\n    flex-direction:column;\r\n}\r\n\r\n#tabs h2{\r\n    margin:20px 0;\r\n    font-size:30px;\r\n}\r\n\r\n#projectslist{\r\n    margin-top:20px;\r\n    overflow-y:auto;\r\n}\r\n\r\n/* =========================\r\n   CONTENT AREA\r\n========================= */\r\n\r\n#content{\r\n    flex:1;\r\n    padding:35px;\r\n    position:relative;\r\n    background:#f8f8f8;\r\n    overflow-y:auto;\r\n}\r\n\r\n/* =========================\r\n   BUTTONS\r\n========================= */\r\n\r\nbutton{\r\n    padding:10px 16px;\r\n    border:none;\r\n    cursor:pointer;\r\n    border-radius:8px;\r\n    font-size:15px;\r\n    transition:0.2s ease;\r\n}\r\n\r\nbutton:hover{\r\n    transform:scale(1.02);\r\n    opacity:0.95;\r\n}\r\n\r\n/* home button */\r\n\r\n#home-btn{\r\n    background:#444;\r\n    color:white;\r\n    width:100%;\r\n    margin-bottom:20px;\r\n}\r\n\r\n/* add project button */\r\n\r\n#add-project{\r\n    background:#2ecc71;\r\n    color:white;\r\n    width:100%;\r\n}\r\n\r\n/* floating add task */\r\n\r\n#open{\r\n    position:absolute;\r\n    right:30px;\r\n\r\n    background:#3498db;\r\n    color:white;\r\n\r\n    padding:10px 20px;\r\n\r\n    font-weight:bold;\r\n}\r\n\r\n/* red delete buttons */\r\n\r\n.btn{\r\n    background:#e74c3c;\r\n    color:white;\r\n    margin-top:10px;\r\n}\r\n\r\n/* =========================\r\n   PROJECT CARD\r\n========================= */\r\n\r\n.project-card{\r\n    border:1px solid #ddd;\r\n    background:white;\r\n    padding:15px;\r\n    margin:12px 0;\r\n    border-radius:10px;\r\n    cursor:pointer;\r\n\r\n    display:flex;\r\n    justify-content:space-between;\r\n    align-items:center;\r\n\r\n    transition:0.2s;\r\n}\r\n\r\n.project-card:hover{\r\n    transform:translateY(-2px);\r\n    box-shadow:0 2px 8px rgba(0,0,0,0.08);\r\n}\r\n\r\n/* =========================\r\n   TASK CARD\r\n========================= */\r\n\r\n.task-card{\r\n    border:none;\r\n    background:white;\r\n    padding:20px;\r\n    margin:15px 0;\r\n    border-radius:12px;\r\n\r\n    box-shadow:0 3px 10px rgba(0,0,0,0.08);\r\n\r\n    transition:0.2s;\r\n}\r\n\r\n.task-card:hover{\r\n    transform:translateY(-2px);\r\n}\r\n\r\n.task-card p{\r\n    margin:8px 0;\r\n    line-height:1.5;\r\n}\r\n\r\n/* =========================\r\n   MODALS\r\n========================= */\r\n\r\n.modal,\r\n.newproject{\r\n    position:fixed;\r\n    inset:0;\r\n\r\n    background:rgba(0,0,0,0.45);\r\n\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n\r\n    z-index:1000;\r\n}\r\n\r\n/* hidden */\r\n\r\n.hidden{\r\n    display:none;\r\n}\r\n\r\n/* =========================\r\n   MODAL BOX\r\n========================= */\r\n\r\n.modal-content,\r\n.newproject > div{\r\n    background:white;\r\n    width:450px;\r\n    padding:30px;\r\n    border-radius:12px;\r\n\r\n    display:flex;\r\n    flex-direction:column;\r\n    gap:15px;\r\n\r\n    box-shadow:0 6px 20px rgba(0,0,0,0.15);\r\n}\r\n\r\n/* =========================\r\n   INPUTS\r\n========================= */\r\n\r\ninput,\r\nselect{\r\n    padding:12px;\r\n    border:1px solid #ccc;\r\n    border-radius:6px;\r\n    font-size:15px;\r\n\r\n    outline:none;\r\n}\r\n\r\ninput:focus,\r\nselect:focus{\r\n    border:1px solid #3498db;\r\n}\r\n\r\n/* submit buttons */\r\n\r\n#close,\r\n#addpro{\r\n    background:#2ecc71;\r\n    color:white;\r\n}\r\n\r\n/* =========================\r\n   EMPTY TASK STATE\r\n========================= */\r\n\r\n.empty{\r\n    color:#777;\r\n    font-size:18px;\r\n    margin-top:30px;\r\n}\r\n\r\n/* =========================\r\n   SCROLLBAR\r\n========================= */\r\n\r\n::-webkit-scrollbar{\r\n    width:8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb{\r\n    background:#aaa;\r\n    border-radius:10px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./style.css?../../../../../node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "../../../../../node_modules/css-loader/dist/runtime/api.js"
/*!******************************************************************!*\
  !*** ../../../../../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/../../../../../node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!***************************************************************************!*\
  !*** ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./style.css"
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../../../../../node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./style.css?\n}");

/***/ },

/***/ "../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!*****************************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!*********************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!***********************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!***********************************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!****************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!**********************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./dom.js"
/*!****************!*\
  !*** ./dom.js ***!
  \****************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks),\n/* harmony export */   displayprojects: () => (/* binding */ displayprojects)\n/* harmony export */ });\n/* harmony import */ var _projectlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectlist */ \"./projectlist.js\");\n\r\n\r\nfunction displayTasks(project) {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.innerHTML = \"\";\r\n\r\n    project.tasks.forEach(task => {\r\n        const div = document.createElement(\"div\");\r\n\r\n        div.classList.add(\"task-card\");\r\n\r\ndiv.innerHTML = `\r\n\r\n    <h3>${task.name}</h3>\r\n\r\n    <p class=\"task-date\">\r\n        📅 Due: ${task.duedate || \"No date\"}\r\n    </p>\r\n\r\n    <p class=\"task-desc\">\r\n        ${task.description || \"No description\"}\r\n    </p>\r\n\r\n    <div class=\"task-footer\">\r\n\r\n        <span class=\"priority ${task.priority}\">\r\n            ${task.priority.toUpperCase()}\r\n        </span>\r\n\r\n        <span class=\"status\">\r\n            ${task.completed ? \"✅ Done\" : \"⏳ Pending\"}\r\n        </span>\r\n\r\n    </div>\r\n\r\n    <div class=\"task-buttons\">\r\n\r\n        <button class=\"toggle-task\">\r\n            ${task.completed ? \"Undo\" : \"Complete\"}\r\n        </button>\r\n\r\n        <button class=\"delete-task btn\">\r\n            Delete\r\n        </button>\r\n\r\n    </div>\r\n`;\r\n    const deleteBtn = div.querySelector(\".delete-task\");\r\n    const toggleBtn =div.querySelector(\".toggle-task\");\r\ndeleteBtn.addEventListener(\"click\", () => {\r\n\r\n    (0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.deletetask)(project.id, task.id);\r\n\r\n    const updated = (0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.loadProject)(project.id);\r\n\r\n    displayTasks(updated);\r\n\r\n});\r\n\r\n\r\n    toggleBtn.addEventListener(\"click\", () => {\r\n\r\n    (0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.togglecompletion)(project.id, task.id);\r\n\r\n    const updated = (0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.loadProject)(project.id);\r\n\r\n    displayTasks(updated);\r\n\r\n});\r\n\r\n\r\n        content.appendChild(div);\r\n    });\r\n\r\n\r\n}\r\n\r\nfunction displayprojects(projects,setCurrentProject) {\r\n    const content =\r\n        document.getElementById(\"projectslist\");\r\n\r\n    content.innerHTML = \"\";\r\n\r\n    projects.forEach(project => {\r\n\r\n        const div = document.createElement(\"div\");\r\n\r\n        div.classList.add(\"project-card\");\r\n\r\n       \r\n\r\n\r\n        div.innerHTML = `\r\n            <p>${project.name}</p>\r\n\r\n            <button class=\"delete-project\">\r\n                Delete Project\r\n            </button>\r\n        `;\r\n\r\ndiv.addEventListener(\"click\", () => {\r\n\r\n    setCurrentProject(project.id);\r\n\r\n    const current = (0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.loadProject)(project.id);\r\n\r\n    displayTasks(current);\r\n\r\n});\r\n\r\n        const deleteBtn =\r\n            div.querySelector(\".delete-project\");\r\n\r\ndeleteBtn.addEventListener(\"click\", (e) => {\r\n\r\n    e.stopPropagation();\r\n\r\n    (0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.deleteproject)(project.id);\r\n\r\n    displayprojects((0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.getprojects)(), setCurrentProject);\r\n\r\n    const remainingProjects = (0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.getprojects)();\r\n\r\n    // no projects left\r\n    if (remainingProjects.length === 0) {\r\n\r\n        document.getElementById(\"content\").innerHTML =\r\n            \"<p>No projects left</p>\";\r\n\r\n        return;\r\n    }\r\n\r\n    // show current selected project\r\n    const current = (0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.loadProject)(remainingProjects[0].id);\r\n\r\n    displayTasks(current);\r\n\r\n});\r\n\r\n        content.appendChild(div);\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./dom.js?\n}");

/***/ },

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectlist */ \"./projectlist.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst modal =\r\n    document.querySelector(\".modal\");\r\n\r\nconst openBtn =\r\n    document.getElementById(\"open\");\r\n\r\nconst submitBtn =\r\n    document.getElementById(\"close\");\r\n\r\n\r\n    const newprojectdialog=document.querySelector(\".newproject\");\r\n\r\n\r\n    const addprojectbtn=document.getElementById(\"add-project\")\r\n\r\n    const addprobtn=document.getElementById(\"addpro\")\r\n\r\n;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayprojects)((0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.getprojects)(), _projectlist__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject);\r\n\r\nopenBtn.addEventListener(\"click\", () => {\r\n    modal.classList.remove(\"hidden\");\r\n});\r\n\r\nsubmitBtn.addEventListener(\"click\", (e) => {\r\n\r\n    e.preventDefault();\r\n\r\n    const taskname =\r\n        document.getElementById(\"task-name\").value;\r\n\r\n    const duedate =\r\n        document.getElementById(\"due-date\").value;\r\n\r\n    const description =\r\n        document.getElementById(\"description\").value;\r\n\r\n    const priority =\r\n        document.getElementById(\"option\").value;\r\n\r\n    const newtask = {\r\n        id: crypto.randomUUID(),\r\n        name: taskname,\r\n        duedate: duedate,\r\n        description: description,\r\n        priority: priority,\r\n        completed: false\r\n    };\r\ndocument.getElementById(\"task-name\").value = \"\";\r\ndocument.getElementById(\"due-date\").value = \"\";\r\ndocument.getElementById(\"description\").value = \"\";\r\n\r\n    (0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.addtask)((0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)(), newtask);\r\n    const current = (0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.loadProject)((0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)());\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayTasks)(current);\r\n    modal.classList.add(\"hidden\");\r\n});\r\n\r\n\r\naddprojectbtn.addEventListener(\"click\",()=>{\r\n    newprojectdialog.classList.remove(\"hidden\")\r\n\r\n});\r\n\r\naddprobtn.addEventListener(\"click\",(e)=>{\r\n    e.preventDefault();\r\n     const projectname=document.getElementById(\"projectname\").value\r\n     document.getElementById(\"projectname\").value = \"\";\r\n(0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.Addproject)(projectname);\r\n\r\nconst allprojects = (0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.getprojects)();\r\n\r\nconst newest =\r\n    allprojects[allprojects.length - 1];\r\n\r\n(0,_projectlist__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(newest.id);\r\n\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayprojects)(allprojects, _projectlist__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject);\r\n     newprojectdialog.classList.add(\"hidden\")\r\n\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./index.js?\n}");

/***/ },

/***/ "./projectlist.js"
/*!************************!*\
  !*** ./projectlist.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Addproject: () => (/* binding */ Addproject),\n/* harmony export */   addtask: () => (/* binding */ addtask),\n/* harmony export */   deleteproject: () => (/* binding */ deleteproject),\n/* harmony export */   deletetask: () => (/* binding */ deletetask),\n/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject),\n/* harmony export */   getprojects: () => (/* binding */ getprojects),\n/* harmony export */   loadProject: () => (/* binding */ loadProject),\n/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject),\n/* harmony export */   togglecompletion: () => (/* binding */ togglecompletion)\n/* harmony export */ });\nlet projects = [\r\n    {\r\n        id: 1,\r\n        name: \"defaultproject\",\r\n        tasks: []\r\n    }\r\n];\r\n\r\nlet currentproject = 1;\r\n\r\n\r\nfunction Addproject(name) {\r\n    const newproject = {\r\n        id: crypto.randomUUID(),\r\n        name: name,\r\n        tasks: []\r\n    };\r\n\r\n    projects.push(newproject);\r\n}\r\n\r\nfunction getprojects() {\r\n    return projects;\r\n}\r\n\r\nfunction loadProject(projectid) {\r\n    return projects.find(\r\n        project => project.id === projectid\r\n    );\r\n}\r\n\r\nfunction addtask(projectid, task) {\r\n    const project = projects.find(\r\n        p => p.id === projectid\r\n    );\r\n\r\n    if (project) {\r\n        project.tasks.push(task);\r\n    }\r\n}\r\n\r\nfunction deleteproject(projectid) {\r\n    projects = projects.filter(\r\n        project => project.id !== projectid\r\n    );\r\n        if(currentproject === projectid){\r\n\r\n        currentproject = projects[0]?.id || null;\r\n    }\r\n}\r\n\r\nfunction deletetask(projectid, taskid) {\r\n    const project = projects.find(\r\n        p => p.id === projectid\r\n    );\r\n\r\n    if (project) {\r\n        project.tasks = project.tasks.filter(\r\n            task => task.id !== taskid\r\n        );\r\n    }\r\n}\r\n\r\nfunction togglecompletion(projectid, taskid) {\r\n    const project = projects.find(\r\n        p => p.id === projectid\r\n    );\r\n\r\n    if (project) {\r\n        const task = project.tasks.find(\r\n            t => t.id === taskid\r\n        );\r\n\r\n        if (task) {\r\n            task.completed = !task.completed;\r\n        }\r\n    }\r\n}\r\n\r\nfunction setCurrentProject(id){\r\n    currentproject = id;\r\n}\r\n\r\nfunction getCurrentProject(){\r\n    return currentproject;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./projectlist.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;