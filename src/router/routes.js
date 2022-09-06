import SignIn from '../views/Auth/SignIn';
import SignUp from '../views/Auth/SignUp';
import Home from '../views/Home';
import Account from '../views/Account';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/account',
    element: <Account />,
  },
];

export default routes;
