import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
const langKey = useSelector(store => store.config.lang);

  return (
    <div className='flex justify-center items-center md:pt-[12%] pt-[30%]'>
    <form action="" className='bg-black md:w-1/2 w-9/12  md:rounded-2xl rounded-lg'>
    <input 
        className='placeholder-black md:p-3 p-2 m-4 md:w-8/12 w-7/12 outline-none md:rounded-xl rounded-md' 
        type="text" 
        placeholder={lang[langKey].gptSearchPlaceholder} 
       
    />
    <button 
        className='bg-red-600 text-white md:px-4 px-3 md:py-2.5 py-1 w-3/12 md:rounded-xl rounded-md' 
        >
        {lang[langKey].search}
    </button>
    </form>
</div>
  )
}

export default GptSearchBar
