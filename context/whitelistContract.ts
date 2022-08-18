import { Contract, ethers, providers } from "ethers";
import { WHITELIST_CONTRACT } from "../utils/smartContract";

export const getWhitelistContract = async (
  provider: providers.Web3Provider | providers.JsonRpcProvider,
  signer?: providers.JsonRpcSigner
): Promise<Contract> => {
  const { chainId } = await provider.getNetwork();
  const key = chainId.toString();
  const whiteAddress = WHITELIST_CONTRACT[key].address;
  const whitelistAbi = WHITELIST_CONTRACT[key].abi;
  const signerOrProvider:
    | providers.Web3Provider
    | providers.JsonRpcProvider
    | providers.JsonRpcSigner = !signer ? provider : signer;
  const whitelistContract = new ethers.Contract(
    whiteAddress,
    whitelistAbi,
    signerOrProvider
  );
  return whitelistContract;
};
