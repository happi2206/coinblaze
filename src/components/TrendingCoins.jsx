import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingCoins = () => {
  const [trending, setTrending] = useState([]);

  const url = `/search/trending`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
    });
  }, []);

  return (
    <div className="py-8 my-12 rounded-div text-primary">
      <h1 className="py-4 text-2xl font-bold">Trending Coins</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trending.map((coin, idx) => (
          <div
            key={idx}
            className="flex justify-between p-4 duration-300 ease-in-out rounded-div hover:scale-105"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex">
                <img
                  className="mr-4 rounded-full"
                  src={coin.item.small}
                  alt="/"
                />
                <div>
                  <p className="font-bold">{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-4 mr-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="/"
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
