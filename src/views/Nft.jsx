import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Nft = () => {
  const [nfts, setNfts] = useState([]);
  const getNfts = async () => {
    const { data } = await axios.get(`/nfts/list`);
    setNfts(data);
  };

  useEffect(() => {
    getNfts();
  }, []);
  return (
    <div className="container py-8 text-primary">
      <h1 className="py-4 text-base font-bold md:text-xl">Trending NFTs</h1>
      <table className="overflow-auto text-center border-collapse ">
        <thead>
          <tr className="border-b">
            <th className="px-4 text-xs text-left md:text-sm">#</th>
            <th className="text-xs text-left md:text-sm">Name</th>
            <th className="text-xs text-left md:text-sm">Asset Platform</th>
            <th className="hidden text-xs text-left md:text-sm sm:block">
              Contract Address
            </th>
          </tr>
        </thead>
        <tbody>
          {nfts.map((nft, index) => (
            <tr key={nft.contract_address} className="s">
              <td className="py-3 text-xs text-left sm:text-sm">{index + 1}</td>
              <td className="py-3 text-xs text-left sm:text-sm">{nft.name}</td>

              <td className="py-3 text-xs text-left sm:text-sm">
                {nft.asset_platform_id}
              </td>
              <td className="hidden py-3 text-xs text-left sm:text-sm sm:block">
                {nft.contract_address}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Nft;
