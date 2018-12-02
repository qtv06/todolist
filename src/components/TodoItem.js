import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render(){
    const {item} = this.props;
    let className = "TodoItem";
    if(item.isComplete){
      className += " isComplete";
    }
    return(
      <div className={className}>
        <i className="fas fa-check-circle"></i>
        <h3>{item.title}</h3>
      </div>
    );
  }
}

export default TodoItem;