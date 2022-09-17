import type { NextPage } from "next";
import { useEffect } from "react";
import useENSProfile from "../hooks/useENS";
import useQuicknodeTokensApi from "../hooks/useQuicknodeAPITokens";
import useQuicknodeAPINfts from "../hooks/useQuicknodeAPINfts";

import { ENSProfile } from "../components/ENSProfile";
import QuicknodeTokens from "../components/QuicknodeTokens/QuicknodeTokens";
import QuicknodeNfts from "../components/QuicknodeNfts/QuicknodeNfts";

const Home: NextPage = () => {
  const profile = useENSProfile(
    "0x0F04693d93C420d2685Dc53ced7141a7EBF9Cc91",
    "https://cloudflare-eth.com/"
  );
  const quickNodeRpc =
    "https://few-tame-gadget.discover.quiknode.pro/90cb4165805679d8cfb0a03bb852f5f4029ecfc4/";

  const { tokenBalances, loading, setAddress } =
    useQuicknodeTokensApi(quickNodeRpc);

  const {
    nfts,
    loading: loadingnfts,
    setAddress: setAddressnfts,
  } = useQuicknodeAPINfts(quickNodeRpc);

  useEffect(() => {
    setAddress("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"); // vitalik.eth
    setAddressnfts("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* header */}
      <div className="py-8 text-6xl flex justify-center items-center bg-gray-400">
        <h1>react tailwind web3 ui kit</h1>
      </div>
      <main className="w-full bg-white p-24">
        {/* components */}
        <div className="mx-16 flex flex-cols items-center justify-center gap-8">
          <ENSProfile profile={profile} />
          {/* {loading && <div>Loaading...</div>}
          {!loading && <QuicknodeTokens balances={tokenBalances} />}

          {loadingnfts && <div>Loading NFTS</div>}
          {!loadingnfts && <QuicknodeNfts nfts={nfts} />} */}
        </div>
      </main>
    </div>
  );
};

export default Home;
