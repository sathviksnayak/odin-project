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

/***/ "./about.js"
/*!******************!*\
  !*** ./about.js ***!
  \******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadAbout() {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.innerHTML = \"\";\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"About Us\";\r\n\r\n    const para=document.createElement(\"div\");\r\nconst p1 = document.createElement(\"p\");\r\np1.textContent =\r\n\"Since 2024, Velvet Bloom Café has been a quiet corner for coffee lovers seeking warmth, comfort, and handcrafted flavors.\";\r\n\r\nconst p2 = document.createElement(\"p\");\r\np2.textContent =\r\n\"Every cup is brewed with care, every pastry made fresh, and every visit meant to feel like home.\";\r\n\r\npara.appendChild(p1);\r\npara.appendChild(p2);\r\n\r\n    const footer = document.createElement(\"footer\");\r\n    footer.textContent = \"© 2024 Velvet Bloom Café. All rights reserved.\";\r\n\r\n\r\n    para.classList.add(\"about-para\");\r\n    content.appendChild(heading);\r\n    content.appendChild(para)\r\n    content.appendChild(footer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://restaurantpage/./about.js?\n}");

/***/ },

/***/ "./cart.js"
/*!*****************!*\
  !*** ./cart.js ***!
  \*****************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cart: () => (/* binding */ Cart),\n/* harmony export */   getCart: () => (/* binding */ getCart)\n/* harmony export */ });\nconst orders = new Map([\r\n\r\n [\"o1\",{name:\"Espresso\",price:3.50}],\r\n [\"o2\",{name:\"Latte\",price:4.20}],\r\n [\"o3\",{name:\"Cappuccino\",price:4.50}],\r\n [\"o4\",{name:\"Mocha\",price:4.80}],\r\n [\"o5\",{name:\"Americano\",price:3.80}],\r\n [\"o6\",{name:\"Flat White\",price:4.30}],\r\n [\"o7\",{name:\"English Breakfast Tea\",price:2.90}],\r\n [\"o8\",{name:\"Green Tea\",price:3.20}],\r\n [\"o9\",{name:\"Butter Croissant\",price:3.50}],\r\n [\"o10\",{name:\"Chocolate Muffin\",price:4.10}],\r\n [\"o11\",{name:\"Blueberry Cheesecake\",price:5.40}],\r\n [\"o12\",{name:\"Red Velvet Pastry\",price:4.90}]\r\n\r\n]);\r\n\r\n\r\nlet order = [];\r\nlet cost = 0;\r\n\r\n\r\nfunction Cart(itemid){\r\n\r\n    let item = orders.get(itemid);\r\n\r\n    order.push(item);\r\n\r\n    cost += item.price;\r\n\r\n    console.log(order);\r\n\r\n    console.log(\"Total =\", cost);\r\n\r\n}\r\nfunction getCart(){\r\n\r\n    return {\r\n        items: order,\r\n        total: cost\r\n    };\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./cart.js?\n}");

/***/ },

/***/ "./exit.js"
/*!*****************!*\
  !*** ./exit.js ***!
  \*****************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./cart.js\");\n\r\nfunction ExitCafe(){\r\n\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\";\r\n\r\n    const bill = document.createElement(\"div\");\r\n    const data = (0,_cart__WEBPACK_IMPORTED_MODULE_0__.getCart)();\r\n\r\n    bill.innerHTML = `\r\n        <h2>Your Order Summary ☕</h2>\r\n\r\n        ${data.items.map((item)=>{\r\n\r\n            return `<p>${item.name} ........ £${item.price}</p>`\r\n\r\n        }).join(\"\")}\r\n\r\n        <hr>\r\n\r\n        <h3>Total : £${data.total}</h3>\r\n\r\n        <button id=\"pay\">PAY NOW</button>\r\n    `;\r\n\r\n    bill.classList.add(\"card\");\r\n\r\n\r\n        const footer = document.createElement(\"footer\");\r\n    footer.textContent = \"© 2024 Velvet Bloom Café. All rights reserved.\";\r\n\r\n\r\n    content.appendChild(bill);     \r\n    content.appendChild(footer);\r\n    const pay = document.getElementById(\"pay\");\r\n\r\n    pay.addEventListener(\"click\", leave);  \r\n}\r\nfunction leave(){\r\n\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.innerHTML = \"\";\r\n\r\n    const greet = document.createElement(\"div\");\r\n\r\n    greet.innerHTML = `\r\n        <h2>Thank you for visiting Velvet Bloom Café ☕</h2>\r\n\r\n        <p>We hope every sip made your day a little warmer.</p>\r\n\r\n        <p>See you again soon.</p>\r\n    `;\r\n\r\n    greet.classList.add(\"card\");\r\n\r\n            const footer = document.createElement(\"footer\");\r\n    footer.textContent = \"© 2024 Velvet Bloom Café. All rights reserved.\";\r\n    content.appendChild(greet);  \r\n     content.appendChild(footer);\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExitCafe);\n\n//# sourceURL=webpack://restaurantpage/./exit.js?\n}");

/***/ },

/***/ "./home.js"
/*!*****************!*\
  !*** ./home.js ***!
  \*****************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction loadHome() {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.innerHTML = \"\";\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Welcome to the Velvet Bloom Café\";\r\n\r\n    const para = document.createElement(\"p\");\r\n    para.textContent = \"where every cup uncovers a world of flavor and warmth\";\r\n    \r\n    const titlecard=document.createElement(\"div\");\r\n    titlecard.innerHTML=`\r\n    <h2>opening time</h2>\r\n    <p><strong> weekdays : </strong> 7:00am - 9:00pm </p>\r\n    <p><strong> weekends : </strong> 7:00am - 10:00pm </p>\r\n    `;\r\n    titlecard.classList.add(\"card\");\r\n\r\n    const footer = document.createElement(\"footer\");\r\n    footer.textContent = \"© 2024 Velvet Bloom Café. All rights reserved.\";\r\n\r\n    \r\n    content.appendChild(heading);\r\n    content.appendChild(para);\r\n    content.appendChild(titlecard)\r\n    content.appendChild(footer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurantpage/./home.js?\n}");

/***/ },

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./about.js\");\n/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exit */ \"./exit.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();  \r\n\r\n\r\ndocument.getElementById(\"home-btn\").addEventListener(\"click\", () => {\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\ndocument.getElementById(\"menu-btn\").addEventListener(\"click\", () => {\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\r\ndocument.getElementById(\"about-btn\").addEventListener(\"click\", () => {\r\n    (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\r\ndocument.getElementById(\"exit-btn\").addEventListener(\"click\", () => {\r\n   (0,_exit__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n});\r\nconsole.log(\"WEBPACK WORKING\");\n\n//# sourceURL=webpack://restaurantpage/./index.js?\n}");

/***/ },

/***/ "./menu.js"
/*!*****************!*\
  !*** ./menu.js ***!
  \*****************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./cart.js\");\n\r\nfunction loadMenu() {\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\";\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"The Velvet Blooom Café Menu\";\r\n\r\n    const categoryContainer = document.createElement(\"div\");\r\n    categoryContainer.classList.add(\"categories\");\r\n\r\n    const display = document.createElement(\"div\");\r\n    display.classList.add(\"menu-display\");\r\n\r\n\r\n    // Buttons\r\n    const coffeeBtn = document.createElement(\"button\");\r\n    coffeeBtn.textContent = \"Coffee\";\r\n   \r\n    const cakeBtn = document.createElement(\"button\");\r\n    cakeBtn.textContent = \"Cakes\";\r\n   \r\n    const pastryBtn = document.createElement(\"button\");\r\n    pastryBtn.textContent = \"Pastries\";\r\n    \r\n    display.innerHTML = `\r\n   <h2>☕ Today's Selection</h2>\r\n\r\n   <p>Freshly brewed coffee made daily</p>\r\n   <p>Handcrafted cakes & pastries</p>\r\n   <p>Locally sourced ingredients</p>\r\n\r\n   <br>\r\n\r\n   <em>Select a category above</em>\r\n`;\r\n    // Coffee popup\r\n    coffeeBtn.addEventListener(\"click\", () => {\r\n        display.innerHTML = `\r\n            <h2>Coffee Selection ☕</h2>\r\n            <p>Espresso ........ £3.50<button class=\"order-btn\" id=\"o1\">add</button></p>\r\n            <p>Latte ........... £4.20<button class=\"order-btn\" id=\"o2\">add</button></p>\r\n            <p>Cappuccino ...... £4.50<button class=\"order-btn\" id=\"o3\">add</button></p>\r\n            <p>Mocha ........... £4.80<button class=\"order-btn\" id=\"o4\">add</button></p>\r\n        `;\r\n    });\r\n\r\n\r\n    // Cakes popup\r\n    cakeBtn.addEventListener(\"click\", () => {\r\n        display.innerHTML = `\r\n            <h2>Cakes 🍰</h2>\r\n            <p>Red Velvet ........ £5.50<button  class=\"order-btn\" id=\"o5\">add</button></p>\r\n            <p>Chocolate Fudge ... £6.00<button  class=\"order-btn\" id=\"o6\">add</button></p>\r\n            <p>Cheesecake ........ £5.80<button class=\"order-btn\" id=\"o7\">add</button></p>\r\n            <p>Carrot Cake ....... £5.20<button class=\"order-btn\" id=\"o8\">add</button></p>\r\n        `;\r\n    });\r\n\r\n\r\n    // Pastries popup\r\n    pastryBtn.addEventListener(\"click\", () => {\r\n        display.innerHTML = `\r\n            <h2>Pastries 🥐</h2>\r\n            <p>Croissant ......... £3.20<button class=\"order-btn\" id=\"o9\">add</button></p>\r\n            <p>Pain au Chocolat .. £3.80<button class=\"order-btn\" id=\"o10\">add</button></p>\r\n            <p>Blueberry Danish .. £4.10<button class=\"order-btn\" id=\"o11\">add</button></p>\r\n            <p>Cinnamon Roll ..... £4.50<button class=\"order-btn\" id=\"o12\">add</button></p>\r\n        `;\r\n    });\r\n\r\n    const footer = document.createElement(\"footer\");\r\n    footer.textContent = \"© 2024 Velvet Bloom Café. All rights reserved.\";\r\n    categoryContainer.appendChild(coffeeBtn);\r\n    categoryContainer.appendChild(cakeBtn);\r\n    categoryContainer.appendChild(pastryBtn);\r\n\r\n    content.appendChild(heading);\r\n    content.appendChild(categoryContainer);\r\n    content.appendChild(display);\r\n    content.appendChild(footer);\r\n\r\n\r\n\r\n    display.addEventListener(\"click\", (e)=>{\r\n\r\n    if(e.target.classList.contains(\"order-btn\")){\r\n\r\n        let id = e.target.id;\r\n\r\n        (0,_cart__WEBPACK_IMPORTED_MODULE_0__.Cart)(id)\r\n    }\r\n\r\n});\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurantpage/./menu.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css"
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./cafe.jpg */ \"./cafe.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ================= BODY ================= */\r\n\r\nbody{\r\n    margin:0;\r\n    min-height:100vh;\r\n\r\n    display:flex;\r\n    flex-direction:column;\r\n\r\n    background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size:cover;\r\n    background-position:center;\r\n    background-repeat:no-repeat;\r\n\r\n    position:relative;\r\n\r\n    font-family: Georgia, serif;\r\n}\r\n\r\n\r\n/* ================= OVERLAY ================= */\r\n\r\nbody::before{\r\n    content:\"\";\r\n    position:fixed;\r\n    inset:0;\r\n\r\n    /* lighter overlay so image survives */\r\n    background:rgba(255,255,255,0.15);\r\n\r\n    z-index:-1;\r\n}\r\n\r\n\r\n/* ================= MAIN CONTENT ================= */\r\n\r\n#content{\r\n    flex:1;\r\n    text-align:center;\r\n    margin-top:30px;\r\n}\r\n\r\n\r\n/* ================= TITLES ================= */\r\n\r\nh1{\r\n    font-size:58px;\r\n\r\n    color:#3b2a1f;       /* dark brown */\r\n\r\n    text-shadow:1px 1px 4px rgba(255,255,255,0.2);\r\n\r\n    margin-bottom:20px;\r\n}\r\n\r\nh2{\r\n    color:#2f2018;\r\n\r\n    font-size:32px;\r\n\r\n    margin-bottom:20px;\r\n}\r\n\r\np{\r\n    color:#2a1c14;\r\n\r\n    font-size:20px;\r\n\r\n    line-height:1.6;\r\n}\r\n\r\n\r\n/* ================= HEADER ================= */\r\n\r\nheader{\r\n    display:flex;\r\n    justify-content:center;\r\n    gap:40px;\r\n\r\n    padding-top:20px;\r\n}\r\n\r\n\r\n/* ================= NAV ================= */\r\n\r\nnav{\r\n    display:flex;\r\n    gap:25px;\r\n}\r\n\r\n\r\n/* ================= BUTTONS ================= */\r\n\r\nbutton{\r\n    padding:12px 20px;\r\n\r\n    margin:10px;\r\n\r\n    border:none;\r\n\r\n    background:#5c4033;\r\n\r\n    color:#f8f1e8;\r\n\r\n    border-radius:8px;\r\n\r\n    cursor:pointer;\r\n\r\n    transition:all 0.3s ease;\r\n}\r\n\r\nbutton:hover{\r\n    transform:scale(1.04);\r\n\r\n    background:#6f4c3d;\r\n}\r\n\r\n\r\n/* ================= CATEGORY ================= */\r\n\r\n.categories{\r\n    margin:25px;\r\n}\r\n\r\n\r\n/* ================= GENERAL CARD ================= */\r\n\r\n.card{\r\n    width:420px;\r\n\r\n    margin:50px auto;\r\n\r\n    padding:30px;\r\n\r\n    text-align:center;\r\n\r\n    background:rgba(255,248,240,0.55);\r\n\r\n    backdrop-filter:blur(10px);\r\n\r\n    border:1px solid rgba(120,90,70,0.2);\r\n\r\n    border-radius:20px;\r\n\r\n    color:#2f2018;\r\n\r\n    transition:all 0.35s ease;\r\n}\r\n\r\n.card:hover{\r\n    transform:scale(1.02);\r\n\r\n    box-shadow:0 8px 18px rgba(0,0,0,0.12);\r\n}\r\n\r\n\r\n/* ================= MENU DISPLAY ================= */\r\n\r\n.menu-display{\r\n    width:460px;\r\n\r\n    margin:auto;\r\n\r\n    padding:25px;\r\n\r\n    background:rgba(255,248,240,0.65);\r\n\r\n    backdrop-filter:blur(10px);\r\n\r\n    border-radius:16px;\r\n\r\n    color:#2f2018;\r\n\r\n    border:1px solid rgba(120,90,70,0.15);\r\n}\r\n\r\n\r\n/* ================= ABOUT SECTION ================= */\r\n\r\n.about-para{\r\n    width:60%;\r\n\r\n    margin:auto;\r\n\r\n    padding:25px;\r\n\r\n    font-size:18px;\r\n\r\n    line-height:1.8;\r\n\r\n    background:rgba(255,248,240,0.72);\r\n\r\n    border-radius:15px;\r\n\r\n    color:#2f2018;\r\n\r\n    border:1px solid rgba(120,90,70,0.2);\r\n}\r\n\r\n\r\n/* ================= FOOTER ================= */\r\n\r\nfooter{\r\n    position: fixed;\r\n\r\n    bottom: 15px;\r\n\r\n    left: 50%;\r\n\r\n    transform: translateX(-50%);\r\n\r\n    padding: 8px 20px;\r\n\r\n    border-radius: 12px;\r\n\r\n   \r\n\r\n    background: rgba(50,35,25,0.65);\r\n\r\n    color: #f3d8b6;\r\n\r\n    backdrop-filter: blur(8px);\r\n    bottom: 8px;\r\nopacity: 0.85;\r\nfont-size: 12px;\r\n}\r\n\r\n\r\n/* ================= RECEIPT/BILL PAGE ================= */\r\n\r\n.bill-card{\r\n    width:450px;\r\n\r\n    margin:60px auto;\r\n\r\n    padding:25px;\r\n\r\n    background:rgba(255,248,240,0.72);\r\n\r\n    backdrop-filter:blur(10px);\r\n\r\n    border-radius:18px;\r\n\r\n    color:#2f2018;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./style.css"
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./cafe.jpg"
/*!******************!*\
  !*** ./cafe.jpg ***!
  \******************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b229c1197862d4767be8.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./cafe.jpg?\n}");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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