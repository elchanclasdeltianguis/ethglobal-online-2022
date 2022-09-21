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
  const [message, setMessage] = useState("");
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

  // handles change in input field
  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };

  // handles add contact
  const handleAddContact = (e: any) => {
    console.log("add contact");
    e.preventDefault();

    // !ethers.utils.isAddress(message) && alert("Not a valid address!");
    if (contacts.includes(message)) {
      console.log("contact already in book");
      return;
    }
    if (message == "") return;

    const deconstructedContacts = [...contacts];
    deconstructedContacts.push(message);
    setContacts(deconstructedContacts);
    setValue(deconstructedContacts);
    console.log("contacts storedcontacts", contacts, value);
  };

  return (
    <Layout>
      <AddressInput />
      {/* INPUT BOX */}
      {/* <div className="space-y-8">
        <form
          className="flex flex-col space-y-8 mb-20"
          onSubmit={handleAddContact}
        >
          <input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
            autoComplete="off"
            placeholder="address"
            className="text-center rounded-full "
          />
          <button
            type="submit"
            className="bg-gray1 text-white rounded-full py-1 "
          >
            add
          </button>
        </form>
      </div> */}

      {/* LISTAS
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
      </div> */}

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
