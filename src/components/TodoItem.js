import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <div>
        <button className="toggle" onClick={onToggle}>
          {todo.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
        </button>
        <button className="toggle" onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
