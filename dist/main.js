/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




// create the header
function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Bar";

    header.appendChild(restaurantName);
    header.appendChild(createNav());        // append the navbar to the header
    
    return header;
}

function createNav() {
    const navbar = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            return;
        } else {
            setActiveButton(homeButton);
            (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
        }
        });

    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            return;
        } else {
            setActiveButton(menuButton);
            (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])(); 
        }
    });

    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            return;
        } else {
            setActiveButton(contactButton);
            (0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
    });

    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    return navbar;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button !== this){
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}


function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = "Bikram Singh";

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/bik400";
    githubLink.setAttribute("target", "_blank");

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");

    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".button-nav"));
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
    
    const image = document.createElement("img");
    image.src = "./images/home-img.jpg";
    image.alt = "Beer";
    
    home.appendChild(createParagraph("The best beers and food"));
    home.appendChild(image);
    home.appendChild(createParagraph("Order online or visit us!"));
    

    return home;
}

function createParagraph(text){
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "☎️ 123 456 7890";

    const address = document.createElement("p");
    address.textContent = "📍 In a galaxy far far away";

    contact.appendChild(phoneNumber);
    contact.appendChild(address);

    return contact
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";                          // erase the current content before showing contact info
    main.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createMenuItem("./images/burger.jpg","Burger", 
    "8 oz. Angus beef patty, Cheddar cheese, Applewood smoked bacon"));
    
    const pizzaImage = menu.appendChild(createMenuItem("./images/pepperoni-pizza.jpg","Pizza",
    ["Parmesan", " Pizza Sauce", " Pepperoni", " Mozzarella"]));
    pizzaImage.setAttribute("id", "pizza-image");

    menu.appendChild(createMenuItem("./images/chickenstrips.jpg","Chicken Strips",
    "Four (4) chicken strips. Choice of BBQ sauce, buffalo, or ranch"));

    menu.appendChild(createMenuItem("./images/fish&chips.jpg","Fish and Chips",
    "Fried beer-battered cod, served with tartar sauce"));

    menu.appendChild(createMenuItem("./images/grilledcheese.jpg","Grilled Cheese",
    "Sharp cheddar, Swiss and Havarti on toasted sourdough"));

    const chickenWingsImage = menu.appendChild(createMenuItem("./images/chickenwings.jpg","Chicken Wings",
    "Served with celery and carrot sticks. Choice of buffalo or lemon pepper"));
    chickenWingsImage.setAttribute("id", "chicken-wings-image");

    return menu;
}

function createMenuItem(image, name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodImage = document.createElement("img");
    foodImage.src = image;

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ })
/******/ 	]);
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;