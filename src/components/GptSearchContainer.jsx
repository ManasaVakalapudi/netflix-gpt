import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMG_URL } from '../utils/constants.js'

const GptSearchContainer = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BACKGROUND_IMG_URL} />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchContainer