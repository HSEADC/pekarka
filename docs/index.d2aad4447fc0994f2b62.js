/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 270:
/***/ (() => {

// Фильтрация по тегам кухонь
var multiSelectOptions = [];
function updateSelectData(option) {
  multiSelectOptions.forEach(function (o) {
    if (o.text === option.text) {
      o.active = !option.active;
    }
  });
}
function updateSelectOptionList() {
  var optionList = document.querySelector('.C_All_Cuisine_Tag_Row');

  // Очищаем текущие кнопки
  optionList.innerHTML = '';

  // Добавляем кнопку "Все" в начало
  var allButton = document.createElement('button');
  allButton.classList.add('A_All_Cuisine_Tag', 'active');
  allButton.innerText = 'все';
  allButton.addEventListener('click', function () {
    multiSelectOptions.forEach(function (opt) {
      return opt.active = false;
    });
    updateContent();
    document.querySelectorAll('.A_All_Cuisine_Tag').forEach(function (btn) {
      btn.classList.remove('active');
    });
    allButton.classList.add('active');
  });
  optionList.appendChild(allButton);

  // Добавляем остальные кнопки тегов
  multiSelectOptions.forEach(function (option) {
    var text = option.text,
      active = option.active;
    var listItem = document.createElement('button');
    listItem.classList.add('A_All_Cuisine_Tag');
    if (active) listItem.classList.add('active');
    listItem.innerText = text;
    listItem.addEventListener('click', function () {
      listItem.classList.toggle('active');
      updateSelectData(option);
      updateContent();

      // Обновляем состояние кнопки "все"
      var anyActive = multiSelectOptions.some(function (opt) {
        return opt.active;
      });
      document.querySelector('.C_All_Cuisine_Tag_Row button:first-child').classList.toggle('active', !anyActive);
    });
    optionList.appendChild(listItem);
  });
}
function initMultiSelect() {
  // Получаем все уникальные теги кухонь
  getContentCardDataTags().forEach(function (tag) {
    multiSelectOptions.push({
      text: tag,
      active: false
    });
  });
}

// Получаем теги кухонь из карточек
function getContentCardDataTags() {
  var contentCards = document.querySelectorAll('.O_Recipe_Card');
  var tags = [];
  contentCards.forEach(function (contentCard) {
    var cuisineTag = contentCard.querySelector('.A_Cuisine_Tag').textContent.trim();
    if (cuisineTag && !tags.includes(cuisineTag)) {
      tags.push(cuisineTag);
    }
  });
  return tags;
}

// Фильтрация контента
function updateContent() {
  var contentCards = document.querySelectorAll('.O_Recipe_Card');
  var selectedTags = multiSelectOptions.filter(function (opt) {
    return opt.active;
  }).map(function (opt) {
    return opt.text;
  });

  // Если не выбрано ни одного тега, показываем все карточки
  if (selectedTags.length === 0) {
    contentCards.forEach(function (card) {
      card.closest('a').style.display = 'block';
    });
    return;
  }

  // Фильтруем карточки
  contentCards.forEach(function (contentCard) {
    var cardCuisine = contentCard.querySelector('.A_Cuisine_Tag').textContent.trim();
    var shouldShow = selectedTags.includes(cardCuisine);
    contentCard.closest('a').style.display = shouldShow ? 'block' : 'none';
  });
}
document.addEventListener('DOMContentLoaded', function () {
  initMultiSelect();
  updateSelectOptionList();
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _scripts_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var _scripts_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_filter_js__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;