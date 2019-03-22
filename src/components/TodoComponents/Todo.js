import React from 'react'

import './Todo.css'

const Todo = props => {
  return <li className="todo" completed={props.itemProp.completed}>{ props.itemProp.item }</li>
};

export default Todo;
