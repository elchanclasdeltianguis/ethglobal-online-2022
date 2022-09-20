// Import `connect` from the Tableland library
import { connect } from "@tableland/sdk";

// Connect to the Tableland testnet (defaults to Polygon Mumbai testnet chain)
// @return {Connection} Interface to access the Tableland network and, optionally, a target `chain`
const tableland = await connect({
  network: "testnet",
  chain: "polygon-mumbai",
});
// For client-side apps, call `siwe` to prompt a browser wallet sign-in flow
await tableland.siwe();

// Create a new table with a supplied SQL schema and optional `prefix`
// @return {Connection} Connection object, including the table's `name`
const { name } = await tableland.create(
  `id integer primary key, name text`, // Table schema definition
  {
    prefix: `my_sdk_table`, // Optional `prefix` used to define a human-readable string
  }
);

// The table's `name` is in the format `{prefix}_{chainId}_{tableId}`
console.log(name); // e.g., my_sdk_table_80001_311
// Without the supplied `prefix`, `name` would be be `_80001_311`

// Insert a row into the table
// @return {WriteQueryResult} On-chain transaction hash of the write query
const writeRes = await tableland.write(
  `INSERT INTO ${name} (id, name) VALUES (0, 'Bobby Tables');`
);

// Perform a read query, requesting all rows from the table
const readRes = await tableland.read(`SELECT * FROM ${name};`);
// Note: a table *must first exist* in Tableland before performing `read`.
// Similarly, a `write` must first be included in a block before it's accessible in `read`.
// See the utility function `waitConfirm` (not an export) to validate when Tableland performed the instructions.
// Function here: https://github.com/tablelandnetwork/js-tableland/blob/46c3fb8f47f6c13721b3e3cff5a2cb01ddbd04d7/src/lib/util.ts#L122
