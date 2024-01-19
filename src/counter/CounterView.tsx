import CounterController from "./CounterController";

export default class CounterView {
  public controller: CounterController;

  public constructor(private readonly app: string) {
    this.controller = new CounterController(this);
  }

  public render(props: any) {
    props?.ref(this);
    return (
        <button type="button" onClick={this.controller.increment}>
          {this.app} {this.controller.count()}
        </button>
    );
  }
}

function injectDependencies<T>(fun: (...args: any) => T): T {
  return fun("application");
}

export const Counter = injectDependencies((app: string) => {
  const fun = function () {
    return new CounterView(app).render(...arguments);
  };
  return fun;
});
