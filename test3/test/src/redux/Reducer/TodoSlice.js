import {
  GET_TODO,
  ADD_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED,
  COMPLETE_TODO,
} from "../ActionType/TodoType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Create reducer
const nameSpace = "todos";
const initialState = {
  todos: {},
  isLoading: true,
  hasError: false,
};
// Create action
export const FetchCommentData = createAsyncThunk(
  `${nameSpace}/GetTodosApi`,
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  }
);

const ToDoSlice = createSlice({
  name: nameSpace,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(FetchCommentData.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(FetchCommentData.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(FetchCommentData.rejected, (state, action) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});
//add todo reducer
// export const todoSlice = createSlice({
//   name: "todo",
//   reducers: {
//     getTodos: (state, action) => {
//       state.todos = action.payload;
//     },
//     addTodo: (state, action) => {
//       const todo = {
//         id: Math.random() * 100,
//         text: action.payload,
//       };
//       state.todos.push(todo);
//       state.count += 1;
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//       state.count -= 1;
//     },
//   },
// });
// export const { addTodo, removeTodo, getTodos } = todoSlice.actions;
export default ToDoSlice.reducer;
