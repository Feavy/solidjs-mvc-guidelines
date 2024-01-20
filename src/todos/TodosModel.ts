import {createStore, SetStoreFunction} from "solid-js/store";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default class TodosModel {
  public todos: Todo[] = [];
  public setTodos: SetStoreFunction<Todo[]>;

  public constructor(todos: Todo[] = []) {
    [this.todos, this.setTodos] = createStore(todos);
  }

  public addTodo(todo: string | Todo) {
    if (typeof todo === "string") {
      todo = {
        id: Math.random().toString(),
        text: todo,
        completed: false
      };
    }
    this.setTodos(todos => todos.concat(todo as Todo));
    return todo;
  }

  public checkTodo(todo: Todo) {
    this.setTodos(todos => todos.map(t => t.id === todo.id ? {...t, completed: !t.completed} : t));
  }
}