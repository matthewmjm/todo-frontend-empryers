import React, {Component} from 'react';
import './App.css';
import TodoContainer from "./Components/TodoContainer"
const todosUrl = 'http://localhost:4000/todos'


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    this.getTodos()
  }
  
  getTodos = () => {
    fetch(todosUrl)
      .then(response => response.json())
      .then(todos => this.setState({todos}))
  }

  render(){
    return(
      <div className="App">
        <h1>Todo App</h1>
        <TodoContainer todos={this.state.todos}/>
  
      </div>
    );
  }
}  

export default App;
