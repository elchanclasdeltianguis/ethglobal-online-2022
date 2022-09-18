import type { NextPage } from "next";
import { useEffect, useState } from "react";
import useENSProfile from "../hooks/useENS";

import { ENSProfileCard } from "../components/ENSProfile";

import Layout from "../components/Layout";

const Home: NextPage = () => {
  const [p, setP] = useState();
  const chanclas = "0x0F04693d93C420d2685Dc53ced7141a7EBF9Cc91";
  const { ENSProfile, getProfile } = useENSProfile(
    "https://cloudflare-eth.com/"
  );
  const quickNodeRpc =
    "https://few-tame-gadget.discover.quiknode.pro/90cb4165805679d8cfb0a03bb852f5f4029ecfc4/";

  // getProfile(chanclas);

  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center">
        {/* header */}
        <div className="py-8 text-6xl flex justify-center items-center bg-gray-400">
          <h1>react tailwind web3 ui kit</h1>
        </div>
        <main className="w-full bg-white p-24">
          {/* components */}
          <div className="mx-16 flex flex-cols items-center justify-center gap-8">
            <ENSProfileCard profile={ENSProfile} />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
