import React from 'react'

// export default function TodoItem(props){
//     return (
//         <ul>
//             ToDo Item
//         </ul>
//     )
// }

export default function TodoItem({title, content}){
    return (
        <li className="todo-item">
            {/* ToDo Item */}
            <h2>{title}</h2>
            <h3>{content}</h3>
        </li>
    )
}