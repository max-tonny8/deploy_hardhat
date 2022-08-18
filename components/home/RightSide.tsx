import Image from 'next/image'
import React from 'react'
 import nakamoto from '../../assets/undraw_nakamoto_-2-iv6.svg';

export const RightSide = () => {
  return (
    <div>
      <Image  
        src={nakamoto}
        alt="Nakamoto image"
        width={600}
        height={600}
      />
    </div>
  )
}
