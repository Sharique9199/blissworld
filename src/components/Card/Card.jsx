import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import style from './Card.module.css'
import { usePopUp } from '../../context/popUp'
import { useCart } from '../../context/cart';
import toast from 'react-hot-toast'


let Card = ({ img, title, desc, price }) => {

    const [popUpData, setPopupData] = usePopUp();
    const [cart, setCart] = useCart();
    const [btnDisable, setBtnDisable] = useState(true);

    //CartClickHAndler
    const cartClickHandler = () => {
        setPopupData(
            {
                image: img,
                title,
                desc,
                price,
                showPopUp: true,
                showBg: true
            })
    }

    //addToBagHandler
    const addToBagHandler = (e) => {
        e.stopPropagation();
        const localCartData = JSON.parse(localStorage.getItem('blissworld_cart')) || [];
        console.log("localCartData",localCartData);
        const isDataAvailable = localCartData.findIndex((item) => {
            return item.title === title;
        })
        console.log('localggg', isDataAvailable);
        if (isDataAvailable === -1) {
            setCart([...cart, { img, title, desc, price,itemCount:1}]);
            localCartData.push({ img, title, desc, price,itemCount:1 })
            localStorage.setItem('blissworld_cart', JSON.stringify(localCartData));
            toast.success('Cart added sucessfully!');
        }
        else {
            toast.error('Cart is already added!')
            setBtnDisable(false)
        }
    }
    return (
        < >
            <div className={style.singleCart} onClick={cartClickHandler}>
                <div className={style.imageCard}>
                    <img src={img} alt="" />
                </div>
                <p className={style.iconHeart}><AiFillHeart /> <AiFillHeart /> <AiFillHeart /> <AiFillHeart /> <AiFillHeart /></p>
                {
                    <h3>
                        {title.length < 35 ? title : `${title.substring(0, 31)}....`}
                    </h3>
                }
                {/* <h3>{title}</h3> */}
                <p>{desc}</p>
               {btnDisable &&  <button onClick={addToBagHandler}>Add to bag ${price}</button>}
            </div>
        </>


    )
}
export default Card;