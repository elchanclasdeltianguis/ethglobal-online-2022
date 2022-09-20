import { useState, useEffect } from "react";
import { connect, ConnectOptions, Connection } from "@tableland/sdk";

export function useTableland() {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [tableland, setTableland] = useState<Connection | undefined>(undefined);

  useEffect(() => {
    async function test() {
      const tableland_connection = await connect({
        network: "testnet",
        chain: "polygon-mumbai",
      });
      setTableland(tableland_connection);
    }

    if (!tableland) {
      setConnecting(true);
      test();
      setConnected(true);
      setConnecting(false);
    }
  }, [tableland]);
  return { connecting, connected, tableland };
}

export default useTableland;
