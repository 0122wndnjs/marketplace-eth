
import { useEffect, useState } from "react"
import useSWR from "swr"

const adminAddresses = {
    // "0xA1cFce04e9522E963E8448c53Dc5742283a6d59a": true
    "0xe890b70edafebd880ce55b69b0a419413eb5e3d50545eec5f1140330774c63a5": true // hash address
}

export const handler = (web3, provider) => () => {
    // const [account, setAccount] = useState(null)
    const { data, mutate, ...rest } = useSWR(() =>
        web3 ? "web3/accounts" : null,
        async () => {
            const accounts = await web3.eth.getAccounts()
            return accounts[0]
        }
    )

    // useEffect(() => {
    //     const getAccount = async () => {
    //         const accounts = await web3.eth.getAccounts()
    //         setAccount(accounts[0])
    //     }
    //     web3 && getAccount()
    // }, [web3])

    useEffect(() => {
        provider &&
        provider.on("accountsChanged", 
            accounts => mutate(accounts[0] ?? null)
        )
    },[provider])

    return {
        account: {
            data,
            isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
            mutate,
            ...rest
        }
    }
}