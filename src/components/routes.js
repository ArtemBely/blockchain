import Main from './Main';
import Database from './Database';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/database',
    exact: true,
    component: Database
  }
]

export default routes;
