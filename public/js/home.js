/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/js/cookies.js":
/*!************************************!*\
  !*** ./resources/js/js/cookies.js ***!
  \************************************/
/***/ (function() {

var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)cookieConsent\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (!cookieValue) {
  var cookiesRef = document.querySelector(".cookies-wrapper");
  var cookiesBtn = document.querySelector(".cookies-wrapper__accept");
  var cookiesBtnClose = document.querySelector(".cookies-wrapper__close");
  var cookiesBtnDecline = document.querySelector(".cookies-wrapper__decline");
  cookiesRef.classList.add("active");
  cookiesBtn.addEventListener("click", function () {
    document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    hideCookies();
  });
  cookiesBtnClose.addEventListener("click", function () {
    return hideCookies();
  });
  cookiesBtnDecline.addEventListener("click", function () {
    return hideCookies();
  });
  var hideCookies = function hideCookies() {
    cookiesRef.style.transform = "translateY(150%)";
    setTimeout(function () {
      cookiesRef.classList.remove("active");
    }, 500);
  };
}

/***/ }),

/***/ "./resources/js/js/lang.js":
/*!*********************************!*\
  !*** ./resources/js/js/lang.js ***!
  \*********************************/
/***/ (function() {

var buttonLang = document.querySelectorAll(".lang-button");
var buttonLangLabel = document.querySelectorAll(".lang-button__label");
buttonLang.forEach(function (button) {
  return button.addEventListener("click", function () {
    window.location.href = "./en.html";
    if (window.location.href.includes("en")) {
      window.location.href = "/";
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
    for (var i = 0; i < openPopupButtons.length; i++) {
      if (openPopupButtons[i].innerHTML === e.target.innerHTML) {
        cookiesTitles[i].classList.add("active");
      }
    }
    if (window.innerHeight < 632) {
      popup.classList.add("scroll");
    }
    popupBg.classList.add("active");
    popup.classList.add("active");
    document.body.style.overflowY = "hidden";
  });
});
closePopupButton.addEventListener("click", function () {
  hidePopup();
});
document.addEventListener("click", function (e) {
  if (e.target === popupBg) hidePopup();
});
cookiesTitles.forEach(function (item) {
  item.addEventListener("click", function (e) {
    cookiesTitles.forEach(function (item) {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
var hidePopup = function hidePopup() {
  popupBg.classList.remove("active");
  popup.classList.remove("active");
  setTimeout(function () {
    cookiesTitles.forEach(function (item) {
      item.classList.remove("active");
    });
    document.body.style.overflowY = "auto";
  }, 250);
};

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
/* harmony import */ var _js_cookies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/cookies.js */ "./resources/js/js/cookies.js");
/* harmony import */ var _js_cookies_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_cookies_js__WEBPACK_IMPORTED_MODULE_2__);



}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNoQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixJQUFNOEIsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztFQUNwQmQsT0FBTyxDQUFDakIsU0FBUyxDQUFDTyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ2xDVyxLQUFLLENBQUNsQixTQUFTLENBQUNPLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFFaENELFVBQVUsQ0FBQyxZQUFNO0lBQ2JlLGFBQWEsQ0FBQ1YsT0FBTyxDQUFDLFVBQUNxQixJQUFJLEVBQUs7TUFDNUJBLElBQUksQ0FBQ2hDLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFFRmYsUUFBUSxDQUFDcUMsSUFBSSxDQUFDekIsS0FBSyxDQUFDMEIsU0FBUyxHQUFHLE1BQU07RUFDMUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUNYLENBQUM7Ozs7OztVQ3RERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdUI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RlLWdsb2JhbC8uL3Jlc291cmNlcy9qcy9qcy9jb29raWVzLmpzIiwid2VicGFjazovL2RlLWdsb2JhbC8uL3Jlc291cmNlcy9qcy9qcy9sYW5nLmpzIiwid2VicGFjazovL2RlLWdsb2JhbC8uL3Jlc291cmNlcy9qcy9qcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly9kZS1nbG9iYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGUtZ2xvYmFsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RlLWdsb2JhbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGUtZ2xvYmFsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGUtZ2xvYmFsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGUtZ2xvYmFsLy4vcmVzb3VyY2VzL2pzL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29va2llVmFsdWUgPSBkb2N1bWVudC5jb29raWUucmVwbGFjZShcbiAgICAvKD86KD86XnwuKjtcXHMqKWNvb2tpZUNvbnNlbnRcXHMqXFw9XFxzKihbXjtdKikuKiQpfF4uKiQvLFxuICAgIFwiJDFcIlxuKTtcblxuaWYgKCFjb29raWVWYWx1ZSkge1xuICAgIGNvbnN0IGNvb2tpZXNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb2tpZXMtd3JhcHBlclwiKTtcbiAgICBjb25zdCBjb29raWVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29raWVzLXdyYXBwZXJfX2FjY2VwdFwiKTtcbiAgICBjb25zdCBjb29raWVzQnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb2tpZXMtd3JhcHBlcl9fY2xvc2VcIik7XG4gICAgY29uc3QgY29va2llc0J0bkRlY2xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5jb29raWVzLXdyYXBwZXJfX2RlY2xpbmVcIlxuICAgICk7XG5cbiAgICBjb29raWVzUmVmLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICBjb29raWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9XG4gICAgICAgICAgICBcImNvb2tpZUNvbnNlbnQ9dHJ1ZTsgZXhwaXJlcz1GcmksIDMxIERlYyA5OTk5IDIzOjU5OjU5IEdNVDsgcGF0aD0vXCI7XG5cbiAgICAgICAgaGlkZUNvb2tpZXMoKTtcbiAgICB9KTtcblxuICAgIGNvb2tpZXNCdG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGlkZUNvb2tpZXMoKSk7XG5cbiAgICBjb29raWVzQnRuRGVjbGluZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGlkZUNvb2tpZXMoKSk7XG5cbiAgICBjb25zdCBoaWRlQ29va2llcyA9ICgpID0+IHtcbiAgICAgICAgY29va2llc1JlZi5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMTUwJSlcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb29raWVzUmVmLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfTtcbn1cbiIsImNvbnN0IGJ1dHRvbkxhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhbmctYnV0dG9uXCIpO1xuY29uc3QgYnV0dG9uTGFuZ0xhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5nLWJ1dHRvbl9fbGFiZWxcIik7XG5idXR0b25MYW5nLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4vZW4uaHRtbFwiO1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJlblwiKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgICAgfVxuICAgIH0pXG4pO1xuIiwiY29uc3QgcG9wdXBCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2JnXCIpO1xuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuY29uc3Qgb3BlblBvcHVwQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3Blbi1wb3B1cFwiKTtcbmNvbnN0IGNsb3NlUG9wdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLXBvcHVwXCIpO1xuY29uc3QgY29va2llc1RpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29va2llc19fdGl0bGVcIik7XG5cbm9wZW5Qb3B1cEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcGVuUG9wdXBCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob3BlblBvcHVwQnV0dG9uc1tpXS5pbm5lckhUTUwgPT09IGUudGFyZ2V0LmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAgIGNvb2tpZXNUaXRsZXNbaV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPCA2MzIpIHtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxcIik7XG4gICAgICAgIH1cblxuICAgICAgICBwb3B1cEJnLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJoaWRkZW5cIjtcbiAgICB9KTtcbn0pO1xuXG5jbG9zZVBvcHVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGlkZVBvcHVwKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cEJnKSBoaWRlUG9wdXAoKTtcbn0pO1xuXG5jb29raWVzVGl0bGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb29raWVzVGl0bGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9KTtcbn0pO1xuXG5jb25zdCBoaWRlUG9wdXAgPSAoKSA9PiB7XG4gICAgcG9wdXBCZy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29va2llc1RpdGxlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJhdXRvXCI7XG4gICAgfSwgMjUwKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9qcy9wb3B1cC5qc1wiO1xuaW1wb3J0IFwiLi9qcy9sYW5nLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2Nvb2tpZXMuanNcIjtcbiJdLCJuYW1lcyI6WyJjb29raWVWYWx1ZSIsImRvY3VtZW50IiwiY29va2llIiwicmVwbGFjZSIsImNvb2tpZXNSZWYiLCJxdWVyeVNlbGVjdG9yIiwiY29va2llc0J0biIsImNvb2tpZXNCdG5DbG9zZSIsImNvb2tpZXNCdG5EZWNsaW5lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGVDb29raWVzIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiYnV0dG9uTGFuZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b25MYW5nTGFiZWwiLCJmb3JFYWNoIiwiYnV0dG9uIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW5jbHVkZXMiLCJwb3B1cEJnIiwicG9wdXAiLCJvcGVuUG9wdXBCdXR0b25zIiwiY2xvc2VQb3B1cEJ1dHRvbiIsImNvb2tpZXNUaXRsZXMiLCJlIiwicHJldmVudERlZmF1bHQiLCJpIiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwidGFyZ2V0IiwiaW5uZXJIZWlnaHQiLCJib2R5Iiwib3ZlcmZsb3dZIiwiaGlkZVBvcHVwIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=