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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n\n(0,_slider__WEBPACK_IMPORTED_MODULE_0__.mySlider)();\n\nconst selectedBooks = [];\nconst categories = document.querySelectorAll('.main__content__categories__list__item');\nlet counter = 0;\nconst numberIndi = document.querySelector('.nav__divs__image__span');\n\n\nconsole.log(numberIndi)\ncategories.forEach(category => {\n  category.style.cursor = \"pointer\";\n  category.addEventListener('click', handleClick);\n});\n\nfunction handleClick(e) {\n  \n  const clickedCategory = e.target.textContent;\n    categories.forEach((item) => {\n      item.classList.remove('main__content__categories__list__item--active');\n    })\n    this.classList.add('main__content__categories__list__item--active');\n    \n    \n    fetch(`https://www.googleapis.com/books/v1/volumes?q=\"subject:${clickedCategory}\"&printType=books&startIndex=0&maxResults=6&langRestrict=en`)\n    .then(response => response.json())\n    .then(data => {\n      const books = data.items;\n      const pics = document.querySelectorAll('.main__content__books__card__image');\n      const auth = document.querySelectorAll('.main__content__books__card__description__authors');\n      const title = document.querySelectorAll('.main__content__books__card__description__title');\n      const desc = document.querySelectorAll('.main__content__books__card__description__text');\n      const price = document.querySelectorAll('.main__content__books__card__description__price');\n      const buttonsContainer = document.querySelectorAll('.main__content__books__card__description__button-container');\n\n\n      pics.forEach(pic => {\n        pic.innerHTML = '';\n      });\n\n      auth.forEach(auth => {\n        auth.innerHTML = '';\n      });\n\n      title.forEach(title => {\n        title.innerHTML = '';\n      });\n\n      desc.forEach(desc => {\n        desc.innerHTML = '';\n      });\n\n      price.forEach(price => {\n        price.innerHTML = '';\n      });\n\n      buttonsContainer.forEach(button => {\n        button.innerHTML = '';\n      })\n\n\n      books.forEach((book, index) => {\n        const newImg = document.createElement(\"img\");\n        const image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : \"/images/default-cover.jpg\";\n        newImg.setAttribute('src', image);\n        newImg.style.minWidth = \"100%\";\n        newImg.style.maxHeight = \"230px\";\n        pics[index].appendChild(newImg);\n\n        const newAuth = document.createElement(\"p\");\n        const author = !book.volumeInfo.authors ? 'Authors not found' : book.volumeInfo.authors.join(\", \");\n        newAuth.textContent = author;\n        auth[index].appendChild(newAuth);\n\n        const newTitle = document.createElement(\"h3\");\n        newTitle.textContent = book.volumeInfo.title;\n        title[index].appendChild(newTitle);\n\n        const newDescription = document.createElement(\"p\");\n        const description = !book.volumeInfo.description ? \"Description not found\" : book.volumeInfo.description.slice(0, 100) + \"...\";\n        newDescription.textContent = description;\n        desc[index].appendChild(newDescription);\n        \n        const newPrice = document.createElement(\"h3\");\n        const priccce = book.saleInfo.listPrice ? book.saleInfo.listPrice.amount + \" \" + book.saleInfo.listPrice.currencyCode:  \"Price not defined\";\n        newPrice.textContent = priccce;\n        price[index].appendChild(newPrice);\n\n        const newButton = document.createElement('button');\n        newButton.setAttribute('id', book.id);\n        newButton.innerHTML = 'By now';\n        newButton.classList.add('main__content__books__card__description__in-cart');\n        buttonsContainer[index].appendChild(newButton);\n        console.log(newButton)\n      })\n      \n      const collectionButtons = document.querySelectorAll('.main__content__books__card__description__in-cart');\n      \n      console.log(selectedBooks)\n      collectionButtons.forEach(button => {\n        button.addEventListener('click', () => {\n          const isSelected = selectedBooks.includes(button);\n          if (isSelected) {\n            counter--;\n            button.innerHTML = \"By now\";\n            console.log(counter);\n            selectedBooks.splice(selectedBooks.indexOf(button), 1);\n            numberIndi.innerHTML = counter;\n          } else {\n            selectedBooks.push(button);\n            counter++;\n            button.innerHTML = \"In the cart\";\n            button.classList.add('main__content__books__card__description__in-cart--active');\n            numberIndi.innerHTML = counter;\n            numberIndi.classList.add('nav__divs__image__span--active');\n          }\n        })\n      })\n    });\n}\n\ncategories[0].classList.add('main__content__categories__list__item--active');\ncategories[0].click();\n\n\n\n\n//# sourceURL=webpack://home-work-12/./src/index.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mySlider\": () => (/* binding */ mySlider)\n/* harmony export */ });\nfunction mySlider(){\n\nconst sliderImages = document.querySelectorAll('.main__slider__image');\nconst sliderDots = document.querySelectorAll('.main__slider__dot');\n\nlet currentSlide = 0;\nlet currentDot = 0;\n\n\nfunction automaticSlider(){\n  sliderImages[currentSlide].classList.remove('main__slider__image--active');\n  currentSlide = (currentSlide + 1) % sliderImages.length;\n  sliderImages[currentSlide].classList.add('main__slider__image--active');\n  \n  sliderDots[currentDot].classList.remove('main__slider__dot--active');\n  currentDot = (currentDot + 1) % sliderDots.length;\n  sliderDots[currentDot].classList.add('main__slider__dot--active');\n}\n\n\nlet interval = setInterval(automaticSlider, 5000);\n\nsliderDots.forEach((dot, index) => {\n  dot.style.cursor = \"pointer\";\n  dot.addEventListener('click', () => {\n    \n    sliderImages.forEach((slide) => {\n      slide.classList.remove('main__slider__image--active');\n      \n    })\n    sliderDots.forEach((dot) => {\n      dot.classList.remove('main__slider__dot--active');\n      \n    })\n\n    sliderImages[index].classList.add('main__slider__image--active');\n    sliderDots[index].classList.add('main__slider__dot--active');\n\n    currentSlide = index;\n    currentDot = index;\n\n    clearInterval(interval);\n    interval = setInterval(automaticSlider, 5000);\n  })\n})\n}\n\n\n\n\n//# sourceURL=webpack://home-work-12/./src/slider.js?");

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