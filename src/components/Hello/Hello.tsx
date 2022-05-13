import { PureComponent } from "react";

export class HelloMessage extends PureComponent {
  name;

  constructor(name: string) {
    super(name);
    this.name = name;
  }

  render() {
    return <div>Hello {this.name}</div>;
  }
}
