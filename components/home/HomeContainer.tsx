import React from 'react'
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'


export const HomeContainer = () => {
  return (
    <div className='grid grid-cols-[2fr_1fr] gap-4 justify-center items-center'>
      <LeftSide />
      <RightSide /> 
    </div>
  )
}
