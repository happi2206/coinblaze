import SignIn from '../views/Auth/SignIn';
import SignUp from '../views/Auth/SignUp';
import Home from '../views/Home';
import Account from '../views/Account';
import CoinPage from '../views/CoinPage';
import Portfolio from '../views/Portfolio';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth/signin',
    element: <SignIn />,
  },
  {
    path: '/auth/signup',
    element: <SignUp />,
  },
  {
    path: '/account',
    element: <Account />,
  },
  {
    path: '/coin/:id',
    element: <CoinPage />,
  },
  {
    path: '/account',
    element: <Account />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
];

export default routes;
