//rafce react arrow function component export

import { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className=""
          src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg' 
          alt="BG">
        </img>
      </div>
      <div className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <form>
          <h1 className="font-bold text-2xl py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-zinc-800 border-2 rounded-md bg-opacity-90" />}
          <input type="text" placeholder="E-mail Address" className="p-4 my-4 w-full bg-zinc-800 border-2 rounded-md bg-opacity-90" />
          <input type="text" placeholder="PassWord" className="p-4 my-4 w-full  bg-zinc-800 border-2 rounded-md bg-opacity-90" />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className="p-2 m-2 cursor-pointer" onClick={toggleSignInForm} >{isSignInForm ? "New User ? Sign up here. " : "Already Registered ? Sign In Now. "}</p>
        </form>
      </div>
    </div>
  )
}

export default Login

