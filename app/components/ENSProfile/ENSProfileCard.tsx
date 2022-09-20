import React, { useEffect, useState } from "react";
import { IENSProfile } from "./types";
import { SocialIcon } from "react-social-icons";
import { useENS } from "../../hooks";
import truncateEthAddress from "truncate-eth-address";
import Jazzicon from "react-jazzicon";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import EnsComponentExpanded from "./ens-component-expanded";
import EnsComponentCollapsed from "./ens-component-collapsed";



interface Props {
  address: string;
  // profile: IENSProfile | undefined | null;
}

export const ENSProfileCard = ({ address }: Props) => {
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
    <div>
      {ENSProfile && (
        <EnsComponentExpanded
          ENSProfile={ENSProfile}
          address={address}
          profileInfo={profileInfo}
        />
      )}
    </div>
  );
};
