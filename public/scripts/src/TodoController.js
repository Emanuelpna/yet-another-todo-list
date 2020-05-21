"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem_1 = __importDefault(require("./TodoItem"));
var DateChecker_1 = __importDefault(require("./utils/DateChecker"));
var TodoController = /** @class */ (function () {
    function TodoController(todoList, form) {
        this.todoList = todoList;
        this.form = form;
        this.TodoItem = TodoItem_1.default;
    }
    TodoController.prototype.bind = function () {
        var _this = this;
        var _a;
        (_a = this.form) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
            var _a, _b;
            e.preventDefault();
            var title = (_a = _this.form) === null || _a === void 0 ? void 0 : _a.querySelector('input#title');
            var dateLimitInput = (_b = _this.form) === null || _b === void 0 ? void 0 : _b.querySelector('#dateLimit');
            if (title.value.length === 0 && dateLimitInput.value.length === 0) {
                return false;
            }
            var dateLimit = new Date(dateLimitInput.value);
            var isDateValid = _this._validateDate(dateLimit);
            if (!isDateValid) {
                alert("Escolha uma data no futuro");
                return false;
            }
            var todoItem = new _this.TodoItem(title.value, dateLimit);
            _this.todoList.addNewItem(todoItem);
        });
    };
    TodoController.prototype._validateDate = function (dateLimit) {
        var dateChecker = new DateChecker_1.default();
        return dateChecker.isFuture(dateLimit);
    };
    return TodoController;
}());
exports.default = TodoController;
