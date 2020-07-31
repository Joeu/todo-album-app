import { lazy } from 'react';

const Home = lazy(() => import('./pages/home'));
const Posts = lazy(() => import('./pages/posts'));
const Albums = lazy(() => import('./pages/albums'));
const Todos = lazy(() => import('./pages/todos'));

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    name: 'Posts',
    path: '/posts',
    component: Posts,
    exact: true,
  },
  {
    name: 'Albuns',
    path: '/albums',
    component: Albums,
    exact: true,
  },
  {
    name: 'Todos',
    path: '/todos',
    component: Todos,
    exact: true,
  },
];

export default routes;
