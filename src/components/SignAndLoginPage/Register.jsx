import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
// import "./Login.css";
import './Submit.css'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase';
import Layout from '../../Layout';




export const Register = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleSubmit = () => {
        if (!values.name || !values.email || !values.password) {
            setErrorMessage('Fill all the fields');
            return;
        }
        setErrorMessage("");
        setSubmitButtonDisable(true);
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((res) => {

                // console.log(res);
                setSubmitButtonDisable(false);
                const user = res.user;
                updateProfile(user, {
                    displayName: values.name,
                })
                navigate("/login");
            })
            .catch((err) => {
                setSubmitButtonDisable(false);
                setErrorMessage(err.message);
                console.log("error", err.message);
            });
        // console.log(values)
    }
    return (
        <Layout>
            <div className='loginSingUpContainer'>
            <div className='upperbox'>
                <div className='box'>
                    <h1>Sign Up</h1>
                </div>
                <div className='box'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' placeholder='Enter your name' id='name' required onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />
                </div>
                <div className='box'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter email address' id='email' required onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
                </div>
                <div className='box'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter your password' id='password' required onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))} />
                </div>
                <h4 className='error'>{errorMessage}</h4>
                <div className='box'>
                    <button type='submit' onClick={handleSubmit} disabled={submitButtonDisable}>Sign Up</button>
                </div>

                <div className='box'>
                    <h3>Already have an account? <Link to="/login">Login</Link></h3>
                </div>
            </div>
            </div>
        </Layout>

    )
}