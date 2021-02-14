import React,{ useRef} from 'react';
import './NewTodo.css';

type NewTOdoProps ={
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTOdoProps> = (props) => {

    const textInputref = useRef<HTMLInputElement>(null);

    const todoSUbmitHandle = (event: React.FormEvent) => {
        event.preventDefault();
        const inputText = textInputref.current!.value;
        props.onAddTodo(inputText)
    }

    return (
        <div>
            <form onSubmit={todoSUbmitHandle}>
                <div>
                    <label htmlFor="todo-text">Todo Text</label>
                    <input type="text" id='todo-text' ref={textInputref} />
                </div>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodo