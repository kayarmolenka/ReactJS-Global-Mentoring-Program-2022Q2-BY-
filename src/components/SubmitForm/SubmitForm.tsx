import React from "react";
import { ListItem } from "../ListItem";

export class SubmitForm extends React.Component {
  state: {
    value: string;
    data: string[];
  };

  constructor(props: { value: string; data: [] }) {
    super(props);
    this.state = {
      value: "",
      data: [],
    };
    this.changeValue = this.changeValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    const newItem = [this.state.value];
    this.setState((state: { value: string; data: [] }) => ({
      data: (state.data as string[]).concat(newItem),
      value: "",
    }));
  }

  render() {
    return (
      <>
        <input
          placeholder="What do you want to watch?"
          value={this.state.value}
          onChange={this.changeValue}
        />
        <button type="submit" onClick={this.handleClick}>
          Submit
        </button>
        <ListItem listItem={this.state.data} />
      </>
    );
  }
}
