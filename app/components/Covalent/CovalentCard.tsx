import React, { useState, useEffect } from "react";
import erc20TransfersHelper from "../../utils/erc20TransfersHelper";

import useENSProfile from "../../hooks/useENS";
import { ENSProfile } from "../ENSProfile";

interface ITransfer {
  key: string;
  date: string;
  transferFlow: string;
  from: string;
  to: string;
  tokenName: string;
  tokenSymbol: string;
  tokenLogo: string;
  transferValue: number;
  tokenAddress: string;
  txnHash: string;
  isMultipleTransfers: boolean;
  isERC721: boolean;
  multipleTransfers?: any[];
}

type Props = {
  address: string;
  chainId: number;
};

const apiKey = process.env.NEXT_PUBLIC_COVALENT_API_KEY;

function CovalentTransfers({ address, chainId }: Props) {
  const [txnData, setTxnData] = useState<ITransfer[]>([]);
  const [contacts, setContacts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const blockexplorerURL = erc20TransfersHelper.blockExplorerURLs.filter(
    (item) => item.chainId === chainId
  )[0].url;
  const transactionsDataUrl = `https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v2/`;

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      let headers = new Headers();
      let authString = `${apiKey}:`;
      headers.set("Authorization", "Basic " + btoa(authString, "base64"));
      fetch(transactionsDataUrl, { method: "GET", headers: headers })
        .then((res) => res.json())
        .then((res) => {
          const transfersData = erc20TransfersHelper.filterForTransfers(res);
          const transfers = erc20TransfersHelper.pruneTransfers(
            transfersData,
            address
          );
          setIsLoading(false);
          setTxnData(transfers);
        })
        .catch((err) => console.log(err.message));
    };
    fetchData();
  }, [address]);

  console.log("covalent transfers", contacts.length);

  return (
    <>
      <div className="flex flex-col">
        <h1>CovalentTransfers</h1>
        <div>{address}</div>
        <div>chain: {chainId}</div>
        <div>{txnData.length} transfers</div>
      </div>
    </>
  );
}

export default CovalentTransfers;
