import React, { useState } from 'react';
import '../login/Profile.css';
import firebase from 'firebase/app';
export default function SignInForm(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const userInputHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const responseSignup = await fetch(
      "https://meesho-d82c7-default-rtdb.firebaseio.com/userdata.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          userEmail: email,
          userpassword: password,
        }),
      }
    );

    if (userName !== '' && password !== '' && email !== '') {
      const storeToLocal = {
        userName,
        email,
        password,
      };

      if (props.usersData && props.usersData.some((info) => info.userName === userName || info.email === email)) {
        props.setInfoExist(true);
        return;
      } else {
        // Call the setHome function passed as a prop to update the 'home' state in the ParentComponent
        if (props.setHome) {
          props.setHome(true);
        }
      }
    }

    setUserName('');
    setPassword('');
    setEmail('');
    // props.flagSet(true); // Set the flag state to true after successful form submission
  };

  return (
    <>
      <div className="SignUp-container">
        <img
          src="https://images.meesho.com/images/marketing/1661417516766.webp"
          alt="sign up img"
          style={{ height: "auto", width: '400px' }}
        />
        <form className="SignUp" onSubmit={submitHandler}>
          <label htmlFor="">User Name:</label>
          <input type="text" placeholder="Username" value={userName} name="name" onChange={userInputHandler} />
          <label htmlFor="">Email Id:</label>
          <input type="email" placeholder="Email" value={email} name="email" onChange={emailInputHandler} />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" value={password} name="password" onChange={passwordInputHandler} />
          <button type="submit">Sign Up</button>
        </form>
        <button className='dontHaveAccBtn' onClick={props.toggleForm}>Have an account already?</button>
      </div>
    </>
  );
}









