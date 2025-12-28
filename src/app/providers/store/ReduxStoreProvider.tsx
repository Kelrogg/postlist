import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { postsApi } from '~/entities/post/api';
import { commentsApi } from '~/entities/comment/api';
import { albumsApi } from '~/entities/album/api';
import { todosApi } from '~/entities/todo/api';
import postsReducer from '~/entities/post/model/slice';
import usersReducer from '~/entities/user/model/slice';
import { photosApi } from '~/entities/photo';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
    posts: postsReducer,
    users: usersReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(
        postsApi.middleware,
        commentsApi.middleware,
        albumsApi.middleware,
        todosApi.middleware,
        photosApi.middleware,
      ),
});

interface ReduxStoreProviderProps {
  children: React.ReactNode;
}

export const ReduxStoreProvider: React.FC<ReduxStoreProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;