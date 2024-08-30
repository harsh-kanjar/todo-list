// src/redux/slices/fetchTodosSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkMjBjMjE0NDY2ODRhZTEyNWUxZjgzIn0sImlhdCI6MTcyNTA0MTY5N30.qTGMbNRxv2Mii_6SFyhpXXwp-2VpdOtiR-k7liGmw30';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://localhost:5000/api/todos/fetchalltodos', {
    headers: {
      'Content-Type': 'application/json',
      'auth-token': authToken,
    },
  });
  return response.data;
});

const fetchTodosSlice = createSlice({
  name: 'fetchTodos',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default fetchTodosSlice.reducer;
