import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IComment } from '../model';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.query<IComment[], void>({
      query: () => 'comments',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Comments' as const, id })),
              { type: 'Comments', id: 'LIST' },
            ]
          : [{ type: 'Comments', id: 'LIST' }],
    }),

    getComment: builder.query<IComment, number>({
      query: (id) => `comments/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Comments', id }],
    }),

    getCommentsByPostId: builder.query<IComment[], number>({
      query: (postId) => `comments?postId=${postId}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Comments' as const, id })),
              { type: 'Comments', id: 'LIST' },
            ]
          : [{ type: 'Comments', id: 'LIST' }],
    }),
    createComment: builder.mutation<IComment, Partial<IComment>>({
      query: (newComment) => ({
        url: 'comments',
        method: 'POST',
        body: newComment,
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),

    updateComment: builder.mutation<IComment, Pick<IComment, 'id'> & Partial<IComment>>({
      query: ({ id, ...patch }) => ({
        url: `comments/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Comments', id }],
    }),

    deleteComment: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Comments', id }],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetCommentQuery,
  useGetCommentsByPostIdQuery,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentsApi;