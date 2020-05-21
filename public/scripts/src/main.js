"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem_1 = __importDefault(require("./TodoItem"));
var TodoList_1 = __importDefault(require("./TodoList"));
var TodoController_1 = __importDefault(require("./TodoController"));
var item = new TodoItem_1.default("Fazer compras", new Date('2020-04-27'));
var todoList = new TodoList_1.default(document.querySelector("#todoList"), [item]);
todoList.refreshList();
var todoController = new TodoController_1.default(todoList, document.querySelector("#todoForm"));
todoController.bind();
