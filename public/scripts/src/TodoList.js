"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlInteractive_1 = __importDefault(require("./HtmlInteractive"));
var TodoList = /** @class */ (function (_super) {
    __extends(TodoList, _super);
    function TodoList(element, todoItems) {
        var _this = _super.call(this, element || document.createElement('span'), '') || this;
        _this.element = element;
        _this.todoItems = todoItems;
        _this._addRemoveListener();
        return _this;
    }
    TodoList.prototype.addNewItem = function (newTodoItem) {
        this.todoItems.push(newTodoItem);
        this.refreshList();
    };
    TodoList.prototype.removeItem = function (id) {
        console.log('id :>> ', id);
        this.todoItems = this.todoItems.filter(function (todoItem) { return todoItem.getID() !== id; });
        this.refreshList();
    };
    TodoList.prototype._addRemoveListener = function () {
        var _this = this;
        this.elementTag.addEventListener('click', function (e) {
            var clickedElement = e.target;
            var itemID = clickedElement === null || clickedElement === void 0 ? void 0 : clickedElement.getAttribute("data-id");
            console.log('itemID :>> ', itemID);
            if (!itemID) {
                return false;
            }
            _this.removeItem(Number(itemID));
        });
    };
    TodoList.prototype.refreshList = function () {
        var _this = this;
        this.resetContent();
        this.todoItems.map(function (todoItem) { return _this.print(todoItem.elementTag); });
    };
    return TodoList;
}(HtmlInteractive_1.default));
exports.default = TodoList;
