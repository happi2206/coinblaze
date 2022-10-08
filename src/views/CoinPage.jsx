import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { NavLink } from 'react-router-dom';
const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();
  const url = `/coins/${params.id}?localization=false&sparkline=true`;
  const [savedCoin, setSavedCoin] = useState(false);
  const { user } = UserAuth();
  const coinPath = doc(db, 'users', `${user?.email}`);
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
    });
  }, [url]);
  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        }),
      });
    } else {
      alert('Please sign in to save a coin to your watch list');
    }
  };

  return (
    <div className="container py-8 ">
      <div className="text-xs">{JSON.stringify(coin.links)}</div>
      <NavLink
        to="/"
        className="flex items-center text-xs cursor-pointer text-accent"
      >
        <Icon icon="ep:arrow-left-bold" width={12} />
        Back
      </NavLink>

      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center py-8 my-4">
          <img
            className="object-contain mr-8 w-14"
            src={coin.image?.large}
            alt="/"
          />
          <div>
            <p className="text-xl font-bold">{coin?.name} price</p>
            <p className="text-xs md:text-sm">
              ({coin.symbol?.toUpperCase()} / USD)
            </p>
          </div>
        </div>
        <div
          className="py-8 my-4 space-x-2 cursor-pointer md:w-3/6"
          onClick={saveCoin}
        >
          <div className="flex items-center justify-end">
            <Icon icon="ant-design:star-outlined" width={20} />
            <p className="text-lg font-semibold">Add to watch list</p>
          </div>
          <div className="md:pt-20">
            <p className="text-lg font-semibold text-gray-500">Info</p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae labore cumque culpa ut ratione temporibus deleniti fuga
            corrupti quam inventore reiciendis, totam est porro quaerat veniam
            possimus iure, et nemo?
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="flex justify-between">
            {coin.market_data?.current_price && (
              <p className="text-xl font-bold">
                ${coin.market_data.current_price.usd.toLocaleString()}
              </p>
            )}
            <p>7 Day</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="#8dc547" />
            </Sparklines>
          </div>
          <div className="flex flex-col justify-between py-4 sm:flex-row">
            <div>
              <p className="text-xs text-gray-500 md:text-sm">Market Cap</p>
              {coin.market_data?.market_cap && (
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              )}
            </div>
            <div>
              <p className="text-xs text-gray-500 md:text-sm">Volume (24h)</p>
              {coin.market_data?.market_cap && (
                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-xs text-gray-500 md:text-sm">24h High</p>
              {coin.market_data?.high_24h && (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              )}
            </div>
            <div>
              <p className="text-xs text-gray-500 md:text-sm">24h Low</p>
              {coin.market_data?.low_24h && (
                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xl font-bold">Market Stats</p>
        <div className="flex justify-between py-4">
          <div>
            <p className="text-xs text-gray-500 md:text-sm">Market Rank</p>
            {coin.market_cap_rank}
          </div>
          <div>
            <p className="text-xs text-gray-500 md:text-sm">
              Hashing Algorithm
            </p>
            {coin.hashing_algorithm && <p>{coin.hashing_algorithm}</p>}
          </div>
          <div>
            <p className="text-xs text-gray-500 md:text-sm">Trust Score</p>
            {coin.tickers && <p>{coin.liquidity_score.toFixed(2)}</p>}
          </div>
        </div>

        <div className="flex justify-between py-4">
          <div>
            <p className="text-xs text-gray-500 md:text-sm">
              Price Change (24h)
            </p>
            {coin.market_data && (
              <p>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
            )}
          </div>
          <div>
            <p className="text-xs text-gray-500 md:text-sm">
              Price Change (7d)
            </p>
            {coin.market_data && (
              <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
            )}
          </div>
          <div>
            <p className="text-xs text-gray-500 md:text-sm">
              Price Change (14d)
            </p>
            {coin.market_data && (
              <p>{coin.market_data.price_change_percentage_14d.toFixed(2)}%</p>
            )}
          </div>
        </div>
        <div className="flex justify-between py-4">
          <div>
            <p className="text-xs text-gray-500 md:text-sm">
              Price Change (30d)
            </p>
            {coin.market_data && (
              <p>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</p>
            )}
          </div>
          <div>
            <p className="text-xs text-gray-500 md:text-sm">
              Price Change (60d)
            </p>
            {coin.market_data && (
              <p>{coin.market_data.price_change_percentage_60d.toFixed(2)}%</p>
            )}
          </div>
          <div>
            <p className="text-xs text-gray-500 md:text-sm">
              Price Change (1y)
            </p>
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
      {/* Description */}
      <div className="py-4">
        <p className="text-lg font-bold">About {coin.name}</p>
        <p
          className="text-xs md:text-sm"
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
