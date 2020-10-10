import React from 'react'
import TodoItem from './TodoItem.js'

// export default function TodoContainer(props){
export default function TodoContainer({todos, deleteTodo, updateTodo}){
    
    const showTodos = () => {
        return todos.map(todo => <TodoItem key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>)
    }

    return (
        <ul className="todo-list">
            {showTodos()}
        </ul>
    )
}