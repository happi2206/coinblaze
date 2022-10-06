import React from 'react';

import TrendingCoins from '../components/TrendingCoins';
import CoinView from '../features/coins/CoinView';
import Tabs from '../components/Tabs';
const Home = () => {
  return (
    <div className="container">
      {/* <TrendingCoins /> */}
      <Tabs />
      <CoinView />
    </div>
  );
};

export default Home;
