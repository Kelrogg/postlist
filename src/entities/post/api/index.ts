import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IPost } from '../model';

export const postsApi = createApi({
  reducerPath: 'postsApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Posts'], 

  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => 'posts?_limit=5',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    getPost: builder.query<IPost, number>({
      query: (id) => `posts/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Posts', id }],
    }),
    getPostsByUserId: builder.query<IPost[], number>({
      query: (userId) => `posts?userId=${userId}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    createPost: builder.mutation<IPost, { title: string; content: string }>({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    updatePost: builder.mutation<IPost, Pick<IPost, 'id'> & Partial<IPost>>({
      query: ({ id, ...patch }) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Posts', id }],
    }),
    deletePost: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Posts', id }],
    }),
  }),
});

export const {
  useGetPostsByUserIdQuery,
  useGetPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;