import TodosController from "./TodosController.tsx";
import TodosModel from "./TodosModel.ts";
import {For} from "solid-js";

export interface TodosProps {
  model?: TodosModel;
  ref?: TodosView;
}

export default class TodosView {
  public readonly controller: TodosController;
  public inputRef: HTMLInputElement | null = null;

  public constructor(
      private readonly model: TodosModel,
      private readonly ref: ((view: TodosView) => void) | undefined = undefined
  ) {
    this.controller = new TodosController(model, this);
  }

  public render() {
    this.ref?.(this);
    return (
        <div>
          <div>
            <input type="text" ref={this.inputRef!}/>
            <button onClick={this.controller.addButtonClicked}>Add</button>
          </div>
          <div class="todos">
            <For each={this.model.todos}>
              {todo =>
                  <p style={{"text-decoration": todo.completed ? "line-through" : ""}}>
                    <input type="checkbox" checked={todo.completed} onChange={[this.controller.todoCheckboxChanged, todo]}/> {todo.text}
                  </p>
              }
            </For>
          </div>
        </div>
    );
  }
}

export function Todos(props: TodosProps) {
  const model = props.model || new TodosModel();
  return new TodosView(model, props.ref as any).render();
}
