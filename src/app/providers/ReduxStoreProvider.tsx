import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { postsApi } from '~entities/post/api';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
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