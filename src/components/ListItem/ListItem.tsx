import React from "react";

interface ListItemProps {
  listItem: string[];
}

export function ListItem(props: ListItemProps) {
  const { listItem } = props;
  return (
    <ul style={{ listStyle: "none" }}>
      {listItem.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
