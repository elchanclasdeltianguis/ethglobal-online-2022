import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useENS } from "../hooks";

import { ENSProfileCard } from "../components/ENSProfile";
import { ethers } from "ethers";

import Layout from "../components/Layout";
import { useRecoilState } from "recoil";
import { contactsAtom } from "../atoms/contactsAtom";

const Home: NextPage = () => {
  const chanclas = "0x0F04693d93C420d2685Dc53ced7141a7EBF9Cc91";
  const vitalik = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
  const [contacts, setContacts] = useRecoilState(contactsAtom);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setContacts([chanclas, vitalik]);
  }, []);

  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleAddContact = () => {
    // !ethers.utils.isAddress(message) && alert("Not a valid address!");
    if (contacts.includes(message)) {
      console.log("wwas", message, contacts, contacts.includes(message));
      return;
    }
    const x = [...contacts];
    x.push(message);
    setContacts(x);
  };

  return (
    <Layout>
      <div className="space-y-8 mt-8">
        {/* INPUT BOX */}
        <div className="flex flex-col space-y-8 mb-20">
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
            className="bg-gray1 text-white rounded-full py-1 "
            onClick={() => handleAddContact()}
          >
            add
          </button>
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
