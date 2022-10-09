import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import SignInModal from './SignInModal';
const CoinRow = ({ coin }) => {
  const [savedCoin, setSavedCoin] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const { user } = UserAuth();
  const coinPath = doc(db, 'users', `${user?.email}`);
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
      setSignInModalOpen(true);
    }
  };

  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td onClick={saveCoin} className="cursor-pointer">
        {savedCoin ? (
          <Icon icon="ant-design:star-filled" />
        ) : (
          <Icon icon="ant-design:star-outlined" />
        )}
      </td>

      <td className="text-sm">{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center">
            <img
              className="w-6 mr-2 rounded-full"
              src={coin.image}
              alt={coin.id}
            />
            <p className="hidden sm:table-cell">{coin.name}</p>
          </div>
        </Link>
      </td>
      <td className="text-xs uppercase">{coin.symbol}</td>
      <td className="text-sm">${coin.current_price.toLocaleString()}</td>
      <td className="text-sm">
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-sm text-green-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-sm text-red-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell text-sm">
        ${coin.total_volume.toLocaleString()}
      </td>
      <td className="w-[180px] hidden sm:table-cell text-sm">
        ${coin.market_cap.toLocaleString()}
      </td>
      <td className="text-sm">
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="#8dc547" />
        </Sparklines>
      </td>
      <SignInModal
        modalOpen={signInModalOpen}
        closeModal={() => {
          setSignInModalOpen(false);
        }}
      />
    </tr>
  );
};

export default CoinRow;
