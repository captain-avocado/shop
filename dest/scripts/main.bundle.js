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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return search; });\nfunction search() {\n\n    const searchIcon = document.getElementById('open');\n    const menu = document.querySelector('.menu');\n    const searchRow = document.querySelector('.search-row');\n    const closeIcon = document.getElementById('close');\n\n    const searchBtn = document.getElementById('search');\n\n    menu.addEventListener('transitionend', e => {\n        if (menu === e.target) {\n            searchIcon.style.display = 'none';\n            menu.style.display = 'none';\n\n            closeIcon.style.display = 'block';\n            searchRow.style.display = 'flex';\n        }\n    });\n\n    searchRow.addEventListener('transitionend', e => {\n        if (searchRow === e.target) {\n            searchRow.style.display = '';\n            searchIcon.style.display = '';\n            menu.style.display = '';\n            closeIcon.style.display = '';\n        }\n    });\n\n    searchIcon.addEventListener('click', e => {\n        e.preventDefault();\n\n        searchRow.style.opacity = 1;\n        menu.style.opacity = 0;\n        closeIcon.style.opacity = 1;\n        searchIcon.style.opacity = 0;\n\n        console.log('Открытие строки...');\n    });\n\n    closeIcon.addEventListener('click', e => {\n        e.preventDefault();\n\n        menu.style.opacity = 1;\n        searchRow.style.opacity = 0;\n        closeIcon.style.opacity = 0;\n        searchIcon.style.opacity = 1;\n\n        console.log('Закрытие строки...');\n    });\n\n    searchBtn.addEventListener('click', e => e.preventDefault());\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3NlYXJjaC5qcz85MTJlIl0sIm5hbWVzIjpbInNlYXJjaCIsInNlYXJjaEljb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hSb3ciLCJjbG9zZUljb24iLCJzZWFyY2hCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInN0eWxlIiwiZGlzcGxheSIsInByZXZlbnREZWZhdWx0Iiwib3BhY2l0eSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQWUsU0FBU0EsTUFBVCxHQUFrQjs7QUFFN0IsVUFBTUMsYUFBYUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFuQjtBQUNBLFVBQU1DLE9BQU9GLFNBQVNHLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLFVBQU1DLFlBQVlKLFNBQVNHLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFDQSxVQUFNRSxZQUFZTCxTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQWxCOztBQUVBLFVBQU1LLFlBQVlOLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBbEI7O0FBRUFDLFNBQUtLLGdCQUFMLENBQXNCLGVBQXRCLEVBQXVDQyxLQUFLO0FBQ3hDLFlBQUlOLFNBQVNNLEVBQUVDLE1BQWYsRUFBdUI7QUFDbkJWLHVCQUFXVyxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixNQUEzQjtBQUNBVCxpQkFBS1EsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLE1BQXJCOztBQUVBTixzQkFBVUssS0FBVixDQUFnQkMsT0FBaEIsR0FBMEIsT0FBMUI7QUFDQVAsc0JBQVVNLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLE1BQTFCO0FBQ0g7QUFDSixLQVJEOztBQVVBUCxjQUFVRyxnQkFBVixDQUEyQixlQUEzQixFQUE0Q0MsS0FBSztBQUM3QyxZQUFJSixjQUFjSSxFQUFFQyxNQUFwQixFQUE0QjtBQUN4Qkwsc0JBQVVNLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLEVBQTFCO0FBQ0FaLHVCQUFXVyxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixFQUEzQjtBQUNBVCxpQkFBS1EsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLEVBQXJCO0FBQ0FOLHNCQUFVSyxLQUFWLENBQWdCQyxPQUFoQixHQUEwQixFQUExQjtBQUNIO0FBQ0osS0FQRDs7QUFTQVosZUFBV1EsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUNDLEtBQUs7QUFDdENBLFVBQUVJLGNBQUY7O0FBRUFSLGtCQUFVTSxLQUFWLENBQWdCRyxPQUFoQixHQUEwQixDQUExQjtBQUNBWCxhQUFLUSxLQUFMLENBQVdHLE9BQVgsR0FBcUIsQ0FBckI7QUFDQVIsa0JBQVVLLEtBQVYsQ0FBZ0JHLE9BQWhCLEdBQTBCLENBQTFCO0FBQ0FkLG1CQUFXVyxLQUFYLENBQWlCRyxPQUFqQixHQUEyQixDQUEzQjs7QUFFQUMsZ0JBQVFDLEdBQVIsQ0FBWSxvQkFBWjtBQUVILEtBVkQ7O0FBWUFWLGNBQVVFLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DQyxLQUFLO0FBQ3JDQSxVQUFFSSxjQUFGOztBQUVBVixhQUFLUSxLQUFMLENBQVdHLE9BQVgsR0FBcUIsQ0FBckI7QUFDQVQsa0JBQVVNLEtBQVYsQ0FBZ0JHLE9BQWhCLEdBQTBCLENBQTFCO0FBQ0FSLGtCQUFVSyxLQUFWLENBQWdCRyxPQUFoQixHQUEwQixDQUExQjtBQUNBZCxtQkFBV1csS0FBWCxDQUFpQkcsT0FBakIsR0FBMkIsQ0FBM0I7O0FBRUFDLGdCQUFRQyxHQUFSLENBQVksb0JBQVo7QUFFSCxLQVZEOztBQVlBVCxjQUFVQyxnQkFBVixDQUEyQixPQUEzQixFQUFvQ0MsS0FBS0EsRUFBRUksY0FBRixFQUF6QztBQUVIIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvbW9kdWxlcy9zZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2goKSB7XG5cbiAgICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4nKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbiAgICBjb25zdCBzZWFyY2hSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJvdycpO1xuICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZScpO1xuXG4gICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZSA9PiB7XG4gICAgICAgIGlmIChtZW51ID09PSBlLnRhcmdldCkge1xuICAgICAgICAgICAgc2VhcmNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBzZWFyY2hSb3cuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2VhcmNoUm93LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBlID0+IHtcbiAgICAgICAgaWYgKHNlYXJjaFJvdyA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAgIHNlYXJjaFJvdy5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICBzZWFyY2hJY29uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgc2VhcmNoUm93LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBtZW51LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBjbG9zZUljb24uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIHNlYXJjaEljb24uc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ9Ce0YLQutGA0YvRgtC40LUg0YHRgtGA0L7QutC4Li4uJyk7XG5cbiAgICB9KTtcblxuICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbWVudS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgc2VhcmNoUm93LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBjbG9zZUljb24uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHNlYXJjaEljb24uc3R5bGUub3BhY2l0eSA9IDE7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ9CX0LDQutGA0YvRgtC40LUg0YHRgtGA0L7QutC4Li4uJyk7XG5cbiAgICB9KTtcblxuICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/modules/search.js\n");

/***/ })

/******/ });