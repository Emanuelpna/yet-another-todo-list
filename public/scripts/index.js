/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/scripts/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/scripts/src/HtmlInteractive.js":
/*!***********************************************!*\
  !*** ./public/scripts/src/HtmlInteractive.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar HtmlInteractive = /** @class */ (function () {\n    function HtmlInteractive(elementTag, textContent) {\n        this.elementTag = elementTag;\n        this.textContent = textContent;\n        this.isValid = true;\n        this.elementTag.textContent = this.textContent;\n    }\n    HtmlInteractive.prototype.setElementClass = function (classNames) {\n        var _a;\n        (_a = this.elementTag.classList).add.apply(_a, classNames);\n    };\n    HtmlInteractive.prototype.removeElementClass = function (classNames) {\n        var _a;\n        (_a = this.elementTag.classList).remove.apply(_a, classNames);\n    };\n    HtmlInteractive.prototype.print = function (contentElement) {\n        var _a;\n        (_a = this.elementTag) === null || _a === void 0 ? void 0 : _a.appendChild(contentElement);\n    };\n    HtmlInteractive.prototype.resetContent = function () {\n        this.elementTag.innerHTML = \"\";\n    };\n    HtmlInteractive.prototype.setAttributes = function (attributes) {\n        var _this = this;\n        attributes.forEach(function (attribute) {\n            var _a;\n            (_a = _this.elementTag) === null || _a === void 0 ? void 0 : _a.setAttribute(attribute.name, attribute.value);\n        });\n    };\n    return HtmlInteractive;\n}());\nexports.default = HtmlInteractive;\n\n\n//# sourceURL=webpack:///./public/scripts/src/HtmlInteractive.js?");

/***/ }),

/***/ "./public/scripts/src/TodoController.js":
/*!**********************************************!*\
  !*** ./public/scripts/src/TodoController.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TodoItem_1 = __importDefault(__webpack_require__(/*! ./TodoItem */ \"./public/scripts/src/TodoItem.js\"));\nvar DateChecker_1 = __importDefault(__webpack_require__(/*! ./utils/DateChecker */ \"./public/scripts/src/utils/DateChecker.js\"));\nvar TodoController = /** @class */ (function () {\n    function TodoController(todoList, form) {\n        this.todoList = todoList;\n        this.form = form;\n        this.TodoItem = TodoItem_1.default;\n    }\n    TodoController.prototype.bind = function () {\n        var _this = this;\n        var _a;\n        (_a = this.form) === null || _a === void 0 ? void 0 : _a.addEventListener(\"submit\", function (e) {\n            var _a, _b;\n            e.preventDefault();\n            var title = (_a = _this.form) === null || _a === void 0 ? void 0 : _a.querySelector('input#title');\n            var dateLimitInput = (_b = _this.form) === null || _b === void 0 ? void 0 : _b.querySelector('#dateLimit');\n            if (title.value.length === 0 && dateLimitInput.value.length === 0) {\n                return false;\n            }\n            var dateLimit = new Date(dateLimitInput.value);\n            var isDateValid = _this._validateDate(dateLimit);\n            if (!isDateValid) {\n                alert(\"Escolha uma data no futuro\");\n                return false;\n            }\n            var todoItem = new _this.TodoItem(title.value, dateLimit);\n            _this.todoList.addNewItem(todoItem);\n        });\n    };\n    TodoController.prototype._validateDate = function (dateLimit) {\n        var dateChecker = new DateChecker_1.default();\n        return dateChecker.isFuture(dateLimit);\n    };\n    return TodoController;\n}());\nexports.default = TodoController;\n\n\n//# sourceURL=webpack:///./public/scripts/src/TodoController.js?");

/***/ }),

/***/ "./public/scripts/src/TodoItem.js":
/*!****************************************!*\
  !*** ./public/scripts/src/TodoItem.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DateChecker_1 = __importDefault(__webpack_require__(/*! ./utils/DateChecker */ \"./public/scripts/src/utils/DateChecker.js\"));\nvar HtmlInteractive_1 = __importDefault(__webpack_require__(/*! ./HtmlInteractive */ \"./public/scripts/src/HtmlInteractive.js\"));\nvar TodoItem = /** @class */ (function (_super) {\n    __extends(TodoItem, _super);\n    function TodoItem(title, dateLimit) {\n        var _this = _super.call(this, document.createElement('span'), title + \" - Fazer at\\u00E9: \" + dateLimit.toLocaleDateString('pt-BR')) || this;\n        _this.title = title;\n        _this.dateLimit = dateLimit;\n        _this._generateNewIDAndSaveIt();\n        _this._setCssClasses();\n        return _this;\n    }\n    TodoItem.newID = function () {\n        TodoItem.uid++;\n    };\n    TodoItem.prototype.getID = function () {\n        return this._id;\n    };\n    TodoItem.prototype._generateNewIDAndSaveIt = function () {\n        TodoItem.newID();\n        this._id = TodoItem.uid;\n        this.setAttributes([{ name: \"data-id\", value: \"\" + this._id }]);\n    };\n    TodoItem.prototype._setCssClasses = function () {\n        var backgroundColor = this._isDelayed() ? \"bg-blue-500\" : \"bg-red-500\";\n        this.setElementClass([\"rounded\", \"font-bold\", \"shadow-lg\", \"px-6\", \"py-8\", \"font-normal\", backgroundColor, \"text-white\", \"my-2\", \"text-xl\", \"text-center\"]);\n    };\n    TodoItem.prototype._isDelayed = function () {\n        var dateChecker = new DateChecker_1.default();\n        return dateChecker.isFuture(this.dateLimit);\n    };\n    TodoItem.uid = 0;\n    return TodoItem;\n}(HtmlInteractive_1.default));\nexports.default = TodoItem;\n\n\n//# sourceURL=webpack:///./public/scripts/src/TodoItem.js?");

/***/ }),

/***/ "./public/scripts/src/TodoList.js":
/*!****************************************!*\
  !*** ./public/scripts/src/TodoList.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar HtmlInteractive_1 = __importDefault(__webpack_require__(/*! ./HtmlInteractive */ \"./public/scripts/src/HtmlInteractive.js\"));\nvar TodoList = /** @class */ (function (_super) {\n    __extends(TodoList, _super);\n    function TodoList(element, todoItems) {\n        var _this = _super.call(this, element || document.createElement('span'), '') || this;\n        _this.element = element;\n        _this.todoItems = todoItems;\n        _this._addRemoveListener();\n        return _this;\n    }\n    TodoList.prototype.addNewItem = function (newTodoItem) {\n        this.todoItems.push(newTodoItem);\n        this.refreshList();\n    };\n    TodoList.prototype.removeItem = function (id) {\n        console.log('id :>> ', id);\n        this.todoItems = this.todoItems.filter(function (todoItem) { return todoItem.getID() !== id; });\n        this.refreshList();\n    };\n    TodoList.prototype._addRemoveListener = function () {\n        var _this = this;\n        this.elementTag.addEventListener('click', function (e) {\n            var clickedElement = e.target;\n            var itemID = clickedElement === null || clickedElement === void 0 ? void 0 : clickedElement.getAttribute(\"data-id\");\n            console.log('itemID :>> ', itemID);\n            if (!itemID) {\n                return false;\n            }\n            _this.removeItem(Number(itemID));\n        });\n    };\n    TodoList.prototype.refreshList = function () {\n        var _this = this;\n        this.resetContent();\n        this.todoItems.map(function (todoItem) { return _this.print(todoItem.elementTag); });\n    };\n    return TodoList;\n}(HtmlInteractive_1.default));\nexports.default = TodoList;\n\n\n//# sourceURL=webpack:///./public/scripts/src/TodoList.js?");

/***/ }),

/***/ "./public/scripts/src/main.js":
/*!************************************!*\
  !*** ./public/scripts/src/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TodoItem_1 = __importDefault(__webpack_require__(/*! ./TodoItem */ \"./public/scripts/src/TodoItem.js\"));\nvar TodoList_1 = __importDefault(__webpack_require__(/*! ./TodoList */ \"./public/scripts/src/TodoList.js\"));\nvar TodoController_1 = __importDefault(__webpack_require__(/*! ./TodoController */ \"./public/scripts/src/TodoController.js\"));\nvar item = new TodoItem_1.default(\"Fazer compras\", new Date('2020-04-27'));\nvar todoList = new TodoList_1.default(document.querySelector(\"#todoList\"), [item]);\ntodoList.refreshList();\nvar todoController = new TodoController_1.default(todoList, document.querySelector(\"#todoForm\"));\ntodoController.bind();\n\n\n//# sourceURL=webpack:///./public/scripts/src/main.js?");

/***/ }),

/***/ "./public/scripts/src/utils/DateChecker.js":
/*!*************************************************!*\
  !*** ./public/scripts/src/utils/DateChecker.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DateChecker = /** @class */ (function () {\n    function DateChecker() {\n    }\n    DateChecker.prototype.isFuture = function (dateLimit) {\n        var today = Date.now();\n        if (today > dateLimit.getTime()) {\n            return false;\n        }\n        return true;\n    };\n    return DateChecker;\n}());\nexports.default = DateChecker;\n\n\n//# sourceURL=webpack:///./public/scripts/src/utils/DateChecker.js?");

/***/ })

/******/ });