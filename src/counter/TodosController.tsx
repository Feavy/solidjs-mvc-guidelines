import type TodosView from "./TodosView.tsx";
import {Setter} from "solid-js";
import TodosModel, {Todo} from "./TodosModel.ts";
import {createStore} from "solid-js/store";

export default class TodosController {
  public readonly model: TodosModel;
  private readonly updateModel: Setter<TodosModel>;

  public constructor(initialModel: TodosModel) {
    [this.model, this.updateModel] = createStore(initialModel);
    this.addTodo = this.addTodo.bind(this);
  }

  public addTodo(text: string) {
    const todo: Todo = {
      id: Math.random().toString(),
      text,
      completed: false
    };
    this.updateModel({todos: this.model.todos.concat(todo)});
  }

  public checkTodo(todo: Todo) {
    this.updateModel({todos: this.model.todos.map(t => t.id === todo.id ? {...t, completed: !t.completed} : t)});
  }
}
