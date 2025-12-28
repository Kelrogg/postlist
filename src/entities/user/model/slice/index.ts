import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const usersAdapter = createEntityAdapter<IUser>();

const initialState = usersAdapter.getInitialState();

export const usersSlice = createSlice({
  name: '@@app/users',
  initialState,
  reducers: {
    addUser: usersAdapter.addOne,
    updateUser: usersAdapter.updateOne,
    removeUser: usersAdapter.removeOne,
    addUsers: usersAdapter.addMany,
    upsertUser: usersAdapter.upsertOne,
    upsertUsers: usersAdapter.upsertMany,
  },
});

export const { addUser, updateUser, removeUser, addUsers, upsertUser, upsertUsers } = usersSlice.actions;

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors((state: { users: typeof initialState }) => state.users);

export default usersSlice.reducer;