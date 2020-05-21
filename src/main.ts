import TodoItem from './TodoItem'
import TodoList from './TodoList';
import TodoController from './TodoController';


const item = new TodoItem("Fazer compras", new Date('2020-04-27'))
const todoList = new TodoList(document.querySelector("#todoList"), [item])
todoList.refreshList()

const todoController = new TodoController(todoList, document.querySelector("#todoForm"))
todoController.bind()
