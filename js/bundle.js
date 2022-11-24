/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator(){
    // Calculator
    class Calculator{
        constructor(){
            this.gender = 'Женщина';
            this.height = 0;
            this.weight = 0;
            this.age = 0;
            this.activity = {
                'Низкая активность': 1.2,
                'Невысокая активность': 1.375,
                'Умеренная активность': 1.55,
                'Высокая активность': 1.725
            };
            this.currentActivity = 1.375;
            this.dailyCalorie = 2700;
        }
        init(){
            const gender = document.querySelector("#gender"),
                  activity = document.querySelector('.calculating__choose_big'),
                  height = document.querySelector('#height'),
                  weight = document.querySelector('#weight'),
                  age = document.querySelector('#age'),
                  activityDivs = activity.querySelectorAll(".calculating__choose-item"),
                  genderDivs = gender.querySelectorAll(".calculating__choose-item"),
                  calculator = new  Calculator();
            if (localStorage.getItem("gender")){
                this.disableElementActivity(gender.querySelector('div'));
                genderDivs.forEach(div =>{
                    if (div.textContent == localStorage.getItem("gender")){
                        div.classList.add('calculating__choose-item_active');
                    }
                });
                this.gender = localStorage.getItem("gender");
            } 
            if (localStorage.getItem("currentActivity")){
                
                this.disableElementActivity(activity.querySelector('div'));
                activityDivs.forEach(div => {
                    if (this.activity[div.textContent] == localStorage.getItem("currentActivity")){
                        div.classList.add("calculating__choose-item_active");
                    }
                });
                this.currentActivity = +localStorage.getItem("currentActivity");
            }
            if(localStorage.getItem("height")){
                height.value = localStorage.getItem("height");
                this.height = localStorage.getItem("height");
            }
            if(localStorage.getItem("weight")){
                weight.value = localStorage.getItem("weight");
                this.weight = localStorage.getItem("weight");
            }
            if(localStorage.getItem("age")){
                age.value = localStorage.getItem("age");
                this.age = localStorage.getItem("age");
            }
            this.calculateCalories();
        }
        clearData(data){
            const ex = /\D/g;
            return data.replace(ex, '');
        }
        calculateCalories(){
            const resultSpan = document.querySelector('div.calculating__result > span');
            if (this.height == 0 || this.weight == 0 || this.age == 0){
                resultSpan.textContent = '____';
            } else {
                if (this.gender === 'Мужчина') {
                    this.dailyCalorie = Math.round((88.36 + (13.4*+this.weight) + (4.8*+this.height) + (5.7*+this.age))*+this.currentActivity);
                } else {
                    this.dailyCalorie = Math.round((447.6 + (9.2*+this.weight) + (3.1*+this.height) + (4.3*+this.age))*+this.currentActivity);
                }
                resultSpan.textContent = this.dailyCalorie;
            }
        }
        getDivData(element, key){
            if (key ==='gender'){
                this.gender = element.innerText;
                localStorage.setItem("gender", this.gender);
                this.disableElementActivity(element);
                element.classList.add('calculating__choose-item_active');
            } else if (key === 'activity') {
                this.currentActivity = this.activity[element.innerText];
                localStorage.setItem("currentActivity", this.currentActivity);
                this.disableElementActivity(element);
                element.classList.add('calculating__choose-item_active');
            } else if (key === 'height') {
                this.height = this.clearData(element.value);
                localStorage.setItem("height", this.height);
            } else if (key === 'weight') {
                this.weight = this.clearData(element.value);
                localStorage.setItem("weight", this.weight);
            } else if (key === 'age') {
                this.age = this.clearData(element.value);
                localStorage.setItem("age", this.age);
            }
            this.calculateCalories();
        }
        disableElementActivity(element){
            const parent = element.parentElement;
            parent.querySelectorAll('.calculating__choose-item').forEach(elem =>{
                elem.classList.remove('calculating__choose-item_active');
            });
        }
    }
    const gender = document.querySelector("#gender"),
          activity = document.querySelector('.calculating__choose_big'),
          height = document.querySelector('#height'),
          weight = document.querySelector('#weight'),
          age = document.querySelector('#age'),
          activityDivs = activity.querySelectorAll(".calculating__choose-item"),
          genderDivs = gender.querySelectorAll(".calculating__choose-item"),
          calculator = new  Calculator();
    calculator.init();
    genderDivs.forEach(div =>{
        div.addEventListener('click', e =>{
            calculator.getDivData(div, 'gender');
        });
    });
    activityDivs.forEach(div =>{
        div.addEventListener('click', e =>{
            calculator.getDivData(div, 'activity');
        });
    });
    height.addEventListener('keyup', e =>{
        calculator.getDivData(e.target, 'height');
    });
    weight.addEventListener('keyup', e =>{
        calculator.getDivData(e.target, 'weight');
    });
    age.addEventListener('keyup', e =>{
        calculator.getDivData(e.target, 'age');
    });
// Calculator
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");


window.addEventListener('DOMContentLoaded', function() {

    (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map