/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/search */ \"./src/scripts/modules/search.js\");\n\nObject(_modules_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOlsic2VhcmNoIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsK0RBQUFBIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZWFyY2ggZnJvbSAnLi9tb2R1bGVzL3NlYXJjaCc7XG5zZWFyY2goKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ }),

/***/ "./src/scripts/modules/search.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/search.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return search; });\nfunction search() {\n\n    const searchIcon = document.getElementById('open');\n    const menu = document.querySelector('.menu');\n    const searchRow = document.querySelector('.search-row');\n    const closeIcon = document.getElementById('close');\n\n    const searchBtn = document.getElementById('search');\n\n    searchIcon.addEventListener('click', e => {\n        e.preventDefault();\n\n        menu.style.opacity = 0;\n        searchRow.style.opacity = 1;\n\n        menu.addEventListener('transitionend', e => {\n            searchIcon.style.display = 'none';\n            menu.style.display = 'none';\n\n            closeIcon.style.display = 'block';\n            searchRow.style.display = 'flex';\n            searchRow.style.opacity = 1;\n        });\n\n        console.log('Открытие строки...');\n    });\n\n    closeIcon.addEventListener('click', e => {\n        e.preventDefault();\n\n        searchRow.style.opacity = 0;\n        menu.style.opacity = 1;\n\n        searchRow.addEventListener('transitionend', e => {\n            searchRow.style.display = '';\n            searchIcon.style.display = '';\n            menu.style.display = '';\n            closeIcon.style.display = '';\n        });\n\n        console.log('Закрытие строки...');\n    });\n\n    searchBtn.addEventListener('click', e => e.preventDefault());\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3NlYXJjaC5qcz85MTJlIl0sIm5hbWVzIjpbInNlYXJjaCIsInNlYXJjaEljb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hSb3ciLCJjbG9zZUljb24iLCJzZWFyY2hCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJvcGFjaXR5IiwiZGlzcGxheSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQWUsU0FBU0EsTUFBVCxHQUFrQjs7QUFFN0IsVUFBTUMsYUFBYUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFuQjtBQUNBLFVBQU1DLE9BQU9GLFNBQVNHLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLFVBQU1DLFlBQVlKLFNBQVNHLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFDQSxVQUFNRSxZQUFZTCxTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQWxCOztBQUVBLFVBQU1LLFlBQVlOLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBbEI7O0FBRUFGLGVBQVdRLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDQyxLQUFLO0FBQ3RDQSxVQUFFQyxjQUFGOztBQUVBUCxhQUFLUSxLQUFMLENBQVdDLE9BQVgsR0FBcUIsQ0FBckI7QUFDQVAsa0JBQVVNLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLENBQTFCOztBQUVBVCxhQUFLSyxnQkFBTCxDQUFzQixlQUF0QixFQUF1Q0MsS0FBSztBQUN4Q1QsdUJBQVdXLEtBQVgsQ0FBaUJFLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0FWLGlCQUFLUSxLQUFMLENBQVdFLE9BQVgsR0FBcUIsTUFBckI7O0FBRUFQLHNCQUFVSyxLQUFWLENBQWdCRSxPQUFoQixHQUEwQixPQUExQjtBQUNBUixzQkFBVU0sS0FBVixDQUFnQkUsT0FBaEIsR0FBMEIsTUFBMUI7QUFDQVIsc0JBQVVNLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLENBQTFCO0FBRUgsU0FSRDs7QUFVQUUsZ0JBQVFDLEdBQVIsQ0FBWSxvQkFBWjtBQUVILEtBbEJEOztBQW9CQVQsY0FBVUUsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0NDLEtBQUs7QUFDckNBLFVBQUVDLGNBQUY7O0FBRUFMLGtCQUFVTSxLQUFWLENBQWdCQyxPQUFoQixHQUEwQixDQUExQjtBQUNBVCxhQUFLUSxLQUFMLENBQVdDLE9BQVgsR0FBcUIsQ0FBckI7O0FBRUFQLGtCQUFVRyxnQkFBVixDQUEyQixlQUEzQixFQUE0Q0MsS0FBSztBQUM3Q0osc0JBQVVNLEtBQVYsQ0FBZ0JFLE9BQWhCLEdBQTBCLEVBQTFCO0FBQ0FiLHVCQUFXVyxLQUFYLENBQWlCRSxPQUFqQixHQUEyQixFQUEzQjtBQUNBVixpQkFBS1EsS0FBTCxDQUFXRSxPQUFYLEdBQXFCLEVBQXJCO0FBQ0FQLHNCQUFVSyxLQUFWLENBQWdCRSxPQUFoQixHQUEwQixFQUExQjtBQUNILFNBTEQ7O0FBT0FDLGdCQUFRQyxHQUFSLENBQVksb0JBQVo7QUFFSCxLQWZEOztBQWlCQVIsY0FBVUMsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0NDLEtBQUtBLEVBQUVDLGNBQUYsRUFBekM7QUFFSCIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21vZHVsZXMvc2VhcmNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoKCkge1xuXG4gICAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuJyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG4gICAgY29uc3Qgc2VhcmNoUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1yb3cnKTtcbiAgICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UnKTtcblxuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcblxuICAgIHNlYXJjaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIG1lbnUuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHNlYXJjaFJvdy5zdHlsZS5vcGFjaXR5ID0gMTtcblxuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBlID0+IHtcbiAgICAgICAgICAgIHNlYXJjaEljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgc2VhcmNoUm93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBzZWFyY2hSb3cuc3R5bGUub3BhY2l0eSA9IDE7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ9Ce0YLQutGA0YvRgtC40LUg0YHRgtGA0L7QutC4Li4uJyk7XG5cbiAgICB9KTtcblxuICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgc2VhcmNoUm93LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBtZW51LnN0eWxlLm9wYWNpdHkgPSAxO1xuXG4gICAgICAgIHNlYXJjaFJvdy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZSA9PiB7XG4gICAgICAgICAgICBzZWFyY2hSb3cuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgc2VhcmNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCfQl9Cw0LrRgNGL0YLQuNC1INGB0YLRgNC+0LrQuC4uLicpO1xuXG4gICAgfSk7XG5cbiAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/modules/search.js\n");

/***/ })

/******/ });