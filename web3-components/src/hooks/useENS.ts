import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { ENS } from '@ensdomains/ensjs'
import { IENSProfile } from '../types'

function useENS(account: string | undefined, rpc: string | undefined) {
  const [ENSname, setENSProfile] = useState<IENSProfile | null | undefined>(undefined)

  useEffect(() => {
    const fetchENSProfile = async (address: string) => {
      const ENSInstance = new ENS()
      const provider = new ethers.providers.JsonRpcProvider(rpc)
      await ENSInstance.setProvider(provider)
      const profile: IENSProfile | undefined | null = address ? await ENSInstance.getProfile(address) : undefined
      if (profile) {
        setENSProfile(profile)
      } else {
        setENSProfile(undefined)
      }
    }
    if (account !== undefined) {
      fetchENSProfile(account)
    }
  }, [account, rpc])
  return ENSname
}

export default useENS
