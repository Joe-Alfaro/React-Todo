import React from 'react'

import './Todo.css'

const Todo = props => {
  return <li className="todo">{props.todoItem}</li>
};

export default Todo;
