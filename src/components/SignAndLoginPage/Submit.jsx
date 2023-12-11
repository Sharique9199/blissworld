import React, {useState} from 'react'
// import "./Login.css";
import {Link,useNavigate} from "react-router-dom"
import './Submit.css'
import {auth} from '../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


export const Submit = () => {
    const navigate=useNavigate();
    const [errorMessage,setErrorMessage]=useState("");
    const [submitButtonDisable,setSubmitButtonDisable]=useState(false);
    const [values, setValues]=useState({
     
      email:"",
      password:""
    })
    const handleSubmit=()=>{
        if( !values.email || !values.password){
          setErrorMessage('Fill all the fields');
          return;
        }
        setErrorMessage("");
        setSubmitButtonDisable(true);
        signInWithEmailAndPassword(auth,values.email,values.password)
        .then((res)=>{
         
          console.log(res);
          setSubmitButtonDisable(false);
          const user=res.user;
          console.log(user);
         
          navigate("/");
        })
        .catch((err)=>{
          setSubmitButtonDisable(false);
          setErrorMessage(err.message);
          console.log("error",err.message);
        });
        // console.log(values)
      }
      return (
        <div className='upperbox'>
          <div className='box'>
            <h1>Login</h1>
          </div>
                <div className='box'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter email address' id='email' required onChange={(event)=>setValues((prev)=>({...prev, email:event.target.value}))}/>
                </div>
                <div className='box'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter email address' id='password' required onChange={(event)=>setValues((prev)=>({...prev, password:event.target.value}))}/>
                </div>
                <h4 className='error'>{errorMessage}</h4>
            <div className='box'>
                <button type='submit' onClick={handleSubmit} disabled={submitButtonDisable}>Login</button>
            </div>
            <div className='box'>
                <h3>Already have an account? <Link to="/signup">Sign up</Link></h3>
            </div>
        </div>
        
   
  )}