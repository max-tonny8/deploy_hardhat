import { Contract, providers } from "ethers";

export interface IWhitelistContext {
  isConnected: boolean;
  web3Provider: providers.Web3Provider | undefined;
  signer: string | undefined;
  connectWallet: () => void;
  getMaxWhitelistAddresses: () => Promise<number>;
  getJoinedAddress: () => Promise<number>;
  isJoined: (address: string) => Promise<boolean>;
}
