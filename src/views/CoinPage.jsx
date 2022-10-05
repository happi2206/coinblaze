import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();

  console.log(params.id);
  const url = `/coins/${params.id}?localization=false&sparkline=true`;

  useEffect(() => {
    console.log(url);
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <div className="container py-8 my-12">
      <div className="flex py-8">
        <img className="w-20 mr-8" src={coin.image?.large} alt="/" />
        <div>
          <p className="text-3xl font-bold">{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="flex justify-between">
            {coin.market_data?.current_price && (
              <p className="text-3xl font-bold">
                ${coin.market_data.current_price.usd.toLocaleString()}
              </p>
            )}
            <p>7 Day</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Market Cap</p>
              {coin.market_data?.market_cap && (
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              )}
            </div>
            <div>
              <p className="text-sm text-gray-500">Volume (24h)</p>
              {coin.market_data?.market_cap && (
                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">24h High</p>
              {coin.market_data?.high_24h && (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              )}
            </div>
            <div>
              <p className="text-sm text-gray-500">24h Low</p>
              {coin.market_data?.low_24h && (
                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xl font-bold">Market Stats</p>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className="text-sm text-gray-500">Hashing Algorithm</p>
              {coin.hashing_algorithm && <p>{coin.hashing_algorithm}</p>}
            </div>
            <div>
              <p className="text-sm text-gray-500">Trust Score</p>
              {coin.tickers && <p>{coin.liquidity_score.toFixed(2)}</p>}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Price Change (24h)</p>
              {coin.market_data && (
                <p>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              )}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (7d)</p>
              {coin.market_data && (
                <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              )}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (14d)</p>
              {coin.market_data && (
                <p>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Price Change (30d)</p>
              {coin.market_data && (
                <p>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              )}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (60d)</p>
              {coin.market_data && (
                <p>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              )}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (1y)</p>
              {coin.market_data && (
                <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              )}
            </div>
          </div>
          <div className="flex p-8 space-x-4 text-accent">
            <a
              href="https://twitter.com/afrohappi"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="akar-icons:twitter-fill" />
            </a>
            <a
              href="https://github.com/happi2206"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="akar-icons:github-fill" />
            </a>
            <a
              href="https://www.instagram.com/growwithhappi/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="akar-icons:instagram-fill" />
            </a>
            {/* <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub /> */}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="py-4">
        <p className="text-xl font-bold">About {coin.name}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              coin.description ? coin.description.en : ''
            ),
          }}
        ></p>
      </div>
    </div>
  );
};

export default CoinPage;
