import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const TrendingCoins = () => {
  const [trending, setTrending] = useState([]);
  const getTrending = async () => {
    const { data } = await axios.get(`/search/trending`);
    setTrending(data.coins);
  };
  useEffect(() => {
    getTrending();
  }, []);

  return (
    <div className="py-8 text-primary">
      <h1 className="py-4 text-base font-bold md:text-xl">Trending Coins</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trending.map((coin, id) => (
          <div
            key={id}
            className="flex justify-between p-4 duration-300 ease-in-out hover:scale-105"
          >
            <Link
              to={`/coin/${coin.item.id}`}
              className="flex items-center justify-between w-full"
            >
              <div className="flex">
                <img
                  className="mr-4 rounded-full"
                  src={coin.item.small}
                  alt="/"
                />
                <div>
                  <p className="text-sm font-bold">{coin.item.name}</p>
                  <p className="text-xs">{coin.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-4 mr-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="/"
                />
                <p>
                  {coin.item?.price_btc ? coin.item?.price_btc?.toFixed(7) : ''}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
