import { Home, Posts, Albums, Todos } from './pages';

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
