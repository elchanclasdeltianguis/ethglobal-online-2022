import React, { useEffect } from "react";
import { IENSProfile } from "./types";
import { SocialIcon } from "react-social-icons";
import { useENS } from "../../hooks";

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
  const { ENSProfile, getProfile } = useENS("https://cloudflare-eth.com/");
  console.log("card", address), ENSProfile;

  useEffect(() => {
    getProfile(address);
  }, [address]);

  const profileInfo: any = {};
  ENSProfile?.records?.texts?.map(
    (item) => (profileInfo[item.key] = item.value)
  );

  if (ENSProfile)
    return (
      /* container */
      <div
        className="w-[460px] h-[600px] border-4 border-gray6 
          font-mono bg-white rounded-[16px] py-5 px-4 
          flex flex-col items-start shadow-[-4px_4px_0px_0px] 
          shadow-gray6"
      >
        {/* TOP SECTION */}
        <div
          className="w-[428px] h-[56px] gap-1 flex flex-col 
          items-start justify-center space-y-[4px]"
        >
          <div className="text-gray1 text-label">{ENSProfile.name}</div>
          <div className="text-gray3 text-descriptionSize">
            {profileInfo.description}
          </div>
        </div>
        {/* spacer */}
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
          {/* <section id="COINS" className="">
            <h1>coins</h1>
            {profile?.records?.coinTypes &&
              profile.records?.coinTypes.map((item) => {
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
          </section> */}
        </div>
      </div>
    );
  return <></>;
};