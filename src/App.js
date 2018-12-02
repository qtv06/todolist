import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem.js';

class App extends Component {
  constructor(){
    super();
    this.todoItems = [
      {title: "Going eat", isComplete: true},
      {title: "Going Shopping", isComplete: true},
      {title: "Playing game", isComplete: false}
    ]
  }
  render() {
    return (
      <div className="App">
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) =>
            <TodoItem item={item} key={index}/>
          )
        }
        {this.todoItems.length === 0 && "Nothing here!"}
      </div>
    );
  }
}

export default App;
