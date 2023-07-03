/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/js/lang.js":
/*!*********************************!*\
  !*** ./resources/js/js/lang.js ***!
  \*********************************/
/***/ (function() {

var buttonLang = document.querySelectorAll(".lang-button");
var buttonLangLabel = document.querySelectorAll(".lang-button__label");
buttonLang.forEach(function (button) {
  return button.addEventListener("click", function () {
    window.location.href = "./index-en.html";
    if (window.location.href.includes("en")) {
      window.location.href = "./index.html";
    }
  });
});

/***/ }),

/***/ "./resources/js/js/popup.js":
/*!**********************************!*\
  !*** ./resources/js/js/popup.js ***!
  \**********************************/
/***/ (function() {

var popupBg = document.querySelector(".popup__bg");
var popup = document.querySelector(".popup");
var openPopupButtons = document.querySelectorAll(".open-popup");
var closePopupButton = document.querySelector(".close-popup");
var cookiesTitles = document.querySelectorAll(".cookies__title");
openPopupButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (window.innerHeight < 632) {
      popup.classList.add("scroll");
    }
    popupBg.classList.add("active");
    popup.classList.add("active");
  });
});
closePopupButton.addEventListener("click", function () {
  popupBg.classList.remove("active");
  popup.classList.remove("active");
});
document.addEventListener("click", function (e) {
  if (e.target === popupBg) {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  }
});
cookiesTitles.forEach(function (item) {
  item.addEventListener("click", function (e) {
    cookiesTitles.forEach(function (item) {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************************!*\
  !*** ./resources/js/home.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/popup.js */ "./resources/js/js/popup.js");
/* harmony import */ var _js_popup_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_popup_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/lang.js */ "./resources/js/js/lang.js");
/* harmony import */ var _js_lang_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_lang_js__WEBPACK_IMPORTED_MODULE_1__);


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZS1nbG9iYWwvLi9yZXNvdXJjZXMvanMvanMvbGFuZy5qcyIsIndlYnBhY2s6Ly9kZS1nbG9iYWwvLi9yZXNvdXJjZXMvanMvanMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vZGUtZ2xvYmFsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlLWdsb2JhbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZS1nbG9iYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RlLWdsb2JhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RlLWdsb2JhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RlLWdsb2JhbC8uL3Jlc291cmNlcy9qcy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1dHRvbkxhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhbmctYnV0dG9uXCIpO1xuY29uc3QgYnV0dG9uTGFuZ0xhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5nLWJ1dHRvbl9fbGFiZWxcIik7XG5idXR0b25MYW5nLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4vaW5kZXgtZW4uaHRtbFwiO1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJlblwiKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4vaW5kZXguaHRtbFwiO1xuICAgICAgICB9XG4gICAgfSlcbik7XG4iLCJjb25zdCBwb3B1cEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fYmdcIik7XG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG5jb25zdCBvcGVuUG9wdXBCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcGVuLXBvcHVwXCIpO1xuY29uc3QgY2xvc2VQb3B1cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtcG9wdXBcIik7XG5cbmNvbnN0IGNvb2tpZXNUaXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvb2tpZXNfX3RpdGxlXCIpO1xuXG5vcGVuUG9wdXBCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPCA2MzIpIHtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxcIik7XG4gICAgICAgIH1cblxuICAgICAgICBwb3B1cEJnLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSk7XG59KTtcblxuY2xvc2VQb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBvcHVwQmcuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gcG9wdXBCZykge1xuICAgICAgICBwb3B1cEJnLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxufSk7XG5cbmNvb2tpZXNUaXRsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvb2tpZXNUaXRsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9qcy9wb3B1cC5qc1wiO1xuaW1wb3J0IFwiLi9qcy9sYW5nLmpzXCI7Il0sIm5hbWVzIjpbImJ1dHRvbkxhbmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b25MYW5nTGFiZWwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImluY2x1ZGVzIiwicG9wdXBCZyIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cCIsIm9wZW5Qb3B1cEJ1dHRvbnMiLCJjbG9zZVBvcHVwQnV0dG9uIiwiY29va2llc1RpdGxlcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlubmVySGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidGFyZ2V0IiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=