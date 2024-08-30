// src/redux/slices/deleteTodoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkMjBjMjE0NDY2ODRhZTEyNWUxZjgzIn0sImlhdCI6MTcyNTA0MTY5N30.qTGMbNRxv2Mii_6SFyhpXXwp-2VpdOtiR-k7liGmw30';

export const deleteTodo = createAsyncThunk('todos/delete', async (id) => {
  const response = await axios.delete(`http://localhost:5000/api/todos/delete/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'auth-token': authToken,
    },
  });
  return response.data;
});

const deleteTodoSlice = createSlice({
  name: 'deleteTodo',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.filter((todo) => todo._id !== action.payload._id);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default deleteTodoSlice.reducer;
