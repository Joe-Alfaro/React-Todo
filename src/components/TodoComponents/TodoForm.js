import React from 'react'

import './Todo.css'

const TodoForm = () => {
  return (
    <form className="todo-form">
      <input type="text" placeholder="...to do" />
      <button className="add-todo">Add To Do</button>
      <button className="clear-completed">Clear Completed</button>
    </form>
  );
};

export default TodoForm;
