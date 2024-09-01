import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkMjBjMjE0NDY2ODRhZTEyNWUxZjgzIn0sImlhdCI6MTcyNTA0MTY5N30.qTGMbNRxv2Mii_6SFyhpXXwp-2VpdOtiR-k7liGmw30';
const authToken = localStorage.getItem('token')

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, todoText }) => {
  const response = await axios.put(`http://localhost:5000/api/todos/updatetodo/${id}`, { todo: todoText }, {
    headers: {
      'Content-Type': 'application/json',
      'auth-token': authToken,
    },
  });
  return response.data;
});

const updateTodoSlice = createSlice({
  name: 'updateTodo',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.items.findIndex((todo) => todo._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default updateTodoSlice.reducer;
