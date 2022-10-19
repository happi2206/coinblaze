import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useNavigate } from 'react-router-dom';
import CoinLinks from '../components/CoinLinks';
import SignInModal from '../components/SignInModal';
import SignUpModal from '../components/SignUpModal';
const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const url = `/coins/${params.id}?localization=false&sparkline=true`;
  const [savedCoin, setSavedCoin] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const { user } = UserAuth();
  const coinPath = doc(db, 'users', `${user?.email}`);
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
    });
  }, [url]);

  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(!savedCoin);
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
      setSignInModalOpen(true);
    }
  };

  return (
    <div className="container py-8 ">
      <span
        onClick={() => navigate(-1)}
        className="flex items-center text-xs cursor-pointer text-accent"
      >
        <Icon icon="ep:arrow-left-bold" width={12} />
        Back
      </span>

      <div className="flex flex-col md:items-center md:justify-between md:flex-row">
        <div className="flex items-center my-4 md:py-8">
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
        <div className="my-4 space-x-2 md:py-8 md:w-3/6">
          <div
            className="flex items-center justify-end cursor-pointer "
            onClick={saveCoin}
          >
            {savedCoin ? (
              <Icon icon="ant-design:star-filled" width={20} />
            ) : (
              <Icon icon="ant-design:star-outlined" width={20} />
            )}

            <p className="text-sm font-semibold">Add to watch list</p>
          </div>

          <div className="md:pt-10">
            <p className="py-4 text-sm font-semibold text-primary">
              Social Links
            </p>

            <div className="space-y-2">
              <CoinLinks
                title="Website"
                link={coin.links?.homepage}
                icon="pepicons:internet"
              />
              <CoinLinks
                title="Reddit"
                link={coin.links?.subreddit_url}
                icon="akar-icons:reddit-fill"
              />
              <CoinLinks
                title="Discord"
                link={coin.links?.chat_url}
                icon="akar-icons:discord-fill"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div>
          <div className="flex justify-between">
            {coin.market_data?.current_price && (
              <p className="text-base font-bold md:text-xl">
                ${coin.market_data.current_pric?.usd.toLocaleString()}
              </p>
            )}
            <p className="text-xs md:text-sm">7 Days</p>
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
                <p>${coin.market_data.market_cap.usd?.toLocaleString()}</p>
              )}
            </div>
            <div>
              <p className="text-xs text-gray-500 md:text-sm">Volume (24h)</p>
              {coin.market_data?.market_cap && (
                <p>${coin.market_data.total_volume?.usd.toLocaleString()}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-xs text-gray-500 md:text-sm">24h High</p>
              {coin.market_data?.high_24h && (
                <p>${coin.market_data.high_24h?.usd.toLocaleString()}</p>
              )}
            </div>
            <div>
              <p className="text-xs text-gray-500 md:text-sm">24h Low</p>
              {coin.market_data?.low_24h && (
                <p>${coin.market_data.low_24h?.usd.toLocaleString()}</p>
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
            {coin.tickers && <p>{coin.liquidity_score?.toFixed(2)}</p>}
          </div>
        </div>

        <div className="flex justify-between py-4">
          <div>
            <p className="text-xs text-gray-500 md:text-sm">
              Price Change (24h)
            </p>
            {coin.market_data && (
              <p>
                {coin.market_data?.price_change_percentage_24h?.toFixed(2)}%
              </p>
            )}
          </div>
          <div>
            <p className="text-xs text-gray-500 md:text-sm">
              Price Change (7d)
            </p>
            {coin.market_data && (
              <p>{coin.market_data?.price_change_percentage_7d?.toFixed(2)}%</p>
            )}
          </div>
          <div>
            <p className="text-xs text-gray-500 md:text-sm">
              Price Change (14d)
            </p>
            {coin.market_data && (
              <p>
                {coin.market_data?.price_change_percentage_14d?.toFixed(2)}%
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-between py-4">
          <div>
            <p className="text-xs text-gray-500 md:text-sm">
              Price Change (30d)
            </p>
            {coin.market_data && (
              <p>
                {coin.market_data?.price_change_percentage_30d?.toFixed(2)}%
              </p>
            )}
          </div>
          <div>
            <p className="text-xs text-gray-500 md:text-sm">
              Price Change (60d)
            </p>
            {coin.market_data && (
              <p>
                {coin.market_data?.price_change_percentage_60d?.toFixed(2)}%
              </p>
            )}
          </div>
          <div>
            <p className="text-xs text-gray-500 md:text-sm">
              Price Change (1y)
            </p>
            {coin.market_data && (
              <p>{coin.market_data?.price_change_percentage_1y?.toFixed(2)}%</p>
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
        <p className="mt-10 text-sm font-semibold text-gray-500">
          About {coin.name}
        </p>
        {/* Description */}
        <div className="py-4">
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
      <SignUpModal
        modalOpen={signUpModalOpen}
        closeModal={() => setSignUpModalOpen(false)}
        closeOtherModal={() => {
          setSignUpModalOpen(false);
          setSignInModalOpen(true);
        }}
      />
      <SignInModal
        modalOpen={signInModalOpen}
        closeModal={() => {
          setSignInModalOpen(false);
        }}
        closeOtherModal={() => {
          setSignInModalOpen(false);
          setSignUpModalOpen(true);
        }}
      />
    </div>
  );
};

export default CoinPage;
