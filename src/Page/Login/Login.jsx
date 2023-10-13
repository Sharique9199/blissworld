import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import {auth,provider} from '../../../src/Firebase';
import {useNavigate} from 'react-router';

export const Login = () => {
  const navigate=useNavigate();
  const login=()=>{
    // add firebase login code
    signInWithPopup(auth,provider)
    .then((result)=>{
      console.log("result",result);
     const userName=result.user.displayName;
     console.log(userName)
      navigate("/", {
        state:{
          userName,
        },
      });
    })
    .catch((error)=>{
      console.log("error",error);
    });
  };
  return (

    <div>
      <button onClick={login}>Login with google</button>
  </div>
  )
}