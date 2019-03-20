import React from 'react'

import './Todo.css'

const TodoForm = props => {
  return (
    <form className="todo-form">
      <input 
        type="text"
        value={props.todoItem}
        name="todo-item"
        placeholder="...to do" 
        onChange={props.handleChanges} 
      />
      <button onClick={props.addToList}>Add To Do</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
