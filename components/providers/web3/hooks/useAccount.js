

import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {
  // "0xA1cFce04e9522E963E8448c53Dc5742283a6d59a": true
  "0xe890b70edafebd880ce55b69b0a419413eb5e3d50545eec5f1140330774c63a5": true, // hash address
  "0x2237095eea731ec23495751f6a359c985e2fb223d1bd7c940e51ed2daa47300d": true
}

export const handler = (web3, provider) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()
      const account = accounts[0]

      if (!account) {
        throw new Error("Cannot retreive an account. Please refresh the browser.")
      }

      return account
    }
  )

  useEffect(() => {

    const mutator = accounts => mutate(accounts[0] ?? null)
    provider?.on("accountsChanged", mutator)

    return () => {
      provider?.removeListener("accountsChanged", mutator)
    }
  }, [provider])

  return {
    data,
    isAdmin: (
      data &&
      adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest
  }
}
