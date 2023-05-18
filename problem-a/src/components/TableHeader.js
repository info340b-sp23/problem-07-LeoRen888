import React from "react";

export function TableHeader(props) {
  const { columnNames } = props;
  const cellElements = columnNames.map((cell) => {
    return <th key={cell}>{cell}</th>;
  });
  return (
    <thead>
      <tr>{cellElements}</tr>
    </thead>
  );
}