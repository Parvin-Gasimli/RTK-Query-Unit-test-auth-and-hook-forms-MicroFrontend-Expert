import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(albumsApi.middleware),
});

setupListeners(store.dispatch);
window.store = store;
export {
  useGetAlbumsQuery,
  useGetAlbumQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation,
} from "./apis/albumsApi";

export * from "./thunks/fetchUsers";
export * from "./thunks/AddUser";
export * from "./thunks/DeleteUser";
