/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/js/modules/arrowUp.js":
/*!************************************!*\
  !*** ./dist/js/modules/arrowUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function arrowUp() {
  const arrowUp = document.querySelector('.arrow-up');
  window.addEventListener('scroll', () => {
    const coordinates = window.pageYOffset || document.documentElement.scrollTop;
    const arrowActive = 615;

    if (coordinates >= arrowActive) {
      arrowUp.classList.add('active');
    } else {
      arrowUp.classList.remove('active');
    }
  });
  arrowUp.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowUp);

/***/ }),

/***/ "./dist/js/modules/checkMob.js":
/*!*************************************!*\
  !*** ./dist/js/modules/checkMob.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function checkMobile() {
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };

  if (isMobile.any()) {
    document.body.classList.add('mobile');
  } else {
    document.body.classList.add('pc');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkMobile);

/***/ }),

/***/ "./dist/js/modules/hamb.js":
/*!*********************************!*\
  !*** ./dist/js/modules/hamb.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function hamburger() {
  const menuHamb = document.querySelector('.wrap-menu__nav'),
        NavBackground = document.querySelector('.wrap-menu__background');
  document.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.wrap-menu__hamburger')) {
      menuHamb.classList.add('active');
      document.body.classList.add('lock');
      NavBackground.classList.add('active');
    } else if (target.closest('.nav__hamburger') || target.closest('.wrap-menu__background') || target.closest('.wrap-menu__nav ul li a')) {
      menuHamb.classList.remove('active');
      document.body.classList.remove('lock');
      NavBackground.classList.remove('active');
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);

/***/ }),

/***/ "./dist/js/modules/localStoreCheckbox.js":
/*!***********************************************!*\
  !*** ./dist/js/modules/localStoreCheckbox.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function localCheckbox() {
  const checkbox = document.querySelector('.wrap-check__checkbox'),
        button = document.querySelector('.wrap-inp-btn__btn'),
        checkboxPolicy = document.querySelector('.wrap-check-policy__check-policy');

  if (localStorage.getItem('checked')) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      localStorage.setItem('checked', true);
    } else {
      localStorage.removeItem('checked');
    }
  });

  if (localStorage.getItem('checked-policy')) {
    checkboxPolicy.checked = true;
    button.removeAttribute('disabled');
  } else {
    checkboxPolicy.checked = false;
    button.setAttribute('disabled', 'disabled');
  }

  checkboxPolicy.addEventListener('change', () => {
    if (checkboxPolicy.checked) {
      localStorage.setItem('checked-policy', true);
      button.removeAttribute('disabled');
    } else {
      localStorage.removeItem('checked-policy');
      button.setAttribute('disabled', 'disabled');
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localCheckbox);

/***/ }),

/***/ "./dist/js/modules/postForm.js":
/*!*************************************!*\
  !*** ./dist/js/modules/postForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./dist/js/services/services.js");


function postForm() {
  const form = document.querySelector('form'),
        btn = document.querySelector('.wrap-inp-btn__btn');
  const message = {
    loading: "img/tail-spin.svg",
    fail: "try again",
    complete: "done"
  };

  function postPomp(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      loadingBtn(message.loading);
      (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.handlingPostPomp)('http://localhost:3000/req', "POST", json).then(() => messageBtn(message.complete)).catch(() => messageBtn(message.fail)).finally(form.reset());
    });
  }

  postPomp(form);

  function loadingBtn(message) {
    btn.innerText = '';
    btn.setAttribute("disable", "disable");
    const img = document.createElement('img');
    img.style.width = "30px";
    img.src = message;
    btn.append(img);
  }

  function messageBtn(message) {
    btn.innerText = `${message}`;
    btn.setAttribute("disable", "disable");
    setTimeout(() => {
      btn.innerText = 'SUBSCRIBE';
    }, 3000);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postForm);

/***/ }),

/***/ "./dist/js/modules/readMoreStore.js":
/*!******************************************!*\
  !*** ./dist/js/modules/readMoreStore.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function readeMoreStore() {
  const blocksStore = document.querySelectorAll('.block-store__content'),
        links = document.querySelectorAll('.content__link'),
        wrapImg = document.querySelectorAll('.content__img-wrap');
  blocksStore.forEach((el, i) => {
    const ul = document.createElement('ul'),
          div = document.createElement('div');
    div.classList.add('content__close-content');
    links[i].addEventListener('click', e => {
      e.preventDefault();
      el.classList.toggle('active');
      document.body.classList.toggle('lock');

      if (!el.classList.contains('visible')) {
        el.style.display = '';
      }

      if (el.classList.contains('active')) {
        ul.innerHTML = `
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                `;
        el.append(ul);
        el.append(div);
      } else {
        ul.remove();
        div.remove();
      }
    });
    wrapImg[i].addEventListener('click', e => {
      e.preventDefault();
      el.classList.add('active');
      document.body.classList.add('lock');

      if (!el.classList.contains('visible')) {
        el.style.display = '';
      }

      if (el.classList.contains('active')) {
        ul.innerHTML = `
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, similique?</li>   
                `;
        el.append(ul);
        el.append(div);
      }
    });
    div.addEventListener('click', () => {
      ul.remove();
      div.remove();
      el.classList.remove('active');
      document.body.classList.remove('lock');
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readeMoreStore);

/***/ }),

/***/ "./dist/js/modules/viewAll.js":
/*!************************************!*\
  !*** ./dist/js/modules/viewAll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function viewAll() {
  const wrapStoreProduct = document.querySelector('.store__wrap-block-store'),
        wraplinkStore = document.querySelector('.wrap-block-store__btn'),
        contentStore = document.querySelectorAll('.wrap-block-store__block-store');
  const link = document.createElement('a');
  link.setAttribute('href', '#');
  link.innerText = 'View All Products';
  wraplinkStore.append(link);

  function visible(display) {
    contentStore.forEach(el => {
      if (!el.classList.contains('visible')) {
        el.style.display = display;
      }
    });
  }

  visible('none');
  link.addEventListener('click', e => {
    wrapStoreProduct.classList.toggle('active');
    e.preventDefault();

    if (wrapStoreProduct.classList.contains('active')) {
      link.innerText = 'Hide All Products';
      visible('block');
    } else {
      link.innerText = 'View All Products';
      visible('none');
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewAll);

/***/ }),

/***/ "./dist/js/modules/viewDetailsInfo.js":
/*!********************************************!*\
  !*** ./dist/js/modules/viewDetailsInfo.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function viewDetails() {
  const linksVases = document.querySelectorAll('.content-vases__link'),
        blockList = document.querySelectorAll('.content-vases__list'),
        blockVases = document.querySelectorAll('.block-vases__content-vases');
  blockVases.forEach((el, i) => {
    linksVases[i].addEventListener('click', e => {
      e.preventDefault();
      el.classList.toggle('active');
      blockList[i].classList.toggle('active');
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewDetails);

/***/ }),

/***/ "./dist/js/services/services.js":
/*!**************************************!*\
  !*** ./dist/js/services/services.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDataProduct": () => (/* binding */ getDataProduct),
/* harmony export */   "handlingPostPomp": () => (/* binding */ handlingPostPomp)
/* harmony export */ });
async function getDataProduct(url) {
  const res = await fetch(url);
  return res.json();
}

async function handlingPostPomp(url, method, json) {
  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-type": "application/json"
    },
    body: json
  });
  return res.json();
}




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
/*!************************!*\
  !*** ./dist/js/app.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_postForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/postForm */ "./dist/js/modules/postForm.js");
/* harmony import */ var _modules_arrowUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/arrowUp */ "./dist/js/modules/arrowUp.js");
/* harmony import */ var _modules_hamb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hamb */ "./dist/js/modules/hamb.js");
/* harmony import */ var _modules_checkMob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/checkMob */ "./dist/js/modules/checkMob.js");
/* harmony import */ var _modules_localStoreCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/localStoreCheckbox */ "./dist/js/modules/localStoreCheckbox.js");
/* harmony import */ var _modules_viewAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/viewAll */ "./dist/js/modules/viewAll.js");
/* harmony import */ var _modules_viewDetailsInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/viewDetailsInfo */ "./dist/js/modules/viewDetailsInfo.js");
/* harmony import */ var _modules_readMoreStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/readMoreStore */ "./dist/js/modules/readMoreStore.js");










window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_checkMob__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_hamb__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_arrowUp__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_postForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_localStoreCheckbox__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_viewAll__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_viewDetailsInfo__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_modules_readMoreStore__WEBPACK_IMPORTED_MODULE_7__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map