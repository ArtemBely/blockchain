import Main from './Main';
import Database from './Database';
import Profile from './Profile';
import Hr from './Hr';
import { getCompanies } from './fetchData';
import { getVacancies } from './fetchData';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: ['/database', '/database/sendRequest/'],
    exact: true,
    component: Database,
    fetchInitialData: () => getCompanies()
  },
  {
    path: '/hr',
    exact: true,
    component: Hr,
    fetchInitialData: () => getVacancies()
  },
  {
    path: '/profile',
    exact: true,
    component: Profile
  }
]

export default routes;
