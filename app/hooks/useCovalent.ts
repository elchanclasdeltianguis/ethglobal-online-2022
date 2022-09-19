import React, { useState, useEffect } from "react";
import erc20TransfersHelper from "../utils/ERC20Transfers";
import { ITransfer } from "./types";

type Props = { address: string; chainId: string };

export const useCovalent = ({ address, chainId }: Props) => {
  const [txnData, setTxnData] = useState<ITransfer[]>([]);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.NEXT_PUBLIC_COVALENT_API_KEY;
  const transactionsDataUrl = `https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v2/`;

  const fetchData = () => {
    setLoading(true);
    let headers = new Headers();
    let authString = `${apiKey}:`;
    headers.set("Authorization", "Basic " + btoa(authString));
    fetch(transactionsDataUrl, { method: "GET", headers: headers })
      .then((res) => res.json())
      .then((res) => {
        const transfersData = erc20TransfersHelper.filterForTransfers(res);
        const transfers = erc20TransfersHelper.pruneTransfers(
          transfersData,
          address
        );
        setLoading(false);
        setTxnData(transfers);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchData();
  }, [address]);

  return { txnData, loading };
};
