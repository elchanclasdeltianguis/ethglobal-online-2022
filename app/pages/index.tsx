/* HOOKS */
import { useEffect, useState } from "react";
import { useLocalStorageObject } from "react-use-window-localstorage";
import { useRecoilState } from "recoil";

/* STATE */
import { contactsAtom } from "../atoms/contactsAtom";

/* CONMPONENTS */
import Layout from "../components/Layout";
import { ENSProfileComponent } from "../components/ENSProfile";
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
      <div className={`grid grid-cols-2 gap-4`}>
        {contacts.map((contact) => {
          return (
            <>
              <ENSProfileComponent address={contact} />
            </>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
