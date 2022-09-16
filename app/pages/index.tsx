import type { NextPage } from "next";
import { useEffect } from "react";
import useENSProfile from "../hooks/useENS";
import useQuicknodeTokensApi from "../hooks/useQuicknodeAPITokens";
import useQuicknodeAPINfts from "../hooks/useQuicknodeAPINfts";

import { ENSProfile } from "../components/ENSProfile";
import QuicknodeTokens from "../components/QuicknodeTokens/QuicknodeTokens";
import QuicknodeNfts from '../components/QuicknodeNfts/QuicknodeNfts'

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
    setAddress("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
    setAddressnfts("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {/* header */}
      <div className="h-24 text-6xl flex justify-center items-center">
        <h1> react tailwind web3 ui kit</h1>
      </div>
      <main className="pt-8 flex w-full flex-cols items-center gap-8
                      justify-center  text-center bg-sky-100 space-y-8">
        <ENSProfile profile={profile} />
        {loading && <div>Loaading...</div>}
        {!loading && <QuicknodeTokens balances={tokenBalances} />}

        {loadingnfts && <div>Loading NFTS</div>}
        {!loadingnfts && <QuicknodeNfts nfts={nfts} />}
      </main>
    </div>
  );
};

export default Home;
