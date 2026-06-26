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

/***/ "./gameboard.js"
/*!**********************!*\
  !*** ./gameboard.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./ship.js\");\n\r\n\r\nclass Gameboard {\r\n  constructor() {\r\n  \r\n\r\n    this.Shots = new Set();\r\n    this.ships = new Map();\r\n    this.shipList = [];\r\n  }\r\n\r\nplaceShip(ship, x, y, horizontal) {\r\n     this.shipList.push(ship);\r\n  for(let i=0;i<ship.length;i++){\r\n\r\n    let row = horizontal ? x : x+i;\r\n    let col = horizontal ? y+i : y;\r\n\r\n    let key = `${row},${col}`;\r\n\r\n    this.ships.set(key, ship);\r\n   \r\n  }\r\n}\r\n\r\nreceiveAttack(x,y){\r\n\r\n   let key = `${x},${y}`;\r\n\r\n   if(this.Shots.has(key)) return;\r\n\r\n   this.Shots.add(key);\r\n\r\n   if(this.ships.has(key)){\r\n      let ship = this.ships.get(key);\r\n      ship.hit();\r\n\r\n      if(ship.isSunk()){\r\n         console.log(\"ship sunk\");\r\n      }\r\n\r\n      return true;  \r\n   }\r\n\r\n   return false;   \r\n}\r\n\r\n  allShipsSunk() {\r\n    return this.shipList.every(ship => ship.isSunk());\r\n  }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./gameboard.js?\n}");

/***/ },

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./ship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./player.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./styles.css\");\n\r\n\r\n\r\n\r\nconst playerBoardEl = document.getElementById('playerbase');\r\nconst computerBoardEl = document.getElementById('compbase');\r\nconst startBtn = document.getElementById('start');\r\nconst statusEl = document.getElementById('status');\r\n\r\nlet player, computer, gameOver = false;\r\nlet playerTurn=true;\r\nfunction renderBoard(board, element, isPlayer = false) {\r\n  element.innerHTML = \"\";\r\n\r\n  for (let i = 0; i < 10; i++) {\r\n    for (let j = 0; j < 10; j++) {\r\n      const div = document.createElement(\"div\");\r\n      div.classList.add(\"cell\");\r\n      div.dataset.row = i;\r\n      div.dataset.col = j;\r\n\r\n      const key = `${i},${j}`;\r\n\r\n      if (isPlayer && board.ships.has(key)) {\r\n        div.classList.add(\"ship\");\r\n      }\r\n\r\n      if (board.Shots.has(key)) {\r\n        div.classList.add(board.ships.has(key) ? \"hit\" : \"miss\");\r\n      }\r\n\r\n      element.appendChild(div);\r\n    }\r\n  }\r\n}\r\n\r\nfunction canPlaceShip(board, length, x, y, horizontal) {\r\n  for (let i = 0; i < length; i++) {\r\n    const row = horizontal ? x : x + i;\r\n    const col = horizontal ? y + i : y;\r\n    if (row < 0 || row >= 10 || col < 0 || col >= 10 || board.ships.has(`${row},${col}`)) {\r\n      return false;\r\n    }\r\n  }\r\n  return true;\r\n}\r\n\r\nfunction placeShipsRandomly(board) {\r\n  const shipLengths = [5, 4, 3, 3, 2];\r\n  for (let len of shipLengths) {\r\n    let placed = false;\r\n    while (!placed) {\r\n      const x = Math.floor(Math.random() * 10);\r\n      const y = Math.floor(Math.random() * 10);\r\n      const horizontal = Math.random() > 0.5;\r\n\r\n      if (canPlaceShip(board, len, x, y, horizontal)) {\r\n        const ship = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](len);\r\n        board.placeShip(ship, x, y, horizontal);\r\n        placed = true;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction handlePlayerAttack(e) {\r\n  if (gameOver || !player || !computer || !playerTurn) return;\r\n\r\n  if (!e.target.classList.contains(\"cell\")) return;\r\n\r\n  const row = parseInt(e.target.dataset.row);\r\n  const col = parseInt(e.target.dataset.col);\r\n\r\n  let key = `${row},${col}`;\r\n\r\n  if (computer.board.Shots.has(key)) return;\r\n\r\n  playerTurn = false;\r\n\r\n  player.attack(computer.board, row, col);\r\n\r\n  renderBoard(computer.board, computerBoardEl);\r\n\r\n  if (computer.board.allShipsSunk()) {\r\n    gameOver = true;\r\n    startBtn.disabled = false;\r\n   statusEl.textContent = \"MISSION SUCCESS\";\r\n    return;\r\n  }\r\n\r\n  setTimeout(() => {\r\n    computer.computerMove(player.board);\r\n\r\n    renderBoard(player.board, playerBoardEl, true);\r\n\r\n    if (player.board.allShipsSunk()) {\r\n        startBtn.disabled = false;\r\n      gameOver = true;\r\n      statusEl.textContent = \"VESSEL DESTROYED\";\r\n    } else {\r\n      playerTurn = true;\r\n    }\r\n  }, 700);\r\n}\r\ncomputerBoardEl.addEventListener(\"click\", handlePlayerAttack);\r\nfunction startGame() {\r\n  player = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](false);\r\n  computer = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](true);\r\nplayerTurn = true;\r\n  placeShipsRandomly(player.board);\r\n  placeShipsRandomly(computer.board);\r\n\r\n  renderBoard(player.board, playerBoardEl, true);\r\n  renderBoard(computer.board, computerBoardEl);\r\n\r\n\r\n  gameOver = false;\r\n  statusEl.textContent = \"Game started! Click on the red board to attack.\";\r\n  startBtn.disabled = true;\r\n}\r\n\r\nstartBtn.addEventListener('click', startGame);\n\n//# sourceURL=webpack://battleship/./index.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./styles.css"
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \**********************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto+Mono:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    background:\r\n      repeating-linear-gradient(\r\n        45deg,\r\n        rgba(0,255,157,0.025) 0px,\r\n        rgba(0,255,157,0.025) 12px,\r\n        transparent 12px,\r\n        transparent 24px\r\n      ),\r\n      linear-gradient(#0a0e14, #1a2533);\r\n\r\n    color: #00ff9d;\r\n    font-family: 'Roboto Mono', monospace;\r\n    text-align: center;\r\n    overflow-y: auto;\r\n}\r\n        header {\r\n            background: rgba(0, 20, 40, 0.95);\r\n            padding: 15px;\r\n            border-bottom: 3px solid #00ff9d;\r\n            box-shadow: 0 0 15px rgba(0, 255, 157, 0.3);\r\n        }\r\n\r\n        h1 {\r\n            font-family: 'Orbitron', sans-serif;\r\n            margin: 0;\r\n            font-size: 2.8rem;\r\n            letter-spacing: 6px;\r\n            text-transform: uppercase;\r\n            color: #00ff9d;\r\n            text-shadow: 0 0 10px #00ff9d;\r\n        }\r\n\r\n        #content {\r\n            display: flex;\r\n            justify-content: center;\r\n            gap: 60px;\r\n            margin: 30px auto;\r\n            flex-wrap: wrap;\r\n        }\r\n\r\n        .board-container {\r\n            background: rgba(0, 15, 30, 0.9);\r\n            padding: 15px;\r\n            border: 3px solid #334455;\r\n            border-radius: 8px;\r\n            box-shadow: 0 0 25px rgba(0, 100, 200, 0.4);\r\n        }\r\n\r\n        h2 {\r\n            font-family: 'Orbitron', sans-serif;\r\n            color: #00b0ff;\r\n            margin-bottom: 10px;\r\n            letter-spacing: 3px;\r\n        }\r\n\r\n        .board { \r\n            display: grid; \r\n            grid-template-columns: repeat(10, 38px); \r\n            grid-template-rows: repeat(10, 38px); \r\n            gap: 3px; \r\n            background: #000;\r\n            padding: 8px;\r\n            border: 4px solid #112233;\r\n            box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8);\r\n        }\r\n\r\n        .cell { \r\n            width: 38px; \r\n            height: 38px; \r\n            background: radial-gradient(circle, #1a2a3a, #0d1b26);\r\n            border: 1px solid #223344;\r\n            display: flex; \r\n            align-items: center; \r\n            justify-content: center; \r\n            font-size: 16px;\r\n            font-weight: bold;\r\n            cursor: pointer;\r\n            transition: all 0.2s;\r\n            position: relative;\r\n        }\r\n\r\n        .cell:hover {\r\n            filter: brightness(1.3);\r\n            box-shadow: 0 0 8px #00ff9d;\r\n        }\r\n\r\n        /* Ships - Steel Hull */\r\n        .ship { \r\n            background: linear-gradient(145deg, #555555, #333333) !important;\r\n            box-shadow: inset 0 0 8px #888;\r\n        }\r\n\r\n        /* Hit - Explosive Red */\r\n        .hit { \r\n            background: radial-gradient(circle, #ff2222, #8b0000) !important;\r\n            box-shadow: 0 0 12px #ff0000;\r\n            animation: explosion 0.6s;\r\n        }\r\n\r\n        /* Miss - Sonar Ping */\r\n        .miss { \r\n            background: radial-gradient(circle, #aaccff, #334455) !important;\r\n            color: #88aaff;\r\n        }\r\n\r\n        #playerbase { border-color: #00ff9d; }\r\n        #compbase { border-color: #ff3333; }\r\n\r\n        button {\r\n            background: #001122;\r\n            color: #00ff9d;\r\n            border: 2px solid #00ff9d;\r\n            padding: 14px 32px;\r\n            font-size: 1.1rem;\r\n            font-family: 'Orbitron', sans-serif;\r\n            text-transform: uppercase;\r\n            letter-spacing: 3px;\r\n            cursor: pointer;\r\n            transition: all 0.3s;\r\n            margin: 20px;\r\n            box-shadow: 0 0 15px rgba(0, 255, 157, 0.5);\r\n        }\r\n\r\n        button:hover {\r\n            background: #003322;\r\n            box-shadow: 0 0 25px #00ff9d;\r\n            transform: scale(1.05);\r\n        }\r\n\r\n        button:disabled {\r\n            opacity: 0.4;\r\n            cursor: not-allowed;\r\n        }\r\n\r\n#status {\r\n    width: fit-content;\r\n    margin: 20px auto 40px auto;\r\n\r\n    padding: 8px 22px;\r\n\r\n    font-size: 1.1rem;\r\n\r\n    background: rgba(0,255,157,0.08);\r\n\r\n    border: 1px solid rgba(0,255,157,0.2);\r\n\r\n    border-radius: 8px;\r\n\r\n    box-shadow: none;\r\n}\r\n\r\n        .win { color: #00ff9d; }\r\n        .lose { color: #ff3333; }\r\n\r\n\r\n \r\n        #game-area {\r\n    position: relative;\r\n    width: fit-content;\r\n    margin: auto;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./styles.css"
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./player.js"
/*!*******************!*\
  !*** ./player.js ***!
  \*******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./gameboard.js\");\n\r\n\r\n\r\nclass Player {\r\n  constructor(isComputer = false) {\r\n    this.isComputer = isComputer;\r\n    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.moves = new Set();\r\n\r\n    for (let i = 0; i < 10; i++) {\r\n      for (let j = 0; j < 10; j++) {\r\n        this.moves.add(`${i},${j}`);\r\n      }\r\n    }\r\n  }\r\n\r\n  attack(enemyBoard, x, y) {\r\n   \r\n\r\n      enemyBoard.receiveAttack(x, y);\r\n      \r\n    \r\n  }\r\n\r\n  computerMove(enemyBoard) {\r\n    let arr = [...this.moves];\r\n\r\n    let randomMove =\r\n      arr[Math.floor(Math.random() * arr.length)];\r\n        this.moves.delete(randomMove);\r\n    let [x, y] = randomMove.split(\",\");\r\n\r\n    this.attack(enemyBoard, Number(x), Number(y));\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./player.js?\n}");

/***/ },

/***/ "./ship.js"
/*!*****************!*\
  !*** ./ship.js ***!
  \*****************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.hits = 0;\r\n  }\r\n\r\n  hit() {\r\n    this.hits++;\r\n  }\r\n\r\n  isSunk() {\r\n    return this.hits >= this.length;\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./ship.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
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
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
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
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;