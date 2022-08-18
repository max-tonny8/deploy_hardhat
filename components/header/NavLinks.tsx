import React, { useContext } from 'react'
import { WhitelistContext } from '../../context/whitelistContext'

export const NavLinks = () => {
  const { connectWallet, isConnected,signer } = useContext(WhitelistContext);
  return (
    <ul>
      <li>
       {!isConnected ?
          <button className='bg-gradient-to-r from-sky-400 to-blue-500 p-2 rounded-md font-semibold' onClick={connectWallet}>Connect</button> :
          <>{signer}</>
        }
      </li>
    </ul>
  )
}
