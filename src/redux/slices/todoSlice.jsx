// src/redux/slices/todoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Get auth token from localStorage
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkMjBjMjE0NDY2ODRhZTEyNWUxZjgzIn0sImlhdCI6MTcyNTA0MTY5N30.qTGMbNRxv2Mii_6SFyhpXXwp-2VpdOtiR-k7liGmw30';

// Thunk for fetching todos
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://localhost:5000/api/todos/fetchalltodos', {
    headers: {
      'Content-Type': 'application/json',
      'auth-token': authToken,
    },
  });
  return response.data;
});

// Thunk for adding a todo
export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
  const response = await axios.post('http://localhost:5000/api/todos/addtodo', { todo }, {
    headers: {
      'Content-Type': 'application/json',
      'auth-token': authToken,
    },
  });
  return response.data;
});

// Thunk for updating a todo
export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, todo }) => {
  const response = await axios.put(`http://localhost:5000/api/todos/update/${id}`, { todo }, {
    headers: {
      'Content-Type': 'application/json',
      'auth-token': authToken,
    },
  });
  return response.data;
});

// Thunk for deleting a todo
export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  const response = await axios.delete(`http://localhost:5000/api/todos/delete/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'auth-token': authToken,
    },
  });
  return response.data;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex((todo) => todo._id === action.payload._id);
        state.items[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo._id !== action.payload._id);
      });
  },
});

export default todoSlice.reducer;
