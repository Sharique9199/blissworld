
import React, { useEffect, useRef, useState } from 'react'
import style from './PopUpCart.module.css'
import { RxCross2 } from 'react-icons/rx'
import { usePopUp } from '../../context/popUp'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/cart'
import toast from 'react-hot-toast'


const PopUpCart = () => {

  const [cart, setCart] = useCart()
  const [popUpData, setPopupData] = usePopUp();

  // console.log(popUpData);

  const closePopHandler = () => {
    setPopupData({
      image: "",
      title: '',
      desc: '',
      price: '',
      showPopUp: false,
      showBg: false

    })
  }
  //RedirectToBag

  const RedirectToBag = () => {
    const localCartData = JSON.parse(localStorage.getItem('blissworld_cart')) || [];
    // console.log("localCartData", localCartData);
    const isDataAvailable = localCartData.find((item) => {
      return item.title === popUpData.title;
    })
    // console.log('localggg', isDataAvailable);
    if (!isDataAvailable) {
      setCart([...cart, { ...popUpData, itemCount: 1 }]);
      localCartData.push({ ...popUpData, itemCount: 1 })
      localStorage.setItem('blissworld_cart', JSON.stringify(localCartData));
      toast.success('Cart added sucessfully!');
    }
    else {
      toast.error('Cart is already added!')

    }
    // window.scrollTo(0,0)
    // Navigate("/addToCart")  
  }
  // const appRef = useRef()
  //  useEffect(() => {
  //    setPopupData({ ...popUpData, bgHeight: appRef.current.clientHeight })
  //  }, [popUpData.bgHeight]);

  return (
    // <div ref={appRef}>
<>
      <div className={` ${style.animated}
      ${style.faster} ${style.fedIn} ${style.mainPopUpContainer}`}  >
      
        <div className={style.popupContainer}>

          <div className={`${style.crossIcon} ${style.fedOut}`}>
            
          {/* <div className={style.crossIcon}> */}
            < RxCross2 onClick={closePopHandler} style={{ cursor: "pointer" }} />
          </div>
          <div className={style.popUpDiv}>
            <div className={style.imgAndDesDiv}>
              <div className={style.imgDiv}>
                <img src={popUpData.image} alt="lemonImg" />
              </div>
              <div className={style.descDiv}>
                <h3>{popUpData.title}</h3>
                <p>{popUpData.desc}</p>
                <p>${popUpData.price}</p>
              </div>
            </div>
            <div className={style.bothBtnDiv}>
              <button onClick={closePopHandler}>Continue Shoping</button>
              <button onClick={RedirectToBag}>Add to Bag</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PopUpCart
