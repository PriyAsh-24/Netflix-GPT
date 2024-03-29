import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/Constants";


const Header= ()=>{
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

    return(
            <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
                <div>
                <img className="w-44"
                    src={LOGO}
                    alt="LOgo">
                </img>
                </div>
                {user && <div className="flex">
                    <img src={user?.photoURL} alt="Photo" className="w-14 h-14"></img>
                    <button className="font-bold text-white cursor-pointer" onClick={handlesignout}>Sign Out </button>
                </div>}
            </div>

    )
}

export default Header; 