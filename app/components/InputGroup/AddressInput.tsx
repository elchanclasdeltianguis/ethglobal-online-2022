import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { contactsAtom } from "../../atoms/contactsAtom";
import { useLocalStorageObject } from "react-use-window-localstorage";

export default function AddressInput() {
  const [message, setMessage] = useState("");
  const [contacts, setContacts] = useRecoilState(contactsAtom);
  const [value, setValue] = useLocalStorageObject("My0xContacts");

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
      setMessage("");
      return;
    }
    if (message == "") return;

    const deconstructedContacts = [...contacts];
    deconstructedContacts.push(message);
    setContacts(deconstructedContacts);
    setValue(deconstructedContacts);
    console.log("contacts storedcontacts", contacts, value);
    setMessage("");
  };

  return (
    <form
      className="flex items-center w-[640px] h-[60px] mb-[81px] mt-[86px] justify-center"
      onSubmit={handleAddContact}
    >
      <div className="flex w-[620px] items-center gap-2  justify-center">
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message}
          placeholder="Type an ENS or address here..."
          className={`inline-flex h-[60px] flex-1 flex-grow items-center gap-2 
          rounded-[40px] border-4 border-solid border-black bg-white 
          p-[18px] text-center font-['Roboto_Mono'] text-base font-bold 
          leading-[18px] shadow-[#333333] shadow-[-4px_4px_0px_0px] ${
            message !== "" ? "text-black" : "text-[rgba(130,130,130,1)"
          }] 
          `}
        />
        <button
          className={`inline-flex items-center gap-2 rounded-[40px]  px-6 pt-[18px] pb-[18px] transition-all  
                  h-[60px] text-center font-['Roboto'] text-base font-bold leading-[18px] 
                  text-[rgba(189,189,189,1)] ${
                    message !== ""
                      ? "bg-gray1 bg-gradient-to-br from-[#8247E5] to-[#5200FF] border-solid border-4 border-black shadow-[#333333] shadow-[-4px_4px_0px_0px]"
                      : "bg-white border-4 border-solid border-[rgba(189,189,189,1)] shadow-[rgba(189,189,189,1)] shadow-[-4px_4px_0px_0px]"
                  }`}
          type="submit"
        >
          <p>Save ENS</p>
        </button>
      </div>
    </form>
  );
}
