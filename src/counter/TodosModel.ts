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
}