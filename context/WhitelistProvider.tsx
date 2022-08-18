import { providers } from "ethers";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { connect } from "./walletConnection";
import { WhitelistContext } from "./whitelistContext";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const WhitelistProvider = ({ children }: Props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [web3Provider, setWeb3Provider] = useState<
    providers.Web3Provider | undefined
  >(undefined);
  const [signer, setSigner] = useState<string | undefined>(undefined);

  const router = useRouter();

  const providerEvents = () => {
    window.ethereum.on("accountsChanged", async () => {
      resetConnection();
      router.push("/");
    }); 
  };
  const connectWallet = async () => {
    try {
      if (
        typeof window != "undefined" &&
        typeof window.ethereum != "undefined" &&
        window.ethereum.isMetaMask
      ) {
        const web3Provider = await connect();
        if (!web3Provider) {
          toast.error("An error was ocurred when try to connect your wallet");
          return;
        }
        const { chainId } = await web3Provider.getNetwork();
        if (chainId !== 31337) {
          toast.error(
            "Change your network to Mumbai Testnet or Local HardHat"
          );
          resetConnection();
          return;
        }
        const signer = web3Provider.getSigner();
        const accounts = await signer.provider.listAccounts();
        setWeb3Provider(web3Provider); 
        setSigner(accounts[0]); 
        setIsConnected(true);
        providerEvents();
      } else {
          toast.info("Please install metamask!");
          resetConnection();
      }
    } catch (error) {
      console.error(" error", error);
      toast.error("An error was ocurred when try to connect your wallet");
      resetConnection();
    }
  };

  const resetConnection = () => {
    setWeb3Provider(undefined)
    setSigner(undefined);
    setIsConnected(false);
  }

  return (
    <WhitelistContext.Provider value={{
      isConnected,
      web3Provider,
      signer,
      connectWallet  
    }}>
      {children}
    </WhitelistContext.Provider>
  )

}