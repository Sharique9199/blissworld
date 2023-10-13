
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
import { useEffect, useRef } from 'react';
import AddToCart from './Page/AddToCart/AddToCart';
import BagPopUp from './components/BagPopUp/BagPopUp';
import Checkout from './Page/Checkout/Checkout';
import Payment from './Page/Payment/Payment';
import { Header } from './components/Header/Header';
import { Login } from './Page/Login/Login';
import DummyHome from './Page/DummyHome/DummyHome';
// import BagSideShow from './components/BagSideShow/BagSideShow';
// import {Home} from './Page/Home/Home'
// import {Header} from './components/Header/Header'
function App() {
  const [popUpData, setPopUpData] = usePopUp();
  // console.log("App", popUpData);
  // console.log("window",window.offsetHeight);




  // console.log("hello", appRef.current?.clientHeight);
  return (
    <div>

      {popUpData.showPopUp && <PopUpCart />}

      {popUpData.showBg && <BgBlur />}

      <Routes>
        <Route path='/' element={<Home />} />
        
      
        <Route path='/skincare' element={<SkinCare />} />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route path="/bodyhaircare" element={<BodyCare />} />
        <Route path="/setkits" element={<SetKits />} />
        <Route path="/sales" element={<Sales />} />
        <Route path='/total-items' element={<AddToCart />} />
        {/* <Route path='/sideshow' element={<BagSideShow/>}/> */}

        {/* <Route path='/sideshow' element={<BagPopUp />} /> */}
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={<Payment/>}/>
  <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<PageNotfound />} />
      </Routes>
      {/* <BagSideShow/> */}

    </div>

  );
}

export default App;
