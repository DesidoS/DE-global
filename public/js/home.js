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
      window.location.href = "/DE-global/";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNoQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixJQUFNOEIsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztFQUNwQmQsT0FBTyxDQUFDakIsU0FBUyxDQUFDTyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ2xDVyxLQUFLLENBQUNsQixTQUFTLENBQUNPLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFFaENELFVBQVUsQ0FBQyxZQUFNO0lBQ2JlLGFBQWEsQ0FBQ1YsT0FBTyxDQUFDLFVBQUNxQixJQUFJLEVBQUs7TUFDNUJBLElBQUksQ0FBQ2hDLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFFRmYsUUFBUSxDQUFDcUMsSUFBSSxDQUFDekIsS0FBSyxDQUFDMEIsU0FBUyxHQUFHLE1BQU07RUFDMUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUNYLENBQUM7Ozs7OztVQ3RERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdUI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RlLWdsb2JhbC8uL3Jlc291cmNlcy9qcy9qcy9jb29raWVzLmpzIiwid2VicGFjazovL2RlLWdsb2JhbC8uL3Jlc291cmNlcy9qcy9qcy9sYW5nLmpzIiwid2VicGFjazovL2RlLWdsb2JhbC8uL3Jlc291cmNlcy9qcy9qcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly9kZS1nbG9iYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGUtZ2xvYmFsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RlLWdsb2JhbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGUtZ2xvYmFsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGUtZ2xvYmFsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGUtZ2xvYmFsLy4vcmVzb3VyY2VzL2pzL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29va2llVmFsdWUgPSBkb2N1bWVudC5jb29raWUucmVwbGFjZShcbiAgICAvKD86KD86XnwuKjtcXHMqKWNvb2tpZUNvbnNlbnRcXHMqXFw9XFxzKihbXjtdKikuKiQpfF4uKiQvLFxuICAgIFwiJDFcIlxuKTtcblxuaWYgKCFjb29raWVWYWx1ZSkge1xuICAgIGNvbnN0IGNvb2tpZXNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb2tpZXMtd3JhcHBlclwiKTtcbiAgICBjb25zdCBjb29raWVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29raWVzLXdyYXBwZXJfX2FjY2VwdFwiKTtcbiAgICBjb25zdCBjb29raWVzQnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb2tpZXMtd3JhcHBlcl9fY2xvc2VcIik7XG4gICAgY29uc3QgY29va2llc0J0bkRlY2xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5jb29raWVzLXdyYXBwZXJfX2RlY2xpbmVcIlxuICAgICk7XG5cbiAgICBjb29raWVzUmVmLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICBjb29raWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9XG4gICAgICAgICAgICBcImNvb2tpZUNvbnNlbnQ9dHJ1ZTsgZXhwaXJlcz1GcmksIDMxIERlYyA5OTk5IDIzOjU5OjU5IEdNVDsgcGF0aD0vXCI7XG5cbiAgICAgICAgaGlkZUNvb2tpZXMoKTtcbiAgICB9KTtcblxuICAgIGNvb2tpZXNCdG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGlkZUNvb2tpZXMoKSk7XG5cbiAgICBjb29raWVzQnRuRGVjbGluZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGlkZUNvb2tpZXMoKSk7XG5cbiAgICBjb25zdCBoaWRlQ29va2llcyA9ICgpID0+IHtcbiAgICAgICAgY29va2llc1JlZi5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMTUwJSlcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb29raWVzUmVmLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfTtcbn1cbiIsImNvbnN0IGJ1dHRvbkxhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhbmctYnV0dG9uXCIpO1xuY29uc3QgYnV0dG9uTGFuZ0xhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5nLWJ1dHRvbl9fbGFiZWxcIik7XG5idXR0b25MYW5nLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4vZW4uaHRtbFwiO1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJlblwiKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9ERS1nbG9iYWwvXCI7XG4gICAgICAgIH1cbiAgICB9KVxuKTtcbiIsImNvbnN0IHBvcHVwQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19iZ1wiKTtcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcbmNvbnN0IG9wZW5Qb3B1cEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wZW4tcG9wdXBcIik7XG5jb25zdCBjbG9zZVBvcHVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1wb3B1cFwiKTtcbmNvbnN0IGNvb2tpZXNUaXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvb2tpZXNfX3RpdGxlXCIpO1xuXG5vcGVuUG9wdXBCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3BlblBvcHVwQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9wZW5Qb3B1cEJ1dHRvbnNbaV0uaW5uZXJIVE1MID09PSBlLnRhcmdldC5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgICBjb29raWVzVGl0bGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0IDwgNjMyKSB7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdXBCZy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG4gICAgfSk7XG59KTtcblxuY2xvc2VQb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhpZGVQb3B1cCgpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gcG9wdXBCZykgaGlkZVBvcHVwKCk7XG59KTtcblxuY29va2llc1RpdGxlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29va2llc1RpdGxlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSk7XG59KTtcblxuY29uc3QgaGlkZVBvcHVwID0gKCkgPT4ge1xuICAgIHBvcHVwQmcuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvb2tpZXNUaXRsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwiYXV0b1wiO1xuICAgIH0sIDI1MCk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vanMvcG9wdXAuanNcIjtcbmltcG9ydCBcIi4vanMvbGFuZy5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb29raWVzLmpzXCI7XG4iXSwibmFtZXMiOlsiY29va2llVmFsdWUiLCJkb2N1bWVudCIsImNvb2tpZSIsInJlcGxhY2UiLCJjb29raWVzUmVmIiwicXVlcnlTZWxlY3RvciIsImNvb2tpZXNCdG4iLCJjb29raWVzQnRuQ2xvc2UiLCJjb29raWVzQnRuRGVjbGluZSIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlQ29va2llcyIsInN0eWxlIiwidHJhbnNmb3JtIiwic2V0VGltZW91dCIsInJlbW92ZSIsImJ1dHRvbkxhbmciLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uTGFuZ0xhYmVsIiwiZm9yRWFjaCIsImJ1dHRvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImluY2x1ZGVzIiwicG9wdXBCZyIsInBvcHVwIiwib3BlblBvcHVwQnV0dG9ucyIsImNsb3NlUG9wdXBCdXR0b24iLCJjb29raWVzVGl0bGVzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaSIsImxlbmd0aCIsImlubmVySFRNTCIsInRhcmdldCIsImlubmVySGVpZ2h0IiwiYm9keSIsIm92ZXJmbG93WSIsImhpZGVQb3B1cCIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9