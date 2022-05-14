import React from "react";

import styles from "./ListItem.module.scss";

export function ListItem({ listItem }: { listItem: string[] }) {
  return (
    <ul className={styles.list}>
      {listItem.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
