import React from "react";
import { IENSProfile } from "../../types";

interface Props {
  profile: IENSProfile;
}

function ENSProfile({ profile }: Props) {
  return (
    <div>
      <h1 className="text-2xl text-blue-500">ENSProfile</h1>
      <div className="text-xl">
        name: {profile.name}
      </div>
      <p>address: {profile.address}</p>
      <p>message: {profile.message}</p>
    </div>
  );
}

export default ENSProfile;
