import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/AddUser";
import { DeleteUser } from "../thunks/DeleteUser";
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [addUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addUser.fulfilled]: (state, action) => {
      state.data.push(action.payload);
      state.isLoading = false;
    },
    [addUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [DeleteUser.pending]: (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
      state.isLoading = true;
    },
    [DeleteUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
    [DeleteUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export const { ChangeName } = userSlice.actions;
export const userReducer = userSlice.reducer;
