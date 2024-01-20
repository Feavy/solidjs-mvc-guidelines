import TodosModel, {Todo} from "./TodosModel.ts";

export default class TodosController {
  public constructor(private readonly model: TodosModel) {
    this.addTodo = this.addTodo.bind(this);
  }

  public addTodo(text: string) {
    const todo: Todo = {
      id: Math.random().toString(),
      text,
      completed: false
    };
    this.model.setTodos(todos => todos.concat(todo));
  }

  public checkTodo(todo: Todo) {
    this.model.setTodos(this.model.todos.map(t => t.id === todo.id ? {...t, completed: !t.completed} : t));
  }
}
