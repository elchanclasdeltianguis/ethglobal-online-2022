import React from "react";
import { ethers, utils } from "ethers";

interface IAsset {
  address: string;
  name: string;
  decimals: number;
  symbol: string;
  logoURI: string;
  chain: string;
  network: string;
  amount: string;
}

interface IInfo {
  assets: IAsset[];
  owner: string;
  totalPages: number;
  totalItems: number;
  pageNumber: number;
}

interface Props {
  balances: IInfo | undefined | null;
}

export default function QuicknodeTokens({ balances }: Props) {
  return (
    <div>
      QuicknodeTokens
      <div className="space-y-4">
        {balances?.assets.map((asset: IAsset) => (
          <div
            key={asset.address}
            className="border-2 rounded-xl w-auto py-4 bg-sky-300"
          >
            <div>
              <img src={asset.logoURI} />
              {asset.logoURI}
              {asset.symbol}
              {asset.name} - {asset.symbol}
            </div>
            <div>{utils.formatUnits(asset.amount, asset.decimals)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
