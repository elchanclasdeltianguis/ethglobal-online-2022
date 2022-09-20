import React from "react";

import IcoChevronDown12 from "./assets/ico_chevron_down12";
import IcoSocialWebsite from "./assets/ico_social_website";
import IcoSocialTelegram from "./assets/ico_social_telegram";
import IcoSocialGithub from "./assets/ico_social_github";
// import IcoSocialReddit from "./ico_social_reddit";
import { IENSProfile } from "./types";
import truncateEthAddress from "truncate-eth-address";
import { SocialIcon } from "react-social-icons";
import Jazzicon from "react-jazzicon";

interface EnsComponentExpandedInterface {
  ENSProfile: IENSProfile;
  address: string;
  profileInfo: any;
}

export default function EnsComponentExpanded({
  ENSProfile,
  address,
  profileInfo,
}: EnsComponentExpandedInterface) {
  return (
    <>
      <div className="inline-flex w-[460px] flex-col items-start gap-4 rounded-2xl border-4 border-solid border-[rgba(242,242,242,1)] bg-white px-4 py-5 text-left font-['Roboto_Mono'] font-bold drop-shadow-lg">
        <div className="flex w-[428px] items-center gap-2 self-stretch text-xl leading-7 text-black">
          <Jazzicon
            diameter={40}
            seed={Math.round(
              Math.random() * parseInt(address.substring(address.length - 8))
            )}
          />
          {/* NAME */}
          <div className="flex-1 gap-1">
            <p className="w-full">
              {ENSProfile?.name ? ENSProfile.name : truncateEthAddress(address)}
            </p>
          </div>
          <IcoChevronDown12 />
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
            <p className="text-[rgba(130,130,130,1)]">&#123;key_addr&#125;</p>
            <p className="text-black">&#123;value&#125;</p>
            <div className="flex items-start gap-2">
              <p className="text-[rgba(82,0,255,1)]">QR code</p>
              <p className="text-black">
                <br />
              </p>
              <p className="text-[rgba(82,0,255,1)]">Copy address</p>
            </div>
          </div>
        </div>
        <div className="flex w-[428px] flex-col items-start gap-1 self-stretch text-base leading-6">
          <div className="flex w-[268px] flex-col items-start gap-1">
            <p className="text-[rgba(130,130,130,1)]">&#123;key_addr&#125;</p>
            <p className="text-black">&#123;value&#125;</p>
            <div className="flex items-start gap-2">
              <p className="text-[rgba(82,0,255,1)]">QR code</p>
              <p className="text-black">
                <br />
              </p>
              <p className="text-[rgba(82,0,255,1)]">Copy address</p>
            </div>
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
          <p>Delete contact</p>
        </div>
      </div>
    </>
  );
}
