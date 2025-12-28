import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IPhoto } from '../model';

export const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Photos'],
  endpoints: (builder) => ({
    getPhotos: builder.query<IPhoto[], void>({
      query: () => 'photos',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Photos' as const, id })),
              { type: 'Photos', id: 'LIST' },
            ]
          : [{ type: 'Photos', id: 'LIST' }],
    }),
    getPhoto: builder.query<IPhoto, number>({
      query: (id) => `photos/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Photos', id }],
    }),
    getPhotosByAlbumId: builder.query<IPhoto[], number>({
      query: (albumId) => `photos?albumId=${albumId}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Photos' as const, id })),
              { type: 'Photos', id: 'LIST' },
            ]
          : [{ type: 'Photos', id: 'LIST' }],
    }),
    createPhoto: builder.mutation<IPhoto, Partial<IPhoto>>({
      query: (newPhoto) => ({
        url: 'photos',
        method: 'POST',
        body: newPhoto,
      }),
      invalidatesTags: [{ type: 'Photos', id: 'LIST' }],
    }),
    updatePhoto: builder.mutation<IPhoto, Pick<IPhoto, 'id'> & Partial<IPhoto>>({
      query: ({ id, ...patch }) => ({
        url: `photos/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Photos', id }],
    }),
    deletePhoto: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `photos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Photos', id }],
    }),
  }),
});

export const {
  useGetPhotosQuery,
  useGetPhotoQuery,
  useGetPhotosByAlbumIdQuery,
  useCreatePhotoMutation,
  useUpdatePhotoMutation,
  useDeletePhotoMutation,
} = photosApi;