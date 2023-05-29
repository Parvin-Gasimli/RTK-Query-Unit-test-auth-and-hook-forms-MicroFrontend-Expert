import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
const pause = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints: (builder) => ({
    getAlbums: builder.query({
      providesTags: ["Album"],
      invalidatesTags: ["Album"],
      query: () => "albums",
    }),
    getAlbum: builder.query({
      query: (id) => `albums/${id}`,
    }),
    addAlbum: builder.mutation({
      invalidatesTags: (result, error, album) => {
        return [{ type: "Album", id: album.id }];
      },
      query: (user) => ({
        url: `albums`,
        method: "POST",
        body: {
          name: faker.name.fullName(),
          email: faker.internet.email(),
        },
        providesTags: ["Album"],
      }),
    }),
    deleteAlbum: builder.mutation({
      invalidatesTags: (result, error, album) => {
        return [{ type: "Album", id: album.id }];
      },
      query: (id) => ({
        url: `albums/${id}`,
        method: "DELETE",
      }),

      providesTags: ["Album"],
    }),
  }),
});
export const {
  useGetAlbumsQuery,
  useGetAlbumQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation,
} = albumsApi;
export { albumsApi };
