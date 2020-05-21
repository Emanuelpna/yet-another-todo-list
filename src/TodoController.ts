import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import DateChecker from "./utils/DateChecker";

export default class TodoController {
  private TodoItem = TodoItem

  constructor(public todoList: TodoList, public form: HTMLFormElement | null) { }

  public bind() {
    this.form?.addEventListener("submit", e => {
      e.preventDefault();

      const title = this.form?.querySelector('input#title') as HTMLInputElement;
      const dateLimitInput = this.form?.querySelector('#dateLimit') as HTMLInputElement;

      if (title.value.length === 0 && dateLimitInput.value.length === 0) {
        return false;
      }

      const dateLimit = new Date(dateLimitInput.value);

      const isDateValid = this._validateDate(dateLimit);

      if (!isDateValid) {
        alert("Escolha uma data no futuro");
        return false;
      }

      const todoItem = new this.TodoItem(title.value, dateLimit);

      this.todoList.addNewItem(todoItem);
    })
  }


  private _validateDate(dateLimit: Date) {
    const dateChecker = new DateChecker();

    return dateChecker.isFuture(dateLimit)
  }

}