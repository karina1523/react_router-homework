import React, { useEffect } from 'react';
import Loader from '../components/Loarder';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../store/Todos/todosSlice';

const Todos = () => {
  const dispatch = useDispatch()
  const { todos } = useSelector((store) => store.todos)

  useEffect(() => {
    dispatch(getTodos())
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


