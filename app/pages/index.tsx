import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useENS } from "../hooks";

import { ENSProfileCard } from "../components/ENSProfile";

import Layout from "../components/Layout";

const Home: NextPage = () => {
  const chanclas = "0x0F04693d93C420d2685Dc53ced7141a7EBF9Cc91";
  const vitalik = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
  const { ENSProfile, getProfile } = useENS("https://cloudflare-eth.com/");

  useEffect(() => {
    getProfile(chanclas);
  }, []);

  return (
    <Layout>
      <ENSProfileCard profile={ENSProfile} />
    </Layout>
  );
};

export default Home;
