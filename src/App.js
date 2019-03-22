import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="app-wrapper">
        <TodoList title="To Do List" />
      </div>
    );
  }
}

export default App;
