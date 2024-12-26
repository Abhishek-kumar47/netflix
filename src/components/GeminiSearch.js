import React, { useState } from 'react'
import GeminiBar from './GeminiBar'
import GeminiMovieSuggestion from './GeminiMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GeminiSearch = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className='bg-cover w-screen h-screen bg-repeat-y' style={{backgroundImage: `url(${BG_URL})`}}>
        {/* It consist of two components that are geminiSearchBar and geminiMovieSuggestion */}
        <GeminiBar setLoading={setLoading}/>
        <GeminiMovieSuggestion loading={loading}/>
    </div>
  )
}

export default GeminiSearch