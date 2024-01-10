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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/setup */ \"./src/modules/setup.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n// use 'npx webpack --watch' to run site\n\n\n\n\n\nconsole.log(\"It's working\");\n(0,_modules_setup__WEBPACK_IMPORTED_MODULE_0__.headerContent)();\n(0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.homeContent)();\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.menuContent)();\n(0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.contactContent)();\n(0,_modules_setup__WEBPACK_IMPORTED_MODULE_0__.showSection)(\"home\");\n(0,_modules_setup__WEBPACK_IMPORTED_MODULE_0__.locationContent)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactContent: () => (/* binding */ contactContent),\n/* harmony export */   contactDiv: () => (/* binding */ contactDiv)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/modules/setup.js\");\n\nconst contactDiv = document.createElement('div');\nconst contactForm = document.createElement('form');\nconst emailPhoneFieldset = document.createElement('fieldset');\nconst socialsList = document.createElement('ul');\n\nconst contactContent = () => {\n    _setup__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(contactDiv);\n    contactDiv.appendChild(contactForm);\n    \n    contactForm.action = '#';\n    contactForm.method = 'get';\n\n    createFormField(\"Name\", \"msg_name\", \"text\", true, false, \"\", false);\n\n    contactForm.appendChild(emailPhoneFieldset);\n    createFormField(\"Email\", \"msg_email\", \"email\", true, false, \"\", false);\n    createFormField(\"Phone\", \"msg_phone\", \"tel\", false, true, \"[0-9]{3}-[0-9]{3}-[0-9]{4}\", false);\n\n    createFormField(\"Message\", \"msg_msg\", \"text\", true, false, \"\", true);\n\n    const submitButton = document.createElement('button');\n    submitButton.classList.add('submit-button');\n    submitButton.type = \"submit\";\n    submitButton.textContent = \"Submit\";\n    contactForm.appendChild(submitButton);\n    \n    socialsList.classList.add('socials-list');\n    contactDiv.appendChild(socialsList);\n\n    const socialsTitle = document.createElement('li');\n    socialsTitle.textContent = \"Socials\";\n    socialsList.appendChild(socialsTitle);\n\n    addSocial(\"instagram\", \"@sushishop\");\n    addSocial(\"youtube\", \"sushishopyt\");\n    addSocial(\"facebook\", \"@sushishopfb\");\n}\n\nconst createFormField = (label, fieldFor, type, isRequired, hasPattern, pattern, isTextarea) => {\n    const fieldDiv = document.createElement('div');\n    fieldDiv.classList.add('form-field');\n    if (type == \"email\" || type == \"tel\") {\n        emailPhoneFieldset.appendChild(fieldDiv);\n    } else {\n        contactForm.appendChild(fieldDiv);\n    }\n\n    const fieldLabel = document.createElement('label');\n    fieldLabel.textContent = label;\n    fieldLabel.htmlFor = fieldFor;\n    fieldDiv.appendChild(fieldLabel);\n\n    if (isTextarea) {\n        const fieldTextarea = document.createElement('textarea');\n        fieldTextarea.rows = \"4\";\n        fieldTextarea.cols = \"50\";\n        fieldTextarea.name = fieldFor;\n        fieldTextarea.id = fieldFor;\n        fieldTextarea.required = isRequired;\n        if (hasPattern) {\n            fieldTextarea.pattern = pattern;\n        }\n        fieldDiv.appendChild(fieldTextarea);\n    } else {\n        const fieldInput = document.createElement('input');\n        fieldInput.type = type;\n        fieldInput.name = fieldFor;\n        fieldInput.id = fieldFor;\n        fieldInput.required = isRequired;\n        if (hasPattern) {\n            fieldInput.pattern = pattern;\n        }\n        fieldDiv.appendChild(fieldInput);\n    }\n}\n\nconst addSocial = (platform, username) => {\n    const socialItem = document.createElement('li');\n    socialsList.appendChild(socialItem);\n\n    const socialItemImg = document.createElement('img');\n    socialItemImg.src = `images/${platform}.svg`;\n    socialItemImg.alt = platform;\n    socialItem.appendChild(socialItemImg);\n\n    const socialItemLink = document.createElement('a');\n    socialItemLink.href = `https://www.${platform}.com`;\n    socialItemLink.target = \"_blank\";\n    socialItemLink.textContent = username;\n    socialItem.appendChild(socialItemLink);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeContent: () => (/* binding */ homeContent),\n/* harmony export */   homeDiv: () => (/* binding */ homeDiv)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/modules/setup.js\");\n\nconst homeDiv = document.createElement('div');\n\nconst homeContent = () => {\n    _setup__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(homeDiv);\n\n    const homeHeader = document.createElement(\"p\");\n    homeHeader.textContent = \"Best Sushi in Town\";\n    homeHeader.classList.add(\"home-title\");\n    homeDiv.appendChild(homeHeader);\n    \n    const homeSubtitle = document.createElement(\"p\");\n    homeSubtitle.textContent = \"Order online or in-person\";\n    homeSubtitle.classList.add(\"home-subtitle\");\n    homeDiv.appendChild(homeSubtitle);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuContent: () => (/* binding */ menuContent),\n/* harmony export */   menuDiv: () => (/* binding */ menuDiv)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/modules/setup.js\");\n\nconst menuDiv = document.createElement('div');\n\nconst menuContent = () => {\n    _setup__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(menuDiv);\n\n    addMenuItem(\"Dynamite\", 8.95, \"shrimp tempura, avocado, cucumber, orange masago, spicy light mayo, sesame\");\n    addMenuItem(\"Miami\", 11.95, \"smoked salmon, avocado, orange masago, green onion, cream cheese, tempura, spicy light mayo, sesame, soy sheet\");\n    addMenuItem(\"Rainbow\", 10.95, \"tuna, salmon, avocado, green onion, cucumber, tempura, spicy light mayo, spicy sauce\");\n    addMenuItem(\"Salmon Kamikaze\", 9.95, \"salmon, kanikama, avocado, cucumber, green onion, tempura, spicy light mayo, spicy sauce, orange masago\");\n    addMenuItem(\"Spicy Salmon Crunch\", 14.95, \"salmon, cucumber, green onion, tempura, spicy sauce, spicy light mayo\");\n    addMenuItem(\"Spicy Shrimp\", 7.95, \"shrimp, kanikama, avocado, lettuce, green onion, tempura, spicy light mayo, spicy sauce, red tobiko, sesame\");\n}\n\nconst addMenuItem = (flavorName, price, description) => {\n    const menuItemDiv = document.createElement('div');\n    menuItemDiv.classList.add('menu-item');\n    menuDiv.appendChild(menuItemDiv);\n\n    let imgString = flavorName.toLowerCase().replace(/\\s+/g, \"-\");\n    const itemImg = document.createElement('img');\n    itemImg.src = `images/${imgString}.png`;\n    itemImg.alt = flavorName;\n    menuItemDiv.appendChild(itemImg);\n\n    \n    // let flavorTitle = flavorName.charAt(0).toUpperCase() + flavorName.slice(1);\n    const itemTitlePrice = document.createElement('h1');\n    itemTitlePrice.textContent = `${flavorName} · $${price}`;\n    menuItemDiv.appendChild(itemTitlePrice);\n\n    const itemDesc = document.createElement('p');\n    itemDesc.textContent = description;\n    menuItemDiv.appendChild(itemDesc);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/setup.js":
/*!******************************!*\
  !*** ./src/modules/setup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contentDiv: () => (/* binding */ contentDiv),\n/* harmony export */   headerContent: () => (/* binding */ headerContent),\n/* harmony export */   locationContent: () => (/* binding */ locationContent),\n/* harmony export */   showSection: () => (/* binding */ showSection)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/modules/contact.js\");\n// import sections from other pages then use them for showSection\n// show home section on first load\n// \n\n\n\nconst contentDiv = document.querySelector('#content');\nconst headerDiv = document.createElement('div');\nconst locationSectionDiv = document.createElement('div');\nconst locationsDiv = document.createElement('div');\n\nconst homeLink = document.createElement('a');\nconst menuLink = document.createElement('a');\nconst contactLink = document.createElement('a');\n\nconst addHeaderToContent = () => {\n    headerDiv.classList.add('header');\n    contentDiv.appendChild(headerDiv);\n}\n\nconst addLocationsToContent = () => {\n    locationSectionDiv.classList.add('location-section');\n    contentDiv.appendChild(locationSectionDiv);\n}\n\nconst headerContent = () => {\n    addHeaderToContent();\n    const logo = document.createElement('img');\n    logo.src = \"../dist/images/svg-logo.svg\";\n    logo.alt = \"Logo\";\n    logo.classList.add(\"header-logo\");\n    headerDiv.appendChild(logo);\n\n    const pageSectionsDiv = document.createElement('div');\n    pageSectionsDiv.classList.add(\"page-sections\");\n    headerDiv.appendChild(pageSectionsDiv);\n\n    homeLink.href = \"#\";\n    homeLink.textContent = \"Home\";\n    homeLink.onclick = () => { showSection('home') };\n    homeLink.classList.add(\"page-header\");\n    pageSectionsDiv.appendChild(homeLink);\n\n    menuLink.href = \"#\";\n    menuLink.textContent = \"Menu\";\n    menuLink.onclick = () => { showSection('menu') };\n    menuLink.classList.add(\"page-header\");\n    pageSectionsDiv.appendChild(menuLink);\n\n    contactLink.href = \"#\";\n    contactLink.textContent = \"Contact\";\n    contactLink.onclick = () => { showSection('contact') };\n    contactLink.classList.add(\"page-header\");\n    pageSectionsDiv.appendChild(contactLink);\n\n\n    const orderButton = document.createElement('button');\n    orderButton.textContent = \"ORDER\";\n    orderButton.classList.add('order-button');\n    headerDiv.appendChild(orderButton);\n}\n\nconst showSection = (section) => {\n    homeLink.style.textDecoration = \"none\";\n    menuLink.style.textDecoration = \"none\";\n    contactLink.style.textDecoration = \"none\";\n\n    _home__WEBPACK_IMPORTED_MODULE_0__.homeDiv.classList.add(\"hide-content\");\n    _menu__WEBPACK_IMPORTED_MODULE_1__.menuDiv.classList.add(\"hide-content\");\n    _menu__WEBPACK_IMPORTED_MODULE_1__.menuDiv.classList.remove(\"menu-content\");\n    _contact__WEBPACK_IMPORTED_MODULE_2__.contactDiv.classList.add(\"hide-content\");\n    _contact__WEBPACK_IMPORTED_MODULE_2__.contactDiv.classList.remove(\"contact-content\");\n    \n    switch(section) {\n        case \"home\":\n            homeLink.style.textDecoration = \"underline\";\n\n            _home__WEBPACK_IMPORTED_MODULE_0__.homeDiv.classList.remove(\"hide-content\");\n            _home__WEBPACK_IMPORTED_MODULE_0__.homeDiv.classList.add(\"home-content\");\n            break;\n        case \"menu\":\n            menuLink.style.textDecoration = \"underline\";\n\n            _menu__WEBPACK_IMPORTED_MODULE_1__.menuDiv.classList.remove(\"hide-content\");\n            _menu__WEBPACK_IMPORTED_MODULE_1__.menuDiv.classList.add(\"menu-content\");\n            break;\n        case \"contact\":\n            contactLink.style.textDecoration = \"underline\";\n\n            _contact__WEBPACK_IMPORTED_MODULE_2__.contactDiv.classList.remove(\"hide-content\");\n            _contact__WEBPACK_IMPORTED_MODULE_2__.contactDiv.classList.add(\"contact-content\");\n            break;\n    }\n}\n\nconst locationContent = () => {\n    addLocationsToContent();\n    const locationsTitle = document.createElement('p');\n    locationsTitle.textContent = \"Locations\";\n    locationSectionDiv.appendChild(locationsTitle);\n\n    locationsDiv.classList.add(\"locations\");\n    locationSectionDiv.appendChild(locationsDiv);\n    \n    addLocation(\"123 Parkway Ave\", \n                \"Los Angeles, California, 12345\", \n                [\"Mon-Fri: 10am - 11pm\", \n                \"Sat: 10am - 12am\",\n                \"Sun: 9am - 7pm\"],\n                \"123-456-7890\");\n\n    addLocation(\"789 Amythest Drive\", \n                \"Brooklyn, New York, 12345\", \n                [\"Mon-Fri: 7am - 10pm\", \n                \"Sat: 7am - 12am\",\n                \"Sun: 10am - 9pm\"],\n                \"123-456-7890\");\n\n    addLocation(\"456 East St\", \n                \"Chicago, Illinois, 12345\", \n                [\"Mon-Fri: 8am - 11pm\", \n                \"Weekend: 6am - 12am\"],\n                \"123-456-7890\");\n}\n\nconst addLocation = (address, cityStateZip, hours, phoneNum) => {\n    const locationDiv = document.createElement('div');\n    locationDiv.classList.add(\"location\");\n    locationsDiv.appendChild(locationDiv);\n\n    const addressP = document.createElement('p');\n    addressP.classList.add(\"address\");\n    addressP.textContent = address;\n    locationDiv.appendChild(addressP);\n\n    const cityStateP = document.createElement('p');\n    cityStateP.classList.add(\"city-state\");\n    cityStateP.textContent = cityStateZip;\n    locationDiv.appendChild(cityStateP);\n\n    const hoursList = document.createElement('ul');\n    locationDiv.appendChild(hoursList);\n\n    const hoursTitle = document.createElement('li');\n    hoursTitle.classList.add(\"hours-title\");\n    hoursList.appendChild(hoursTitle);\n    hours.forEach(day => {\n        const hourElement = document.createElement('li');\n        hourElement.textContent = day;\n        hoursList.appendChild(hourElement);\n    });\n\n    const phoneNumberDiv = document.createElement('div');\n    phoneNumberDiv.classList.add(\"phone-number\");\n    locationDiv.appendChild(phoneNumberDiv);\n\n    const phoneImg = document.createElement('img');\n    phoneImg.src = \"images/phone.svg\";\n    phoneImg.alt = \"Phone\";\n    phoneImg.classList.add(\"phone-number-img\");\n    phoneNumberDiv.appendChild(phoneImg);\n\n    const phoneNumP = document.createElement('p');\n    phoneNumP.textContent = phoneNum;\n    phoneNumberDiv.appendChild(phoneNumP);\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/setup.js?");

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