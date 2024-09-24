import React, { useRef, useState } from 'react';
import Header from "./Header";
import { checkValidData } from '../utils/validate';
const Login = () => {
    const [isSignInForm,setisSignInForm]= useState(true);
    const [errorMessage,setErrorMessage]=useState();
    const email= useRef(null);
    const password= useRef(null);
    const handleButtonClick=() => {
      //validate the form data
      const message= checkValidData(email.current.value,password.current.value);
      setErrorMessage(message);
    }
    const toggleSignInForm=() =>{
        setisSignInForm(!isSignInForm);
    }
  return (
    <div>
    <Header/>    
    <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg" alt="background-img"></img>
    </div>
    <form onSubmit={(e) => e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
    <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && [<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>]  }
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input ref={password} type="password" placeholder="Password" className="p-4 my-1 w-full bg-gray-700" />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-7 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm? "Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New on Netflix? Sign Up Now": "Already have an account?"}</p>
    </form>
    </div>
  )
}

export default Login