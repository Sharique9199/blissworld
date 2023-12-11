
import './App.css';


import { Routes, Route } from 'react-router-dom'
import Home from './Page/Home/Home';
import SkinCare from './Page/SkinCare/SkinCare';
import BestSeller from './Page/BestSeller/BestSeller';
import BodyCare from './Page/BodyCare/BodyCare';
import SetKits from './Page/Set&Kits/SetKits';
import Sales from './Page/Sales/Sales';
import PageNotfound from './Page/PageNotFound/PageNotfound';
import PopUpCart from './Page/PopUpCart/PopUpCart';
import { usePopUp } from './context/popUp';
import BgBlur from './components/bgBlur/BgBlur';
import { useEffect, useRef, useState } from 'react';
import AddToCart from './Page/AddToCart/AddToCart';
import BagPopUp from './components/BagPopUp/BagPopUp';
import Checkout from './Page/Checkout/Checkout';
import Payment from './Page/Payment/Payment';
import { Header } from './components/Header/Header';
import {auth} from "./Firebase";

import DummyHome from './Page/DummyHome/DummyHome';
import Login from './components/LoginAndSignUp/Login';
import { SignUp } from './components/LoginAndSignUp/SignUp';
import { Register } from './components/SignAndLoginPage/Register';
import { Submit } from './components/SignAndLoginPage/Submit';
// import { SignIn } from './components/Login/SignIn';
// import { SignUp } from './components/Login/SignUp';
// import Login from './components/login/Login';
// import BagSideShow from './components/BagSideShow/BagSideShow';
// import {Home} from './Page/Home/Home'
// import {Header} from './components/Header/Header'
function App() {
   

  //firebase code
  const [userName,setUserName] = useState("");

  useEffect(()=>{
auth.onAuthStateChanged((user)=>{
  if(user){
    setUserName(user.displayName); 
  }
  console.log(user);
},[]);
  })


  const [popUpData, setPopUpData] = usePopUp();

  // console.log("App", popUpData);
  // console.log("window",window.offsetHeight);




  // console.log("hello", appRef.current?.clientHeight);
  return (
    <div>

    {popUpData.showPopUp && <PopUpCart />}
    {popUpData.showPaymentPop && <Payment/>}

      {popUpData.showBg && <BgBlur />}

      <Routes>
        <Route path='/' element={<Home userName={userName} />} />


        <Route path='/skincare' element={<SkinCare userName ={userName}/>} />
        <Route path="/bestseller" element={<BestSeller userName={userName}/>} />
        <Route path="/bodyhaircare" element={<BodyCare userName={userName}/>} />
        <Route path="/setkits" element={<SetKits userName={userName}/>} />
        <Route path="/sales" element={<Sales userName={userName}/>} />
        <Route path='/total-items' element={<AddToCart userName={userName} />} /> 


       

        <Route path='/sideshow' element={<BagPopUp userName={userName}/>} />
         <Route path='/checkout' element={<Checkout userName ={userName}/>} />
        <Route path='/payment' element={<Payment userName={userName}/>} />
        {/* <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/> */}
        <Route path='/signup' element={<Register/>}/>
       <Route path='/login' element={ <Submit/>}/>
       
        <Route path='*' element={<PageNotfound />} />
      </Routes> 
      {/* <BagSideShow/> 


      {/* <Login/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
    {/* <SignUp/> */}
    </div>

  );
}

export default App;
