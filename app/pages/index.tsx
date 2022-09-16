import type { NextPage } from "next";
import useENSProfile from "../hooks/useENS";

import { ENSProfile } from "@el-chanclas-del-tianguis/web3-react-components/dist/components/ENSProfile";

const Home: NextPage = () => {
  const profile = useENSProfile(
    "0x0F04693d93C420d2685Dc53ced7141a7EBF9Cc91",
    "https://cloudflare-eth.com/"
  );
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-sky-100">
        <ENSProfile profile={profile} /> {/* CARDS */}
      </main>
    </div>
  );
};

export default Home;
