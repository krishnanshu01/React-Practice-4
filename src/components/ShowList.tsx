import React from 'react';
import { listArray } from '../types';

interface ShowListProps {
  list: listArray[];
}

export default function ShowList({ list }: ShowListProps) {
  return (
    <>
      <h1>ShowList</h1>
      {list.map(item => (
        <ul key={item.name}>{item.name} {item.Number}</ul>
      ))}
    </>
  );
}
