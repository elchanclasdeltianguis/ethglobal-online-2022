import { useState } from "react";
import IcoChevronDown12 from "./ico_chevron_down12";
import { IENSProfile } from "./types";
import truncateEthAddress from "truncate-eth-address";
import { SocialIcon } from "react-social-icons";
import Jazzicon from "react-jazzicon";
import { useRecoilState } from "recoil";
import { contactsAtom } from "../../atoms/contactsAtom";
import { ethers, utils } from "ethers";
import { isStringObject } from "util/types";
// import { CopyToClipboard } from "react-copy-to-clipboard";

interface EnsComponentExpandedInterface {
  ENSProfile: IENSProfile;
  address: string;
  profileInfo: any;
}

export default function ENSProfileCard({
  ENSProfile,
  address,
  profileInfo,
}: EnsComponentExpandedInterface) {
  const [collapsed, setCollapsed] = useState(true);
  const [contacts, setContacts] = useRecoilState(contactsAtom);
  const qr = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${address}&choe=UTF-8`;
  const addressForJazzIcon = utils.isAddress(address)
    ? address
    : ENSProfile.address
    ? ENSProfile.address
    : "8";

  const jazzIconSeed = parseInt(
    Math.round(Math.random() * Number(addressForJazzIcon)).toString()
  );

  const handleDeleteContact = () => {
    const filtered = contacts.filter(
      (contact: string) => !(contact === address)
    );
    console.log(filtered);
    setContacts(filtered);
  };

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {!collapsed && (
        <div
          className="inline-flex w-[460px] flex-col items-start gap-4 
                        rounded-2xl border-4 border-solid border-[rgba(242,242,242,1)]
                        bg-white px-4 py-5 text-left font-['Roboto_Mono'] 
                        font-bold drop-shadow-lg"
        >
          <div className="flex w-[428px] items-center gap-2 self-stretch text-xl leading-7 text-black">
            <Jazzicon diameter={40} seed={jazzIconSeed} />
            {/* NAME */}
            <div className="flex-1 gap-1">
              <p className="w-full">
                {ENSProfile?.name
                  ? ENSProfile.name
                  : truncateEthAddress(address)}
              </p>
            </div>
            <button className="cursor-pointer" onClick={() => handleCollapse()}>
              <IcoChevronDown12 />
            </button>
          </div>
          <div className="text-[undefined] text-[undefined] h-[0] w-[428px] rounded-full leading-[undefined] outline outline-[3px] outline-[rgba(242,242,242,1)]" />
          {/* DESCRIPTION */}
          <div className="flex w-[428px] items-start gap-1 self-stretch text-base leading-6 text-black">
            <p>
              {ENSProfile ? profileInfo.description : "no profile description"}
            </p>
          </div>
          {/* KEY TEXT VALUES */}
          <div className="flex w-[428px] flex-col items-start gap-1 self-stretch text-base leading-6">
            {ENSProfile &&
              ENSProfile.records?.texts?.map(
                (item) =>
                  !item.value.includes("https") && (
                    <div className="flex w-[268px] items-start gap-1">
                      <p className="text-[rgba(130,130,130,1)]">{item.key}</p>
                      <p className="text-black">{item.value}</p>
                    </div>
                  )
              )}
          </div>
          {/* ADDRESSES */}
          <div className="flex w-[428px] items-center gap-1 self-stretch text-base leading-6 text-[rgba(130,130,130,1)]">
            <p className="uppercase">Addresses</p>
          </div>
          <div className="flex w-[428px] flex-col items-start gap-1 self-stretch text-base leading-6">
            <div className="flex w-[268px] flex-col items-start gap-1">
              {ENSProfile &&
                ENSProfile.records?.coinTypes?.map((item) => (
                  <>
                    <p className="text-[rgba(130,130,130,1)]">{item.coin}</p>
                    <p className="text-black">{item.addr}</p>
                    <div className="flex items-start gap-2">
                      <p className="text-[rgba(82,0,255,1)]">QR code</p>
                      <p className="text-black">
                        <br />
                      </p>
                      <p className="text-[rgba(82,0,255,1)]">
                        <p>
                          <button>Copy address</button>
                        </p>
                      </p>
                    </div>
                  </>
                ))}
            </div>
          </div>
          <div className="flex w-[428px] items-center gap-1 self-stretch text-base leading-6 text-[rgba(130,130,130,1)]">
            <p className="uppercase">Socials</p>
          </div>
          {/* SOCIALS */}
          <div className="text-[undefined] text-[undefined] flex items-start gap-4 leading-[undefined]">
            {ENSProfile?.records?.texts &&
              ENSProfile.records?.texts.map((item) => {
                return (
                  item.value.includes("https") && (
                    <SocialIcon
                      url={item.value}
                      fgColor="#333"
                      bgColor="transparent"
                    />
                  )
                );
              })}
          </div>
          <div className="flex w-[428px] items-center gap-1 self-stretch text-base leading-6 text-[rgba(255,0,0,1)]">
            <button onClick={() => handleDeleteContact()}>
              Delete contact
            </button>
          </div>
        </div>
      )}
      {collapsed && (
        <>
          <div className="inline-flex w-[460px] flex-col items-start gap-4 rounded-2xl border-4 border-solid border-[rgba(242,242,242,1)] bg-white px-4 py-5 text-left font-['Roboto_Mono'] text-xl font-bold leading-7 text-black drop-shadow-lg">
            <div className="flex w-[428px] items-center gap-2 self-stretch">
              <div className="h-10 w-10 rounded-full" />
              <Jazzicon diameter={40} seed={jazzIconSeed} />
              <div className="flex-1 gap-1">
                <p className="w-full">
                  {ENSProfile?.name
                    ? ENSProfile.name
                    : truncateEthAddress(address)}
                </p>
              </div>
              <button onClick={() => handleCollapse()}>
                <IcoChevronDown12 />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
