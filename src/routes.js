import { lazy } from 'react';

const Home = lazy(() => import('./pages/home'));
const Posts = lazy(() => import('./pages/posts'));
const Albums = lazy(() => import('./pages/albums'));
const Todos = lazy(() => import('./pages/todos'));

const routes = [
  {
    name: 'Home',
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    name: 'Posts',
    path: '/posts',
    component: Posts,
    exact: false,
  },
  {
    name: 'Albums',
    path: '/albums',
    component: Albums,
    exact: false,
  },
  {
    name: 'Todos',
    path: '/todos',
    component: Todos,
    exact: false,
  },
];

export default routes;
