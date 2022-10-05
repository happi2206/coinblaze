import React from 'react';
import TrendingCoins from '../components/TrendingCoins';
import CoinView from '../features/coins/CoinView';
const Home = () => {
  return (
    <div className="container">
      <TrendingCoins />
      <CoinView />
    </div>
  );
};

export default Home;
