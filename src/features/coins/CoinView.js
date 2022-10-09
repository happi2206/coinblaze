import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CoinRow from '../../components/CoinRow';
import Input from '../../components/Input';
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
      <div className="flex flex-col justify-between pt-4 pb-6 text-center sm:flex-row md:text-right">
        <h1 className="my-2 text-sm font-bold md:text-lg">
          Cryptocurrency Prices by Market Cap
        </h1>
        <form>
          <div className="w-auto sm:min-w-[20rem]">
            <Input
              type="search"
              placeholder="Search crypto"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </form>
      </div>
      <table className="w-full text-center border-collapse">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4 text-xs sm:text-sm">#</th>
            <th className="text-xs text-left sm:text-sm">Coin</th>
            <th></th>
            <th className="text-xs sm:text-sm">Price</th>
            <th className="text-xs sm:text-sm">24h</th>
            <th className="hidden text-xs sm:text-sm md:table-cell">
              24h Volume
            </th>

            <th className="hidden text-xs sm:text-sm sm:table-cell">Mkt</th>
            <th className="text-xs sm:text-sm">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins &&
            coins
              .filter((coin) => {
                if (coin.name.toLowerCase().includes(searchText.toLowerCase()))
                  return coin;
              })
              .map((coin, index) => <CoinRow coin={coin} key={index} />)}
        </tbody>
      </table>
    </div>
  );
};

export default CoinView;
