import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '~/shared/layout';

import { PostsPage } from '~/pages';
import { PostDetailPage } from '~/pages';
import { UserAlbumsPage } from '~/pages';
import { AlbumPhotosPage } from '~/pages';
import { UserTodosPage } from '~/pages';
import { UserPostsPage } from '~/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><div><h1>Home Page</h1></div></MainLayout>,
  },
  {
    path: '/posts',
    element: <MainLayout><PostsPage /></MainLayout>,
  },
  {
    path: '/posts/:id',
    element: <MainLayout><PostDetailPage /></MainLayout>,
  },
  {
    path: '/users/:id/albums',
    element: <MainLayout><UserAlbumsPage /></MainLayout>,
  },
  {
    path: '/albums/:id/photos',
    element: <MainLayout><AlbumPhotosPage /></MainLayout>,
  },
  {
    path: '/users/:id/todos',
    element: <MainLayout><UserTodosPage /></MainLayout>,
  },
  {
    path: '/users/:id/posts',
    element: <MainLayout><UserPostsPage /></MainLayout>,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;