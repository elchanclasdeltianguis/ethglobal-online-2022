import React from "react";
import { IENSProfile } from "../../hooks/types";

interface Props {
  profile: IENSProfile | undefined | null;
}

function ENSProfile({ profile }: Props) {
  console.log(profile);
  if (profile)
    return (
      <>
        <div className="flex gap-4 flex-col border-2 border-black rounded-xl">
          <div className="text-6xl underline">{profile.name}</div>
          <div className="">
            <h1>coins</h1>
            {profile?.records?.coinTypes &&
              profile.records?.coinTypes.map((item) => {
                return (
                  <div className="flex flex-col gap-1 border-2 rounded border-black">
                    <h1 className="uppercase">{item.coin}:</h1>
                    <p>{item.value}</p>
                  </div>
                );
              })}
          </div>
          <div>
            <h1>text records</h1>
          </div>
          {profile?.records?.texts &&
            profile.records?.texts.map((item) => {
              return (
                <div className="flex flex-col gap-1 border-2 rounded border-black">
                  <h1 className="uppercase">{item.key}:</h1>
                  <p>{item.value}</p>
                </div>
              );
            })}
        </div>
      </>
    );
  return <></>;
}

export default ENSProfile;
