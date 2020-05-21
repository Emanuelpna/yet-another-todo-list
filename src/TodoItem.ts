import DateChecker from './utils/DateChecker'
import HtmlInteractive from "./HtmlInteractive"

export default class TodoItem extends HtmlInteractive {
  static uid = 0;

  private _id!: number;

  constructor(public title: string, public dateLimit: Date) {
    super(document.createElement('span'), `${title} - Fazer até: ${dateLimit.toLocaleDateString('pt-BR')}`)

    this._generateNewIDAndSaveIt();

    this._setCssClasses();
  }

  static newID() {
    TodoItem.uid++;
  }

  getID() {
    return this._id;
  }

  private _generateNewIDAndSaveIt() {
    TodoItem.newID();
    
    this._id = TodoItem.uid

    this.setAttributes([{ name: "data-id", value: `${this._id}` }]);
  }

  private _setCssClasses() {
    const backgroundColor = this._isDelayed() ? "bg-blue-500" : "bg-red-500"
    
    this.setElementClass(["rounded", "font-bold", "shadow-lg", "px-6", "py-8", "font-normal", backgroundColor, "text-white", "my-2", "text-xl", "text-center"])
  }

  private _isDelayed() {
    const dateChecker = new DateChecker();

    return dateChecker.isFuture(this.dateLimit)
  }
}


