import React, { useEffect, useState } from 'react'
// import "./Login.css";
import { Link, useNavigate } from "react-router-dom"
import './Submit.css'
import { auth } from '../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../../context/AuthContext';
import loader from '../../images/loader.gif';


export const Submit = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  const [user, setAuth] = useAuth();

  const [values, setValues] = useState({

    email: "",
    password: ""
  })
  const handleSubmit = () => {
    if (!values.email || !values.password) {
      setErrorMessage('Fill all the fields');
      return;
    }
    // setErrorMessage("");
    // setSubmitButtonDisable(true);
    // signInWithEmailAndPassword(auth,values.email,values.password)
    // .then((res)=>{

    //   console.log(res);
    //   setSubmitButtonDisable(false);
    //   const user=res.user;
    //   console.log(user);

    //   navigate("/");
    // })
    // .catch((err)=>{
    //   setSubmitButtonDisable(false);
    //   setErrorMessage(err.message);
    //   console.log("error",err.message);
    // });
    // console.log(values)
    checkAuth(auth, values.email, values.password);
  }

  const checkAuth = async (auth, email, password) => {

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setAuth({
        username: response.user.displayName,
        email: response.user.email,
        token: response.user.accessToken
      });

      localStorage.setItem('blissworldAuth', JSON.stringify({
        username: response.user.displayName,
        email: response.user.email,
        token: response.user.accessToken
      }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (user?.token) {
      navigate('/');
    }
  })
  return (
    user.token ?
      (<img src={loader} />) :
      (
        <div className='upperbox'>
          <div className='box'>
            <h1>Login</h1>
          </div>
          <div className='box'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter email address' id='email' required onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
          </div>
          <div className='box'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter email address' id='password' required onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))} />
          </div>
          <h4 className='error'>{errorMessage}</h4>
          <div className='box'>
            <button type='submit' onClick={handleSubmit} disabled={submitButtonDisable}>Login</button>
          </div>
          <div className='box'>
            <h3>Already have an account? <Link to="/signup">Sign up</Link></h3>
          </div>
        </div>
      )
  )
}