import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { IPost } from '..';

const postsAdapter = createEntityAdapter<IPost>();

const initialState = postsAdapter.getInitialState();

export const postsSlice = createSlice({
  name: '@@app/posts',
  initialState,
  reducers: {
    addPost: postsAdapter.addOne,
    updatePost: postsAdapter.updateOne,
    removePost: postsAdapter.removeOne,
    addPosts: postsAdapter.addMany,
    upsertPost: postsAdapter.upsertOne,
    upsertPosts: postsAdapter.upsertMany,
  },
});

export const { addPost, updatePost, removePost, addPosts, upsertPost, upsertPosts } = postsSlice.actions;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state: { posts: typeof initialState }) => state.posts);

export default postsSlice.reducer;