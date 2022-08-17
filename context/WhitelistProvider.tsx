import { Contract, providers } from "ethers";
import { useState } from "react";
import { WhitelistContext } from "./whitelistContext";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const WhitelistProvider = ({ children }: Props) => {
  const [whitelistContract, setWhiteContract] = useState<Contract | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [web3Provider, setWeb3Provider] = useState<
    providers.Web3Provider | undefined
  >(undefined);
  const [signer, setSigner] = useState<string | undefined>(undefined);

  return (
    <WhitelistContext.Provider value={{
      isConnected,
      web3Provider,
      signer,
      whitelistContract
 
    }}>
      {children}
    </WhitelistContext.Provider>
  )

}