// src/Components/TodoForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/slices/addTodoSlice';
import { fetchTodos } from '../redux/slices/fetchTodosSlice'; // Import fetchTodos action
import TodoList from './TodoList';

const TodoForm = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      dispatch(addTodo(todoText))
        .unwrap() // Ensures that the next action only runs after addTodo is fulfilled
        .then(() => {
          dispatch(fetchTodos()); // Re-fetch todos after adding a new one
        })
        .catch((err) => {
          console.error('Failed to add todo:', err);
        });
      setTodoText('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="todo" className="form-label">Add Todo</label>
          <input
            type="text"
            className="form-control"
            id="todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Todo</button>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>{error}</p>}
      </form>
      <TodoList />
    </>
  );
};

export default TodoForm;
