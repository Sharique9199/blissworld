
import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../login/Profile.css';

export default function Profile(props) {

  const userName = JSON.parse(localStorage.getItem('userInfo'));

  const loginCondition = () => {
    props.stateCallBack();
  };
  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    props.stateCallBack();
  };

  return (
    <div className="profileBar">
      {userName ? (
        <div className="log-container">
           <h3 className='login-h3'>  <FaUser className="user-icon" />{userName}</h3>
          <hr className='profile-hr'/>
          <button className="logout-btn" onClick={logoutHandler}>Log Out</button>
        </div>
      ) : (
        <div className="log-container">
          <h3>Hello User!!</h3>
          <p>To access your Meesho account</p>
          <button className="SignUpBtn" onClick={loginCondition}>
            SignUp
          </button>
        </div>
      )}
    </div>
  );
}
