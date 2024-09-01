import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authToken =  localStorage.getItem('token');

export const addTodo = createAsyncThunk('todos/addTodo', async (todoText) => {
  const response = await axios.post('http://localhost:5000/api/todos/addtodo', { todo: todoText }, {
    headers: {
      'Content-Type': 'application/json',
      'auth-token': authToken,
    },
  });
  return response.data;
});

const addTodoSlice = createSlice({
  name: 'addTodo',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default addTodoSlice.reducer;
