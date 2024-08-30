import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/slices/fetchTodosSlice';
import { updateTodo } from '../redux/slices/updateTodoSlice';
import { deleteTodo } from '../redux/slices/deleteTodoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.fetchTodos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleUpdate = (id) => {
    const updatedTodoText = prompt('Update your todo:');
    if (updatedTodoText) {
      dispatch(updateTodo({ id, todoText: updatedTodoText }));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      <ul className="list-group">
        {items.map((todo) => (
          <li key={todo._id} className="list-group-item d-flex justify-content-between align-items-center my-2">
            {todo.todo}
            <div>
              <button className="btn btn-warning btn-sm me-2 mx-2" onClick={() => handleUpdate(todo._id)}>Update</button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(todo._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
