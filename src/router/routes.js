import SignIn from '../views/Auth/SignIn';
import SignUp from '../views/Auth/SignUp';
import Home from '../views/Home';
import Account from '../views/Account';
import CoinPage from '../views/CoinPage';
import Portfolio from '../views/Portfolio';
import Nft from '../views/Nft';
import TrendingCoins from '../views/TrendingCoins';

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
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/nft',
    element: <Nft />,
  },
  {
    path: '/trending',
    element: <TrendingCoins />,
  },
];

export default routes;
