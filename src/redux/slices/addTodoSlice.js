// src/redux/slices/addTodoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authToken =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkMjBjMjE0NDY2ODRhZTEyNWUxZjgzIn0sImlhdCI6MTcyNTA0MTY5N30.qTGMbNRxv2Mii_6SFyhpXXwp-2VpdOtiR-k7liGmw30';

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
