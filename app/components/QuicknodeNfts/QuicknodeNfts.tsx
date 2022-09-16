import React from "react";
import { ethers, utils } from "ethers";

interface IAsset {
  chain: string;
  collectionAddress: string;
  collectionName: string;
  collectionTokenId: string;
  currentOwner: string;
  description: string;
  imageUrl: string;
  name: string;
  network: string;
  provenance?: [];
  traits?: [];
}

interface Props {
  nfts: IAsset[] | undefined | null;
}

export default function QuicknodeNfts({ nfts }: Props) {
  return (
    <div className="border-2 border-black p-4 rounded-xl">
      QuicknodeNfts
      <div className="space-y-4">
        {nfts?.map((asset: IAsset) => (
          <div
            key={asset.collectionAddress.concat(asset.collectionTokenId)}
            className="border-2 rounded-xl w-auto py-4 bg-sky-300"
          >
            <div>
              <img src={asset.imageUrl} width={64} height={64} />
              {asset.imageUrl}
              {asset.collectionName}
              {asset.name} - {asset.collectionTokenId}
              {asset.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
