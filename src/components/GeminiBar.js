
import React, { useRef } from 'react'
import { genAI } from '../Helper/GeminiAi';
// import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGeminiMovies } from '../utils/GeminiSlice';

import Error from '../Helper/Error';
import { API_OPTIONS } from '../utils/constants';


const GeminiBar = ({ setLoading }) => {
  const inputText = useRef();

  const extractArray = (geminiMovies) => {
    // Removing '/n' from array.
    const lastIndex = geminiMovies.length - 1;
    geminiMovies[lastIndex] = geminiMovies[lastIndex].replace(/\n/g, "");
    return geminiMovies;
  }

  const searchTMDBMovies = async(movie) => {
    const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=true&language=en-US&page=1', API_OPTIONS)
    const data = await response.json();
    return data?.results;
  }
  
  const dispatch = useDispatch();

  const handleButton = async() => {
    setLoading(true);
    const prompt = 
      "Act as a Movie Recommendation System and suggest some movie names for the query: " +
      inputText.current.value +
      ". Generagte 6 movies name that separated by commas without full stop include in any name."
      try {
        
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Convert text into string Array...
        const geminiMovies = text.split(",");
        // console.log(geminiMovies);
        const searchMovies = extractArray(geminiMovies);
        // console.log(searchMovies);
        // console.log(Array.isArray(searchMovies));

        // For each movie i have to call the searchTMDBMovie function.
        const dataMovies =  searchMovies.map((movie) => searchTMDBMovies(movie));
        // console.log(dataMovies); // The dataMovies hold the six promises, bcz it is async function.

        // To resolve the promises, we have to use Promise.all() method.
        const movies = await Promise.all(dataMovies);
        // console.log(movies); // The movies array hold the six arrays of movies.

        // Now we have to merge all the arrays into a single array.
        const mergedMovies = movies.flat();
        // console.log(mergedMovies); // The mergedMovies array hold the all the movies.

        // Now we have to filter the movies array, to get only english and hindi movies.
        const filterMovies = mergedMovies.filter((movie) => (
          movie.original_language === "en" || movie.original_language === "hi"
        ))
        // console.log(filterMovies); // The filterMovies array hold the all the english and hindi movies.

        // Now we have to dispatch the mergedMovies to the store.
        dispatch(addGeminiMovies(filterMovies));
      } catch (error) {
        <Error message={error} />
      }
      finally{
        setLoading(false);
      } 
  }

  return (
    <div className='flex justify-center items-center md:pt-[12%] pt-[30%]'>
        <form action="" className='bg-black md:w-1/2 w-9/12  md:rounded-2xl rounded-lg' onSubmit={(e) => e.preventDefault()}>
        <input 
            className='placeholder-black md:p-3 p-2 m-4 md:w-8/12 w-7/12 outline-none md:rounded-xl rounded-md' 
            type="text" 
            placeholder="Search for a movie" 
            ref={inputText}
        />
        <button 
            className='bg-red-800 text-white md:px-4 px-3 md:py-2.5 py-1 w-3/12 md:rounded-xl rounded-md' 
            onClick={handleButton}>
            Search
        </button>
        </form>
    </div>
  )
}

export default GeminiBar