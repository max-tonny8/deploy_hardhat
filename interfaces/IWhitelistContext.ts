import { Contract, providers } from "ethers";

export interface IWhitelistContext {
  isConnected: boolean;
  web3Provider: providers.Web3Provider | undefined;
  signer: string | undefined;
  //whitelistContract: Contract | null;
  connectWallet: () => void;
  // getMaxListedAddress: (whitelistContract: Contract) => Promise<string>;
}
