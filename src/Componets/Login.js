//rafce react arrow function component export

import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidateData } from "../Utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BG_IMAGE, USER_AVATAR } from "../Utils/Constants";


const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMesage,setErrorMessage]=useState(null);
  const dispatch=useDispatch();

  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null)


  const handleClick=()=>{
    //Validation of Form
    // console.log(email);
    // console.log(password);

    const message=checkValidateData(email.current.value,password.current.value);
    // console.log(message);
    setErrorMessage(message)

    if(message) return;

    //Sign In or Sign Up
    if(!isSignInForm){
      //Sign UP
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            const {uid , email, displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid : uid , email : email , displayName: displayName,photoURL : photoURL}));
          }).catch((error) => {
            setErrorMessage(error.message)
          });
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }else{
      //Sign in
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-"+ errorMessage);
      });
    }
  }

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover md:h-auto"
          src={BG_IMAGE} 
          alt="BG">
        </img>
      </div>
      <div className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <form onSubmit={(e)=> e.preventDefault()}>
          <h1 className="font-bold text-2xl py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-zinc-800 border-2 rounded-md bg-opacity-90" />}
          <input ref={email} type="text" placeholder="E-mail Address" className="p-4 my-4 w-full bg-zinc-800 border-2 rounded-md bg-opacity-90" />
          <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full  bg-zinc-800 border-2 rounded-md bg-opacity-90" />
          <p className="text-red-600 font-bold m-1 p-1">{errorMesage}</p>
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className="p-2 m-2 cursor-pointer" onClick={toggleSignInForm} >{isSignInForm ? "New User ? Sign up here. " : "Already Registered ? Sign In Now. "}</p>
        </form>
      </div>
    </div>
  )
}

export default Login

