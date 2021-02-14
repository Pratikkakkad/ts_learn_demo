import React from 'react';
import './TodoList.css';

interface TodoListProps{
    items: {id: string, text: string}[];
    onDeleteTodo: (id: string)  => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
   
    return (
        <div>
            <ul>
                {props.items.map(todo => (
                    <li>
                        <span>{todo.text}</span>
                        <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELET</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList