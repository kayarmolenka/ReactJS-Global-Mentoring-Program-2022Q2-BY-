import { PureComponent } from "react";

export class Counter extends PureComponent {
  state: {
    counter: number;
  };

  constructor(props: { state: { counter: number } }) {
    super(props);
    this.state = { counter: 0 };
    this.onIncrease = this.onIncrease.bind(this);
    this.onReduce = this.onReduce.bind(this);
  }

  onIncrease() {
    this.setState({ counter: this.state.counter + 1 });
  }

  onReduce() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <p>Counter value: {this.state.counter}</p>
        <button onClick={this.onIncrease}>Increase</button>
        <button onClick={this.onReduce}>Reduce</button>
      </div>
    );
  }
}
