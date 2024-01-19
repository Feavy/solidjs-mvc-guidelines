import { render } from "solid-js/web";

import CounterView, { Counter } from "./counter/CounterView";

render(function () {
  let counter: CounterView;
  let counter2: CounterView;
  return (
      <div>
        <Counter ref={counter!} />
        <br />
        <button onClick={(_) => counter.controller.reset()}>Reset</button>
        <br />
        <Counter ref={counter2!} />
        <br />
        <button onClick={(_) => counter2.controller.reset()}>Reset</button>
      </div>
  );
}, document.getElementById("root")!);
