import { createContext } from "react";
import { IWhitelistContext } from "../interfaces/IWhitelistContext";

export const contextDefaultValues: IWhitelistContext = {
  isConnected: false,
  web3Provider: undefined,
  signer: undefined,
  getMaxWhitelistAddresses(): Promise<number> {
    return new Promise(() => 0);
  },
  getJoinedAddress(): Promise<number> {
    return new Promise(() => 0);
  },
  connectWallet() {},
};

export const WhitelistContext =
  createContext<IWhitelistContext>(contextDefaultValues);
