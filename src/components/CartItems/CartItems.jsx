import React, { useState } from 'react'
import style from '../../Page/AddToCart/AddToCart.module.css'
import { useCart } from '../../context/cart';
import toast, { LoaderIcon } from 'react-hot-toast';
import { MdOutlineAirlineSeatLegroomReduced } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const CartItems = ({ img, title, desc, price, itemCount }) => {
    console.log("itemcount", itemCount);
    const cartCountItems = itemCount;

    const [cart, setCart] = useCart();
    const [itemValue, setItemValue] = useState(cartCountItems);

    const navigate = useNavigate();
    console.log("remove cart",cart,title);
    

    //removeHandler
    const removeHandler = () => {

        const removeCart = cart.filter((item) => {
            return item.title !== title
        })
        console.log(removeCart,"23");
        setCart(removeCart);
        localStorage.setItem('blissworld_cart', JSON.stringify(removeCart));
        toast.success("Item removed successfully");
        navigate(0);
    }
    console.log(JSON.parse(localStorage.getItem('blissworld_cart')),"from local storage");

    //decrementHandler
    const decrementHandler = () => {
        itemValue > 1 && setItemValue(itemValue - 1);
        if (itemValue > 1) {
            const customCart = cart.map((item) => {
                if (item.title === title) {
                    return { ...item, itemCount: itemValue - 1 }
                }
                else {
                    return item;
                }
            })
            setCart(customCart);
            localStorage.setItem('blissworld_cart', JSON.stringify(customCart))
        }

    }
    //incrementHandler
    const incrementHandler = () => {
        itemValue < 10 && setItemValue(itemValue + 1)
        if (itemValue < 10) {
            const customCart = cart.map((item) => {
                if (item.title === title) {
                    return { ...item, itemCount: itemValue + 1 }
                }
                else {
                    return item;
                }
            })
            setCart(customCart);
            localStorage.setItem('blissworld_cart', JSON.stringify(customCart))
        }
    }

    return (
        <>
            <div className={style["payment_cart"]}>
                <div className={style["cart_items"]}>

                    <div className={style["cart_img_items"]}>
                        <img src={img} alt="" />
                    </div>
                    <div className={style["cart_details"]}>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <button className={style["item_price"]}> ${price}</button>
                    </div>
                    <div className={style["cart_quantity"]}>
                        <div>
                            <h2 className={style.dec} onClick={decrementHandler}>-</h2>
                            <h2 >{itemValue}</h2>
                            <h2 className={style.inc} onClick={incrementHandler}>+</h2>
                        </div>
                        <p id={style.remove} className={style.removeCart} onClick={removeHandler}>remove</p>
                    </div>
                    <div className={style["cart_price"]}>
                        <h3 className={style.price}>${itemValue * price}</h3>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CartItems
