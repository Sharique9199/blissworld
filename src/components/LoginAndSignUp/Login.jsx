import { Container, Grid } from "@mui/material";
// import GoogleIcon from '@mui/icons-material/Google';
// import { signInWithPopup } from "firebase/auth";
// import {auth, provider} from '../firebase';
import { useNavigate } from "react-router";
// import TextField from '@mui/material/TextField';
import { useContext, useState } from "react";
// import "../App.css";
import React, { useRef } from 'react'
import { UserContext } from "../../context/AuthContext";
import style from './Login.module.css'

const Login = () => {
    const navigate = useNavigate();
    // const onLoginClick=()=>{
    //    signInWithPopup(auth, provider)
    //    .then((result)=>{
    //     console.log("RESULT",result);
    //     const userName=result.user.displayName;

    //     navigate("/home",{
    //         state: {
    //             userName,
    //         },
    //     });

    //    })
    //    .catch((error)=>{
    //     console.log("ERROR",error);

    //    });
    // }
    // const [email, setEmail]=useState("");
    // const [password, setPassword]=useState("");
    // const handleLogin=()=>{
    //     console.log(email,password);
    //     if(email==="asffgg@gmail.com" && password==="1234567"){
    //         navigate('/home');
    //     }
    //     else{
    //         alert('invalid email and password');
    //     }
    // }

    const usernameRef = useRef();
    const passwordRef = useRef();
    const [showValidUser, setShowValidUser] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const validateUser = (userInfo) => {
        const userList = JSON.parse(localStorage.getItem('userData'));
        const userFromLocalStorage = userList.find((user) => {
            return user.name === userInfo.name;
        })
        console.log(userFromLocalStorage)
        if (userFromLocalStorage) {
            setShowValidUser(false)
            if (userFromLocalStorage.password === userInfo.password) {
                setLoggedInUser(userFromLocalStorage)
                // alert("Login Khusi")
                navigate('/')

            } else {
                setShowPassword(true)
            }

        } else {
            setShowValidUser(true)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let userInfo = {};
        userInfo[usernameRef.current.name] = usernameRef.current.value;
        userInfo[passwordRef.current.name] = passwordRef.current.value;
        console.log(userInfo)
        validateUser(userInfo)


    }

    return (

        <div className={style.loginContainer}>
            {/* <Grid item lg={12}> */}
            <div className={style.formContainer}>
                <form onSubmit={handleSubmit} className={style.formSection}>
                    <h1>Login</h1>
                    <p>Please enter your e-mail and password:</p>
                    <label htmlFor="name">Username:</label>
                    <input type='text' name='name' id='' required ref={usernameRef} placeholder="Username"/>
                    <label htmlFor="password">Password:</label>
                    <input type='text' name='password' id='' required ref={passwordRef} placeholder="Password"/>
                    <button className={style.loginBtn}>Login</button>
                    <p>Don't have an account? <span>Create one</span></p>
                </form>


                {showValidUser && <><h4>you are not a user,please signup first</h4>
                    <button onClick={() => navigate('/signup')}>Signup</button></>}
                {showPassword && <h4>password doesn't match</h4>}
                {/* </div> */}
                {/* <TextField
             required
             id="outlined-requird"
             label="Email"
             type="email"
             onChange={(e)=>setEmail(e.target.value)}
        />
            <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <Button variant="contained" style={{marginTop:"5px", marginLeft:"60px"}} onClick={handleLogin}>Login</Button>
        */}
                {/* </Grid> */}

                {/* <Grid item>
           
                <button onClick={onLoginClick}
                style={{
                 
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "20px",
                    padding: '5px',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop:" 10px",
                }}> <GoogleIcon sx={{mr: 5}}/> Login with google</button>
               
            </Grid> */}
            </div>


        </div>
    )
}
export default Login;
