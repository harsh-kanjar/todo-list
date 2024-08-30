import { configureStore } from '@reduxjs/toolkit';
import fetchTodosReducer from './slices/fetchTodosSlice';
import addTodoReducer from './slices/addTodoSlice';
import updateTodoReducer from './slices/updateTodoSlice';
import deleteTodoReducer from './slices/deleteTodoSlice';

export const store = configureStore({
  reducer: {
    fetchTodos: fetchTodosReducer,
    addTodo: addTodoReducer,
    updateTodo: updateTodoReducer,
    deleteTodo: deleteTodoReducer,
  },
});
