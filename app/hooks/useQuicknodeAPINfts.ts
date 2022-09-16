import React, { useState, useEffect } from "react";
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

interface IInfo {
  assets: IAsset[];
  owner: string;
  totalPages: number;
  totalItems: number;
  pageNumber: number;
}

function useQuicknodeTokensApi(quickNodeRpc: string) {
  const [address, setAddress] = useState("");
  const [nfts, setNfts] = useState<IAsset[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const provider = new ethers.providers.JsonRpcProvider(quickNodeRpc);

  useEffect(() => {
    const fetchBalances = async (walletAddress: string) => {
      if (!utils.isAddress(walletAddress)) {
        // alert("address not valid: ".concat(walletAddress));
        return;
      }
      try {
        setLoading(true);
        const result: IInfo = await provider.send("qn_fetchNFTs", {
          wallet: walletAddress,
          page: 1,
        } as any);
        const pages = result.totalPages;

        console.log("nfts", pages, result);
        setNfts(result.assets);
        setLoading(false);
        return result;
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchBalances(address);
  }, [address]);

  return { nfts, loading, setAddress };
}

export default useQuicknodeTokensApi;
