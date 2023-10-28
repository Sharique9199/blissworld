import React, { useRef } from 'react'
import styles from './SignUp.module.css';
import { useNavigate } from "react-router";

export const SignUp=()=>{
    const navigate=useNavigate();
    const userName=useRef();
    const Name=useRef();
    const userEmail=useRef();
    const userPassword=useRef();
    

  

    const saveUser=(user)=>{
        const userData=JSON.parse(localStorage.getItem("userData")) ;
        console.log("userData",userData);
        if(userData){
            userData.push(user)
            localStorage.setItem("userData",JSON.stringify(userData));
       
        }else{
           
            let userList=[];
            userList.push(user)
            localStorage.setItem("userData",JSON.stringify(userList));
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let userInfo={};
        userInfo[userName.current.name]=userName.current.value;
        userInfo[Name.current.name]=Name.current.value;
        userInfo[userEmail.current.name]=userEmail.current.value;
        userInfo[userPassword.current.name]=userPassword.current.value;
        
        
        console.log(userInfo);
         saveUser(userInfo);
         navigate('/login')

    }
    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Register</h1>
                <p>Please  fill in the information below:</p>
            <label htmlFor="username">Username</label>
                <input type='text' name='username' placeholder='Enter username' ref={userName} required/>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' ref={Name} required/>
                <label htmlFor="email">Email</label>
                <input type='email' name='email' placeholder='Enter Your Email' ref={userEmail} required/>
                <label htmlFor="password">Password</label>
                <input type='password' name='password' placeholder='Enter Password' ref={userPassword} required/>
                {/* <label htmlFor="mobile">Mobile No</label>
                <input type='number' name='mobile' placeholder='Enter Mobile No' ref={userMobile} required/>
                <label htmlFor="address">Address</label>
                <input type='text' name='address' placeholder='Enter Address' ref={userAddress} required/> */}
               <button className={styles.btn}>Create my Account</button>
               <p>By creating an account, you agree to our <span>terms</span> and <span>privacy policy</span>.</p>
            </form>
        </div>
    )
}
