import React from 'react'
import TodoItem from './TodoItem.js'

// export default function TodoContainer(props){
export default function TodoContainer({todos, deleteTodo}){
    
    // const todos = props.todos
    // const {todos} = props
    const showTodos = () => {
        return todos.map(todo => <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo}/>)
    }

    return (
        <ul className="todo-list">
            {/* ToDo Container */}
            {showTodos()}
        </ul>
    )
}