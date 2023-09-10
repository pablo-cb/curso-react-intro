import React from 'react';
import { TodoIcon } from './';

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      color="gray" // hover style on css file
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };