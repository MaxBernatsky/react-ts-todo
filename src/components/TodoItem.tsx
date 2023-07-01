import { ITodo } from '../types/data';
import React from 'react';

interface ITodoItemProps extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoItem: React.FC<ITodoItemProps> = ({
  id,
  title,
  completed,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <div>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span style={{ display: 'inline-block', margin: '0 10px' }}>{title}</span>
      <button
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'red',
        }}
        onClick={() => removeTodo(id)}
      >
        X
      </button>
    </div>
  );
};
