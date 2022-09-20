import React, { useEffect, useState } from "react";
import { IENSProfile } from "./types";
import { SocialIcon } from "react-social-icons";
import { useENS } from "../../hooks";
import truncateEthAddress from "truncate-eth-address";
import Jazzicon from "react-jazzicon";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface IProfileInfo {
  email?: string;
  description?: string;
  url?: string;
  keywords?: string;
}

interface Props {
  address: string;
  // profile: IENSProfile | undefined | null;
}

export const ENSProfileCard = ({ address }: Props) => {
  const [collapsed, setCollapsed] = useState(true);
  const { ENSProfile, getProfile } = useENS("https://cloudflare-eth.com/");
  console.log("card", address), ENSProfile;
  const qr = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${address}&choe=UTF-8`;

  useEffect(() => {
    getProfile(address);
  }, [address]);

  const profileInfo: any = {};
  ENSProfile?.records?.texts?.map(
    (item) => (profileInfo[item.key] = item.value)
  );

  return (
    /* container */
    <div
      className="w-[460px] h-[80px] border-4 border-gray6 
            font-mono bg-white rounded-[16px]
          flex flex-col items-start shadow-[-4px_4px_0px_0px] 
          shadow-gray6 px-[20px] py-[16px]"
    >
      {/* FRAME 1 */}
      <div
        className="w-[428px] h-[40px] gap-[8px] flex flex-row px-[16px]
          items-center space-y-[4px] p-0 justify-between"
      >
        <div className="flex items-center gap-[8px]">
          <Jazzicon
            diameter={40}
            seed={Math.round(
              Math.random() * parseInt(address.substring(address.length - 8))
            )}
          />
          <div className="text-gray1 text-label">
            {ENSProfile?.name ? ENSProfile.name : truncateEthAddress(address)}
          </div>
        </div>
        <div className="w-6 h-6 bg-gray5 rounded-full flex items-center justify-center">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2L6 6L2 2"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* COLLAPSED */}
      <section id="collapsable">
        {!collapsed && (
          <>
            {/* spacer */}
            {ENSProfile && (
              <>
                <div className="text-gray3 text-descriptionSize">
                  {ENSProfile ? profileInfo.description : "no profile"}
                </div>
                <div className="w-[428px] border-b-[3px] border-gray6 my-2"></div>
                {/* TEXT */}
                <div className="w-[428px] h-[472px] text-gray3">
                  <p>email: {profileInfo.email}</p>
                  <p>url: {profileInfo.url}</p>
                  <p>keywords: {profileInfo.keywords}</p>
                  {/* socials */}
                  <div className="space-x-4">
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
                  <section id="COINS" className="">
                    <h1>coins</h1>
                    {ENSProfile?.records?.coinTypes &&
                      ENSProfile.records?.coinTypes.map((item) => {
                        return (
                          <div
                            key={item.key}
                            className="flex flex-col gap-1 border-2 rounded border-black"
                          >
                            <h1 className="uppercase">{item.coin}:</h1>
                            <p>{item.value}</p>
                          </div>
                        );
                      })}
                  </section>
                </div>
              </>
            )}
          </>
        )}
      </section>
      {/* END COLLAPSABLE */}
    </div>
  );
};
