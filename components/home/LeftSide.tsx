import React, { useContext, useEffect, useState } from 'react'
import { WhitelistContext } from '../../context/whitelistContext';


export const LeftSide = () => {
  const {getJoinedAddress, getMaxWhitelistAddresses } = useContext(WhitelistContext);
  const [joined, setJoined] = useState(0);
  const [maxListed, setMaxListed] = useState(0);

  useEffect(() => {
    (async () => {
      const currentJoined = await getJoinedAddress();
      const max = await getMaxWhitelistAddresses();
      setJoined(currentJoined);
      setMaxListed(max);
    })();
    
  },[getJoinedAddress, getMaxWhitelistAddresses])


  return (
    <div className='self-start'>
      <h2 className='text-4xl py-10'>Welcome to poether whitelist!</h2>
      <h4 className='text-2xl tracking-widest font-light text-cyan-300'>Collections for developers in Crypto.</h4>
      <h5 className='py-4 text-xl tracking-widest font-light'>{joined} have already joined to the whitelist</h5>
      <p>Max: {maxListed}</p>
    </div>
  )
}
