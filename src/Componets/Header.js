import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../Utils/Constants";
import { toToggleToGptPage } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";


const Header= ()=>{
  const showLanguage=useSelector((store)=> store.gpt.togglegpt)
    const navigate=useNavigate();
    const user=useSelector((store)=>store.user)
    const dispatch=useDispatch();

    const handlesignout=()=>{
        signOut(auth).then(() => {
            navigate("/")
          }).catch((error) => {
            navigate("/error")
          });
    }

    useEffect(()=>{
        const unsuscribe= onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid , email, displayName,photoURL} = user;
            dispatch(addUser({uid : uid , email : email , displayName: displayName,photoURL : photoURL}));
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        })


        return ()=> unsuscribe();
      },[])

      const toggletoGptScreen=()=>{
        dispatch(toToggleToGptPage());
      }

      const handleLanguageChange=(e)=>{
        // console.log(e.target.value);
        dispatch(changeLanguage(e.target.value));
      }

    return(
            <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center pt-7">
                <div>
                <img className="w-44"
                    src={LOGO}
                    alt="LOgo">
                </img>
                </div>
                {user && <div className="flex">
                  {showLanguage && <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map((lang)=> <option key ={lang.identifier} value={lang.identifier} >{lang.name} </option>)}
                  </select>}
                  <button className="bg-orange-400 p-3 m-2 rounded-md hover:bg-orange-300" onClick={toggletoGptScreen}> {showLanguage ? "Homepage" : "GPT Search"}</button>
                    <img src={user?.photoURL} alt="Photo" className="w-14 h-14 hidden md:inline-block"></img>
                    <button className="font-bold text-white cursor-pointer pl-1" onClick={handlesignout}> [Sign Out]</button>
                </div>}
            </div>

    )
}

export default Header; 