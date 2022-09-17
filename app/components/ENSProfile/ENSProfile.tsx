import React from "react";
import { IENSProfile } from "./types";
import { SocialIcon } from "react-social-icons";

interface IProfileInfo {
  email?: string;
  description?: string;
  url?: string;
  keywords?: string;
}

interface Props {
  profile: IENSProfile | undefined | null;
}

export const ENSProfile = ({ profile }: Props) => {
  const label = profile?.name;

  const profileInfo: IProfileInfo = {};
  const info = profile?.records?.texts.map(
    (item) => (profileInfo[item.key] = item.value)
  );

  if (profile)
    return (
      <>
        <div className="flex gap-4 flex-col border-2 border-black rounded-xl px-6 py-12">
          <div className="text-xl">{label}</div>
          <p>{profileInfo.description}</p>
          <p>email: {profileInfo.email}</p>
          <p>url: {profileInfo.url}</p>
          <p>keywords: {profileInfo.keywords}</p>
          {/* socials */}
          <div className="space-x-4">
            {profile?.records?.texts &&
              profile.records?.texts.map((item) => {
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
      </>
    );
  return <></>;
};
