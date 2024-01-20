import { render } from "solid-js/web";

import TodosView, {Todos} from "./counter/TodosView.tsx";
import TodosModel from "./counter/TodosModel.ts";

const initialModel: TodosModel = {
  todos: [
    {id: "0", text: "Hello, World!", completed: false},
  ]
}

render(function () {
  let todos: TodosView; // Use this reference to manipulate the view through its controller
  return (
      <div>
        <Todos ref={todos!} model={initialModel}/>
      </div>
  );
}, document.getElementById("root")!);
