/* HOOKS */
import { useEffect, useState } from "react";
import { useENS } from "../hooks";
import { useLocalStorageObject } from "react-use-window-localstorage";
import { useRecoilState } from "recoil";

/* LIBS */
import { ethers } from "ethers";
import _ from "lodash";

/* STATE */
import { contactsAtom } from "../atoms/contactsAtom";

/* CONMPONENTS */
import Layout from "../components/Layout";
import { ENSProfileCard } from "../components/ENSProfile";
import AddressInput from "../components/InputGroup/AddressInput";

/* TYPES */
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [initialized, setInitialized] = useState(false);
  const [contacts, setContacts] = useRecoilState(contactsAtom);
  const [value, setValue, loading, available] = useLocalStorageObject(
    "My0xContacts",
    []
  );

  // load from local storage if available and contacts empty, only once
  useEffect(() => {
    if (contacts.length === 0 && value.length !== 0 && !initialized) {
      console.log("not initialized");
      console.log(initialized, value, loading, available);
      setContacts(value);
      setInitialized(true);
    }
  }, [contacts, value, initialized]);

  return (
    <Layout>
      <AddressInput />
      {/* LISTAS */}
      <div className="flex space-x-8">
        <div>
          <p className="underline">contacts</p>
          {contacts.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <div>
          <p className="underline">stored</p>
          {value.map((item: string) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
      {/* GRID */}
      <div className={`grid grid-cols-2 gap-4`}>
        {contacts.map((contact) => {
          return (
            <>
              <ENSProfileCard address={contact} />
            </>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
