import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IAlbum } from '../model';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Albums'],
  endpoints: (builder) => ({
    getAlbums: builder.query<IAlbum[], void>({
      query: () => 'albums',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Albums' as const, id })),
              { type: 'Albums', id: 'LIST' },
            ]
          : [{ type: 'Albums', id: 'LIST' }],
    }),
    getAlbum: builder.query<IAlbum, number>({
      query: (id) => `albums/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Albums', id }],
    }),
    getAlbumsByUserId: builder.query<IAlbum[], number>({
      query: (userId) => `albums?userId=${userId}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Albums' as const, id })),
              { type: 'Albums', id: 'LIST' },
            ]
          : [{ type: 'Albums', id: 'LIST' }],
    }),
    createAlbum: builder.mutation<IAlbum, Partial<IAlbum>>({
      query: (newAlbum) => ({
        url: 'albums',
        method: 'POST',
        body: newAlbum,
      }),
      invalidatesTags: [{ type: 'Albums', id: 'LIST' }],
    }),
    updateAlbum: builder.mutation<IAlbum, Pick<IAlbum, 'id'> & Partial<IAlbum>>({
      query: ({ id, ...patch }) => ({
        url: `albums/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Albums', id }],
    }),
    deleteAlbum: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `albums/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Albums', id }],
    }),
  }),
});

export const {
  useGetAlbumsQuery,
  useGetAlbumQuery,
  useGetAlbumsByUserIdQuery,
  useCreateAlbumMutation,
  useUpdateAlbumMutation,
  useDeleteAlbumMutation,
} = albumsApi;