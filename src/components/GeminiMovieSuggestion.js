import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Shimmer from '../Helper/Shimmer';
import { MOVIECARD_IMAGE_URL } from '../utils/constants';

const GeminiMovieSuggestion = ( {loading} ) => {
  const movies = useSelector((store) => store.gemini?.geminiMovies);
  // console.log(movies);
  const [maxLength, setMaxLength] = useState(99);

  // Function to get the current screen size
  const updateMaxLength = () => {
    const width = window.innerWidth;
    if (width >= 768) {
      setMaxLength(200); // Set maxLength for md screens
    } else {
      setMaxLength(85); // Set maxLength for smaller screens
    }
  };

  // Update maxLength on component mount and window resize
  useEffect(() => {
    updateMaxLength();
    window.addEventListener('resize', updateMaxLength);
    return () => window.removeEventListener('resize', updateMaxLength);
  }, []);


  if(movies === null) return;

  // Filter movies to exclude those without images
  const filteredMovies = movies.filter((movie) => (
    movie.poster_path !== null
  ));

  // Make a limitation for the length of description of movie.
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  if(filteredMovies === null) return;
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col overflow-y-scroll bg-black md:w-6/12 w-9/12 bg-opacity-80 rounded-2xl md:mt-3 mt-[9%] hide-scrollbar md:max-h-53vh max-h-65vh' >
        { loading ? (
            <Shimmer/>
          ) : 
          (filteredMovies.map((movie) => (
            <div className='flex justify-center items-center md:p-2 p-1 md:m-2 m-1' key={movie?.id}>
              <img src={MOVIECARD_IMAGE_URL + movie.poster_path} alt={movie.title} className='w-3/12 rounded-sm'/>
              <div className='flex flex-col ml-[6%]'>
                <h1 className='text-white md:text-xl text-base md:font-semibold font-medium'>{movie.title}</h1>
                <p className='text-white mt-2 md:text-base text-xs'>{truncateText(movie.overview, maxLength)}</p>
              </div>
            </div>
          )))
        }
      </div>
    </div>
  )
}

export default GeminiMovieSuggestion