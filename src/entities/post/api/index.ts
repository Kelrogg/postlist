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

    // createPost: builder.mutation<IPost, { title: string; content: string }>({
    //   query: (newPost) => ({
    //     url: 'posts',
    //     method: 'POST',
    //     body: newPost,
    //   }),
    //   invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    // }),
  }),
});

export const { useGetPostsQuery } = postsApi;