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
var DateChecker_1 = __importDefault(require("./utils/DateChecker"));
var HtmlInteractive_1 = __importDefault(require("./HtmlInteractive"));
var TodoItem = /** @class */ (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem(title, dateLimit) {
        var _this = _super.call(this, document.createElement('span'), title + " - Fazer at\u00E9: " + dateLimit.toLocaleDateString('pt-BR')) || this;
        _this.title = title;
        _this.dateLimit = dateLimit;
        _this._generateNewIDAndSaveIt();
        _this._setCssClasses();
        return _this;
    }
    TodoItem.newID = function () {
        TodoItem.uid++;
    };
    TodoItem.prototype.getID = function () {
        return this._id;
    };
    TodoItem.prototype._generateNewIDAndSaveIt = function () {
        TodoItem.newID();
        this._id = TodoItem.uid;
        this.setAttributes([{ name: "data-id", value: "" + this._id }]);
    };
    TodoItem.prototype._setCssClasses = function () {
        var backgroundColor = this._isDelayed() ? "bg-blue-500" : "bg-red-500";
        this.setElementClass(["rounded", "font-bold", "shadow-lg", "px-6", "py-8", "font-normal", backgroundColor, "text-white", "my-2", "text-xl", "text-center"]);
    };
    TodoItem.prototype._isDelayed = function () {
        var dateChecker = new DateChecker_1.default();
        return dateChecker.isFuture(this.dateLimit);
    };
    TodoItem.uid = 0;
    return TodoItem;
}(HtmlInteractive_1.default));
exports.default = TodoItem;
