import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { WhitelistContext } from "../../context/whitelistContext";
import { getWhitelistContract } from "../../context/whitelistContract";
import { Loader } from "../commom/Loader";

export const LeftSide = () => {
  const {
    getJoinedAddress,
    getMaxWhitelistAddresses,
    isJoined,
    isConnected,
    signer,
    web3Provider,
  } = useContext(WhitelistContext);
  const [joined, setJoined] = useState(0);
  const [maxListed, setMaxListed] = useState(0);
  const [isListed, setIsListed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      setJoined(await getJoinedAddress());
      setMaxListed(await getMaxWhitelistAddresses());
      setIsLoading(false);
    })();
  }, [getJoinedAddress, getMaxWhitelistAddresses]);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      if (isConnected) setIsListed(await isJoined(signer!));
      setIsLoading(false);
    })();
  }, [isJoined, isConnected, signer]);

  const handleJoin = async () => {
    if (joined >= maxListed) return;
    if (!isConnected) {
      toast.info("Please connect your wallet!", { autoClose: 3000 });
    }
    if (!web3Provider) return;
    setIsLoading(true);
    const connectedSigner = web3Provider.getSigner();
    const whitelistContract = await getWhitelistContract(
      web3Provider,
      connectedSigner
    );
    const tx = await whitelistContract.addAddressToWhiteList();
    tx.wait();
    setJoined(await getJoinedAddress());
    setIsListed(true);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader className="w-[500px] h-[500px] mx-auto my-0 py-5" size={500} />
      ) : (
        <div className="self-start flex flex-col">
          <h2 className="text-4xl py-10">Welcome to poether whitelist!</h2>
          <h4 className="text-2xl tracking-widest font-light text-cyan-300">
            Collections for developers in Crypto.
          </h4>
          <h5 className="py-4 text-xl tracking-widest font-light">
            {joined} / {maxListed} have already joined to the whitelist
          </h5>
          {(!isConnected || !isListed) && (
            <button
              onClick={handleJoin}
              className="bg-gradient-to-r from-emerald-500 to-lime-600 p-2 rounded-md font-semibold w-[160px] ml-[320px]"
            >
              {joined < maxListed ? "Join the whitelist" : "Join closed"}
            </button>
          )}
        </div>
      )}
    </>
  );
};
