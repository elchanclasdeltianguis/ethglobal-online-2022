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
    /* CARD */
    <div
      className={`w-[460px] ${
        collapsed ? "h-[80px]" : "h-[556px]"
      } border-4 border-gray6 
            font-mono bg-white rounded-[16px]
          flex flex-col items-start shadow-[-4px_4px_0px_0px] 
          shadow-gray6 px-[20px] py-[16px]`}
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
        <button
          className="w-6 h-6 bg-gray5 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
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
          ) : (
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6L6 2L10 6"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      {/* COLLAPSED */}
      <section id="collapsable">
        {!collapsed && (
          <div className="">
            {/* spacer */}
            <div className="w-[428px] border-b-[3px] border-gray6 my-2 " />
            {ENSProfile && (
              <>
                <div className="text-gray1 text-descriptionSize w-[428px] h-[24px] flex items-start gap-[4px]">
                  {ENSProfile ? profileInfo.description : "no profile"}
                </div>
                
              </>
            )}
          </div>
        )}
      </section>
      {/* END COLLAPSABLE */}
    </div>
  );
};
