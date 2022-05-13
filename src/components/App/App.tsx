import React from "react";

import "./App.scss";
import { HelloMessage } from "../Hello";
import { Counter } from "../Counter";
import { SubmitForm } from "../SubmitForm";

export function App() {
  const react = new HelloMessage("React!!");
  const helloMessage = React.createElement("div", null, `Hello ${react.name}`);

  return (
    <div className="app-component">
      {helloMessage}
      <Counter />
      <SubmitForm />
    </div>
  );
}
