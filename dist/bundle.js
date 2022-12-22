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

/***/ "./src/dispatcher.js":
/*!***************************!*\
  !*** ./src/dispatcher.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Dispatcher {\r\n  constructor(apiKey, objConfig = {}) {\r\n    if (typeof apiKey === \"string\") {\r\n      if (\r\n        !(\r\n          typeof objConfig === \"object\" &&\r\n          objConfig !== null &&\r\n          !Array.isArray(objConfig)\r\n        )\r\n      ) {\r\n        console.error(\"second parameter must me a object,configuration failed\");\r\n        objConfig = {};\r\n      }\r\n      this.config({ apiKey: apiKey, ...objConfig });\r\n    } else if (\r\n      typeof apiKey === \"object\" &&\r\n      apiKey !== null &&\r\n      !Array.isArray(apiKey)\r\n    ) {\r\n      this.config(apiKey);\r\n    } else {\r\n      throw new Error(\"missed apikey parameter\");\r\n    }\r\n  }\r\n  /**\r\n   * Variables\r\n   */\r\n  defaultUrl = \"\";\r\n  params = \"\";\r\n\r\n  /**\r\n   * Methods\r\n   */\r\n  setKey(key) {\r\n    if (!key) {\r\n      throw new Error(\"missed paramete for setting apikey\");\r\n    }\r\n\r\n    this.config({ apiKey: key });\r\n  }\r\n\r\n  /**\r\n   *\r\n   * @returns object\r\n   */\r\n  async search(obj) {\r\n    this.searchConfig({ ...this.defaultConfig, ...obj });\r\n\r\n    let finalUrl = (this.defaultUrl += this.params);\r\n\r\n    const res = await fetch(finalUrl);\r\n    const finalResult = {};\r\n    finalResult.result = res.ok;\r\n    finalResult.data = await res.json();\r\n    this.params = \"\";\r\n\r\n    return finalResult;\r\n  }\r\n  defaultConfig = {};\r\n\r\n  config(obj) {\r\n    for (const keyValue of Object.entries(obj)) {\r\n      this.defaultConfig[keyValue[0]] = keyValue[1];\r\n    }\r\n  }\r\n  searchConfig(obj) {\r\n    for (const keyValue of Object.entries(obj)) {\r\n      this.attachUrlParams(keyValue);\r\n    }\r\n    // console.log(this.rules());\r\n  }\r\n\r\n  attachUrlParams(keyValue) {\r\n    const [key, val] = keyValue;\r\n    let haveThisRule = false;\r\n    this.getRules().forEach((element) => {\r\n      if (element[0] === key) {\r\n        this.params += element[1] + val;\r\n        haveThisRule = true;\r\n      }\r\n    });\r\n    if (!haveThisRule) {\r\n      console.error(key + \"  not exist\");\r\n    }\r\n  }\r\n\r\n  #defaultRules = [\r\n    [\"apiKey\", \"appid\"],\r\n    [\"city\", \"q\"],\r\n    [\"language\", \"lang\"],\r\n    [\"mode\", \"mode\"],\r\n    [\"units\", \"units\"],\r\n  ];\r\n\r\n  rules = [];\r\n\r\n  ///creare funzione per filtrare le nuove rules\r\n  getRules() {\r\n    return [\r\n      ...this.filterRules(this.#defaultRules),\r\n      ...this.filterRules(this.rules),\r\n    ];\r\n  }\r\n\r\n  filterRules(arr) {\r\n    const copyArr = JSON.parse(JSON.stringify(arr));\r\n    copyArr.forEach((el) => {\r\n      el[1].trim();\r\n      el[1] = `&${el[1]}=`;\r\n    });\r\n\r\n    return copyArr;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dispatcher);\r\n\n\n//# sourceURL=webpack://weather/./src/dispatcher.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherDispatcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDispatcher.js */ \"./src/weatherDispatcher.js\");\n/* harmony import */ var _searchCities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchCities.js */ \"./src/searchCities.js\");\n\r\n\r\n\r\nfunction search(apiKey, objConfig) {\r\n  if (!apiKey) {\r\n    throw new Error(\"missed paramete for setting apikey\");\r\n  }\r\n  return {\r\n    weatherDispatcher: new _weatherDispatcher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](apiKey, objConfig),\r\n    searchCities: new _searchCities_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](apiKey, objConfig),\r\n  };\r\n}\r\nwindow.search = search;\r\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/searchCities.js":
/*!*****************************!*\
  !*** ./src/searchCities.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dispatcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher.js */ \"./src/dispatcher.js\");\n\r\nclass SearchCities extends _dispatcher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  defaultUrl = `http://api.openweathermap.org/geo/1.0/direct?limit=5`;\r\n  rules = [[\"limit\", \"limit\"]];\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchCities);\r\n\n\n//# sourceURL=webpack://weather/./src/searchCities.js?");

/***/ }),

/***/ "./src/weatherDispatcher.js":
/*!**********************************!*\
  !*** ./src/weatherDispatcher.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dispatcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher.js */ \"./src/dispatcher.js\");\n\r\nclass WeatherDispatcher extends _dispatcher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  defaultUrl = `https://api.openweathermap.org/data/2.5/weather?`;\r\n  rules = [\r\n    [\"latitude\", \"lat\"],\r\n    [\"longitude\", \"lon\"],\r\n  ];\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherDispatcher);\r\n\n\n//# sourceURL=webpack://weather/./src/weatherDispatcher.js?");

/***/ })

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;