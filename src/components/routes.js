import Main from './Main';
import Database from './Database';
import Profile from './Profile';
import Hr from './Hr';
import Administrator_Registration from './Administrator_Registration';
import Profile_Admin from './Profile_Admin';
import { getCompanies } from './fetchData';
import { getVacancies } from './fetchData';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: ['/database', '/database/sendRequest/', '/database/showpopup/'],
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
  },
  {
    path: '/database/admin_registration_page',
    exact: true,
    component: Administrator_Registration
  },
  {
    path: '/profile_admin',
    exact: true,
    component: Profile_Admin
  }
]

export default routes;
