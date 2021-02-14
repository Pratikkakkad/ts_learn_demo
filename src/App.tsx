import React, {useState} from 'react';
import {Todo} from './todo.model'
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandleer = (text: string) => {
    console.log("input",text)
    setTodos(prevTodos => [...prevTodos , {id: Math.random().toString(), text}])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => { return prevTodos.filter(todo => todoId !== todo.id)});
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandleer} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
