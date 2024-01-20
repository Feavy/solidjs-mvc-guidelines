import TodosController from "./TodosController.tsx";
import TodosModel, {Todo} from "./TodosModel.ts";
import {For} from "solid-js";

export interface TodosProps {
  model?: TodosModel;
  ref?: TodosView;
}

export default class TodosView {
  public inputRef: HTMLInputElement | null = null;

  public constructor(
      private readonly model: TodosModel,
      public readonly controller: TodosController,
      private readonly ref: ((view: TodosView) => void) | undefined = undefined
  ) {
    this.addButtonClicked = this.addButtonClicked.bind(this);
  }

  private addButtonClicked(e: MouseEvent) {
    // The view take care of calling the controller and updating its content which is not managed by the model
    const text = this.inputRef!.value;
    this.controller.addTodo(text);
    this.inputRef!.value = "";
  }

  private todoCheckboxChanged(todo: Todo) {
    this.controller.checkTodo(todo);
  }

  public render() {
    this.ref?.(this);
    return (
        <div>
          <div>
            <input type="text" ref={this.inputRef!}/>
            <button onClick={this.addButtonClicked}>Add</button>
          </div>
          <div class="todos">
            <For each={this.model.todos}>
              {todo => <p style={{"text-decoration": todo.completed ? "line-through" : ""}}>
                <input type="checkbox" checked={todo.completed} onChange={[this.todoCheckboxChanged, todo]}/> {todo.text}
              </p>}
            </For>
          </div>
        </div>
    );
  }
}

export function Todos(props: TodosProps) {
  const model = props.model || new TodosModel();
  const controller = new TodosController(model);
  return new TodosView(model, controller, props.ref as any).render();
}
