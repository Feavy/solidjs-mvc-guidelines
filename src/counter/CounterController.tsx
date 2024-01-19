import type CounterView from "./CounterView";
import { createSignal } from "solid-js";

export default class CounterController {
  //@ts-ignore
  public readonly count: Accessor<number>;
  //@ts-ignore
  public readonly setCount: Setter<number>;

  public constructor(private readonly view: CounterView) {
    [this.count, this.setCount] = createSignal(1);
    this.increment = this.increment.bind(this);
  }

  public increment() {
    this.setCount(this.count() + 1);
  }

  public reset() {
    this.setCount(0);
  }
}
