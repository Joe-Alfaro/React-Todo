import React from 'react'
import Todo from './Todo.js'
import TodoForm from './TodoForm.js'

import './Todo.js'

class TodoList extends React.Component {
  constructor(){
    super();
    this.state = {
      todoItems: [],
      todoItem: ''
    };
  }
  
  handleChanges = event => {
    this.setState({ todoItem: event.target.value });
  }

  addToList = event => {
    event.preventDefault();

    const newTodoItem = {
      item: this.state.todoItem,
      completed: false
    };

    this.setState({
      todoItems: [...this.state.todoItems, newTodoItem]
    });
  }

  render(){
    return (
      <div className="todo-list">
        <h1>{this.props.title}</h1>
        <ul>
          {this.state.todoItems.map((item,index) => (
            <Todo key={index} itemProp={item} />
          ))}
        </ul>
        <TodoForm 
          item={this.state.item}
          completed={this.state.completed}
          handleChanges={this.handleChanges}
          addToList={this.addToList}
        />
      </div>
    );
  }
}

export default TodoList;
