import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';
import { Icon } from '@iconify/react';
const SavedCoin = () => {
  const [coins, setCoins] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setCoins(doc.data()?.watchList);
    });
  }, [user?.email]);

  const coinPath = doc(db, 'users', `${user?.email}`);
  const deleteCoin = async (passedid) => {
    try {
      const result = coins.filter((item) => item.id !== passedid);
      await updateDoc(coinPath, {
        watchList: result,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      {coins?.length === 0 ? (
        <p className="text-sm">
          You don't have any coins saved. Please save a coin to add it to your
          watch list.{' '}
          <Link to="/" className="text-accent">
            Click here to search coins.
          </Link>
        </p>
      ) : (
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="border-b">
              <th className="px-4 text-xs md:text-sm">Rank #</th>
              <th className="text-xs text-left md:text-sm">Coin</th>

              <th className="text-xs text-left md:text-sm">Delete coin</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id} className="h-[80px] border-b overflow-hidden">
                <td className="text-xs md:text-sm">{coin?.rank}</td>

                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div className="flex items-center">
                      <img
                        src={coin?.image}
                        className="w-4 mr-4 md:w-8"
                        alt="/"
                      />
                      <div>
                        <p className="hidden text-xs md:text-sm sm:table-cell">
                          {coin?.name}
                        </p>
                        <p className="text-xs text-left text-gray-500 md:text-sm">
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>

                <td className="pl-8">
                  <span
                    onClick={() => deleteCoin(coin.id)}
                    className="cursor-pointer"
                  >
                    <Icon icon="ic:round-cancel" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
