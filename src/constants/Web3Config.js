import Web3 from "web3";

export const privProvider = process.env.PRIV_NETWORK ? process.env.PRIV_NETWORK : "ws://192.168.99.100:8546";
export const privWeb3 = new Web3(new Web3.providers.WebsocketProvider(privProvider));