/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _profile_gateway_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/gateway.js */ \"./src/profile/gateway.js\");\n/* harmony import */ var _profile_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/index.js */ \"./src/profile/index.js\");\n// file path: src/index.js\n\n\n\n\n(0,_profile_gateway_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('github').then(userData =>\n  (0,_profile_index_js__WEBPACK_IMPORTED_MODULE_1__.printProfile)({\n    name: userData.name,\n    company: userData.location,\n  }),\n);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRTZDO0FBQ0s7O0FBRWxELCtEQUFTO0FBQ1QsRUFBRSwrREFBWTtBQUNkO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbHcxLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlsZSBwYXRoOiBzcmMvaW5kZXguanNcblxuaW1wb3J0IGZldGNoVXNlciBmcm9tICcuL3Byb2ZpbGUvZ2F0ZXdheS5qcyc7XG5pbXBvcnQgeyBwcmludFByb2ZpbGUgfSBmcm9tICcuL3Byb2ZpbGUvaW5kZXguanMnO1xuXG5mZXRjaFVzZXIoJ2dpdGh1YicpLnRoZW4odXNlckRhdGEgPT5cbiAgcHJpbnRQcm9maWxlKHtcbiAgICBuYW1lOiB1c2VyRGF0YS5uYW1lLFxuICAgIGNvbXBhbnk6IHVzZXJEYXRhLmxvY2F0aW9uLFxuICB9KSxcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/profile/gateway.js":
/*!********************************!*\
  !*** ./src/profile/gateway.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchUser)\n/* harmony export */ });\n// file path: src/profile/gateway.js\n\nasync function fetchUser(userId) {\n  try {\n    const response = await fetch(`https://api.github.com/users/${userId}`);\n    return await response.json();\n  } catch (error) {\n    throw new Error('Failed to get user data');\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9nYXRld2F5LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFZTtBQUNmO0FBQ0EsaUVBQWlFLE9BQU87QUFDeEU7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2x3MS8uL3NyYy9wcm9maWxlL2dhdGV3YXkuanM/YzIzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlIHBhdGg6IHNyYy9wcm9maWxlL2dhdGV3YXkuanNcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyKHVzZXJJZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VySWR9YCk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBnZXQgdXNlciBkYXRhJyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/profile/gateway.js\n");

/***/ }),

/***/ "./src/profile/index.js":
/*!******************************!*\
  !*** ./src/profile/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   printProfile: () => (/* binding */ printProfile)\n/* harmony export */ });\n// file path: src/profile/index.js\n\nconst printProfile = profileData => {\n  const { name, company } = profileData;\n  console.log(`${name} from ${company}`);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRU87QUFDUCxVQUFVLGdCQUFnQjtBQUMxQixpQkFBaUIsTUFBTSxPQUFPLFFBQVE7QUFDdEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbHcxLy4vc3JjL3Byb2ZpbGUvaW5kZXguanM/YTY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlIHBhdGg6IHNyYy9wcm9maWxlL2luZGV4LmpzXG5cbmV4cG9ydCBjb25zdCBwcmludFByb2ZpbGUgPSBwcm9maWxlRGF0YSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgY29tcGFueSB9ID0gcHJvZmlsZURhdGE7XG4gIGNvbnNvbGUubG9nKGAke25hbWV9IGZyb20gJHtjb21wYW55fWApO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/profile/index.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;