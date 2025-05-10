import React, { useEffect, useState } from 'react';
import Loader from '../components/Loarder';

const Todos = () => {
  const [todos, setTodos] = useState(null);

  const getTodos = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos');
      let data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container-todos">
      <h1>ToDos</h1>
      {todos ? (
        <div className="todos__box">
          {todos.map((todo) => (
            <div key={todo.id} className="todo-item">
              <p className='todo-item-id'>ID: {todo.id}</p>
              <h2 className='todo-item-title'>Title: {todo.title}</h2>
              <p className='todo-item-text'>Status: {todo.completed ? '✅ Completed' : '❌ Not completed'}</p>
            </div>
          ))}
        </div>
      ) : <Loader />}
    </div>
  );
};

export default Todos;


