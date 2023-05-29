import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Albums = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["albums"],
  endpoints: (builder) => ({
    deleteAlbums: builder.mutation({
      query: (id) => ({
        url: `/albums/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["albums"],
    }),

    getAllAlbums: builder.query({
      query: () => "albums",
      // providesTags: ["albums"],
    }),
    getAllAlbum: builder.mutation({
      query: (payload, search) => ({
        url: `/albums?quidem`,
        method: "GET",
        body: payload,
        Headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["albums"],
    }),
  }),
});

export const {
  useGetAllAlbumsQuery,
  useGetAllAlbumMutation,
  useAddAlbumMutation,
  useDeleteCurrierMutation,
  useDeleteAlbumsMutation,
} = Albums;
