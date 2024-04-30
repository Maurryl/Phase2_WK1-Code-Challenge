import React from 'react';
import Item from './Item';

function List({ data, onUpdate, onDelete }) {
  return (
    <div>
      {data.map(item => (
        <Item key={item.id} item={item} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default List;
