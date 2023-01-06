/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/generateBody.js":
/*!********************************!*\
  !*** ./src/js/generateBody.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const generateBody = () => {
  const body = document.getElementsByTagName('body')[0];
  body.innerHTML = '';

  const header = document.createElement('header');
  header.className = 'container';
  header.innerHTML = '<h1 class="header-title">RSS Virtual Keyboard</h1>';

  const main = document.createElement('main');
  const section = document.createElement('section');
  section.className = 'container';
  section.innerHTML = '<textarea readonly class="textarea" name="textarea"></textarea><div class="keyboard"></div>';
  main.append(section);

  const footer = document.createElement('footer');
  footer.className = 'container';
  footer.innerHTML = '<p class="description">Клавиатура создана в операционной системе MacOS</p><p class="description">Для переключения языка комбинация: Option(Alt) + Space</p>';

  body.append(header, main, footer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateBody);


/***/ }),

/***/ "./src/js/generateKey.js":
/*!*******************************!*\
  !*** ./src/js/generateKey.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Key {
  constructor({
    code,
    descriptionEng = null,
    descriptionEngCups = null,
    descriptionRu = null,
    descriptionRuCups = null,
    description = null,
  }) {
    this.id = code;
    this.descriptionEng = descriptionEng;
    this.descriptionEngCups = descriptionEngCups;
    this.descriptionRu = descriptionRu;
    this.descriptionRuCups = descriptionRuCups;
    this.description = description;
  }

  generateArticle() {
    let template = '';
    const article = document.createElement('article');
    article.className = 'key';
    article.id = this.id;

    if (this.descriptionEng) {
      let hidden = '';
      if (this.id.substr(0, 3) === 'Key') {
        hidden += ' hidden';
        template += `<span class="key-eng">
                       <span class="key-eng__lower char">${this.descriptionEng}</span>
                       <span class="key-eng__upper${hidden} char">${this.descriptionEngCups}</span>
                     </span>
                     <span class="key__ru hidden">
                       <span class="key-ru__lower char">${this.descriptionRu}</span>
                       <span class="key-ru__upper${hidden} char">${this.descriptionRuCups}</span>
                     </span>`;
      } else {
        hidden += ' hidden';
        template += `<span class="key-eng">
                        <span class="key-eng__lower char">${this.descriptionEng}</span>
                        <span class="key-eng__upper${hidden} char">${this.descriptionEngCups}</span>
                     </span>
                     <span class="key__ru hidden">
                        <span class="key-ru__lower char">${this.descriptionRu}</span>
                        <span class="key-ru__upper${hidden} char">${this.descriptionRuCups}</span>
                     </span>`;
      }
    }

    if (this.id === 'ArrowUp') {
      const div = document.createElement('div');
      div.className = 'arrow-middle';
      div.innerHTML = '<article class="arrow arrow-up" id="ArrowUp"><span></span></article><article class="arrow arrow-down" id="ArrowDown"><span></span></article>';
      return div;
    }

    if (this.description || this.description === '') {
      let classControl = ' _control';
      switch (this.id) {
        case 'Backspace':
          classControl += ' tab_backspace';
          break;

        case 'Tab':
          classControl += ' tab_backspace';
          break;

        case 'CapsLock':
          classControl += ' caps_enter';
          break;

        case 'Enter':
          classControl += ' caps_enter';
          break;

        case 'ShiftLeft':
          classControl += ' _shift';
          break;

        case 'ShiftRight':
          classControl += ' _shift';
          break;

        case 'MetaRight':
          classControl += ' _command';
          break;

        case 'MetaLeft':
          classControl += ' _command';
          break;

        case 'Space':
          classControl += ' _space';
          break;

        default:
          break;
      }
      article.className += classControl;
      template += `${this.description}`;
    }

    article.innerHTML = template;

    article.addEventListener('mousedown', (event) => {
      const { target } = event;
      let value = '';
      value = target.innerHTML;
      article.classList.toggle('active');

      const textarea = document.querySelector('.textarea');
      textarea.value += value;
    });

    article.addEventListener('mouseup', () => {
      article.classList.toggle('active');
    });

    return article;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Key);


/***/ }),

/***/ "./src/js/keyCodes.js":
/*!****************************!*\
  !*** ./src/js/keyCodes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const keyCodes = {
  0: {
    code: 'Backquote',
    descriptionEng: '§',
    descriptionEngCups: '±',
    descriptionRu: '&gt;',
    descriptionRuCups: '&lt;',
  },
  1: {
    code: 'Digit1',
    descriptionEng: '1',
    descriptionEngCups: '!',
    descriptionRu: '1',
    descriptionRuCups: '!',
  },
  2: {
    code: 'Digit2',
    descriptionEng: '2',
    descriptionEngCups: '@',
    descriptionRu: '2',
    descriptionRuCups: '"',
  },
  3: {
    code: 'Digit3',
    descriptionEng: '3',
    descriptionEngCups: '#',
    descriptionRu: '3',
    descriptionRuCups: '№',
  },
  4: {
    code: 'Digit4',
    descriptionEng: '4',
    descriptionEngCups: '$',
    descriptionRu: '4',
    descriptionRuCups: '%',
  },
  5: {
    code: 'Digit5',
    descriptionEng: '5',
    descriptionEngCups: '%',
    descriptionRu: '5',
    descriptionRuCups: ':',
  },
  6: {
    code: 'Digit6',
    descriptionEng: '6',
    descriptionEngCups: '^',
    descriptionRu: '6',
    descriptionRuCups: ',',
  },
  7: {
    code: 'Digit7',
    descriptionEng: '7',
    descriptionEngCups: '&amp;',
    descriptionRu: '7',
    descriptionRuCups: '.',
  },
  8: {
    code: 'Digit8',
    descriptionEng: '8',
    descriptionEngCups: '*',
    descriptionRu: '8',
    descriptionRuCups: ';',
  },
  9: {
    code: 'Digit9',
    descriptionEng: '9',
    descriptionEngCups: '(',
    descriptionRu: '9',
    descriptionRuCups: '(',
  },
  10: {
    code: 'Digit0',
    descriptionEng: '0',
    descriptionEngCups: ')',
    descriptionRu: '0',
    descriptionRuCups: ')',
  },
  11: {
    code: 'Minus',
    descriptionEng: '-',
    descriptionEngCups: '_',
    descriptionRu: '-',
    descriptionRuCups: '_',
  },
  12: {
    code: 'Equal',
    descriptionEng: '=',
    descriptionEngCups: '+',
    descriptionRu: '=',
    descriptionRuCups: '+',
  },
  13: {
    code: 'Backspace',
    description: 'delete',
  },
  14: {
    code: 'Tab',
    description: 'tab',
  },
  15: {
    code: 'KeyQ',
    descriptionEng: 'q',
    descriptionEngCups: 'Q',
    descriptionRu: 'й',
    descriptionRuCups: 'Й',
  },
  16: {
    code: 'KeyW',
    descriptionEng: 'w',
    descriptionEngCups: 'W',
    descriptionRu: 'ц',
    descriptionRuCups: 'Ц',
  },
  17: {
    code: 'KeyE',
    descriptionEng: 'e',
    descriptionEngCups: 'E',
    descriptionRu: 'у',
    descriptionRuCups: 'У',
  },
  18: {
    code: 'KeyR',
    descriptionEng: 'r',
    descriptionEngCups: 'R',
    descriptionRu: 'к',
    descriptionRuCups: 'К',
  },
  19: {
    code: 'KeyT',
    descriptionEng: 't',
    descriptionEngCups: 'T',
    descriptionRu: 'е',
    descriptionRuCups: 'Е',
  },
  20: {
    code: 'KeyY',
    descriptionEng: 'y',
    descriptionEngCups: 'Y',
    descriptionRu: 'н',
    descriptionRuCups: 'Н',
  },
  21: {
    code: 'KeyU',
    descriptionEng: 'u',
    descriptionEngCups: 'U',
    descriptionRu: 'г',
    descriptionRuCups: 'Г',
  },
  22: {
    code: 'KeyI',
    descriptionEng: 'i',
    descriptionEngCups: 'I',
    descriptionRu: 'ш',
    descriptionRuCups: 'Ш',
  },
  23: {
    code: 'KeyO',
    descriptionEng: 'o',
    descriptionEngCups: 'O',
    descriptionRu: 'щ',
    descriptionRuCups: 'Щ',
  },
  24: {
    code: 'KeyP',
    descriptionEng: 'p',
    descriptionEngCups: 'P',
    descriptionRu: 'з',
    descriptionRuCups: 'З',
  },
  25: {
    code: 'BracketLeft',
    descriptionEng: '[',
    descriptionEngCups: '{',
    descriptionRu: 'х',
    descriptionRuCups: 'Х',
  },
  26: {
    code: 'BracketRight',
    descriptionEng: ']',
    descriptionEngCups: '}',
    descriptionRu: 'ъ',
    descriptionRuCups: 'Ъ',
  },
  27: {
    code: 'Backslash',
    descriptionEng: '\\',
    descriptionEngCups: '|',
    descriptionRu: 'ё',
    descriptionRuCups: 'Ё',
  },
  28: {
    code: 'CapsLock',
    description: 'caps lock',
  },
  29: {
    code: 'KeyA',
    descriptionEng: 'a',
    descriptionEngCups: 'A',
    descriptionRu: 'ф',
    descriptionRuCups: 'Ф',
  },
  30: {
    code: 'KeyS',
    descriptionEng: 's',
    descriptionEngCups: 'S',
    descriptionRu: 'ы',
    descriptionRuCups: 'Ы',
  },
  31: {
    code: 'KeyD',
    descriptionEng: 'd',
    descriptionEngCups: 'D',
    descriptionRu: 'в',
    descriptionRuCups: 'В',
  },
  32: {
    code: 'KeyF',
    descriptionEng: 'f',
    descriptionEngCups: 'F',
    descriptionRu: 'а',
    descriptionRuCups: 'А',
  },
  33: {
    code: 'KeyG',
    descriptionEng: 'g',
    descriptionEngCups: 'G',
    descriptionRu: 'п',
    descriptionRuCups: 'П',
  },
  34: {
    code: 'KeyH',
    descriptionEng: 'h',
    descriptionEngCups: 'H',
    descriptionRu: 'р',
    descriptionRuCups: 'Р',
  },
  35: {
    code: 'KeyJ',
    descriptionEng: 'j',
    descriptionEngCups: 'J',
    descriptionRu: 'о',
    descriptionRuCups: 'О',
  },
  36: {
    code: 'KeyK',
    descriptionEng: 'k',
    descriptionEngCups: 'K',
    descriptionRu: 'л',
    descriptionRuCups: 'Л',
  },
  37: {
    code: 'KeyL',
    descriptionEng: 'l',
    descriptionEngCups: 'L',
    descriptionRu: 'д',
    descriptionRuCups: 'Д',
  },
  38: {
    code: 'Semicolon',
    descriptionEng: ';',
    descriptionEngCups: ':',
    descriptionRu: 'ж',
    descriptionRuCups: 'Ж',
  },
  39: {
    code: 'Quote',
    descriptionEng: '\'',
    descriptionEngCups: '"',
    descriptionRu: 'э',
    descriptionRuCups: 'Э',
  },
  40: {
    code: 'Enter',
    description: 'return',
  },
  41: {
    code: 'ShiftLeft',
    description: 'shift',
  },
  42: {
    code: 'KeyZ',
    descriptionEng: 'z',
    descriptionEngCups: 'Z',
    descriptionRu: 'я',
    descriptionRuCups: 'Я',
  },
  43: {
    code: 'KeyX',
    descriptionEng: 'x',
    descriptionEngCups: 'X',
    descriptionRu: 'ч',
    descriptionRuCups: 'Ч',
  },
  44: {
    code: 'KeyC',
    descriptionEng: 'c',
    descriptionEngCups: 'C',
    descriptionRu: 'с',
    descriptionRuCups: 'С',
  },
  45: {
    code: 'KeyV',
    descriptionEng: 'v',
    descriptionEngCups: 'V',
    descriptionRu: 'м',
    descriptionRuCups: 'М',
  },
  46: {
    code: 'KeyB',
    descriptionEng: 'b',
    descriptionEngCups: 'B',
    descriptionRu: 'и',
    descriptionRuCups: 'И',
  },
  47: {
    code: 'KeyN',
    descriptionEng: 'n',
    descriptionEngCups: 'N',
    descriptionRu: 'т',
    descriptionRuCups: 'Т',
  },
  48: {
    code: 'KeyM',
    descriptionEng: 'm',
    descriptionEngCups: 'M',
    descriptionRu: 'ь',
    descriptionRuCups: 'Ь',
  },
  49: {
    code: 'Comma',
    descriptionEng: ',',
    descriptionEngCups: '<',
    descriptionRu: 'б',
    descriptionRuCups: 'Б',
  },
  50: {
    code: 'Period',
    descriptionEng: '.',
    descriptionEngCups: '>',
    descriptionRu: 'ю',
    descriptionRuCups: 'Ю',
  },
  51: {
    code: 'Slash',
    descriptionEng: '/',
    descriptionEngCups: '?',
    descriptionRu: '/',
    descriptionRuCups: '?',
  },
  52: {
    code: 'ShiftRight',
    description: 'shift',
  },
  53: {
    code: 'fn',
    description: 'fn',
  },
  54: {
    code: 'ControlLeft',
    description: 'control',
  },
  55: {
    code: 'AltLeft',
    description: 'option',
  },
  56: {
    code: 'MetaLeft',
    description: 'command',
  },
  57: {
    code: 'Space',
    description: '',
  },
  58: {
    code: 'MetaRight',
    description: 'command',
  },
  59: {
    code: 'AltRight',
    description: 'option',
  },
  60: {
    code: 'ArrowLeft',
    description: '',
  },
  61: {
    code: 'ArrowUp',
    description: '',
  },

  62: {
    code: 'ArrowRight',
    description: '',
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyCodes);


/***/ }),

/***/ "./src/js/pushValue.js":
/*!*****************************!*\
  !*** ./src/js/pushValue.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pushValue = (keyCode) => {
  const key = document.getElementById(keyCode);
  const textarea = document.querySelector('.textarea');
  let value = '';
  key.childNodes.forEach((element) => {
    if (element.classList && !element.classList.contains('hidden')) {
      element.childNodes.forEach((e) => {
        if (e.classList && !e.classList.contains('hidden')) {
          value = e.textContent;
        }
      });
    }
  });
  textarea.value += value;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pushValue);


/***/ }),

/***/ "./src/js/renderKeyboard.js":
/*!**********************************!*\
  !*** ./src/js/renderKeyboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generateKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateKey */ "./src/js/generateKey.js");
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */


const generateArrKey = (data) => {
  const keyArr = [];
  for (const key in data) {
    keyArr.push(new _generateKey__WEBPACK_IMPORTED_MODULE_0__["default"](data[key]));
  }
  return keyArr;
};

const renderKeyboard = (data) => {
  const wrapper = document.querySelector('.keyboard');
  wrapper.innerHTML = '';
  const arrOfKey = generateArrKey(data);
  for (let i = 0; i < arrOfKey.length; i += 1) {
    wrapper.append(arrOfKey[i].generateArticle());
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderKeyboard);


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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _js_generateBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/generateBody */ "./src/js/generateBody.js");
/* harmony import */ var _js_keyCodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/keyCodes */ "./src/js/keyCodes.js");
/* harmony import */ var _js_renderKeyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/renderKeyboard */ "./src/js/renderKeyboard.js");
/* harmony import */ var _js_pushValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/pushValue */ "./src/js/pushValue.js");






(0,_js_generateBody__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_js_renderKeyboard__WEBPACK_IMPORTED_MODULE_3__["default"])(_js_keyCodes__WEBPACK_IMPORTED_MODULE_2__["default"]);

const textarea = document.querySelector('.textarea');

const arrChars = [];
document.addEventListener('keydown', (event) => {
  const { code } = event;
  arrChars.push(code);

  const article = document.getElementById(code);
  if (code !== 'CapsLock') {
    event.preventDefault();
    article.classList.add('active');
  }

  if (!article.classList.contains('_control')) {
    (0,_js_pushValue__WEBPACK_IMPORTED_MODULE_4__["default"])(code);
  }

  if (code === 'Enter') {
    textarea.value += '\n';
  }

  if (code === 'Tab') {
    textarea.value += '    ';
  }

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    const char = document.querySelectorAll('.char');
    char.forEach((element) => {
      element.classList.toggle('hidden');
    });
  }

  if (code === 'CapsLock') {
    article.classList.toggle('active');
    const char = document.querySelectorAll('.char');
    char.forEach((element) => {
      element.classList.toggle('hidden');
    });
  }

  if (code === 'Backspace') {
    const value = textarea.value.toString();
    textarea.value = value.slice(0, -1);
  }
});

document.addEventListener('keyup', (event) => {
  const { code } = event;
  const article = document.getElementById(code);
  if (code !== 'CapsLock') {
    article.classList.remove('active');
  }

  if (arrChars.includes('Space') && (arrChars.includes('AltLeft') || arrChars.includes('AltRight'))) {
    const keysEng = document.querySelectorAll('.key-eng');
    const keysRu = document.querySelectorAll('.key__ru');
    keysEng.forEach((element) => {
      element.classList.toggle('hidden');
    });
    keysRu.forEach((element) => {
      element.classList.toggle('hidden');
    });
  }

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    const char = document.querySelectorAll('.char');
    char.forEach((element) => {
      element.classList.toggle('hidden');
    });
  }

  if (code === 'Space' && arrChars.length === 1) {
    textarea.value += ' ';
  }

  arrChars.length = 0;
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map