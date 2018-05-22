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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/search */ \"./src/scripts/modules/search.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/scripts/modules/slider.js\");\n/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/nav */ \"./src/scripts/modules/nav.js\");\n\n\n\n\nObject(_modules_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_modules_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOlsic2VhcmNoIiwic2xpZGVyIiwibmF2Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLCtEQUFBQTtBQUNBLCtEQUFBQztBQUNBLDREQUFBQyIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VhcmNoIGZyb20gJy4vbW9kdWxlcy9zZWFyY2gnO1xuaW1wb3J0IHNsaWRlciBmcm9tICcuL21vZHVsZXMvc2xpZGVyJztcbmltcG9ydCBuYXYgZnJvbSAnLi9tb2R1bGVzL25hdic7XG5cbnNlYXJjaCgpO1xuc2xpZGVyKCk7XG5uYXYoKTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ }),

/***/ "./src/scripts/modules/nav.js":
/*!************************************!*\
  !*** ./src/scripts/modules/nav.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return nav; });\nfunction nav() {\n\n    document.addEventListener('scroll', e => {\n\n        const navBar = document.querySelector('.nav');\n        const menuLinks = document.querySelectorAll('.menu__link');\n        const openSearchIcon = document.getElementById('open');\n\n        // const fixedNavBar = navBar.cloneNode(true);\n        // fixedNavBar.classList.add('scrolled');\n        // const wrapper = document.querySelector('.wrapper');\n\n        const cart = document.querySelector('#nav-cart');\n\n        if (window.scrollY > 127.5 + 70) {\n\n            // wrapper.insertBefore(fixedNavBar, navBar);\n\n            navBar.classList.add('scrolled');\n            openSearchIcon.classList.add('scrolled');\n            cart.classList.add('scrolled');\n            for (let i = 0; i < menuLinks.length; i++) {\n                menuLinks[i].classList.add('scrolled');\n            }\n        } else {\n\n            // document.remove(fixedNavBar);\n            // wrapper.removeChild(fixedNavBar);\n\n            navBar.classList.remove('scrolled');\n            openSearchIcon.classList.remove('scrolled');\n            cart.classList.remove('scrolled');\n            for (let i = 0; i < menuLinks.length; i++) {\n                menuLinks[i].classList.remove('scrolled');\n            }\n        }\n    });\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL25hdi5qcz9jMjFhIl0sIm5hbWVzIjpbIm5hdiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJuYXZCYXIiLCJxdWVyeVNlbGVjdG9yIiwibWVudUxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsIm9wZW5TZWFyY2hJY29uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjYXJ0Iiwid2luZG93Iiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsImkiLCJsZW5ndGgiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O0FBQWUsU0FBU0EsR0FBVCxHQUFlOztBQUUxQkMsYUFBU0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NDLEtBQUs7O0FBRXJDLGNBQU1DLFNBQVNILFNBQVNJLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBZjtBQUNBLGNBQU1DLFlBQVlMLFNBQVNNLGdCQUFULENBQTBCLGFBQTFCLENBQWxCO0FBQ0EsY0FBTUMsaUJBQWlCUCxTQUFTUSxjQUFULENBQXdCLE1BQXhCLENBQXZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFNQyxPQUFPVCxTQUFTSSxhQUFULENBQXVCLFdBQXZCLENBQWI7O0FBRUEsWUFBSU0sT0FBT0MsT0FBUCxHQUFpQixRQUFRLEVBQTdCLEVBQWlDOztBQUU3Qjs7QUFFQVIsbUJBQU9TLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQXJCO0FBQ0FOLDJCQUFlSyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixVQUE3QjtBQUNBSixpQkFBS0csU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQW5CO0FBQ0EsaUJBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJVCxVQUFVVSxNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDdkNULDBCQUFVUyxDQUFWLEVBQWFGLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFVBQTNCO0FBQ0g7QUFDSixTQVZELE1BVU87O0FBRUg7QUFDQTs7QUFFQVYsbUJBQU9TLFNBQVAsQ0FBaUJJLE1BQWpCLENBQXdCLFVBQXhCO0FBQ0FULDJCQUFlSyxTQUFmLENBQXlCSSxNQUF6QixDQUFnQyxVQUFoQztBQUNBUCxpQkFBS0csU0FBTCxDQUFlSSxNQUFmLENBQXNCLFVBQXRCO0FBQ0EsaUJBQUssSUFBSUYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJVCxVQUFVVSxNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDdkNULDBCQUFVUyxDQUFWLEVBQWFGLFNBQWIsQ0FBdUJJLE1BQXZCLENBQThCLFVBQTlCO0FBQ0g7QUFDSjtBQUNKLEtBbENEO0FBb0NIIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvbW9kdWxlcy9uYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXYoKSB7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBlID0+IHtcblxuICAgICAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Jyk7XG4gICAgICAgIGNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19saW5rJyk7XG4gICAgICAgIGNvbnN0IG9wZW5TZWFyY2hJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4nKTtcblxuICAgICAgICAvLyBjb25zdCBmaXhlZE5hdkJhciA9IG5hdkJhci5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIC8vIGZpeGVkTmF2QmFyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XG4gICAgICAgIC8vIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuXG4gICAgICAgIGNvbnN0IGNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWNhcnQnKTtcblxuICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMjcuNSArIDcwKSB7XG5cbiAgICAgICAgICAgIC8vIHdyYXBwZXIuaW5zZXJ0QmVmb3JlKGZpeGVkTmF2QmFyLCBuYXZCYXIpO1xuXG4gICAgICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKTtcbiAgICAgICAgICAgIG9wZW5TZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XG4gICAgICAgICAgICBjYXJ0LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVMaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG1lbnVMaW5rc1tpXS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5yZW1vdmUoZml4ZWROYXZCYXIpO1xuICAgICAgICAgICAgLy8gd3JhcHBlci5yZW1vdmVDaGlsZChmaXhlZE5hdkJhcik7XG5cbiAgICAgICAgICAgIG5hdkJhci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZCcpO1xuICAgICAgICAgICAgb3BlblNlYXJjaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKTtcbiAgICAgICAgICAgIGNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbWVudUxpbmtzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/modules/nav.js\n");

/***/ }),

/***/ "./src/scripts/modules/search.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/search.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return search; });\nfunction search() {\n\n    const searchIcon = document.getElementById('open');\n    const menu = document.querySelector('.menu');\n    const searchRow = document.querySelector('.search-row');\n    const closeIcon = document.getElementById('close');\n\n    const searchBtn = document.getElementById('search');\n\n    menu.addEventListener('transitionend', e => {\n        if (menu === e.target) {\n            searchIcon.style.display = 'none';\n            menu.style.display = 'none';\n\n            closeIcon.style.display = 'block';\n            searchRow.style.display = 'flex';\n        }\n    });\n\n    searchRow.addEventListener('transitionend', e => {\n        if (searchRow === e.target) {\n            searchRow.style.display = '';\n            searchIcon.style.display = '';\n            menu.style.display = '';\n            closeIcon.style.display = '';\n        }\n    });\n\n    searchIcon.addEventListener('click', e => {\n        e.preventDefault();\n\n        searchRow.style.opacity = 1;\n        menu.style.opacity = 0;\n        closeIcon.style.opacity = 1;\n        searchIcon.style.opacity = 0;\n\n        console.log('Открытие строки...');\n    });\n\n    closeIcon.addEventListener('click', e => {\n        e.preventDefault();\n\n        menu.style.opacity = 1;\n        searchRow.style.opacity = 0;\n        closeIcon.style.opacity = 0;\n        searchIcon.style.opacity = 1;\n\n        console.log('Закрытие строки...');\n    });\n\n    searchBtn.addEventListener('click', e => e.preventDefault());\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3NlYXJjaC5qcz85MTJlIl0sIm5hbWVzIjpbInNlYXJjaCIsInNlYXJjaEljb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hSb3ciLCJjbG9zZUljb24iLCJzZWFyY2hCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInN0eWxlIiwiZGlzcGxheSIsInByZXZlbnREZWZhdWx0Iiwib3BhY2l0eSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQWUsU0FBU0EsTUFBVCxHQUFrQjs7QUFFN0IsVUFBTUMsYUFBYUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFuQjtBQUNBLFVBQU1DLE9BQU9GLFNBQVNHLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLFVBQU1DLFlBQVlKLFNBQVNHLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFDQSxVQUFNRSxZQUFZTCxTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQWxCOztBQUVBLFVBQU1LLFlBQVlOLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBbEI7O0FBRUFDLFNBQUtLLGdCQUFMLENBQXNCLGVBQXRCLEVBQXVDQyxLQUFLO0FBQ3hDLFlBQUlOLFNBQVNNLEVBQUVDLE1BQWYsRUFBdUI7QUFDbkJWLHVCQUFXVyxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixNQUEzQjtBQUNBVCxpQkFBS1EsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLE1BQXJCOztBQUVBTixzQkFBVUssS0FBVixDQUFnQkMsT0FBaEIsR0FBMEIsT0FBMUI7QUFDQVAsc0JBQVVNLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLE1BQTFCO0FBQ0g7QUFDSixLQVJEOztBQVVBUCxjQUFVRyxnQkFBVixDQUEyQixlQUEzQixFQUE0Q0MsS0FBSztBQUM3QyxZQUFJSixjQUFjSSxFQUFFQyxNQUFwQixFQUE0QjtBQUN4Qkwsc0JBQVVNLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLEVBQTFCO0FBQ0FaLHVCQUFXVyxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixFQUEzQjtBQUNBVCxpQkFBS1EsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLEVBQXJCO0FBQ0FOLHNCQUFVSyxLQUFWLENBQWdCQyxPQUFoQixHQUEwQixFQUExQjtBQUNIO0FBQ0osS0FQRDs7QUFTQVosZUFBV1EsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUNDLEtBQUs7QUFDdENBLFVBQUVJLGNBQUY7O0FBRUFSLGtCQUFVTSxLQUFWLENBQWdCRyxPQUFoQixHQUEwQixDQUExQjtBQUNBWCxhQUFLUSxLQUFMLENBQVdHLE9BQVgsR0FBcUIsQ0FBckI7QUFDQVIsa0JBQVVLLEtBQVYsQ0FBZ0JHLE9BQWhCLEdBQTBCLENBQTFCO0FBQ0FkLG1CQUFXVyxLQUFYLENBQWlCRyxPQUFqQixHQUEyQixDQUEzQjs7QUFFQUMsZ0JBQVFDLEdBQVIsQ0FBWSxvQkFBWjtBQUVILEtBVkQ7O0FBWUFWLGNBQVVFLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DQyxLQUFLO0FBQ3JDQSxVQUFFSSxjQUFGOztBQUVBVixhQUFLUSxLQUFMLENBQVdHLE9BQVgsR0FBcUIsQ0FBckI7QUFDQVQsa0JBQVVNLEtBQVYsQ0FBZ0JHLE9BQWhCLEdBQTBCLENBQTFCO0FBQ0FSLGtCQUFVSyxLQUFWLENBQWdCRyxPQUFoQixHQUEwQixDQUExQjtBQUNBZCxtQkFBV1csS0FBWCxDQUFpQkcsT0FBakIsR0FBMkIsQ0FBM0I7O0FBRUFDLGdCQUFRQyxHQUFSLENBQVksb0JBQVo7QUFFSCxLQVZEOztBQVlBVCxjQUFVQyxnQkFBVixDQUEyQixPQUEzQixFQUFvQ0MsS0FBS0EsRUFBRUksY0FBRixFQUF6QztBQUVIIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvbW9kdWxlcy9zZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2goKSB7XG5cbiAgICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4nKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbiAgICBjb25zdCBzZWFyY2hSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJvdycpO1xuICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZScpO1xuXG4gICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZSA9PiB7XG4gICAgICAgIGlmIChtZW51ID09PSBlLnRhcmdldCkge1xuICAgICAgICAgICAgc2VhcmNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBzZWFyY2hSb3cuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2VhcmNoUm93LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBlID0+IHtcbiAgICAgICAgaWYgKHNlYXJjaFJvdyA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAgIHNlYXJjaFJvdy5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICBzZWFyY2hJY29uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgc2VhcmNoUm93LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBtZW51LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBjbG9zZUljb24uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIHNlYXJjaEljb24uc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ9Ce0YLQutGA0YvRgtC40LUg0YHRgtGA0L7QutC4Li4uJyk7XG5cbiAgICB9KTtcblxuICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbWVudS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgc2VhcmNoUm93LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBjbG9zZUljb24uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHNlYXJjaEljb24uc3R5bGUub3BhY2l0eSA9IDE7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ9CX0LDQutGA0YvRgtC40LUg0YHRgtGA0L7QutC4Li4uJyk7XG5cbiAgICB9KTtcblxuICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/modules/search.js\n");

/***/ }),

/***/ "./src/scripts/modules/slider.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/slider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return slider; });\nfunction slider() {\n\n    let i = 0;\n\n    const sliderList = document.querySelector('.slider__list');\n    const sliderDots = document.querySelectorAll('.dots__item');\n\n    const moveSlide = num => {\n        sliderList.style.left = `-${num}00%`;\n    };\n\n    sliderDots.forEach((item, index) => {\n        item.addEventListener('click', e => {\n            e.preventDefault();\n\n            const lastActiveItem = Array.from(sliderDots).filter(item => item.classList.contains('active'));\n            lastActiveItem[0].classList.remove('active');\n            i = index;\n            item.classList.add('active');\n            moveSlide(index);\n        });\n    });\n\n    const changeActiveItem = newActiveItem => {\n        const lastActiveItem = Array.from(sliderDots).filter(item => item.classList.contains('active'));\n        lastActiveItem[0].classList.remove('active');\n        newActiveItem.classList.add('active');\n    };\n\n    const sliderImages = document.querySelector('.slider__images');\n    // sliderImages.addEventListener('mousedown', e => {\n    //     console.log(e.clientX);\n    // });\n\n    let directionOffsetX = 0;\n    let currentOffsetX = 0;\n\n    const dragMouseDown = e => {\n\n        const closeDragElement = () => {\n            document.onmouseup = null;\n            document.onmousemove = null;\n        };\n\n        const elementDrag = e => {\n            directionOffsetX = currentOffsetX - e.clientX;\n            currentOffsetX = e.clientX;\n            let sliderOffset = sliderList.offsetLeft;\n\n            // console.log('---');\n            if (sliderOffset >= 0 && directionOffsetX < 0 || sliderOffset <= -3600 && directionOffsetX > 0) {\n                // console.log(sliderOffset);\n                // console.log(directionOffsetX);\n                closeDragElement();\n            } else {\n                let sliderCurrentOffset = sliderList.offsetLeft - directionOffsetX * 40;\n\n                if (sliderCurrentOffset <= 0 && sliderCurrentOffset >= -3600) {\n                    // console.log(sliderCurrentOffset);\n                    // console.log(-(i * 900 + 450));\n                    if (sliderCurrentOffset < -(i * 900 + 450)) {\n                        i++;\n                        sliderCurrentOffset = -(i * 900);\n                        changeActiveItem(sliderDots[i]);\n                        closeDragElement();\n                    } else if (sliderCurrentOffset > -(i * 900 - 450)) {\n                        i--;\n                        sliderCurrentOffset = -(i * 900);\n                        changeActiveItem(sliderDots[i]);\n                        closeDragElement();\n                    }\n\n                    sliderList.style.left = sliderCurrentOffset + 'px';\n                } else console.log(sliderList.offsetLeft - directionOffsetX * 40);\n            }\n        };\n\n        currentOffsetX = e.clientX;\n        document.onmouseup = () => {\n            sliderList.style.left = -(i * 900) + 'px';\n            closeDragElement();\n        };\n        document.onmousemove = elementDrag;\n    };\n    sliderImages.onmousedown = dragMouseDown;\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3NsaWRlci5qcz9hMGNmIl0sIm5hbWVzIjpbInNsaWRlciIsImkiLCJzbGlkZXJMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2xpZGVyRG90cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb3ZlU2xpZGUiLCJudW0iLCJzdHlsZSIsImxlZnQiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxhc3RBY3RpdmVJdGVtIiwiQXJyYXkiLCJmcm9tIiwiZmlsdGVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJjaGFuZ2VBY3RpdmVJdGVtIiwibmV3QWN0aXZlSXRlbSIsInNsaWRlckltYWdlcyIsImRpcmVjdGlvbk9mZnNldFgiLCJjdXJyZW50T2Zmc2V0WCIsImRyYWdNb3VzZURvd24iLCJjbG9zZURyYWdFbGVtZW50Iiwib25tb3VzZXVwIiwib25tb3VzZW1vdmUiLCJlbGVtZW50RHJhZyIsImNsaWVudFgiLCJzbGlkZXJPZmZzZXQiLCJvZmZzZXRMZWZ0Iiwic2xpZGVyQ3VycmVudE9mZnNldCIsImNvbnNvbGUiLCJsb2ciLCJvbm1vdXNlZG93biJdLCJtYXBwaW5ncyI6Ijs7QUFBZSxTQUFTQSxNQUFULEdBQWtCOztBQUU3QixRQUFJQyxJQUFJLENBQVI7O0FBRUEsVUFBTUMsYUFBYUMsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUFuQjtBQUNBLFVBQU1DLGFBQWFGLFNBQVNHLGdCQUFULENBQTBCLGFBQTFCLENBQW5COztBQUVBLFVBQU1DLFlBQVlDLE9BQU87QUFDckJOLG1CQUFXTyxLQUFYLENBQWlCQyxJQUFqQixHQUF5QixJQUFHRixHQUFJLEtBQWhDO0FBQ0gsS0FGRDs7QUFJQUgsZUFBV00sT0FBWCxDQUFtQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDaENELGFB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QUF1QkMsV0FBdkI7QUFFSCxLQS9DRDtBQWdEQVAsaUJBQWFjLFdBQWIsR0FBMkJYLGFBQTNCO0FBRUgiLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlcigpIHtcblxuICAgIGxldCBpID0gMDtcblxuICAgIGNvbnN0IHNsaWRlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19saXN0Jyk7XG4gICAgY29uc3Qgc2xpZGVyRG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3RzX19pdGVtJyk7XG5cbiAgICBjb25zdCBtb3ZlU2xpZGUgPSBudW0gPT4ge1xuICAgICAgICBzbGlkZXJMaXN0LnN0eWxlLmxlZnQgPSBgLSR7bnVtfTAwJWA7XG4gICAgfTsgXG5cbiAgICBzbGlkZXJEb3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBsYXN0QWN0aXZlSXRlbSA9IEFycmF5LmZyb20oc2xpZGVyRG90cykuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgIGxhc3RBY3RpdmVJdGVtWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaSA9IGluZGV4O1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIG1vdmVTbGlkZShpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hhbmdlQWN0aXZlSXRlbSA9IChuZXdBY3RpdmVJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RBY3RpdmVJdGVtID0gQXJyYXkuZnJvbShzbGlkZXJEb3RzKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpO1xuICAgICAgICBsYXN0QWN0aXZlSXRlbVswXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgbmV3QWN0aXZlSXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHNsaWRlckltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2ltYWdlcycpO1xuICAgIC8vIHNsaWRlckltYWdlcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZS5jbGllbnRYKTtcbiAgICAvLyB9KTtcblxuICAgIGxldCBkaXJlY3Rpb25PZmZzZXRYID0gMDtcbiAgICBsZXQgY3VycmVudE9mZnNldFggPSAwO1xuICAgIFxuICAgIGNvbnN0IGRyYWdNb3VzZURvd24gPSBlID0+IHtcbiAgICAgIFxuICAgICAgICBjb25zdCBjbG9zZURyYWdFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBlbGVtZW50RHJhZyA9IChlKSA9PiB7XG4gICAgICAgICAgICBkaXJlY3Rpb25PZmZzZXRYID0gY3VycmVudE9mZnNldFggLSBlLmNsaWVudFg7XG4gICAgICAgICAgICBjdXJyZW50T2Zmc2V0WCA9IGUuY2xpZW50WDtcbiAgICAgICAgICAgIGxldCBzbGlkZXJPZmZzZXQgPSBzbGlkZXJMaXN0Lm9mZnNldExlZnQ7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCctLS0nKTtcbiAgICAgICAgICAgIGlmICgoc2xpZGVyT2Zmc2V0ID49IDAgJiYgZGlyZWN0aW9uT2Zmc2V0WCA8IDApIHx8IChzbGlkZXJPZmZzZXQgPD0gLTM2MDAgJiYgZGlyZWN0aW9uT2Zmc2V0WCA+IDApKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2xpZGVyT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkaXJlY3Rpb25PZmZzZXRYKTtcbiAgICAgICAgICAgICAgICBjbG9zZURyYWdFbGVtZW50KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBzbGlkZXJDdXJyZW50T2Zmc2V0ID0gKHNsaWRlckxpc3Qub2Zmc2V0TGVmdCAtIGRpcmVjdGlvbk9mZnNldFgqNDApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICgoc2xpZGVyQ3VycmVudE9mZnNldCA8PSAwKSAmJiAoc2xpZGVyQ3VycmVudE9mZnNldCA+PSAtMzYwMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2xpZGVyQ3VycmVudE9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKC0oaSAqIDkwMCArIDQ1MCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVyQ3VycmVudE9mZnNldCA8IC0oaSAqIDkwMCArIDQ1MCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlckN1cnJlbnRPZmZzZXQgPSAtKGkgKiA5MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQWN0aXZlSXRlbShzbGlkZXJEb3RzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlRHJhZ0VsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzbGlkZXJDdXJyZW50T2Zmc2V0ID4gLShpICogOTAwIC0gNDUwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyQ3VycmVudE9mZnNldCA9IC0oaSAqIDkwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VBY3RpdmVJdGVtKHNsaWRlckRvdHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEcmFnRWxlbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyTGlzdC5zdHlsZS5sZWZ0ID0gc2xpZGVyQ3VycmVudE9mZnNldCArICdweCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGNvbnNvbGUubG9nKChzbGlkZXJMaXN0Lm9mZnNldExlZnQgLSBkaXJlY3Rpb25PZmZzZXRYKjQwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY3VycmVudE9mZnNldFggPSBlLmNsaWVudFg7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9ICgpID0+IHtcbiAgICAgICAgICAgIHNsaWRlckxpc3Quc3R5bGUubGVmdCA9IC0oaSAqIDkwMCkgKyAncHgnO1xuICAgICAgICAgICAgY2xvc2VEcmFnRWxlbWVudCgpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGVsZW1lbnREcmFnO1xuXG4gICAgfTtcbiAgICBzbGlkZXJJbWFnZXMub25tb3VzZWRvd24gPSBkcmFnTW91c2VEb3duO1xuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/slider.js\n");

/***/ })

/******/ });