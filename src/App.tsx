import React, {useState} from 'react';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import {Todo} from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: Math.random().toString(),
        text: text
      }
    ]);
  }

  const onDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }

  return (
    <div className="App" id="root">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDeleteHandler={onDeleteHandler} />
    </div>
  )
}

export default App;
