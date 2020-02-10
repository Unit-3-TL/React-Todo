import React from 'react';
import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      todo: []
    }
  }

  toggleTodo = itemId => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  addItem = itemText => {
    const newItem = {
        task: itemText,
        id: Date.now(),
        completed: false
    }
    this.setState({
      todo: [
        ...this.state.todo,
        newItem
      ]
    })
  }

  removeItem = () => {
    this.setState({
        todo: this.state.todo.filter(todos => {
          return !todos.completed
        })
      
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} removeItem={this.removeItem}/>
        <TodoList todo={this.state.todo} toggleTodo={this.toggleTodo}/>
      </div>
    );
  }
}

export default App;
