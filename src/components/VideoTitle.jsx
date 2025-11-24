import React from 'react'
import { PLAY_BUTTON_ICON_URL, MORE_INFO_ICON_URL } from '../utils/constants'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black/30'>
      <h1 className='font-bold text-3xl'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div className='rounded-md px-4 py-2 w-50 flex gap-4'>
        <button className='flex items-center gap-2  px-4 rounded-md bg-black text-white h-10'> ▶️ Play</button>
        <button className='flex items-center gap-2 px-4 rounded-md bg-gray-500 h-10'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle