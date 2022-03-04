import React from 'react'
import {signInWithPopup} from "firebase/auth" ;
import {auth , provider} from "../firebase-config"
import { useNavigate } from 'react-router-dom';

function Login({setIsauth}) {

  let navigate = useNavigate() ;

  const signInWithGoogle = () => {
      signInWithPopup(auth , provider).then((result) => {
        localStorage.setItem("isAuth" , true) ;
        setIsauth(true) ;
        navigate("/") ;
      }) ;
  }

  return (
    <div className='loginPage' >
      <p>Sign In With Google To Continue</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle} >Sign In With Google</button>
    </div>
  ) 
}

export default Login