/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");

'use strict'; // prettier-ignore


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    const {
      latitude
    } = position.coords;
    const {
      longitude
    } = position.coords;
    console.log("https://www.google.com/maps/@".concat(latitude, ",").concat(longitude));
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([51.5, -0.09]).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
  }, function () {
    alert('no location');
  });
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVDLFlBQUQsRUFFQTs7O0FBQ0EsTUFBTUEsTUFBTSxHQUFHLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsT0FBeEIsRUFBaUMsT0FBakMsRUFBMEMsS0FBMUMsRUFBaUQsTUFBakQsRUFBeUQsTUFBekQsRUFBaUUsUUFBakUsRUFBMkUsV0FBM0UsRUFBd0YsU0FBeEYsRUFBbUcsVUFBbkcsRUFBK0csVUFBL0csQ0FBZjtBQUVBLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQTFCO0FBQ0EsTUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWxCO0FBQ0EsTUFBTUcsYUFBYSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQXRCO0FBQ0EsTUFBTUksYUFBYSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQXRCO0FBQ0EsTUFBTUssWUFBWSxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBQXJCO0FBQ0EsTUFBTU0sY0FBYyxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIseUJBQXZCLENBQXZCOztBQUVBLElBQUlPLFNBQVMsQ0FBQ0MsV0FBZCxFQUEyQjtBQUN6QkQsRUFBQUEsU0FBUyxDQUFDQyxXQUFWLENBQXNCQyxrQkFBdEIsQ0FDRSxVQUFVQyxRQUFWLEVBQW9CO0FBQ2xCLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFlRCxRQUFRLENBQUNFLE1BQTlCO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQTtBQUFGLFFBQWdCSCxRQUFRLENBQUNFLE1BQS9CO0FBQ0FFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUix3Q0FBNENKLFFBQTVDLGNBQXdERSxTQUF4RDtBQUNBLFVBQU1HLEdBQUcsR0FBR0MsQ0FBQyxDQUFDRCxHQUFGLENBQU0sS0FBTixFQUFhRSxPQUFiLENBQXFCLENBQUMsTUFBRCxFQUFTLENBQUMsSUFBVixDQUFyQixFQUFzQyxFQUF0QyxDQUFaO0FBRUFELElBQUFBLENBQUMsQ0FBQ0UsU0FBRixDQUFZLG9EQUFaLEVBQWtFO0FBQ2hFQyxNQUFBQSxXQUFXLEVBQ1Q7QUFGOEQsS0FBbEUsRUFHR0MsS0FISCxDQUdTTCxHQUhUO0FBS0FDLElBQUFBLENBQUMsQ0FBQ0ssTUFBRixDQUFTLENBQUMsSUFBRCxFQUFPLENBQUMsSUFBUixDQUFULEVBQ0dELEtBREgsQ0FDU0wsR0FEVCxFQUVHTyxTQUZILENBRWEsK0NBRmIsRUFHR0MsU0FISDtBQUlELEdBaEJILEVBaUJFLFlBQVk7QUFDVkMsSUFBQUEsS0FBSyxDQUFDLGFBQUQsQ0FBTDtBQUNELEdBbkJIO0FBcUJELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXB0eS8uL3N0eWxlLmNzcz9lYjJhIiwid2VicGFjazovL21hcHR5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hcHR5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFwdHkvLi9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbigndXNlIHN0cmljdCcpO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbmNvbnN0IGNvbnRhaW5lcldvcmtvdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtvdXRzJyk7XG5jb25zdCBpbnB1dFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9faW5wdXQtLXR5cGUnKTtcbmNvbnN0IGlucHV0RGlzdGFuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9faW5wdXQtLWRpc3RhbmNlJyk7XG5jb25zdCBpbnB1dER1cmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2lucHV0LS1kdXJhdGlvbicpO1xuY29uc3QgaW5wdXRDYWRlbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2lucHV0LS1jYWRlbmNlJyk7XG5jb25zdCBpbnB1dEVsZXZhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19pbnB1dC0tZWxldmF0aW9uJyk7XG5cbmlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IHsgbGF0aXR1ZGUgfSA9IHBvc2l0aW9uLmNvb3JkcztcbiAgICAgIGNvbnN0IHsgbG9uZ2l0dWRlIH0gPSBwb3NpdGlvbi5jb29yZHM7XG4gICAgICBjb25zb2xlLmxvZyhgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL0Ake2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gKTtcbiAgICAgIGNvbnN0IG1hcCA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KFs1MS41MDUsIC0wLjA5XSwgMTMpO1xuXG4gICAgICBMLnRpbGVMYXllcignaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLCB7XG4gICAgICAgIGF0dHJpYnV0aW9uOlxuICAgICAgICAgICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycycsXG4gICAgICB9KS5hZGRUbyhtYXApO1xuXG4gICAgICBMLm1hcmtlcihbNTEuNSwgLTAuMDldKVxuICAgICAgICAuYWRkVG8obWFwKVxuICAgICAgICAuYmluZFBvcHVwKCdBIHByZXR0eSBDU1MzIHBvcHVwLjxicj4gRWFzaWx5IGN1c3RvbWl6YWJsZS4nKVxuICAgICAgICAub3BlblBvcHVwKCk7XG4gICAgfSxcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICBhbGVydCgnbm8gbG9jYXRpb24nKTtcbiAgICB9XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW9udGhzIiwiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5lcldvcmtvdXRzIiwiaW5wdXRUeXBlIiwiaW5wdXREaXN0YW5jZSIsImlucHV0RHVyYXRpb24iLCJpbnB1dENhZGVuY2UiLCJpbnB1dEVsZXZhdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJsYXRpdHVkZSIsImNvb3JkcyIsImxvbmdpdHVkZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJMIiwic2V0VmlldyIsInRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwiYWRkVG8iLCJtYXJrZXIiLCJiaW5kUG9wdXAiLCJvcGVuUG9wdXAiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=