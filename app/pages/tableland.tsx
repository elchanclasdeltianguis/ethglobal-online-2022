import type { NextPage } from "next";
import { connect } from "@tableland/sdk";

import Layout from "../components/Layout";
import { useTableland } from "../hooks";

const Home: NextPage = () => {
  const { connecting, connected, tableland } = useTableland();
  // Create a table
  // const { name } = await tableland.create(`id int primary key, name text`, `quickstart`)
  // Wait for the table to be created, then query
  // const writeRes = await tableland.write(`INSERT INTO ${name} VALUES (0, 'Bobby Tables');`
  // const readRes = await tableland.read(`SELECT * FROM ${name}`)

  return (
    <Layout>
      <h1>tableland</h1>
      <div>connecting: {connecting ? "yes" : "no"}</div>
      <div>connected: {connected ? "yes" : "no"}</div>
      <div>chain: {tableland?.options.chainId}</div>
    </Layout>
  );
};

export default Home;
