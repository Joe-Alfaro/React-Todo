import React from 'react'
import Todo from './Todo.js'
import TodoForm from './TodoForm.js'

import './Todo.js'

class TodoList extends React.Component {
  constructor(){
    super();
    this.state = {
      todoItems: []
    };
  }
  
  addToList = event => {
    event.preventDefault();

    const newTodoItem = {
      item: this.state.toDoItem,
      completed: false
    };

    this.setState({
      todoItems: this.state.todoItems.push(newTodoItem)
    });
  }

  render(){
    return (
      <div className="todo-list">
        <h1>To Do List:</h1>
        <ul>
          {this.state.todoItems.map((item,index) => (
            <Todo key={index} itemProp={item} />
          ))}
        </ul>
        <TodoForm 
          item={this.state.item}
          completed={this.state.completed}
        />
      </div>
    );
  }
}

export default TodoList;
