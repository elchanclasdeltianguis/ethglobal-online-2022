import React, { useState, useEffect } from "react";
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

function useQuicknodeTokensApi(quickNodeRpc: string) {
  const [address, setAddress] = useState("");
  const [tokenBalances, setTokenBalances] = useState<IInfo>();
  const [loading, setLoading] = useState<boolean>(false);
  const provider = new ethers.providers.JsonRpcProvider(quickNodeRpc);

  useEffect(() => {
    const fetchBalances = async (walletAddress: string) => {
      if (!utils.isAddress(walletAddress)) {
        alert("address not valid: ".concat(walletAddress));
        return;
      }
      try {
        setLoading(true);
        const result: IInfo = await provider.send("qn_getWalletTokenBalance", {
          wallet: walletAddress,
        } as any);
        console.log(result);
        setTokenBalances(result);
        setLoading(false);
        return result;
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchBalances(address);
  }, [address]);

  return { tokenBalances, loading, setAddress };
}

export default useQuicknodeTokensApi;
