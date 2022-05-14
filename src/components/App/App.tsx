import React from "react";

import styles from "./App.module.scss";
import { Counter } from "../Counter";
import { SubmitForm } from "../SubmitForm";

export function App() {
  const helloMessage = React.createElement("div", null, `Hello React!!`);

  return (
    <div className={styles.app}>
      {helloMessage}
      <Counter />
      <SubmitForm />
    </div>
  );
}
