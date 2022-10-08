import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CoinRow from '../../components/CoinRow';
const CoinView = () => {
  const [coins, setCoins] = useState([]);
  const getCoins = useSelector((state) => {
    return state.coins.coins;
  });

  useEffect(() => {
    setCoins(getCoins[0]);
  }, [getCoins]);
  const [searchText, setSearchText] = useState('');
  return (
    <div className="pt-5">
      <div className="flex flex-col justify-between pt-4 pb-6 text-center md:flex-row md:text-right">
        <h1 className="my-2 text-xl font-bold">
          Cryptocurrency Prices by Market Cap
        </h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 border shadow-xl placeholder:text-base bg-primary border-input rounded-2xl"
            type="text"
            placeholder="Search crypto"
          />
        </form>
      </div>
      <table className="w-full text-center border-collapse">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins &&
            coins
              .filter((coin) => {
                if (searchText === '') {
                  return coin;
                } else if (
                  coin.name.toLowerCase().includes(searchText.toLowerCase())
                )
                  return coin;
              })
              .map((coin, index) => <CoinRow coin={coin} key={index} />)}
        </tbody>
      </table>
    </div>
  );
};

export default CoinView;
