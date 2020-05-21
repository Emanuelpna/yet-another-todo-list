import TodoItem from "./TodoItem"
import HtmlInteractive from "./HtmlInteractive"

export default class TodoList extends HtmlInteractive {
  constructor(public element: HTMLElement | null, public todoItems: TodoItem[]) {
    super(element || document.createElement('span'), '')

    this._addRemoveListener();
  }

  addNewItem(newTodoItem: TodoItem) {
    this.todoItems.push(newTodoItem);

    this.refreshList();
  }

  removeItem(id: number) {
    console.log('id :>> ', id);

    this.todoItems = this.todoItems.filter(todoItem => todoItem.getID() !== id);

    this.refreshList();
  }

  private _addRemoveListener() {
    this.elementTag.addEventListener('click', e => {
      const clickedElement = e.target as HTMLElement

      const itemID = clickedElement?.getAttribute("data-id");

      console.log('itemID :>> ', itemID);

      if (!itemID) {
        return false;
      }

      this.removeItem(Number(itemID))
    })
  }

  refreshList() {
    this.resetContent()

    this.todoItems.map(todoItem => this.print(todoItem.elementTag))
  }
}