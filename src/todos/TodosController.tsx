import TodosModel, {Todo} from "./TodosModel.ts";
import TodosView from "./TodosView.tsx";

export default class TodosController {
  public constructor(private readonly model: TodosModel, private readonly view: TodosView) {
    this.addButtonClicked = this.addButtonClicked.bind(this);
    this.todoCheckboxChanged = this.todoCheckboxChanged.bind(this);
  }

  public addButtonClicked(_: MouseEvent) {
    const text = this.view.inputRef!.value;
    this.model.addTodo(text);
    this.view.inputRef!.value = "";
  }

  public todoCheckboxChanged(todo: Todo) {
    this.model.checkTodo(todo);
  }
}
