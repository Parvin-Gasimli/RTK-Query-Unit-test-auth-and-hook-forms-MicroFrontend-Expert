import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../Reducer/TodoSlice";
import { Albums } from "../features/api/Albums";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const store = configureStore({
  reducer: {
    // todos: TodoSlice,
    [Albums.reducerPath]: Albums.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Albums.middleware),
});
setupListeners(store.dispatch);
