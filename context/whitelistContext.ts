import { Contract } from "ethers";
import { createContext } from "react";
import { IWhitelistContext } from "../interfaces/IWhitelistContext";

export const contextDefaultValues: IWhitelistContext = {
  isConnected: false,
  web3Provider: undefined,
  signer: undefined,
  // whitelistContract: null,
  // getMaxListedAddress(whitelistContract: Contract): Promise<string> {
  //   return new Promise(() => "");
  // },
  connectWallet() {},
};

export const WhitelistContext =
  createContext<IWhitelistContext>(contextDefaultValues);
