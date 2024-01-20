export default interface TodosModel {
  todos: Todo[];
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}